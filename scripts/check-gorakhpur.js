const fs = require('fs');

const code = fs.readFileSync('app/locations/gorakhpur/page.tsx', 'utf8');
const words = code.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;

console.log('File length (bytes):', code.length);
console.log('Total word count:', words);
console.log('Contains ConsultationForm:', code.includes('ConsultationForm'));
console.log('Contains dark glassmorphism form card:', code.includes('rounded-3xl border border-slate-800 bg-slate-900/90'));
console.log('Contains Universal DeskCard with #consultation:', code.includes('href="#consultation"'));
console.log('Contains FAQ JSON-LD:', code.includes('faqJsonLd'));
console.log('Indigo occurrences:', (code.match(/indigo/g) || []).length);
console.log('Amber occurrences:', (code.match(/amber/g) || []).length);
console.log('Orange occurrences:', (code.match(/orange/g) || []).length);
console.log('Emerald occurrences:', (code.match(/emerald/g) || []).length);
console.log('Teal occurrences:', (code.match(/teal/g) || []).length);
