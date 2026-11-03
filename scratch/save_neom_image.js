const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcPath = 'C:\\Users\\win\\.gemini\\antigravity-ide\\brain\\b56f9add-6a3a-4199-b448-d007c106f904\\neom_project_recruitment_guide_1793720211205.jpg';
const destWebp = path.join(process.cwd(), 'public', 'images', 'neom-project-recruitment-guide.webp');

async function processImage() {
  if (!fs.existsSync(srcPath)) {
    console.error('Source image does not exist:', srcPath);
    return;
  }
  
  // Convert directly to webp with high quality
  await sharp(srcPath)
    .webp({ quality: 85 })
    .toFile(destWebp);
  console.log('Saved WebP to:', destWebp);
}

processImage().catch(console.error);
