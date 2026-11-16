const fs = require('fs');
const content = fs.readFileSync('./lib/data.ts', 'utf8');

const regex = /"?id"?:\s*"?(blog-\d+)"?[\s\S]*?"?title"?:\s*"([^"\\]*(?:\\.[^"\\]*)*)"[\s\S]*?"?slug"?:\s*"([^"\\]*(?:\\.[^"\\]*)*)"/g;
const matches = [...content.matchAll(regex)];

console.log('Total blogs found in file:', matches.length);
matches.slice(-6).forEach(m => {
  console.log(`${m[1]} | ${m[2].slice(0, 50)} | ${m[3]}`);
});
