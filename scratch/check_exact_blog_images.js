const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

['blog-13', 'blog-20', 'blog-28', 'blog-52', 'blog-54'].forEach(id => {
  const m = content.match(new RegExp(`(?:id:\\s*["']${id}["']|"id":\\s*"${id}")[\\s\\S]*?(?:image:\\s*["']([^"']+)["']|"image":\\s*"([^"]+)")`));
  if (m) {
    console.log(`${id} image: ${m[1] || m[2]}`);
  } else {
    console.log(`${id} image not found`);
  }
});

