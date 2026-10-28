const fs = require('fs');

const files = [
  'app/countries/canada/page.tsx',
  'app/countries/saudi-arabia/page.tsx',
  'app/countries/usa/page.tsx',
  'app/countries/uk/page.tsx',
  'app/countries/qatar/page.tsx',
  'app/countries/russia/page.tsx',
  'app/countries/uae/page.tsx',
  'app/countries/oman/page.tsx',
  'app/countries/luxembourg/page.tsx',
  'app/countries/germany/page.tsx',
  'app/countries/france/page.tsx',
  'app/countries/croatia/page.tsx',
  'app/countries/bulgaria/page.tsx',
  'app/countries/bahrain/page.tsx',
];

let totalReplaced = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // Replace href="/jobs?country=..." with href="/jobs"
  content = content.replace(/href="\/jobs\?country=[^"]+"/g, (match) => {
    totalReplaced++;
    console.log(`Replaced in ${file}: ${match} -> href="/jobs"`);
    return 'href="/jobs"';
  });

  // Also replace button text if it says "Explore Jobs" -> "Browse Jobs"
  content = content.replace(/<span>Explore Jobs<\/span>/g, '<span>Browse Jobs</span>');

  // Replace country-specific vacancy button texts in bottom sections
  content = content.replace(/View Active (Oman|Bahrain|Germany) Vacancies/g, 'Browse Job Vacancies');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Saved changes to ${file}`);
  }
}

console.log(`\nTotal links replaced: ${totalReplaced}`);
