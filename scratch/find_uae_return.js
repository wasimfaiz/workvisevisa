const fs = require('fs');
const content = fs.readFileSync('app/countries/uae/page.tsx', 'utf8');
const lines = content.split('\n');

for (let i = 100; i < lines.length; i++) {
  if (lines[i].includes('return (') && lines[i-1]?.includes('};')) {
    console.log(`return ( found on line ${i+1}`);
    console.log(lines.slice(i, i + 80).join('\n'));
    break;
  }
}

