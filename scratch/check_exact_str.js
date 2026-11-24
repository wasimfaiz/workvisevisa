const fs = require('fs');
const dataContent = fs.readFileSync('lib/data.ts', 'utf8');

const pos = dataContent.indexOf('blog-50');
console.log("Substring around blog-50:\n", dataContent.substring(pos - 20, pos + 50));

