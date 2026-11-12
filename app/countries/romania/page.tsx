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
  title: "Romania Work Visa & Jobs Guide 2026: IGI Work Permit (Aviz de Angajare), Type D/AM Visa & Salaries | WorkWise Visa",
  description:
    "Definitive 2026 statutory master guide to Romania work visas for Indian skilled workers, civil trades, 6G welders, hotel chefs, heavy drivers, and factory mechanics. Learn IGI Aviz de Angajare approvals, Type D/AM visa on eviza.mae.ro, 3,700 RON minimum wage, Schengen mobility, free housing, and scam verification.",
  keywords: [
    "Romania work visa 2026",
    "Romania work visa for Indian citizens",
    "Romania work permit process in India",
    "Romania Aviz de Angajare IGI",
    "Romania Type D AM long stay employment visa",
    "eviza mae ro visa application",
    "Embassy of Romania New Delhi visa",
    "Romania jobs for Indian welders masons drivers",
    "Romania minimum wage 2026 RON EUR INR",
    "Cost of living Romania Bucharest Cluj vs savings INR",
    "WorkWise Visa Romania recruitment partner",
    "How to get work permit in Romania from India",
    "Romania construction jobs Bucharest Constanta",
    "Ordinance 25 2014 on Employment of Foreigners Romania",
    "PCC MEA Apostille for Romania visa",
    "Romania Schengen work visa rules",
  ],
  alternates: {
    canonical: `${BASE_URL}/countries/romania`,
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
    title: "Romania Work Visa & Jobs Guide 2026: IGI Work Permit (Aviz de Angajare), Type D/AM Visa & Salaries | WorkWise Visa",
    description:
      "Comprehensive statutory manual for Indian professionals, skilled tradespeople, welders, hotel cooks, drivers, and engineers migrating to Romania under Ordinance No. 25/2014 and the General Inspectorate for Immigration (IGI) framework.",
    url: `${BASE_URL}/countries/romania`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: `${BASE_URL}/images/romania-work-visa-guide.webp`,
        width: 1200,
        height: 630,
        alt: "Romania Work Visa & Employment Master Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romania Work Visa & Jobs Guide 2026: IGI Work Permit (Aviz de Angajare), Type D/AM Visa & Salaries | WorkWise Visa",
    description:
      "Complete 2026 Romania work visa guide for Indian workers. Explore IGI Work Authorizations (Aviz de Angajare), Type D/AM visas via eviza.mae.ro, 3,700 RON minimum wage, Schengen mobility, free company accommodation, and New Delhi Embassy stamping.",
    images: [`${BASE_URL}/images/romania-work-visa-guide.webp`],
  },
};

export default function RomaniaCountryPage() {
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
        name: "Romania",
        item: `${BASE_URL}/countries/romania`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Romania Work Visa & Skilled Employment Guide 2026: IGI Work Authorization (Aviz de Angajare), Type D/AM Process, Salary Scales & Schengen Compliance",
    description:
      "Authoritative statutory manual for Indian workers, industrial technicians, welders, chefs, and heavy drivers migrating to Romania under Government Ordinance No. 25/2014 and the General Inspectorate for Immigration (IGI) framework.",
    image: `${BASE_URL}/images/romania-work-visa-guide.webp`,
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
      "@id": `${BASE_URL}/countries/romania`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Romania Work Authorization (Aviz de Angajare) and Type D/AM visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Romanian Government Ordinance No. 25/2014 on the employment of foreign nationals, the sponsoring employer in Romania must first obtain an official Work Authorization (Aviz de Angajare) from the General Inspectorate for Immigration (Inspectoratul General pentru Imigrări - IGI). Once this official permit approval is granted, the candidate applies for a National Long-Stay Employment Visa (Type D/AM) on eviza.mae.ro and attends the Embassy of Romania in New Delhi or authorized VFS center for consular visa foil stamping.",
        },
      },
      {
        "@type": "Question",
        name: "What is the statutory minimum wage and typical salary for Indian workers in Romania in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Effective 2026, Romania's statutory national gross minimum wage is 3,700 Romanian Leu (RON) per month (~€740 EUR / ~₹68,500 INR), while the statutory minimum wage for construction trades is 4,582 RON gross. Skilled tradesmen earn significantly higher net salaries: civil masons, carpenters, and steel fixers earn 3,500 to 4,800 RON net (₹65,000 to ₹89,000 INR), certified 6G pipe welders earn 4,500 to 6,200 RON net (₹83,000 to ₹1,15,000 INR), heavy commercial drivers earn 4,000 to 5,800 RON net (₹74,000 to ₹1,07,000 INR), and hotel chefs earn 3,800 to 5,200 RON net. Sponsoring employers provide 100% free furnished company apartments and daily site transit.",
        },
      },
      {
        "@type": "Question",
        name: "Is Romania a full member of the European Schengen Area in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Romania is a full member of the European Schengen Area. Air and maritime internal border checks were officially lifted in 2024, followed by full land integration. Holding a Romanian Work Residence Permit (Permis de Ședere) grants the legal privilege to travel visa-free across all 29 Schengen member states for up to 90 days within any 180-day period for tourism and leisure. However, salaried employment is legally permitted strictly with your sponsoring Romanian employer.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to process a Romania work permit and Type D/AM visa from India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The complete timeline from trade selection to arrival in Bucharest typically takes 6 to 10 weeks: 3 to 5 weeks for IGI to issue the official Aviz de Angajare work authorization, followed by 15 to 30 calendar days for online filing on eviza.mae.ro and consular stamping through the Embassy of Romania in New Delhi.",
        },
      },
      {
        "@type": "Question",
        name: "Can Indian citizens holding ECR (non-matriculation) passports work in Romania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Romania is not on the list of 18 ECR countries under the Indian Emigration Act. Indian citizens holding either ECR or ECNR passports are fully eligible to apply and travel on valid Romanian Type D/AM employment visas without requiring Protector of Emigrants (PoE) clearance.",
        },
      },
      {
        "@type": "Question",
        name: "Is Police Clearance Certificate (PCC) with MEA Hague Apostille mandatory for Romania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Because Romania is an active member of the 1961 Hague Apostille Convention, applicants must secure an official Police Clearance Certificate (PCC) issued by the Regional Passport Office (PSK/RPO) in India, bearing an authentic Hague Apostille sticker from the Ministry of External Affairs (MEA), CPV Division, New Delhi. The document must be officially translated into Romanian by a sworn certified translator.",
        },
      },
      {
        "@type": "Question",
        name: "Does the Romanian employer provide free food and accommodation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In nearly all licensed manufacturing, construction, heavy engineering, and resort hospitality contracts, employers provide 100% free furnished company apartments or worker hostels (typically 2 to 4 workers per room with heating, clean bathrooms, and kitchen facilities) plus free daily transport to the job site. Food is self-cooked in apartment kitchens, with monthly groceries costing approximately 800 to 1,100 RON (~₹14,500 to ₹20,000 INR).",
        },
      },
      {
        "@type": "Question",
        name: "Can a foreign worker switch employers in Romania after arrival?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Under Romanian immigration legislation, a foreign employee can legally change employers after completing their initial contract period or by obtaining a mutual release agreement from their original employer. The new Romanian company must apply for a new Aviz de Angajare with IGI before the current residence card expires, without the worker having to exit the country.",
        },
      },
      {
        "@type": "Question",
        name: "What are the income tax and social insurance rates in Romania in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Romania applies a low flat Personal Income Tax (Impozit pe venit) of 10% on gross salary. Mandatory social security contributions comprise 25% for state pension (CAS) and 10% for social health insurance (CASS). These contributions grant the employee complete access to public state hospitals, emergency healthcare, and workplace accident protection across Romania.",
        },
      },
      {
        "@type": "Question",
        name: "How can candidates spot and avoid fake Romanian work visa scams in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common scam red flags include: fake Aviz de Angajare PDF documents without an official 9-digit IGI registration number and barcode, agents promising 'direct backdoor entry into Germany or Italy via Romania', demands for ₹6 to ₹9 Lakhs in cash, and job offers from companies not registered on the ANAF fiscal portal. Always verify employer credentials and check visa applications directly on eviza.mae.ro.",
        },
      },
      {
        "@type": "Question",
        name: "Is IELTS or Romanian language proficiency required for a Romania work visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. There is zero IELTS or English exam requirement, and no Romanian language test is mandated for blue-collar craftsmen, machine operators, or hospitality staff. Workplace instructions are conducted in English, Hindi with bilingual Indian foremen, or through international engineering schematics.",
        },
      },
      {
        "@type": "Question",
        name: "How can Indian workers send their monthly salary home from Romania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Employers deposit monthly salaries directly into the worker's personal Romanian bank account (such as Banca Transilvania - BT, BCR, or BRD). Workers remit funds home to Indian family accounts (SBI, HDFC, PNB) via international bank SWIFT wire transfers, Western Union, MoneyGram, or digital remittance apps. Funds arrive in Indian bank accounts within 24 to 48 hours.",
        },
      },
      {
        "@type": "Question",
        name: "Can my family join me in Romania on a dependent visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Romanian Emergency Ordinance No. 194/2002, third-country workers who hold an active Single Residence Permit valid for at least 1 year and demonstrate adequate family housing and statutory minimum income are legally entitled to sponsor their legally wedded spouse and minor children for Family Reunification (Reîntregirea familiei) residence permits.",
        },
      },
      {
        "@type": "Question",
        name: "Is an Indian driving license valid for driving in Romania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An Indian commercial driving license (HTV) accompanied by an International Driving Permit (IDP) is valid for the initial period. Sponsoring transport companies assist professional drivers in passing the Romanian theoretical and practical road driving examinations through the Directorate for Driving Licences and Vehicle Registration (DRPCIV) to obtain an official Romanian Category C or CE European driving license.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if an employer in Romania violates labor standards or delays salary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Territorial Labour Inspectorate (Inspectoratul Teritorial de Muncă - ITM) strictly supervises foreign worker contracts in Romania. Employers who delay salary payments, fail to provide registered accommodation, or violate safety standards face heavy statutory penalties and forfeiture of foreign hiring quotas. Workers can report violations directly to ITM and IGI without endangering their legal stay.",
        },
      },
      {
        "@type": "Question",
        name: "What is the weather and winter climate like in Romania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Romania has a temperate-continental climate with four distinct seasons. Summers in Bucharest, Timișoara, and Constanța are warm and sunny (26°C to 34°C). Winters (December to February) are cold, with temperatures ranging from -3°C to 5°C and occasional snowfall. Employers provide central heating in worker quarters and thermal workwear for outdoor construction and road sites.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Obtain a Romania Work Visa & IGI Work Authorization (Aviz de Angajare) from India in 2026",
    description:
      "A complete 6-stage statutory roadmap for Indian skilled workers, technicians, chefs, and drivers to secure IGI employer authorization, New Delhi Embassy Type D/AM visa stamping, and biometric residence cards in Romania.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Practical Skill Evaluation & Bilingual Employment Contract",
        text: "Candidate completes trade skill testing (pipe welding coupons, rebar tying, heavy vehicle driving trial) at authorized WorkWise Visa centers and signs a bilingual Romanian-English employment contract.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "IGI Work Authorization (Aviz de Angajare) Filing",
        text: "The licensed Romanian sponsoring company submits the vacancy notice to ANOFM and files for the official Work Authorization (Aviz de Angajare) with the General Inspectorate for Immigration (IGI).",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Police Clearance Certificate (PCC) & MEA Hague Apostille",
        text: "Applicant secures an official PSK Police Clearance Certificate in India, legalizes it with an MEA Hague Apostille sticker, and obtains sworn translation into Romanian.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "National Type D/AM Employment Visa on eviza.mae.ro & Embassy Stamping",
        text: "Candidate submits the long-stay D/AM visa application electronically via eviza.mae.ro and presents original passport for consular visa foil stamping at the Embassy of Romania in New Delhi.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Flight to Bucharest Henri Coandă International Airport (OTP)",
        text: "Candidate boards flight landing at Bucharest OTP airport, clears border control with original contract, stamped D/AM visa, and accommodation letter, and receives company airport pickup.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "IGI Biometric Registration & Single Permit Card (Permis de Ședere)",
        text: "Within 30 to 60 days of arrival, employer HR accompanies the worker to the county IGI immigration office to capture fingerprints and receive the official plastic Single Residence Permit card.",
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
              <span className="text-emerald-300 font-bold">Romania (România - European Schengen Member)</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Headlines & Key Stats */}
              <div className="lg:col-span-7 space-y-6">
                {/* Government & Authority Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Official 2026 Romania IGI Aviz de Angajare &amp; Schengen Gateway
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                  Romania Work Visa &amp; Skilled Jobs Guide{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                    2026
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  The complete, practical ground-reality manual for Indian civil craftsmen, 6G structural welders, heavy commercial drivers, resort chefs, and factory mechanics migrating to Southeast Europe&apos;s premier Schengen economy. Real facts on official{" "}
                  <strong className="font-bold text-white">IGI Work Authorizations (Aviz de Angajare)</strong> under Ordinance No. 25/2014, the{" "}
                  <strong className="font-bold text-emerald-300">3,700 RON statutory minimum wage</strong> (4,582 RON in construction), free employer apartments, 10% flat income tax, and visa stamping through the Embassy of Romania in New Delhi.
                </p>

                {/* Key Benefits Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaMoneyBillWave className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">3,700 – 4,582 RON Min</div>
                      <div className="text-[10px] text-slate-400">~€740 / ₹68.5k Base Pay</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaCoins className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">10% Flat Tax Rate</div>
                      <div className="text-[10px] text-slate-400">Low European Payroll Tax</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaShieldHalved className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Full Schengen Member</div>
                      <div className="text-[10px] text-slate-400">29 Nations Mobility</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaHouseUser className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">100% Free Housing</div>
                      <div className="text-[10px] text-slate-400">Furnished Flat &amp; Utilities</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaClock className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">6–10 Wks Processing</div>
                      <div className="text-[10px] text-slate-400">IGI Permit &amp; Type D/AM</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaBuildingColumns className="w-4 h-4 text-blue-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">100,000+ Annual Quota</div>
                      <div className="text-[10px] text-slate-400">Urgent Industrial Demand</div>
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
                    <span>Browse Romania Jobs</span>
                  </Link>

                  <a
                    href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20Romania%20Work%20Permit%20(Aviz%20de%20Angajare)%20and%20Jobs%20for%202026."
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
                        src="https://flagcdn.com/w160/ro.png"
                        alt="Romania Flag"
                        className="h-10 w-14 object-cover rounded-xl shadow-md border border-white/25 shrink-0"
                      />
                      <div>
                        <h2 className="text-xl font-display font-extrabold text-white">Romania (România)</h2>
                        <p className="text-xs text-emerald-300 font-medium">Bucharest • Cluj • Timișoara • Constanța • Iași</p>
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
                      <span className="font-bold text-white">Aviz de Angajare (IGI Approval)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Consular Visa Category:</span>
                      <span className="font-bold text-emerald-300">Type D/AM Long-Stay Visa</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">In-Country Residence Card:</span>
                      <span className="font-bold text-white">Permis de Ședere (Single Permit)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Statutory Income Tax:</span>
                      <span className="font-bold text-amber-300">10% Flat Rate</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Average Monthly In-Hand:</span>
                      <span className="font-bold text-emerald-300">3,500 – 6,000 RON (₹65k – ₹1.10L)</span>
                    </div>

                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Permanent Residence Pathway:</span>
                      <span className="font-bold text-emerald-300">5 Continuous Years Lawful Stay</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-950/50 border border-emerald-500/30 p-3.5 text-center text-xs text-slate-300">
                    <div className="flex items-center justify-center gap-2 text-emerald-300 font-semibold mb-0.5">
                      <FaShieldHalved className="w-3.5 h-3.5 text-emerald-400" />
                      <span>IGI &amp; Ministry of Internal Affairs Approved</span>
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
              Romania Comprehensive Master Guide Directory:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#overview" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                1. Schengen Economy &amp; Manpower Quota
              </a>
              <a href="#industrial-hubs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                2. Key Cities &amp; Industrial Regions
              </a>
              <a href="#government-portals" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                3. Official Government Portals &amp; IGI
              </a>
              <a href="#visa-pathways" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                4. Aviz de Angajare &amp; Single Permit Tracks
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
                12. Airport Arrival (OTP) &amp; First 48 Hours
              </a>
              <a href="#scam-warning" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                13. Anti-Scam Advisory &amp; Schengen Warnings
              </a>
              <a href="#faqs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                14. Frequently Asked Questions (16 FAQs)
              </a>
            </div>
          </div>
        </section>

        {/* ── Main Content Container ─────────────────────────── */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">

          {/* ── Section 1: Strategic Schengen Overview ── */}
          <section id="overview" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaGlobe className="w-3.5 h-3.5 text-emerald-600" />
              Section 1: Strategic Schengen Expansion &amp; Romanian Labor Market
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Why Romania Has Become the Number One European Destination for Indian Craftsmen
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              With full integration into the <strong className="font-semibold text-slate-900">European Schengen Area</strong>, multi-billion-Euro EU recovery funds pouring into national motorways, rail modernization, and commercial infrastructure, Romania has experienced an unprecedented surge in demand for international skilled labor. The Romanian government allocates an official annual contingent of <strong className="font-semibold text-slate-900">100,000 newly admitted non-EU foreign workers</strong> to fill severe domestic shortages created by local workers migrating to Western Europe.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Under <strong className="font-semibold text-slate-900">Government Ordinance No. 25/2014</strong>, verified Romanian companies apply for an official <strong className="font-semibold text-slate-900">Employment Authorization (Aviz de Angajare)</strong> through the General Inspectorate for Immigration (IGI). Indian candidates receive a National Long-Stay Employment Visa (Type D/AM) and convert to an official plastic Single Permit (Permis de Ședere) upon arrival, granting complete legal residency, healthcare, and Schengen mobility.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                  <FaBuildingColumns className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Official IGI Work Permits
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every legal placement operates under a verified government <strong className="font-semibold text-slate-900">Aviz de Angajare</strong> issued by IGI. The permit carries an authentic barcode and file number, protecting workers from fake agent offers.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                  <FaCoins className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  3,700 – 4,582 RON Min Wage &amp; High Savings
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  National minimum wage is <strong className="font-semibold text-slate-900">3,700 RON gross</strong>, with construction trades benchmarked at <strong className="font-semibold text-slate-900">4,582 RON gross</strong>. Experienced welders, drivers, and chefs earn 4,500 to 6,200 RON net (~₹83,000 to ₹1,15,000 INR). With free housing, monthly savings exceed 70%.
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
                  Both ECR and ECNR Indian passport holders are fully eligible without PoE friction. Zero English IELTS tests are required, and recruitment is based strictly on hands-on practical trade evaluations and clean criminal records.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 2: Cities & Industrial Clusters ── */}
          <section id="industrial-hubs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaLocationDot className="w-3.5 h-3.5 text-emerald-600" />
              Section 2: Major Hiring Cities &amp; Industrial Regions
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Where the Jobs Are: Romania&apos;s Leading Employment Corridors
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              WorkWise Visa places skilled Indian tradespeople into vetted enterprises operating across Romania&apos;s primary economic regions:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Bucharest &amp; Ilfov County</span>
                  <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Capital &amp; Infrastructure</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The primary economic powerhouse. Massive demand for civil masons, shuttering carpenters, steel fixers, MEP electricians, central warehouse logistics personnel, and restaurant chefs.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Cluj-Napoca (Transylvania)</span>
                  <span className="text-[10px] font-bold uppercase bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full">High-Tech &amp; Civil</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Romania&apos;s second-largest metropolitan center. High-rise residential construction, smart city infrastructure, commercial HVAC installation, and luxury hotel culinary operations.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Timișoara &amp; Arad (West)</span>
                  <span className="text-[10px] font-bold uppercase bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Automotive &amp; Manufacturing</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Located near the Hungarian border with direct European transit access. Focus on automotive wiring harness production, CNC machine tooling, electrical assembly, and commercial truck transport.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Constanța (Black Sea Port)</span>
                  <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Shipbuilding &amp; Marine</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Major European Black Sea port and shipyard cluster. Urgent recruitment for certified 6G TIG/MIG welders, naval structural fabricators, pipe fitters, crane operators, and dock mechanics.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Iași &amp; Bacău (Moldavia)</span>
                  <span className="text-[10px] font-bold uppercase bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Light Industry &amp; Roads</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-speed motorway construction (Autostrada A7 corridor), apparel and footwear manufacturing, agro-industrial processing, and heavy earthmoving machinery operators.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Brașov &amp; Sibiu</span>
                  <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Engineering &amp; Tourism</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Central mountain hub featuring aerospace component fabrication, precision bearings manufacturing, ski resort hospitality culinary positions, and logistics parks.
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
              Master Directory of Official Romanian State Authorities &amp; Verification Gateways
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Verify your employer credentials, Work Authorization (Aviz de Angajare), and Type D/AM visa directly through official Romanian government portals ending in <strong className="font-semibold text-slate-900">.ro</strong>:
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
                    <td className="p-4 font-bold text-slate-900">General Inspectorate for Immigration (IGI)</td>
                    <td className="p-4">Ministry of Internal Affairs (MAI)</td>
                    <td className="p-4">
                      <a href="https://igi.mai.gov.ro" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                        igi.mai.gov.ro
                      </a>
                    </td>
                    <td className="p-4 text-slate-600">Work Authorization (Aviz de Angajare) filing &amp; residence permits</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Romanian eVisa Portal (MAE)</td>
                    <td className="p-4">Ministry of Foreign Affairs of Romania</td>
                    <td className="p-4">
                      <a href="https://eviza.mae.ro" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                        eviza.mae.ro
                      </a>
                    </td>
                    <td className="p-4 text-slate-600">Online Type D/AM Long-Stay Visa application &amp; status tracking</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">National Employment Agency (ANOFM)</td>
                    <td className="p-4">Ministry of Labour and Social Solidarity</td>
                    <td className="p-4">
                      <a href="https://www.anofm.ro" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                        anofm.ro
                      </a>
                    </td>
                    <td className="p-4 text-slate-600">Labor market adequacy certificate (Adeverință de muncă)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">National Agency for Fiscal Administration (ANAF)</td>
                    <td className="p-4">Ministry of Finance</td>
                    <td className="p-4">
                      <a href="https://www.anaf.ro" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                        anaf.ro
                      </a>
                    </td>
                    <td className="p-4 text-slate-600">Employer fiscal clearance certificate &amp; CUI validation</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Embassy of Romania in New Delhi</td>
                    <td className="p-4">Sovereign diplomatic mission in India</td>
                    <td className="p-4">
                      <span className="text-slate-800 font-medium">D-6/6, Vasant Vihar, New Delhi</span>
                    </td>
                    <td className="p-4 text-slate-600">Consular interviews, PCC validation &amp; visa foil stamping</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 4: Aviz de Angajare & Work Permit Pathways ── */}
          <section id="visa-pathways" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaFileContract className="w-3.5 h-3.5 text-emerald-600" />
              Section 4: Statutory Work Authorization Classifications
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The 4 Legal Work &amp; Residence Tracks Under Ordinance No. 25/2014
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-bold">
                  Pathway 1: Primary Trade Track
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Standard Permanent Worker Permit (Lucrător Permanent)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The primary statutory work authorization for full-time trade workers, welders, masons, carpenters, machine operators, drivers, and chefs. Issued for initial 1-year contracts with seamless annual renewals. Grants full residence rights and path to 5-year permanent residence.
                </p>
                <div className="pt-2 text-xs font-bold text-slate-700 space-y-1">
                  <div>• Processing Time: 6 to 10 Weeks total</div>
                  <div>• Initial Validity: 1 Year (Renewable up to 5 Years)</div>
                  <div>• Permanent Residence: Eligible after 5 continuous years of lawful stay</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-teal-100 text-teal-800 px-3 py-1 text-xs font-bold">
                  Pathway 2: Seasonal Track
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Seasonal Worker Permit (Lucrător Sezonier)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tailored for Black Sea resort tourism in Mamaia and Constanța, and commercial agro-harvesting. Valid for up to 6 months within a 12-month period, often transitioning into permanent year-round contracts upon employer renewal.
                </p>
                <div className="pt-2 text-xs font-bold text-slate-700 space-y-1">
                  <div>• Processing Time: 4 to 6 Weeks</div>
                  <div>• Validity: Up to 6 Months</div>
                  <div>• Free Resort Accommodation &amp; Duty Meals mandated</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-blue-100 text-blue-800 px-3 py-1 text-xs font-bold">
                  Pathway 3: Highly Qualified Specialists
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Highly Skilled EU Blue Card Track (Lucrător Înalt Calificat)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Reserved for degree-holding civil engineers, senior MEP consultants, IT software architects, and medical specialists. Requires a gross salary of at least 2 times the national average gross wage, granting 2-year residence cards with immediate family reunification.
                </p>
                <div className="pt-2 text-xs font-bold text-slate-700 space-y-1">
                  <div>• Gross Salary Floor: ~15,000+ RON/Month (~€3,000+)</div>
                  <div>• Family Sponsorship: Immediate spouse and child dependent passes</div>
                  <div>• Accelerated EU Schengen mobility privileges</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-amber-100 text-amber-800 px-3 py-1 text-xs font-bold">
                  Pathway 4: Corporate Mobility
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Intra-Corporate Detached Worker (Lucrător Detașat)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For multinational engineering and construction contractors deploying specialized technical foremen, quality inspectors, or site supervisors from Indian parent entities to Romanian infrastructure projects for up to 1 to 3 years.
                </p>
                <div className="pt-2 text-xs font-bold text-slate-700 space-y-1">
                  <div>• Exemption: Direct corporate detachment clearance</div>
                  <div>• Validity: Up to 3 Years continuous deployment</div>
                  <div>• Smooth transition to multi-year Romanian single permits</div>
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
              Master Romania Salary Schedule (RON, EUR &amp; INR Net Equivalents)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Salaries in Romania are paid in <strong className="font-semibold text-slate-900">Romanian Leu (RON / lei)</strong> or benchmarked in <strong className="font-semibold text-slate-900">Euros (€)</strong>. Realistic 2026 market conversion benchmarks: <strong className="font-semibold text-slate-900">1.00 RON ≈ ₹18.00 – ₹19.00 INR ≈ €0.20 EUR ≈ $0.22 USD</strong>.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-bold uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="p-4">Trade / Professional Role</th>
                    <th className="p-4">Monthly Basic (RON)</th>
                    <th className="p-4">Approx. EUR (€)</th>
                    <th className="p-4">Net Monthly In-Hand (INR ₹)</th>
                    <th className="p-4">Mandatory Employer Benefits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">2026 Construction Statutory Minimum</td>
                    <td className="p-4 font-mono font-bold text-slate-800">4,582 RON gross</td>
                    <td className="p-4 font-mono">€915</td>
                    <td className="p-4 font-bold text-emerald-700">₹65,000 – ₹68,000 net</td>
                    <td className="p-4 text-slate-500">Statutory Construction Sector Floor (40 hrs/wk)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Civil Mason / Bricklayer / Plasterer</td>
                    <td className="p-4 font-mono font-bold text-slate-800">4,800 – 6,000 RON</td>
                    <td className="p-4 font-mono">€960 – €1,200</td>
                    <td className="p-4 font-bold text-emerald-700">₹68,000 – ₹85,000 net</td>
                    <td className="p-4 text-slate-500">Free Accommodation, Site Bus, Overtime (1.25x)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Shuttering Carpenter / Steel Fixer</td>
                    <td className="p-4 font-mono font-bold text-slate-800">5,000 – 6,200 RON</td>
                    <td className="p-4 font-mono">€1,000 – €1,240</td>
                    <td className="p-4 font-bold text-emerald-700">₹71,000 – ₹88,000 net</td>
                    <td className="p-4 text-slate-500">Free Shared Flat, PPE Kits, Safety Gear</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">MIG / MAG / Structural Welder</td>
                    <td className="p-4 font-mono font-bold text-slate-800">5,200 – 6,800 RON</td>
                    <td className="p-4 font-mono">€1,040 – €1,360</td>
                    <td className="p-4 font-bold text-emerald-700">₹74,000 – ₹97,000 net</td>
                    <td className="p-4 text-slate-500">Free Housing, Safety Equipment, Overtime</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">6G TIG / High-Pressure Pipe Welder</td>
                    <td className="p-4 font-mono font-bold text-slate-800">6,000 – 8,000 RON</td>
                    <td className="p-4 font-mono">€1,200 – €1,600</td>
                    <td className="p-4 font-bold text-emerald-700">₹85,000 – ₹1,14,000 net</td>
                    <td className="p-4 text-slate-500">Premium Flat, Food Allowance, Medical Insurance</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Building Electrician &amp; Plumber</td>
                    <td className="p-4 font-mono font-bold text-slate-800">4,800 – 6,200 RON</td>
                    <td className="p-4 font-mono">€960 – €1,240</td>
                    <td className="p-4 font-bold text-emerald-700">₹68,000 – ₹88,000 net</td>
                    <td className="p-4 text-slate-500">Free Housing, Tools Kit, Utilities Included</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Heavy Truck Driver (Cat C/CE)</td>
                    <td className="p-4 font-mono font-bold text-slate-800">5,500 – 7,500 RON</td>
                    <td className="p-4 font-mono">€1,100 – €1,500</td>
                    <td className="p-4 font-bold text-emerald-700">₹78,000 – ₹1,07,000 net</td>
                    <td className="p-4 text-slate-500">Per-Diem Allowance, Fuel Card, Company Base Room</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Hydraulic Excavator / JCB Operator</td>
                    <td className="p-4 font-mono font-bold text-slate-800">5,200 – 6,800 RON</td>
                    <td className="p-4 font-mono">€1,040 – €1,360</td>
                    <td className="p-4 font-bold text-emerald-700">₹74,000 – ₹97,000 net</td>
                    <td className="p-4 text-slate-500">Site Accommodation, Free Lunch, Overtime</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Hotel Chef / Line Cook (Bucharest/Resorts)</td>
                    <td className="p-4 font-mono font-bold text-slate-800">4,800 – 6,500 RON</td>
                    <td className="p-4 font-mono">€960 – €1,300</td>
                    <td className="p-4 font-bold text-emerald-700">₹68,000 – ₹92,000 net</td>
                    <td className="p-4 text-slate-500">Resort Room, 3 Free Duty Meals, Tips</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Warehouse Worker &amp; Reach Truck Driver</td>
                    <td className="p-4 font-mono font-bold text-slate-800">4,200 – 5,500 RON</td>
                    <td className="p-4 font-mono">€840 – €1,100</td>
                    <td className="p-4 font-bold text-emerald-700">₹60,000 – ₹78,000 net</td>
                    <td className="p-4 text-slate-500">Logistics Hostel, Attendance Bonus, Transport</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Garment Stitcher / Textile Operator</td>
                    <td className="p-4 font-mono font-bold text-slate-800">3,800 – 4,800 RON</td>
                    <td className="p-4 font-mono">€760 – €960</td>
                    <td className="p-4 font-bold text-emerald-700">₹54,000 – ₹68,000 net</td>
                    <td className="p-4 text-slate-500">Factory Hostel, Production Incentive Bonuses</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Civil / MEP Site Foreman</td>
                    <td className="p-4 font-mono font-bold text-slate-800">7,500 – 11,000 RON</td>
                    <td className="p-4 font-mono">€1,500 – €2,200</td>
                    <td className="p-4 font-bold text-emerald-700">₹1,07,000 – ₹1,56,000 net</td>
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
              The 6-Stage Legal Roadmap from India to Your Romanian Single Permit Card
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
                    Candidate completes practical skill evaluation (welding coupons, electrical layout, heavy vehicle driving trial) at authorized WorkWise Visa centers in Patna, Noida, or Delhi. Sponsoring Romanian company issues a legally binding bilingual <strong className="font-semibold text-slate-900">Romanian-English Employment Contract</strong> detailing exact salary in RON, working hours, and employer housing commitments.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center shrink-0">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    ANOFM Labor Clearance &amp; IGI Aviz de Angajare Filing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The employer secures a labor clearance certificate (<em className="text-slate-700">Adeverință de muncă</em>) from ANOFM and submits the work permit application directly to the <a href="https://igi.mai.gov.ro" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:underline">General Inspectorate for Immigration (IGI)</a>. IGI verifies company tax standing, job quotas, and issues the official <strong className="font-semibold text-slate-900">Work Authorization (Aviz de Angajare)</strong> with official barcode within 3 to 5 weeks.
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
                    Applicant secures a Police Clearance Certificate strictly from their Regional Passport Office / PSK in India. The original PCC must have a <strong className="font-semibold text-slate-900">Ministry of External Affairs (MEA) Hague Apostille sticker</strong> affixed. WorkWise Visa arranges sworn translation of the apostilled PCC into Romanian (<em className="text-slate-700">Traducere Legalizată</em>).
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center shrink-0">
                  4
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    National Type D/AM Employment Visa Filing &amp; Embassy Stamping
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Candidate submits the electronic visa dossier on <a href="https://eviza.mae.ro" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:underline">eviza.mae.ro</a> under <strong className="font-semibold text-slate-900">Type D/AM Visa</strong>. The Consular Department and the <strong className="font-semibold text-slate-900">Embassy of Romania in New Delhi</strong> review the file and stamp the official Schengen-compliant visa foil into the passport.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center shrink-0">
                  5
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    Flight to Bucharest Henri Coandă Airport (OTP)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Worker boards a flight connecting via Istanbul (Turkish Airlines / Pegasus), Doha (Qatar Airways), or Dubai (flydubai) landing in Bucharest (OTP). At border control, candidate presents their passport with stamped D/AM visa, original Aviz de Angajare, and company housing letter. Company HR receives the worker at the arrival terminal.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center shrink-0">
                  6
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    IGI Biometric Registration &amp; Single Residence Card Issue
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Within 30 to 60 days of arrival, employer HR accompanies the worker to the regional <strong className="font-semibold text-slate-900">Inspectoratul General pentru Imigrări (IGI)</strong> office. Candidate records biometric fingerprints, digital photo, and receives the official laminated plastic <strong className="font-semibold text-slate-900">Single Residence Permit (Permis de Ședere în Scop de Muncă)</strong>.
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
              Because Romania is an active signatory of the 1961 Hague Apostille Convention, all Indian public documents must carry official MEA Apostille legalization:
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
                  Bilingual Employment Contract (Contract Individual de Muncă)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Executed dual-column Romanian-English contract detailing exact monthly wage in RON, 40-hour work schedule, overtime multipliers, and company housing terms.
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
                  Notarized residential lease agreement or official employer housing declaration guaranteeing clean living quarters in Bucharest, Cluj, Timișoara, or Constanța.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Trade Certificates &amp; Experience Records
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ITI trade certificates, welding qualification cards, commercial HTV driving licenses, or previous Gulf/domestic experience slips translated into English or Romanian.
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
              Transparent Breakdown of Statutory Romanian Immigration Fees
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-bold uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="p-4">Administrative Milestone</th>
                    <th className="p-4">Paid To Authority</th>
                    <th className="p-4">Official Amount (RON / EUR)</th>
                    <th className="p-4">Approx. INR Equivalent</th>
                    <th className="p-4">Statutory Responsibility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">IGI Aviz de Angajare Permit Tariff</td>
                    <td className="p-4">State Treasury (IGI)</td>
                    <td className="p-4 font-mono font-bold">€100 EUR equivalent (~500 RON)</td>
                    <td className="p-4">~₹9,100</td>
                    <td className="p-4 font-bold text-emerald-700">Romanian Employer</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Type D/AM Long-Stay Visa Fee</td>
                    <td className="p-4">MAE Consular Department</td>
                    <td className="p-4 font-mono font-bold">€120 EUR</td>
                    <td className="p-4">~₹10,900</td>
                    <td className="p-4 text-slate-600">Candidate / Employer Package</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">IGI Single Residence Permit Card</td>
                    <td className="p-4">IGI Immigration County Service</td>
                    <td className="p-4 font-mono font-bold">259 RON card fee + 120 EUR tariff</td>
                    <td className="p-4">₹15,000 – ₹16,000</td>
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
              Ground Reality: Food, Accommodation &amp; Day-to-Day Life in Romania
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Before moving to Romania, Indian tradesmen want to know: <em className="text-slate-700 font-medium">&quot;Can we cook Indian food? Are Indian spices available? How are the accommodations?&quot;</em> Here is the verified ground reality from workers currently in Bucharest, Cluj, and Timișoara:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
                  <FaBed className="w-5 h-5 text-emerald-600" />
                  Company Apartment Reality
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Licensed employers in construction, metallurgy, and logistics provide <strong className="font-semibold text-slate-900">free shared company flats or worker residential centers</strong> (typically 2 to 4 workers per room). Facilities include clean western bathrooms, hot water heaters, automatic washing machines, and winter heating radiators. Electricity, water, and heating bills are fully funded by the company.
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
                  Apartments feature equipped gas or electric kitchens. Indian workers cook together in small groups of 3 to 4, sharing cooking tasks and grocery bills. Common staples are widely sold at supermarkets like Carrefour, Kaufland, Lidl, Mega Image, Profi, or local green markets:
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-700 space-y-1">
                  <div>• White Basmati / Long-grain Rice: ~7.00 – 9.00 RON/kg (₹130 – ₹170)</div>
                  <div>• Wheat Flour (Făină albă): ~3.50 – 5.00 RON/kg (₹65 – ₹95)</div>
                  <div>• Lentils / Dal (Linte): ~10.00 – 14.00 RON/kg (₹185 – ₹260)</div>
                  <div>• Fresh Chicken Breast/Legs: ~18.00 – 24.00 RON/kg (₹330 – ₹445)</div>
                  <div>• Eggs: ~12.00 – 15.00 RON for 10 eggs (₹220 – ₹280)</div>
                  <div>• Sunflower Cooking Oil: ~7.00 – 9.00 RON/litre (₹130 – ₹170)</div>
                  <div>• Fresh Tomatoes &amp; Onions: ~4.00 – 6.00 RON/kg (₹75 – ₹110)</div>
                </div>
                <p className="text-[11px] text-emerald-800 font-bold">
                  Realistic Grocery Cost: Approximately 800 to 1,100 RON (~₹14,500 to ₹20,000 INR) per worker monthly for generous, healthy home-cooked meals.
                </p>
              </div>
            </div>

            {/* Weather & Climate Reality */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <FaCloudSun className="w-5 h-5 text-amber-500" />
                Romania Climate: Four Distinct Seasons
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Summers in Bucharest, Timișoara, and coastal Constanța are sunny and pleasant (26°C to 34°C). Winters (December through February) are cold, typically hovering between -3°C and 5°C with light to moderate snowfall. Sponsoring employers provide high-efficiency central radiators in residential flats and heavy-duty winter thermal safety jackets and insulated work boots on job sites.
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
              Under Romanian banking regulations, all legal salaries must be deposited directly into personal bank accounts via electronic transfer. Cash salary payments are strictly prohibited.
            </p>

            <div className="grid sm:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">Opening Your Bank Account</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  During your initial 2 weeks, employer HR assists you in opening an account at leading Romanian financial institutions such as <strong className="font-semibold text-slate-900">Banca Transilvania (BT)</strong>, <strong className="font-semibold text-slate-900">BCR</strong>, or <strong className="font-semibold text-slate-900">BRD</strong>. You receive an international Visa/Mastercard debit card and a personal IBAN number starting with <strong className="font-mono text-slate-800">RO...</strong>.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">Monthly Salary Crediting</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Salaries are credited between the 5th and 10th of every month in Romanian Leu (RON). You receive an official printed pay slip (<em className="text-slate-700">Fluturaș de salariu</em>) showing gross earnings, basic hours, overtime hours, and statutory 10% tax and social deductions.
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
              Section 11: Romanian Labour Code &amp; Taxation Standards
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Worker Protections Under the Romanian Labour Code (Codul Muncii)
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">40-Hour Standard Work Week</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Under the Romanian Labour Code (Codul Muncii), standard working hours are 8 hours per day, 5 days per week (40 hours weekly). Overtime is compensated at a mandatory premium of at least 75% above standard hourly rates, or compensated with paid time off.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">20 Working Days Paid Annual Leave</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every employee with 1 year of continuous service is statutorily entitled to at least 20 working days of fully paid annual leave, plus 15 official national public holidays recognized under Romanian law.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">Comprehensive State Healthcare</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Monthly social health contributions (CASS 10%) cover free medical treatment in state hospitals, prescription subsidies, and workplace accident protection across Romania with an official health insurance card.
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
              Arriving at Bucharest Henri Coandă Airport (OTP): What to Expect
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To ensure hassle-free entry into Romania and the European Schengen Area, follow these proven practical guidelines:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="font-bold text-slate-900 text-base">Flight Routes &amp; Transit Rules</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Most flights from Delhi, Mumbai, or Lucknow connect via <strong className="font-semibold text-slate-900">Istanbul (Turkish Airlines / Pegasus)</strong>, <strong className="font-semibold text-slate-900">Doha (Qatar Airways)</strong>, or <strong className="font-semibold text-slate-900">Dubai (flydubai)</strong> directly into Bucharest Henri Coandă International Airport (OTP).
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-700 space-y-1">
                  <div>• Transit in Istanbul: No transit visa required if layover is under 24 hours and you remain in the international transit area.</div>
                  <div>• Airport SIM: Purchase a local Vodafone Romania or Orange SIM card right inside the OTP arrival terminal for 30–40 RON.</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="font-bold text-slate-900 text-base">Documents to Carry in Hand Luggage</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Never place your critical legal papers in checked baggage. Keep these in your personal hand cabin bag for the Romanian Border Police officer:
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-700 space-y-1">
                  <div>1. Original Passport with stamped Type D/AM Schengen Visa.</div>
                  <div>2. Original or certified printed copy of your IGI Aviz de Angajare with barcode.</div>
                  <div>3. Signed bilingual Romanian-English employment contract.</div>
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
                WARNING: The &quot;Romania as a Gateway to Run to Germany/Italy&quot; Trap
              </div>
              <p className="leading-relaxed">
                Unscrupulous local sub-agents across Punjab, Haryana, UP, and Bihar frequently charge ₹6 to ₹10 Lakhs promising: <em className="text-red-950 font-medium">&quot;Take a Romania work permit, land in Bucharest, and our handlers will take you across the border into Germany, France, or Italy to work illegally.&quot;</em>
              </p>
              <div className="font-bold text-red-950">
                THIS IS A DANGEROUS HUMAN TRAFFICKING TRAP. UNDERSTAND THE REALITY:
              </div>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong className="font-bold text-red-950">Work Permits Are Country-Specific:</strong> While Romania is in the Schengen Area for travel, your work permit legally authorizes employment <strong className="font-bold text-red-950">strictly with your sponsoring Romanian company</strong>.
                </li>
                <li>
                  <strong className="font-bold text-red-950">Aggressive European Labor Enforcement:</strong> German, French, and Austrian authorities conduct strict unannounced workplace checks. If caught working illegally outside Romania, you face immediate arrest, detention, deportation to India, and a <strong className="font-bold text-red-950">5 to 10 Year Schengen SIS Blacklist</strong>.
                </li>
                <li>
                  <strong className="font-bold text-emerald-900">Work Legally in Romania:</strong> Romania offers excellent wages, rapid economic growth, safe European living standards, and legal pathways to European permanent residency. Work legally, build your international trade record, and enjoy genuine European prosperity.
                </li>
              </ul>
            </div>
          </section>

          {/* ── Section 14: FAQs ── */}
          <section id="faqs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaCircleQuestion className="w-3.5 h-3.5 text-emerald-600" />
              Section 14: Frequently Asked Questions (Romania Work Permits 2026)
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Essential Answers for Indian Candidates Migrating to Romania
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
                href="/countries/croatia"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                    Schengen Neighbor
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
                href="/countries/bulgaria"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                    Balkan Schengen Peer
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    Bulgaria Work Visa &amp; Single Permit 2026
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    10% flat income tax, Schengen mobility, and heavy industrial welding demand.
                  </p>
                </div>
                <span className="text-xs font-bold text-emerald-700 mt-3 inline-flex items-center gap-1">
                  Read Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/countries/albania"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md inline-block">
                    Adriatic Hub
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    Albania Work Visa &amp; Jobs Guide 2026
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Unique Permits (Leje Unike), 50,000 ALL min wage &amp; fast-track 4–8 week e-permits.
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
                    View Live Romania Vacancies
                  </h3>
                  <p className="text-xs text-emerald-800/80 line-clamp-2">
                    Verified client demands for civil masons, welders, chefs, and machine operators.
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
                  Verify Your Trade Profile for Romania Employment 2026
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Submit your passport copy and trade credentials to our specialized European placement desk. We verify sponsor legitimacy, IGI Aviz de Angajare vacancy quotas, and direct employment contracts with 100% employer-provided housing.
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free Evaluation for Welders, Drivers, Masons, Cooks &amp; Technicians</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Authorized Type D/AM Visa &amp; New Delhi Embassy Stamping Support</span>
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
                          placeholder="e.g. 6G Welder, Mason, Chef"
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
                        value="Romania (Schengen & Europe)"
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-emerald-400 font-bold focus:outline-none cursor-not-allowed"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3.5 text-sm font-bold text-slate-950 shadow-md hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                      >
                        <span>Submit Romania Profile For Free Audit</span>
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

