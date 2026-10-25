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
  title: "UK Work Visa & Jobs Guide 2026: Skilled Worker, Health & Care, CoS, Salary List & ILR | WorkWise Visa",
  description:
    "Authoritative 2026 statutory master guide to United Kingdom work visas for Indian professionals, healthcare workers, engineers, chefs & tech specialists. Learn Home Office Points-Based System (70 points), Defined Certificate of Sponsorship (CoS), Immigration Salary List (ISL), IHS fees, HMRC taxes, and 5-year Indefinite Leave to Remain (ILR) settlement.",
  keywords: [
    "UK work visa 2026",
    "UK work visa for Indian citizens",
    "UK Skilled Worker Visa requirements 2026",
    "Health and Care Worker Visa UK for Indians",
    "Defined Certificate of Sponsorship CoS timeline",
    "Home Office 70 points immigration system UK",
    "Immigration Salary List ISL UK 2026",
    "Immigration Health Surcharge IHS fee exemption",
    "UK visa appointment VFS Global India New Delhi Mumbai",
    "UK minimum wage and skilled worker salary threshold",
    "Indefinite Leave to Remain ILR 5 year route",
    "UK dependent visa work rights 2026",
    "Cost of living in UK for Indian workers London Manchester",
    "WorkWise Visa UK job placement sponsorship",
    "How to get UK work permit from India without scam",
    "NHS Band 5 nursing sponsorship UK",
  ],
  alternates: {
    canonical: `${BASE_URL}/countries/uk`,
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
    title: "UK Work Visa & Jobs Guide 2026: Skilled Worker, Health & Care, CoS & ILR Settlement | WorkWise Visa",
    description:
      "Comprehensive statutory manual for Indian professionals, registered nurses, IT specialists, certified tradespeople, and senior technicians migrating to the United Kingdom under Home Office immigration rules.",
    url: `${BASE_URL}/countries/uk`,
    siteName: "WorkWise Visa",
    locale: "en_GB",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "UK Work Visa 2026 - London Skyline and Big Ben Architectural Landmark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Work Visa & Employment Manual 2026 | WorkWise Visa",
    description:
      "Statutory step-by-step guidance on British Skilled Worker visas, Health & Care fast-track, Defined CoS issuance, HMRC tax brackets, and 5-year ILR permanent residency.",
    images: ["https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function UKCountryPage() {
  const publishedDate = "2026-04-10T09:00:00.000Z";
  const modifiedDate = "2026-10-16T16:00:00.000Z";

  // Schema.org Structured Data
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
        name: "United Kingdom",
        item: `${BASE_URL}/countries/uk`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "UK Work Visa & Employment Manual 2026: Skilled Worker, Health & Care, CoS & ILR Settlement",
    description:
      "The definitive statutory manual explaining how Indian professionals, healthcare workers, engineers, chefs, and technicians secure authorized Home Office Defined CoS sponsorship, pass the 70-point threshold, complete VFS consular biometrics, and attain Indefinite Leave to Remain.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
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
      "@id": `${BASE_URL}/countries/uk`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the UK Skilled Worker Visa and how does the 70-point threshold work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Skilled Worker Visa is the primary employment immigration route to the United Kingdom under the Points-Based Immigration System (PBIS). Applicants must accumulate at least 70 points: 50 mandatory non-tradeable points (20 points for a valid job offer from a Home Office-licensed sponsor, 20 points for a job at the appropriate skill level of RQF Level 3 or above, and 10 points for English language proficiency at CEFR Level B1) plus 20 tradeable points (awarded for meeting the general salary threshold of £38,700 or the standard occupational going rate, holding a relevant STEM PhD, or being sponsored in a role on the Immigration Salary List - ISL).",
        },
      },
      {
        "@type": "Question",
        name: "What is a Certificate of Sponsorship (CoS) and what is the difference between Defined and Undefined CoS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Certificate of Sponsorship (CoS) is an electronic reference number generated by a Home Office-licensed employer via the Sponsor Management System (SMS). It confirms that a genuine vacancy exists and details the job title, SOC code, and offered salary. A Defined CoS (DCoS) is mandatory for applicants applying from outside the UK (e.g. from India); the employer must apply to the Home Office for each individual overseas allocation, typically approved in 24 to 72 hours. An Undefined CoS is used for candidates already lawfully inside the UK who are switching immigration categories or extending their existing skilled worker status.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Health and Care Worker Visa and what are its major exemptions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Health and Care Worker Visa is a dedicated, fast-track subcategory of the Skilled Worker route for qualified medical and social care professionals (doctors, registered nurses, paramedics, occupational therapists, radiographers, and laboratory technicians) sponsored by the NHS, NHS-commissioned providers, or Care Quality Commission (CQC) registered organizations. Key benefits include significantly lower Home Office visa application fees (£309 for up to 3 years), complete 100% exemption from the expensive Immigration Health Surcharge (IHS saving £1,035 per year per person), and priority decision processing within 3 weeks.",
        },
      },
      {
        "@type": "Question",
        name: "What is the 2026 general salary threshold for the UK Skilled Worker Visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under statutory Home Office immigration rules implemented in 2024 and maintained through 2026, the baseline general salary threshold for a standard Skilled Worker visa is £38,700 per year (or the occupation's standard 50th percentile going rate, whichever is higher). However, discounts apply for specific categories: roles on the Immigration Salary List (ISL) have a reduced threshold of £30,960 (or their specific going rate); Health and Care visa roles have a general threshold floor of £29,000 (or national NHS Agenda for Change pay scales); and 'new entrants' (under 26, recent graduates, or postdoctoral researchers) qualify with a 30% discount down to £30,960.",
        },
      },
      {
        "@type": "Question",
        name: "Can my spouse and children accompany me to the UK and can my spouse work legally?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For standard Skilled Worker Visa holders, senior healthcare staff, engineers, and IT professionals, dependent spouses and children under 18 can accompany the main applicant. The dependent spouse is granted unrestricted open work authorization in the UK, allowing them to work in any commercial sector, be self-employed, or start a business. Note: Under Home Office rules enacted in March 2024, foreign care workers and senior care workers sponsored under SOC codes 6145 and 6146 are no longer permitted to bring overseas dependents.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Immigration Health Surcharge (IHS) and how much does it cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Immigration Health Surcharge (IHS) is a mandatory statutory levy paid upfront alongside your visa application to access the UK's National Health Service (NHS) without additional hospital charges. In 2026, the standard IHS fee is £1,035 per year of visa validity for adults (£5,175 for a 5-year visa) and £776 per year for children under 18 and students. Health and Care Worker Visa applicants and their accompanying dependents are 100% exempt from paying the IHS.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to obtain Indefinite Leave to Remain (ILR) and British Citizenship?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skilled Worker and Health & Care visa holders can apply for Indefinite Leave to Remain (ILR) permanent settlement after completing 5 continuous years of lawful residence in the UK. Requirements include: continuous employment meeting the relevant salary threshold at the time of application, passing the Life in the UK test, demonstrating English language B1 proficiency, and having no more than 180 days of absence from the UK in any rolling 12-month period. After holding ILR for 12 months (or immediately if married to a British citizen), you can apply for naturalization as a British Citizen and obtain a British passport.",
        },
      },
      {
        "@type": "Question",
        name: "What English language test is required for a UK work visa from India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Applicants must prove English proficiency at CEFR Level B1 in reading, writing, speaking, and listening. Acceptable proofs include: passing an approved Secure English Language Test (SELT) from Home Office-certified providers (IELTS for UKVI with a minimum score of 4.0 in each band, Pearson PTE Academic UKVI with minimum 43, LanguageCert International ESOL SELT, or PSI Skills for English UKVI); or having a degree taught in English verified with an ECCTIS Statement of Comparability and English Proficiency.",
        },
      },
      {
        "@type": "Question",
        name: "Do Indian applicants need a Tuberculosis (TB) test before applying for a UK visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All residents of India applying for a UK work visa for stays longer than 6 months must undergo a chest X-ray screening for pulmonary tuberculosis at a Home Office-approved diagnostic clinic (IOM or certified medical center). If the chest X-ray is clear, the clinic issues a standardized TB Certificate valid for 6 months, which must be uploaded during the online visa application.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a skilled worker earn and save monthly in the United Kingdom after taxes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A skilled technician, engineer, or healthcare specialist earning £38,700 to £60,000 gross per year takes home approximately £2,450 to £3,650 net per month after Income Tax (HMRC PAYE) and Class 1 National Insurance. In regional UK cities (Manchester, Birmingham, Leeds, Glasgow, Newcastle) where 1-bedroom flat rents range from £750 to £1,100 per month, a single skilled worker typically saves £1,100 to £1,800+ GBP monthly (approx. ₹1,20,000 to ₹1,95,000 INR per month). In London, higher rents (£1,600–£2,300/mo) result in monthly savings of £700 to £1,400 GBP.",
        },
      },
      {
        "@type": "Question",
        name: "What are the standard working hours and overtime laws in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the UK Working Time Regulations 1998, statutory maximum working hours are capped at 48 hours per week averaged over a 17-week reference period, unless an employee voluntarily signs an opt-out agreement. Standard full-time workweeks are 37.5 to 40 hours. Workers are entitled to a mandatory 20-minute rest break for shifts exceeding 6 hours, 11 consecutive hours of daily rest, and at least 28 days of statutory paid annual leave (including 8 British public bank holidays).",
        },
      },
      {
        "@type": "Question",
        name: "What is an Immigration Skills Charge (ISC) and who pays it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Immigration Skills Charge (ISC) is a statutory levy that UK employers must pay to the Home Office each time they assign a Certificate of Sponsorship to a foreign skilled worker. For large employers, the charge is £1,000 for the first 12 months plus £500 for each additional 6 months (£5,000 for a 5-year visa). For small businesses and charities, it is £364 for the first year and £182 for every additional 6 months. By statutory UK law, employers are strictly prohibited from recouping or deducting the ISC from the worker's salary.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if a UK employer terminates your employment? What is the curtailment period?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If your sponsoring UK employer terminates your employment or ceases sponsorship, they are legally required to report this to the Home Office within 10 working days via the SMS portal. The Home Office then issues an official Curtailment Notice granting you a 60-calendar-day grace period (or until your visa's existing expiration date, whichever is shorter). During these 60 days, you can secure a new Home Office-licensed sponsor to issue a new Defined/Undefined CoS, switch to another visa category, or make arrangements to depart the UK lawfully.",
        },
      },
      {
        "@type": "Question",
        name: "How does the transition from physical BRP cards to digital eVisa work in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "By 2026, the Home Office has phased out physical Biometric Residence Permit (BRP) cards in favor of digital eVisas. Successful applicants create and access their secure UKVI online account to view their immigration status, generate share codes for employers (to prove Right to Work), landlords (Right to Rent), and border officers, eliminating physical card loss or renewal delays.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Global Business Mobility (GBM) Senior or Specialist Worker Visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The GBM Senior or Specialist Worker route (formerly the Intra-Company Transfer - ICT visa) enables overseas multinational companies to temporarily assign senior managers and specialist employees from their foreign branch (e.g. in India) to an associated UK business entity. Candidates must have worked for the overseas business for at least 12 months (unless earning over £73,900), receive a salary of at least £48,500 (or the occupation's going rate), and are permitted to stay for up to 5 years (or 9 years if earning £73,900+). Note that GBM does not lead directly to ILR settlement, but holders can switch in-country to the Skilled Worker route.",
        },
      },
      {
        "@type": "Question",
        name: "How can I verify if a UK job offer or Certificate of Sponsorship is authentic and avoid fraud?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An authentic UK job offer will always be backed by an employer listed on the official Home Office 'Register of Licensed Sponsors: Workers' available on GOV.UK. Legitimate sponsors provide an official Certificate of Sponsorship (CoS) document showing a unique 11-digit alphanumeric reference number, sponsor licence number, and genuine company contact. Licensed UK employers never charge candidates for the CoS itself or demand cash transfers through personal bank accounts. Sponsoring companies can also be verified through Companies House (find-and-update.company-information.service.gov.uk).",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Apply for a UK Skilled Worker Visa from India in 2026",
    description:
      "A complete 6-stage statutory operational roadmap for Indian professionals, skilled tradespeople, nurses, and engineers to migrate legally to the United Kingdom under Home Office Points-Based Immigration System regulations.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Secure Qualifying UK Job Offer from a Licensed Sponsor",
        text: "Obtain a formal job offer from an employer registered on the Home Office Register of Licensed Sponsors, meeting the £38,700 general salary threshold or standard going rate for the relevant 4-digit SOC code.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Certificate of Sponsorship (Defined CoS) Allocation",
        text: "The sponsoring UK employer applies to the Home Office for an electronic Defined Certificate of Sponsorship (DCoS) via the Sponsor Management System (SMS), detailing job duties, salary, and SOC code.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Complete Mandatory English SELT & IOM Tuberculosis Screening",
        text: "Pass a certified CEFR B1 English examination (IELTS for UKVI or PTE Academic UKVI) and obtain a clean chest X-ray Tuberculosis (TB) Certificate from a Home Office-approved diagnostic clinic in India.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Online Visa Application & Fee/IHS Payment on GOV.UK",
        text: "Submit the online visa application on the official GOV.UK portal, pay the statutory Home Office application fee and Immigration Health Surcharge (IHS, if applicable), and upload the CoS and supporting documents.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Biometric Enrollment at VFS Global Visa Application Centre (VAC)",
        text: "Attend your biometric appointment at a VFS Global center in India (New Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Kolkata, etc.) to submit fingerprints, facial photograph, and passport.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Visa Approval, Passport Vignette Stamping & UK Landing",
        text: "Receive your approved 90-day travel vignette passport stamp (or digital eVisa linkage), travel to the United Kingdom, generate your electronic Right to Work share code, and apply for your National Insurance (NI) Number.",
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
              <span className="text-emerald-300 font-bold">United Kingdom (UK)</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                {/* Government & Authority Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Official 2026 Home Office &amp; UKVI Points-Based Immigration Gateway
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                  UK Work Visa &amp; Jobs Guide{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                    2026
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  The definitive, legally verified roadmap for Indian professionals, healthcare specialists, registered nurses, IT engineers, certified tradespeople, and chefs migrating to the United Kingdom. Master the <strong className="font-bold text-white">Home Office Points-Based System (70 points)</strong>, <strong className="font-bold text-emerald-300">Defined Certificate of Sponsorship (CoS)</strong>, <strong className="font-bold text-white">Health &amp; Care Worker fast-track</strong>, Immigration Salary List (ISL), HMRC tax rules, and the 5-year Indefinite Leave to Remain (ILR) permanent settlement pathway.
                </p>

                {/* Key Benefits Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaMoneyBillWave className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">£38.7k–£65k+</div>
                      <div className="text-[10px] text-slate-400">Annual Skilled Pay</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaAward className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">70-Point PBIS</div>
                      <div className="text-[10px] text-slate-400">Merit Points System</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaStethoscope className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Health &amp; Care</div>
                      <div className="text-[10px] text-slate-400">100% IHS Exemption</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaHospital className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">NHS Coverage</div>
                      <div className="text-[10px] text-slate-400">Universal Healthcare</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaClock className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">3-Week Fast-Track</div>
                      <div className="text-[10px] text-slate-400">Home Office Decision</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaPassport className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">5-Year ILR Route</div>
                      <div className="text-[10px] text-slate-400">British Citizenship</div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons - Clean 2-CTA Layout */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
                  <Link
                    href="/jobs?country=United Kingdom"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] active:scale-[0.98] transition-all text-center w-full sm:w-auto"
                  >
                    <FaBriefcase className="w-4 h-4 shrink-0" />
                    <span>Explore Jobs</span>
                  </Link>

                  <a
                    href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20UK%20Skilled%20Worker%20and%20Health%20and%20Care%20Visa%20Sponsorship!"
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
                        src="https://flagcdn.com/w160/gb.png"
                        alt="United Kingdom Union Jack Flag"
                        className="h-10 w-14 object-cover rounded-xl shadow-md border border-white/25 shrink-0"
                      />
                      <div>
                        <h2 className="text-xl font-display font-extrabold text-white">United Kingdom</h2>
                        <p className="text-xs text-emerald-300 font-medium">England • Scotland • Wales • Northern Ireland</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-xs font-bold text-emerald-300">
                      <FaShieldHalved className="w-3 h-3 text-emerald-400" />
                      G7 Economy
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Primary Work Visas:</span>
                      <span className="font-bold text-white">Skilled Worker, Health &amp; Care, GBM</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Governing Authority:</span>
                      <span className="font-bold text-emerald-300">UK Visas and Immigration (UKVI / Home Office)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Processing Time:</span>
                      <span className="font-bold text-white">3–5 Weeks (Priority: 5 Days / 24h)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">National Living Wage:</span>
                      <span className="font-bold text-amber-300">£11.44 / hr (£23,795 / yr full-time)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Average Skilled Worker Pay:</span>
                      <span className="font-bold text-emerald-300">£38,700 – £65,000 (~₹42.5L – ₹71.5L INR)</span>
                    </div>

                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Permanent Settlement:</span>
                      <span className="font-bold text-emerald-300">Indefinite Leave to Remain (ILR at 5 Yrs)</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-950/50 border border-emerald-500/30 p-3.5 text-center text-xs text-slate-300">
                    <div className="flex items-center justify-center gap-2 text-emerald-300 font-semibold mb-0.5">
                      <FaShieldHalved className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Home Office Licensed Sponsors (A-Rated)</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      CoS Assigned Directly • VFS Biometrics Stamping • Zero Hidden Agency Charges
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
              UK Comprehensive Guide Directory:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#overview" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                1. 2026 Labor Landscape &amp; PBIS
              </a>
              <a href="#visa-pathways" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                2. Visa Classifications: Skilled Worker &amp; Health &amp; Care
              </a>
              <a href="#points-system" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                3. The 70-Point Threshold &amp; Salary Math
              </a>
              <a href="#salary-matrix" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                4. UK Salary Matrix (12 In-Demand Roles)
              </a>
              <a href="#step-by-step" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                5. 6-Stage Home Office Deployment Pipeline
              </a>
              <a href="#statutory-fees" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                6. Home Office Fees, IHS &amp; Maintenance Funds
              </a>
              <a href="#spousal-rights" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                7. Dependent Open Work Rights &amp; Education
              </a>
              <a href="#healthcare-pension" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                8. NHS Healthcare &amp; Workplace Pensions
              </a>
              <a href="#living-costs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                9. Cost of Living &amp; Net INR Savings Math
              </a>
              <a href="#ilr-citizenship" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                10. Settlement (ILR) &amp; British Citizenship
              </a>
              <a href="#fraud-prevention" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                11. Anti-Fraud Advisory &amp; Scam Warnings
              </a>
              <a href="#faqs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                12. Exhaustive Search FAQs (16+)
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
              Section 1: Country Overview &amp; The British Employment Landscape
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The United Kingdom Labor Market in 2026: The Points-Based Immigration System (PBIS)
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                The United Kingdom represents one of the world&apos;s leading advanced economies, boasting a GDP exceeding £2.5 trillion and standing as an international capital for financial technology, aerospace engineering, life sciences, civil infrastructure, and advanced healthcare. Following the conclusion of free movement from the European Union, the British government established a unified, global <strong>Points-Based Immigration System (PBIS)</strong> that treats European and non-European nationals with strict equality.
              </p>
              <p>
                Administered by <strong>UK Visas and Immigration (UKVI)</strong> under the executive authority of the <strong>Home Office</strong>, the Points-Based System prioritizes skilled talent, genuine occupational shortages, and language competency. For Indian citizens—who constitute the largest cohort of skilled overseas workers and medical professionals deployed to the UK—the immigration landscape provides clear, statutory pathways to live, work, and permanently settle across England, Scotland, Wales, and Northern Ireland.
              </p>
              <p>
                Every lawful work visa application is governed by the UK Immigration Rules (Appendix Skilled Worker, Appendix Health and Care Worker, Appendix Global Business Mobility). Sponsoring UK corporate entities must hold an active <strong>Home Office Sponsor Licence</strong> and issue an electronic <strong>Certificate of Sponsorship (CoS)</strong> before an overseas candidate can apply for consular entry clearance.
              </p>
            </div>

            {/* Core Statutory Pillars Box */}
            <div className="rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-6 space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FaShieldHalved className="w-4 h-4 text-emerald-700" />
                Key Pillars of the 2026 UK Points-Based Immigration Framework
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <FaCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>70-Point Threshold:</strong> Objective points allocated for job sponsorship (20), skill level RQF 3+ (20), English B1 (10), and compliant salary (20).</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Defined Certificate of Sponsorship (CoS):</strong> Fast digital allocation directly through the Home Office SMS portal within 24–72 hours.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Health &amp; Care Fast-Track:</strong> Dedicated 3-week decision window, lower Home Office fees, and 100% exemption from the Immigration Health Surcharge.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>5-Year Settlement to Citizenship:</strong> Statutory eligibility for Indefinite Leave to Remain (ILR) at year 5 and British passport naturalization at year 6.</span>
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
              United Kingdom Work Visa Categories: Selecting Your Exact Immigration Route
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The UK does not grant unsponsored generic job seeker permits to overseas applicants. Every legitimate employment visa is tethered to a licensed sponsor. Below is how the primary UK work classifications compare:
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Card 1: Skilled Worker Visa */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                      Standard Skilled Route
                    </span>
                    <FaAward className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Skilled Worker Visa</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    The cornerstone UK work visa for professionals across software engineering, architecture, finance, civil construction, manufacturing, and specialized trades. Requires a job offer with an approved Home Office sponsor at RQF Level 3 or higher, English language B1, and salary meeting £38,700 or the occupational going rate.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Skill Threshold:</span>
                    <strong className="text-slate-900">RQF Level 3 (A-Level / Diploma)</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Baseline Salary:</span>
                    <strong className="text-emerald-700">£38,700 / yr (or going rate)</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Settlement Timeline:</span>
                    <strong className="text-emerald-700">5 Years to ILR Permanent Stay</strong>
                  </div>
                </div>
              </div>

              {/* Card 2: Health and Care Worker Visa */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                      NHS &amp; Care Fast-Track
                    </span>
                    <FaStethoscope className="w-4 h-4 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Health &amp; Care Worker Visa</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Created exclusively for qualified medical professionals, registered nurses, doctors, radiographers, and senior healthcare staff sponsored by the NHS or CQC-regulated providers. Features heavily discounted visa application fees, dedicated fast-track adjudication, and <strong>100% exemption from the Immigration Health Surcharge</strong>.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Target Roles:</span>
                    <strong className="text-slate-900">Nurses, Doctors, Allied Health</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>IHS Health Surcharge:</span>
                    <strong className="text-teal-700">100% Free (£0 Exemption)</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Home Office Fee:</span>
                    <strong className="text-emerald-700">£309 (Up to 3 Yrs)</strong>
                  </div>
                </div>
              </div>

              {/* Card 3: Global Business Mobility (GBM) */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                      Corporate Intra-Company
                    </span>
                    <FaBuilding className="w-4 h-4 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Global Business Mobility (GBM)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Allows multinational corporations to transfer senior managers and specialist employees from an Indian parent company or branch to its UK operations (Senior or Specialist Worker route). Requires at least 12 months prior overseas service with the sending firm and a salary meeting £48,500. Can switch in-country into Skilled Worker.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Prior Employment:</span>
                    <strong className="text-slate-900">12 Months Overseas Service</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Salary Floor:</span>
                    <strong className="text-amber-800">£48,500 (or going rate)</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Max Duration:</span>
                    <strong className="text-emerald-700">5 Years (9 Yrs if £73.9k+)</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 3: The 70-Point Threshold & Going Rate Math ── */}
          <section id="points-system" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaScaleUnbalanced className="w-3.5 h-3.5 text-emerald-600" />
              Section 3: The 70-Point Threshold &amp; Salary Math
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Home Office Points-Based System: Breaking Down the Mandatory 50 &amp; Tradeable 20 Points
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Under the UK Points-Based Immigration System (Appendix Skilled Worker), every applicant must attain exactly <strong>70 points</strong> to qualify for visa issuance. The points architecture is split into two distinct tiers: <strong>Mandatory Non-Tradeable Points (50 points)</strong> that every applicant must possess without exception, and <strong>Tradeable Points (20 points)</strong> awarded based on salary thresholds, occupational shortage lists, or academic credentials:
              </p>
            </div>

            {/* Points Architecture Breakdown Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Mandatory 50 Points */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    Tier 1: Mandatory Requirements
                  </span>
                  <span className="text-base font-black text-emerald-700 font-display">50 Points (Compulsory)</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700 pt-2">
                  <div className="flex items-start justify-between border-b border-slate-100 pb-2">
                    <div>
                      <strong className="text-slate-900 block">Offer of job by an approved Home Office sponsor</strong>
                      <span className="text-slate-500">Must hold an active A-rated Sponsor Licence and issue valid Defined CoS</span>
                    </div>
                    <span className="font-bold text-emerald-700 shrink-0 ml-2">20 Pts</span>
                  </div>
                  <div className="flex items-start justify-between border-b border-slate-100 pb-2">
                    <div>
                      <strong className="text-slate-900 block">Job at an appropriate skill level (RQF Level 3+)</strong>
                      <span className="text-slate-500">Matches an eligible 4-digit Standard Occupational Classification (SOC) code</span>
                    </div>
                    <span className="font-bold text-emerald-700 shrink-0 ml-2">20 Pts</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <strong className="text-slate-900 block">English language proficiency at CEFR Level B1</strong>
                      <span className="text-slate-500">IELTS for UKVI (4.0+), PTE Academic UKVI (43+), or ECCTIS degree verification</span>
                    </div>
                    <span className="font-bold text-emerald-700 shrink-0 ml-2">10 Pts</span>
                  </div>
                </div>
              </div>

              {/* Tradeable 20 Points */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                    Tier 2: Tradeable Options (Pick One)
                  </span>
                  <span className="text-base font-black text-teal-700 font-display">20 Points (Tradeable)</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700 pt-2">
                  <div className="flex items-start justify-between border-b border-slate-100 pb-2">
                    <div>
                      <strong className="text-slate-900 block">Option A: Salary &ge; £38,700 and &ge; Going Rate</strong>
                      <span className="text-slate-500">Standard general threshold for regular skilled professional roles</span>
                    </div>
                    <span className="font-bold text-teal-700 shrink-0 ml-2">20 Pts</span>
                  </div>
                  <div className="flex items-start justify-between border-b border-slate-100 pb-2">
                    <div>
                      <strong className="text-slate-900 block">Option B: STEM PhD in a relevant subject area</strong>
                      <span className="text-slate-500">Salary floor reduced to £30,960 (80% of going rate requirement)</span>
                    </div>
                    <span className="font-bold text-teal-700 shrink-0 ml-2">20 Pts</span>
                  </div>
                  <div className="flex items-start justify-between border-b border-slate-100 pb-2">
                    <div>
                      <strong className="text-slate-900 block">Option C: Job on the Immigration Salary List (ISL)</strong>
                      <span className="text-slate-500">General threshold floor reduced to £30,960 (or role specific going rate)</span>
                    </div>
                    <span className="font-bold text-teal-700 shrink-0 ml-2">20 Pts</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <strong className="text-slate-900 block">Option D: New Entrant (Under 26 / Recent Graduate)</strong>
                      <span className="text-slate-500">30% discount on going rate; minimum salary floor is £30,960</span>
                    </div>
                    <span className="font-bold text-teal-700 shrink-0 ml-2">20 Pts</span>
                  </div>
                </div>
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
              United Kingdom Salary Scale 2026: Going Rates, Overtime Math &amp; Salary Matrix
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              British law mandates that all employees must receive at least the <strong>National Living Wage (£11.44 per hour)</strong>, while sponsored skilled workers must receive the certified Home Office going rate. Below is the statutory compensation matrix benchmarked across 12 high-demand occupational classifications:
            </p>

            {/* Overtime & Wage Standard Box */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <FaScaleUnbalanced className="w-4 h-4 text-emerald-600" />
                Statutory Wage Standards &amp; Overtime Rules
              </h3>
              <div className="grid gap-3 sm:grid-cols-3 text-center">
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                  <div className="text-xs text-slate-500 font-medium">National Living Wage (21+)</div>
                  <div className="text-xl font-black text-slate-900 mt-1">£11.44 / hr</div>
                  <div className="text-xs text-slate-400 mt-0.5">£23,795 / yr (40h workweek)</div>
                </div>
                <div className="rounded-xl bg-emerald-50 p-4 border border-emerald-200">
                  <div className="text-xs text-emerald-800 font-medium">Skilled General Threshold</div>
                  <div className="text-xl font-black text-emerald-950 mt-1">£38,700 / yr</div>
                  <div className="text-xs text-emerald-700 mt-0.5">~₹42.50 Lakhs INR / yr</div>
                </div>
                <div className="rounded-xl bg-teal-50 p-4 border border-teal-200">
                  <div className="text-xs text-teal-800 font-medium">Statutory Working Week</div>
                  <div className="text-xl font-black text-teal-950 mt-1">37.5 – 40 Hours</div>
                  <div className="text-xs text-teal-700 mt-0.5">Max 48h (unless opt-out signed)</div>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                *Conversion benchmarked at indicative ~₹110.00 INR per £1.00 GBP. Under the Working Time Regulations 1998, workers are entitled to 28 days of paid annual leave per year, including statutory bank holidays.
              </p>
            </div>

            {/* Complete Salary Matrix Table (12 In-Demand Roles) */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-display text-[11px] sm:text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4">Profession / Trade Role</th>
                    <th className="py-3.5 px-3">Visa Classification</th>
                    <th className="py-3.5 px-3">Annual Gross (GBP)</th>
                    <th className="py-3.5 px-3">Monthly Gross (GBP)</th>
                    <th className="py-3.5 px-3">Monthly INR Equiv.</th>
                    <th className="py-3.5 px-3">Standard Perks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">NHS Registered Nurse (Band 5)</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-teal-50 text-teal-800 font-bold text-[10px]">Health &amp; Care</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£28,407 – £34,581</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£2,367 – £2,881</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹2.60L – ₹3.16L</td>
                    <td className="py-3 px-3 text-slate-500">100% IHS exempt + NHS pension + shift unsocial pay</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">NHS Senior Staff Nurse (Band 6)</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-teal-50 text-teal-800 font-bold text-[10px]">Health &amp; Care</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£35,392 – £42,618</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£2,949 – £3,551</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹3.24L – ₹3.90L</td>
                    <td className="py-3 px-3 text-slate-500">IHS exemption + enhanced overtime (1.5x)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Cloud Solutions &amp; DevOps Engineer</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">Skilled Worker</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£55,000 – £85,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£4,583 – £7,083</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹5.04L – ₹7.79L</td>
                    <td className="py-3 px-3 text-slate-500">Hybrid work + private health cover + stock options</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Full-Stack Software Developer</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">Skilled Worker</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£48,000 – £70,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£4,000 – £5,833</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹4.40L – ₹6.41L</td>
                    <td className="py-3 px-3 text-slate-500">Performance bonus + workplace pension auto-match</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Civil &amp; Structural Engineer</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">ISL / Skilled</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£40,000 – £62,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£3,333 – £5,166</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹3.66L – ₹5.68L</td>
                    <td className="py-3 px-3 text-slate-500">Site allowance + ICE professional chartership support</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Industrial 6G Welder &amp; Pipefitter</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-bold text-[10px]">ISL Shortage</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£34,000 – £48,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£2,833 – £4,000</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹3.11L – ₹4.40L</td>
                    <td className="py-3 px-3 text-slate-500">Time-and-a-half overtime + offshore allowance</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">CNC Precision Machinist</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">Skilled Worker</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£35,000 – £46,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£2,916 – £3,833</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹3.20L – ₹4.21L</td>
                    <td className="py-3 px-3 text-slate-500">Shift premiums (20% night/weekend) + tool cover</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Commercial Electrician &amp; MEP Tech</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">Skilled Worker</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£36,000 – £50,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£3,000 – £4,166</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹3.30L – ₹4.58L</td>
                    <td className="py-3 px-3 text-slate-500">Company service van + fuel card + overtime pay</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Heavy Vehicle / Diesel Mechanic</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">Skilled Worker</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£35,000 – £48,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£2,916 – £4,000</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹3.20L – ₹4.40L</td>
                    <td className="py-3 px-3 text-slate-500">Workshop productivity bonuses + pension</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Executive Head Chef / Indian Specialty</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">Skilled Worker</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£38,700 – £52,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£3,225 – £4,333</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹3.54L – ₹4.76L</td>
                    <td className="py-3 px-3 text-slate-500">Tronc tips share + duty meals provided</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Senior Care Worker (CQC Provider)</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-teal-50 text-teal-800 font-bold text-[10px]">Health &amp; Care</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£23,800 – £29,500</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£1,983 – £2,458</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹2.18L – ₹2.70L</td>
                    <td className="py-3 px-3 text-slate-500">100% IHS exemption + subsidized room/board</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Chartered Accountant / Financial Analyst</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">Skilled Worker</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£45,000 – £75,000</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">£3,750 – £6,250</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹4.12L – ₹6.87L</td>
                    <td className="py-3 px-3 text-slate-500">City of London annual bonus + private pension</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Deep-Dive: HMRC Income Tax & National Insurance (PAYE Architecture) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <FaCoins className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    HMRC Income Tax &amp; National Insurance (PAYE): Calculating Your Exact Take-Home Pay
                  </h3>
                  <p className="text-xs text-slate-500">
                    Understanding British tax brackets, Class 1 National Insurance, workplace pension auto-enrolment, and net monthly calculations
                  </p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none text-slate-600 text-xs sm:text-sm leading-relaxed space-y-3">
                <p>
                  Every worker in the UK pays taxes through the <strong>Pay As You Earn (PAYE)</strong> system administered by HM Revenue and Customs (HMRC). Unlike complex end-of-year tax filing systems, your employer automatically calculates and deducts income tax, National Insurance, and pension contributions directly from each monthly payslip:
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 text-xs">
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    1. Tax-Free Personal Allowance
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    You pay <strong>0% tax on the first £12,570 of your annual income</strong>. Every worker in England, Wales, and Northern Ireland receives this statutory personal allowance, shielding the first ~₹13.8 Lakhs INR of earnings from any income tax.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-teal-500" />
                    2. HMRC Income Tax Brackets
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Earnings between £12,571 and £50,270 are taxed at the <strong>Basic Rate of 20%</strong>. Earnings from £50,271 to £125,140 are taxed at the <strong>Higher Rate of 40%</strong>. Income above £125,140 is taxed at the Additional Rate of 45%. (Scotland applies 5 devolved Scottish income tax bands).
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    3. Class 1 National Insurance (NI)
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Employees pay <strong>8% National Insurance</strong> on earnings between the Primary Threshold (£1,048/month) and the Upper Earnings Limit (£4,189/month). On earnings exceeding £4,189/month, the NI rate drops down to <strong>just 2%</strong>. NI funds state pensions and statutory maternity/sick pay.
                  </p>
                </div>
              </div>

              {/* Real Paycheck Comparison Table */}
              <div className="rounded-xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-100 px-4 py-2.5 font-bold text-slate-900 text-xs flex justify-between items-center">
                  <span>Real-World Paycheck Breakdown: £42,000 GBP Gross Salary (~₹46.2 Lakhs INR)</span>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">UK Standard PAYE Model</span>
                </div>
                <div className="divide-y divide-slate-100 text-xs">
                  <div className="grid grid-cols-3 px-4 py-2 bg-slate-50 font-bold text-slate-600 text-[11px] uppercase">
                    <div>Salary Component / Statutory Deduction</div>
                    <div>Annual Figure (GBP)</div>
                    <div>Monthly Paycheck (GBP &amp; INR)</div>
                  </div>
                  <div className="grid grid-cols-3 px-4 py-2.5 text-slate-700">
                    <div className="font-semibold text-slate-900">Gross Annual Base Salary</div>
                    <div className="font-bold text-slate-900">£42,000 / yr</div>
                    <div className="font-bold text-slate-900">£3,500 / mo (~₹3,85,000 INR)</div>
                  </div>
                  <div className="grid grid-cols-3 px-4 py-2.5 text-slate-700">
                    <div>Tax-Free Personal Allowance (£12,570 shielded)</div>
                    <div className="text-emerald-700 font-medium">£12,570 / yr (0% Tax)</div>
                    <div className="text-emerald-700 font-medium">£1,047.50 / mo Tax-Free</div>
                  </div>
                  <div className="grid grid-cols-3 px-4 py-2.5 text-slate-700">
                    <div>HMRC Income Tax (20% on £29,430 taxable)</div>
                    <div className="text-red-600 font-medium">-£5,886 / yr</div>
                    <div className="text-red-600 font-medium">-£490.50 / mo (-₹53,955 INR)</div>
                  </div>
                  <div className="grid grid-cols-3 px-4 py-2.5 text-slate-700">
                    <div>Class 1 National Insurance (8% rate)</div>
                    <div className="text-red-600 font-medium">-£2,354 / yr</div>
                    <div className="text-red-600 font-medium">-£196.17 / mo (-₹21,578 INR)</div>
                  </div>
                  <div className="grid grid-cols-3 px-4 py-2.5 text-slate-700">
                    <div>Workplace Pension Auto-Enrolment (5% employee deferral)</div>
                    <div className="text-blue-600 font-medium">-£1,725 / yr (Invested)</div>
                    <div className="text-blue-600 font-medium">-£143.75 / mo (+ £86.25 Employer match)</div>
                  </div>
                  <div className="grid grid-cols-3 px-4 py-3 bg-emerald-50/70 font-bold text-slate-900">
                    <div className="text-emerald-950 font-display">Net Monthly Take-Home (Cash in Hand)</div>
                    <div className="text-emerald-800 text-sm">£32,035 / yr</div>
                    <div className="text-emerald-800 text-sm">£2,669.58 / mo (~₹2,93,650 INR/mo)</div>
                  </div>
                </div>
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
              The Complete 6-Stage UK Work Visa Pipeline (India to Landing)
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every UK Skilled Worker placement follows a precise statutory protocol governed by Home Office immigration rules. Below is the operational workflow managed end-to-end by WorkWise Visa:
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
                <h3 className="font-bold text-slate-900 text-base mb-2">Job Offer &amp; Sponsor Licence Audit</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Secure a bona fide employment contract with a verified British corporate entity or NHS Trust listed on the Home Office Register of Licensed Sponsors, matching RQF Level 3+ skill codes.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    02
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Defined CoS
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Certificate of Sponsorship Allocation</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The employer requests a Defined CoS (DCoS) through the Home Office SMS portal. Once approved (within 24–72 hours), the unique 11-digit alphanumeric CoS reference is assigned to the candidate.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    03
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Medical &amp; SELT
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">TB Screening &amp; English Verification</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Undergo compulsory chest X-ray screening at an IOM-accredited clinic in India to obtain your TB Certificate, and provide your CEFR B1 English SELT (IELTS for UKVI or PTE Academic UKVI).
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    04
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Online Filing
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">GOV.UK Submission &amp; IHS Payment</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Complete the online application on GOV.UK, upload supporting documents, pay the Home Office application fee and Immigration Health Surcharge (IHS, if not Health &amp; Care exempt).
                </p>
              </div>

              {/* Step 5 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    05
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    VFS Biometrics
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">VFS Global Appointment &amp; Biometrics</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Attend your biometric enrollment (ten-digit digital fingerprint scan and facial photograph) at a VFS Global center in New Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Kolkata, or Ahmedabad.
                </p>
              </div>

              {/* Step 6 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    06
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Landing &amp; eVisa
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">UK Arrival, NI Number &amp; Digital eVisa</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Land in the UK on your 90-day vignette, access your digital eVisa through your UKVI account, register with your local GP surgery, and apply for your National Insurance (NI) Number.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 6: Home Office Financial Requirements & Statutory Fee Architecture ── */}
          <section id="statutory-fees" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaCoins className="w-3.5 h-3.5 text-emerald-600" />
              Section 6: Statutory Home Office Fees &amp; Financial Maintenance
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Home Office Fee Structure, Immigration Health Surcharge (IHS) &amp; Maintenance Funds
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Transparency regarding government fees is crucial to avoiding agency overcharging and financial fraud. Below is the exact statutory fee breakdown enforced by UK Visas and Immigration (UKVI):
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 text-xs">
              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  Visa Application Fees
                </span>
                <h4 className="font-bold text-slate-900 text-sm">Home Office Filing Fees</h4>
                <div className="space-y-1.5 text-slate-600">
                  <div className="flex justify-between border-b border-slate-100 pb-1">
                    <span>Skilled Worker (Up to 3 Yrs):</span>
                    <strong className="text-slate-900">£719</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1">
                    <span>Skilled Worker (More than 3 Yrs):</span>
                    <strong className="text-slate-900">£1,420</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1">
                    <span>Health &amp; Care (Up to 3 Yrs):</span>
                    <strong className="text-emerald-700">£309 (Discounted)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Health &amp; Care (Over 3 Yrs):</span>
                    <strong className="text-emerald-700">£604 (Discounted)</strong>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                  NHS Health Surcharge
                </span>
                <h4 className="font-bold text-slate-900 text-sm">Immigration Health Surcharge (IHS)</h4>
                <div className="space-y-1.5 text-slate-600">
                  <div className="flex justify-between border-b border-slate-100 pb-1">
                    <span>Standard Adults (Per Year):</span>
                    <strong className="text-red-600 font-bold">£1,035 / yr</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1">
                    <span>Children Under 18 (Per Year):</span>
                    <strong className="text-slate-900">£776 / yr</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1">
                    <span>5-Year Total (Adult):</span>
                    <strong className="text-red-600 font-bold">£5,175 upfront</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Health &amp; Care Workers:</span>
                    <strong className="text-emerald-700 font-bold">100% FREE (£0 Exempt)</strong>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                  Maintenance Funds
                </span>
                <h4 className="font-bold text-slate-900 text-sm">Financial Maintenance (§ 28-Day Rule)</h4>
                <div className="space-y-1.5 text-slate-600">
                  <div className="flex justify-between border-b border-slate-100 pb-1">
                    <span>Main Applicant Balance:</span>
                    <strong className="text-slate-900">£1,270</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1">
                    <span>Dependent Spouse Balance:</span>
                    <strong className="text-slate-900">£285</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1">
                    <span>First Child Balance:</span>
                    <strong className="text-slate-900">£315 (£200 each add.)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Employer Certification:</span>
                    <strong className="text-emerald-700">Can certify maintenance</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-slate-900 text-white p-5 space-y-2 text-xs">
              <div className="font-bold text-emerald-400 flex items-center gap-2">
                <FaShieldHalved className="w-4 h-4 text-emerald-400" />
                Employer Certification of Maintenance (CoS Box Check):
              </div>
              <p className="text-slate-300 leading-relaxed">
                If your sponsoring UK employer ticks the <strong>&quot;Sponsor certifies maintenance&quot;</strong> box on your Certificate of Sponsorship (available to all A-rated sponsors), you do not need to provide 28-day personal bank statements showing £1,270. The employer legally guarantees to maintain and accommodate you up to £1,270 during your first month of employment if required.
              </p>
            </div>
          </section>

          {/* ── Section 7: Spousal Work Rights & Dependent Education ── */}
          <section id="spousal-rights" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaGraduationCap className="w-3.5 h-3.5 text-emerald-600" />
              Section 7: Family Accompaniment, Spousal Employment &amp; Schools
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Spousal Open Employment &amp; Free State Education for Dependent Children
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                The United Kingdom provides extensive family rights for skilled immigrants, enabling family cohesion and dual-earner household prosperity:
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  Spousal Work Rights
                </span>
                <h3 className="font-bold text-slate-900 text-lg mt-3 mb-2">Unrestricted Open Employment Authorization</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Dependent spouses of Skilled Worker visa holders receive open, unrestricted work rights. They are legally entitled to work for any employer in the UK, operate as a self-employed contractor, or establish a registered British limited company without needing their own independent Certificate of Sponsorship.
                </p>
                <div className="rounded-lg bg-slate-50 p-3 text-[11px] text-slate-600 border border-slate-100">
                  <strong className="text-slate-900 block mb-0.5">March 2024 Care Worker Restriction Update:</strong>
                  Foreign care workers and senior care workers sponsored under SOC codes 6145 and 6146 cannot bring dependents to the UK. However, registered nurses, doctors, allied health staff, and standard skilled workers retain full dependent rights.
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                  Children&apos;s Rights &amp; Schooling
                </span>
                <h3 className="font-bold text-slate-900 text-lg mt-3 mb-2">100% Free State Primary &amp; Secondary Education</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Dependent children aged 4 to 18 are entitled to free, state-funded primary and secondary school education at any British government school in your local council borough. The British National Curriculum provides world-renowned academic foundations, STEM laboratories, and extracurricular development.
                </p>
                <div className="rounded-lg bg-slate-50 p-3 text-[11px] text-slate-600 border border-slate-100">
                  <strong className="text-slate-900 block mb-0.5">Higher Education &amp; University Fees:</strong>
                  Children who reside in the UK with legal status for at least 3 years before beginning their university degree become eligible for domestic &quot;Home Fee&quot; status (capped at £9,250/yr), saving tens of thousands of pounds compared to international student rates.
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 8: NHS Healthcare & Workplace Pensions ── */}
          <section id="healthcare-pension" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaHospital className="w-3.5 h-3.5 text-emerald-600" />
              Section 8: The National Health Service (NHS) &amp; Workplace Pensions
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Access to Free NHS Healthcare &amp; Statutory Workplace Pension Auto-Enrolment
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                The United Kingdom provides one of the world&apos;s most comprehensive social safety nets for foreign skilled workers and their families:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong>Comprehensive NHS Access:</strong> Upon arrival in the UK and registration with a local General Practitioner (GP surgery), skilled workers and their dependents receive 100% free GP consultations, emergency care (A&amp;E), specialist referrals, hospital operations, maternity care, and pediatric medicine without hospital bills.
                </li>
                <li>
                  <strong>Statutory Workplace Pension Auto-Enrolment:</strong> Under the Pensions Act 2008, all UK employers must automatically enrol qualifying employees aged 22+ into an accredited workplace pension scheme (such as NEST, People&apos;s Pension, or Aviva). By law, the employer contributes a minimum of <strong>3% of qualifying earnings</strong> while the employee contributes 5%, building compound retirement wealth that can be drawn down upon retirement or transferred under HMRC QROPS rules.
                </li>
                <li>
                  <strong>Statutory Sick Pay (SSP) &amp; Maternity/Paternity Leave:</strong> Workers unable to work due to illness are entitled to Statutory Sick Pay. Expectant mothers receive up to 52 weeks of Statutory Maternity Leave with 39 weeks of Statutory Maternity Pay (SMP), while fathers receive 2 weeks of paid paternity leave.
                </li>
              </ul>
            </div>
          </section>

          {/* ── Section 9: Regional Living Costs & Net Savings Math ── */}
          <section id="living-costs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaHouseUser className="w-3.5 h-3.5 text-emerald-600" />
              Section 9: Regional Living Costs, Council Tax &amp; Net INR Savings Math
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Cost of Living Across the UK: London Metropolitan Hub vs Regional Innovation Centers
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Living costs in the United Kingdom vary substantially based on geography. While Greater London features premier salaries and vibrant multicultural hubs, regional cities such as Manchester, Birmingham, Leeds, Glasgow, and Newcastle offer 40% to 55% lower housing rents, enabling vastly superior net monthly family savings:
            </p>

            {/* Comparative Table: London vs Regional UK */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-display text-[11px] sm:text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Expense Category</th>
                    <th className="py-3 px-3">Greater London (Zones 2–4)</th>
                    <th className="py-3 px-3">Regional UK (Manchester / Leeds / Birmingham)</th>
                    <th className="py-3 px-3">Practical Budgeting Insights</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">1-Bedroom Apartment Rent</td>
                    <td className="py-3 px-3 text-amber-700 font-semibold">£1,650 – £2,300 / mo</td>
                    <td className="py-3 px-3 text-emerald-700 font-semibold">£800 – £1,150 / mo</td>
                    <td className="py-3 px-3 text-slate-500">Rightmove and Zoopla portals; suburban links via train/tram</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">Council Tax (Band A–C)</td>
                    <td className="py-3 px-3 font-semibold">£130 – £190 / mo</td>
                    <td className="py-3 px-3 font-semibold">£110 – £150 / mo</td>
                    <td className="py-3 px-3 text-slate-500">25% single-person discount available if living alone</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">Utilities (Gas, Electric &amp; Water)</td>
                    <td className="py-3 px-3 font-semibold">£160 – £230 / mo</td>
                    <td className="py-3 px-3 font-semibold">£140 – £190 / mo</td>
                    <td className="py-3 px-3 text-slate-500">Regulated under Ofgem energy price cap standards</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">Monthly Groceries &amp; Food</td>
                    <td className="py-3 px-3 font-semibold">£280 – £400 / mo</td>
                    <td className="py-3 px-3 font-semibold">£220 – £320 / mo</td>
                    <td className="py-3 px-3 text-slate-500">Tesco, Aldi, Lidl, Asda, plus Indian Asian grocers</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">Public Transport (Train/Bus/Tube)</td>
                    <td className="py-3 px-3 font-semibold">£160 – £240 / mo</td>
                    <td className="py-3 px-3 font-semibold">£70 – £110 / mo</td>
                    <td className="py-3 px-3 text-slate-500">Oyster/contactless card in London; city bus passes in regions</td>
                  </tr>
                  <tr className="bg-emerald-50/60 font-bold">
                    <td className="py-3 px-4 text-emerald-950">Net Monthly Savings Potential</td>
                    <td className="py-3 px-3 text-emerald-800">£700 – £1,400 GBP (₹77k–₹1.54L)</td>
                    <td className="py-3 px-3 text-emerald-800">£1,200 – £1,900+ GBP (₹1.32L–₹2.09L)</td>
                    <td className="py-3 px-3 text-emerald-800">Regional hubs allow 50% faster family wealth accumulation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 10: Settlement & Citizenship ── */}
          <section id="ilr-citizenship" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaGraduationCap className="w-3.5 h-3.5 text-emerald-600" />
              Section 10: Permanent Settlement (ILR) &amp; British Citizenship
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Indefinite Leave to Remain (ILR) at Year 5 &amp; Naturalisation as a British Citizen
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                The paramount long-term advantage of the UK Skilled Worker and Health &amp; Care routes is the statutory right to achieve permanent settlement (Indefinite Leave to Remain - ILR) without arbitrary lottery quotas or decades-long visa backlogs:
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  Step 1: Year 5 Settlement
                </span>
                <h3 className="font-bold text-slate-900 text-base mt-3 mb-2">Indefinite Leave to Remain (ILR)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Attained after 5 continuous years on a Skilled Worker or Health &amp; Care visa. Requires continuous lawful employment, passing the Life in the UK Test, CEFR B1 English, and observing the statutory 180-day absence ceiling in any 12-month period.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                  Step 2: 12 Months Post-ILR
                </span>
                <h3 className="font-bold text-slate-900 text-base mt-3 mb-2">British Naturalisation</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  After holding ILR for 12 continuous months (or immediately upon ILR approval if legally married to a British citizen), you can lodge your application for naturalization as a British citizen under the British Nationality Act 1981.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                  Step 3: Citizenship Ceremony
                </span>
                <h3 className="font-bold text-slate-900 text-base mt-3 mb-2">British Passport &amp; OCI Card</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Attend your formal citizenship pledge ceremony at your local council, receive your Certificate of Naturalisation, apply for your British passport, and obtain an Overseas Citizen of India (OCI) Card for lifelong visa-free travel to India.
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
              United Kingdom Work Visa Scam Warnings: Recognizing Fraudulent Job Offers &amp; Fake CoS
            </h2>

            <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <FaTriangleExclamation className="w-6 h-6 text-red-600 shrink-0" />
                <h3 className="font-bold text-red-950 text-base sm:text-lg">
                  Critical Warnings Issued by the Home Office and the British High Commission New Delhi:
                </h3>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <FaXmark className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Buying or Paying for a Certificate of Sponsorship (CoS):</strong> Under statutory British law and Home Office Sponsor Guidance, employers and recruitment agents are strictly prohibited from charging candidates for a Certificate of Sponsorship. Any agent demanding ₹5 Lakhs to ₹15 Lakhs for a &quot;UK Work Visa CoS&quot; is operating an illegal scam resulting in visa refusal and a 10-year ban under General Grounds for Refusal.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaXmark className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Visitor / Tourist (Standard Visitor Visa) to Work Conversions:</strong> You cannot convert a tourist or visitor visa into a Skilled Worker Visa from inside the UK. Sponsoring jobs must be initiated via an official Defined CoS while lawfully residing in India or through legitimate in-country switching from an authorized residence visa (such as Graduate or Student).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaXmark className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Bogus Care Home Agencies &amp; Shell Companies:</strong> Scammers frequently forge fake CoS letters bearing logos of care homes whose sponsor licences were revoked by the Home Office. Always verify that the employer actively holds an &quot;A-rating&quot; on the official Home Office Register of Licensed Sponsors on GOV.UK.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaXmark className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Wire Requests for &quot;Security Deposits&quot;:</strong> Legitimate UK corporate sponsors never ask overseas applicants to transfer recruitment fee deposits via UPI or personal bank accounts. All genuine Home Office visa and IHS payments are made exclusively through the official <code>gov.uk</code> payment gateway.
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
              Direct, authoritative answers addressing the most frequently searched queries by Indian candidates regarding United Kingdom employment immigration:
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
                WorkWise Visa UK Strategic Deployment Desk
              </span>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white leading-tight">
                Ready to Secure Authorized UK Employment Sponsorship?
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect directly with our senior British immigration consultants. We evaluate your resume, match you with verified Home Office A-rated licensed sponsors, audit Defined CoS compliance, guide your IOM TB screening, and manage your VFS visa stamping with complete transparency.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20want%20to%20apply%20for%20a%20UK%20work%20visa%20and%20job%20placement!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 transition-all cursor-pointer"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 81301 61603)</span>
                </a>

                <a
                  href="mailto:workwisevisa@gmail.com?subject=UK%20Work%20Visa%20Application%20Inquiry"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all backdrop-blur-md"
                >
                  <FaEnvelope className="w-4 h-4 text-emerald-300" />
                  <span>Email Resume for UK Review</span>
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
