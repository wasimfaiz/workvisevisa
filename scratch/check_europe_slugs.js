const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

['blog-2', 'blog-16', 'blog-24', 'blog-43', 'blog-44'].forEach(id => {
  const p = content.indexOf(`"${id}"`);
  if (p !== -1) {
    const slice = content.substring(p, p + 500);
    const slug = slice.match(/slug["']?\s*:\s*['"]([^'"]+)['"]/);
    console.log(`${id} slug:`, slug ? slug[1] : 'NOT FOUND');
  } else {
    console.log(`${id} ID NOT FOUND`);
  }
});
