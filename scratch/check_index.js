const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

console.log("IndexOf 'blog-50':", content.indexOf("blog-50"));
console.log("IndexOf 'blog-51':", content.indexOf("blog-51"));

