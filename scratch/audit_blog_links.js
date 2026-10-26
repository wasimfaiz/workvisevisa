const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

// Find all slugs
const slugMatches = [...content.matchAll(/["']?slug["']?\s*:\s*"([^"]+)"/g)].map(m => m[1]);
const validSlugs = new Set(slugMatches);

console.log('Valid canonical slugs in data.ts:', validSlugs.size);

// Find all internal links /blogs/[something]
const blogLinkMatches = [...content.matchAll(/\/blogs\/([a-zA-Z0-9\-_]+)/g)].map(m => m[1]);
const uniqueLinkedSlugs = [...new Set(blogLinkMatches)];

console.log('Total unique /blogs/ links found in data.ts:', uniqueLinkedSlugs.length);

const invalidLinks = uniqueLinkedSlugs.filter(s => !validSlugs.has(s));
console.log('Links that do NOT match any canonical slug (causes redirects or 404):', invalidLinks);
