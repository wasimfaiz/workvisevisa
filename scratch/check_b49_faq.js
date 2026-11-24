const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const b49Index = content.indexOf('"blog-49"');
const b50Index = content.indexOf('"blog-50"');

if (b49Index !== -1 && b50Index !== -1) {
  const b49Text = content.substring(b49Index, b50Index);
  const faqPos = b49Text.indexOf("Frequently Asked Questions");
  if (faqPos !== -1) {
    console.log("Blog 49 FAQ:\n", b49Text.substring(faqPos, faqPos + 1500));
  }
}

