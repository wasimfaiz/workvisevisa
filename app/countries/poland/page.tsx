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
  FaGlobe,
  FaPhone,
  FaFileLines,
  FaUtensils,
  FaBed,
  FaBus,
  FaUsers,
  FaIdCard,
  FaPiggyBank,
  FaCalculator,
  FaCloudSun,
} from "react-icons/fa6";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.workwisevisa.com";

export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Poland Work Visa & Jobs Guide 2026: Voivodeship Permit (Typ A), Type D Visa & Salaries | WorkWise Visa",
  description:
    "Definitive 2026 statutory master guide to Poland work visas for Indian skilled workers, civil trades, 6G welders, CNC machinists, heavy drivers, and factory mechanics. Learn Voivodeship Work Permits (Zezwolenie Typ A), National Type D visa on e-Konsulat, 4,300 PLN minimum wage, Karta Pobytu single permits, free housing, and scam verification.",
  keywords: [
    "Poland work visa 2026",
    "Poland work visa for Indian citizens",
    "Poland work permit process in India",
    "Poland Voivodeship work permit Zezwolenie typ A",
    "Poland National Type D visa e-konsulat",
    "Poland Karta Pobytu temporary residence card",
    "Embassy of Poland New Delhi visa",
    "Poland jobs for Indian welders machinists drivers",
    "Poland minimum wage 2026 PLN EUR INR",
    "Cost of living Poland Warsaw Katowice vs savings INR",
    "WorkWise Visa Poland recruitment partner",
    "How to get work permit in Poland from India",
    "Poland shipyard welding jobs Gdansk",
    "Act on Promotion of Employment and Foreigners Poland",
    "PCC MEA Apostille for Poland visa",
    "Poland Schengen work visa rules",
  ],
  alternates: {
    canonical: `${BASE_URL}/countries/poland`,
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
    title: "Poland Work Visa & Jobs Guide 2026: Voivodeship Permit (Typ A), Type D Visa & Salaries | WorkWise Visa",
    description:
      "Comprehensive statutory manual for Indian professionals, skilled tradespeople, 6G welders, CNC machinists, drivers, and engineers migrating to Poland under the Act on Foreigners and the Voivodeship Office (Urząd Wojewódzki) framework.",
    url: `${BASE_URL}/countries/poland`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: `${BASE_URL}/images/poland-work-visa-guide.webp`,
        width: 1200,
        height: 630,
        alt: "Poland Work Visa & Employment Master Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poland Work Visa & Jobs Guide 2026: Voivodeship Permit (Typ A), Type D Visa & Salaries | WorkWise Visa",
    description:
      "Complete 2026 Poland work visa guide for Indian workers. Explore Voivodeship Permits (Zezwolenie Typ A), National Type D visas via e-Konsulat, 4,300 PLN minimum wage, Karta Pobytu single permits, free company accommodation, and New Delhi Embassy stamping.",
    images: [`${BASE_URL}/images/poland-work-visa-guide.webp`],
  },
};

export default function PolandCountryPage() {
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
        name: "Poland",
        item: `${BASE_URL}/countries/poland`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Poland Work Visa & Skilled Employment Guide 2026: Voivodeship Work Permit (Zezwolenie Typ A), National Type D Process, Salary Scales & Schengen Compliance",
    description:
      "Authoritative statutory manual for Indian workers, industrial technicians, welders, CNC operators, and heavy drivers migrating to the Republic of Poland under the Act on Foreigners and the Regional Voivodeship Office framework.",
    image: `${BASE_URL}/images/poland-work-visa-guide.webp`,
    author: {
      "@type": "Organization",
      name: "WorkWise European Consular & Placement Desk",
      url: `${BASE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "WorkWise Visa",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/workwise_logo.webp`,
      },
    },
    datePublished: "2026-03-01T09:00:00+02:00",
    dateModified: "2026-11-13T00:00:00+02:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/countries/poland`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Poland Voivodeship Work Permit (Zezwolenie na Pracę Typ A) and Type D Visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Voivodeship Work Permit (Zezwolenie Typ A) is the official statutory authorization issued by the Regional Voivode (Urząd Wojewódzki) where the sponsoring Polish company is registered. It authorizes a non-EU citizen to work legally in Poland for up to 3 years. Once the Voivode issues the official work permit decision, the candidate applies for a National Long-Stay Employment Visa (Category D, code D05a or D06) through e-Konsulat and attends VFS Global India for consular biometric appointment and passport foil stamping.",
        },
      },
      {
        "@type": "Question",
        name: "What is the statutory minimum wage and typical salary for Indian workers in Poland in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Effective 2026, Poland's statutory national gross minimum wage is 4,300+ Polish Złoty (PLN) per month (~€1,000 EUR / ~₹92,000 INR). Skilled trade roles command higher market earnings: certified 6G pipe welders earn 5,500 to 8,000 PLN net (₹1,20,000 to ₹1,75,000 INR), CNC machine operators earn 4,800 to 6,800 PLN net (₹1,05,000 to ₹1,48,000 INR), heavy commercial drivers (Cat C/CE) earn 6,000 to 9,000+ PLN net (₹1,30,000 to ₹1,95,000 INR), and civil construction trades (masons, carpenters, steel fixers) earn 4,500 to 6,000 PLN net. Sponsoring employers provide free or subsidized furnished company apartments and daily site transit.",
        },
      },
      {
        "@type": "Question",
        name: "Is Poland part of the European Schengen Area, and can I travel across Europe with a Polish work visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Republic of Poland is a core member of the European Schengen Area. Holding a valid Polish National Type D visa or Temporary Residence Card (Karta Pobytu) grants the legal privilege to travel visa-free across all 29 Schengen member states for up to 90 days in any 180-day period for tourism and leisure. However, salaried employment is legally permitted strictly with your sponsoring Polish employer. Working illegally in Germany, the Netherlands, or France on a Polish visa leads to immediate arrest, deportation, and multi-year Schengen SIS bans.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to process a Poland Voivodeship work permit and Type D visa from India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The complete timeline from candidate trade testing to flight deployment generally takes 8 to 12 weeks: 4 to 6 weeks for the Regional Voivodeship Office (Urząd Wojewódzki) to issue the official Zezwolenie Typ A work permit, followed by 3 to 4 weeks for e-Konsulat / VFS Global appointment scheduling and passport visa sticker issuance by the Embassy of Poland in New Delhi or Consulate General in Mumbai.",
        },
      },
      {
        "@type": "Question",
        name: "Can Indian citizens holding ECR (non-matriculation) passports work in Poland?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Poland is not on the list of 18 ECR countries under the Indian Emigration Act. Indian citizens holding either ECR or ECNR passports are fully eligible to apply and travel on valid Polish National Type D employment visas without requiring Protector of Emigrants (PoE) clearance.",
        },
      },
      {
        "@type": "Question",
        name: "Is Police Clearance Certificate (PCC) with MEA Hague Apostille mandatory for Poland?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Because Poland is an active member of the 1961 Hague Apostille Convention, applicants must secure an official Police Clearance Certificate (PCC) issued by the Regional Passport Office (PSK/RPO) in India, bearing an authentic Hague Apostille sticker from the Ministry of External Affairs (MEA), CPV Division, New Delhi. The apostilled PCC must be officially translated into Polish by a sworn certified translator (Tłumacz Przysięgły).",
        },
      },
      {
        "@type": "Question",
        name: "Does the Polish employer provide free food and accommodation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In nearly all licensed manufacturing, heavy fabrication, construction, and logistics contracts, employers provide free or highly subsidized furnished company housing (typically 2 to 4 workers per room with central heating, clean bathrooms, and kitchen facilities) plus free daily transport to the job site. Food is self-cooked in apartment kitchens, with monthly groceries costing approximately 700 to 950 PLN (~₹15,000 to ₹21,000 INR).",
        },
      },
      {
        "@type": "Question",
        name: "Can a foreign worker switch employers in Poland after arrival?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Under the Polish Act on Foreigners, a third-country worker can legally transfer to a new employer. If holding a Voivodeship permit, the new employer must apply for a new Zezwolenie Typ A with the Voivode. If holding a Temporary Residence and Work Permit (Karta Pobytu - Single Permit), the worker submits an application to modify the decision within 15 working days of contract termination, allowing seamless legal transition without leaving Poland.",
        },
      },
      {
        "@type": "Question",
        name: "What are the income tax and social insurance rates in Poland in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Polish tax legislation (Polski Ład framework), employment income up to 120,000 PLN per year (~€28,000 EUR) is taxed at a low rate of 12% (with an annual tax-free allowance of 30,000 PLN), and 32% on income above that threshold. Mandatory social security contributions (ZUS - pension, disability, sickness) and public health insurance (NFZ) total approximately 13.7% for the employee, granting complete free access to public state hospitals, specialists, and workplace injury coverage.",
        },
      },
      {
        "@type": "Question",
        name: "How can candidates spot and avoid fake Polish work permit scams in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common scam tactics include: fake Voivodeship permit PDF documents with forged Voivode official stamps that cannot be verified against the regional Urząd Wojewódzki registry, fraudulent promises of 'instant 2-week Schengen work visas', demands for ₹7 to ₹11 Lakhs in cash, and job offers from shell companies not registered in the National Court Register (KRS) or CEIDG. Always verify employer KRS and NIP tax IDs on official state registries (ekrs.ms.gov.ge).",
        },
      },
      {
        "@type": "Question",
        name: "Is IELTS or Polish language proficiency required for a Poland work visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. There is zero IELTS or English exam requirement, and no Polish language test is mandated for blue-collar craftsmen, technicians, or factory machine operators. Workplace instructions are conducted in English, Hindi with bilingual site foremen, or through international technical blueprints.",
        },
      },
      {
        "@type": "Question",
        name: "How can Indian workers send their monthly salary home from Poland?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Employers deposit monthly salaries directly into the worker's personal Polish bank account (such as PKO Bank Polski, Bank Pekao, Santander, or mBank). Workers remit funds home to Indian family accounts (SBI, HDFC, PNB) via international bank SWIFT wire transfers, Western Union, MoneyGram, or mobile banking apps. Funds arrive in Indian bank accounts within 24 to 48 hours.",
        },
      },
      {
        "@type": "Question",
        name: "What is Karta Pobytu and when do workers apply in Poland?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Karta Pobytu is the official plastic biometric Temporary Residence Card (Single Permit) issued by the Regional Voivodeship Office. Foreign workers submit their application for Karta Pobytu while working in Poland before their initial Type D visa expires. It is typically granted for 1 to 3 years, eliminating the need to renew entry visas in India and allowing unhindered Schengen travel.",
        },
      },
      {
        "@type": "Question",
        name: "Is an Indian driving license valid for driving in Poland?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An Indian commercial driving license (HTV) accompanied by an International Driving Permit (IDP) is valid for the initial 6 months of stay. Sponsoring transport and logistics companies assist commercial drivers in passing the Polish state theoretical exam at the Provincial Road Traffic Center (WORD) to convert their license into an official Polish Category C or CE European driving license.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if an employer in Poland delays salary payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the Polish Labour Code (Kodeks Pracy), wages must be paid at least once a month via bank deposit by the 10th of every month. The National Labour Inspectorate (Państwowa Inspekcja Pracy - PIP) rigorously enforces compliance. Employers who delay wages or violate working hour caps face severe financial fines and criminal prosecution. Workers can file complaints with PIP in full confidentiality.",
        },
      },
      {
        "@type": "Question",
        name: "What is the weather and winter climate like in Poland?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Poland experiences a temperate climate with four distinct seasons. Summers in Warsaw, Wrocław, and Katowice are warm and pleasant (22°C to 30°C). Winters (December through February) are cold, with temperatures averaging between -5°C and 3°C with regular snowfall. Sponsoring employers provide centralized heating in company apartments and issue high-grade winter thermal parkas, insulated gloves, and waterproof safety boots on job sites.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Obtain a Poland Work Visa & Voivodeship Permit (Zezwolenie Typ A) from India in 2026",
    description:
      "A complete 6-stage statutory roadmap for Indian skilled workers, technicians, welders, and drivers to secure Voivodeship work permits, New Delhi Embassy Type D visa stamping, and Karta Pobytu residence cards in Poland.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Trade Skill Evaluation & Bilingual Employment Contract",
        text: "Candidate completes practical trade testing (pipe welding coupons, CNC operation, heavy vehicle trial) at authorized WorkWise Visa centers and signs a bilingual Polish-English employment contract.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Voivodeship Work Permit (Zezwolenie Typ A) Issuance",
        text: "The licensed Polish sponsoring employer submits the application to the Regional Voivodeship Office (Urząd Wojewódzki) and secures the official Voivodeship Work Permit (Zezwolenie Typ A) valid for up to 3 years.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Police Clearance Certificate (PCC) & MEA Hague Apostille",
        text: "Applicant secures an official PSK Police Clearance Certificate in India, legalizes it with an MEA Hague Apostille sticker, and obtains sworn certified translation into Polish.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "National Type D Employment Visa on e-Konsulat & VFS Stamping",
        text: "Candidate registers on e-Konsulat, attends the scheduled biometric appointment at VFS Global India, and receives the official National Type D visa foil in their passport from the Embassy of Poland in New Delhi.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Flight to Warsaw Chopin Airport (WAW) or Katowice (KTW)",
        text: "Candidate boards flight landing at Warsaw or Katowice airport, clears Schengen border control with original contract, stamped Type D visa, and accommodation letter, and receives company airport pickup.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Voivodeship Biometric Registration & Karta Pobytu Single Permit",
        text: "While working in Poland, employer HR assists the worker in submitting the application for a Temporary Residence and Work Card (Karta Pobytu) at the local Voivodeship Office for multi-year legal residence.",
      },
    ],
  };

  return (
    <>
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
              <span className="text-emerald-300 font-bold">Poland (Rzeczpospolita Polska - European Schengen Hub)</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Headlines & Key Stats */}
              <div className="lg:col-span-7 space-y-6">
                {/* Government & Authority Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Official 2026 Poland Voivodeship (Typ A) &amp; Karta Pobytu Gateway
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                  Poland Work Visa &amp; Skilled Jobs Guide{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                    2026
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  The complete, practical ground-reality manual for Indian certified 6G pipe welders, CNC machinists, heavy commercial drivers, civil construction trades, and factory mechanics migrating to Central Europe&apos;s leading industrial powerhouse. Real facts on official{" "}
                  <strong className="font-bold text-white">Voivodeship Work Permits (Zezwolenie Typ A)</strong>, the{" "}
                  <strong className="font-bold text-emerald-300">4,300+ PLN statutory minimum wage</strong>, Karta Pobytu single permits, employer-funded apartments, 12% progressive tax floor, and visa stamping via the Embassy of Poland in New Delhi.
                </p>

                {/* Key Benefits Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaMoneyBillWave className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">4,300+ PLN Min Wage</div>
                      <div className="text-[10px] text-slate-400">~€1,000 / ₹92k Base Pay</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaCoins className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">12% Base Income Tax</div>
                      <div className="text-[10px] text-slate-400">30k PLN Tax-Free Band</div>
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
                    <FaHouseUser className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">100% Free Housing</div>
                      <div className="text-[10px] text-slate-400">Furnished Flat &amp; Transport</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaClock className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">8–12 Wks Processing</div>
                      <div className="text-[10px] text-slate-400">Voivodeship &amp; Type D</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaIndustry className="w-4 h-4 text-blue-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Top Industrial Hub</div>
                      <div className="text-[10px] text-slate-400">High-Tech Manufacturing</div>
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
                    <span>Browse Poland Jobs</span>
                  </Link>

                  <a
                    href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20Poland%20Work%20Permit%20(Zezwolenie%20Typ%20A)%20and%20Jobs%20for%202026."
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
                        src="https://flagcdn.com/w160/pl.png"
                        alt="Poland Flag"
                        className="h-10 w-14 object-cover rounded-xl shadow-md border border-white/25 shrink-0"
                      />
                      <div>
                        <h2 className="text-xl font-display font-extrabold text-white">Poland (Polska)</h2>
                        <p className="text-xs text-emerald-300 font-medium">Warsaw • Katowice • Gdańsk • Wrocław • Poznań</p>
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
                      <span className="font-bold text-white">Voivodeship Permit (Zezwolenie Typ A)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Consular Visa Category:</span>
                      <span className="font-bold text-emerald-300">National Type D (D05a / D06)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">In-Country Residence Card:</span>
                      <span className="font-bold text-white">Karta Pobytu (Single Permit)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Statutory Income Tax:</span>
                      <span className="font-bold text-amber-300">12% Base Personal Tax Floor</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Average Monthly In-Hand:</span>
                      <span className="font-bold text-emerald-300">4,500 – 7,500 PLN (₹95k – ₹1.60L)</span>
                    </div>

                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Permanent Residence Pathway:</span>
                      <span className="font-bold text-emerald-300">5 Continuous Years Lawful Stay</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-950/50 border border-emerald-500/30 p-3.5 text-center text-xs text-slate-300">
                    <div className="flex items-center justify-center gap-2 text-emerald-300 font-semibold mb-0.5">
                      <FaShieldHalved className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Urząd Wojewódzki &amp; Ministry of Family Approved</span>
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
              Poland Comprehensive Master Guide Directory:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#overview" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                1. Central European Powerhouse &amp; Manpower
              </a>
              <a href="#industrial-hubs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                2. Key Cities &amp; Industrial Clusters
              </a>
              <a href="#government-portals" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                3. Official Government Portals &amp; Verification
              </a>
              <a href="#visa-pathways" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                4. Zezwolenie Typ A &amp; Karta Pobytu
              </a>
              <a href="#salary-matrix" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                5. 2026 Salary Schedule &amp; Remittance Math
              </a>
              <a href="#deployment-pipeline" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                6. 6-Stage Legal Roadmap from India
              </a>
              <a href="#document-checklist" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                7. RPO PCC &amp; MEA Hague Apostille
              </a>
              <a href="#fee-schedule" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                8. Transparent Government Fee Schedule
              </a>
              <a href="#daily-life-groceries" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                9. Food, Groceries &amp; Desi Living Reality
              </a>
              <a href="#banking-remittance" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                10. Bank Accounts &amp; Sending Money to India
              </a>
              <a href="#labour-law-tax" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                11. Labour Code Protections &amp; Taxes
              </a>
              <a href="#airport-immigration" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                12. Airport Arrival (WAW/KTW) &amp; Customs
              </a>
              <a href="#scam-warning" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                13. Critical Anti-Scam Advisory &amp; Schengen Warnings
              </a>
              <a href="#faqs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                14. Frequently Asked Questions (16 FAQs)
              </a>
            </div>
          </div>
        </section>

        {/* ── Main Content Container ─────────────────────────── */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">

          {/* ── Section 1: Strategic Central European Overview ── */}
          <section id="overview" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaGlobe className="w-3.5 h-3.5 text-emerald-600" />
              Section 1: Central European Powerhouse &amp; Polish Labor Market
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Why Poland Is Central Europe&apos;s Highest-Earning Employment Corridor for Indian Technicians
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              As the sixth-largest economy in the European Union and the undisputed industrial manufacturing engine of Central Europe, <strong className="font-semibold text-slate-900">Poland</strong> offers Indian skilled tradesmen unmatched job security, higher European wages, and robust legal worker protections. From the massive Baltic shipyards of Gdańsk to the heavy automotive and chemical complexes of Katowice and Silesia, Polish industry relies heavily on international craftsmen to sustain multi-billion-Euro production schedules.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Under the <strong className="font-semibold text-slate-900">Polish Act on Foreigners</strong>, verified Polish corporations apply for an official <strong className="font-semibold text-slate-900">Voivodeship Work Permit (Zezwolenie na pracę typ A)</strong> through the Regional Voivodeship Office (Urząd Wojewódzki). Indian workers enter Poland on a National Type D employment visa and convert into a multi-year plastic <strong className="font-semibold text-slate-900">Residence Card (Karta Pobytu)</strong>, giving them complete legal status, public healthcare coverage under NFZ, and full Schengen mobility.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                  <FaBuildingColumns className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Official Voivodeship Permits (Typ A)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every legal placement operates under a verified government <strong className="font-semibold text-slate-900">Zezwolenie Typ A</strong> issued by the Regional Voivode (Urząd Wojewódzki), valid for up to 3 years and legally binding upon the employer.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                  <FaCoins className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  4,300+ PLN Min Wage &amp; High Savings
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The national gross minimum wage is <strong className="font-semibold text-slate-900">4,300+ PLN/month (~€1,000 EUR / ~₹92,000 INR)</strong>. Experienced 6G welders, CNC operators, and heavy drivers earn 5,500 to 8,500 PLN net (~₹1,20,000 to ₹1,85,000 INR). With free or subsidized housing, workers save 75% or more of their paycheck.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                  <FaPlaneArrival className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  ECR Eligible &amp; No IELTS Barrier
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Both ECR and ECNR Indian passport holders are fully eligible without PoE clearances. Zero English IELTS tests are required, and recruitment is based strictly on hands-on practical trade evaluations, technical competency, and clean criminal records.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 2: Cities & Industrial Clusters ── */}
          <section id="industrial-hubs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaLocationDot className="w-3.5 h-3.5 text-emerald-600" />
              Section 2: Major Hiring Regions &amp; Industrial Clusters
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Where the Jobs Are: Poland&apos;s Leading Industrial Corridors
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              WorkWise Visa places qualified Indian craftsmen, technicians, and heavy equipment operators directly into vetted enterprises across Poland&apos;s core manufacturing hubs:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Warsaw &amp; Mazovia</span>
                  <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Capital &amp; Logistics</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The commercial capital. High demand for commercial building trades, MEP electrical technicians, logistics reach-truck drivers, e-commerce warehouse fulfillment staff, and hotel culinary teams.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Katowice &amp; Silesia (Śląsk)</span>
                  <span className="text-[10px] font-bold uppercase bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full">Heavy Metallurgy</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The industrial powerhouse of Poland. Massive demand for certified structural steel welders, CNC lathe and milling machinists, heavy machinery mechanics, and automotive parts assemblers.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Gdańsk, Gdynia &amp; Szczecin</span>
                  <span className="text-[10px] font-bold uppercase bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Shipyards &amp; Marine</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  World-famous Baltic shipyards and marine fabrication hubs. Urgent hiring for high-pressure 6G TIG/MIG pipe welders, hull fitters, marine sandblasters, and heavy gantry crane operators.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Wrocław &amp; Lower Silesia</span>
                  <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">High-Tech &amp; Automotive</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Major European center for electric vehicle battery gigafactories (LG Energy Solution), electronics manufacturing, automated production line operators, and precision mechanical tooling.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Poznań &amp; Greater Poland</span>
                  <span className="text-[10px] font-bold uppercase bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Commercial Transport</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hub for commercial vehicle assembly (Volkswagen Poznań), international transport fleets, cross-border European Category CE heavy truck driving, and agricultural equipment manufacturing.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Łódź &amp; Central Poland</span>
                  <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Central Distribution</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The geographical center of Poland connecting European transport corridors. High hiring for automated warehouse selectors, reach truck forklift drivers, and packaging technicians.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 3: Official Government Portals ── */}
          <section id="government-portals" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaShieldHalved className="w-3.5 h-3.5 text-emerald-600" />
              Section 3: Sovereign Government Verification Portals
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Master Directory of Official Polish State Authorities &amp; Verification Gateways
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Verify your employer credentials, Voivodeship permit (Zezwolenie Typ A), and Type D visa application directly against official Polish state databases ending in <strong className="font-semibold text-slate-900">.gov.pl</strong>:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-bold uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="p-4">State Authority / Agency</th>
                    <th className="p-4">Official Jurisdiction &amp; Role</th>
                    <th className="p-4">Official Web Address</th>
                    <th className="p-4">Key Verification Function</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Regional Voivodeship Offices (Urząd Wojewódzki)</td>
                    <td className="p-4">16 Regional Voivodeship Foreigner Departments (Wydział Spraw Cudzoziemców)</td>
                    <td className="p-4">
                      <a href="https://www.gov.pl" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                        gov.pl (Urząd Wojewódzki)
                      </a>
                    </td>
                    <td className="p-4 text-slate-600">Voivodeship Work Permit (Zezwolenie Typ A) issuance &amp; Karta Pobytu</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">e-Konsulat Electronic Visa System</td>
                    <td className="p-4">Ministry of Foreign Affairs of Poland (MSZ)</td>
                    <td className="p-4">
                      <a href="https://secure2.e-konsulat.gov.pl" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                        secure2.e-konsulat.gov.pl
                      </a>
                    </td>
                    <td className="p-4 text-slate-600">Online National Type D Employment Visa application &amp; booking</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Office for Foreigners (UdSC)</td>
                    <td className="p-4">Central State Immigration &amp; Legal Status Authority</td>
                    <td className="p-4">
                      <a href="https://cudzoziemcy.gov.pl" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                        cudzoziemcy.gov.pl
                      </a>
                    </td>
                    <td className="p-4 text-slate-600">Immigration legal status, appeals &amp; Karta Pobytu guidelines</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">National Court Register (KRS) &amp; CEIDG</td>
                    <td className="p-4">Ministry of Justice &amp; Ministry of Development</td>
                    <td className="p-4">
                      <a href="https://ekrs.ms.gov.pl" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                        ekrs.ms.gov.pl
                      </a>
                    </td>
                    <td className="p-4 text-slate-600">Validate employer KRS number, active NIP tax ID, and legal standing</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Embassy of Poland in New Delhi</td>
                    <td className="p-4">Sovereign diplomatic mission in India</td>
                    <td className="p-4">
                      <span className="text-slate-800 font-medium">50-M Shantipath, Chanakyapuri, New Delhi</span>
                    </td>
                    <td className="p-4 text-slate-600">Consular interviews, document legalization &amp; visa foil stamping</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 4: Voivodeship & Work Permit Pathways ── */}
          <section id="visa-pathways" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaFileContract className="w-3.5 h-3.5 text-emerald-600" />
              Section 4: Statutory Work Authorization Classifications
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The 4 Legal Work &amp; Residence Tracks Under Polish Immigration Law
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-bold">
                  Pathway 1: Primary Trade Track
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Voivodeship Work Permit Typ A (Zezwolenie na Pracę Typ A)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The primary statutory work permit for full-time trade workers, welders, CNC machinists, heavy commercial drivers, and civil construction craftsmen. Issued by the Regional Voivode for up to 3 years. Entitles candidate to apply for a National Type D visa and later transition to Karta Pobytu.
                </p>
                <div className="pt-2 text-xs font-bold text-slate-700 space-y-1">
                  <div>• Processing Time: 8 to 12 Weeks total</div>
                  <div>• Initial Validity: 1 to 3 Years (Renewable)</div>
                  <div>• Permanent Residence: Eligible after 5 continuous years of lawful stay</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-teal-100 text-teal-800 px-3 py-1 text-xs font-bold">
                  Pathway 2: Seasonal Track
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Seasonal Work Permit Typ S (Zezwolenie Sezonowe)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tailored for seasonal agricultural farming, fruit harvesting, and hospitality resorts during peak seasons. Issued by the local Poviat Labour Office (PUP) for up to 9 months within a calendar year, with lower state fees and fast-track processing.
                </p>
                <div className="pt-2 text-xs font-bold text-slate-700 space-y-1">
                  <div>• Processing Time: 4 to 6 Weeks</div>
                  <div>• Validity: Up to 9 Months per calendar year</div>
                  <div>• Free Farm Housing &amp; Transport mandated</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-blue-100 text-blue-800 px-3 py-1 text-xs font-bold">
                  Pathway 3: Highly Qualified Specialists
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Highly Skilled EU Blue Card Track (Niebieska Karta UE)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Reserved for degree-holding engineering specialists, software developers, electromechanical designers, and QA/QC inspection chiefs. Requires employer remuneration of at least 1.5 times the national average gross wage, granting 3-year residence cards with immediate family dependent sponsorship rights.
                </p>
                <div className="pt-2 text-xs font-bold text-slate-700 space-y-1">
                  <div>• Gross Salary Floor: ~12,000+ PLN/Month (~€2,800+)</div>
                  <div>• Family Sponsorship: Immediate spouse and child dependent passes</div>
                  <div>• Accelerated EU Schengen mobility privileges</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-amber-100 text-amber-800 px-3 py-1 text-xs font-bold">
                  Pathway 4: Corporate Mobility
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Intra-Corporate Transfer (Zezwolenie Typ C / ICT)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For multinational industrial and engineering corporations transferring senior technical leads, welding inspectors, or plant setup specialists from Indian parent companies to Polish operational branches for up to 3 years without local labor market tests.
                </p>
                <div className="pt-2 text-xs font-bold text-slate-700 space-y-1">
                  <div>• Exemption: Direct corporate detachment clearance</div>
                  <div>• Validity: Up to 3 Years continuous deployment</div>
                  <div>• Smooth transition to multi-year Polish single permits</div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 5: 2026 Master Salary Matrix ── */}
          <section id="salary-matrix" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaMoneyBillWave className="w-3.5 h-3.5 text-emerald-600" />
              Section 5: Verified 2026 Salary Schedule &amp; Remittance Math
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Master Poland Salary Schedule (PLN, EUR &amp; INR Net Equivalents)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Salaries in Poland are paid in <strong className="font-semibold text-slate-900">Polish Złoty (PLN / zł)</strong> or benchmarked in <strong className="font-semibold text-slate-900">Euros (€)</strong>. Realistic 2026 market conversion benchmarks: <strong className="font-semibold text-slate-900">1.00 PLN ≈ ₹21.00 – ₹22.50 INR ≈ €0.23 EUR ≈ $0.25 USD</strong>.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-bold uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="p-4">Trade / Professional Role</th>
                    <th className="p-4">Monthly Basic (PLN)</th>
                    <th className="p-4">Approx. EUR (€)</th>
                    <th className="p-4">Net Monthly In-Hand (INR ₹)</th>
                    <th className="p-4">Mandatory Employer Benefits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">2026 Statutory Minimum Wage Floor</td>
                    <td className="p-4 font-mono font-bold text-slate-800">4,300+ PLN gross</td>
                    <td className="p-4 font-mono">€1,000</td>
                    <td className="p-4 font-bold text-emerald-700">₹72,000 – ₹76,000 net</td>
                    <td className="p-4 text-slate-500">Statutory Legal Floor (40 hrs/wk)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Civil Mason / Bricklayer / Plasterer</td>
                    <td className="p-4 font-mono font-bold text-slate-800">4,800 – 6,500 PLN</td>
                    <td className="p-4 font-mono">€1,100 – €1,500</td>
                    <td className="p-4 font-bold text-emerald-700">₹80,000 – ₹1,08,000 net</td>
                    <td className="p-4 text-slate-500">Free Accommodation, Site Bus, Overtime (1.5x)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Shuttering Carpenter / Steel Fixer</td>
                    <td className="p-4 font-mono font-bold text-slate-800">5,000 – 6,800 PLN</td>
                    <td className="p-4 font-mono">€1,150 – €1,560</td>
                    <td className="p-4 font-bold text-emerald-700">₹83,000 – ₹1,13,000 net</td>
                    <td className="p-4 text-slate-500">Free Shared Flat, PPE Kits, Safety Boots</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">MIG / MAG / Structural Welder</td>
                    <td className="p-4 font-mono font-bold text-slate-800">5,500 – 7,500 PLN</td>
                    <td className="p-4 font-mono">€1,260 – €1,720</td>
                    <td className="p-4 font-bold text-emerald-700">₹92,000 – ₹1,25,000 net</td>
                    <td className="p-4 text-slate-500">Free Housing, Safety Equipment, Overtime</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">6G TIG / High-Pressure Pipe Welder (Shipyards)</td>
                    <td className="p-4 font-mono font-bold text-slate-800">6,500 – 9,500 PLN</td>
                    <td className="p-4 font-mono">€1,500 – €2,180</td>
                    <td className="p-4 font-bold text-emerald-700">₹1,10,000 – ₹1,60,000 net</td>
                    <td className="p-4 text-slate-500">Premium Housing, Shift Allowance, Medical</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">CNC Lathe &amp; Milling Machinist</td>
                    <td className="p-4 font-mono font-bold text-slate-800">5,500 – 7,800 PLN</td>
                    <td className="p-4 font-mono">€1,260 – €1,800</td>
                    <td className="p-4 font-bold text-emerald-700">₹92,000 – ₹1,30,000 net</td>
                    <td className="p-4 text-slate-500">Free Housing, Precision Tools, Shift Bonus</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Building Electrician &amp; Plumber</td>
                    <td className="p-4 font-mono font-bold text-slate-800">5,000 – 6,800 PLN</td>
                    <td className="p-4 font-mono">€1,150 – €1,560</td>
                    <td className="p-4 font-bold text-emerald-700">₹83,000 – ₹1,13,000 net</td>
                    <td className="p-4 text-slate-500">Free Housing, Tools Kit, Utilities Included</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Heavy Truck Driver (Cat C/CE International)</td>
                    <td className="p-4 font-mono font-bold text-slate-800">6,500 – 9,500+ PLN</td>
                    <td className="p-4 font-mono">€1,500 – €2,180</td>
                    <td className="p-4 font-bold text-emerald-700">₹1,15,000 – ₹1,75,000 net</td>
                    <td className="p-4 text-slate-500">European Dieta Per-Diem, Modern Scania/Volvo</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Hydraulic Excavator / Heavy Plant Operator</td>
                    <td className="p-4 font-mono font-bold text-slate-800">5,500 – 7,500 PLN</td>
                    <td className="p-4 font-mono">€1,260 – €1,720</td>
                    <td className="p-4 font-bold text-emerald-700">₹92,000 – ₹1,25,000 net</td>
                    <td className="p-4 text-slate-500">Site Accommodation, Free Lunch, Overtime</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Warehouse Reach-Truck Forklift Driver</td>
                    <td className="p-4 font-mono font-bold text-slate-800">4,600 – 6,200 PLN</td>
                    <td className="p-4 font-mono">€1,050 – €1,420</td>
                    <td className="p-4 font-bold text-emerald-700">₹77,000 – ₹1,04,000 net</td>
                    <td className="p-4 text-slate-500">Logistics Hostel, Attendance Bonus, Free Bus</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Automotive Production Line Worker</td>
                    <td className="p-4 font-mono font-bold text-slate-800">4,400 – 5,800 PLN</td>
                    <td className="p-4 font-mono">€1,000 – €1,330</td>
                    <td className="p-4 font-bold text-emerald-700">₹74,000 – ₹97,000 net</td>
                    <td className="p-4 text-slate-500">Factory Hostel, Production Incentive Bonuses</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Civil / Mechanical Site Foreman</td>
                    <td className="p-4 font-mono font-bold text-slate-800">8,000 – 12,000 PLN</td>
                    <td className="p-4 font-mono">€1,840 – €2,760</td>
                    <td className="p-4 font-bold text-emerald-700">₹1,35,000 – ₹2,05,000 net</td>
                    <td className="p-4 text-slate-500">Executive Apartment, Site Vehicle, Phone SIM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 6: 6-Stage Statutory Deployment Pipeline ── */}
          <section id="deployment-pipeline" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaPlaneArrival className="w-3.5 h-3.5 text-emerald-600" />
              Section 6: End-to-End Application Lifecycle (Zero Guesswork)
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The 6-Stage Legal Roadmap from India to Your Polish Karta Pobytu
            </h2>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center shrink-0">
                  1
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    Trade Bench Testing &amp; Bilingual Employment Contract
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Candidate completes practical skill evaluation (pipe welding coupons, CNC tool setting, heavy vehicle driving trial) at authorized WorkWise Visa centers in Patna, Noida, or Delhi. Sponsoring Polish company issues a legally binding bilingual <strong className="font-semibold text-slate-900">Polish-English Employment Contract (Umowa o Pracę)</strong> detailing exact salary in PLN, working hours, and employer housing commitments.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center shrink-0">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    Voivodeship Work Permit (Zezwolenie Typ A) Issuance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The sponsoring employer submits the application to the Regional Voivodeship Office (<a href="https://www.gov.pl" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:underline">Urząd Wojewódzki</a>). The Voivode checks corporate standing, KRS registry, and issues the official <strong className="font-semibold text-slate-900">Voivodeship Work Permit (Zezwolenie Typ A)</strong> valid for up to 3 years within 4 to 6 weeks.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center shrink-0">
                  3
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    Police Clearance Certificate (PCC) &amp; MEA Hague Apostille in India
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Applicant secures a Police Clearance Certificate strictly from their Regional Passport Office / PSK in India. The original PCC must have a <strong className="font-semibold text-slate-900">Ministry of External Affairs (MEA) Hague Apostille sticker</strong> affixed. WorkWise Visa arranges sworn certified translation into Polish (<em className="text-slate-700">Tłumaczenie Przysięgłe</em>).
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center shrink-0">
                  4
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    National Type D Employment Visa on e-Konsulat &amp; VFS Stamping
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Candidate registers on <a href="https://secure2.e-konsulat.gov.pl" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:underline">e-Konsulat</a>, attends the scheduled biometric appointment at VFS Global India, and receives the official <strong className="font-semibold text-slate-900">National Type D visa foil</strong> in their passport from the Embassy of Poland in New Delhi or Consulate General in Mumbai.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center shrink-0">
                  5
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    Flight to Warsaw Chopin (WAW) or Katowice (KTW)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Worker boards a flight connecting via Doha (Qatar Airways), Dubai (Emirates / flydubai), or Frankfurt (Lufthansa) landing in Warsaw (WAW) or Katowice (KTW). At border control, candidate presents their passport with stamped Type D visa, original Voivodeship permit, and company housing letter. Company HR receives the worker at the airport terminal.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center shrink-0">
                  6
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    Voivodeship Biometric Registration &amp; Karta Pobytu Single Permit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    While working in Poland, employer HR assists the worker in submitting the application for a <strong className="font-semibold text-slate-900">Temporary Residence and Work Card (Karta Pobytu)</strong> at the local Voivodeship Office, providing multi-year legal residence without needing further entry visa renewals in India.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 7: Document Checklist & Apostille ── */}
          <section id="document-checklist" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaCertificate className="w-3.5 h-3.5 text-emerald-600" />
              Section 7: Document Checklist &amp; Hague Apostille Protocol
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Mandatory Documentation Dossier for Indian Candidates
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Because Poland is an active member of the 1961 Hague Apostille Convention, all Indian public documents must carry official MEA Apostille legalization:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Original Indian Passport
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Must possess a minimum validity of 18 months, at least two blank facing visa pages, and be in clean physical condition. Both ECR and ECNR passports accepted.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  PSK Police Clearance (PCC) + MEA Hague Apostille
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Issued strictly by Passport Seva Kendra (PSK/RPO) within the last 3 to 6 months, bearing an authentic Hague Apostille sticker from CPV Division, MEA New Delhi.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Bilingual Employment Contract (Umowa o Pracę)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Executed dual-column Polish-English employment contract detailing exact monthly wage in PLN, 40-hour work schedule, overtime multipliers, and company housing terms.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Pre-Departure Travel Health Insurance
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  International Schengen travel insurance policy with minimum medical emergency coverage of €30,000 valid for the initial 90-day arrival period.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Proof of Registered Accommodation
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Notarized residential lease agreement or official employer housing declaration guaranteeing clean living quarters in Warsaw, Katowice, Gdańsk, or Wrocław.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Trade Certificates &amp; Experience Records
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ITI trade certificates, welding qualification cards, CNC machine certifications, commercial HTV driving licenses, or previous Gulf/domestic experience slips.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Pre-Departure Medical Fitness Certificate
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Medical test report covering Chest X-Ray for Tuberculosis clearance, Hepatitis B/C, and HIV from a recognized pathology diagnostic lab.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Passport Size Photographs
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  6 recent color photographs (35mm x 45mm, matte finish, 80% face coverage, clean white background, neutral expression).
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 8: Statutory Fees ── */}
          <section id="fee-schedule" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaCoins className="w-3.5 h-3.5 text-emerald-600" />
              Section 8: Official Government Fees &amp; Zero Hidden Charges
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Transparent Breakdown of Statutory Polish Immigration Fees
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-bold uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="p-4">Administrative Milestone</th>
                    <th className="p-4">Paid To Authority</th>
                    <th className="p-4">Official Amount (PLN / EUR)</th>
                    <th className="p-4">Approx. INR Equivalent</th>
                    <th className="p-4">Statutory Responsibility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Voivodeship Work Permit Tariff (Typ A)</td>
                    <td className="p-4">Urząd Wojewódzki State Account</td>
                    <td className="p-4 font-mono font-bold">100 PLN (for &gt;3 month permit)</td>
                    <td className="p-4">~₹2,200</td>
                    <td className="p-4 font-bold text-emerald-700">Polish Employer</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">National Type D Long-Stay Visa Fee</td>
                    <td className="p-4">Embassy of Poland / VFS</td>
                    <td className="p-4 font-mono font-bold">€135 EUR (~600 PLN)</td>
                    <td className="p-4">~₹12,500</td>
                    <td className="p-4 text-slate-600">Candidate / Employer Package</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Karta Pobytu Single Permit Application</td>
                    <td className="p-4">Urząd Wojewódzki Foreigner Dept</td>
                    <td className="p-4 font-mono font-bold">440 PLN stamp duty + 100 PLN card fee</td>
                    <td className="p-4">~₹11,800</td>
                    <td className="p-4 text-slate-600">Employer / Candidate</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">PSK Police Clearance &amp; MEA Hague Apostille</td>
                    <td className="p-4">Passport Seva &amp; MEA India</td>
                    <td className="p-4 font-mono font-bold">—</td>
                    <td className="p-4">₹500 PCC + ₹100–₹500 Apostille</td>
                    <td className="p-4 text-slate-600">Candidate (in India)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">€30,000 Travel Health Insurance</td>
                    <td className="p-4">Licensed Indian Insurer</td>
                    <td className="p-4 font-mono font-bold">—</td>
                    <td className="p-4">₹1,500 – ₹3,000</td>
                    <td className="p-4 text-slate-600">Candidate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 9: Food, Groceries & Indian Daily Life ── */}
          <section id="daily-life-groceries" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaUtensils className="w-3.5 h-3.5 text-emerald-600" />
              Section 9: Daily Life, Indian Kitchens &amp; Real Grocery Prices
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Ground Reality: Food, Accommodation &amp; Day-to-Day Life in Poland
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Before moving to Poland, Indian tradesmen want to know: <em className="text-slate-700 font-medium">&quot;Can we cook Indian food? Are Indian spices available? How are the accommodations?&quot;</em> Here is the verified ground reality from workers currently in Warsaw, Katowice, and Gdańsk:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
                  <FaBed className="w-5 h-5 text-emerald-600" />
                  Company Apartment Reality
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Licensed employers in manufacturing, metallurgy, and logistics provide <strong className="font-semibold text-slate-900">free or subsidized shared company flats or worker residential centers</strong> (typically 2 to 4 workers per room). Facilities include clean western bathrooms, hot water heaters, automatic washing machines, and winter central heating radiators. Electricity, water, and heating bills are fully funded by the company.
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-700 space-y-1">
                  <div>• Daily transport: Free company buses to and from work sites and fabrication yards.</div>
                  <div>• Bedding &amp; blankets: Provided by the employer upon arrival.</div>
                  <div>• High-speed WiFi: Standard in company residential quarters.</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
                  <FaUtensils className="w-5 h-5 text-emerald-600" />
                  Self-Cooking &amp; Supermarket Costs
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Apartments feature equipped gas or electric kitchens. Indian workers cook together in small groups of 3 to 4, sharing cooking tasks and grocery bills. Common staples are widely sold at supermarkets like Biedronka, Lidl, Dino, Carrefour, Auchan, or local neighborhood shops:
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-700 space-y-1">
                  <div>• White Basmati / Long-grain Rice: ~6.00 – 8.50 PLN/kg (₹130 – ₹185)</div>
                  <div>• Wheat Flour (Mąka pszenna): ~3.00 – 4.50 PLN/kg (₹65 – ₹100)</div>
                  <div>• Lentils / Dal (Soczewica): ~8.00 – 12.00 PLN/kg (₹175 – ₹260)</div>
                  <div>• Fresh Chicken Breast/Legs: ~16.00 – 22.00 PLN/kg (₹345 – ₹480)</div>
                  <div>• Eggs: ~10.00 – 13.00 PLN for 10 eggs (₹215 – ₹280)</div>
                  <div>• Sunflower Cooking Oil: ~7.00 – 9.00 PLN/litre (₹150 – ₹195)</div>
                  <div>• Fresh Tomatoes &amp; Onions: ~4.00 – 6.00 PLN/kg (₹85 – ₹130)</div>
                </div>
                <p className="text-[11px] text-emerald-800 font-bold">
                  Realistic Grocery Cost: Approximately 700 to 950 PLN (~₹15,000 to ₹21,000 INR) per worker monthly for generous, healthy home-cooked meals.
                </p>
              </div>
            </div>

            {/* Weather & Climate Reality */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <FaCloudSun className="w-5 h-5 text-amber-500" />
                Poland Climate: Four Distinct Seasons
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Summers in Warsaw, Wrocław, and Katowice are warm and pleasant (22°C to 30°C). Winters (December through February) are cold, with temperatures averaging between -5°C and 3°C with regular snowfall. Sponsoring employers provide high-efficiency central radiators in residential flats and heavy-duty winter thermal safety jackets and insulated work boots on job sites.
              </p>
            </div>
          </section>

          {/* ── Section 10: Banking & Remittance ── */}
          <section id="banking-remittance" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaPiggyBank className="w-3.5 h-3.5 text-emerald-600" />
              Section 10: Bank Accounts, Salaries &amp; Sending Money to India
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Banking, Salary Deposits &amp; Sending Remittances Home
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Under Polish labor regulations, all legal salaries must be deposited directly into personal bank accounts via electronic transfer. Cash salary payments are strictly prohibited.
            </p>

            <div className="grid sm:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">Opening Your Bank Account</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  During your initial 2 weeks, employer HR assists you in opening an account at leading Polish financial institutions such as <strong className="font-semibold text-slate-900">PKO Bank Polski</strong>, <strong className="font-semibold text-slate-900">Bank Pekao</strong>, or <strong className="font-semibold text-slate-900">Santander Bank Polska</strong>. You receive an international Visa/Mastercard debit card and a personal IBAN number starting with <strong className="font-mono text-slate-800">PL...</strong>.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">Monthly Salary Crediting</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Salaries are credited between the 5th and 10th of every month in Polish Złoty (PLN). You receive an official printed pay slip (<em className="text-slate-700">Pasek wynagrodzenia</em>) showing gross earnings, basic hours, overtime hours, and statutory 12% tax and ZUS social deductions.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">Sending Money to India</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Workers transfer funds directly to their family accounts in India (SBI, HDFC, PNB, Bank of Baroda) through international bank SWIFT wire transfers, Western Union, MoneyGram, or mobile banking apps. Remittances arrive in Indian bank accounts within 24 to 48 hours at competitive market exchange rates.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 11: Labour Code & Tax ── */}
          <section id="labour-law-tax" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaScaleUnbalanced className="w-3.5 h-3.5 text-emerald-600" />
              Section 11: Polish Labour Code &amp; Taxation Standards
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Worker Protections Under the Polish Labour Code (Kodeks Pracy)
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">40-Hour Standard Work Week</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Under the Polish Labour Code (Kodeks Pracy), standard working hours are 8 hours per day, 5 days per week (40 hours weekly). Overtime is compensated at a mandatory premium of 50% for standard weekdays and 100% for night shifts, Sundays, and public holidays.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">20 to 26 Days Paid Annual Leave</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Employees are statutorily entitled to 20 working days of fully paid annual leave (increasing to 26 days after 10 years of total verified employment), plus 13 official national public holidays recognized under Polish law.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">Comprehensive State Healthcare (NFZ)</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Monthly social health contributions (NFZ) cover free medical treatment in state hospitals, specialist consultations, emergency surgery, and workplace accident protection across Poland with an official electronic PESEL identity card.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 12: Airport Arrival & Customs ── */}
          <section id="airport-immigration" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaPlaneArrival className="w-3.5 h-3.5 text-emerald-600" />
              Section 12: Flight Travel, Airport Immigration &amp; First 48 Hours
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Arriving at Warsaw Chopin Airport (WAW) or Katowice (KTW): What to Expect
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To ensure hassle-free entry into Poland and the European Schengen Area, follow these proven practical guidelines:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="font-bold text-slate-900 text-base">Flight Routes &amp; Transit Rules</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Most flights from Delhi, Mumbai, or Lucknow connect via <strong className="font-semibold text-slate-900">Doha (Qatar Airways)</strong>, <strong className="font-semibold text-slate-900">Dubai (Emirates / flydubai)</strong>, or <strong className="font-semibold text-slate-900">Frankfurt (Lufthansa)</strong> directly into Warsaw Chopin Airport (WAW) or Katowice Airport (KTW).
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-700 space-y-1">
                  <div>• Transit in Doha / Dubai: No transit visa required if layover is under 24 hours and you remain in the international transit area.</div>
                  <div>• Airport SIM: Purchase a local Play, Orange, or Plus SIM card right inside the terminal for 20–30 PLN.</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="font-bold text-slate-900 text-base">Documents to Carry in Hand Luggage</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Never place your critical legal papers in checked baggage. Keep these in your personal hand cabin bag for the Polish Border Guard (Straż Graniczna) officer:
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-700 space-y-1">
                  <div>1. Original Passport with stamped National Type D Visa.</div>
                  <div>2. Original or certified printed copy of your Voivodeship Work Permit (Zezwolenie Typ A).</div>
                  <div>3. Signed bilingual Polish-English employment contract.</div>
                  <div>4. Employer company guarantee &amp; accommodation letter.</div>
                  <div>5. €200 to €300 in Euro cash for immediate personal expenses.</div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 13: Anti-Scam Advisory & Schengen Warning ── */}
          <section id="scam-warning" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaTriangleExclamation className="w-3.5 h-3.5 text-emerald-600" />
              Section 13: CRITICAL ANTI-SCAM ADVISORY &amp; Schengen Warnings
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Protect Yourself from Fake Permits, Tourist Traps &amp; Illegal Border Syndicates
            </h2>

            <div className="rounded-2xl border border-red-300 bg-red-50/70 p-6 sm:p-7 space-y-4 text-xs sm:text-sm text-slate-800">
              <div className="flex items-center gap-2.5 font-extrabold text-red-900 text-base">
                <FaBan className="w-5 h-5 text-red-600" />
                WARNING: The &quot;Poland as a Gateway to Run to Germany/UK&quot; Trap
              </div>
              <p className="leading-relaxed">
                Unscrupulous local sub-agents across Punjab, Haryana, UP, and Bihar frequently charge ₹7 to ₹11 Lakhs promising: <em className="text-red-950 font-medium">&quot;Take a Poland work permit, land in Warsaw, and our handlers will take you across the border into Germany, the Netherlands, or the UK to work illegally.&quot;</em>
              </p>
              <div className="font-bold text-red-950">
                THIS IS A DANGEROUS HUMAN TRAFFICKING TRAP. UNDERSTAND THE REALITY:
              </div>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong className="font-bold text-red-950">Work Permits Are Country-Specific:</strong> While Poland is in the Schengen Area for travel, your work permit legally authorizes employment <strong className="font-bold text-red-950">strictly with your sponsoring Polish company</strong>.
                </li>
                <li>
                  <strong className="font-bold text-red-950">Aggressive European Labor Enforcement:</strong> German, Dutch, and French authorities conduct strict unannounced workplace checks. If caught working illegally outside Poland, you face immediate arrest, detention, deportation to India, and a <strong className="font-bold text-red-950">5 to 10 Year Schengen SIS Blacklist</strong>.
                </li>
                <li>
                  <strong className="font-bold text-emerald-900">Work Legally in Poland:</strong> Poland offers top-tier European wages, rapid industrial advancement, high living standards, and legal pathways to European permanent residency and citizenship. Work legally, build your international trade record, and enjoy genuine European prosperity.
                </li>
              </ul>
            </div>
          </section>

          {/* ── Section 14: FAQs ── */}
          <section id="faqs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaCircleQuestion className="w-3.5 h-3.5 text-emerald-600" />
              Section 14: Frequently Asked Questions (Poland Work Permits 2026)
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Essential Answers for Indian Candidates Migrating to Poland
            </h2>

            <div className="space-y-3">
              {faqSchema.mainEntity.map((faq, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                    {faq.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Related Guides ── */}
          <section id="related-guides" className="scroll-mt-28 space-y-6 border-t border-slate-200 pt-12">
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
              Explore Related European &amp; Mediterranean Work Visa Playbooks
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/countries/romania"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                    Schengen Peer
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    Romania Work Visa &amp; Jobs Guide 2026
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Aviz de Angajare (IGI), 3,700 RON min wage &amp; 100,000 annual quota.
                  </p>
                </div>
                <span className="text-xs font-bold text-emerald-700 mt-3 inline-flex items-center gap-1">
                  Read Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/countries/croatia"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                    Schengen Eurozone
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    Croatia Work Visa &amp; Jobs Guide 2026
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    3-Year Stay &amp; Work Permits, €1,050 gross min wage &amp; full Schengen access.
                  </p>
                </div>
                <span className="text-xs font-bold text-emerald-700 mt-3 inline-flex items-center gap-1">
                  Read Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/countries/germany"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md inline-block">
                    Western Neighbor
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    Germany Opportunity Card &amp; Work Visa 2026
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Chancenkarte points system, skilled labor immigration &amp; EU Blue Card.
                  </p>
                </div>
                <span className="text-xs font-bold text-blue-700 mt-3 inline-flex items-center gap-1">
                  Read Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/jobs"
                className="group rounded-2xl border border-emerald-300 bg-gradient-to-br from-emerald-50 to-teal-50 p-5 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md inline-block">
                    Active Hiring 2026
                  </span>
                  <h3 className="font-bold text-emerald-950 text-sm group-hover:text-emerald-700 transition-colors">
                    View Live Poland Vacancies
                  </h3>
                  <p className="text-xs text-emerald-800/80 line-clamp-2">
                    Verified client demands for civil masons, welders, CNC machinists, and drivers.
                  </p>
                </div>
                <span className="text-xs font-bold text-emerald-800 mt-3 inline-flex items-center gap-1">
                  Browse Openings <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </section>

          {/* ── Consultation Form ── */}
          <section id="consultation-form" className="scroll-mt-28 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400">
                  <FaUserTie className="w-3.5 h-3.5 text-emerald-400" />
                  European Placement Desk
                </div>

                <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
                  Verify Your Trade Profile for Poland Employment 2026
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Submit your passport copy and trade credentials to our specialized European placement desk. We verify sponsor legitimacy, Voivodeship permit quotas, and direct employment contracts with 100% employer-provided housing.
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free Evaluation for Welders, Drivers, CNC Machinists &amp; Technicians</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Authorized Type D Visa &amp; New Delhi Embassy Stamping Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Physical Walk-in Offices in Delhi, Noida, Patna, and Gopalganj</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-4 text-xs font-semibold text-slate-300">
                  <div className="flex items-center gap-2">
                    <FaPhone className="w-3.5 h-3.5 text-emerald-400" />
                    <a href="tel:+918130161603" className="hover:text-white transition-colors">
                      +91 81301 61603
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="w-3.5 h-3.5 text-emerald-400" />
                    <a href="mailto:workwisevisa@gmail.com" className="hover:text-white transition-colors">
                      workwisevisa@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Consultation Form Component */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
                  <form
                    action="/api/inquiries"
                    method="POST"
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Full Name (As on Passport)
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Wasim Akram"
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                          WhatsApp Mobile Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="+91 98765 43210"
                          className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                          Trade / Profession
                        </label>
                        <input
                          type="text"
                          name="profession"
                          required
                          placeholder="e.g. 6G Welder, CNC Operator, Driver"
                          className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Target Country Destination
                      </label>
                      <input
                        type="text"
                        name="destination"
                        readOnly
                        value="Poland (Schengen & Europe)"
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-emerald-400 font-bold focus:outline-none cursor-not-allowed"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3.5 text-sm font-bold text-slate-950 shadow-md hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                      >
                        <span>Submit Poland Profile For Free Audit</span>
                        <FaArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-500 text-center">
                      100% confidential. No spam. A WorkWise counselor will call you within 24 working hours.
                    </p>
                  </form>
                </div>
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

