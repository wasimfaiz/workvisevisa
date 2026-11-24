const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

['blog-12', 'blog-15', 'blog-1', 'blog-2', 'blog-50'].forEach(id => {
  const m = content.match(new RegExp(`"id":\\s*"${id}"[\\s\\S]*?"slug":\\s*"([^"]+)"`));
  console.log(`${id}: ${m ? m[1] : 'not found'}`);
});

