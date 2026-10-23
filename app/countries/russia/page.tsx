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
  FaEarthAmericas,
  FaUserTie,
  FaCoins,
  FaFingerprint,
  FaStethoscope,
  FaCircleCheck,
  FaCircleExclamation,
  FaLanguage,
  FaTemperatureLow,
  FaBan,
  FaBuilding,
  FaTrainSubway,
} from "react-icons/fa6";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.workwisevisa.com";

export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Russia Work Visa & Jobs Guide 2026: Official MVD Invitation, HQS Status & Indian Placement | WorkWise Visa",
  description:
    "Authoritative 2026 Russia work visa guide for Indian skilled technicians, welders, CNC operators, heavy drivers & engineers. Learn official MVD invitations, HQS 3-year visas, Ruble salary matrices, Sakharovo biometrics, and MEA-compliant legal placement.",
  keywords: [
    "Russia work visa 2026",
    "Russia work visa for Indian citizens",
    "Russia work permit process in India",
    "Russia MVD invitation letter verification",
    "Russia HQS visa salary threshold 2026",
    "Russia jobs for Indian welders masons drivers",
    "Russia work visa cost in India INR",
    "VFS Russia visa appointment New Delhi Mumbai",
    "Russia industrial work permit 115 FZ",
    "Sakharovo migration center medical biometrics green card",
    "Russia worker salary in Rubles to INR conversion",
    "Russia labor code TK RF overtime rights",
    "Ruble to Rupee money transfer VTB Sberbank",
    "WorkWise Visa Russia placement overseas",
    "Russia work visa scam warning MEA advisory",
    "Civilian technical jobs in Moscow St Petersburg Kazan",
  ],
  alternates: {
    canonical: `${BASE_URL}/countries/russia`,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Russia Work Visa & Jobs Guide 2026: Official MVD Invitation, HQS Status & Indian Placement | WorkWise Visa",
    description:
      "Comprehensive statutory manual for Indian professionals, industrial welders, CNC machinists, heavy fleet drivers, and project engineers migrating to the Russian Federation under Federal Law No. 115-FZ.",
    url: `${BASE_URL}/countries/russia`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Russia Work Visa & Industrial Employment Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Russia Work Visa & Jobs Guide 2026: Official MVD Invitation, HQS Status & Indian Placement | WorkWise Visa",
    description:
      "Complete 2026 Russia work visa guide for Indian workers. Explore MVD Yellow Invitations, HQS permits, Ruble salaries, Sakharovo biometrics, and consular VFS filing.",
    images: ["https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function RussiaCountryPage() {
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
        name: "Russia",
        item: `${BASE_URL}/countries/russia`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Russia Work Visa & Industrial Employment Guide 2026: Official MVD Invitation, HQS Status, Ruble-INR Salaries & Consular Stamping",
    description:
      "Comprehensive statutory manual for Indian skilled technicians, welders, CNC operators, heavy fleet drivers, and project engineers migrating to the Russian Federation under Federal Law No. 115-FZ.",
    image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=1200&q=80",
    author: {
      "@type": "Organization",
      name: "WorkWise Eurasian Consular & Legal Placement Desk",
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
    dateModified: "2026-10-15T00:00:00+03:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/countries/russia`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an official MVD Work Invitation (Приглашение МВД) and how do Indians verify it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An MVD Work Invitation is a state-authenticated immigration document issued by the Main Directorate for Migration Affairs of the Ministry of Internal Affairs of Russia (ГУВМ МВД РФ) at the request of an authorized Russian corporate employer. It is issued either on official yellow guilloche security paper or via electronic telex directly transmitted to Russian consular missions in New Delhi, Mumbai, Kolkata, or Chennai. Authentic invitations feature a verified MVD registration number, employer tax identifier (ИНН), and specific job title. WorkWise Visa audits every invitation against official Russian federal databases (egrul.nalog.ru) before visa submission.",
        },
      },
      {
        "@type": "Question",
        name: "What is the 2026 Highly Qualified Specialist (HQS / ВКС) salary threshold in Russia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under recent amendments to Federal Law No. 115-FZ, the statutory salary threshold for Highly Qualified Specialists (Высококвалифицированный специалист - ВКС) is a minimum of 750,000 Russian Rubles per calendar quarter (equivalent to approximately 250,000 RUB per month, or ~₹2,30,000 to ₹2,50,000 INR). HQS visa holders receive a 3-year multiple-entry work visa, are 100% exempt from regional labor quotas and Russian language exams, pay a flat 13% personal income tax rate from Day 1, and can bring spouses and children with immediate right to work.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a Russia Work Visa cost from India in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Official Russian consular visa fees at VFS Russia / Russian Embassy in India range from ₹6,400 to ₹12,800 INR for standard processing (single-entry 90-day visa), or ₹12,800 to ₹25,600 INR for urgent 3-day processing, plus standard VFS service charges (~₹1,800–₹2,200 INR). The employer pays the state duty for the MVD invitation and work permit in Russia (typically 3,500 RUB to 4,200 RUB). Pre-departure expenses in India also include mandatory certified laboratory HIV testing (₹800–₹1,500) and MEA Apostille on educational documents.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a Russia Work Visa take to process from India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The entire end-to-end process typically takes 5 to 8 weeks. Stage 1 (employer quota allocation and MVD invitation issuance in Russia) takes 20 to 35 calendar days. Stage 2 (visa application submission and passport stamping at VFS / Russian Consulates in New Delhi, Mumbai, Chennai, or Kolkata) takes 5 to 10 working days for standard processing, or 3 working days for expedited express service.",
        },
      },
      {
        "@type": "Question",
        name: "Do Indian blue-collar workers need to pass a Russian language test (ТРКИ)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For standard quota work permits (Разрешение на работу) in retail, hospitality, and residential services, candidates must pass a foundational comprehensive examination on Russian language, Russian history, and fundamentals of legislation (Level 1 / Базовый уровень). However, Highly Qualified Specialists (HQS) are legally exempt from language testing. In heavy industrial clusters, shipyards, and mega-construction sites where organized Indian manpower teams are deployed, bilingual supervisors and on-site interpreters manage day-to-day coordination while workers receive basic workplace Russian language orientation.",
        },
      },
      {
        "@type": "Question",
        name: "Can Indian workers legally transfer money from Russia to India despite Western banking sanctions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Reserve Bank of India (RBI) and the Bank of Russia have established an authorized bilateral Rupee-Ruble settlement mechanism through Special Rupee Vostro Accounts (SRVA). Indian workers in Russia can easily remit their monthly Ruble wages directly into major Indian bank accounts (SBI, HDFC, ICICI, PNB) via authorized Russian banking channels including VTB Bank (which operates an active branch in New Delhi), Sberbank, Alfa-Bank, and non-SWIFT financial messaging corridors. Transfers take 24 to 48 hours with transparent exchange rates.",
        },
      },
      {
        "@type": "Question",
        name: "What mandatory medical tests and biometrics are required upon arrival in Russia (Law 274-FZ)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Federal Law No. 274-FZ, all foreign work visa holders must complete three statutory procedures within 30 days of arrival: 1) Medical examination at an accredited migration health center (Sakharovo in Moscow or regional equivalents) screening for HIV/AIDS, tuberculosis via chest X-ray, syphilis, leprosy, and narcotic/psychotropic drugs; 2) State mandatory ten-print fingerprinting (Дактилоскопия); and 3) Biometric facial photographing. Upon completion, the candidate receives the official laminated 'Green Card' (Дактилоскопическая карта), valid for 10 years.",
        },
      },
      {
        "@type": "Question",
        name: "Can an Indian citizen work in Russia on an electronic visa (E-Visa) or Tourist visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ABSOLUTELY NOT. The Russian Unified E-Visa is strictly restricted to tourism, cultural visits, and short commercial business meetings up to a maximum of 16 days. It is a severe federal offense under Article 18.10 of the Administrative Offenses Code of the Russian Federation to undertake paid labor or sign employment contracts on an E-visa or tourist visa. Violations result in immediate detention at a deportation center, hefty fines, and a mandatory 5-year ban on entering the Russian Federation. Legitimate employment requires an official MVD work permit and Type-D Work Visa.",
        },
      },
      {
        "@type": "Question",
        name: "What are standard working hours, overtime wages, and annual leaves under the Russian Labor Code?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the Labor Code of the Russian Federation (Трудовой кодекс РФ - TK RF, Article 91), standard working time cannot exceed 40 hours per week. Under Article 152, overtime is strictly regulated: the first two overtime hours must be compensated at a minimum of 1.5 times the hourly base rate, and all subsequent hours must be paid at double (2.0x) the hourly rate. Employees receive a mandatory minimum of 28 calendar days of paid annual vacation (Article 115), with additional paid leave granted for workers deployed in harsh climatic regions of Siberia or the Far North.",
        },
      },
      {
        "@type": "Question",
        name: "What is the official advisory regarding military recruitment scams in Russia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Ministry of External Affairs (MEA), Government of India, has issued strict advisories warning Indian citizens against deceptive recruitment agents who mislead job seekers into military auxiliary or conflict zone roles under the false promise of high salaries. WorkWise Visa is 100% committed to ethical, transparent, civilian recruitment. We operate strictly within commercial construction, industrial manufacturing, heavy automotive engineering, oil & gas energy facilities, IT, and hospitality across peaceful central and eastern regions (Moscow, Saint Petersburg, Kazan, Tyumen, Ekaterinburg, Vladivostok). Every employer undergoes rigorous verification of their state registration (ОГРН/ИНН) and physical commercial work premises.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Obtain a Russia Work Visa from India in 2026",
    description:
      "A complete 6-stage statutory process for Indian skilled technicians and professionals to legally obtain a Russian Federation Work Visa, MVD invitation, consular stamping, and post-arrival biometrics.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Technical Skill Screening & Official Employment Contract",
        text: "Pass trade verification tests (6G welding coupon, CNC programming, heavy equipment operation) and execute a legally binding Russian corporate employment contract (Трудовой договор) specifying salary, job code, and benefits.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Employer Quota Filing & MVD Work Invitation Issuance",
        text: "The Russian employer applies to the Ministry of Internal Affairs (МВД России) for state labor quota clearance and obtains the official yellow paper or electronic telex invitation (Приглашение на въезд).",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Consular Visa Stamping at VFS / Russian Embassy in India",
        text: "Submit passport, original MVD invitation, certified HIV negative medical certificate, and visa dossier to VFS Global or Russian diplomatic missions in New Delhi, Mumbai, Kolkata, or Chennai for single-entry 90-day work visa stamping.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Arrival in Russia & Mandatory 7-Day Migration Registration",
        text: "Fly to Russia, obtain the stamped Migration Card at border control, and complete mandatory migration registration (Миграционный учет) with the employer within 7 business days.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Sakharovo Post-Arrival Medicals, Fingerprinting & Green Card",
        text: "Undergo statutory medical screening, state 10-finger fingerprinting (Дактилоскопия), and biometric photographing under Federal Law 274-FZ to obtain the 10-year official laminated Green Card.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Multi-Entry Work Visa Extension & Tax Registration (INN / SNILS)",
        text: "The local MVD converts the single-entry visa into a 1-year or 3-year multi-entry work visa, and the employer issues individual tax registration (ИНН) and pension insurance (СНИЛС).",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
              <span className="text-emerald-300 font-bold">Russian Federation (Российская Федерация)</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                {/* Government & Authority Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Official Russian Federation Migration Service (ГУВМ МВД РФ) Gateway
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                  Russia Work Visa &amp; Jobs Guide{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                    2026
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  The definitive, legally verified statutory roadmap for Indian industrial welders, CNC machinists, heavy vehicle operators, construction specialists, and engineers migrating to Russia. Explore official{" "}
                  <strong className="font-bold text-white">MVD Work Invitations (Приглашение МВД)</strong>,{" "}
                  <strong className="font-bold text-emerald-300">HQS (ВКС) 3-year high-salary visas</strong>,{" "}
                  <strong className="font-bold text-white">Ruble-to-INR banking corridors</strong>, and guaranteed protections under the Russian Labor Code (ТК РФ).
                </p>

                {/* Key Benefits Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaMoneyBillWave className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">80K–250K+ RUB</div>
                      <div className="text-[10px] text-slate-400">₹75K–₹2.3L+ Monthly Pay</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaFileContract className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">MVD Invitation</div>
                      <div className="text-[10px] text-slate-400">Direct Ministry Yellow Paper</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaAward className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">HQS Status (ВКС)</div>
                      <div className="text-[10px] text-slate-400">3-Yr Visa &amp; 13% Flat Tax</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaBuilding className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Free Housing &amp; Food</div>
                      <div className="text-[10px] text-slate-400">Provided by Employer</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaClock className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">40-Hr Workweek</div>
                      <div className="text-[10px] text-slate-400">28 Days Paid Annual Leave</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaCoins className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Rupee-Ruble Corridors</div>
                      <div className="text-[10px] text-slate-400">Direct VTB / Sber Remittance</div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons - Clean 2-CTA Layout */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href="/jobs?country=Russia"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <FaBriefcase className="w-4 h-4" />
                    Browse Active Russia Vacancies
                  </Link>

                  <a
                    href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20verified%20civilian%20Russia%20Work%20Visas%20and%20Industrial%20Jobs!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/50 px-6 py-3.5 text-sm font-bold text-white transition-all shadow-md"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-300" />
                    WhatsApp Russia Desk
                  </a>
                </div>
              </div>

              {/* Quick Country Snapshot Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3.5">
                      <img
                        src="https://flagcdn.com/w160/ru.png"
                        alt="Russia Flag"
                        className="h-10 w-14 object-cover rounded-xl shadow-md border border-white/25 shrink-0"
                      />
                      <div>
                        <h2 className="text-xl font-display font-extrabold text-white">Russian Federation</h2>
                        <p className="text-xs text-emerald-300 font-medium">Moscow • St. Petersburg • Kazan • Tyumen</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-xs font-black text-emerald-300">
                      EURASIA HUB
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs text-slate-200">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Immigration Authority:</span>
                      <span className="font-bold text-white">ГУВМ МВД РФ (MVD Migration Service)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Governing Statute:</span>
                      <span className="font-bold text-emerald-300">Federal Law No. 115-FZ &amp; Law No. 274-FZ</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Primary Entry Document:</span>
                      <span className="font-bold text-white">Official MVD Invitation (Yellow / Telex)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Average Monthly Trade Pay:</span>
                      <span className="font-bold text-amber-300">80,000 – 180,000 RUB (₹75K – ₹1.65L INR)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">HQS Specialist Base:</span>
                      <span className="font-bold text-emerald-300">250,000+ RUB/mo (₹2.3L+ INR, 13% Tax)</span>
                    </div>

                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Permanent Settlement:</span>
                      <span className="font-bold text-emerald-300">RVP (РВП) &rarr; VNZh (ВНЖ) Permanent Residency</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-950/50 border border-emerald-500/30 p-3.5 text-center text-xs text-slate-300">
                    <div className="flex items-center justify-center gap-2 text-emerald-300 font-semibold mb-0.5">
                      <FaShieldHalved className="w-3.5 h-3.5 text-emerald-400" />
                      <span>MVD Verified • Civilian Contracts Only</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Standard Work Visa (Обыкновенная рабочая) • Direct Consular Stamping • Zero Hidden Charges
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
              Russia Comprehensive Guide Directory:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#overview" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                1. 2026 Labor Landscape
              </a>
              <a href="#visa-types" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                2. Visa Types: Quota, Non-Quota &amp; HQS
              </a>
              <a href="#invitation-letter" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                3. Official MVD Invitation Letter
              </a>
              <a href="#step-by-step" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                4. 6-Stage Deployment Pipeline
              </a>
              <a href="#salary-matrix" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                5. Ruble-to-INR Salary Matrix
              </a>
              <a href="#labour-law" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                6. Russian Labor Code (TK RF)
              </a>
              <a href="#banking-remittance" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                7. Cost of Living &amp; Rupee Transfers
              </a>
              <a href="#biometrics-sakharovo" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                8. Sakharovo Biometrics &amp; Green Card
              </a>
              <a href="#scam-warning" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                9. MEA Anti-Scam Advisory
              </a>
              <a href="#permanent-residency" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                10. Permanent Residency (ВНЖ)
              </a>
              <a href="#faqs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                11. Detailed FAQs (10+)
              </a>
            </div>
          </div>
        </section>

        {/* ── Main Content Container ─────────────────────────── */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">

          {/* ── Section 1: Overview & 2026 Regulatory Landscape ── */}
          <section id="overview" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaIndustry className="w-3.5 h-3.5 text-emerald-600" />
              Section 1: Country Overview &amp; The Massive Russian Industrial Labor Demand
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The Russian Labor Market in 2026: Why Russia&apos;s Industrial Heartlands Need Indian Technical Manpower
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                The <strong>Russian Federation</strong> is undergoing an unprecedented domestic industrial and infrastructural restructuring. As major state and private corporations scale massive civil infrastructure projects, modernise the Baikal-Amur Mainline (BAM) and Trans-Siberian transport arteries, expand LNG petrochemical complexes in Western Siberia (Tyumen, Yamal), and expand automotive and heavy machinery manufacturing plants across the Volga and Ural regions (Tatarstan, Nizhny Novgorod, Ekaterinburg), Russian employers face an acute shortage of certified technical manpower.
              </p>
              <p>
                Historically reliant on seasonal migration from post-Soviet Central Asian republics, Russian state authorities and enterprise conglomerates have pivoted aggressively toward establishing formal, organized bilateral recruitment corridors with <strong>India</strong>. Indian welders (6G TIG/MIG/SMAW), CNC lathe operators, structural fabricators, pipefitters, heavy crawler crane and dumper operators, industrial electricians, and agricultural technicians are highly prized for their disciplined technical competence, vocational ITI certifications, and dependable productivity.
              </p>
              <p>
                Unlike unregulated freelance arrangements, legitimate employment in Russia is governed with strict federal precision under{" "}
                <strong className="font-bold text-slate-900">Federal Law No. 115-FZ (&ldquo;On the Legal Status of Foreign Citizens in the Russian Federation&rdquo;)</strong> and monitored by the{" "}
                <strong className="font-bold text-slate-900">Main Directorate for Migration Affairs of the Ministry of Internal Affairs (ГУВМ МВД России)</strong>. Every candidate deployed through WorkWise Visa receives an authentic, state-registered employment contract, mandatory corporate housing, comprehensive voluntary medical insurance (ДМС), and seamless salary transfer channels directly linked to Indian banking institutions.
              </p>
            </div>

            {/* Statutory Pillars Grid */}
            <div className="grid md:grid-cols-3 gap-6 pt-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <FaScaleUnbalanced className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">Federal Law No. 115-FZ</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Establishes the strict statutory quota and non-quota mechanism for foreign labor recruitment. Guarantees non-discriminatory statutory wage protections and legal residency status.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                  <FaAward className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">HQS Specialist Track (ВКС)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fast-track 3-year multi-entry work visa for qualified engineers and senior specialists earning over 750,000 RUB/quarter. Exempt from quotas and language testing, with flat 13% tax.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                  <FaCoins className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">Rupee-Ruble Settlements</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bilateral Special Rupee Vostro Accounts (SRVA) established between the RBI and Bank of Russia ensure smooth, SWIFT-independent family remittances directly into Indian bank accounts.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 2: Russia Visa Categories ──────────────── */}
          <section id="visa-types" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaPassport className="w-3.5 h-3.5 text-emerald-600" />
              Section 2: Primary Russian Work Visa Categories &amp; Legal Pathways
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Which Russian Work Permit Pathway Applies to Your Profession?
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed">
              Foreign citizens entering the Russian Federation for remunerated professional employment fall into distinct statutory classifications. Understanding the precise legal framework ensures seamless visa stamping and prevents administrative infractions:
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              {/* Pathway 1: Standard Quota Permit */}
              <div className="rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-white via-emerald-50/20 to-white p-6 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 px-3 py-1 text-xs font-bold">
                    Quota Allocation
                  </span>
                  <span className="text-xs font-bold text-slate-500">Standard Work Permit</span>
                </div>

                <h3 className="font-display font-extrabold text-slate-900 text-xl">
                  Standard Quota Work Visa (РНР по квоте)
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Designed for skilled trade professionals, factory operators, and construction personnel recruited under annual corporate quotas approved by the Russian Ministry of Labor (Минтруд РФ):
                </p>

                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Applicable Trades:</strong> Welders, masons, carpenters, crane drivers, electricians, factory line workers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Initial Stamping:</strong> 90-day single-entry work visa issued at VFS / Russian Embassy in India.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>In-Country Extension:</strong> Converted into a 1-year multiple-entry visa by the local MVD without exiting Russia.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Accommodation &amp; Food:</strong> Fully arranged and subsidized by the employing Russian corporation.</span>
                  </li>
                </ul>
              </div>

              {/* Pathway 2: Non-Quota Positions */}
              <div className="rounded-3xl border border-teal-200/80 bg-gradient-to-br from-white via-teal-50/20 to-white p-6 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-teal-100 text-teal-800 border border-teal-300 px-3 py-1 text-xs font-bold">
                    Shortage List
                  </span>
                  <span className="text-xs font-bold text-slate-500">Non-Quota Occupations</span>
                </div>

                <h3 className="font-display font-extrabold text-slate-900 text-xl">
                  Non-Quota Work Permit (Внеквотные должности)
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Specialized technical trades and management roles officially exempted from regional quota limitations by federal decree:
                </p>

                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Eligible Occupations:</strong> Petrochemical engineers, CNC programmers, automation technicians, Indian chefs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Expedited Approval:</strong> Employers can issue MVD invitations without waiting for annual municipal quota windows.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>1-Year Renewable:</strong> Directly renewable annually for the duration of the corporate contract.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Salary Scale:</strong> Competitive monthly gross pay ranging from 110,000 to 220,000 RUB (~₹1,00,000–₹2,05,000 INR).</span>
                  </li>
                </ul>
              </div>

              {/* Pathway 3: Highly Qualified Specialist (HQS) */}
              <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-br from-white via-amber-50/20 to-white p-6 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-amber-100 text-amber-800 border border-amber-300 px-3 py-1 text-xs font-bold">
                    HQS Track (ВКС)
                  </span>
                  <span className="text-xs font-bold text-slate-500">3-Year Elite Status</span>
                </div>

                <h3 className="font-display font-extrabold text-slate-900 text-xl">
                  Highly Qualified Specialist (ВКС)
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The premier corporate status for senior engineers, IT specialists, pharmaceutical directors, and project heads:
                </p>

                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>2026 Salary Bar:</strong> Minimum 750,000 RUB per quarter (~250,000 RUB/month or ~₹2,30,000+ INR).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>3-Year Multi-Entry Visa:</strong> Immediate 3-year visa issued in India without needing 90-day single-entry conversion.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Exemptions:</strong> 100% exempt from Russian language, history, and legislation examinations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Family Rights:</strong> Spouses and minor children receive accompanying 3-year visas with full work rights.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Critical Legal Distinction Callout */}
            <div className="rounded-2xl border border-amber-300 bg-amber-50/70 p-5 text-xs text-amber-950 space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                <FaCircleExclamation className="w-4 h-4 text-amber-600 shrink-0" />
                Critical Legal Clarification: Russian Work Permit vs. Patent (Патент)
              </div>
              <p className="leading-relaxed">
                Many unauthorized agents confuse Indian applicants with the <strong>Patent (Патент)</strong> system. Patents are exclusively applicable to citizens of visa-free post-Soviet states (Uzbekistan, Tajikistan, Azerbaijan, Moldova). <strong>Citizens of India belong to the visa-regime category</strong> and CANNOT work under a Patent. Indian nationals strictly require an official <strong>Work Permit (Разрешение на работу)</strong> backed by an employer-sponsored MVD Invitation Letter. Anyone offering an Indian candidate a &ldquo;Patent&rdquo; or a &ldquo;Tourist/Business visa with open work rights&rdquo; is engaging in illegal fraud.
              </p>
            </div>
          </section>

          {/* ── Section 3: Official MVD Invitation Letter ────────── */}
          <section id="invitation-letter" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaFileContract className="w-3.5 h-3.5 text-emerald-600" />
              Section 3: The Official MVD Invitation Letter (Приглашение МВД) Explained
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Understanding the Official Russian MVD Work Invitation: The Golden Key to Consular Stamping
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                An official Russian employment visa cannot be issued without an authenticated <strong>MVD Invitation (Приглашение на въезд в Российскую Федерацию)</strong>. Issued by the Ministry of Internal Affairs (МВД России), this document certifies that the hiring Russian company is officially registered on state registers, holds legitimate quota permits, and has deposited state security guarantees for the foreign specialist.
              </p>
              <p>
                MVD invitations are issued in two statutory formats:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 font-bold text-lg">
                  1
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">
                  Physical Security Form (Yellow Guilloche Paper)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Printed on specialized watermarked security paper with intaglio printing and micro-text by the regional MVD administration. The physical original document must be air-couriered from Moscow or the employer&apos;s city to India and presented in original at VFS Russia during passport submission.
                </p>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-[11px] text-slate-600">
                  <strong>Key Verification Features:</strong> Holographic thread, official blue wet-seal stamp of ГУВМ МВД, unique 10-digit serial number, and authorized officer signature.
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold text-lg">
                  2
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">
                  Electronic Telex Invitation (Электронное приглашение МВД)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Transmitted electronically via secure diplomatic communication channels (МИД РФ / МИД России) directly into the visa processing system of the Russian Embassy in New Delhi or the Consulates General in Mumbai, Chennai, or Kolkata.
                </p>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-[11px] text-slate-600">
                  <strong>Key Verification Features:</strong> High-resolution 2D QR barcode, electronic digital signature (ЭЦП) of the issuing MVD migration inspector, and specific Consular Post routing code.
                </div>
              </div>
            </div>

            {/* Checklist of Mandatory Data in Genuine Invitation */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
              <h3 className="font-display font-bold text-slate-900 text-base flex items-center gap-2">
                <FaCircleCheck className="w-4 h-4 text-emerald-600" />
                What Data Must Appear on Your Authentic MVD Invitation Letter?
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-slate-600">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">Candidate Details:</span>
                  Full legal name in Latin and Cyrillic script, date of birth, citizenship (Индия), and passport number.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">Employing Legal Entity:</span>
                  Official company name (ООО, АО, ПАО), Tax Identification Number (ИНН), and Primary State Registration Number (ОГРН).
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">Purpose of Travel:</span>
                  Must state explicitly: <em>&ldquo;РАБОТА ПО НАЙМУ&rdquo;</em> (Commercial Employment) or <em>&ldquo;ВЫСОКОКВАЛИФИЦИРОВАННЫЙ СПЕЦИАЛИСТ&rdquo;</em> (HQS).
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">Cities of Itinerary:</span>
                  Specific Russian cities and regions (e.g., Москва, Санкт-Петербург, Казань, Тюмень) where the company is authorized to deploy you.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">Visa Multiplicity:</span>
                  Single Entry (Однократная) for 90 days for standard permits, or Multiple Entry (Многократная) up to 3 years for HQS.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">WorkWise Pre-Screening:</span>
                  Every invitation is verified through the official Russian Federal Tax Service (egrul.nalog.ru) before consular submission.
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 4: 6-Stage Deployment Pipeline ─────────── */}
          <section id="step-by-step" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaTruckFast className="w-3.5 h-3.5 text-emerald-600" />
              Section 4: The Official 6-Stage Deployment Pipeline (India to Russia)
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              From Indian Trade Testing to Russian Work Permit Stamping: Step-by-Step
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed">
              WorkWise Visa manages every procedural stage under standardized institutional protocols, guaranteeing full compliance with both Indian Emigration Act regulations and Russian Federation migration statutes:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {/* Stage 1 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden">
                <span className="absolute -top-3 -right-3 text-6xl font-display font-black text-slate-100 select-none">
                  01
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-sm">
                    1
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Trade Assessment &amp; Contract
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Candidates undergo rigorous practical trade tests (6G coupon welding, CNC simulation, heavy driving test) at our authorized technical centers in Delhi NCR or Patna. Successful candidates sign a bilingual Russian-English corporate employment contract (Трудовой договор).
                </p>
                <div className="text-[11px] font-bold text-emerald-700">Timeline: 3 to 7 Days</div>
              </div>

              {/* Stage 2 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden">
                <span className="absolute -top-3 -right-3 text-6xl font-display font-black text-slate-100 select-none">
                  02
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 font-bold text-sm">
                    2
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    MVD Invitation Issuance in Russia
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The Russian corporate employer submits the candidate&apos;s verified passport dossier to the local territorial department of the Ministry of Internal Affairs (МВД России). The official Yellow Security Paper or Electronic Telex invitation is approved and dispatched.
                </p>
                <div className="text-[11px] font-bold text-teal-700">Timeline: 20 to 35 Calendar Days</div>
              </div>

              {/* Stage 3 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden">
                <span className="absolute -top-3 -right-3 text-6xl font-display font-black text-slate-100 select-none">
                  03
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-bold text-sm">
                    3
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    VFS Russia Consular Stamping
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Candidate dossier is submitted at VFS Russia / Russian Embassy in New Delhi, Mumbai, Kolkata, or Chennai with certified HIV negative certificate, original passport, and photos. The official single-entry 90-day National Work Visa is stamped onto the passport.
                </p>
                <div className="text-[11px] font-bold text-amber-700">Timeline: 5 to 10 Working Days</div>
              </div>

              {/* Stage 4 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden">
                <span className="absolute -top-3 -right-3 text-6xl font-display font-black text-slate-100 select-none">
                  04
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-sm">
                    4
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Flight, Arrival &amp; Migration Card
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pre-departure briefing and flight dispatch to Moscow (SVO/DME), St. Petersburg, or regional airports. Candidate receives the official stamped white Migration Card (Миграционная карта) at Russian border control. Company representative welcomes candidates.
                </p>
                <div className="text-[11px] font-bold text-emerald-700">Timeline: Day of Arrival</div>
              </div>

              {/* Stage 5 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden">
                <span className="absolute -top-3 -right-3 text-6xl font-display font-black text-slate-100 select-none">
                  05
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 font-bold text-sm">
                    5
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Sakharovo Biometrics &amp; Green Card
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Within 30 days of arrival, candidate visits Sakharovo Migration Center (ММЦ Сахарово) or regional MVD center for mandatory medical screening (HIV, chest X-ray, drug panel) and state fingerprinting (Дактилоскопия) under Law 274-FZ to obtain the official Green Card.
                </p>
                <div className="text-[11px] font-bold text-teal-700">Timeline: Within 10 to 20 Days</div>
              </div>

              {/* Stage 6 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden">
                <span className="absolute -top-3 -right-3 text-6xl font-display font-black text-slate-100 select-none">
                  06
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-bold text-sm">
                    6
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Multi-Entry Visa &amp; Tax Setup
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Local MVD extends the 90-day visa into a 1-year or 3-year multiple-entry work visa. Employer issues the Individual Taxpayer Number (ИНН) and State Pension Insurance Certificate (СНИЛС). Russian corporate bank account (Mir/VTB/Sberbank) opened for wage transfers.
                </p>
                <div className="text-[11px] font-bold text-amber-700">Timeline: Final Onboarding</div>
              </div>
            </div>
          </section>

          {/* ── Section 5: 2026 Salary Matrix & Trade Breakdown ── */}
          <section id="salary-matrix" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaMoneyBillWave className="w-3.5 h-3.5 text-emerald-600" />
              Section 5: 2026 Ruble-to-INR Salary Matrix &amp; Key Trade Demands
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Verified 2026 Russian Salary Scales for Indian Technicians &amp; Specialists
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed">
              Salaries in Russia have risen substantially due to intense domestic industrial hiring competitions. Most industrial employers provide <strong>free company hostel/camp accommodation</strong> and subsidized cafeteria meals, allowing workers to save up to 80%–85% of their total gross earnings:
            </p>

            {/* Comprehensive Table */}
            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white uppercase text-[11px] font-bold tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Trade / Professional Role</th>
                    <th className="px-5 py-4">Monthly Pay (RUB)</th>
                    <th className="px-5 py-4">Approx. In-Hand (INR)</th>
                    <th className="px-5 py-4">Overtime &amp; Perks</th>
                    <th className="px-5 py-4">Employer Housing &amp; Meals</th>
                    <th className="px-5 py-4">Top Russian Hubs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      6G TIG / MIG Industrial Welder
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      130,000 – 210,000 RUB
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      ₹1,20,000 – ₹1,95,000
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-600">
                      1.5x–2.0x OT Rate (15–30k RUB extra)
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-emerald-700">
                      Free Shared Flat + 3 Meals
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">
                      St. Petersburg, Nizhny Novgorod
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      CNC Machine Programmer / Operator
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      120,000 – 190,000 RUB
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      ₹1,10,000 – ₹1,75,000
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-600">
                      Performance bonuses for precision
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-emerald-700">
                      Free Company Hostel
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">
                      Ekaterinburg, Chelyabinsk, Perm
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      Heavy Equipment / Crawler Crane Driver
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      110,000 – 175,000 RUB
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      ₹1,00,000 – ₹1,60,000
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-600">
                      High weekend rotation allowances
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-emerald-700">
                      Free On-Site Camp + Food
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">
                      Moscow Metro Projects, Kazan
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      Structural Steel Fabricator &amp; Fitter
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      100,000 – 160,000 RUB
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      ₹92,000 – ₹1,48,000
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-600">
                      Production quota incentives
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-emerald-700">
                      Free Shared Apartment
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">
                      Samara, Rostov-on-Don, Ufa
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      Industrial &amp; Marine Electrician
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      110,000 – 170,000 RUB
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      ₹1,00,000 – ₹1,58,000
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-600">
                      Shift differential (+20% night)
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-emerald-700">
                      Free Company Housing
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">
                      Vladivostok Shipyards, SPb
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      Oil &amp; Gas Pipeline Specialist (Siberia)
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      160,000 – 260,000 RUB
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      ₹1,50,000 – ₹2,40,000
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-600">
                      Northern climatic multiplier (Северные)
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-emerald-700">
                      100% Free Full Camp Board
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">
                      Tyumen, Yamal, Khanty-Mansiysk
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      Indian Tandoor / Curry Master Chef
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      95,000 – 165,000 RUB
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      ₹88,000 – ₹1,52,000
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-600">
                      Tips &amp; banquet bonuses
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-emerald-700">
                      Free Room + Duty Meals
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">
                      Moscow, Saint Petersburg, Sochi
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      Senior Software / IT Engineer (HQS Track)
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      250,000 – 450,000+ RUB
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      ₹2,30,000 – ₹4,15,000+
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-600">
                      Flat 13% tax, annual tech bonuses
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-slate-600">
                      Relocation allowance provided
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">
                      Moscow (Skolkovo), SPb Tech Parks
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-[11px] text-slate-500 italic">
              * Note: Conversion estimates calculated based on realistic prevailing institutional exchange rates (~1 RUB ≈ 0.92–0.96 INR). Individual earnings vary by certified skill classification, overtime shifts, and regional climatic coefficients.
            </div>
          </section>

          {/* ── Section 6: Russian Labor Code (TK RF) ─────────── */}
          <section id="labour-law" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaScaleUnbalanced className="w-3.5 h-3.5 text-emerald-600" />
              Section 6: Russian Labor Code (Трудовой кодекс РФ - ТК РФ) Protections
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Statutory Worker Rights &amp; Legal Guarantees Under Russian Federal Law
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Contrary to common misconceptions, the Russian Federation possesses one of the world&apos;s most stringent and employee-protective statutory labor frameworks. The <strong>Labor Code of the Russian Federation (Трудовой кодекс Российской Федерации - ТК РФ)</strong> applies equally to foreign citizens working on valid work permits, prohibiting wage discrimination, arbitrary terminations, or uncompensated labor.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <FaClock className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Working Hours &amp; Overtime Limits (Articles 91 &amp; 99)
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Normal working hours must not exceed <strong>40 hours per week</strong>. Overtime work is strictly voluntary, cannot exceed 4 hours over two consecutive days or 120 hours per calendar year, and must be compensated at <strong>1.5x for the first two hours</strong> and <strong>2.0x for subsequent hours</strong> (Article 152). Weekend and state holiday work must be compensated at double rate or granted a replacement rest day.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                    <FaCalendarDays className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Mandatory Paid Annual Leave (Article 115)
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every employee is entitled to a minimum of <strong>28 calendar days of paid annual vacation</strong> per work year. Employees working in northern regions or hazardous manufacturing trades receive statutory supplementary paid vacation ranging from an additional 7 to 24 days.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                    <FaHospital className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Medical Insurance (ДМС / ОМС) &amp; Sick Pay (Article 183)
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Employers are legally obligated to provide a <strong>Voluntary Medical Insurance (ДМС)</strong> policy covering polyclinic consultations, diagnostics, and emergency inpatient hospitalization from Day 1. Under Article 183, certified medical sickness absence is financially subsidized through the Social Insurance Fund.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <FaHelmetSafety className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Occupational Safety &amp; Winter PPE (Article 212)
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Russian enterprises must issue free, certified Personal Protective Equipment (PPE) conforming to state GOST standards. For outdoor or industrial roles in sub-zero winter temperatures, companies furnish high-grade thermal jackets, insulated safety boots, and heated rest facilities with warm tea stations.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 7: Cost of Living & Rupee Transfers ─────── */}
          <section id="banking-remittance" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaCoins className="w-3.5 h-3.5 text-emerald-600" />
              Section 7: Cost of Living, Banking Corridors &amp; Rupee Remittance
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Real In-Hand Savings &amp; Seamless Ruble-to-Rupee Remittances
            </h2>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  A central question for Indian workers considering overseas deployment is: <em>&ldquo;How much will I actually save, and how do I send money back to my family in India safely?&rdquo;</em>
                </p>
                <p>
                  Because Russian industrial employers in construction, welding, and manufacturing contractually cover <strong>100% of housing costs</strong> and provide subsidized canteen food, living expenses are extraordinarily low compared to Western Europe or the Gulf. A disciplined trade technician earning 130,000 RUB gross per month typically spends less than 15,000 to 20,000 RUB on personal items, SIM cards, and supplemental groceries, sending over <strong>₹95,000 to ₹1,10,000 INR</strong> back home each month.
                </p>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
                  <h3 className="font-display font-bold text-slate-900 text-sm flex items-center gap-2">
                    <FaBuildingColumns className="w-4 h-4 text-emerald-600" />
                    How Does the Indo-Russian Banking Remittance Corridor Work?
                  </h3>
                  <p className="text-xs text-slate-600">
                    Following bilateral financial accords between New Delhi and Moscow, direct settlement mechanisms operate without reliance on SWIFT:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Special Rupee Vostro Accounts (SRVA):</strong> Authorized Indian banks (State Bank of India, UCO Bank, IndusInd) maintain active settlement accounts with major Russian banks (Sberbank, VTB, Alfa-Bank).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>VTB Bank New Delhi Branch:</strong> VTB Bank maintains a full commercial presence at Barakhamba Road, New Delhi, enabling institutional corporate and retail rupee-ruble transfers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Mir-to-UPI / Account Transfers:</strong> Funds transfer directly from Russian salary accounts to Indian savings accounts within 24 to 48 hours with minimal foreign exchange margins.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Monthly Cost Breakdown Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                  <h3 className="font-display font-bold text-slate-900 text-base border-b border-slate-100 pb-3">
                    Typical Monthly Budget (Industrial Technician)
                  </h3>

                  <div className="space-y-3 text-xs text-slate-600">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Monthly Gross Pay (e.g. Welder):</span>
                      <span className="font-bold text-emerald-700">140,000 RUB (~₹1,30,000)</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Personal Income Tax (НДФЛ 13%):</span>
                      <span className="font-bold text-slate-700">-18,200 RUB</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Company Accommodation:</span>
                      <span className="font-bold text-emerald-600">0 RUB (100% Free)</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Food &amp; Indian Groceries:</span>
                      <span className="font-bold text-slate-700">-12,000 RUB</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Local Metro / Transport (Troika):</span>
                      <span className="font-bold text-slate-700">-2,800 RUB</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>High-Speed 4G/5G SIM &amp; Data:</span>
                      <span className="font-bold text-slate-700">-800 RUB</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Personal Misc &amp; Toiletries:</span>
                      <span className="font-bold text-slate-700">-3,000 RUB</span>
                    </div>

                    <div className="flex justify-between pt-2 text-sm font-bold bg-emerald-50/80 p-3 rounded-xl border border-emerald-200">
                      <span className="text-emerald-950">Net Monthly INR Savings:</span>
                      <span className="text-emerald-800">₹95,000 – ₹1,05,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 8: Sakharovo Biometrics & Green Card ───── */}
          <section id="biometrics-sakharovo" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaFingerprint className="w-3.5 h-3.5 text-emerald-600" />
              Section 8: Mandatory Medicals, Sakharovo Biometrics &amp; Green Card (Law 274-FZ)
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Post-Arrival Legal Formalities: Sakharovo Migration Center &amp; Law No. 274-FZ
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Under <strong>Federal Law No. 274-FZ</strong>, all foreign citizens arriving in the Russian Federation on work visas must undergo three mandatory procedures within <strong>30 calendar days of arrival</strong>. For candidates deployed in Moscow and Moscow Region, these procedures are centralized at the state-of-the-art <strong>Multifunctional Migration Center Sakharovo (ММЦ Сахарово)</strong>, while candidates in other federal subjects visit the respective regional MVD migration branches.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <FaStethoscope className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  1. Comprehensive Medical Screening
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Screening includes blood testing for HIV/AIDS and syphilis, digital chest fluorography for pulmonary tuberculosis, physical dermatology check for Hansen&apos;s disease (leprosy), and certified urine screening for narcotic and psychotropic drugs.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                  <FaFingerprint className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  2. State Fingerprinting (Дактилоскопия)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Full 10-finger biometric digital electronic scanning recorded in the centralized state database of the Ministry of Internal Affairs. This is a one-time procedure for the entire duration of your lawful stay in Russia.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                  <FaCertificate className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  3. Green Card Issuance (Дактокарта)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Upon passing medicals and biometrics, the candidate receives the official laminated plastic <strong>Dactyloscopic Card (&ldquo;Green Card&rdquo;)</strong>, valid for 10 years. This card serves as statutory proof of full federal migration compliance.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 9: MEA India Anti-Scam Advisory ─────────── */}
          <section id="scam-warning" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-200 px-3.5 py-1 text-xs font-bold text-rose-800">
              <FaTriangleExclamation className="w-3.5 h-3.5 text-rose-600" />
              Section 9: Crucial MEA India Anti-Scam Advisory &amp; Ethical Recruitment
            </div>

            <div className="rounded-3xl border-2 border-rose-300 bg-rose-50/50 p-6 sm:p-8 space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="h-12 w-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <FaShieldHalved className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 tracking-tight">
                    Official Advisory: Protecting Indian Youth from Fraudulent Overseas Recruitment
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 mt-1 font-medium">
                    WorkWise Visa strongly endorses the public safety notices issued by the Ministry of External Affairs (MEA), Government of India, regarding unethical agent rings.
                  </p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  Unscrupulous unregistered sub-agents have misled Indian job seekers by promising civilian &ldquo;army helper&rdquo; or &ldquo;camp maintenance&rdquo; jobs, only to channel workers into high-risk military auxiliary roles or conflict zones. <strong>WorkWise Visa maintains an absolute, zero-tolerance policy against any military or defense-related recruitment.</strong>
                </p>
                <p>
                  Our placements in Russia are <strong>100% civilian, commercial, and industrial</strong>, located exclusively within established, peaceful economic centers (Moscow, Saint Petersburg, Kazan, Tyumen, Ekaterinburg, Vladivostok). We conduct exhaustive due diligence on every hiring enterprise, validating corporate tax IDs (ИНН), state incorporation registries (ОГРН), and physical operational factory sites before submitting candidate files.
                </p>
              </div>

              {/* 4 Red Flags to Avoid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                <div className="rounded-2xl border border-rose-200 bg-white p-4 space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-xs">
                    <FaBan className="w-4 h-4 text-rose-600 shrink-0" />
                    1. Working on E-Visas
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Any agent claiming you can work on a Russian Electronic Visa (E-visa) is committing fraud. E-visas strictly forbid paid employment.
                  </p>
                </div>

                <div className="rounded-2xl border border-rose-200 bg-white p-4 space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-xs">
                    <FaBan className="w-4 h-4 text-rose-600 shrink-0" />
                    2. Unverified MVD Letters
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Always verify that the MVD invitation exists on the official federal system and carries a verifiable employer ИНН/ОГРН code.
                  </p>
                </div>

                <div className="rounded-2xl border border-rose-200 bg-white p-4 space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-xs">
                    <FaBan className="w-4 h-4 text-rose-600 shrink-0" />
                    3. Vague &ldquo;Camp Helper&rdquo; Roles
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Reject offers lacking explicit industrial job descriptions, designated manufacturing addresses, or corporate entity names.
                  </p>
                </div>

                <div className="rounded-2xl border border-rose-200 bg-white p-4 space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-xs">
                    <FaBan className="w-4 h-4 text-rose-600 shrink-0" />
                    4. Passport Confiscation
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Under Indian and Russian law, holding another person&apos;s passport is illegal. Candidates always maintain custody of their original documents.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 10: Permanent Residency (РВП / ВНЖ) ─────── */}
          <section id="permanent-residency" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaAward className="w-3.5 h-3.5 text-emerald-600" />
              Section 10: Long-Term Settlement: From Work Visa to Permanent Residency (ВНЖ)
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Long-Term Career Horizons: RVP, Permanent Residency (ВНЖ) &amp; Citizenship
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                For ambitious technicians, software engineers, and managers seeking permanent settlement in Eurasia, the Russian Federation offers well-defined statutory pathways to permanent residency:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <span className="text-xs font-bold uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Step 1: RVP (РВП)
                </span>
                <h3 className="font-display font-bold text-slate-900 text-lg">
                  Temporary Residence (Разрешение на временное проживание)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A 3-year stamp granted either under municipal quotas or non-quota exemptions. RVP holders no longer require work permits or employer-sponsored invitations to work within their registered federal subject.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <span className="text-xs font-bold uppercase text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
                  Step 2: VNZh (ВНЖ)
                </span>
                <h3 className="font-display font-bold text-slate-900 text-lg">
                  Permanent Residency (Вид на жительство)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Issued indefinitely (blue booklet). Grants unrestricted freedom to live and work across any region in Russia, access state pension programs, free municipal healthcare, and travel freely without visas.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <span className="text-xs font-bold uppercase text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
                  Fast Track: HQS Route
                </span>
                <h3 className="font-display font-bold text-slate-900 text-lg">
                  Direct Indefinite VNZh for HQS Specialists
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Under updated federal legislation, Highly Qualified Specialists (HQS) and their family members who have worked in Russia for 2+ years on an HQS visa can bypass the RVP stage and obtain indefinite ВНЖ directly.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 11: Exhaustive FAQ Accordion ───────────── */}
          <section id="faqs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaBriefcase className="w-3.5 h-3.5 text-emerald-600" />
              Section 11: Comprehensive Frequently Asked Questions (FAQs)
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Answering Every Critical Search Intent Query for Indian Job Seekers
            </h2>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Q1: How can an Indian citizen get a legitimate Russia work visa in 2026?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To legally obtain a Russian work visa, an Indian citizen must secure a verified job offer from an authenticated Russian enterprise that holds government quota allocations. The employer files an application with the territorial migration division of the Ministry of Internal Affairs (ГУВМ МВД РФ) to issue an official MVD Work Invitation. Once issued, the candidate submits their original passport, certified HIV negative certificate, and visa dossier to VFS Russia or the Russian Embassy in New Delhi (or Consulates General in Mumbai, Kolkata, or Chennai). WorkWise Visa manages the entire end-to-end process from trade assessment to deployment.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Q2: How do I know if my Russian MVD invitation is genuine or fake?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  An authentic MVD invitation is issued either on official yellow guilloche watermarked paper or transmitted electronically with a high-resolution 2D barcode and digital signature (ЭЦП). It must contain the employer&apos;s verified Russian Tax Identification Number (ИНН) and State Registration Number (ОГРН), the candidate&apos;s full name in Cyrillic, and the explicit travel purpose &ldquo;РАБОТА ПО НАЙМУ&rdquo;. You can verify whether the employer is a legitimate active Russian entity on the official Russian Federal Tax Service registry at <em>egrul.nalog.ru</em>. WorkWise Visa validates every document before consular submission.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Q3: What is the processing fee for a Russian work visa in India?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Official consular visa fees charged by the Russian diplomatic missions in India for standard processing (single-entry 90-day work visa) range from ₹6,400 to ₹12,800 INR, while urgent express processing (3 working days) ranges from ₹12,800 to ₹25,600 INR. VFS Global charges an additional administrative processing fee of approximately ₹1,800 to ₹2,200 INR. The employer covers the MVD state quota fees in Russia. Candidates also incur minor pre-departure medical testing costs for mandatory HIV/AIDS screening at an authorized laboratory.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Q4: Do Indian workers need to know the Russian language?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For Highly Qualified Specialists (HQS), Russian language exams are 100% exempted by law. For standard blue-collar workers on quota permits (welders, heavy drivers, construction personnel), basic Russian comprehension is tested during migration center registration. In industrial manufacturing clusters and shipyard projects where organized Indian manpower teams are placed, Russian enterprises deploy bilingual English-Russian supervisors, foremen, and on-site translators to manage technical instructions smoothly while workers learn practical shopfloor terminology.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Q5: Can Indian workers with ECR passports travel to Russia for work?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>Yes.</strong> Holding an ECR (Emigration Check Required) passport does not bar you from working in Russia. Russia is not among the 18 notified ECR-clearance countries specified under the Indian Emigration Act (which are predominantly GCC/Gulf nations). Therefore, candidates travelling on a legitimate Russian National Type-D Work Visa do not require Protector of Emigrants (POE) e-Migrate clearance before boarding their flight from Indian international airports.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Q6: What is the winter weather like in Russia and how do workers manage sub-zero climates?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Russian winters are cold, with temperatures in European Russia (Moscow, St. Petersburg) typically ranging between -5°C and -15°C, while Siberian and northern pipeline zones can dip below -25°C. However, all indoor work premises, factory workshops, metro stations, buses, and corporate dormitories are equipped with heavy central radiator heating maintaining 20°C–22°C warmth year-round. Russian industrial employers are legally mandated under Article 212 of the Labor Code to furnish certified winter protective parkas, thermal underwear, insulated safety boots, and face protection.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Q7: Can I switch employers in Russia if my contract terminates?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For standard work permit holders, your visa is tied to the specific employing corporate entity named on your MVD invitation. If you leave your employer, your work permit must be transferred or re-issued under a new employer&apos;s quota within a statutory grace period, or you must exit and re-enter on a new MVD invitation. For Highly Qualified Specialists (HQS), if an employment contract is terminated early, the specialist has 30 business days to secure a new qualifying HQS contract and transfer their permit without having to depart Russia.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Q8: How does WorkWise Visa guarantee 100% legal protection against recruitment fraud?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  WorkWise Visa operates strictly through physical corporate offices in <Link href="/locations/noida" className="text-emerald-700 font-bold underline">Noida HQ</Link> and <Link href="/locations/patna" className="text-emerald-700 font-bold underline">Patna Branch</Link>. We work exclusively with certified Russian enterprises that provide direct MVD quotas, verifiable corporate registration (ИНН), written bilingual contracts, and free corporate accommodation. We never deal with military auxiliary roles, conflict zones, or informal subcontracting rings.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 12: Related Destination Guides ────────── */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Global Career Horizons</span>
                <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                  Explore Related Overseas Work Visa Master Guides
                </h2>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/countries/germany"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full inline-block">Western Europe</span>
                  <h3 className="font-display font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    Germany Work Visa &amp; Opportunity Card 2026
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Opportunity Card (Chancenkarte), EU Blue Card, €2,800+ trade wage scale, ZAB recognition, and fast-track European PR.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 mt-4">
                  Read Full Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/countries/uae"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full inline-block">Gulf Cooperation Council</span>
                  <h3 className="font-display font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    UAE &amp; Dubai Employment Visa Guide
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Tax-free earnings, MOHRE work contracts, free employer accommodation, and rapid 2 to 3 week visa stamping.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 mt-4">
                  Read Full Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/countries/saudi-arabia"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full inline-block">Vision 2030 Megaprojects</span>
                  <h3 className="font-display font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    Saudi Arabia Qiwa &amp; Iqama Guide
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    NEOM, Red Sea, Qiwa contracts, Wafid GAMCA medicals, heavy machine operation, and high-saving overseas jobs.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 mt-4">
                  Read Full Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </section>

          {/* ── Section 13: CTA & Office Directory ─────────────── */}
          <section className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400">
                Launch Your Russian Career with WorkWise Visa
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight">
                Ready to Apply for High-Earning Civilian Industrial Jobs in Russia?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect directly with WorkWise Visa&apos;s Eurasian consular directors. From technical trade testing in Delhi NCR to verified MVD Yellow Invitations, VFS consular stamping, Sakharovo green card clearance, and Rupee-Ruble bank setup — we manage your complete deployment with 100% legal compliance.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20want%20to%20evaluate%20my%20profile%20for%20verified%20Russia%20Work%20Visas%20and%20Industrial%20Jobs!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition-all"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  Chat with Russia Placement Desk
                </a>

                <Link
                  href="/locations"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all"
                >
                  <FaLocationDot className="w-4 h-4 text-emerald-400" />
                  Visit Branches in Patna &amp; Noida
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
