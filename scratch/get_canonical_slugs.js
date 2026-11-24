const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

// Match all id and slug pairs
const regex = /id:\s*['"](blog-\d+)['"],[\s\S]*?slug:\s*['"]([^'"]+)['"]/g;
let m;
const blogs = {};
while ((m = regex.exec(content)) !== null) {
  blogs[m[1]] = m[2];
}

console.log("Total blogs parsed:", Object.keys(blogs).length);

// Print specific blogs we want to link to:
const targets = [
  "blog-11", "blog-12", "blog-13", "blog-14", "blog-15", "blog-22", "blog-23", "blog-26", "blog-38", "blog-41", "blog-49", "blog-50", "blog-51"
];

targets.forEach(id => {
  console.log(`${id}: ${blogs[id]}`);
});

