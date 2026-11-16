const fs = require('fs');
const path = require('path');

const dataContent = fs.readFileSync(path.join(__dirname, '..', 'lib', 'data.ts'), 'utf8');

// Extract all blogs from data.ts
const idMatches = [...dataContent.matchAll(/["']?id["']?\s*:\s*["'](blog-\d+)["']/g)];
const slugMatches = [...dataContent.matchAll(/["']?slug["']?\s*:\s*["']([^"']+)["']/g)];

console.log('Total IDs found:', idMatches.length, 'Total slugs found:', slugMatches.length);

const aliasMap = {
  "dubai-construction-work-complete-guide-jobs-salaries-visas-recruitment-2026": "blog-22",
  "saudi-arabia-neom-work-visa-recruitment-guide-2026": "blog-8",
  "kuwait-work-visa-reopening-degree-attestation-guide-2026": "blog-11",
  "police-clearance-certificate-pcc-gulf-work-visas-passport-office-guide-2026": "blog-15",
  "wafid-gamca-medical-test-gulf-visa-complete-guide-2026": "blog-12",
  "gulf-gcc-work-visa-complete-guide-2026-saudi-uae-qatar-kuwait-oman-bahrain": "blog-26",
  "dubai-residence-permit-complete-guide-2026-pathways-application-fees-rules": "blog-23",
  "saudi-arabia-skill-verification-program-takamol-trade-test-guide-2026": "blog-14",
  "qatar-visa-center-qvc-biometrics-medical-guide-2026": "blog-13",
  "kuwait-work-visa-article-18-regulations-degree-attestation-2026": "blog-11",
  "uk-european-caregiver-work-visa-complete-guide-2026": "blog-3",
  "dubai-construction-work-visa-salary-recruitment-guide-2026": "blog-22",
  "croatia-work-visa-complete-guide-2026-mup-crovisa-jobs-salary-pr": "blog-42",
  "gamca-wafid-medical-examination-rules-gulf-visa-fit-unfit-guide-2026": "blog-12",
  "takamol-skill-verification-program-saudi-work-visa-guide-2026": "blog-14"
};

console.log('Aliases count:', Object.keys(aliasMap).length);
