const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const idRegex = /["']?id["']?\s*:\s*["'](blog-\d+)["']/g;
const allIds = [];
let m;
while ((m = idRegex.exec(content)) !== null) {
  allIds.push({ id: m[1], pos: m.index });
}

for (let i = 0; i < allIds.length; i++) {
  const current = allIds[i];
  const nextPos = (i + 1 < allIds.length) ? allIds[i + 1].pos : content.lastIndexOf('];');
  const slice = content.substring(current.pos, nextPos);
  
  const titleMatch = slice.match(/["']?title["']?\s*:\s*["']([^"']+)["']/);
  const slugMatch = slice.match(/["']?slug["']?\s*:\s*["']([^"']+)["']/);
  const dateMatch = slice.match(/["']?date["']?\s*:\s*["']([^"']+)["']/);
  
  console.log(`${current.id} (${dateMatch ? dateMatch[1] : 'No date'}): ${titleMatch ? titleMatch[1].substring(0, 70) : 'No title'}`);
}

