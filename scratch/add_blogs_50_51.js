const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');
let dataContent = fs.readFileSync(dataPath, 'utf8');

const uaeContent = fs.readFileSync(path.join(__dirname, 'uae_employment_visa_content.md'), 'utf8');
const bahrainContent = fs.readFileSync(path.join(__dirname, 'bahrain_work_visa_content.md'), 'utf8');

const blog50 = {
  id: "blog-50",
  title: "UAE 2-Year Employment Visa & MOHRE Work Permit Guide 2026: Offer Letter, Labor Card, Medical Fitness & Emirates ID",
  slug: "uae-2-year-employment-visa-mohre-work-permit-guide-2026-offer-letter-labor-card-emirates-id",
  category: "UAE Visas",
  date: "Nov 17, 2026",
  readTime: "22 min read",
  image: "/images/uae-employment-visa-guide.webp",
  author: "Wasim Faiz",
  excerpt: "Definitive 2026 master guide to securing a UAE 2-Year Employment Residence Visa across Dubai and Abu Dhabi. Complete breakdown of MOHRE electronic job offer letters, entry permit issuance, in-country change of status, medical fitness screening, ICP Emirates ID biometrics, electronic labor card, WPS salary protection, and visit-visa job scam warnings.",
  tags: [
    "UAE Work Visa",
    "Dubai Employment Visa",
    "MOHRE Offer Letter",
    "Emirates ID Biometrics",
    "UAE Labor Card",
    "WPS Dubai",
    "WorkWise Visa"
  ],
  content: uaeContent,
  published: true,
  featured: true
};

const blog51 = {
  id: "blog-51",
  title: "Bahrain Work Visa & LMRA Work Permit Complete Guide 2026: EMS Application, Wafid Medical, CPR Smart Card & Salary Breakdown",
  slug: "bahrain-work-visa-lmra-permit-complete-guide-2026-wafid-cpr-salary-stamping",
  category: "Bahrain Visas",
  date: "Nov 18, 2026",
  readTime: "23 min read",
  image: "/images/bahrain-work-visa-guide.webp",
  author: "Wasim Faiz",
  excerpt: "Authoritative 2026 master guide to securing a Bahrain Work Visa and LMRA Work Permit. In-depth breakdown of the Expatriate Management System (EMS), Registered Worker Permit reforms, Wafid (GAMCA) medical screening, NPRA residency stamping, CPR Smart Card issuance, Wage Protection System (WPS) rules, real BHD to INR salary benchmarks, and labor mobility rights.",
  tags: [
    "Bahrain Work Visa",
    "LMRA Work Permit",
    "Bahrain EMS Portal",
    "Wafid Medical Bahrain",
    "Bahrain CPR Card",
    "Bahrain Salary in INR",
    "WorkWise Visa"
  ],
  content: bahrainContent,
  published: true,
  featured: true
};

// Target right before `\n];\n\nexport const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);`
const targetStr = '\n];\n\nexport const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);';
const idx = dataContent.indexOf(targetStr);

if (idx === -1) {
  console.error('Target string not found in data.ts!');
  process.exit(1);
}

const replacement = ',\n' + JSON.stringify(blog50, null, 2) + ',\n' + JSON.stringify(blog51, null, 2) + targetStr;

const updatedData = dataContent.slice(0, idx) + replacement + dataContent.slice(idx + targetStr.length);
fs.writeFileSync(dataPath, updatedData, 'utf8');
console.log('Successfully added blog-50 and blog-51 to lib/data.ts!');

