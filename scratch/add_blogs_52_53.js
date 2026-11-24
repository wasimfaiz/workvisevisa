const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');
let dataContent = fs.readFileSync(dataPath, 'utf8');

const qatarContent = fs.readFileSync(path.join(__dirname, 'qatar_blog_content.md'), 'utf8');
const franceContent = fs.readFileSync(path.join(__dirname, 'france_blog_content.md'), 'utf8');

const blog52 = {
  id: "blog-52",
  title: "Qatar Work Visa & QID Complete Guide 2026: Ministry of Labour Approval, QVC Medical & Biometrics, Metrash2 Tracking & Salary Breakdown",
  slug: "qatar-work-visa-qid-complete-guide-2026-mol-contract-qvc-medical-metrash2",
  category: "Qatar Visas",
  date: "Nov 19, 2026",
  readTime: "24 min read",
  image: "/images/qatar-work-visa-guide.webp",
  author: "Wasim Faiz",
  excerpt: "Authoritative 2026 master guide to securing a Qatar Work Visa and Qatar ID (QID). In-depth breakdown of Ministry of Labour (MoL) quota approvals, electronic contract verification, Qatar Visa Center (QVC) biometrics and medical screening across India, Metrash2 tracking, Wage Protection System (WPS) rules in QAR, real salary benchmarks in INR, FAQs, and fake free-visa scam warnings.",
  tags: [
    "Qatar Work Visa",
    "Qatar ID QID",
    "QVC Biometrics India",
    "Qatar Labour Law",
    "Metrash2 Tracking",
    "Qatar Salary in INR",
    "WorkWise Visa"
  ],
  content: qatarContent,
  published: true,
  featured: true
};

const blog53 = {
  id: "blog-53",
  title: "France Work Visa for Indian Workers 2026: VLS-TS Salarié, Passeport Talent, DREETS Work Authorization, SMIC Salaries & VFS Process",
  slug: "france-work-visa-for-indian-workers-2026-vls-ts-salarie-dreets-smic-salary-vfs",
  category: "Europe Visas",
  date: "Nov 20, 2026",
  readTime: "25 min read",
  image: "/images/france-work-visa-guide.webp",
  author: "Wasim Faiz",
  excerpt: "Comprehensive 2026 statutory master guide to securing a France Work Visa for Indian professionals and skilled tradespeople. Complete analysis of VLS-TS Salarié permits, Passeport Talent categories, DREETS work authorization (Autorisation de Travail), SMIC minimum wage (€1,766+ gross ≈ ₹1.6 Lakh INR), OFII validation, VFS Global consular submission, FAQs, and Indian mobility partnership pathways.",
  tags: [
    "France Work Visa",
    "VLS-TS Salarie",
    "France Work Permit DREETS",
    "Passeport Talent",
    "France SMIC Salary",
    "France VFS India",
    "WorkWise Visa"
  ],
  content: franceContent,
  published: true,
  featured: true
};

const targetStr = '\n];\n\nexport const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);';
const idx = dataContent.indexOf(targetStr);

if (idx === -1) {
  console.error("Target string not found in lib/data.ts!");
  process.exit(1);
}

const newEntries = ',\n' + JSON.stringify(blog52, null, 2) + ',\n' + JSON.stringify(blog53, null, 2);

const updatedContent = dataContent.substring(0, idx) + newEntries + dataContent.substring(idx);

fs.writeFileSync(dataPath, updatedContent, 'utf8');
console.log("Successfully added blog-52 and blog-53 to lib/data.ts!");

