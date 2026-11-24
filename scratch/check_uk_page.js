const fs = require('fs');
const content = fs.readFileSync('app/countries/uk/page.tsx', 'utf8');
const lines = content.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('/blogs/')) {
    console.log(`Line ${idx + 1}: ${l.slice(0, 120)}`);
  }
});

