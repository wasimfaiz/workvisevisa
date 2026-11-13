const fs = require('fs');
const content = fs.readFileSync('app/countries/uae/page.tsx', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(150, 260).join('\n'));

