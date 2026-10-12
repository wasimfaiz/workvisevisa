const fs = require('fs');

['patna', 'noida', 'siwan', 'gopalganj', 'muzaffarpur', 'chhapra', 'darbhanga', 'gaya'].forEach(c => {
  const file = `app/locations/${c}/page.tsx`;
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  lines.forEach((l, i) => {
    if (l.includes('<ConsultationForm')) {
      console.log(`${c} -> Line ${i+1}: ${l.trim()}`);
    }
  });
});
