const fs = require('fs');

const content = fs.readFileSync('lib/data.ts', 'utf8');
const regex = /id:\s*["'](blog-\d+)["'][\s\S]*?title:\s*["']([^"']+)["'][\s\S]*?slug:\s*["']([^"']+)["']/g;
let match;
const blogs = [];
while ((match = regex.exec(content)) !== null) {
  blogs.push({ id: match[1], title: match[2], slug: match[3] });
}
console.log('Total blogs in data.ts:', blogs.length);
blogs.forEach(b => console.log(b.id, '->', b.slug, ':', b.title));
