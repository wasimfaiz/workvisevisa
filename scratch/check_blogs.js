const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');
const idMatches = content.match(/id:\s*"([^"]+)"/g) || [];
console.log('ID matches count:', idMatches.length);
console.log('Sample IDs:', idMatches.slice(0, 35));

const slugMatches = content.match(/slug:\s*"([^"]+)"/g) || [];
console.log('Slug matches count:', slugMatches.length);
console.log('Sample Slugs:', slugMatches.slice(0, 35));
