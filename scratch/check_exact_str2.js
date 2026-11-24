const fs = require('fs');
const dataContent = fs.readFileSync('lib/data.ts', 'utf8');

const pos50 = dataContent.indexOf('"id": "blog-50"');
const pos51 = dataContent.indexOf('"id": "blog-51"');
const lastBracket = dataContent.lastIndexOf('\n];');

console.log("pos50:", pos50, "pos51:", pos51, "lastBracket:", lastBracket);
// find the opening brace before pos50
const brace50 = dataContent.lastIndexOf('{', pos50);
const brace51 = dataContent.lastIndexOf('{', pos51);

console.log("brace50:", brace50, "brace51:", brace51);

