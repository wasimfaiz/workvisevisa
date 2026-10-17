const fs = require('fs');
const path = require('path');

const dataTsPath = path.join(__dirname, '..', 'lib', 'data.ts');
const mdContentPath = path.join(__dirname, 'dubai_residence_permit_content.md');

const content = fs.readFileSync(mdContentPath, 'utf8');

const blog23Object = `  {
    id: "blog-23",
    title: "Dubai Residence Visa & Permit Complete Master Guide 2026: 10 Official Pathways, Step-by-Step Application Process, Fees (AED & INR), Medical Screening & Official GDRFA/ICP Rules",
    slug: "dubai-residence-visa-permit-complete-guide-2026-eligibility-process-cost-official-portals",
    category: "Gulf Visas",
    date: "Oct 18, 2026",
    readTime: "40 min read",
    excerpt: "The authoritative 2026 master guide to obtaining a Dubai Residence Permit and UAE Residence Visa. Complete coverage of 10 official pathways (Employment, 10-Yr Golden Visa, 5-Yr Green Visa, Investor LLC, Real Estate DLD, Remote Work, Family Sponsorship), prerequisite document attestation (MoFA/MEA), 7-stage application lifecycle, DHA medical fitness testing (TB, HIV, Hep B), line-by-line government fee schedules in AED & INR, overstay grace periods, and direct links to official GDRFA, ICP, and MOHRE portals.",
    image: "/images/dubai-residence-permit-guide.jpg",
    author: "WorkWise UAE Legal Immigration & Overseas Placement Desk",
    tags: [
      "Dubai Residence Visa",
      "Dubai Residence Permit",
      "UAE Golden Visa",
      "UAE Green Visa",
      "Dubai Work Visa",
      "GDRFA Dubai",
      "ICP UAE",
      "MOHRE Work Permit",
      "Dubai Investor Visa",
      "DLD Property Visa",
      "DHA Medical Fitness",
      "Emirates ID Registration",
      "Dubai Family Visa",
      "Dubai Remote Work Visa",
      "UAE Immigration Rules 2026"
    ],
    metaTitle: "Dubai Residence Visa & Permit Guide 2026: 10 Pathways, Fees & Rules",
    metaDescription: "Comprehensive 2026 guide to obtaining a Dubai Residence Permit. Discover 10 official pathways, step-by-step process, DHA medical tests, fees in AED & INR, and official GDRFA/ICP rules.",
    metaKeywords: "dubai residence permit, how to get dubai residence visa, uae golden visa requirements 2026, uae green visa fees, dubai investor visa, gdrfa dubai smart portal, icp emirates id application, mohre employment visa dubai, dha medical test for uae visa, dubai property investor visa dld, dubai remote work visa, family visa dubai salary requirements, uae residence visa overstay fine",
    published: true,
    featured: true,
    views: 3840,
    content: ${JSON.stringify(content)},
  },
`;

let dataTs = fs.readFileSync(dataTsPath, 'utf8');

const exportMarker = 'export const blogPosts: BlogPost[]';
const exportIdx = dataTs.indexOf(exportMarker);
if (exportIdx === -1) {
  console.error('Could not find export const blogPosts in data.ts!');
  process.exit(1);
}

const lastBracketIdx = dataTs.lastIndexOf('];', exportIdx);
if (lastBracketIdx === -1) {
  console.error('Could not find closing bracket before export in data.ts!');
  process.exit(1);
}

const blog23Marker = 'id: "blog-23"';
if (dataTs.includes(blog23Marker)) {
  const blogIdx = dataTs.indexOf(blog23Marker);
  const startIdx = dataTs.lastIndexOf('  {', blogIdx);
  dataTs = dataTs.substring(0, startIdx) + blog23Object + dataTs.substring(lastBracketIdx);
  fs.writeFileSync(dataTsPath, dataTs, 'utf8');
  console.log('Successfully updated blog-23 in lib/data.ts!');
  process.exit(0);
}

dataTs = dataTs.substring(0, lastBracketIdx) + blog23Object + dataTs.substring(lastBracketIdx);
fs.writeFileSync(dataTsPath, dataTs, 'utf8');
console.log('Successfully added blog-23 into lib/data.ts!');
