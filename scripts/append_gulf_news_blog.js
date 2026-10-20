const fs = require('fs');
const path = require('path');

const dataTsPath = path.join(__dirname, '..', 'lib', 'data.ts');
const mdContentPath = path.join(__dirname, 'gulf_news_20_oct_content.md');

const content = fs.readFileSync(mdContentPath, 'utf8');

const blog25Object = `  {
    id: "blog-25",
    title: "Gulf Work Visa & Labour Law Updates (20 October 2026): UAE MoHRE Zero Bureaucracy, Saudi Qiwa Regularization, Qatar & Kuwait Hiring Opportunities",
    slug: "gulf-work-visa-labour-law-updates-october-2026-uae-mohre-saudi-qiwa-qatar-kuwait",
    category: "Gulf Visas",
    date: "Oct 20, 2026",
    readTime: "18 min read",
    excerpt: "Comprehensive 20 October 2026 Gulf labor updates: UAE MoHRE implements Zero Government Bureaucracy eliminating 100% of supporting documents for initial work permits; Saudi Arabia Qiwa opens 2-month regularization drive and caps instant work visas; Qatar & Kuwait ramp up industrial hiring. Featuring verified salary matrices across UAE, KSA, Qatar, Kuwait & Oman in INR (₹), Wafid medical rules, and anti-fraud contract verification guidelines.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    author: "Wasim Faiz",
    tags: [
      "Gulf News",
      "UAE Work Visa",
      "MoHRE Zero Bureaucracy",
      "Saudi Arabia Qiwa",
      "Qiwa Regularization 2026",
      "Qatar Work Visa",
      "Kuwait Labour Law",
      "Wage Protection System WPS",
      "GAMCA Wafid Medical",
      "Gulf Jobs for Indians",
      "WorkWise Visa Placement",
      "Overseas Employment 2026"
    ],
    metaTitle: "Gulf Work Visa & Labour Law Updates (20 Oct 2026): UAE MoHRE, Saudi Qiwa & GCC Hiring",
    metaDescription: "Official 20 October 2026 Gulf labor updates: UAE MoHRE Zero Bureaucracy rules, employer-paid visa costs, Saudi Qiwa 2-month regularization & instant visa caps, Qatar & Kuwait hiring quotas.",
    metaKeywords: "gulf work visa rules 20 october 2026, uae mohre work permit updates, saudi arabia qiwa new rules october 2026, qiwa regularization drive, uae zero bureaucracy work visa, gulf news job opportunities, qatar work permit 2026, kuwait foreign labor rules, gamca wafid test rules, overseas employment news",
    published: true,
    featured: true,
    views: 3850,
    content: ${JSON.stringify(content)},
  },
`;

let dataTs = fs.readFileSync(dataTsPath, 'utf8');

const exportMarker = 'export const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);';
const exportIdx = dataTs.indexOf(exportMarker);
if (exportIdx === -1) {
  console.error('Could not find export const blogPosts in data.ts!');
  process.exit(1);
}

const lastBracketIdx = dataTs.lastIndexOf('];', exportIdx);
if (lastBracketIdx === -1) {
  console.error('Could not find closing bracket before export in data.ts!');
  process.exit(1);
}

const blog25Marker = 'id: "blog-25"';
if (dataTs.includes(blog25Marker)) {
  const blogIdx = dataTs.indexOf(blog25Marker);
  const startIdx = dataTs.lastIndexOf('  {', blogIdx);
  dataTs = dataTs.substring(0, startIdx) + blog25Object + dataTs.substring(lastBracketIdx);
  fs.writeFileSync(dataTsPath, dataTs, 'utf8');
  console.log('Successfully updated blog-25 in lib/data.ts!');
  process.exit(0);
}

dataTs = dataTs.substring(0, lastBracketIdx) + blog25Object + dataTs.substring(lastBracketIdx);
fs.writeFileSync(dataTsPath, dataTs, 'utf8');
console.log('Successfully added blog-25 into lib/data.ts!');
