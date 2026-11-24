const fs = require('fs');

const content = fs.readFileSync('lib/data.ts', 'utf8');
const lines = content.split('\n');

let currentId = '';
let currentTitle = '';
let currentImage = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const idMatch = line.match(/["']?id["']?:\s*["']([^"']+)["']/);
  if (idMatch) currentId = idMatch[1];
  const titleMatch = line.match(/["']?title["']?:\s*["']([^"']+)["']/);
  if (titleMatch) currentTitle = titleMatch[1];
  const imgMatch = line.match(/["']?image["']?:\s*["']([^"']+)["']/);
  if (imgMatch) {
    currentImage = imgMatch[1];
    if (currentTitle.toLowerCase().includes('oman') || currentTitle.toLowerCase().includes('qatar') || currentId.toLowerCase().includes('oman') || currentId.toLowerCase().includes('qatar')) {
      console.log(`ID: ${currentId} | Title: ${currentTitle.slice(0, 50)} | Image: ${currentImage}`);
    }
  }
}

