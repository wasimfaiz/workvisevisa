const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const src = 'C:\\Users\\win\\.gemini\\antigravity-ide\\brain\\b56f9add-6a3a-4199-b448-d007c106f904\\south_korea_work_visa_guide_1793517642729.jpg';
const destJpg = path.join(process.cwd(), 'public', 'images', 'south-korea-work-visa-guide.jpg');
const destWebp = path.join(process.cwd(), 'public', 'images', 'south-korea-work-visa-guide.webp');

async function processImage() {
  fs.copyFileSync(src, destJpg);
  console.log('Copied JPG to:', destJpg);

  await sharp(src)
    .webp({ quality: 85 })
    .toFile(destWebp);
  console.log('Generated WebP at:', destWebp);
}

processImage().catch(console.error);
