const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

['blog-12', 'blog-15', 'blog-1', 'blog-2'].forEach(id => {
  const idx = content.indexOf(id);
  if (idx !== -1) {
    console.log(`${id} found around index ${idx}:`);
    console.log(content.slice(idx - 20, idx + 200));
  } else {
    console.log(`${id} completely not found`);
  }
});

