const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const t = 'kuwait-work-visa-reopening-degree-attestation-guide-2026';
const pos = content.indexOf(t);
console.log('Context around match:');
console.log(content.slice(Math.max(0, pos - 300), pos + 200));

// find preceding "title:" or "slug:"
const preceding = content.slice(0, pos);
const lastTitleMatch = [...preceding.matchAll(/title:\s*"([^"]+)"/g)].pop();
const lastSlugMatch = [...preceding.matchAll(/slug:\s*"([^"]+)"/g)].pop();
const lastIdMatch = [...preceding.matchAll(/id:\s*"([^"]+)"/g)].pop();

console.log('Last Title:', lastTitleMatch ? lastTitleMatch[1] : null);
console.log('Last Slug:', lastSlugMatch ? lastSlugMatch[1] : null);
console.log('Last ID:', lastIdMatch ? lastIdMatch[1] : null);
