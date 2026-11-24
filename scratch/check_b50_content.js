const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const b50Match = content.match(/"id":\s*"blog-50"[\s\S]*?(?="id":\s*"blog-51")/);
if (b50Match) {
  const text = b50Match[0];
  const mermaidMatches = text.match(/```mermaid[\s\S]*?```/g);
  console.log("Mermaid in blog-50:", mermaidMatches ? mermaidMatches[0] : "none");
}

