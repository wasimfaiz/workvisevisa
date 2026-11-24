const fs = require('fs');

const b50 = fs.readFileSync('scratch/b50_unique.md', 'utf8');
const b51 = fs.readFileSync('scratch/b51_unique.md', 'utf8');
const b52 = fs.readFileSync('scratch/b52_unique.md', 'utf8');
const b53 = fs.readFileSync('scratch/b53_unique.md', 'utf8');
const dataContent = fs.readFileSync('lib/data.ts', 'utf8');

const faqRegex = /###\s*Q\d+\s*[:.]\s*([^\n]+)\n+\*\*Answer\s*[:.]?\*\*\s*[:.]?\s*([\s\S]+?)(?=\n###\s*Q\d+|\n---|\n##\s|$)/gi;
const nodeRegex = /([A-Za-z0-9_]+)\s*(\[|\(|\{)([^\]\)\}]*)(\]|\)|\})/g;

const files = [
  { name: 'Blog 50 (UAE)', text: b50 },
  { name: 'Blog 51 (Bahrain)', text: b51 },
  { name: 'Blog 52 (Qatar)', text: b52 },
  { name: 'Blog 53 (France)', text: b53 }
];

files.forEach(f => {
  const faqs = Array.from(f.text.matchAll(faqRegex));
  console.log(`${f.name} FAQs extracted: ${faqs.length}`);
  
  const mm = f.text.match(/```mermaid([\s\S]*?)```/);
  if (!mm) {
    console.error(`ERROR: ${f.name} missing mermaid!`);
  } else {
    const steps = [];
    const seen = new Set();
    let m;
    while ((m = nodeRegex.exec(mm[1])) !== null) {
      const label = m[3].trim();
      if (label && !seen.has(label.toLowerCase())) {
        seen.add(label.toLowerCase());
        steps.push(label);
      }
    }
    console.log(`${f.name} Mermaid steps: ${steps.length}`);
  }
});

// Check all links
const allText = b50 + b51 + b52 + b53;
const blogLinks = Array.from(new Set(allText.match(/\/blogs\/[a-z0-9-]+/g) || []));
console.log("\nTotal unique blog links across all 4 blogs:", blogLinks.length);

let broken = 0;
blogLinks.forEach(link => {
  const slug = link.replace('/blogs/', '');
  if (!dataContent.includes(`"${slug}"`) && !dataContent.includes(`'${slug}'`)) {
    console.error(`BROKEN LINK: ${link}`);
    broken++;
  }
});
console.log(`Internal blog link check: Broken = ${broken}`);

