const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');
const lines = content.split('\n');
console.log("Total lines:", lines.length);
for (let i = 7280; i < Math.min(lines.length, 7380); i++) {
  console.log(`${i + 1}: ${lines[i].slice(0, 100)}`);
}

