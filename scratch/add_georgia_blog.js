const fs = require('fs');

const contentMarkdown = fs.readFileSync('./scratch/georgia_blog_content.md', 'utf8');

const georgiaBlog = {
  id: "blog-47",
  title: "Georgia Work Visa for Indians 2026: D1 Visa, Work Residence Permit, Jobs, GEL to INR Salaries, VFS & Scam Check",
  slug: "georgia-work-visa-for-indian-workers-2026-d1-visa-jobs-salary-vfs",
  category: "Work Permits",
  date: "Nov 16, 2026",
  readTime: "23 min read",
  excerpt: "Definitive 2026 field guide to Georgia work visas for Indian workers: D1 immigration visa, Work Residence Permit via Public Service Hall, Batumi high-rise jobs, GEL to INR salary math, PSK PCC apostille, VFS process, and airport scam protection.",
  image: "/images/georgia-work-visa-guide.webp",
  author: "Wasim Faiz",
  tags: [
    "Georgia Work Visa 2026",
    "Georgia Work Permit India",
    "Georgia D1 Visa",
    "Georgia Work Residence Permit",
    "Georgia Salary in INR",
    "Batumi Construction Jobs",
    "Georgia Welder Jobs",
    "PCC MEA Apostille Georgia",
    "VFS Georgia India",
    "WorkWise Visa Overseas"
  ],
  metaTitle: "Georgia Work Visa 2026: D1 Visa, Jobs & Salary | WorkWise",
  metaDescription: "Complete 2026 guide to Georgia work visa for Indians: D1 immigration visa, Work Residence Permit, in-demand jobs, GEL salaries in INR, VFS steps & airport scam check.",
  metaKeywords: "georgia work visa 2026, georgia work permit for indians, georgia d1 visa, georgia work residence permit, georgia salary in inr, batumi construction jobs, vfs georgia india",
  canonicalUrl: "https://www.workwisevisa.com/blogs/georgia-work-visa-for-indian-workers-2026-d1-visa-jobs-salary-vfs",
  content: contentMarkdown,
  published: true,
  featured: true
};

const dataFilePath = './lib/data.ts';
const content = fs.readFileSync(dataFilePath, 'utf8');

const marker = 'export const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);';
if (!content.includes(marker)) {
  console.error('Marker not found in lib/data.ts!');
  process.exit(1);
}

const markerIndex = content.indexOf(marker);
const beforeMarker = content.slice(0, markerIndex);
const afterMarker = content.slice(markerIndex);

const lastBracketIndex = beforeMarker.lastIndexOf('];');
if (lastBracketIndex === -1) {
  console.error('Could not find closing bracket of rawBlogPosts!');
  process.exit(1);
}

const blogString = ',\n' + JSON.stringify(georgiaBlog, null, 2) + '\n';

const updatedContent = 
  beforeMarker.slice(0, lastBracketIndex).trimEnd() + 
  blogString + 
  '];\n\n' + 
  afterMarker;

fs.writeFileSync(dataFilePath, updatedContent, 'utf8');
console.log('Successfully inserted blog-47 into lib/data.ts!');

