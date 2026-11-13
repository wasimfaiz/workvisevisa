const fs = require('fs');
const content = fs.readFileSync('app/countries/poland/page.tsx', 'utf8');

const heroStart = content.indexOf('{/* ── Hero Section');
const heroEnd = content.indexOf('</section>', heroStart);

console.log(content.slice(heroStart, heroEnd + 10));

