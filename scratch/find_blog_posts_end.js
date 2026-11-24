const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, '..', 'lib', 'data.ts'), 'utf8');

const regex = /blogPosts/g;
let m;
while ((m = regex.exec(text)) !== null) {
  console.log('Match at', m.index, text.slice(Math.max(0, m.index - 50), m.index + 50));
}

// Find how blog-49 object closes
const blog49Pos = text.indexOf('blog-49');
const endOfArray = text.indexOf('];', blog49Pos);
console.log('blog49Pos:', blog49Pos, 'endOfArray:', endOfArray);
if (endOfArray !== -1) {
  console.log('Around endOfArray:');
  console.log(text.slice(endOfArray - 150, endOfArray + 100));
}
