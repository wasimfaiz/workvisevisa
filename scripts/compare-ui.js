const fs = require('fs');

function getSections(file) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  const matches = [];
  lines.forEach((l, i) => {
    if (l.includes('<section') || l.includes('SECTION ') || l.includes('<h2')) {
      matches.push((i + 1) + ': ' + l.trim().slice(0, 80));
    }
  });
  return matches;
}

console.log('=== SIWAN ===');
console.log(getSections('app/locations/siwan/page.tsx').slice(0, 30).join('\n'));

console.log('\n=== MUZAFFARPUR ===');
console.log(getSections('app/locations/muzaffarpur/page.tsx').slice(0, 30).join('\n'));
