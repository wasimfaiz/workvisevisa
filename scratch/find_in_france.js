const fs = require('fs');
let content = fs.readFileSync('scratch/france_blog_content.md', 'utf8');

const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('poland') || l.includes('romania')) {
    console.log(`Line ${i+1}: ${l}`);
  }
});

