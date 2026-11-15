const fs = require('fs');
const content = fs.readFileSync('./lib/data.ts', 'utf8');

const m11 = content.match(/id:\s*["']blog-11["'][\s\S]*?content:\s*["']([\s\S]*?)["'],\s*image/);
console.log('blog-11 content chars:', m11 ? m11[1].length : 'not matched');

const m32 = content.match(/id:\s*["']blog-32["'][\s\S]*?content:\s*["']([\s\S]*?)["'],\s*image/);
console.log('blog-32 content chars:', m32 ? m32[1].length : 'not matched');

