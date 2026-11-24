const fs = require('fs');
const path = require('path');
const text = fs.readFileSync(path.join(__dirname, '..', 'lib', 'data.ts'), 'utf8');
const chunks = text.split(/[\r\n]+\s*(?:['"]?id['"]?\s*:\s*['"](blog-13)['"])/);
if (chunks.length > 2) {
  const body = chunks[2].slice(0, 500);
  console.log(body);
}

