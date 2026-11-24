const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');
let dataContent = fs.readFileSync(dataPath, 'utf8');

const uaeContent = fs.readFileSync(path.join(__dirname, 'b50_updated.md'), 'utf8');
const bahrainContent = fs.readFileSync(path.join(__dirname, 'b51_updated.md'), 'utf8');

const blog50 = {
  id: "blog-50",
  title: "UAE 2-Year Employment Visa & MOHRE Work Permit Guide 2026: Offer Letter, Labor Card, Medical Fitness & Emirates ID",
  slug: "uae-2-year-employment-visa-mohre-work-permit-guide-2026-offer-letter-labor-card-emirates-id",
  category: "UAE Visas",
  date: "Nov 17, 2026",
  readTime: "22 min read",
  image: "/images/uae-employment-visa-guide.webp",
  author: "Wasim Faiz",
  excerpt: "Definitive 2026 master guide to securing a UAE 2-Year Employment Residence Visa across Dubai and Abu Dhabi. Complete breakdown of MOHRE electronic job offer letters, entry permit issuance, in-country change of status, medical fitness screening, ICP Emirates ID biometrics, electronic labor card, WPS salary protection, FAQs, and visit-visa job scam warnings.",
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
  excerpt: "Authoritative 2026 master guide to securing a Bahrain Work Visa and LMRA Work Permit. In-depth breakdown of the Expatriate Management System (EMS), Registered Worker Permit reforms, Wafid (GAMCA) medical screening, NPRA residency stamping, CPR Smart Card issuance, Wage Protection System (WPS) rules, real BHD to INR salary benchmarks, FAQs, and labor mobility rights.",
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

const targetStr = '\n];\n\nexport const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);';
const targetIdx = dataContent.indexOf(targetStr);
const pos50 = dataContent.indexOf('"id": "blog-50"');
const brace50 = dataContent.lastIndexOf('{\n  "id": "blog-50"', pos50);

if (targetIdx === -1 || pos50 === -1 || brace50 === -1) {
  console.error("Boundaries not found!");
  process.exit(1);
}

const newSlice = JSON.stringify(blog50, null, 2) + ",\n" + JSON.stringify(blog51, null, 2);

const updatedData = dataContent.substring(0, brace50) + newSlice + dataContent.substring(targetIdx);

fs.writeFileSync(dataPath, updatedData, 'utf8');
console.log("Successfully updated lib/data.ts with enriched Blog 50 and Blog 51!");

