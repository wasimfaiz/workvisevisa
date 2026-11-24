const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function downloadAndConvert(url, destWebp) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadAndConvert(res.headers.location, destWebp).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Failed to fetch image: status ' + res.statusCode));
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', async () => {
        try {
          const buffer = Buffer.concat(chunks);
          await sharp(buffer)
            .resize(1200, 675, { fit: 'cover', position: 'center' })
            .webp({ quality: 85 })
            .toFile(destWebp);
          console.log('Saved webp:', destWebp, 'size:', fs.statSync(destWebp).size);
          resolve();
        } catch (err) {
          reject(err);
        }
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

// Dubai & UAE: Ultra-modern Dubai architectural skyline with Burj Khalifa & Emirates towers
const uaeUrl = 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85';
const uaeDest = path.join(__dirname, '..', 'public', 'images', 'uae-employment-visa-guide.webp');

// Bahrain: Modern Manama skyline with Bahrain World Trade Center & financial harbor
const bahrainUrl = 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&w=1600&q=85';
const bahrainDest = path.join(__dirname, '..', 'public', 'images', 'bahrain-work-visa-guide.webp');

async function main() {
  console.log('Downloading UAE image...');
  await downloadAndConvert(uaeUrl, uaeDest);
  console.log('Downloading Bahrain image...');
  await downloadAndConvert(bahrainUrl, bahrainDest);
  console.log('Done!');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});

