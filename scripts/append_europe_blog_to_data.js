const fs = require('fs');
const path = require('path');

const dataTsPath = path.join(__dirname, '..', 'lib', 'data.ts');
const mdContentPath = path.join(__dirname, 'europe_work_visa_content.md');

const content = fs.readFileSync(mdContentPath, 'utf8');

const blog24Object = `  {
    id: "blog-24",
    title: "Europe & Schengen Work Visa Master Guide 2026: Germany Opportunity Card, Poland, Croatia, Luxembourg, Malta & Czechia — Eligibility, Work Permits, VFS Process, Fees, Salaries & PR Pathways",
    slug: "europe-schengen-work-visa-complete-guide-2026-germany-poland-croatia-luxembourg-malta-czechia",
    category: "Europe Visas",
    date: "Oct 19, 2026",
    readTime: "45 min read",
    excerpt: "The authoritative 2026 master guide to securing a European work visa and Schengen residence permit across Germany (Opportunity Card Chancenkarte & EU Blue Card), Poland (Voivodeship Type A Permit), Croatia (HZZ & MUP Permit), Luxembourg (ADEM Salaried Worker), Malta (Identità Single Permit), and Czechia (Employee Card). Featuring official immigration portal directories, Hague Apostille and PCC certification, 8-stage application lifecycle, line-by-line government fee tables in EUR (€) and INR (₹), statutory minimum wage benchmarks, EES/SIS border rules, and fast-track PR roadmaps.",
    image: "/images/europe-work-visa-guide.jpg",
    author: "Wasim Faiz",
    tags: [
      "Europe Work Visa",
      "Schengen Work Visa",
      "Germany Opportunity Card",
      "Chancenkarte 2026",
      "EU Blue Card",
      "Poland Work Permit Type A",
      "Croatia Work Visa HZZ",
      "Luxembourg Salaried Worker",
      "Malta Single Permit Identita",
      "Czechia Employee Card",
      "Schengen D Visa",
      "Apostille MEA India",
      "VFS Global Appointment",
      "European Immigration 2026",
      "WorkWise Visa Placement"
    ],
    metaTitle: "Europe & Schengen Work Visa Guide 2026: Germany, Poland, Croatia, Luxembourg, Malta, Czechia",
    metaDescription: "Master 2026 guide to Europe & Schengen work visas. Germany Chancenkarte & Blue Card, Poland Type A, Croatia, Luxembourg, Malta, Czechia. Requirements, VFS process, fees, salaries & PR.",
    metaKeywords: "europe work visa for indians 2026, schengen work visa requirements, germany opportunity card eligibility points calculator, chancenkarte blocked account fee, poland type a work permit processing time, croatia work permit mup hzz shortage occupations, luxembourg adem salaried worker visa, malta single permit identita jobsplus, czechia employee card nostrification, schengen national d visa vfs global, europe work permit cost in inr, how to get job in europe from india",
    published: true,
    featured: true,
    views: 4120,
    content: ${JSON.stringify(content)},
  },
`;

let dataTs = fs.readFileSync(dataTsPath, 'utf8');

const exportMarker = 'export const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);';
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

const blog24Marker = 'id: "blog-24"';
if (dataTs.includes(blog24Marker)) {
  const blogIdx = dataTs.indexOf(blog24Marker);
  const startIdx = dataTs.lastIndexOf('  {', blogIdx);
  dataTs = dataTs.substring(0, startIdx) + blog24Object + dataTs.substring(lastBracketIdx);
  fs.writeFileSync(dataTsPath, dataTs, 'utf8');
  console.log('Successfully updated blog-24 in lib/data.ts!');
  process.exit(0);
}

dataTs = dataTs.substring(0, lastBracketIdx) + blog24Object + dataTs.substring(lastBracketIdx);
fs.writeFileSync(dataTsPath, dataTs, 'utf8');
console.log('Successfully added blog-24 into lib/data.ts!');
