const fs = require('fs');

const maltaBlogContent = fs.readFileSync('scratch/malta_work_visa_blog.md', 'utf8');

const newBlog32 = {
  id: "blog-32",
  title: "Malta Work Visa (Single Permit) Complete Guide 2026: Jobs, Salary, Identità AIP, Skills Pass & VFS Application Process",
  slug: "malta-work-visa-single-permit-complete-guide-2026-jobs-salary-identita-vfs",
  category: "European Work Visa",
  date: "Oct 28, 2026",
  readTime: "16 min read",
  excerpt: "Definitive 2026 guide to Malta Single Work Permits via Identità & Jobsplus. Learn in-demand driver & hotel jobs, €925+ minimum wages, Approval in Principle (AIP) rules, Skills Pass & VFS New Delhi process.",
  image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
  author: "Wasim Faiz",
  tags: [
    "Malta Work Visa",
    "Malta Single Permit",
    "Identita Malta AIP",
    "Jobsplus Vacancy Malta",
    "Malta Driver Jobs 2026",
    "Malta Hotel Jobs",
    "Malta Skills Pass",
    "VFS Malta India",
    "Malta Work Permit 2026",
    "Europe Work Visa",
    "WorkWise Visa Europe"
  ],
  metaTitle: "Malta Work Visa Guide 2026: Single Permit, Jobs, Salary & AIP",
  metaDescription: "Master the 2026 Malta Single Work Permit process under Identità & Jobsplus. Discover driver & hotel jobs, €925+ wages, Skills Pass & VFS New Delhi appointment steps.",
  metaKeywords: "Malta work visa 2026, Malta work visa for Indian citizens, Malta single permit process, Identita Malta Approval in Principle AIP, Malta driver jobs salary 2026, Malta hotel jobs, Malta skills pass, Jobsplus vacancy clearance, VFS Global Malta India, Malta work permit processing time",
  published: true,
  featured: true,
  views: 1920,
  content: maltaBlogContent
};

const dataFilePath = 'lib/data.ts';
let fileContent = fs.readFileSync(dataFilePath, 'utf8');

const targetStr = 'export const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);';
const exportIdx = fileContent.indexOf(targetStr);

if (exportIdx === -1) {
  console.error("Export string not found in lib/data.ts");
  process.exit(1);
}

// Find the last `];` before this export
const beforeExport = fileContent.slice(0, exportIdx);
const closingBracketIdx = beforeExport.lastIndexOf('];');

if (closingBracketIdx === -1) {
  console.error("Closing bracket of rawBlogPosts not found");
  process.exit(1);
}

// Format the new blog object as TypeScript code
const blog32Code = '  ' + JSON.stringify(newBlog32, null, 2).split('\n').join('\n  ') + ',\n';

const newContent = fileContent.slice(0, closingBracketIdx) + blog32Code + fileContent.slice(closingBracketIdx);

fs.writeFileSync(dataFilePath, newContent, 'utf8');
console.log("Successfully added blog-32 (Malta Work Visa) to lib/data.ts!");
