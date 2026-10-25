const fs = require('fs');

const mdContent = fs.readFileSync('scratch/blog_30_english.md', 'utf8');

const updatedBlog30 = {
  id: "blog-30",
  title: "Bihar & UP Gulf Work Visa Master Guide 2026: Official Deployment Process, MEA eMigrate Rules, Wafid GAMCA Medical & Scam Protection",
  slug: "bihar-up-gulf-work-visa-guide-process-scam-protection-2026",
  category: "Gulf Visas",
  date: "Oct 26, 2026",
  readTime: "14 min read",
  excerpt: "Authoritative 2026 manual for job seekers across Bihar & Eastern UP migrating to the Gulf. Learn MEA eMigrate PoE clearance, Wafid GAMCA medical protocols, Qiwa/MOHRE contract verification, and protection against unauthorized sub-agents.",
  image: "https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=1200&q=80",
  author: "Wasim Faiz",
  tags: [
    "Bihar Gulf Work Visa",
    "UP Gulf Job Consultancy",
    "eMigrate Rules Bihar",
    "Wafid GAMCA Patna",
    "Wafid Lucknow Medical",
    "Fake Visa Check Online",
    "Saudi Work Visa Siwan",
    "Dubai Jobs Gorakhpur",
    "Gopalganj Gulf Agency",
    "Qiwa Contract Verification",
    "MOHRE Offer Letter",
    "ECR Passport Gulf Visa",
    "WorkWise Visa Patna"
  ],
  metaTitle: "Bihar & UP Gulf Work Visa Guide 2026: Process & Scam Safety",
  metaDescription: "Complete 2026 Gulf work visa guide for Bihar & UP candidates. Learn MEA eMigrate rules, Wafid GAMCA medical, Qiwa contracts & how to avoid fraud agents.",
  metaKeywords: "Bihar Gulf work visa 2026, UP Gulf job consultancy, overseas agency Patna, visa consultancy Gorakhpur, Gulf jobs Siwan Gopalganj, Wafid medical Patna, eMigrate PoE clearance, fake visa check online, Saudi work visa, Dubai employment visa",
  published: true,
  featured: true,
  views: 3120,
  content: mdContent
};

const dataFilePath = 'lib/data.ts';
let fileContent = fs.readFileSync(dataFilePath, 'utf8');

const blog30StartPattern = '"id": "blog-30",';
const blog30Idx = fileContent.indexOf(blog30StartPattern);

if (blog30Idx === -1) {
  console.error("blog-30 pattern not found");
  process.exit(1);
}

// Find opening `{` before this
const openingBraceIdx = fileContent.lastIndexOf('{\n', blog30Idx);

// Target string after rawBlogPosts
const targetStr = 'export const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);';
const exportIdx = fileContent.indexOf(targetStr);
const beforeExport = fileContent.slice(0, exportIdx);
const closingBraceIdx = beforeExport.lastIndexOf('},');

const blog30Str = '  ' + JSON.stringify(updatedBlog30, null, 2)
  .split('\n')
  .map((line, i) => i === 0 ? line : '  ' + line)
  .join('\n');

const newContent = fileContent.slice(0, openingBraceIdx) + blog30Str + ',\n' + fileContent.slice(closingBraceIdx + 2);

fs.writeFileSync(dataFilePath, newContent, 'utf8');
console.log("Successfully updated blog-30 to English in lib/data.ts!");
