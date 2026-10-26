const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');
const matches = [...content.matchAll(/["']?id["']?\s*:\s*["']([^"']+)["']/g)];
console.log('Total blogs found:', matches.length);
matches.forEach(m => console.log(m[1]));
