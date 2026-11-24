const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const b13Idx = content.indexOf('id: "blog-13"');
const b13ContentIdx = content.indexOf('content:', b13Idx);
console.log("b13 headers:\n", content.slice(b13Idx, b13ContentIdx));

const b20Idx = content.indexOf('id: "blog-20"');
const b20ContentIdx = content.indexOf('content:', b20Idx);
console.log("\nb20 headers:\n", content.slice(b20Idx, b20ContentIdx));

