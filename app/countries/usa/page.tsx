import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  FaCheck,
  FaXmark,
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
  FaPlaneDeparture,
} from "react-icons/fa6";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.workwisevisa.com";

export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "USA Work Visa & Jobs Guide 2026: H-1B, L-1, H-2B, EB-3 Green Card & Prevailing Wage Rules | WorkWise Visa",
  description:
    "Definitive 2026 statutory master guide to United States work visas for Indian professionals, software engineers, industrial technicians, healthcare staff & executives. Learn USCIS Form I-129 petitions, DOL Labor Condition Applications (LCA), H-1B lottery mechanics, L-1 intra-company transfers, prevailing wages, and consular stamping in India.",
  keywords: [
    "USA work visa 2026",
    "USA work visa for Indian citizens",
    "H1B visa process for Indians 2026",
    "USCIS I-129 petition processing time",
    "L1 visa intra company transfer India to USA",
    "H2B temporary worker visa USA",
    "EB3 green card skilled worker process India",
    "US prevailing wage levels Department of Labor",
    "US visa appointment wait times India New Delhi Mumbai",
    "US consulate interview questions for work visa",
    "H4 EAD spouse work authorization eligibility 2026",
    "Cost of living in USA for Indian tech workers",
    "WorkWise Visa USA recruitment placement",
    "How to get US work visa from India with employer sponsorship",
    "O-1 extraordinary ability visa requirements",
  ],
  alternates: {
    canonical: `${BASE_URL}/countries/usa`,
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
    title: "USA Work Visa & Jobs Guide 2026: H-1B, L-1, H-2B, EB-3 Green Card & Prevailing Wage Rules | WorkWise Visa",
    description:
      "Comprehensive statutory manual for Indian professionals, tech specialists, certified engineers, and corporate transferees migrating to the United States under the Immigration and Nationality Act (INA) and Department of Labor regulations.",
    url: `${BASE_URL}/countries/usa`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "USA Work Visa 2026 - New York City Skyline and Global Career Mobility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "USA Work Visa & Employment Manual 2026 | WorkWise Visa",
    description:
      "Statutory step-by-step guidance on American H-1B specialty occupations, L-1 transfers, DOL prevailing wages, USCIS petitions, and Indian consular interview prep.",
    images: ["https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function USACountryPage() {
  const publishedDate = "2026-03-30T09:00:00.000Z";
  const modifiedDate = "2026-10-16T15:45:00.000Z";

  // Structured Data Schemas
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
        name: "United States",
        item: `${BASE_URL}/countries/usa`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "USA Work Visa & Employment Manual 2026: H-1B, L-1, H-2B, EB-3 Green Card & Prevailing Wage Rules",
    description:
      "The definitive statutory manual explaining how Indian professionals, software engineers, industrial technicians, and healthcare specialists secure legal American employment petitions, LCA certifications, consular visa stamping, and permanent residency.",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200&q=80",
    author: {
      "@type": "Organization",
      name: "WorkWise Visa Global Immigration & Trade Mobility Bureau",
      url: `${BASE_URL}`,
    },
    publisher: {
      "@type": "Organization",
      name: "WorkWise Visa",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/workwise_logo.png`,
      },
    },
    datePublished: publishedDate,
    dateModified: modifiedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/countries/usa`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an H-1B visa and how does the annual USCIS lottery process work for Indian candidates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The H-1B visa is a non-immigrant work classification under the Immigration and Nationality Act (INA § 101(a)(15)(H)) that allows US employers to temporarily employ foreign nationals in specialty occupations requiring a minimum of a bachelor's degree or higher. Sponsoring US employers register candidates during the initial electronic registration window in March. If selected in the computer-generated lottery against the statutory 65,000 regular cap or 20,000 US advanced degree cap, the employer submits a certified Labor Condition Application (LCA) to the Department of Labor and files Form I-129 with USCIS. Selected petitions approved by USCIS allow candidates to begin employment on October 1 of that fiscal year.",
        },
      },
      {
        "@type": "Question",
        name: "What is a Labor Condition Application (LCA) and prevailing wage requirement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Before filing an H-1B petition with USCIS, the employer must submit Form ETA-9035 (Labor Condition Application - LCA) to the US Department of Labor (DOL). The employer must attest that it will pay the H-1B worker at least the prevailing wage for that specific occupational classification in the geographic area of intended employment, or the actual wage paid to other workers with similar experience, whichever is higher. Prevailing wages are categorized into four distinct skill levels (Level 1 Entry, Level 2 Qualified, Level 3 Experienced, Level 4 Fully Competent).",
        },
      },
      {
        "@type": "Question",
        name: "What is the L-1 intra-company transferee visa (L-1A vs L-1B) and who is eligible?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The L-1 visa enables multinational corporations to transfer key employees from a foreign subsidiary, affiliate, or parent entity (e.g. an Indian corporate office) to its US operations. To qualify, the employee must have worked continuously for the foreign entity for at least 1 full year within the preceding 3 years. L-1A is reserved for managers and executives (valid for up to 7 years and eligible for fast-track EB-1C Green Cards without PERM labor certification). L-1B is designated for specialized knowledge personnel (valid for up to 5 years). L-1 visas are not subject to annual lottery caps.",
        },
      },
      {
        "@type": "Question",
        name: "Can my spouse work in the United States on an H-4 or L-2 visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For H-1B holders, spouses on H-4 visas are eligible to apply for an Employment Authorization Document (H-4 EAD) only if the primary H-1B worker has an approved Form I-140 immigrant petition or has received an H-1B extension beyond the 6-year limit under AC21. For L-1 visa holders, accompanying spouses holding L-2S status are granted automatic work authorization incident to their status upon entry, meaning they can legally work in the US immediately without waiting for a separate EAD card.",
        },
      },
      {
        "@type": "Question",
        name: "What is the H-2B visa and how can skilled trades and hospitality workers utilize it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The H-2B program allows US employers to bring foreign nationals to the United States to fill temporary non-agricultural jobs in seasonal, peak-load, intermittent, or one-time occurrence capacities (e.g. hospitality, resort culinary, landscape maintenance, food processing, industrial construction). Sponsoring employers must secure a Temporary Labor Certification (TLC) from the DOL demonstrating that there are insufficient US workers capable of performing the temporary work. H-2B permits are generally granted for up to 1 year, renewable up to a maximum statutory limit of 3 continuous years.",
        },
      },
      {
        "@type": "Question",
        name: "What is premium processing with USCIS and how fast is a petition adjudicated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "USCIS Premium Processing (Form I-907) provides expedited adjudication for designated employment-based petitions (including Form I-129 for H-1B, L-1, O-1, and Form I-140 for EB-1, EB-2, EB-3). Upon payment of the statutory government premium fee ($2,805 for Form I-129 / Form I-140), USCIS guarantees adjudicative action (approval, denial, notice of intent to deny, or Request for Evidence - RFE) within 15 calendar days (or 45 calendar days for certain EB-2 NIW petitions).",
        },
      },
      {
        "@type": "Question",
        name: "What are standard working hours and overtime laws in the United States?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the US Fair Labor Standards Act (FLSA), the statutory workweek is defined as 40 hours. For non-exempt hourly employees (including many trade technicians, operators, and maintenance specialists), any hours worked in excess of 40 hours in a single workweek must be compensated at an overtime rate of not less than 1.5 times the regular hourly rate of pay (time-and-a-half). Salaried professional employees classified as exempt are not subject to statutory overtime rules.",
        },
      },
      {
        "@type": "Question",
        name: "What is the PERM labor certification and EB-3 employment-based Green Card process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The EB-3 Green Card is a permanent residency immigrant visa pathway for skilled workers (jobs requiring minimum 2 years experience), professionals (jobs requiring a US bachelor's degree), and other workers (unskilled labor). The process entails three statutory stages: 1) Department of Labor PERM Labor Certification (ETA Form 9089) proving no willing, able, and qualified US workers are available; 2) USCIS Form I-140 Immigrant Petition; and 3) Form I-485 Adjustment of Status (in the US) or Consular Processing via NVC (abroad) once the candidate's Priority Date becomes current on the Department of State Visa Bulletin.",
        },
      },
      {
        "@type": "Question",
        name: "How does healthcare work for foreign workers in the United States?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Healthcare in the US is private and predominantly employer-sponsored. Under the Affordable Care Act (ACA), employers with 50 or more full-time equivalent employees must offer comprehensive health insurance coverage to their employees and dependents. Employers typically subsidize 70% to 90% of monthly health insurance premiums (covering medical, dental, and vision care), with the employee paying the remainder through pre-tax payroll deductions.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a US work visa take to process from India in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The timeline depends on the visa classification. An expedited L-1 or H-1B petition filed with USCIS Premium Processing takes 15 calendar days for petition approval, followed by 3 to 6 weeks for visa interview appointment scheduling and passport stamping at the US Embassy in New Delhi or Consulates in Mumbai, Chennai, Hyderabad, or Kolkata. Standard non-premium USCIS petition processing takes 2 to 5 months.",
        },
      },
      {
        "@type": "Question",
        name: "How much money can an Indian worker save monthly in the United States after taxes and living costs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A skilled technician or engineer earning $75,000 to $130,000 USD annually takes home approximately $4,500 to $7,800 USD net per month (~₹3.80L to ₹6.60L INR). In moderate cost-of-living states (Texas, North Carolina, Florida, Ohio, Georgia) with zero state income tax or low living expenses, single workers typically spend $2,000 to $2,800 USD monthly on rent, groceries, utilities, and car insurance, enabling net monthly savings of $2,500 to $5,000+ USD (approx. ₹2,10,000 to ₹4,25,000 INR per month).",
        },
      },
      {
        "@type": "Question",
        name: "How do I verify if a US job offer or visa sponsorship is authentic and avoid fraud?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Genuine US employers will provide an official USCIS Receipt Notice (Form I-797C) or Approval Notice (Form I-797A/B) featuring a verifiable 13-character receipt number (e.g. EAC, WAC, LIN, SRC, or IOE) that can be verified directly on the official USCIS Case Status Online portal (uscis.gov). Legitimate employers pay all mandatory statutory attorney and filing fees for H-1B petitions and never demand money transfers or security deposits from candidates. Sponsoring companies can also be audited through the Department of Labor LCA disclosure database and state corporate registry filings.",
        },
      },
      {
        "@type": "Question",
        name: "What is an RFE (Request for Evidence) from USCIS and how should it be addressed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Request for Evidence (Form I-797E RFE) is an official inquiry issued by a USCIS adjudicating officer when a filed petition lacks necessary documentation to establish statutory eligibility. In employment petitions (H-1B, L-1, EB-3), common RFE triggers include specialty occupation justification, beneficiary qualifications, employer-employee relationship, or availability of qualifying work. Petitioners are typically granted 60 to 87 calendar days to submit a comprehensive response. WorkWise Visa collaborates with immigration counsel to assemble expert opinion letters, syllabus course mappings, client project contracts, and detailed organizational charts, securing approval rates exceeding 95% on RFE submissions.",
        },
      },
      {
        "@type": "Question",
        name: "Can an H-1B worker change employers or transfer their visa within the United States?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Under the American Competitiveness in the Twenty-First Century Act (AC21 § 105), an H-1B employee currently in valid status can begin working for a new sponsoring employer as soon as USCIS receives the new employer's Form I-129 petition (termed H-1B portability), without waiting for final approval. The new employer must file an LCA with the Department of Labor and lodge the Form I-129 petition before the worker departs their current role. H-1B transfers are not subject to the annual lottery cap.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if an H-1B worker is laid off? What is the 60-day grace period?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under 8 CFR § 214.1(l)(2), nonimmigrant workers in E-1, E-2, E-3, H-1B, H-1B1, L-1, O-1, or TN classifications who experience cessation of employment are granted a discretionary grace period of up to 60 consecutive calendar days (or until the expiration date of their authorized Form I-94, whichever is shorter). During this 60-day window, the worker may secure a new sponsoring employer to file an H-1B transfer petition, apply for a change of status (e.g. to B-1/B-2 visitor or F-1 student), or prepare to depart the United States without incurring unlawful presence.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a US Visa Foil Stamp in the passport and the Form I-94 Arrival Record?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A US visa foil stamp in your passport is solely an entry document issued by the Department of State that permits you to travel to a US port of entry and request admission. The electronic Form I-94 (Arrival/Departure Record), generated by Customs and Border Protection (CBP) upon entry, governs the lawful duration and terms of your authorized stay inside the United States. Even if your passport visa foil expires while you are in the United States, your stay remains completely legal as long as your Form I-94 remains unexpired and you maintain the terms of your authorized status.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Apply for a US Work Visa (H-1B, L-1, H-2B) from India in 2026",
    description:
      "A complete 6-stage statutory operational roadmap for Indian professionals, skilled tradespeople, technicians, and engineers to migrate legally to the United States under the Immigration and Nationality Act (INA) and USCIS regulations.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Secure Qualifying US Employment & Prevailing Wage Determination",
        text: "Obtain a formal job offer from an active US corporate entity offering wages at or above the Department of Labor prevailing wage determination for the occupational classification in that Metropolitan Statistical Area (MSA).",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Department of Labor LCA Certification (Form ETA-9035)",
        text: "The US employer files the Labor Condition Application (LCA) with the US Department of Labor through the FLAG system, certifying wage compliance, workplace conditions, and lack of strikes or lockouts.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "USCIS Petition Filing & Form I-797 Approval Notice",
        text: "The employer submits Form I-129 (Petition for a Nonimmigrant Worker) to USCIS along with educational evaluations, experience documentation, and statutory fees (optionally utilizing 15-day Premium Processing), receiving the official Form I-797 Approval Notice.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Form DS-160 Filing & Visa Application Center (VAC) Biometrics",
        text: "Complete the online Nonimmigrant Visa Application (Form DS-160), pay the MRV visa application fee, and schedule appointments in India for biometric enrollment (fingerprints and photo) at a Visa Application Center (VAC).",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Consular Visa Interview at US Embassy / Consulate in India",
        text: "Attend the in-person consular visa interview at the US Embassy in New Delhi or US Consulates General in Mumbai, Chennai, Hyderabad, or Kolkata, presenting your I-797 approval, LCA, employer contract, and degree transcripts for passport stamping.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "US Port of Entry Arrival, Form I-94 & Social Security Number",
        text: "Arrive at a US international airport, present your stamped visa to the US Customs and Border Protection (CBP) officer to generate your electronic Form I-94 arrival record, and apply for your 9-digit Social Security Number (SSN) at the local SSA office.",
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
        
        {/* ── Hero Section (Strict Emerald/Teal/Slate UI Continuity) ── */}
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
              <span className="text-emerald-300 font-bold">United States of America (USA)</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                {/* Government & Authority Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Official 2026 USCIS &amp; Department of Labor (DOL) Immigration Gateway
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                  USA Work Visa &amp; Jobs Guide{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                    2026
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  The definitive, legally verified roadmap for Indian professionals, software engineers, certified technicians, industrial welders, and executives migrating to the United States. Explore <strong className="font-bold text-white">H-1B specialty occupation mechanics</strong>, <strong className="font-bold text-emerald-300">L-1 intra-company transfers</strong>, <strong className="font-bold text-white">H-2B seasonal trade visas</strong>, Department of Labor prevailing wage determinations, and EB-3 employment-based Green Card pathways.
                </p>

                {/* Key Benefits Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaMoneyBillWave className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">$75k–$160k+</div>
                      <div className="text-[10px] text-slate-400">Annual Skilled Pay</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaAward className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">H-1B Specialty</div>
                      <div className="text-[10px] text-slate-400">Specialized Occupations</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaGear className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">L-1 Transfer</div>
                      <div className="text-[10px] text-slate-400">No Lottery Required</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaHospital className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Employer Health</div>
                      <div className="text-[10px] text-slate-400">Comprehensive Medical</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaClock className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">15-Day Premium</div>
                      <div className="text-[10px] text-slate-400">USCIS Fast-Track</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaPassport className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Spouse EAD</div>
                      <div className="text-[10px] text-slate-400">H-4 &amp; L-2 Work Rights</div>
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
                    <span>Browse Jobs</span>
                  </Link>

                  <a
                    href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20USA%20Work%20Visas,%20H-1B,%20L-1%20and%20Green%20Card%20Sponsorship!"
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
                        src="https://flagcdn.com/w160/us.png"
                        alt="United States Flag"
                        className="h-10 w-14 object-cover rounded-xl shadow-md border border-white/25 shrink-0"
                      />
                      <div>
                        <h2 className="text-xl font-display font-extrabold text-white">United States of America</h2>
                        <p className="text-xs text-emerald-300 font-medium">California • Texas • New York • Washington</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-xs font-bold text-emerald-300">
                      <FaShieldHalved className="w-3 h-3 text-emerald-400" />
                      World #1 Economy
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Primary Work Visas:</span>
                      <span className="font-bold text-white">H-1B, L-1A/B, H-2B, O-1</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Immigration Authorities:</span>
                      <span className="font-bold text-emerald-300">USCIS, Department of Labor &amp; DOS</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Processing Time:</span>
                      <span className="font-bold text-white">15 Days (Premium) / 2–4 Months (Reg)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Federal Minimum Wage:</span>
                      <span className="font-bold text-amber-300">$7.25 / hr (States: $15–$17.50/hr)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Average Monthly Skilled Pay:</span>
                      <span className="font-bold text-emerald-300">$6,250 – $13,500 (~₹5.30L – ₹11.50L INR)</span>
                    </div>

                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Permanent Settlement:</span>
                      <span className="font-bold text-emerald-300">EB-1, EB-2, EB-3 Green Card</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-950/50 border border-emerald-500/30 p-3.5 text-center text-xs text-slate-300">
                    <div className="flex items-center justify-center gap-2 text-emerald-300 font-semibold mb-0.5">
                      <FaShieldHalved className="w-3.5 h-3.5 text-emerald-400" />
                      <span>USCIS &amp; US Dept of Labor Compliant</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Approved Form I-129 / I-797 Stamping • Direct Consular Appointments • Zero Hidden Agency Charges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Table of Contents & Quick Navigation (Floating Card) ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/50">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              <FaMagnifyingGlass className="w-3 h-3 text-emerald-600" />
              USA Comprehensive Guide Directory:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#overview" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                1. 2026 Labor Landscape &amp; INA Framework
              </a>
              <a href="#visa-pathways" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                2. Visa Classifications: H-1B, L-1, H-2B &amp; O-1
              </a>
              <a href="#prevailing-wages" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                3. DOL Prevailing Wages &amp; LCA Math
              </a>
              <a href="#salary-matrix" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                4. Comprehensive US Salary Scale Matrix
              </a>
              <a href="#step-by-step" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                5. 6-Stage USCIS &amp; Consular Pipeline
              </a>
              <a href="#consular-interview" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                6. Consular Interview &amp; VAC Biometrics Playbook
              </a>
              <a href="#spousal-rights" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                7. H-4 EAD &amp; L-2S Spousal Work Rights
              </a>
              <a href="#health-insurance" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                8. Healthcare, ACA &amp; Employee Benefits
              </a>
              <a href="#living-costs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                9. Cost of Living &amp; Net INR Savings Math
              </a>
              <a href="#green-card" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                10. Permanent Residency &amp; Green Card Transition
              </a>
              <a href="#fraud-prevention" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                11. Anti-Fraud Advisory &amp; Scam Warnings
              </a>
              <a href="#faqs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                12. Exhaustive Search FAQs (12+)
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
              Section 1: Country Overview &amp; The American Employment Landscape
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The United States Labor Market in 2026: Navigating Global Innovation &amp; Skilled Talent Demands
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                The United States of America represents the world&apos;s preeminent economic engine, generating over $28 trillion in gross domestic product and leading the globe in artificial intelligence, cloud infrastructure, aerospace manufacturing, biomedical technology, financial engineering, and specialized technical construction. To maintain this global competitive advantage, US corporate entities rely heavily on authorized international skilled talent to bridge structural domestic workforce deficits.
              </p>
              <p>
                Legal employment immigration in the United States is governed by the <strong>Immigration and Nationality Act (INA)</strong> and co-administered by three principal federal executive agencies: the <strong>Department of Homeland Security (USCIS)</strong>, which adjudicates employer petitions; the <strong>Department of Labor (DOL)</strong>, which enforces wage protections through the Foreign Labor Application Gateway (FLAG); and the <strong>Department of State (DOS)</strong>, which conducts consular biometric interviews and stamps visas across its missions in India (New Delhi, Mumbai, Chennai, Hyderabad, and Kolkata).
              </p>
              <p>
                For Indian professionals and skilled technicians, navigating US employment immigration demands strict procedural rigor. Every lawful work visa begins with an official, bona fide US employer sponsorship, a certified <strong>Labor Condition Application (LCA)</strong> or <strong>Temporary Labor Certification (TLC)</strong>, adherence to Department of Labor prevailing wage determinations, and formal petition adjudication via Form I-129.
              </p>
            </div>

            {/* Core Statutory Pillars Box */}
            <div className="rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-6 space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FaShieldHalved className="w-4 h-4 text-emerald-700" />
                Key Pillars of the 2026 US Employment Immigration Framework
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <FaCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Prevailing Wage Protection:</strong> Employers must pay at least the DOL prevailing wage, safeguarding both foreign and US worker pay scales.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>15-Day Premium Processing:</strong> USCIS guarantees formal petition adjudication within 15 calendar days under Form I-907.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Dual-Intent Status:</strong> H-1B and L-1 classifications legally recognize dual intent, allowing workers to seek a Green Card without jeopardizing non-immigrant status.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Employer-Borne Legal Fees:</strong> Under federal law, employers are strictly prohibited from requiring H-1B workers to pay statutory filing fees.</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 2: Visa Pathways Comparison ── */}
          <section id="visa-pathways" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaPassport className="w-3.5 h-3.5 text-emerald-600" />
              Section 2: Legal Visa Classifications &amp; Pathways
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              United States Work Visa Categories: Selecting Your Exact Immigration Route
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The United States does not offer open, unsponsored job seeker visas for third-country nationals. Every valid work visa is anchored to an approved employer petition. Below is how the primary employment classifications compare:
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Card 1: H-1B Specialty Occupations */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                      Specialty Occupation Tier
                    </span>
                    <FaAward className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">H-1B Specialty Worker Visa</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    For positions requiring specialized knowledge and at least a US bachelor&apos;s degree or equivalent (IT, cloud software, mechanical engineering, biotechnology, finance). Sponsoring employers register in the annual March lottery and submit a certified DOL LCA before filing Form I-129.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Degree Requirement:</span>
                    <strong className="text-slate-900">Bachelor&apos;s or Equivalent</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Permit Duration:</span>
                    <strong className="text-emerald-700">3 + 3 = 6 Yrs (Extendable via AC21)</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Spouse Work Rights:</span>
                    <strong className="text-emerald-700">H-4 EAD (with approved I-140)</strong>
                  </div>
                </div>
              </div>

              {/* Card 2: L-1 Intra-Company Transferee */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                      Uncapped Corporate Transfer
                    </span>
                    <FaBuilding className="w-4 h-4 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">L-1A / L-1B Intra-Company Visa</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Allows multinational corporations to transfer managers and executives (L-1A) or specialized knowledge staff (L-1B) from their Indian office to a US parent, affiliate, or subsidiary. Requires 1 continuous year of foreign employment. <strong>No annual lottery quota</strong> applies.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Prior Employment:</span>
                    <strong className="text-slate-900">1 Year within Past 3 Yrs</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Permit Duration:</span>
                    <strong className="text-teal-700">7 Yrs (L-1A) / 5 Yrs (L-1B)</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Spouse Work Rights:</span>
                    <strong className="text-teal-700">Immediate L-2S Open Work</strong>
                  </div>
                </div>
              </div>

              {/* Card 3: H-2B & EB-3 Skilled Trades */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                      Trades &amp; Seasonal Skilled
                    </span>
                    <FaWrench className="w-4 h-4 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">H-2B &amp; EB-3 Skilled Trades</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    H-2B covers non-agricultural seasonal and peak-load workers in hospitality, resort maintenance, and industrial construction backed by a DOL Temporary Labor Certification. EB-3 Skilled offers permanent residency for trade technicians (welders, machinists, electricians) via PERM.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Target Roles:</span>
                    <strong className="text-slate-900">Trades, Hospitality, Technicians</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Labor Clearance:</span>
                    <strong className="text-amber-800">DOL TLC / PERM Required</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Settlement Pathway:</span>
                    <strong className="text-emerald-700">EB-3 Permanent Residency</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 3: Prevailing Wages & LCA Math ── */}
          <section id="prevailing-wages" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaScaleUnbalanced className="w-3.5 h-3.5 text-emerald-600" />
              Section 3: Department of Labor Prevailing Wage Standards
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Department of Labor (DOL) Prevailing Wage Determinations &amp; LCA Math
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                A core pillar of US immigration law is the prevention of wage depression. Sponsoring US employers are legally barred from underpaying foreign guest workers. Through the <strong>National Prevailing Wage Center (NPWC)</strong> and the <strong>Foreign Labor Application Gateway (FLAG)</strong>, the Department of Labor establishes mandatory prevailing wage floors based on Occupational Employment and Wage Statistics (OEWS).
              </p>
              <p>
                Every certified Labor Condition Application (Form ETA-9035) assigns the position to one of four standardized skill levels based on the job requirements:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-4">
              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded">Level 1</span>
                <h4 className="font-bold text-slate-900 text-sm mt-2 mb-1">Entry Level (17th Percentile)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Beginning-level employees who perform routine tasks requiring close supervision and limited independent judgment.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Level 2</span>
                <h4 className="font-bold text-slate-900 text-sm mt-2 mb-1">Qualified (34th Percentile)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Employees with a solid practical understanding of the occupation who perform moderately complex assignments.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">Level 3</span>
                <h4 className="font-bold text-slate-900 text-sm mt-2 mb-1">Experienced (50th Percentile)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Experienced staff possessing a comprehensive understanding of specialized duties who work independently and may guide juniors.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Level 4</span>
                <h4 className="font-bold text-slate-900 text-sm mt-2 mb-1">Fully Competent (67th Percentile)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Advanced senior experts, architects, and technical leaders who plan, conduct, and direct major technical endeavors.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 4: Wage Scale & Salary Matrix ── */}
          <section id="salary-matrix" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaMoneyBillWave className="w-3.5 h-3.5 text-emerald-600" />
              Section 4: Wages, Overtime &amp; Compensation
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              United States Salary Scale 2026: Prevailing Wages, Overtime Math &amp; Salary Matrix
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Salaries in the United States rank among the highest globally across software engineering, cloud architecture, specialized healthcare, and precision trades. Overtime for non-exempt hourly roles is strictly compensated at 1.5 times the base rate under the Fair Labor Standards Act:
            </p>

            {/* Overtime & Wage Standard Box */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <FaScaleUnbalanced className="w-4 h-4 text-emerald-600" />
                Statutory Wage Standards &amp; Overtime Rules
              </h3>
              <div className="grid gap-3 sm:grid-cols-3 text-center">
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                  <div className="text-xs text-slate-500 font-medium">Federal Minimum Wage</div>
                  <div className="text-xl font-black text-slate-900 mt-1">$7.25 / hr</div>
                  <div className="text-xs text-slate-400 mt-0.5">States: $15.00 – $17.50 / hr</div>
                </div>
                <div className="rounded-xl bg-emerald-50 p-4 border border-emerald-200">
                  <div className="text-xs text-emerald-800 font-medium">Skilled Specialty Average</div>
                  <div className="text-xl font-black text-emerald-950 mt-1">$85,000 – $145,000 / yr</div>
                  <div className="text-xs text-emerald-700 mt-0.5">~₹72L – ₹1.23 Cr INR / yr</div>
                </div>
                <div className="rounded-xl bg-teal-50 p-4 border border-teal-200">
                  <div className="text-xs text-teal-800 font-medium">FLSA Statutory Overtime</div>
                  <div className="text-xl font-black text-teal-950 mt-1">1.5x Base Rate</div>
                  <div className="text-xs text-teal-700 mt-0.5">After 40 hours per workweek</div>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                *Conversion benchmarked at indicative ~₹85.00 INR per $1 USD. Net take-home after statutory federal income taxes, FICA (Social Security &amp; Medicare), and state income taxes ranges between 70% and 78% depending on the state of residence.
              </p>
            </div>

            {/* Complete Salary Matrix Table (12 In-Demand Roles) */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-display text-[11px] sm:text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4">Profession / Trade Role</th>
                    <th className="py-3.5 px-3">Visa Classification</th>
                    <th className="py-3.5 px-3">Annual Gross (USD)</th>
                    <th className="py-3.5 px-3">Monthly Gross (USD)</th>
                    <th className="py-3.5 px-3">Monthly INR Equiv.</th>
                    <th className="py-3.5 px-3">Standard Perks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Cloud &amp; DevOps Architect</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">H-1B / L-1B</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$130,000 – $185,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$10,800 – $15,400</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹9.18L – ₹13.09L</td>
                    <td className="py-3 px-3 text-slate-500">401(k) match + equity stock units</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Full-Stack Software Engineer</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">H-1B / L-1B</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$115,000 – $165,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$9,500 – $13,750</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹8.07L – ₹11.68L</td>
                    <td className="py-3 px-3 text-slate-500">Hybrid work + performance bonuses</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Engineering Manager / Executive</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-teal-50 text-teal-800 font-bold text-[10px]">L-1A Transferee</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$150,000 – $220,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$12,500 – $18,300</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹10.62L – ₹15.55L</td>
                    <td className="py-3 px-3 text-slate-500">EB-1C direct Green Card pathway</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Industrial Structural 6G Welder</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-bold text-[10px]">H-2B / EB-3</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$60,000 – $85,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$5,000 – $7,100</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹4.25L – ₹6.03L</td>
                    <td className="py-3 px-3 text-slate-500">1.5x Overtime + per diem travel pay</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">CNC Tooling Machinist &amp; Programmer</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">EB-3 Skilled</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$65,000 – $90,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$5,400 – $7,500</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹4.59L – ₹6.37L</td>
                    <td className="py-3 px-3 text-slate-500">Tool allowance + shift premiums</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Industrial Maintenance Electrician</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">EB-3 Skilled</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$68,000 – $95,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$5,650 – $7,900</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹4.80L – ₹6.71L</td>
                    <td className="py-3 px-3 text-slate-500">Overtime + medical &amp; dental cover</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Registered Nurse (RN) / ICU Specialist</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">EB-3 Schedule A</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$80,000 – $120,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$6,650 – $10,000</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹5.65L – ₹8.50L</td>
                    <td className="py-3 px-3 text-slate-500">PERM-exempt direct Green Card processing</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Aerospace Systems Engineer</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">H-1B / O-1</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$120,000 – $175,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$10,000 – $14,500</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹8.50L – ₹12.32L</td>
                    <td className="py-3 px-3 text-slate-500">Defense contractor relocation assistance</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Heavy Equipment Mechanic</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">EB-3 Skilled</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$65,000 – $92,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$5,400 – $7,650</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹4.59L – ₹6.50L</td>
                    <td className="py-3 px-3 text-slate-500">Service truck provided + overtime</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Hospitality &amp; Culinary Chef</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-bold text-[10px]">H-2B Seasonal</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$42,000 – $60,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$3,500 – $5,000</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹2.97L – ₹4.25L</td>
                    <td className="py-3 px-3 text-slate-500">Subsidized housing + meal plan</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Data Scientist &amp; AI Modeler</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">H-1B / O-1</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$135,000 – $195,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$11,250 – $16,250</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹9.56L – ₹13.81L</td>
                    <td className="py-3 px-3 text-slate-500">Sign-on bonus + equity awards</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Commercial HVAC Technician</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">EB-3 Skilled</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$62,000 – $88,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$5,150 – $7,300</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹4.37L – ₹6.20L</td>
                    <td className="py-3 px-3 text-slate-500">EPA certification incentive + 401(k)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Deep-Dive: Federal, FICA & State Tax Withholding Architecture */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <FaCoins className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    Federal, FICA &amp; State Tax Withholding Architecture: Calculating Your Exact Net Take-Home Pay
                  </h3>
                  <p className="text-xs text-slate-500">
                    Understanding mandatory IRS deductions, Social Security limits, state tax variations, and pre-tax retirement shelters
                  </p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none text-slate-600 text-xs sm:text-sm leading-relaxed space-y-3">
                <p>
                  Every foreign national working legally in the United States on an H-1B, L-1, H-2B, or EB-3 visa is subject to statutory US payroll tax withholding under the Internal Revenue Code (IRC). Unlike Indian tax deductions (TDS), US payroll taxes are calculated and remitted bi-weekly or semi-monthly across three distinct layers:
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 text-xs">
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    1. Federal Income Tax (IRS)
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Progressive marginal tax brackets ranging from <strong>10% to 37%</strong>. Most skilled foreign workers earning between $80,000 and $150,000 USD fall into the <strong>22% or 24% effective marginal bracket</strong>. Standard deduction in 2026 is $14,600 for single filers and $29,200 for married couples filing jointly.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-teal-500" />
                    2. FICA Mandatory Payroll Taxes
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Comprises <strong>6.2% Social Security tax</strong> (capped at the statutory maximum wage base of $168,600, meaning zero Social Security tax is withheld on earnings exceeding this ceiling) plus <strong>1.45% Medicare tax</strong> (uncapped). An additional 0.9% Medicare surtax applies on wages above $200,000 for single filers.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    3. State &amp; Local Income Taxes (SIT)
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Varies dramatically by employer worksite. <strong>9 states levy 0.0% state income tax</strong> (Texas, Florida, Washington, Nevada, Wyoming, Tennessee, Alaska, South Dakota, New Hampshire), whereas high-tax states such as California (up to 13.3%), New York (up to 10.9%), and New Jersey (up to 10.75%) impose substantial state withholding.
                  </p>
                </div>
              </div>

              {/* Real Paycheck Comparison Table */}
              <div className="rounded-xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-100 px-4 py-2.5 font-bold text-slate-900 text-xs flex justify-between items-center">
                  <span>Real-World Paycheck Breakdown: $110,000 USD Gross Salary (~₹93.5 Lakhs INR)</span>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Single Filer Model</span>
                </div>
                <div className="divide-y divide-slate-100 text-xs">
                  <div className="grid grid-cols-3 px-4 py-2 bg-slate-50 font-bold text-slate-600 text-[11px] uppercase">
                    <div>Deduction / Component</div>
                    <div>Dallas, Texas (0.0% State Tax)</div>
                    <div>San Jose, California (9.3% State Tax)</div>
                  </div>
                  <div className="grid grid-cols-3 px-4 py-2.5 text-slate-700">
                    <div className="font-semibold text-slate-900">Gross Annual Salary</div>
                    <div className="font-bold text-slate-900">$110,000 ($9,166 / mo)</div>
                    <div className="font-bold text-slate-900">$110,000 ($9,166 / mo)</div>
                  </div>
                  <div className="grid grid-cols-3 px-4 py-2.5 text-slate-700">
                    <div>Federal Income Tax (Effective ~14.8%)</div>
                    <div className="text-red-600 font-medium">-$16,280 / yr (-$1,356 / mo)</div>
                    <div className="text-red-600 font-medium">-$16,280 / yr (-$1,356 / mo)</div>
                  </div>
                  <div className="grid grid-cols-3 px-4 py-2.5 text-slate-700">
                    <div>FICA Taxes (Social Security 6.2% + Medicare 1.45%)</div>
                    <div className="text-red-600 font-medium">-$8,415 / yr (-$701 / mo)</div>
                    <div className="text-red-600 font-medium">-$8,415 / yr (-$701 / mo)</div>
                  </div>
                  <div className="grid grid-cols-3 px-4 py-2.5 text-slate-700">
                    <div>State Income Tax Withholding</div>
                    <div className="text-emerald-700 font-bold">$0.00 (Zero State Tax)</div>
                    <div className="text-red-600 font-medium">-$7,150 / yr (-$595 / mo)</div>
                  </div>
                  <div className="grid grid-cols-3 px-4 py-2.5 text-slate-700">
                    <div>Pre-Tax 401(k) Retirement Deferral (6% + Employer Match)</div>
                    <div className="text-blue-600 font-medium">-$6,600 / yr (Invested Pre-Tax)</div>
                    <div className="text-blue-600 font-medium">-$6,600 / yr (Invested Pre-Tax)</div>
                  </div>
                  <div className="grid grid-cols-3 px-4 py-3 bg-emerald-50/70 font-bold text-slate-900">
                    <div className="text-emerald-950 font-display">Net Annual Take-Home (Cash in Hand)</div>
                    <div className="text-emerald-800 text-sm">$78,705 / yr (~$6,558 / mo • ₹5.57L INR/mo)</div>
                    <div className="text-emerald-800 text-sm">$71,555 / yr (~$5,962 / mo • ₹5.06L INR/mo)</div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-4 text-xs text-slate-700 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <FaCircleCheck className="w-4 h-4 text-emerald-600" />
                  Strategic Takeaway for Indian Relocating Professionals:
                </div>
                <p>
                  Relocating to a zero-state-income-tax corridor (such as Austin, Dallas, Houston, Tampa, Orlando, or Seattle) puts an additional <strong>$6,000 to $12,000+ USD in net cash into your bank account every single year</strong> compared to equivalent roles in California or New York, accelerating your family savings and overseas debt repayment timeline.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 5: The 6-Stage End-to-End Pipeline ── */}
          <section id="step-by-step" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaFileContract className="w-3.5 h-3.5 text-emerald-600" />
              Section 5: Operational Deployment Pipeline
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The Complete 6-Stage US Work Visa Pipeline (India to Landing)
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every US work visa placement involves coordinated filings across the Department of Labor, USCIS, and the Department of State. Below is the statutory workflow managed by WorkWise Visa:
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Step 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    01
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Sponsorship
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Job Offer &amp; Prevailing Wage</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Execute a formal offer with an active US enterprise with an active Federal Employer Identification Number (FEIN), offering compensation meeting or surpassing DOL prevailing wage standards.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    02
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    DOL Certification
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Labor Condition Application (LCA)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The employer submits Form ETA-9035 via the Department of Labor FLAG portal, certifying prevailing wage adherence and working conditions (adjudicated in approximately 7 business days).
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    03
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    USCIS Adjudication
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Form I-129 &amp; Form I-797 Notice</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The employer files the I-129 nonimmigrant worker petition with USCIS. Utilizing 15-day Premium Processing (Form I-907), USCIS issues the official Form I-797 Notice of Action approval.
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    04
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    DS-160 &amp; VAC
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Form DS-160 &amp; VAC Biometrics</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lodge the DS-160 consular application online, pay the MRV visa application fee, and enroll ten-print fingerprints and digital photograph at a Visa Application Center (VAC) in India.
                </p>
              </div>

              {/* Step 5 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    05
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Consular Interview
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">US Embassy Interview &amp; Stamping</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Attend the visa interview at the US Embassy in New Delhi or Consulates in Mumbai, Chennai, Hyderabad, or Kolkata with original degrees and I-797 approval, receiving the stamped foil visa.
                </p>
              </div>

              {/* Step 6 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    06
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Landing
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">CBP I-94 &amp; Social Security (SSN)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Land in the United States, receive your electronic Form I-94 arrival record from Customs and Border Protection (CBP), register for your Social Security Card at the SSA, and commence work.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 6: Consular Interview & VAC Biometrics Playbook ── */}
          <section id="consular-interview" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaBuilding className="w-3.5 h-3.5 text-emerald-600" />
              Section 6: US Consular Missions in India &amp; Interview Preparation
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              US Embassy &amp; Consulates in India: Dossier Checklist &amp; Interview Playbook
            </h2>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-900 text-sm">
                Mandatory Dossier Checklist for US Consular Visa Stamping:
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Valid Passport:</strong> Minimum 6 months validity beyond intended stay with multiple blank visa pages.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Form I-797 Approval Notice:</strong> Original or clear copy of USCIS Form I-797A or I-797B.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Form DS-160 Confirmation Page:</strong> With clear barcode printout and application ID number.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Certified DOL LCA (Form ETA-9035):</strong> Showing approved job title, prevailing wage, and location.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Signed US Employment Agreement:</strong> Detailing job duties, salary, benefits, and reporting hierarchy.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Educational Credentials &amp; Transcripts:</strong> Original degree certificates, mark sheets, and US equivalency report.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Work Experience Letters &amp; Tax Forms:</strong> Prior experience letters, relieving letters, and Form 16 / ITR filings.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>MRV Visa Fee Receipt:</strong> Official fee payment confirmation printout.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-600">
                <span className="text-slate-400">US Diplomatic Missions in India:</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">US Embassy New Delhi</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">US Consulate Mumbai</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">US Consulate Chennai</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">US Consulate Hyderabad</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">US Consulate Kolkata</span>
              </div>
            </div>

            {/* Consular Interview Mock Scenarios & 221(g) Administrative Processing Playbook */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 border border-teal-200">
                  <FaBuildingColumns className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    Consular Visa Officer Interview Simulation &amp; Section 221(g) Resolution Protocol
                  </h3>
                  <p className="text-xs text-slate-500">
                    5 high-probability consular questioning scenarios with compliant response strategies and administrative slip resolution
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 text-xs">
                {/* Scenario 1 */}
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Scenario 01 • Specialty Occupation
                  </span>
                  <div className="font-bold text-slate-900 text-sm">
                    &ldquo;What will be your exact day-to-day duties in the United States?&rdquo;
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Recommended Strategy:</strong> Avoid generic buzzwords (&quot;I will write code&quot; or &quot;do maintenance&quot;). State your exact technical stack, architecture role, or industrial equipment specifications: <em>&ldquo;I am appointed as a Senior Cloud Solutions Architect to design fault-tolerant Kubernetes microservices and CI/CD pipelines for our financial client&apos;s transaction engine.&rdquo;</em>
                  </p>
                </div>

                {/* Scenario 2 */}
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    Scenario 02 • Worksite &amp; Right to Control
                  </span>
                  <div className="font-bold text-slate-900 text-sm">
                    &ldquo;Will you work at your employer&apos;s office or at a third-party client site? Who supervises you?&rdquo;
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Recommended Strategy:</strong> Clearly establish the employer-employee relationship under USCIS policy: <em>&ldquo;I report directly to my petitioner&apos;s Engineering Director located at our Dallas headquarters. My performance reviews, salary, and daily task assignments are exclusively controlled by my petitioning employer.&rdquo;</em>
                  </p>
                </div>

                {/* Scenario 3 */}
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    Scenario 03 • Wage Adherence
                  </span>
                  <div className="font-bold text-slate-900 text-sm">
                    &ldquo;What is your annual salary, and does it match your certified LCA?&rdquo;
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Recommended Strategy:</strong> State your exact wage matching Form ETA-9035 Box G.1 without hesitation: <em>&ldquo;My offered compensation is $125,000 USD per year, which exceeds the certified Department of Labor Level 2 prevailing wage of $112,400 for the Austin-Round Rock metropolitan statistical area.&rdquo;</em>
                  </p>
                </div>

                {/* Scenario 4 */}
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Scenario 04 • Specialized Knowledge (L-1B)
                  </span>
                  <div className="font-bold text-slate-900 text-sm">
                    &ldquo;What is unique about your knowledge that cannot be found among US workers?&rdquo;
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Recommended Strategy:</strong> Focus on proprietary internal methodologies: <em>&ldquo;I have spent 3 years developing our proprietary algorithmic core at our Bengaluru R&amp;D center. My specialized understanding of our custom compiler cannot be transferred to an outside engineer without minimum 18 months of internal training.&rdquo;</em>
                  </p>
                </div>
              </div>

              {/* Section 221(g) Administrative Processing Breakdown */}
              <div className="rounded-xl bg-gradient-to-r from-amber-50/80 via-white to-slate-50 border border-amber-200 p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <FaTriangleExclamation className="w-4 h-4 text-amber-600 shrink-0" />
                  <h4 className="font-bold text-slate-900 text-sm">
                    Section 221(g) Administrative Processing: Color Slips Decoded &amp; Action Plan
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Receiving a 221(g) refusal does not mean your visa is denied. Under INA § 221(g), the consular officer temporarily suspends adjudication pending additional documentation or inter-agency clearance:
                </p>
                <div className="grid gap-2 sm:grid-cols-3 text-xs text-slate-700 pt-1">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                    <strong className="text-amber-800 block mb-1">Yellow / Blue Slip:</strong>
                    Documentary request. Requires submitting client letters, tax returns, or degree credentials via VFS Dropbox.
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                    <strong className="text-blue-800 block mb-1">Pink Slip (TAL Clearance):</strong>
                    Technology Alert List security review for sensitive STEM fields (AI, biotech, quantum, semiconductors). Cleared in 3–6 weeks.
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                    <strong className="text-emerald-800 block mb-1">White Slip (Approval Notice):</strong>
                    Final procedural clearance; instructs applicant to submit passport for visa foil printing and courier dispatch.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 7: Spousal Work Rights (H-4 EAD & L-2S) ── */}
          <section id="spousal-rights" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaGraduationCap className="w-3.5 h-3.5 text-emerald-600" />
              Section 7: Family Accompaniment &amp; Spousal Employment
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Spousal Open Employment: H-4 EAD &amp; L-2S Unrestricted Work Authorization
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                The United States provides substantial employment rights for accompanying spouses depending on the principal worker&apos;s visa classification:
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  H-4 EAD Program
                </span>
                <h3 className="font-bold text-slate-900 text-lg mt-3 mb-2">H-4 Employment Authorization</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Under 8 CFR § 214.2(h)(9)(iv), spouses holding H-4 nonimmigrant status are eligible to apply for an open Employment Authorization Document (EAD via Form I-765) as soon as the principal H-1B worker has an approved Form I-140 immigrant petition or has extended their H-1B beyond 6 years under AC21. H-4 EAD holders can work for any employer or operate a business.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                  L-2S Automatic Rights
                </span>
                <h3 className="font-bold text-slate-900 text-lg mt-3 mb-2">L-2S Spouses: Work Incident to Status</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Spouses of L-1A and L-1B transferees are designated with <strong>L-2S status</strong> on their electronic Form I-94 upon arrival. Under USCIS policy guidance, L-2S spouses are authorized to work in the United States &quot;incident to status&quot; immediately without needing to apply for or await an individual EAD card, eliminating waiting delays.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 8: Healthcare & Benefits ── */}
          <section id="health-insurance" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaHospital className="w-3.5 h-3.5 text-emerald-600" />
              Section 8: Healthcare &amp; Corporate Employee Benefits
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The US Healthcare Framework: Employer Group Insurance &amp; Retirement (401k)
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Healthcare in the United States is private and world-class, provided through employer-sponsored group health plans. Under the <strong>Affordable Care Act (ACA)</strong>, employers sponsoring H-1B, L-1, and EB-3 workers must provide compliant health insurance covering preventive care, specialist visits, emergency hospitalization, and prescription drugs.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong>Employer Premium Contributions:</strong> US employers typically pay <strong>70% to 90% of the total monthly healthcare premium</strong>, with the employee paying the modest balance via pre-tax payroll deductions.
                </li>
                <li>
                  <strong>HSA / FSA Tax Savings:</strong> Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA) allow workers to set aside pre-tax dollars for medical, dental, and optical co-pays, effectively discounting out-of-pocket health expenses.
                </li>
                <li>
                  <strong>401(k) Retirement Plans:</strong> Employers frequently match 50% to 100% of employee 401(k) retirement contributions up to 4%–6% of base salary, building substantial compound wealth.
                </li>
              </ul>
            </div>
          </section>

          {/* ── Section 9: Living Costs & Savings Math ── */}
          <section id="living-costs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaHouseUser className="w-3.5 h-3.5 text-emerald-600" />
              Section 9: Regional Living Costs &amp; Net INR Savings Math
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Cost of Living in the United States: Metro Hubs vs Zero-Tax States
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Living expenses vary markedly across American states. While San Francisco, New York City, and Seattle feature elevated rents and progressive state taxes, fast-growing industrial and tech corridors in Texas, North Carolina, Florida, and Georgia offer zero state income tax and affordable housing:
            </p>

            {/* Comparative Table: Metro vs Low-Tax Region */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-display text-[11px] sm:text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Expense Category</th>
                    <th className="py-3 px-3">California / New York</th>
                    <th className="py-3 px-3">Texas / North Carolina / Georgia</th>
                    <th className="py-3 px-3">Practical Advice / Tax Insights</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">1-Bedroom Apartment Rent</td>
                    <td className="py-3 px-3 text-amber-700 font-semibold">$2,400 – $3,400 / mo</td>
                    <td className="py-3 px-3 text-emerald-700 font-semibold">$1,300 – $1,850 / mo</td>
                    <td className="py-3 px-3 text-slate-500">Luxury amenities, gym, pool included in suburban complexes</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">State Income Tax Rate</td>
                    <td className="py-3 px-3 font-semibold text-amber-800">6.0% – 13.3%</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">0.0% (Texas / Florida)</td>
                    <td className="py-3 px-3 text-slate-500">Zero state tax saves $6,000–$14,000 USD annually</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">Groceries &amp; Food (Monthly)</td>
                    <td className="py-3 px-3 font-semibold">$450 – $650 / mo</td>
                    <td className="py-3 px-3 font-semibold">$350 – $500 / mo</td>
                    <td className="py-3 px-3 text-slate-500">Costco, Trader Joe&apos;s, Patel Brothers Indian grocers</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">Utilities (Electric, Gas, Water)</td>
                    <td className="py-3 px-3 font-semibold">$180 – $260 / mo</td>
                    <td className="py-3 px-3 font-semibold">$150 – $220 / mo</td>
                    <td className="py-3 px-3 text-slate-500">Air conditioning in summer months</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">Car Payment, Fuel &amp; Insurance</td>
                    <td className="py-3 px-3 font-semibold">$500 – $750 / mo</td>
                    <td className="py-3 px-3 font-semibold">$450 – $650 / mo</td>
                    <td className="py-3 px-3 text-slate-500">Essential for commuting outside NYC</td>
                  </tr>
                  <tr className="bg-emerald-50/60 font-bold">
                    <td className="py-3 px-4 text-emerald-950">Net Monthly Savings Potential</td>
                    <td className="py-3 px-3 text-emerald-800">$2,500 – $4,500 USD (₹2.12L–₹3.82L)</td>
                    <td className="py-3 px-3 text-emerald-800">$4,000 – $7,500 USD (₹3.40L–₹6.37L)</td>
                    <td className="py-3 px-3 text-emerald-800">Significantly higher in Texas/North Carolina</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 10: Green Card & Settlement ── */}
          <section id="green-card" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaGraduationCap className="w-3.5 h-3.5 text-emerald-600" />
              Section 10: Permanent Settlement &amp; Green Card Transition
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Transitioning to Permanent Residency: EB-1, EB-2 NIW &amp; EB-3 Green Card Pathways
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                The ultimate objective for many Indian workers in the United States is achieving permanent residency (the Green Card). Sponsoring employers can initiate permanent residency filings through employment-based preference categories under INA § 203(b):
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  EB-1 Priority Workers
                </span>
                <h3 className="font-bold text-slate-900 text-base mt-3 mb-2">EB-1 Multinational Executives</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  L-1A managers and executives can transition directly to EB-1C permanent residency <strong>without requiring a PERM labor certification</strong>, significantly reducing processing backlogs.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                  EB-2 Advanced Degree
                </span>
                <h3 className="font-bold text-slate-900 text-base mt-3 mb-2">EB-2 &amp; National Interest Waiver</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Designated for professionals with master&apos;s degrees or bachelor&apos;s plus 5 years progressive experience. Exceptional researchers and founders can self-petition via the National Interest Waiver (NIW).
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                  EB-3 Skilled &amp; Trades
                </span>
                <h3 className="font-bold text-slate-900 text-base mt-3 mb-2">EB-3 Skilled Worker &amp; Trades</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Supported by a DOL PERM labor certification, the EB-3 route provides a reliable pathway for trade technicians, registered nurses (Schedule A exempt), and bachelor&apos;s degree holders.
                </p>
              </div>
            </div>

            {/* Deep-Dive: DOL PERM Labor Certification Recruitment Audit Protocol */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <FaCertificate className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    The Department of Labor PERM Labor Certification Statutory Audit Protocol (ETA Form 9089)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Step-by-step regulatory roadmap under 20 CFR Part 656 governing employment-based Green Card labor market testing
                  </p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none text-slate-600 text-xs sm:text-sm leading-relaxed space-y-3">
                <p>
                  For Indian candidates applying under the <strong>EB-2 Advanced Degree</strong> or <strong>EB-3 Skilled Worker</strong> preference classifications, the sponsoring employer must obtain an approved <strong>Permanent Labor Certification (PERM)</strong> from the US Department of Labor. The statutory intent is to legally demonstrate that there are no able, willing, qualified, and available US workers in the area of intended employment, and that employing the foreign national will not adversely affect the wages and working conditions of US workers.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-4 text-xs">
                {/* Step 1 */}
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Stage 01 • NPWC Filing
                  </span>
                  <div className="font-bold text-slate-900 text-sm">Prevailing Wage Determination</div>
                  <p className="text-slate-600 leading-relaxed">
                    The employer files Form ETA-9141 with the National Prevailing Wage Center (NPWC) to establish the minimum statutory wage floor for the specific job description, minimum requirements, and geographical county.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    Stage 02 • Mandatory Testing
                  </span>
                  <div className="font-bold text-slate-900 text-sm">Active Recruitment Campaign</div>
                  <p className="text-slate-600 leading-relaxed">
                    Employer must place a 30-day job order with the State Workforce Agency (SWA), run two Sunday print advertisements in a newspaper of general circulation, post an internal Notice of Filing (NOF) for 10 business days, and conduct 3 additional recruitment methods for professional roles.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    Stage 03 • 30-Day Quiet Period
                  </span>
                  <div className="font-bold text-slate-900 text-sm">Cooling-Off &amp; Resume Audit</div>
                  <p className="text-slate-600 leading-relaxed">
                    Under 20 CFR § 656.17(e), the employer must observe a mandatory 30-day quiet period following the last advertisement to review and evaluate all US worker applications against lawful, job-related criteria before lodging ETA Form 9089.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Stage 04 • FLAG Submission
                  </span>
                  <div className="font-bold text-slate-900 text-sm">Form ETA-9089 &amp; Audit File</div>
                  <p className="text-slate-600 leading-relaxed">
                    Lodge the electronic application on the DOL FLAG portal. The employer compiles the comprehensive PERM Audit File—containing tear sheets, applicant evaluation logs, and SWA confirmations—retained for 5 statutory years.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-slate-900 text-white p-5 space-y-2 text-xs">
                <div className="font-bold text-emerald-400 flex items-center gap-2">
                  <FaShieldHalved className="w-4 h-4 text-emerald-400" />
                  WorkWise Visa Priority Date Preservation &amp; AC21 Portability Protections:
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Once your Form I-140 is approved based on a certified PERM, your <strong>Priority Date (PD)</strong> is permanently locked under INA § 203(e). Even if you transfer employers or transition across industries, you retain your original priority date under the American Competitiveness in the Twenty-First Century Act (AC21), safeguarding your decade-long Green Card queue and granting indefinite H-1B 3-year extensions beyond the 6-year statutory limit.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 11: Anti-Fraud Advisory ── */}
          <section id="fraud-prevention" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-800">
              <FaBan className="w-3.5 h-3.5 text-red-600" />
              Section 11: Fraud Prevention &amp; Scam Advisory
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              United States Work Visa Scam Warnings: Recognizing Fraudulent Job Offers &amp; Scams
            </h2>

            <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <FaTriangleExclamation className="w-6 h-6 text-red-600 shrink-0" />
                <h3 className="font-bold text-red-950 text-base sm:text-lg">
                  Critical Warnings Issued by USCIS and the US Embassy in New Delhi:
                </h3>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <FaXmark className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Paying for H-1B Sponsoring Fees:</strong> Under federal regulations (20 CFR § 655.731), US employers are strictly prohibited from passing statutory H-1B petition filing fees or attorney costs onto the employee. Any agent demanding $5,000–$10,000 for &quot;H-1B lottery entry&quot; is operating a fraudulent scheme.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaXmark className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Tourist (B-1/B-2) to Work Visa Conversions:</strong> Traveling on a tourist visa with the preconceived intent to seek employment or engage in unauthorized work is a federal violation under INA § 214(b) resulting in immediate expedited removal and a 10-year bar.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaXmark className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Bench Consulting &amp; Fake Client Letters:</strong> USCIS rigorously verifies bona fide end-client worksite agreements. Filing speculative H-1B petitions without genuine project work leads to petition revocation and permanent fraud findings under INA § 212(a)(6)(C)(i).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaXmark className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Unverifiable I-797 Notices:</strong> Genuine USCIS Form I-797 approvals carry official receipt numbers that can be independently audited on the official USCIS Case Status portal (<code>uscis.gov</code>).
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* ── Section 12: Search-Intent FAQ Accordion ── */}
          <section id="faqs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaBriefcase className="w-3.5 h-3.5 text-emerald-600" />
              Section 12: Comprehensive Frequently Asked Questions (FAQs)
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Answering Every Critical Search Intent Query for Indian Job Seekers
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Direct, authoritative answers addressing the most frequently searched queries by Indian candidates regarding United States employment:
            </p>

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
                    <span>{faq.name}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-9">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 13: Bottom Strategic CTA Banner ── */}
          <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white p-8 sm:p-12 shadow-xl border border-emerald-900/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300">
                <FaAward className="w-3.5 h-3.5 text-emerald-400" />
                WorkWise Visa Global Deployment Desk
              </span>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white leading-tight">
                Ready to Secure Authorized US Employment Sponsorship?
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Speak directly with our senior American immigration specialists. We evaluate your resume, match you with verified US corporate sponsors holding active DOL prevailing wage determinations, prepare your I-129 petition dossier, and guide your consular interview preparation in India with zero scam risk.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20want%20to%20apply%20for%20a%20USA%20work%20visa%20and%20job%20placement!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 transition-all cursor-pointer"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 81301 61603)</span>
                </a>

                <a
                  href="mailto:workwisevisa@gmail.com?subject=USA%20Work%20Visa%20Application%20Inquiry"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all backdrop-blur-md"
                >
                  <FaEnvelope className="w-4 h-4 text-emerald-300" />
                  <span>Email Resume for USA Review</span>
                </a>
              </div>
            </div>
          </section>

        </div>

        <FloatingWhatsApp />
      </main>

      <Footer />
    </>
  );
}
