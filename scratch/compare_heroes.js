const fs = require('fs');

function checkHero(file) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const heroMatch = content.match(/<header[^>]*>([\s\S]*?)<\/header>/);
    if (heroMatch) {
      console.log(`=== ${file} HEADER HERO ===`);
      console.log(heroMatch[0].slice(0, 1000));
    } else {
      const sectionMatch = content.match(/<section[^>]*hero[^>]*>([\s\S]*?)<\/section>/i);
      console.log(`=== ${file} SECTION HERO ===`);
      if (sectionMatch) {
        console.log(sectionMatch[0].slice(0, 1000));
      } else {
        console.log('No header or section hero found');
      }
    }
  } catch (err) {
    console.error(file, err.message);
  }
}

checkHero('app/countries/poland/page.tsx');
checkHero('app/countries/romania/page.tsx');
checkHero('app/countries/albania/page.tsx');
checkHero('app/countries/uae/page.tsx');
checkHero('app/countries/saudi-arabia/page.tsx');

