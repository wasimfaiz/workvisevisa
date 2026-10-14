const fs = require('fs');
const text = fs.readFileSync('lib/data.ts', 'utf8');
const lines = text.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (line.startsWith('id: "blog-') || line.startsWith('slug: "')) {
    console.log(line);
  }
}
