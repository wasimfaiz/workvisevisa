const fs = require('fs');
const path = require('path');

const cities = [
  'patna',
  'noida',
  'siwan',
  'gopalganj',
  'muzaffarpur',
  'chhapra',
  'darbhanga',
  'gaya',
];

cities.forEach((city) => {
  const filePath = path.join(process.cwd(), 'app', 'locations', city, 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Selection
  content = content.replace(/selection:bg-amber-500/g, 'selection:bg-emerald-500');

  // 2. Breadcrumb
  content = content.replace(/hover:text-amber-400/g, 'hover:text-emerald-400');
  content = content.replace(/text-amber-400 font-semibold/g, 'text-emerald-400 font-semibold');
  content = content.replace(/font-semibold text-amber-400/g, 'font-semibold text-emerald-400');

  // 3. Hero badge
  content = content.replace(/border-amber-400\/30 bg-amber-400\/10/g, 'border-emerald-400/30 bg-emerald-400/10');
  content = content.replace(/text-amber-300/g, 'text-emerald-300');
  content = content.replace(/<FaShieldHalved className="text-amber-400"/g, '<FaShieldHalved className="text-emerald-400"');
  content = content.replace(/FaShieldHalved className="text-amber-400"/g, 'FaShieldHalved className="text-emerald-400"');

  // 4. H1 Title Gradient (City Name) -> Brand Emerald & Teal & Cyan
  content = content.replace(
    /bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent/g,
    'bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent'
  );

  // 5. Hero 4 Metrics Numbers
  content = content.replace(/text-amber-400">100%/g, 'text-emerald-400">100%');
  content = content.replace(/text-amber-400">Direct/g, 'text-emerald-400">Direct');
  content = content.replace(/text-amber-400">₹10 Lakh/g, 'text-emerald-400">₹10 Lakh');
  content = content.replace(/text-amber-400">Zero/g, 'text-emerald-400">Zero');
  content = content.replace(/text-amber-400">45 Mins/g, 'text-emerald-400">45 Mins');
  content = content.replace(/text-amber-400">1 Hr 15m/g, 'text-emerald-400">1 Hr 15m');
  content = content.replace(/text-amber-400">DMCH Desk/g, 'text-emerald-400">DMCH Desk');
  content = content.replace(/text-amber-400">Heavy Plant/g, 'text-emerald-400">Heavy Plant');
  content = content.replace(/text-amber-400">Direct Gulf/g, 'text-emerald-400">Direct Gulf');
  content = content.replace(/text-amber-400">Zero Racket/g, 'text-emerald-400">Zero Racket');

  // 6. Right Candidate Desk Card
  content = content.replace(/text-amber-400 block mb-1/g, 'text-emerald-400 block mb-1');
  content = content.replace(/tracking-wider text-amber-400/g, 'tracking-wider text-emerald-400');
  content = content.replace(/bg-amber-500\/10 text-amber-400/g, 'bg-emerald-500/10 text-emerald-400');
  content = content.replace(/text-amber-400 shrink-0/g, 'text-emerald-400 shrink-0');
  content = content.replace(/FaLocationDot className="text-amber-400/g, 'FaLocationDot className="text-emerald-400');
  content = content.replace(/FaEnvelope className="text-amber-400/g, 'FaEnvelope className="text-emerald-400');
  content = content.replace(/FaClock className="text-amber-400/g, 'FaClock className="text-emerald-400');
  content = content.replace(/text-amber-400 font-semibold/g, 'text-emerald-400 font-semibold');

  // 7. Orange CTA Button inside Candidate Desk Card
  content = content.replace(
    /bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3\.5 text-center text-sm font-bold text-slate-950 shadow-lg shadow-amber-500\/20 transition-all hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500\/40/g,
    'bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all hover:from-emerald-500 hover:to-teal-500 hover:shadow-emerald-600/40 hover:scale-[1.01]'
  );
  content = content.replace(
    /from-amber-500 to-orange-600/g,
    'from-emerald-600 to-teal-600'
  );

  // 8. Body Section Badges & Headings
  content = content.replace(/text-amber-600 bg-amber-50 px-2\.5 py-1 rounded border border-amber-200/g, 'text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200');
  content = content.replace(/text-amber-600 bg-amber-50/g, 'text-emerald-700 bg-emerald-50');
  content = content.replace(/border-amber-200/g, 'border-emerald-200');
  content = content.replace(/w-16 h-1 bg-amber-500 mt-2 rounded/g, 'w-16 h-1 bg-emerald-600 mt-2 rounded');
  content = content.replace(/FaBuildingColumns className="text-amber-600"/g, 'FaBuildingColumns className="text-emerald-600"');
  content = content.replace(/FaCircleQuestion className="text-amber-500"/g, 'FaCircleQuestion className="text-emerald-600"');
  content = content.replace(/FaCircleQuestion className="text-amber-600"/g, 'FaCircleQuestion className="text-emerald-600"');

  // 9. Consultation Section
  content = content.replace(/uppercase tracking-widest text-amber-400/g, 'uppercase tracking-widest text-emerald-400');

  // 10. Links hover in directory
  content = content.replace(/hover:border-blue-500 hover:text-blue-600/g, 'hover:border-emerald-500 hover:text-emerald-600');
  content = content.replace(/bg-amber-900\/60 border border-amber-500\/40 text-amber-200/g, 'bg-emerald-900/60 border border-emerald-500/40 text-emerald-200 font-semibold');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated brand colors for: ${city}`);
});
