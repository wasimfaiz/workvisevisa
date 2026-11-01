const fs = require('fs');
const lines = fs.readFileSync('lib/data.ts', 'utf8').split('\n');
lines.forEach((line, idx) => {
  if (line.includes('blog-33') || line.includes('japan-work-visa') || line.includes('blogPosts') || line.includes('BLOG_POSTS') || line.includes('blog-28') || line.includes('blog-29')) {
    console.log(`Line ${idx + 1}: ${line.slice(0, 80)}`);
  }
});
