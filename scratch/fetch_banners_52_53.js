const https = require('https');
const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

// Curated high quality Unsplash photos:
// Qatar: Doha modern architecture / West Bay skyline / industrial port
// France: Paris / French architectural cityscape / professional European engineering
const imagesToFetch = [
  {
    name: 'qatar-work-visa-guide.webp',
    // Doha modern architectural skyline / business district
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop',
    fallbackUrl: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'france-work-visa-guide.webp',
    // France European architectural cityscape / modern Paris commercial hub
    url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop',
    fallbackUrl: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1600&auto=format&fit=crop'
  }
];

function downloadAndConvert(item) {
  return new Promise((resolve, reject) => {
    const destPath = path.join('public', 'images', item.name);
    const tempPath = path.join('scratch', `temp_${item.name}.jpg`);

    const file = fs.createWriteStream(tempPath);
    https.get(item.url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (res2) => {
          res2.pipe(file);
          file.on('finish', () => {
            file.close(() => processFile());
          });
        }).on('error', reject);
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => processFile());
      });
    }).on('error', reject);

    function processFile() {
      sharp(tempPath)
        .resize(1200, 675, { fit: 'cover', position: 'center' })
        .webp({ quality: 85 })
        .toFile(destPath)
        .then(info => {
          console.log(`Converted ${item.name}: ${info.width}x${info.height}, size: ${(info.size/1024).toFixed(1)} KB`);
          try { fs.unlinkSync(tempPath); } catch (e) {}
          resolve();
        })
        .catch(reject);
    }
  });
}

async function run() {
  for (const img of imagesToFetch) {
    try {
      await downloadAndConvert(img);
    } catch (err) {
      console.error(`Error processing ${img.name}:`, err);
    }
  }
}

run();

