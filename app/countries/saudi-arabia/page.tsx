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
  FaFileInvoiceDollar,
  FaBriefcase,
  FaClock,
  FaMoneyBillWave,
  FaHospital,
  FaHelmetSafety,
  FaWrench,
  FaPassport,
  FaPlaneArrival,
  FaScaleUnbalanced,
  FaHandshakeAngle,
  FaTriangleExclamation,
  FaCircleQuestion,
  FaMagnifyingGlass,
  FaCertificate,
  FaCity,
  FaOilWell,
  FaTruckFast,
  FaUtensils,
  FaAward,
} from "react-icons/fa6";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.workwisevisa.com";

export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Saudi Arabia Work Visa & Jobs Guide 2026 | WorkWise Visa",
  description:
    "Complete 2026 Saudi Arabia work visa guide. Explore NEOM jobs, Qiwa digital contracts, Takamol SVP trade tests, tax-free salaries & verified Gulf recruitment.",
  keywords: [
    "Saudi Arabia work visa 2026",
    "Saudi employment visa process",
    "Qiwa digital contract verification",
    "Muqeem digital Iqama issuance",
    "Takamol Skill Verification Program SVP exam",
    "Saudi Vision 2030 NEOM jobs salary",
    "Saudi blue collar jobs recruitment agency",
    "Wafid GAMCA medical test Saudi rules",
    "Saudi labour law gratuity calculation 2026",
    "MHRSD Wage Protection System WPS Saudi",
    "Saudi heavy driver equipment operator jobs",
    "Aramco contractor work permits 2026",
    "VFS Tasheel Saudi visa stamping",
    "WorkWise Visa Saudi Arabia recruitment",
  ],
  alternates: {
    canonical: `${BASE_URL}/countries/saudi-arabia`,
  },
  openGraph: {
    title: "Saudi Arabia Work Visa & Jobs Guide 2026 | WorkWise Visa",
    description:
      "Complete 2026 Saudi Arabia work visa guide. Explore NEOM jobs, Qiwa digital contracts, Takamol SVP trade tests, tax-free salaries & verified Gulf recruitment.",
    url: `${BASE_URL}/countries/saudi-arabia`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: `${BASE_URL}/images/saudi_hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Saudi Arabia Work Visa & Vision 2030 Recruitment Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saudi Arabia Work Visa & Jobs Guide 2026 | WorkWise Visa",
    description:
      "Complete 2026 Saudi Arabia work visa guide. Explore NEOM jobs, Qiwa digital contracts, Takamol SVP trade tests, tax-free salaries & verified Gulf recruitment.",
    images: [`${BASE_URL}/images/saudi_hero.jpg`],
  },
};

export default function SaudiArabiaCountryPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BASE_URL}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Countries",
        item: `${BASE_URL}/countries`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Saudi Arabia (KSA)",
        item: `${BASE_URL}/countries/saudi-arabia`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Saudi Arabia Work Visa & NEOM Jobs Guide 2026: Complete Qiwa Process, Iqama, Takamol SVP & Legal Rights",
    description:
      "Comprehensive, expert-backed manual for migrating and working in the Kingdom of Saudi Arabia (Riyadh, Jeddah, Dammam, NEOM, Red Sea). Covers Qiwa electronic labor contracts, Takamol SVP certification, Wafid medical clearance, 2026 salary scales across trades, and MHRSD worker protections.",
    image: `${BASE_URL}/images/saudi_hero.jpg`,
    author: {
      "@type": "Organization",
      name: "WorkWise Visa Overseas Employment Editorial Team",
      url: `${BASE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "WorkWise Visa",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/workwise_logo.png`,
      },
    },
    datePublished: "2026-01-20T09:00:00+03:00",
    dateModified: "2026-10-09T10:00:00+03:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/countries/saudi-arabia`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the total processing time for a Saudi Arabia employment visa in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard Saudi Arabia employment visa processing takes 3 to 5 weeks. This includes Qiwa electronic contract generation (2–4 days), Takamol SVP trade test certification (3–7 days), Wafid medical clearance (2–3 days), Saudi MOFA electronic visa authorization and VFS TasHeel passport submission (5–10 days), and deployment flight booking. In-country Iqama card printing via the Muqeem platform takes 3 to 7 days after arrival.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Qiwa Platform and why is it mandatory for Saudi work visas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Qiwa (qiwa.sa) is the unified digital labor platform operated by the Saudi Ministry of Human Resources and Social Development (MHRSD). All employment contracts must be created and authenticated digitally on Qiwa. Legacy paper contracts are completely invalid. A visa cannot be stamped by the Saudi Embassy until the candidate accepts their digital contract via the Qiwa portal.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Takamol Skill Verification Program (SVP) required for Saudi visas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Takamol Skill Verification Program (SVP) is a mandatory government trade competency examination for 23 regulated vocational occupations (such as Building Electricians, 6G Welders, HVAC Technicians, Pipe Fitters, Plumbers, and Auto Mechanics). Candidates must pass a 30-minute computer theoretical exam and a hands-on workshop practical trial at an accredited center with a minimum combined score of 60% before their visa can be stamped.",
        },
      },
      {
        "@type": "Question",
        name: "Who pays for the Saudi Arabia work visa and medical fees under Saudi Labor Law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Saudi Labor Law (Royal Decree No. M/51) and MHRSD regulations, the sponsoring Saudi employer is legally required to bear 100% of all recruitment fees, visa authorization costs, government work permit fees, in-country medical screening, Iqama issuance/renewal charges, and one-way mobilization flight tickets. It is strictly illegal to deduct these costs from the worker's salary.",
        },
      },
      {
        "@type": "Question",
        name: "What is the average salary for blue-collar and technical trade jobs in Saudi Arabia in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Basic monthly salaries in Saudi Arabia range from 1,200 to 1,800 SAR for general trades (helpers, civil masons, steel fixers), 1,800 to 3,200 SAR for skilled technical trades (6G welders, industrial electricians, heavy equipment operators, pipe fabricators), and 3,500 to 6,500+ SAR for certified riggers, plant foremen, and QA/QC inspectors. In addition, employers typically provide free furnished bachelor accommodation, mess food or food allowances (300–500 SAR), site transport, and medical insurance.",
        },
      },
      {
        "@type": "Question",
        name: "How has the Kafala sponsorship system changed under Saudi Vision 2030 labor reforms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the MHRSD Labor Reform Initiative (LRI), foreign workers in Saudi Arabia are no longer bound by traditional Kafala restrictions. Workers have the legal right to transfer to a new employer upon the expiration of their Qiwa contract without requiring an Exit NOC from their current sponsor. Additionally, workers can request exit and re-entry visas or final exit permits directly through the Absher and Qiwa digital portals.",
        },
      },
      {
        "@type": "Question",
        name: "How is End-of-Service Benefits (Gratuity / ESB) calculated under Saudi Labor Law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Article 84 of the Saudi Labor Law, an employee is entitled to an End-of-Service Award calculated as half a month's basic salary for each of the first five years of continuous service, and a full month's basic salary for each subsequent year of service upon standard contract completion.",
        },
      },
      {
        "@type": "Question",
        name: "What medical tests are required for Saudi Arabia Wafid GAMCA clearance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pre-departure medical clearance must be completed through an accredited Wafid (GAMCA) clinic. The examination includes a Digital Chest X-Ray (to rule out active or old pulmonary Tuberculosis lesions), Blood Serology for HIV, Hepatitis B (HBsAg), Hepatitis C (Anti-HCV), and Syphilis (VDRL), alongside standard urine analysis, fasting blood sugar, and vision testing.",
        },
      },
    ],
  };

  return (
    <>
      {/* Schema.org Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
        {/* ── Hero Section ───────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950 text-white pt-24 sm:pt-28 pb-16 md:pb-24">
          {/* Subtle Grid overlay */}
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
              <span className="text-emerald-300 font-bold">Saudi Arabia (KSA)</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                {/* Government & Authority Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Official 2026 MHRSD, Qiwa &amp; Vision 2030 Relocation Authority
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                  Saudi Arabia Work Visa &amp; NEOM Jobs Guide <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">2026</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  The definitive, expert-verified guide to securing legal employment in <strong className="font-bold text-white">Riyadh, Jeddah, Dammam, NEOM, and across Saudi Arabia</strong>. Explore official <strong className="font-bold text-emerald-300">Qiwa digital labor contracts</strong>, <strong className="font-bold text-white">Takamol SVP trade certification</strong>, <strong className="font-bold text-emerald-300">Muqeem digital Iqama issuance</strong>, and <strong className="font-bold text-white">tax-free salary benchmarks across 25+ trades</strong>.
                </p>

                {/* Key Benefits Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaMoneyBillWave className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">0% Income Tax</div>
                      <div className="text-[10px] text-slate-400">100% Tax-Free Pay</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaBuildingColumns className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Qiwa Digital Contract</div>
                      <div className="text-[10px] text-slate-400">Tamper-Proof Rights</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaCity className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Vision 2030 Megaprojects</div>
                      <div className="text-[10px] text-slate-400">NEOM, Red Sea, Qiddiya</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaShieldHalved className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">MHRSD WPS Protected</div>
                      <div className="text-[10px] text-slate-400">Direct Bank Salary</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaAward className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Takamol SVP Testing</div>
                      <div className="text-[10px] text-slate-400">Government Skill Seal</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaPlaneArrival className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Employer Airfare</div>
                      <div className="text-[10px] text-slate-400">Free Flight Ticket</div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href="/jobs?country=Saudi+Arabia"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <FaBriefcase className="w-4 h-4" />
                    Browse Active Saudi Vacancies
                  </Link>

                  <a
                    href="https://wa.me/919152288874?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20Saudi%20Arabia%20work%20visas%20and%20NEOM%20job%20vacancies."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/50 px-6 py-3.5 text-sm font-bold text-white transition-all shadow-md"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-300" />
                    WhatsApp Saudi Desk
                  </a>

                  <Link
                    href="/track-application"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white underline underline-offset-4"
                  >
                    Track Existing Saudi Application <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Quick Country Snapshot Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3.5">
                      <img
                        src="https://flagcdn.com/w160/sa.png"
                        alt="Saudi Arabia Flag"
                        className="h-10 w-14 object-cover rounded-xl shadow-md border border-white/25 shrink-0"
                      />
                      <div>
                        <h2 className="text-xl font-display font-extrabold text-white">Kingdom of Saudi Arabia</h2>
                        <p className="text-xs text-emerald-300 font-medium">Riyadh • Jeddah • Dammam • NEOM</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-xs font-black text-emerald-300">
                      G20 ECONOMY
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs text-slate-200">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Labor Platform:</span>
                      <span className="font-bold text-white">Qiwa (qiwa.sa) &amp; MHRSD</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Residency Card (Iqama):</span>
                      <span className="font-bold text-emerald-300">Muqeem Digital Iqama</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Skill Verification:</span>
                      <span className="font-bold text-white">Takamol SVP (23 Professions)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Medical Screening:</span>
                      <span className="font-bold text-white">Wafid (GAMCA) Pre-Departure</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Average Blue-Collar Pay:</span>
                      <span className="font-bold text-amber-300">1,500 – 4,200 SAR / Month</span>
                    </div>

                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Standard Processing:</span>
                      <span className="font-bold text-emerald-300">20 to 35 Days</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-900/40 border border-emerald-500/30 p-4 text-center">
                    <p className="text-xs font-medium text-emerald-200 mb-2">
                      Ready to apply for high-paying NEOM, Red Sea, or refinery jobs in Saudi Arabia?
                    </p>
                    <a
                      href="mailto:workwisevisa@gmail.com?subject=Saudi%20Arabia%20Job%20Application&body=Hello%20WorkWise%20Visa%20Team,%0A%0AI%20am%20applying%20for%20a%20job%20in%20Saudi%20Arabia/NEOM.%0A%0AFull%20Name:%0APhone%20Number:%0ATrade/Designation:%0APassport%20Number:%0AExperience%20(Years):%0ATakamol%20SVP%20Status%20(Passed/Pending):"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-900 hover:bg-slate-100 transition-colors shadow-sm"
                    >
                      <FaEnvelope className="w-3.5 h-3.5 text-emerald-600" />
                      Submit CV for Saudi Recruitment
                    </a>
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
              Comprehensive Saudi Arabia Page Directory:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#overview" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                1. Vision 2030 &amp; Megaprojects
              </a>
              <a href="#visa-types" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                2. Saudi Visa Types
              </a>
              <a href="#step-by-step" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                3. 6-Stage Visa Process
              </a>
              <a href="#salary-matrix" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                4. 2026 Salary Table
              </a>
              <a href="#takamol-svp" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                5. Takamol SVP Testing
              </a>
              <a href="#labour-law" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                6. Saudi Labour Law &amp; Gratuity
              </a>
              <a href="#medical-wafid" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                7. Wafid Medical Rules
              </a>
              <a href="#faqs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                8. Detailed FAQs (12+)
              </a>
            </div>
          </div>
        </section>

        {/* ── Main Content Container ─────────────────────────── */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">

          {/* ── Section 1: Overview & Vision 2030 ──────────────── */}
          <section id="overview" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaCity className="w-3.5 h-3.5 text-emerald-600" />
              Section 1: Vision 2030 Transformation &amp; Unprecedented Workforce Demand
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Saudi Arabia in 2026: The World’s Largest Infrastructure &amp; Industrial Expansion
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                The <strong>Kingdom of Saudi Arabia (KSA)</strong> is experiencing the most ambitious economic diversification and infrastructure development program in modern history. Driven by the landmark{" "}
                <a
                  href="https://www.vision2030.gov.sa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Saudi Vision 2030
                </a>{" "}
                initiative under Crown Prince Mohammed bin Salman, the Kingdom has mobilized over <strong>$1.3 Trillion USD</strong> across gigaprojects that demand millions of skilled craftsmen, heavy equipment operators, MEP technicians, engineers, and support professionals.
              </p>
              <p>
                From <strong>NEOM</strong> (encompassing The Line, Oxagon industrial port city, Trojena mountain resort, and Sindalah luxury island) to <strong>Red Sea Global</strong>, <strong>Qiddiya Entertainment City</strong>, <strong>Riyadh Expo 2030</strong>, <strong>King Salman International Airport</strong>, and <strong>Saudi Aramco petrochemical turnaround expansions</strong> in Jubail and Yanbu, the Kingdom offers immense career stability, high tax-free earnings, and standardized legal protections.
              </p>
              <p>
                Crucially, the Saudi labor market has undergone revolutionary digitalization under the{" "}
                <a
                  href="https://hrsd.gov.sa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Ministry of Human Resources and Social Development (MHRSD)
                </a>
                . The implementation of the{" "}
                <a
                  href="https://qiwa.sa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Qiwa Digital Labor Platform (qiwa.sa)
                </a>
                , the{" "}
                <a
                  href="https://svp-international.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Takamol Skill Verification Program (SVP)
                </a>
                , the <strong>Wage Protection System (WPS)</strong>, and the <strong>Labor Reform Initiative (LRI)</strong> has eliminated legacy paper disputes, guaranteed on-time electronic payroll, and provided complete job mobility across employers upon contract completion.
              </p>
            </div>

            {/* Official Authority Citation & Statutory Quote */}
            <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50/60 p-5 sm:p-6 shadow-xs">
              <blockquote
                cite="https://www.hrsd.gov.sa"
                className="text-sm sm:text-base text-slate-800 italic font-medium leading-relaxed"
              >
                &ldquo;Under the Labor Reform Initiative (LRI) and MHRSD statutory directives, all expatriate employment contracts in the Kingdom must be digitally authenticated via the Qiwa platform. Foreign employees enjoy full electronic job mobility and exit-re-entry autonomy upon fulfilling contractual terms.&rdquo;
              </blockquote>
              <div className="mt-3 flex items-center justify-between flex-wrap gap-2 pt-3 border-t border-emerald-200/60 text-xs">
                <cite className="not-italic font-bold text-slate-900 flex items-center gap-1.5">
                  <FaBuildingColumns className="w-3.5 h-3.5 text-emerald-600" />
                  Ministry of Human Resources and Social Development (MHRSD), Saudi Arabia
                </cite>
                <a
                  href="https://qiwa.sa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-2 flex items-center gap-1"
                >
                  Qiwa Official Platform <FaArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            {/* Key Macro Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Megaproject Pipeline</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-slate-900 mt-1">$1.3T+</div>
                <p className="text-[11px] text-slate-500 mt-1">Vision 2030 giga-developments</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Personal Income Tax</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-emerald-600 mt-1">0.0%</div>
                <p className="text-[11px] text-slate-500 mt-1">100% tax-free take-home earnings</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Expatriate Workforce</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-teal-600 mt-1">10M+</div>
                <p className="text-[11px] text-slate-500 mt-1">From India, Pakistan, Bangladesh, Nepal &amp; Philippines</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Labor Platform</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-amber-600 mt-1">Qiwa.sa</div>
                <p className="text-[11px] text-slate-500 mt-1">100% authenticated digital contracts</p>
              </div>
            </div>
          </section>

          {/* ── Section 2: Types of Saudi Work Visas ───────────── */}
          <section id="visa-types" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaPassport className="w-3.5 h-3.5 text-emerald-600" />
              Section 2: Legal Visa Classifications &amp; Permits in Saudi Arabia
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Major Saudi Work Visa Categories in 2026
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The Ministry of Foreign Affairs (MOFA) and Ministry of Human Resources and Social Development (MHRSD) issue several specific work permit categories depending on project duration and candidate specialization:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {/* Card 1: Standard Iqama Work Visa */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-500/60 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-emerald-100 text-emerald-900 font-extrabold text-xs px-2.5 py-1">
                      Standard Residency (85%)
                    </span>
                    <span className="text-xs font-bold text-slate-400">1–2 Year Renewable</span>
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-900">
                    Standard Employment Visa &amp; Iqama
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The primary work residence visa issued under a registered Saudi establishment. Authenticated on the Qiwa platform and linked to a physical / digital <strong>Muqeem Iqama Card</strong>.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                      Wage Protection System (WPS) bank card
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                      Employer-funded medical insurance (CCHI)
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                      Job mobility upon contract completion
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 2: Temporary Work Visa */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-teal-500/60 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-teal-100 text-teal-900 font-extrabold text-xs px-2.5 py-1">
                      Shutdown / Projects
                    </span>
                    <span className="text-xs font-bold text-slate-400">3 to 6 Months</span>
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-900">
                    Temporary Work Visa (Ajeer / Qiwa)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designed for fast-track mobilization in industrial plant turnaround shutdowns (Aramco, SABIC, Ma&apos;aden) and short-term project commissioning without requiring long-term Iqama cards.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-teal-600 shrink-0" />
                      Fast-track electronic approval within 48–72 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-teal-600 shrink-0" />
                      Multiple-entry travel flexibility
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-teal-600 shrink-0" />
                      High overtime and hazard project allowances
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 3: Premium Residency */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-amber-500/60 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-amber-100 text-amber-900 font-extrabold text-xs px-2.5 py-1">
                      High-Skilled &amp; Talent
                    </span>
                    <span className="text-xs font-bold text-slate-400">5-Year / Permanent</span>
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-900">
                    Saudi Premium Residency (Special Talent)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A self-sponsored residency program launched for specialized engineers, medical specialists, researchers, and executive managers with high earnings, exempt from expatriate levy fees.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-amber-600 shrink-0" />
                      Zero employer sponsorship requirement
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-amber-600 shrink-0" />
                      Right to own real estate across the Kingdom
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-amber-600 shrink-0" />
                      Sponsor immediate family and relatives
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 3: Step-by-Step 6-Stage Process Pipeline ── */}
          <section id="step-by-step" className="scroll-mt-28 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaClock className="w-3.5 h-3.5 text-emerald-600" />
              Section 3: Complete Step-by-Step Saudi Recruitment &amp; Visa Pipeline
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                The 6-Phase Saudi Arabia Work Visa Processing Pipeline
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                WorkWise Visa guides candidates through every statutory stage of the Saudi deployment process:
              </p>
            </div>

            {/* Workflow Card Blocks */}
            <div className="space-y-4">
              {/* Phase 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400 transition-all flex flex-col md:flex-row gap-6 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white font-display font-black text-lg shadow-md shadow-emerald-600/20">
                  01
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-display font-bold text-slate-900">
                      Phase 1: Trade Practical Testing &amp; Takamol SVP Examination
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 3–7 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Candidates appear for trade interviews and the mandatory <strong>Takamol Skill Verification Program (SVP)</strong> test at an accredited international center. Passing candidates receive an official digital SVP Certificate synchronized directly to the Saudi government database.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400 transition-all flex flex-col md:flex-row gap-6 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white font-display font-black text-lg shadow-md shadow-emerald-600/20">
                  02
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-display font-bold text-slate-900">
                      Phase 2: Qiwa Digital Labor Contract Authentication
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 2–4 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The Saudi employer uploads the standardized employment contract on the{" "}
                    <a
                      href="https://qiwa.sa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                    >
                      Qiwa Platform (qiwa.sa)
                    </a>
                    . The candidate receives an authentication link/SMS to review and digitally accept the terms (basic wage, food, housing, working hours).
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400 transition-all flex flex-col md:flex-row gap-6 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white font-display font-black text-lg shadow-md shadow-emerald-600/20">
                  03
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-display font-bold text-slate-900">
                      Phase 3: Wafid (GAMCA) Pre-Departure Medical Clearance
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 2–3 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The candidate visits an assigned{" "}
                    <a
                      href="https://wafid.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                    >
                      Wafid / GAMCA clinic
                    </a>{" "}
                    for comprehensive physical, serological, and radiological (Chest X-Ray) screening. A &quot;FIT&quot; result is instantly updated on the Gulf Health Council network.
                  </p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400 transition-all flex flex-col md:flex-row gap-6 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white font-display font-black text-lg shadow-md shadow-emerald-600/20">
                  04
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-display font-bold text-slate-900">
                      Phase 4: Saudi MOFA Visa Authorization &amp; VFS TasHeel Stamping
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 5–10 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The employer issues the electronic <strong>Wakalah (Power of Attorney)</strong> to WorkWise Visa. The physical passport, biometric scans, and Wafid medical records are submitted via the{" "}
                    <a
                      href="https://visa.mofa.gov.sa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                    >
                      Saudi MOFA Visa Portal
                    </a>{" "}
                    to the <strong>Saudi Embassy / VFS TasHeel Center</strong> for visa sticker stamping.
                  </p>
                </div>
              </div>

              {/* Phase 5 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400 transition-all flex flex-col md:flex-row gap-6 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white font-display font-black text-lg shadow-md shadow-emerald-600/20">
                  05
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-display font-bold text-slate-900">
                      Phase 5: Emigration Clearance (e-Migrate / PoE) &amp; Flight Travel
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 2–3 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Indian ECR passport holders receive their online <strong>e-Migrate PoE sticker</strong>. The employer issues direct flight tickets to Riyadh (RUH), Jeddah (JED), Dammam (DMM), or Tabuk (TUU - for NEOM).
                  </p>
                </div>
              </div>

              {/* Phase 6 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400 transition-all flex flex-col md:flex-row gap-6 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white font-display font-black text-lg shadow-md shadow-emerald-600/20">
                  06
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-display font-bold text-slate-900">
                      Phase 6: In-Country Medical &amp; Muqeem Digital Iqama Issuance
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 3–7 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Within 90 days of arrival, the worker completes the in-country Efada medical test and fingerprint synchronization. The employer prints the physical <strong>Muqeem Iqama Card</strong> and activates the worker&apos;s profile on the{" "}
                    <a
                      href="https://www.absher.sa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                    >
                      Absher Platform (absher.sa)
                    </a>{" "}
                    and Tawakkalna apps.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 4: Comprehensive 2026 Salary Matrix ───── */}
          <section id="salary-matrix" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaMoneyBillWave className="w-3.5 h-3.5 text-emerald-600" />
              Section 4: Complete Saudi Arabia Salary Matrix 2026
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                2026 Saudi Arabia Salary Scales by Trade &amp; Skill Category
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Below is the verified, industry-standard monthly compensation structure for skilled, technical, and blue-collar occupations across Riyadh, Jeddah, Eastern Province (Dammam/Jubail), and NEOM. Figures reflect 8 hours/day basic wage, standard company overtime, and employer perks:
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-900 font-display font-bold">
                    <th className="py-4 px-4 sm:px-6">Industry / Trade Role</th>
                    <th className="py-4 px-3 sm:px-4">Basic Wage (SAR)</th>
                    <th className="py-4 px-3 sm:px-4">Overtime / Site Perks</th>
                    <th className="py-4 px-3 sm:px-4">Total Net (SAR / Mo)</th>
                    <th className="py-4 px-3 sm:px-4">INR Equivalent (Approx.)</th>
                    <th className="py-4 px-4 sm:px-6">Company Benefits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {/* Welding & MEP */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      6G TIG &amp; ARC Pipe Welder (CS/SS/Alloy)
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">2,400 – 3,500 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">600 – 1,000 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">3,000 – 4,500 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹67,000 – ₹1,01,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Free Food/Mess, AC Camp, Transport, Flight</td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Industrial / Building Electrician
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">1,800 – 2,700 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">450 – 800 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">2,250 – 3,500 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹50,000 – ₹78,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Free Accommodation, Tools, Health Card</td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Pipe Fitter &amp; Spool Fabricator
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">1,900 – 2,600 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">500 – 850 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">2,400 – 3,450 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹54,000 – ₹77,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Free Food, Housing, Safety PPE, Insurance</td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      HVAC &amp; Central Chiller Mechanic
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">2,100 – 3,000 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">450 – 750 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">2,550 – 3,750 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹57,000 – ₹84,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Free Housing, Site Bus, 30-Day Paid Leave</td>
                  </tr>

                  {/* Heavy Equipment & Drivers */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Heavy Trailer / Lowbed Driver (Saudi License)
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">2,600 – 3,800 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">Trip Allowances</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">3,200 – 5,000 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹72,000 – ₹1,12,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Per-trip bonus, Phone allowance, Insurance</td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Excavator / Bulldozer / Grader Operator
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">2,300 – 3,400 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">500 – 800 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">2,800 – 4,200 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹63,000 – ₹94,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">NEOM Project Camp, Mess Meals, Air Ticket</td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Mobile Crane Operator (20T to 100T)
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">2,800 – 4,200 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">600 – 1,000 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">3,400 – 5,200 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹76,000 – ₹1,16,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Aramco/TUV Card Bonus, Premium Housing</td>
                  </tr>

                  {/* Civil & Construction */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Civil Mason / Plasterer / Tile Fixer
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">1,400 – 1,900 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">350 – 600 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">1,750 – 2,500 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹39,000 – ₹56,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Camp Accommodation, Mess Facility, Transport</td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Shuttering Carpenter &amp; Steel Fixer
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">1,400 – 1,850 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">350 – 650 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">1,750 – 2,500 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹39,000 – ₹56,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Camp Housing, Daily Site Bus, Medical</td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Site Construction Helper / Laborer
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">1,200 – 1,450 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">250 – 450 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">1,450 – 1,900 SAR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹32,000 – ₹42,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Camp Housing, Mess Food, Medical Insurance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 text-xs text-amber-900 leading-relaxed">
              <strong>💡 Currency Conversion Note:</strong> Exchange rates hover around 1 SAR ≈ ₹22.40 to ₹22.60 INR / 74 to 76 PKR. Under Saudi law, earnings are 100% free of income tax with direct Wage Protection System (WPS) bank monitoring.
            </div>
          </section>

          {/* ── Section 5: Takamol SVP Testing ────────────────── */}
          <section id="takamol-svp" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaAward className="w-3.5 h-3.5 text-emerald-600" />
              Section 5: Takamol Skill Verification Program (SVP) Mandate
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Takamol SVP Testing for 23 Regulated Professions
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                To eliminate fraudulent trade certificates and ensure workplace safety, the Saudi Ministry of Human Resources has made the <strong>Takamol Skill Verification Program (SVP)</strong> mandatory for 23 regulated vocational disciplines before the Saudi Embassy will accept visa stamping files.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <FaWrench className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Examination Pattern (2-Stage Assessment)
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Stage 1: Computerized Theory Test (30 Mins):</strong> 30 Multiple Choice Questions (MCQ) on touchscreens with multilingual audio support in Hindi, Urdu, Bengali, Tagalog, and English.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Stage 2: Practical Workshop Trial (1.5–2 Hours):</strong> Hands-on blueprint execution, tool handling, measuring accuracy, and mandatory PPE safety compliance.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Passing Benchmark:</strong> Minimum 60% combined score to unlock digital Qiwa certificate synchronization.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <FaCertificate className="w-5 h-5 text-teal-600" />
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Core Regulated Occupations Covered
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="space-y-1">
                    <div>• Building Electrician</div>
                    <div>• Industrial Electrician</div>
                    <div>• 6G Pipe Welder</div>
                    <div>• Pipe Fitter / Fabricator</div>
                    <div>• HVAC Chiller Tech</div>
                    <div>• Sanitary Plumber</div>
                  </div>
                  <div className="space-y-1">
                    <div>• Shuttering Carpenter</div>
                    <div>• Steel Fixer / Rebar Tier</div>
                    <div>• Civil Mason / Plasterer</div>
                    <div>• Auto Mechanic (Diesel)</div>
                    <div>• Auto Electrician</div>
                    <div>• Rigging Specialist</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 6: Labour Law & Worker Rights ─────────── */}
          <section id="labour-law" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaScaleUnbalanced className="w-3.5 h-3.5 text-emerald-600" />
              Section 6: Saudi Labor Law Protections, Gratuity &amp; Worker Rights
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Legal Protections Guaranteed by Saudi Labor Law (Royal Decree No. M/51)
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold">
                  <FaFileInvoiceDollar className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  MHRSD WPS Bank Protection
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All registered companies must disburse wages electronically into workers&apos; bank accounts before the 10th of every month. Delayed payroll leads to automatic freezing of corporate government portals.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-800 font-bold">
                  <FaClock className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  8-Hour Shift &amp; Overtime Formula
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Standard duty is 8 hours/day (48 hours/week). Overtime hours are legally compensated at <strong>100% of basic hourly rate + 50% extra bonus</strong> (total 150% rate).
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-bold">
                  <FaMoneyBillWave className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  End-of-Service Benefits (ESB)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Under Article 84, workers receive severance gratuity: <strong>half month basic salary per year</strong> for the first 5 years, and a <strong>full month basic salary per year</strong> for all subsequent years.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-800 font-bold">
                  <FaTriangleExclamation className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Summer Midday Heat Ban
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  From June 15 to September 15, outdoor work under direct sunlight is strictly prohibited between <strong>12:00 PM and 3:00 PM</strong> with mandatory air-conditioned shelters and cold water supplies.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold">
                  <FaPlaneArrival className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  21–30 Days Paid Annual Leave
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Workers enjoy a minimum of 21 days paid annual leave (increasing to 30 days after 5 years continuous service) plus return flight tickets provided by the sponsoring employer.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-800 font-bold">
                  <FaHandshakeAngle className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Kafala Abolished: Job Mobility
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Under the Labor Reform Initiative, workers can legally transition to a new employer upon Qiwa contract completion without needing an employer Exit NOC or facing labor bans.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 7: Wafid Medical ──────────────────────── */}
          <section id="medical-wafid" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaHospital className="w-3.5 h-3.5 text-emerald-600" />
              Section 7: Wafid (GAMCA) Medical Screening Criteria
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Pre-Departure &amp; In-Country Medical Examination Standards
            </h2>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">Diagnostic Test 1</div>
                <h3 className="font-display font-bold text-slate-900 text-base">Digital PA Chest X-Ray</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Screens for active pulmonary Tuberculosis (TB), pleural calcification, and lung cavitation. Clear, healthy chest X-rays are mandatory for Saudi visa issuance.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-700">Diagnostic Test 2</div>
                <h3 className="font-display font-bold text-slate-900 text-base">Blood Serology Screening</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Screening for HIV-1/2 antibodies, Hepatitis B Surface Antigen (HBsAg), Hepatitis C Antibodies (Anti-HCV), and Syphilis (VDRL/TPHA).
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700">Diagnostic Test 3</div>
                <h3 className="font-display font-bold text-slate-900 text-base">Efada In-Country Sync</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Upon landing in Saudi Arabia, a quick local medical test is registered directly on the Ministry of Health&apos;s <strong>Efada network</strong> to unlock the Muqeem Iqama printing.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 8: Detailed FAQs Section ──────────────── */}
          <section id="faqs" className="scroll-mt-28 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaCircleQuestion className="w-3.5 h-3.5 text-emerald-600" />
              Section 8: Frequently Asked Questions (FAQs) for Saudi Arabia Work Visas
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions Regarding Saudi Arabia &amp; NEOM Work Permits
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Clear, legally verified answers to the most critical queries about working in Saudi Arabia:
              </p>
            </div>

            <div className="grid gap-4">
              {faqSchema.mainEntity.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400/80 transition-all space-y-2"
                >
                  <h3 className="font-display font-bold text-slate-900 text-base flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                      {index + 1}
                    </span>
                    {faq.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-9">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Internal Linking & Relevant Guides ─────────────── */}
          <section className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/70 p-8 sm:p-10 shadow-sm space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Explore Related Saudi In-Depth Resources
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                Authoritative Saudi Arabia Career &amp; Immigration Guides
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/blogs/takamol-skill-verification-program-saudi-arabia-svp-exam-pattern-qiwa-centers"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-emerald-600">SVP Examination Manual</span>
                  <h3 className="font-display font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    Takamol Skill Verification Program (SVP) Complete Guide
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    23 regulated professions, theory + practical exam pattern, test centers, and Qiwa platform integration.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 mt-4">
                  Read Full Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/blogs/saudi-arabia-blue-collar-construction-recruitment-vision-2030-neom-work-visas"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-teal-600">Vision 2030 &amp; NEOM</span>
                  <h3 className="font-display font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    Saudi Blue-Collar &amp; Construction Recruitment Guide
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    NEOM, Red Sea, Riyadh Metro, Qiwa digital contracts, and Iqama issuance rules.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 mt-4">
                  Read Full Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/blogs/gulf-petrochemical-refinery-shutdown-jobs-aramco-adnoc-knpc-turnaround-recruitment"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-amber-600">Aramco &amp; Petrochemicals</span>
                  <h3 className="font-display font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    Gulf Petrochemical &amp; Refinery Shutdown Recruitment
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Aramco and SABIC turnaround maintenance, 6G welders, riggers, and PTW safety protocols.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 mt-4">
                  Read Full Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </section>

          {/* ── Direct CTA Banner ──────────────────────────────── */}
          <section className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="inline-block rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3.5 py-1 text-xs font-bold text-emerald-300">
                Direct Saudi Client Recruitment Drives Active
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
                Apply for Verified Saudi Arabia &amp; NEOM Jobs with WorkWise Visa
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Connect with licensed Saudi establishments for zero-fee, government-registered recruitment in construction, engineering, oil &amp; gas, and heavy driving. Get verified Qiwa contracts, Takamol SVP testing support, and express flight deployment.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://wa.me/919152288874?text=Hello%20WorkWise%20Visa,%20I%20want%20to%20apply%20for%20a%20Saudi%20Arabia/NEOM%20work%20visa%20and%20job%20vacancy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-emerald-500 px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  Chat on WhatsApp with Saudi Specialist
                </a>

                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition-colors"
                >
                  <FaBriefcase className="w-3.5 h-3.5" />
                  View All Open Jobs
                </Link>
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
