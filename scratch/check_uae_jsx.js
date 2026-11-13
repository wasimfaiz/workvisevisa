const fs = require('fs');
const content = fs.readFileSync('app/countries/uae/page.tsx', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('export default function')) {
    console.log(`export default function at line ${i+1}`);
    console.log(lines.slice(i, i + 80).join('\n'));
    break;
  }
}

