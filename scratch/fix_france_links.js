const fs = require('fs');

let content = fs.readFileSync('scratch/france_blog_content.md', 'utf8');

content = content.replace(
  '/blogs/poland-work-visa-for-indians-2026-voivodeship-work-permit-zezwolenie-jobs-salary',
  '/blogs/poland-work-visa-for-indian-workers-2026-voivodeship-permit-vfs-jobs-salary'
);

content = content.replace(
  '/blogs/romania-work-visa-for-indians-2026-igi-aviz-de-munca-in-demand-jobs-salary',
  '/blogs/romania-work-visa-for-indian-workers-2026-aviz-de-munca-jobs-salary-eviza'
);

content = content.replace(
  '/blogs/germany-opportunity-card-chancenkarte-2026-guide-indian-workers',
  '/blogs/germany-opportunity-card-chancenkarte-guide-trade-workers-2026'
);

fs.writeFileSync('scratch/france_blog_content.md', content, 'utf8');
console.log("Updated scratch/france_blog_content.md with verified canonical slugs!");

