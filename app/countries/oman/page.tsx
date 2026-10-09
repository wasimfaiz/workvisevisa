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
  title: "Oman Work Visa & Muscat Jobs Guide 2026 | WorkWise Visa",
  description:
    "Complete 2026 Oman work visa guide. Explore Ministry of Labour permits, ROP eVisa, Duqm Refinery jobs, tax-free salary scales & certified Gulf recruitment.",
  keywords: [
    "Oman work visa 2026",
    "Muscat employment visa process",
    "Oman Ministry of Labour work permit",
    "Royal Oman Police ROP evisa work",
    "Duqm Refinery jobs recruitment 2026",
    "Oman 6G welder jobs salary",
    "Oman heavy driver jobs visa",
    "Wafid GAMCA medical test Oman",
    "Oman labour law Royal Decree 53/2023",
    "WPS salary system Oman",
    "Oman resident card civil ID process",
    "WorkWise Visa Oman recruitment",
    "Oman Vision 2040 trade jobs",
  ],
  alternates: {
    canonical: `${BASE_URL}/countries/oman`,
  },
  openGraph: {
    title: "Oman Work Visa & Muscat Jobs Guide 2026 | WorkWise Visa",
    description:
      "Complete 2026 Oman work visa guide. Explore Ministry of Labour permits, ROP eVisa, Duqm Refinery jobs, tax-free salary scales & certified Gulf recruitment.",
    url: `${BASE_URL}/countries/oman`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: `${BASE_URL}/images/oman_hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Oman Muscat Work Visa & Recruitment Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oman Work Visa & Muscat Jobs Guide 2026 | WorkWise Visa",
    description:
      "Complete 2026 Oman work visa guide. Explore Ministry of Labour permits, ROP eVisa, Duqm Refinery jobs, tax-free salary scales & certified Gulf recruitment.",
    images: [`${BASE_URL}/images/oman_hero.jpg`],
  },
};

export default function OmanCountryPage() {
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
        name: "Oman",
        item: `${BASE_URL}/countries/oman`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Oman Work Visa & Employment Guide 2026: Complete MOL Process, ROP eVisa, Salaries & Worker Protections",
    description:
      "Comprehensive, expert-backed manual for migrating and working in the Sultanate of Oman (Muscat, Duqm, Sohar, Salalah). Covers Ministry of Labour permits, ROP visa stamping, Wafid medical rules, 2026 salary scales across trades, and labour law protections under Royal Decree 53/2023.",
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
    datePublished: "2026-01-15T08:00:00+04:00",
    dateModified: "2026-10-09T10:00:00+04:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/countries/oman`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the core requirements to obtain an Oman Employment Visa in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To secure an Oman Employment Visa, candidates must possess a valid international passport (minimum 6 months validity with at least 2 blank pages), pass practical trade evaluations at authorized technical workshops, obtain 'FIT' status from an accredited Wafid (GAMCA) medical center, and have an employer sponsor with approved Ministry of Labour (MOL) labour clearance (Tasreeh) and Royal Oman Police (ROP) visa approval.",
        },
      },
      {
        "@type": "Question",
        name: "How long does the complete Oman work visa process take from India, Pakistan, or Bangladesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The standard deployment cycle takes approximately 2 to 3 weeks (15–22 calendar days). This timeline covers: 3–5 days for MOL labour quota and ROP electronic visa clearance, 2–4 days for pre-departure Wafid medical screening, 2–3 days for e-Migrate Protector of Emigrants (PoE) clearance, and 2–3 days for flight ticketing and airport reception in Muscat or Salalah.",
        },
      },
      {
        "@type": "Question",
        name: "What are the average basic salary ranges for skilled trade workers in Oman in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In 2026, certified 6G Pipe Welders typically earn 220–320 OMR basic (approx. ₹58,800–₹87,200 INR with overtime total 270–400 OMR), Heavy Trailer Drivers earn 200–280 OMR basic (approx. ₹52,300–₹76,300 INR), Industrial Electricians & Plumbers earn 160–220 OMR basic (approx. ₹42,500–₹59,900 INR), and Construction Helpers/Masons earn 110–150 OMR basic (approx. ₹29,400–₹40,000 INR) plus 100% free company accommodation, site transport, medical insurance, and overtime allowances.",
        },
      },
      {
        "@type": "Question",
        name: "Is medical screening mandatory through Wafid (GAMCA) for Oman work permits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All expatriate workers migrating to Oman must complete mandatory pre-departure medical screening at an authorized Wafid (GAMCA) medical center. The examination covers chest X-rays for pulmonary tuberculosis, serology tests for HIV, Hepatitis B/C, Syphilis, and routine clinical fitness tests. 'FIT' certificates are automatically registered on the Gulf Health Council network and synchronized with Omani immigration.",
        },
      },
      {
        "@type": "Question",
        name: "What worker protections are guaranteed under the New Oman Labour Law (Royal Decree 53/2023)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Royal Decree No. 53/2023 guarantees maximum 8-hour daily work shifts (40 hours per week), mandatory 125% daytime and 150% nighttime/rest-day overtime compensation, 30 calendar days of paid annual vacation, end-of-service severance gratuity (one full basic wage per year of service), strict midday summer heat bans (12:30 PM to 3:30 PM), and Wage Protection System (WPS) bank payroll monitoring through the Central Bank of Oman.",
        },
      },
      {
        "@type": "Question",
        name: "Who pays for the Oman visa, airfare, and recruitment expenses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under official Omani labour regulations and international ethical hiring standards, all statutory visa issuance charges, work permit quota approvals, Royal Oman Police stamping fees, and deployment air tickets are legally 100% funded by the hiring Omani establishment. Candidates should never pay illegal visa charges.",
        },
      },
      {
        "@type": "Question",
        name: "What major industrial projects are driving job demand in Oman in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Key growth drivers include the Special Economic Zone at Duqm (SEZAD, Duqm Refinery OQ8, petrochemical downstream units), Sohar Port & Freezone industrial plants, Green Hydrogen and solar energy megaprojects (Hydrom), Khazaen Economic City, Hafeet Rail (UAE-Oman railway link), and major urban infrastructure in Muscat and Salalah under Oman Vision 2040.",
        },
      },
      {
        "@type": "Question",
        name: "How does the Oman Resident Card (Civil ID / Bataka) process work after arrival?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Within 30 days of arrival in the Sultanate, the worker is escorted to a Royal Oman Police (ROP) Civil Status Directorate for biometric fingerprinting, iris scanning, and digital facial photograph capture. The physical Smart Resident Card (Civil ID / Bataka) is issued, allowing the employer to open the worker's official WPS bank payroll account and activate health insurance.",
        },
      },
      {
        "@type": "Question",
        name: "Can Indian ECR passport holders migrate legally for work in Oman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Indian nationals holding Emigration Check Required (ECR) passports can legally travel to Oman for employment once the recruitment agency secures online Protector of Emigrants (PoE) clearance via the Government of India's e-Migrate system against an approved demand and verified employment contract.",
        },
      },
      {
        "@type": "Question",
        name: "How are end-of-service gratuity benefits calculated in Oman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Article 61 of the New Labour Law (Royal Decree 53/2023), workers who complete at least one full year of continuous service receive end-of-service gratuity equal to one full month's basic wage for each completed year of service, calculated on the basis of the last basic salary drawn.",
        },
      },
      {
        "@type": "Question",
        name: "Can an expatriate worker in Oman change employers without an Exit NOC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Oman abolished the mandatory No Objection Certificate (NOC) requirement for changing employers. Expatriate workers can legally transition to another registered company upon completing their employment contract term or by providing standard statutory notice in compliance with Ministry of Labour regulations.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Wage Protection System (WPS) in Oman, and how does it safeguard workers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Wage Protection System (WPS) is an electronic payroll monitoring framework jointly operated by the Ministry of Labour and the Central Bank of Oman (CBO). It mandates that all registered private-sector employers transfer salaries directly into employees' bank accounts or pre-approved payroll debit cards on or before statutory pay dates. Failure to do so results in automated fines and suspension of company work permit quotas.",
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
              <span className="text-emerald-300 font-bold">Sultanate of Oman (Muscat, Duqm &amp; Sohar)</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                {/* Government & Authority Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Official 2026 Oman MOL &amp; ROP Relocation Authority
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                  Oman Work Visa &amp; Muscat Jobs Guide <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">2026</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  The definitive, expert-verified manual for securing legitimate employment in the <strong className="font-bold text-white">Sultanate of Oman (Muscat, Duqm, Sohar, Salalah)</strong>. Discover official <strong className="font-bold text-emerald-300">Ministry of Labour (MOL) work permit regulations</strong>, <strong className="font-bold text-white">tax-free salary scales across 25+ trades</strong>, <strong className="font-bold text-emerald-300">Royal Oman Police (ROP) eVisa clearances</strong>, and <strong className="font-bold text-white">worker protections under Royal Decree 53/2023</strong>.
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
                      <div className="text-xs font-bold text-white leading-tight">MOL 2-Yr Visa</div>
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
                      <div className="text-[10px] text-slate-400">CBO Bank Payroll</div>
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
                    href="/jobs?country=Oman"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <FaBriefcase className="w-4 h-4" />
                    Browse Active Oman Vacancies
                  </Link>

                  <a
                    href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20Oman%20work%20visa%20and%20job%20vacancies."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/50 px-6 py-3.5 text-sm font-bold text-white transition-all shadow-md"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-300" />
                    WhatsApp Oman Desk
                  </a>

                  <Link
                    href="/track-application"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white underline underline-offset-4"
                  >
                    Track Existing Oman Application <FaArrowRight className="w-3 h-3" />
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
                          src="https://flagcdn.com/w80/om.png"
                          alt="Oman flag"
                          className="h-7 w-10 object-cover rounded shadow-xs"
                        />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-white text-lg">Sultanate of Oman</h3>
                        <p className="text-xs text-emerald-400 font-semibold">Muscat, Duqm, Sohar &amp; Salalah</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-xs font-extrabold text-emerald-300">
                      2026 Active
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs text-slate-300">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Governing Authority:</span>
                      <span className="font-bold text-white">Ministry of Labour (MOL Oman)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Visa Stamping Authority:</span>
                      <span className="font-bold text-white">Royal Oman Police (ROP eVisa)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Average Processing Time:</span>
                      <span className="font-bold text-emerald-400">2–3 Weeks (15–22 Days)</span>
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
                      <span className="font-bold text-emerald-400">Central Bank of Oman (CBO)</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400">Personal Income Tax:</span>
                      <span className="font-bold text-emerald-400">0.0% (Zero Tax)</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-900/40 border border-emerald-500/30 p-4 text-center">
                    <p className="text-xs font-medium text-emerald-200 mb-2">
                      Looking for industrial jobs in Duqm Refinery or Sohar Port?
                    </p>
                    <a
                      href="mailto:workwisevisa@gmail.com?subject=Oman%20Job%20Application&body=Hello%20WorkWise%20Visa%20Team,%0A%0AI%20am%20applying%20for%20a%20job%20in%20Oman.%0A%0AFull%20Name:%0APhone%20Number:%0ATrade/Designation:%0APassport%20Number:%0AExperience%20(Years):"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-900 hover:bg-slate-100 transition-colors shadow-sm"
                    >
                      <FaEnvelope className="w-3.5 h-3.5 text-emerald-600" />
                      Submit CV for Oman Recruitment
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
                1. 2026 Overview &amp; Vision 2040
              </a>
              <a href="#visa-types" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                2. Oman Visa Categories
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
                7. Oman Labour Law (Decree 53/2023)
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
              <FaCity className="w-3.5 h-3.5 text-emerald-600" />
              Section 1: Country Overview &amp; Industrial Expansion
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The Oman Labor Market in 2026: Vision 2040, Duqm &amp; Industrial Transformation
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                The <strong>Sultanate of Oman</strong> is undergoing unprecedented industrial and infrastructural transformation guided by the long-term economic framework of <strong>Oman Vision 2040</strong>. Situated along the Arabian Sea and Indian Ocean outside the strategic choke point of the Strait of Hormuz, the Sultanate has developed globally significant free zones, container terminals, and petrochemical processing hubs at the{" "}
                <a
                  href="https://www.duqm.gov.om"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Special Economic Zone at Duqm (SEZAD)
                </a>{" "}
                and the Sohar Port &amp; Freezone industrial zone.
              </p>
              <p>
                With the commercial commissioning of the <strong>$9 Billion USD Duqm Refinery (OQ8)</strong>, alongside national investments into green hydrogen mega-hubs (Hydrom), clean energy ammonia plants, deepwater port expansions, and the cross-border Hafeet Rail link connecting Sohar to Abu Dhabi, the demand for qualified expatriate trade craftsmen, 6G pipe welders, spool fitters, industrial electricians, heavy truck drivers, and site helpers has surged dramatically throughout 2026.
              </p>
              <p>
                Crucially, employment in the Sultanate is strictly regulated by the{" "}
                <a
                  href="https://www.mol.gov.om"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Oman Ministry of Labour (MOL)
                </a>{" "}
                under the historic enactment of <strong>Royal Decree No. 53/2023 (The New Oman Labour Law)</strong>. This statutory legislation enforces digital labour permits, real-time payroll audits through the{" "}
                <a
                  href="https://cbo.gov.om"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Central Bank of Oman (CBO) Wage Protection System (WPS)
                </a>
                , universal employer-funded medical insurance, clear overtime compensation tiers, and the abolition of mandatory exit sponsorship objections (NOCs).
              </p>
            </div>

            {/* Key Macro Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Duqm Megaproject Hub</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-slate-900 mt-1">$15B+</div>
                <p className="text-[11px] text-slate-500 mt-1">Refinery, petrochemicals &amp; green hydrogen</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Personal Income Tax</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-emerald-600 mt-1">0.0%</div>
                <p className="text-[11px] text-slate-500 mt-1">100% tax-free take-home earnings</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Standard Visa Duration</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-teal-600 mt-1">2 Years</div>
                <p className="text-[11px] text-slate-500 mt-1">Renewable MOL employment permit</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">WPS Banking Guarantee</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-amber-600 mt-1">100%</div>
                <p className="text-[11px] text-slate-500 mt-1">Direct salary transfer monitoring by CBO</p>
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
              Major Oman Work Visa Categories in 2026
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Expatriate workers mobilized to Oman are issued specialized permits categorized by the Ministry of Labour and Royal Oman Police:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {/* Card 1: Standard Employment Visa */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-500/60 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-emerald-100 text-emerald-900 font-extrabold text-xs px-2.5 py-1">
                      Most Common (90%)
                    </span>
                    <span className="text-xs font-bold text-slate-400">2-Year Validity</span>
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-900">
                    Oman Employment Visa (Work Permit)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Issued to expatriate trade craftsmen, technicians, engineers, and support staff hired by registered commercial LLC companies in Oman with approved MOL labour quotas.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                      WPS electronic payroll security
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                      Full employer-funded visa &amp; flight costs
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                      Civil ID Smart Resident Card issuance
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 2: Temporary Work Visa */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-teal-500/60 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-teal-100 text-teal-900 font-extrabold text-xs px-2.5 py-1">
                      Project-Based
                    </span>
                    <span className="text-xs font-bold text-slate-400">4–12 Months</span>
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-900">
                    Temporary Industrial Work Visa
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designed for specialized refinery shutdown maintenance, boiler testing, hydro-testing, and turnaround contracts in Duqm, Sohar, and Mina Al Fahal refineries.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-teal-600 shrink-0" />
                      Expedited ROP issuance
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-teal-600 shrink-0" />
                      Multi-entry travel privileges
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-teal-600 shrink-0" />
                      Option to convert to permanent permit
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 3: Free Zone / SEZAD Visa */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-amber-500/60 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-amber-100 text-amber-900 font-extrabold text-xs px-2.5 py-1">
                      Free Zone Hub
                    </span>
                    <span className="text-xs font-bold text-slate-400">2-Year Validity</span>
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-900">
                    SEZAD &amp; Freezone Visa
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Issued to technical workforce and operations staff employed in special economic zones (Duqm, Sohar Freezone, Salalah Freezone, Khazaen).
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-amber-600 shrink-0" />
                      Streamlined quota allocations
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-amber-600 shrink-0" />
                      Fast-track customs &amp; port access
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-amber-600 shrink-0" />
                      Direct one-stop-shop processing
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
              Section 3: Complete Step-by-Step Oman Recruitment &amp; Visa Pipeline
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                The 6-Phase Oman Work Visa Processing Pipeline
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                WorkWise Visa provides end-to-end recruitment execution synchronized with official Omani government digital systems:
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
                      Phase 1: Practical Trade Testing &amp; MOL Labour Clearance Allocation
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 2–5 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Candidates undergo practical trade skill assessments (weld coupons, electrical circuit layout, heavy equipment trials). The hiring Omani employer secures electronic <strong>Labour Clearance (Tasreeh)</strong> approval from the{" "}
                    <a
                      href="https://www.mol.gov.om"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                    >
                      Ministry of Labour (MOL)
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
                      Phase 2: Pre-Departure Wafid (GAMCA) Medical Screening
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 2–4 Days
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
                    . Upon receiving a &quot;FIT&quot; result, the medical report is uploaded directly to the Gulf Health Council and Omani immigration network.
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
                      Phase 3: Royal Oman Police (ROP) eVisa Stamping &amp; Work Permit Generation
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 2–4 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The employer submits the validated MOL quota and Wafid medical slip via the{" "}
                    <a
                      href="https://evisa.rop.gov.om"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                    >
                      Royal Oman Police (ROP eVisa Portal)
                    </a>
                    . The official <strong>Oman Electronic Employment Entry Visa</strong> is generated with an authentic digital QR code.
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
                    For Indian ECR passport holders, online clearance is executed through the <strong>e-Migrate Protector of Emigrants (PoE)</strong> system. The employer issues confirmed direct flight tickets to Muscat International Airport (MCT) or Salalah Airport (SLL).
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
                      Phase 5: Arrival in Oman &amp; In-Country MOH Medical Sync
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 2–4 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Upon landing in Muscat or Duqm, the worker is transported to company accommodations. The pre-departure Wafid records are synchronized with the{" "}
                    <a
                      href="https://www.moh.gov.om"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                    >
                      Oman Ministry of Health (MOH)
                    </a>{" "}
                    disease surveillance system.
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
                      Phase 6: Civil Status Biometrics, Resident Card (Bataka) &amp; WPS Bank Setup
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Timeline: 3–5 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The worker visits an ROP Civil Status Directorate for biometric fingerprinting. The physical <strong>Smart Resident Card (Civil ID / Bataka)</strong> is printed, the employee&apos;s WPS bank payroll card is activated, and site safety induction is completed.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 4: 2026 Salary Matrix ─────────────────── */}
          <section id="salary-matrix" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaMoneyBillWave className="w-3.5 h-3.5 text-emerald-600" />
              Section 4: Complete Oman Salary Matrix 2026
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                2026 Oman Salary Scales by Trade &amp; Skill Category
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Below is the comprehensive monthly compensation structure for skilled, technical, and industrial occupations across Muscat, Duqm, and Sohar. Figures reflect 8 hours/day basic wage, standard company overtime potential, and employer-provided amenities (1 OMR ≈ ₹218 INR):
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-900 font-display font-bold">
                    <th className="py-4 px-4 sm:px-6">Industry / Trade Role</th>
                    <th className="py-4 px-3 sm:px-4">Basic Wage (OMR)</th>
                    <th className="py-4 px-3 sm:px-4">Overtime Potential</th>
                    <th className="py-4 px-3 sm:px-4">Total Net (OMR / Mo)</th>
                    <th className="py-4 px-3 sm:px-4">INR Equivalent (Approx.)</th>
                    <th className="py-4 px-4 sm:px-6">Company Benefits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {/* Energy & Welding */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      6G TIG &amp; ARC Pipe Welder (Duqm Refinery / Oil &amp; Gas)
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">220 – 320 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">50 – 80 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">270 – 400 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹58,800 – ₹87,200</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Food, Stay &amp; Medical</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Industrial Pipe Fabricator &amp; Spool Fitter
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">180 – 240 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">40 – 60 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">220 – 300 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹47,900 – ₹65,400</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Accommodation &amp; Overtime</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Structural Steel Fitter &amp; Gas Cutter
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">150 – 200 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">35 – 50 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">185 – 250 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹40,300 – ₹54,500</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Stay &amp; Transport</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Certified Rigging Supervisor &amp; Rigger Level 1
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">160 – 220 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">35 – 55 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">195 – 275 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹42,500 – ₹59,900</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Accommodation &amp; Overtime</td>
                  </tr>

                  {/* Heavy Transport & Machinery */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Heavy Trailer / Transit Mixer Driver (Oman/GCC License)
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">200 – 280 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">40 – 70 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">240 – 350 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹52,300 – ₹76,300</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Trip Allowance + Stay</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Excavator / Heavy Crane Operator (50T–100T)
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">220 – 300 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">50 – 75 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">270 – 375 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹58,800 – ₹81,700</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Company Accommodation</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Boom Truck &amp; Forklift Operator
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">160 – 210 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">35 – 50 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">195 – 260 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹42,500 – ₹56,600</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Stay &amp; Medical</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Light Vehicle Driver (Airport &amp; Executive)
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">140 – 180 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">30 – 45 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">170 – 225 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹37,000 – ₹49,000</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Company Car + Stay</td>
                  </tr>

                  {/* MEP Trades */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Industrial Electrician &amp; Control Panel Wireman
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">160 – 220 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">35 – 55 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">195 – 275 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹42,500 – ₹59,900</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Accommodation &amp; Transport</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      HVAC Central Chiller &amp; VRF Technician
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">170 – 230 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">35 – 55 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">205 – 285 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹44,700 – ₹62,100</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Stay &amp; Medical</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Commercial Plumber &amp; Firefighting Pipefitter
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">140 – 190 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">30 – 45 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">170 – 235 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹37,000 – ₹51,200</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Accommodation</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Instrumentation Technician (DCS / PLC Loops)
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">220 – 300 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">45 – 70 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">265 – 370 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹57,700 – ₹80,600</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Stay &amp; Medical</td>
                  </tr>

                  {/* Civil Construction & Finishing */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Scaffolding Erector / Steel Fixer
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">130 – 170 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">30 – 45 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">160 – 215 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹34,800 – ₹46,800</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Food &amp; Camp Stay</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Tiles &amp; Marble Mason / Block Plasterer
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">130 – 175 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">30 – 45 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">160 – 220 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹34,800 – ₹47,900</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Stay &amp; Overtime</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Shuttering &amp; Finishing Carpenter
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">130 – 170 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">30 – 45 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">160 – 215 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹34,800 – ₹46,800</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Food &amp; Camp Stay</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Construction Site Helper / Cleaner
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">110 – 140 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">25 – 40 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">135 – 180 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹29,400 – ₹39,200</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Free Food, Stay &amp; Medical</td>
                  </tr>

                  {/* Hospitality & Facility Management */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Continental / Arabic Cook &amp; Head Chef
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">180 – 260 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">35 – 55 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">215 – 315 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹46,800 – ₹68,600</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Duty Meals &amp; Stay</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Hotel Housekeeping Attendant &amp; Steward
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">120 – 160 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">25 – 40 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">145 – 200 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹31,600 – ₹43,600</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Tips + Accommodation</td>
                  </tr>

                  {/* Supervisory & QC */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Civil / Mechanical Site Foreman
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">280 – 380 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">50 – 80 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">330 – 460 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹71,900 – ₹100,200</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Company Car &amp; Phone</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      HSE Safety Officer (NEBOSH IGC Certified)
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-emerald-700">300 – 420 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 text-slate-600">50 – 80 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">350 – 500 OMR</td>
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-teal-700">₹76,300 – ₹109,000</td>
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
                Specialized Trade Roles &amp; Skill Standards for Oman Recruitment
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Omani contractors and industrial operators enforce stringent practical testing before issuing formal job offers:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Profile 1 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <FaOilWell className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    6G TIG &amp; ARC Pipe Welders (Oil &amp; Gas / Duqm Refinery)
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Welding technicians must clear 6G position root pass (GTAW with pure Argon backing gas) and hot/fill/cap passes using SMAW low-hydrogen electrodes (E7018) on carbon steel, stainless steel, and Inconel pipe spools. Tests undergo 100% radiographic X-ray testing and bend tests.
                </p>
                <div className="text-xs font-semibold text-emerald-800 bg-emerald-50 p-3 rounded-xl">
                  Average Take-Home: 270 – 400 OMR/Mo (₹58,800 – ₹87,200 INR) with free accommodation &amp; overtime.
                </div>
              </div>

              {/* Profile 2 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <FaTruckFast className="w-5 h-5 text-teal-600" />
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Heavy Trailer &amp; Transit Mixer Drivers (ROP GCC License)
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Drivers operate 40ft flatbeds, low-bed multi-axle trailers, and concrete transit mixers across rugged desert highways connecting Muscat, Duqm, and Marmul oilfields. Candidates with valid GCC licenses undergo fast-track ROP refresher trials to receive Oman Heavy Vehicle Driving Licenses.
                </p>
                <div className="text-xs font-semibold text-teal-800 bg-teal-50 p-3 rounded-xl">
                  Average Take-Home: 240 – 350 OMR/Mo (₹52,300 – ₹76,300 INR) with trip allowances.
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
                  Technicians must understand single-line diagrams (SLD), motor control centers (MCC), variable frequency drives (VFD), cable tray fabrication, transformer terminations, and explosion-proof (ATEX) installations in hazardous industrial zones.
                </p>
                <div className="text-xs font-semibold text-amber-800 bg-amber-50 p-3 rounded-xl">
                  Average Take-Home: 195 – 275 OMR/Mo (₹42,500 – ₹59,900 INR) with free transport &amp; overtime.
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
                  With Oman’s burgeoning luxury tourism in Muscat, Jabal Akhdar, and Salalah Khareef season, hotels and industrial catering contractors recruit chefs, kitchen stewards, laundry operators, and housekeeping staff with guaranteed food, lodging, and service tips.
                </p>
                <div className="text-xs font-semibold text-rose-800 bg-rose-50 p-3 rounded-xl">
                  Average Take-Home: 145 – 315 OMR/Mo (₹31,600 – ₹68,600 INR) with meals and lodging.
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
              Essential Documents for Oman Employment Visa Clearance
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
                    <span><strong>Original Passport:</strong> Minimum validity of 6 to 8 months with at least 2 blank pages.</span>
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
                    For Supervisory, Engineering &amp; QC Roles (Skill Levels 1, 2, 3)
                  </h3>
                </div>
                <p className="text-xs text-slate-500">
                  Site Engineers, QA/QC Inspectors, Foremen, Safety Officers &amp; Accountants:
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Attested Degree/Diploma:</strong> Certified through State HRD ➔ MEA ➔ Oman Embassy in home country.</span>
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
              Section 7: Oman Labour Law Protections (Royal Decree 53/2023)
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Legal Protections Guaranteed by New Oman Labour Law
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold">
                  <FaFileInvoiceDollar className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  CBO WPS Salary Guarantee
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All private sector employers must disburse monthly wages electronically into workers&apos; bank accounts. Non-compliance results in automatic MOL portal freezes and financial penalties.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-800 font-bold">
                  <FaClock className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  8-Hour Daily Shift &amp; Overtime
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Statutory work is capped at 8 hours/day (40 hours/week). Overtime is compensated at <strong>125% of hourly basic wage</strong> for day work and <strong>150%</strong> for night shifts or Fridays.
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
                  Workers completing at least 1 year receive severance gratuity: <strong>one full month basic salary</strong> for each completed year of continuous employment under Article 61.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-800 font-bold">
                  <FaTriangleExclamation className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Midday Summer Heat Ban
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Between June 1 and August 31, outdoor work under direct sun is strictly prohibited from <strong>12:30 PM to 3:30 PM</strong> with mandatory air-conditioned rest shelters and hydration.
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
                  Workers enjoy <strong>30 calendar days of paid annual vacation</strong> per year along with return economy flight tickets provided by the hiring establishment.
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
                  Workers can transition to another employer upon contract completion without needing an employer Exit NOC or facing deportation bans.
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
                  Screens for active pulmonary Tuberculosis (TB), pleural scars, and lung lesions. A clean X-ray is mandatory for Oman visa approval.
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
                  Results automatically sync with the{" "}
                  <a
                    href="https://www.moh.gov.om"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                  >
                    Oman Ministry of Health (MOH)
                  </a>{" "}
                  portal, expediting Civil ID Smart Card issuance.
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
                One of the major attractions of migrating to Oman is the high net savings potential. Because employer contracts in construction, industrial maintenance, and hospitality provide <strong>free furnished bachelor accommodation, company bus transportation, and utility bills</strong>, workers typically spend very little on daily maintenance:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Mess / Food Expenses</div>
                <div className="text-xl font-bold text-slate-950 mt-1">25 – 40 OMR / Mo</div>
                <p className="text-[11px] text-slate-500 mt-1">Subsidized mess food (₹5,400 – ₹8,700 INR) or free company catering</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Mobile Data &amp; Calls</div>
                <div className="text-xl font-bold text-slate-950 mt-1">5 – 10 OMR / Mo</div>
                <p className="text-[11px] text-slate-500 mt-1">Omantel, Ooredoo, or Vodafone data packages</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Personal &amp; Misc</div>
                <div className="text-xl font-bold text-slate-950 mt-1">10 – 20 OMR / Mo</div>
                <p className="text-[11px] text-slate-500 mt-1">Toiletries, tea/snacks, personal items</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Average Savings Ratio</div>
                <div className="text-xl font-bold text-emerald-600 mt-1">75% – 85%</div>
                <p className="text-[11px] text-slate-500 mt-1">Direct home remittance via LuLu / Al Jadeed Exchange</p>
              </div>
            </div>
          </section>

          {/* ── Section 10: Detailed FAQs Section ─────────────── */}
          <section id="faqs" className="scroll-mt-28 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaCircleQuestion className="w-3.5 h-3.5 text-emerald-600" />
              Section 10: Frequently Asked Questions (FAQs) for Oman Work Visas
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions Regarding Oman Employment &amp; MOL Visas
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Clear, legally verified answers to the most critical queries about working in the Sultanate of Oman:
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
                Direct Overseas Recruitment for Oman
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                Ready to Advance Your Career in the Sultanate of Oman?
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                WorkWise Visa connects certified tradesmen and technical professionals with licensed Omani employers offering guaranteed tax-free earnings, free company accommodation, and official MOL work permits.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link
                  href="/jobs?country=Oman"
                  className="inline-flex items-center gap-2.5 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-emerald-500/25 hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <FaBriefcase className="w-4 h-4" />
                  View Active Oman Vacancies
                </Link>

                <a
                  href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20want%20to%20apply%20for%20Oman%20work%20visa%20and%20job%20vacancies."
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
