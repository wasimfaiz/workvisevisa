const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');
const m30 = content.match(/"id":\s*"blog-30"[\s\S]*?"slug":\s*"([^"]+)"/);
console.log('blog-30 match:', m30 ? m30[1] : 'NOT FOUND');
