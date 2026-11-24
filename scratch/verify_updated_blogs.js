const fs = require('fs');

const uae = fs.readFileSync('scratch/b50_updated.md', 'utf8');
const bh = fs.readFileSync('scratch/b51_updated.md', 'utf8');
const dataContent = fs.readFileSync('lib/data.ts', 'utf8');

// 1. Test FAQ regex from page.tsx:
const faqRegex = /###\s*Q\d+\s*[:.]\s*([^\n]+)\n+\*\*Answer\s*[:.]?\*\*\s*[:.]?\s*([\s\S]+?)(?=\n###\s*Q\d+|\n---|\n##\s|$)/gi;

const uaeFaqs = Array.from(uae.matchAll(faqRegex));
console.log("UAE FAQs extracted:", uaeFaqs.length);
uaeFaqs.forEach((m, i) => console.log(`UAE Q${i+1}: ${m[1].trim()}`));

const bhFaqs = Array.from(bh.matchAll(faqRegex));
console.log("Bahrain FAQs extracted:", bhFaqs.length);
bhFaqs.forEach((m, i) => console.log(`Bahrain Q${i+1}: ${m[1].trim()}`));

// 2. Test Mermaid regex from MarkdownContent.tsx:
const nodeRegex = /([A-Za-z0-9_]+)\s*(\[|\(|\{)([^\]\)\}]*)(\]|\)|\})/g;
function testMermaid(name, text) {
  const mm = text.match(/```mermaid([\s\S]*?)```/);
  if (!mm) {
    console.error(`${name}: NO MERMAID FOUND!`);
    return;
  }
  const steps = [];
  const seenLabels = new Set();
  let m;
  while ((m = nodeRegex.exec(mm[1])) !== null) {
    const label = m[3].trim();
    if (label && !seenLabels.has(label.toLowerCase())) {
      seenLabels.add(label.toLowerCase());
      steps.push({ id: m[1], label });
    }
  }
  console.log(`${name} mermaid steps extracted: ${steps.length}`);
}

testMermaid("UAE", uae);
testMermaid("Bahrain", bh);

// 3. Verify internal links to blogs
const blogLinks = (uae + bh).match(/\/blogs\/[a-z0-9-]+/g) || [];
const uniqueBlogLinks = Array.from(new Set(blogLinks));
console.log("Unique internal blog links to check:", uniqueBlogLinks.length);

let broken = 0;
uniqueBlogLinks.forEach(link => {
  const slug = link.replace('/blogs/', '');
  // check if slug exists in dataContent
  if (!dataContent.includes(`"${slug}"`) && !dataContent.includes(`'${slug}'`)) {
    console.error(`BROKEN LINK: ${link}`);
    broken++;
  }
});
console.log(`Internal blog link check completed. Broken: ${broken}`);

