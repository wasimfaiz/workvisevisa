const fs = require('fs');
const content = fs.readFileSync('./lib/data.ts', 'utf8');
const lines = content.split('\n');

const rawBlogLines = lines.slice(774, 7128);
const blogs = [];
let currentBlog = null;

for (let i = 0; i < rawBlogLines.length; i++) {
  const line = rawBlogLines[i].trim();
  const idMatch = line.match(/^id:\s*["']([^"']+)["']/);
  if (idMatch) {
    if (currentBlog) blogs.push(currentBlog);
    currentBlog = { id: idMatch[1] };
  }
  const titleMatch = line.match(/^title:\s*["']([^"']+)["']/);
  if (titleMatch && currentBlog) currentBlog.title = titleMatch[1];
  const dateMatch = line.match(/^date:\s*["']([^"']+)["']/);
  if (dateMatch && currentBlog) currentBlog.date = dateMatch[1];
  const slugMatch = line.match(/^slug:\s*["']([^"']+)["']/);
  if (slugMatch && currentBlog) currentBlog.slug = slugMatch[1];
  const catMatch = line.match(/^category:\s*["']([^"']+)["']/);
  if (catMatch && currentBlog) currentBlog.category = catMatch[1];
}
if (currentBlog) blogs.push(currentBlog);

console.log(`Total blogs: ${blogs.length}`);
blogs.forEach(b => console.log(`${b.id} | ${b.date} | ${b.category} | ${b.title}`));

