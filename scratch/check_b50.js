const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');
const b50Match = content.match(/id:\s*["']blog-50["'][\s\S]*?(?=id:\s*["']blog-51["'])/);
if (b50Match) {
  const codeBlocks = b50Match[0].match(/```[\s\S]*?```/g);
  console.log("Found in blog-50:", codeBlocks);
} else {
  console.log("blog-50 not found");
}

