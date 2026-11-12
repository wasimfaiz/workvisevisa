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
  title: "Albania Work Visa & Jobs Guide 2026: Unique Permit (Leje Unike), e-Visa & Salaries | WorkWise Visa",
  description:
    "Complete 2026 ground-reality guide to Albania work visas for Indian skilled workers, civil trades, 6G welders, hotel chefs, heavy drivers, and factory technicians. Learn e-Albania Unique Permit (Leje Unike) approvals, 50,000 ALL minimum wage, Type D visa stamping at New Delhi Embassy, free housing, and scam verification.",
  keywords: [
    "Albania work visa 2026",
    "Albania work visa for Indian citizens",
    "Albania work permit process in India",
    "Albania Unique Permit Leje Unike",
    "e-albania work permit application",
    "e-visa albania Type D long stay visa",
    "Embassy of Albania New Delhi visa",
    "Albania jobs for Indian welders masons drivers",
    "Albania minimum wage 2026 ALL EUR INR",
    "Cost of living Albania vs monthly savings INR",
    "WorkWise Visa Albania recruitment partner",
    "How to get work permit in Albania from India",
    "Albania construction hospitality jobs Tirana Durres",
    "Law No 79 2021 on Foreigners Albania",
    "National Employment Agency AKPA Albania",
    "PCC MEA Apostille for Albania visa",
  ],
  alternates: {
    canonical: `${BASE_URL}/countries/albania`,
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
    title: "Albania Work Visa & Jobs Guide 2026: Unique Permit (Leje Unike), e-Visa & Salaries | WorkWise Visa",
    description:
      "Comprehensive statutory manual for Indian professionals, skilled tradespeople, welders, hotel cooks, drivers, and engineers migrating to the Republic of Albania under Law No. 79/2021 On Foreigners and the unified e-Albania Leje Unike framework.",
    url: `${BASE_URL}/countries/albania`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: `${BASE_URL}/images/albania-work-visa-guide.webp`,
        width: 1200,
        height: 630,
        alt: "Albania Work Visa & Employment Master Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Albania Work Visa & Jobs Guide 2026: Unique Permit (Leje Unike), e-Visa & Salaries | WorkWise Visa",
    description:
      "Complete 2026 Albania work visa guide for Indian workers. Explore e-Albania Unique Permits (Leje Unike), Type D visas via e-visa.al, 50,000 ALL minimum wage, free company accommodation, and New Delhi Embassy stamping.",
    images: [`${BASE_URL}/images/albania-work-visa-guide.webp`],
  },
};

export default function AlbaniaCountryPage() {
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
        name: "Albania",
        item: `${BASE_URL}/countries/albania`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Albania Work Visa & Skilled Employment Guide 2026: Unique Permit (Leje Unike), e-Visa D Process, Salary Scales & European Compliance",
    description:
      "Authoritative statutory manual for Indian workers, industrial technicians, welders, chefs, and engineers migrating to the Republic of Albania under Law No. 79/2021 On Foreigners and the National Employment and Skills Agency (AKPA) framework.",
    image: `${BASE_URL}/images/albania-work-visa-guide.webp`,
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
    dateModified: "2026-11-12T00:00:00+02:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/countries/albania`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Albania Unique Permit (Leje Unike) and how do Indian citizens apply in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Unique Permit (Leje Unike) is the official consolidated statutory document created under Law No. 79/2021 'On Foreigners' that combines both work authorization and temporary residence into a single electronic permit. The Albanian employer initiates the filing through the official government portal e-albania.al with the National Employment and Skills Agency (AKPA) and Border & Migration Police. Once the preliminary permit approval is issued, the candidate applies for a National Long-Stay Type D Visa on e-visa.al or at the Embassy of the Republic of Albania in New Delhi.",
        },
      },
      {
        "@type": "Question",
        name: "What is the statutory minimum wage and typical salary for Indian workers in Albania in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Effective 2026, Albania's statutory national gross minimum wage is 50,000 Albanian Lek (ALL) per month (~€500 EUR / ~₹45,500 INR). Skilled trade roles command higher wages: 6G pipe welders earn 75,000 to 110,000 ALL (€750 to €1,100 / ₹68,000 to ₹1,00,000 INR), civil construction trades (masons, carpenters, steel fixers) earn 65,000 to 95,000 ALL (€650 to €950 / ₹59,000 to ₹86,000 INR), heavy commercial drivers earn 80,000 to 125,000 ALL (€800 to €1,250), and hotel chefs earn 70,000 to 110,000 ALL. Reputable employers provide 100% free furnished accommodation and site transport.",
        },
      },
      {
        "@type": "Question",
        name: "Is Albania part of the European Schengen Area, and can I travel across Europe with an Albanian work visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The Republic of Albania is an official candidate country for European Union accession and an active NATO member, but it is NOT a member of the Schengen Area. An Albanian Unique Permit (Leje Unike) authorizes legal residency and salaried employment strictly within Albanian sovereign territory. Traveling to Greece, Italy, or Montenegro for unauthorized employment is illegal and triggers criminal deportation and permanent European entry bans.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to process an Albanian work permit and Type D visa from India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The complete process from client trade interview to flight deployment generally takes 4 to 8 weeks: 2 to 3 weeks for e-Albania digital Unique Permit pre-approval, followed by 10 to 20 working days for electronic Type D visa issuance via e-visa.al and the Embassy of Albania in New Delhi.",
        },
      },
      {
        "@type": "Question",
        name: "Can Indian citizens holding ECR (non-matriculation) passports apply for Albania work permits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Albania is not among the 18 ECR-notified countries that require mandatory Protector of Emigrants (PoE) clearance under the Indian Emigration Act. Indian citizens holding either ECR or ECNR passports are fully eligible to apply and travel on valid Albanian Type D work visas without PoE friction.",
        },
      },
      {
        "@type": "Question",
        name: "Is Police Clearance Certificate (PCC) with MEA Apostille mandatory for Albania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Applicants must obtain a Police Clearance Certificate (PCC) issued by the Regional Passport Office (PSK/RPO) in India, legalized with a Hague Apostille sticker from the Ministry of External Affairs (MEA), and officially translated into Albanian for final residence card issuance by the Border & Migration Department.",
        },
      },
      {
        "@type": "Question",
        name: "Does the Albanian employer provide free food and accommodation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In nearly all licensed manufacturing, civil construction, heavy engineering, and resort hospitality contracts, employers provide 100% free furnished company apartments (2 to 4 workers per room with heating, clean bathrooms, and kitchen facilities) plus free daily transport to the job site. Food is generally self-cooked or subsidized through on-site canteens, costing approximately 14,000 to 18,000 ALL (~€140 to €180 / ₹12,700 to ₹16,300 INR) monthly.",
        },
      },
      {
        "@type": "Question",
        name: "Can a foreign worker switch employers in Albania after arrival?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, under Law No. 79/2021 'On Foreigners'. A worker can legally transfer to a new licensed employer if the initial contract is concluded, mutually released, or if the original employer breaches labor standards, provided the new sponsor submits a modified Unique Permit application to the Migration Directorate before the current permit expires.",
        },
      },
      {
        "@type": "Question",
        name: "What are the income tax and social insurance rates in Albania in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the modernized Albanian Income Tax Law, employment income up to 2,040,000 ALL per year (~€20,400 EUR) is taxed at a low rate of 13%, with income above that threshold taxed at 23%. Employee mandatory social and health insurance contributions total 11.2% (employer contributes 16.7%), granting complete access to public hospitals, emergency healthcare, and workplace injury coverage.",
        },
      },
      {
        "@type": "Question",
        name: "How can candidates spot and avoid fake Albanian work visa scams in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common scam red flags include: fake PDF visas lacking verifiable verification codes on e-visa.al, agents promising 'direct entry into Italy or Greece by boat/car via Albania', demands for ₹5 to ₹8 Lakhs in cash, and offers without an official Albanian company NIPT (tax ID) number. Always verify offer letters and e-permits directly through official government portals.",
        },
      },
      {
        "@type": "Question",
        name: "Is IELTS or Albanian language proficiency required for an Albanian work visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. There is zero IELTS or English test requirement, and no Albanian language test is mandated for blue-collar craftsmen, technicians, or hospitality personnel. Workplace instructions are conducted in English, Hindi with bilingual site supervisors, or through visual technical blueprints.",
        },
      },
      {
        "@type": "Question",
        name: "How can Indian workers send their monthly salary home from Albania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Workers receive legal salary deposits directly into their personal Albanian bank accounts (such as Banka Kombëtare Tregtare - BKT, Raiffeisen Bank Albania, or Credins Bank). Monthly remittances to Indian family accounts (SBI, HDFC, PNB) are processed smoothly via international SWIFT bank transfers, Western Union, or authorized exchange wire desks at competitive exchange rates.",
        },
      },
      {
        "@type": "Question",
        name: "Can my family join me in Albania on a dependent visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Law No. 79/2021, foreign workers who hold a valid Unique Permit for at least 1 continuous year and meet the statutory income threshold (demonstrating adequate living space and health coverage) are legally eligible to sponsor their spouse and minor children for Family Reunification residence permits.",
        },
      },
      {
        "@type": "Question",
        name: "Is an Indian driving license valid for commercial driving in Albania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An Indian commercial driving license (Heavy Transport Vehicle / HTV) accompanied by an International Driving Permit (IDP) is valid for the initial period. Employers sponsor the conversion to an Albanian official driving license (Category C or CE) through local driving authority examinations upon residence registration.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if my Albanian employer delays or fails to pay my salary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the Albanian Labour Code (Kodi i Punës), all salaries must be deposited via bank transfer by the 5th to 10th of every month. The State Labour Inspectorate (Inspektorati Shtetëror i Punës) strictly enforces wage payments. Non-payment gives the worker legal grounds to terminate the contract without penalty and legally transfer to another company with the assistance of the Migration Directorate.",
        },
      },
      {
        "@type": "Question",
        name: "What is the weather like in Albania, and do workers need winter clothing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Albania enjoys a comfortable Mediterranean climate. Summers in Tirana, Durrës, and Vlorë are sunny and warm (28°C to 36°C), while winters are mild and wet (6°C to 14°C) with occasional cold spells. Unlike northern or eastern European countries with extreme sub-zero snowstorms, standard winter jackets and waterproof thermal boots are sufficient.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Obtain an Albania Work Visa & Unique Permit (Leje Unike) from India in 2026",
    description:
      "A complete 6-stage statutory roadmap for Indian skilled workers, technicians, chefs, and drivers to secure e-Albania Unique Permit approval, New Delhi Embassy Type D visa stamping, and biometric residence cards in Albania.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Trade Skill Evaluation & Client Interview",
        text: "Candidate completes practical trade testing (welding, carpentry, electrical, culinary) at WorkWise Visa facilities and signs a bilingual Albanian-English employment contract.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "e-Albania Unique Permit (Leje Unike) Filing",
        text: "The Albanian employer files the digital Unique Permit request on e-albania.al with the National Employment Agency (AKPA) and Border & Migration Directorate.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Police Clearance Certificate (PCC) & MEA Apostille",
        text: "Applicant secures an official PSK Police Clearance Certificate in India, legalizes it with an MEA Hague Apostille sticker, and obtains certified translation.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "National Type D Employment Visa on e-visa.al",
        text: "Candidate submits the long-stay Type D visa dossier electronically via e-visa.al or through the Embassy of Albania in New Delhi for consular visa sticker issuance.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Travel to Tirana International Airport (TIA)",
        text: "Candidate flies to Tirana, clears border control with original contract, stamped Type D visa, and accommodation guarantee, and receives company airport pickup.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Police Registration & Biometric Residence Card Issue",
        text: "Within 30 days of arrival, the worker visits the local Border & Migration Department with employer HR to register fingerprints and receive the plastic Unique Permit card.",
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
              <span className="text-emerald-300 font-bold">Republic of Albania (Republika e Shqipërisë)</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Headlines & Key Stats */}
              <div className="lg:col-span-7 space-y-6">
                {/* Government & Authority Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Official 2026 Albania e-Albania &amp; Unique Permit (Leje Unike) Gateway
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                  Albania Work Visa &amp; Skilled Jobs Guide{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                    2026
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  The complete, practical ground-reality manual for Indian skilled tradesmen, 6G welders, civil workers, resort chefs, commercial drivers, and factory mechanics moving to Southeast Europe&apos;s fastest-growing Adriatic economy. Real facts on official{" "}
                  <strong className="font-bold text-white">Unique Permits (Leje Unike)</strong> under Law No. 79/2021, the{" "}
                  <strong className="font-bold text-emerald-300">50,000 ALL gross minimum wage</strong>, 4 to 8 week processing, free employer apartments, and visa stamping at the Embassy of Albania in New Delhi.
                </p>

                {/* Key Benefits Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaMoneyBillWave className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">50,000 ALL Min Wage</div>
                      <div className="text-[10px] text-slate-400">~€500 / ₹45.5k Base Pay</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaCoins className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">13% Tax Floor</div>
                      <div className="text-[10px] text-slate-400">Low European Tax Bracket</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaAward className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Unique Permit (Leje Unike)</div>
                      <div className="text-[10px] text-slate-400">1 to 5 Years Renewable</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaHouseUser className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">100% Free Housing</div>
                      <div className="text-[10px] text-slate-400">Company Flat &amp; Utilities</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaClock className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">4–8 Wks Processing</div>
                      <div className="text-[10px] text-slate-400">e-Visa D &amp; Fast Stamping</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaBuildingColumns className="w-4 h-4 text-blue-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">EU Candidate Nation</div>
                      <div className="text-[10px] text-slate-400">Adriatic &amp; Ionian Hub</div>
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
                    <span>Browse Albania Jobs</span>
                  </Link>

                  <a
                    href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20Albania%20Work%20Permit%20(Leje%20Unike)%20and%20Jobs%20for%202026."
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
                        src="https://flagcdn.com/w160/al.png"
                        alt="Albania Flag"
                        className="h-10 w-14 object-cover rounded-xl shadow-md border border-white/25 shrink-0"
                      />
                      <div>
                        <h2 className="text-xl font-display font-extrabold text-white">Republic of Albania</h2>
                        <p className="text-xs text-emerald-300 font-medium">Tirana • Durrës • Vlorë • Shkodër • Fier</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-xs font-bold text-emerald-300">
                      <FaShieldHalved className="w-3 h-3 text-emerald-400" />
                      EU Candidate
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Primary Work Authorization:</span>
                      <span className="font-bold text-white">Unique Permit (Leje Unike)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Government Filing System:</span>
                      <span className="font-bold text-emerald-300">e-Albania &amp; AKPA Portal</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Consular Stamping Window:</span>
                      <span className="font-bold text-white">4–8 Weeks (e-Visa / New Delhi)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Statutory Tax Benchmark:</span>
                      <span className="font-bold text-amber-300">13% Progressive Tax Floor</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Average Monthly In-Hand:</span>
                      <span className="font-bold text-emerald-300">65,000 – 110,000 ALL (₹59k – ₹1.0L)</span>
                    </div>

                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Permanent Residence Pathway:</span>
                      <span className="font-bold text-emerald-300">5 Continuous Years (Leje e Përhershme)</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-950/50 border border-emerald-500/30 p-3.5 text-center text-xs text-slate-300">
                    <div className="flex items-center justify-center gap-2 text-emerald-300 font-semibold mb-0.5">
                      <FaShieldHalved className="w-3.5 h-3.5 text-emerald-400" />
                      <span>AKPA &amp; Migration Directorate Approved</span>
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
              Albania Comprehensive Master Guide Directory:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#overview" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                1. Adriatic Economy &amp; Job Demand
              </a>
              <a href="#industrial-hubs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                2. Cities &amp; Industrial Clusters
              </a>
              <a href="#government-portals" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                3. Official Government Portals
              </a>
              <a href="#visa-pathways" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                4. Unique Permit (Leje Unike) Pathways
              </a>
              <a href="#salary-matrix" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                5. 2026 Salary &amp; INR Remittance
              </a>
              <a href="#deployment-pipeline" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                6. 6-Stage Application Roadmap
              </a>
              <a href="#document-checklist" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                7. RPO PCC &amp; MEA Apostille
              </a>
              <a href="#fee-schedule" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                8. Official Fee Schedule
              </a>
              <a href="#daily-life-groceries" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                9. Food, Groceries &amp; Indian Life
              </a>
              <a href="#banking-remittance" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                10. Bank Accounts &amp; Sending Money
              </a>
              <a href="#labour-law-tax" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                11. Labour Code, Overtime &amp; Tax
              </a>
              <a href="#airport-immigration" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                12. Airport Arrival &amp; TIA Border Check
              </a>
              <a href="#scam-warning" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                13. Anti-Scam Shield &amp; Schengen Warnings
              </a>
              <a href="#faqs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                14. Frequently Asked Questions (16 FAQs)
              </a>
            </div>
          </div>
        </section>

        {/* ── Main Content Container ─────────────────────────── */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">

          {/* ── Section 1: Strategic Balkan Overview ── */}
          <section id="overview" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaGlobe className="w-3.5 h-3.5 text-emerald-600" />
              Section 1: Strategic Balkan Overview &amp; Adriatic Expansion
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Why Albania Is Hiring Skilled Indian Craftsmen &amp; Technicians in 2026
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              For Indian skilled workers, certified 6G pipe welders, civil tradesmen, heavy commercial drivers, and hotel chefs, the <strong className="font-semibold text-slate-900">Republic of Albania</strong> has become one of the most accessible and practical work destinations in Europe. Because a large number of domestic Albanian youth have migrated to Western Europe, and billions of Euros in international funding are flowing into ports, luxury marinas, tunnels, and highways, licensed Albanian companies are actively turning to India for reliable, disciplined manpower.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Unlike the complex, year-long visa waits in Poland, Germany, or Malta, the Albanian government simplified foreign hiring under <strong className="font-semibold text-slate-900">Law No. 79/2021 &quot;On Foreigners&quot;</strong>. The modern digital application system allows genuine employers to secure government permit clearances within 3 to 4 weeks, with consular visa stamping completed in another 2 to 3 weeks at the Embassy in New Delhi.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                  <FaBuildingColumns className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Unified Digital Permit (Leje Unike)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Albania merged separate work permits and police residence cards into one single document: the <strong className="font-semibold text-slate-900">Unique Permit (Leje Unike)</strong>. Sponsoring companies file it directly online on the <strong className="font-semibold text-slate-900">e-Albania</strong> portal, cutting bureaucratic delay down to just 4 to 8 weeks.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                  <FaCoins className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  50,000 ALL Minimum Wage &amp; High Savings
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The statutory legal minimum wage is set at <strong className="font-semibold text-slate-900">50,000 ALL per month (approx. €500 EUR / ₹45,500 INR)</strong> for basic roles, while experienced welders, drivers, and chefs earn 75,000 to 125,000 ALL. Because companies provide free furnished accommodation, workers save 70% or more of their earnings.
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
                  Both ECR (non-matriculation) and ECNR Indian passport holders can apply. Albania does not require any English IELTS scores or local language exams for tradesmen. Selection is based purely on verified hands-on trade skills, genuine experience, and a clean police record.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 2: Cities & Industrial Clusters ── */}
          <section id="industrial-hubs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaLocationDot className="w-3.5 h-3.5 text-emerald-600" />
              Section 2: Major Hiring Cities &amp; Economic Hubs
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Where the Jobs Are: Key Employment Hubs in Albania
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              WorkWise Visa places skilled Indian tradespeople directly into vetted Albanian enterprises located in these main industrial and economic corridors:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Tirana (Capital)</span>
                  <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Metropolitan Hub</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Major demand for commercial high-rise construction workers, MEP building electricians, plumbers, HVAC technicians, warehouse logistics staff, and international hotel kitchen teams.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Durrës (Adriatic Coast)</span>
                  <span className="text-[10px] font-bold uppercase bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full">Port &amp; Mega Marina</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Home to Albania&apos;s primary seaport and the massive $2.5B Durrës Yachts &amp; Marina project. Strong hiring for 6G welders, structural steel fabricators, crane operators, and heavy truck drivers.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Vlorë &amp; Sarandë</span>
                  <span className="text-[10px] font-bold uppercase bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Riviera Tourism</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fast-growing luxury Mediterranean tourist destination with high demand for resort chefs, line cooks, hotel maintenance staff, and coastal highway tunnel infrastructure builders.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Elbasan &amp; Fier</span>
                  <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Heavy Industry &amp; Energy</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Center of Albania&apos;s metallurgical, oil refinery, and heavy industrial fabrication sectors. Sponsoring pipe welders, machine operators, hydraulic mechanics, and industrial electricians.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Shkodër (North)</span>
                  <span className="text-[10px] font-bold uppercase bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Manufacturing &amp; Apparel</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Northern manufacturing center specializing in textile processing, footwear factories, and automotive assembly lines seeking industrial pattern cutters, stitchers, and mechanics.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Korçë &amp; Lushnjë</span>
                  <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Agro-Processing</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Modern greenhouse agriculture, food packaging, and cold-storage distribution centers actively hiring agricultural equipment mechanics, tractor operators, and packaging technicians.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 3: Official Government Portals ── */}
          <section id="government-portals" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaShieldHalved className="w-3.5 h-3.5 text-emerald-600" />
              Section 3: Official Government Portals &amp; Sovereign Verification
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Master Directory of Official Albanian State Authorities &amp; Verification Gateways
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every genuine job offer, Unique Permit approval, electronic visa, and employer credential can be checked directly through official Albanian state websites ending in <strong className="font-semibold text-slate-900">.gov.al</strong> or <strong className="font-semibold text-slate-900">.al</strong>. Never trust unofficial paper documents that cannot be verified on these official portals:
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
                    <td className="p-4 font-bold text-slate-900">e-Albania Governmental Portal</td>
                    <td className="p-4">Central national digital public services portal</td>
                    <td className="p-4">
                      <a href="https://e-albania.al" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                        e-albania.al
                      </a>
                    </td>
                    <td className="p-4 text-slate-600">Filing &amp; tracking of the Unique Permit (Leje Unike)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Albanian e-Visa Portal</td>
                    <td className="p-4">Ministry for Europe and Foreign Affairs (MEFA)</td>
                    <td className="p-4">
                      <a href="https://e-visa.al" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                        e-visa.al
                      </a>
                    </td>
                    <td className="p-4 text-slate-600">Online Type D Long-Stay Visa application &amp; tracking</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">National Employment &amp; Skills Agency (AKPA)</td>
                    <td className="p-4">Labour market evaluations and corporate hiring quotas</td>
                    <td className="p-4">
                      <a href="https://akpa.gov.al" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                        akpa.gov.al
                      </a>
                    </td>
                    <td className="p-4 text-slate-600">Labour market test &amp; employer vacancy compliance</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">State Police &amp; Border Migration (ASP)</td>
                    <td className="p-4">Department for Border &amp; Migration (Policia e Shtetit)</td>
                    <td className="p-4">
                      <a href="https://asp.gov.al" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                        asp.gov.al
                      </a>
                    </td>
                    <td className="p-4 text-slate-600">Security clearances, entry registration &amp; biometric card</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">General Tax Directorate (DPT)</td>
                    <td className="p-4">Ministry of Finance and Economy corporate registry</td>
                    <td className="p-4">
                      <a href="https://www.tatime.gov.al" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                        tatime.gov.al
                      </a>
                    </td>
                    <td className="p-4 text-slate-600">Verify employer NIPT tax ID and active corporate standing</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Embassy of Albania in New Delhi</td>
                    <td className="p-4">Sovereign diplomatic mission in India</td>
                    <td className="p-4">
                      <span className="text-slate-800 font-medium">B-2, West End, New Delhi</span>
                    </td>
                    <td className="p-4 text-slate-600">Consular interviews, PCC attestation &amp; passport stickers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 4: 4 Legal Work Visa Pathways ── */}
          <section id="visa-pathways" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaFileContract className="w-3.5 h-3.5 text-emerald-600" />
              Section 4: Statutory Work Visa Classifications
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The 4 Legal Work &amp; Residence Pathways Under Law No. 79/2021
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-bold">
                  Pathway 1: Primary Track
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Standard Unique Permit for Employment (Leje Unike për Punësim)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The primary statutory permit for skilled trade workers, welders, machine operators, civil tradesmen, and commercial drivers. Issued initially for <strong className="font-semibold text-slate-900">1 year</strong> and renewable for <strong className="font-semibold text-slate-900">2 years</strong> and <strong className="font-semibold text-slate-900">5 years</strong>. Grants full legal residence and employment rights tied to the sponsoring Albanian enterprise.
                </p>
                <div className="pt-2 text-xs font-bold text-slate-700 space-y-1">
                  <div>• Processing Time: 4 to 8 Weeks</div>
                  <div>• Validity: 1 Year (Renewable up to 5 Years)</div>
                  <div>• PR Eligibility: Yes (After 5 Years of Lawful Stay)</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-teal-100 text-teal-800 px-3 py-1 text-xs font-bold">
                  Pathway 2: Seasonal Track
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Seasonal Work Permit (Leje Pune Sezonale)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tailored for coastal hospitality, tourism resorts (Sarandë, Vlorë, Durrës), and seasonal agriculture. Valid for up to <strong className="font-semibold text-slate-900">6 months within a 12-month period</strong>. Offers fast-track 2 to 4 week processing with lower state administrative duties, often transitioning into year-round Unique Permits.
                </p>
                <div className="pt-2 text-xs font-bold text-slate-700 space-y-1">
                  <div>• Processing Time: 2 to 4 Weeks</div>
                  <div>• Validity: Up to 6 Months</div>
                  <div>• Free Resort Accommodation &amp; Duty Meals Mandated</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-blue-100 text-blue-800 px-3 py-1 text-xs font-bold">
                  Pathway 3: Skilled Technical
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Highly Qualified Specialist (Punonjës i Kualifikuar)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Reserved for degree-holding civil engineers, electromechanical project managers, IT software architects, and clinical medical directors. Requires a minimum gross salary of at least 1.5 times the national average wage, granting 2-year permits with immediate family reunification rights.
                </p>
                <div className="pt-2 text-xs font-bold text-slate-700 space-y-1">
                  <div>• Gross Salary Floor: ~130,000+ ALL/Month (~€1,300+)</div>
                  <div>• Family Sponsorship: Immediate Spouse &amp; Dependent Pass</div>
                  <div>• Faster Processing via Expedited Ministerial Channels</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-amber-100 text-amber-800 px-3 py-1 text-xs font-bold">
                  Pathway 4: Corporate Mobility
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Intra-Corporate Transfer (Transferim Brenda Ndërmarrjes)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For multinational engineering and construction contractors transferring specialized senior technicians, quality inspectors, or site foremen from Indian parent entities to registered Albanian branch operations. Valid for up to 3 years without local labour market testing.
                </p>
                <div className="pt-2 text-xs font-bold text-slate-700 space-y-1">
                  <div>• Exemption: 100% Exempt from Local Labour Market Test</div>
                  <div>• Validity: Up to 3 Years Continuous Deployment</div>
                  <div>• Smooth Transition to Executive Long-Stay Residence</div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 5: 2026 Master Salary Matrix ── */}
          <section id="salary-matrix" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaMoneyBillWave className="w-3.5 h-3.5 text-emerald-600" />
              Section 5: Verified 2026 Salary Matrix &amp; Remittance Math
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Master Albania Salary Schedule (ALL, EUR &amp; INR Equivalents)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Salaries in Albania are paid in <strong className="font-semibold text-slate-900">Albanian Lek (ALL)</strong> or pegged directly in <strong className="font-semibold text-slate-900">Euros (€)</strong>. Realistic benchmark conversion rates: <strong className="font-semibold text-slate-900">100 ALL ≈ €1.00 EUR ≈ ₹91.00 INR</strong> (market rates as of 2026).
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-bold uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="p-4">Trade / Professional Role</th>
                    <th className="p-4">Monthly Basic (ALL)</th>
                    <th className="p-4">Approx. EUR (€)</th>
                    <th className="p-4">Net Monthly In-Hand (INR ₹)</th>
                    <th className="p-4">Mandatory Employer Benefits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">2026 Statutory Minimum Wage Floor</td>
                    <td className="p-4 font-mono font-bold text-slate-800">50,000 ALL</td>
                    <td className="p-4 font-mono">€500</td>
                    <td className="p-4 font-bold text-emerald-700">₹40,500 – ₹42,500 net</td>
                    <td className="p-4 text-slate-500">Statutory Legal Floor (40 hrs/wk)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Mason / Bricklayer / Plasterer</td>
                    <td className="p-4 font-mono font-bold text-slate-800">65,000 – 90,000 ALL</td>
                    <td className="p-4 font-mono">€650 – €900</td>
                    <td className="p-4 font-bold text-emerald-700">₹53,000 – ₹73,500 net</td>
                    <td className="p-4 text-slate-500">Free Accommodation, Transport, Overtime</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Shuttering Carpenter / Steel Fixer</td>
                    <td className="p-4 font-mono font-bold text-slate-800">70,000 – 95,000 ALL</td>
                    <td className="p-4 font-mono">€700 – €950</td>
                    <td className="p-4 font-bold text-emerald-700">₹57,000 – ₹77,500 net</td>
                    <td className="p-4 text-slate-500">Free Shared Apartment, PPE Kits, Overtime</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">MIG / MAG / Arc Welder</td>
                    <td className="p-4 font-mono font-bold text-slate-800">75,000 – 100,000 ALL</td>
                    <td className="p-4 font-mono">€750 – €1,000</td>
                    <td className="p-4 font-bold text-emerald-700">₹61,000 – ₹82,000 net</td>
                    <td className="p-4 text-slate-500">Free Housing, Safety Gear, Overtime (1.25x)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">6G TIG / High-Pressure Pipe Welder</td>
                    <td className="p-4 font-mono font-bold text-slate-800">90,000 – 130,000 ALL</td>
                    <td className="p-4 font-mono">€900 – €1,300</td>
                    <td className="p-4 font-bold text-emerald-700">₹73,500 – ₹1,06,000 net</td>
                    <td className="p-4 text-slate-500">Premium Housing, Food Allowance, Medical</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Building Electrician &amp; Plumber</td>
                    <td className="p-4 font-mono font-bold text-slate-800">70,000 – 95,000 ALL</td>
                    <td className="p-4 font-mono">€700 – €950</td>
                    <td className="p-4 font-bold text-emerald-700">₹57,000 – ₹77,500 net</td>
                    <td className="p-4 text-slate-500">Free Housing, Tools Allowance, Utilities</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Heavy Truck Driver (Cat C/CE)</td>
                    <td className="p-4 font-mono font-bold text-slate-800">85,000 – 125,000 ALL</td>
                    <td className="p-4 font-mono">€850 – €1,250</td>
                    <td className="p-4 font-bold text-emerald-700">₹69,000 – ₹1,02,000 net</td>
                    <td className="p-4 text-slate-500">Trip Allowance, Fuel Cards, Base Room</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Hydraulic Excavator / JCB Operator</td>
                    <td className="p-4 font-mono font-bold text-slate-800">80,000 – 115,000 ALL</td>
                    <td className="p-4 font-mono">€800 – €1,150</td>
                    <td className="p-4 font-bold text-emerald-700">₹65,000 – ₹94,000 net</td>
                    <td className="p-4 text-slate-500">Site Accommodation, Free Lunch, Overtime</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Hotel Chef / Line Cook (Resorts)</td>
                    <td className="p-4 font-mono font-bold text-slate-800">70,000 – 110,000 ALL</td>
                    <td className="p-4 font-mono">€700 – €1,100</td>
                    <td className="p-4 font-bold text-emerald-700">₹57,000 – ₹90,000 net</td>
                    <td className="p-4 text-slate-500">Free Resort Room, 3 Free Duty Meals, Tips</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Garment Stitcher / Textile Operator</td>
                    <td className="p-4 font-mono font-bold text-slate-800">55,000 – 75,000 ALL</td>
                    <td className="p-4 font-mono">€550 – €750</td>
                    <td className="p-4 font-bold text-emerald-700">₹45,000 – ₹61,000 net</td>
                    <td className="p-4 text-slate-500">Factory Hostel, Production Incentive Bonuses</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Auto Denter &amp; Spray Painter</td>
                    <td className="p-4 font-mono font-bold text-slate-800">70,000 – 95,000 ALL</td>
                    <td className="p-4 font-mono">€700 – €950</td>
                    <td className="p-4 font-bold text-emerald-700">₹57,000 – ₹77,500 net</td>
                    <td className="p-4 text-slate-500">Free Housing, Safety Respirators, Overtime</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Greenhouse Agricultural Technician</td>
                    <td className="p-4 font-mono font-bold text-slate-800">55,000 – 75,000 ALL</td>
                    <td className="p-4 font-mono">€550 – €750</td>
                    <td className="p-4 font-bold text-emerald-700">₹45,000 – ₹61,000 net</td>
                    <td className="p-4 text-slate-500">Farm Accommodation, Free Fresh Produce</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Civil / MEP Site Foreman</td>
                    <td className="p-4 font-mono font-bold text-slate-800">110,000 – 160,000 ALL</td>
                    <td className="p-4 font-mono">€1,100 – €1,600</td>
                    <td className="p-4 font-bold text-emerald-700">₹90,000 – ₹1,30,000 net</td>
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
              The 6-Stage Legal Roadmap from India to Your Albanian Biometric Residence Card
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
                    Candidate completes practical skill evaluation (pipe welding coupons, rebar tying, heavy vehicle driving trial) at authorized WorkWise Visa centers in Patna or Noida. Upon selection, the Albanian company issues a legally binding bilingual <strong className="font-semibold text-slate-900">Albanian-English Employment Contract (Kontratë Pune)</strong> specifying exact wage in ALL, working hours, and employer housing provisions.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center shrink-0">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    Digital Unique Permit (Leje Unike) Pre-Approval on e-Albania
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The sponsoring employer uploads the candidate&apos;s notarized passport copy, trade credentials, and job vacancy notice onto the official <a href="https://e-albania.al" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:underline">e-Albania portal</a>. The National Employment Agency (AKPA) and State Police Border &amp; Migration Directorate review the file and issue the official digital <strong className="font-semibold text-slate-900">Preliminary Unique Permit Approval (Miratim Paraprak i Lejes Unike)</strong> within 2 to 3 weeks.
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
                    Candidate secures a Police Clearance Certificate (PCC) strictly from their Regional Passport Office / PSK in India. The original PCC must have a <strong className="font-semibold text-slate-900">Ministry of External Affairs (MEA) Hague Apostille sticker</strong> affixed. WorkWise Visa arranges certified translation of the apostilled document into Albanian.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center shrink-0">
                  4
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    National Type D Employment Visa Issuance via e-visa.al &amp; Embassy
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Using the digital Unique Permit pre-approval, the candidate submits an electronic application on the official <a href="https://e-visa.al" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:underline">e-visa.al portal</a> under <strong className="font-semibold text-slate-900">Type D Visa (Employment)</strong>. The Ministry for Europe and Foreign Affairs and the <strong className="font-semibold text-slate-900">Embassy of Albania in New Delhi</strong> review the file, approve the electronic visa, or stamp the official visa foil into the passport.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center shrink-0">
                  5
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    Flight to Tirana International Airport (TIA - Nënë Tereza)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Worker boards a flight landing at Tirana International Airport (usually transit via Istanbul on Pegasus/Turkish Airlines, or via Sharjah on Air Arabia). At border control, the candidate presents their passport with Type D visa, printed Unique Permit pre-approval, and employer accommodation voucher. Sponsoring company HR receives the worker directly at the arrival hall.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center shrink-0">
                  6
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    Local Police Registration &amp; Biometric Unique Permit Card Issue
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Within 30 calendar days of arrival, employer HR accompanies the worker to the regional <strong className="font-semibold text-slate-900">Border &amp; Migration Department (Drejtoria e Kufirit dhe Migracionit)</strong> to register local residence address, capture digital fingerprints and biometric photos, and receive the official laminated plastic <strong className="font-semibold text-slate-900">Unique Permit card (Kartë e Lejes Unike)</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 7: Document Checklist & Apostille ── */}
          <section id="document-checklist" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaCertificate className="w-3.5 h-3.5 text-emerald-600" />
              Section 7: Document Checklist &amp; Legalization Protocol
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Mandatory Documentation Dossier for Indian Candidates
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To avoid visa rejection or delays, candidates must prepare documents strictly according to sovereign consular standards. Here is the verified document checklist:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Original Indian Passport
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Must possess a minimum validity of 15 to 18 months, at least two blank facing pages, and be in clean physical condition. Both ECR and ECNR passports accepted.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  PSK Police Clearance (PCC) + MEA Apostille
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Issued strictly by Passport Seva Kendra (PSK/RPO) within the last 3 to 6 months, bearing an authentic Hague Apostille sticker from CPV Division, MEA New Delhi. Local thana certificates are rejected.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Bilingual Employment Contract (Kontratë Pune)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Executed dual-column Albanian-English contract detailing exact salary in ALL, 40-hour work schedule, overtime multipliers, and company housing terms.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Pre-Departure Travel Health Insurance
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  International travel insurance policy with minimum medical emergency coverage of €30,000 valid for initial 90-day arrival before state health cards activate.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Proof of Registered Accommodation
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Notarized residential lease agreement (Kontratë Qiraje) or official employer housing declaration guaranteeing clean living quarters in Albania.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Trade Certificates &amp; Experience Slips
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ITI diplomas, welding test records, commercial HTV driving licenses, or previous Gulf/domestic experience letters translated into English or Albanian.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Pre-Departure Medical Fitness Certificate
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Standard blood profile, Chest X-Ray for Tuberculosis clearance, Hepatitis B/C, and HIV screenings from an accredited pathology lab.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Passport Size Photographs
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  6 recent color photographs (35mm x 45mm, matte finish, 80% face coverage, white background, neutral expression without colored glasses).
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
              Transparent Breakdown of Statutory Albanian Immigration Fees
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-bold uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="p-4">Administrative Milestone</th>
                    <th className="p-4">Paid To Authority</th>
                    <th className="p-4">Official Amount (ALL / EUR)</th>
                    <th className="p-4">Approx. INR Equivalent</th>
                    <th className="p-4">Statutory Responsibility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">e-Albania Unique Permit State Tariffs</td>
                    <td className="p-4">National Treasury / Migration</td>
                    <td className="p-4 font-mono font-bold">~6,000 – 10,000 ALL</td>
                    <td className="p-4">₹5,400 – ₹9,100</td>
                    <td className="p-4 font-bold text-emerald-700">Albanian Employer</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Type D Long-Stay Visa Fee (e-visa.al)</td>
                    <td className="p-4">Ministry of Foreign Affairs</td>
                    <td className="p-4 font-mono font-bold">€50 – €100 EUR</td>
                    <td className="p-4">₹4,550 – ₹9,100</td>
                    <td className="p-4 text-slate-600">Candidate / Employer Package</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Biometric Residence Card Production</td>
                    <td className="p-4">Aleat / Border Migration</td>
                    <td className="p-4 font-mono font-bold">~4,000 – 6,000 ALL</td>
                    <td className="p-4">₹3,600 – ₹5,400</td>
                    <td className="p-4 text-slate-600">Employer / Candidate</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">PSK Police Clearance &amp; MEA Apostille</td>
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
              Ground Reality: Food, Accommodation &amp; Day-to-Day Life in Albania
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Workers moving to Albania often ask: <em className="text-slate-700 font-medium">&quot;Can we cook our own Indian food? Are Indian spices available? How are the rooms?&quot;</em> Here is the ground reality from workers currently deployed in Tirana, Durrës, and Fier:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
                  <FaBed className="w-5 h-5 text-emerald-600" />
                  Company Apartment Reality
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Almost all manufacturing and civil construction employers provide <strong className="font-semibold text-slate-900">free shared company flats or residential complexes</strong> (typically 2 to 4 workers per room). Apartments include clean western bathrooms, hot water heaters, washing machines, and winter heating radiators. Water, electricity, and heating bills are covered 100% by the sponsoring company.
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-700 space-y-1">
                  <div>• Daily transport: Free company buses to and from construction sites and factories.</div>
                  <div>• Bedding &amp; linen: Provided by employer on arrival.</div>
                  <div>• WiFi internet: Available in most modern company worker residences.</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
                  <FaUtensils className="w-5 h-5 text-emerald-600" />
                  Self-Cooking &amp; Supermarket Costs
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Apartments have fully functioning gas or induction kitchens. Indian workers cook in groups of 3 to 4, sharing kitchen chores and grocery bills. Common Indian staples are widely available at supermarkets like Conad, Spar, Big Market, or local street vegetable vendors (<em className="text-slate-700">dyqan fruta-perime</em>):
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-700 space-y-1">
                  <div>• White Basmati/Round Rice: ~140 – 170 ALL/kg (₹127 – ₹155)</div>
                  <div>• Wheat Flour (Atta / Miell): ~90 – 110 ALL/kg (₹82 – ₹100)</div>
                  <div>• Lentils / Dal (Thjerrëza): ~220 – 280 ALL/kg (₹200 – ₹255)</div>
                  <div>• Fresh Chicken: ~420 – 500 ALL/kg (₹380 – ₹455)</div>
                  <div>• Eggs: ~220 – 260 ALL for 10 eggs (₹200 – ₹235)</div>
                  <div>• Cooking Oil: ~180 – 220 ALL/litre (₹164 – ₹200)</div>
                  <div>• Fresh Tomatoes &amp; Onions: ~70 – 110 ALL/kg (₹64 – ₹100)</div>
                </div>
                <p className="text-[11px] text-emerald-800 font-bold">
                  Realistic Grocery Cost: Approximately 14,000 to 18,000 ALL (~₹12,700 to ₹16,300 INR) per person monthly for rich, healthy home-cooked meals.
                </p>
              </div>
            </div>

            {/* Weather & Climate Reality */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <FaCloudSun className="w-5 h-5 text-amber-500" />
                Albania Weather: Mediterranean Climate
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Albania has over 300 sunny days a year. Coastal and central cities like Tirana, Durrës, and Vlorë experience hot, pleasant summers (28°C to 36°C) and mild, rainy winters (6°C to 14°C). Unlike Russia or Scandinavia, coastal Albania does not experience freezing sub-zero blizzards. A standard warm jacket, thermal inner wear, and waterproof boots during December and January are all that is needed.
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
              In Albania, cash salaries are illegal under strict banking compliance rules. All employers must pay employees directly via official bank transfer into personal bank accounts registered under the worker&apos;s name.
            </p>

            <div className="grid sm:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">Opening Your Bank Account</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Within your first 2 weeks, employer HR takes you to open an account at major banks like <strong className="font-semibold text-slate-900">BKT (Banka Kombëtare Tregtare)</strong>, <strong className="font-semibold text-slate-900">Credins Bank</strong>, or <strong className="font-semibold text-slate-900">Raiffeisen Bank Albania</strong>. You receive an international Visa/Mastercard debit card and a personal IBAN number starting with <strong className="font-mono text-slate-800">AL...</strong>.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">Monthly Salary Crediting</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Salaries are credited between the 5th and 10th of every month in Albanian Lek (ALL). You receive an official printed pay slip (<em className="text-slate-700">Fletëpagesë</em>) showing gross earnings, basic hours, overtime hours, 13% tax deduction, and 11.2% social security contributions.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">Sending Money to India</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Workers transfer money directly to their family accounts in India (SBI, HDFC, PNB, Bank of Baroda) through international bank SWIFT wire transfers or authorized wire counters like Western Union and MoneyGram located in every major market. The money arrives in Indian bank accounts within 24 to 48 hours.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 11: Labour Code & Tax ── */}
          <section id="labour-law-tax" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaScaleUnbalanced className="w-3.5 h-3.5 text-emerald-600" />
              Section 11: Albanian Labour Code &amp; Taxation Standards
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Worker Protections Under the Labour Code of the Republic of Albania
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">40-Hour Standard Work Week</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Under the Albanian Labour Code (Kodi i Punës), standard working hours are 8 hours per day, 5 days per week (40 hours weekly). Overtime is legally paid at a 25% premium (1.25x) on regular working days and 50% premium (1.5x) on rest days and public holidays.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">20 Days Paid Annual Leave</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every employee with 1 year of continuous service is statutorily entitled to at least 4 calendar weeks (minimum 20 working days) of fully paid annual leave, plus 14 official national public holidays.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">Comprehensive Health Coverage</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Monthly social health contributions (11.2% employee / 16.7% employer) cover free medical treatment in state hospitals, occupational disease coverage, and workplace accident compensation across Albania with a health booklet (Librezë Shëndetësore).
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 12: Airport Arrival & TIA Border Check ── */}
          <section id="airport-immigration" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaPlaneArrival className="w-3.5 h-3.5 text-emerald-600" />
              Section 12: Flight Travel, Airport Immigration &amp; First 48 Hours
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Arriving at Tirana International Airport (TIA): What to Expect
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To ensure a smooth journey from India to Albania without border hold-ups, follow these verified travel tips:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="font-bold text-slate-900 text-base">Flight Routes &amp; Transit Rules</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Most flights from Delhi, Mumbai, or Lucknow connect through <strong className="font-semibold text-slate-900">Istanbul (IST or SAW)</strong> via Turkish Airlines or Pegasus, or via <strong className="font-semibold text-slate-900">Sharjah/Dubai (SHJ/DXB)</strong> via Air Arabia or Flydubai.
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-700 space-y-1">
                  <div>• Transit in Istanbul: No transit visa needed if your layover is under 24 hours and you remain inside the international transit hall.</div>
                  <div>• Transit in UAE: No transit visa needed if luggage is checked through to Tirana.</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="font-bold text-slate-900 text-base">Documents to Carry in Hand Luggage</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Never pack these critical documents in your checked luggage. Keep them in your hand backpack for the Border Police officer at Tirana Airport:
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-700 space-y-1">
                  <div>1. Original Passport with stamped Type D Visa.</div>
                  <div>2. Printed copy of your e-Albania Unique Permit Pre-Approval (Miratim Paraprak).</div>
                  <div>3. Signed bilingual employment contract.</div>
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
              Section 13: CRITICAL ANTI-SCAM ADVISORY &amp; Illegal Transit Warning
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Protect Yourself from Fake Albanian Visas &amp; Illegal Border-Crossing Syndicates
            </h2>

            <div className="rounded-2xl border border-red-300 bg-red-50/70 p-6 sm:p-7 space-y-4 text-xs sm:text-sm text-slate-800">
              <div className="flex items-center gap-2.5 font-extrabold text-red-900 text-base">
                <FaBan className="w-5 h-5 text-red-600" />
                WARNING: The &quot;Albania as a Shortcut to Germany/Italy&quot; Scam
              </div>
              <p className="leading-relaxed">
                Unscrupulous local sub-agents across Punjab, Haryana, UP, and Bihar frequently charge ₹6 to ₹10 Lakhs promising: <em className="text-red-950 font-medium">&quot;Take an Albania work visa, land in Tirana, and our handlers will take you across the border into Italy, Greece, or Germany by car/boat.&quot;</em>
              </p>
              <div className="font-bold text-red-950">
                THIS IS A DANGEROUS HUMAN TRAFFICKING TRAP. UNDERSTAND THE REALITY:
              </div>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong className="font-bold text-red-950">Albania is NOT a Schengen Country:</strong> You cannot legally cross into Greece, Italy, Montenegro, or Germany with an Albanian visa.
                </li>
                <li>
                  <strong className="font-bold text-red-950">Aggressive Border Enforcement:</strong> Albanian and EU FRONTEX border police heavily patrol mountain and maritime borders with thermal drones and canine units. Attempting illegal crossings leads to immediate arrest, prison sentences, deportation to India, and a <strong className="font-bold text-red-950">10-Year Schengen SIS Blacklist</strong>.
                </li>
                <li>
                  <strong className="font-bold text-emerald-900">Work Legally in Albania:</strong> Albania is a prosperous, safe, and beautiful Adriatic nation with rapid European modernization. Work legally, build your international trade experience, earn in Euros/Lek, and apply for genuine Schengen or EU visas legally through official consular channels.
                </li>
              </ul>
            </div>
          </section>

          {/* ── Section 14: FAQs ── */}
          <section id="faqs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaCircleQuestion className="w-3.5 h-3.5 text-emerald-600" />
              Section 14: Frequently Asked Questions (Albania Work Permits 2026)
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Essential Answers for Indian Candidates Migrating to Albania
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
                    Adriatic Neighbor
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    Croatia Work Visa &amp; Jobs Guide 2026
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    3-Year Stay &amp; Work Permits, €1,050 gross minimum wage &amp; full Schengen access.
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
                href="/blogs/police-clearance-certificate-pcc-gulf-european-visas-psk-apostille-guide-2026"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md inline-block">
                    Mandatory Legalization
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    PCC &amp; MEA Apostille Guide 2026
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    PSK passport office appointments, Hague Apostille stickers &amp; translations.
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
                    View Live Albania Vacancies
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
                  Verify Your Trade Profile for Albania Employment 2026
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Submit your passport copy and trade credentials to our European desk. We verify sponsor legitimacy, e-Albania vacancy quotas, and process direct employment contracts with 100% employer-funded housing.
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free Evaluation for Welders, Drivers, Masons, Cooks &amp; Technicians</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Authorized e-Visa &amp; New Delhi Embassy Stamping Support</span>
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
                        value="Albania (Balkans & Europe)"
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-emerald-400 font-bold focus:outline-none cursor-not-allowed"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3.5 text-sm font-bold text-slate-950 shadow-md hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                      >
                        <span>Submit Albania Profile For Free Audit</span>
                        <FaArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-500 text-center">
                      100% confidential. No spam. A WorkWise European counselor will call you within 24 working hours.
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
