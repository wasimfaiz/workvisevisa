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
// Title: 54 chars (Ideal range: 50-60 chars)
// Description: 156 chars (Ideal range: 150-160 chars)
// ============================================================================
export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Work Visa Consultancy in Siwan | WorkWise Visa Bihar",
  description:
    "Top Gulf & Europe work visa consultancy for Siwan candidates. Verified Saudi, Dubai & Qatar jobs, Takamol testing, GAMCA medical & eMigrate POE clearance.",
  keywords: [
    "work visa consultancy in siwan",
    "gulf job consultancy in siwan",
    "visa consultancy in siwan",
    "saudi work visa agency siwan",
    "dubai job agency siwan",
    "overseas recruitment agency siwan bihar",
    "takamol test guidance siwan",
    "gamca medical siwan bihar",
    "workwise visa siwan",
    "best visa consultant siwan bihar",
    "ecr passport visa clearance siwan",
    "qatar visa center biometrics bihar",
    "poland work permit consultancy bihar",
    "romania work visa agency siwan",
    "emigrate registered agency for siwan",
  ],
  alternates: {
    canonical: "https://www.workwisevisa.com/locations/siwan",
  },
  openGraph: {
    title: "Work Visa Consultancy in Siwan | WorkWise Visa Bihar",
    description:
      "Premier overseas job placement & work visa assistance for candidates in Siwan, Bihar. 100% verified employer contracts for Saudi Arabia, UAE, Qatar, and Europe.",
    url: "https://www.workwisevisa.com/locations/siwan",
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/workwise_logo.png",
        width: 1200,
        height: 630,
        alt: "WorkWise Visa Overseas Career Guidance for Siwan Candidates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Visa Consultancy in Siwan | WorkWise Visa Bihar",
    description:
      "Trusted Gulf & Europe work visa consultancy in Siwan. Verified company demands, Takamol trade tests, GAMCA medical & direct eMigrate POE clearance.",
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
      "@id": "https://www.workwisevisa.com/locations/siwan#localbusiness",
      name: "WorkWise Visa - Siwan Candidate Assistance Desk (Europass Immigration Pvt Ltd)",
      legalName: "Europass Immigration Pvt Ltd",
      url: "https://www.workwisevisa.com/locations/siwan",
      logo: "https://www.workwisevisa.com/images/workwise_logo.png",
      image: "https://www.workwisevisa.com/images/workwise_logo.png",
      description:
        "Dedicated overseas employment assistance and work visa consultancy for candidates from Siwan district, Bihar. Specializing in verified GCC job demands, Saudi Vision 2030 mega projects, European skilled migration, Takamol SVP trade testing, GAMCA medical assistance, and official eMigrate POE clearance.",
      telephone: "+918130161603",
      email: "workwisevisa@gmail.com",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
      areaServed: [
        { "@type": "City", name: "Siwan" },
        { "@type": "AdministrativeArea", name: "Barharia" },
        { "@type": "AdministrativeArea", name: "Mairwa" },
        { "@type": "AdministrativeArea", name: "Maharajganj" },
        { "@type": "AdministrativeArea", name: "Darauli" },
        { "@type": "AdministrativeArea", name: "Raghunathpur" },
        { "@type": "AdministrativeArea", name: "Goreakothi" },
        { "@type": "AdministrativeArea", name: "Andar" },
        { "@type": "AdministrativeArea", name: "Pachrukhi" },
        { "@type": "State", name: "Bihar" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.workwisevisa.com/locations/siwan#breadcrumb",
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
          name: "Siwan",
          item: "https://www.workwisevisa.com/locations/siwan",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.workwisevisa.com/locations/siwan#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can candidates from Siwan verify if a Gulf work visa is genuine or fake?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To verify whether a Gulf work visa is authentic, never rely on photocopies from unaccredited local sub-agents. For Saudi Arabia, verify the electronic visa on the official Muqeem (muqeem.sa) or Enjaz portal using your passport and visa number. For the UAE, check through the GDRFA Dubai or ICP Federal Authority portal. For Qatar, verify on the Ministry of Interior (portal.moi.gov.qa) portal. Ensure your employment contract is generated on Saudi Qiwa or UAE MoHRE systems with a registered corporate CR/Establishment number.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between ECR and ECNR passport clearance for workers from Siwan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Under the Emigration Act 1983, passport holders who have not passed Class 10 (matriculation) receive an ECR (Emigration Check Required) passport. If moving to 18 designated ECR nations (including Saudi Arabia, UAE, Qatar, Oman, Kuwait, Bahrain), they must obtain Emigration Clearance through the Ministry of External Affairs eMigrate portal via a registered Recruiting Agent and Protector of Emigrants (POE) office. Candidates with Class 10 pass certificates have ECNR status and can travel directly without POE clearance.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Takamol Skill Verification Program (SVP) required for Saudi Arabia work visas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Takamol SVP is a mandatory skill assessment program instituted by the Saudi Ministry of Human Resources and Social Development. Before a Saudi employment visa can be stamped for technical trades (such as electricians, plumbers, welders, HVAC technicians, and automotive mechanics), candidates must clear a standardized two-part test comprising a computer-based theoretical test and a practical trade bench test conducted at a Takamol-accredited trade testing center.",
          },
        },
        {
          "@type": "Question",
          name: "Where do Siwan candidates take their GAMCA / Wafid medical examinations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GAMCA (now Wafid) slips must be generated online exclusively through the official Wafid portal (wafid.com). The system automatically assigns an accredited medical clinic located in Patna, Gorakhpur, Lucknow, or Kolkata. Candidates from Siwan travel conveniently via direct trains to Patna or Gorakhpur. Never accept a manual or offline medical slip issued by local private clinics in Siwan, as foreign embassies reject non-Wafid medical certificates.",
          },
        },
        {
          "@type": "Question",
          name: "What social security and insurance protections are provided under Pravasi Bharatiya Bima Yojana (PBBY)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PBBY is a mandatory insurance scheme under the Ministry of External Affairs for all ECR workers going abroad. It provides ₹10.00 Lakh cover for accidental death or permanent disability, medical hospitalization cover up to ₹1.00 Lakh, repatriation transport costs in case of medical distress, and legal assistance expenses up to ₹45,000 in case of overseas employment disputes.",
          },
        },
      ],
    },
  ],
};

export default function SiwanLocationPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      <Navbar />

      <main className="w-full">
        {/* ==================================================================== */}
        {/* SECTION 1: HERO (No top gap, zero left CTAs, high-trust right card) */}
        {/* ==================================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 pt-24 sm:pt-28 pb-16 sm:pb-24 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400"
            >
              <Link
                href="/"
                className="transition-colors hover:text-emerald-400"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/locations"
                className="transition-colors hover:text-emerald-400"
              >
                Locations
              </Link>
              <span>/</span>
              <span className="font-semibold text-emerald-400">Siwan, Bihar</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Semantic Headline & Value Proposition (Zero Clutter CTA buttons) */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  <FaShieldHalved className="text-emerald-400" />
                  Government-Compliant Overseas Career Pathway for Siwan
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                  Work Visa &amp; Overseas Employment Consultancy for{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-teal-500 bg-clip-text text-transparent">
                    Siwan, Bihar
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                  Siwan is historically India&apos;s most vital source of
                  skilled craftsmanship, industrial piping, electrical
                  engineering, and heavy infrastructure talent for Saudi Arabia,
                  the UAE, Qatar, Oman, and European national markets.
                  WorkWise Visa provides Siwan&apos;s ambitious workforce with
                  institutional transparency: verified direct employer visas,
                  transparent salaries, Takamol skill verification, GAMCA
                  medical guidance, and 100% legal eMigrate Emigration Clearance
                  (POE).
                </p>

                {/* Key Legal Trust Metrics */}
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-6 sm:grid-cols-4">
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">
                      100%
                    </div>
                    <div className="text-xs text-slate-400">
                      eMigrate POE Compliant
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">
                      ₹10 Lakh
                    </div>
                    <div className="text-xs text-slate-400">
                      Mandatory PBBY Insurance
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">
                      Direct
                    </div>
                    <div className="text-xs text-slate-400">
                      Qiwa &amp; MoHRE Contracts
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">Zero</div>
                    <div className="text-xs text-slate-400">
                      Sub-Agent Exploitation
                    </div>
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
                      <h2 className="text-lg font-display font-bold text-white">
                        Siwan Overseas Career Desk
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
                        Saudi Arabia (Vision 2030), UAE (Dubai &amp; Abu Dhabi),
                        Qatar, Oman, Poland, Romania &amp; Croatia.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Monthly Salary Bands:</strong>{" "}
                        ₹42,000 to ₹1,85,000/mo with free company accommodation,
                        transportation, and medical coverage.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Processing Turnaround:</strong>{" "}
                        25 to 45 Days for GCC visas; 90 to 120 Days for European
                        National Type-D work permits.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Worker Protection:</strong>{" "}
                        Digital contracts registered on Qiwa/MoHRE portals with
                        direct bank salary payment protection (WPS).
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-700 pt-5">
                    <a
                      href="#consultation"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-center text-sm font-bold text-slate-950 shadow-lg shadow-emerald-600/25 transition-all hover:from-emerald-400 hover:to-teal-500 hover:shadow-emerald-600/25"
                    >
                      Book Free Profile Evaluation in Siwan
                      <FaArrowRight className="text-xs" />
                    </a>
                    <p className="mt-2 text-center text-xs text-slate-400">
                      Instant response within 2 hours • No registration charges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 2: EXECUTIVE SUMMARY & SIWAN'S OVERSEAS MIGRATION REALITY    */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                In-Depth Regional Analysis &amp; Workforce Demographics
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Why Siwan is the Backbone of India&apos;s Overseas Industrial
                Workforce
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 text-base leading-relaxed text-slate-600 lg:grid-cols-2">
              <div className="space-y-5">
                <p>
                  Siwan district, situated in western Bihar along the Uttar
                  Pradesh border, represents one of India&apos;s most dense
                  emigration corridors. For over four decades, households from
                  every block—including Barharia, Mairwa, Maharajganj, Darauli,
                  Andar, and Goreakothi—have maintained generational ties with
                  the Gulf Cooperation Council (GCC) countries. The remittances
                  sent back from Riyadh, Jeddah, Dammam, Dubai, and Doha form the
                  primary financial lifeblood of Siwan&apos;s thriving local
                  economy, funding modern housing, healthcare, and higher
                  education.
                </p>
                <p>
                  However, despite the immense skill of Siwan&apos;s welders,
                  pipe fitters, electricians, steel fixers, and heavy vehicle
                  drivers, local job seekers have historically suffered at the
                  hands of an unregulated, multi-tiered network of unaccredited
                  village sub-agents. These middlemen charge exorbitant fees of
                  ₹1,20,000 to ₹1,80,000 for supposed &ldquo;Azad visas&rdquo; or
                  &ldquo;Supply company visas&rdquo; that lack legal protections,
                  leaving workers vulnerable to wage withholding, dangerous
                  living conditions, and immediate deportation.
                </p>
              </div>

              <div className="space-y-5">
                <p>
                  WorkWise Visa was founded to dismantle this predatory brokerage
                  model. By connecting candidates from Siwan directly with
                  verified corporate principal employers—such as multi-billion
                  dollar EPC contractors operating in Saudi Arabia&apos;s NEOM,
                  Red Sea Global, and Qiddiya mega-developments, as well as
                  licensed European engineering firms in Poland, Romania, and
                  Croatia—we guarantee total compliance with the{" "}
                  <strong>Emigration Act, 1983</strong>.
                </p>
                <p>
                  Our institutional pathway guarantees that every worker travels
                  on a genuine, pre-authenticated electronic employment visa
                  bearing a valid corporate registration number. Every candidate
                  receives a bi-lingual employment contract before departure,
                  secures mandatory ₹10 Lakh Pravasi Bharatiya Bima Yojana
                  (PBBY) insurance, and goes through biometric trade testing via
                  the Saudi Takamol Skill Verification Program (SVP) or Qatar
                  Visa Center (QVC) protocols.
                </p>
                <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                  <p className="text-sm font-semibold text-blue-900">
                    💡 Authoritative Insight for Siwan Job Seekers:
                  </p>
                  <p className="mt-1 text-xs text-blue-800">
                    Never hand over your original passport or cash down payment
                    to any local intermediary without first verifying their
                    official Recruiting Agent (RA) registration on the{" "}
                    <a
                      href="https://emigrate.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline hover:text-blue-950"
                    >
                      Ministry of External Affairs eMigrate portal
                    </a>
                    . Real corporate employers never issue visas on handwritten
                    letterheads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 3: THE EMIGRATION ACT 1983 & ECR VS ECNR CLEARANCE IN BIHAR  */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Statutory Compliance &amp; Legal Framework
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                ECR vs. ECNR Passport Regulations for Siwan Migrants
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Understanding your legal status under the Ministry of External
                Affairs is the first line of defense against overseas
                exploitation and travel detention at Indian international
                airports.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* ECR Passport Guide */}
              <div className="rounded-2xl border border-emerald-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaPassport className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      ECR (Emigration Check Required)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Applicable to candidates without a 10th-grade matriculation certificate
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  <p>
                    If the back page of your Indian passport states{" "}
                    <strong className="text-slate-800">
                      &ldquo;Emigration Check Required&rdquo;
                    </strong>
                    , Indian immigration law under Section 10 of the Emigration
                    Act 1983 forbids you from departing to 18 designated
                    countries without an official Emigration Clearance (POE)
                    stamp.
                  </p>
                  <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                      18 Designated ECR Countries:
                    </h4>
                    <p className="mt-1 text-xs text-slate-600">
                      United Arab Emirates, Saudi Arabia, Qatar, Oman, Kuwait,
                      Bahrain, Malaysia, Jordan, Libya, Lebanon, Iraq, Yemen,
                      Sudan, Afghanistan, Indonesia, Syria, Thailand, and South
                      Sudan.
                    </p>
                  </div>
                  <h4 className="font-bold text-slate-800">
                    Mandatory eMigrate Clearance Process:
                  </h4>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        The foreign employer must upload an approved job order
                        and authenticated contract on the MEA{" "}
                        <a
                          href="https://emigrate.gov.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-blue-600 underline"
                        >
                          eMigrate portal
                        </a>
                        .
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        The registered recruiting agency submits candidate
                        details along with verified medical and trade
                        verification.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        Mandatory enrollment in the Pravasi Bharatiya Bima
                        Yojana (PBBY) insurance scheme.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        The Protector of Emigrants (POE) office in Patna or
                        Delhi approves the digital emigration clearance slip,
                        ensuring immigration clearance at airport border
                        control.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ECNR Passport Guide */}
              <div className="rounded-2xl border border-blue-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <FaFileContract className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      ECNR (Emigration Check Not Required)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Matriculation pass, diploma holders, graduates &amp; taxpayers
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  <p>
                    Passports that do not bear the ECR endorsement automatically
                    qualify as ECNR. Candidates holding an ECNR passport do not
                    require administrative emigration clearance from the POE
                    office before boarding flights to the Gulf or Europe.
                  </p>
                  <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                      Who Qualifies for ECNR Status:
                    </h4>
                    <ul className="mt-2 space-y-1 text-xs text-slate-600 list-disc list-inside">
                      <li>
                        All persons having educational qualification of
                        Matriculation (10th standard) pass or above.
                      </li>
                      <li>
                        All persons possessing 2 or 3-year diplomas from
                        state-recognized polytechnic institutes.
                      </li>
                      <li>
                        All income tax payers (with proof of assessment).
                      </li>
                      <li>
                        Persons who have previously stayed abroad for a
                        continuous period of three years or more.
                      </li>
                    </ul>
                  </div>
                  <h4 className="font-bold text-slate-800">
                    WorkWise Verification for ECNR Candidates:
                  </h4>
                  <p className="text-xs">
                    Even though ECNR candidates are exempt from POE queue delays,
                    fraudulent brokers frequently send ECNR workers on 30-day or
                    90-day tourist visas, falsely promising that the employer
                    will &ldquo;convert it to an employment visa upon arrival.&rdquo;
                    WorkWise Visa guarantees that ECNR candidates from Siwan
                    travel ONLY on authentic, pre-stamped employment entry
                    permits, backed by verified salary protection systems (WPS).
                  </p>
                </div>
              </div>
            </div>

            {/* In-Depth Legal Protection: PBBY Coverage Table */}
            <div className="mt-12 rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3">
                <FaScaleBalanced className="text-2xl text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">
                  Pravasi Bharatiya Bima Yojana (PBBY) Benefits Breakdown
                </h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Instituted by the Ministry of External Affairs, this compulsory
                insurance policy costs under ₹375 for 2 years or ₹525 for 3
                years, yet provides immense financial security for Siwan families:
              </p>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 text-slate-700 uppercase font-semibold">
                    <tr>
                      <th className="px-4 py-3">Benefit Category</th>
                      <th className="px-4 py-3">Statutory Coverage Amount</th>
                      <th className="px-4 py-3">Eligibility &amp; Claim Conditions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600">
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        Accidental Death / Permanent Disability
                      </td>
                      <td className="px-4 py-3 font-bold text-emerald-600">
                        ₹10,00,000 (10 Lakhs)
                      </td>
                      <td className="px-4 py-3">
                        Payable to nominated Siwan family members in case of fatal
                        industrial accidents or total loss of limbs/sight.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        Medical Hospitalization Abroad
                      </td>
                      <td className="px-4 py-3 font-bold text-slate-800">
                        Up to ₹1,00,000
                      </td>
                      <td className="px-4 py-3">
                        Covers emergency hospitalization, surgical operations,
                        and specialized ICU care in overseas medical facilities.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        Emergency Repatriation
                      </td>
                      <td className="px-4 py-3 font-bold text-slate-800">
                        Economy Airfare + Medical Escort
                      </td>
                      <td className="px-4 py-3">
                        Air transportation back to India if declared medically
                        unfit due to work injuries or terminal illness.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        Legal Defense Costs
                      </td>
                      <td className="px-4 py-3 font-bold text-slate-800">
                        Up to ₹45,000
                      </td>
                      <td className="px-4 py-3">
                        Reimbursement of lawyer and court fees in the host nation
                        if the employer unlawfully terminates the work contract.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        Family Compassionate Travel
                      </td>
                      <td className="px-4 py-3 font-bold text-slate-800">
                        Roundtrip Flight for 1 Attendant
                      </td>
                      <td className="px-4 py-3">
                        Permits one immediate family member from Siwan to travel
                        abroad if the worker is hospitalized for over 30 days.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 4: DESTINATION BLUEPRINTS (SAUDI, UAE, QATAR, EUROPE)       */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Target Employment Corridors
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Comprehensive Visa &amp; Work Regulations by Destination
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Detailed breakdowns of official labor laws, digital portals,
                salary protection mechanisms, and mandatory trade qualifications
                for Siwan candidates across Gulf and European markets.
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
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline"
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
                      Under Saudi Ministry of Human Resources rules, manual
                      paper contracts have zero legal standing. Every candidate
                      receives a standardized electronic contract on the{" "}
                      <a
                        href="https://qiwa.sa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline font-semibold"
                      >
                        Qiwa platform
                      </a>
                      . This digital contract specifies your exact job title,
                      basic salary in Saudi Riyals (SAR), daily working hours
                      (maximum 8 hours + overtime under Article 98), paid annual
                      leave, and health insurance class.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaAward className="text-emerald-600" />
                      Takamol Skill Verification (SVP)
                    </h4>
                    <p className="text-xs leading-relaxed">
                      For 23 technical trades (including Building Electricians,
                      Plumbers, Arc/TIG Welders, Pipe Fabricators, and HVAC
                      Technicians), the Saudi government mandates Takamol SVP
                      certification. Candidates from Siwan must appear at an
                      authorized center for both a 30-minute multiple-choice
                      theory exam and a 2-hour practical bench performance test.
                      Without this digital certificate, Saudi embassies cannot
                      issue an employment visa.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaMoneyBillTrendUp className="text-blue-600" />
                      Wage Protection System (WPS)
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Upon arrival in Saudi Arabia and issuance of the resident
                      identity card (Iqama), the employer must issue a digital
                      payroll bank card (e.g., Al Rajhi, SNB, or Mada). Monthly
                      salaries are monitored in real-time by the Saudi Central
                      Bank (SAMA). Employers that delay salaries by more than 60
                      days face automatic system freezes and severe labor court
                      fines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Destination 2: UAE (Dubai & Abu Dhabi) */}
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                      Destination Focus #2
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      United Arab Emirates (Dubai &amp; Abu Dhabi) Employment Visas
                    </h3>
                  </div>
                  <Link
                    href="/countries/uae"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    View UAE Dubai Work Visa Details <FaArrowRight />
                  </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3 text-sm text-slate-600">
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaFileCircleCheck className="text-blue-600" />
                      MoHRE Standard 12-Page Contract
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Issued by the UAE Ministry of Human Resources and
                      Emiratisation (
                      <a
                        href="https://www.mohre.gov.ae"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline font-semibold"
                      >
                        MoHRE
                      </a>
                      ). Before flying from India, the candidate signs this exact
                      legal agreement at the VFS center or authorized agency. The
                      contract specifies job code, basic salary, housing
                      allowance, transport subsidy, and end-of-service gratuity
                      under Federal Decree-Law No. 33 of 2021.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaIdCard className="text-emerald-600" />
                      Entry Permit vs. Residence Visa
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Candidates travel to the UAE on a pink Employment Entry
                      Permit valid for 60 days. Within this period, the corporate
                      employer conducts internal UAE medical tests (blood test
                      and chest X-ray), takes biometrics for the Emirates ID card,
                      and stamps the 2-year renewable Residence Visa inside the
                      passport. WorkWise Visa ensures candidates never travel on
                      tourist or visit visas.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaShieldHalved className="text-emerald-600" />
                      Labor Ban Protections
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Under reformed UAE labor laws, employees are protected
                      against arbitrary lifetime labor bans. Once completing
                      probation or notifying the employer per contractual terms,
                      workers have full legal rights to switch companies or
                      return to India with cleared end-of-service financial
                      settlements without blacklisting.
                    </p>
                  </div>
                </div>
              </div>

              {/* Destination 3: European National Type-D Work Permits (Poland, Romania, Croatia) */}
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-800">
                      High-Growth European Corridor
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      Schengen &amp; Eastern European Skilled Migration
                    </h3>
                  </div>
                  <Link
                    href="/jobs"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Explore European Job Demands <FaArrowRight />
                  </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3 text-sm text-slate-600">
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaPassport className="text-purple-600" />
                      Poland Voivodeship Work Permit
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Known as <em>Zezwolenie na pracę Typ A</em>, issued directly
                      by the provincial governor (Urząd Wojewódzki). Entitles
                      Indian workers to legal employment in food processing,
                      heavy manufacturing, metal welding, and logistics warehousing.
                      Allows free travel across all Schengen member states during
                      off-duty periods and provides access to public healthcare
                      under the National Health Fund (NFZ).
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaBuildingColumns className="text-blue-600" />
                      Romania IGI Work Authorization
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Approved by the General Inspectorate for Immigration (
                      <a
                        href="https://igi.mai.gov.ro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline font-semibold"
                      >
                        IGI Romania
                      </a>
                      ). Known as <em>Aviz de Muncă</em>, this work permit serves
                      as the foundation for applying for a long-stay Type-D/AM
                      employment visa at the Romanian Embassy in New Delhi.
                      Provides monthly net earnings from €700 to €1,200 with
                      furnished company housing and utility allowances.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaGlobe className="text-emerald-600" />
                      Croatia MUP Stay &amp; Work Permit
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Following Croatia&apos;s full entry into the Schengen zone,
                      work permits (<em>Dozvola za boravak i rad</em>) are issued
                      following an official Labour Market Test (<em>Test tržišta rada</em>)
                      cleared through the Croatian Employment Service (HZZ).
                      Ideal for construction artisans, commercial truck drivers,
                      and hospitality associates seeking high Euro-denominated
                      salaries.
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
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Medical Compliance Standards
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                GAMCA / Wafid Medical Protocol for Siwan Candidates
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Before foreign consulates stamp work visas for Saudi Arabia,
                Qatar, UAE, Kuwait, Oman, or Bahrain, candidates must be declared
                medically fit by an accredited center governed by the Gulf Health
                Council.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Box 1: Online Registration */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <FaSuitcaseMedical className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  1. Official Wafid Appointment Generation
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Slips must be booked exclusively through the official portal{" "}
                  <a
                    href="https://wafid.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 underline"
                  >
                    wafid.com
                  </a>
                  . The centralized algorithm assigns the diagnostic clinic
                  randomly. Candidates cannot choose a specific clinic. The
                  standard examination fee is fixed at $10 USD (online
                  registration) + approximately ₹5,500 to ₹6,500 collected
                  directly by the assigned diagnostic lab.
                </p>
              </div>

              {/* Box 2: Diagnostic Battery */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <FaHospital className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  2. Mandatory Clinical Screening Tests
                </h3>
                <div className="mt-2 space-y-2 text-xs sm:text-sm text-slate-600">
                  <p>The diagnostic screening comprises strict assessments:</p>
                  <ul className="space-y-1 text-xs list-disc list-inside">
                    <li>
                      <strong>Chest Digital X-Ray:</strong> Detects active or
                      healed pulmonary tuberculosis (TB) scarring, pleural
                      thickening, or calcifications.
                    </li>
                    <li>
                      <strong>Serology &amp; Blood Tests:</strong> Screens for
                      HIV 1/2, Hepatitis B Surface Antigen (HBsAg), Hepatitis C
                      Antibodies (Anti-HCV), and VDRL (Syphilis).
                    </li>
                    <li>
                      <strong>Biochemical Panels:</strong> Fasting blood glucose,
                      Serum Creatinine, Bilirubin, SGPT/SGOT liver enzymes.
                    </li>
                    <li>
                      <strong>Physical Assessment:</strong> Blood pressure, ECG
                      for candidates over 40, vision and Ishihara color
                      blindness testing.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Box 3: Avoiding Rejection */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <FaTriangleExclamation className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  3. Understanding UNFIT Status &amp; Re-Testing
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If declared <strong>UNFIT</strong> due to active Hepatitis or
                  pulmonary tuberculosis scars, the result is locked into the
                  GCC electronic medical database for 6 to 12 months across all
                  authorized centers in India. WorkWise Visa offers candidates
                  prior confidential health consultations in Siwan to verify
                  their clinical health parameters before generating a permanent
                  Wafid slip, preventing career-ending medical bans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 6: SALARY & COMPENSATION BENCHMARKING MATRIX                */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Transparent Financial Standards
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Trade-Wise Salary &amp; Allowance Benchmarks for Siwan Candidates
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Transparent earnings matrices showing authentic basic salaries,
                guaranteed food allowances, free company accommodation, and
                overtime regulations across Gulf and European employment offers.
              </p>
            </div>

            <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-semibold">
                  <tr>
                    <th className="px-4 py-3.5">Trade / Job Title</th>
                    <th className="px-4 py-3.5">Saudi Arabia (SAR)</th>
                    <th className="px-4 py-3.5">UAE (AED)</th>
                    <th className="px-4 py-3.5">Qatar (QAR)</th>
                    <th className="px-4 py-3.5">Europe (Net EUR)</th>
                    <th className="px-4 py-3.5">Company Perks Included</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-slate-900">
                      Pipe Welder (6G / TIG &amp; ARC)
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,400 - 3,200 SAR
                      <span className="block text-[11px] text-slate-400">~₹53,000 - ₹71,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,600 - 3,500 AED
                      <span className="block text-[11px] text-slate-400">~₹59,000 - ₹79,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,500 - 3,400 QAR
                      <span className="block text-[11px] text-slate-400">~₹57,000 - ₹78,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €1,100 - €1,500
                      <span className="block text-[11px] text-slate-400">~₹1,00,000 - ₹1,36,000</span>
                    </td>
                    <td className="px-4 py-3.5 text-xs">
                      Accommodation + Transport + Medical + OT (1.5x)
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-slate-900">
                      Industrial Electrician
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      1,800 - 2,400 SAR
                      <span className="block text-[11px] text-slate-400">~₹40,000 - ₹53,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,000 - 2,600 AED
                      <span className="block text-[11px] text-slate-400">~₹45,000 - ₹59,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      1,900 - 2,500 QAR
                      <span className="block text-[11px] text-slate-400">~₹43,000 - ₹57,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €950 - €1,300
                      <span className="block text-[11px] text-slate-400">~₹86,000 - ₹1,18,000</span>
                    </td>
                    <td className="px-4 py-3.5 text-xs">
                      Free Room + Kitchen Facility + Safety Kits
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-slate-900">
                      Pipe &amp; Structural Fabricator
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,000 - 2,700 SAR
                      <span className="block text-[11px] text-slate-400">~₹44,000 - ₹60,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,200 - 2,800 AED
                      <span className="block text-[11px] text-slate-400">~₹50,000 - ₹63,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,100 - 2,700 QAR
                      <span className="block text-[11px] text-slate-400">~₹48,000 - ₹61,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €1,000 - €1,400
                      <span className="block text-[11px] text-slate-400">~₹91,000 - ₹1,27,000</span>
                    </td>
                    <td className="px-4 py-3.5 text-xs">
                      Free Visa + Air Ticket Every 2 Years
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-slate-900">
                      HVAC &amp; Chiller Technician
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,200 - 3,000 SAR
                      <span className="block text-[11px] text-slate-400">~₹49,000 - ₹66,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,400 - 3,200 AED
                      <span className="block text-[11px] text-slate-400">~₹54,000 - ₹72,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,300 - 3,100 QAR
                      <span className="block text-[11px] text-slate-400">~₹52,000 - ₹70,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €1,100 - €1,450
                      <span className="block text-[11px] text-slate-400">~₹1,00,000 - ₹1,32,000</span>
                    </td>
                    <td className="px-4 py-3.5 text-xs">
                      Company Transport + Annual Paid Leave
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-slate-900">
                      Heavy Equipment / Trailer Driver
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,500 - 3,500 SAR
                      <span className="block text-[11px] text-slate-400">~₹55,000 - ₹78,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,800 - 3,800 AED
                      <span className="block text-[11px] text-slate-400">~₹63,000 - ₹86,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,700 - 3,600 QAR
                      <span className="block text-[11px] text-slate-400">~₹61,000 - ₹82,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €1,200 - €1,800
                      <span className="block text-[11px] text-slate-400">~₹1,09,000 - ₹1,63,000</span>
                    </td>
                    <td className="px-4 py-3.5 text-xs">
                      Free Fuel + Accommodation + Trip Allowance
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-slate-900">
                      Civil Mason / Shuttering Carpenter
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      1,500 - 2,000 SAR
                      <span className="block text-[11px] text-slate-400">~₹33,000 - ₹44,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      1,600 - 2,200 AED
                      <span className="block text-[11px] text-slate-400">~₹36,000 - ₹50,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      1,600 - 2,100 QAR
                      <span className="block text-[11px] text-slate-400">~₹36,000 - ₹48,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €850 - €1,100
                      <span className="block text-[11px] text-slate-400">~₹77,000 - ₹1,00,000</span>
                    </td>
                    <td className="px-4 py-3.5 text-xs">
                      Food / Mess Facility Provided + Health Insurance
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 7: ANTI-FRAUD EXPOSÉ & VILLAGE SUB-AGENT PITFALLS           */}
        {/* ==================================================================== */}
        <section className="bg-slate-900 py-16 sm:py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Candidate Protection &amp; Anti-Fraud Intelligence
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-white">
                The Anatomy of Local Sub-Agent Scams in Siwan District
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300">
                Thousands of young men from Siwan lose their life savings every
                year to fraudulent local operators. Here is how predatory
                schemes operate and how to protect yourself legally.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Scam 1: Azad Visa Trap */}
              <div className="rounded-2xl border border-red-500/30 bg-slate-800/80 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/20 text-red-400">
                  <FaTriangleExclamation className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  The &ldquo;Azad / Freelance Visa&rdquo; Myth
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Sub-agents claim they will provide an &ldquo;open visa&rdquo;
                  allowing candidates to work freely for anyone in Saudi Arabia
                  or UAE for a fee of ₹1,50,000. In reality,{" "}
                  <strong>there is no such legal entity as an Azad Visa</strong>.
                  Working for any employer other than your legal sponsor (Kafeel)
                  violates Article 39 of the Saudi Labor Law. Violators face
                  arrest during police spot checks, detention in deportation
                  centers (Tarheel), and a permanent lifetime GCC ban.
                </p>
              </div>

              {/* Scam 2: Contract Substitution */}
              <div className="rounded-2xl border border-emerald-500/30 bg-slate-800/80 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                  <FaFileContract className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Contract Substitution Scam
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  In this scheme, the broker shows an offer letter promising 2,800
                  SAR per month while the candidate is in Siwan. However, upon
                  landing at Riyadh or Dubai airport, a local company handler
                  confiscates the passport and forces the worker to sign a new,
                  inferior contract offering only 1,200 SAR with long 12-hour
                  shifts. Because the initial contract was never registered on
                  eMigrate or Qiwa, the worker has no proof to present to the
                  labor court.
                </p>
              </div>

              {/* Scam 3: Visit Visa Stamping */}
              <div className="rounded-2xl border border-blue-500/30 bg-slate-800/80 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                  <FaPassport className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Tourist Visa Conversion Trap
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Unlicensed agents frequently charge ₹80,000 for a 30-day Dubai
                  or Oman tourist visa, claiming &ldquo;your job interview is
                  confirmed and your employer will convert it to an employment visa
                  within 5 days.&rdquo; Once in Dubai, the job never
                  materializes, the tourist visa expires, accumulating daily
                  overstay fines, and the worker ends up stranded in shared labor
                  rooms without basic sustenance or repatriation fare.
                </p>
              </div>
            </div>

            {/* How to Report & Legal Grievance System */}
            <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-800/50 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                <FaUserShield className="text-xl" />
                Official Legal Recourse &amp; Redressal for Siwan Workers
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                If you or a family member has been defrauded by an unauthorized
                sub-agent, file a formal complaint immediately through the
                Protector General of Emigrants (PGE) via the{" "}
                <a
                  href="https://madad.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-300 underline"
                >
                  MADAD Consular Services Management System (madad.gov.in)
                </a>{" "}
                or register an FIR under Section 24 of the Emigration Act 1983 at
                the Siwan Cyber Police Station / Town Police Station. WorkWise
                Visa provides complimentary legal referral documentation for
                affected candidates.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 8: GULF WORKSITE ARABIC TECHNICAL LEXICON                    */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Worksite Safety &amp; Communication Mastery
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Essential Worksite Arabic Technical Vocabulary
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Learning functional workplace Arabic ensures safety, commands
                immediate respect from project foremen (Muallim), and prevents
                worksite mishaps. Every WorkWise candidate receives free language
                orientation:
              </p>
            </div>

            <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-semibold">
                  <tr>
                    <th className="px-4 py-3">English Term</th>
                    <th className="px-4 py-3">Romanized Arabic (Spoken)</th>
                    <th className="px-4 py-3">Arabic Script</th>
                    <th className="px-4 py-3">Worksite Context &amp; Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Supervisor / Master Craftsman
                    </td>
                    <td className="px-4 py-3 font-mono text-blue-600">Muallim / Mudir</td>
                    <td className="px-4 py-3 font-arabic text-base text-slate-800">معلّم / مدير</td>
                    <td className="px-4 py-3">
                      Addressing the site engineer, foreman, or senior supervisor.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Safety Helmet / PPE
                    </td>
                    <td className="px-4 py-3 font-mono text-blue-600">Khoutha / Salamah</td>
                    <td className="px-4 py-3 font-arabic text-base text-slate-800">خوذة / سلامة</td>
                    <td className="px-4 py-3">
                      Mandatory personal protective equipment on plant construction sites.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Danger / Stop Work
                    </td>
                    <td className="px-4 py-3 font-mono text-red-600 font-bold">Khatar / Waggif</td>
                    <td className="px-4 py-3 font-arabic text-base text-slate-800">خطر / وقّف</td>
                    <td className="px-4 py-3">
                      Emergency safety command to cease crane lift, welding, or trench digging.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Overtime Work
                    </td>
                    <td className="px-4 py-3 font-mono text-emerald-600">Idhafi / Overtime</td>
                    <td className="px-4 py-3 font-arabic text-base text-slate-800">إضافي</td>
                    <td className="px-4 py-3">
                      Hours worked beyond standard 8-hour shift, paid at 1.5x basic wage.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Residence Permit / ID Card
                    </td>
                    <td className="px-4 py-3 font-mono text-blue-600">Iqama / Hawiya</td>
                    <td className="px-4 py-3 font-arabic text-base text-slate-800">إقامة / هوية</td>
                    <td className="px-4 py-3">
                      Official legal identity card in Saudi Arabia, renewable annually.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Salary / Monthly Wages
                    </td>
                    <td className="px-4 py-3 font-mono text-blue-600">Ratib / Ma&apos;ash</td>
                    <td className="px-4 py-3 font-arabic text-base text-slate-800">راتب / معاش</td>
                    <td className="px-4 py-3">
                      Refers to base salary deposited directly to candidate bank account.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Hospital / First Aid Clinic
                    </td>
                    <td className="px-4 py-3 font-mono text-blue-600">Mustashfa / Isaaf</td>
                    <td className="px-4 py-3 font-arabic text-base text-slate-800">مستشفى / إسعاف</td>
                    <td className="px-4 py-3">
                      Location for worksite injuries or claiming insurance treatment.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Vacation / Exit-Reentry Visa
                    </td>
                    <td className="px-4 py-3 font-mono text-blue-600">Ijazah / Khurooj Awda</td>
                    <td className="px-4 py-3 font-arabic text-base text-slate-800">إجازة / خروج وعودة</td>
                    <td className="px-4 py-3">
                      Official permission required to travel back to Siwan on annual vacation.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 9: SAFE REMITTANCE & BANKING ARCHITECTURE FOR SIWAN FAMILIES */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Financial Security &amp; Asset Preservation
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Safe Remittance &amp; Banking Guide for Siwan NRI Families
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Protecting your hard-earned foreign exchange begins with avoiding
                illegal Hawala networks and utilizing regulated institutional
                banking channels.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <FaBuildingColumns className="text-2xl" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  Open NRE / NRO Accounts
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Before departure, open a Non-Resident External (NRE) savings
                  account with major banks having branches in Siwan (such as State
                  Bank of India Siwan Main Branch, PNB Babunia Road, or Central
                  Bank of India). NRE interest earnings are{" "}
                  <strong>100% tax-free in India</strong>.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <FaMoneyBillTrendUp className="text-2xl" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  Authorized Exchange Houses
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Always remit money through licensed exchange houses such as Al
                  Ansari Exchange, LuLu International Exchange, Al Rajhi Tahweel,
                  or Western Union. Money transfers credit directly to your
                  family&apos;s bank account in Siwan within 5 to 15 minutes at
                  official central bank exchange rates.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <FaTriangleExclamation className="text-2xl" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  Strictly Avoid Hawala Networks
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Local touts in Gulf labor camps often promise a slightly higher
                  exchange rate for cash transfers (Hawala). Using Hawala violates
                  the Foreign Exchange Management Act (FEMA) and can lead to
                  account freezes and investigation by the Enforcement
                  Directorate (ED) in India.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  <FaHandHoldingDollar className="text-2xl" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  NRI Status Tax Exemptions
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Under Section 6 of the Indian Income Tax Act, if you reside
                  outside India for 182 days or more in a financial year, your
                  foreign salary is completely exempt from Indian income tax.
                  Keep your boarding passes and passport entry/exit stamps
                  preserved safely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 10: TRANSIT & PROCESSING ROUTING FROM SIWAN JUNCTION         */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Logistics &amp; Travel Assistance
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Consular &amp; Biometric Travel Routes from Siwan Junction
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                While visa applications are managed electronically, candidates
                often travel for medicals, Takamol trade assessments, or VFS
                biometrics. Here are the fastest, most reliable transit links:
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <FaTrainSubway className="text-xl" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    To Patna POE &amp; Wafid Centers
                  </h3>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Direct trains connect Siwan Junction (SV) to Patna Junction
                  (PNBE) / Danapur (DNR) in under 3 to 4 hours via the Maurya
                  Express, Lichchhavi Express, or regular Intercity services.
                  Convenient for attending GAMCA medical clinics in Patna or the
                  Protector of Emigrants office.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaTrainSubway className="text-xl" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    To Gorakhpur Diagnostic Labs
                  </h3>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Gorakhpur is located just 135 km from Siwan, reachable in 2.5
                  hours via multiple daily express trains (Vaishali Express, Bihar
                  Sampark Kranti). Frequently selected for candidates assigned to
                  Gorakhpur Wafid clinics, saving travel time and lodging expenses.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaPlaneDeparture className="text-xl" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    To New Delhi VFS &amp; Embassies
                  </h3>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Overnight direct trains such as the Bihar Sampark Kranti
                  Superfast and Vaishali Express connect Siwan directly to New
                  Delhi (NDLS) in 15 to 17 hours for European VFS biometric
                  appointments (Poland, Romania, Croatia) or Qatar Visa Center
                  clearance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 11: FULL CONSULTATION BOOKING FORM (HOMEPAGE 2-COL STYLE)    */}
        {/* ==================================================================== */}
        {/* SECTION 11: FULL CONSULTATION BOOKING FORM (HOMEPAGE 2-COL STYLE)   */}
        {/* ==================================================================== */}
        <ConsultationForm />

        {/* ==================================================================== */}
        {/* SECTION 12: EXHAUSTIVE FAQS (20 DETAILED TECHNICAL QUESTIONS)         */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Frequently Asked Questions
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Everything Siwan Candidates Need to Know About Overseas Work Visas
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Authoritative answers to common questions regarding government
                approvals, medical screenings, passport rules, salary
                protection, and avoiding fraudulent agents.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {/* FAQ 1 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  1. How can I confirm if a Saudi Arabia work visa is 100% genuine before paying any money?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Never rely on photocopied paper or WhatsApp screenshots. A
                  legitimate Saudi work visa can be verified directly on the
                  official Saudi government portal Muqeem (
                  <a
                    href="https://muqeem.sa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 underline"
                  >
                    muqeem.sa
                  </a>
                  ) or the Ministry of Foreign Affairs (MOFA) Enjaz portal using
                  your passport number and visa number. Furthermore, an approved
                  employment visa requires an electronic employment contract
                  registered on the Saudi Ministry of Human Resources{" "}
                  <strong>Qiwa portal</strong> (
                  <a
                    href="https://qiwa.sa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 underline"
                  >
                    qiwa.sa
                  </a>
                  ). If the agency cannot show your contract on Qiwa, the visa is
                  not authentic.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  2. I have an ECR passport from Siwan. Can I travel to Dubai on an employment visa?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Yes, absolutely. Having an ECR (Emigration Check Required)
                  passport does not stop you from working in Dubai or any GCC
                  country. It simply means that your deployment must be processed
                  through a registered Recruiting Agent (RA) licensed by the
                  Ministry of External Affairs (MEA), with the job order cleared
                  on the <strong>eMigrate system</strong> and approved by the
                  Protector of Emigrants (POE) office. Once your digital POE
                  clearance is issued, Indian immigration will clear you to board
                  your flight smoothly.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  3. What is the Saudi Takamol Skill Verification Program (SVP) test, and where is it conducted?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Takamol SVP is a compulsory skill test mandated by the Saudi
                  government for skilled professions including electricians,
                  welders, plumbers, auto mechanics, and HVAC technicians. The
                  test consists of two parts: a 30-minute theoretical exam and a
                  hands-on practical workbench assessment. Tests are conducted at
                  certified Takamol testing centers in major industrial cities
                  like Patna, Gorakhpur, Lucknow, and New Delhi. WorkWise Visa
                  provides technical trade coaching and documentation support to
                  ensure candidates pass on their first attempt.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  4. Can I choose which clinic I go to for my GAMCA / Wafid medical in Bihar?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  No. Under the regulations of the Gulf Health Council, candidates
                  cannot choose a specific medical center. When you generate your
                  medical appointment slip on the official Wafid website (
                  <a
                    href="https://wafid.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 underline"
                  >
                    wafid.com
                  </a>
                  ), the system&apos;s automated algorithm assigns an accredited
                  clinic in the city of your choice (e.g., Patna, Gorakhpur,
                  Kolkata, or Delhi). Any private clinic in Siwan claiming they can
                  issue an authentic GAMCA fit slip directly is operating
                  fraudulently.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  5. What happens if I am declared &ldquo;Unfit&rdquo; in my GAMCA medical examination?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  If declared Unfit due to communicable infections (such as
                  Hepatitis B, Hepatitis C, HIV, or pulmonary tuberculosis
                  scarring on your chest X-ray), your status is recorded in the
                  centralized GCC health database. This generates a temporary or
                  permanent medical block across all GCC embassies in India.
                  WorkWise Visa strongly recommends that candidates undergo a
                  pre-medical check-up at a trusted local lab before generating an
                  official Wafid slip to ensure their health parameters are
                  optimal.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  6. What is the difference between a direct company visa and a supply company visa?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  A <strong>direct company visa</strong> means you are legally
                  employed by the main contracting firm (e.g., Nesma, Binladin,
                  Almarai, Arabtec). The main company directly pays your monthly
                  salary, provides company housing, healthcare, and air tickets.
                  In contrast, a <strong>supply company</strong> operates as an
                  intermediary labor broker. If the supply company fails to secure
                  subcontracts on construction sites, workers are left without
                  work, food allowances, or monthly salaries. WorkWise Visa deals
                  exclusively with direct principal corporate employers.
                </p>
              </div>

              {/* FAQ 7 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  7. Can an employer in Saudi Arabia or UAE hold my original Indian passport?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  No. Under both Saudi Labor Law (Article 38) and UAE Federal
                  Decree-Law No. 33 of 2021, holding or confiscating an
                  employee&apos;s passport is strictly illegal. Your passport is
                  the property of the Government of India. While companies may
                  request your passport for 48 to 72 hours to stamp your residency
                  card (Iqama or Emirates ID), they must return it immediately.
                  If an employer refuses to return your passport, you can seek
                  consular assistance from the Indian Embassy via the MADAD
                  portal.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  8. What are the requirements for candidates from Siwan applying for Poland work permits?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  For European migration to Poland, the candidate requires: (1) An
                  original Indian passport with at least 2 years validity; (2) A
                  clean Police Clearance Certificate (PCC) issued by the Regional
                  Passport Office (RPO); (3) An official Polish Voivodeship Work
                  Permit (<em>Zezwolenie na pracę Typ A</em>) arranged by the
                  employer in Poland; and (4) An approved National Type-D visa
                  stamped through VFS Global in New Delhi or Kolkata. The total
                  processing timeline takes approximately 90 to 120 days.
                </p>
              </div>

              {/* FAQ 9 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  9. How does the Wage Protection System (WPS) protect my salary in the Gulf?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  WPS is an electronic salary transfer system monitored directly
                  by the central banks and labor ministries of Saudi Arabia, the
                  UAE, and Qatar. Employers are legally mandated to pay workers&apos;
                  salaries into approved bank accounts or prepaid payroll cards
                  by a fixed date every month. If a company delays salaries by more
                  than 15 to 30 days, their corporate file is frozen, they cannot
                  issue new visas, and government inspectors intervene immediately.
                </p>
              </div>

              {/* FAQ 10 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  10. What is the total processing timeline for a Saudi Arabia work visa from Siwan?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Under standard circumstances, a complete Saudi Arabia work visa
                  takes between 25 and 45 days. This includes: (1) Trade test and
                  Takamol SVP clearance (3 to 7 days); (2) GAMCA/Wafid medical
                  examination and electronic fit report upload (3 to 5 days); (3)
                  Qiwa digital contract acceptance (2 to 4 days); (4) MOFA visa
                  submission and biometric stamping via VFS Tasheel (7 to 14 days);
                  and (5) Final POE eMigrate clearance and flight ticket issuance
                  (3 to 5 days).
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
