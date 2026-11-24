const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');
const idx1 = content.indexOf('id: "blog-1"');
console.log(content.slice(idx1, idx1 + 400));

