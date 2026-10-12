const fs = require('fs');
const cities = ['patna', 'noida', 'siwan', 'gopalganj', 'muzaffarpur', 'chhapra', 'darbhanga', 'gaya'];
cities.forEach(c => {
  const f = 'app/locations/' + c + '/page.tsx';
  const s = fs.readFileSync(f, 'utf8');
  const sectionIdx = s.indexOf('id="consultation"');
  const formIdx = s.indexOf('<ConsultationForm', sectionIdx);
  const closingIdx = s.indexOf('</section>', formIdx);
  const snippet = s.substring(sectionIdx, closingIdx + 10);
  console.log(`=== ${c} ===`);
  console.log(snippet);
});
