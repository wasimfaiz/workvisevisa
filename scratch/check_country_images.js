const fs = require('fs');

['app/countries/oman/page.tsx', 'app/countries/qatar/page.tsx'].forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const imgs = [...content.matchAll(/src=["']([^"']+)["']|image:\s*["']([^"']+)["']/g)].map(m => m[1] || m[2]);
  console.log(`${p} images:`, imgs);
});

