const fs = require('fs');
const content = fs.readFileSync('./lib/data.ts', 'utf8');
const lines = content.split('\n');
for (let i = 2570; i < 2585; i++) {
  console.log(lines[i]);
}

