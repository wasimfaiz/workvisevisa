const fs = require('fs');

const contentMarkdown = fs.readFileSync('./scratch/kuwait_blog_content.md', 'utf8');

const kuwaitBlog = {
  id: "blog-48",
  title: "Kuwait Article 18 Work Visa Master Guide 2026: PAM Work Permit (Shuoon), Sahel Platform, Jobs, Salaries in KWD & INR, Stamping & Scam Protection",
  slug: "kuwait-article-18-work-visa-master-guide-2026-pam-permit-salary-stamping",
  category: "Work Permits",
  date: "Nov 16, 2026",
  readTime: "24 min read",
  excerpt: "Definitive 2026 field guide to Kuwait Article 18 private sector work visas: PAM electronic work permits (Shuoon) on Sahel, KSE engineering accreditation, KD 140–350+ salaries in INR, Wafid GAMCA medical, VFS stamping, and Azad visa scam protection.",
  image: "/images/kuwait-work-visa-guide.webp",
  author: "Wasim Faiz",
  tags: [
    "Kuwait Work Visa 2026",
    "Kuwait Article 18 Visa",
    "PAM Kuwait Work Permit",
    "Kuwait Salary in INR",
    "Sahel Ashal Kuwait",
    "Kuwait Welder Jobs",
    "Wafid Medical Kuwait",
    "Kuwait Civil ID PACI",
    "Kuwait Oil Gas Shutdown",
    "WorkWise Visa Gulf"
  ],
  metaTitle: "Kuwait Article 18 Work Visa 2026: PAM Permit, Jobs & Salary | WorkWise",
  metaDescription: "Complete 2026 guide to Kuwait Article 18 private sector work visas: PAM Sahel permits, oil & gas jobs, KWD salaries in INR, Wafid medical, VFS stamping & scam check.",
  metaKeywords: "kuwait work visa 2026, kuwait article 18 work visa, pam kuwait work permit, kuwait salary in inr, sahel kuwait, kuwait welder jobs, kuwait oil gas jobs, vfs kuwait india",
  canonicalUrl: "https://www.workwisevisa.com/blogs/kuwait-article-18-work-visa-master-guide-2026-pam-permit-salary-stamping",
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

const blogString = ',\n' + JSON.stringify(kuwaitBlog, null, 2) + '\n';

const updatedContent = 
  beforeMarker.slice(0, lastBracketIndex).trimEnd() + 
  blogString + 
  '];\n\n' + 
  afterMarker;

fs.writeFileSync(dataFilePath, updatedContent, 'utf8');
console.log('Successfully inserted blog-48 into lib/data.ts!');

