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
  FaHouseUser,
  FaBan,
  FaBuilding,
  FaTrainSubway,
} from "react-icons/fa6";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.workwisevisa.com";

export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Luxembourg Work Visa & Jobs Guide 2026: Salaried Worker Permit, EU Blue Card & ADEM Clearance | WorkWise Visa",
  description:
    "Definitive 2026 statutory master guide to Luxembourg work visas for Indian skilled workers, technicians, cloud engineers, accountants & healthcare staff. Learn Salaried Worker AST approvals, EU Blue Card salary bars, ADEM shortage clearances, the world's highest minimum wage (€3,085+), and legal consular deployment.",
  keywords: [
    "Luxembourg work visa 2026",
    "Luxembourg work visa for Indian citizens",
    "Luxembourg work permit process in India",
    "Luxembourg salaried worker visa AST",
    "ADEM Luxembourg shortage list 2026",
    "Luxembourg EU Blue Card salary threshold 2026",
    "Luxembourg minimum social wage SSM qualified 2026",
    "Direction de l immigration Luxembourg application",
    "Belgian Embassy New Delhi Luxembourg visa stamping",
    "VFS Luxembourg visa appointment India",
    "Luxembourg jobs for Indian IT civil welders nurses",
    "Cost of living Luxembourg vs salary savings INR",
    "Free public transport Luxembourg expat living",
    "Luxembourg work visa processing time and cost",
    "WorkWise Visa Luxembourg placement",
    "How to get job in Luxembourg with visa sponsorship from India",
  ],
  alternates: {
    canonical: `${BASE_URL}/countries/luxembourg`,
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
    title: "Luxembourg Work Visa & Jobs Guide 2026: Salaried Worker Permit, EU Blue Card & ADEM Clearance | WorkWise Visa",
    description:
      "Comprehensive statutory manual for Indian professionals, skilled tradespeople, cloud architects, financial analysts, and project managers migrating to the Grand Duchy of Luxembourg under the Law of 29 August 2008.",
    url: `${BASE_URL}/countries/luxembourg`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1588614959060-4d144f28b207?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Luxembourg Work Visa & Employment Master Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxembourg Work Visa & Jobs Guide 2026: Salaried Worker Permit, EU Blue Card & ADEM Clearance | WorkWise Visa",
    description:
      "Complete 2026 Luxembourg work visa guide for Indian workers. Explore Salaried Worker AST approvals, EU Blue Card thresholds, €3,085+ minimum wage, ADEM clearances, and Belgian Embassy consular stamping in India.",
    images: ["https://images.unsplash.com/photo-1588614959060-4d144f28b207?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function LuxembourgCountryPage() {
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
        name: "Luxembourg",
        item: `${BASE_URL}/countries/luxembourg`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Luxembourg Work Visa & Skilled Employment Guide 2026: Salaried Worker Permit (AST), EU Blue Card, ADEM Shortages & Minimum Wages",
    description:
      "Comprehensive statutory manual for Indian professionals, engineers, technicians, and specialized trade workers migrating to the Grand Duchy of Luxembourg under the Law of 29 August 2008 and ADEM fast-track labor market authorizations.",
    image: "https://images.unsplash.com/photo-1588614959060-4d144f28b207?auto=format&fit=crop&w=1200&q=80",
    author: {
      "@type": "Organization",
      name: "WorkWise European Consular & Legal Placement Desk",
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
    datePublished: "2026-01-25T09:00:00+01:00",
    dateModified: "2026-10-16T00:00:00+01:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/countries/luxembourg`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Luxembourg Salaried Worker Visa (Travailleur salarié) and how do Indian citizens qualify in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Salaried Worker status (Travailleur salarié) is governed by Article 42 of the amended Luxembourg Immigration Law of 29 August 2008. To qualify, an Indian candidate must possess a signed employment contract (CDI or CDD) with a registered Luxembourg enterprise, hold recognized educational or vocational qualifications matching the role, and have the employer obtain an ADEM labor market clearance certificate (Certificat de l'ADEM). The candidate then secures a Temporary Authorization to Stay (Autorisation de Séjour Temporaire - AST) directly from the Directorate of Immigration in Luxembourg before applying for a Type-D visa in India.",
        },
      },
      {
        "@type": "Question",
        name: "What is the 2026 EU Blue Card salary threshold for Luxembourg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In 2026, the EU Blue Card minimum gross annual salary threshold in Luxembourg is approximately €60,672 per year (1.5 times the national average gross annual salary, or ~€5,056 gross per month) for standard professions. For shortage occupations facing acute labor deficits (including software engineers, systems analysts, data scientists, and specialized engineers), the reduced threshold is 1.2 times the average salary, or approximately €48,537 per year (~€4,045 gross per month). EU Blue Card holders benefit from fast-track processing, immediate spousal open work rights, and expedited EU-wide mobility after 12 months.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Statutory Minimum Social Wage (SSM) in Luxembourg for 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Luxembourg has the highest legally mandated minimum wage in the world. Under national indexation, the Statutory Minimum Social Wage (Salaire Social Minimum - SSM) is €2,570.93 gross per month for unskilled workers aged 18 and older, and €3,085.11 gross per month for qualified (skilled) workers holding recognized vocational diplomas or 5+ years of verified trade experience. Under immigration law, the Ministry strictly rejects any work permit application for skilled professional or technical roles offering below the qualified threshold of €3,085.11/month (~₹2,82,000 INR).",
        },
      },
      {
        "@type": "Question",
        name: "What is the ADEM Labor Market Test and the 2026 Shortage Occupations List?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ADEM (Agence pour le développement de l'emploi) is the national employment agency of Luxembourg. Before hiring a non-EU citizen, the employer must declare the vacancy to ADEM. Typically, ADEM checks for 3 weeks if any qualified resident or EU citizen is available. However, for professions on the official 2026 ADEM Shortage Occupations List (Métiers en pénurie)—which includes IT developers, cybersecurity architects, HVAC mechanics, industrial electricians, welders, civil site managers, accountants, and nurses—ADEM issues the clearance certificate (Certificat d'engagement) within just 5 business days, completely bypassing EU labor market priority testing.",
        },
      },
      {
        "@type": "Question",
        name: "Which embassy in India issues the Luxembourg National Type-D Work Visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under bilateral Schengen diplomatic representation treaties, the Embassy of Belgium in New Delhi and the Consulate General of Belgium in Mumbai represent the Grand Duchy of Luxembourg for issuing National Type-D long-stay visas in India. Once your Temporary Authorization to Stay (AST) is approved in Luxembourg City, your biometric dossier is submitted through VFS Global (Belgium/Luxembourg visa application center) in New Delhi, Mumbai, Bengaluru, Chennai, Kolkata, or Hyderabad. The stamped Type-D visa allows legal entry into Luxembourg.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a Luxembourg Work Visa take from India in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The complete two-tier statutory process typically takes 8 to 14 weeks. Phase 1 (ADEM vacancy declaration and clearance certificate) takes 1 to 3 weeks (or 5 days for shortage trades). Phase 2 (Application review and issuance of the Temporary Authorization to Stay - AST by the Direction de l'immigration in Luxembourg City) takes 6 to 10 weeks. Phase 3 (Type-D visa biometric submission and passport stamping through VFS and the Belgian Embassy in India) takes 10 to 15 working days.",
        },
      },
      {
        "@type": "Question",
        name: "Is nationwide public transportation really 100% free in Luxembourg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Luxembourg was the first country in the world to abolish all fares on public transportation. Every train (2nd class), tramway, and municipal/regional bus (RGTR, AVL, TICE) throughout the entire country is 100% free for all residents, commuters, and tourists without needing tickets or transit passes. This statutory benefit saves workers €100 to €200 per month compared to other European capitals.",
        },
      },
      {
        "@type": "Question",
        name: "Do Indian candidates need to know French, German, or Luxembourgish to work in Luxembourg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends heavily on your industry. In IT, software engineering, cloud computing, FinTech, fund administration, multinational logistics, and international corporate law, English is the primary working language. In healthcare, local construction, public services, and retail, intermediate French (B1/B2) is essential. For vocational trade roles (electricians, welders, mechanics), basic operational French or German is advantageous, but multinational project teams frequently operate in English alongside international colleagues.",
        },
      },
      {
        "@type": "Question",
        name: "Can my spouse work in Luxembourg on an accompanying family visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Under recent statutory amendments to the Luxembourg Immigration Law, spouses and registered civil partners of holders of a Salaried Worker Residence Permit (Travailleur salarié) or EU Blue Card receive immediate, unrestricted open work rights in Luxembourg upon completing their arrival registration at the local commune. They do not need to apply for a separate ADEM labor clearance or individual work authorization.",
        },
      },
      {
        "@type": "Question",
        name: "How much can an Indian worker save in Luxembourg after rent, taxes, and living costs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A skilled technician or junior engineer earning €3,800 to €4,800 gross per month takes home approximately €2,850 to €3,550 net (in hand). After rent (flatshare/colocation €750–€1,000, or studio €1,300–€1,600 outside the capital), food and groceries (€300–€400), zero transit cost (€0), and utilities (€150), single workers save €1,400 to €2,000 net monthly (approx. ₹1,28,000 to ₹1,85,000 INR). Married couples and senior specialists routinely save over €2,500 to €4,000 monthly.",
        },
      },
      {
        "@type": "Question",
        name: "What are the post-arrival formalities upon landing in Luxembourg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Within 3 business days of landing in Luxembourg, you must declare your arrival (Déclaration d'arrivée) at the local municipal administrative office (Commune or Bierger-Center) of your residence. Within 30 days, you must complete a mandatory medical screening (including a chest X-ray for tuberculosis) at the Ligue Médico-Sociale and undergo an occupational health checkup. Finally, you submit the application for your plastic residence permit card (Titre de séjour) to the Ministry of Foreign Affairs.",
        },
      },
      {
        "@type": "Question",
        name: "How can foreign workers obtain Permanent Residency or Citizenship in Luxembourg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Foreign workers who have resided legally and continuously in Luxembourg for 5 years can apply for Long-Term Resident EU status (Statut de résident de longue durée - permanent residency). Furthermore, after 5 years of lawful stay, candidates can apply for Luxembourgish Citizenship by Naturalization (Nationalité luxembourgeoise), which requires passing the basic Luxembourgish oral language exam (Sproochentest, Level A2 speaking / B1 listening) and completing the 'Vivre ensemble au Grand-Duché' civic integration course. Dual citizenship is 100% permitted under Luxembourgish law.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Obtain a Luxembourg Work Visa from India in 2026",
    description:
      "A complete 6-phase statutory roadmap for Indian skilled professionals, technicians, and trade workers to legally obtain an ADEM clearance, Temporary Authorization to Stay (AST), Belgian consular Type-D visa stamping, and Luxembourg residence permit.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Compliant Employment Contract (CDI / CDD)",
        text: "Secure an employment contract with a verified Luxembourg enterprise meeting the statutory qualified minimum wage (€3,085.11+ gross/month) or EU Blue Card salary threshold, conforming to the Luxembourg Labour Code.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "ADEM Vacancy Declaration & Labor Market Clearance",
        text: "The sponsoring Luxembourg employer declares the post to ADEM (Agence pour le développement de l'emploi) via the enterprise portal to obtain the official Certificat d'engagement (issued in 5 days for shortage trades).",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Temporary Authorization to Stay (AST) Issuance",
        text: "Submit the comprehensive immigration dossier (authenticated contract, police clearance certificate, degree translations, CV, passport) directly to the Direction de l'immigration in Luxembourg City via MyGuichet.lu to receive the official 90-day AST.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Type-D National Long-Stay Visa Stamping at Belgian Embassy in India",
        text: "Submit passport, AST approval letter, travel health insurance, and consular visa dossier to VFS Global India (represented by the Embassy of Belgium in New Delhi or Mumbai Consulate) for National Type-D visa stamping.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Arrival in Luxembourg & Commune Declaration (Bierger-Center)",
        text: "Travel to Luxembourg, declare arrival at the local municipality (Commune / Bierger-Center) within 3 business days of landing, and register your residential address.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Medical Screening & Residence Permit (Titre de séjour) Issuance",
        text: "Complete tuberculosis screening at the Ligue Médico-Sociale, register with the CCSS social security fund, and receive the official 1-to-3-year biometric plastic residence card (Titre de séjour).",
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
              <span className="text-emerald-300 font-bold">Grand Duchy of Luxembourg (Grand-Duché de Luxembourg)</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                {/* Government & Authority Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Official Grand Duchy of Luxembourg (Direction de l&apos;immigration &amp; ADEM) Gateway
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                  Luxembourg Work Visa &amp; Jobs Guide{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                    2026
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  The definitive, legally verified statutory master guide for Indian professionals, software architects, civil engineers, nurses, industrial welders, HVAC technicians, and chefs migrating to Europe&apos;s wealthiest economy. Learn official{" "}
                  <strong className="font-bold text-white">Temporary Authorizations to Stay (AST)</strong>,{" "}
                  <strong className="font-bold text-emerald-300">ADEM fast-track shortage clearances</strong>, the world&apos;s highest{" "}
                  <strong className="font-bold text-white">Minimum Social Wage (€3,085+ qualified)</strong>, 100% free universal public transit, and consular stamping through the Belgian Embassy in India.
                </p>

                {/* Key Benefits Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaMoneyBillWave className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">€3,085–€8,500+</div>
                      <div className="text-[10px] text-slate-400">₹2.8L–₹7.8L+ Monthly Pay</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaTrainSubway className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">100% Free Transit</div>
                      <div className="text-[10px] text-slate-400">All Trains, Trams &amp; Buses</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaAward className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">EU Blue Card</div>
                      <div className="text-[10px] text-slate-400">Fast-Track European Mobility</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaCertificate className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">ADEM Shortage List</div>
                      <div className="text-[10px] text-slate-400">5-Day Expedited Clearance</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaClock className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">40-Hr Workweek</div>
                      <div className="text-[10px] text-slate-400">26 Days Paid Annual Leave</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaBuildingColumns className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">5-Year PR &amp; Passport</div>
                      <div className="text-[10px] text-slate-400">Dual Citizenship Allowed</div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons - Clean 2-CTA Layout */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
                  <Link
                    href="/jobs?country=Luxembourg"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] active:scale-[0.98] transition-all text-center w-full sm:w-auto"
                  >
                    <FaBriefcase className="w-4 h-4 shrink-0" />
                    <span>Explore Jobs</span>
                  </Link>

                  <a
                    href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20Luxembourg%20Work%20Visas,%20ADEM%20Clearance%20and%20Skilled%20Jobs!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/50 px-6 py-3 text-sm font-bold text-white transition-all shadow-md text-center w-full sm:w-auto"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>

              {/* Quick Country Snapshot Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3.5">
                      <img
                        src="https://flagcdn.com/w160/lu.png"
                        alt="Luxembourg Flag"
                        className="h-10 w-14 object-cover rounded-xl shadow-md border border-white/25 shrink-0"
                      />
                      <div>
                        <h2 className="text-xl font-display font-extrabold text-white">Grand Duchy of Luxembourg</h2>
                        <p className="text-xs text-emerald-300 font-medium">Luxembourg City • Kirchberg • Esch-sur-Alzette</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-xs font-black text-emerald-300">
                      AAA WEALTH
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs text-slate-200">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Immigration Authority:</span>
                      <span className="font-bold text-white">Direction de l&apos;immigration (MAEE)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Employment Agency:</span>
                      <span className="font-bold text-emerald-300">ADEM (Agence pour l&apos;emploi)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Consular Representation:</span>
                      <span className="font-bold text-white">Embassy of Belgium in New Delhi / Mumbai</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Qualified Minimum Wage:</span>
                      <span className="font-bold text-amber-300">€3,085.11/mo (World Record SSM)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Average Monthly Technical Pay:</span>
                      <span className="font-bold text-emerald-300">€3,800 – €6,500 (₹3.5L – ₹6.0L INR)</span>
                    </div>

                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Permanent European Settlement:</span>
                      <span className="font-bold text-emerald-300">5 Years (Long-Term EU Resident / Passport)</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-950/50 border border-emerald-500/30 p-3.5 text-center text-xs text-slate-300">
                    <div className="flex items-center justify-center gap-2 text-emerald-300 font-semibold mb-0.5">
                      <FaShieldHalved className="w-3.5 h-3.5 text-emerald-400" />
                      <span>100% Verified Sponsoring Employers</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      ADEM Fast-Track Certificate • Ministry of Foreign Affairs Clearance • Zero Hidden Charges
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
              Luxembourg Comprehensive Guide Directory:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#overview" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                1. 2026 Macro-Economy &amp; Foreign Talent
              </a>
              <a href="#visa-types" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                2. Visa Pathways: Salaried Worker &amp; EU Blue Card
              </a>
              <a href="#adem-clearance" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                3. ADEM Shortage List &amp; Fast-Track
              </a>
              <a href="#minimum-wage" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                4. World-Record Minimum Wage (SSM)
              </a>
              <a href="#step-by-step" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                5. 6-Phase Deployment Pipeline
              </a>
              <a href="#salary-matrix" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                6. 2026 Euro-to-INR Salary Matrix
              </a>
              <a href="#labour-law" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                7. Luxembourg Labour Code &amp; Worker Rights
              </a>
              <a href="#tax-healthcare" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                8. Tax Classes &amp; Universal CCSS Healthcare
              </a>
              <a href="#living-housing" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                9. Free Public Transit &amp; Housing Playbook
              </a>
              <a href="#consular-india" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                10. Consular Stamping in India via Belgian Embassy
              </a>
              <a href="#settlement" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                11. 5-Year Permanent Residency &amp; Passport
              </a>
              <a href="#faqs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                12. Detailed FAQs (12+)
              </a>
            </div>
          </div>
        </section>

        {/* ── Main Content Container ─────────────────────────── */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">

          {/* ── Section 1: Overview & Macroeconomic Landscape ─── */}
          <section id="overview" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaBuildingColumns className="w-3.5 h-3.5 text-emerald-600" />
              Section 1: Country Overview &amp; Europe&apos;s Highest-Earning Economic Engine
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The Grand Duchy of Luxembourg in 2026: Why Global Professionals Choose Europe&apos;s Wealth Capital
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Strategically nestled between Germany, France, and Belgium at the crossroads of Western Europe, the <strong>Grand Duchy of Luxembourg</strong> (<em>Grand-Duché de Luxembourg</em>) is globally renowned as an unrivaled financial, technological, and industrial powerhouse. With a nominal Gross Domestic Product (GDP) per capita consistently exceeding <strong>$135,000 USD</strong>—the highest recorded worldwide—an immaculate <strong>AAA sovereign credit rating</strong>, universal public healthcare, and a cosmopolitan demographic fabric where foreign residents comprise over <strong>47.4% of the national population</strong> (and over 70% in Luxembourg City), the Grand Duchy represents the gold standard of European employment.
              </p>
              <p>
                Unlike larger European states that are currently introducing restrictive immigration caps, complex points barriers, or navigating protracted bureaucratic gridlocks, Luxembourg operates an extraordinarily transparent, merit-driven, employer-sponsored immigration architecture. Under the statutory oversight of the{" "}
                <a
                  href="https://maee.gouvernement.lu/en/directions-du-ministere/immigration.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Direction de l&apos;immigration (Ministry of Foreign and European Affairs)
                </a>{" "}
                and the national employment administration (<strong>ADEM — Agence pour le développement de l&apos;emploi</strong>), the Grand Duchy has modernized its legal framework to fast-track non-EU/EEA talent into its rapidly expanding economy.
              </p>
              <p>
                From global asset management funds and FinTech headquarters in Kirchberg to advanced logistics hubs in Bettembourg, satellite telecommunications corridors (SES Astra in Betzdorf), biopharmaceutical campuses, and nationwide civil infrastructure projects, demand for Indian technical talent is surging. Certified cloud engineers, full-stack developers, cybersecurity specialists, financial auditors, industrial HVAC technicians, 6G welders, heavy crane operators, and registered caregivers are recruited under legally guaranteed contracts with statutory minimum compensation starting at <strong>€3,085.11 gross per month</strong>.
              </p>
            </div>

            {/* Statutory Pillars Grid */}
            <div className="grid md:grid-cols-3 gap-6 pt-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <FaMoneyBillWave className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">World&apos;s Highest Minimum Wage</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Legally indexed minimum wage of €2,570.93/mo for unskilled labor and €3,085.11/mo (~₹2.82L INR) for qualified skilled specialists. Automatically increased whenever inflation rises by 2.5%.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                  <FaTrainSubway className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">100% Free Public Transit</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The first country on Earth to eliminate all transport fares. Every passenger train, light-rail tram, and cross-canton bus is completely free for all residents, drastically reducing monthly living costs.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                  <FaAward className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">Immediate Spousal Work Rights</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Spouses of Salaried Worker (AST) and EU Blue Card holders receive unrestricted, immediate work rights across Luxembourg upon registration, without needing separate ADEM labor market clearances.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 2: Core Visa Categories ────────────────── */}
          <section id="visa-types" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaPassport className="w-3.5 h-3.5 text-emerald-600" />
              Section 2: Primary Luxembourg Work Permit Categories &amp; Legal Pathways
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Which Luxembourg Work Visa Classification Applies to Your Profile?
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed">
              Foreign third-country nationals (including Indian citizens) migrating to Luxembourg must secure statutory status under the <strong>Amended Immigration Law of 29 August 2008</strong>. The Grand Duchy provides four primary employer-sponsored immigration tracks:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {/* Category 1: Salaried Worker */}
              <div className="rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-white via-emerald-50/20 to-white p-6 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 px-3 py-1 text-xs font-bold">
                    Article 42
                  </span>
                  <span className="text-xs font-bold text-slate-500">Core Employment</span>
                </div>

                <h3 className="font-display font-extrabold text-slate-900 text-xl">
                  Salaried Worker (Travailleur salarié)
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The universal foundational work permit for vocational technicians, skilled trade workers, corporate staff, and engineers possessing an open-ended (CDI) or fixed-term (CDD) contract:
                </p>

                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Salary Benchmark:</strong> Must meet or exceed the qualified minimum wage (€3,085.11/mo gross).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>ADEM Clearance:</strong> Sponsoring employer obtains an official ADEM certificate before file submission.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Permit Duration:</strong> Issued for 1 year (tied to professional sector), renewable for 3 years with open mobility.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Family Accompaniment:</strong> Spouses receive full unrestricted employment authorization immediately.</span>
                  </li>
                </ul>
              </div>

              {/* Category 2: EU Blue Card */}
              <div className="rounded-3xl border border-teal-200/80 bg-gradient-to-br from-white via-teal-50/20 to-white p-6 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-teal-100 text-teal-800 border border-teal-300 px-3 py-1 text-xs font-bold">
                    Article 45
                  </span>
                  <span className="text-xs font-bold text-slate-500">High-Skilled Elite</span>
                </div>

                <h3 className="font-display font-extrabold text-slate-900 text-xl">
                  EU Blue Card (Carte bleue européenne)
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tailored for university graduates, software engineers, financial risk analysts, and specialized researchers with an employment contract of at least 1 year:
                </p>

                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Standard Salary Threshold:</strong> ~€60,672 gross/year (1.5x national average salary, ~€5,056/mo).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Shortage Occupations Bar:</strong> ~€48,537 gross/year (1.2x national average, ~€4,045/mo for IT/engineering).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>ADEM Exemption:</strong> Employers are 100% exempt from the ADEM labor market priority test.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Inter-EU Mobility:</strong> Freedom to relocate to Germany, France, or Netherlands after 12 months.</span>
                  </li>
                </ul>
              </div>

              {/* Category 3: Highly Qualified Worker */}
              <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-br from-white via-amber-50/20 to-white p-6 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-amber-100 text-amber-800 border border-amber-300 px-3 py-1 text-xs font-bold">
                    Specialist Status
                  </span>
                  <span className="text-xs font-bold text-slate-500">Technical Specialists</span>
                </div>

                <h3 className="font-display font-extrabold text-slate-900 text-xl">
                  Highly Qualified Worker (Travailleur hautement qualifié)
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For senior corporate specialists, managing directors, and technical experts who possess significant industry experience:
                </p>

                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Experience Equivalency:</strong> Can qualify through 5+ years of verified professional experience in lieu of degree.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Initial Validity:</strong> 4-year multi-entry residence card or duration of the contract plus 3 months.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Accelerated PR:</strong> Direct credit toward the 5-year continuous residence requirement for permanent settlement.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Fast-Track Review:</strong> Priority adjudication by the Directorate of Immigration within 4 to 8 weeks.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── Section 3: ADEM Shortage List & Fast-Track ──────── */}
          <section id="adem-clearance" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaCertificate className="w-3.5 h-3.5 text-emerald-600" />
              Section 3: The ADEM Labor Market Clearance &amp; 2026 Shortage Occupations List
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Understanding ADEM: How Luxembourg Fast-Tracks Indian Manpower in Deficit Trades
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                In the Luxembourg immigration system, the <strong>National Employment Agency (ADEM — Agence pour le développement de l&apos;emploi)</strong> serves as the statutory gatekeeper protecting the domestic and EU labor markets. When an enterprise wishes to recruit a third-country national under the Salaried Worker category, it must file a formal declaration of vacancy (<em>Déclaration de poste vacant</em>) on the ADEM corporate portal.
              </p>
              <p>
                Under standard immigration rules, ADEM conducts a <strong>3-week labor market test</strong> to ascertain whether an unemployed resident or EU national possesses the requisite profile. If no suitable match is identified within 21 days, ADEM issues an official certificate (<em>Certificat accordant le droit de recruter un ressortissant de pays tiers</em>) authorising the employer to hire the international specialist.
              </p>
              <p>
                <strong>The 2026 Fast-Track Revolution:</strong> To combat structural talent deficits, the Luxembourg Minister of Labour publishes an official statutory <strong>Shortage Occupations List (Liste des métiers très en pénurie)</strong>. For all roles designated on this shortage schedule, the mandatory 3-week waiting period is completely waived! <strong>ADEM issues the clearance certificate within just 5 business days</strong>, enabling immediate submission of your work permit file.
              </p>
            </div>

            {/* Shortage Sectors Table */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
              <h3 className="font-display font-bold text-slate-900 text-lg flex items-center gap-2">
                <FaAward className="w-5 h-5 text-emerald-600" />
                Key 2026 ADEM Fast-Track Shortage Occupations (Métiers en pénurie)
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-700">
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-1.5">
                  <span className="font-bold text-emerald-800 block text-sm">Information Technology &amp; Cloud</span>
                  <p className="text-slate-600">DevOps engineers, cloud architects (AWS/Azure), full-stack developers (Java, Python, React), cybersecurity analysts, and data engineers.</p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-1.5">
                  <span className="font-bold text-emerald-800 block text-sm">Financial Services &amp; Compliance</span>
                  <p className="text-slate-600">Fund accountants, AML/KYC compliance officers, internal risk controllers, actuarial analysts, and financial auditors.</p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-1.5">
                  <span className="font-bold text-emerald-800 block text-sm">Industrial Trades &amp; Maintenance</span>
                  <p className="text-slate-600">6G TIG/MIG welders, industrial electricians, CNC machinists, HVAC technicians, automated line mechanics, and pipefitters.</p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-1.5">
                  <span className="font-bold text-emerald-800 block text-sm">Civil Engineering &amp; Construction</span>
                  <p className="text-slate-600">Site civil engineers, structural draughtsmen (BIM/CAD), crane operators, formwork carpenters, and electrical grid technicians.</p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-1.5">
                  <span className="font-bold text-emerald-800 block text-sm">Healthcare &amp; Life Sciences</span>
                  <p className="text-slate-600">Registered intensive care nurses, specialized surgical ward nurses, biomedical lab technicians, and elderly geriatric caregivers.</p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-1.5">
                  <span className="font-bold text-emerald-800 block text-sm">Logistics &amp; Transport</span>
                  <p className="text-slate-600">Heavy articulated lorry/trailer drivers (CE License), intermodal freight forwarders, supply chain coordinators, and warehouse team leaders.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 4: Minimum Social Wage (SSM) ───────────── */}
          <section id="minimum-wage" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaScaleUnbalanced className="w-3.5 h-3.5 text-emerald-600" />
              Section 4: The Statutory Minimum Social Wage (SSM) &amp; Inflation Indexation
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The World&apos;s Highest Minimum Wage: Statutory Guarantees Under Luxembourg Law
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Luxembourg holds the undisputed global record for statutory minimum remuneration, codified in Article L. 222-1 of the <strong>Luxembourg Labour Code (Code du travail)</strong> as the <strong>Salaire Social Minimum (SSM)</strong>. By law, no enterprise operating within the Grand Duchy is legally permitted to execute an employment contract below this statutory baseline.
              </p>
              <p>
                Crucially for foreign workers, Luxembourg law establishes two distinct minimum wage tiers based on professional qualifications:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <span className="text-xs font-bold uppercase text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  Tier 1: Non-Qualified
                </span>
                <h3 className="font-display font-bold text-slate-900 text-xl">
                  Unskilled Minimum Wage (SSM Non-Qualifié)
                </h3>
                <div className="text-3xl font-display font-black text-slate-900">
                  €2,570.93 <span className="text-sm font-normal text-slate-500">/ month gross (~₹2,35,000 INR)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Applicable to manual helpers, entry-level cleaners, and basic warehouse handlers who possess no formal technical diplomas or certified vocational trade qualifications.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6 shadow-sm space-y-3">
                <span className="text-xs font-bold uppercase text-emerald-800 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full">
                  Tier 2: Qualified Worker (Mandatory for Visas)
                </span>
                <h3 className="font-display font-bold text-slate-900 text-xl">
                  Qualified Minimum Wage (SSM Qualifié)
                </h3>
                <div className="text-3xl font-display font-black text-emerald-700">
                  €3,085.11 <span className="text-sm font-normal text-slate-500">/ month gross (~₹2,82,000 INR)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Applicable to workers holding a recognized vocational diploma (such as an Indian ITI, Polytechnic Diploma, or Bachelor&apos;s degree) or possessing at least <strong>5 years of verified professional experience</strong> in their respective trade.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-300 bg-amber-50/70 p-5 text-xs text-amber-950 space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                <FaCircleExclamation className="w-4 h-4 text-amber-600 shrink-0" />
                Critical Immigration Mandate: The Qualified Wage Rejection Rule
              </div>
              <p className="leading-relaxed">
                Under statutory directives from the Directorate of Immigration, any third-country national applying for a Salaried Worker Residence Permit in a skilled, technical, supervisory, or engineering capacity whose contract offers below the <strong>Qualified Minimum Wage of €3,085.11 per month</strong> will receive an <strong>automatic, non-appealable refusal</strong>. WorkWise Visa audits every contract to ensure 100% compliance with Luxembourg statutory remuneration baselines.
              </p>
            </div>
          </section>

          {/* ── Section 5: 6-Phase Deployment Pipeline ─────────── */}
          <section id="step-by-step" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaTruckFast className="w-3.5 h-3.5 text-emerald-600" />
              Section 5: The Official 6-Phase Deployment Pipeline (India to Luxembourg)
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              From Indian Interview to Luxembourgish Commune Registration: Step-by-Step
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed">
              Migrating to Luxembourg operates on a strictly structured, two-tier legal framework: you must secure statutory authorization directly from the Luxembourg Ministry of Foreign Affairs <em>while remaining in India</em> before booking your consular visa stamping appointment:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {/* Phase 1 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden">
                <span className="absolute -top-3 -right-3 text-6xl font-display font-black text-slate-100 select-none">
                  01
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-sm">
                    1
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Contract &amp; ADEM Clearance
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Candidate clears technical interviews and executes a compliant employment contract (CDI) offering at least €3,085.11/mo. Employer files vacancy declaration with ADEM and receives the official hiring certificate (issued in 5 days for shortage roles).
                </p>
                <div className="text-[11px] font-bold text-emerald-700">Timeline: 1 to 3 Weeks</div>
              </div>

              {/* Phase 2 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden">
                <span className="absolute -top-3 -right-3 text-6xl font-display font-black text-slate-100 select-none">
                  02
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 font-bold text-sm">
                    2
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Temporary Authorization to Stay (AST)
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The application dossier (contract, ADEM certificate, apostilled police clearance certificate, degree equivalencies, CV) is filed directly with the <em>Direction de l&apos;immigration</em> in Luxembourg City. The Ministry reviews and issues the official 90-day AST.
                </p>
                <div className="text-[11px] font-bold text-teal-700">Timeline: 6 to 10 Weeks</div>
              </div>

              {/* Phase 3 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden">
                <span className="absolute -top-3 -right-3 text-6xl font-display font-black text-slate-100 select-none">
                  03
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-bold text-sm">
                    3
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Belgian Embassy Consular Stamping
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Candidate presents original passport, AST approval, travel insurance, and flight reservation at VFS Global (Belgian Embassy/Consulate representation). The National Type-D Long-Stay Visa sticker is affixed to the passport.
                </p>
                <div className="text-[11px] font-bold text-amber-700">Timeline: 10 to 15 Working Days</div>
              </div>

              {/* Phase 4 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden">
                <span className="absolute -top-3 -right-3 text-6xl font-display font-black text-slate-100 select-none">
                  04
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-sm">
                    4
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Flight, Arrival &amp; Commune Declaration
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fly into Luxembourg Findel Airport (LUX) or via Frankfurt/Brussels. Within <strong>3 business days</strong> of landing, you must declare your arrival (<em>Déclaration d&apos;arrivée</em>) at the local municipal administrative Bierger-Center of your commune.
                </p>
                <div className="text-[11px] font-bold text-emerald-700">Timeline: Within 3 Days of Landing</div>
              </div>

              {/* Phase 5 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden">
                <span className="absolute -top-3 -right-3 text-6xl font-display font-black text-slate-100 select-none">
                  05
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 font-bold text-sm">
                    5
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Medical Screening (Ligue Médico-Sociale)
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Undergo statutory post-arrival medical examination, including a digital chest X-ray for tuberculosis screening at the <em>Ligue Médico-Sociale</em>, alongside an occupational health checkup with an accredited doctor.
                </p>
                <div className="text-[11px] font-bold text-teal-700">Timeline: Within 15 to 30 Days</div>
              </div>

              {/* Phase 6 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden">
                <span className="absolute -top-3 -right-3 text-6xl font-display font-black text-slate-100 select-none">
                  06
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-bold text-sm">
                    6
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Residence Card (Titre de séjour)
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Submit medical clearance certificate to the Directorate of Immigration to receive your official biometric plastic residence permit card (<em>Titre de séjour</em>), valid for 1 year (Salaried Worker) or 4 years (EU Blue Card).
                </p>
                <div className="text-[11px] font-bold text-amber-700">Timeline: Final Settlement</div>
              </div>
            </div>
          </section>

          {/* ── Section 6: 2026 Salary Matrix & Trade Breakdown ── */}
          <section id="salary-matrix" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaMoneyBillWave className="w-3.5 h-3.5 text-emerald-600" />
              Section 6: 2026 Euro-to-INR Salary Matrix Across 25+ Key Occupations
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Verified Market Compensation in Luxembourg: Gross, Net Take-Home &amp; INR Equivalents
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed">
              Below is the comprehensive market compensation table for international workers in Luxembourg. Calculations reflect standard monthly gross remuneration, estimated net take-home pay after statutory social security contributions (CCSS ~12.5%) and personal income taxes for single individuals (Tax Class 1), alongside approximate Indian Rupee (INR) valuations based on current prevailing exchange rates (1 EUR ≈ ₹91.50):
            </p>

            {/* Comprehensive Table */}
            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white uppercase text-[11px] font-bold tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Trade / Professional Role</th>
                    <th className="px-5 py-4">Monthly Gross (EUR)</th>
                    <th className="px-5 py-4">Monthly Net Take-Home</th>
                    <th className="px-5 py-4">Approx. In-Hand (INR)</th>
                    <th className="px-5 py-4">Statutory Track</th>
                    <th className="px-5 py-4">Top Employment Hubs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      Senior Cloud / DevOps Engineer (AWS/GCP)
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      €6,500 – €8,800
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      €4,400 – €5,750
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      ₹4,02,000 – ₹5,26,000
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-teal-700">
                      EU Blue Card (Shortage)
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">
                      Kirchberg, Gasperich, Cloche d&apos;Or
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      Full-Stack Software Developer (Java/Python)
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      €5,200 – €7,000
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      €3,650 – €4,700
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      ₹3,34,000 – ₹4,30,000
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-teal-700">
                      EU Blue Card
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">
                      Luxembourg City, Esch-Belval
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      Cybersecurity Architect / SecOps Lead
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      €6,800 – €9,200
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      €4,600 – €6,000
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      ₹4,20,000 – ₹5,49,000
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-teal-700">
                      EU Blue Card
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">
                      Kirchberg Banking District
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      Fund Accountant / Asset Management Auditor
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      €4,800 – €6,500
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      €3,400 – €4,400
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      ₹3,11,000 – ₹4,02,000
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-emerald-700">
                      Salaried Worker / ADEM
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">
                      Kirchberg, Senningerberg
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      Civil Site Project Engineer (BIM/BTP)
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      €5,000 – €6,800
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      €3,550 – €4,600
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      ₹3,25,000 – ₹4,20,000
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-emerald-700">
                      ADEM Shortage Clearance
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">
                      Differdange, Esch-sur-Alzette
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      Industrial HVAC Technician / Refrigeration
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      €3,600 – €4,800
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      €2,700 – €3,450
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      ₹2,47,000 – ₹3,15,000
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-emerald-700">
                      Salaried Worker (SSM Qualifié)
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">
                      Contern, Strassen, Mamer
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      6G TIG / MIG Industrial Welder
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      €3,500 – €4,600
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      €2,650 – €3,350
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      ₹2,42,000 – ₹3,06,000
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-emerald-700">
                      ADEM Shortage List
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">
                      Bettembourg, Dudelange
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      Industrial Electrician / Automation Mechanic
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      €3,600 – €4,700
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      €2,700 – €3,400
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      ₹2,47,000 – ₹3,11,000
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-emerald-700">
                      ADEM Shortage List
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">
                      Esch-Belval, Schifflange
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      Heavy Commercial Trailer Driver (CE License)
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      €3,400 – €4,500
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      €2,600 – €3,300
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      ₹2,38,000 – ₹3,02,000
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-emerald-700">
                      Salaried Worker
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">
                      Eurohub Sud Bettembourg
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      Registered ICU / Surgical Ward Nurse
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      €4,200 – €5,600
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      €3,100 – €3,950
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      ₹2,83,000 – ₹3,61,000
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-emerald-700">
                      Health Ministry Authorization
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">
                      CHL Luxembourg, Hôpitaux Robert Schuman
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      Indian Specialty Head Chef / Tandoori Master
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      €3,200 – €4,200
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      €2,450 – €3,100
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      ₹2,24,000 – ₹2,83,000
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-emerald-700">
                      Salaried Worker
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">
                      Luxembourg-Ville, Strassen, Bertrange
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-[11px] text-slate-500 italic">
              * Note: Calculations based on baseline exchange rate (1 EUR ≈ ₹91.50 INR). Net take-home figures reflect standard single expatriate taxation (Tax Class 1). Married workers with children (Tax Class 2) take home significantly higher net monthly sums due to family tax splits and state child allowances (Caisse pour l&apos;avenir des enfants - CAE: €299.86/month per child).
            </div>
          </section>

          {/* ── Section 7: Labour Code & Worker Rights ─────────── */}
          <section id="labour-law" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaScaleUnbalanced className="w-3.5 h-3.5 text-emerald-600" />
              Section 7: Luxembourg Labour Code (Code du travail) &amp; Worker Protections
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Statutory Worker Rights &amp; Social Protections Under Luxembourg Law
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                The <strong>Luxembourg Labour Code (Code du travail)</strong> is internationally celebrated for offering some of the most robust statutory protections in the European Union. These statutory guarantees apply universally to all employees irrespective of nationality or residence status, overseen by the <strong>Inspection du Travail et des Mines (ITM)</strong>:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <FaClock className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Working Hours &amp; Strict Overtime Premiums
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The statutory working week is strictly capped at <strong>40 hours per week</strong> (8 hours per day). Overtime requires prior ITM ministerial authorization and must be compensated either with <strong>1.5 hours of paid compensatory rest per hour worked</strong> or paid out at <strong>140% of standard hourly base pay</strong> (100% base + 40% tax-free premium). Sunday work carries an additional 70% statutory premium.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                    <FaCalendarDays className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    26 Paid Vacation Days + 11 Public Holidays
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every employee is legally guaranteed a minimum of <strong>26 business days of paid annual leave</strong> per calendar year, fully paid at your normal wage rate. In addition, Luxembourg observes <strong>11 statutory paid public holidays</strong>. If a statutory holiday falls on a weekend, employees receive an additional replacement vacation day off in lieu.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                    <FaHospital className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    100% Paid Sick Leave &amp; Health Reimbursement
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Under the CNS (Caisse Nationale de Santé), medically certified sick leave is compensated at <strong>100% of your full gross salary</strong> from Day 1. The employer covers the initial period (Lohnfortzahlung) up to 77 days, after which the state health fund directly pays the worker. Terminations during verified sick leave are strictly prohibited by law.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <FaCoins className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Universal Monthly Child Allowance (CAE)
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The Luxembourg government pays a direct, non-taxable monthly child allowance of <strong>€299.86 per child per month</strong> (Caisse pour l&apos;avenir des enfants - CAE) to every resident foreign worker raising children in the Grand Duchy, plus back-to-school educational allowances (Allocation de rentrée scolaire) each August.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 8: Tax Classes & Healthcare ───────────── */}
          <section id="tax-healthcare" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaHospital className="w-3.5 h-3.5 text-emerald-600" />
              Section 8: Tax Classes (1, 1a, 2), Net In-Hand &amp; CCSS Social Security
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Understanding Luxembourg Taxation &amp; Universal CCSS Healthcare
            </h2>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  Luxembourg operates a progressive income tax system managed by the <strong>Administration des contributions directes (ACD)</strong>. Workers are classified into three statutory tax categories (<em>Classes d&apos;impôt</em>):
                </p>

                <div className="space-y-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <strong className="text-slate-900 text-sm block mb-1">Tax Class 1 (Single Persons):</strong>
                    Applies to single, unmarried employees without children. Progressive tax rates scale from 0% on the first €12,438 of annual income up to 42% on high brackets, with an effective overall average tax rate typically around 18%–26% for standard salaries.
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <strong className="text-slate-900 text-sm block mb-1">Tax Class 1a (Single Parents &amp; Older Workers):</strong>
                    Favorable tax schedule for single parents with dependent children or individuals aged 65 and older, featuring enhanced non-taxable allowances.
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <strong className="text-emerald-800 text-sm block mb-1">Tax Class 2 (Married Couples &amp; Civil Partners):</strong>
                    Offers immense tax savings! Joint taxation splits the couple&apos;s combined income, resulting in significantly lower tax brackets and boosting monthly net take-home by €400 to €800+ compared to single status.
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
                  <h3 className="font-display font-bold text-slate-900 text-sm flex items-center gap-2">
                    <FaShieldHalved className="w-4 h-4 text-emerald-600" />
                    CCSS Social Security Deductions (Centre Commun de la Sécurité Sociale)
                  </h3>
                  <p className="text-xs text-slate-600">
                    Statutory social security contributions are deducted automatically at source:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Health Insurance (CNS):</strong> 3.05% employee contribution (matched by employer). Grants 80% to 100% reimbursement of all doctor consultations, prescriptions, and dental care.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>State Pension (Assurance pension):</strong> 8.00% employee contribution (matched by employer). High future retirement pension safety.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Long-Term Care (Assurance dépendance):</strong> 1.40% for elderly and specialized invalidity support.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Monthly Budget Breakdown Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                  <h3 className="font-display font-bold text-slate-900 text-base border-b border-slate-100 pb-3">
                    Realistic Monthly Budget (Skilled Technician / Junior IT)
                  </h3>

                  <div className="space-y-3 text-xs text-slate-600">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Monthly Gross Pay (e.g. Technician):</span>
                      <span className="font-bold text-emerald-700">€4,000 (~₹3,66,000)</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Social Security (CCSS ~12.5%):</span>
                      <span className="font-bold text-slate-700">-€500</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Income Tax (Class 1 Single):</span>
                      <span className="font-bold text-slate-700">-€520</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-slate-100 font-bold text-slate-900">
                      <span>Net In-Hand Salary:</span>
                      <span className="font-bold text-emerald-700">€2,980 (~₹2,72,000)</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Room / Flatshare Rent (Colocation):</span>
                      <span className="font-bold text-slate-700">-€850</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Food &amp; Groceries:</span>
                      <span className="font-bold text-slate-700">-€350</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Nationwide Public Transport:</span>
                      <span className="font-bold text-emerald-600">€0 (100% Free!)</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Mobile 5G SIM, Utilities &amp; Internet:</span>
                      <span className="font-bold text-slate-700">-€120</span>
                    </div>

                    <div className="flex justify-between pt-2 text-sm font-bold bg-emerald-50/80 p-3 rounded-xl border border-emerald-200">
                      <span className="text-emerald-950">Net Monthly INR Savings:</span>
                      <span className="text-emerald-800">₹1,50,000 – ₹1,65,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 9: Free Transit & Housing Playbook ─────── */}
          <section id="living-housing" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaHouseUser className="w-3.5 h-3.5 text-emerald-600" />
              Section 9: The Free Nationwide Public Transit System &amp; Housing Playbook
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Navigating Luxembourg&apos;s Zero-Cost Public Mobility &amp; Rental Housing Market
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Two unique socio-economic realities define daily life in Luxembourg: the world&apos;s most progressive public transit network and a tight residential rental market. Understanding how to navigate both is crucial for international workers:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                    <FaTrainSubway className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-lg">
                    The 100% Free Public Transit Network
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  On 1 March 2020, Luxembourg made history as the first sovereign nation to make <strong>all public transport completely free of charge</strong> nationwide. Whether boarding the sleek Luxtram across Luxembourg City, taking the CFL intercity train from Mersch to Esch-sur-Alzette, or riding regional RGTR express buses connecting cross-border terminals, you simply walk on and ride without buying tickets, validating cards, or showing passes. Only 1st class train compartments require payment.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <FaBuilding className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-lg">
                    The Housing Playbook: Rental Communes &amp; Colocation
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Housing in central Luxembourg City is competitive. Newcomers typically begin in <strong>flatsharing (Colocation)</strong> furnished rooms (€700–€1,000/mo including charges) via platforms like Athome.lu, Immotop.lu, or Furnished.lu. To maximize savings, many workers reside in charming, transit-connected southern and northern communes such as <strong>Esch-sur-Alzette, Differdange, Dudelange, Mersch, or Ettelbruck</strong>, where rents are 30%–40% lower and trains reach the capital in 15 to 25 minutes.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 10: Consular Stamping via Belgian Embassy ─ */}
          <section id="consular-india" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaPassport className="w-3.5 h-3.5 text-emerald-600" />
              Section 10: Consular Visa Stamping in India via Belgian Representation
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              How the Belgian Embassy Processes Luxembourg Type-D Visas in India
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                A vital point of confusion for Indian applicants is finding the consular office responsible for visa stamping. While the Grand Duchy of Luxembourg maintains an Embassy in New Delhi, <strong>bilateral consular representation treaties designate the Embassy of Belgium in New Delhi and the Consulate General of Belgium in Mumbai</strong> to issue long-stay National Type-D employment visas on behalf of Luxembourg.
              </p>
              <p>
                Once the <em>Direction de l&apos;immigration</em> in Luxembourg City approves your file and dispatches your <strong>Autorisation de séjour temporaire (AST)</strong>, WorkWise Visa coordinates your biometric submission through <strong>VFS Global Belgium/Luxembourg</strong>:
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
              <h3 className="font-display font-bold text-slate-900 text-base flex items-center gap-2">
                <FaCircleCheck className="w-4 h-4 text-emerald-600" />
                Mandatory Pre-Departure Document Checklist for Indian Applicants
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-slate-600">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">1. Original Passport:</span>
                  Valid for at least 12 months beyond intended stay, with at least 2 blank visa pages, undamaged.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">2. Original AST Approval:</span>
                  Official <em>Autorisation de séjour temporaire</em> issued by the Luxembourg Ministry of Foreign Affairs.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">3. Employment Contract:</span>
                  Signed copy of your CDI or CDD contract conforming to the Luxembourg Labour Code and ADEM certificate.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">4. MEA Apostilled PCC:</span>
                  Police Clearance Certificate from Passport Seva Kendra (PSK), apostilled by the Ministry of External Affairs.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">5. Educational Certificates:</span>
                  Sworn French/German translations of degrees or vocational ITI diplomas apostilled by MEA.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">6. Travel Health Insurance:</span>
                  Schengen travel insurance policy covering €30,000 for emergency medical hospitalization until CCSS activation.
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 11: Long-Term Settlement & Passport ────── */}
          <section id="settlement" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaAward className="w-3.5 h-3.5 text-emerald-600" />
              Section 11: Long-Term European Settlement: 5-Year Permanent Residency &amp; Citizenship
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The Path to a Powerful European Passport: Permanent Residency &amp; Dual Citizenship
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Luxembourg offers one of the most stable, merit-based settlement pathways in the democratic world. For Indian workers seeking a secure future for their families in Western Europe:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <span className="text-xs font-bold uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Step 1: Permanent Residency (5 Years)
                </span>
                <h3 className="font-display font-bold text-slate-900 text-lg">
                  EU Long-Term Resident Status (Résident de longue durée)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  After <strong>5 years of uninterrupted legal residence</strong> in Luxembourg, foreign workers can apply for permanent EU Long-Term Resident status. This grants complete employment freedom across all sectors, access to full state benefits, and unrestricted rights to live and work across the European Union.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <span className="text-xs font-bold uppercase text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
                  Step 2: Luxembourgish Citizenship (5 Years)
                </span>
                <h3 className="font-display font-bold text-slate-900 text-lg">
                  Naturalization &amp; The Sproochentest
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Under the Law of 8 March 2017, foreign residents can apply for <strong>Luxembourgish Citizenship by Naturalization after just 5 years</strong> of legal stay. Requirements: pass the basic Luxembourgish language oral exam (<em>Sproochentest</em>, Level A2 speaking / B1 listening) and complete the <em>&ldquo;Vivre ensemble au Grand-Duché&rdquo;</em> civic course. <strong>Dual citizenship is 100% permitted!</strong>
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 12: Exhaustive FAQ Accordion ───────────── */}
          <section id="faqs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaBriefcase className="w-3.5 h-3.5 text-emerald-600" />
              Section 12: Comprehensive Frequently Asked Questions (FAQs)
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Answering Every Critical Search Intent Query for Indian Job Seekers
            </h2>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Q1: How can an Indian citizen get a job in Luxembourg with visa sponsorship?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To secure employment with visa sponsorship, Indian candidates must target sectors facing designated labor shortages (IT, FinTech, civil engineering, electrical mechanics, healthcare, and commercial logistics). Sponsoring enterprises in Luxembourg must be registered with the Luxembourg Trade and Companies Register (LBR) and declare the vacancy on the ADEM portal. Once ADEM issues the clearance certificate, the employer files your Temporary Authorization to Stay (AST) dossier with the Directorate of Immigration in Luxembourg. WorkWise Visa connects pre-screened Indian professionals directly with authorized Luxembourg employers.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Q2: What is the minimum salary required to get a Luxembourg work visa?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For skilled trade technicians, corporate personnel, and vocational workers under the Salaried Worker category, the employment contract must guarantee at least the <strong>Qualified Minimum Social Wage (SSM Qualifié) of €3,085.11 gross per month</strong> (~₹2,82,000 INR). For EU Blue Card applicants, the statutory threshold is approximately €60,672 per year (~€5,056/mo) for standard professions, or €48,537 per year (~€4,045/mo) for designated shortage professions like IT developers and engineers.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Q3: How much does a Luxembourg work visa cost from India?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The statutory state fee charged by the Luxembourg Directorate of Immigration for issuing the Temporary Authorization to Stay (AST) is <strong>€80</strong>. The consular fee for stamping the National Type-D Visa through the Belgian diplomatic mission in India is <strong>€180</strong> (payable in INR, approximately ₹16,500), plus standard VFS administrative logistics charges (~₹2,000–₹2,500). Additional minor pre-departure costs include MEA Apostille on police clearance and degree certificates.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Q4: Do Indian workers with ECR passports qualify for Luxembourg work permits?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>Yes.</strong> Holding an ECR (Emigration Check Required) passport does not restrict you from migrating to Luxembourg. Under the Indian Emigration Act, mandatory Protector of Emigrants (POE) e-Migrate clearance applies only to 18 notified Gulf and Southeast Asian countries. European Schengen nations (including Luxembourg) are exempt from POE clearance, allowing candidates to depart directly on a valid Belgian/Luxembourg National Type-D visa.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Q5: Can I live in Germany, France, or Belgium while working in Luxembourg?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Over 220,000 workers commute daily into Luxembourg as cross-border commuters (<em>Frontaliers</em>) from neighboring France (Metz, Thionville), Germany (Trier, Saarbrücken), and Belgium (Arlon). However, as a non-EU citizen holding an initial Luxembourg Salaried Worker residence permit, <strong>you must reside within the territory of the Grand Duchy</strong> and register at a Luxembourgish commune. Only after obtaining EU Long-Term Resident status or European citizenship can you choose to live cross-border.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Q6: How does WorkWise Visa protect Indian job seekers from European visa fraud?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  WorkWise Visa operates strictly through physical corporate offices in <Link href="/locations/noida" className="text-emerald-700 font-bold underline">Noida HQ</Link> and <Link href="/locations/patna" className="text-emerald-700 font-bold underline">Patna Branch</Link>. We work exclusively with verified employers registered with the Luxembourg Trade and Companies Register (LBR). Every job offer is backed by an authentic ADEM declaration number, compliant CDI contract, and official AST issued by the Directorate of Immigration in Luxembourg City. We never deal with unregulated sub-agents or informal work arrangements.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 13: Related Master Guides ─────────────── */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Western &amp; Central Europe Career Paths</span>
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
                  <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full inline-block">Federal Republic of Germany</span>
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
                href="/countries/russia"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full inline-block">Eurasian Industrial Corridor</span>
                  <h3 className="font-display font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    Russia Work Visa &amp; Industrial Jobs Guide
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Official MVD yellow invitations, HQS 3-year visas, 6G welders, CNC operators, and direct Rupee-Ruble banking transfers.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 mt-4">
                  Read Full Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/countries/uae"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full inline-block">Gulf Cooperation Council</span>
                  <h3 className="font-display font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    UAE &amp; Dubai Employment Visa Guide
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Tax-free earnings, MOHRE work contracts, free employer accommodation, and rapid 2 to 3 week visa stamping.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 mt-4">
                  Read Full Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </section>

          {/* ── Section 14: CTA & Office Directory ─────────────── */}
          <section className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400">
                Start Your European Career in 2026
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight">
                Ready to Apply for High-Paying Jobs in Luxembourg?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect directly with WorkWise Visa&apos;s specialized Western European placement directors. From ADEM vacancy fast-tracking to official AST filings with the Directorate of Immigration, Belgian Embassy visa appointments, and accommodation guidance in Luxembourg — we manage your complete deployment with 100% legal compliance.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20want%20to%20evaluate%20my%20profile%20for%20Luxembourg%20Work%20Visas%20and%20ADEM%20Shortage%20Jobs!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition-all"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  Chat with Luxembourg Placement Desk
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
