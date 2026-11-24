const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const b51Pos = content.indexOf('"id": "blog-51"');
const targetStr = '\n];\n\nexport const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);';
const endPos = content.indexOf(targetStr);
const b51Snippet = content.substring(b51Pos, endPos);

const contentMatch = b51Snippet.match(/"content":\s*("(?:[^"\\]|\\.)*")/);
if (contentMatch) {
  const parsedContent = JSON.parse(contentMatch[1]);
  console.log("Parsed content length:", parsedContent.length);

  const faqRegex = /###\s*Q\d+\s*[:.]\s*([^\n]+)\n+\*\*Answer\s*[:.]?\*\*\s*[:.]?\s*([\s\S]+?)(?=\n###\s*Q\d+|\n---|\n##\s|$)/gi;
  const matches = Array.from(parsedContent.matchAll(faqRegex));
  console.log("Parsed Blog 51 FAQs found:", matches.length);
  matches.forEach((m, i) => console.log(`Q${i+1}: ${m[1]}`));
} else {
  console.log("Could not match content in snippet!");
}

