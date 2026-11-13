const fs = require('fs');

function findBannerUsage(file) {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/<img[^>]*banner[^>]*>/gi) || content.match(/<img[^>]*guide\.webp[^>]*>/gi) || content.match(/<img[^>]*src="\/images\/[^"]+"[^>]*>/gi);
  console.log(`=== ${file} ===`);
  if (matches) {
    matches.forEach(m => console.log(m));
  } else {
    console.log('No banner img tag found');
  }
}

findBannerUsage('app/countries/poland/page.tsx');
findBannerUsage('app/countries/romania/page.tsx');
findBannerUsage('app/countries/albania/page.tsx');

