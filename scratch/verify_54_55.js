const fs = require('fs');

const files = [
  { name: 'Oman', path: 'scratch/oman_blog_content.md' },
  { name: 'UK', path: 'scratch/uk_blog_content.md' }
];

const dataContent = fs.readFileSync('lib/data.ts', 'utf8');
const allCanonicalSlugs = new Set([...dataContent.matchAll(/(?:"slug"|slug):\s*"([^"]+)"/g)].map(m => m[1]));
allCanonicalSlugs.add("oman-2-year-employment-visa-rop-work-permit-guide-2026-mol-sanad-wafid-bataqa");
allCanonicalSlugs.add("uk-skilled-worker-visa-complete-guide-2026-70-points-defined-cos-salary-list-ilr");

console.log(`Total canonical slugs loaded: ${allCanonicalSlugs.size}`);

const faqRegex = /###\s*(?:Q\d+[:.]?|FAQ\s*\d*[:.]?)\s*([^\n\r]+)[\r\n\s]*\*\*Answer:\*\*\s*([^\n\r]+(?:\n(?!\n###|\n---)[^\n\r]+)*)/gi;
const nodeRegex = /([A-Za-z0-9_]+)\s*(\[|\(|\{)([^\]\)\}]*)(\]|\)|\})/g;

let allPassed = true;

files.forEach(f => {
  console.log(`\n=== Verifying ${f.name} ===`);
  const content = fs.readFileSync(f.path, 'utf8');

  // 1. FAQs
  const faqs = [];
  let match;
  faqRegex.lastIndex = 0;
  while ((match = faqRegex.exec(content)) !== null) {
    faqs.push({ q: match[1].trim(), a: match[2].trim() });
  }
  console.log(`FAQs extracted: ${faqs.length}`);
  if (faqs.length < 8) {
    console.error(`ERROR: Expected at least 8 FAQs, found ${faqs.length}`);
    allPassed = false;
  } else {
    faqs.forEach((faq, idx) => {
      console.log(`  Q${idx+1}: ${faq.q.slice(0, 60)}...`);
    });
  }

  // 2. Mermaid
  const mermaidMatch = content.match(/```mermaid([\s\S]*?)```/);
  if (!mermaidMatch) {
    console.error("ERROR: No mermaid block found!");
    allPassed = false;
  } else {
    const codeText = mermaidMatch[1];
    const steps = [];
    nodeRegex.lastIndex = 0;
    let nm;
    while ((nm = nodeRegex.exec(codeText)) !== null) {
      steps.push({ id: nm[1], label: nm[3].trim() });
    }
    console.log(`Mermaid steps parsed: ${steps.length}`);
    steps.forEach((s, idx) => {
      console.log(`  Step ${idx+1}: [${s.id}] ${s.label.slice(0, 60)}...`);
    });
    if (steps.length < 5) {
      console.error(`ERROR: Expected at least 5 mermaid steps, found ${steps.length}`);
      allPassed = false;
    }
  }

  // 3. Internal links
  const internalLinks = [...content.matchAll(/\[([^\]]+)\]\((\/blogs\/[^)]+)\)/g)].map(m => m[2]);
  console.log(`Internal blog links found: ${internalLinks.length}`);
  internalLinks.forEach(link => {
    const slug = link.replace('/blogs/', '');
    if (!allCanonicalSlugs.has(slug)) {
      console.error(`BROKEN LINK: ${link} (slug '${slug}' not in data.ts)`);
      allPassed = false;
    } else {
      console.log(`  OK Link: ${link}`);
    }
  });
});

if (allPassed) {
  console.log("\nALL VERIFICATIONS PASSED 100%!");
} else {
  console.error("\nSOME VERIFICATIONS FAILED!");
  process.exit(1);
}
