const https = require('https');
const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const imagesToFetch = [
  {
    name: 'oman-work-visa-guide.webp',
    // Muscat architectural landscape / Sultan Qaboos Grand Mosque / modern business port
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop',
    fallbackUrl: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'uk-skilled-worker-visa-guide.webp',
    // London modern architecture / Canary Wharf / UK corporate skyline
    url: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1600&auto=format&fit=crop',
    fallbackUrl: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=1600&auto=format&fit=crop'
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

