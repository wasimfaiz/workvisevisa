const fs = require('fs');

const navbar = fs.readFileSync('components/Navbar.tsx', 'utf8');
console.log('=== NAVBAR SNIPPET ===');
const dropCvMatch = navbar.match(/<Link[\s\S]*?Drop CV[\s\S]*?<\/Link>/);
if (dropCvMatch) console.log(dropCvMatch[0]);

const logoMatch = navbar.match(/<Link[\s\S]*?logo[\s\S]*?<\/Link>/i);
if (logoMatch) console.log(logoMatch[0]);

const homePage = fs.readFileSync('app/page.tsx', 'utf8');
console.log('=== HOMEPAGE HERO / CTA COLORS ===');
const heroMatch = homePage.match(/<section[\s\S]*?<\/section>/);
if (heroMatch) console.log(heroMatch[0].slice(0, 800));

const tailwindConfig = fs.existsSync('tailwind.config.ts') ? fs.readFileSync('tailwind.config.ts', 'utf8') : (fs.existsSync('tailwind.config.js') ? fs.readFileSync('tailwind.config.js', 'utf8') : '');
console.log('=== TAILWIND CONFIG COLORS ===');
console.log(tailwindConfig);
