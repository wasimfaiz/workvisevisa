const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'takamol_svp_expanded_blog.md');
let content = fs.readFileSync(filePath, 'utf8');

// Replacement 1: Pipeline
const oldBlock1Regex = /```[\s\S]*?DIGITAL TAKAMOL VERIFICATION & RESULT PIPELINE[\s\S]*?```/;
const newBlock1 = `> [!NOTE]
> **Digital Takamol Verification & Result Pipeline at a Glance**
> 1. **Step 1: Assessment Completion**: Candidate completes Computer Theory (Stage 1) and Workshop Practical (Stage 2) at an accredited center.
> 2. **Step 2: Score Upload**: Evaluators upload the practical rubric and video logs to the TVTC central server in Riyadh (24 to 72 hours).
> 3. **Step 3: Online Portal Query**: Candidate checks status on \`https://svp-international.com\` using Passport Number and Nationality (India).
> 4. **Step 4: Digital Certificate Issuance**: Portal renders the authenticated certificate with a 5-year validity date and secure QR code.
> 5. **Step 5: Qiwa & MOFA Sync**: Automated API pushes verification directly to Qiwa.sa, unfreezing contract signing and MOFA embassy visa stamping.`;

// Replacement 2: Regulatory Triad
const oldBlock2Regex = /```[\s\S]*?SAUDI VOCATIONAL REGULATORY TRIAD[\s\S]*?```/;
const newBlock2 = `| Institutional Body | Regulatory Role | Key Mandate for Indian Workers |
| :--- | :--- | :--- |
| **Ministry of Human Resources & Social Development (MHRSD)** | Sovereign Labor Authority | Sets national recruitment quotas, profession classifications, and Qiwa digital contract mandates. |
| **Technical and Vocational Training Corporation (TVTC)** | Standards & Certification Body | Defines occupational rubrics, sets examination syllabi, audits test bays, and issues accredited certificates. |
| **Takamol Holding Company** | Global Operational Executive | Operates the international testing network, accredits testing centers across India, and manages svp-international.com. |`;

// Replacement 3: Evaluation Architecture
const oldBlock3Regex = /```[\s\S]*?TAKAMOL EVALUATION ARCHITECTURE[\s\S]*?```/;
const newBlock3 = `| Examination Component | Weightage | Format & Duration | Language Options | Passing Benchmark |
| :--- | :--- | :--- | :--- | :--- |
| **Stage 1: Computer Theoretical Exam** | **30% of total score** | 20 to 30 Multiple Choice Questions (MCQs) in 30–45 minutes | Hindi, Urdu, English, Arabic, Bengali, Tagalog | **Minimum 50% score** (e.g. 15/30 correct) |
| **Stage 2: Workshop Practical Assessment** | **70% of total score** | Hands-on trade tasks in accredited testing bay (90–180 minutes) | Monitored by certified TVTC evaluators | **Minimum 50% – 60% score** (depending on trade) |`;

// Replacement 4: Top 5 Trades Overview
const oldBlock4Regex = /```[\s\S]*?TOP 5 TESTED TRADES OVERVIEW[\s\S]*?```/;
const newBlock4 = `| Regulated Trade | Primary Theoretical Focus | Core Hands-On Practical Examination Task |
| :--- | :--- | :--- |
| **Building Electrician** | Ohm's law, circuit breakers, conduit wiring, color codes | Two-way switch circuit wiring, 20mm PVC conduit bending, DB box termination |
| **Pipe & Structural Welder** | Electrode AWS codes (E6010, E7018), bevel angles, polarities | 3G vertical-up groove weld or 6G TIG root pass on Schedule 40 carbon pipe |
| **Plumber & Pipefitter** | Hydrostatic pressure, trap seals, drainage slopes (1:50) | PPR socket thermal fusion at 260°C, GI threading, 10-bar hydrostatic hold |
| **HVAC & Refrigeration** | Vapor compression cycle, R410A/R32 charging, superheat | 45° copper flaring, nitrogen-purged silver brazing, vacuum evacuation (<500 microns) |
| **Automotive & Diesel Mechanic** | CRDi fuel injection, 4-stroke cycle, starter circuits | Starter motor teardown/testing, feeler gauge valve lash adjustment, fuel air bleed |`;

// Replacement 5: Test Center Clusters
const oldBlock5Regex = /```[\s\S]*?ACCREDITED INDIAN TEST CENTER CLUSTERS[\s\S]*?```/;
const newBlock5 = `| Region in India | Key Testing Hubs | Major Candidate Belts Served |
| :--- | :--- | :--- |
| **North India** | New Delhi (Okhla / Mohan Cooperative), Lucknow (Transport Nagar), Gorakhpur (GIDA) | Delhi NCR, Haryana, Western & Central Uttar Pradesh |
| **East India** | Patna (Patliputra Industrial Area), Siwan (Bypass), Kolkata (Salt Lake / Topsia) | Bihar (Siwan, Gopalganj, Chhapra, Patna), West Bengal, Jharkhand |
| **West India** | Mumbai (Andheri East / Kurla MIDC), Navi Mumbai (Turbhe), Ahmedabad | Maharashtra, Gujarat, Rajasthan, Western Madhya Pradesh |
| **South India** | Hyderabad (Santosh Nagar / Chandrayangutta), Bengaluru (Peenya), Chennai (Guindy) | Telangana, Andhra Pradesh, Karnataka, Tamil Nadu, Kerala |`;

// Replacement 6: Fee Framework
const oldBlock6Regex = /```[\s\S]*?TAKAMOL FEE & RETEST FRAMEWORK \(2026\)[\s\S]*?```/;
const newBlock6 = `> [!TIP]
> **Takamol Official Fee Transparency Benchmark (2026)**
> - **Initial Full Examination**: $45 to $55 USD (~160 to 200 SAR / ₹3,800 to ₹4,800 INR)
> - **Theory Retest Only**: $18 to $22 USD (~65 to 80 SAR / ₹1,500 to ₹1,850 INR)
> - **Practical Retest Only**: $30 to $38 USD (~110 to 140 SAR / ₹2,500 to ₹3,200 INR)
> - **Certificate Online Download**: 100% Free on the official portal with 5-year validity.`;

// Replacement 7: Authentic vs Fake
const oldBlock7Regex = /```[\s\S]*?AUTHENTIC TAKAMOL CERTIFICATE VS\. FAKE SCAM[\s\S]*?```/;
const newBlock7 = `> [!WARNING]
> **Authentic Takamol Certificate vs. Fraudulent Broker Scam**
> - **Official Source**: Real certificates are retrieved live from \`https://svp-international.com\`. Counterfeit ones are static PDFs or printed paper sold by brokers.
> - **QR Code Verification**: Legitimate QR codes resolve strictly to \`https://svp-international.com\` showing matching candidate details. Forged ones lead to dummy domains or unencrypted text.
> - **Qiwa Integration**: Authentic results reflect automatically in the Saudi employer's Qiwa portal within 48 hours. Fake ones are flagged by MOFA, triggering a **5-year entry ban for document forgery**.`;

content = content.replace(oldBlock1Regex, newBlock1);
content = content.replace(oldBlock2Regex, newBlock2);
content = content.replace(oldBlock3Regex, newBlock3);
content = content.replace(oldBlock4Regex, newBlock4);
content = content.replace(oldBlock5Regex, newBlock5);
content = content.replace(oldBlock6Regex, newBlock6);
content = content.replace(oldBlock7Regex, newBlock7);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully replaced all 7 ASCII code blocks in scratch/takamol_svp_expanded_blog.md');

