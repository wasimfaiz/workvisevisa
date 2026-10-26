const fs = require('fs');
const content = fs.readFileSync('lib/data.ts', 'utf8');

const targets = [
  'kuwait-work-visa-reopening-degree-attestation-guide-2026',
  'police-clearance-certificate-pcc-gulf-work-visas-passport-office-guide-2026',
  'saudi-arabia-skill-verification-program-takamol-trade-test-guide-2026',
  'wafid-gamca-medical-test-gulf-visa-complete-guide-2026',
  'qatar-visa-center-qvc-biometrics-medical-guide-2026'
];

targets.forEach(t => {
  let pos = 0;
  while ((pos = content.indexOf(t, pos)) !== -1) {
    // find the blog id or title preceding this
    const preceding = content.slice(Math.max(0, pos - 5000), pos);
    const idMatch = preceding.match(/id:\s*"([^"]+)"/g);
    const lastId = idMatch ? idMatch[idMatch.length - 1] : 'unknown';
    console.log(`Found target "${t}" under blog ${lastId}`);
    pos += t.length;
  }
});
