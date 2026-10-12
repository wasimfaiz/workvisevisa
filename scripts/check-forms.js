const fs = require('fs');

const cities = ['patna', 'noida', 'siwan', 'gopalganj', 'muzaffarpur', 'chhapra', 'darbhanga', 'gaya'];

cities.forEach(c => {
  const f = 'app/locations/' + c + '/page.tsx';
  const s = fs.readFileSync(f, 'utf8');
  const idx = s.indexOf('ConsultationForm');
  const lastIdx = s.lastIndexOf('ConsultationForm');
  console.log(`=== ${c} ===`);
  console.log(s.substring(lastIdx - 200, lastIdx + 300));
  console.log('-------------------------------------------');
});
