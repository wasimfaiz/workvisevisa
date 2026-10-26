const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');
const exportIdx = content.indexOf('export const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);');
console.log('Export idx:', exportIdx);
console.log('Slice before export:\n', content.slice(exportIdx - 200, exportIdx));
