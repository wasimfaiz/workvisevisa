const fs = require('fs');
const content = fs.readFileSync('app/countries/kuwait/page.tsx', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('{/* Hero Section */}')) {
    console.log(`Hero starts at line ${i+1}`);
    console.log(lines.slice(i, i + 80).join('\n'));
    break;
  }
}

