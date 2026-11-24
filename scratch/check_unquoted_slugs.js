const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const regex = /(?:id:\s*["']([^"']+)["']|"id":\s*"([^"]+)")[\s\S]*?(?:slug:\s*["']([^"']+)["']|"slug":\s*"([^"]+)")/g;
let m;
const allSlugs = {};
while ((m = regex.exec(content)) !== null) {
  const id = m[1] || m[2];
  const slug = m[3] || m[4];
  allSlugs[id] = slug;
}
console.log("Found total blogs:", Object.keys(allSlugs).length);
console.log("blog-12 slug:", allSlugs['blog-12']);
console.log("blog-15 slug:", allSlugs['blog-15']);
console.log("blog-1 slug:", allSlugs['blog-1']);

