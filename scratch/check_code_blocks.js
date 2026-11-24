const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const b50Index = content.indexOf("id: 'blog-50'");
const b51Index = content.indexOf("id: 'blog-51'");

if (b50Index !== -1 && b51Index !== -1) {
  const b50Text = content.substring(b50Index, b51Index);
  const b51Text = content.substring(b51Index);

  console.log("=== Blog 50 Code Blocks ===");
  const b50Blocks = b50Text.match(/```[\s\S]*?```/g) || [];
  b50Blocks.forEach((cb, i) => console.log(`B50 [${i}]:\n${cb}\n---`));

  console.log("=== Blog 51 Code Blocks ===");
  const b51Blocks = b51Text.match(/```[\s\S]*?```/g) || [];
  b51Blocks.forEach((cb, i) => console.log(`B51 [${i}]:\n${cb}\n---`));
}

