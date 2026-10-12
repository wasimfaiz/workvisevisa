const fs = require('fs');
const path = require('path');

const targetCities = [
  { slug: 'muzaffarpur', name: 'Muzaffarpur' },
  { slug: 'chhapra', name: 'Chhapra (Saran)' },
  { slug: 'darbhanga', name: 'Darbhanga' },
  { slug: 'gaya', name: 'Gaya' },
];

targetCities.forEach(({ slug, name }) => {
  const filePath = path.join(process.cwd(), 'app', 'locations', slug, 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Root container styling
  if (!content.includes('selection:bg-amber-500')) {
    content = content.replace(
      '<main className="min-h-screen bg-slate-50 text-slate-800">',
      '<div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-amber-500 selection:text-white">\n      <Navbar />\n\n      <main className="w-full">'
    );
    // Remove the standalone <Navbar /> if we just inserted it
    content = content.replace('<Navbar />\n\n      <div className="min-h-screen', '<div className="min-h-screen');
    // Fix closing </main>
    content = content.replace('</main>\n\n      <Footer />', '</main>\n    </div>\n\n      <Footer />');
  }

  // 2. Hero Section
  // Replace hero section tag and gradient
  content = content.replace(
    /<section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">/g,
    '<section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 pt-24 sm:pt-28 pb-16 sm:pb-24 text-white">'
  );

  // Replace background overlay
  content = content.replace(
    /<div className="absolute inset-0 bg-\[radial-gradient\(circle_at_30%_30%,rgba\(99,102,241,0\.15\),transparent_70%\)\] pointer-events-none" \/>/g,
    '<div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />'
  );

  // Add Breadcrumb Navigation if missing
  if (!content.includes('aria-label="Breadcrumb"')) {
    const breadcrumbHtml = `          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400"
            >
              <Link href="/" className="transition-colors hover:text-amber-400">
                Home
              </Link>
              <span>/</span>
              <Link href="/locations" className="transition-colors hover:text-amber-400">
                Locations
              </Link>
              <span>/</span>
              <span className="font-semibold text-amber-400">${name}, Bihar</span>
            </nav>`;

    content = content.replace(
      '<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">',
      breadcrumbHtml
    );
  }

  // Badge in Hero
  content = content.replace(
    /bg-indigo-500\/10 border border-indigo-400\/20 text-indigo-300/g,
    'border-amber-400/30 bg-amber-400/10 text-amber-300'
  );
  content = content.replace(
    /<FaShieldHalved className="text-indigo-400" \/>/g,
    '<FaShieldHalved className="text-amber-400" />'
  );

  // H1 gradient highlight
  content = content.replace(
    /bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400/g,
    'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent'
  );

  // 4 metrics cards
  content = content.replace(/text-indigo-400">100%<\/div>/g, 'text-amber-400">100%</div>');
  content = content.replace(/text-sky-400">Verified<\/div>/g, 'text-white">Verified</div>');
  content = content.replace(/text-sky-400">100% Legal<\/div>/g, 'text-white">100% Legal</div>');
  content = content.replace(/text-emerald-400">₹10 Lakh<\/div>/g, 'text-amber-400">₹10 Lakh</div>');
  content = content.replace(/text-indigo-400">45 Mins<\/div>/g, 'text-amber-400">45 Mins</div>');
  content = content.replace(/text-indigo-400">1 Hr 15m<\/div>/g, 'text-amber-400">1 Hr 15m</div>');

  // Right Candidate Career Desk Card
  content = content.replace(
    /<div className="bg-slate-900\/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative">/g,
    '<div className="relative rounded-2xl border border-slate-700/80 bg-gradient-to-b from-slate-800/90 to-slate-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md">'
  );
  content = content.replace(
    /<span className="inline-flex items-center px-2\.5 py-1 rounded-full text-xs font-semibold bg-emerald-500\/20 text-emerald-300 border border-emerald-500\/30">\s*Active Liaison Desk\s*<\/span>/g,
    '<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">\n                      <FaPassport className="text-xl" />\n                    </div>'
  );
  content = content.replace(
    /<h3 className="text-xl font-bold text-white mb-1">\s*Candidate Career Assistance Desk\s*<\/h3>/g,
    '<span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-1">WorkWise Candidate Desk</span>\n                  <h2 className="text-xl font-bold text-white mb-1">Candidate Career Assistance Desk</h2>'
  );
  content = content.replace(/FaLocationDot className="text-indigo-400/g, 'FaLocationDot className="text-amber-400');
  content = content.replace(/FaEnvelope className="text-indigo-400/g, 'FaEnvelope className="text-amber-400');
  content = content.replace(/FaClock className="text-amber-400/g, 'FaClock className="text-amber-400');
  content = content.replace(/text-emerald-400 font-semibold">100% Anti-Scam/g, 'text-amber-400 font-semibold">100% Anti-Scam');

  // Section Badges: Change Indigo to Amber throughout the page
  content = content.replace(/text-indigo-600 bg-indigo-50 px-2\.5 py-1 rounded border border-indigo-200/g, 'text-amber-600 bg-amber-50 px-2.5 py-1 rounded border border-amber-200');
  content = content.replace(/w-16 h-1 bg-indigo-600 mt-2 rounded/g, 'w-16 h-1 bg-amber-500 mt-2 rounded');
  content = content.replace(/FaBuildingColumns className="text-indigo-600"/g, 'FaBuildingColumns className="text-amber-600"');
  content = content.replace(/FaCircleQuestion className="text-indigo-600/g, 'FaCircleQuestion className="text-amber-500');

  // Consultation Form Section: Convert to dark luxury theme matching Patna/Noida
  const consultationOldRegex = /<section className="py-16 md:py-24 bg-white border-b border-slate-200">\s*<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">[\s\S]*?<ConsultationForm \/>\s*<\/div>\s*<\/div>\s*<\/section>/;

  const consultationNewHtml = `<section
          id="consultation"
          className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-20 text-white"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Institutional Candidate Evaluation
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Book Verified Overseas Work Visa Consultation in ${name}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                Connect directly with our senior emigration specialists. Get complete eligibility assessment, salary verification, GAMCA medical advisory, and legal contract validation.
              </p>
            </div>

            <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 sm:p-10 shadow-2xl text-slate-800">
              <ConsultationForm />
            </div>
          </div>
        </section>`;

  if (consultationOldRegex.test(content)) {
    content = content.replace(consultationOldRegex, consultationNewHtml);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully unified UI for: ${slug}`);
});
