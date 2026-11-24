const fs = require('fs');
const b50 = fs.readFileSync('scratch/b50_current.txt', 'utf8');
const b51 = fs.readFileSync('scratch/b51_current.txt', 'utf8');

function analyze(name, text) {
  console.log(`=== ${name} ===`);
  const headings = text.match(/##+\s+[^\n]+/g) || [];
  console.log("Headings:", headings);
  const links = text.match(/\[[^\]]+\]\([^)]+\)/g) || [];
  console.log("Links count:", links.length);
  console.log("Sample links:", links.slice(0, 8));
  const faqs = text.match(/###\s*Q\d+[^\n]+/gi) || [];
  console.log("FAQ questions found:", faqs.length, faqs);
}

analyze("Blog 50", b50);
analyze("Blog 51", b51);

