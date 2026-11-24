const fs = require('fs');
const pageCode = fs.readFileSync('app/blogs/[slug]/page.tsx', 'utf8');

const faqIndex = pageCode.indexOf("FAQ");
console.log("FAQ occurrences in page.tsx:", (pageCode.match(/faq/gi) || []).length);

const lines = pageCode.split('\n');
lines.forEach((l, idx) => {
  if (l.toLowerCase().includes("faq") || l.toLowerCase().includes("questions")) {
    console.log(`Line ${idx + 1}: ${l.trim().substring(0, 100)}`);
  }
});

