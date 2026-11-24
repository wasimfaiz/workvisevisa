const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const b50Pos = content.indexOf('"blog-50"');
const b51Pos = content.indexOf('"blog-51"');

console.log("b50Pos:", b50Pos, "b51Pos:", b51Pos);

const b50Snippet = content.substring(b50Pos, b51Pos);
const b51Snippet = content.substring(b51Pos);

const b50Blocks = b50Snippet.match(/```[\s\S]*?```/g) || [];
console.log("b50Blocks count:", b50Blocks.length);
b50Blocks.forEach((b, i) => console.log(`B50 [${i}]:\n${b}\n`));

const b51Blocks = b51Snippet.match(/```[\s\S]*?```/g) || [];
console.log("b51Blocks count:", b51Blocks.length);
b51Blocks.forEach((b, i) => console.log(`B51 [${i}]:\n${b}\n`));

