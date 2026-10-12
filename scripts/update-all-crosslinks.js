const fs = require('fs');

const allLocations = [
  { slug: 'patna', title: 'Patna Hub', sub: 'POE & State Capital' },
  { slug: 'noida', title: 'Noida Corporate HQ', sub: 'NCR Headquarters' },
  { slug: 'siwan', title: 'Siwan Gateway', sub: 'Gulf Emigration Corridor' },
  { slug: 'gopalganj', title: 'Gopalganj Hub', sub: 'North Bihar Manpower' },
  { slug: 'muzaffarpur', title: 'Muzaffarpur Hub', sub: 'Tirhut Division Central' },
  { slug: 'chhapra', title: 'Chhapra Hub', sub: 'Saran Division Desk' },
  { slug: 'darbhanga', title: 'Darbhanga Hub', sub: 'Mithilanchal Gateway' },
  { slug: 'gaya', title: 'Gaya Hub', sub: 'Magadh Division Gateway' },
];

const files = [
  'app/locations/patna/page.tsx',
  'app/locations/noida/page.tsx',
  'app/locations/siwan/page.tsx',
  'app/locations/gopalganj/page.tsx',
  'app/locations/muzaffarpur/page.tsx',
];

const newLinksForOriginals = [
  {
    slug: 'chhapra',
    tag: `              <Link
                href="/locations/chhapra"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                Chhapra (Saran) Candidate Desk
              </Link>`
  },
  {
    slug: 'darbhanga',
    tag: `              <Link
                href="/locations/darbhanga"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                Darbhanga Mithilanchal Desk
              </Link>`
  },
  {
    slug: 'gaya',
    tag: `              <Link
                href="/locations/gaya"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                Gaya Magadh Division Desk
              </Link>`
  }
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;

  newLinksForOriginals.forEach(linkObj => {
    if (!content.includes(`/locations/${linkObj.slug}`)) {
      if (content.includes('href="/countries/saudi-arabia"')) {
        content = content.replace(/(<Link\s+href="\/countries\/saudi-arabia")/g, linkObj.tag + '\n$1');
        changed = true;
      }
    }
  });

  if (changed) {
    fs.writeFileSync(f, content, 'utf8');
    console.log('Updated crosslinks in:', f);
  } else {
    console.log('No change needed for:', f);
  }
});
