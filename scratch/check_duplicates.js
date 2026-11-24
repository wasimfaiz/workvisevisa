const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

// Let's search for existing blogs on UAE, Bahrain, Qatar, France
const uaeBlogs = [];
const bahrainBlogs = [];
const qatarBlogs = [];
const europeBlogs = [];

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
  const title = titleMatch ? titleMatch[1] : '';
  const slug = slugMatch ? slugMatch[1] : '';

  if (/uae|dubai/i.test(title)) uaeBlogs.push({ id: current.id, title, slug });
  if (/bahrain/i.test(title)) bahrainBlogs.push({ id: current.id, title, slug });
  if (/qatar/i.test(title)) qatarBlogs.push({ id: current.id, title, slug });
  if (/france/i.test(title)) europeBlogs.push({ id: current.id, title, slug });
}

console.log("=== Existing UAE/Dubai Blogs ===");
uaeBlogs.forEach(b => console.log(`${b.id}: ${b.title}`));

console.log("\n=== Existing Bahrain Blogs ===");
bahrainBlogs.forEach(b => console.log(`${b.id}: ${b.title}`));

console.log("\n=== Existing Qatar Blogs ===");
qatarBlogs.forEach(b => console.log(`${b.id}: ${b.title}`));

console.log("\n=== Existing France Blogs ===");
europeBlogs.forEach(b => console.log(`${b.id}: ${b.title}`));

