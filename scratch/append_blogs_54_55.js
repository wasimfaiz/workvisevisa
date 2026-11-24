const fs = require('fs');

const omanMd = fs.readFileSync('scratch/oman_blog_content.md', 'utf8');
const ukMd = fs.readFileSync('scratch/uk_blog_content.md', 'utf8');
let dataContent = fs.readFileSync('lib/data.ts', 'utf8');

const blog54 = {
  id: "blog-54",
  title: "Oman 2-Year Employment Visa & Royal Oman Police (ROP) Work Permit Complete Guide 2026: MoL Sanad Clearance, Royal Decree 53/2023, Wafid Medical, Resident Card (Bataqa) & Minimum Salaries",
  slug: "oman-2-year-employment-visa-rop-work-permit-guide-2026-mol-sanad-wafid-bataqa",
  category: "Oman Visas",
  date: "Nov 21, 2026",
  readTime: "25 min read",
  image: "/images/oman-work-visa-guide.webp",
  author: "Wasim Faiz",
  excerpt: "Authoritative 2026 master guide to securing an Oman 2-Year Employment Visa and ROP Work Permit under Royal Decree 53/2023. Detailed breakdown of MoL Sanad portal clearance, Wafid GAMCA medical protocols, Royal Oman Police eVisa stamping, Civil Status Resident Card (Bataqa), OMR remittance economics ($2.60 USD peg), 10 trade salary scales in INR, and legal worker protections.",
  tags: [
    "Oman Work Visa",
    "Oman Employment Visa",
    "ROP Work Permit",
    "MoL Sanad Oman",
    "Royal Decree 53 2023",
    "Oman Resident Card Bataqa",
    "Wafid Oman Medical",
    "Oman Salary in INR",
    "WorkWise Visa"
  ],
  content: omanMd,
  published: true,
  featured: true
};

const blog55 = {
  id: "blog-55",
  title: "UK Skilled Worker Visa Complete Guide 2026: Home Office 70-Point System, Defined CoS, £38,700 Threshold, Immigration Salary List (ISL), SELT English & ILR Settlement",
  slug: "uk-skilled-worker-visa-complete-guide-2026-70-points-defined-cos-salary-list-ilr",
  category: "UK Visas",
  date: "Nov 22, 2026",
  readTime: "27 min read",
  image: "/images/uk-skilled-worker-visa-guide.webp",
  author: "Wasim Faiz",
  excerpt: "Authoritative 2026 master guide to the UK Skilled Worker Visa under the Home Office Points-Based System. In-depth analysis of the 70-point requirement, £38,700 general salary threshold, Immigration Salary List (ISL) trade discounts, Defined vs Undefined CoS, SELT B1 English, Immigration Health Surcharge (IHS), 10 occupation salary scales in GBP & INR, and the 5-year Indefinite Leave to Remain (ILR) settlement pathway.",
  tags: [
    "UK Skilled Worker Visa",
    "UK Work Visa 2026",
    "Defined CoS UK",
    "Home Office 70 Points",
    "Immigration Salary List ISL",
    "SELT English Test",
    "IHS Surcharge UK",
    "UK Salary in INR",
    "ILR Settlement UK",
    "WorkWise Visa"
  ],
  content: ukMd,
  published: true,
  featured: true
};

const blog54Str = `,\n${JSON.stringify(blog54, null, 2)}`;
const blog55Str = `,\n${JSON.stringify(blog55, null, 2)}`;

const targetStr = '\n];\n\nexport const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);';

if (!dataContent.includes(targetStr)) {
  console.error("Target string not found in lib/data.ts!");
  process.exit(1);
}

const replacement = `${blog54Str}${blog55Str}${targetStr}`;
dataContent = dataContent.replace(targetStr, replacement);

fs.writeFileSync('lib/data.ts', dataContent, 'utf8');
console.log("Successfully appended blog-54 and blog-55 to lib/data.ts!");

