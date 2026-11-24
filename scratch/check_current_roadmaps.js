const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

['blog-50', 'blog-51', 'blog-52', 'blog-53'].forEach(id => {
  const blogMatch = content.match(new RegExp(`id:\\s*["']${id}["'][\\s\\S]*?(?=id:\\s*["']blog-\\d+["']|export const blogPosts)`));
  if (blogMatch) {
    const text = blogMatch[0];
    const mermaidMatches = text.match(/```mermaid[\s\S]*?```/g);
    const rawBoxMatches = text.match(/```[\s\S]*?\[Stage 1[\s\S]*?```/g);
    console.log(`\n=== ${id} ===`);
    console.log(`Mermaid blocks found: ${mermaidMatches ? mermaidMatches.length : 0}`);
    if (mermaidMatches) {
      console.log(`First 200 chars of mermaid:`, mermaidMatches[0].slice(0, 200));
    }
    console.log(`Raw [Stage 1] code blocks found: ${rawBoxMatches ? rawBoxMatches.length : 0}`);
  } else {
    console.log(`Blog ${id} not found`);
  }
});

