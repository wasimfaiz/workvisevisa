const fs = require('fs');
const pageCode = fs.readFileSync('app/blogs/[slug]/page.tsx', 'utf8');

const lines = pageCode.split('\n');
for (let i = 500; i < 570; i++) {
  if (lines[i]) console.log(`${i + 1}: ${lines[i]}`);
}

