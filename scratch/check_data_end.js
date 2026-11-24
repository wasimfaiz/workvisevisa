const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const targetStr = 'export const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);';
const idx = content.indexOf(targetStr);
console.log("Index of export const blogPosts:", idx);
console.log("Lines before targetStr:");
console.log(content.slice(idx - 150, idx));
