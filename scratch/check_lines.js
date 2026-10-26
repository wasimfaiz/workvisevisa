const fs = require('fs');

const content = fs.readFileSync('lib/data.ts', 'utf8');
const lines = content.split('\n');

const targets = [
  'kuwait-work-visa-reopening-degree-attestation-guide-2026',
  'police-clearance-certificate-pcc-gulf-work-visas-passport-office-guide-2026',
  'saudi-arabia-skill-verification-program-takamol-trade-test-guide-2026',
  'wafid-gamca-medical-test-gulf-visa-complete-guide-2026',
  'qatar-visa-center-qvc-biometrics-medical-guide-2026'
];

lines.forEach((line, idx) => {
  targets.forEach(t => {
    if (line.includes(t)) {
      console.log(`Line ${idx + 1}: ${line.trim()}`);
    }
  });
});
