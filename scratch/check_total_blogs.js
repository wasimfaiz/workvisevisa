const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const regex = /(?:id:\s*["']([^"']+)["']|"id":\s*"([^"]+)")/g;
const ids = [];
let m;
while ((m = regex.exec(content)) !== null) {
  const id = m[1] || m[2];
  if (id.startsWith('blog-') && !ids.includes(id)) {
    ids.push(id);
  }
}
console.log("Total unique blog-* ids:", ids.length);
console.log("Last 6 blog ids:", ids.slice(-6));

