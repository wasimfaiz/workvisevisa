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
  title: "Georgia Work Visa & Jobs Guide 2026: D1 Visa, Work Residence (Binaadroba) & Salaries | WorkWise Visa",
  description:
    "Definitive 2026 statutory master guide to Georgia (Caucasus) work visas for Indian skilled workers, civil trades, 6G welders, hotel chefs, heavy drivers, and factory mechanics. Learn D1 immigration visa filing via geoconsul.gov.ge, Public Service Hall Work Residence Permits (Binaadroba), 20% flat tax, free company housing, and scam verification.",
  keywords: [
    "Georgia work visa 2026",
    "Georgia work visa for Indian citizens",
    "Georgia work permit process in India",
    "Georgia D1 immigration visa",
    "Georgia Work Residence Permit Binaadroba",
    "Public Service Hall Georgia residence card",
    "geoconsul gov ge visa application",
    "Embassy of Georgia New Delhi visa",
    "Georgia jobs for Indian welders masons drivers",
    "Georgia average salary 2026 GEL EUR INR",
    "Cost of living Georgia Tbilisi Batumi vs savings INR",
    "WorkWise Visa Georgia recruitment partner",
    "How to get work visa in Georgia from India",
    "Batumi Black Sea hotel construction jobs",
    "Tbilisi infrastructure projects hiring Indian workers",
    "Law of Georgia on Legal Status of Aliens",
    "PCC MEA Apostille for Georgia visa",
  ],
  alternates: {
    canonical: `${BASE_URL}/countries/georgia`,
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
    title: "Georgia Work Visa & Jobs Guide 2026: D1 Visa, Work Residence (Binaadroba) & Salaries | WorkWise Visa",
    description:
      "Comprehensive statutory manual for Indian professionals, skilled tradespeople, welders, hotel cooks, drivers, and engineers migrating to Georgia under the Law on Legal Status of Aliens and the Public Service Hall work residence framework.",
    url: `${BASE_URL}/countries/georgia`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: `${BASE_URL}/images/georgia-work-visa-guide.webp`,
        width: 1200,
        height: 630,
        alt: "Georgia Work Visa & Employment Master Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Georgia Work Visa & Jobs Guide 2026: D1 Visa, Work Residence (Binaadroba) & Salaries | WorkWise Visa",
    description:
      "Complete 2026 Georgia work visa guide for Indian workers. Explore D1 immigration visas via geoconsul.gov.ge, Public Service Hall Work Residence Permits (Binaadroba), 20% flat tax, free company accommodation, and New Delhi Embassy stamping.",
    images: [`${BASE_URL}/images/georgia-work-visa-guide.webp`],
  },
};

export default function GeorgiaCountryPage() {
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
        name: "Georgia",
        item: `${BASE_URL}/countries/georgia`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Georgia Work Visa & Skilled Employment Guide 2026: D1 Immigration Visa, Work Residence (Binaadroba), Salary Scales & Legal Compliance",
    description:
      "Authoritative statutory manual for Indian workers, industrial technicians, welders, chefs, and heavy drivers migrating to Georgia under the Law of Georgia on Legal Status of Aliens and Stateless Persons and the Ministry of Justice Public Service Hall framework.",
    image: `${BASE_URL}/images/georgia-work-visa-guide.webp`,
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
    datePublished: "2026-03-01T09:00:00+04:00",
    dateModified: "2026-11-12T00:00:00+04:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/countries/georgia`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Georgia D1 Immigration Visa and Work Residence Permit (Binaadroba)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the Law of Georgia on Legal Status of Aliens and Stateless Persons, foreign workers entering Georgia for salaried employment must first obtain a Category D1 (Immigration) Long-Stay Visa from the Consular Department of the Ministry of Foreign Affairs (geoconsul.gov.ge) or the Embassy of Georgia in New Delhi. Within 30 to 45 days after landing in Georgia, the candidate visits the Public Service Hall (Justice House) in Tbilisi or Batumi with their employer to submit biometric data and receive the official laminated plastic Work Residence Card (Shromiti Binaadrobis Nebartva), valid initially for 6 to 12 months and renewable up to 5 years.",
        },
      },
      {
        "@type": "Question",
        name: "What are typical salaries for Indian workers in Georgia in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Salaries in Georgia are paid in Georgian Lari (GEL) or pegged to USD/EUR. Effective 2026, typical gross trade wages range from 1,800 to 3,400 GEL per month (~₹57,000 to ₹1,08,000 INR). Civil tradesmen (masons, carpenters, steel fixers) earn 1,800 to 2,400 GEL (₹57,000 to ₹77,000 INR), 6G pipe welders earn 2,400 to 3,400 GEL (₹77,000 to ₹1,08,000 INR), heavy truck drivers earn 2,200 to 3,200 GEL (₹70,000 to ₹1,02,000 INR), and resort hotel chefs earn 2,000 to 3,000 GEL (₹64,000 to ₹96,000 INR). Sponsoring employers provide 100% free furnished apartment housing and daily transport to work sites.",
        },
      },
      {
        "@type": "Question",
        name: "Is Georgia part of the European Schengen Area, and can I travel across Europe with a Georgian work visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Georgia is located in the South Caucasus region at the intersection of Eastern Europe and Western Asia. It is an official European Union candidate country and has a visa-free association agreement for Georgian citizens traveling to the Schengen zone, but a Georgian D1 work visa or Work Residence Permit DOES NOT grant foreign nationals the legal right to work or travel in the Schengen Area. Foreign employees must work exclusively within Georgian sovereign territory. Attempting to enter the EU or Russia illegally triggers instant arrest, imprisonment, and deportation.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to process a Georgia D1 work visa from India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The complete process from practical trade evaluation to arrival in Tbilisi generally takes 4 to 8 weeks: 2 to 3 weeks for employer labor registration and contract execution on the state labor database (labour.moh.gov.ge), followed by 15 to 30 calendar days for consular D1 visa processing on geoconsul.gov.ge and sticker stamping through the Embassy of Georgia in New Delhi.",
        },
      },
      {
        "@type": "Question",
        name: "Can Indian citizens holding ECR (non-matriculation) passports work in Georgia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Georgia is not one of the 18 ECR countries notified under the Indian Emigration Act. Therefore, Indian citizens holding either ECR or ECNR passports are fully eligible to travel and work in Georgia on a valid D1 visa without needing Protector of Emigrants (PoE) clearance.",
        },
      },
      {
        "@type": "Question",
        name: "Is Police Clearance Certificate (PCC) with MEA Hague Apostille mandatory for Georgia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Because Georgia is an official member of the 1961 Hague Apostille Convention, applicants must obtain a Police Clearance Certificate (PCC) issued by the Regional Passport Office (PSK/RPO) in India, legalized with an official Hague Apostille sticker from the Ministry of External Affairs (MEA), CPV Division, New Delhi. The apostilled PCC must then be officially translated into the Georgian language (Kartuli) by a sworn translator.",
        },
      },
      {
        "@type": "Question",
        name: "Does the Georgian employer provide free food and accommodation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In nearly all licensed construction, heavy fabrication, transport, and coastal resort contracts, employers provide 100% free furnished company apartments (2 to 4 workers per room with hot water, winter heating, clean bathrooms, and kitchen facilities) plus free daily job site bus transit. Workers cook their own Indian meals in shared apartment kitchens, with monthly groceries costing approximately 400 to 550 GEL (~₹12,800 to ₹17,500 INR).",
        },
      },
      {
        "@type": "Question",
        name: "Can a foreign worker switch employers in Georgia after arrival?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Under the Law on Legal Status of Aliens, a foreign worker can legally change employers if the original contract reaches completion or if both parties agree to mutual termination. The new licensed employer must register the employment relationship with the Ministry of Labour and submit an updated application to the Public Service Hall before the current Work Residence Card expires.",
        },
      },
      {
        "@type": "Question",
        name: "What are the income tax and social contribution rates in Georgia in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Georgia has one of the simplest and most transparent tax systems in the world. Personal Income Tax (PIT) on employment salary is a flat 20% deducted at source by the employer. In addition, there is a 2% employee contribution to the mandatory pension savings scheme (matched by 2% from the employer and 1-2% from the state). There are zero hidden local council or municipal payroll taxes.",
        },
      },
      {
        "@type": "Question",
        name: "How can candidates spot and avoid fake Georgian visa scams in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common scam tactics include: agents selling short-term tourist electronic visas (C-category) and claiming 'you can work legally on a tourist visa in Georgia' (which is completely illegal and leads to immediate deportation), agents charging ₹5 to ₹8 Lakhs promising 'direct back-door entry into Germany or Italy via Georgia', and forged paper visa approvals without an official verification number on geoconsul.gov.ge. Always verify that your employer is registered with an active Identification Code (NIPT) on the Revenue Service portal (rs.ge).",
        },
      },
      {
        "@type": "Question",
        name: "Is IELTS or Georgian language proficiency required for a Georgia work visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. There is zero IELTS or English exam requirement, and no Georgian language test is mandated for skilled tradesmen, machine operators, or hospitality workers. Practical job site communications are conducted in English, Hindi/Urdu with bilingual Indian foremen, or through international engineering schematics.",
        },
      },
      {
        "@type": "Question",
        name: "How can Indian workers send their monthly salary home from Georgia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Employers deposit monthly salaries directly into the worker's personal Georgian bank account (such as Bank of Georgia - BOG, TBC Bank, or Liberty Bank). Workers can remit funds directly to Indian bank accounts (SBI, HDFC, PNB, ICICI) via international SWIFT bank wire transfer, Western Union, MoneyGram, or direct mobile banking apps. Funds are credited to India within 24 to 48 hours.",
        },
      },
      {
        "@type": "Question",
        name: "Can my family join me in Georgia on a dependent residence permit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Once an Indian employee has completed 1 year of lawful employment and holds an active Work Residence Card, they are legally entitled to sponsor their legally wedded spouse and minor children for Family Reunification Temporary Residence Permits (Ojakhuri Binaadroba) through the Public Service Hall, provided they demonstrate adequate family accommodation and stable income.",
        },
      },
      {
        "@type": "Question",
        name: "Is an Indian driving license valid for driving in Georgia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An Indian commercial driving license (HTV/HGMV) accompanied by an International Driving Permit (IDP) is valid for initial short-term operation. Sponsoring transport and logistics employers arrange for drivers to take the local road driving test at the Service Agency of the Ministry of Internal Affairs (MIA) in Rustavi to convert their credentials to a Georgian Category C or CE professional commercial driving license.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if an employer in Georgia delays salary payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the Georgian Labour Code, wages must be paid at least once a month via bank deposit. The Labour Inspection Service of the Ministry of Labour (labour.moh.gov.ge) actively investigates workplace violations and imposes steep statutory fines on non-compliant companies. Workers facing unpaid wages can file a formal complaint with the Labour Inspection Service without fear of deportation.",
        },
      },
      {
        "@type": "Question",
        name: "What is the weather and winter climate like in Georgia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Georgia experiences four distinct seasons. Summers in Tbilisi, Kutaisi, and coastal Batumi are hot and sunny (28°C to 35°C). Winters are moderate to cold: coastal Batumi remains mild (5°C to 12°C) due to Black Sea currents, while central Tbilisi sees temperatures between 0°C and 8°C with occasional light snowfall. Heavy sub-zero snow is restricted to high Caucasus mountain ski regions. A standard thermal jacket, warm inner layers, and waterproof shoes are sufficient for daily site work.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Obtain a Georgia D1 Work Visa & Work Residence Permit (Binaadroba) from India in 2026",
    description:
      "A complete 6-stage statutory roadmap for Indian skilled workers, technicians, chefs, and drivers to secure employer registration, New Delhi Embassy D1 visa stamping, and Public Service Hall residence cards in Georgia.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Practical Skill Evaluation & Bilingual Employment Contract",
        text: "Candidate completes trade skill testing (pipe welding coupons, rebar tying, heavy vehicle driving trial) at authorized WorkWise Visa centers and signs a bilingual Georgian-English employment contract.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Employer Labor Registration with Ministry of Labour",
        text: "The licensed Georgian sponsoring company registers the job vacancy and candidate contract on the Ministry of Labour digital portal (labour.moh.gov.ge) to secure hiring clearance.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Police Clearance Certificate (PCC) & MEA Hague Apostille",
        text: "Applicant secures an official PSK Police Clearance Certificate in India, legalizes it with an MEA Hague Apostille sticker, and obtains sworn translation into Georgian.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Category D1 Immigration Visa on geoconsul.gov.ge & Embassy Stamping",
        text: "Candidate submits the long-stay D1 visa application electronically via geoconsul.gov.ge and presents original passport for consular visa foil stamping at the Embassy of Georgia in New Delhi.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Travel to Tbilisi (TBS) or Batumi (BUS) International Airport",
        text: "Candidate boards flight landing at Tbilisi or Batumi airport, clears border control with original contract, stamped D1 visa, and accommodation letter, and receives company airport pickup.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Public Service Hall Registration & Biometric Residence Card (Binaadroba)",
        text: "Within 30 to 45 days of arrival, employer HR accompanies the worker to the Public Service Hall (Justice House) to record fingerprints and receive the official laminated plastic Work Residence Card.",
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
              <span className="text-emerald-300 font-bold">Georgia (საქართველო - Caucasus &amp; Europe)</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Headlines & Key Stats */}
              <div className="lg:col-span-7 space-y-6">
                {/* Government & Authority Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Official 2026 Georgia D1 Visa &amp; Public Service Hall Residence Gateway
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                  Georgia Work Visa &amp; Skilled Jobs Guide{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                    2026
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  The definitive, practical ground-reality manual for Indian civil tradesmen, 6G pipe welders, Black Sea hotel chefs, heavy commercial drivers, and industrial technicians migrating to the South Caucasus. Complete statutory details on the official{" "}
                  <strong className="font-bold text-white">D1 Immigration Work Visa</strong> (geoconsul.gov.ge), the{" "}
                  <strong className="font-bold text-emerald-300">Work Residence Card (Binaadroba)</strong> issued by the Public Service Hall, 20% flat tax, employer-funded furnished apartments, and consular stamping at the Embassy of Georgia in New Delhi.
                </p>

                {/* Key Benefits Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaMoneyBillWave className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">1,800 – 3,400 GEL Pay</div>
                      <div className="text-[10px] text-slate-400">~₹57k – ₹1.08L In-Hand</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaCoins className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">20% Flat Income Tax</div>
                      <div className="text-[10px] text-slate-400">Zero Hidden Surcharges</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaIdCard className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Work Residence Card</div>
                      <div className="text-[10px] text-slate-400">Public Service Hall Issue</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaHouseUser className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">100% Free Housing</div>
                      <div className="text-[10px] text-slate-400">Furnished Flat &amp; Transit</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaClock className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">4–8 Wks Processing</div>
                      <div className="text-[10px] text-slate-400">D1 Visa &amp; Rapid Clearance</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaBuildingColumns className="w-4 h-4 text-blue-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">EU Candidate Nation</div>
                      <div className="text-[10px] text-slate-400">Black Sea &amp; Caucasus Hub</div>
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
                    <span>Browse Georgia Jobs</span>
                  </Link>

                  <a
                    href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20Georgia%20D1%20Work%20Visa%20and%20Jobs%20for%202026."
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
                        src="https://flagcdn.com/w160/ge.png"
                        alt="Georgia Flag"
                        className="h-10 w-14 object-cover rounded-xl shadow-md border border-white/25 shrink-0"
                      />
                      <div>
                        <h2 className="text-xl font-display font-extrabold text-white">Georgia (საქართველო)</h2>
                        <p className="text-xs text-emerald-300 font-medium">Tbilisi • Batumi • Kutaisi • Rustavi • Poti</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-xs font-bold text-emerald-300">
                      <FaShieldHalved className="w-3 h-3 text-emerald-400" />
                      EU Candidate
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Entry Work Authorization:</span>
                      <span className="font-bold text-white">Category D1 Immigration Visa</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">In-Country Residence Permit:</span>
                      <span className="font-bold text-emerald-300">Work Residence Card (Binaadroba)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Issuing Sovereign Agency:</span>
                      <span className="font-bold text-white">Public Service Hall (Justice House)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Statutory Income Tax:</span>
                      <span className="font-bold text-amber-300">20% Flat Personal Tax Floor</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Average Monthly In-Hand:</span>
                      <span className="font-bold text-emerald-300">1,800 – 3,400 GEL (₹57k – ₹1.08L)</span>
                    </div>

                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Permanent Residence Pathway:</span>
                      <span className="font-bold text-emerald-300">5 Continuous Years Lawful Stay</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-950/50 border border-emerald-500/30 p-3.5 text-center text-xs text-slate-300">
                    <div className="flex items-center justify-center gap-2 text-emerald-300 font-semibold mb-0.5">
                      <FaShieldHalved className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Ministry of Justice &amp; Labour Approved</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Bilingual Contract • Free Furnished Housing • Zero Middlemen Commission
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
              Georgia Comprehensive Master Guide Directory:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#overview" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                1. Caucasian Economic Expansion &amp; Demand
              </a>
              <a href="#industrial-hubs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                2. Key Cities: Tbilisi, Batumi &amp; Rustavi
              </a>
              <a href="#government-portals" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                3. Official Government Portals &amp; Verification
              </a>
              <a href="#visa-pathways" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                4. D1 Visa &amp; Work Residence (Binaadroba)
              </a>
              <a href="#salary-matrix" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                5. 2026 Salary Schedule &amp; INR Remittance
              </a>
              <a href="#deployment-pipeline" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                6. 6-Stage Legal Roadmap from India
              </a>
              <a href="#document-checklist" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                7. RPO PCC &amp; Hague Apostille Protocol
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
                11. Labour Protections &amp; 20% Flat Tax
              </a>
              <a href="#airport-immigration" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                12. Airport Arrival (TBS/BUS) &amp; Customs
              </a>
              <a href="#scam-warning" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                13. Critical Anti-Scam Shield &amp; Warnings
              </a>
              <a href="#faqs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                14. Frequently Asked Questions (16 FAQs)
              </a>
            </div>
          </div>
        </section>

        {/* ── Main Content Container ─────────────────────────── */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">

          {/* ── Section 1: Strategic Caucasian Overview ── */}
          <section id="overview" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaGlobe className="w-3.5 h-3.5 text-emerald-600" />
              Section 1: Strategic Eurasian Economic Expansion &amp; Manpower Demand
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Why Georgia Has Become a High-Value Destination for Indian Skilled Tradesmen
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Situated strategically at the crossroads of Eastern Europe and Western Asia, <strong className="font-semibold text-slate-900">Georgia</strong> has achieved one of the highest economic growth rates in Europe over recent years. Driven by massive international investment in Black Sea coastal tourism, modernization of ports, and multi-billion-dollar transit highway and tunnel construction through the Caucasus mountain corridors, Georgia faces severe domestic labor shortages in industrial manufacturing, heavy mechanical trades, and hospitality.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Under the modernized <strong className="font-semibold text-slate-900">Law of Georgia on Legal Status of Aliens and Stateless Persons</strong>, the government established a transparent, digitized immigration system. Licensed Georgian enterprises sponsor foreign skilled workers on <strong className="font-semibold text-slate-900">Category D1 (Immigration) Work Visas</strong>, followed by in-country registration for a plastic <strong className="font-semibold text-slate-900">Work Residence Card (Shromiti Binaadroba)</strong> issued directly by the one-stop Public Service Hall (Justice House).
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                  <FaBuildingColumns className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Public Service Hall Residence Cards
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Georgia&apos;s world-renowned Public Service Hall (Justice House) manages all biometric residence clearances. Foreign workers receive legitimate, state-verified plastic residence cards with complete legal rights to live, work, and open personal bank accounts.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                  <FaCoins className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  1,800 – 3,400 GEL Wages &amp; High Savings
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Skilled tradesmen (welders, masons, carpenters, heavy drivers, and chefs) earn between 1,800 and 3,400 GEL per month (~₹57,000 to ₹1,08,000 INR net). Because reputable companies provide 100% free furnished housing and transport, monthly savings remain above 75%.
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
                  Indian citizens holding either ECR or ECNR passports are fully eligible without Protector of Emigrants (PoE) clearance. Zero IELTS or English exams are required, and tradesmen are evaluated purely on verified hands-on skill and practical competency.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 2: Cities & Industrial Clusters ── */}
          <section id="industrial-hubs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaLocationDot className="w-3.5 h-3.5 text-emerald-600" />
              Section 2: Key Hiring Regions &amp; Industrial Clusters
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Where the Jobs Are: Georgia&apos;s Major Economic Corridors
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              WorkWise Visa places qualified Indian craftsmen, technicians, and hotel staff directly into verified employers across these primary Georgian hubs:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Tbilisi (Capital)</span>
                  <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Metropolitan Center</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High demand for commercial building trades, MEP electrical contractors, plumbers, HVAC technicians, central warehouse logistics staff, and international restaurant kitchen teams.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Batumi (Black Sea Coast)</span>
                  <span className="text-[10px] font-bold uppercase bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full">Skyscrapers &amp; Tourism</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Often called the &quot;Las Vegas of the Black Sea&quot;, Batumi is undergoing an unprecedented high-rise building boom. High hiring for shuttering carpenters, steel fixers, tower crane operators, and 5-star resort continental chefs.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Rustavi</span>
                  <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Heavy Metallurgy</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The historic metallurgical heartland of Georgia. Home to major steel works, ferro-alloy plants, and chemical manufacturing facilities recruiting 6G pipe welders, industrial mechanics, and machine technicians.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Kutaisi &amp; Hualing FIZ</span>
                  <span className="text-[10px] font-bold uppercase bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Free Industrial Zone</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Home to Georgia&apos;s second-largest city and the Hualing Free Industrial Zone (FIZ). Major focus on automotive component assembly, electrical appliances, woodworking, and packaging lines.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Poti (Black Sea Seaport)</span>
                  <span className="text-[10px] font-bold uppercase bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Maritime &amp; Freight</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Georgia&apos;s primary seaport handling container shipping across the Black Sea and Caspian transit routes. Active recruitment for forklift drivers, reach-stacker operators, and heavy diesel mechanics.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">Kakheti &amp; Kvemo Kartli</span>
                  <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Commercial Agriculture</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Modern greenhouse horticulture, fruit processing, and cold-storage logistics complexes hiring agricultural machinery operators, tractor drivers, and packing facility maintenance techs.
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
              Master Directory of Official Georgian State Authorities &amp; Verification Gateways
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Verify your employer&apos;s corporate standing, labor vacancy quota, D1 visa status, and residence permit directly against official Georgian sovereign databases ending in <strong className="font-semibold text-slate-900">.gov.ge</strong> or <strong className="font-semibold text-slate-900">.ge</strong>:
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
                    <td className="p-4 font-bold text-slate-900">Consular Department (MFA Georgia)</td>
                    <td className="p-4">Ministry of Foreign Affairs of Georgia</td>
                    <td className="p-4">
                      <a href="https://geoconsul.gov.ge" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                        geoconsul.gov.ge
                      </a>
                    </td>
                    <td className="p-4 text-slate-600">Online Category D1 Immigration Visa application &amp; tracking</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Public Service Hall (Justice House)</td>
                    <td className="p-4">Ministry of Justice of Georgia</td>
                    <td className="p-4">
                      <a href="https://psh.gov.ge" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                        psh.gov.ge
                      </a>
                    </td>
                    <td className="p-4 text-slate-600">Biometric registration &amp; Work Residence Card (Binaadroba) issuance</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Labour Inspection Service</td>
                    <td className="p-4">Ministry of Internally Displaced Persons, Labour &amp; Health</td>
                    <td className="p-4">
                      <a href="https://labour.moh.gov.ge" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                        labour.moh.gov.ge
                      </a>
                    </td>
                    <td className="p-4 text-slate-600">Employer foreign labor registration &amp; labor contract auditing</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Revenue Service of Georgia (RS)</td>
                    <td className="p-4">Ministry of Finance Tax &amp; Customs Authority</td>
                    <td className="p-4">
                      <a href="https://www.rs.ge" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                        rs.ge
                      </a>
                    </td>
                    <td className="p-4 text-slate-600">Employer Identification Code (NIPT) &amp; tax standing validation</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Embassy of Georgia in New Delhi</td>
                    <td className="p-4">Sovereign diplomatic mission accredited to India</td>
                    <td className="p-4">
                      <span className="text-slate-800 font-medium">169, Jor Bagh, New Delhi</span>
                    </td>
                    <td className="p-4 text-slate-600">Consular interviews, document legalization &amp; visa foil stamping</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 4: D1 Visa & Work Residence Pathways ── */}
          <section id="visa-pathways" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaFileContract className="w-3.5 h-3.5 text-emerald-600" />
              Section 4: Statutory Work Visa &amp; Residence Classifications
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The 4 Legal Work &amp; Residence Tracks Under Georgian Immigration Law
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-bold">
                  Pathway 1: Primary Trade Track
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Category D1 Immigration Visa + Work Residence Permit (Shromiti Binaadroba)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The primary statutory pathway for skilled craftsmen, 6G welders, civil tradesmen, machine operators, drivers, and resort chefs. The worker enters on an official D1 Immigration Visa and converts to a biometric Work Residence Card at the Public Service Hall in Georgia, renewable annually up to 5 years.
                </p>
                <div className="pt-2 text-xs font-bold text-slate-700 space-y-1">
                  <div>• Processing Time: 4 to 8 Weeks total</div>
                  <div>• Initial Validity: 6 to 12 Months (Renewable up to 5 Years)</div>
                  <div>• Permanent Residence: Eligible after 5 continuous years of lawful stay</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-teal-100 text-teal-800 px-3 py-1 text-xs font-bold">
                  Pathway 2: Seasonal Track
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Short-Term Seasonal Work Authorization
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Designed for coastal hotel hospitality in Batumi during the peak summer tourist season (May to October) and agricultural harvesting in Kakheti. Valid for up to 6 months with expedited labor registration and subsidized employer quarters.
                </p>
                <div className="pt-2 text-xs font-bold text-slate-700 space-y-1">
                  <div>• Processing Time: 3 to 5 Weeks</div>
                  <div>• Validity: Up to 6 Months</div>
                  <div>• Free Resort Room &amp; Duty Meals mandated in contract</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-blue-100 text-blue-800 px-3 py-1 text-xs font-bold">
                  Pathway 3: Highly Qualified Specialists
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Specialist &amp; Engineering Residence Track
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For degree-holding civil engineers, electromechanical project directors, IT software specialists, and QA/QC inspection chiefs. Requires employer remuneration exceeding 2.5 times the national average wage and grants immediate family dependent sponsorship rights.
                </p>
                <div className="pt-2 text-xs font-bold text-slate-700 space-y-1">
                  <div>• Monthly Gross Floor: ~4,000+ GEL (~₹1,25,000+ INR)</div>
                  <div>• Family Sponsorship: Immediate spouse and child dependent cards</div>
                  <div>• Accelerated processing via Justice House expedited service</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-amber-100 text-amber-800 px-3 py-1 text-xs font-bold">
                  Pathway 4: Corporate Mobility
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Intra-Corporate Transfer (ICT Track)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For multinational engineering and construction conglomerates transferring key foremen, safety officers, or specialized technicians from Indian parent corporations to registered Georgian infrastructure joint ventures for up to 3 years.
                </p>
                <div className="pt-2 text-xs font-bold text-slate-700 space-y-1">
                  <div>• Exemption: Direct corporate transfer clearance</div>
                  <div>• Validity: Up to 3 Years continuous deployment</div>
                  <div>• Fast transition to multi-year managerial residence cards</div>
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
              Master Georgia Salary Schedule (GEL, EUR &amp; INR Net Equivalents)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Salaries in Georgia are paid in <strong className="font-semibold text-slate-900">Georgian Lari (GEL / ₾)</strong> or pegged directly in <strong className="font-semibold text-slate-900">USD / EUR</strong>. Realistic 2026 market conversion benchmarks: <strong className="font-semibold text-slate-900">1.00 GEL ≈ ₹31.00 – ₹33.00 INR ≈ €0.33 EUR ≈ $0.36 USD</strong>.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-bold uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="p-4">Trade / Professional Role</th>
                    <th className="p-4">Monthly Basic (GEL ₾)</th>
                    <th className="p-4">Approx. USD / EUR</th>
                    <th className="p-4">Net Monthly In-Hand (INR ₹)</th>
                    <th className="p-4">Mandatory Employer Benefits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Civil Mason / Bricklayer / Plasterer</td>
                    <td className="p-4 font-mono font-bold text-slate-800">1,800 – 2,300 GEL</td>
                    <td className="p-4 font-mono">$650 – $830</td>
                    <td className="p-4 font-bold text-emerald-700">₹57,000 – ₹73,000 net</td>
                    <td className="p-4 text-slate-500">Free Accommodation, Transport, Overtime (1.25x)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Shuttering Carpenter / Steel Fixer</td>
                    <td className="p-4 font-mono font-bold text-slate-800">1,900 – 2,400 GEL</td>
                    <td className="p-4 font-mono">$680 – $860</td>
                    <td className="p-4 font-bold text-emerald-700">₹60,000 – ₹76,500 net</td>
                    <td className="p-4 text-slate-500">Free Shared Flat, PPE Kits, Safety Gear</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">MIG / MAG / Structural Welder</td>
                    <td className="p-4 font-mono font-bold text-slate-800">2,200 – 2,800 GEL</td>
                    <td className="p-4 font-mono">$790 – $1,000</td>
                    <td className="p-4 font-bold text-emerald-700">₹70,000 – ₹89,000 net</td>
                    <td className="p-4 text-slate-500">Free Housing, Safety Equipment, Overtime</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">6G TIG / High-Pressure Pipe Welder</td>
                    <td className="p-4 font-mono font-bold text-slate-800">2,600 – 3,400 GEL</td>
                    <td className="p-4 font-mono">$930 – $1,220</td>
                    <td className="p-4 font-bold text-emerald-700">₹83,000 – ₹1,08,000 net</td>
                    <td className="p-4 text-slate-500">Premium Flat, Food Allowance, Medical Insurance</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Building Electrician &amp; Plumber</td>
                    <td className="p-4 font-mono font-bold text-slate-800">1,900 – 2,500 GEL</td>
                    <td className="p-4 font-mono">$680 – $900</td>
                    <td className="p-4 font-bold text-emerald-700">₹60,000 – ₹79,500 net</td>
                    <td className="p-4 text-slate-500">Free Housing, Tools Kit, Site Transport</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Heavy Truck Driver (Cat C/CE)</td>
                    <td className="p-4 font-mono font-bold text-slate-800">2,200 – 3,200 GEL</td>
                    <td className="p-4 font-mono">$790 – $1,150</td>
                    <td className="p-4 font-bold text-emerald-700">₹70,000 – ₹1,02,000 net</td>
                    <td className="p-4 text-slate-500">Trip Allowances, Fuel Card, Company Base Room</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Hydraulic Excavator / JCB Operator</td>
                    <td className="p-4 font-mono font-bold text-slate-800">2,100 – 2,900 GEL</td>
                    <td className="p-4 font-mono">$750 – $1,040</td>
                    <td className="p-4 font-bold text-emerald-700">₹67,000 – ₹92,500 net</td>
                    <td className="p-4 text-slate-500">Site Accommodation, Free Lunch, Overtime</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Hotel Chef / Continental Cook (Batumi)</td>
                    <td className="p-4 font-mono font-bold text-slate-800">2,000 – 3,000 GEL</td>
                    <td className="p-4 font-mono">$715 – $1,070</td>
                    <td className="p-4 font-bold text-emerald-700">₹64,000 – ₹96,000 net</td>
                    <td className="p-4 text-slate-500">Resort Room, 3 Free Duty Meals, Tips</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Auto Denter &amp; Spray Painter</td>
                    <td className="p-4 font-mono font-bold text-slate-800">1,900 – 2,600 GEL</td>
                    <td className="p-4 font-mono">$680 – $930</td>
                    <td className="p-4 font-bold text-emerald-700">₹60,000 – ₹83,000 net</td>
                    <td className="p-4 text-slate-500">Free Housing, Safety Respirators, Overtime</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Factory Machine Operator (FIZ)</td>
                    <td className="p-4 font-mono font-bold text-slate-800">1,600 – 2,200 GEL</td>
                    <td className="p-4 font-mono">$570 – $790</td>
                    <td className="p-4 font-bold text-emerald-700">₹51,000 – ₹70,000 net</td>
                    <td className="p-4 text-slate-500">Factory Hostel, Production Bonus, Canteen</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Greenhouse Agricultural Technician</td>
                    <td className="p-4 font-mono font-bold text-slate-800">1,500 – 2,000 GEL</td>
                    <td className="p-4 font-mono">$540 – $715</td>
                    <td className="p-4 font-bold text-emerald-700">₹48,000 – ₹64,000 net</td>
                    <td className="p-4 text-slate-500">Farm Housing, Free Fresh Farm Produce</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Civil / MEP Site Foreman</td>
                    <td className="p-4 font-mono font-bold text-slate-800">3,000 – 4,500 GEL</td>
                    <td className="p-4 font-mono">$1,070 – $1,610</td>
                    <td className="p-4 font-bold text-emerald-700">₹96,000 – ₹1,44,000 net</td>
                    <td className="p-4 text-slate-500">Executive Apartment, Site Vehicle, SIM Card</td>
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
              The 6-Stage Legal Roadmap from India to Your Georgian Residence Card
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
                    Candidate completes practical skill evaluation (welding coupons, electrical layout, heavy vehicle driving trial) at authorized WorkWise Visa centers in Patna, Noida, or Delhi. Sponsoring Georgian company issues a legally binding bilingual <strong className="font-semibold text-slate-900">Georgian-English Employment Contract</strong> detailing exact wage in GEL, working hours, and employer housing commitments.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center shrink-0">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    Employer Registration on Ministry of Labour Portal
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The sponsoring company logs into the Ministry of Labour digital portal (<a href="https://labour.moh.gov.ge" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:underline">labour.moh.gov.ge</a>) to register the candidate&apos;s contract and passport details under the foreign workforce registry, securing the official government labor invitation clearance.
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
                    Applicant secures a Police Clearance Certificate strictly from their Regional Passport Office / PSK in India. The original PCC must have a <strong className="font-semibold text-slate-900">Ministry of External Affairs (MEA) Hague Apostille sticker</strong> affixed. WorkWise Visa arranges sworn translation of the apostilled PCC into Georgian (Kartuli).
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center shrink-0">
                  4
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    Category D1 Immigration Visa Filing &amp; New Delhi Embassy Stamping
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Candidate submits the electronic D1 visa dossier on <a href="https://geoconsul.gov.ge" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:underline">geoconsul.gov.ge</a>. The Consular Department and the <strong className="font-semibold text-slate-900">Embassy of Georgia in New Delhi</strong> review the file and stamp the official Category D1 visa foil into the passport.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center shrink-0">
                  5
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    Flight to Tbilisi (TBS) or Batumi (BUS) International Airport
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Worker boards a flight connecting via Sharjah (Air Arabia), Dubai (flydubai), or Doha (Qatar Airways) landing in Tbilisi or Batumi. At border control, candidate presents their passport with stamped D1 visa, original employment contract, and company guarantee letter. Company HR receives the worker at the arrival terminal.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center shrink-0">
                  6
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    Public Service Hall Registration &amp; Biometric Residence Card Issue
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Within 30 to 45 days of arrival, employer HR accompanies the worker to the local <strong className="font-semibold text-slate-900">Public Service Hall (Justice House)</strong> in Tbilisi or Batumi. The candidate submits biometric fingerprints, digital photo, and receives the official laminated plastic <strong className="font-semibold text-slate-900">Work Residence Card (Shromiti Binaadrobis Nebartva)</strong>.
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
              Because Georgia is an active signatory of the 1961 Hague Apostille Convention, all Indian public documents must carry official MEA Apostille legalization:
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
                  Bilingual Employment Contract
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Executed dual-column Georgian-English contract detailing exact monthly wage in GEL, 40-hour work schedule, overtime multipliers, and company housing terms.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Pre-Departure Travel Health Insurance
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  International travel insurance policy with minimum medical emergency coverage of €30,000 / $35,000 valid for the initial 90-day arrival period.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Proof of Registered Accommodation
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Notarized residential lease agreement or official employer housing declaration guaranteeing clean living quarters in Tbilisi, Batumi, or Rustavi.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Trade Certificates &amp; Experience Records
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ITI trade certificates, welding qualification cards, commercial HTV driving licenses, or previous Gulf/domestic experience slips translated into English or Georgian.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Pre-Departure Medical Fitness Certificate
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Screening report covering Chest X-Ray for Tuberculosis clearance, Hepatitis B/C, and HIV from a recognized pathology diagnostic lab.
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
              Transparent Breakdown of Statutory Georgian Immigration Fees
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-bold uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="p-4">Administrative Milestone</th>
                    <th className="p-4">Paid To Authority</th>
                    <th className="p-4">Official Amount (GEL / USD)</th>
                    <th className="p-4">Approx. INR Equivalent</th>
                    <th className="p-4">Statutory Responsibility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Ministry of Labour Contract Registration</td>
                    <td className="p-4">Ministry of Labour (MOH)</td>
                    <td className="p-4 font-mono font-bold">Free / Nominal state tariff</td>
                    <td className="p-4">—</td>
                    <td className="p-4 font-bold text-emerald-700">Georgian Employer</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Category D1 Immigration Visa Fee</td>
                    <td className="p-4">MFA Consular Department</td>
                    <td className="p-4 font-mono font-bold">~$40 USD</td>
                    <td className="p-4">~₹3,350</td>
                    <td className="p-4 text-slate-600">Candidate / Employer Package</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Public Service Hall Residence Card (Binaadroba)</td>
                    <td className="p-4">Public Service Hall (Justice House)</td>
                    <td className="p-4 font-mono font-bold">210 – 300 GEL</td>
                    <td className="p-4">₹6,700 – ₹9,600</td>
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
              Ground Reality: Food, Accommodation &amp; Day-to-Day Life in Georgia
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Before moving to Georgia, Indian tradesmen want to know: <em className="text-slate-700 font-medium">&quot;Can we cook Indian food? Are Indian spices available? How are the accommodations?&quot;</em> Here is the verified ground reality from workers currently in Tbilisi and Batumi:
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
                  Apartments feature equipped gas or electric kitchens. Indian workers cook together in small groups of 3 to 4, sharing cooking tasks and grocery bills. Common staples are widely sold at supermarkets like Carrefour, Goodwill, Nikora, Spar, Ori Nabiji, or street vegetable shops:
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-700 space-y-1">
                  <div>• White Basmati / Long-grain Rice: ~4.50 – 6.00 GEL/kg (₹145 – ₹190)</div>
                  <div>• Wheat Flour (Atta / Pkvili): ~2.50 – 3.50 GEL/kg (₹80 – ₹110)</div>
                  <div>• Lentils / Dal: ~6.00 – 8.00 GEL/kg (₹190 – ₹255)</div>
                  <div>• Fresh Chicken: ~10.00 – 12.00 GEL/kg (₹320 – ₹385)</div>
                  <div>• Eggs: ~5.00 – 6.50 GEL for 10 eggs (₹160 – ₹210)</div>
                  <div>• Cooking Sunflower Oil: ~5.00 – 6.50 GEL/litre (₹160 – ₹210)</div>
                  <div>• Fresh Tomatoes &amp; Onions: ~2.50 – 4.00 GEL/kg (₹80 – ₹130)</div>
                </div>
                <p className="text-[11px] text-emerald-800 font-bold">
                  Realistic Grocery Cost: Approximately 400 to 550 GEL (~₹12,800 to ₹17,500 INR) per worker monthly for generous, healthy home-cooked meals.
                </p>
              </div>
            </div>

            {/* Weather & Climate Reality */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <FaCloudSun className="w-5 h-5 text-amber-500" />
                Georgia Climate: Four Distinct Seasons
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Coastal Batumi enjoys a subtropical Black Sea climate with warm summers (26°C to 32°C) and mild, humid winters (6°C to 12°C). Central Tbilisi and Rustavi experience sunny hot summers (28°C to 36°C) and colder winters (0°C to 7°C) with occasional brief snow. Heavy sub-zero snow is restricted to high Caucasus mountain resorts. Standard winter thermal jackets and waterproof work boots are all that is required.
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
              In Georgia, legal employment salaries must be credited directly into personal bank accounts via official electronic transfer. Cash salary payments are illegal.
            </p>

            <div className="grid sm:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">Opening Your Bank Account</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  During your initial 2 weeks, employer HR assists you in opening an account at leading Georgian financial institutions such as <strong className="font-semibold text-slate-900">Bank of Georgia (BOG)</strong>, <strong className="font-semibold text-slate-900">TBC Bank</strong>, or <strong className="font-semibold text-slate-900">Liberty Bank</strong>. You receive an international Visa/Mastercard debit card and a personal IBAN number starting with <strong className="font-mono text-slate-800">GE...</strong>.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">Monthly Salary Crediting</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Salaries are credited between the 5th and 10th of every month in Georgian Lari (GEL). You receive an official printed pay slip indicating gross earnings, basic hours, overtime hours, and statutory 20% income tax deductions.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">Sending Money to India</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Workers transfer funds directly to their family accounts in India (SBI, HDFC, PNB, Bank of Baroda) through international bank SWIFT wire transfers, Western Union, MoneyGram, or mobile banking apps. Remittances arrive in Indian bank accounts within 24 to 48 hours at competitive exchange rates.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 11: Labour Code & Tax ── */}
          <section id="labour-law-tax" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaScaleUnbalanced className="w-3.5 h-3.5 text-emerald-600" />
              Section 11: Georgian Labour Code &amp; Taxation Standards
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Worker Protections Under the Labour Code of Georgia
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">40-Hour Standard Work Week</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Under the Georgian Labour Code, standard working time is 40 hours per week (8 hours per day, 5 days per week, or 48 hours in specific continuous shift operations). Overtime is compensated at a mandatory premium above standard hourly wages.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">24 Working Days Paid Annual Leave</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Employees are statutorily entitled to at least 24 working days of fully paid annual leave per year, plus 17 official national public holidays recognized under Georgian law.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="font-bold text-slate-900 text-sm">Workplace Safety &amp; Inspection</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The Labour Inspection Service conducts mandatory site inspections ensuring protective equipment (PPE), safety harnesses, ventilation, and emergency medical kits are provided free by the employer.
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
              Arriving at Tbilisi (TBS) or Batumi (BUS) Airport: What to Expect
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To ensure hassle-free entry into Georgia, follow these proven practical guidelines:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="font-bold text-slate-900 text-base">Flight Routes &amp; Transit Rules</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Most flights from Delhi, Mumbai, or Lucknow connect via <strong className="font-semibold text-slate-900">Sharjah (Air Arabia)</strong>, <strong className="font-semibold text-slate-900">Dubai (flydubai)</strong>, or <strong className="font-semibold text-slate-900">Doha (Qatar Airways)</strong> directly into Tbilisi International Airport (TBS) or Batumi International Airport (BUS).
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-700 space-y-1">
                  <div>• Gulf Transit: No transit visa needed if your layover is under 24 hours and baggage is checked through.</div>
                  <div>• Airport SIM: Purchase a local MagtiCom or Silknet SIM card right inside the arrival hall for 15–20 GEL.</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="font-bold text-slate-900 text-base">Documents to Carry in Hand Luggage</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Never place your critical legal papers in checked baggage. Keep these in your personal hand cabin bag for the Patrol Police border officer:
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-700 space-y-1">
                  <div>1. Original Passport with stamped Category D1 Immigration Visa.</div>
                  <div>2. Signed bilingual employment contract.</div>
                  <div>3. Ministry of Labour contract registration confirmation slip.</div>
                  <div>4. Employer company guarantee &amp; accommodation letter.</div>
                  <div>5. $200 to $300 in USD or EUR cash for initial personal needs.</div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 13: Anti-Scam Advisory & Border Warning ── */}
          <section id="scam-warning" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaTriangleExclamation className="w-3.5 h-3.5 text-emerald-600" />
              Section 13: CRITICAL ANTI-SCAM ADVISORY &amp; Border Warnings
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Protect Yourself from Fake Visas, Tourist Traps &amp; Illegal Border Syndicates
            </h2>

            <div className="rounded-2xl border border-red-300 bg-red-50/70 p-6 sm:p-7 space-y-4 text-xs sm:text-sm text-slate-800">
              <div className="flex items-center gap-2.5 font-extrabold text-red-900 text-base">
                <FaBan className="w-5 h-5 text-red-600" />
                WARNING: The &quot;Tourist Visa to Work Visa&quot; Scam
              </div>
              <p className="leading-relaxed">
                Fraudulent sub-agents frequently charge ₹3 to ₹6 Lakhs promising: <em className="text-red-950 font-medium">&quot;Take an electronic tourist visa, land in Tbilisi, and start working immediately. We will convert it into a work permit later.&quot;</em>
              </p>
              <div className="font-bold text-red-950">
                THIS IS STRICTLY ILLEGAL UNDER GEORGIAN LAW. UNDERSTAND THE REALITY:
              </div>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong className="font-bold text-red-950">Tourist Visas Cannot Be Converted to Work Permits:</strong> Working on a Category C tourist visa is a severe violation. If caught, you face immediate arrest by the Patrol Police, a 1,000 GEL fine, immediate deportation at your own expense, and a <strong className="font-bold text-red-950">3 to 5 Year Re-entry Ban</strong>.
                </li>
                <li>
                  <strong className="font-bold text-red-950">Georgia is NOT in the Schengen Zone:</strong> You cannot legally enter Russia, Turkey, Armenia, or European Schengen nations using a Georgian visa. Borders are heavily militarized with thermal surveillance and biometric controls.
                </li>
                <li>
                  <strong className="font-bold text-emerald-900">Travel ONLY on a Genuine Category D1 Immigration Visa:</strong> Demand an official D1 visa stamped by the Embassy of Georgia in New Delhi and registered on the Ministry of Labour portal (labour.moh.gov.ge). Work legally, earn in Lari/USD, and build a secure, prosperous international career.
                </li>
              </ul>
            </div>
          </section>

          {/* ── Section 14: FAQs ── */}
          <section id="faqs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaCircleQuestion className="w-3.5 h-3.5 text-emerald-600" />
              Section 14: Frequently Asked Questions (Georgia Work Permits 2026)
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Essential Answers for Indian Candidates Migrating to Georgia
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
                href="/countries/albania"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                    Adriatic Hub
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    Albania Work Visa &amp; Jobs Guide 2026
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Unique Permits (Leje Unike), 50,000 ALL min wage &amp; fast-track 4–8 week e-permits.
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
                    Schengen Peer
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
                href="/countries/russia"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md inline-block">
                    Northern Eurasian Corridor
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    Russia Work Visa &amp; Jobs Guide 2026
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Commercial welding, construction &amp; agricultural logistics permits in Moscow &amp; St. Petersburg.
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
                    View Live Georgia Vacancies
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
                  Eurasian Placement Desk
                </div>

                <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
                  Verify Your Trade Profile for Georgia Employment 2026
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Submit your passport copy and trade credentials to our specialized European &amp; Caucasian placement desk. We verify sponsor legitimacy, Ministry of Labour registration quotas, and direct employment contracts with 100% employer-provided housing.
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free Evaluation for Welders, Drivers, Masons, Cooks &amp; Technicians</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Authorized D1 Visa &amp; New Delhi Embassy Stamping Support</span>
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
                        value="Georgia (Caucasus & Europe)"
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-emerald-400 font-bold focus:outline-none cursor-not-allowed"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3.5 text-sm font-bold text-slate-950 shadow-md hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                      >
                        <span>Submit Georgia Profile For Free Audit</span>
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

