const fs = require('fs');

const contentMarkdown = fs.readFileSync('./scratch/saudi_blog_content.md', 'utf8');

const saudiBlog = {
  id: "blog-49",
  title: "Saudi Arabia Work Visa (Iqama & Qiwa) Master Guide 2026: Qiwa Digital Contract, Takamol SVP 23 Trades Test, Wafid Medical, Stamping & Azad Visa Scam Alert",
  slug: "saudi-arabia-work-visa-iqama-qiwa-master-guide-2026-takamol-wafid-salary-stamping",
  category: "Gulf Visas",
  date: "Nov 16, 2026",
  readTime: "25 min read",
  excerpt: "Definitive 2026 field guide to Saudi Arabia work visas & Iqama: Qiwa electronic contracts, Takamol SVP trade testing for 23 trades, Wafid GAMCA medical, VFS TasHeel stamping, SAR to INR salary math, and Azad Visa scam protection.",
  image: "/images/saudi-arabia-work-visa-guide.webp",
  author: "Wasim Faiz",
  tags: [
    "Saudi Arabia Work Visa 2026",
    "Saudi Iqama Process",
    "Qiwa Contract Saudi Arabia",
    "Takamol SVP Trade Test",
    "Wafid GAMCA Saudi Medical",
    "Saudi Salary in INR",
    "VFS TasHeel Saudi Arabia",
    "Saudi Vision 2030 Jobs",
    "Azad Visa Saudi Reality",
    "WorkWise Visa Gulf"
  ],
  metaTitle: "Saudi Arabia Work Visa 2026: Iqama, Qiwa & Takamol | WorkWise",
  metaDescription: "Complete 2026 guide to Saudi Arabia work visas: Qiwa digital contract, Takamol SVP test, Wafid medical, SAR salaries in INR, VFS TasHeel stamping & scam check.",
  metaKeywords: "saudi arabia work visa 2026, saudi iqama process, qiwa contract saudi arabia, takamol svp trade test, wafid medical saudi, saudi salary in inr, vfs tasheel saudi",
  canonicalUrl: "https://www.workwisevisa.com/blogs/saudi-arabia-work-visa-iqama-qiwa-master-guide-2026-takamol-wafid-salary-stamping",
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

const blogString = ',\n' + JSON.stringify(saudiBlog, null, 2) + '\n';

const updatedContent = 
  beforeMarker.slice(0, lastBracketIndex).trimEnd() + 
  blogString + 
  '];\n\n' + 
  afterMarker;

fs.writeFileSync(dataFilePath, updatedContent, 'utf8');
console.log('Successfully inserted blog-49 into lib/data.ts!');

