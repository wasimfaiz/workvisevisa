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
  title: "Canada Work Visa & Jobs Guide 2026: LMIA Work Permits, Red Seal Trades, GTS & Provincial Nominee Pathways | WorkWise Visa",
  description:
    "Definitive 2026 statutory master guide to Canada work visas for Indian skilled workers, long-haul truck drivers, welders, heavy mechanics, electricians, nurses & IT software engineers. Learn ESDC LMIA approvals, Global Talent Stream (GTS), Red Seal trade licenses, Provincial Nominee Programs (AAIP, OINP, SINP), prevailing wage rules, and Express Entry PR pathways.",
  keywords: [
    "Canada work visa 2026",
    "Canada work visa for Indian citizens",
    "Canada LMIA work permit process in India",
    "Canada Red Seal trade certification for Indians",
    "Global Talent Stream Canada 2-week processing",
    "Canada long haul truck driver job visa sponsorship",
    "Alberta AAIP trade work permit Canada",
    "Saskatchewan SINP hard to fill skills pilot",
    "Ontario OINP skilled trades stream",
    "Canada minimum wage 2026 prevailing wage rate",
    "Canada Express Entry category based trade draws",
    "VFS Canada visa appointment India New Delhi Chandigarh",
    "Spousal open work permit Canada 2026 eligibility rules",
    "Canada permanent residency pathway CEC FST",
    "WorkWise Visa Canada recruitment placement",
    "Cost of living Canada Toronto vs Calgary Edmonton",
  ],
  alternates: {
    canonical: `${BASE_URL}/countries/canada`,
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
    title: "Canada Work Visa & Jobs Guide 2026: LMIA Work Permits, Red Seal Trades, GTS & Provincial Nominee Pathways | WorkWise Visa",
    description:
      "Comprehensive statutory manual for Indian professionals, certified tradespeople, transportation specialists, healthcare workers, and technology engineers migrating to Canada under the Immigration and Refugee Protection Act (IRPA) and ESDC regulations.",
    url: `${BASE_URL}/countries/canada`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Canada Work Visa 2026 - Canadian Skyline and Skilled Employment Opportunities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canada Work Visa & Employment Manual 2026 | WorkWise Visa",
    description:
      "Statutory step-by-step guidance on Canadian LMIA work permits, Global Talent Stream, Red Seal trades, provincial PNP allocations, prevailing wages, and Indian recruitment deployments.",
    images: ["https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function CanadaCountryPage() {
  const publishedDate = "2026-03-30T09:00:00.000Z";
  const modifiedDate = "2026-10-16T15:40:00.000Z";

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
        name: "Canada",
        item: `${BASE_URL}/countries/canada`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Canada Work Visa & Employment Manual 2026: LMIA Work Permits, Red Seal Trades, GTS & Provincial Nominee Pathways",
    description:
      "The definitive statutory manual explaining how Indian skilled tradespeople, truck drivers, industrial welders, nurses, and IT software engineers secure legal Canadian LMIA authorizations, employer-specific work permits, provincial nominations, and permanent residency.",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80",
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
      "@id": `${BASE_URL}/countries/canada`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an LMIA (Labour Market Impact Assessment) and who is responsible for obtaining it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An LMIA is an official labor market clearance issued by Employment and Social Development Canada (ESDC) confirming that hiring a foreign national will not negatively affect the Canadian labor market. The Canadian sponsoring employer is legally responsible for applying for the LMIA, paying the mandatory $1,000 CAD government processing fee, and advertising the job for at least 4 consecutive weeks across Job Bank and two supplementary national platforms. Under Canadian law, it is strictly illegal for any employer or recruitment agency to charge or deduct the LMIA fee from the foreign worker.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between High-Wage and Low-Wage LMIA streams in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The classification depends on whether the hourly wage offered is at/above or below the provincial/territorial median hourly wage. Under the High-Wage Stream (e.g. wages at or above $28.85/hr in Ontario or $30.00/hr in Alberta), work permits are typically issued for up to 2 to 3 years with no employer caps, and employers must submit a transition plan. Under the Low-Wage Stream, recent 2024–2026 ESDC reforms cap the proportion of temporary foreign workers at 10% to 20% of an employer's workforce, limit work permit duration to 1 year, and restrict LMIA processing in census metropolitan areas (CMAs) with unemployment rates of 6% or higher.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Global Talent Stream (GTS) and how fast are visas processed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Global Talent Stream (GTS) is an expedited stream under Canada's Temporary Foreign Worker Program for highly skilled tech workers, software engineers, data scientists, and digital media specialists (under Category B Global Talent Occupations List) or innovative firms referred by designated partners (Category A). GTS offers expedited 10-business-day LMIA processing by ESDC, followed by expedited 2-week work permit processing by IRCC under the Global Skills Strategy.",
        },
      },
      {
        "@type": "Question",
        name: "Can Indian trade workers (welders, carpenters, electricians) work in Canada without Red Seal certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In non-compulsory trades (such as structural welding, industrial mechanics/millwrights in certain provinces, or heavy equipment operators), candidates can obtain an LMIA-backed work permit with verified Indian trade experience, employer reference letters, and technical trade testing. However, for compulsory certified trades (such as construction electricians, plumbers, refrigeration mechanics, or automotive service technicians), workers must either hold provincial trade qualification, obtain an assessment of trade qualifications from the provincial apprenticeship board (e.g. Skilled Trades Ontario or Alberta Apprenticeship and Industry Training), or work under journeyperson supervision while preparing to write the Red Seal interprovincial exam.",
        },
      },
      {
        "@type": "Question",
        name: "How can Indian commercial drivers become Long-Haul Truck Drivers in Canada (NOC 73300)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Commercial long-haul transport trucking (NOC 73300) is one of Canada's most in-demand occupations. Indian drivers with heavy commercial vehicle experience must obtain a provincial Class 1 (or AZ in Ontario) commercial driving license. This requires completing mandatory Entry-Level Training (MELT - 103.5 to 121.5 hours of classroom and on-road training) upon arrival in Canada and passing provincial knowledge and road driving tests. Many carriers sponsor candidates through Provincial Nominee Programs (such as Alberta AAIP, Saskatchewan SINP, or Manitoba MPNP) that offer fast pathways to permanent residency.",
        },
      },
      {
        "@type": "Question",
        name: "What is the 2026 minimum wage and prevailing wage rule across Canadian provinces?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Federal Minimum Wage in Canada is $17.30 CAD per hour (adjusted annually for inflation). Provincial minimum wages range from $15.00/hr in Alberta to $17.20/hr in Ontario and $17.40/hr in British Columbia. However, under ESDC LMIA regulations, foreign workers must be paid the 'prevailing wage'—which is the median hourly wage for that specific National Occupational Classification (NOC) code in that specific economic region—whichever is higher. For example, Red Seal welders and millwrights typically earn between $32.00 and $46.00 CAD per hour.",
        },
      },
      {
        "@type": "Question",
        name: "Can my spouse get an Open Work Permit (SOWP) while I work in Canada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under updated 2024–2026 IRCC regulations, Spousal Open Work Permits (SOWP) are granted to spouses of foreign workers employed in TEER 0, 1, 2, or 3 occupations under the National Occupational Classification (managerial, professional, technical, and skilled trades) with a valid work permit of at least 6 months duration. Spouses of low-wage or TEER 4 and 5 workers may face restrictions unless qualifying under specific provincial economic pilot arrangements.",
        },
      },
      {
        "@type": "Question",
        name: "How do Canadian work permit holders transition to Permanent Residency (PR)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Temporary foreign workers possess a massive competitive advantage for permanent settlement. After completing 1 year of full-time Canadian skilled work experience (1,560 hours), workers qualify for the Canadian Experience Class (CEC) under Express Entry. Trade workers also qualify under the Federal Skilled Trades (FST) program and category-based Express Entry draws for skilled trades, healthcare, and STEM. Additionally, provincial nominee programs (PNP) award 600 bonus Comprehensive Ranking System (CRS) points, virtually guaranteeing an Invitation to Apply (ITA) for PR.",
        },
      },
      {
        "@type": "Question",
        name: "How does healthcare work for temporary foreign workers in Canada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Temporary foreign workers holding a valid work permit of at least 6 months (along with proof of full-time employment) are eligible for 100% free provincial public health insurance (e.g. OHIP in Ontario, MSP in British Columbia, AHCIP in Alberta). This covers physician visits, diagnostic tests, emergency hospital care, and standard medical procedures without out-of-pocket costs. Sponsoring employers must also provide private travel/emergency health insurance to cover the worker during any initial provincial waiting period.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a Canada work visa take to process from India in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The complete timeline generally spans 10 to 18 weeks. Stage 1: ESDC LMIA application review takes 4 to 8 weeks (or 10 business days for Global Talent Stream). Stage 2: Biometrics appointment at VFS Global in India (New Delhi, Chandigarh, Ahmedabad, Mumbai, etc.) and IRCC visa office processing takes 6 to 10 weeks. Stage 3: Medical clearance via an approved IRCC Panel Physician takes 1 to 2 weeks. Expedited provincial nomination streams may have varied regional processing intervals.",
        },
      },
      {
        "@type": "Question",
        name: "How much money can an Indian worker save monthly in Canada after taxes and living costs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A skilled technician, welder, or heavy truck driver earning $30 to $40 CAD per hour gross earns approximately $4,800 to $6,500 CAD per month (equivalent to ~₹2.95 Lakhs to ₹4.00 Lakhs INR). In affordable secondary cities and trade corridors (such as Edmonton, Calgary, Regina, Saskatoon, or London, Ontario), living costs for a single worker range between $1,800 and $2,400 CAD monthly (rent, food, utilities, transit). This enables net monthly savings of $2,500 to $3,800 CAD (approx. ₹1,55,000 to ₹2,35,000 INR per month).",
        },
      },
      {
        "@type": "Question",
        name: "How do I verify if a Canadian job offer or LMIA is genuine and avoid scams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Genuine LMIAs contain an official 7-digit system identification number issued by Service Canada / ESDC that can be verified directly. Authentic Canadian job offer letters cite the employer's Canada Revenue Agency (CRA) Business Number (BN), verified physical operating premises, exact NOC code, and prevailing wage matching the Job Bank wage table. Under Canadian law, employers cannot sell LMIAs. Immigration consultants must be actively licensed with the College of Immigration and Citizenship Consultants (CICC) or be members of a Canadian provincial law society.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Apply for a Canada LMIA Work Permit from India in 2026",
    description:
      "A complete 6-stage statutory operational roadmap for Indian professionals, skilled tradespeople, truck drivers, technicians, and engineers to migrate legally to Canada under the Temporary Foreign Worker Program (TFWP) and IRCC regulations.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Secure a Genuine Canadian Job Offer with Prevailing Wages",
        text: "Obtain an official employment offer from a registered Canadian corporate entity offering wages at or above the provincial prevailing median hourly rate under the National Occupational Classification (NOC) TEER system.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Employer Obtains ESDC Positive LMIA Approval",
        text: "The Canadian employer advertises the role across Job Bank and two national platforms for 4 weeks (unless exempt under Global Talent Stream or designated provincial programs) and secures a positive or neutral Labour Market Impact Assessment (LMIA) from Service Canada.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Complete Upfront Immigration Medical Examination (IME)",
        text: "Undergo mandatory medical screening (chest X-ray, blood tests, general health check) through an IRCC-approved Panel Physician in India (available across New Delhi, Mumbai, Chandigarh, Ahmedabad, Hyderabad, etc.).",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Submit IRCC Work Permit Application & VFS India Biometrics",
        text: "Lodge the digital work permit application via the IRCC secure portal, pay the $155 CAD work permit fee and $85 CAD biometrics fee, and attend biometric enrollment (digital fingerprints and photograph) at a VFS Global Canada Visa Application Centre.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Receive Port of Entry (POE) Letter of Introduction & Passport Visa Stamping",
        text: "Upon IRCC approval, receive the official Port of Entry (POE) Letter of Introduction and have your physical passport stamped with the Canadian counterfoil visa at the Canadian High Commission in New Delhi.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Arrive in Canada, Receive Work Permit & Apply for SIN Number",
        text: "Land at a Canadian international airport (Toronto, Vancouver, Montreal, Calgary), present your POE letter and LMIA copy to the Canada Border Services Agency (CBSA) officer to print your paper Work Permit, and register for your 9-digit Social Insurance Number (SIN) at Service Canada.",
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
              <span className="text-emerald-300 font-bold">Canada (Dominion of Canada)</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                {/* Government & Authority Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Official 2026 IRCC &amp; ESDC Temporary Foreign Worker Program Gateway
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                  Canada Work Visa &amp; Jobs Guide{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                    2026
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  The definitive, legally verified roadmap for Indian professionals, skilled tradespeople, commercial long-haul truck drivers, healthcare specialists, and software engineers migrating to Canada. Explore the <strong className="font-bold text-white">ESDC LMIA work permit framework</strong>, <strong className="font-bold text-emerald-300">Global Talent Stream (2-week expedited processing)</strong>, <strong className="font-bold text-white">Red Seal trade certification equivalencies</strong>, Provincial Nominee allocations (AAIP, OINP, SINP, BC PNP), and direct pathways to Canadian Permanent Residency.
                </p>

                {/* Key Benefits Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaMoneyBillWave className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">$28–$45+/hr</div>
                      <div className="text-[10px] text-slate-400">Prevailing Trade Wage</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaCertificate className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">ESDC LMIA</div>
                      <div className="text-[10px] text-slate-400">Employer-Backed Permit</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaTruckFast className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Class 1 Trucking</div>
                      <div className="text-[10px] text-slate-400">NOC 73300 High Demand</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaHospital className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Free Medicare</div>
                      <div className="text-[10px] text-slate-400">OHIP / MSP / AHCIP</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaAward className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Express Entry PR</div>
                      <div className="text-[10px] text-slate-400">Category-Based Trade Draws</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaPassport className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Spouse Open Permit</div>
                      <div className="text-[10px] text-slate-400">TEER 0/1/2/3 Occupations</div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons - Clean 2-CTA Layout */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
                  <Link
                    href="/jobs?country=Canada"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] active:scale-[0.98] transition-all text-center w-full sm:w-auto"
                  >
                    <FaBriefcase className="w-4 h-4 shrink-0" />
                    <span>Explore Jobs</span>
                  </Link>

                  <a
                    href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20Canada%20Work%20Visas,%20LMIA%20Sponsorship%20and%20PNP%20Trades!"
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
                        src="https://flagcdn.com/w160/ca.png"
                        alt="Canada Flag"
                        className="h-10 w-14 object-cover rounded-xl shadow-md border border-white/25 shrink-0"
                      />
                      <div>
                        <h2 className="text-xl font-display font-extrabold text-white">Dominion of Canada</h2>
                        <p className="text-xs text-emerald-300 font-medium">Ontario • Alberta • British Columbia • Saskatchewan</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-xs font-bold text-emerald-300">
                      <FaShieldHalved className="w-3 h-3 text-emerald-400" />
                      G7 Economy
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Primary Work Permits:</span>
                      <span className="font-bold text-white">LMIA-Backed (TFWP) &amp; GTS Stream</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Labor Market Authority:</span>
                      <span className="font-bold text-emerald-300">ESDC / Service Canada &amp; IRCC</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Consular Processing Time:</span>
                      <span className="font-bold text-white">10–16 Weeks (2 Wks for GTS Stream)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Federal Minimum Wage:</span>
                      <span className="font-bold text-amber-300">$17.30 CAD / hour (Indexed)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Average Monthly Trade Pay:</span>
                      <span className="font-bold text-emerald-300">$4,800 – $7,200 CAD (~₹2.95L – ₹4.40L INR)</span>
                    </div>

                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Permanent Residency (PR):</span>
                      <span className="font-bold text-emerald-300">1 Yr Canadian Exp (CEC / FST / PNP)</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-950/50 border border-emerald-500/30 p-3.5 text-center text-xs text-slate-300">
                    <div className="flex items-center justify-center gap-2 text-emerald-300 font-semibold mb-0.5">
                      <FaShieldHalved className="w-3.5 h-3.5 text-emerald-400" />
                      <span>ESDC LMIA Verified • IRCC Compliant</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Closed &amp; Open Work Permits • Direct VFS Biometrics • Zero Hidden Agency Charges
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
              Canada Comprehensive Guide Directory:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#overview" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                1. 2026 Labor Landscape &amp; TFWP
              </a>
              <a href="#visa-pathways" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                2. LMIA Streams &amp; Global Talent
              </a>
              <a href="#pnp-trades" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                3. Provincial Nominee Programs (PNP)
              </a>
              <a href="#red-seal" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                4. Red Seal Trade Certification
              </a>
              <a href="#wage-scale" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                5. Wage Math &amp; Salary Matrix
              </a>
              <a href="#key-occupations" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                6. Trucking, Industrial Trades &amp; Tech
              </a>
              <a href="#step-by-step" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                7. 6-Stage LMIA &amp; IRCC Pipeline
              </a>
              <a href="#documents" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                8. VFS India Checklist &amp; Panel Meds
              </a>
              <a href="#spousal-rights" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                9. Spousal Open Work Permits (SOWP)
              </a>
              <a href="#living-costs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                10. Cost of Living &amp; Net INR Savings
              </a>
              <a href="#pr-pathways" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                11. Express Entry &amp; PR Transition
              </a>
              <a href="#fraud-prevention" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                12. LMIA Scam Warnings &amp; CICC
              </a>
              <a href="#faqs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                13. Search FAQs (12+)
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
              Section 1: Country Overview &amp; The 2026 Canadian Labor Framework
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The Canadian Labor Market in 2026: Balancing TFWP Reforms with Critical Skilled Needs
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Canada remains one of the world&apos;s premier destinations for international trade professionals, engineers, and healthcare specialists. With vast geographical expanses, major infrastructure megaprojects (such as resource pipelines in Alberta, modular housing construction in Ontario, and clean energy development across British Columbia), Canada faces structural labor shortfalls that cannot be satisfied by domestic demographics alone.
              </p>
              <p>
                However, 2024–2026 has witnessed decisive statutory reforms administered jointly by <strong>Immigration, Refugees and Citizenship Canada (IRCC)</strong> and <strong>Employment and Social Development Canada (ESDC)</strong> under the <strong>Immigration and Refugee Protection Act (IRPA)</strong>. The federal government has introduced calibrated caps on low-wage temporary foreign worker allocations in major metropolitan centers, while significantly expanding priority pathways for certified skilled trades (Red Seal categories), healthcare professionals, commercial transportation drivers, and innovative technology specialists.
              </p>
              <p>
                For Indian applicants, navigating Canadian immigration requires absolute precision. Unlike informal corridors, legal work permits in Canada require verifiable <strong>Labour Market Impact Assessments (LMIA)</strong>, valid provincial employer registrations, alignment with the <strong>National Occupational Classification (NOC 2021) TEER structure</strong>, and strict compliance with provincial employment standards legislation.
              </p>
            </div>

            {/* Core Statutory Pillars Box */}
            <div className="rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-6 space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FaShieldHalved className="w-4 h-4 text-emerald-700" />
                Key Pillars of the 2026 Canadian Work Permit Architecture
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <FaCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Mandatory Prevailing Wage:</strong> Employers must pay the median wage for the specific NOC code in that economic region.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Employer-Paid LMIA:</strong> Sponsoring employers must pay the $1,000 CAD government processing fee without employee deductions.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Dual-Intent Recognition:</strong> Section 22(2) of the IRPA legally protects candidates intending to work temporarily and transition to PR.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Provincial Medicare Protection:</strong> Full-time foreign workers on 6+ month permits receive comprehensive provincial healthcare.</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 2: Work Permit Frameworks ── */}
          <section id="visa-pathways" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaPassport className="w-3.5 h-3.5 text-emerald-600" />
              Section 2: Legal Permit Frameworks &amp; LMIA Streams
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Canadian Work Permit Pathways: Navigating LMIA Streams &amp; Global Talent
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every employer-specific work permit issued in Canada belongs to a specific legal stream governed by ESDC and IRCC. Choosing the correct route dictates processing speeds, permit durations, and family accompaniment rights:
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Card 1: High-Wage LMIA */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                      Standard Skilled Route
                    </span>
                    <FaAward className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">High-Wage LMIA Stream</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Applies when the hourly wage offered is at or above the provincial median hourly wage (e.g. $28.85/hr in Ontario, $30.00/hr in Alberta). Employers submit a Transition Plan showing steps to train Canadians or transition foreign workers to permanent residency. Work permits are typically issued for <strong>2 to 3 years</strong>.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Wage Threshold:</span>
                    <strong className="text-slate-900">&ge; Provincial Median Wage</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Permit Duration:</span>
                    <strong className="text-emerald-700">2 to 3 Years Renewable</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Spouse Open Permit:</span>
                    <strong className="text-emerald-700">Eligible (TEER 0/1/2/3)</strong>
                  </div>
                </div>
              </div>

              {/* Card 2: Global Talent Stream */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                      Fast-Track 2-Week Processing
                    </span>
                    <FaGear className="w-4 h-4 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Global Talent Stream (GTS)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Specialized fast-track initiative under the Temporary Foreign Worker Program for highly skilled tech and engineering talent (Category B Occupations such as software engineers, cloud architects, cybersecurity analysts, and civil engineers). Features <strong>10-business-day LMIA processing</strong> and 2-week visa stamping.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Target Roles:</span>
                    <strong className="text-slate-900">Tech, IT &amp; Engineering</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Processing Speed:</span>
                    <strong className="text-teal-700">2-Week Express Decision</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Permit Duration:</span>
                    <strong className="text-teal-700">Up to 3 Years</strong>
                  </div>
                </div>
              </div>

              {/* Card 3: Provincial Trade Pilot / Low-Wage */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                      Hard-to-Fill &amp; Transport
                    </span>
                    <FaTruckFast className="w-4 h-4 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Provincial Trade Streams (PNP)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Targeted provincial immigration pathways (such as Alberta AAIP, Saskatchewan SINP Hard-to-Fill Skills, and Atlantic AIP) that allow employers in logistics, manufacturing, and food processing to sponsor workers directly, bypassing federal low-wage caps and providing direct routes to provincial nomination and PR.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Target Trades:</span>
                    <strong className="text-slate-900">Drivers, Welders, Operators</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Cap Status:</span>
                    <strong className="text-amber-800">Provincial Quotas Apply</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>PR Advantage:</span>
                    <strong className="text-emerald-700">+600 CRS Points on PNP</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 3: Provincial Nominee Programs (PNP) ── */}
          <section id="pnp-trades" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaBuildingColumns className="w-3.5 h-3.5 text-emerald-600" />
              Section 3: Regional Deployment &amp; Provincial Nominee Programs (PNP)
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Provincial Immigration Corridors: Alberta, Ontario, Saskatchewan &amp; Atlantic Canada
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              While federal immigration sets overarching national rules, individual Canadian provinces manage their own labor allocation quotas through Provincial Nominee Programs (PNP). Indian workers strategically placed in provinces experiencing industrial trade shortages transition to Permanent Residency far faster than in saturated metropolitan centers:
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Alberta AAIP */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <FaHelmetSafety className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Alberta (AAIP) Trade Pathways</h3>
                    <span className="text-xs text-emerald-700 font-semibold">Calgary, Edmonton &amp; Oil Sands Corridors</span>
                  </div>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Alberta Opportunity Stream (AOS):</strong> Allows foreign workers with 12 months of Alberta work experience to apply directly for provincial nomination.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Rural Renewal Stream:</strong> Direct hiring by community employers in designated rural municipalities with lower language requirements (CLB 4–5).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Tax Advantage:</strong> Alberta is the only province in Canada with 0% provincial sales tax (PST), preserving take-home worker earnings.</span>
                  </li>
                </ul>
              </div>

              {/* Saskatchewan SINP */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700">
                    <FaTruckFast className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Saskatchewan (SINP) Skilled Trades</h3>
                    <span className="text-xs text-teal-700 font-semibold">Regina, Saskatoon &amp; Heavy Industrial Centers</span>
                  </div>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Hard-to-Fill Skills Pilot:</strong> Sponsoring entry-to-intermediate skilled positions (truck drivers, meat processing, warehouse logistics).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Existing Work Permit Stream:</strong> Fast PR nomination after just 6 months of continuous employment on an LMIA-backed permit.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Low Cost of Living:</strong> Real estate and rental costs in Saskatchewan are 40% to 60% lower than Toronto or Vancouver.</span>
                  </li>
                </ul>
              </div>

              {/* Ontario OINP */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <FaWrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Ontario (OINP) Skilled Trades Stream</h3>
                    <span className="text-xs text-emerald-700 font-semibold">Greater Toronto Area, Hamilton &amp; Windsor Corridor</span>
                  </div>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Skilled Trades Stream (Express Entry):</strong> Targets candidates with 1 year of Ontario work experience in Major Groups 72, 73, or 82.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Employer Job Offer: In-Demand Skills Stream:</strong> Agricultural equipment technicians, residential construction trades, and logistics handlers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Massive Infrastructure Spending:</strong> Multi-billion transit and housing investments guarantee long-term trade contractor employment.</span>
                  </li>
                </ul>
              </div>

              {/* Atlantic Immigration Program (AIP) */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700">
                    <FaPlaneArrival className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Atlantic Immigration Program (AIP)</h3>
                    <span className="text-xs text-teal-700 font-semibold">Nova Scotia, New Brunswick, PEI, Newfoundland</span>
                  </div>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Direct PR Application:</strong> Candidates with a job offer from a designated Atlantic employer can apply directly for Permanent Residency.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>LMIA Exemption:</strong> Designated employers do not need to apply for an individual LMIA, dramatically cutting processing time.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Lower Language &amp; Settlement Bars:</strong> Requires CLB 4 or 5 and foundational settlement plans tailored for newcomer families.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── Section 4: Red Seal Program & Trade Equivalency ── */}
          <section id="red-seal" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaCertificate className="w-3.5 h-3.5 text-emerald-600" />
              Section 4: Technical Accreditation &amp; Red Seal
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The Red Seal Interprovincial Standards Program: Unlocking Maximum Canadian Trade Wages
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                In the Canadian vocational system, the <strong>Red Seal endorsement</strong> represents the gold standard of trade qualification. Administered by the Canadian Council of Directors of Apprenticeship (CCDA), a Red Seal endorsement affixed to a provincial trade certificate proves that a tradesperson has met the rigorous interprovincial occupational standard, allowing them to practice their trade in any province or territory across Canada without writing further examinations.
              </p>
              <p>
                For Indian tradespeople, achieving Red Seal recognition involves the <strong>Trade Equivalency Assessment (TEA)</strong> pathway:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Step 1</span>
                <h4 className="font-bold text-slate-900 text-sm mt-2 mb-1">Hours Verification</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Submit documented proof of <strong>6,000 to 9,000 hours of directly related trade work experience</strong> (verified paystubs, employer reference letters, tax documents, technical certificates) to the relevant provincial apprenticeship regulatory body.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">Step 2</span>
                <h4 className="font-bold text-slate-900 text-sm mt-2 mb-1">Equivalency Approval</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Receive approval from the provincial authority (e.g., Skilled Trades Ontario, AIT Alberta, or SkilledTradesBC) confirming eligibility to challenge the Certificate of Qualification (C of Q) Interprovincial examination.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Step 3</span>
                <h4 className="font-bold text-slate-900 text-sm mt-2 mb-1">Red Seal Exam Stamping</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pass the standardized multiple-choice examination (70% passing threshold). Holding a Red Seal endorsement immediately boosts hourly pay by $10 to $18/hr, elevating trade incomes to $38–$50+ CAD per hour.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 5: Wage Scale & Salary Matrix ── */}
          <section id="wage-scale" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaMoneyBillWave className="w-3.5 h-3.5 text-emerald-600" />
              Section 5: Wages, Overtime &amp; Compensation
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Canada Wage Scale 2026: Prevailing Rates, Overtime Math &amp; Salary Matrix
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Under ESDC regulations, foreign workers cannot be paid less than the statutory provincial minimum wage, nor can they be paid less than the regional median hourly prevailing wage posted on the official Government of Canada Job Bank. Furthermore, provincial employment standards mandate overtime premiums:
            </p>

            {/* Overtime & Wage Standard Box */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <FaScaleUnbalanced className="w-4 h-4 text-emerald-600" />
                Statutory Wage Benchmarks &amp; Overtime Rules
              </h3>
              <div className="grid gap-3 sm:grid-cols-3 text-center">
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                  <div className="text-xs text-slate-500 font-medium">Federal Minimum Wage</div>
                  <div className="text-xl font-black text-slate-900 mt-1">$17.30 CAD / hr</div>
                  <div className="text-xs text-slate-400 mt-0.5">~₹1,050 INR</div>
                </div>
                <div className="rounded-xl bg-emerald-50 p-4 border border-emerald-200">
                  <div className="text-xs text-emerald-800 font-medium">Skilled Trade Prevailing Median</div>
                  <div className="text-xl font-black text-emerald-950 mt-1">$32.00 – $44.00 / hr</div>
                  <div className="text-xs text-emerald-700 mt-0.5">~₹1,950 – ₹2,700 INR</div>
                </div>
                <div className="rounded-xl bg-teal-50 p-4 border border-teal-200">
                  <div className="text-xs text-teal-800 font-medium">Statutory Overtime Premium</div>
                  <div className="text-xl font-black text-teal-950 mt-1">1.5x Base Hourly Rate</div>
                  <div className="text-xs text-teal-700 mt-0.5">After 8h/day or 40–44h/wk</div>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                *Conversion benchmarked at indicative ~₹61.50 INR per $1 CAD. Net take-home after statutory federal and provincial deductions (CPP pension, EI employment insurance, income tax) ranges between 74% and 80% of gross pay.
              </p>
            </div>

            {/* Complete Salary Matrix Table (12 In-Demand Roles) */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-display text-[11px] sm:text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4">Profession / Trade Role</th>
                    <th className="py-3.5 px-3">NOC Code &amp; TEER</th>
                    <th className="py-3.5 px-3">Gross Hourly Rate</th>
                    <th className="py-3.5 px-3">Monthly Gross (CAD)</th>
                    <th className="py-3.5 px-3">Monthly INR Equiv.</th>
                    <th className="py-3.5 px-3">Key Inclusions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Long-Haul Truck Driver (Class 1 / AZ)</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">NOC 73300 (TEER 3)</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$27.00 – $36.00 / hr</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$5,400 – $7,200</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹3.32L – ₹4.42L</td>
                    <td className="py-3 px-3 text-slate-500">Mileage bonus + layover allowances</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Red Seal Welder &amp; Fabricator</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">NOC 72106 (TEER 2)</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$32.00 – $44.00 / hr</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$5,500 – $7,600</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹3.38L – ₹4.67L</td>
                    <td className="py-3 px-3 text-slate-500">Overtime 1.5x + tool allowances</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Heavy-Duty Equipment Mechanic</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">NOC 72401 (TEER 2)</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$34.00 – $48.00 / hr</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$5,800 – $8,300</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹3.56L – ₹5.10L</td>
                    <td className="py-3 px-3 text-slate-500">Mining site rotation + camp accommodation</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Industrial Electrician</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">NOC 72201 (TEER 2)</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$33.00 – $46.00 / hr</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$5,700 – $7,900</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹3.50L – ₹4.85L</td>
                    <td className="py-3 px-3 text-slate-500">Commercial infrastructure + pension plan</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">CNC Machine Tool Programmer / Operator</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">NOC 72100 (TEER 2)</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$28.00 – $38.00 / hr</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$4,800 – $6,500</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹2.95L – ₹4.00L</td>
                    <td className="py-3 px-3 text-slate-500">Shift premiums + aerospace tooling</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Registered Nurse (RN) / Critical Care</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">NOC 31301 (TEER 1)</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$38.00 – $54.00 / hr</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$6,500 – $9,300</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹4.00L – ₹5.72L</td>
                    <td className="py-3 px-3 text-slate-500">Hospital union benefits + fast-track PR</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Continuing Care / Home Support Aide</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-teal-50 text-teal-800 font-bold text-[10px]">NOC 44101 (TEER 4)</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$21.00 – $28.00 / hr</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$3,600 – $4,800</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹2.21L – ₹2.95L</td>
                    <td className="py-3 px-3 text-slate-500">Caregiver pilot direct PR eligibility</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">DevOps &amp; Cloud Systems Architect</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-teal-50 text-teal-800 font-bold text-[10px]">NOC 21223 (TEER 1)</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$55.00 – $85.00 / hr</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$9,500 – $14,700</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹5.84L – ₹9.04L</td>
                    <td className="py-3 px-3 text-slate-500">GTS 2-week visa + equity stock options</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Full-Stack Software Engineer</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-teal-50 text-teal-800 font-bold text-[10px]">NOC 21232 (TEER 1)</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$48.00 – $75.00 / hr</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$8,300 – $13,000</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹5.10L – ₹8.00L</td>
                    <td className="py-3 px-3 text-slate-500">Hybrid work + SOWP open spouse work permit</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Carpentry &amp; Framing Specialist</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">NOC 72310 (TEER 2)</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$29.00 – $40.00 / hr</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$5,000 – $6,900</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹3.07L – ₹4.24L</td>
                    <td className="py-3 px-3 text-slate-500">Housing construction boom incentives</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Heavy Equipment Operator (Excavator/Crane)</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">NOC 73400 (TEER 3)</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$30.00 – $42.00 / hr</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$5,200 – $7,200</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹3.20L – ₹4.42L</td>
                    <td className="py-3 px-3 text-slate-500">Earthmoving infrastructure project rates</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Automotive Service Technician</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">NOC 72410 (TEER 2)</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$28.00 – $40.00 / hr</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">$4,800 – $6,900</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹2.95L – ₹4.24L</td>
                    <td className="py-3 px-3 text-slate-500">Dealership flat-rate bonuses</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 6: Key In-Demand Occupations ── */}
          <section id="key-occupations" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaTruckFast className="w-3.5 h-3.5 text-emerald-600" />
              Section 6: In-Demand Industrial &amp; Transportation Sectors
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Focus Sectors: Long-Haul Trucking, Industrial Fabrication &amp; Technology
            </h2>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                  <FaTruckFast className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Commercial Transport (NOC 73300)</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Long-haul cross-border and interprovincial transport remains the logistical lifeblood of North American supply chains. Carriers across Alberta, Saskatchewan, and Ontario actively sponsor experienced drivers with verifiable heavy commercial driving records.
                </p>
                <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                  Prerequisites: Class 1 / AZ Commercial Driver License, MELT training, clean abstract.
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="h-10 w-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700 mb-4">
                  <FaHelmetSafety className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Heavy Industrial &amp; Construction</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Fabrication workshops, mining ventures, and infrastructure expansions require 6G TIG/MIG structural welders, millwrights, industrial electricians, and equipment operators with precision technical expertise.
                </p>
                <div className="text-[11px] font-semibold text-teal-700 bg-teal-50 p-2.5 rounded-lg border border-teal-200">
                  Prerequisites: Technical trade diploma/ITI, 3+ years experience, CWB/Red Seal equivalency.
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                  <FaGear className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Software, Cloud &amp; AI (GTS)</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Canada&apos;s tech hubs in Toronto-Waterloo, Vancouver, Montreal, and Calgary leverage the Global Talent Stream to recruit top software engineers, cloud architects, and data scientists with expedited 2-week processing.
                </p>
                <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                  Prerequisites: B.Tech/BCA/Master&apos;s degree, specialized tech stack, employer GTS endorsement.
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 7: The 6-Stage End-to-End Pipeline ── */}
          <section id="step-by-step" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaFileContract className="w-3.5 h-3.5 text-emerald-600" />
              Section 7: Operational Deployment Pipeline
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The Complete 6-Stage Canada Work Visa Pipeline (India to Landing)
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Securing a legal Canadian work permit follows a rigorous multi-tier procedure governed by Service Canada and the Canadian High Commission. Below is the operational workflow managed by WorkWise Visa:
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Step 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    01
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Matching &amp; Offer
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Technical Vetting &amp; Job Offer</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pass trade testing or technical screening and secure an official job offer from an active Canadian corporate entity with a CRA business number, matching prevailing median Job Bank wages.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    02
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    ESDC Clearance
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">ESDC LMIA Application Filing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The employer completes the mandatory 4-week Canadian recruitment advertisement (or utilizes the GTS exemption) and submits the LMIA application to Service Canada, paying the $1,000 CAD government fee.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    03
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Health Check
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Panel Physician Medicals (IME)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Undergo upfront medical screening (chest X-ray, blood testing, physical examination) with an IRCC-empanelled physician clinic in New Delhi, Mumbai, Chandigarh, Ahmedabad, or regional centers.
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    04
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    VFS Biometrics
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">IRCC Portal &amp; VFS Biometrics</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Submit the complete digital work permit dossier to IRCC, pay statutory government fees ($155 work permit + $85 biometrics), and enroll fingerprints and digital photo at VFS Global India.
                </p>
              </div>

              {/* Step 5 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    05
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Passport Stamping
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">POE Letter &amp; Visa Stamping</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Upon approval, receive the official Port of Entry (POE) Letter of Introduction and submit your physical passport to VFS Global for Canadian counterfoil visa stamping (W-1 worker visa).
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
                <h3 className="font-bold text-slate-900 text-base mb-2">CBSA Landing &amp; SIN Registration</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Present your POE letter and LMIA copy at Canadian border control to print your paper Work Permit, visit Service Canada for your 9-digit Social Insurance Number (SIN), and begin employment.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 8: VFS Global India Document Checklist ── */}
          <section id="documents" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaBuilding className="w-3.5 h-3.5 text-emerald-600" />
              Section 8: VFS India Deployment &amp; Document Checklist
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              VFS Global Canada Centers in India: Comprehensive Document Dossier
            </h2>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-900 text-sm">
                Mandatory Dossier Checklist for Canada Work Permit Submission:
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Valid Passport:</strong> Minimum 24 months validity with at least 3 blank visa pages.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Positive LMIA Copy:</strong> Official approval letter from ESDC with unique 7-digit system identifier.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Signed Employment Contract:</strong> Formal offer citing job title, NOC code, prevailing wage, and hours.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Immigration Medical (IME) Sheet:</strong> eMedical confirmation printout from an authorized panel clinic.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Police Clearance Certificate (PCC):</strong> Issued by Regional Passport Office (RPO) within past 6 months.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Trade Credentials &amp; Degrees:</strong> ITI diplomas, degrees, ECA (WES/ICAS) reports, and trade test records.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Proof of Experience:</strong> Form 16/ITR tax records, salary account bank statements, and reference letters.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Commercial Driving Records:</strong> Valid Indian heavy license, DL extract, and accident-free abstract (for drivers).</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-600">
                <span className="text-slate-400">Authorized VFS Canada VACs in India:</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">New Delhi</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">Chandigarh</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">Jalandhar</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">Ahmedabad</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">Mumbai</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">Bengaluru</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">Hyderabad</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">Chennai</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">Kolkata</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">Pune</span>
              </div>
            </div>
          </section>

          {/* ── Section 9: Spousal Rights & Children Education ── */}
          <section id="spousal-rights" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaGraduationCap className="w-3.5 h-3.5 text-emerald-600" />
              Section 9: Family Accompaniment &amp; SOWP Regulations
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Spousal Open Work Permits (SOWP) &amp; Free Public Schooling for Children
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Canada maintains one of the world&apos;s most progressive family reunification frameworks for temporary skilled workers. Spouses of qualifying foreign workers are eligible for a <strong>Spousal Open Work Permit (SOWP)</strong>, allowing them to work for virtually any employer across Canada without requiring an individual LMIA.
              </p>
              <p>
                Under updated 2024–2026 IRCC regulations, the primary applicant must be employed in an occupation categorized under <strong>TEER 0, 1, 2, or 3</strong> of the National Occupational Classification (which includes skilled trades, engineering, nursing, management, and tech) with a work permit valid for at least 6 months.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs">
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <FaBriefcase className="w-4 h-4 text-emerald-600" />
                  Unrestricted Spousal Employment
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your spouse receives an open work permit tied to the duration of your principal permit, enabling them to accept full-time or part-time employment, start a small business, or freelance in any sector across Canada.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs">
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <FaGraduationCap className="w-4 h-4 text-teal-600" />
                  100% Free Public Schooling for Children
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Minor dependent children accompanying temporary foreign workers are entitled to study at Canadian public elementary and secondary schools without paying international student tuition fees, saving families $14,000–$18,000 CAD per child annually.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 10: Cost of Living & Savings ── */}
          <section id="living-costs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaHouseUser className="w-3.5 h-3.5 text-emerald-600" />
              Section 10: Living Costs, Housing &amp; Regional Savings Math
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Cost of Living in Canada: Metro Centers vs Trade Hubs &amp; Real Savings in INR
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Living costs in Canada depend dramatically on geography. While Toronto and Vancouver feature premium rental prices, industrial trade workers positioned in secondary cities (such as Edmonton, Calgary, Regina, Saskatoon, or Windsor) achieve substantial monthly savings:
            </p>

            {/* Comparative Table: Metro vs Regional Hub */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-display text-[11px] sm:text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Expense Category</th>
                    <th className="py-3 px-3">Toronto / Vancouver</th>
                    <th className="py-3 px-3">Calgary / Edmonton / Regina</th>
                    <th className="py-3 px-3">Statutory Subsidies / Practical Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">1-Bedroom Apartment Rent</td>
                    <td className="py-3 px-3 text-amber-700 font-semibold">$2,200 – $2,600 / mo</td>
                    <td className="py-3 px-3 text-emerald-700 font-semibold">$1,250 – $1,650 / mo</td>
                    <td className="py-3 px-3 text-slate-500">Flatshares and shared basement suites lower cost</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">Monthly Public Transit Pass</td>
                    <td className="py-3 px-3 font-semibold">$156 – $189 / mo</td>
                    <td className="py-3 px-3 font-semibold">$100 – $115 / mo</td>
                    <td className="py-3 px-3 text-slate-500">Subway / LRT / Municipal bus networks</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">Groceries &amp; Food (Monthly)</td>
                    <td className="py-3 px-3 font-semibold">$450 – $600 / mo</td>
                    <td className="py-3 px-3 font-semibold">$350 – $480 / mo</td>
                    <td className="py-3 px-3 text-slate-500">Costco, No Frills, Superstore, Indian grocers</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">Utilities (Hydro, Gas, Water)</td>
                    <td className="py-3 px-3 font-semibold">$160 – $220 / mo</td>
                    <td className="py-3 px-3 font-semibold">$140 – $200 / mo</td>
                    <td className="py-3 px-3 text-slate-500">Heating included in many rental apartments</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">Mobile + High-Speed Internet</td>
                    <td className="py-3 px-3 font-semibold">$80 – $120 / mo</td>
                    <td className="py-3 px-3 font-semibold">$80 – $120 / mo</td>
                    <td className="py-3 px-3 text-slate-500">Rogers, Telus, Bell, Fido, Freedom Mobile</td>
                  </tr>
                  <tr className="bg-emerald-50/60 font-bold">
                    <td className="py-3 px-4 text-emerald-950">Net Monthly Savings Potential</td>
                    <td className="py-3 px-3 text-emerald-800">$1,500 – $2,400 CAD (₹92k–₹1.48L)</td>
                    <td className="py-3 px-3 text-emerald-800">$2,600 – $4,200 CAD (₹1.60L–₹2.58L)</td>
                    <td className="py-3 px-3 text-emerald-800">Higher savings in Alberta/Saskatchewan trades</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 11: Permanent Residency (PR) Roadmap ── */}
          <section id="pr-pathways" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaGraduationCap className="w-3.5 h-3.5 text-emerald-600" />
              Section 11: Settlement &amp; Permanent Residency (PR) Roadmap
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Transitioning to Canadian Permanent Residency: CEC, Trades Draws &amp; PNP Boost
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Working in Canada on an LMIA-backed permit is the single most reliable foundation for achieving Canadian Permanent Residency. Canadian work experience directly unlocks multiple high-priority economic immigration programs:
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  Express Entry CEC
                </span>
                <h3 className="font-bold text-slate-900 text-base mt-3 mb-2">Canadian Experience Class</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Completing 1 full year (1,560 hours) of continuous full-time skilled work experience in Canada under TEER 0, 1, 2, or 3 qualifies you for the Canadian Experience Class, awarding valuable CRS points for Canadian work history.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                  Targeted Draws
                </span>
                <h3 className="font-bold text-slate-900 text-base mt-3 mb-2">Category-Based Trades Selection</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  IRCC conducts targeted category-based Express Entry rounds specifically for trades (welders, carpenters, plumbers, electricians, mechanics) with significantly lower CRS score cut-offs than general draws.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                  +600 CRS Points
                </span>
                <h3 className="font-bold text-slate-900 text-base mt-3 mb-2">Provincial Nominee Boost</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Securing a provincial nomination from Alberta, Saskatchewan, or Ontario adds an automatic <strong>600 points</strong> to your Express Entry profile, guaranteeing an Invitation to Apply (ITA) in the very next draw.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 12: Anti-Fraud Advisory ── */}
          <section id="fraud-prevention" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-800">
              <FaBan className="w-3.5 h-3.5 text-red-600" />
              Section 12: Fraud Prevention &amp; Scam Advisory
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Canada Work Visa Scam Warnings: Recognizing Fraudulent Job Offers &amp; LMIA Sales
            </h2>

            <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <FaTriangleExclamation className="w-6 h-6 text-red-600 shrink-0" />
                <h3 className="font-bold text-red-950 text-base sm:text-lg">
                  Critical Red Flags Warned by the High Commission of Canada in New Delhi:
                </h3>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <FaXmark className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Paying for an LMIA:</strong> Under Canadian federal law, employers and recruitment agents are strictly prohibited from selling or charging candidates for an LMIA. Demands for &quot;LMIA security deposits&quot; are a hallmark of fraudulent operations.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaXmark className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Visitor Visa to Work Permit Scams:</strong> Unscrupulous agents mislead applicants into believing they can travel on a tourist visa and &quot;convert&quot; it to an open work permit inside Canada. The temporary public policy allowing visitor-to-work permit applications has been terminated by IRCC.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaXmark className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Unlicensed Ghost Consultants:</strong> Only members in good standing of the <strong>College of Immigration and Citizenship Consultants (CICC)</strong> or provincial law societies can legally represent clients before IRCC for a fee.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaXmark className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed Visa Approvals:</strong> Only authorized IRCC visa officers possess the statutory power to grant or deny a Canadian visa. No private agency can &quot;guarantee&quot; approval.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* ── Section 13: Search-Intent FAQ Accordion ── */}
          <section id="faqs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaBriefcase className="w-3.5 h-3.5 text-emerald-600" />
              Section 13: Comprehensive Frequently Asked Questions (FAQs)
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Answering Every Critical Search Intent Query for Indian Job Seekers
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Direct, authoritative answers addressing the most frequently searched queries by Indian candidates regarding Canadian employment:
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

          {/* ── Section 14: Bottom Strategic CTA Banner ── */}
          <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white p-8 sm:p-12 shadow-xl border border-emerald-900/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300">
                <FaAward className="w-3.5 h-3.5 text-emerald-400" />
                WorkWise Visa Global Deployment Desk
              </span>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white leading-tight">
                Ready to Migrate to Canada with Verified LMIA Sponsorship?
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Speak directly with our senior Canadian immigration specialists. We evaluate your credentials, match you with genuine Canadian employers holding verified ESDC LMIA authorizations or provincial nominations, guide your Red Seal trade equivalency, and manage your IRCC submission with complete legal compliance.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20want%20to%20apply%20for%20a%20Canada%20LMIA%20work%20permit%20and%20job%20placement!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 transition-all cursor-pointer"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 81301 61603)</span>
                </a>

                <a
                  href="mailto:workwisevisa@gmail.com?subject=Canada%20Work%20Visa%20Application%20Inquiry"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all backdrop-blur-md"
                >
                  <FaEnvelope className="w-4 h-4 text-emerald-300" />
                  <span>Email Resume for Canada Review</span>
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
