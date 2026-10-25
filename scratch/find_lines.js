const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('id: "blog-29"') || l.includes('rawBlogPosts: BlogPost[] = [')) {
    console.log(i + 1, l.trim().slice(0, 80));
  }
});
