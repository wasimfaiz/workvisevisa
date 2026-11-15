const fs = require('fs');

const contentMarkdown = fs.readFileSync('./scratch/albania_blog_content.md', 'utf8');

const albaniaBlog = {
  id: "blog-46",
  title: "Albania Work Visa for Indians 2026: Unique Permit (Leje Unike), In-Demand Jobs, Salaries in ALL/EUR/INR, e-Visa Process & Scam Check",
  slug: "albania-work-visa-for-indian-workers-2026-unique-permit-evisa-jobs-salary",
  category: "Work Permits",
  date: "Nov 16, 2026",
  readTime: "24 min read",
  excerpt: "Definitive 2026 field guide to Albania work visas for Indian workers: e-Albania Unique Permit (Leje Unike), in-demand construction & welder jobs, 50k–110k ALL salary in INR, PSK PCC apostille, e-visa steps, and anti-scam protection.",
  image: "/images/albania-work-visa-guide.webp",
  author: "Wasim Faiz",
  tags: [
    "Albania Work Visa 2026",
    "Albania Work Permit India",
    "Albania Unique Permit Leje Unike",
    "e-Albania Work Permit",
    "Albania Salary in INR",
    "Albania Construction Jobs",
    "Albania Welder Jobs",
    "PCC MEA Apostille Albania",
    "e-Visa Albania",
    "WorkWise Visa Europe"
  ],
  metaTitle: "Albania Work Visa 2026: Unique Permit (Leje Unike) & Salary | WorkWise",
  metaDescription: "Complete 2026 guide to Albania work visa for Indians: e-Albania Unique Permit (Leje Unike), in-demand jobs, ALL salaries in INR, e-Visa Type D steps & scam check.",
  metaKeywords: "albania work visa 2026, albania work permit for indians, leje unike albania, e albania work permit, albania salary in inr, albania welder jobs, albania construction jobs",
  canonicalUrl: "https://www.workwisevisa.com/blogs/albania-work-visa-for-indian-workers-2026-unique-permit-evisa-jobs-salary",
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

const blogString = ',\n' + JSON.stringify(albaniaBlog, null, 2) + '\n';

const updatedContent = 
  beforeMarker.slice(0, lastBracketIndex).trimEnd() + 
  blogString + 
  '];\n\n' + 
  afterMarker;

fs.writeFileSync(dataFilePath, updatedContent, 'utf8');
console.log('Successfully inserted blog-46 into lib/data.ts!');

