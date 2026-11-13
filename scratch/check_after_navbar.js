const fs = require('fs');

function inspectAfterNavbar(file) {
  const content = fs.readFileSync(file, 'utf8');
  const navIdx = content.indexOf('<Navbar />');
  if (navIdx !== -1) {
    console.log(`=== ${file} AFTER NAVBAR ===`);
    console.log(content.slice(navIdx, navIdx + 1200));
  } else {
    console.log(`=== ${file} NAVBAR NOT FOUND ===`);
  }
}

inspectAfterNavbar('app/countries/poland/page.tsx');
inspectAfterNavbar('app/countries/romania/page.tsx');
inspectAfterNavbar('app/countries/uae/page.tsx');
inspectAfterNavbar('app/countries/kuwait/page.tsx');

