const fs = require('fs');
let content = fs.readFileSync('lib/data.ts', 'utf8');

const oldB13Img = 'image: "https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=800&q=80"';
const newB13Img = 'image: "/images/qatar-work-visa-guide.webp"';

const oldB20Img = 'image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"';
const newB20Img = 'image: "/images/oman-work-visa-guide.webp"';

if (!content.includes(oldB13Img)) {
  console.error("Old b13 image string not found!");
  process.exit(1);
}
if (!content.includes(oldB20Img)) {
  console.error("Old b20 image string not found!");
  process.exit(1);
}

content = content.replace(oldB13Img, newB13Img);
content = content.replace(oldB20Img, newB20Img);

fs.writeFileSync('lib/data.ts', content, 'utf8');
console.log("Successfully updated blog-13 and blog-20 images in lib/data.ts!");

