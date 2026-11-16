const fs = require('fs');
const path = require('path');

const dataContent = fs.readFileSync(path.join(__dirname, '..', 'lib', 'data.ts'), 'utf8');
const slugMatches = [...dataContent.matchAll(/["']?slug["']?\s*:\s*["']([^"']+)["']/g)];
const canonicalSlugs = new Set();
for (const m of slugMatches) {
  canonicalSlugs.add(m[1]);
}
console.log('Total canonical slugs in data.ts:', canonicalSlugs.size);

const results = [];
function searchLinks(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (f === 'node_modules' || f === '.next' || f === '.git' || f === 'scratch') continue;
    if (fs.statSync(full).isDirectory()) {
      searchLinks(full);
    } else if (/\.(tsx|ts|js|jsx)$/.test(f)) {
      const text = fs.readFileSync(full, 'utf8');
      
      const hrefRegex = /href=["'](\/blogs\/[^"'#?]+|\/jobs\?[^"']+)["']/g;
      let m;
      while ((m = hrefRegex.exec(text)) !== null) {
        results.push({ file: full, link: m[1] });
      }

      const mdRegex = /\]\((\/blogs\/[^)'"#?]+|\/jobs\?[^)'"#?]+)\)/g;
      while ((m = mdRegex.exec(text)) !== null) {
        results.push({ file: full, link: m[1] });
      }
    }
  }
}

searchLinks('app');
searchLinks('components');
searchLinks('lib');

console.log('Total links found in app, components, lib:', results.length);

const nonCanonicalBlogLinks = [];
const jobQueryLinks = [];

results.forEach(r => {
  if (r.link.startsWith('/jobs?')) {
    jobQueryLinks.push(r);
  } else if (r.link.startsWith('/blogs/')) {
    const slug = r.link.replace('/blogs/', '').trim();
    if (!canonicalSlugs.has(slug)) {
      nonCanonicalBlogLinks.push({ slug, ...r });
    }
  }
});

console.log('\n--- JOB QUERY LINKS (' + jobQueryLinks.length + ') ---');
jobQueryLinks.forEach(j => console.log(`${j.link} in ${j.file}`));

console.log('\n--- NON-CANONICAL BLOG LINKS (' + nonCanonicalBlogLinks.length + ') ---');
const groupedNonCanonical = {};
nonCanonicalBlogLinks.forEach(b => {
  groupedNonCanonical[b.slug] = groupedNonCanonical[b.slug] || [];
  groupedNonCanonical[b.slug].push(b.file);
});
for (const [slug, files] of Object.entries(groupedNonCanonical)) {
  console.log(`\nSlug: "${slug}" (${files.length} occurrences):`);
  files.forEach(f => console.log('  - ' + f));
}
