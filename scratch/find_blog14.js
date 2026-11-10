const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const startIdx = content.indexOf('id: "blog-14"');
if (startIdx === -1) {
  console.log('blog-14 not found');
  process.exit(1);
}

// Find preceding '{'
const braceIdx = content.lastIndexOf('{', startIdx);
console.log('Starts at brace:', braceIdx);

// The next blog is blog-9 or whatever comes after
const nextIdIdx = content.indexOf('id: "blog-', startIdx + 20);
console.log('Next blog starts at:', nextIdIdx);
const nextBraceIdx = content.lastIndexOf('{', nextIdIdx);
console.log('Next blog brace at:', nextBraceIdx);

console.log('Snippet of blog-14 end:');
console.log(content.slice(nextBraceIdx - 150, nextBraceIdx));

