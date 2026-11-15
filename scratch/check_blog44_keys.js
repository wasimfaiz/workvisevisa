const fs = require('fs');
const content = fs.readFileSync('./lib/data.ts', 'utf8');
const lines = content.split('\n');

for (let i = 7080; i < 7115; i++) {
  console.log(i + ': ' + lines[i]);
}

