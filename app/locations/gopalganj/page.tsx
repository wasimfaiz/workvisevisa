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
} from "react-icons/fa6";

// ============================================================================
// IDEAL SEO METADATA (Google SERP Character Limit Optimized)
// Title: 56 chars (Ideal range: 50-60 chars)
// Description: 156 chars (Ideal range: 150-160 chars)
// ============================================================================
export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Work Visa Consultancy in Gopalganj | WorkWise Visa Bihar",
  description:
    "Top Gulf & Europe work visa consultancy for Gopalganj candidates. Verified Saudi, Dubai & Qatar jobs, Takamol testing, GAMCA medical & eMigrate clearance.",
  keywords: [
    "work visa consultancy in gopalganj",
    "gulf job consultancy in gopalganj",
    "visa consultancy in gopalganj",
    "saudi work visa agency gopalganj",
    "dubai job agency gopalganj bihar",
    "overseas recruitment agency gopalganj",
    "takamol test guidance gopalganj",
    "gamca medical gopalganj bihar",
    "workwise visa gopalganj",
    "best visa consultant gopalganj mirganj",
    "ecr passport clearance gopalganj",
    "poland work permit consultancy gopalganj",
    "romania work visa agency bihar",
    "qatar visa center biometrics bihar",
    "emigrate registered agency for gopalganj",
  ],
  alternates: {
    canonical: "https://www.workwisevisa.com/locations/gopalganj",
  },
  openGraph: {
    title: "Work Visa Consultancy in Gopalganj | WorkWise Visa Bihar",
    description:
      "Premier overseas job placement & work visa assistance for candidates in Gopalganj, Bihar. 100% verified employer contracts for Saudi Arabia, UAE, Qatar, and Europe.",
    url: "https://www.workwisevisa.com/locations/gopalganj",
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/workwise_logo.png",
        width: 1200,
        height: 630,
        alt: "WorkWise Visa Overseas Employment Assistance for Gopalganj Candidates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Visa Consultancy in Gopalganj | WorkWise Visa Bihar",
    description:
      "Trusted Gulf & Europe work visa consultancy in Gopalganj. Verified company demands, Takamol trade tests, GAMCA medical & direct eMigrate POE clearance.",
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
      "@id": "https://www.workwisevisa.com/locations/gopalganj#localbusiness",
      name: "WorkWise Visa - Gopalganj Candidate Assistance Desk (Europass Immigration Pvt Ltd)",
      legalName: "Europass Immigration Pvt Ltd",
      url: "https://www.workwisevisa.com/locations/gopalganj",
      logo: "https://www.workwisevisa.com/images/workwise_logo.png",
      image: "https://www.workwisevisa.com/images/workwise_logo.png",
      description:
        "Dedicated overseas employment assistance and work visa consultancy for candidates from Gopalganj district, Bihar. Specializing in verified GCC job demands, Saudi Vision 2030 hiring, European skilled migration, Takamol SVP trade testing, GAMCA medical assistance, and official eMigrate POE clearance.",
      telephone: "+918130161603",
      email: "workwisevisa@gmail.com",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
      areaServed: [
        { "@type": "City", name: "Gopalganj" },
        { "@type": "AdministrativeArea", name: "Mirganj" },
        { "@type": "AdministrativeArea", name: "Barauli" },
        { "@type": "AdministrativeArea", name: "Hathwa" },
        { "@type": "AdministrativeArea", name: "Thawe" },
        { "@type": "AdministrativeArea", name: "Kuchaikote" },
        { "@type": "AdministrativeArea", name: "Bhore" },
        { "@type": "AdministrativeArea", name: "Kateya" },
        { "@type": "AdministrativeArea", name: "Sidhwalia" },
        { "@type": "AdministrativeArea", name: "Baikunthpur" },
        { "@type": "State", name: "Bihar" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.workwisevisa.com/locations/gopalganj#breadcrumb",
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
          name: "Gopalganj",
          item: "https://www.workwisevisa.com/locations/gopalganj",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.workwisevisa.com/locations/gopalganj#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can workers from Gopalganj verify if a Saudi or Dubai work visa is genuine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To verify whether a work visa is authentic, never rely on paper photocopies or WhatsApp screenshots from local sub-agents in Mirganj or Thawe. For Saudi Arabia, verify your electronic visa directly on the official Muqeem portal (muqeem.sa) or MOFA Enjaz system, and ensure you have an approved electronic contract registered on the Ministry of Human Resources Qiwa portal (qiwa.sa). For Dubai and the UAE, check through the GDRFA Dubai or ICP Federal portal, and insist on the standard 12-page MoHRE offer letter.",
          },
        },
        {
          "@type": "Question",
          name: "Where do candidates from Gopalganj go for GAMCA / Wafid medical tests?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Medical appointment slips must be generated online exclusively via the official Wafid website (wafid.com). The automated system randomly assigns an authorized diagnostic lab in Gorakhpur or Patna. Gorakhpur is only 105 km away (under 2 hours via NH-27), making it a frequent and convenient center for candidates from Gopalganj, Hathwa, and Kuchaikote.",
          },
        },
        {
          "@type": "Question",
          name: "What is the ECR passport clearance rule for Gopalganj candidates moving to the Gulf?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Candidates who have not passed Class 10 (matriculation) hold an ECR (Emigration Check Required) passport. When moving to any of the 18 designated ECR nations (including Saudi Arabia, UAE, Qatar, Oman, and Kuwait), Indian law under the Emigration Act 1983 mandates digital Emigration Clearance from the Protector of Emigrants (POE) office through a licensed Recruiting Agent via the eMigrate portal.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Takamol Skill Verification Program (SVP) required for Saudi Arabia work visas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Takamol SVP is a compulsory technical examination instituted by the Saudi Ministry of Human Resources. Skilled workers (electricians, welders, plumbers, HVAC technicians, and automotive mechanics) must pass a 30-minute computer-based theory test and a 2-hour practical workbench trade test at an accredited assessment center before Saudi embassies will stamp an employment visa.",
          },
        },
        {
          "@type": "Question",
          name: "What social security protections are provided under Pravasi Bharatiya Bima Yojana (PBBY)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PBBY is a compulsory insurance policy under the Ministry of External Affairs for all ECR workers. It provides ₹10.00 Lakh cover for accidental death or permanent disability, medical hospitalization cover up to ₹1.00 Lakh, emergency repatriation transport costs, and legal defense assistance up to ₹45,000 in case of overseas employment disputes.",
          },
        },
      ],
    },
  ],
};

export default function GopalganjLocationPage() {
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
              <span className="font-semibold text-emerald-400">Gopalganj, Bihar</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Semantic Headline & Value Proposition (Zero Clutter CTA buttons) */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  <FaShieldHalved className="text-emerald-400" />
                  Government-Compliant Overseas Career Pathway for Gopalganj
                </div>

                <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
                  Work Visa &amp; Overseas Employment Consultancy for{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-teal-500 bg-clip-text text-transparent">
                    Gopalganj, Bihar
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                  Gopalganj is one of India&apos;s most vital sources of skilled
                  industrial artisans, certified pipe welders, heavy crane
                  operators, MEP technicians, and plant shutdown specialists for
                  Saudi Arabia, the UAE, Qatar, Oman, and European national
                  economies. WorkWise Visa provides Gopalganj&apos;s ambitious
                  workforce with institutional transparency: verified principal
                  employer visas, pre-departure contract registration, Takamol
                  trade testing, GAMCA medical guidance, and 100% legal eMigrate
                  POE clearance.
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
                      <h2 className="text-lg font-bold text-white">
                        Gopalganj Career Assistance Desk
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
                        food allowances, and comprehensive medical coverage.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Turnaround SLA:</strong>{" "}
                        25 to 45 Days for GCC visas; 90 to 120 Days for European
                        National Type-D work permits.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Legal Protection:</strong>{" "}
                        All employment orders verified on Qiwa/MoHRE portals with
                        mandatory Wage Protection System (WPS) bank salary guarantees.
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-700 pt-5">
                    <a
                      href="#consultation"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-center text-sm font-bold text-slate-950 shadow-lg shadow-emerald-600/25 transition-all hover:from-emerald-400 hover:to-teal-500 hover:shadow-emerald-600/25"
                    >
                      Book Free Profile Evaluation in Gopalganj
                      <FaArrowRight className="text-xs" />
                    </a>
                    <p className="mt-2 text-center text-xs text-slate-400">
                      Dedicated candidate guidance • No registration charges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 2: EXECUTIVE OVERVIEW & GOPALGANJ'S OVERSEAS MIGRATION PROFILE*/}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                In-Depth Regional Profile &amp; Emigration Dynamics
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Gopalganj: A Pillar of India&apos;s Skilled Overseas Workforce
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 text-base leading-relaxed text-slate-600 lg:grid-cols-2">
              <div className="space-y-5">
                <p>
                  Gopalganj district, situated strategically along National
                  Highway 27 bordering Uttar Pradesh and Siwan, represents one
                  of Eastern India&apos;s most vital overseas migration hubs.
                  Across major sub-divisions and blocks—including Mirganj,
                  Barauli, Hathwa, Thawe, Kuchaikote, Bhore, Kateya, Sidhwalia,
                  and Baikunthpur—thousands of households are supported by
                  foreign remittances flowing from Riyadh, Jeddah, Dammam,
                  Dubai, Doha, and Muscat.
                </p>
                <p>
                  Despite the recognized industrial discipline of Gopalganj&apos;s
                  workforce in heavy pipe welding, structural erection,
                  electrical cabling, and commercial transport, local job seekers
                  have historically been targeted by unlicensed village brokers.
                  Operating through tea shops and unverified private setups
                  around Mirganj and Thawe Junction, these intermediaries charge
                  inflated sums of ₹1,20,000 to ₹1,80,000 for fabricated
                  &ldquo;free visas&rdquo; or unverified subcontracting firms,
                  exposing workers to delayed salaries and lack of legal status.
                </p>
              </div>

              <div className="space-y-5">
                <p>
                  WorkWise Visa provides an institutional, legally fortified
                  alternative. In full compliance with the{" "}
                  <strong>Emigration Act, 1983</strong>, we connect candidates from
                  Gopalganj directly with established principal employers—such as
                  multi-billion dollar EPC contractors developing Saudi
                  Arabia&apos;s NEOM, Red Sea Global, and Aramco gas facilities,
                  UAE infrastructure consortiums, and licensed engineering
                  firms in Poland, Romania, and Croatia.
                </p>
                <p>
                  Every candidate supported by WorkWise Visa departs with an
                  authenticated electronic employment visa carrying a verified
                  corporate CR number, an official bilingual contract registered
                  on Qiwa or MoHRE, mandatory ₹10 Lakh Pravasi Bharatiya Bima
                  Yojana (PBBY) insurance, and approved Emigration Clearance
                  (POE).
                </p>
                <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                  <p className="text-sm font-semibold text-blue-900">
                    💡 Crucial Advice for Gopalganj Candidates:
                  </p>
                  <p className="mt-1 text-xs text-blue-800">
                    Never surrender your original passport or make cash payments
                    to unauthorized agents without verifying their Recruiting
                    Agent license on the{" "}
                    <a
                      href="https://emigrate.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline hover:text-blue-950"
                    >
                      MEA eMigrate portal (emigrate.gov.in)
                    </a>
                    . Real corporate employers never issue employment offers on
                    unregistered, handwritten letterheads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 3: THE EMIGRATION ACT 1983 & ECR / ECNR RULES IN GOPALGANJ   */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Statutory Regulatory Compliance
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                ECR vs. ECNR Passport Regulations for Gopalganj Migrants
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Clear understanding of passport classification under the
                Ministry of External Affairs protects workers from unlawful
                recruitment and airport offloading:
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* ECR Box */}
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
                      Passports issued to candidates without a Class 10 matriculation certificate
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  <p>
                    Under Section 10 of the Emigration Act 1983, ECR passport
                    holders traveling for employment to 18 designated countries
                    must obtain official Emigration Clearance (POE) through the
                    Ministry of External Affairs eMigrate portal.
                  </p>
                  <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                      18 Designated ECR Countries:
                    </h4>
                    <p className="mt-1 text-xs text-slate-600">
                      Saudi Arabia, United Arab Emirates, Qatar, Oman, Kuwait,
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
                        The foreign employer must upload an approved job demand
                        and validated contract on the{" "}
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
                        Submission of verified medical fitness from an
                        accredited Wafid center and Takamol trade test
                        certificate.
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
                        Issuance of digital POE Emigration Clearance slip,
                        ensuring seamless clearance at airport immigration.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ECNR Box */}
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
                    Passports without the ECR notation automatically qualify as
                    ECNR. Candidates holding ECNR status do not require POE exit
                    stamps before boarding international flights.
                  </p>
                  <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                      Who Qualifies for ECNR Status:
                    </h4>
                    <ul className="mt-2 space-y-1 text-xs text-slate-600 list-disc list-inside">
                      <li>
                        All persons possessing Matriculation (10th pass) or
                        higher educational certificates.
                      </li>
                      <li>
                        Holders of recognized 2 or 3-year polytechnic engineering
                        diplomas.
                      </li>
                      <li>
                        Assessed income tax payers with valid return receipts.
                      </li>
                      <li>
                        Workers who have previously stayed abroad for three years
                        or more.
                      </li>
                    </ul>
                  </div>
                  <h4 className="font-bold text-slate-800">
                    WorkWise Verification for ECNR Candidates:
                  </h4>
                  <p className="text-xs">
                    Even though ECNR holders bypass POE queues, rogue brokers
                    frequently send ECNR workers on 30-day or 90-day tourist
                    visas with false claims of &ldquo;on-arrival job
                    conversion.&rdquo; WorkWise Visa ensures ECNR candidates from
                    Gopalganj travel solely on pre-authenticated employment entry
                    permits backed by electronic wage protection.
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
                A statutory insurance policy mandated by the Government of India
                for all overseas workers departing on ECR clearances:
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
                        Disbursed directly to nominated family members in case of
                        fatal worksite accidents or loss of limbs/sight abroad.
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
                        Covers emergency in-patient surgical operations and ICU
                        care in foreign medical facilities.
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
                        Air passage back to India if certified medically unfit to
                        continue work due to serious injury or illness.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        Legal Defense Reimbursement
                      </td>
                      <td className="px-4 py-3 font-bold text-slate-800">
                        Up to ₹45,000
                      </td>
                      <td className="px-4 py-3">
                        Reimbursement of lawyer and court fees in host tribunals
                        if the employer unlawfully terminates the work agreement.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        Family Compassionate Travel
                      </td>
                      <td className="px-4 py-3 font-bold text-slate-800">
                        Roundtrip Economy Airfare
                      </td>
                      <td className="px-4 py-3">
                        Enables one immediate family member from Gopalganj to
                        visit if the worker is hospitalized overseas for over 30
                        days.
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
                Key Employment Corridors
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Comprehensive Visa &amp; Work Regulations by Destination
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Detailed breakdowns of official labor laws, digital portals,
                salary protection mechanisms, and mandatory trade qualifications
                for Gopalganj candidates across Gulf and European markets.
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
                      paper contracts carry zero legal validity. Every candidate
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
                      certification. Candidates from Gopalganj appear at
                      authorized testing centers for a 30-minute multiple-choice
                      theory exam and a 2-hour practical bench performance test
                      before visa stamping.
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
                      Bank (SAMA). Employers that delay salaries face automatic
                      system freezes and severe labor court penalties.
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
                      legal agreement. The contract specifies job code, basic
                      salary, housing allowance, transport subsidy, and
                      end-of-service gratuity under Federal Decree-Law No. 33 of
                      2021.
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
                      employer conducts internal UAE medical tests, takes
                      biometrics for the Emirates ID card, and stamps the 2-year
                      renewable Residence Visa inside the passport. WorkWise Visa
                      ensures candidates never travel on tourist visas.
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
                      following an official Labour Market Test cleared through the
                      Croatian Employment Service (HZZ). Ideal for construction
                      artisans, commercial truck drivers, and hospitality associates
                      seeking high Euro-denominated salaries.
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
                Medical Screening Protocol
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                GAMCA / Wafid Medical Protocol for Gopalganj Candidates
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Before GCC consulates stamp work visas for Saudi Arabia, Qatar,
                UAE, Kuwait, Oman, or Bahrain, candidates must be declared
                medically fit by an accredited center governed by the Gulf Health
                Council:
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Box 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <FaSuitcaseMedical className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  1. Centralized Wafid Registration
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Slips must be booked exclusively through{" "}
                  <a
                    href="https://wafid.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 underline"
                  >
                    wafid.com
                  </a>
                  . The automated algorithm randomly assigns an accredited clinic
                  in Gorakhpur or Patna. Candidates cannot choose a specific
                  clinic manually. The fee comprises $10 USD online registration
                  plus approximately ₹5,500 to ₹6,500 payable directly at the
                  diagnostic clinic.
                </p>
              </div>

              {/* Box 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <FaHospital className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  2. Mandatory Screening Battery
                </h3>
                <div className="mt-2 space-y-2 text-xs sm:text-sm text-slate-600">
                  <p>Strict diagnostic checks include:</p>
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

              {/* Box 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <FaTriangleExclamation className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  3. Preventing UNFIT Medical Bans
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If declared <strong>UNFIT</strong> due to active Hepatitis or
                  pulmonary tuberculosis scars, the result is locked into the
                  GCC electronic medical database for 6 to 12 months across all
                  authorized centers in India. WorkWise Visa offers candidates
                  prior confidential health consultations to verify their
                  clinical health parameters before generating a permanent
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
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Trade-Wise Salary &amp; Allowance Benchmarks for Gopalganj Candidates
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Transparent earnings matrices showing authentic basic salaries,
                guaranteed food allowances, free company accommodation, and
                overtime regulations across Gulf and European employment offers:
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
                Candidate Consumer Protection
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                The Anatomy of Local Sub-Agent Scams in Gopalganj District
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300">
                Candidates from Mirganj, Hathwa, and Thawe are frequently
                targeted by unlicensed middlemen. Here is how deceptive schemes
                operate and how you can protect yourself legally:
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Scam 1 */}
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

              {/* Scam 2 */}
              <div className="rounded-2xl border border-emerald-500/30 bg-slate-800/80 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                  <FaFileContract className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Contract Substitution Scam
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  In this scheme, the broker shows an offer letter promising 2,800
                  SAR per month while the candidate is in Gopalganj. However, upon
                  landing at Riyadh or Dubai airport, a local company handler
                  confiscates the passport and forces the worker to sign a new,
                  inferior contract offering only 1,200 SAR with long 12-hour
                  shifts. Because the initial contract was never registered on
                  eMigrate or Qiwa, the worker has no proof to present to the
                  labor court.
                </p>
              </div>

              {/* Scam 3 */}
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

            {/* Redressal Section */}
            <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-800/50 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                <FaUserShield className="text-xl" />
                Official Legal Recourse &amp; Redressal for Gopalganj Workers
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
                the Gopalganj Town Police Station / Mirganj Police Station.
                WorkWise Visa provides complimentary legal referral documentation
                for affected candidates.
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
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
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
                      Official permission required to travel back to Gopalganj on annual vacation.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 9: SAFE REMITTANCE & BANKING ARCHITECTURE FOR GOPALGANJ     */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Financial Security &amp; Asset Preservation
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Safe Remittance &amp; Banking Guide for Gopalganj NRI Families
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Protecting your hard-earned foreign exchange begins with avoiding
                illegal Hawala networks and utilizing regulated institutional
                banking channels:
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
                  account with major banks in Gopalganj (such as State Bank of
                  India Main Branch Post Office Road, PNB Mirganj, or Central Bank
                  Thawe). NRE interest earnings are{" "}
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
                  family&apos;s bank account in Gopalganj within 5 to 15 minutes at
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
        {/* SECTION 10: TRANSIT & PROCESSING ROUTING FROM GOPALGANJ & THAWE      */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Logistics &amp; Travel Assistance
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Consular &amp; Biometric Travel Routes from Gopalganj
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
                    To Gorakhpur Diagnostic Labs (105 km)
                  </h3>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Gorakhpur is under 2 hours by road via National Highway 27 or
                  via regular express trains from Thawe Junction (THE).
                  Extremely convenient for candidates assigned to Gorakhpur
                  Wafid clinics, saving travel time and accommodation expenses.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaTrainSubway className="text-xl" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    To Patna POE &amp; Wafid Centers (145 km)
                  </h3>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Direct buses and trains connect Gopalganj and Siwan Junction
                  to Patna Junction / Danapur in 3 to 4 hours via JP Setu or
                  elevated corridors. Ideal for attending State HRD attestation
                  at Vikas Bhawan or the Protector of Emigrants office.
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
                  Superfast (via Siwan) and Vaishali Express reach New Delhi in
                  15 to 16 hours for European VFS biometric appointments (Poland,
                  Romania, Croatia) or Qatar Visa Center clearance.
                </p>
              </div>
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
                Book Your In-Person or Online Profile Assessment in Gopalganj
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300">
                Are you looking for a legitimate work visa for Saudi Arabia, UAE,
                Qatar, Oman, or Europe? Connect directly with our authorized
                recruitment specialists. We review your trade experience, verify
                passport eligibility, and match your profile with active,
                government-approved job demands.
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
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Candidate Frequently Asked Questions
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Everything Gopalganj Candidates Need to Know About Overseas Work Visas
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Authoritative answers to common questions regarding government
                approvals, medical screenings, passport rules, salary
                protection, and avoiding fraudulent agents:
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {/* FAQ 1 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  1. How can candidates from Gopalganj verify if a Saudi Arabia work visa is 100% genuine?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Never rely on photocopies or WhatsApp images. An authentic
                  Saudi work visa can be verified directly on the official Saudi
                  government portal Muqeem (
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
                  2. I have an ECR passport from Gopalganj. Can I travel to Dubai on an employment visa?
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
                  3. Where can candidates from Gopalganj take the Saudi Takamol Skill Verification (SVP) test?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Takamol SVP is a compulsory skill test mandated by the Saudi
                  government for skilled professions including electricians,
                  welders, plumbers, auto mechanics, and HVAC technicians. Tests
                  are conducted at certified Takamol testing centers in major
                  cities like Gorakhpur, Patna, Lucknow, and New Delhi. WorkWise
                  Visa provides technical trade coaching and documentation
                  support to ensure candidates pass on their first attempt.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  4. Can I choose which clinic I go to for my GAMCA / Wafid medical in Gopalganj?
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
                  clinic in the city of your choice (Gorakhpur or Patna). Any
                  private clinic in Gopalganj or Mirganj claiming they can issue an
                  authentic GAMCA fit slip directly is operating fraudulently.
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
                  8. What are the requirements for candidates from Gopalganj applying for Poland work permits?
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
                  10. What is the total processing timeline for a Saudi Arabia work visa from Gopalganj?
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

              {/* FAQ 11 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  11. How can candidates from Gopalganj apply for a Police Clearance Certificate (PCC)?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  PCC applications must be submitted online via the official
                  Passport Seva portal (passportindia.gov.in) selecting RPO Patna
                  or the Gopalganj Post Office Passport Seva Kendra (POPSK).
                  Following biometric verification and local thana verification,
                  the PCC is issued within 7 to 14 days, valid for European work
                  permits and Qatar visa processing.
                </p>
              </div>

              {/* FAQ 12 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  12. Who is responsible for providing the overseas flight ticket?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Under Section 15 of the Emigration Act 1983 and GCC statutory
                  regulations, the foreign employer is legally obligated to
                  furnish the initial one-way international air ticket to the host
                  country and roundtrip airfare upon contractual completion. Never
                  pay extra cash to local agents for flight tickets on direct
                  employer orders.
                </p>
              </div>

              {/* FAQ 13 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  13. What should I do if an overseas employer reduces my salary upon arrival?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Because WorkWise Visa authenticates your contract through the
                  eMigrate and Qiwa/MoHRE systems, you have full legal backing.
                  You can immediately register an electronic complaint with the
                  host labor ministry or file a grievance through the Indian
                  Embassy via the MEA MADAD portal (madad.gov.in) for immediate
                  consular intervention.
                </p>
              </div>

              {/* FAQ 14 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  14. What are the company accommodation and food standards provided on Gulf contracts?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  All employer contracts cleared through eMigrate POE mandate
                  free bachelor housing with air conditioning, clean drinking
                  water, sanitation utilities, and either centralized mess
                  catering or a dedicated monthly food allowance (typically 300
                  to 400 SAR/AED/QAR on top of basic salary).
                </p>
              </div>

              {/* FAQ 15 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  15. Can diploma or ITI holders from Gopalganj get ECNR passport status?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Yes. Candidates who have passed Class 10 or hold a 2-to-3 year
                  diploma from a State Council for Technical Education (SCTE&amp;VT)
                  recognized polytechnic qualify for ECNR status. Submitting your
                  educational certificate during passport issuance or renewal
                  removes the ECR endorsement.
                </p>
              </div>

              {/* FAQ 16 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  16. What is the process for Qatar Visa Center (QVC) biometrics?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  For Qatar employment visas, candidates complete their
                  biometric fingerprinting, digital photo capture, medical
                  screening, and electronic contract signing inside an official
                  QVC facility in India (such as New Delhi or Kolkata). Once
                  cleared at QVC, the Qatar Residence Permit (QID) is issued
                  automatically upon arrival in Doha.
                </p>
              </div>

              {/* FAQ 17 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  17. What insurance protections are provided in case of injury abroad?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  All candidates deployed through WorkWise Visa are protected
                  under mandatory health insurance provided by the employer and
                  the ₹10 Lakh Pravasi Bharatiya Bima Yojana (PBBY). Hospital
                  treatment costs up to ₹1 Lakh and accidental permanent
                  disability compensation up to ₹10 Lakh are disbursed directly
                  to the worker or designated family nominees in Gopalganj.
                </p>
              </div>

              {/* FAQ 18 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  18. Can candidates from Hathwa, Mirganj, or Barauli book consultations online?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Yes. Candidates from any part of Gopalganj district can submit
                  their profile online via our consultation form or contact our
                  official candidate helpline on WhatsApp at +91 8130161603 for
                  free profile evaluations, trade test counseling, and vacancy
                  matching.
                </p>
              </div>

              {/* FAQ 19 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  19. What is the minimum educational qualification required for European skilled jobs?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  For industrial trades such as 6G welding, electrical
                  installation, pipe fabrication, and CNC machining, an ITI
                  certificate or polytechnic diploma with 2 to 3 years of
                  verifiable experience is required. For food processing and
                  logistics operatives, 10th or 12th pass certificates are
                  sufficient.
                </p>
              </div>

              {/* FAQ 20 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  20. How do I track my visa processing status with WorkWise Visa?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Every candidate registered with WorkWise Visa receives a
                  unique application tracking identifier. You can track your
                  file status in real time—from trade testing to medical report
                  upload, embassy visa stamping, and POE clearance dispatch—via
                  our online application tracking portal at
                  workwisevisa.com/track.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 13: INTERNAL LINKING & CROSS-CITY DIRECTORY NAVIGATION      */}
        {/* ==================================================================== */}
        <section className="bg-slate-100 py-12 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 text-center">
              Explore WorkWise Visa Regional &amp; Country Portals
            </h3>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
              <Link
                href="/locations/patna"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                Patna Headquarters &amp; POE Guide
              </Link>
              <Link
                href="/locations/noida"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                Noida Corporate Branch
              </Link>
              <Link
                href="/locations/siwan"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                Siwan Candidate Desk &amp; Gulf Guide
              </Link>
              <Link
                href="/countries/saudi-arabia"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                Saudi Arabia Work Visa Guide
              </Link>
              <Link
                href="/countries/uae"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                UAE Dubai Employment Visa
              </Link>
              <Link
                href="/countries/qatar"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                Qatar Work Residence Permit
              </Link>
              <Link
                href="/countries/oman"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                Oman Employment Visa
              </Link>
              <Link
                href="/countries/bahrain"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                Bahrain LMRA Work Visa
              </Link>
              <Link
                href="/jobs"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                Browse Active Overseas Jobs
              </Link>
              <Link
                href="/track"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                Track Visa Application Status
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
