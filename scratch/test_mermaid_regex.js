const nodeRegex = /([A-Za-z0-9_]+)\s*(\[|\(|\{)([^\]\)\}]*)(\]|\)|\})/g;

const uaeMermaid = `flowchart TD
  A[Stage 1: Electronic Job Offer Letter (MOHRE Quota & E-Signature)] --> B[Stage 2: Employment Entry Permit Issuance (Pink Visa via GDRFA/ICP)]
  B --> C[Stage 3: Arrival in UAE & In-Country Change of Status]
  C --> D[Stage 4: Medical Fitness Examination (Blood Panel & Chest X-Ray at DHA/EHS)]
  D --> E[Stage 5: Emirates ID Biometrics & Digital Registration at ICP Center]
  E --> F[Stage 6: Tawjeeh Labor Orientation & Mandatory ILOE Insurance Enrollment]
  F --> G[Stage 7: Electronic Labor Card Issuance & Residency Stamping on ICP App]`;

const steps = [];
const seenLabels = new Set();
let m;
while ((m = nodeRegex.exec(uaeMermaid)) !== null) {
  const label = m[3].trim();
  if (label && !seenLabels.has(label.toLowerCase())) {
    seenLabels.add(label.toLowerCase());
    steps.push({ id: m[1], label });
  }
}

console.log("Extracted UAE steps:", steps.length);
steps.forEach((s, i) => console.log(`${i + 1}. [${s.id}] ${s.label}`));

