const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');
const lines = content.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('blog') && (l.includes('export') || l.includes('const') || l.includes('['))) {
    console.log(`Line ${idx + 1}: ${l.slice(0, 100)}`);
  }
});
