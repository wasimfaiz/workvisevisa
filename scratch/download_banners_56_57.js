const https = require('https');
const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const downloads = [
  {
    name: 'germany-work-visa-guide.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Frankfurt_Skyline_2022.jpg',
    temp: 'scratch/frankfurt_2022.jpg'
  },
  {
    name: 'usa-work-visa-guide.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Skyline_of_Manhattan.jpg',
    temp: 'scratch/manhattan_skyline.jpg'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const options = {
      headers: {
        'User-Agent': 'WorkWiseVisaBot/1.0 (https://www.workwisevisa.com; contact@workwisevisa.com)'
      }
    };
    https.get(url, options, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, options, res2 => {
          res2.pipe(file);
          file.on('finish', () => file.close(resolve));
        }).on('error', reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });
}

async function run() {
  for (const item of downloads) {
    console.log(`Downloading ${item.name} from ${item.url}...`);
    await downloadFile(item.url, item.temp);
    const destPath = path.join('public', 'images', item.name);
    
    const metadata = await sharp(item.temp).metadata();
    console.log(`Downloaded ${item.temp}: ${metadata.width}x${metadata.height}`);

    await sharp(item.temp)
      .resize(1200, 675, { fit: 'cover', position: 'center' })
      .webp({ quality: 85 })
      .toFile(destPath);

    const info = await sharp(destPath).metadata();
    const stats = fs.statSync(destPath);
    console.log(`Generated ${destPath}: ${info.width}x${info.height}, ${(stats.size / 1024).toFixed(1)} KB`);
  }
  console.log("All banner conversions completed successfully!");
}

run().catch(err => {
  console.error("Error:", err);
  process.exit(1);
});

