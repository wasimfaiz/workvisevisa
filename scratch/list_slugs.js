const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

// Find all blog objects with id and slug
const regex = /id:\s*"([^"]+)",[\s\S]*?slug:\s*"([^"]+)"/g;
let m;
while ((m = regex.exec(content)) !== null) {
  console.log(`${m[1]} => ${m[2]}`);
}
