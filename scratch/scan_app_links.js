const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('lib/data.ts', 'utf8');
const validSlugs = new Set([...content.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1]));

function searchLinks(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git' || entry.name === 'scratch' || entry.name === 'scripts') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      searchLinks(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
      if (entry.name === 'data.ts') continue;
      const fileText = fs.readFileSync(fullPath, 'utf8');
      const matches = [...fileText.matchAll(/\/blogs\/([a-zA-Z0-9\-_]+)/g)].map(m => m[1]);
      matches.forEach(s => {
        if (!validSlugs.has(s) && s !== '[slug]' && !s.includes('${') && s !== 'blog') {
          console.log(`Non-canonical link "/blogs/${s}" found in ${fullPath}`);
        }
      });
    }
  }
}

searchLinks(process.cwd());
console.log('Done scanning app & components.');
