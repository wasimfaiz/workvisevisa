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
} from "react-icons/fa6";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.workwisevisa.com";

export const metadata: Metadata = {
  title: "UAE Work Visa & Dubai Jobs Guide 2026: MOHRE Work Permit, Salaries, Process & Recruitment | WorkWise Visa",
  description:
    "Complete 2026 authority guide on UAE work visas, Dubai employment permits, MOHRE approvals, GDRFA entry visas, DHA medical tests, Emirates ID, WPS salaries, top trade roles (welders, electricians, drivers, hospitality), and direct recruitment.",
  keywords: [
    "UAE work visa 2026",
    "Dubai employment visa process",
    "MOHRE work permit UAE",
    "Dubai blue collar jobs salary 2026",
    "Dubai driver jobs recruitment",
    "UAE 6G welder jobs visa",
    "DHA medical test Dubai rules",
    "Emirates ID biometric appointment",
    "UAE labour law gratuity calculation 2026",
    "Dubai visit visa to employment visa change",
    "WPS salary system UAE",
    "Dubai construction recruitment agency",
    "WorkWise Visa UAE jobs",
    "MOHRE offer letter MB-1 verification",
    "Dubai hotel staff visa requirements",
  ],
  alternates: {
    canonical: `${BASE_URL}/countries/uae`,
  },
  openGraph: {
    title: "UAE Work Visa & Dubai Employment Guide 2026 | WorkWise Visa",
    description:
      "Authoritative guide for UAE work visas: MOHRE contract rules, GDRFA entry permit, DHA medical fitness, salary matrices across 25+ trades, and certified overseas recruitment.",
    url: `${BASE_URL}/countries/uae`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: `${BASE_URL}/images/dubai_hero.jpg`,
        width: 1200,
        height: 630,
        alt: "UAE Dubai Work Visa & Recruitment Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UAE Work Visa & Dubai Jobs Guide 2026 | WorkWise Visa",
    description:
      "Step-by-step MOHRE work permit pipeline, tax-free salary benchmarks, DHA medical tests, and genuine Gulf job vacancies.",
    images: [`${BASE_URL}/images/dubai_hero.jpg`],
  },
};

export default function UAECountryPage() {
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
        name: "United Arab Emirates (UAE)",
        item: `${BASE_URL}/countries/uae`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "UAE Work Visa & Dubai Employment Guide 2026: Complete MOHRE Process, Salaries, Trade Vacancies & Legal Rights",
    description:
      "Comprehensive, expert-backed manual for migrating and working in the United Arab Emirates (Dubai, Abu Dhabi, Sharjah). Covers MOHRE work permits, GDRFA entry visas, DHA medical clearance, 2026 salary scales across trades, and labour law protections.",
    image: `${BASE_URL}/images/dubai_hero.jpg`,
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
    datePublished: "2026-01-15T09:00:00+04:00",
    dateModified: "2026-10-09T10:00:00+04:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/countries/uae`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the total processing time for a UAE employment visa in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard UAE employment visa processing takes 2 to 4 weeks from employer quota allocation to physical Emirates ID delivery. Initial MOHRE work permit and GDRFA Electronic Entry Permit are typically issued within 3 to 7 business days, allowing the candidate to fly to Dubai or Abu Dhabi. In-country DHA medical and biometric processing takes another 5 to 7 days.",
        },
      },
      {
        "@type": "Question",
        name: "Who pays for the UAE work visa fees under MOHRE Labour Law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under UAE Federal Decree-Law No. 33 of 2021 and MOHRE statutory regulations, the employer is legally mandated to pay 100% of all recruitment, work permit quota, visa processing, DHA medical test, Emirates ID issuance, and one-way mobilization flight ticket costs. Charging visa fees to the employee is illegal.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum salary for blue-collar and skilled workers in Dubai in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While the UAE does not impose a single statutory national minimum wage, industry standards enforced through MOHRE quota approvals mandate basic salaries starting from 1,200 to 1,800 AED for general trades (helpers, cleaners, civil masons), 1,800 to 3,200 AED for skilled technical trades (6G welders, industrial electricians, HVAC technicians, bus drivers), and 3,500 to 6,000+ AED for supervisory and foremen roles, usually accompanied by free company housing and transport.",
        },
      },
      {
        "@type": "Question",
        name: "Can I convert a Dubai 30/60-day tourist or visit visa into an employment visa without leaving the country?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Under current GDRFA and ICP immigration regulations, candidates who secure an official job offer while on a tourist visa can complete an in-country status change (Status Amendment / Inside Country Visa Change) upon payment of standard government amendment fees (approx. 550 to 750 AED, usually sponsored by the employer) without needing an airport-to-airport flight exit.",
        },
      },
      {
        "@type": "Question",
        name: "What medical tests are conducted for UAE employment visa clearance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Candidates must pass a pre-departure GAMCA/Wafid medical in their home country, followed by a mandatory in-country Dubai Health Authority (DHA) or SEHA medical screening. Tests include a Chest Digital X-Ray (to screen for active or old pulmonary Tuberculosis scars), Blood Serology (for HIV-1/2, Hepatitis B surface antigen for specified food/health trades, and Syphilis/VDRL), and physical vitals assessment.",
        },
      },
      {
        "@type": "Question",
        name: "How is the End-of-Service Gratuity (ESB) calculated under UAE Labour Law 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under UAE Labour Law, full-time employees completing at least one year of continuous service receive 21 days of basic salary for each year of service during the first five years, and 30 days of basic salary for each additional year thereafter. The total gratuity calculation is based strictly on the employee's last drawn basic wage and excludes allowances.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Wage Protection System (WPS) in the UAE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Wage Protection System (WPS) is an electronic salary transfer monitoring system developed by the Central Bank of the UAE and MOHRE. It mandates that all registered private-sector employers disburse workers' salaries directly into UAE bank accounts or Central Bank-authorized exchange salary cards (like Al Ansari or LuLu Pay cards) on or before statutory due dates.",
        },
      },
      {
        "@type": "Question",
        name: "Do trade workers (welders, electricians, drivers) need attested educational degrees for UAE visas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Educational degree attestation is only mandatory for Category 1 and Category 2 professional designations (Managers, Engineers, Doctors, Accountants, Teachers). Blue-collar trade categories (Skill Level 4 and 5) only require a valid international passport, passing practical trade test evaluation, and medical clearance.",
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
              <span className="text-emerald-300 font-bold">United Arab Emirates (Dubai &amp; Abu Dhabi)</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                {/* Government & Authority Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Official 2026 MOHRE &amp; GDRFA Relocation Authority
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                  UAE Work Visa &amp; Dubai Employment Guide <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">2026</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  The definitive, expert-verified guide to securing legal employment in <strong className="font-bold text-white">Dubai, Abu Dhabi, Sharjah, and across the UAE</strong>. Explore official <strong className="font-bold text-emerald-300">MOHRE work permit regulations</strong>, <strong className="font-bold text-white">tax-free salary benchmarks across 25+ trades</strong>, <strong className="font-bold text-emerald-300">DHA medical clearance</strong>, and <strong className="font-bold text-white">guaranteed worker protections under UAE Labour Law</strong>.
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
                      <div className="text-xs font-bold text-white leading-tight">MOHRE 2-Yr Visa</div>
                      <div className="text-[10px] text-slate-400">Renewable Residency</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaHospital className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Free Medical & Stay</div>
                      <div className="text-[10px] text-slate-400">Company Accommodation</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaShieldHalved className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">WPS Protected</div>
                      <div className="text-[10px] text-slate-400">Guaranteed Bank Salary</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaClock className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">2–4 Weeks Transit</div>
                      <div className="text-[10px] text-slate-400">Fast Deployment</div>
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
                    href="/jobs?country=UAE"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <FaBriefcase className="w-4 h-4" />
                    Browse Active UAE Vacancies
                  </Link>

                  <a
                    href="https://wa.me/919152288874?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20UAE%20Dubai%20work%20visa%20and%20job%20vacancies."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/50 px-6 py-3.5 text-sm font-bold text-white transition-all shadow-md"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-300" />
                    WhatsApp UAE Desk
                  </a>

                  <Link
                    href="/track-application"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white underline underline-offset-4"
                  >
                    Track Existing UAE Application <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Quick Country Snapshot Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3.5">
                      <img
                        src="https://flagcdn.com/w160/ae.png"
                        alt="United Arab Emirates Flag"
                        className="h-10 w-14 object-cover rounded-xl shadow-md border border-white/25 shrink-0"
                      />
                      <div>
                        <h3 className="text-xl font-display font-extrabold text-white">United Arab Emirates</h3>
                        <p className="text-xs text-emerald-300 font-medium">Dubai • Abu Dhabi • Sharjah</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-xs font-black text-emerald-300">
                      TIER-1 GCC
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs text-slate-200">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Immigration Authority:</span>
                      <span className="font-bold text-white">MOHRE & GDRFA Dubai</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Work Permit Validity:</span>
                      <span className="font-bold text-emerald-300">2 Years (Renewable)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Medical Screening:</span>
                      <span className="font-bold text-white">Wafid (Pre) + DHA (In-Country)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Wage Payment Mode:</span>
                      <span className="font-bold text-white">WPS Electronic Bank Card</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Average Blue-Collar Pay:</span>
                      <span className="font-bold text-amber-300">1,400 – 3,800 AED / Month</span>
                    </div>

                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Standard Processing:</span>
                      <span className="font-bold text-emerald-300">15 to 25 Days</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-900/40 border border-emerald-500/30 p-4 text-center">
                    <p className="text-xs font-medium text-emerald-200 mb-2">
                      Ready to apply for high-paying UAE construction, MEP, or driving jobs?
                    </p>
                    <a
                      href="mailto:workwisevisa@gmail.com?subject=UAE%20Dubai%20Job%20Application&body=Hello%20WorkWise%20Visa%20Team,%0A%0AI%20am%20applying%20for%20a%20job%20in%20Dubai/UAE.%0A%0AFull%20Name:%0APhone%20Number:%0ATrade/Designation:%0APassport%20Number:%0AExperience%20(Years):"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-900 hover:bg-slate-100 transition-colors shadow-sm"
                    >
                      <FaEnvelope className="w-3.5 h-3.5 text-emerald-600" />
                      Submit CV for UAE Recruitment
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
              Comprehensive Page Directory:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#overview" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                1. 2026 Overview & Economy
              </a>
              <a href="#visa-types" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                2. UAE Visa Types
              </a>
              <a href="#step-by-step" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                3. 6-Stage Visa Process
              </a>
              <a href="#salary-matrix" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                4. 2026 Salary Table
              </a>
              <a href="#documents" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                5. Required Documents
              </a>
              <a href="#labour-law" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                6. Labour Law & Gratuity
              </a>
              <a href="#medical-dha" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                7. DHA Medical Rules
              </a>
              <a href="#faqs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                8. Detailed FAQs (12+)
              </a>
            </div>
          </div>
        </section>

        {/* ── Main Content Container ─────────────────────────── */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">

          {/* ── Section 1: Overview & 2026 Regulatory Landscape ── */}
          <section id="overview" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaBuildingColumns className="w-3.5 h-3.5 text-emerald-600" />
              Section 1: Country Overview & Regulatory Architecture
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The UAE Labor Market in 2026: Why Dubai & Abu Dhabi Lead Global Migration
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                The <strong>United Arab Emirates (UAE)</strong> stands as the financial powerhouse and commercial capital of the Middle East. With an expatriate population exceeding <strong>88% of the total resident base</strong>, the nation offers one of the world’s most transparent, technologically integrated, and legally protected employment ecosystems for international workforce mobilization.
              </p>
              <p>
                Under the strategic expansion of <strong>Dubai Economic Agenda (D33)</strong>, <strong>Abu Dhabi Vision 2030</strong>, and massive infrastructure mega-developments across Sharjah and Ras Al Khaimah (including the Wynn Al Marjan Island integrated resort and Etihad Rail expansion), the demand for qualified construction tradesmen, MEP technicians, heavy transport drivers, hospitality staff, and facility management operators has reached unprecedented heights in 2026.
              </p>
              <p>
                Key legal overhauls under{" "}
                <a
                  href="https://www.mohre.gov.ae/en/laws-and-regulations/laws.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Federal Decree-Law No. 33 of 2021 Regarding the Regulation of Labour Relations
                </a>{" "}
                supervised by the{" "}
                <a
                  href="https://www.mohre.gov.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Ministry of Human Resources and Emiratisation (MOHRE)
                </a>{" "}
                have transformed expatriate worker welfare. The legacy sponsorship restrictions have been superseded by modernized fixed-term contracts, universal <strong>Wage Protection System (WPS)</strong> direct electronic bank deposits, mandatory employer-funded medical insurance, stringent midday heat bans, and clear statutory pathways for job mobility without exit employer objections.
              </p>
            </div>

            {/* Key Macro Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Expatriate Workforce</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-slate-900 mt-1">3.8M+</div>
                <p className="text-[11px] text-slate-500 mt-1">From India, Pakistan, Bangladesh, Nepal & Philippines</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Personal Income Tax</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-emerald-600 mt-1">0.0%</div>
                <p className="text-[11px] text-slate-500 mt-1">100% tax-free take-home earnings</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Standard Visa Duration</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-teal-600 mt-1">2 Years</div>
                <p className="text-[11px] text-slate-500 mt-1">Renewable electronic MOHRE employment contract</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">WPS Compliance</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-amber-600 mt-1">100%</div>
                <p className="text-[11px] text-slate-500 mt-1">Automated salary tracking by UAE Central Bank</p>
              </div>
            </div>
          </section>

          {/* ── Section 2: Types of UAE Work Visas ─────────────── */}
          <section id="visa-types" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaPassport className="w-3.5 h-3.5 text-emerald-600" />
              Section 2: Legal Visa Classifications & Eligibility
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Major UAE Work Visa Categories in 2026
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Depending on the hiring entity’s jurisdiction (Mainland vs. Free Zone) and the candidate’s skill classification, the UAE provides several distinct employment residency channels:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {/* Card 1: Mainland MOHRE */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-500/60 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-emerald-100 text-emerald-900 font-extrabold text-xs px-2.5 py-1">
                      Most Common (90%)
                    </span>
                    <span className="text-xs font-bold text-slate-400">2-Year Validity</span>
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-900">
                    Mainland MOHRE Employment Visa
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Issued to workers employed by commercial LLC companies registered with the Ministry of Human Resources and Emiratisation. Covers civil construction, oil & gas contracting, retail, MEP, logistics, and hospitality.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                      WPS electronic bank account guarantee
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                      Full employer coverage of visa & medical costs
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                      MOHRE labor dispute arbitration protection
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 2: Free Zone */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-teal-500/60 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-teal-100 text-teal-900 font-extrabold text-xs px-2.5 py-1">
                      Corporate / Trade
                    </span>
                    <span className="text-xs font-bold text-slate-400">2–3 Year Validity</span>
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-900">
                    Free Zone Employment Visa
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Issued to staff operating within designated economic free zones (JAFZA, DMCC, DAFZA, DIFC, Hamriyah). Governed by individual Free Zone Authority labor regulations and immigration desks.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-teal-600 shrink-0" />
                      Exempt from certain mainland quota tiers
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-teal-600 shrink-0" />
                      Direct Free Zone Identity Card
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-teal-600 shrink-0" />
                      Popular for logistics hubs & supply chains
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 3: Green & Skilled Visa */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-amber-500/60 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-amber-100 text-amber-900 font-extrabold text-xs px-2.5 py-1">
                      Skilled & Tech
                    </span>
                    <span className="text-xs font-bold text-slate-400">5-Year Self-Sponsored</span>
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-900">
                    UAE Green Visa for Skilled Talents
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Introduced for high-skilled professionals, engineers, senior technicians, and bachelor-degree holders earning a minimum basic wage of 15,000 AED per month without requiring an employer sponsor.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-amber-600 shrink-0" />
                      6-month grace period after job termination
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-amber-600 shrink-0" />
                      Sponsor parents and first-degree relatives
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-amber-600 shrink-0" />
                      Self-managed residency status
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
              Section 3: Complete Step-by-Step Recruitment & Visa Workflow
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                The 6-Phase UAE Work Visa Processing Pipeline
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                WorkWise Visa enforces a transparent, fully synchronized deployment workflow connecting candidates with licensed UAE employers through official government portals:
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
                      Phase 1: Trade Practical Testing & Formal MOHRE Offer Letter (MB-1)
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 2–5 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Candidates undergo practical trade skill assessments (weld coupons, DB board wiring, driving trials) at authorized technical institutes. Once selected, the hiring UAE employer generates an official <strong>MOHRE Job Offer Letter (Standard Form MB-1)</strong>. The candidate signs the offer in their native language (Hindi, Urdu, English, Bengali, or Tagalog), fixing the basic salary, allowances, and job title designation.
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
                      Phase 2: Pre-Departure GAMCA/Wafid Medical & MOHRE Quota Approval
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 3–5 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Candidate completes their pre-departure health screening at an accredited{" "}
                    <a
                      href="https://wafid.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                    >
                      Wafid / GAMCA medical center
                    </a>
                    . Concurrently, the UAE employer’s Public Relations Officer (PRO) submits the signed MB-1 contract to MOHRE to secure the <strong>Electronic Work Permit Quota Approval</strong>.
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
                      Phase 3: GDRFA / ICP Electronic Employment Entry Permit Issuance
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 2–4 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Upon MOHRE work permit validation, the file is automatically transferred to the{" "}
                    <a
                      href="https://www.gdrfad.gov.ae"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                    >
                      General Directorate of Residency and Foreigners Affairs (GDRFA Dubai)
                    </a>{" "}
                    or the{" "}
                    <a
                      href="https://icp.gov.ae"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                    >
                      Federal Authority for Identity, Citizenship, Customs and Port Security (ICP)
                    </a>{" "}
                    for Abu Dhabi. The official <strong>Electronic Employment Entry Permit (pink visa paper)</strong> is generated with a verifiable QR barcode.
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
                      Phase 4: Pre-Departure Emigration (PoE / e-Migrate) & Flight Deployment
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 2–3 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    For Indian ECR passport holders, online clearance is executed through the <strong>e-Migrate Protector of Emigrants (PoE)</strong> system. The employer issues direct flight tickets to Dubai (DXB), Abu Dhabi (AUH), or Sharjah (SHJ). WorkWise Visa representatives coordinate airport departure briefings and reception at the destination terminal.
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
                      Phase 5: In-Country DHA Medical Fitness Screening & Emirates ID Biometrics
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 3–6 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Within 30 days of arrival, the worker is transported to a{" "}
                    <a
                      href="https://www.dha.gov.ae"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                    >
                      Dubai Health Authority (DHA) Medical Fitness Center
                    </a>{" "}
                    (e.g., Al Muhaisnah, Karama, or Al Quoz) for chest X-ray and blood tests. Next, they visit an <strong>ICP Customer Happiness Center</strong> for 10-finger biometric capture, facial imaging, and eye iris scanning.
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
                      Phase 6: Residency Stamping, Emirates ID Card Delivery & WPS Bank Account Setup
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 3–5 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Upon medical fitness approval, GDRFA generates the digital <strong>Residence Visa</strong> and prints the physical <strong>Smart Emirates ID Card</strong>. The company opens the employee’s <strong>WPS electronic payroll bank account / ATM payroll card</strong>, completes company safety induction, and deploys the worker to the job site.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 4: Comprehensive 2026 Salary Matrix ───── */}
          <section id="salary-matrix" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaMoneyBillWave className="w-3.5 h-3.5 text-emerald-600" />
              Section 4: Complete Dubai & UAE Salary Matrix 2026
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                2026 UAE Salary Scales by Trade & Skill Category
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Below is the verified, industry-standard monthly compensation structure for skilled, technical, and blue-collar occupations across Dubai and Abu Dhabi. Figures reflect 8 hours/day basic wage, standard company overtime potential, and employer-provided perks:
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-900 font-display font-bold">
                    <th className="py-4 px-4 sm:px-6">Industry / Trade Role</th>
                    <th className="py-4 px-3 sm:px-4">Basic Wage (AED)</th>
                    <th className="py-4 px-3 sm:px-4">Overtime Potential</th>
                    <th className="py-4 px-3 sm:px-4">Total Net (AED / Mo)</th>
                    <th className="py-4 px-3 sm:px-4">INR Equivalent (Approx.)</th>
                    <th className="py-4 px-4 sm:px-6">Company Benefits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {/* Construction */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Structural 6G TIG & ARC Welder
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">2,200 – 3,200 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">500 – 900 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">2,700 – 4,100 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹62,000 – ₹94,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Free Room, Transport, Medical, Flight</td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Industrial / Building Electrician
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">1,800 – 2,600 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">400 – 750 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">2,200 – 3,350 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹50,000 – ₹77,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Free Room, Transport, Medical, Safety Gear</td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Pipe Fitter & Spool Fabricator
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">1,800 – 2,500 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">450 – 800 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">2,250 – 3,300 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹51,000 – ₹75,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Free Room, Transport, Overtime Multiplier</td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      HVAC & Central Chiller Technician
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">2,000 – 2,900 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">400 – 700 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">2,400 – 3,600 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹55,000 – ₹82,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Free Accommodation, Tools, Health Card</td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Civil Mason / Plasterer / Tile Fixer
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">1,400 – 1,900 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">300 – 600 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">1,700 – 2,500 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹39,000 – ₹57,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Camp Accommodation, Mess Facility, Transport</td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Shuttering Carpenter & Steel Fixer
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">1,400 – 1,850 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">350 – 600 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">1,750 – 2,450 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹40,000 – ₹56,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Camp Housing, Daily Site Bus, Medical</td>
                  </tr>

                  {/* Driving & Logistics */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Heavy Trailer (6-Axle) Driver (UAE License)
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">2,800 – 4,000 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">Trip Allowances</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">3,400 – 5,200 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹78,000 – ₹1,19,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Per-trip bonus, Phone allowance, Insurance</td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Heavy Bus Driver (50+ Seater)
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">2,400 – 3,200 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">350 – 600 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">2,750 – 3,800 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹63,000 – ₹87,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Free Accommodation, Annual Air Ticket</td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Motorcycle Delivery Rider (Talabat / Noon)
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">Commission / Base</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">7.5 – 10 AED / drop</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">2,800 – 4,500 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹64,000 – ₹1,03,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Bike, Fuel, SIM Card & Delivery Permit</td>
                  </tr>

                  {/* Hospitality & Facilities */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Hotel Waiter / Server (4-Star / 5-Star)
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">1,600 – 2,400 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">Tips + Service Chg</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">2,400 – 3,800 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹55,000 – ₹87,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Duty Meals, Hotel Accommodation, Uniform</td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Commis Chef / Assistant Cook
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">1,800 – 2,700 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">300 – 600 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">2,100 – 3,300 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹48,000 – ₹75,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Free Food, Housing, Health Insurance</td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Site Construction Helper / Cleaner
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">1,200 – 1,500 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">250 – 450 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-slate-900">1,450 – 1,950 AED</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-teal-700">₹33,000 – ₹45,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">Camp Stay, Mess Kitchen, Transport</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 text-xs text-amber-900 leading-relaxed">
              <strong>💡 Currency Conversion Note:</strong> Exchange rates fluctuate around 1 AED ≈ ₹22.80 to ₹23.20 INR / 76 to 78 PKR. Under UAE law, basic salaries are non-taxable and protected by direct central bank monitoring.
            </div>
          </section>

          {/* ── Section 5: Required Documents Checklist ────────── */}
          <section id="documents" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaCertificate className="w-3.5 h-3.5 text-emerald-600" />
              Section 5: Required Documentation & Attestation Guidelines
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Documentation Checklist for UAE Visa Processing
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Documentation criteria vary between general trade positions and professional/supervisory designations:
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              {/* Box 1: Trade Workers */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <FaHelmetSafety className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    For Blue-Collar & Trade Craftsmen (Skill Level 4 & 5)
                  </h3>
                </div>
                <p className="text-xs text-slate-500">
                  Welders, Electricians, Plumbers, Masons, Drivers, Helpers, Cooks & Delivery Riders:
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Original Passport:</strong> Minimum validity of 6 to 8 months with at least 2 blank pages.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Photographs:</strong> 8 to 12 recent passport-size photos with white background.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Wafid / GAMCA Medical Slip:</strong> &quot;FIT&quot; medical clearance certificate.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Driving License (If applying for Driver roles):</strong> Original Indian/Pakistani HTV/LMV license or valid GCC license.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>No Degree Attestation Required:</strong> Trade workers do not need college degree legalization.</span>
                  </li>
                </ul>
              </div>

              {/* Box 2: Supervisory & Engineers */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <FaBuildingColumns className="w-5 h-5 text-teal-600" />
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    For Supervisory, Engineering & Management (Skill Level 1, 2, 3)
                  </h3>
                </div>
                <p className="text-xs text-slate-500">
                  Foremen, Site Engineers, QA/QC Inspectors, Safety Officers, HR, Accountants:
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Attested Degree / Diploma:</strong> Original certificate legalized via 4-tier chain (State HRD ➔ MEA ➔ UAE Embassy in home country ➔ UAE MOFA).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Experience Certificates:</strong> Minimum 3 to 5 years verified employment letters.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Police Clearance Certificate (PCC):</strong> Issued by Passport Seva Kendra (PSK) if required by employer.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Professional Licenses:</strong> Society of Engineers (SOE) registration for engineers or IOSH/NEBOSH for Safety Officers.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── Section 6: Labour Law & Worker Rights ─────────── */}
          <section id="labour-law" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaScaleUnbalanced className="w-3.5 h-3.5 text-emerald-600" />
              Section 6: UAE Labour Law Protections, Gratuity & Worker Rights
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Legal Protections Guaranteed by UAE Labour Law (Decree-Law No. 33 of 2021)
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold">
                  <FaFileInvoiceDollar className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  WPS Salary Guarantee
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The UAE Central Bank and MOHRE monitor wage payments in real time. If an employer delays salaries past the 15th of the month, their company licenses and work permit quota are automatically frozen until all workers receive full back-pay.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-800 font-bold">
                  <FaClock className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  8-Hour Duty & Overtime Rules
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Statutory working hours are 8 hours per day (48 hours per week). Any extra hour is compensated as statutory overtime: <strong>125% of basic hourly rate</strong> for daytime overtime and <strong>150%</strong> for night shifts (9 PM to 4 AM) or rest days.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-bold">
                  <FaMoneyBillWave className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  End-of-Service Gratuity (ESB)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Workers completing at least 1 year of continuous service receive gratuity severance pay upon contract completion: <strong>21 days basic pay per year</strong> for the first 5 years, and <strong>30 days basic pay per year</strong> for subsequent years.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-800 font-bold">
                  <FaTriangleExclamation className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Summer Midday Break Rule
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Between June 15 and September 15, outdoor labor is strictly prohibited under direct sunlight from <strong>12:30 PM to 3:00 PM</strong>. Employers must provide shaded rest shelters, cold hydration, and industrial cooling fans.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold">
                  <FaPlaneArrival className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Annual Paid Leave & Repatriation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every worker is entitled to <strong>30 calendar days of paid annual leave</strong> per year. Employers must provide a return economy flight ticket to the worker’s home country every two years upon contract renewal.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-800 font-bold">
                  <FaHandshakeAngle className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Job Mobility & Passport Freedom
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Under UAE Supreme Court rulings and MOHRE directives, retaining an employee&apos;s original passport is strictly illegal. Workers can transition to new employers upon contract completion with a standard 30 to 90 days notice without labor bans.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 7: DHA Medical Screening ──────────────── */}
          <section id="medical-dha" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaHospital className="w-3.5 h-3.5 text-emerald-600" />
              Section 7: DHA & SEHA Medical Screening Criteria
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Dubai Health Authority (DHA) In-Country Medical Examination
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Every foreign worker landing in Dubai or Abu Dhabi on an employment entry permit must complete a mandatory in-country medical fitness examination before their residence visa can be stamped.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">Diagnostic Test 1</div>
                <h3 className="font-display font-bold text-slate-900 text-base">Digital PA Chest X-Ray</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Screens for active pulmonary Tuberculosis (TB) or significant lung parenchymal fibrosis. If old resolved non-infectious scars are present, candidates may be placed on a preventive DOTS follow-up program rather than being deported.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-700">Diagnostic Test 2</div>
                <h3 className="font-display font-bold text-slate-900 text-base">Blood Serology (HIV & Syphilis)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All employment visa categories are screened for HIV 1 &amp; 2 antibodies and VDRL/TPHA (Syphilis). An HIV-positive test result is considered permanently unfit for UAE residence visa issuance.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700">Diagnostic Test 3</div>
                <h3 className="font-display font-bold text-slate-900 text-base">Hepatitis B & C (Special Categories)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hepatitis B Surface Antigen (HBsAg) screening is mandatory for 6 specific occupational categories: Food Handlers/Cooks, Barbers/Salon workers, Nursery Staff, Domestic Workers, Healthcare Professionals, and Health Club attendants.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 8: Detailed FAQs Section ──────────────── */}
          <section id="faqs" className="scroll-mt-28 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaCircleQuestion className="w-3.5 h-3.5 text-emerald-600" />
              Section 8: Frequently Asked Questions (FAQs) for UAE Work Visas
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions Regarding UAE & Dubai Work Permits
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Clear, legally verified answers to the most critical queries about working in Dubai and Abu Dhabi:
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
                Explore Related UAE In-Depth Resources
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                Authoritative UAE Career & Immigration Guides
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/blogs/complete-guide-uae-saudi-arabia-blue-collar-work-permits-2026"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-emerald-600">Work Permit Manual</span>
                  <h3 className="font-display font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    Complete UAE & Saudi Blue-Collar Work Permits 2026
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    MOHRE vs Qiwa contrast, quota allocation, e-visa issuance, mandatory health insurance, and WPS compliance.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 mt-4">
                  Read Full Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/blogs/dubai-delivery-rider-jobs-talabat-noon-careem-bike-license-cost-salary-visa"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-teal-600">Logistics & Transport</span>
                  <h3 className="font-display font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    Dubai Delivery Rider Jobs & RTA Motorcycle License
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Onboarding for Talabat, Noon, Careem, RTA driving school lessons, and commission pay structures.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 mt-4">
                  Read Full Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/blogs/dubai-hotel-hospitality-staff-recruitment-waiter-cook-housekeeping-salary-visa"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-amber-600">Hospitality & Dining</span>
                  <h3 className="font-display font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    Dubai Hotel & Hospitality Staff Recruitment 2026
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    5-star hotel recruitment, waiters, commis chefs, housekeeping, salary scales, tips, and MOHRE contracts.
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
                Direct UAE Client Recruitment Drives Active
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
                Apply for Verified UAE & Dubai Jobs with WorkWise Visa
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Connect with licensed UAE employers for zero-fee, government-registered recruitment in construction, engineering, hospitality, and driving. Get verified MOHRE contracts, medical guidance, and express flight deployment.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://wa.me/919152288874?text=Hello%20WorkWise%20Visa,%20I%20want%20to%20apply%20for%20a%20Dubai/UAE%20work%20visa%20and%20job%20vacancy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-emerald-500 px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  Chat on WhatsApp with UAE Specialist
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
