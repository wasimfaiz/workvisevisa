const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, '..', 'lib', 'data.ts'), 'utf8');

const matches = [...text.matchAll(/["']?id["']?\s*:\s*["'](blog-\d+)["']/g)];
console.log('Total id matches:', matches.length);

const slugMatches = [...text.matchAll(/["']?slug["']?\s*:\s*["']([^"']+)["']/g)];
console.log('Total slug matches:', slugMatches.length);

const allSlugs = new Set();
slugMatches.forEach(m => allSlugs.add(m[1]));
console.log('Unique slugs in data.ts:', allSlugs.size);
for (const s of allSlugs) {
  console.log(s);
}
