const fs = require('fs');

const greeceBlogContent = fs.readFileSync('scratch/greece_seasonal_blog.md', 'utf8');

// Build the new blog object
const newBlog31 = {
  id: "blog-31",
  title: "Greece Seasonal Work Visa (Metaklisi) Complete Guide 2026: Agricultural Jobs, Hotel Staff, Salaries & Application Process",
  slug: "greece-seasonal-work-visa-complete-guide-2026-jobs-salary-metaklisi-process",
  category: "European Work Visa",
  date: "Oct 26, 2026",
  readTime: "15 min read",
  excerpt: "Definitive 2026 guide to Greece seasonal work visas (Type D) under the Metaklisi system. Learn agricultural & hotel job quotas, €830+ monthly minimum wages, GVCW New Delhi visa requirements, AFM/AMKA registration, and how to avoid illegal agent scams.",
  image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
  author: "Wasim Faiz",
  tags: [
    "Greece Seasonal Work Visa",
    "Greece Metaklisi Process",
    "Greece Farm Jobs",
    "Greece Agricultural Work Visa",
    "Greece Hotel Seasonal Jobs",
    "Greece Type D Visa India",
    "GVCW New Delhi Greece Visa",
    "Greece Work Permit 2026",
    "Europe Seasonal Work Visa",
    "Greece Minimum Wage 2026",
    "WorkWise Visa Europe"
  ],
  metaTitle: "Greece Seasonal Work Visa Guide 2026: Jobs, Salary & Metaklisi",
  metaDescription: "Master the 2026 Greece seasonal work visa (Type D) under the Metaklisi framework. Check agricultural & hotel jobs, €830+ wages, document checklists & GVCW processing.",
  metaKeywords: "Greece seasonal work visa 2026, Greece seasonal work visa for Indian citizens, Greece metaklisi process, Greece farm worker visa, Greece hotel seasonal jobs, Greece Type D visa GVCW New Delhi, Greece work permit cost, Greece seasonal visa validity 9 months, Law 5038 2023 Greece immigration",
  published: true,
  featured: true,
  views: 1850,
  content: greeceBlogContent
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
const blog31Code = '  ' + JSON.stringify(newBlog31, null, 2).split('\n').join('\n  ') + ',\n';

const newContent = fileContent.slice(0, closingBracketIdx) + blog31Code + fileContent.slice(closingBracketIdx);

fs.writeFileSync(dataFilePath, newContent, 'utf8');
console.log("Successfully added blog-31 to lib/data.ts!");
