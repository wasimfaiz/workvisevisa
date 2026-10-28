const fs = require('fs');
const path = require('path');

const files = [
  'app/countries/canada/page.tsx',
  'app/countries/saudi-arabia/page.tsx',
  'app/countries/usa/page.tsx',
  'app/countries/uk/page.tsx',
  'app/countries/qatar/page.tsx',
  'app/countries/russia/page.tsx',
  'app/countries/uae/page.tsx',
  'app/countries/oman/page.tsx',
  'app/countries/luxembourg/page.tsx',
  'app/countries/germany/page.tsx',
  'app/countries/france/page.tsx',
  'app/countries/croatia/page.tsx',
  'app/countries/bulgaria/page.tsx',
  'app/countries/bahrain/page.tsx',
];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, i) => {
    if (line.includes('jobs?country=')) {
      console.log(`\n--- ${file}:${i + 1} ---`);
      for (let j = Math.max(0, i - 2); j <= Math.min(lines.length - 1, i + 6); j++) {
        console.log(`${j + 1}: ${lines[j]}`);
      }
    }
  });
}
