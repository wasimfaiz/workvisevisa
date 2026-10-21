const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, 'gulf_work_visa_master_content.md');
let md = fs.readFileSync(mdPath, 'utf8');

// Replacement 1: Deployment Lifecycle
const target1 = `\`\`\`mermaid
flowchart TD
    A[Candidate Selection & Offer Letter] --> B[Wafid GAMCA Medical in India]
    B --> C{Skill Test Required?}
    C -- Yes (Saudi Technical Trades) --> D[Takamol SVP Trade Test]
    C -- No (Unskilled / Degree / Other GCC) --> E[Document Attestation / PCC]
    D --> E
    E --> F{Passport Category}
    F -- ECR Passport --> G[eMigrate PoE Clearance + PBBY Insurance]
    F -- ECNR Passport --> H[Direct Consular Visa Stamping]
    G --> H
    H --> I[Deployment & Port Entry DXB / RUH / DOH / KWI / MCT / BAH]
    I --> J[Post-Arrival Medical & Resident Card Iqama / EID / QID / Civil ID]
\`\`\``;

const rep1 = `> 🧭 **The 6-Phase Gulf Deployment Lifecycle:**  
> **1. Selection & Digital Offer** *(Qiwa / MOHRE / MoL)* &rarr; **2. Wafid GAMCA Medical** *(wafid.com)* &rarr; **3. Trade Skill Test** *(Takamol SVP for KSA)* &rarr; **4. Legalization & PCC** *(MEA / PSK)* &rarr; **5. eMigrate PoE / Visa Stamping** &rarr; **6. Port Entry & Resident Card** *(Iqama / EID / QID / Civil ID)*

| Deployment Stage | Key Action & Responsible Entity | Mandatory Prerequisite Deliverable | Standard Turnaround |
| :--- | :--- | :--- | :--- |
| **Stage 1: Selection & Offer** | Direct client interview / employer selection on Qiwa / MOHRE | Standard bilingual employment contract signed | 24 – 48 Hours |
| **Stage 2: Wafid Medical** | Accredited GCC Health Council diagnostic lab testing | Verified electronic "FIT" certificate on wafid.com | 24 – 48 Hours |
| **Stage 3: Trade Test (SVP)** | Computerized theory & hands-on practical test at accredited center | 5-Year Takamol Certificate synced to Qiwa | Same Day / 48 Hrs |
| **Stage 4: Legalization & PCC**| State HRD, MEA Apostille & Passport Office PCC | Official government verification stickers | 5 – 10 Business Days |
| **Stage 5: Visa Stamping / PoE**| Consular embassy stamping & eMigrate clearance (ECR) | Passport visa sticker / electronic entry permit | 3 – 5 Business Days |
| **Stage 6: Arrival & Residency**| Airport e-gate entry & local resident card biometric capture | Physical / digital Iqama, Emirates ID, QID, or Civil ID | 7 – 30 Days post-arrival |`;

// Replacement 2: Wafid Medical Flow
const target2 = `\`\`\`mermaid
flowchart LR
    A[Generate Wafid Slip online at wafid.com ($10 USD)] --> B[Random Center Allocation in India]
    B --> C[Undergo Physical, Serological & X-Ray Tests]
    C --> D{Lab Evaluation}
    D -- All Parameters Normal --> E[Electronic FIT Slip Uploaded to GCC Portal]
    D -- Communicable Disease Detected --> F[UNFIT Status Stamped on GCC System]
    F --> G[Automatic 2-Year GCC Immigration Ban]
\`\`\``;

const rep2 = `> 🏥 **Wafid (GAMCA) Pre-Departure Medical Workflow:**  
> **1. Online Registration** *($10 USD fee at wafid.com)* &rarr; **2. Random Clinic Allocation** *(in Delhi, Mumbai, Patna, Lucknow, etc.)* &rarr; **3. Clinical, Blood & Chest X-Ray Tests** &rarr; **4. Electronic Evaluation** &rarr; **5. GCC Portal Clearance OR 2-Year Medical Ban**

| Wafid Diagnostic Stage | Medical Scope & Parameters Screened | Normal Clearance ("FIT") | Disqualifying Outcome ("UNFIT") |
| :--- | :--- | :--- | :--- |
| **Physical Examination** | Blood pressure, heart rate, hernia, surgical scars, vision | Normal vitals, zero active abdominal hernia | Severe decompensated cardiovascular failure |
| **Serology & Blood Work** | HIV 1/2, Hepatitis B (HBsAg), Hepatitis C, Syphilis (VDRL) | All viral serology markers completely negative | Confirmed HIV, active Hepatitis B/C, Syphilis |
| **Digital Chest X-Ray** | Lungs evaluated for active tuberculosis (TB) or calcifications | Clear lung fields, no active lesions | Active pulmonary TB or unappealed dense scarring |
| **Biochemical Panels** | Fasting blood glucose, liver enzymes (ALT/AST), creatinine | Blood sugar and renal profiles within normal range | Severe uncontrolled diabetes or renal collapse |
| **Final Registry Sync** | Electronic transmission to unified GCC Health Council registry | **Instant "FIT" Certificate** unlocked for visa stamping | **Automatic 2-Year GCC Immigration Blacklist** |`;

// Replacement 3: Takamol SVP Examination Structure (User's screenshot!)
const target3 = `\`\`\`
   ┌────────────────────────────────────────────────────────┐
   │         Takamol SVP Examination Structure (100%)       │
   ├────────────────────────────┬───────────────────────────┤
   │    Theory Exam (50%)       │    Practical Exam (50%)   │
   │  Computer-Based Testing    │  Workshop / Trade Bench   │
   │  30-45 MCQs in Hindi/Urdu  │  Hands-on Tool Testing    │
   │  Workplace Safety & Tools  │  Blueprint Reading & Fab  │
   └────────────────────────────┴───────────────────────────┘
               Passing Benchmark: 50% Aggregate
         Digital Certificate Linked to Candidate's Qiwa File
\`\`\``;

const rep3 = `> 🛠️ **Saudi Takamol Skill Verification Program (SVP) Examination Architecture:**  
> **Passing Score:** Minimum **50% Aggregate** &bull; **Test Delivery:** Accredited Indian Assessment Hubs &bull; **Credential:** Digital Certificate synced to Candidate's **Qiwa** Profile

| Examination Module | Weightage & Assessment Format | Language & Question Content | Core Evaluation Criteria |
| :--- | :--- | :--- | :--- |
| **Theoretical Computer Exam** | **50% of Total Score**<br>(Computer-Based Testing - CBT) | 30 to 45 Multiple Choice Questions administered in **Hindi, Urdu, English, Tamil, or Bengali** | Occupational health & safety (OSHA), hazard identification, hand & power tool recognition, circuit diagrams, and technical symbols |
| **Practical Workshop Assessment**| **50% of Total Score**<br>(Hands-On Workshop Bench Exam) | 90 to 120-minute physical demonstration evaluated by certified trade assessors | Blueprint reading, precision cutting, conduit bending, electrical panel wiring, 3G/6G pipe welding, PPR plumbing & pressure testing |

> [!NOTE]
> Candidates receive immediate computerized results for the theoretical component. The unified trade certification is digitally transmitted to the Saudi Ministry of Human Resources (MHRSD) within 24 to 48 hours, enabling the embassy or VFS TasHeel center to proceed with visa stamping.`;

// Replacement 4: Legalization Flow
const target4 = `\`\`\`mermaid
flowchart LR
    A[Original Degree / Certificate] --> B[Stage 1: Notary Public & State HRD / Home Dept]
    B --> C[Stage 2: MEA Attestation Patiala House New Delhi]
    C --> D[Stage 3: Respective GCC Embassy New Delhi / Mumbai]
    D --> E[Stage 4: Destination Country MOFA Attestation]
    E --> F[Final Acceptance by MOHRE / Qiwa / PAM / MoL / LMRA]
\`\`\``;

const rep4 = `> 📜 **The Official 5-Stage Sovereign Legalization Pipeline:**  
> **Stage 1: State Authentication** *(Notary & State HRD / Home Dept)* &rarr; **Stage 2: Federal Verification** *(MEA Patiala House New Delhi)* &rarr; **Stage 3: Consular Stamping** *(Respective GCC Embassy)* &rarr; **Stage 4: Destination MOFA** *(Digital e-DAS / QR Code)* &rarr; **Stage 5: Formal Labor Acceptance** *(MOHRE / Qiwa / PAM / MoL / LMRA)*

| Legalization Stage | Competent Sovereign Authority | Core Legal Action Performed | Official Document Deliverable |
| :--- | :--- | :--- | :--- |
| **Stage 1: State Verification** | State HRD (e.g., Patna, Lucknow, Delhi) / Regional Center | Verification of certificate against university archive registry | Official State HRD authentication seal on reverse |
| **Stage 2: Federal MEA Stamp** | Ministry of External Affairs (MEA), Patiala House, New Delhi | Federal sovereignty check and anti-forgery validation | Holographic MEA security sticker and consular stamp |
| **Stage 3: GCC Embassy Stamping** | Saudi Culture & Royal Embassy, UAE Embassy, Kuwait Embassy | Diplomatic mission authentication for overseas validity | Consular visa/attestation seal of the destination state |
| **Stage 4: Destination Country MOFA**| Local Ministry of Foreign Affairs (MoFA UAE, MOFA KSA, etc.) | Electronic cross-border registration via sovereign portal | Digital e-DAS verification slip with verifiable QR code |
| **Stage 5: Labor Portal Upload** | MOHRE (UAE), Qiwa (KSA), PAM (Kuwait), MoL (Qatar/Oman) | Work permit and professional license approval | Approved managerial, technical, or engineering visa |`;

// Replacement 5: Core GCC Worker Rights
const target5 = `\`\`\`
   ┌────────────────────────────────────────────────────────┐
   │             Core GCC Worker Rights (2026)              │
   ├────────────────────────────────────────────────────────┤
   │ 1. Wage Protection System (WPS) Direct Bank Transfers  │
   │ 2. Absolute Ban on Passport Retention (Heavy Fines)   │
   │ 3. Midday Outdoor Work Ban (Peak Summer Heat Rest)     │
   │ 4. Statutory Paid Annual Leave (30 Calendar Days)      │
   │ 5. End-of-Service Gratuity (Serverance Pay on Exit)    │
   │ 6. Mandatory Employer-Paid Return Repatriation Ticket  │
   └────────────────────────────────────────────────────────┘
\`\`\``;

const rep5 = `> ⚖️ **Core Statutory Protections Guaranteed to Expatriate Workers Across All 6 GCC Nations (2026):**

| Statutory Worker Protection | Legal Mechanism & Sovereign Scope | Legal Remedy & Violations Penalty |
| :--- | :--- | :--- |
| **1. Wage Protection System (WPS)** | 100% of monthly salaries must be paid via electronic bank transfer or payroll card | Defaulting employers have commercial licenses frozen and workers granted instant job transfers |
| **2. Absolute Ban on Passport Retention** | An employee's passport is personal sovereign property; employers cannot confiscate it | Severe criminal penalties, corporate fines up to SAR 20,000 / AED 50,000 per violation |
| **3. Midday Summer Outdoor Work Ban** | Mandatory rest in shaded areas during peak heat (12:00 PM – 3:00 PM, June 15 – Sept 15) | Ministry inspections, heavy corporate fines, and immediate job site suspension |
| **4. Guaranteed Paid Annual Leave** | Statutory 30 calendar days of paid vacation per year of completed service | Accrued leave encashment and employer-paid return flight tickets |
| **5. End-of-Service Gratuity (Severance)** | Statutory severance bonus calculated on the last drawn basic salary upon contract end | Mandatory clearance through labor courts before company files final exit |
| **6. Mandatory Repatriation Travel** | The sponsor must provide a free return airline ticket upon contract expiration | Enforced under Saudi Labor Law Article 40 and UAE Federal Decree-Law No. 33/2021 |`;

function doReplace(label, target, rep) {
  // Normalize windows newlines
  const normMd = md.replace(/\r\n/g, '\n');
  const normTarget = target.replace(/\r\n/g, '\n');
  if (normMd.includes(normTarget)) {
    md = normMd.replace(normTarget, rep);
    console.log(`[SUCCESS] Replaced ${label}`);
  } else {
    console.error(`[NOT FOUND] ${label}`);
  }
}

doReplace('Mermaid 1 (Deployment Lifecycle)', target1, rep1);
doReplace('Mermaid 2 (Wafid Medical)', target2, rep2);
doReplace('ASCII Box 1 (Takamol SVP)', target3, rep3);
doReplace('Mermaid 3 (Legalization Pipeline)', target4, rep4);
doReplace('ASCII Box 2 (Worker Rights)', target5, rep5);

fs.writeFileSync(mdPath, md, 'utf8');

const remainingCodeBlocks = (md.match(/```/g) || []).length;
console.log('Remaining ``` in markdown file:', remainingCodeBlocks);
