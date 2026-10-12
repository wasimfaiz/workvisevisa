const fs = require('fs');

// Chhapra
let chhapra = fs.readFileSync('app/locations/chhapra/page.tsx', 'utf8');
chhapra = chhapra.replace('Station Road, Mithanpura, and Ramdayalu Nagar.', 'Chhapra Junction, Hathua Market, and Municipal Chowk.');
chhapra = chhapra.replace('Chhapra (SBI Motijheel, HDFC Akharaghat, ICICI Mithanpura,', 'Chhapra (SBI Main Branch, HDFC Dahiyawan, ICICI Station Road,');
fs.writeFileSync('app/locations/chhapra/page.tsx', chhapra, 'utf8');

// Darbhanga
let darbhanga = fs.readFileSync('app/locations/darbhanga/page.tsx', 'utf8');
darbhanga = darbhanga.replace('Station Road, Mithanpura, and Ramdayalu Nagar.', 'Laheriasarai, Tower Chowk, and Darbhanga Junction.');
darbhanga = darbhanga.replace('Darbhanga (SBI Motijheel, HDFC Akharaghat, ICICI Mithanpura,', 'Darbhanga (SBI Laheriasarai, HDFC Tower Chowk, ICICI Donar,');
fs.writeFileSync('app/locations/darbhanga/page.tsx', darbhanga, 'utf8');

// Gaya
let gaya = fs.readFileSync('app/locations/gaya/page.tsx', 'utf8');
gaya = gaya.replace('Station Road, Mithanpura, and Ramdayalu Nagar.', 'Gaya Junction, GB Road, and Rai Kashi Nath More.');
gaya = gaya.replace('Gaya (SBI Motijheel, HDFC Akharaghat, ICICI Mithanpura,', 'Gaya (SBI GB Road, HDFC AP Colony, ICICI Civil Lines,');
fs.writeFileSync('app/locations/gaya/page.tsx', gaya, 'utf8');

console.log('Local landmarks customized for Chhapra, Darbhanga, and Gaya!');
