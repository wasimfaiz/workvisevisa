const fs = require('fs');

const dataPath = 'lib/data.ts';
let content = fs.readFileSync(dataPath, 'utf8');

const replacements = [
  {
    from: '/blogs/kuwait-work-visa-reopening-degree-attestation-guide-2026',
    to: '/blogs/kuwait-work-visa-reopening-labor-law-reforms-degree-attestation-2026'
  },
  {
    from: '/blogs/kuwait-work-visa-article-18-regulations-degree-attestation-2026',
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
  },
  {
    from: '/blogs/uk-european-caregiver-work-visa-complete-guide-2026',
    to: '/blogs/uk-health-and-care-worker-visa-essential-requirements-caregivers-2026'
  },
  {
    from: '/blogs/dubai-construction-mep-trades-salary-guide-2026',
    to: '/blogs/dubai-construction-mep-trade-jobs-work-permit-salary-guide-2026'
  },
  {
    from: '/blogs/dubai-residence-permit-complete-guide-2026-pathways-application-fees-rules',
    to: '/blogs/dubai-residence-visa-permit-complete-guide-2026-eligibility-process-cost-official-portals'
  },
  {
    from: '/blogs/dubai-construction-work-complete-guide-jobs-salaries-visas-recruitment-2026',
    to: '/blogs/dubai-construction-work-jobs-guide-2026-salaries-trades-visa-process-labor-laws-wps'
  },
  {
    from: '/blogs/saudi-arabia-neom-work-visa-recruitment-guide-2026',
    to: '/blogs/saudi-arabia-neom-megaprojects-recruitment-work-visa-guide-2026'
  },
  {
    from: '/blogs/gulf-gcc-work-visa-complete-guide-2026-saudi-uae-qatar-kuwait-oman-bahrain',
    to: '/blogs/gulf-work-visa-complete-guide-2026-saudi-arabia-uae-qatar-kuwait-oman-bahrain'
  },
  {
    from: '/blogs/global-work-visa-pr-rules-overhaul-2026-canada-australia-uk-europe-guide',
    to: '/blogs/australia-skills-in-demand-visa-uk-skilled-worker-salary-guide-2026'
  }
];

let count = 0;
replacements.forEach(r => {
  const occurrences = content.split(r.from).length - 1;
  if (occurrences > 0) {
    content = content.replaceAll(r.from, r.to);
    console.log(`Replaced ${occurrences} occurrences of ${r.from}`);
    count += occurrences;
  }
});

fs.writeFileSync(dataPath, content, 'utf8');
console.log(`Total replacements in ${dataPath}: ${count}`);
