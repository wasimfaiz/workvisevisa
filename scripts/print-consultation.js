const fs = require('fs');

const cities = ['patna', 'noida', 'siwan', 'gopalganj', 'muzaffarpur', 'chhapra', 'darbhanga', 'gaya'];

cities.forEach(c => {
  const f = 'app/locations/' + c + '/page.tsx';
  const s = fs.readFileSync(f, 'utf8');
  const start = s.indexOf('id="consultation"');
  if (start !== -1) {
    const end = s.indexOf('</section>', start);
    console.log(`====================== ${c} ======================`);
    console.log(s.substring(start - 10, end + 10));
  } else {
    console.log(`====================== ${c} NO CONSULTATION ID ======================`);
  }
});
