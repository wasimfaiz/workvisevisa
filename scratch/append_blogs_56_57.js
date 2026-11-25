const fs = require('fs');

const germanyMd = fs.readFileSync('scratch/germany_blog_content.md', 'utf8');
const usaMd = fs.readFileSync('scratch/usa_blog_content.md', 'utf8');
let dataContent = fs.readFileSync('lib/data.ts', 'utf8');

const blog56 = {
  id: "blog-56",
  title: "Germany Work Visa & Opportunity Card (Chancenkarte) Complete Guide 2026: EU Blue Card €50,700 Threshold, 6-Point System, Sperrkonto (€1,091/mo), ZAB Recognition & VFS India",
  slug: "germany-work-visa-opportunity-card-chancenkarte-guide-2026-blue-card-sperrkonto-zab",
  category: "Europe Visas",
  date: "Nov 23, 2026",
  readTime: "26 min read",
  image: "/images/germany-work-visa-guide.webp",
  author: "Wasim Faiz",
  excerpt: "Authoritative 2026 master guide to securing a Germany Work Visa and Opportunity Card (Chancenkarte § 20a). Detailed breakdown of the 6-point assessment, EU Blue Card €50,700 & €45,934.20 thresholds, Experience-Based Recognition (§ 19c Abs. 2), Sperrkonto (€1,091/mo), Anabin/ZAB equivalence, CSP online filing, 10 trade & IT salaries in EUR/INR, and 21-month fast-track PR.",
  tags: [
    "Germany Work Visa",
    "Germany Opportunity Card",
    "Chancenkarte 2026",
    "EU Blue Card Germany",
    "Sperrkonto Blocked Account",
    "ZAB Statement of Comparability",
    "Germany Salary in INR",
    "WorkWise Visa"
  ],
  content: germanyMd,
  published: true,
  featured: true
};

const blog57 = {
  id: "blog-57",
  title: "USA Work Visa Guide 2026: H-1B Wage-Weighted Lottery, $215 Registration, L-1 Intra-Company Transfer, H-2B Seasonal Trades & EB-3 Green Card Pathway",
  slug: "usa-work-visa-guide-2026-h1b-wage-weighted-lottery-l1-h2b-eb3-green-card",
  category: "USA Visas",
  date: "Nov 24, 2026",
  readTime: "27 min read",
  image: "/images/usa-work-visa-guide.webp",
  author: "Wasim Faiz",
  excerpt: "Comprehensive 2026 master guide to USA Work Visas for Indian professionals and tradesmen. Complete breakdown of the H-1B Wage-Weighted Lottery (Levels I-IV), $215 electronic registration, USCIS Form I-129 fees, L-1A/L-1B cap-exempt transfers, H-2B non-agricultural permits, CGI Federal India interviews, 10 occupation salaries in USD/INR, and AC21 Green Card extensions.",
  tags: [
    "USA Work Visa",
    "H-1B Visa 2026",
    "USCIS Wage Weighted Lottery",
    "L-1 Visa India",
    "H-2B Work Visa",
    "EB-3 Green Card",
    "USA Salary in INR",
    "WorkWise Visa"
  ],
  content: usaMd,
  published: true,
  featured: true
};

const blog56Str = `,\n${JSON.stringify(blog56, null, 2)}`;
const blog57Str = `,\n${JSON.stringify(blog57, null, 2)}`;

const targetStr = '\n];\n\nexport const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);';

if (!dataContent.includes(targetStr)) {
  console.error("Target string not found in lib/data.ts!");
  process.exit(1);
}

const replacement = `${blog56Str}${blog57Str}${targetStr}`;
dataContent = dataContent.replace(targetStr, replacement);

fs.writeFileSync('lib/data.ts', dataContent, 'utf8');
console.log("Successfully appended blog-56 and blog-57 to lib/data.ts!");

