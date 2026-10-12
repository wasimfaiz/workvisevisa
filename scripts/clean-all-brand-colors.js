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

  // Text colors
  content = content.replace(/text-amber-300/g, 'text-emerald-300');
  content = content.replace(/text-amber-400/g, 'text-emerald-400');
  content = content.replace(/text-amber-500/g, 'text-emerald-600');
  content = content.replace(/text-amber-600/g, 'text-emerald-600');
  content = content.replace(/text-amber-700/g, 'text-emerald-700');
  content = content.replace(/text-amber-800/g, 'text-emerald-800');
  content = content.replace(/text-amber-900/g, 'text-emerald-900');
  content = content.replace(/text-amber-950/g, 'text-emerald-950');

  // Background colors
  content = content.replace(/bg-amber-50\/60/g, 'bg-emerald-50/60');
  content = content.replace(/bg-amber-50/g, 'bg-emerald-50');
  content = content.replace(/bg-amber-100\/80/g, 'bg-emerald-100/80');
  content = content.replace(/bg-amber-100/g, 'bg-emerald-100');
  content = content.replace(/bg-amber-200/g, 'bg-emerald-200');
  content = content.replace(/bg-amber-400\/10/g, 'bg-emerald-500/10');
  content = content.replace(/bg-amber-400\/20/g, 'bg-emerald-500/20');
  content = content.replace(/bg-amber-400/g, 'bg-emerald-400');
  content = content.replace(/bg-amber-500\/10/g, 'bg-emerald-500/10');
  content = content.replace(/bg-amber-500\/20/g, 'bg-emerald-500/20');
  content = content.replace(/bg-amber-500/g, 'bg-emerald-500');
  content = content.replace(/bg-amber-600/g, 'bg-emerald-600');
  content = content.replace(/bg-amber-900\/60/g, 'bg-emerald-900/60');

  // Border colors
  content = content.replace(/border-amber-200/g, 'border-emerald-200');
  content = content.replace(/border-amber-300\/60/g, 'border-emerald-300/60');
  content = content.replace(/border-amber-300/g, 'border-emerald-300');
  content = content.replace(/border-amber-400\/20/g, 'border-emerald-400/20');
  content = content.replace(/border-amber-400\/30/g, 'border-emerald-500/30');
  content = content.replace(/border-amber-400/g, 'border-emerald-400');
  content = content.replace(/border-amber-500\/30/g, 'border-emerald-500/30');
  content = content.replace(/border-amber-500\/40/g, 'border-emerald-500/40');
  content = content.replace(/border-amber-500/g, 'border-emerald-500');
  content = content.replace(/border-amber-600/g, 'border-emerald-600');

  // Gradients and shadows
  content = content.replace(/from-amber-400/g, 'from-emerald-400');
  content = content.replace(/from-amber-500/g, 'from-emerald-600');
  content = content.replace(/from-amber-600/g, 'from-emerald-600');
  content = content.replace(/to-amber-500/g, 'to-teal-500');
  content = content.replace(/to-amber-600/g, 'to-teal-600');
  content = content.replace(/shadow-amber-500\/[0-9]+/g, 'shadow-emerald-600/25');
  content = content.replace(/shadow-amber-500/g, 'shadow-emerald-600/25');
  content = content.replace(/via-yellow-300/g, 'via-teal-300');
  content = content.replace(/via-yellow-400/g, 'via-teal-400');

  // Hovers
  content = content.replace(/hover:text-amber-400/g, 'hover:text-emerald-400');
  content = content.replace(/hover:border-amber-400/g, 'hover:border-emerald-500');
  content = content.replace(/hover:border-amber-500/g, 'hover:border-emerald-500');
  content = content.replace(/hover:from-amber-400/g, 'hover:from-emerald-500');
  content = content.replace(/hover:to-amber-500/g, 'hover:to-teal-500');

  // Any remaining amber badges
  content = content.replace(/selection:bg-amber-500/g, 'selection:bg-emerald-500');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Cleaned all brand tokens in: ${city}`);
});
