const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

// Find all occurrences of id: ...
const allIds = [];
const idRegex = /["']?id["']?\s*:\s*["'](blog-\d+)["']/g;
let m;
while ((m = idRegex.exec(content)) !== null) {
  allIds.push({ id: m[1], pos: m.index });
}

console.log("Found IDs count:", allIds.length);

const results = {};
for (let i = 0; i < allIds.length; i++) {
  const current = allIds[i];
  const nextPos = (i + 1 < allIds.length) ? allIds[i + 1].pos : content.lastIndexOf('];');
  const slice = content.substring(current.pos, nextPos);
  
  const slugMatch = slice.match(/["']?slug["']?\s*:\s*["']([^"']+)["']/);
  const titleMatch = slice.match(/["']?title["']?\s*:\s*["']([^"']+)["']/);
  
  results[current.id] = {
    slug: slugMatch ? slugMatch[1] : null,
    title: titleMatch ? titleMatch[1] : null
  };
}

const interesting = ["blog-11", "blog-12", "blog-13", "blog-14", "blog-15", "blog-22", "blog-23", "blog-26", "blog-38", "blog-40", "blog-41", "blog-42", "blog-49", "blog-50", "blog-51"];
interesting.forEach(id => {
  console.log(`${id}: ${results[id] ? results[id].slug : 'NOT FOUND'}`);
});

