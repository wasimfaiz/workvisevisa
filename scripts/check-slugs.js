const fs = require('fs');
const content = fs.readFileSync('data/locations.ts', 'utf8');
const regex = /slug:\s*"([^"]+)"/g;
let match;
const slugs = [];
while ((match = regex.exec(content)) !== null) {
  slugs.push(match[1]);
}
console.log('All slugs in data/locations.ts:', slugs);
