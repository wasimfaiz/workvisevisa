const fs = require('fs');

const contentMarkdown = fs.readFileSync('./scratch/bulgaria_blog_content.md', 'utf8');

const bulgariaBlog = {
  id: "blog-45",
  title: "Bulgaria Work Visa for Indians 2026: Single Permit (ERPP), In-Demand Jobs, BGN to INR Salaries, VFS India Process & Scam Check",
  slug: "bulgaria-work-visa-for-indian-workers-2026-single-permit-vfs-jobs-salary",
  category: "Work Permits",
  date: "Nov 15, 2026",
  readTime: "24 min read",
  excerpt: "Definitive 2026 field guide to Bulgaria work visas for Indian workers: Schengen Single Residence & Work Permit (ERPP), 10% flat tax, BGN 1,300–3,200 salaries in INR, PSK PCC apostille, VFS Type D booking, and scam protection.",
  image: "/images/bulgaria-work-visa-guide.webp",
  author: "Wasim Faiz",
  tags: [
    "Bulgaria Work Visa 2026",
    "Bulgaria Work Permit India",
    "Bulgaria Single Permit ERPP",
    "Bulgaria Schengen Visa Type D",
    "Bulgaria Salary BGN INR",
    "VFS Bulgaria India",
    "Bulgaria Welder Jobs",
    "Bulgaria TRC Card",
    "PCC MEA Apostille Bulgaria",
    "WorkWise Visa Europe"
  ],
  metaTitle: "Bulgaria Work Visa 2026: Schengen ERPP, Jobs & Salary | WorkWise",
  metaDescription: "Complete 2026 guide to Bulgaria work visa for Indians: Single Permit (ERPP), in-demand factory & welder jobs, BGN salaries in INR, 10% flat tax, VFS D-visa & scam check.",
  metaKeywords: "bulgaria work visa 2026, bulgaria work permit for indians, bulgaria single permit erpp, bulgaria type d visa vfs, bulgaria salary in inr, bulgaria welder jobs, bulgaria trc card",
  canonicalUrl: "https://www.workwisevisa.com/blogs/bulgaria-work-visa-for-indian-workers-2026-single-permit-vfs-jobs-salary",
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

const blogString = ',\n' + JSON.stringify(bulgariaBlog, null, 2) + '\n';

const updatedContent = 
  beforeMarker.slice(0, lastBracketIndex).trimEnd() + 
  blogString + 
  '];\n\n' + 
  afterMarker;

fs.writeFileSync(dataFilePath, updatedContent, 'utf8');
console.log('Successfully inserted blog-45 into lib/data.ts!');
