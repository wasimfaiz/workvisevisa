const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');
let dataContent = fs.readFileSync(dataPath, 'utf8');

const b50Content = fs.readFileSync(path.join(__dirname, 'b50_unique.md'), 'utf8');
const b51Content = fs.readFileSync(path.join(__dirname, 'b51_unique.md'), 'utf8');
const b52Content = fs.readFileSync(path.join(__dirname, 'b52_unique.md'), 'utf8');
const b53Content = fs.readFileSync(path.join(__dirname, 'b53_unique.md'), 'utf8');

const blog50 = {
  id: "blog-50",
  title: "UAE 2-Year Employment Visa & MOHRE Labour Contract Master Guide 2026: Skill Level 1-5 Tiers, MB Offer Audit, Mainland vs Free Zone & ILOE Rights",
  slug: "uae-2-year-employment-visa-mohre-work-permit-guide-2026-offer-letter-labor-card-emirates-id",
  category: "UAE Visas",
  date: "Nov 17, 2026",
  readTime: "24 min read",
  image: "/images/uae-employment-visa-guide.webp",
  author: "Wasim Faiz",
  excerpt: "Definitive 2026 statutory master guide to securing a UAE 2-Year Employment Visa across Dubai and Abu Dhabi. In-depth analysis of the new MOHRE Skill Level 1-5 classification matrix, attestation mandates, Mainland vs Free Zone comparative rights, electronic MB offer letter audits, DHA/EHS medical fitness, ICP Emirates ID biometrics, WPS salary rules, and Tawjeeh attendance.",
  tags: [
    "UAE Work Visa",
    "Dubai Employment Visa",
    "MOHRE Skill Levels",
    "UAE Labor Contract",
    "Emirates ID Biometrics",
    "WPS Dubai",
    "WorkWise Visa"
  ],
  content: b50Content,
  published: true,
  featured: true
};

const blog51 = {
  id: "blog-51",
  title: "Bahrain Work Visa & LMRA Work Permit Complete Guide 2026: EMS Application, Registered Worker Reforms, Wafid Medical, CPR Smart Card & BHD Salaries",
  slug: "bahrain-work-visa-lmra-permit-complete-guide-2026-wafid-cpr-salary-stamping",
  category: "Bahrain Visas",
  date: "Nov 18, 2026",
  readTime: "24 min read",
  image: "/images/bahrain-work-visa-guide.webp",
  author: "Wasim Faiz",
  excerpt: "Authoritative 2026 master guide to securing a Bahrain Work Visa and LMRA Work Permit. In-depth breakdown of the Expatriate Management System (EMS), the new Registered Worker Permit reforms (Flexi-Visa replacement), LMRA Express status codes, Wafid (GAMCA) medical screening, NPRA residency stamping, CPR Smart Card issuance, Wage Protection System (WPS) rules, real BHD to INR salary benchmarks, and Article 25 job mobility rights.",
  tags: [
    "Bahrain Work Visa",
    "LMRA Work Permit",
    "Registered Worker Permit Bahrain",
    "Bahrain EMS Portal",
    "Wafid Medical Bahrain",
    "Bahrain CPR Card",
    "Bahrain Salary in INR",
    "WorkWise Visa"
  ],
  content: b51Content,
  published: true,
  featured: true
};

const blog52 = {
  id: "blog-52",
  title: "Qatar Work Visa & QID Complete Guide 2026: North Field LNG Megaprojects, QVC India Centers, MoL Electronic Contracts, Metrash2 Tracking & Salary Breakdown",
  slug: "qatar-work-visa-qid-complete-guide-2026-mol-contract-qvc-medical-metrash2",
  category: "Qatar Visas",
  date: "Nov 19, 2026",
  readTime: "25 min read",
  image: "/images/qatar-work-visa-guide.webp",
  author: "Wasim Faiz",
  excerpt: "Authoritative 2026 master guide to securing a Qatar Work Visa and Qatar ID (QID). In-depth breakdown of North Field East (NFE) energy expansion recruitment, Ministry of Labour (MoL) unified electronic contracts, complete directory of 7 Qatar Visa Centers (QVC) across India with operational timings, Metrash2 tracking, statutory minimum wage (QAR 1,800 package), Wage Protection System (WPS) rules, and fake free-visa scam warnings.",
  tags: [
    "Qatar Work Visa",
    "Qatar ID QID",
    "North Field LNG Jobs",
    "QVC Biometrics India",
    "Qatar Labour Law",
    "Metrash2 Tracking",
    "Qatar Salary in INR",
    "WorkWise Visa"
  ],
  content: b52Content,
  published: true,
  featured: true
};

const blog53 = {
  id: "blog-53",
  title: "France Work Visa for Indian Workers 2026: VLS-TS Salarié, Passeport Talent, Métiers en Tension Shortage Matrix, DREETS Authorization & Payslip Breakdown",
  slug: "france-work-visa-for-indian-workers-2026-vls-ts-salarie-dreets-smic-salary-vfs",
  category: "Europe Visas",
  date: "Nov 20, 2026",
  readTime: "26 min read",
  image: "/images/france-work-visa-guide.webp",
  author: "Wasim Faiz",
  excerpt: "Comprehensive 2026 statutory master guide to securing a France Work Visa for Indian professionals and skilled tradespeople. Complete analysis of the France-India Mobility Partnership, regional shortage occupation lists (Métiers en Tension), DREETS work authorization via ANEF, Passeport Talent vs VLS-TS comparative rights, mathematical French payslip (Fiche de Paie) brut to net deductions, SMIC wage rules (€1,766+ gross ≈ ₹1.6L INR), OFII validation, and VFS Global India consular processing.",
  tags: [
    "France Work Visa",
    "VLS-TS Salarie",
    "France Work Permit DREETS",
    "Metiers en Tension France",
    "Passeport Talent",
    "France Payslip Net Salary",
    "France VFS India",
    "WorkWise Visa"
  ],
  content: b53Content,
  published: true,
  featured: true
};

const targetStr = '\n];\n\nexport const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);';
const targetIdx = dataContent.indexOf(targetStr);
const pos50 = dataContent.indexOf('"id": "blog-50"');
const brace50 = dataContent.lastIndexOf('{\n  "id": "blog-50"', pos50);

if (targetIdx === -1 || pos50 === -1 || brace50 === -1) {
  console.error("Target boundary strings not found in lib/data.ts!");
  process.exit(1);
}

const newSlice = [
  JSON.stringify(blog50, null, 2),
  JSON.stringify(blog51, null, 2),
  JSON.stringify(blog52, null, 2),
  JSON.stringify(blog53, null, 2)
].join(',\n');

const updatedContent = dataContent.substring(0, brace50) + newSlice + dataContent.substring(targetIdx);

fs.writeFileSync(dataPath, updatedContent, 'utf8');
console.log("Successfully replaced Blog 50, 51, 52, 53 with unique master versions in lib/data.ts!");

