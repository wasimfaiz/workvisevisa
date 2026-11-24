const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

// 1. Total blogs count
const allIds = content.match(/["']?id["']?\s*:\s*["'](blog-\d+)["']/g) || [];
console.log("Total blogs count in lib/data.ts:", allIds.length);

// 2. Blog 50 and 51 inspection
const b50Pos = content.indexOf('"id": "blog-50"');
const b51Pos = content.indexOf('"id": "blog-51"');
const targetStr = '\n];\n\nexport const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);';
const endPos = content.indexOf(targetStr);

const b50Snippet = content.substring(b50Pos, b51Pos);
const b51Snippet = content.substring(b51Pos, endPos);

console.log("=== Blog 50 Checks ===");
const b50Mermaid = (b50Snippet.match(/```mermaid[\s\S]*?```/g) || []).length;
const b50CodeBlocks = (b50Snippet.match(/```(?!mermaid)[\s\S]*?```/g) || []).length;
console.log("Blog 50 Mermaid count:", b50Mermaid);
console.log("Blog 50 non-mermaid code blocks:", b50CodeBlocks);

const faqRegex = /###\s*Q\d+\s*[:.]\s*([^\n]+)\n+\*\*Answer\s*[:.]?\*\*\s*[:.]?\s*([\s\S]+?)(?=\n###\s*Q\d+|\n---|\n##\s|$)/gi;
const b50Faqs = Array.from(b50Snippet.matchAll(faqRegex));
console.log("Blog 50 FAQs found:", b50Faqs.length);

console.log("\n=== Blog 51 Checks ===");
const b51Mermaid = (b51Snippet.match(/```mermaid[\s\S]*?```/g) || []).length;
const b51CodeBlocks = (b51Snippet.match(/```(?!mermaid)[\s\S]*?```/g) || []).length;
console.log("Blog 51 Mermaid count:", b51Mermaid);
console.log("Blog 51 non-mermaid code blocks:", b51CodeBlocks);

const b51Faqs = Array.from(b51Snippet.matchAll(faqRegex));
console.log("Blog 51 FAQs found:", b51Faqs.length);

// 3. Test link validity
const blogLinks = (b50Snippet + b51Snippet).match(/\/blogs\/[a-z0-9-]+/g) || [];
const uniqueBlogLinks = Array.from(new Set(blogLinks));
let broken = 0;
uniqueBlogLinks.forEach(link => {
  const slug = link.replace('/blogs/', '');
  if (!content.includes(`"${slug}"`) && !content.includes(`'${slug}'`)) {
    console.error(`BROKEN LINK: ${link}`);
    broken++;
  }
});
console.log("Broken blog links in 50 & 51:", broken);

