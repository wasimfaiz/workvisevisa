const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const matches = content.match(/```mermaid[\s\S]*?```/g) || [];
console.log("Mermaid count:", matches.length);
if (matches.length > 0) {
  console.log("Example mermaid:\n", matches[0]);
}

