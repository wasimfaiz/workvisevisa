const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const matches = [...content.matchAll(/"id":\s*"([^"]+)"[\s\S]*?"slug":\s*"([^"]+)"/g)];
console.log(`Parsed ${matches.length} blogs:`);
const slugMap = {};
matches.forEach(m => {
  slugMap[m[1]] = m[2];
});
console.log(JSON.stringify(slugMap, null, 2));

