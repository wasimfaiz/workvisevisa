const fs = require('fs');

const files = [
  'scripts/gulf_work_visa_master_content.md',
  'scripts/generate_gulf_master_content.js'
];

const replacements = [
  {
    from: '/blogs/kuwait-work-visa-reopening-degree-attestation-guide-2026',
    to: '/blogs/kuwait-work-visa-reopening-labor-law-reforms-degree-attestation-2026'
  },
  {
    from: '/blogs/police-clearance-certificate-pcc-gulf-work-visas-passport-office-guide-2026',
    to: '/blogs/police-clearance-certificate-pcc-gulf-european-visas-psk-apostille-guide-2026'
  },
  {
    from: '/blogs/saudi-arabia-skill-verification-program-takamol-trade-test-guide-2026',
    to: '/blogs/takamol-svp-skill-verification-program-saudi-arabia-trade-test-guide-2026'
  },
  {
    from: '/blogs/wafid-gamca-medical-test-gulf-visa-complete-guide-2026',
    to: '/blogs/wafid-gamca-medical-examination-2026-online-appointment-rules-fit-unfit-criteria'
  },
  {
    from: '/blogs/qatar-visa-center-qvc-biometrics-medical-guide-2026',
    to: '/blogs/qatar-work-visa-qvc-process-guide-2026-medical-biometrics-contract-qid'
  }
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    replacements.forEach(r => {
      content = content.replaceAll(r.from, r.to);
    });
    fs.writeFileSync(f, content, 'utf8');
    console.log('Cleaned ' + f);
  }
});
