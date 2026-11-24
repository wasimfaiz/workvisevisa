const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const faqMatches = content.match(/##+.*FAQ[\s\S]*?(?=##|$)/gi) || [];
console.log("FAQ sections found across data.ts:", faqMatches.length);
if (faqMatches.length > 0) {
  console.log("Sample FAQ section:\n", faqMatches[0].substring(0, 500));
}

