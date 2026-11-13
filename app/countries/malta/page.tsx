import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  FaCheck,
  FaArrowRight,
  FaWhatsapp,
  FaEnvelope,
  FaShieldHalved,
  FaBuildingColumns,
  FaBriefcase,
  FaClock,
  FaCalendarDays,
  FaMoneyBillWave,
  FaHospital,
  FaPlaneArrival,
  FaScaleUnbalanced,
  FaTriangleExclamation,
  FaMagnifyingGlass,
  FaLocationDot,
  FaCertificate,
  FaArrowTrendUp,
  FaWrench,
  FaHelmetSafety,
  FaGraduationCap,
  FaPassport,
  FaIndustry,
  FaGear,
  FaCar,
  FaTruckFast,
  FaAward,
  FaFileContract,
  FaUserTie,
  FaCoins,
  FaFingerprint,
  FaStethoscope,
  FaCircleCheck,
  FaCircleQuestion,
  FaCircleExclamation,
  FaLanguage,
  FaHouseUser,
  FaBan,
  FaBuilding,
  FaSun,
  FaUtensils,
  FaAnchor,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Malta Work Visa & Jobs Guide 2026 | Identità Single Permit, Jobsplus, Euro Salaries",
  description:
    "Comprehensive 2026 authority guide to Malta work permits for Indian workers: Identità Single Permit, Jobsplus labour clearance, 100% English workplace advantage, hospitality & chef jobs, shipyard welders, EUR salaries in INR, Mater Dei healthcare, and Schengen settlement.",
  keywords: [
    "Malta work visa 2026",
    "Malta Single Permit Identita",
    "Jobsplus Malta work approval",
    "Malta chef jobs salary in INR",
    "Malta shipyard welder jobs",
    "Malta work culture Indian community",
    "Malta minimum wage in INR",
    "WorkWise Visa Malta recruitment",
    "Malta Schengen work permit India",
    "Palumbo shipyard Malta hiring",
  ],
  alternates: {
    canonical: "https://www.workwisevisa.com/countries/malta",
  },
  openGraph: {
    title: "Malta Work Visa & Skilled Employment Guide 2026 | WorkWise Visa",
    description:
      "Statutory guide to Malta employment: Identità Single Permit, Jobsplus labour approval, 100% English communication, EUR vs INR salaries, and life in the Mediterranean Schengen hub.",
    url: "https://www.workwisevisa.com/countries/malta",
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.workwisevisa.com/images/malta-work-visa-guide.webp",
        width: 1200,
        height: 630,
        alt: "Malta Work Visa & Jobs Guide 2026 - WorkWise Visa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malta Work Visa & Skilled Employment Guide 2026 | WorkWise Visa",
    description:
      "Complete 2026 operational guide to Malta Single Permits, Jobsplus clearance, Euro salaries in INR, work culture, and verified overseas recruitment.",
    images: ["https://www.workwisevisa.com/images/malta-work-visa-guide.webp"],
  },
};

const maltaFaqs = [
  {
    q: "What is the Identità Single Permit in Malta and how does it work?",
    a: "The Single Permit is an integrated residence and work authorization issued by Identità (formerly Identity Malta / Expatriates Unit) in collaboration with Jobsplus. It allows a Third-Country National (TCN) from India to legally reside and work in Malta for a specific employer in an approved occupation. The Single Permit is manifested as a physical, biometric European e-Residence Card containing an embedded microchip, biometric facial image, and digital fingerprints.",
  },
  {
    q: "Why is Malta considered Europe's top destination for Indian workers?",
    a: "Malta's single greatest advantage over other European countries (such as Germany, Poland, or France) is that English is an official national language of Malta alongside Maltese. 100% of government portals (Identità, Jobsplus), official labor contracts, police documents, hospital charts, road signs, and daily workplace interactions are conducted in English. Indian workers face zero language barrier, enabling immediate productivity, faster job promotion, and effortless daily living.",
  },
  {
    q: "What is the statutory minimum wage and realistic take-home salary in Malta in 2026?",
    a: "As of 2026, the national gross statutory minimum wage in Malta is approximately €925 per month for a standard 40-hour workweek. However, skilled trade workers and hospitality professionals earn significantly more. Civil construction tradesmen earn €1,050 to €1,450 net per month (₹95,000 to ₹1,32,000 INR). Certified 6G shipyard welders and marine technicians at Palumbo Shipyards earn €1,400 to €2,000 net (₹1,26,000 to ₹1,82,000 INR). Restaurant head chefs earn €1,300 to €1,850 net (₹1,18,000 to ₹1,68,000 INR), plus tips. Overtime is legally paid at 1.5x on weekdays and 2x on Sundays and public holidays under the Employment and Industrial Relations Act (EIRA).",
  },
  {
    q: "What role does Jobsplus play in securing a Malta work visa?",
    a: "Jobsplus is the national public employment agency of Malta. Before Identità can process a Single Permit application, the sponsoring Maltese employer must submit a job vacancy to Jobsplus and prove that no Maltese citizen or EU/EEA national is available to fill the role (labor market clearance). Once Jobsplus issues its labor clearance approval, the application proceeds to the police immigration department and Identità for final approval.",
  },
  {
    q: "Can I travel to other European Schengen countries on a Malta Single Permit?",
    a: "Yes. Malta is a full member state of the European Union and the Schengen Area. Holding an approved Maltese Single Permit (or valid Type D national employment visa) grants you visa-free mobility across all 29 Schengen member states (including Germany, France, Italy, Spain, Switzerland, and the Netherlands) for up to 90 days in any 180-day period for tourism and family visits.",
  },
  {
    q: "What healthcare benefits do Indian workers receive in Malta?",
    a: "Under Malta's social security legislation, every legal employee contributing Class 1 Social Security (approximately 10% of gross salary, matched by the employer) is entitled to full, universal state healthcare coverage. This grants 100% free inpatient and outpatient medical treatment, emergency hospital care, surgery, and diagnostics at Mater Dei Hospital in Msida—one of Europe's premier, state-of-the-art tertiary medical centers—as well as regional community health polyclinics.",
  },
  {
    q: "What is the Key Employee Initiative (KEI) in Malta?",
    a: "The Key Employee Initiative (KEI) is a fast-track work permit scheme administered by Identità for highly skilled managerial, technical, and IT professionals. Under KEI, eligible applicants who earn a minimum annual gross salary of €35,000 (with approved degree qualifications or 3 years of verified managerial experience) receive their Single Permit approval within an accelerated timeframe of just 5 working days from submission.",
  },
  {
    q: "What is the workplace culture like in Malta for Indian professionals?",
    a: "Work culture in Malta is professional, egalitarian, and deeply influenced by Mediterranean warmth and British administrative traditions. Hierarchy is relatively flat, and teamwork is highly collaborative. Standard working hours are 40 hours per week (8 hours per day, Monday through Friday, or shift rotas for hospitality and shipyards). Communication is direct, polite, and conducted entirely in English. Maltese colleagues are warm, hospitable, and accustomed to multicultural teams.",
  },
  {
    q: "Where do Indian workers reside in Malta and is Indian food available?",
    a: "Over 25,000 Indian citizens live and work in Malta. Major residential clusters include Msida, Birkirkara, Ħamrun, Gżira, St. Julian's, and Qawra/Bugibba. These towns have numerous Indian grocery stores—including Bollywood Supermarket, Little India Grocery, and Namaste India Store—stocking fresh atta, basmati rice, lentils, paneer, and authentic regional spices. Dozens of Indian restaurants (serving authentic Punjabi, Mughlai, and South Indian cuisine) operate across the island.",
  },
  {
    q: "How does the rental market work in Malta and what are living expenses?",
    a: "Shared apartment accommodation in areas like Msida, Birkirkara, or Ħamrun typically costs €200 to €350 per month per person (inclusive of water, electricity, and high-speed Wi-Fi). Monthly grocery costs for an Indian worker cooking at home range from €120 to €180 (₹11,000 to ₹16,500 INR). Public bus transportation is 100% FREE for all registered residents holding a personalized 'Tallinja Card', keeping monthly living overhead remarkably low.",
  },
  {
    q: "What is the taxation system in Malta for foreign workers?",
    a: "Malta operates a progressive personal income tax system with generous zero-tax brackets. For single individuals, annual income up to €9,100 is taxed at 0%. Income between €9,101 and €14,500 is taxed at 15%. Income between €14,501 and €19,500 is taxed at 25%, and income above €60,000 is taxed at 35%. Employers automatically deduct tax and Class 1 social security (10%) at source under the Final Settlement System (FSS).",
  },
  {
    q: "Can an Indian driver work in Malta with an Indian driving license?",
    a: "An Indian driving license is valid for driving in Malta as a visitor for up to 12 months from the date of initial entry. However, to work professionally as a commercial truck, bus, or taxi driver, you must obtain a Maltese driving license by completing theory and practical driving tests at Transport Malta. Because Malta drives on the LEFT side of the road (identical to India!), Indian drivers adapt instantly to local road networks.",
  },
  {
    q: "How long does it take from interview selection to landing in Malta?",
    a: "The standard deployment timeline is approximately 8 to 12 weeks. Stage 1 (Jobsplus clearance & Identità Approval in Principle letter) takes 4 to 6 weeks. Stage 2 (VFS Global New Delhi/Mumbai visa application and Type D biometric stamping) takes 3 to 4 weeks. Once the national Type D visa is stamped in your passport, flight booking and arrival logistics take 1 to 2 weeks.",
  },
  {
    q: "Can I bring my spouse and children to Malta?",
    a: "Yes. Under EU Family Reunification Directive regulations, foreign workers holding a Single Permit who have completed 1 year of continuous legal employment in Malta (and who demonstrate stable, sufficient income and adequate housing) can sponsor their spouse and dependent children under the Family Reunification framework administered by Identità.",
  },
  {
    q: "How can I obtain EU Permanent Residency in Malta?",
    a: "Under subsidiary legislation 217.17, third-country nationals who have legally and continuously resided in Malta for 5 years on a valid Single Permit (without continuous absences exceeding 6 consecutive months or 10 months total over 5 years) are eligible to apply for EU Long-Term Resident Status. This grants indefinite settlement rights, equal employment access, and freedom from employer sponsorship.",
  },
  {
    q: "How can I verify if a Malta job offer and Approval in Principle letter are genuine?",
    a: "Every genuine Maltese job pre-approval comes with an official 'Approval in Principle' letter issued digitally by Identità containing a unique Single Permit Application Reference Number (e.g., CEA/SP/...) and a verifiable QR code. You can verify this reference directly with Identità at expatriates.identita@gov.mt or through WorkWise Visa's free document audit desk.",
  },
];

export default function MaltaCountryPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.workwisevisa.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Global Destinations",
        "item": "https://www.workwisevisa.com/countries",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Malta Work Visa & Skilled Jobs 2026",
        "item": "https://www.workwisevisa.com/countries/malta",
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Malta Work Visa & Skilled Employment Authority Guide 2026: Identità Single Permit, Jobsplus, Euro Salaries & Living in Malta",
    description:
      "Statutory guide for Indian tradespeople and professionals relocating to Malta: Identità Single Permits, Jobsplus clearance, 100% English communication advantage, Euro salary scales, Mediterranean work culture, and EU Schengen residency.",
    image: "https://www.workwisevisa.com/images/malta-work-visa-guide.webp",
    author: {
      "@type": "Person",
      name: "Wasim Faiz",
      jobTitle: "Senior Overseas Placement Consultant",
      url: "https://www.workwisevisa.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "WorkWise Visa",
      logo: {
        "@type": "ImageObject",
        url: "https://www.workwisevisa.com/images/workwise_logo.webp",
      },
    },
    datePublished: "2026-11-13T07:00:00+05:30",
    dateModified: "2026-11-13T07:00:00+05:30",
    mainEntityOfPage: "https://www.workwisevisa.com/countries/malta",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: maltaFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Obtain a Malta Single Permit Work Visa from India",
    description:
      "A complete 5-stage legal roadmap to securing an official Malta Single Permit, Jobsplus labor market clearance, VFS Global Type D visa stamping, and biometric e-Residence card issuance.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Verified Employer Demand & Client Selection Interview",
        text: "Pass the technical trade test or culinary client interview organized by an MEA-registered agency for a pre-approved Maltese corporate quota.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Jobsplus Labour Clearance & Identità Single Permit Application",
        text: "The sponsoring Maltese company obtains labor market clearance from Jobsplus and files the Single Permit dossier online with Identità.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Identità Approval in Principle Letter Issuance",
        text: "Identità issues the official digital Approval in Principle letter containing the unique Single Permit application reference number.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "VFS Global Visa Application & Type D National Visa Stamping",
        text: "Submit passport, PSK police clearance with MEA Apostille, medical certificate, and the Approval in Principle letter at VFS Global for Type D visa stamping.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Malta Arrival, Identità Biometrics & e-Residence Card Issuance",
        text: "Arrive at Malta International Airport (Luqa), attend your biometric capture appointment at Identità in Msida, and receive your biometric e-Residence Card.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <Navbar />

      <main className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
        {/* ── Hero Section (Strict Emerald / Teal / Slate UI Continuity) ── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950 text-white pt-24 sm:pt-28 pb-16 md:pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb inside Hero */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 sm:mb-8">
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
              <span className="text-slate-600">/</span>
              <Link href="/countries" className="hover:text-emerald-400 transition-colors">
                Countries
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-emerald-300 font-bold">Republic of Malta (Repubblika ta&apos; Malta - European Schengen Hub)</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Headlines & Key Stats */}
              <div className="lg:col-span-7 space-y-6">
                {/* Government & Authority Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Official 2026 Malta Identità Single Permit &amp; Type D Gateway
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                  Malta Work Visa, Skilled Jobs &amp; Schengen Relocation{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                    2026
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  The definitive operational manual for Indian hospitality chefs, shipyard certified welders, civil technicians, warehouse drivers, and nurses migrating to the Mediterranean&apos;s English-speaking Schengen hub. Real facts on official{" "}
                  <strong className="font-bold text-white">Identità Single Permits</strong> under Directive 2011/98/EU, the{" "}
                  <strong className="font-bold text-emerald-300">€9,100+ statutory tax-free base</strong>, 100% English workplace environment, free Mater Dei healthcare, and European settlement rights.
                </p>

                {/* Key Benefits Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaLanguage className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">100% English</div>
                      <div className="text-[10px] text-slate-400">Official State Language</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaMoneyBillWave className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">€1,100–€2,000 Net</div>
                      <div className="text-[10px] text-slate-400">₹1.00L–₹1.82L In-Hand</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaShieldHalved className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Full Schengen Member</div>
                      <div className="text-[10px] text-slate-400">29 Nations Travel Rights</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaHospital className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Free State Health</div>
                      <div className="text-[10px] text-slate-400">Mater Dei Hospital Cover</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaClock className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">6–10 Wks Processing</div>
                      <div className="text-[10px] text-slate-400">Identità Single Permit</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaAnchor className="w-4 h-4 text-blue-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Top Maritime Hub</div>
                      <div className="text-[10px] text-slate-400">Palumbo Shipyards &amp; Ports</div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons - Clean 2-CTA Layout */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
                  <Link
                    href="/jobs"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] active:scale-[0.98] transition-all text-center w-full sm:w-auto"
                  >
                    <FaBriefcase className="w-4 h-4 shrink-0" />
                    <span>Browse Malta Jobs</span>
                  </Link>

                  <a
                    href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20Malta%20Work%20Permit%20(Single%20Permit)%20and%20Jobs%20for%202026."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/50 px-6 py-3 text-sm font-bold text-white transition-all shadow-md text-center w-full sm:w-auto"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>WhatsApp Consultation</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Quick Country Snapshot Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3.5">
                      <img
                        src="https://flagcdn.com/w160/mt.png"
                        alt="Malta Flag"
                        className="h-10 w-14 object-cover rounded-xl shadow-md border border-white/25 shrink-0"
                      />
                      <div>
                        <h2 className="text-xl font-display font-extrabold text-white">Malta (Repubblika ta&apos; Malta)</h2>
                        <p className="text-xs text-emerald-300 font-medium">Valletta • Birkirkara • Msida • St. Julian&apos;s • Marsaxlokk</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-xs font-bold text-emerald-300">
                      <FaShieldHalved className="w-3 h-3 text-emerald-400" />
                      Schengen State
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Primary Work Authorization:</span>
                      <span className="font-bold text-white">Identità Single Permit (Directive 2011/98/EU)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Consular Visa Category:</span>
                      <span className="font-bold text-emerald-300">National Type D Employment Visa</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">In-Country Residence Document:</span>
                      <span className="font-bold text-white">Biometric e-Residence Card</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Statutory Income Tax:</span>
                      <span className="font-bold text-amber-300">Progressive (0% up to €9,100)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Average Monthly In-Hand:</span>
                      <span className="font-bold text-emerald-300">€1,100 – €1,850 (₹1.00L – ₹1.68L)</span>
                    </div>

                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Permanent Residence Pathway:</span>
                      <span className="font-bold text-emerald-300">5 Continuous Years (EU Long-Term PR)</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-950/50 border border-emerald-500/30 p-3.5 text-center text-xs text-slate-300">
                    <div className="flex items-center justify-center gap-2 text-emerald-300 font-semibold mb-0.5">
                      <FaShieldHalved className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Identità &amp; Jobsplus Approved</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Bilingual Contract • Free Furnished Housing • Zero Hidden Middlemen Charges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Table of Contents & Quick Navigation ────────────── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/50">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              <FaMagnifyingGlass className="w-3 h-3 text-emerald-600" />
              Malta Comprehensive Master Guide Directory:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#overview" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                1. English Advantage &amp; Mediterranean Hub
              </a>
              <a href="#job-opportunities" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                2. High-Demand Trades &amp; Hospitality
              </a>
              <a href="#government-portals" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                3. Official Identità &amp; Jobsplus Portals
              </a>
              <a href="#visa-pathways" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                4. Single Permit &amp; Type D Visa
              </a>
              <a href="#salary-matrix" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                5. 2026 Salary Schedule (EUR vs INR)
              </a>
              <a href="#culture-and-lifestyle" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                6. Mediterranean Culture &amp; Daily Life
              </a>
              <a href="#deployment-pipeline" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                7. 6-Stage Application Roadmap
              </a>
              <a href="#document-checklist" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                8. Mandatory Documents &amp; Apostille
              </a>
              <a href="#faqs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                9. Frequently Asked Questions (16 FAQs)
              </a>
              <a href="#consultation-form" className="rounded-lg bg-emerald-600 px-3 py-1.5 text-white hover:bg-emerald-700 transition-colors">
                Apply Now →
              </a>
            </div>
          </div>
        </section>

        {/* Content Body Container */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          {/* Section 1: Overview & English Language Advantage */}
          <section id="overview" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaBuildingColumns className="w-3 h-3" /> Section 1: Strategic Economy
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Malta 2026 Strategic Overview: Europe&apos;s English-Speaking Mediterranean Powerhouse
            </h2>
            <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Situated at the geographic crossroads of Europe, North Africa, and the Middle East, the <strong>Republic of Malta</strong> is one of the most vibrant, fast-growing member states of the European Union and the Schengen Area. With robust annual GDP growth, an unemployment rate hovering under 3.0%, and a thriving multi-billion-euro tourism and maritime industry, Malta offers extraordinary employment opportunities for skilled Indian professionals, vocational tradesmen, chefs, and drivers.
              </p>
              <p>
                What truly sets Malta apart from every other continental European destination is its <strong>official language policy</strong>. Under Article 5 of the Maltese Constitution, <strong>English is an official national language</strong> alongside Maltese. Every governmental portal—from <strong>Identità</strong> and <strong>Jobsplus</strong> to the <strong>Commissioner for Revenue (CFR)</strong> and <strong>Transport Malta</strong>—operates 100% in English. Contracts, site safety briefings, training manuals, and legal documents are drafted in standard English. Indian workers, who often struggle with German B1 or Polish language requirements, experience zero workplace friction in Malta.
              </p>
              <p>
                Furthermore, employment in Malta is governed by the <strong>Single Permit (Directive 2011/98/EU)</strong>, which consolidates work authorization and European residence rights into a single biometric card. All workers benefit from comprehensive social security protections, free universal healthcare at the prestigious <strong>Mater Dei Hospital</strong>, regulated overtime compensation, and a clear legal roadmap toward <strong>EU Long-Term Residency</strong> after 5 years of legal stay.
              </p>
            </div>

            {/* Sovereign Fast Facts Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs hover:border-emerald-500 transition-colors">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Language Advantage</span>
                <p className="text-xl font-display font-extrabold text-emerald-700 mt-1">100% English</p>
                <p className="text-xs text-slate-600 mt-1">Official state language; zero local language exam barrier for Indian workers.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs hover:border-emerald-500 transition-colors">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Currency &amp; Pay</span>
                <p className="text-xl font-display font-extrabold text-slate-900 mt-1">Euro (€ / EUR)</p>
                <p className="text-xs text-slate-600 mt-1">1 EUR ≈ ₹91 INR; strong take-home savings remitted directly to India.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs hover:border-emerald-500 transition-colors">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Schengen Freedom</span>
                <p className="text-xl font-display font-extrabold text-emerald-700 mt-1">29 Nations</p>
                <p className="text-xs text-slate-600 mt-1">Visa-free borderless travel across Germany, France, Italy, and Switzerland.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs hover:border-emerald-500 transition-colors">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Universal Health</span>
                <p className="text-xl font-display font-extrabold text-slate-900 mt-1">Mater Dei Hospital</p>
                <p className="text-xs text-slate-600 mt-1">100% free inpatient and outpatient care via state social security.</p>
              </div>
            </div>
          </section>

          {/* Section 2: In-Demand Sectors */}
          <section id="job-opportunities" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaBriefcase className="w-3 h-3" /> Section 2: In-Demand Sectors
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Where the Jobs Are: Malta&apos;s Highest-Hiring Economic Sectors
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              With over 3 million international tourists arriving annually, a buzzing maritime shipping hub, and aggressive infrastructure modernization, Malta experiences acute labor shortages across these primary sectors:
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Sector 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                    <FaUtensils className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Hospitality, Culinary &amp; Tourism</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Tourism accounts for nearly 30% of Malta&apos;s GDP. Year-round hiring across luxury resorts, beach clubs, and fine-dining restaurants in <strong>St. Julian&apos;s, Sliema, Valletta, and Bugibba</strong>.
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-900 block mb-1">Key Occupations:</span>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                      <li>Continental, Tandoor &amp; Asian Head/Sous Chefs</li>
                      <li>Commis Chefs &amp; Kitchen Stewards</li>
                      <li>Hotel Restaurant Service Waitstaff</li>
                      <li>Front Desk &amp; Housekeeping Supervisors</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-xs font-bold text-emerald-700">Salary: €1,150–€1,850 net (₹1.05L–₹1.68L/mo)</div>
              </div>

              {/* Sector 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                    <FaAnchor className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Shipyards, Marine &amp; Industrial Repair</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Anchored by <strong>Palumbo Shipyards</strong> (one of the Mediterranean&apos;s largest drydock repair complexes), Manoel Island Yacht Yard, and <strong>Malta Freeport</strong> in Marsaxlokk.
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-900 block mb-1">Key Occupations:</span>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                      <li>6G Shipyard Pipe &amp; Structural Welders (MIG/TIG)</li>
                      <li>Marine Pipefitters &amp; Engine Mechanics</li>
                      <li>Industrial Blaster-Painters &amp; Scaffolders</li>
                      <li>CNC Machinists &amp; Metal Fabricators</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-xs font-bold text-emerald-700">Salary: €1,350–€2,000 net (₹1.23L–₹1.82L/mo)</div>
              </div>

              {/* Sector 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                    <FaTruckFast className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Commercial Transport &amp; Delivery Logistics</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Heavy demand for light delivery van drivers, courier logistics (DHL, Express Trailers), warehouse dispatch personnel, and app-based couriers (Bolt &amp; Wolt delivery networks).
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-900 block mb-1">Key Occupations:</span>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                      <li>Commercial Light &amp; Heavy Van Drivers</li>
                      <li>Forklift Operators (Counterbalance / Reach)</li>
                      <li>Warehouse Order Selectors &amp; Dispatchers</li>
                      <li>Airport Ground Logistics Handlers</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-xs font-bold text-emerald-700">Salary: €1,200–€1,750 net (₹1.09L–₹1.59L/mo)</div>
              </div>

              {/* Sector 4 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                    <FaBuilding className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Civil Construction &amp; High-Rise MEP</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Landmark developments like <strong>Mercury Towers</strong> by Zaha Hadid in St. Julian&apos;s, The Quad Central business towers in Mrieħel, luxury hotel developments, and civil road engineering projects.
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-900 block mb-1">Key Occupations:</span>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                      <li>Building Electricians &amp; Plumbers (MEP)</li>
                      <li>Shuttering Carpenters &amp; Steel Fixers</li>
                      <li>Marble Masons &amp; Ceramic Tile Setters</li>
                      <li>Heavy Excavator &amp; Tower Crane Operators</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-xs font-bold text-emerald-700">Salary: €1,100–€1,650 net (₹1.00L–₹1.50L/mo)</div>
              </div>

              {/* Sector 5 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-4">
                    <FaHospital className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Healthcare &amp; Eldercare Services</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    State hospitals (Mater Dei, Karin Grech) and premier private healthcare homes (Simblija Care Home, Casa Antonia) actively recruiting Indian qualified nursing and caregiver personnel.
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-900 block mb-1">Key Occupations:</span>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                      <li>Registered General Nurses (B.Sc Nursing)</li>
                      <li>Certified Eldercare Assistants</li>
                      <li>Physiotherapists &amp; Medical Technicians</li>
                      <li>Clinical Cleaners &amp; Sanitation Staff</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-xs font-bold text-emerald-700">Salary: €1,300–€2,100 net (₹1.18L–₹1.91L/mo)</div>
              </div>

              {/* Sector 6 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center mb-4">
                    <FaGear className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Facility Management &amp; Central HVAC</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Year-round maintenance contracts for major commercial shopping centers, luxury casino resorts, international data centers, and pharmaceutical manufacturing facilities in Ħal Far.
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-900 block mb-1">Key Occupations:</span>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                      <li>Commercial HVAC &amp; Chiller Technicians</li>
                      <li>Building Automation Technicians</li>
                      <li>Industrial Maintenance Electricians</li>
                      <li>Multi-Skilled Facility Handymen</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-xs font-bold text-emerald-700">Salary: €1,200–€1,700 net (₹1.09L–₹1.55L/mo)</div>
              </div>
            </div>
          </section>

          {/* Section 3: Statutory Portals */}
          <section id="government-portals" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaShieldHalved className="w-3 h-3" /> Section 3: Statutory Portals
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Maltese Government Portals &amp; Official Verification Frameworks
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Every step of Maltese work authorization is tracked through centralized state agency portals. Candidates can verify employer submissions, permits, and tax registrations transparently:
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded">Identity &amp; Residence</span>
                <h3 className="font-bold text-slate-900 text-sm mt-2">Identità (Expatriates Unit)</h3>
                <p className="text-xs text-slate-600 mt-1">Issues the Single Permit, Approval in Principle letter, and biometric e-Residence Card.</p>
                <a href="https://identita.gov.mt" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-700 hover:underline mt-3 inline-flex items-center gap-1">
                  Visit identita.gov.mt <FaArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="text-[10px] font-bold text-teal-800 uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded">Labor Market Clearance</span>
                <h3 className="font-bold text-slate-900 text-sm mt-2">Jobsplus Malta</h3>
                <p className="text-xs text-slate-600 mt-1">National employment agency approving employer vacancy quotas and third-country clearance.</p>
                <a href="https://jobsplus.gov.mt" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-700 hover:underline mt-3 inline-flex items-center gap-1">
                  Visit jobsplus.gov.mt <FaArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="text-[10px] font-bold text-cyan-800 uppercase tracking-wider bg-cyan-50 px-2 py-0.5 rounded">Revenue &amp; Social Security</span>
                <h3 className="font-bold text-slate-900 text-sm mt-2">Commissioner for Revenue (CFR)</h3>
                <p className="text-xs text-slate-600 mt-1">Administers Tax Identification Numbers (TIN) and Class 1 social security payroll deductions.</p>
                <a href="https://cfr.gov.mt" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-700 hover:underline mt-3 inline-flex items-center gap-1">
                  Visit cfr.gov.mt <FaArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded">Visa Stamping Partner</span>
                <h3 className="font-bold text-slate-900 text-sm mt-2">VFS Global India (Malta Desk)</h3>
                <p className="text-xs text-slate-600 mt-1">Manages biometric submissions and national Type D visa stamping in New Delhi and Mumbai.</p>
                <a href="https://visa.vfsglobal.com/ind/en/mlt" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-700 hover:underline mt-3 inline-flex items-center gap-1">
                  Visit VFS Malta India <FaArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="text-[10px] font-bold text-purple-800 uppercase tracking-wider bg-purple-50 px-2 py-0.5 rounded">Diplomatic Mission</span>
                <h3 className="font-bold text-slate-900 text-sm mt-2">High Commission of India in Malta</h3>
                <p className="text-xs text-slate-600 mt-1">Located in Birkirkara; oversees consular welfare, passport services, and community outreach.</p>
                <a href="https://hcivalletta.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-700 hover:underline mt-3 inline-flex items-center gap-1">
                  Visit hcivalletta.gov.in <FaArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="text-[10px] font-bold text-rose-800 uppercase tracking-wider bg-rose-50 px-2 py-0.5 rounded">National Transport</span>
                <h3 className="font-bold text-slate-900 text-sm mt-2">Transport Malta &amp; Tallinja Bus</h3>
                <p className="text-xs text-slate-600 mt-1">Administers driver testing, driving license conversions, and free national bus transit cards.</p>
                <a href="https://www.transport.gov.mt" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-700 hover:underline mt-3 inline-flex items-center gap-1">
                  Visit transport.gov.mt <FaArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </section>

          {/* Section 4: Single Permit Pathways */}
          <section id="visa-pathways" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaPassport className="w-3 h-3" /> Section 4: Single Permit Pathways
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Maltese Work Visa Categories &amp; Residency Streams
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-bold">
                  <tr>
                    <th className="p-3.5 sm:p-4">Authorization Stream</th>
                    <th className="p-3.5 sm:p-4">Sponsoring Authority</th>
                    <th className="p-3.5 sm:p-4">Target Occupations</th>
                    <th className="p-3.5 sm:p-4">Processing Time</th>
                    <th className="p-3.5 sm:p-4">Settlement Pathway</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                      Standard Single Permit (Directive 2011/98/EU)
                    </td>
                    <td className="p-3.5 sm:p-4">Identità + Jobsplus</td>
                    <td className="p-3.5 sm:p-4">Chefs, hospitality staff, shipyard welders, civil trades, heavy drivers</td>
                    <td className="p-3.5 sm:p-4">6 to 10 Weeks</td>
                    <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">1-year renewable e-Residence card; eligible for EU Long-Term PR after 5 years</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                      Key Employee Initiative (KEI Fast-Track)
                    </td>
                    <td className="p-3.5 sm:p-4">Identità Expatriates Unit</td>
                    <td className="p-3.5 sm:p-4">Executive managers, software architects, marine engineers (min. €35,000/yr)</td>
                    <td className="p-3.5 sm:p-4">5 Working Days</td>
                    <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">Accelerated family reunification; fast-track Schengen mobility</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                      Seasonal Work Permit (Up to 9 Months)
                    </td>
                    <td className="p-3.5 sm:p-4">Jobsplus</td>
                    <td className="p-3.5 sm:p-4">Peak summer tourism resort staff, agricultural pickers, event stewards</td>
                    <td className="p-3.5 sm:p-4">4 to 6 Weeks</td>
                    <td className="p-3.5 sm:p-4 text-amber-700 font-semibold">Valid for max 9 months per calendar year; non-convertible to PR</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                      EU Long-Term Residence (Sub. Leg. 217.17)
                    </td>
                    <td className="p-3.5 sm:p-4">Identità Immigrants Unit</td>
                    <td className="p-3.5 sm:p-4">TCNs completing 5 years of legal, uninterrupted work residence</td>
                    <td className="p-3.5 sm:p-4">3 to 6 Months</td>
                    <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">Permanent European settlement; independent of corporate sponsor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Realistic Salary Matrix */}
          <section id="salary-matrix" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaMoneyBillWave className="w-3 h-3" /> Section 5: Compensation Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Malta Salary Matrix 2026: Trade Bands, Overtime Rates &amp; Net Take-Home Savings (EUR vs INR)
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              In Malta, salaries are paid in Euros (€) through electronic SEPA bank transfers. Under Maltese labor law, overtime performed beyond 40 hours is legally compensated at 1.5x on normal days and 2.0x on Sundays and public holidays. Benchmark exchange rate: <strong>1 EUR ≈ ₹91 INR</strong>:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-bold">
                  <tr>
                    <th className="p-3.5 sm:p-4">Trade / Profession</th>
                    <th className="p-3.5 sm:p-4">Gross Basic Salary (€)</th>
                    <th className="p-3.5 sm:p-4">Net Monthly Pay (€)</th>
                    <th className="p-3.5 sm:p-4">Net Pay in INR (₹)</th>
                    <th className="p-3.5 sm:p-4">Est. Net Monthly Savings (INR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Hospitality Head Chef (Continental / Indian)</td>
                    <td className="p-3.5 sm:p-4">€1,600 – €2,200</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">€1,350 – €1,850</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">₹1,22,850 – ₹1,68,350</td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-emerald-700">₹85,000 – ₹1,25,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Sous Chef / Tandoori Chef / Line Cook</td>
                    <td className="p-3.5 sm:p-4">€1,350 – €1,750</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">€1,180 – €1,480</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">₹1,07,380 – ₹1,34,680</td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-emerald-700">₹72,000 – ₹98,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">6G Shipyard Welder (MIG/TIG / Palumbo)</td>
                    <td className="p-3.5 sm:p-4">€1,700 – €2,400</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">€1,420 – €2,000</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">₹1,29,220 – ₹1,82,000</td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-emerald-700">₹90,000 – ₹1,38,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Marine Pipefitter / Engine Mechanic</td>
                    <td className="p-3.5 sm:p-4">€1,500 – €2,000</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">€1,280 – €1,680</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">₹1,16,480 – ₹1,52,880</td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-emerald-700">₹80,000 – ₹1,15,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Commercial Van Driver / Courier Logistics</td>
                    <td className="p-3.5 sm:p-4">€1,350 – €1,850</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">€1,180 – €1,580</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">₹1,07,380 – ₹1,43,780</td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-emerald-700">₹72,000 – ₹1,05,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Forklift Operator / Warehouse Picker</td>
                    <td className="p-3.5 sm:p-4">€1,250 – €1,600</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">€1,100 – €1,380</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">₹1,00,100 – ₹1,25,580</td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-emerald-700">₹68,000 – ₹90,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Building Electrician / Plumber (MEP)</td>
                    <td className="p-3.5 sm:p-4">€1,300 – €1,750</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">€1,140 – €1,480</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">₹1,03,740 – ₹1,34,680</td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-emerald-700">₹70,000 – ₹98,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Civil Shuttering Carpenter / Steel Fixer</td>
                    <td className="p-3.5 sm:p-4">€1,200 – €1,600</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">€1,060 – €1,380</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">₹96,460 – ₹1,25,580</td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-emerald-700">₹65,000 – ₹88,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Marble Mason / Ceramic Tile Setter</td>
                    <td className="p-3.5 sm:p-4">€1,250 – €1,650</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">€1,100 – €1,420</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">₹1,00,100 – ₹1,29,220</td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-emerald-700">₹68,000 – ₹92,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Certified Nurse (B.Sc Nursing / Elderly Care)</td>
                    <td className="p-3.5 sm:p-4">€1,600 – €2,300</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">€1,350 – €1,920</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">₹1,22,850 – ₹1,74,720</td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-emerald-700">₹85,000 – ₹1,30,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 italic">
              *Net take-home pay reflects deductions for progressive income tax and 10% Class 1 social security (which entitles the worker to free state healthcare at Mater Dei Hospital). Overtime hours and Sunday shifts are paid at 1.5x to 2x statutory rates.
            </p>
          </section>

          {/* Section 6: Work Culture, Climate & Daily Life */}
          <section id="culture-and-lifestyle" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaSun className="w-3 h-3" /> Section 6: Culture &amp; Daily Life
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Work Culture, Mediterranean Climate &amp; The Indian Diaspora in Malta
            </h2>
            <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Life in Malta combines sunny Mediterranean beauty, European safety standards, and deep historical connections with the English-speaking world. Here is what day-to-day life looks like for Indian workers:
              </p>

              <div className="grid gap-6 md:grid-cols-2 pt-2">
                {/* Culture Pillar 1 */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <FaLanguage className="text-emerald-600" />
                    The 100% English Workplace Advantage
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unlike Germany (where A2/B1 German is required) or Poland (where Polish language barriers create daily friction), <strong>English is spoken natively across all Maltese workplaces</strong>. From morning toolbox safety talks and chef recipe orders to government paperwork and bank account openings, everything is in English.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Maltese management style is approachable and merit-oriented. Hardworking employees who communicate clearly and respect health and safety protocols receive rapid promotions and contract extensions.
                  </p>
                </div>

                {/* Culture Pillar 2 */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <FaSun className="text-amber-500" />
                    Mediterranean Sunshine &amp; Relaxed Pace
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Malta enjoys over <strong>300 sunny days per year</strong> with mild winters (temperatures rarely drop below 10°C) and warm Mediterranean summers tempered by refreshing sea breezes. There is zero freezing snow or extreme sub-zero weather like Eastern Europe.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The work pace balances rigorous European efficiency with a relaxed coastal lifestyle. Weekends allow workers to enjoy swimming at Golden Bay, exploring historic Valletta, or fishing in Marsaxlokk.
                  </p>
                </div>

                {/* Culture Pillar 3 */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <FaHouseUser className="text-cyan-600" />
                    Indian Community &amp; Cultural Networks
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Malta hosts a rapidly growing, highly respected Indian expatriate population of over <strong>25,000 people</strong>. Prominent community residential hubs include <strong>Msida, Birkirkara, Ħamrun, St. Julian&apos;s, and Gżira</strong>.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Indian cultural associations organize major public celebrations for Diwali, Holi, and Eid. A Hindu community prayer hall operates in Floriana, and regular Gurdwara gatherings occur in Marsa. The High Commission of India in Birkirkara provides active consular and legal support.
                  </p>
                </div>

                {/* Culture Pillar 4 */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <FaUtensils className="text-rose-500" />
                    Indian Groceries, Dining &amp; Free Bus Travel
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Authentic Indian groceries are easily accessible across the island. Supermarkets like <strong>Bollywood Supermarket</strong>, <strong>Namaste India Store</strong>, and <strong>Little India</strong> stock fresh atta, basmati rice, lentils, paneer, and Indian spices.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cooking at home costs between <strong>€120 and €180 per month (₹11,000 to ₹16,500 INR)</strong>. Furthermore, under Maltese government policy, <strong>public bus transit is 100% FREE</strong> for all residents holding a personalized Tallinja card, virtually eliminating commuting expenses.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Deployment Pipeline */}
          <section id="deployment-pipeline" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaPlaneArrival className="w-3 h-3" /> Section 7: Step-by-Step Deployment
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              End-to-End Deployment Pipeline: From Indian Selection to Malta e-Residence Card
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Client Selection Interview &amp; Culinary / Trade Test</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Candidates undergo practical culinary trade testing (for chefs and cooks) or technical trade assessments (weld testing on 6G test coupons for shipyards) conducted by Maltese delegates at WorkWise Visa testing centers in Noida, Patna, or Delhi NCR. Selected candidates sign a binding Maltese Employment Contract.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Jobsplus Labour Market Clearance &amp; Identità Dossier Filing</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    The sponsoring Maltese company lodges the job vacancy with Jobsplus, securing labor market clearance proving no domestic or EU worker is available. The company then uploads the full Single Permit application dossier to the Identità digital portal.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Identità Approval in Principle Letter Issuance</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Following background security screening by the Malta Police Immigration Department, Identità issues the official digital <strong>Approval in Principle (AIP) letter</strong>. This document contains your unique Single Permit application reference number and authorizes visa processing.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">VFS Global Application &amp; National Type D Visa Stamping</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    The candidate attends their biometric appointment at VFS Global in New Delhi or Mumbai, submitting the original passport, Approval in Principle letter, MEA-apostilled Police Clearance Certificate (PCC), medical fitness report, and travel insurance. The High Commission of Malta stamps the national Type D employment visa.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Malta Touchdown, Identità Biometrics &amp; e-Residence Card</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    The candidate lands at Malta International Airport (Luqa) and is received by employer representatives. Within days of arrival, the worker visits Identità headquarters in Msida for facial photograph capture and fingerprint biometrics, receiving their physical European biometric e-Residence Card.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Document Checklist */}
          <section id="document-checklist" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaFileContract className="w-3 h-3" /> Section 8: Document Checklist
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Statutory Documentation Checklist for Malta Single Permit Applicants
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex items-start gap-3">
                <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 text-sm block">Original Indian Passport</span>
                  <p className="text-xs text-slate-600 mt-1">Valid for at least 12 months beyond intended travel date, with at least 3 blank visa pages.</p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex items-start gap-3">
                <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 text-sm block">PSK Police Clearance with MEA Apostille</span>
                  <p className="text-xs text-slate-600 mt-1">Original PCC issued by Passport Seva Kendra (PSK), legalized with an official Apostille sticker from MEA.</p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex items-start gap-3">
                <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 text-sm block">Identità Approval in Principle Letter</span>
                  <p className="text-xs text-slate-600 mt-1">Official digital pre-approval letter bearing the unique Single Permit application reference code.</p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex items-start gap-3">
                <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 text-sm block">Signed Maltese Employment Contract</span>
                  <p className="text-xs text-slate-600 mt-1">Legally binding employment contract specifying job title, 40-hour workweek, and gross salary.</p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex items-start gap-3">
                <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 text-sm block">Medical Fitness Certificate</span>
                  <p className="text-xs text-slate-600 mt-1">Certified medical report including chest X-ray screening for tuberculosis, issued by an authorized clinic.</p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex items-start gap-3">
                <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 text-sm block">Schengen Travel Medical Insurance</span>
                  <p className="text-xs text-slate-600 mt-1">Valid travel medical insurance policy with minimum coverage of €30,000 covering initial travel.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: Forensic Scam Warning */}
          <section id="scam-warning" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-200 px-3.5 py-1 text-xs font-bold text-rose-800">
              <FaTriangleExclamation className="w-3 h-3" /> Section 9: Scam Prevention
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Forensic Scam Prevention: How to Detect Fake Malta Visas &amp; Illegal Sub-Agents
            </h2>
            <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-6 space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                Because Malta is a premier Schengen European country with high Euro salaries, unscrupulous agents routinely defraud candidates. Protect your family savings by recognizing these four major scams:
              </p>
              <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm text-slate-700">
                <div className="rounded-xl border border-rose-200 bg-white p-4 space-y-1.5">
                  <span className="font-bold text-rose-700 flex items-center gap-1.5">
                    <FaBan className="w-3.5 h-3.5" /> The &apos;Tourist Visa to Work Permit&apos; Trap
                  </span>
                  <p className="text-slate-600 text-xs">
                    Under Maltese immigration law, entering Malta on a Schengen tourist visa (Type C) and attempting to switch to an employment Single Permit is strictly scrutinized. While technically allowed under certain criteria, rogue agents exploit this to send workers who end up stranded without legal work rights. Always demand a direct National Type D work visa issued before departure from India.
                  </p>
                </div>

                <div className="rounded-xl border border-rose-200 bg-white p-4 space-y-1.5">
                  <span className="font-bold text-rose-700 flex items-center gap-1.5">
                    <FaBan className="w-3.5 h-3.5" /> Forged Approval in Principle Letters
                  </span>
                  <p className="text-slate-600 text-xs">
                    Fraudulent brokers create fake Approval in Principle PDFs with fake Identità letterheads. Genuine letters always contain an official digital reference code (e.g., CEA/SP/...) verifiable directly via Identità&apos;s online portal. Never make large payments on an unverified PDF.
                  </p>
                </div>

                <div className="rounded-xl border border-rose-200 bg-white p-4 space-y-1.5">
                  <span className="font-bold text-rose-700 flex items-center gap-1.5">
                    <FaBan className="w-3.5 h-3.5" /> Demanding ₹5 Lakh to ₹8 Lakh Advance Payments
                  </span>
                  <p className="text-slate-600 text-xs">
                    Official Identità Single Permit government application fees are just €280.50, and VFS visa fees are approximately €100. Any agent demanding astronomical cash advances before securing verifiable Jobsplus labor approval is running a scam.
                  </p>
                </div>

                <div className="rounded-xl border border-rose-200 bg-white p-4 space-y-1.5">
                  <span className="font-bold text-rose-700 flex items-center gap-1.5">
                    <FaBan className="w-3.5 h-3.5" /> Direct Cash / Personal UPI Transfers
                  </span>
                  <p className="text-slate-600 text-xs">
                    Legitimate recruitment agencies operate strictly through registered corporate bank accounts with official GST invoices. Never transfer funds to personal phone numbers or unaccredited village intermediaries.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: In-Depth FAQs */}
          <section id="faqs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaCircleQuestion className="w-3 h-3" /> Section 10: Frequently Asked Questions
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About Malta Work Visas &amp; Life in Malta
            </h2>
            <div className="space-y-4">
              {maltaFaqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5">
                      Q{idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </h3>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 11: Cross-Linking to Other Regional Guides */}
          <section id="related-guides" className="scroll-mt-28 space-y-6 border-t border-slate-200 pt-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaArrowTrendUp className="w-3 h-3" /> Compare Global Work Destinations
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
              Explore Other High-Demand European &amp; GCC Work Destinations
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/countries/poland"
                className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-emerald-500 hover:shadow-xs transition-all"
              >
                <span className="text-xs font-bold text-emerald-700 uppercase">Schengen Europe</span>
                <h3 className="font-bold text-slate-900 text-sm mt-1 group-hover:text-emerald-700 transition-colors">
                  Poland (Voivodeship Permit)
                </h3>
                <p className="text-xs text-slate-500 mt-1">Type A permits, Karta Pobytu cards, heavy manufacturing, CNC &amp; welding.</p>
              </Link>

              <Link
                href="/countries/croatia"
                className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-emerald-500 hover:shadow-xs transition-all"
              >
                <span className="text-xs font-bold text-emerald-700 uppercase">Schengen Europe</span>
                <h3 className="font-bold text-slate-900 text-sm mt-1 group-hover:text-emerald-700 transition-colors">
                  Croatia (MUP Permit)
                </h3>
                <p className="text-xs text-slate-500 mt-1">3-year work permits, coastal tourism, construction trades, Euro earnings.</p>
              </Link>

              <Link
                href="/countries/germany"
                className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-emerald-500 hover:shadow-xs transition-all"
              >
                <span className="text-xs font-bold text-emerald-700 uppercase">Schengen Europe</span>
                <h3 className="font-bold text-slate-900 text-sm mt-1 group-hover:text-emerald-700 transition-colors">
                  Germany (Chancenkarte)
                </h3>
                <p className="text-xs text-slate-500 mt-1">Opportunity Card, EU Blue Card, engineering &amp; industrial tech jobs.</p>
              </Link>

              <Link
                href="/countries/kuwait"
                className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-emerald-500 hover:shadow-xs transition-all"
              >
                <span className="text-xs font-bold text-emerald-700 uppercase">GCC Corridor</span>
                <h3 className="font-bold text-slate-900 text-sm mt-1 group-hover:text-emerald-700 transition-colors">
                  Kuwait (Article 18 Visa)
                </h3>
                <p className="text-xs text-slate-500 mt-1">PAM work permits, PACI Civil ID, 0% tax, world&apos;s strongest currency (KWD).</p>
              </Link>
            </div>
          </section>

          {/* Section 12: Consultation & Profile Audit Form */}
          <section
            id="consultation-form"
            className="scroll-mt-28 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
              <span className="inline-block rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3.5 py-1 text-xs font-bold text-emerald-300">
                Direct Malta Deployment Desk
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
                Apply for Verified Malta Job Vacancies
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Have your culinary credentials, welding qualifications, or driving experience evaluated by our senior European mobility counselors. 100% verified employer demands with Jobsplus approval.
              </p>

              <div className="pt-6 flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/918130161603?text=Hello%20WorkWise%20Visa%2C%20I%20want%20to%20apply%20for%20a%20Malta%20Work%20Visa%20and%20Jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-emerald-500/20 hover:from-emerald-400 hover:to-teal-400 transition-all transform hover:-translate-y-0.5"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Connect with Malta Placement Desk</span>
                </a>
                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-800/90 border border-slate-700 px-8 py-4 text-base font-bold text-white hover:bg-slate-800 hover:border-emerald-500/50 transition-all"
                >
                  <FaBriefcase className="w-5 h-5 text-emerald-400" />
                  <span>Browse Live Malta Job Openings</span>
                </Link>
              </div>

              <div className="pt-6 border-t border-slate-800/80 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
                <span className="flex items-center gap-1.5">
                  <FaShieldHalved className="text-emerald-400" /> 100% Jobsplus Approved Quotas
                </span>
                <span className="flex items-center gap-1.5">
                  <FaBuilding className="text-emerald-400" /> Direct VFS National Type D Stamping
                </span>
                <span className="flex items-center gap-1.5">
                  <FaLanguage className="text-emerald-400" /> Zero Language Exam Barrier
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
