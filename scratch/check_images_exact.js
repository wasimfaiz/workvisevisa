const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const b13Idx = content.indexOf('id: "blog-13"');
console.log("b13 image line:", content.slice(b13Idx, b13Idx + 700).match(/image:\s*["'][^"']+["']/)[0]);

const b20Idx = content.indexOf('id: "blog-20"');
console.log("b20 image line:", content.slice(b20Idx, b20Idx + 700).match(/image:\s*["'][^"']+["']/)[0]);

