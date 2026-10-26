const fs = require('fs');
const path = require('path');

const targets = [
  'kuwait-work-visa-reopening-degree-attestation-guide-2026',
  'police-clearance-certificate-pcc-gulf-work-visas-passport-office-guide-2026',
  'saudi-arabia-skill-verification-program-takamol-trade-test-guide-2026',
  'wafid-gamca-medical-test-gulf-visa-complete-guide-2026',
  'qatar-visa-center-qvc-biometrics-medical-guide-2026'
];

function searchDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      searchDir(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx') || entry.name.endsWith('.js') || entry.name.endsWith('.json') || entry.name.endsWith('.md'))) {
      const content = fs.readFileSync(fullPath, 'utf8');
      targets.forEach(t => {
        if (content.includes(t)) {
          console.log(`Found "${t}" in: ${fullPath}`);
        }
      });
    }
  }
}

searchDir(process.cwd());
console.log('Search finished.');
