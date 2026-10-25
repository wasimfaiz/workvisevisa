const fs = require('fs');

const mdContent = fs.readFileSync('scratch/blog_30_content.md', 'utf8');

const blog30 = {
  id: "blog-30",
  title: "Bihar & UP Gulf Work Visa Guide 2026: Sahi Process, MEA eMigrate Rules, Wafid Medical & Fraud Agents se Bachne Ka Tarika",
  slug: "bihar-up-gulf-work-visa-guide-process-scam-protection-2026",
  category: "Gulf Visas",
  date: "Oct 26, 2026",
  readTime: "14 min read",
  excerpt: "Bihar aur Eastern UP ke candidates ke liye Gulf work visa 2026 ka complete manual. Sikhein eMigrate PoE clearance, Wafid GAMCA medical, Qiwa aur MOHRE offer letter verification aur local fraud agents se 100% suraksha.",
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

// Target string
const targetStr = 'export const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);';
const idx = fileContent.indexOf(targetStr);

if (idx === -1) {
  console.error("Target string not found in lib/data.ts");
  process.exit(1);
}

const beforeTarget = fileContent.slice(0, idx);
const lastBraceIdx = beforeTarget.lastIndexOf('},');

if (lastBraceIdx === -1) {
  console.error("Last brace not found before target");
  process.exit(1);
}

// Convert blog30 object to string representation with proper indentation
const blog30Str = '  ' + JSON.stringify(blog30, null, 2)
  .split('\n')
  .map((line, i) => i === 0 ? line : '  ' + line)
  .join('\n');

const insertionCode = `  },\n${blog30Str},\n];\n\n`;
const newContent = fileContent.slice(0, lastBraceIdx) + insertionCode + fileContent.slice(idx);

fs.writeFileSync(dataFilePath, newContent, 'utf8');
console.log("Successfully inserted blog-30 into lib/data.ts!");
