const fs = require('fs');
const content = fs.readFileSync('app/countries/poland/page.tsx', 'utf8');

const heroStart = content.indexOf('{/* ── Hero Section');
const heroEnd = content.indexOf('</section>', heroStart);

fs.writeFileSync('scratch/poland_hero_sample.txt', content.slice(heroStart, heroEnd + 10));
console.log('Saved poland hero to scratch/poland_hero_sample.txt');

