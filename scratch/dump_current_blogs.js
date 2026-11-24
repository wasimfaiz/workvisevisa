const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const b50Pos = content.indexOf('"blog-50"');
const b51Pos = content.indexOf('"blog-51"');
const endPos = content.lastIndexOf('];');

const b50Text = content.substring(b50Pos, b51Pos);
const b51Text = content.substring(b51Pos, endPos);

fs.writeFileSync('scratch/b50_current.txt', b50Text, 'utf8');
fs.writeFileSync('scratch/b51_current.txt', b51Text, 'utf8');

console.log("b50 length:", b50Text.length, "b51 length:", b51Text.length);

