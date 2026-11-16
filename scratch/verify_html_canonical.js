const fs = require('fs');
const path = require('path');

const legacyFiles = [
  'saudi-arabia-skill-verification-program-takamol-trade-test-guide-2026.html',
  'gamca-wafid-medical-examination-rules-gulf-visa-fit-unfit-guide-2026.html',
  'wafid-gamca-medical-test-gulf-visa-complete-guide-2026.html',
  'dubai-construction-work-complete-guide-jobs-salaries-visas-recruitment-2026.html',
  'croatia-work-visa-complete-guide-2026-mup-crovisa-jobs-salary-pr.html',
  'kuwait-work-visa-reopening-degree-attestation-guide-2026.html'
];

legacyFiles.forEach(file => {
  const p = path.join('.next', 'server', 'app', 'blogs', file);
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    const m = html.match(/<link rel="canonical" href="([^"]+)"/);
    console.log(`${file}:`);
    console.log(`  Canonical -> ${m ? m[1] : 'NOT FOUND'}`);
  } else {
    console.log(`${file}: NOT FOUND ON DISK`);
  }
});

