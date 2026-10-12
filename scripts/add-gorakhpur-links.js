const fs = require('fs');

const files = [
  'app/locations/siwan/page.tsx',
  'app/locations/gopalganj/page.tsx',
  'app/locations/muzaffarpur/page.tsx',
  'app/locations/chhapra/page.tsx',
  'app/locations/darbhanga/page.tsx',
  'app/locations/gaya/page.tsx',
  'app/locations/patna/page.tsx'
];

const gorakhpurLink = `              <Link
                href="/locations/gorakhpur"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
              >
                Gorakhpur &amp; Purvanchal Desk
              </Link>`;

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    if (!content.includes('/locations/gorakhpur')) {
      const needle = 'href="/locations/noida"';
      const noidaIdx = content.indexOf(needle);
      if (noidaIdx !== -1) {
        const closeLinkIdx = content.indexOf('</Link>', noidaIdx);
        if (closeLinkIdx !== -1) {
          content = content.substring(0, closeLinkIdx + 7) + '\n' + gorakhpurLink + content.substring(closeLinkIdx + 7);
          fs.writeFileSync(f, content, 'utf8');
          console.log('Added Gorakhpur link to', f);
        }
      }
    } else {
      console.log('Already has Gorakhpur link:', f);
    }
  }
});
