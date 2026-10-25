const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('code: "BG"') || l.includes('name: "Bulgaria"') || l.includes('export const countries')) {
    console.log(i + 1, l.trim());
  }
});
