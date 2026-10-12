import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ConsultationForm from "@/components/ConsultationForm";
import {
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaRoute,
  FaTrainSubway,
  FaPlaneDeparture,
  FaShieldHalved,
  FaCheck,
  FaBriefcase,
  FaAward,
  FaArrowRight,
  FaStar,
  FaCircleQuestion,
  FaCarSide,
  FaCircleCheck,
  FaTriangleExclamation,
  FaHospital,
  FaPassport,
  FaFileContract,
  FaHandHoldingDollar,
  FaScaleBalanced,
  FaBookOpen,
  FaBuildingColumns,
  FaSuitcaseMedical,
  FaUserShield,
  FaBuildingUser,
  FaMoneyBillTrendUp,
  FaGlobe,
  FaFileCircleCheck,
  FaIdCard,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

// ============================================================================
// IDEAL SEO METADATA (Google SERP Character Limit Optimized)
// Title: 56 chars (Ideal range: 50-60 chars)
// Description: 155 chars (Ideal range: 150-160 chars)
// ============================================================================
export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Work Visa Consultancy in Lucknow | WorkWise Visa UP",
  description:
    "Top work visa consultancy in Lucknow, UP. Verified Gulf & Europe employment, POE Kendriya Bhawan clearance, GAMCA medical, Takamol & trade skill testing.",
  keywords: [
    "work visa consultancy in lucknow",
    "visa consultancy in lucknow",
    "gulf job consultancy in lucknow",
    "overseas recruitment agency lucknow",
    "poe lucknow emigration clearance",
    "kendriya bhawan aliganj visa agency",
    "saudi work visa lucknow",
    "dubai work permit lucknow",
    "europe work visa consultant lucknow",
    "gamca medical centre lucknow",
    "takamol test center lucknow",
    "workwise visa lucknow",
    "poland work permit lucknow up",
    "romania work visa agency lucknow",
  ],
  alternates: {
    canonical: "https://www.workwisevisa.com/locations/lucknow",
  },
  openGraph: {
    title: "Work Visa Consultancy in Lucknow | WorkWise Visa UP",
    description:
      "Premier overseas job placement and work visa assistance for Lucknow and Central UP candidates. 100% verified employer contracts for Saudi Arabia, UAE, Qatar, and Europe.",
    url: "https://www.workwisevisa.com/locations/lucknow",
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/workwise_logo.png",
        width: 1200,
        height: 630,
        alt: "WorkWise Visa Overseas Career Guidance for Lucknow Candidates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Visa Consultancy in Lucknow | WorkWise Visa UP",
    description:
      "Trusted Gulf & Europe work visa consultancy in Lucknow. Verified company demands, Takamol trade tests, GAMCA medical & direct eMigrate POE clearance.",
    images: ["/images/workwise_logo.png"],
  },
};

// ============================================================================
// RICH STRUCTURED DATA (Schema.org) FOR LOCAL BUSINESS + DETAILED FAQS
// ============================================================================
const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EmploymentAgency", "LocalBusiness"],
      "@id": "https://www.workwisevisa.com/locations/lucknow#localbusiness",
      name: "WorkWise Visa - Lucknow & Central UP Candidate Assistance Desk",
      legalName: "Europass Immigration Pvt Ltd",
      url: "https://www.workwisevisa.com/locations/lucknow",
      logo: "https://www.workwisevisa.com/images/workwise_logo.png",
      image: "https://www.workwisevisa.com/images/workwise_logo.png",
      description:
        "Dedicated overseas employment assistance and work visa consultancy for candidates from Lucknow, Barabanki, Unnao, Sitapur, Rae Bareli, and Central Uttar Pradesh. Specializing in verified GCC job demands, Saudi Vision 2030 projects, European skilled migration, Takamol SVP testing, GAMCA medical guidance, and official POE Kendriya Bhawan Aliganj clearance.",
      telephone: "+918130161603",
      email: "workwisevisa@gmail.com",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        postalCode: "226024",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.8467,
        longitude: 80.9462,
      },
      areaServed: [
        { "@type": "City", name: "Lucknow" },
        { "@type": "AdministrativeArea", name: "Barabanki" },
        { "@type": "AdministrativeArea", name: "Unnao" },
        { "@type": "AdministrativeArea", name: "Sitapur" },
        { "@type": "AdministrativeArea", name: "Rae Bareli" },
        { "@type": "AdministrativeArea", name: "Hardoi" },
        { "@type": "AdministrativeArea", name: "Lakhimpur Kheri" },
        { "@type": "AdministrativeArea", name: "Ayodhya" },
        { "@type": "AdministrativeArea", name: "Kanpur Nagar" },
        { "@type": "State", name: "Uttar Pradesh" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.workwisevisa.com/locations/lucknow#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.workwisevisa.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: "https://www.workwisevisa.com/locations",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Lucknow, Uttar Pradesh",
          item: "https://www.workwisevisa.com/locations/lucknow",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.workwisevisa.com/locations/lucknow#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is the Office of Protector of Emigrants (POE) located in Lucknow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The POE Lucknow office is situated at Hall No. 3, Kendriya Bhawan, Sector H, Aliganj, Lucknow, Uttar Pradesh 226024. It oversees statutory emigration clearance for ECR passport holders across Uttar Pradesh.",
          },
        },
        {
          "@type": "Question",
          name: "How can candidates from Lucknow verify if a Gulf work visa is genuine or fake?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Verify the electronic visa directly on official host-country portals. For Saudi Arabia, verify on Qiwa (qiwa.sa) or Muqeem (muqeem.sa). For UAE, check through the MoHRE or GDRFA portals. For Qatar, verify on the Ministry of Interior (portal.moi.gov.qa). Never rely on unauthorized photocopies from street brokers around Charbagh or Aminabad.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between ECR and ECNR passport clearance for Lucknow candidates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Candidates who have passed Class 10 (matriculation) possess ECNR status and can travel directly without POE clearance. Candidates with ECR passports traveling for employment to 18 notified nations must obtain Emigration Clearance through MEA eMigrate via a registered Recruiting Agent and POE Lucknow.",
          },
        },
        {
          "@type": "Question",
          name: "Where do Lucknow candidates complete their GAMCA / Wafid medical tests?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wafid appointment slips must be generated online exclusively at wafid.com ($10 USD fee). The portal randomly assigns an accredited clinic in Lucknow (predominantly in Aliganj, Hazratganj, or Kaiserbagh).",
          },
        },
        {
          "@type": "Question",
          name: "What is the Takamol Skill Verification Program (SVP) for Saudi work visas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Takamol SVP is a mandatory skill assessment mandated by the Saudi Ministry of Human Resources. Electricians, plumbers, welders, and HVAC technicians in Lucknow must clear a computer theory test and practical bench test at an accredited center before visa stamping.",
          },
        },
        {
          "@type": "Question",
          name: "Can candidates from Lucknow apply for European work permits in Poland, Romania, and Croatia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. WorkWise Visa processes verified legal work permits for European Union nations including Poland (Voivodeship permits), Romania (Aviz de Muncă), and Croatia (MUP residence and work permits) with standard EU minimum wages and labor protections.",
          },
        },
        {
          "@type": "Question",
          name: "What social security benefits are covered under Pravasi Bharatiya Bima Yojana (PBBY)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PBBY is a mandatory insurance scheme under the MEA for overseas Indian workers. It provides ₹10.00 Lakh cover for accidental death or permanent disability, ₹1.00 Lakh emergency hospitalization cover, repatriation airfare, and ₹45,000 legal defense support.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Wage Protection System (WPS) in Saudi Arabia and the UAE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WPS requires employers to transfer monthly wages directly into workers' bank accounts monitored by the central banks of Saudi Arabia and the UAE. Firms failing to pay wages face immediate government portal suspension and heavy financial penalties.",
          },
        },
        {
          "@type": "Question",
          name: "What is an 'Azad Visa' and why should candidates avoid it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "'Azad Visa' (Free Visa) is an illegal street term. Under Gulf labor laws, every work visa must be tied to a registered corporate sponsor. Working on an 'Azad visa' means working illegally without legal contract, healthcare, or insurance, risking immediate arrest and deportation.",
          },
        },
        {
          "@type": "Question",
          name: "How much time does it take to process a Gulf work visa from Lucknow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A verified GCC employment visa takes 25 to 45 business days, including electronic contract generation on Qiwa/MoHRE, GAMCA medical examination, Takamol testing, VFS biometric stamping, and POE clearance.",
          },
        },
      ],
    },
  ],
};

export default function LucknowLocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      <Navbar />

      <main className="w-full">
        {/* ==================================================================== */}
        {/* SECTION 1: HERO (No top gap, zero left CTAs, high-trust right card) */}
        {/* ==================================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white pt-24 sm:pt-28 pb-16 sm:pb-20 border-b border-emerald-950/40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Top Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/locations" className="hover:text-emerald-400 transition-colors">
                Locations
              </Link>
              <span>/</span>
              <span className="text-emerald-300 font-medium">Lucknow, Uttar Pradesh</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Heading & Core Value Proposition */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 mb-6 backdrop-blur-md">
                  <FaShieldHalved className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Government-Approved Overseas Employment Consultancy • Lucknow &amp; Central UP</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  Work Visa &amp; Overseas Employment Consultancy for{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    Lucknow, UP
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  As the administrative and demographic nexus of Central Uttar Pradesh, Lucknow anchors
                  skilled technicians, mechanical engineers, industrial artisans, healthcare workers, and
                  hospitality professionals across Barabanki, Unnao, Sitapur, and Rae Bareli. WorkWise Visa
                  provides candidates with complete institutional security: verified direct employer visas,
                  transparent salary packages, Takamol trade assessments, GAMCA medical facilitation, and
                  100% legal POE Kendriya Bhawan Aliganj emigration clearances.
                </p>

                {/* 4 Trust Metric Badges (4 Columns) */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-800/80 pt-6">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-emerald-400">100%</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">eMigrate POE Compliant</div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-white">₹10 Lakh</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Mandatory PBBY Cover</div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-emerald-400">Direct</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Qiwa &amp; MoHRE Contracts</div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-white">Zero</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Sub-Agent Exploitation</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Universal Fast-Track Career Desk Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-slate-700/80 bg-gradient-to-b from-slate-800/90 to-slate-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        WorkWise Candidate Desk
                      </span>
                      <h2 className="text-lg font-bold text-white">
                        Lucknow Overseas Career Desk
                      </h2>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                      <FaPassport className="text-xl" />
                    </div>
                  </div>

                  <div className="mt-5 space-y-3.5 text-sm">
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Active Destinations:</strong>{" "}
                        Saudi Arabia (Vision 2030), UAE (Dubai &amp; Abu Dhabi), Qatar, Oman, Poland, Romania &amp; Croatia.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Monthly Salary Bands:</strong>{" "}
                        ₹45,000 to ₹1,95,000/mo with free corporate accommodation, transportation, and healthcare coverage.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Processing Turnaround:</strong>{" "}
                        25 to 45 Days for GCC visas; 90 to 120 Days for European National Type-D work permits.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Worker Protection:</strong>{" "}
                        Digital contracts registered on Qiwa/MoHRE portals with direct bank salary payment protection (WPS).
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-700 pt-5">
                    <a
                      href="#consultation"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all hover:from-emerald-500 hover:to-teal-500"
                    >
                      Book Free Profile Evaluation in Lucknow
                      <FaArrowRight className="text-xs" />
                    </a>
                    <p className="mt-2 text-center text-xs text-slate-400">
                      Instant response within 2 hours • Zero registration fees
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 2: EXECUTIVE SUMMARY & LUCKNOW'S OVERSEAS MIGRATION REALITY   */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                In-Depth Regional Analysis &amp; Workforce Demographics
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Why Lucknow is the Administrative &amp; Technical Engine of Central UP&apos;s Global Workforce
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 text-base leading-relaxed text-slate-600 lg:grid-cols-2">
              <div className="space-y-5">
                <p>
                  Lucknow district represents not only the administrative capital of Uttar Pradesh but also
                  the primary human resource gateway for Central UP and the Awadh belt, commanding economic
                  links across Barabanki, Unnao, Sitapur, Hardoi, Rae Bareli, and Kanpur Nagar. While eastern
                  corridors predominantly supply civil construction labor, the Lucknow metropolitan region
                  produces a distinct, highly diversified overseas workforce: certified industrial electricians,
                  HVAC technicians, BMS automation specialists, certified 6G pipe welders, nursing and paramedical
                  professionals, and culinary chefs.
                </p>
                <p>
                  Technical training institutes across Lucknow and adjoining districts—including Government ITI
                  Aliganj, Government Polytechnic Lucknow, Central Institute of Plastics Engineering &amp;
                  Technology (CIPET), Modern Coach Factory (MCF) technical centers in Rae Bareli, and prominent
                  nursing colleges—feed international mega-developments across Riyadh, Dubai, Doha, and European
                  industrial zones.
                </p>
              </div>

              <div className="space-y-5">
                <p>
                  However, aspiring candidates across Hazratganj, Charbagh, Kaiserbagh, and Aminabad have long
                  faced severe risks from unauthorized sub-agents. These illicit intermediaries operate around
                  railway hubs and transport terminals, soliciting unlawful sums between ₹1,20,000 and ₹1,80,000
                  for fictitious &ldquo;Azad visas&rdquo; or short-term visit visas deceptively claimed to convert
                  upon entry.
                </p>
                <p>
                  WorkWise Visa eliminates these exploitative middleman rings. By directly aligning candidates
                  with authenticated corporate principal employers—such as premier EPC contracting firms in
                  Saudi Arabia (NEOM, Red Sea Global, Qiddiya) and licensed industrial sponsors in Poland,
                  Romania, and Croatia—we ensure strict adherence to the <strong>Emigration Act, 1983</strong>.
                  Every worker travels on a verifiable electronic visa with full government contract registration.
                </p>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4">
                  <p className="text-sm font-semibold text-emerald-950">
                    💡 Authoritative Advisory for Lucknow Job Seekers:
                  </p>
                  <p className="mt-1 text-xs text-emerald-800">
                    Never surrender your original passport or hand over cash to unauthorized intermediaries
                    without checking their statutory Recruiting Agent (RA) registration on the{" "}
                    <a
                      href="https://emigrate.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline hover:text-emerald-950"
                    >
                      MEA eMigrate portal
                    </a>
                    . Real corporate employers never issue visas via photocopied letters or unauthorized WhatsApp chats.
                  </p>
                </div>
              </div>
            </div>

            {/* Regional Industrial & Technical Cluster Matrix (4 Balanced Cards) */}
            <div className="mt-12">
              <h3 className="text-base font-bold text-slate-900 mb-4">
                Strategic Feeder Clusters Across Lucknow &amp; Central UP
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-xs sm:text-sm">
                <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm hover:border-emerald-500 hover:bg-white transition-all">
                  <div className="font-bold text-slate-900 text-sm text-emerald-800">
                    Lucknow Metropolitan Core
                  </div>
                  <p className="mt-2 text-slate-600 leading-relaxed text-xs">
                    Hazratganj, Aliganj, Gomti Nagar &amp; Charbagh technical hubs supplying certified HVAC
                    engineers, BMS operators, healthcare nurses (KGMU/SGPGI), and hospitality professionals.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm hover:border-emerald-500 hover:bg-white transition-all">
                  <div className="font-bold text-slate-900 text-sm text-emerald-800">
                    Barabanki Industrial Cluster
                  </div>
                  <p className="mt-2 text-slate-600 leading-relaxed text-xs">
                    Spinning mills, agro-industrial plants &amp; packaging hubs providing textile machine
                    operators, boiler attendants, and industrial electrical maintenance technicians.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm hover:border-emerald-500 hover:bg-white transition-all">
                  <div className="font-bold text-slate-900 text-sm text-emerald-800">
                    Unnao Chemical &amp; Leather Belt
                  </div>
                  <p className="mt-2 text-slate-600 leading-relaxed text-xs">
                    Chemical processing, export tanneries &amp; effluent treatment units providing skilled
                    ETP technicians, chemical handlers, quality controllers, and industrial material cutters.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm hover:border-emerald-500 hover:bg-white transition-all">
                  <div className="font-bold text-slate-900 text-sm text-emerald-800">
                    Rae Bareli &amp; Hardoi Corridor
                  </div>
                  <p className="mt-2 text-slate-600 leading-relaxed text-xs">
                    Modern Coach Factory (MCF) precision machinists, CNC lathe programmers, overhead crane
                    operators, and hydraulic mechanics deployed to European railway &amp; Gulf projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 3: POE LUCKNOW & THE EMIGRATION ACT 1983 (ECR VS ECNR)        */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Statutory Compliance &amp; Legal Framework
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Office of Protector of Emigrants (POE) Lucknow &amp; ECR Regulations
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Candidates from Lucknow benefit from having the statutory Office of the Protector of Emigrants
                located right within the city at Kendriya Bhawan, Aliganj.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 font-bold">
                    POE
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      POE Lucknow Nodal Authority
                    </h3>
                    <p className="text-xs text-slate-500">Hall No. 3, Kendriya Bhawan, Sector H, Aliganj, Lucknow 226024</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-sm text-slate-600 leading-relaxed">
                  <p>
                    Under the <strong>Emigration Act, 1983</strong>, the Office of the Protector of Emigrants
                    (POE) Lucknow functions directly under the Ministry of External Affairs (MEA), overseeing
                    safe, orderly, and legal emigration clearances for all 75 districts of Uttar Pradesh.
                  </p>
                  <p>
                    <strong>ECR (Emigration Check Required):</strong> Passports issued to citizens who have
                    not cleared 10th-grade matriculation. When traveling for employment to 18 notified ECR nations
                    (Saudi Arabia, UAE, Qatar, Oman, Kuwait, Bahrain, Malaysia, etc.), candidates MUST obtain
                    official Emigration Clearance via the eMigrate 2.0 system before airport boarding.
                  </p>
                  <p>
                    <strong>ECNR (Emigration Check Not Required):</strong> Candidates holding Class 10 pass
                    certificates, professional degrees, or income-tax assessee status travel without separate
                    POE clearance. However, WorkWise Visa ensures their digital contracts remain verified for
                    full consular protection.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FaScaleBalanced className="text-emerald-600" />
                  Mandatory eMigrate 2.0 Verification Benchmarks
                </h3>
                <div className="mt-6 space-y-3.5 text-xs sm:text-sm text-slate-600">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                    <strong className="text-slate-900 block">1. Foreign Employer (FE) Attestation:</strong>
                    The overseas employer must hold active registration with the Indian Embassy (Riyadh, Abu Dhabi,
                    Doha, Muscat) with verified quota demand on the eMigrate portal.
                  </div>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                    <strong className="text-slate-900 block">2. Minimum Referral Wages (MRW) Enforcement:</strong>
                    Contracts must strictly adhere to the government-mandated minimum monthly salary. Applications
                    below MRW standards are automatically rejected by POE Lucknow.
                  </div>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                    <strong className="text-slate-900 block">3. Direct Digital QR Clearance:</strong>
                    Approved clearances generate an authentic QR-coded certificate verified in real-time by Bureau
                    of Immigration officers at Chaudhary Charan Singh International Airport (Amausi) or IGI Delhi.
                  </div>
                </div>
              </div>
            </div>

            {/* PBBY Social Security Table */}
            <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="max-w-3xl">
                <h3 className="text-xl font-bold text-slate-900">
                  Pravasi Bharatiya Bima Yojana (PBBY) ₹10 Lakh Social Security Cover
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600">
                  Mandatory MEA insurance scheme bundled with every legal eMigrate contract processed through
                  WorkWise Visa:
                </p>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 text-slate-800 uppercase font-semibold">
                    <tr>
                      <th className="px-4 py-3">Benefit Category</th>
                      <th className="px-4 py-3">Coverage Limit</th>
                      <th className="px-4 py-3">Claim Terms &amp; Scope of Protection</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600">
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-semibold text-slate-900">Accidental Death Coverage</td>
                      <td className="px-4 py-3 font-bold text-emerald-600">₹10,00,000 (10 Lakh)</td>
                      <td className="px-4 py-3">Paid directly to the registered nominee if accidental death occurs on-site or during transit.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-semibold text-slate-900">Permanent Total Disability</td>
                      <td className="px-4 py-3 font-bold text-emerald-600">₹10,00,000 (10 Lakh)</td>
                      <td className="px-4 py-3">Comprehensive disability payout for 100% loss of limbs, eyesight, or vocational capacity.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-semibold text-slate-900">Emergency Medical Hospitalization</td>
                      <td className="px-4 py-3 font-bold text-emerald-600">₹1,00,000 (1 Lakh)</td>
                      <td className="px-4 py-3">Reimbursement of emergency in-patient hospital care expenses during overseas service.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-semibold text-slate-900">Mortal Remains Repatriation</td>
                      <td className="px-4 py-3 font-bold text-emerald-600">Full Airfare + ₹50,000</td>
                      <td className="px-4 py-3">Air cargo transport to Lucknow Amausi Airport plus escort accommodation allowance.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-semibold text-slate-900">Legal Defense Support</td>
                      <td className="px-4 py-3 font-bold text-emerald-600">₹45,000 Support Fund</td>
                      <td className="px-4 py-3">Legal advocacy assistance in dispute cases handled via Indian Embassy empanelled counsel.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 4: DESTINATION BLUEPRINTS (SAUDI, UAE, QATAR, EUROPE)        */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Target Employment Corridors
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Comprehensive Visa &amp; Work Regulations by Destination
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Detailed breakdowns of official labor laws, digital portals, salary protection mechanisms,
                and mandatory trade qualifications across Gulf and European corridors.
              </p>
            </div>

            <div className="mt-12 space-y-12">
              {/* Destination 1: Saudi Arabia */}
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                      Destination Focus #1
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      Kingdom of Saudi Arabia (KSA) Work Visa Process
                    </h3>
                  </div>
                  <Link
                    href="/countries/saudi-arabia"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-800 hover:underline"
                  >
                    View Complete Saudi Work Visa Guide <FaArrowRight />
                  </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3 text-sm text-slate-600">
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaBuildingUser className="text-emerald-600" />
                      Qiwa Digital Tripartite Contract
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Under Saudi Ministry of Human Resources rules, paper contracts hold zero legal validity.
                      Every candidate receives an authenticated digital contract on the{" "}
                      <a
                        href="https://qiwa.sa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 underline font-semibold"
                      >
                        Qiwa platform
                      </a>
                      . The contract specifies basic wage in Saudi Riyals (SAR), standard working hours (max 8 hours
                      + overtime per Article 98), paid vacation entitlements, and medical insurance grade.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaAward className="text-emerald-600" />
                      Takamol Skill Verification (SVP)
                    </h4>
                    <p className="text-xs leading-relaxed">
                      For 23 technical occupations (electricians, pipe fitters, SMAW/TIG welders, HVAC technicians,
                      and automotive mechanics), Takamol SVP certification is compulsory. Candidates from Lucknow
                      undergo a computer theory test and practical bench assessment at an accredited test center
                      before visa stamping.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaMoneyBillTrendUp className="text-emerald-600" />
                      Wage Protection System (WPS)
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Upon arrival in Saudi Arabia and issuance of the resident ID (Iqama), employers must provide
                      a digital payroll card (Al Rajhi, SNB, or Mada). Monthly payments are tracked in real-time
                      by the Saudi Central Bank (SAMA), guaranteeing salary transparency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Destination 2: UAE (Dubai & Abu Dhabi) */}
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800">
                      Destination Focus #2
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      United Arab Emirates (Dubai &amp; Abu Dhabi) Employment Visas
                    </h3>
                  </div>
                  <Link
                    href="/countries/uae"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-800 hover:underline"
                  >
                    View UAE Dubai Work Visa Details <FaArrowRight />
                  </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3 text-sm text-slate-600">
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaFileCircleCheck className="text-teal-600" />
                      MoHRE Standard 12-Page Contract
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Issued by the UAE Ministry of Human Resources and Emiratisation (
                      <a
                        href="https://www.mohre.gov.ae"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 underline font-semibold"
                      >
                        MoHRE
                      </a>
                      ). Before flying from India, the worker reviews and signs this exact contract, detailing
                      basic wage, accommodation allowance, medical coverage, and end-of-service gratuity.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaPassport className="text-teal-600" />
                      Entry Permit &amp; Residency Stamping
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Candidates travel on an official electronic Employment Entry Permit. Within 60 days of entry,
                      the corporate sponsor completes medical fitness screening, Emirates ID biometrics, and stamps
                      the 2-year renewable residency visa on the passport.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaHandHoldingDollar className="text-teal-600" />
                      WPS Banking Protection
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Under UAE Federal Labor Law No. 33 of 2021, all commercial employers must disburse monthly
                      wages via the UAE Wages Protection System directly into local bank or C3 payroll accounts,
                      with automatic alerts to the labor ministry if unpaid.
                    </p>
                  </div>
                </div>
              </div>

              {/* Destination 3: State of Qatar */}
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-800">
                      Destination Focus #3
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      State of Qatar Work Residence Permits &amp; QVC Biometrics
                    </h3>
                  </div>
                  <Link
                    href="/countries/qatar"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-800 hover:underline"
                  >
                    View Qatar Work Visa Guide <FaArrowRight />
                  </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3 text-sm text-slate-600">
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaHospital className="text-cyan-600" />
                      Qatar Visa Center (QVC) Protocol
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Qatar has streamlined offshore processing through Qatar Visa Centers (QVC). Candidates from
                      Lucknow complete biometric capture, medical examinations (chest X-ray, serology), and electronic
                      contract signing in India before their visa is granted.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaFileContract className="text-cyan-600" />
                      Ministry of Labour Authentication
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Under Qatar Law No. 21 of 2015, employment contracts are authenticated online by the Ministry
                      of Administrative Development, Labour and Social Affairs (MADLSA). The worker retains legal
                      ownership of their passport at all times.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaScaleBalanced className="text-cyan-600" />
                      Non-Discriminatory Minimum Wage
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Qatar enforces a statutory non-discriminatory basic minimum wage of 1,000 QAR/month plus 500
                      QAR for accommodation and 300 QAR for food allowance if not provided in-kind, protected by the
                      Qatar Central Bank Wage Protection System.
                    </p>
                  </div>
                </div>
              </div>

              {/* Destination 4: European Union (Poland, Romania, Croatia) */}
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                      Destination Focus #4
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      European Union Single Work Permits (Poland, Romania, Croatia)
                    </h3>
                  </div>
                  <Link
                    href="/jobs"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-800 hover:underline"
                  >
                    View European Job Vacancies <FaArrowRight />
                  </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3 text-sm text-slate-600">
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaGlobe className="text-blue-600" />
                      Government Provincial Permits
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Recruitment is anchored by official provincial labor permits: Voivodeship Type A Work Permits
                      in Poland, General Inspectorate for Immigration (IGI) Aviz de Muncă in Romania, and Ministry
                      of Interior (MUP) residence &amp; work permits in Croatia.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaIdCard className="text-blue-600" />
                      National Type-D Schengen Visas
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Upon permit issuance, candidates complete apostille degree verification and attend formal
                      visa interviews at VFS Global or the respective European embassy in New Delhi to obtain their
                      1-year multi-entry National Type-D visa.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaShieldHalved className="text-blue-600" />
                      EU Labor Protections &amp; TRC
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Workers enjoy standard European labor protections: strict 40-hour workweeks with overtime,
                      full state medical insurance, and the statutory right to apply for a Temporary Residence Card
                      (TRC / Karta Pobytu) allowing lawful long-term European residency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 5: GAMCA / WAFID MEDICAL EXAMINATION PROTOCOL IN DETAIL      */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Medical Clearance &amp; Biometrics
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                GAMCA (Wafid) Medical Centers &amp; VFS Tasheel in Lucknow
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                GCC nations mandate stringent clinical testing before visa issuance. Candidates from Lucknow
                and Central UP complete official Gulf Health Council (GHC) screenings right in the city.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FaHospital className="text-emerald-600" />
                  Wafid Online Appointment &amp; Testing Stages
                </h3>
                <div className="mt-6 space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                    <strong className="text-slate-900 block">Step 1: Official Portal Token Generation ($10 USD):</strong>
                    Candidates book directly at wafid.com. The centralized system randomly assigns an accredited
                    diagnostic lab in Lucknow (primarily located in Aliganj, Hazratganj, or Kaiserbagh).
                  </div>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                    <strong className="text-slate-900 block">Step 2: Comprehensive Clinical Screenings:</strong>
                    Digital Chest X-ray (pulmonary TB, fibrosis), Serological blood assays (HIV 1/2, Hepatitis B/C,
                    VDRL), Blood Sugar, Blood Pressure, Liver &amp; Kidney functions, and vision evaluation.
                  </div>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                    <strong className="text-slate-900 block">Step 3: Direct Cloud FIT Synchronization:</strong>
                    Medical results are uploaded directly to the Gulf Health Council cloud database within 48 to
                    72 hours, linking automatically with embassy visa stamping consoles.
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FaPassport className="text-emerald-600" />
                  VFS Tasheel &amp; Biometrics at Lucknow
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Saudi Arabia work visa stamping requires biometric collection. Lucknow candidates no longer need
                  to travel to New Delhi or Mumbai, as official VFS Tasheel facilities operate directly in Lucknow.
                </p>
                <div className="mt-6 space-y-3.5 text-xs sm:text-sm text-slate-600">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                    <strong className="text-slate-900 block">Ten-Print Digital Fingerprints:</strong>
                    High-resolution biometric capture linked directly to the Saudi Ministry of Foreign Affairs (MOFA).
                  </div>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                    <strong className="text-slate-900 block">Digital Facial &amp; Iris Scans:</strong>
                    ICAO-compliant biometric facial imaging preventing identity duplication at King Khalid (Riyadh)
                    or King Abdulaziz (Jeddah) international entry gates.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 6: SALARY & COMPENSATION BENCHMARKING MATRIX                 */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Transparent Compensation Benchmarks
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Trade-Wise Salary &amp; Benefits Benchmarking Matrix
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Official wage benchmarks reflecting verified principal employer offers for skilled candidates
                from Lucknow and Central UP across Gulf and European corridors.
              </p>
            </div>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-800 uppercase font-semibold">
                  <tr>
                    <th className="px-4 py-3.5">Trade Category</th>
                    <th className="px-4 py-3.5">Specialized Roles</th>
                    <th className="px-4 py-3.5">Gulf Monthly Basic (SAR / AED)</th>
                    <th className="px-4 py-3.5">European Monthly Basic (EUR)</th>
                    <th className="px-4 py-3.5">Mandatory Benefits Included</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">Welding &amp; Fabrication</td>
                    <td className="px-4 py-3">6G TIG/MIG Welders, Structural Fitters</td>
                    <td className="px-4 py-3 font-bold text-emerald-600">2,200 - 3,500 SAR (₹48k - ₹78k)</td>
                    <td className="px-4 py-3 font-bold text-blue-600">€950 - €1,300 (₹85k - ₹1.17L)</td>
                    <td className="px-4 py-3 text-xs">Free Bachelor AC Housing, Food Allowance, Overtime 1.5x</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">Electrical &amp; Instrumentation</td>
                    <td className="px-4 py-3">Industrial Electricians, Cable Jointers, PLC Techs</td>
                    <td className="px-4 py-3 font-bold text-emerald-600">2,000 - 3,200 SAR (₹44k - ₹71k)</td>
                    <td className="px-4 py-3 font-bold text-blue-600">€900 - €1,250 (₹81k - ₹1.12L)</td>
                    <td className="px-4 py-3 text-xs">Tools Allowance, Medical Card, Flight Ticket Renewal</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">Mechanical &amp; HVAC</td>
                    <td className="px-4 py-3">Chiller Techs, Duct Fabricators, BMS Operators</td>
                    <td className="px-4 py-3 font-bold text-emerald-600">2,400 - 3,800 SAR (₹53k - ₹84k)</td>
                    <td className="px-4 py-3 font-bold text-blue-600">€1,000 - €1,400 (₹90k - ₹1.26L)</td>
                    <td className="px-4 py-3 text-xs">Company Transportation, Site Allowance, Annual Leave</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">Heavy Plant &amp; Transport</td>
                    <td className="px-4 py-3">Trailer Drivers, Crane Operators, Excavator Staff</td>
                    <td className="px-4 py-3 font-bold text-emerald-600">2,500 - 4,200 SAR (₹55k - ₹93k)</td>
                    <td className="px-4 py-3 font-bold text-blue-600">€1,100 - €1,500 (₹99k - ₹1.35L)</td>
                    <td className="px-4 py-3 text-xs">GCC License Assistance, Safety Gear, Trip Bonuses</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">Civil &amp; Finishing</td>
                    <td className="px-4 py-3">Tile Masons, Shuttering Carpenters, Steel Fixers</td>
                    <td className="px-4 py-3 font-bold text-emerald-600">1,600 - 2,400 SAR (₹35k - ₹53k)</td>
                    <td className="px-4 py-3 font-bold text-blue-600">€850 - €1,100 (₹76k - ₹99k)</td>
                    <td className="px-4 py-3 text-xs">Camp Accommodation, Mess Dining, Overtime Pay</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">Healthcare &amp; Nursing</td>
                    <td className="px-4 py-3">B.Sc / GNM Staff Nurses, Lab Technicians</td>
                    <td className="px-4 py-3 font-bold text-emerald-600">4,500 - 7,500 SAR (₹1.0L - ₹1.67L)</td>
                    <td className="px-4 py-3 font-bold text-blue-600">€1,600 - €2,400 (₹1.44L - ₹2.16L)</td>
                    <td className="px-4 py-3 text-xs">Hospital Quarters, Ministry Licensure, Family Visa Option</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">Hospitality &amp; Culinary</td>
                    <td className="px-4 py-3">Chefs, Baristas, F&amp;B Service Executives</td>
                    <td className="px-4 py-3 font-bold text-emerald-600">2,200 - 4,000 SAR (₹48k - ₹89k)</td>
                    <td className="px-4 py-3 font-bold text-blue-600">€950 - €1,350 (₹85k - ₹1.21L)</td>
                    <td className="px-4 py-3 text-xs">Duty Meals, Service Tips Pool, Hotel Housing</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">Logistics &amp; Warehousing</td>
                    <td className="px-4 py-3">Reach Truck Operators, Inventory Pickers</td>
                    <td className="px-4 py-3 font-bold text-emerald-600">1,800 - 2,600 SAR (₹40k - ₹58k)</td>
                    <td className="px-4 py-3 font-bold text-blue-600">€900 - €1,200 (₹81k - ₹1.08L)</td>
                    <td className="px-4 py-3 text-xs">Shift Differential, Heated/AC Warehouse, Healthcare</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 7: ANTI-FRAUD EXPOSÉ & SUB-AGENT PITFALLS (4 BALANCED CARDS) */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Fraud Prevention Directive
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Anti-Fraud Exposé: Protecting Central UP Aspirants from Sub-Agent Traps
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Unaccredited street brokers operating around Charbagh, Kaiserbagh, and Aminabad exploit candidates
                through deceptive promises. Understand the four critical warning signs:
              </p>
            </div>

            {/* 4 Cards in 4-Column Grid (NO EMPTY SPACES) */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <FaTriangleExclamation className="text-2xl" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  1. The &ldquo;Azad Visa&rdquo; Myth
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Brokers sell non-existent &ldquo;free visas&rdquo; for ₹1.5 Lakh. In reality, all Gulf work visas
                  must be tied to a registered corporate sponsor. Working on an Azad visa is a criminal offense
                  leading to immediate arrest, wage forfeiture, and deportation.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <FaPassport className="text-2xl" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  2. Tourist-to-Work Conversion Scams
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Agents send workers to Dubai or Qatar on 30-day tourist visas, falsely claiming they will convert
                  to employment visas upon arrival. Candidates become stranded when tourist visas expire, facing
                  daily overstay fines and zero labor ministry rights.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <FaHandHoldingDollar className="text-2xl" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  3. Cash Demands Without MEA Receipts
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Unlicensed intermediaries demand upfront cash payments into private individual bank accounts
                  without official GST invoices or registered Recruiting Agent (RA) receipts. WorkWise Visa operates
                  with 100% transparent digital banking channels.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <FaFileContract className="text-2xl" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  4. Illegal Passport Confiscation
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Under the Indian Passports Act 1967 and international labor laws, no agency or middleman is
                  permitted to retain your original passport as financial collateral. Your passport remains your
                  sovereign property at all stages of processing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 8: GULF WORKSITE ARABIC TECHNICAL LEXICON                    */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Worksite Communication Readiness
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Essential Worksite Arabic Lexicon for Lucknow Technicians
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Mastering key Arabic terminology elevates on-site safety, streamlines trade evaluations, and
                empowers technicians during initial supervisor interactions across Gulf project sites.
              </p>
            </div>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-800 uppercase font-semibold">
                  <tr>
                    <th className="px-4 py-3">Arabic Term (عربي)</th>
                    <th className="px-4 py-3">Phonetic English</th>
                    <th className="px-4 py-3">English Meaning</th>
                    <th className="px-4 py-3">Trade Context &amp; Practical Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-slate-900">سلامة مهنية</td>
                    <td className="px-4 py-3 font-semibold text-emerald-700">Salama Mihniyya</td>
                    <td className="px-4 py-3">Occupational Safety (HSE)</td>
                    <td className="px-4 py-3 text-xs">Mandatory PPE, hardhat, safety harness, and daily toolbox talks</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-slate-900">لحام كهربائي</td>
                    <td className="px-4 py-3 font-semibold text-emerald-700">Laham Kahraba&apos;i</td>
                    <td className="px-4 py-3">Electric Arc / TIG Welding</td>
                    <td className="px-4 py-3 text-xs">Structural pipeline welding and pressure vessel joints</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-slate-900">تمديدات كابلات</td>
                    <td className="px-4 py-3 font-semibold text-emerald-700">Tamdeedat Kablat</td>
                    <td className="px-4 py-3">Cable Pulling &amp; Conduit Laying</td>
                    <td className="px-4 py-3 text-xs">Electrical containment, conduit routing, and panel termination</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-slate-900">مخطط هندسي</td>
                    <td className="px-4 py-3 font-semibold text-emerald-700">Mukhattat Handasi</td>
                    <td className="px-4 py-3">Engineering Blueprint / Drawing</td>
                    <td className="px-4 py-3 text-xs">Interpreting isometric drawings, shop drawings, and site schematics</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-slate-900">صيانة دورية</td>
                    <td className="px-4 py-3 font-semibold text-emerald-700">Siyana Dawriyya</td>
                    <td className="px-4 py-3">Routine Preventive Maintenance</td>
                    <td className="px-4 py-3 text-xs">HVAC filter replacement, pump lubrication, and circuit breaker checks</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-slate-900">عقد عمل موثق</td>
                    <td className="px-4 py-3 font-semibold text-emerald-700">&apos;Aqd &apos;Amal Muwaththaq</td>
                    <td className="px-4 py-3">Attested Employment Contract</td>
                    <td className="px-4 py-3 text-xs">Digital Qiwa / MoHRE verified labor agreement protecting candidate rights</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 9: SAFE REMITTANCE & BANKING ARCHITECTURE (4 BALANCED CARDS) */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Family Financial Security
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Safe Remittance &amp; Banking Architecture for Lucknow Families
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Protect your overseas earnings from illicit hawala networks. Follow RBI banking guidelines
                for safe, fast transfers directly into your family accounts in Lucknow and Central UP.
              </p>
            </div>

            {/* 4 Cards in 4-Column Grid (NO EMPTY SPACES) */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <FaBuildingColumns className="text-2xl" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  1. NRE / NRO Account Setup
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Establish an NRE account with major branches across Lucknow (SBI Main Branch Hazratganj,
                  HDFC Gomti Nagar, ICICI Aliganj, Bank of Baroda Charbagh). NRE funds are 100% exempt from Indian
                  income tax and fully repatriable.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                  <FaHandHoldingDollar className="text-2xl" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  2. Authorized Digital Channels
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Remit funds through regulated digital exchange partners: STC Pay, Enjaz, Al Ansari, Lulu Exchange,
                  or direct SWIFT banking channels under the RBI Rupee Drawing Arrangement (RDA) with zero risk
                  of illicit interception.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
                  <FaMoneyBillTrendUp className="text-2xl" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  3. Foreign Exchange Hedging
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Gulf currencies (SAR, AED, QAR) are pegged to the US Dollar, providing a powerful hedge against
                  rupee inflation. Family members receive funds directly in INR with zero foreign transaction fees.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <FaUserShield className="text-2xl" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  4. Family Emergency Reserves
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Set up dual-mandate family debit cards allowing your family in Lucknow to withdraw living expenses
                  locally while you retain primary operational controls through authenticated mobile banking apps abroad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 10: TRANSIT & PROCESSING ROUTING FROM LUCKNOW                */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Logistics &amp; Travel Readiness
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Transit, Medical &amp; Embassy Routing from Lucknow Hub
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Strategic connectivity from Lucknow Charbagh (LKO), Lucknow Junction (LJN), and Chaudhary Charan
                Singh International Airport (Amausi) to local diagnostic facilities and embassy processing centers.
              </p>
            </div>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-800 uppercase font-semibold">
                  <tr>
                    <th className="px-4 py-3.5">Processing Stage</th>
                    <th className="px-4 py-3.5">Location &amp; Facility</th>
                    <th className="px-4 py-3.5">Transit Route from Lucknow Center</th>
                    <th className="px-4 py-3.5">Average Turnaround</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">GAMCA / Wafid Medical Exam</td>
                    <td className="px-4 py-3">Accredited Diagnostic Labs, Aliganj / Hazratganj / Kaiserbagh</td>
                    <td className="px-4 py-3 text-xs">Direct Lucknow Metro / shared cab from Charbagh Station (15-25 mins)</td>
                    <td className="px-4 py-3 font-bold text-emerald-600">24 - 48 Hours</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">POE Emigration Clearance</td>
                    <td className="px-4 py-3">Hall No. 3, Kendriya Bhawan, Sector H, Aliganj, Lucknow</td>
                    <td className="px-4 py-3 text-xs">Digital submission on eMigrate portal (zero physical queuing required)</td>
                    <td className="px-4 py-3 font-bold text-emerald-600">2 - 4 Working Days</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">Takamol SVP Skill Test</td>
                    <td className="px-4 py-3">Authorized SVP Testing Centers, Lucknow / New Delhi</td>
                    <td className="px-4 py-3 text-xs">Direct local testing in Lucknow or Vande Bharat to New Delhi centers</td>
                    <td className="px-4 py-3 font-bold text-emerald-600">Same Day Result</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">VFS Tasheel Biometrics</td>
                    <td className="px-4 py-3">VFS Tasheel Center, Lucknow</td>
                    <td className="px-4 py-3 text-xs">Local metro connectivity to authorized consular facilitation suites</td>
                    <td className="px-4 py-3 font-bold text-emerald-600">Appointment Based</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">International Flight Boarding</td>
                    <td className="px-4 py-3">Chaudhary Charan Singh International Airport (Amausi - LKO)</td>
                    <td className="px-4 py-3 text-xs">Direct Red Line Metro from Charbagh / Hazratganj straight to Airport Terminal</td>
                    <td className="px-4 py-3 font-bold text-emerald-600">Flight Schedule</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 11: FULL CONSULTATION BOOKING FORM (HOMEPAGE 2-COL STYLE)    */}
        {/* ==================================================================== */}
        <section
          id="consultation"
          className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-20 text-white"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Institutional Candidate Evaluation
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Book Your In-Person or Online Profile Assessment in Lucknow
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300">
                Submit your profile online or consult our senior emigration advisors. Our licensed career
                counselors will assess your trade experience, review your passport eligibility, and align you
                with authentic government-approved overseas vacancies.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
              <ConsultationForm />
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 12: EXHAUSTIVE FAQS (20 DETAILED TECHNICAL QUESTIONS)         */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Candidate Frequently Asked Questions
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Everything Lucknow Candidates Need to Know About Overseas Work Visas
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Detailed answers to key queries on government compliance, salary protection, medical screening,
                and travel safety.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {[
                {
                  q: "Where is the Office of Protector of Emigrants (POE) located in Lucknow?",
                  a: "The statutory POE Lucknow office is situated at Hall No. 3, Kendriya Bhawan, Sector H, Aliganj, Lucknow, Uttar Pradesh 226024. It oversees legal emigration clearances for ECR passport holders across all 75 districts of Uttar Pradesh.",
                },
                {
                  q: "How can candidates from Lucknow verify if their Gulf visa is 100% genuine?",
                  a: "You can verify your visa directly through official host-country portals. For Saudi Arabia, verify on the Qiwa (qiwa.sa) or Muqeem (muqeem.sa) portals using your visa number and passport. For UAE, verify on the MoHRE portal (mohre.gov.ae) or ICP smart services. Never trust printed photocopies from street agents around Charbagh without verifiable electronic database records.",
                },
                {
                  q: "What is an ECR passport and does a candidate from Lucknow need POE clearance?",
                  a: "If your passport has an 'Emigration Check Required' (ECR) stamp (typically given to citizens who have not passed Class 10 matriculation), you must obtain official Emigration Clearance from the Protector of Emigrants (POE) before traveling for employment to 18 designated ECR nations including Saudi Arabia, UAE, Qatar, and Oman. WorkWise Visa processes full digital POE clearances.",
                },
                {
                  q: "Where is the GAMCA / Wafid medical examination conducted for Lucknow candidates?",
                  a: "Wafid appointment slips must be booked at wafid.com ($10 USD fee). The system randomly allocates candidates to accredited diagnostic centers located in Lucknow (predominantly in Aliganj, Hazratganj, or Kaiserbagh). Do not take medical tests at unaccredited private pathology labs as foreign consulates will reject them.",
                },
                {
                  q: "What is the Takamol Skill Verification Program (SVP) for Saudi Arabia?",
                  a: "Takamol SVP is a mandatory skill assessment mandated by Saudi Arabia for 23 technical occupations including Electricians, Welders, Plumbers, Mechanics, and HVAC technicians. Candidates take a computer theory test and practical trade assessment at an authorized center before the Saudi Embassy stamps their work visa.",
                },
                {
                  q: "Can nursing and healthcare graduates from Lucknow apply for Gulf hospital jobs?",
                  a: "Yes. Nursing graduates from KGMU, SGPGI, and recognized UP nursing colleges access overseas vacancies in Saudi Arabia (MOH), UAE (DHA/HAAD), and Qatar. Candidates complete DataFlow primary-source verification and Prometric licensing exams before direct hospital placement.",
                },
                {
                  q: "Are European work permits available for skilled workers from Lucknow?",
                  a: "Yes. WorkWise Visa provides verified legal recruitment pathways for European nations including Poland, Romania, and Croatia. Candidates receive official government work permits (such as Voivodeship permits in Poland or Aviz de Muncă in Romania), followed by National Type-D employment visa stamping in New Delhi.",
                },
                {
                  q: "What is the Pravasi Bharatiya Bima Yojana (PBBY) and how does it protect workers?",
                  a: "PBBY is a mandatory ₹10 Lakh insurance scheme instituted by the Ministry of External Affairs for overseas Indian workers. It provides ₹10 Lakh coverage for accidental death or permanent disability, ₹1 Lakh for emergency medical hospitalization abroad, and covered repatriation airfare back to Lucknow.",
                },
                {
                  q: "How does the Wage Protection System (WPS) protect workers in the UAE and Saudi Arabia?",
                  a: "WPS requires employers to transfer salaries electronically into workers' official bank accounts monitored by the central banks of Saudi Arabia and the UAE. If an employer delays payments beyond established timelines, the system automatically freezes their government operations and levies heavy penalties.",
                },
                {
                  q: "What is an 'Azad Visa' and why should Lucknow workers strictly avoid it?",
                  a: "'Azad Visa' (Free Visa) is an illegal term used by brokers. Under Gulf labor laws, every work visa must be tied to a registered corporate employer who provides legal sponsorship. Working on an 'Azad visa' means working illegally for unauthorized third parties, exposing workers to immediate arrest, wage theft, and deportation.",
                },
                {
                  q: "How much time does it take to process a Gulf work visa from Lucknow?",
                  a: "A verified GCC employment visa typically takes between 25 to 45 business days. This timeframe includes employer contract generation on Qiwa/MoHRE, GAMCA medical examination, biometric collection, Takamol trade testing, and embassy visa stamping.",
                },
                {
                  q: "How long does a European work permit take to process?",
                  a: "European National Type-D work permits for Poland, Romania, and Croatia typically take 90 to 120 days. This includes provincial labor authorization, background vetting, apostille attestation, and VFS visa appointment clearance.",
                },
                {
                  q: "What documents must a candidate from Lucknow prepare for an overseas work visa?",
                  a: "Candidates must prepare: 1) Original passport with at least 12 months validity, 2) 10th-grade educational certificates or technical ITI/Polytechnic diploma, 3) 12 passport-size white-background photos, 4) Police Clearance Certificate (PCC) from the Regional Passport Office, and 5) Valid GAMCA medical fitness certificate.",
                },
                {
                  q: "Does WorkWise Visa charge any upfront fees before document verification?",
                  a: "No. WorkWise Visa provides free initial profile evaluation and trade counseling. We strictly adhere to Ministry of External Affairs compliance guidelines and never charge arbitrary registration fees before verifying eligibility and employer demand validity.",
                },
                {
                  q: "Can commercial drivers from Lucknow convert their Indian driving license abroad?",
                  a: "Indian licenses cannot be converted directly into Gulf licenses. However, heavy vehicle drivers from Lucknow travel on driver employment visas and attend subsidized training at accredited driving schools in Saudi Arabia or UAE to obtain their official GCC commercial driving license.",
                },
                {
                  q: "How can candidates from Lucknow safely send money back to their families?",
                  a: "Workers should transfer funds through authorized bank channels, official exchange centers (such as STC Pay, Enjaz, Al Ansari, or Lulu Exchange), or direct SWIFT transfers into their family's NRE bank account in Lucknow. Avoid illegal Hawala networks entirely.",
                },
                {
                  q: "What should a worker do if their overseas employer breaches contractual promises?",
                  a: "Workers holding verified digital Qiwa or MoHRE contracts can file formal grievances directly through the host nation's labor portal or contact the Indian Embassy's MADAD helpline (madad.gov.in) for immediate consular intervention and legal representation.",
                },
                {
                  q: "Can candidates from districts like Barabanki, Unnao, or Sitapur attend virtual interviews?",
                  a: "Yes. WorkWise Visa coordinates virtual technical interviews via video conference, allowing candidates from Barabanki, Unnao, Sitapur, and Rae Bareli to interact directly with foreign corporate recruitment panels without unnecessary travel.",
                },
                {
                  q: "What happens if a candidate is declared UNFIT in a GAMCA medical test?",
                  a: "If declared medically unfit due to conditions like active Hepatitis or pulmonary TB scars, the result is recorded in the GCC health database. WorkWise Visa provides confidential pre-screening guidance so candidates can verify their health status before generating permanent Wafid slips.",
                },
                {
                  q: "What is the first step to apply for verified overseas vacancies from Lucknow?",
                  a: "The first step is to submit your trade details, phone number, and passport status through our online consultation form on this page or message our authorized WhatsApp helpline. Our senior counselor will evaluate your eligibility within 2 hours.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition-all hover:bg-white hover:shadow-md"
                >
                  <h3 className="flex items-start gap-3 text-base font-bold text-slate-900 sm:text-lg">
                    <FaCircleQuestion className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 pl-8">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 13: INTERNAL LINKING & CROSS-CITY DIRECTORY NAVIGATION       */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Central UP, Purvanchal, Bihar &amp; NCR Network
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Explore WorkWise Visa Across Strategic Regional Desks
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Access authorized recruitment, POE emigration processing, and trade counseling across our key hubs.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <Link
                href="/locations/patna"
                className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group"
              >
                <div className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Patna Hub
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Varma Centre, Boring Road
                </div>
              </Link>

              <Link
                href="/locations/noida"
                className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group"
              >
                <div className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Noida Corporate HQ
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Urbtech Trade Centre, Sec 132
                </div>
              </Link>

              <Link
                href="/locations/gorakhpur"
                className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group"
              >
                <div className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Gorakhpur Hub
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Eastern UP &amp; Purvanchal
                </div>
              </Link>

              <Link
                href="/locations/siwan"
                className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group"
              >
                <div className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Siwan Gateway
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Gulf Emigration Corridor
                </div>
              </Link>

              <Link
                href="/locations/gopalganj"
                className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group"
              >
                <div className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Gopalganj Hub
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  North Bihar Industrial
                </div>
              </Link>

              <Link
                href="/locations/muzaffarpur"
                className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group"
              >
                <div className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Muzaffarpur Hub
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Tirhut Division Central
                </div>
              </Link>

              <Link
                href="/locations/chhapra"
                className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group"
              >
                <div className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Chhapra (Saran)
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Saran Division Desk
                </div>
              </Link>

              <Link
                href="/locations/darbhanga"
                className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group"
              >
                <div className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Darbhanga Hub
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Mithilanchal Gateway
                </div>
              </Link>

              <Link
                href="/locations/gaya"
                className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group"
              >
                <div className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Gaya Hub
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Magadh Division Gateway
                </div>
              </Link>

              <Link
                href="/locations/lucknow"
                className="rounded-xl border border-emerald-500 bg-emerald-50/50 p-4 text-center shadow-sm"
              >
                <div className="font-bold text-emerald-800">
                  Lucknow Hub
                </div>
                <div className="text-xs text-emerald-600 mt-1">
                  State Capital &amp; POE Aliganj
                </div>
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 text-center">
                Explore WorkWise Visa Destination Country Guides &amp; Portals
              </h4>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
                <Link
                  href="/countries/saudi-arabia"
                  className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                >
                  Saudi Arabia Work Visa Guide
                </Link>
                <Link
                  href="/countries/uae"
                  className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                >
                  UAE Dubai Employment Visa
                </Link>
                <Link
                  href="/countries/qatar"
                  className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                >
                  Qatar Work Residence Permit
                </Link>
                <Link
                  href="/countries/oman"
                  className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                >
                  Oman Employment Visa
                </Link>
                <Link
                  href="/countries/bahrain"
                  className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                >
                  Bahrain LMRA Work Visa
                </Link>
                <Link
                  href="/jobs"
                  className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                >
                  Browse Active Overseas Jobs
                </Link>
                <Link
                  href="/track"
                  className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                >
                  Track Visa Application Status
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
