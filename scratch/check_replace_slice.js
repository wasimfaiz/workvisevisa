const fs = require('fs');
const path = require('path');

const dataPath = 'lib/data.ts';
const dataContent = fs.readFileSync(dataPath, 'utf8');

const targetStr = '\n];\n\nexport const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);';
const targetIdx = dataContent.indexOf(targetStr);
const pos50 = dataContent.indexOf('"id": "blog-50"');
const brace50 = dataContent.lastIndexOf('{\n  "id": "blog-50"', pos50);

console.log("targetIdx:", targetIdx);
console.log("pos50:", pos50);
console.log("brace50:", brace50);

const sliceToReplace = dataContent.substring(brace50, targetIdx);
console.log("Slice starts with:\n", sliceToReplace.substring(0, 80));
console.log("Slice ends with:\n", sliceToReplace.substring(sliceToReplace.length - 80));

