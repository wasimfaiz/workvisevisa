const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, '..', 'lib', 'data.ts'), 'utf8');

// Match every blog object in data.ts
// Usually each blog has `id: 'blog-XX'` and `slug: '...'`
const regex = /id:\s*['"](blog-\d+)['"][\s\S]*?slug:\s*['"]([^'"]+)['"]/g;
let m;
const blogs = [];
while ((m = regex.exec(text)) !== null) {
  blogs.push({ id: m[1], slug: m[2] });
}

console.log('Total blogs matched with id and slug:', blogs.length);
blogs.forEach(b => console.log(`${b.id}: ${b.slug}`));

