const fs = require('fs');

const qatar = fs.readFileSync('scratch/qatar_blog_content.md', 'utf8');
const france = fs.readFileSync('scratch/france_blog_content.md', 'utf8');
const dataContent = fs.readFileSync('lib/data.ts', 'utf8');

// 1. Test FAQ regex
const faqRegex = /###\s*Q\d+\s*[:.]\s*([^\n]+)\n+\*\*Answer\s*[:.]?\*\*\s*[:.]?\s*([\s\S]+?)(?=\n###\s*Q\d+|\n---|\n##\s|$)/gi;

const qatarFaqs = Array.from(qatar.matchAll(faqRegex));
console.log("Qatar FAQs extracted:", qatarFaqs.length);
qatarFaqs.forEach((m, i) => console.log(`Qatar Q${i+1}: ${m[1].trim()}`));

const franceFaqs = Array.from(france.matchAll(faqRegex));
console.log("France FAQs extracted:", franceFaqs.length);
franceFaqs.forEach((m, i) => console.log(`France Q${i+1}: ${m[1].trim()}`));

// 2. Test Mermaid regex
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
  steps.forEach((s, idx) => console.log(`  ${idx+1}. [${s.id}] ${s.label}`));
}

testMermaid("Qatar", qatar);
testMermaid("France", france);

// 3. Verify internal links to blogs
const blogLinks = (qatar + france).match(/\/blogs\/[a-z0-9-]+/g) || [];
const uniqueBlogLinks = Array.from(new Set(blogLinks));
console.log("Unique internal blog links to check:", uniqueBlogLinks.length);

let broken = 0;
uniqueBlogLinks.forEach(link => {
  const slug = link.replace('/blogs/', '');
  if (!dataContent.includes(`"${slug}"`) && !dataContent.includes(`'${slug}'`)) {
    console.error(`BROKEN LINK: ${link}`);
    broken++;
  }
});
console.log(`Internal blog link check completed. Broken: ${broken}`);

