const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const p = content.indexOf('id: "blog-18"');
if (p !== -1) {
  console.log(content.slice(p, p + 500));
} else {
  console.log('blog-18 not found');
}
