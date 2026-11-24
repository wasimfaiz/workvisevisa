const nodeRegex = /([A-Za-z0-9_]+)\s*(\[|\(|\{)([^\]\)\}]*)(\]|\)|\})/g;

const bhMermaid = `flowchart TD
  A[Phase 1: Employer EMS Application and Commercial Quota Approval on lmra.gov.bh] --> B[Phase 2: Wafid GAMCA Pre-Departure Medical Examination in India]
  B --> C[Phase 3: LMRA Work Permit and NPRA Residency Clearance Issuance]
  C --> D[Phase 4: Indian eMigrate POE Clearance and PBBY Insurance Stamping]
  D --> E[Phase 5: Bahrain International Airport BAH Arrival and Biometric Capture]
  E --> F[Phase 6: Post-Arrival MOH Validation and CPR Smart Card Issuance]`;

const steps = [];
const seenLabels = new Set();
let m;
while ((m = nodeRegex.exec(bhMermaid)) !== null) {
  const label = m[3].trim();
  if (label && !seenLabels.has(label.toLowerCase())) {
    seenLabels.add(label.toLowerCase());
    steps.push({ id: m[1], label });
  }
}

console.log("Extracted Bahrain steps without parens:", steps.length);
steps.forEach((s, i) => console.log(`${i + 1}. [${s.id}] ${s.label}`));

