const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const b50Pos = content.indexOf('"id": "blog-50"');
const b51Pos = content.indexOf('"id": "blog-51"');
const b50Snippet = content.substring(b50Pos, b51Pos);

// In runtime, article.content is the parsed string (where \n is real newline).
// Let's extract the "content": "..." from snippet and JSON.parse it!
const contentMatch = b50Snippet.match(/"content":\s*("(?:[^"\\]|\\.)*")/);
if (contentMatch) {
  const parsedContent = JSON.parse(contentMatch[1]);
  console.log("Parsed content length:", parsedContent.length);

  const faqRegex = /###\s*Q\d+\s*[:.]\s*([^\n]+)\n+\*\*Answer\s*[:.]?\*\*\s*[:.]?\s*([\s\S]+?)(?=\n###\s*Q\d+|\n---|\n##\s|$)/gi;
  const matches = Array.from(parsedContent.matchAll(faqRegex));
  console.log("Parsed Blog 50 FAQs found:", matches.length);
  matches.forEach((m, i) => console.log(`Q${i+1}: ${m[1]}`));
} else {
  console.log("Could not match content in snippet!");
}

