const fs = require('fs');

const pages = [
  'app/locations/patna/page.tsx',
  'app/locations/noida/page.tsx',
  'app/locations/siwan/page.tsx',
  'app/locations/gopalganj/page.tsx',
];

const muzLink = `              <Link
                href="/locations/muzaffarpur"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                Muzaffarpur &amp; Tirhut Division Desk
              </Link>`;

const gopLink = `              <Link
                href="/locations/gopalganj"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                Gopalganj Candidate Desk
              </Link>`;

pages.forEach(p => {
  let content = fs.readFileSync(p, 'utf8');
  let changed = false;

  if (!p.includes('gopalganj') && !content.includes('/locations/gopalganj')) {
    content = content.replace(/(<Link\s+href="\/countries\/saudi-arabia")/g, gopLink + '\n$1');
    changed = true;
  }

  if (!p.includes('muzaffarpur') && !content.includes('/locations/muzaffarpur')) {
    content = content.replace(/(<Link\s+href="\/countries\/saudi-arabia")/g, muzLink + '\n$1');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(p, content, 'utf8');
    console.log('Updated:', p);
  } else {
    console.log('No change needed in:', p);
  }
});
