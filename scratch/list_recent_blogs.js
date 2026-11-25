const fs = require('fs');
const c = fs.readFileSync('lib/data.ts', 'utf8');
const start = c.indexOf('rawBlogPosts');
const end = c.indexOf('export const blogPosts');
const blogText = c.slice(start, end);
const regex = /(?:id:|"id":)\s*["'](blog-\d+)["'][\s\S]*?(?:title:|"title":)\s*["']([^"']+)["'][\s\S]*?(?:date:|"date":)\s*["']([^"']+)["']/g;
const m = [...blogText.matchAll(regex)];
console.log('Total:', m.length);
m.forEach(x => console.log(`${x[1].padEnd(8)} | ${x[3].padEnd(14)} | ${x[2].slice(0, 75)}`));

