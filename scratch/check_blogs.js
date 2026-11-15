const fs = require('fs');
const content = fs.readFileSync('./lib/data.ts', 'utf8');

const regex = /id:\s*['"](blog-\d+)['"],\s*title:\s*['"]([^'"]+)['"],\s*slug:\s*['"]([^'"]+)['"]/g;
let match;
const list = [];
while ((match = regex.exec(content)) !== null) {
  list.push({ id: match[1], title: match[2], slug: match[3] });
}

console.log(`Total blogs: ${list.length}`);
list.slice(-15).forEach(b => console.log(`${b.id}: ${b.title} (${b.slug})`));

