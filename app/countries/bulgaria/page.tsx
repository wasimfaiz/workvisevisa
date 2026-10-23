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
} from "react-icons/fa6";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.workwisevisa.com";

export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Bulgaria Work Visa & Jobs Guide 2026: Single Work Permit (SWRP), EU Blue Card, Schengen Rules & Salaries | WorkWise Visa",
  description:
    "Definitive 2026 statutory master guide to Bulgaria work visas for Indian skilled workers, technicians, welders, CNC machinists, construction trades & IT engineers. Learn Single Work & Residence Permit (SWRP/ЕРПР) approvals, National Employment Agency (AZ) clearances, 10% flat tax, Schengen mobility, and legal consular deployment from India.",
  keywords: [
    "Bulgaria work visa 2026",
    "Bulgaria work visa for Indian citizens",
    "Bulgaria work permit process in India",
    "Bulgaria Single Work and Residence Permit SWRP",
    "Edinno razreshenie za prebivavane i rabota ERPR",
    "Bulgaria Employment Agency AZ labor test",
    "Bulgaria EU Blue Card salary threshold 2026",
    "Bulgaria Schengen visa work rights 2026",
    "Bulgarian Embassy New Delhi Type D visa stamping",
    "VFS Bulgaria visa appointment India",
    "Bulgaria jobs for Indian welders masons drivers",
    "Bulgaria flat 10 tax rate salary in hand",
    "Bulgarian minimum wage 2026 BGN EUR INR",
    "Cost of living Bulgaria vs monthly savings INR",
    "WorkWise Visa Bulgaria recruitment partner",
    "How to get work permit in Bulgaria from India",
  ],
  alternates: {
    canonical: `${BASE_URL}/countries/bulgaria`,
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
    title: "Bulgaria Work Visa & Jobs Guide 2026: Single Work Permit (SWRP), EU Blue Card, Schengen Rules & Salaries | WorkWise Visa",
    description:
      "Comprehensive statutory manual for Indian professionals, skilled tradespeople, welders, CNC machinists, heavy drivers, and engineers migrating to the Republic of Bulgaria under the Labour Migration and Labour Mobility Act (ZTMTR) and Schengen framework.",
    url: `${BASE_URL}/countries/bulgaria`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Bulgaria Work Visa & Employment Master Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulgaria Work Visa & Jobs Guide 2026: Single Work Permit (SWRP), EU Blue Card, Schengen Rules & Salaries | WorkWise Visa",
    description:
      "Complete 2026 Bulgaria work visa guide for Indian workers. Explore Single Work & Residence Permits (SWRP), EU Blue Card rules, 10% flat tax, Employment Agency clearances, and New Delhi Embassy consular stamping.",
    images: ["https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function BulgariaCountryPage() {
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
        name: "Bulgaria",
        item: `${BASE_URL}/countries/bulgaria`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Bulgaria Work Visa & Skilled Employment Guide 2026: Single Work and Residence Permit (SWRP), EU Blue Card, Schengen Accession & Tax Benchmarks",
    description:
      "Authoritative statutory manual for Indian workers, industrial technicians, welders, and engineers migrating to the Republic of Bulgaria under the Labour Migration and Labour Mobility Act (ZTMTR) and Foreigners in the Republic of Bulgaria Act (ZCHRB).",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=80",
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
    datePublished: "2026-02-10T09:00:00+02:00",
    dateModified: "2026-10-23T00:00:00+02:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/countries/bulgaria`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Bulgaria Single Work and Residence Permit (SWRP / ЕРПР) and how do Indian citizens qualify in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Single Work and Residence Permit (SWRP), known in Bulgarian as Единно разрешение за пребиваване и работа (ЕРПР), is governed by Article 24i of the Foreigners in the Republic of Bulgaria Act (ZCHRB). It combines both labor authorization and residence into a single legal instrument issued for up to 3 years. To qualify, an Indian candidate must secure an authentic employment contract with a Bulgarian enterprise, possess vocational certifications or education authenticated matching the role, and undergo pre-clearance by the National Employment Agency (Агенция по заетостта - АЗ). After the Migration Directorate issues the approval decision, the worker applies for a National Type-D Visa in India.",
        },
      },
      {
        "@type": "Question",
        name: "How does Bulgaria's Schengen Area accession impact Indian workers holding Bulgarian work permits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bulgaria officially entered the Schengen Area on March 31, 2024 (with internal air and maritime borders lifted first, followed by land border integration). Consequently, any third-country national holding a valid Bulgarian National Long-Stay Type-D Visa or biometric Bulgarian Residence Card (Разрешение за пребиваване) is legally entitled to travel freely without internal border checks across all 29 Schengen member states (such as Germany, France, Italy, Austria, and Greece) for up to 90 days within any 180-day rolling window for business or leisure.",
        },
      },
      {
        "@type": "Question",
        name: "What is the statutory minimum wage and flat tax rate in Bulgaria for 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Article 244 of the Bulgarian Labour Code, the national statutory minimum gross wage is indexed annually to 50% of the national average gross salary, set at approximately 933 to 1,077 BGN gross per month (~€477 to €550 EUR / ₹44,000 to ₹50,000 INR). Furthermore, Bulgaria boasts one of the lowest and most transparent tax environments in the European Union, featuring a flat 10% Personal Income Tax rate. After standard employee social security contributions (~13.78%) and flat income tax, workers retain over 78% of their gross earnings as net take-home salary.",
        },
      },
      {
        "@type": "Question",
        name: "What is the role of the Bulgarian National Employment Agency (Агенция по заетостта - АЗ)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The National Employment Agency (AZ) is the sovereign executive body under the Ministry of Labour and Social Policy responsible for regulating foreign labor access. Under the Labour Migration and Labour Mobility Act (ZTMTR), the employer submits the job announcement to AZ. AZ conducts a statutory Labor Market Test (checking domestic candidate availability for up to 15-20 days). For verified shortage occupations or highly technical trades, AZ issues a positive written opinion (становище) directly to the Migration Directorate, enabling expedited permit issuance.",
        },
      },
      {
        "@type": "Question",
        name: "Where do Indian workers apply for the Bulgarian National Type-D Work Visa in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Once the Migration Directorate in Sofia approves the Single Work and Residence Permit, the candidate must attend an in-person consular interview and submit biometrics at the Embassy of the Republic of Bulgaria in New Delhi (located at EP 16/17, Chandragupta Marg, Chanakyapuri, New Delhi) or through authorized VFS Global Bulgaria application centers across Indian metropolitan hubs. The consular fee for a National Long-Stay Type-D Visa is €100 (payable in Indian Rupees).",
        },
      },
      {
        "@type": "Question",
        name: "How long does the complete Bulgaria work permit and visa process take from India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The end-to-end statutory timeline typically spans 6 to 10 weeks. Stage 1 (Labor Market clearance and document preparation by the Bulgarian employer) requires 2 to 3 weeks. Stage 2 (Migration Directorate review and issuance of the official Single Permit Decision in Bulgaria) takes 3 to 4 weeks. Stage 3 (Type-D visa application, biometric submission, and consular passport stamping in New Delhi) takes approximately 15 to 25 calendar days.",
        },
      },
      {
        "@type": "Question",
        name: "Does the Bulgarian employer provide free accommodation and transport for foreign workers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, in the vast majority of industrial, construction, agricultural, and logistics contracts, Bulgarian employers provide free, fully furnished corporate accommodation (apartments or residential worker dormitories) with all utilities (heating, water, electricity, Wi-Fi) covered under the employment agreement. Employers also arrange free daily shuttle bus transportation between corporate housing and work sites, significantly reducing living expenditures.",
        },
      },
      {
        "@type": "Question",
        name: "What is the average monthly savings for an Indian worker in Bulgaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A skilled tradesman (such as a 6G welder, CNC machinist, mason, or carpenter) earning between 1,600 and 2,400 BGN gross per month with standard overtime takes home approximately 1,350 to 2,000 BGN net (€690 to €1,020 EUR). With company-provided accommodation and shared room cooking expenses totaling only 250 to 350 BGN per month (~₹12,000 to ₹16,000 INR), single workers reliably save ₹48,000 to ₹80,000 INR clean each month. Senior supervisors, plant engineers, and IT specialists save upwards of ₹1,40,000 to ₹2,20,000 INR monthly.",
        },
      },
      {
        "@type": "Question",
        name: "Do Indian candidates need to speak Bulgarian before applying for a work visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No statutory language certificate is mandated for the Single Work and Residence Permit (SWRP) in technical, industrial, manufacturing, construction, or transport sectors. Worksite instructions and safety briefings are delivered in English or through bilingual supervisors. In multinational IT and engineering centers in Sofia and Plovdiv, English is the primary operational language. However, learning basic Cyrillic script and conversational Bulgarian phrases is highly advantageous for daily life and long-term integration.",
        },
      },
      {
        "@type": "Question",
        name: "Can foreign workers bring their spouse and children to Bulgaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Under Chapter Three of the Foreigners in the Republic of Bulgaria Act (ZCHRB), holders of a valid Bulgarian Residence Permit under the Single Permit or EU Blue Card have the statutory right to apply for Family Reunification (Събиране на семейство) for their legal spouse and minor children after establishing lawful residence, continuous employment, and suitable family housing.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Bulgarian EU Blue Card (Синя карта на ЕС) and who qualifies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Bulgarian EU Blue Card is governed by Article 33k of ZCHRB and EU Directive 2021/1883 for highly qualified non-EU professionals. To qualify, candidates must possess a higher education degree (minimum 3 years of academic university study) or verified 5+ years of senior professional experience in the field. The gross salary must be at least 1.5 times the average gross annual wage in Bulgaria. Blue Card holders enjoy up to 5-year permits, accelerated family reunification, and streamlined mobility across other EU member states after 12 months.",
        },
      },
      {
        "@type": "Question",
        name: "What documents must be Apostilled in India for a Bulgarian work permit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the Hague Apostille Convention (to which both India and Bulgaria are signatories), two critical documents must bear an authentic Ministry of External Affairs (MEA) Apostille sticker: (1) The Police Clearance Certificate (PCC) issued by the Regional Passport Office (valid for 6 months), and (2) Educational or Vocational Diplomas/Trade Certificates. Once apostilled, these documents are translated into Bulgarian by a certified sworn translator licensed by the Bulgarian Ministry of Foreign Affairs.",
        },
      },
      {
        "@type": "Question",
        name: "Who pays the government work permit and visa application fees under Bulgarian law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Article 7 of the Labour Migration and Labour Mobility Act (ZTMTR), the sponsoring Bulgarian enterprise is legally required to pay all official domestic state processing fees to the National Employment Agency (АЗ) and the Migration Directorate (МВР) for labor market verification and residence clearance. The employee only pays personal consular submission fees: the National Type-D Visa fee (€100) at the New Delhi Embassy and personal document apostille/medical expenses.",
        },
      },
      {
        "@type": "Question",
        name: "How can a foreign worker obtain Bulgarian Permanent Residency (PR) or EU Long-Term Residency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Third-country nationals who have legally and uninterruptedly resided in Bulgaria for 5 continuous years (without absences exceeding 10 months total or 6 consecutive months) are eligible to apply for Permanent Residence (Постоянно пребиваване) under Article 25 of ZCHRB or Long-Term EU Resident Status. After 5 years of permanent residence, applicants who demonstrate Bulgarian language proficiency and clean criminal records may apply for Bulgarian Citizenship by Naturalization.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Obtain a Bulgaria Work Visa (Single Work and Residence Permit) from India in 2026",
    description:
      "A complete 6-phase statutory roadmap for Indian skilled workers, technicians, and engineers to legally obtain National Employment Agency (AZ) approval, Migration Directorate clearance, Embassy Type-D visa stamping, and biometric Bulgarian Residence Card.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Employment Contract & Employer Labor Market Test (AZ)",
        text: "The Bulgarian employer registers a compliant full-time labor contract and conducts the statutory Labor Market Test with the National Employment Agency (Агенция по заетостта - АЗ).",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Single Permit Dossier Submission to Migration Directorate (МВР)",
        text: "The employer submits the candidate's authenticated and translated credentials, apostilled police clearance certificate, and medical report to the Migration Directorate in Sofia.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Issuance of Official Single Work & Residence Permit Decision",
        text: "Upon joint review by the Employment Agency and State Agency for National Security (DANS), the Migration Directorate issues the formal Decision granting right of work and residence.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "National Type-D Long-Stay Visa Application in New Delhi",
        text: "The candidate attends a biometric appointment at the Embassy of the Republic of Bulgaria in New Delhi with their original passport, permit decision, apostilled PCC, and travel insurance.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Deployment & Arrival in Bulgaria (Sofia / Plovdiv / Varna)",
        text: "The candidate travels to Bulgaria on their stamped Type-D visa, is received by corporate representatives, and checks into company-provided residential quarters.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Biometric Registration & Plastic Residence Card (Разрешение за пребиваване)",
        text: "Within 14 days of arrival, the worker visits the local Regional Migration Department, submits digital fingerprints, and receives their plastic Bulgarian Residence Permit Card.",
      },
    ],
  };

  return (
    <>
      {/* Schema.org Structured Data */}
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
              <span className="text-emerald-300 font-bold">Republic of Bulgaria (Република България)</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                {/* Authority & Schengen Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Full Schengen Member State • Official Employment Agency (АЗ) Gateway
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                  Bulgaria Work Visa &amp; Skilled Jobs Guide{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                    2026
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  The definitive, legally verified statutory master guide for Indian professionals, 6G welders, CNC machinists, heavy truck drivers, civil trades, and engineers migrating to Europe&apos;s fastest-growing manufacturing corridor. Explore official{" "}
                  <strong className="font-bold text-white">Single Work &amp; Residence Permits (SWRP/ЕРПР)</strong>,{" "}
                  <strong className="font-bold text-emerald-300">full Schengen mobility rights</strong>, Europe&apos;s lowest{" "}
                  <strong className="font-bold text-white">10% flat personal tax rate</strong>, employer-funded accommodation, and consular stamping through the Embassy of Bulgaria in New Delhi.
                </p>

                {/* Key Quick Value Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-xs">
                    <div className="text-xs text-slate-400 font-medium">Schengen Accession</div>
                    <div className="text-base font-extrabold text-white mt-0.5">Full Member</div>
                    <div className="text-[11px] text-emerald-400 font-semibold mt-1">29-Nation Free Travel</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-xs">
                    <div className="text-xs text-slate-400 font-medium">Flat Income Tax</div>
                    <div className="text-base font-extrabold text-white mt-0.5">10% Flat Rate</div>
                    <div className="text-[11px] text-emerald-400 font-semibold mt-1">Max In-Hand Take Home</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-xs">
                    <div className="text-xs text-slate-400 font-medium">Processing Time</div>
                    <div className="text-base font-extrabold text-white mt-0.5">6 – 10 Weeks</div>
                    <div className="text-[11px] text-emerald-400 font-semibold mt-1">Direct Embassy Visa D</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-xs">
                    <div className="text-xs text-slate-400 font-medium">Housing Benefit</div>
                    <div className="text-base font-extrabold text-white mt-0.5">100% Free</div>
                    <div className="text-[11px] text-emerald-400 font-semibold mt-1">Company Flat + Utilities</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-xs">
                    <div className="text-xs text-slate-400 font-medium">Net Savings / Mo</div>
                    <div className="text-base font-extrabold text-white mt-0.5">₹55k – ₹1.1L+</div>
                    <div className="text-[11px] text-emerald-400 font-semibold mt-1">Clean Remittance</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-xs">
                    <div className="text-xs text-slate-400 font-medium">EU Settlement</div>
                    <div className="text-base font-extrabold text-white mt-0.5">5 Years PR</div>
                    <div className="text-[11px] text-emerald-400 font-semibold mt-1">EU Passport Pathway</div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a
                    href="#consultation-form"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                  >
                    <span>Check Bulgaria Eligibility</span>
                    <FaArrowRight className="w-4 h-4" />
                  </a>

                  <Link
                    href="/jobs?country=Bulgaria"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-bold text-white hover:border-emerald-500 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    <FaBriefcase className="w-4 h-4 text-emerald-400" />
                    <span>Browse Bulgaria Jobs</span>
                  </Link>

                  <a
                    href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20Bulgaria%20Work%20Permit%20and%20Jobs%20for%202026."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/50 px-5 py-3.5 text-sm font-bold text-white transition-all shadow-md"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-300" />
                    <span>WhatsApp European Desk</span>
                  </a>

                  <Link
                    href="/track"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white underline underline-offset-4"
                  >
                    Track Existing File <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Right Hero Card: Sovereign Snapshot */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-slate-700/80 bg-slate-800/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
                    <div className="flex items-center gap-3.5">
                      <img
                        src="https://flagcdn.com/w160/bg.png"
                        alt="Bulgaria Flag"
                        className="h-10 w-14 object-cover rounded-xl shadow-md border border-white/20 shrink-0"
                      />
                      <div>
                        <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                          European Sovereign Profile
                        </div>
                        <div className="text-lg font-bold text-white">Republic of Bulgaria</div>
                        <div className="text-[11px] text-emerald-300 font-medium">Sofia • Plovdiv • Varna • Burgas • Ruse</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full">
                      EU &amp; SCHENGEN
                    </span>
                  </div>

                  {/* Fact List */}
                  <div className="space-y-3 text-xs text-slate-300">
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-700/40">
                      <span className="text-slate-400 font-medium">Capital City</span>
                      <span className="font-bold text-white">Sofia (София)</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-700/40">
                      <span className="text-slate-400 font-medium">Currency &amp; Fixed Peg</span>
                      <span className="font-bold text-emerald-300">1 EUR = 1.95583 BGN (Lev)</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-700/40">
                      <span className="text-slate-400 font-medium">Primary Work Permit</span>
                      <span className="font-bold text-white">SWRP / ЕРПР (1 to 3 Years)</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-700/40">
                      <span className="text-slate-400 font-medium">Labor Market Regulator</span>
                      <span className="font-bold text-white">Employment Agency (АЗ - az.government.bg)</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-700/40">
                      <span className="text-slate-400 font-medium">Immigration Directorate</span>
                      <span className="font-bold text-white">Ministry of Interior (МВР - mvr.bg)</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-700/40">
                      <span className="text-slate-400 font-medium">Consular Authority in India</span>
                      <span className="font-bold text-white">Embassy of Bulgaria, New Delhi &amp; VFS</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-700/40">
                      <span className="text-slate-400 font-medium">Average Monthly In-Hand</span>
                      <span className="font-bold text-emerald-300">1,400 – 2,400+ BGN (₹65k – ₹1.1L)</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-slate-400 font-medium">Company Accommodations</span>
                      <span className="font-bold text-emerald-300">100% Free / Employer Paid</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-900/40 border border-emerald-500/30 p-4 text-center">
                    <p className="text-xs font-medium text-emerald-200 mb-2">
                      Ready to launch your European career in the Schengen Area?
                    </p>
                    <a
                      href="mailto:workwisevisa@gmail.com?subject=Bulgaria%20Work%20Permit%20Application&body=Hello%20WorkWise%20Visa%20Team,%0A%0AI%20am%20applying%20for%20a%20Bulgaria%20Work%20Visa%20/%20Single%20Permit%20(SWRP).%0A%0AFull%20Name:%0APhone%20Number:%0ATrade/Designation:%0APassport%20Number:%0AExperience%20(Years):%0AHighest%20Qualification:"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-900 hover:bg-slate-100 transition-colors shadow-sm"
                    >
                      <FaEnvelope className="w-3.5 h-3.5 text-emerald-600" />
                      Submit Profile for Bulgaria Evaluation
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
              Bulgaria Comprehensive Master Guide Directory:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#overview" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                1. 2026 Schengen &amp; Macro Overview
              </a>
              <a href="#government-portals" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                2. Official Government Verification Portals
              </a>
              <a href="#visa-pathways" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                3. 4 Legal Work Visa Pathways
              </a>
              <a href="#salary-matrix" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                4. 2026 Salary, Overtime &amp; Remittance Matrix
              </a>
              <a href="#deployment-pipeline" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                5. 6-Stage Statutory Deployment Pipeline
              </a>
              <a href="#document-checklist" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                6. Document Checklist &amp; Hague Apostille
              </a>
              <a href="#fee-schedule" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                7. Statutory Fee Schedule &amp; Article 7 Mandate
              </a>
              <a href="#living-housing" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                8. Free Housing, Living Costs &amp; Savings
              </a>
              <a href="#labour-law-tax" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                9. Labour Code &amp; 10% Flat Tax Mathematics
              </a>
              <a href="#pr-citizenship" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                10. 5-Year Permanent Residency &amp; EU Passport
              </a>
              <a href="#faqs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                11. Frequently Asked Questions (14 FAQs)
              </a>
              <a href="#related-guides" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                12. Related European Work Visa Master Guides
              </a>
              <a href="#consultation-form" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                13. Free Profile Evaluation &amp; Office Directory
              </a>
            </div>
          </div>
        </section>

        {/* ── Main Content Container ─────────────────────────── */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">

          {/* ── Section 1: Executive Overview & The 2026 Schengen Reality ── */}
          <section id="overview" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaGlobe className="w-3.5 h-3.5 text-emerald-600" />
              Section 1: Strategic European Overview &amp; Schengen Integration
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Why Bulgaria Has Emerged as Europe&apos;s Preferred Skilled Employment Destination
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Situated at the strategic crossroads of Southeastern Europe, the Republic of Bulgaria has rapidly transformed into one of the continent&apos;s most vital manufacturing, engineering, and logistics hubs. With major European industrial clusters in Sofia, Plovdiv (Trakia Economic Zone), Varna, and Burgas, Bulgaria is experiencing unprecedented labor demand across skilled technical trades.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                  <FaPlaneArrival className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Full Schengen Accession Benefits
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Following its accession to the Schengen Area, foreign nationals holding a Bulgarian Single Work and Residence Permit enjoy visa-free mobility across 29 Schengen countries for up to 90 days in any 180-day window, opening limitless European professional horizons.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                  <FaCoins className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Flat 10% Tax Rate &amp; High Savings
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Unlike Western European nations where tax brackets exceed 35% to 45%, Bulgaria enforces a constitutional 10% flat personal income tax. Paired with employer-provided housing and utilities, workers save between 65% to 75% of their gross earnings every month.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                  <FaFileContract className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Streamlined 3-Year Single Permits
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The Single Work and Residence Permit (SWRP/ЕРПР) simplifies previous dual bureaucratic requirements into a single coordinated filing between the Employment Agency and Migration Directorate, granting up to 3 years of continuous lawful status with renewable pathways to Permanent Residency (PR).
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 2: Sovereign Government Portals & Directory ── */}
          <section id="government-portals" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaBuildingColumns className="w-3.5 h-3.5 text-emerald-600" />
              Section 2: Sovereign Government Verification Portals
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Authentic Republic of Bulgaria Government Directories
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              WorkWise Visa enforces strict transparency. Never accept informal WhatsApp printouts or unverifiable job offers. All legitimate Bulgarian employment authorizations are audited through these sovereign digital platforms:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Government Authority</th>
                    <th className="py-3.5 px-4 sm:px-6">Institutional Scope</th>
                    <th className="py-3.5 px-4 sm:px-6">Official Portal</th>
                    <th className="py-3.5 px-4 sm:px-6">Verification Function</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      National Employment Agency (АЗ)
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      Ministry of Labour &amp; Social Policy (МТСП)
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <a
                        href="https://www.az.government.bg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-bold hover:underline"
                      >
                        az.government.bg
                      </a>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      Labor Market Testing, employer vacancy declarations, and quota auditing.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Migration Directorate (Дирекция „Миграция“)
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      Ministry of Interior (МВР)
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <a
                        href="https://www.mvr.bg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-bold hover:underline"
                      >
                        mvr.bg
                      </a>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      Single Permit decisions, biometric residence card issuance, and LNCh numbers.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Embassy of Bulgaria in New Delhi
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      Ministry of Foreign Affairs (МВнР)
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <a
                        href="https://www.mfa.bg/en/embassies/india"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-bold hover:underline"
                      >
                        mfa.bg/en/embassies/india
                      </a>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      In-person consular biometric interviews and National Type-D visa passport stamping.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      National Revenue Agency (НАП)
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      Ministry of Finance (Министерство на финансите)
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <a
                        href="https://nra.bg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-bold hover:underline"
                      >
                        nra.bg
                      </a>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      Flat 10% income tax collection, social insurance registration, and pension credits.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      General Labour Inspectorate (ИА ГИТ)
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      Independent Executive Agency
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <a
                        href="https://www.gli.government.bg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-bold hover:underline"
                      >
                        gli.government.bg
                      </a>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      Enforcement of worker rights, statutory overtime payments, and workplace safety audits.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 3: The 4 Core Bulgarian Work Visa Pathways ── */}
          <section id="visa-pathways" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaPassport className="w-3.5 h-3.5 text-emerald-600" />
              Section 3: Immigration Pathways &amp; Authorizations
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              4 Official Bulgarian Work Visa &amp; Permit Categories
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Under the Labour Migration and Labour Mobility Act (ZTMTR) and Foreigners in the Republic of Bulgaria Act (ZCHRB), non-EU citizens can be deployed across four distinct legal frameworks:
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              {/* Category 1: Single Work and Residence Permit (SWRP / ЕРПР) */}
              <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 hover:border-emerald-500 hover:shadow-lg transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-300/60">
                    Most Popular • 85% of Deployments
                  </span>
                  <span className="text-xs font-bold text-slate-500">Validity: Up to 3 Years</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  1. Single Work and Residence Permit (SWRP / ЕРПР)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Governed under Article 24i of ZCHRB, this is the primary permit for skilled trades, factory technicians, construction workers, and logistics personnel. The employer applies directly in Bulgaria. It authorizes both lawful salaried work and continuous residency, with annual or 3-year renewals without leaving the country.
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-200 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Eligible Trades: Welders, CNC Machinists, Carpenters, Drivers, Electricians</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Employer conducts Labor Market Test (or verified shortage trade)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Fast-tracked renewable status leading to Permanent Residency (PR)</span>
                  </div>
                </div>
              </div>

              {/* Category 2: EU Blue Card Bulgaria (Синя карта на ЕС) */}
              <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 hover:border-emerald-500 hover:shadow-lg transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-3 py-1 rounded-full border border-blue-300/60">
                    High Qualification • White Collar
                  </span>
                  <span className="text-xs font-bold text-slate-500">Validity: Up to 5 Years</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  2. Bulgarian EU Blue Card (Синя карта на ЕС)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Issued under Article 33k of ZCHRB and EU Directive 2021/1883 for engineers, software architects, data scientists, and senior healthcare managers. Requires a 3-year higher university degree or 5+ years verified senior experience, with a salary offering at least 1.5 times the national average gross wage (~3,300+ BGN/month).
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-200 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Unrestricted EU-wide mobility rights after 12 months</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Immediate family reunification with spousal open work rights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Exempt from standard Bulgarian labor market testing</span>
                  </div>
                </div>
              </div>

              {/* Category 3: Seasonal Work Permit (Сезонна заетост) */}
              <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 hover:border-emerald-500 hover:shadow-lg transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-300/60">
                    Short-Term • Seasonal Peaks
                  </span>
                  <span className="text-xs font-bold text-slate-500">Validity: 90 Days to 9 Months</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  3. Seasonal Work Permit (Сезонна заетост)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Governed under Article 24l of ZCHRB for agriculture, horticulture, food processing, and peak summer/winter tourism (Black Sea resorts and Bansko ski hubs). Permits work from 90 days up to 9 months per calendar year, with mandatory return or transition to SWRP.
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-200 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Rapid processing within 3 to 4 weeks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Employer must provide 100% free food and accommodation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Eligible for consecutive season re-entry without penalties</span>
                  </div>
                </div>
              </div>

              {/* Category 4: Intra-Corporate Transfer (ICT) */}
              <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 hover:border-emerald-500 hover:shadow-lg transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 bg-slate-200 px-3 py-1 rounded-full">
                    Corporate Transfers
                  </span>
                  <span className="text-xs font-bold text-slate-500">Validity: 1 to 3 Years</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  4. Intra-Corporate Transferee (ICT / ВКТ)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Under Article 24m of ZCHRB, multinational corporations transferring key management, technical leads, or specialist engineering trainees to Bulgarian branches or production facilities utilize the ICT permit, bypassing standard labor quotas.
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-200 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                    <span>Applicable to managers, technical leads, and specialists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                    <span>Seamless mobility to other European branches within the EU</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                    <span>Expedited corporate dossier vetting through Migration Directorate</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 4: 2026 In-Demand Trades & Salary Matrix (BGN vs EUR vs INR) ── */}
          <section id="salary-matrix" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaMoneyBillWave className="w-3.5 h-3.5 text-emerald-600" />
              Section 4: Payroll &amp; Remittance Benchmarks
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              2026 Bulgaria Salary, Overtime &amp; Remittance Matrix
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Realistic, employer-verified wages across Bulgaria&apos;s leading manufacturing enterprises, construction contractors, and logistics centers (e.g. in Sofia, Plovdiv, Ruse, Stara Zagora). All calculations based on <strong>1 EUR ≈ 1.956 BGN</strong> and <strong>1 BGN ≈ ₹46.50 INR</strong>:
            </p>

            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Trade / Role Designation</th>
                    <th className="py-4 px-4 sm:px-6">Base Salary (BGN)</th>
                    <th className="py-4 px-4 sm:px-6">Gross Pay (EUR €)</th>
                    <th className="py-4 px-4 sm:px-6">Equivalent in INR (₹)</th>
                    <th className="py-4 px-4 sm:px-6">Estimated Monthly Net Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      General Construction Helper / Civil Labor
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold">1,200 – 1,400 BGN</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600">€610 – €715</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-700">₹55,800 – ₹65,100</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-800 bg-emerald-50/50">
                      ₹42,000 – ₹50,000 INR
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Shuttering Carpenter / Formwork Specialist
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold">1,600 – 2,000 BGN</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600">€815 – €1,020</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-700">₹74,400 – ₹93,000</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-800 bg-emerald-50/50">
                      ₹58,000 – ₹72,000 INR
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Rebar Steel Fixer / Structural Mason
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold">1,600 – 2,000 BGN</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600">€815 – €1,020</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-700">₹74,400 – ₹93,000</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-800 bg-emerald-50/50">
                      ₹58,000 – ₹72,000 INR
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Industrial 6G TIG / MIG Welder (Pipe &amp; Structural)
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold">2,000 – 2,600 BGN</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600">€1,020 – €1,330</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-700">₹93,000 – ₹1,20,900</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-800 bg-emerald-50/50">
                      ₹75,000 – ₹98,000 INR
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      CNC Machine Operator / Precision Turner
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold">1,900 – 2,500 BGN</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600">€970 – €1,280</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-700">₹88,350 – ₹1,16,250</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-800 bg-emerald-50/50">
                      ₹70,000 – ₹92,000 INR
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Industrial Electrician / Control Panel Wireman
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold">1,800 – 2,300 BGN</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600">€920 – €1,175</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-700">₹83,700 – ₹1,06,950</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-800 bg-emerald-50/50">
                      ₹66,000 – ₹85,000 INR
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Commercial Heavy Truck Driver (Category CE)
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold">2,200 – 3,000 BGN</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600">€1,125 – €1,530</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-700">₹1,02,300 – ₹1,39,500</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-800 bg-emerald-50/50">
                      ₹82,000 – ₹1,15,000 INR
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Forklift Driver / Reach Truck Operator
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold">1,500 – 1,900 BGN</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600">€765 – €970</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-700">₹69,750 – ₹88,350</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-800 bg-emerald-50/50">
                      ₹54,000 – ₹68,000 INR
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Civil Site Supervisor / Construction Foreman
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold">2,600 – 3,500 BGN</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600">€1,330 – €1,790</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-700">₹1,20,900 – ₹1,62,750</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-800 bg-emerald-50/50">
                      ₹95,000 – ₹1,32,000 INR
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Software / Cloud Engineer (EU Blue Card)
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold">4,000 – 6,500+ BGN</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600">€2,045 – €3,320+</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-700">₹1,86,000 – ₹3,02,250</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-800 bg-emerald-50/50">
                      ₹1,45,000 – ₹2,35,000 INR
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Living Cost Context Callout */}
            <div className="rounded-2xl bg-emerald-50/80 border border-emerald-200/90 p-5 text-xs sm:text-sm text-emerald-950 flex items-start gap-3">
              <FaHouseUser className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-emerald-900">Free Accommodation &amp; Utilities Clause:</strong>{" "}
                Unlike Western European cities where monthly rents consume 40% to 50% of your earnings, industrial and construction employers in Bulgaria provide <strong>100% free corporate housing</strong> (furnished dormitories or shared flats with heating, Wi-Fi, and laundry facilities) and daily site transport. Workers only spend approximately 250 to 350 BGN (~₹12,000 to ₹16,000 INR) per month on groceries and personal food, ensuring maximum monthly remittances.
              </div>
            </div>
          </section>

          {/* ── Section 5: The Official 6-Stage Roadmap to Deployment ── */}
          <section id="deployment-pipeline" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaClock className="w-3.5 h-3.5 text-emerald-600" />
              Section 5: Step-by-Step Deployment Pipeline
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The 6-Stage Statutory Process to a Bulgarian Work Visa
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              WorkWise Visa coordinates directly with accredited Bulgarian corporate employers, the Employment Agency (АЗ), and the Embassy of Bulgaria in New Delhi to deliver seamless, legally compliant processing:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {/* Step 1 */}
              <div className="relative rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center">
                    01
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Duration: Day 1 – 7
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Trade Bench Test &amp; Document Audit
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Candidate attends practical evaluation at a WorkWise Visa facility (Patna, Noida, Siwan, Gorakhpur). Original passport, vocational credentials, and police clearance certificate (PCC) are verified and sent for official Ministry of External Affairs (MEA) Apostille.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center">
                    02
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Duration: 2 – 3 Weeks
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Labor Market Clearance (AZ Opinion)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The Bulgarian employer registers the vacancy with the National Employment Agency (Агенция по заетостта - АЗ). AZ audits local availability and issues a positive statutory opinion (становище) authorizing third-country hiring.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center">
                    03
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Duration: 3 – 4 Weeks
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Migration Directorate Single Permit Decision
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The dossier is submitted to the Migration Directorate (Дирекция „Миграция“ - МВР). Following joint security vetting with the State Agency for National Security (DANS), the official Decision granting work and residence rights is signed.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center">
                    04
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Duration: 15 – 25 Days
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  National Type-D Visa Stamping (New Delhi)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The candidate submits their passport, original Permit Decision, apostilled PCC, medical certificate, and Schengen travel insurance at the Embassy of Bulgaria in New Delhi or authorized VFS centers. The multi-entry Type-D visa is stamped.
                </p>
              </div>

              {/* Step 5 */}
              <div className="relative rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center">
                    05
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Duration: 24 – 48 Hours
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Deployment &amp; Airport Reception
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct or 1-stop flight to Sofia International Airport (SOF) or Varna (VAR). Candidate is received by company HR representatives and transported directly to fully furnished residential accommodations.
                </p>
              </div>

              {/* Step 6 */}
              <div className="relative rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center">
                    06
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Within 14 Days
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Biometrics &amp; Plastic Residence Card
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Worker attends the local Regional Migration Department, submits digital fingerprints and photo, and receives the physical smart European Residence Card (Разрешение за пребиваване), integrating their Foreigner Personal Number (ЛНЧ).
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 6: Document Checklist & Apostille Requirements ── */}
          <section id="document-checklist" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaFileLines className="w-3.5 h-3.5 text-emerald-600" />
              Section 6: Compliance &amp; Verification Checklist
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Required Documents for Bulgarian Work Permit &amp; Visa D
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Both India and the Republic of Bulgaria are contracting states to the <strong>Hague Apostille Convention of 1961</strong>. This eliminates outdated consular embassy legalizations:
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <FaPassport className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Personal Legal Dossier</h3>
                    <p className="text-xs text-slate-500">Applicant Primary Credentials</p>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 pt-2">
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Original International Passport:</strong> Minimum 18 months remaining validity with at least 4 blank visa pages.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Passport Office Police Clearance Certificate (PCC):</strong> Issued by the Regional Passport Office (RPO) bearing an authentic MEA Apostille sticker (valid 6 months).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Medical Fitness Certificate:</strong> General physical fitness report, communicable disease screening, and digital chest X-ray certificate.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Biometric Photographs:</strong> 8 recent color passport photographs (3.5 cm x 4.5 cm) on a white background, matte finish.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <FaBriefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Professional &amp; Corporate Dossier</h3>
                    <p className="text-xs text-slate-500">Employer &amp; Trade Authentication</p>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 pt-2">
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Signed Bulgarian Employment Contract:</strong> Formal bilingual labor contract conforming to Article 24i of ZCHRB and ZTMTR.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Trade Experience &amp; ITI / Diploma Certificates:</strong> Relevant trade certificates, certified by MEA Apostille and translated into Bulgarian by a sworn translator.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Proof of Accommodation in Bulgaria:</strong> Notarized lease agreement or corporate certificate of company-provided housing registered with the municipality.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Schengen Travel Health Insurance:</strong> Minimum €30,000 coverage policy valid for at least 180 days covering hospital emergency care across all Schengen member states.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── Section 7: Statutory Fee Schedule & Article 7 Mandate ── */}
          <section id="fee-schedule" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaScaleUnbalanced className="w-3.5 h-3.5 text-emerald-600" />
              Section 7: Transparency &amp; Legal Protection
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Official Fee Structure: Who Pays Under Bulgarian Law
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Beware of fraudulent recruitment agencies charging exorbitant &ldquo;visa fees&rdquo;. The Labour Migration and Labour Mobility Act (ZTMTR) explicitly establishes the distribution of legal expenses:
            </p>

            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Document / State Tariff</th>
                    <th className="py-3.5 px-4 sm:px-6">Issuing Authority</th>
                    <th className="py-3.5 px-4 sm:px-6">Government Fee (BGN / EUR)</th>
                    <th className="py-3.5 px-4 sm:px-6">Mandatory Legal Payer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Employment Agency (АЗ) Work Authorization Fee
                    </td>
                    <td className="py-4 px-4 sm:px-6">National Employment Agency (АЗ)</td>
                    <td className="py-4 px-4 sm:px-6 font-semibold">400 BGN (~€205)</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-800 bg-emerald-50/50">
                      100% Bulgarian Employer
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Migration Directorate Single Permit Decision Fee
                    </td>
                    <td className="py-4 px-4 sm:px-6">Ministry of Interior (МВР)</td>
                    <td className="py-4 px-4 sm:px-6 font-semibold">110 BGN (~€56)</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-emerald-800 bg-emerald-50/50">
                      100% Bulgarian Employer
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      National Long-Stay Type-D Visa Application Fee
                    </td>
                    <td className="py-4 px-4 sm:px-6">Embassy of Bulgaria in New Delhi</td>
                    <td className="py-4 px-4 sm:px-6 font-semibold">€100 (in INR at embassy rate)</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600">Applicant / Candidate</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Passport Office Police Clearance (PCC) &amp; MEA Apostille
                    </td>
                    <td className="py-4 px-4 sm:px-6">RPO &amp; Ministry of External Affairs</td>
                    <td className="py-4 px-4 sm:px-6 font-semibold">₹500 (Passport Office) + Apostille</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600">Applicant / Candidate</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Biometric Plastic Residence Card (Разрешение)
                    </td>
                    <td className="py-4 px-4 sm:px-6">Regional Migration Office (Bulgaria)</td>
                    <td className="py-4 px-4 sm:px-6 font-semibold">45 BGN (~€23)</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600">Candidate / Employer</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl border border-amber-300 bg-amber-50/80 p-5 text-xs sm:text-sm text-amber-950 flex items-start gap-3">
              <FaTriangleExclamation className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-amber-900">Statutory Protection under Article 7 of ZTMTR:</strong>{" "}
                Bulgarian law strictly prohibits employers and recruitment intermediaries from charging foreign candidates any fees for issuing the work authorization, conducting labor tests, or submitting Migration Directorate files. Deducting immigration costs from employee salaries is a criminal violation subject to immediate cancellation of corporate operating licenses.
              </div>
            </div>
          </section>

          {/* ── Section 8: Free Corporate Accommodation & Living Playbook ── */}
          <section id="living-housing" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaBed className="w-3.5 h-3.5 text-emerald-600" />
              Section 8: Living Costs, Free Accommodation &amp; Indian Savings Playbook
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Why Bulgarian Contracts Deliver the Highest Net Remittance in Europe
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The biggest financial trap in Western Europe (such as the UK, Germany, or the Netherlands) is housing rent, which routinely absorbs €700 to €1,200 every month. In Bulgaria, industrial manufacturing and construction employers provide <strong>100% free corporate residential quarters</strong> and daily shuttle transportation under their statutory collective agreements.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <FaHouseUser className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  100% Free Corporate Accommodation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Employers provide furnished apartments or clean worker residences (2 to 3 persons per room) with high-speed Wi-Fi, central heating, washing machines, and hot water. <strong>All utility bills (electricity, water, heating) are covered by the company.</strong>
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                  <FaBus className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Free Daily Company Transport
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated corporate buses pick up workers directly from residential camps and drop them at factories in the <strong>Trakia Economic Zone (Plovdiv)</strong>, Sofia Ring Road industrial parks, or maritime shipyards in Varna, eliminating daily commuting expenses.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <FaUtensils className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Affordable Food &amp; Indian Cooking
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bulgaria has Europe&apos;s most affordable supermarket prices (Lidl, Kaufland, Billa). Workers cook together in shared kitchens. A monthly budget of only <strong>250 to 350 BGN (~₹11,500 to ₹16,000 INR)</strong> easily covers rice, lentils, vegetables, chicken, and milk.
                </p>
              </div>
            </div>

            {/* Grocery Cost Table */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-900 text-base">
                Realistic Monthly Grocery Basket in Bulgaria (2026 Standards)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500 font-medium">Basmati / White Rice (5kg)</div>
                  <div className="text-base font-bold text-slate-900 mt-1">10 – 12 BGN</div>
                  <div className="text-emerald-700 font-semibold">~₹460 – ₹550 INR</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500 font-medium">Fresh Chicken (1kg)</div>
                  <div className="text-base font-bold text-slate-900 mt-1">7 – 9 BGN</div>
                  <div className="text-emerald-700 font-semibold">~₹320 – ₹420 INR</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500 font-medium">Cooking Oil (1 Liter)</div>
                  <div className="text-base font-bold text-slate-900 mt-1">3.20 – 3.80 BGN</div>
                  <div className="text-emerald-700 font-semibold">~₹150 – ₹175 INR</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500 font-medium">Fresh Milk (1 Liter)</div>
                  <div className="text-base font-bold text-slate-900 mt-1">2.40 – 2.90 BGN</div>
                  <div className="text-emerald-700 font-semibold">~₹110 – ₹135 INR</div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 9: Labour Code & 10% Flat Tax Mathematics ── */}
          <section id="labour-law-tax" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaCalculator className="w-3.5 h-3.5 text-emerald-600" />
              Section 9: Labour Code, Overtime &amp; 10% Flat Tax Mathematics
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Understanding Your Take-Home Salary: The 10% Flat Tax Advantage
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Bulgaria operates under the <strong>Labour Code (Кодекс на труда - KT)</strong> and the <strong>Personal Income Tax Act (ZDDFL)</strong>. Unlike progressive tax brackets in other European nations that take 30% to 45% of your pay, Bulgaria enforces Europe&apos;s most worker-friendly flat 10% income tax.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <FaShieldHalved className="w-4 h-4 text-emerald-600" />
                  Bulgarian Labour Code Protections
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Standard Hours:</strong> 40 hours per week (8 hours per day, 5 days per week).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Statutory Overtime:</strong> Paid at +50% for standard overtime, +75% on weekend shifts, and +100% on official national holidays.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Paid Annual Leave:</strong> Minimum 20 working days of fully paid vacation per calendar year.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>State Healthcare (NZOK):</strong> 100% free access to state hospitals, clinics, and emergency treatments.</span>
                  </li>
                </ul>
              </div>

              {/* Sample Pay Slip Math */}
              <div className="rounded-3xl border border-slate-200 bg-slate-900 text-white p-6 sm:p-7 shadow-lg space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Sample Monthly Pay Slip</span>
                  <span className="text-xs text-slate-400">Skilled Tradesman</span>
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span>Gross Monthly Salary</span>
                    <span className="font-bold text-white">2,000.00 BGN</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800 text-rose-300">
                    <span>Social Security Deductions (~13.78%)</span>
                    <span>- 275.60 BGN</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span>Taxable Base</span>
                    <span className="font-bold text-white">1,724.40 BGN</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800 text-rose-300">
                    <span>Personal Income Tax (Flat 10%)</span>
                    <span>- 172.44 BGN</span>
                  </div>
                  <div className="flex justify-between py-2 font-bold text-sm text-emerald-300 border-t border-slate-700">
                    <span>Net Monthly Take-Home Pay</span>
                    <span>1,551.96 BGN (~€793 EUR)</span>
                  </div>
                  <div className="flex justify-between py-1 text-xs text-slate-400">
                    <span>Living Food Expenses (Cooked in Camp)</span>
                    <span className="text-slate-300">- 300.00 BGN</span>
                  </div>
                  <div className="flex justify-between py-2 font-black text-sm text-amber-300 bg-slate-800/80 rounded-xl px-3 mt-2">
                    <span>Net Monthly Remittance to India</span>
                    <span>~₹58,200 INR Clean</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 10: 5-Year Permanent Residency & EU Passport ── */}
          <section id="pr-citizenship" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaAward className="w-3.5 h-3.5 text-emerald-600" />
              Section 10: European Settlement, Permanent Residency &amp; Passport
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The Path to a Powerful European Passport: Permanent Residency (PR)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Bulgaria offers a structured, statutory settlement framework under the Foreigners in the Republic of Bulgaria Act (ZCHRB). For Indian workers seeking a permanent European future for themselves and their families:
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <span className="text-xs font-bold uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Step 1: Permanent Residency (5 Years)
                </span>
                <h3 className="font-bold text-slate-900 text-lg">
                  Permanent Residence (Постоянно пребиваване)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  After <strong>5 years of uninterrupted legal residence</strong> in Bulgaria, foreign workers can apply for permanent EU Long-Term Resident status under Article 25 of ZCHRB. This grants complete employment freedom across all sectors, access to full state pensions, and unrestricted rights to live and work across the European Union.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <span className="text-xs font-bold uppercase text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
                  Step 2: Bulgarian Citizenship (5+ Years)
                </span>
                <h3 className="font-bold text-slate-900 text-lg">
                  Naturalization &amp; EU Passport Rank #14
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Under the Bulgarian Citizenship Act, holders of permanent residency who reside in Bulgaria for 5 years post-PR, demonstrate conversational Bulgarian language skills, and maintain a clean record can apply for Bulgarian Citizenship by Naturalization, giving them visa-free access to 175+ countries.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 11: Detailed FAQs Section ──────────────── */}
          <section id="faqs" className="scroll-mt-28 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaCircleQuestion className="w-3.5 h-3.5 text-emerald-600" />
              Section 11: Frequently Asked Questions (FAQs) for Bulgaria Work Visas
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions Regarding Bulgaria Work Permits &amp; Schengen Visas
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Clear, legally verified answers to the most critical queries about working in Bulgaria:
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

          {/* ── Section 12: Related Master Guides ─────────────── */}
          <section id="related-guides" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <FaGlobe className="w-3.5 h-3.5 text-emerald-600" />
              Section 12: Western &amp; Central Europe Career Paths
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Explore Related Overseas Work Visa Master Guides
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              <Link
                href="/countries/germany"
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full inline-block">
                    Federal Republic of Germany
                  </span>
                  <h3 className="font-display font-bold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                    Germany Work Visa &amp; Opportunity Card 2026
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    Opportunity Card (Chancenkarte), EU Blue Card, €2,800+ trade wage scale, ZAB recognition, and fast-track European PR.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 mt-4">
                  Read Full Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/countries/luxembourg"
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="text-[10px] font-bold uppercase text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full inline-block">
                    Grand Duchy of Luxembourg
                  </span>
                  <h3 className="font-display font-bold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                    Luxembourg Work Visa Master Guide 2026
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    Salaried Worker permit, EU Blue Card, world-record €3,085+ qualified minimum wage, 100% free public transit &amp; ADEM shortage lists.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 mt-4">
                  Read Full Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/blogs/europe-work-visa-for-indian-workers-poland-croatia-romania-guide-2026"
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="text-[10px] font-bold uppercase text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full inline-block">
                    Central &amp; Eastern Europe
                  </span>
                  <h3 className="font-display font-bold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                    Poland, Croatia &amp; Romania Work Visa Guide
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    Vocational trades, factory assembly, weld testing, VFS National Type-D stamping, and legal EU deployment.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 mt-4">
                  Read Full Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/blogs/police-clearance-certificate-pcc-gulf-european-visas-psk-apostille-guide-2026"
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full inline-block">
                    Mandatory Consular Legalization
                  </span>
                  <h3 className="font-display font-bold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                    Police Clearance (PCC) &amp; MEA Apostille Guide
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    Regional Passport Office (RPO) PSK appointment booking, Hague Convention Apostille sticker &amp; sworn translations.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 mt-4">
                  Read Full Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/countries"
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="text-[10px] font-bold uppercase text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full inline-block">
                    Global Destinations
                  </span>
                  <h3 className="font-display font-bold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                    All Countries Directory (Europe, Gulf &amp; West)
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    Compare work visa options, processing timelines, and minimum wages across Germany, UAE, Saudi Arabia, Qatar, Canada &amp; UK.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 mt-4">
                  Explore Directory <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/jobs?country=Bulgaria"
                className="group rounded-2xl border border-emerald-300 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="text-[10px] font-bold uppercase text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full inline-block">
                    Active Hiring 2026
                  </span>
                  <h3 className="font-display font-bold text-emerald-950 text-base group-hover:text-emerald-700 transition-colors">
                    View Live Bulgaria Vacancies
                  </h3>
                  <p className="text-xs text-emerald-800/80 leading-relaxed line-clamp-3">
                    Immediate openings for welders, machinists, civil masons, carpenters, and commercial truck drivers with employer-funded housing.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 mt-4">
                  Browse Active Openings <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </section>

          {/* ── Section 13: Interactive Eligibility & Lead Consultation ── */}
          <section id="consultation-form" className="scroll-mt-28 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400">
                  <FaUserTie className="w-3.5 h-3.5 text-emerald-400" />
                  European Placement Desk
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
                  Start Your Bulgaria Work Visa Assessment Today
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Connect with certified European immigration counselors at WorkWise Visa. We evaluate your trade credentials, verify employer demand in Sofia, Plovdiv, and Varna, and guide you through Ministry of External Affairs (MEA) Apostille and consular visa stamping with zero hidden charges.
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <FaCheck className="w-4 h-4" />
                    </div>
                    <span>Government-vetted Bulgarian manufacturing and civil contractors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <FaCheck className="w-4 h-4" />
                    </div>
                    <span>End-to-end guidance: Trade testing, MEA Apostille, and New Delhi Embassy stamping</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <FaCheck className="w-4 h-4" />
                    </div>
                    <span>Free employer-provided housing, transport and flat 10% European taxation</span>
                  </div>
                </div>

                {/* Office Directory Highlights */}
                <div className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                  <div className="font-bold text-white uppercase tracking-wider text-[11px]">
                    Physical Branch Offices:
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <Link href="/locations/noida" className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500 transition-colors">
                      <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                        <FaLocationDot className="w-3.5 h-3.5" /> Noida Corporate HQ
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">Urbtech Trade Centre, Sector 132</div>
                    </Link>
                    <Link href="/locations/patna" className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500 transition-colors">
                      <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                        <FaLocationDot className="w-3.5 h-3.5" /> Patna Regional Branch
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">Varma Centre, Boring Rd Crossing</div>
                    </Link>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-400">
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

              {/* Consultation Box Card */}
              <div className="lg:col-span-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
                  <h3 className="text-xl font-bold text-white mb-2">Book Free Consultation</h3>
                  <p className="text-xs text-slate-300 mb-6">
                    Fill in your details below and an overseas European advisor will call you within 24 hours.
                  </p>

                  <form
                    action="/contact"
                    method="GET"
                    className="space-y-4 text-xs sm:text-sm text-slate-800"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Full Name (as per Passport)
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
                        <label className="block text-xs font-semibold text-slate-200 mb-1.5">
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
                        <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                          Trade / Profession
                        </label>
                        <input
                          type="text"
                          name="profession"
                          required
                          placeholder="e.g. 6G Welder, CNC Operator"
                          className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Target Country Destination
                      </label>
                      <input
                        type="text"
                        name="destination"
                        readOnly
                        value="Bulgaria (Schengen Area)"
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-emerald-400 font-bold focus:outline-none cursor-not-allowed"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3.5 text-sm font-bold text-slate-950 shadow-md hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                      >
                        <span>Submit Bulgaria Profile For Free Audit</span>
                        <FaArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-400 text-center pt-2">
                      Your information is strictly protected under our Data Privacy Policy. No spam guaranteed.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
