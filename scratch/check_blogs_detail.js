const fs = require('fs');
const content = fs.readFileSync('./lib/data.ts', 'utf8');
const lines = content.split('\n');
const rawBlogLines = lines.slice(774, 7128);

const ids = [];
rawBlogLines.forEach((l, i) => {
  const m = l.match(/^\s*"?id"?:\s*["']([^"']+)["']/);
  if (m) {
    ids.push({ line: 775 + i, id: m[1] });
  }
});

console.log('Total blog items:', ids.length);
ids.forEach(x => {
  const lineText = lines[x.line - 1];
  const nextLines = lines.slice(x.line - 1, x.line + 6).join(' ');
  const titleM = nextLines.match(/"?title"?:\s*["']([^"']+)["']/);
  const dateM = nextLines.match(/"?date"?:\s*["']([^"']+)["']/);
  const slugM = nextLines.match(/"?slug"?:\s*["']([^"']+)["']/);
  console.log(`${x.line} | ${x.id} | ${dateM ? dateM[1] : ''} | ${titleM ? titleM[1].slice(0, 50) : ''} | ${slugM ? slugM[1] : ''}`);
});

