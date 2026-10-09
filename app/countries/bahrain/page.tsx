import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  FaCheck,
  FaArrowRight,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaShieldHalved,
  FaBuildingColumns,
  FaFileInvoiceDollar,
  FaBriefcase,
  FaUserCheck,
  FaClock,
  FaMoneyBillWave,
  FaHospital,
  FaTruckFast,
  FaUtensils,
  FaHelmetSafety,
  FaWrench,
  FaPassport,
  FaPlaneArrival,
  FaScaleUnbalanced,
  FaHandshakeAngle,
  FaTriangleExclamation,
  FaCircleQuestion,
  FaMagnifyingGlass,
  FaCalculator,
  FaLocationDot,
  FaCertificate,
  FaArrowTrendUp,
  FaOilWell,
  FaCity,
} from "react-icons/fa6";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.workwisevisa.com";

export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Bahrain Work Visa & Jobs Guide 2026 | WorkWise Visa",
  description:
    "Complete 2026 Bahrain work visa guide. Learn LMRA work permits, NPRA visa clearance, Bapco refinery jobs, tax-free salary scales & verified Gulf recruitment.",
  keywords: [
    "Bahrain work visa 2026",
    "Manama employment visa process",
    "LMRA work permit Bahrain",
    "NPRA Bahrain visa status check",
    "Bapco modernization jobs recruitment 2026",
    "Bahrain 6G welder jobs salary",
    "Bahrain heavy driver jobs visa",
    "Wafid GAMCA medical test Bahrain",
    "Bahrain labour law Law No. 36 of 2012",
    "WPS salary system Bahrain",
    "Bahrain CPR smart card process",
    "WorkWise Visa Bahrain recruitment",
    "Bahrain Economic Vision 2030 jobs",
  ],
  alternates: {
    canonical: `${BASE_URL}/countries/bahrain`,
  },
  openGraph: {
    title: "Bahrain Work Visa & Jobs Guide 2026 | WorkWise Visa",
    description:
      "Complete 2026 Bahrain work visa guide. Learn LMRA work permits, NPRA visa clearance, Bapco refinery jobs, tax-free salary scales & verified Gulf recruitment.",
    url: `${BASE_URL}/countries/bahrain`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: `${BASE_URL}/images/bahrain_hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Bahrain Manama Work Visa & Recruitment Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bahrain Work Visa & Jobs Guide 2026 | WorkWise Visa",
    description:
      "Complete 2026 Bahrain work visa guide. Learn LMRA work permits, NPRA visa clearance, Bapco refinery jobs, tax-free salary scales & verified Gulf recruitment.",
    images: [`${BASE_URL}/images/bahrain_hero.jpg`],
  },
};

export default function BahrainCountryPage() {
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
        name: "Bahrain",
        item: `${BASE_URL}/countries/bahrain`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Bahrain Work Visa & Employment Guide 2026: Complete LMRA Process, NPRA Visa, Salaries & Legal Rights",
    description:
      "Comprehensive, expert-backed manual for migrating and working in the Kingdom of Bahrain (Manama, Sitra, Muharraq, Riffa). Covers LMRA work permits, NPRA visa clearance, Wafid medical rules, 2026 salary scales across trades, and labour law protections under Law No. 36 of 2012.",
    author: {
      "@type": "Organization",
      name: "WorkWise Visa Gulf Advisory Team",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "WorkWise Visa",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    datePublished: "2026-01-15T08:00:00+03:00",
    dateModified: "2026-10-09T10:00:00+03:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/countries/bahrain`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the core requirements to obtain a Bahrain Employment Visa in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To obtain a Bahrain Employment Visa, candidates need a valid international passport (minimum 6 months validity with at least 2 blank pages), passing practical trade evaluations, obtaining 'FIT' status from an accredited Wafid (GAMCA) medical center, and an employer sponsorship application submitted via the Labour Market Regulatory Authority (LMRA) and Nationality, Passports and Residence Affairs (NPRA).",
        },
      },
      {
        "@type": "Question",
        name: "How long does the complete Bahrain work visa process take from India or neighboring countries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The standard deployment timeframe is approximately 2 to 3 weeks (14–21 calendar days). This includes 2–4 days for LMRA electronic application approval, 2–4 days for pre-departure Wafid medical tests, 2–3 days for e-Migrate PoE clearance, and 2–3 days for flight ticketing and airport reception in Manama.",
        },
      },
      {
        "@type": "Question",
        name: "What are the average monthly salaries for skilled trade workers in Bahrain in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In 2026, certified 6G Pipe Welders earn 220–300 BHD basic (approx. ₹59,900–₹84,300 INR with overtime total 270–380 BHD), Heavy Equipment / Trailer Drivers earn 190–260 BHD basic (approx. ₹51,000–₹73,200 INR), Industrial Electricians & Plumbers earn 160–220 BHD basic (approx. ₹43,200–₹61,000 INR), and Construction Helpers earn 100–130 BHD basic (approx. ₹27,700–₹37,700 INR) plus free company accommodation, transport, medical care, and overtime allowances.",
        },
      },
      {
        "@type": "Question",
        name: "Is medical screening mandatory through Wafid (GAMCA) for Bahrain work permits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All expatriates entering Bahrain for employment must undergo pre-departure medical screening (chest X-ray, serology for infectious diseases, general physical checkup) at an authorized Wafid (GAMCA) medical center before visa stamping.",
        },
      },
      {
        "@type": "Question",
        name: "What worker protections are guaranteed under Bahrain Labour Law (Law No. 36 of 2012)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Law No. 36 of 2012 guarantees 8-hour daily working hours (48 hours per week), statutory 125% daytime and 150% nighttime/Friday overtime pay, 30 calendar days of paid annual leave, end-of-service severance indemnity, summer midday work prohibitions (12:00 PM to 4:00 PM), and Wage Protection System (WPS) bank payroll monitoring through the Central Bank of Bahrain.",
        },
      },
      {
        "@type": "Question",
        name: "Who pays for the Bahrain visa and recruitment expenses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under official LMRA regulations and ethical recruitment codes, all statutory visa issuance charges, work permit fees, and deployment flight tickets are legally 100% covered by the sponsoring employer in Bahrain.",
        },
      },
      {
        "@type": "Question",
        name: "What major industrial projects are driving job vacancies in Bahrain in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Key growth drivers include the Bapco Modernization Program (BMP $7B+ refinery expansion in Sitra), Aluminium Bahrain (Alba) smelter expansions, Bahrain Metro Project, King Hamad Causeway, and logistics infrastructure under Bahrain Economic Vision 2030.",
        },
      },
      {
        "@type": "Question",
        name: "How does the Bahrain CPR Smart Card (Identity Card) process work after arrival?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Within 30 days of arrival in Bahrain, the worker completes biometric fingerprinting and in-country medical verification. The Information & eGovernment Authority (iGA) issues the physical Central Population Registry (CPR) Smart Card, unlocking banking access and legal residency.",
        },
      },
      {
        "@type": "Question",
        name: "Can Indian ECR passport holders migrate legally for work in Bahrain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Indian nationals holding Emigration Check Required (ECR) passports can legally travel to Bahrain for employment once the recruitment agency secures online Protector of Emigrants (PoE) clearance via the Government of India's e-Migrate system against an approved demand.",
        },
      },
      {
        "@type": "Question",
        name: "How are end-of-service indemnity benefits calculated in Bahrain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Article 116 of Law No. 36 of 2012, workers who complete at least one year of continuous service receive end-of-service severance pay calculated as: half a month's basic wage for each of the first three years of service, and one full month's basic wage for each subsequent year of service, based on the last basic wage drawn.",
        },
      },
      {
        "@type": "Question",
        name: "Can an expatriate worker in Bahrain change employers without an Exit NOC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Under LMRA job mobility guidelines, an expatriate employee has the statutory right to transfer to a new employer upon completing their contract duration or by serving written statutory notice in accordance with LMRA regulations without facing deportation bans.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Wage Protection System (WPS) in Bahrain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Wage Protection System (WPS) is an electronic salary transfer mechanism supervised by the Central Bank of Bahrain (CBB) and LMRA. It ensures employers disburse full wages into workers' bank accounts on or before statutory due dates. Non-compliant establishments face automated quota freezes and administrative penalties.",
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
              <span className="text-emerald-300 font-bold">Kingdom of Bahrain (Manama &amp; Sitra)</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                {/* Government & Authority Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Official 2026 Bahrain LMRA &amp; NPRA Authority
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                  Bahrain Work Visa &amp; Manama Jobs Guide <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">2026</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  The definitive, expert-verified guide to securing legal employment in the <strong className="font-bold text-white">Kingdom of Bahrain (Manama, Sitra, Muharraq, Riffa)</strong>. Explore official <strong className="font-bold text-emerald-300">LMRA work permit procedures</strong>, <strong className="font-bold text-white">tax-free salary scales across 25+ trades</strong>, <strong className="font-bold text-emerald-300">NPRA visa clearances</strong>, and <strong className="font-bold text-white">worker protections under Law No. 36 of 2012</strong>.
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
                      <div className="text-xs font-bold text-white leading-tight">LMRA 2-Yr Visa</div>
                      <div className="text-[10px] text-slate-400">Renewable Residency</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaHospital className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Free Medical &amp; Stay</div>
                      <div className="text-[10px] text-slate-400">Company Accommodation</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaShieldHalved className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">WPS Protected</div>
                      <div className="text-[10px] text-slate-400">CBB Bank Payroll</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaClock className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">2–3 Weeks Transit</div>
                      <div className="text-[10px] text-slate-400">Fast Deployment</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaPlaneArrival className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Employer Airfare</div>
                      <div className="text-[10px] text-slate-400">Free Flight Tickets</div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href="/jobs?country=Bahrain"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <FaBriefcase className="w-4 h-4" />
                    Browse Active Bahrain Vacancies
                  </Link>

                  <a
                    href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20Bahrain%20work%20visa%20and%20job%20vacancies."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/50 px-6 py-3.5 text-sm font-bold text-white transition-all shadow-md"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-300" />
                    WhatsApp Bahrain Desk
                  </a>

                  <Link
                    href="/track-application"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white underline underline-offset-4"
                  >
                    Track Existing Bahrain Application <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Quick Country Snapshot Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-emerald-500/20 bg-slate-900/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/20 p-1.5 shadow-inner">
                        <img
                          src="https://flagcdn.com/w80/bh.png"
                          alt="Bahrain flag"
                          className="h-7 w-10 object-cover rounded shadow-xs"
                        />
                      </div>
                      <div>
                        <h2 className="font-display font-bold text-white text-lg">Kingdom of Bahrain</h2>
                        <p className="text-xs text-emerald-400 font-semibold">Manama, Sitra, Muharraq &amp; Riffa</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-xs font-extrabold text-emerald-300">
                      2026 Active
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs text-slate-300">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Governing Authority:</span>
                      <span className="font-bold text-white">Labour Market Regulatory Authority (LMRA)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Visa Stamping Authority:</span>
                      <span className="font-bold text-white">NPRA Bahrain</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Average Processing Time:</span>
                      <span className="font-bold text-emerald-400">2–3 Weeks (14–21 Days)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Standard Visa Duration:</span>
                      <span className="font-bold text-white">2 Years (Renewable)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Medical Examination:</span>
                      <span className="font-bold text-teal-300">Wafid (GAMCA) Pre-Departure</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Wage Protection (WPS):</span>
                      <span className="font-bold text-emerald-400">Central Bank of Bahrain (CBB)</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400">Personal Income Tax:</span>
                      <span className="font-bold text-emerald-400">0.0% (Zero Tax)</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-900/40 border border-emerald-500/30 p-4 text-center">
                    <p className="text-xs font-medium text-emerald-200 mb-2">
                      Ready to apply for high-paying Bahrain refinery, MEP, or driving jobs?
                    </p>
                    <a
                      href="mailto:workwisevisa@gmail.com?subject=Bahrain%20Job%20Application&body=Hello%20WorkWise%20Visa%20Team,%0A%0AI%20am%20applying%20for%20a%20job%20in%20Bahrain.%0A%0AFull%20Name:%0APhone%20Number:%0ATrade/Designation:%0APassport%20Number:%0AExperience%20(Years):"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-900 hover:bg-slate-100 transition-colors shadow-sm"
                    >
                      <FaEnvelope className="w-3.5 h-3.5 text-emerald-600" />
                      Submit CV for Bahrain Recruitment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Table of Contents ────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/50">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              <FaMagnifyingGlass className="w-3 h-3 text-emerald-600" />
              Comprehensive Page Directory:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#overview" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                1. 2026 Overview &amp; Bapco BMP
              </a>
              <a href="#visa-types" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                2. Bahrain Visa Categories
              </a>
              <a href="#step-by-step" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                3. 6-Stage Visa Pipeline
              </a>
              <a href="#salary-matrix" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                4. 2026 Salary Table
              </a>
              <a href="#trade-careers" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                5. Trade Role Specializations
              </a>
              <a href="#documents" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                6. Required Documents
              </a>
              <a href="#labour-law" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                7. Bahrain Labour Law (Law 36/2012)
              </a>
              <a href="#medical-wafid" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                8. Wafid Medical Rules
              </a>
              <a href="#living-remittance" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                9. Living Costs &amp; Remittance
              </a>
              <a href="#faqs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                10. Detailed FAQs (12+)
              </a>
            </div>
          </div>
        </section>

        {/* ── Main Content Container ─────────────────────────── */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">

          {/* ── Section 1: Overview & 2026 Regulatory Landscape ── */}
          <section id="overview" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaOilWell className="w-3.5 h-3.5 text-emerald-600" />
              Section 1: Country Overview &amp; Bapco BMP Mega-Expansion
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The Bahrain Labor Market in 2026: Refinery Expansion &amp; Industrial Hiring
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                The <strong>Kingdom of Bahrain</strong> offers one of the most modernized, transparent, and expatriate-friendly labor ecosystems in the Arabian Gulf. In 2026, the national economy is energized by massive capital expenditure projects, led by the <strong>$7+ Billion USD Bapco Modernization Program (BMP)</strong> under{" "}
                <a
                  href="https://www.bapcoenergies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Bapco Energies
                </a>
                , boosting national refinery throughput to over <strong>380,000 barrels per day (bpd)</strong>.
              </p>
              <p>
                Alongside petrochemical infrastructure upgrades in Sitra, significant workforce recruitment is underway for <strong>Aluminium Bahrain (Alba)</strong> smelter line extensions, major commercial projects across Bahrain Bay and Diyar Al Muharraq, the upcoming Bahrain Metro system, and cross-border trade logistics connected via the King Fahd Causeway to Saudi Arabia.
              </p>
              <p>
                Expatriate employment operates under the digital administration of the{" "}
                <a
                  href="https://lmra.gov.bh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Labour Market Regulatory Authority (LMRA)
                </a>{" "}
                and the{" "}
                <a
                  href="https://www.npra.gov.bh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Nationality, Passports and Residence Affairs (NPRA)
                </a>
                . The regulatory architecture guarantees 100% electronic Wage Protection System (WPS) compliance supervised by the{" "}
                <a
                  href="https://www.cbb.gov.bh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Central Bank of Bahrain (CBB)
                </a>
                , comprehensive employer-funded medical insurance, and clear job mobility pathways upon contract completion.
              </p>
            </div>

            {/* Official Authority Citation & Statutory Quote */}
            <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50/60 p-5 sm:p-6 shadow-xs">
              <blockquote
                cite="https://lmra.gov.bh"
                className="text-sm sm:text-base text-slate-800 italic font-medium leading-relaxed"
              >
                &ldquo;Under Law No. 36 of 2012 (Bahrain Labour Law for the Private Sector) and LMRA statutory regulations, employers are strictly responsible for all work permit fees and travel costs. Workers are entitled to transparent wage disbursement through the Wage Protection System and complete contract portability.&rdquo;
              </blockquote>
              <div className="mt-3 flex items-center justify-between flex-wrap gap-2 pt-3 border-t border-emerald-200/60 text-xs">
                <cite className="not-italic font-bold text-slate-900 flex items-center gap-1.5">
                  <FaBuildingColumns className="w-3.5 h-3.5 text-emerald-600" />
                  Labour Market Regulatory Authority (LMRA), Kingdom of Bahrain
                </cite>
                <a
                  href="https://lmra.gov.bh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-2 flex items-center gap-1"
                >
                  LMRA Official Portal <FaArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            {/* Key Macro Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Bapco BMP Megaproject</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-slate-900 mt-1">$7B+</div>
                <p className="text-[11px] text-slate-500 mt-1">Refinery throughput &amp; clean fuels upgrade</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Personal Income Tax</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-emerald-600 mt-1">0.0%</div>
                <p className="text-[11px] text-slate-500 mt-1">100% tax-free take-home earnings</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Standard Visa Duration</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-teal-600 mt-1">2 Years</div>
                <p className="text-[11px] text-slate-500 mt-1">Renewable LMRA electronic work permit</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">WPS Banking Guarantee</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-amber-600 mt-1">100%</div>
                <p className="text-[11px] text-slate-500 mt-1">Direct salary transfer monitoring by CBB</p>
              </div>
            </div>
          </section>

          {/* ── Section 2: Visa Classifications ─────────────────── */}
          <section id="visa-types" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaPassport className="w-3.5 h-3.5 text-emerald-600" />
              Section 2: Legal Visa Classifications &amp; Eligibility
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Major Bahrain Work Visa Categories in 2026
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Expatriate professionals and technical tradesmen are mobilized under standardized LMRA permits:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {/* Card 1: Standard Commercial LMRA */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-500/60 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-emerald-100 text-emerald-900 font-extrabold text-xs px-2.5 py-1">
                      Most Common (90%)
                    </span>
                    <span className="text-xs font-bold text-slate-400">2-Year Validity</span>
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-900">
                    LMRA Commercial Work Visa
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Issued to workers hired by registered Bahraini companies in civil construction, oil &amp; gas contracting, aluminium fabrication, logistics, and MEP engineering.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                      WPS electronic payroll security
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                      Employer-funded visa &amp; airfare
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                      CPR Smart Card issuance
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 2: Industrial Project Visa */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-teal-500/60 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-teal-100 text-teal-900 font-extrabold text-xs px-2.5 py-1">
                      Project-Based
                    </span>
                    <span className="text-xs font-bold text-slate-400">6–12 Months</span>
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-900">
                    Industrial Turnaround Visa
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designed for specialized refinery shutdown maintenance, boiler testing, and hydro-testing projects at Bapco Sitra and Alba smelter facilities.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-teal-600 shrink-0" />
                      Expedited LMRA processing
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-teal-600 shrink-0" />
                      Site-specific safety clearances
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-teal-600 shrink-0" />
                      Extension potential for upcoming phases
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 3: Golden Residency */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-amber-500/60 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-amber-100 text-amber-900 font-extrabold text-xs px-2.5 py-1">
                      Skilled &amp; Talents
                    </span>
                    <span className="text-xs font-bold text-slate-400">10-Year Self-Sponsored</span>
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-900">
                    Bahrain Golden Residency Visa
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designed for highly skilled engineers, executive managers, and property investors with monthly earnings exceeding 2,000 BHD without requiring a local employer sponsor.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-amber-600 shrink-0" />
                      Indefinite renewal rights
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-amber-600 shrink-0" />
                      Family sponsorship privileges
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-amber-600 shrink-0" />
                      Self-managed residency
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 3: 6-Stage Process Pipeline ────────────── */}
          <section id="step-by-step" className="scroll-mt-28 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaClock className="w-3.5 h-3.5 text-emerald-600" />
              Section 3: Complete Step-by-Step Bahrain Recruitment &amp; Visa Pipeline
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                The 6-Phase Bahrain Work Visa Processing Pipeline
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                WorkWise Visa enforces an organized deployment pipeline connecting candidates directly with licensed Bahraini companies:
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
                      Phase 1: Trade Practical Testing &amp; LMRA Online Application
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 2–4 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Candidates appear for practical trade skill assessments (welding coupons, pipe spool fabrication, electrical wiring). The hiring Bahraini enterprise registers the candidate on the{" "}
                    <a
                      href="https://lmra.gov.bh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                    >
                      LMRA Electronic Expatriate Management System (EMS)
                    </a>
                    .
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
                      Phase 2: Pre-Departure Wafid (GAMCA) Medical Examination
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 2–4 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Candidate completes pre-departure health screening at an accredited{" "}
                    <a
                      href="https://wafid.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                    >
                      Wafid / GAMCA medical center
                    </a>
                    . The &quot;FIT&quot; result is updated online on the Gulf Health Council portal and synchronized with Bahrain LMRA.
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
                      Phase 3: NPRA Security Clearance &amp; Electronic Work Visa Issuance
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 2–4 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The{" "}
                    <a
                      href="https://www.npra.gov.bh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                    >
                      Nationality, Passports and Residence Affairs (NPRA)
                    </a>{" "}
                    validates security clearance. The official <strong>Bahrain Electronic Work Entry Visa</strong> is generated with an authentic barcode.
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
                      Phase 4: Pre-Departure Emigration (PoE / e-Migrate) Clearance
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 2–3 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Indian ECR passport holders receive online clearance through the <strong>e-Migrate PoE system</strong>. The employer issues direct flight tickets to Bahrain International Airport (BAH) in Manama.
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
                      Phase 5: In-Country Ministry of Health Verification
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 2–3 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The worker is transported to an authorized health center in Manama for in-country medical verification supervised by the{" "}
                    <a
                      href="https://www.healthalert.gov.bh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                    >
                      Ministry of Health (MOH Bahrain)
                    </a>
                    .
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
                      Phase 6: Biometrics, CPR Smart Card Delivery &amp; WPS Bank Payroll Setup
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 3–5 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Worker completes biometric fingerprinting at an LMRA center. The physical <strong>CPR Smart Card (Civil ID)</strong> is printed, the employee&apos;s WPS bank payroll card is issued, and site deployment commences.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 4: 2026 Salary Matrix ─────────────────── */}
          <section id="salary-matrix" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaMoneyBillWave className="w-3.5 h-3.5 text-emerald-600" />
              Section 4: Complete Bahrain Salary Matrix 2026
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                2026 Bahrain Salary Scales by Trade &amp; Skill Category
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Below is the comprehensive monthly compensation structure for skilled, technical, and industrial occupations across Manama, Sitra, and Alba industrial zones. Figures reflect 8 hours/day basic wage, standard company overtime potential, and employer amenities (1 BHD ≈ ₹222 INR):
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-900 font-display font-bold">
                    <th className="py-4 px-4 sm:px-6">Industry / Trade Role</th>
                    <th className="py-4 px-3 sm:px-4">Basic Wage (BHD)</th>
                    <th className="py-4 px-3 sm:px-4">Overtime Potential</th>
                    <th className="py-4 px-3 sm:px-4">Total Net (BHD / Mo)</th>
                    <th className="py-4 px-3 sm:px-4">INR Equivalent (Approx.)</th>
                    <th className="py-4 px-4 sm:px-6">Company Benefits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {/* Energy & Welding */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      6G TIG &amp; ARC Pipe Welder (Bapco Refinery BMP)
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">220 – 300 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">50 – 80 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">270 – 380 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹59,900 – ₹84,300</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Food, Stay &amp; Medical</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Pipe Fabricator &amp; Spool Fitter
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">180 – 240 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">40 – 60 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">220 – 300 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹48,800 – ₹66,600</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Stay &amp; Overtime</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Structural Steel Fitter &amp; Fabricator
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">150 – 200 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">35 – 50 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">185 – 250 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹41,000 – ₹55,500</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Stay &amp; Transport</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Rigging Leadman &amp; Certified Rigger
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">160 – 220 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">35 – 55 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">195 – 275 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹43,200 – ₹61,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Accommodation &amp; Overtime</td>
                  </tr>

                  {/* Heavy Transport & Machinery */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Heavy Trailer / Transit Mixer Driver (Bahrain/GCC License)
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">190 – 260 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">40 – 70 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">230 – 330 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹51,000 – ₹73,200</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Trip Allowance + Stay</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Mobile Crane Operator (50T – 100T)
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">220 – 290 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">45 – 70 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">265 – 360 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹58,800 – ₹79,900</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Company Accommodation</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Excavator &amp; Heavy Wheel Loader Operator
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">180 – 240 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">40 – 60 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">220 – 300 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹48,800 – ₹66,600</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Stay &amp; Medical</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Light Vehicle / Airport Shuttle Driver
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">130 – 170 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">30 – 45 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">160 – 215 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹35,500 – ₹47,700</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Company Car + Stay</td>
                  </tr>

                  {/* MEP Trades */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Industrial Electrician &amp; Control Panel Wireman
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">160 – 220 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">35 – 55 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">195 – 275 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹43,200 – ₹61,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Stay &amp; Transport</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      HVAC Chiller &amp; VRF Maintenance Technician
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">160 – 220 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">35 – 55 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">195 – 275 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹43,200 – ₹61,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Stay &amp; Medical</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Commercial Plumber &amp; Fire Protection Fitter
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">135 – 180 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">30 – 45 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">165 – 225 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹36,600 – ₹49,900</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Accommodation</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      DCS / PLC Instrumentation Calibration Tech
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">220 – 300 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">45 – 70 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">265 – 370 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹58,800 – ₹82,100</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Stay &amp; Medical</td>
                  </tr>

                  {/* Civil Construction & Finishing */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Scaffolding Erector / Steel Fixer
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">120 – 160 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">30 – 45 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">150 – 205 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹33,300 – ₹45,500</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Food &amp; Stay</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Tiles &amp; Marble Mason / Plasterer
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">125 – 170 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">30 – 45 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">155 – 215 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹34,400 – ₹47,700</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Stay &amp; Overtime</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Shuttering &amp; Gypsum Carpenter
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">125 – 165 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">30 – 45 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">155 – 210 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹34,400 – ₹46,600</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Food &amp; Camp Stay</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Construction Site Helper / Cleaner
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">100 – 130 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">25 – 40 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">125 – 170 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹27,700 – ₹37,700</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Food, Stay &amp; Medical</td>
                  </tr>

                  {/* Hospitality & Facility Management */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Continental / Asian Chef &amp; Line Cook
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">170 – 250 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">35 – 55 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">205 – 305 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹45,500 – ₹67,700</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Duty Meals &amp; Stay</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Hotel Housekeeping Attendant &amp; Steward
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">110 – 150 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">25 – 40 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">135 – 190 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹29,900 – ₹42,100</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Tips + Accommodation</td>
                  </tr>

                  {/* Supervisory & QC */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Civil / Mechanical Site Foreman
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">260 – 360 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">45 – 75 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">305 – 435 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹67,700 – ₹96,500</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Company Car &amp; Phone</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      HSE Safety Officer (NEBOSH IGC Certified)
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">280 – 400 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">45 – 75 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">325 – 475 BHD</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹72,100 – ₹105,400</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Single Status Room + Car</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 5: In-Demand Trade Role Deep Dives ────── */}
          <section id="trade-careers" className="scroll-mt-28 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaWrench className="w-3.5 h-3.5 text-emerald-600" />
              Section 5: High-Demand Trade Career Profiles
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                Specialized Trade Roles &amp; Skill Standards for Bahrain Recruitment
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Bahraini refinery operators, smelters, and civil contractors enforce rigorous practical trade assessments before onboarding:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Profile 1 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <FaOilWell className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    6G TIG &amp; ARC Pipe Welders (Bapco Modernization Program)
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Refinery welding specialists must qualify in 6G inclined pipe coupons (GTAW root with Argon purge + SMAW fill and cap with E7018 low hydrogen rods) on high-pressure hydrocarbon spools. Welds undergo 100% Non-Destructive Testing (NDT Radiography).
                </p>
                <div className="text-xs font-semibold text-emerald-800 bg-emerald-50 p-3 rounded-xl">
                  Average Take-Home: 270 – 380 BHD/Mo (₹59,900 – ₹84,300 INR) with free accommodation &amp; overtime.
                </div>
              </div>

              {/* Profile 2 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <FaTruckFast className="w-5 h-5 text-teal-600" />
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Heavy Trailer &amp; Transit Mixer Drivers (Bahrain/GCC License)
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Drivers operate heavy articulated trucks across Bahrain’s industrial hubs and the King Fahd Causeway to Saudi Arabia. Candidates holding valid GCC licenses undergo fast-track conversion trials through the General Directorate of Traffic.
                </p>
                <div className="text-xs font-semibold text-teal-800 bg-teal-50 p-3 rounded-xl">
                  Average Take-Home: 230 – 330 BHD/Mo (₹51,000 – ₹73,200 INR) with trip allowances.
                </div>
              </div>

              {/* Profile 3 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <FaHelmetSafety className="w-5 h-5 text-amber-600" />
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Industrial Electricians &amp; Control Panel Wiremen
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Technicians must read control schematics, assemble Motor Control Centers (MCC), wire Variable Speed Drives (VSD), route heavy industrial cable trays, and install explosion-proof electrical systems in refinery and smelter potlines.
                </p>
                <div className="text-xs font-semibold text-amber-800 bg-amber-50 p-3 rounded-xl">
                  Average Take-Home: 195 – 275 BHD/Mo (₹43,200 – ₹61,000 INR) with free transport &amp; overtime.
                </div>
              </div>

              {/* Profile 4 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <FaUtensils className="w-5 h-5 text-rose-600" />
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Hospitality Staff, Chefs &amp; Facility Stewards
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bahrain’s vibrant hospitality sector across Manama, Seef, and Amwaj Islands constantly recruits continental cooks, pastry chefs, kitchen stewards, waiters, and facility housekeeping teams with full meals and accommodation provided.
                </p>
                <div className="text-xs font-semibold text-rose-800 bg-rose-50 p-3 rounded-xl">
                  Average Take-Home: 135 – 305 BHD/Mo (₹29,900 – ₹67,700 INR) with tips and food.
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 6: Required Documents ──────────────────── */}
          <section id="documents" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaCertificate className="w-3.5 h-3.5 text-emerald-600" />
              Section 6: Required Documents Checklist
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Essential Documents for Bahrain Employment Visa Clearance
            </h2>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <FaHelmetSafety className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    For Blue-Collar &amp; Trade Craftsmen (Skill Levels 4 &amp; 5)
                  </h3>
                </div>
                <p className="text-xs text-slate-500">
                  Welders, Fabricators, Electricians, Plumbers, Drivers, Masons &amp; Helpers:
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Original Passport:</strong> Minimum validity of 6 months with at least 2 blank pages.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Photographs:</strong> 8 to 12 passport-size photographs with clean white background.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Wafid (GAMCA) Medical Slip:</strong> Official online medical fitness report.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Driving License (If applicable):</strong> Valid GCC or Indian/Pakistani HTV license.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>No Degree Attestation:</strong> Trade workers do not require university degree authentication.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <FaBuildingColumns className="w-5 h-5 text-teal-600" />
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    For Supervisory, Engineering &amp; Management (Skill Levels 1, 2, 3)
                  </h3>
                </div>
                <p className="text-xs text-slate-500">
                  Site Engineers, QA/QC Inspectors, Foremen, Safety Officers &amp; Accountants:
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Attested Degree/Diploma:</strong> Certified through State HRD ➔ MEA ➔ Bahrain Embassy.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Experience Certificates:</strong> 3 to 5 years verified employment letters.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Police Clearance Certificate (PCC):</strong> Issued by Passport Seva Kendra (PSK).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Professional Certifications:</strong> CSWIP 3.1, NDT Level II, or NEBOSH IGC where relevant.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── Section 7: Labour Law & Worker Rights ─────────── */}
          <section id="labour-law" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaScaleUnbalanced className="w-3.5 h-3.5 text-emerald-600" />
              Section 7: Bahrain Labour Law Protections (Law No. 36 of 2012)
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Legal Protections Guaranteed by Bahrain Labour Law
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold">
                  <FaFileInvoiceDollar className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  CBB WPS Salary Guarantee
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All registered companies must disburse wages electronically into workers&apos; bank accounts before the 10th of every month. Delayed payroll leads to automatic LMRA quota suspension.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-800 font-bold">
                  <FaClock className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  8-Hour Shift &amp; Overtime Rules
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Standard work is 8 hours/day (48 hours/week). Overtime is legally compensated at <strong>125% of hourly rate</strong> for day work and <strong>150%</strong> for night shifts or Fridays.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-bold">
                  <FaMoneyBillWave className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  End-of-Service Indemnity (ESB)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Workers completing at least 1 year receive severance gratuity: <strong>half month basic salary per year</strong> for the first 3 years, and a <strong>full month basic salary per year</strong> for subsequent years.
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
                  From July 1 to August 31, outdoor work under direct sunlight is prohibited between <strong>12:00 PM and 4:00 PM</strong> with mandatory air-conditioned shelters and cold water supplies.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold">
                  <FaPlaneArrival className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  30 Days Paid Annual Leave
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Workers enjoy <strong>30 calendar days of paid annual leave</strong> per year along with return economy flights provided by the sponsoring employer.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-800 font-bold">
                  <FaHandshakeAngle className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Job Mobility &amp; No Exit NOC
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Under LMRA mobility guidelines, workers can transfer to a new employer upon contract expiration with standard written notice without requiring an employer Exit NOC.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 8: Wafid Medical ──────────────────────── */}
          <section id="medical-wafid" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaHospital className="w-3.5 h-3.5 text-emerald-600" />
              Section 8: Wafid (GAMCA) Medical Screening Criteria
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Pre-Departure &amp; In-Country Medical Examination Standards
            </h2>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">Diagnostic Test 1</div>
                <h3 className="font-display font-bold text-slate-900 text-base">Digital PA Chest X-Ray</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Screens for active pulmonary Tuberculosis (TB), pleural scarring, and lung lesions. A clean chest X-ray is mandatory for Bahrain visa issuance.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-700">Diagnostic Test 2</div>
                <h3 className="font-display font-bold text-slate-900 text-base">Blood Serology Screening</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Comprehensive screening for HIV-1/2, Hepatitis B (HBsAg), Hepatitis C (Anti-HCV), and Syphilis (VDRL).
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700">Diagnostic Test 3</div>
                <h3 className="font-display font-bold text-slate-900 text-base">MOH In-Country Sync</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Results automatically synchronize with the{" "}
                  <a
                    href="https://www.healthalert.gov.bh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                  >
                    Ministry of Health (MOH Bahrain)
                  </a>{" "}
                  database, expediting CPR Smart Card delivery.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 9: Living Costs & Remittance ───────────── */}
          <section id="living-remittance" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaMoneyBillWave className="w-3.5 h-3.5 text-emerald-600" />
              Section 9: Cost of Living, Monthly Expenses &amp; Savings Potential
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Monthly Budget Breakdown &amp; Money Transfer to India / South Asia
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Working in Bahrain provides maximum salary preservation. Because standard employment contracts cover <strong>furnished bachelor accommodation, company transport buses, and medical coverage</strong>, personal monthly expenditures are remarkably low:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Mess / Food Expenses</div>
                <div className="text-xl font-bold text-slate-950 mt-1">25 – 35 BHD / Mo</div>
                <p className="text-[11px] text-slate-500 mt-1">Subsidized camp mess (₹5,500 – ₹7,700 INR) or free duty meals</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Mobile Data &amp; Calls</div>
                <div className="text-xl font-bold text-slate-950 mt-1">5 – 8 BHD / Mo</div>
                <p className="text-[11px] text-slate-500 mt-1">Batelco, stc Bahrain, or Zain mobile packages</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Personal &amp; Misc</div>
                <div className="text-xl font-bold text-slate-950 mt-1">10 – 15 BHD / Mo</div>
                <p className="text-[11px] text-slate-500 mt-1">Toiletries, tea/snacks, personal laundry</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Average Savings Ratio</div>
                <div className="text-xl font-bold text-emerald-600 mt-1">75% – 85%</div>
                <p className="text-[11px] text-slate-500 mt-1">Direct home remittance via BFC / LuLu / NEC Exchange</p>
              </div>
            </div>
          </section>

          {/* ── Section 10: Detailed FAQs Section ─────────────── */}
          <section id="faqs" className="scroll-mt-28 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaCircleQuestion className="w-3.5 h-3.5 text-emerald-600" />
              Section 10: Frequently Asked Questions (FAQs) for Bahrain Work Visas
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions Regarding Bahrain LMRA &amp; Employment Visas
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Clear, legally verified answers to the most critical queries about working in the Kingdom of Bahrain:
              </p>
            </div>

            <div className="grid gap-4">
              {faqSchema.mainEntity.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400/80 transition-all space-y-2"
                >
                  <h3 className="text-base font-display font-bold text-slate-900 flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                      Q{index + 1}
                    </span>
                    <span>{faq.name}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 pl-9 leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 11: Call to Action Banner ─────────────── */}
          <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center space-y-6">
            <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-4 py-1.5 text-xs font-bold text-emerald-300">
                <FaHelmetSafety className="w-3.5 h-3.5" />
                Direct Overseas Recruitment for Bahrain
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                Ready to Advance Your Career in the Kingdom of Bahrain?
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                WorkWise Visa connects certified tradesmen and technical professionals with licensed Bahraini employers offering guaranteed tax-free earnings, free company accommodation, and official LMRA work permits.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link
                  href="/jobs?country=Bahrain"
                  className="inline-flex items-center gap-2.5 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-emerald-500/25 hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <FaBriefcase className="w-4 h-4" />
                  View Active Bahrain Vacancies
                </Link>

                <a
                  href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20want%20to%20apply%20for%20Bahrain%20work%20visa%20and%20job%20vacancies."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition-all backdrop-blur-md"
                >
                  <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                  Chat on WhatsApp
                </a>
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
