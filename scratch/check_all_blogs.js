const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

// Find all blog objects in rawBlogPosts or blogPosts
const idMatches = [...content.matchAll(/["']?id["']?:\s*["'](blog-\d+)["']/g)].map(m => m[1]);
console.log('Total blog-X IDs found in lib/data.ts:', idMatches.length);
console.log('List of IDs:', [...new Set(idMatches)]);

// Let's also check all unique slugs in data.ts
const slugMatches = [...content.matchAll(/["']?slug["']?:\s*["']([^"']+)["']/g)].map(m => m[1]);
console.log('Total slugs found:', slugMatches.length);
console.log('Unique slugs:', [...new Set(slugMatches)]);

