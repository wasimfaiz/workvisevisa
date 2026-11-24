const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const b13Idx = content.indexOf('id: "blog-13"');
console.log("blog-13 snippet:");
console.log(content.slice(b13Idx, b13Idx + 450));

const b20Idx = content.indexOf('id: "blog-20"');
console.log("\nblog-20 snippet:");
console.log(content.slice(b20Idx, b20Idx + 450));

