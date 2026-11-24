const fs = require('fs');

const dataPath = 'lib/data.ts';
let dataContent = fs.readFileSync(dataPath, 'utf8');

const uaeUpdated = fs.readFileSync('scratch/b50_updated.md', 'utf8');
const bhUpdated = fs.readFileSync('scratch/b51_updated.md', 'utf8');

// Find blog-50 and blog-51 in dataContent
const b50Start = dataContent.indexOf('{\n    "id": "blog-50"');
const b51Start = dataContent.indexOf('{\n    "id": "blog-51"');
const dataEnd = dataContent.lastIndexOf('\n];');

console.log("b50Start:", b50Start, "b51Start:", b51Start, "dataEnd:", dataEnd);

if (b50Start === -1 || b51Start === -1 || dataEnd === -1) {
  console.error("Could not find blog-50 or blog-51 boundary!");
  process.exit(1);
}

// Let's parse current blog-50 and blog-51 objects
const b50String = dataContent.substring(b50Start, b51Start);
const b51String = dataContent.substring(b51Start, dataEnd);

console.log("b50 starts with:", b50String.substring(0, 100));
console.log("b51 starts with:", b51String.substring(0, 100));

