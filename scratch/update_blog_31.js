const fs = require('fs');

const updatedMd = fs.readFileSync('scratch/greece_seasonal_blog.md', 'utf8');
const dataFilePath = 'lib/data.ts';
let fileContent = fs.readFileSync(dataFilePath, 'utf8');

const blog31Pattern = '"id": "blog-31",';
const blog31Idx = fileContent.indexOf(blog31Pattern);

if (blog31Idx === -1) {
  console.error("blog-31 not found in lib/data.ts");
  process.exit(1);
}

// Find opening `{` before blog-31
const openingBraceIdx = fileContent.lastIndexOf('{\n', blog31Idx);

// Target export after rawBlogPosts
const targetExport = 'export const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);';
const exportIdx = fileContent.indexOf(targetExport);
const beforeExport = fileContent.slice(0, exportIdx);
const closingBraceIdx = beforeExport.lastIndexOf('},');

// Read the blog-31 object structure and replace its content
const updatedBlog31 = {
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
  content: updatedMd
};

const blog31Str = '  ' + JSON.stringify(updatedBlog31, null, 2).split('\n').join('\n  ');

const newContent = fileContent.slice(0, openingBraceIdx) + blog31Str + fileContent.slice(closingBraceIdx + 1);

fs.writeFileSync(dataFilePath, newContent, 'utf8');
console.log("Successfully updated blog-31 in lib/data.ts with external links!");
