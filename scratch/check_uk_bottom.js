const fs = require('fs');
const content = fs.readFileSync('app/countries/uk/page.tsx', 'utf8');
const lines = content.split('\n');
console.log("Total lines in UK page:", lines.length);
for (let i = lines.length - 80; i < lines.length; i++) {
  console.log(`${i+1}: ${lines[i].slice(0, 100)}`);
}

