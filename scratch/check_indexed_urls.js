const fs = require('fs');

const indexedUrlsRaw = `
https://www.workwisevisa.com/blogs/police-clearance-certificate-pcc-gulf-european-visas-psk-apostille-guide-2026
https://www.workwisevisa.com/blogs/takamol-svp-skill-verification-program-saudi-arabia-trade-test-guide-2026
https://www.workwisevisa.com/blogs/wafid-gamca-medical-examination-2026-online-appointment-rules-fit-unfit-criteria
https://www.workwisevisa.com/privacy-policy
https://www.workwisevisa.com/blogs
https://www.workwisevisa.com/locations/chhapra
https://www.workwisevisa.com/countries/oman
https://www.workwisevisa.com/blogs/urgent-dubai-construction-recruitment-afgc-holding-460-vacancies-october-2026
https://www.workwisevisa.com/blogs/oman-work-visa-complete-guide-2026-new-labour-law-salaries-omanization-rules
https://www.workwisevisa.com/blogs/qatar-work-visa-qvc-process-guide-2026-medical-biometrics-contract-qid
https://www.workwisevisa.com/track
https://www.workwisevisa.com/countries
https://www.workwisevisa.com/
https://www.workwisevisa.com/countries/bahrain
https://www.workwisevisa.com/blogs/dubai-residence-visa-permit-complete-guide-2026-eligibility-process-cost-official-portals
https://www.workwisevisa.com/blogs/kuwait-work-visa-reopening-labor-law-reforms-degree-attestation-2026
https://www.workwisevisa.com/blogs/gulf-work-visa-labour-law-updates-october-2026-uae-mohre-saudi-qiwa-qatar-kuwait
https://www.workwisevisa.com/locations
https://www.workwisevisa.com/blogs/gulf-work-visa-complete-guide-2026-saudi-arabia-uae-qatar-kuwait-oman-bahrain
https://www.workwisevisa.com/blogs/qatar-kuwait-oil-gas-shutdown-plant-maintenance-work-visa-2026
https://www.workwisevisa.com/countries/uae
https://www.workwisevisa.com/blogs/gcc-unified-tourist-visa-grand-tours-2026-rules-cross-border-jobs
https://www.workwisevisa.com/countries/qatar
https://www.workwisevisa.com/blogs/europe-schengen-work-visa-complete-guide-2026-germany-poland-croatia-luxembourg-malta-czechia
https://www.workwisevisa.com/countries/saudi-arabia
https://www.workwisevisa.com/locations/gaya
https://www.workwisevisa.com/locations/gopalganj
https://www.workwisevisa.com/blogs/luxembourg-work-visa-guide-2026-salaried-worker-adem-salaries-culture-guide
https://www.workwisevisa.com/locations/patna
https://www.workwisevisa.com/about
https://www.workwisevisa.com/blogs/dubai-construction-work-jobs-guide-2026-salaries-trades-visa-process-labor-laws-wps
https://www.workwisevisa.com/countries/canada
https://www.workwisevisa.com/countries/luxembourg
https://www.workwisevisa.com/countries/russia
https://www.workwisevisa.com/countries/usa
https://www.workwisevisa.com/countries/uk
https://www.workwisevisa.com/countries/germany
https://www.workwisevisa.com/locations/delhi
https://www.workwisevisa.com/locations/noida
https://www.workwisevisa.com/locations/lucknow
https://www.workwisevisa.com/locations/gorakhpur
https://www.workwisevisa.com/locations/darbhanga
https://www.workwisevisa.com/locations/muzaffarpur
https://www.workwisevisa.com/locations/siwan
https://www.workwisevisa.com/blogs/oman-bahrain-work-visa-guide-2026-mol-lmra-jobs-wafid-salaries
https://www.workwisevisa.com/blogs/europe-work-visa-for-indian-workers-poland-croatia-romania-guide-2026
https://www.workwisevisa.com/blogs/global-work-visa-pr-rules-overhaul-2026-canada-australia-uk-europe-guide
https://www.workwisevisa.com/blogs/australia-skills-in-demand-visa-uk-skilled-worker-salary-guide-2026
https://www.workwisevisa.com/blogs/gcc-heavy-vehicle-license-transfer-driving-jobs-dubai-riyadh
https://www.workwisevisa.com/blogs/dubai-construction-mep-trade-jobs-work-permit-salary-guide-2026
https://www.workwisevisa.com/jobs
https://www.workwisevisa.com/blogs/saudi-arabia-neom-megaprojects-recruitment-work-visa-guide-2026
https://www.workwisevisa.com/blogs/dubai-delivery-rider-warehouse-logistics-work-permit-2026
https://www.workwisevisa.com/blogs/complete-guide-uae-saudi-arabia-blue-collar-work-permits-2026
https://www.workwisevisa.com/blogs/uk-health-and-care-worker-visa-essential-requirements-caregivers-2026
https://www.workwisevisa.com/blogs/germany-opportunity-card-chancenkarte-guide-trade-workers-2026
https://www.workwisevisa.com/blogs/dubai-hotel-hospitality-work-visa-guide-waiters-chefs-2026
`;

const indexedSet = new Set(
  indexedUrlsRaw
    .split('\n')
    .map(u => u.trim())
    .filter(Boolean)
    .map(u => u.replace(/\/+$/, ''))
);
indexedSet.add("https://www.workwisevisa.com");

// Read data/locations.ts
const locationsContent = fs.readFileSync('data/locations.ts', 'utf8');
const locationSlugs = [...locationsContent.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);

// Read lib/data.ts
const dataContent = fs.readFileSync('lib/data.ts', 'utf8');
const blogSlugs = [...dataContent.matchAll(/["']?slug["']?:\s*["']([^"']+)["']/g)].map(m => m[1]);

const countries = [
  'uae', 'saudi-arabia', 'qatar', 'oman', 'bahrain', 'germany',
  'croatia', 'russia', 'luxembourg', 'france', 'canada', 'usa',
  'uk', 'bulgaria'
];

const staticPages = [
  '',
  'jobs',
  'blogs',
  'countries',
  'locations',
  'about',
  'track',
  'privacy-policy',
  'terms-of-service',
  'refund-policy',
  'b2b-partner',
  'invoice'
];

const allUrls = [];

for (const p of staticPages) {
  allUrls.push({
    category: 'Core & Utility Pages',
    url: p ? `https://www.workwisevisa.com/${p}` : `https://www.workwisevisa.com`
  });
}

for (const c of countries) {
  allUrls.push({
    category: 'Country Guides',
    url: `https://www.workwisevisa.com/countries/${c}`
  });
}

for (const loc of [...new Set(locationSlugs)]) {
  allUrls.push({
    category: 'Candidate Assistance Location Hubs',
    url: `https://www.workwisevisa.com/locations/${loc}`
  });
}

for (const b of [...new Set(blogSlugs)]) {
  allUrls.push({
    category: 'In-Depth Blog & Career Guides',
    url: `https://www.workwisevisa.com/blogs/${b}`
  });
}

const missingUrls = allUrls.filter(item => {
  const cleanUrl = item.url.replace(/\/+$/, '');
  return !indexedSet.has(cleanUrl);
});

console.log('Total indexed in Google:', indexedSet.size);
console.log('Total live URLs on website:', allUrls.length);
console.log('Total MISSING / PENDING INDEXING URLs:', missingUrls.length);

const grouped = {};
for (const item of missingUrls) {
  if (!grouped[item.category]) grouped[item.category] = [];
  grouped[item.category].push(item.url);
}

for (const cat in grouped) {
  console.log(`\n### ${cat} (${grouped[cat].length} URLs)`);
  grouped[cat].forEach(u => console.log(u));
}
