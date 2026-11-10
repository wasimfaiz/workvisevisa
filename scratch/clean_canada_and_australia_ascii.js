const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

// --- 1. Clean Canada Blog (blog-39) ---
const canadaPath = path.join(__dirname, 'canada_work_permit_blog.md');
let canadaContent = fs.readFileSync(canadaPath, 'utf8');

canadaContent = canadaContent.replace(/```[\s\S]*?CANADIAN WORK AUTHORIZATION ARCHITECTURE[\s\S]*?```/g,
`| Program Stream | Work Authorization Type | LMIA Requirement | Key Sub-Streams |
| :--- | :--- | :--- | :--- |
| **Temporary Foreign Worker Program (TFWP)** | Employer-Specific (Closed) Work Permit | Mandatory ESDC LMIA | High-Wage Stream, Low-Wage Stream, Agricultural Stream, Global Talent Stream (GTS) |
| **International Mobility Program (IMP)** | Open or Closed LMIA-Exempt Work Permit | Exempt from LMIA | Intra-Company Transfers (ICT), Post-Graduation Work Permits (PGWP), Spousal Open Work Permits (SOWP), CUSMA |`);

canadaContent = canadaContent.replace(/```[\s\S]*?Offered Hourly Wage[\s\S]*?```/g,
`| Parameter | Low-Wage LMIA Stream (< Median) | High-Wage LMIA Stream (≥ Median) |
| :--- | :--- | :--- |
| **Provincial Wage Floor** | Offered hourly wage is below provincial median | Offered hourly wage meets or exceeds provincial median |
| **Permit Duration** | Maximum 1 year duration (annual renewal) | Up to 2 years duration |
| **Workforce Cap** | 10% to 20% foreign worker employer cap | No employer workforce cap |
| **Employer Mandates** | Mandatory round-trip airfare & affordable housing support | Mandatory statutory Transition Plan |`);

canadaContent = canadaContent.replace(/```[\s\S]*?NOC 2021 \/ TEER CLASSIFICATION HIERARCHY[\s\S]*?```/g,
`| TEER Category | Education & Credential Benchmark | Typical Eligible Occupations |
| :--- | :--- | :--- |
| **TEER 0** | Management & Executive Roles | Construction Managers, Engineering Directors |
| **TEER 1** | University Degree (Bachelor / Master) | Civil Engineers, Software Developers, Physicians |
| **TEER 2** | 2–3 Year Technical Diploma or Apprenticeship | Industrial Electricians, Welders, Heavy Equipment Mechanics |
| **TEER 3** | 1–2 Year Vocational Certificate or ITI | Commercial Truck Drivers, Line Cooks, Bakers |
| **TEER 4** | Secondary School & Several Weeks Training | Home Support Workers, Health Care Aides |
| **TEER 5** | Short Work Demonstration (No formal education) | Construction Helpers, Farm Laborers, Material Handlers |`);

canadaContent = canadaContent.replace(/```[\s\S]*?CLOSED VS\. OPEN WORK PERMIT COMPARISON[\s\S]*?```/g,
`| Feature | Closed (Employer-Specific) Work Permit | Open Work Permit |
| :--- | :--- | :--- |
| **Governing Section** | Section 200 IRPR | Section 205 / 207 IRPR |
| **LMIA Requirement** | Mandatory (unless IMP code exempt) | Exempt |
| **Permitted Employer** | Named Employer Only | Any authorized employer |
| **Designated Job Title** | Specific NOC Code on Permit | Unrestricted |
| **Work Location** | Defined Province / City | Anywhere in Canada |
| **Spousal Eligibility** | Qualified TEER 0, 1, 2, 3 streams | Dependent on primary visa |
| **Freedom to Change Employer** | Requires new LMIA & permit amendment | Immediate & unrestricted |`);

canadaContent = canadaContent.replace(/```[\s\S]*?Primary Worker's NOC \/ TEER Level[\s\S]*?```/g,
`| Primary Worker's TEER Category | Spousal Work Permit (SOWP) Status | Key Conditions & Exemptions |
| :--- | :--- | :--- |
| **TEER 0, 1, 2, or 3** | **Fully Eligible for Open Work Permit** | Valid for identical duration as primary worker; no employer sponsorship required |
| **TEER 4 or 5 (General)** | Restricted / Non-Eligible | Exemptions apply for industrial construction, healthcare support, and agriculture pilots |`);

canadaContent = canadaContent.replace(/```[\s\S]*?CHRONOLOGICAL WORK PERMIT ROADMAP[\s\S]*?```/g,
`> [!NOTE]
> **Chronological Canada Work Permit Roadmap (2026)**
> 1. **Step 1: LMIA Approval**: Canadian employer completes 4-week Job Bank advertising and obtains positive LMIA from ESDC (4 to 12 weeks).
> 2. **Step 2: Formal Contract**: Employer issues formal Job Offer and ESDC 7-digit LMIA approval number to candidate.
> 3. **Step 3: Dossier Assembly**: Candidate compiles PSK Police Clearance (PCC), verified work experience, and financial funds.
> 4. **Step 4: Online IRCC Lodgement**: Application submitted on the IRCC Secure Portal with statutory fees ($155 + $85 CAD).
> 5. **Step 5: VFS Biometrics**: Biometric capture at an authorized VFS Global VAC in India (Delhi, Jalandhar, Chandigarh, etc.).
> 6. **Step 6: eMedical Exam**: Medical screening conducted by an empanelled IRCC panel physician clinic.
> 7. **Step 7: Passport Request (PPR)**: TRV counterfoil visa stamped via VFS secure two-way courier.
> 8. **Step 8: Port of Entry Landing**: CBSA border officer inspects documents at Toronto/Vancouver airport and prints the official Work Permit.`);

canadaContent = canadaContent.replace(/```[\s\S]*?12 Months Canadian Skilled Work Experience[\s\S]*?```/g,
`| Immigration Level | Program Pathway | Transition Advantage |
| :--- | :--- | :--- |
| **Federal (Express Entry)** | Canadian Experience Class (CEC) & Category Draws | Up to 80+ CRS points for Canadian experience; lower cutoffs for Trade and Transport draws |
| **Provincial (PNP)** | OINP In-Demand Skills, AAIP Rural, SINP Hard-to-Fill, AIP | Direct provincial nominations bypassing high Express Entry score competitions |`);

canadaContent = canadaContent.replace(/```[\s\S]*?RED FLAGS VS\. VERIFIED CANADIAN HIRING[\s\S]*?```/g,
`| Indicator | Fraudulent Scam Pattern | Genuine Canadian Hiring |
| :--- | :--- | :--- |
| **Upfront Cost Demands** | Demands ₹10 to ₹25 Lakhs for "LMIA Fee" | ZERO fee charged to candidate |
| **Employer Communication** | Free Gmail, Yahoo, or Outlook address | Verified corporate domain |
| **LMIA Documentation** | Refuses to share ESDC 7-digit file # | Official ESDC letter provided |
| **Interview Process** | Offer letter issued without interview | Technical video interview |
| **Visa Stamping Promise** | "100% Guaranteed Visa Without VFS" | Requires in-person VFS appointment |
| **Representative Licensing** | Unlicensed self-proclaimed "Agent" | Licensed RCIC or Law Firm |`);

fs.writeFileSync(canadaPath, canadaContent, 'utf8');
console.log('Cleaned scratch/canada_work_permit_blog.md successfully!');

// --- 2. Clean Australia Blog (blog-40) ---
const australiaPath = path.join(__dirname, 'australia_work_visa_blog.md');
let australiaContent = fs.readFileSync(australiaPath, 'utf8');

australiaContent = australiaContent.replace(/```[\s\S]*?AUSTRALIAN SKILLED EMPLOYMENT ARCHITECTURE[\s\S]*?```/g,
`| Pathway Tier | Visa Classification | Salary Benchmark | Primary Target Occupations |
| :--- | :--- | :--- | :--- |
| **Tier 1: Specialist Skills Stream** | Skills in Demand Visa | $135,000+ AUD / year | High-income executives, technology innovators, green energy specialists (7-day processing) |
| **Tier 2: Core Skills Stream** | Skills in Demand Visa | $73,150+ AUD (TSMIT floor) | Core vocational trades, mechanics, electricians, welders, chefs, engineers, nurses (CSOL List) |
| **Tier 3: Essential Skills Stream** | Skills in Demand Visa | Below $73,150 AUD | Regulated critical shortage sectors, aged care, agriculture (Union labor agreements) |
| **Permanent Residence (PR)** | Subclass 186 ENS / Subclass 190 | Prevailing market wage | 2 years on SID visa leads directly to permanent residency via ENS TRT stream |`);

australiaContent = australiaContent.replace(/```[\s\S]*?Australian Minimum Wage Floor[\s\S]*?```/g,
`| Wage Category | Rate in Australian Dollars (AUD) | Rate in Indian Rupees (INR Equivalent) |
| :--- | :--- | :--- |
| **National Minimum Wage** | $24.10 AUD / hr | ~₹1,350 INR / hr |
| **TSMIT Statutory Work Visa Floor** | $73,150 AUD / yr (~$37.02 AUD / hr) | ~₹41.0 Lakhs INR / yr |
| **Actual Market Trade & Skilled Earnings** | $78,000 – $130,000+ AUD / yr | ~₹43.6 Lakhs – ₹72.8 Lakhs INR / yr |`);

australiaContent = australiaContent.replace(/```[\s\S]*?TRA OFFSHORE SKILLS ASSESSMENT \(OSAP\) ROADMAP[\s\S]*?```/g,
`> [!NOTE]
> **TRA Offshore Skills Assessment (OSAP) Roadmap for Indian Trades**
> 1. **Stage 1: Documentary Verification**: Submission of ITI/NTC certificates, 3 to 5 years verified employment (EPFO, bank statements, ITR), and detailed reference letters.
> 2. **Stage 2: Technical Video Interview**: In-depth 1-to-2 hour interview in English by certified Australian trade assessors evaluating trade theory, safety (WHS), and blueprint reading.
> 3. **Stage 3: Practical Trade Demonstration**: Live workshop skills test at an accredited RTO testing facility in Delhi, Jalandhar, Mumbai, or Bengaluru.
> 4. **Outcome: TRA Certificate III/IV Equivalency**: Unlocks legal eligibility for Skills in Demand employer sponsorship and State PR nominations.`);

australiaContent = australiaContent.replace(/```[\s\S]*?STATUTORY FAIR WORK & SPONSORSHIP SAFEGUARDS[\s\S]*?```/g,
`| Safeguard Area | Statutory Mandate | Legal Protection for Overseas Workers |
| :--- | :--- | :--- |
| **Labour Market Testing (LMT)** | 2 ads on approved national portals (4 weeks) | Ensures foreign worker is filling a genuine vacancy without undercutting local jobs |
| **Annual Market Salary Rate (AMSR)** | Must match or exceed prevailing Australian pay | Eliminates wage exploitation; guarantees identical pay as Australian citizens |
| **TSMIT Statutory Floor** | Minimum $73,150 AUD per annum base salary | Strict baseline below which no standard skilled work visa can be approved |`);

australiaContent = australiaContent.replace(/```[\s\S]*?CHRONOLOGICAL AUSTRALIAN VISA ROADMAP[\s\S]*?```/g,
`> [!NOTE]
> **Chronological Australian Work Visa Roadmap (2026)**
> 1. **Step 1: Skills Assessment & English**: Complete TRA OSAP trade assessment and achieve IELTS 5.0+ or PTE 36+.
> 2. **Step 2: Employer Labour Market Testing**: Sponsoring employer runs 4-week LMT advertising on SEEK or Workforce Australia.
> 3. **Step 3: Business Sponsorship & Nomination**: Employer lodges Standard Business Sponsorship and pays the SAF levy via ImmiAccount.
> 4. **Step 4: Statutory Clearances**: Candidate compiles PSK Police Clearance (PCC), work experience proof, and financial statements.
> 5. **Step 5: Online Visa Lodgement**: Visa application lodged on DHA ImmiAccount with primary fee ($3,115 AUD).
> 6. **Step 6: VFS Biometrics**: 10-digit fingerprinting and live facial capture at an authorized VFS Global ABCC in India.
> 7. **Step 7: eMedical Screening**: Chest X-ray and blood pathology completed at an empanelled Bupa panel hospital.
> 8. **Step 8: Digital Visa Grant**: Official Visa Grant Notice issued via VEVO; no physical passport sticker required.`);

australiaContent = australiaContent.replace(/```[\s\S]*?2 Years Full-Time Employment on Skills in Demand Visa[\s\S]*?```/g,
`| Permanent Residency Pathway | Sponsoring Authority | Key Requirements & Benefits |
| :--- | :--- | :--- |
| **Subclass 186 ENS (TRT Stream)** | Current Sponsoring Employer | 2 years completed on SID visa; no points test required; direct Australian PR card |
| **Subclass 190 (State Nominated PR)** | Australian State / Territory Government | Points-tested; grants 5 bonus points; independent of single employer; immediate PR |
| **Subclass 491 (Skilled Work Regional)** | Regional State Governments | Grants 15 bonus points; 5-year provisional visa leading to Subclass 191 PR |`);

australiaContent = australiaContent.replace(/```[\s\S]*?FAMILY ENTITLEMENTS ON AN AUSTRALIAN WORK VISA[\s\S]*?```/g,
`| Benefit Area | Primary Work Visa Holder | Dependent Spouse / Partner |
| :--- | :--- | :--- |
| **Employment Authorization** | Sponsored Sponsoring Employer Only | 100% UNRESTRICTED WORK RIGHTS |
| **Permitted Industry Sectors** | Approved ANZSCO Occupation | Any Sector (Corporate/Trade/Business) |
| **Working Hours Limit** | Full-Time (Minimum 38 hrs/week) | Full-Time or Part-Time |
| **Children Schooling** | Subsidized / Tuition-Free Public K-12 | Dependent Student Status |
| **Healthcare Protections** | OVHC Private Cover + Reciprocal Laws | Identical Family Coverage |`);

australiaContent = australiaContent.replace(/```[\s\S]*?RED FLAGS VS\. VERIFIED AUSTRALIAN HIRING[\s\S]*?```/g,
`| Indicator | Fraudulent Scam Pattern | Genuine Australian Hiring |
| :--- | :--- | :--- |
| **Representative Authority** | "Authorized Agent" without MARA license | OMARA Registered Migration Agent (RMA) or Legal Firm |
| **Upfront Sponsorship Charges** | Demands ₹15 to ₹30 Lakhs for "Job Visa" | ZERO sponsorship fee charged to foreign worker |
| **Technical Verification** | Issues job offer without TRA trade test | Mandatory TRA Skills Assessment & video test |
| **Communication Domain** | Free Gmail, Yahoo, or WhatsApp accounts | Verified Australian ABN & Corporate company domain |
| **Visa Delivery Promise** | Promises "Airport Sticker without Biometrics" | Digital ImmiAccount TRN & VFS ABCC Biometrics |`);

fs.writeFileSync(australiaPath, australiaContent, 'utf8');
console.log('Cleaned scratch/australia_work_visa_blog.md successfully!');

// --- 3. Update lib/data.ts for blog-39 and blog-40 safely ---
const dataFilePath = path.join(__dirname, '..', 'lib', 'data.ts');
let dataContent = fs.readFileSync(dataFilePath, 'utf8');

function updateBlogInData(blogId, newContent) {
  const targetStr = `"${blogId}"`;
  const idIdx = dataContent.indexOf(targetStr);
  if (idIdx === -1) {
    throw new Error(`Could not find ${blogId} in lib/data.ts`);
  }

  // Find content property for this blog
  const contentKey = '"content": "';
  const contentIdx = dataContent.indexOf(contentKey, idIdx);
  if (contentIdx === -1) {
    throw new Error(`Could not find content for ${blogId}`);
  }

  const startContentVal = contentIdx + contentKey.length;
  // In JSON stringified object, find the closing quote of content
  // Since content may have escaped quotes, let's find the closing quote followed by comma/newline
  // Or better: parse and replace the object properly
}

// Let's replace the whole blog-39 and blog-40 JSON objects
// Find blog-39
const b39IdIdx = dataContent.indexOf('"blog-39"');
const b39Brace = dataContent.lastIndexOf('{', b39IdIdx);
const b40IdIdx = dataContent.indexOf('"blog-40"');
const b40Brace = dataContent.lastIndexOf('{', b40IdIdx);
const rawEnd = dataContent.indexOf('export const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);');
const b40EndBrace = dataContent.lastIndexOf('}', rawEnd) + 1;

// Get metadata from current objects
const { blogPosts } = require('../lib/data.ts');
const b39Obj = blogPosts.find(b => b.id === 'blog-39');
const b40Obj = blogPosts.find(b => b.id === 'blog-40');

b39Obj.content = canadaContent;
b40Obj.content = australiaContent;

const newSnippet = JSON.stringify(b39Obj, null, 2) + ',\n  ' + JSON.stringify(b40Obj, null, 2);
dataContent = dataContent.slice(0, b39Brace) + newSnippet + dataContent.slice(b40EndBrace);

fs.writeFileSync(dataFilePath, dataContent, 'utf8');
console.log('Successfully updated blog-39 and blog-40 in lib/data.ts!');

// --- 4. Update MongoDB Atlas ---
let env = '';
if (fs.existsSync('.env.local')) env = fs.readFileSync('.env.local', 'utf8');
else if (fs.existsSync('.env')) env = fs.readFileSync('.env', 'utf8');

const match = env.match(/MONGODB_URI=([^\r\n]+)/);
if (match) {
  const uri = match[1].trim();
  const client = new MongoClient(uri);
  client.connect().then(async () => {
    const db = client.db();
    await db.collection('blogs').updateOne(
      { slug: b39Obj.slug },
      { $set: { content: canadaContent, updatedAt: new Date() } }
    );
    console.log('Updated blog-39 in MongoDB Atlas.');

    await db.collection('blogs').updateOne(
      { slug: b40Obj.slug },
      { $set: { content: australiaContent, updatedAt: new Date() } }
    );
    console.log('Updated blog-40 in MongoDB Atlas.');

    await client.close();
    console.log('MongoDB Atlas updates complete.');
  }).catch(console.error);
}

