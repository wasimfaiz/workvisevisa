const fs = require('fs');

['app/countries/germany/page.tsx', 'app/countries/usa/page.tsx'].forEach(file => {
  const c = fs.readFileSync(file, 'utf8');
  const lines = c.split('\n');
  console.log(`\n=== ${file} (total lines: ${lines.length}) ===`);
  lines.forEach((l, i) => {
    if (l.includes('/blogs/')) {
      console.log(`  Line ${i + 1}: ${l.trim()}`);
    }
  });
  console.log("Last 25 lines before Section 13 / bottom CTA:");
  const ctaIdx = lines.findIndex(l => l.includes('Bottom') || l.includes('CTA') || l.includes('Strategic Deployment Desk'));
  const start = ctaIdx > 15 ? ctaIdx - 15 : lines.length - 40;
  for (let i = start; i < Math.min(lines.length, start + 30); i++) {
    console.log(`  ${i+1}: ${lines[i].slice(0, 100)}`);
  }
});

