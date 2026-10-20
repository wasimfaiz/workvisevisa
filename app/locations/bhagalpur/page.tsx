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
// Title: 57 chars (Ideal range: 50-60 chars)
// Description: 155 chars (Ideal range: 150-160 chars)
// ============================================================================
export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Work Visa Consultancy in Bhagalpur | WorkWise Visa",
  description:
    "Leading work visa consultancy in Bhagalpur, Bihar. Verified Gulf & Europe employment, eMigrate POE clearance, GAMCA medical, Takamol & nurse licensing.",
  keywords: [
    "work visa consultancy in bhagalpur",
    "visa consultancy in bhagalpur",
    "gulf job consultancy in bhagalpur",
    "overseas recruitment agency bhagalpur",
    "saudi work visa bhagalpur",
    "dubai work permit bihar",
    "europe work visa consultancy bhagalpur",
    "gamca medical test bhagalpur",
    "takamol skill verification bihar",
    "nursing jobs abroad bhagalpur",
    "workwise visa bhagalpur",
    "silk city bhagalpur overseas placement",
    "kahalgaon ntpc welder jobs abroad",
    "naugachia gulf driver recruitment",
  ],
  alternates: {
    canonical: "https://www.workwisevisa.com/locations/bhagalpur",
  },
  openGraph: {
    title: "Work Visa Consultancy in Bhagalpur | WorkWise Visa",
    description:
      "Premier overseas job consultancy in Bhagalpur, Bihar. Authentic employer contracts for Saudi Arabia, UAE, Qatar & Europe with complete legal protection.",
    url: "https://www.workwisevisa.com/locations/bhagalpur",
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.workwisevisa.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WorkWise Visa Consultancy for Bhagalpur & Anga Division",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Visa Consultancy in Bhagalpur | WorkWise Visa",
    description:
      "Verified overseas job placement and work visa services in Bhagalpur, Bihar. 100% legal eMigrate, POE Patna clearance, and direct employer contracts.",
    images: ["https://www.workwisevisa.com/og-image.jpg"],
  },
};

export default function BhagalpurLocationPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EmploymentAgency",
        "@id": "https://www.workwisevisa.com/locations/bhagalpur#agency",
        name: "WorkWise Visa - Bhagalpur & Anga Regional Desk",
        url: "https://www.workwisevisa.com/locations/bhagalpur",
        logo: "https://www.workwisevisa.com/logo.png",
        image: "https://www.workwisevisa.com/og-image.jpg",
        description:
          "Authoritative overseas employment consultancy for Bhagalpur and Anga Division candidates. Specializing in verified GCC and European work visas, eMigrate POE compliance, GAMCA medical advisory, and Takamol trade testing.",
        telephone: "+918130161603",
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bhagalpur",
          addressRegion: "Bihar",
          addressCountry: "IN",
          postalCode: "812001",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.2425,
          longitude: 86.9842,
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Bhagalpur" },
          { "@type": "AdministrativeArea", name: "Naugachia" },
          { "@type": "AdministrativeArea", name: "Kahalgaon" },
          { "@type": "AdministrativeArea", name: "Sultanganj" },
          { "@type": "AdministrativeArea", name: "Pirpainti" },
          { "@type": "AdministrativeArea", name: "Sabour" },
          { "@type": "AdministrativeArea", name: "Nathnagar" },
          { "@type": "AdministrativeArea", name: "Jagdishpur" },
          { "@type": "AdministrativeArea", name: "Banka" },
          { "@type": "AdministrativeArea", name: "Anga Division" },
          { "@type": "AdministrativeArea", name: "East Bihar" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Overseas Work Visa & Career Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Saudi Arabia Qiwa Verified Employment Visa",
                description:
                  "Direct corporate visas under Saudi Vision 2030 with authenticated Qiwa digital contracts and Takamol SVP testing.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "UAE Dubai 2-Year Employment Visa",
                description:
                  "Pre-approved MoHRE contracts with electronic entry permits and direct WPS salary bank accounts.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "European National Type-D Work Permits",
                description:
                  "Government work authorizations for Poland, Romania, and Croatia with long-stay Schengen legal entry.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Healthcare & Paramedical Licensure Advisory",
                description:
                  "DataFlow verification and Prometric exam alignment for JLNMCH Bhagalpur and Bihar nursing graduates seeking hospital roles abroad.",
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.workwisevisa.com/locations/bhagalpur#breadcrumb",
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
            name: "Bhagalpur",
            item: "https://www.workwisevisa.com/locations/bhagalpur",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.workwisevisa.com/locations/bhagalpur#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How can skilled workers from Bhagalpur verify if a Gulf job offer is genuine?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Job seekers from Bhagalpur should check three vital government points: 1) Verify that the recruitment agency is registered with the Ministry of External Affairs (MEA) on the eMigrate portal. 2) Ensure the employment visa is issued directly by a registered corporate sponsor on foreign portals like Saudi Qiwa or UAE MoHRE. 3) Demand a formal bilingual employment contract with pre-stamped salary terms and an insurance policy under Pravasi Bharatiya Bima Yojana (PBBY) before handing over documents or payments.",
            },
          },
          {
            "@type": "Question",
            name: "Where do Bhagalpur candidates undergo GAMCA / Wafid medical tests?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Candidates must register online at the official portal wafid.com to generate a medical examination slip. Because clinics are allocated randomly, candidates from Bhagalpur are typically assigned to authorized GCC diagnostic centers located in Patna (such as Kankarbagh or Exhibition Road) or Kolkata. Medical exams include chest X-rays, serology testing for Hepatitis and HIV, and general health screenings.",
            },
          },
          {
            "@type": "Question",
            name: "What is the procedure for Takamol Skill Verification (SVP) for technicians from Bhagalpur?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Saudi Ministry of Human Resources mandates Takamol SVP certification for 23 technical occupations including electricians, welders, plumbers, HVAC technicians, and automotive mechanics. Candidates from Bhagalpur take a 30-minute computer-based theoretical test and a 2-hour practical bench evaluation at an accredited trade test center before the Saudi Embassy issues their work visa.",
            },
          },
          {
            "@type": "Question",
            name: "Can nursing and paramedical graduates from Bhagalpur get jobs in Gulf hospitals?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Graduates from JLNMCH Bhagalpur and recognized Bihar nursing colleges can access overseas healthcare vacancies in Saudi Arabia, the UAE, Qatar, and Oman. This requires primary source credential verification through DataFlow, registration with the host nation's health authority (such as SCFHS in Saudi Arabia or DOH/DHA in the UAE), and passing the Prometric licensure examination.",
            },
          },
        ],
      },
    ],
  };

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
              <span className="font-semibold text-emerald-400">Bhagalpur</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Semantic Headline & Value Proposition */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  <FaShieldHalved className="text-emerald-400" />
                  Government-Compliant Overseas Career Pathway for Bhagalpur
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                  Work Visa &amp; Overseas Employment Consultancy for{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    Bhagalpur
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                  As the historic Silk City and premier economic-educational hub of
                  East Bihar&apos;s Anga Division, Bhagalpur supplies critical
                  talent spanning industrial power plant technicians (NTPC Kahalgaon),
                  precision 6G/TIG welders, electrical engineers, hospital nursing
                  staff (JLNMCH), textile artisans, and heavy commercial drivers to
                  Saudi Arabia, the UAE, Qatar, Oman, and European national markets.
                  WorkWise Visa provides Bhagalpur&apos;s workforce with institutional
                  transparency: verified direct employer visas, pre-negotiated salaries,
                  Takamol trade skill testing, GAMCA medical advisory, and 100% legal
                  eMigrate Emigration Clearance (POE).
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
                        Bhagalpur Overseas Career Desk
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
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all hover:from-emerald-500 hover:to-teal-500 hover:shadow-emerald-600/40 hover:scale-[1.01]"
                    >
                      Book Free Profile Evaluation in Bhagalpur
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
        {/* SECTION 2: EXECUTIVE SUMMARY & BHAGALPUR'S MIGRATION REALITY         */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                In-Depth Regional Analysis &amp; Workforce Demographics
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Why Bhagalpur is the Premier Industrial &amp; Technical Talent Hub of East Bihar
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 text-base leading-relaxed text-slate-600 lg:grid-cols-2">
              <div className="space-y-5">
                <p>
                  Bhagalpur district serves as the strategic economic, educational,
                  and industrial capital for the entire Anga Division, exercising a
                  formidable sphere of influence across Banka, Munger, Khagaria,
                  Katihar, and neighboring Santhal Pargana border districts. Globally
                  renowned as the &ldquo;Silk City of Bihar&rdquo; for its century-old
                  Tussar silk weaving legacy, modern Bhagalpur has evolved into a major
                  pipeline of specialized technical talent. Across vital sub-divisions
                  and blocks—including Sadar Bhagalpur, Nathnagar, Jagdishpur, Sabour,
                  Sultanganj, Kahalgaon, Pirpainti, Shahkund, Goradih, Naugachia,
                  Gopalpur, and Bihpur—thousands of ambitious technicians seek verified,
                  government-protected career mobility across the Gulf Cooperation Council
                  (GCC) and the European Union.
                </p>
                <p>
                  Unlike purely general labor sending corridors, Bhagalpur possesses a
                  distinctively skilled and diverse industrial workforce. The presence of
                  the massive NTPC Kahalgaon Super Thermal Power Station has nurtured
                  generations of elite 6G pipe welders, high-pressure boiler fabricators,
                  industrial plant fitters, and scaffolding specialists. Institutions such
                  as Bhagalpur College of Engineering (BCE Bhagalpur), Government ITI
                  Barari, and Government Polytechnic provide a continuous stream of certified
                  electrical, mechanical, and civil supervisors. Furthermore, the Jawaharlal
                  Nehru Medical College and Hospital (JLNMCH Mayaganj) and allied nursing
                  colleges train thousands of healthcare professionals who are in immense
                  demand for hospital networks across Riyadh, Dubai, Doha, and Muscat.
                </p>
              </div>

              <div className="space-y-5">
                <p>
                  Transportation logistics along the Vikramshila Setu spanning the holy
                  Ganges and the National Highway 80 corridor (connecting Mokama, Munger,
                  Bhagalpur, and Sahibganj) have established a robust community of heavy
                  commercial vehicle operators. Heavy trailer drivers, dump truck operators,
                  and crane technicians from Naugachia and Kahalgaon possess exceptional
                  on-road experience, making them prime candidates for Gulf infrastructure
                  megaprojects such as NEOM, the Red Sea Project, Dubai Metro expansions,
                  and Qatar industrial developments.
                </p>
                <p>
                  However, aspiring candidates in Bhagalpur have historically faced exploitation
                  from unauthorized local brokers operating around Station Road, Aliganj,
                  and Nathnagar who charge exorbitant fees for bogus &ldquo;Supply Visas&rdquo;
                  or commercial tourist passes. WorkWise Visa bridges this divide by providing
                  direct institutional facilitation via our regional headquarters at Varma
                  Centre, Boring Road, Patna—accessible within 3.5 to 4 hours via direct
                  daily express trains. Every contract is vetted, authenticated on foreign
                  ministry portals (Qiwa/MoHRE), and covered by mandatory insurance.
                </p>
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
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Statutory Compliance &amp; Legal Framework
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                ECR vs. ECNR Passport Regulations for Bhagalpur Migrants
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Understanding your legal status under the Ministry of External
                Affairs is the foundation of secure overseas employment and
                prevents detention at Indian international departure airports.
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
                      For candidates without a 10th-grade matriculation certificate
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  <p>
                    If the observation page of your passport notes{" "}
                    <strong className="text-slate-800">
                      &ldquo;Emigration Check Required&rdquo;
                    </strong>
                    , Section 10 of the Emigration Act 1983 mandates that you
                    must obtain an official Emigration Clearance (POE) digital
                    stamp before boarding international flights to 18 notified
                    countries.
                  </p>
                  <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                      18 Notified ECR Nations:
                    </h4>
                    <p className="mt-1 text-xs text-slate-600">
                      Saudi Arabia, United Arab Emirates, Qatar, Oman, Kuwait,
                      Bahrain, Malaysia, Jordan, Libya, Lebanon, Iraq, Yemen,
                      Sudan, Afghanistan, Indonesia, Syria, Thailand, and South
                      Sudan.
                    </p>
                  </div>
                  <h4 className="font-bold text-slate-800">
                    Mandatory POE Patna Clearance Protocol:
                  </h4>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        The foreign principal uploads an approved demand letter
                        and contract on the{" "}
                        <a
                          href="https://emigrate.gov.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-emerald-600 underline"
                        >
                          eMigrate portal
                        </a>
                        .
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        The registered recruiting agency logs candidate trade
                        credentials, medical results, and valid visa numbers.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        Automatic integration of the mandatory Pravasi Bharatiya
                        Bima Yojana (PBBY) policy.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        The POE Patna office reviews and digitally signs the
                        emigration clearance pass, authorizing smooth transit
                        at Patna, Kolkata, or Delhi immigration terminals.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ECNR Passport Guide */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <FaFileCircleCheck className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      ECNR (Non-ECR Status)
                    </h3>
                    <p className="text-xs text-slate-500">
                      For matriculates, diploma holders, graduates &amp; taxpayers
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  <p>
                    Passports without an ECR stamp qualify for Emigration Check
                    Not Required (ECNR) status. Eligible citizens include anyone
                    who has cleared Class 10 (Matriculation), holders of 2-year
                    technical ITI or 3-year Polytechnic diplomas, nurses with
                    state council registration, and income tax payees.
                  </p>
                  <div className="rounded-lg bg-blue-50/60 p-4 border border-blue-200">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-blue-900">
                      ECNR Travel Privileges:
                    </h4>
                    <p className="mt-1 text-xs text-blue-800">
                      Candidates holding ECNR passports can board flights directly
                      to any Gulf or European destination upon visa stamping
                      without requiring a POE endorsement letter.
                    </p>
                  </div>
                  <h4 className="font-bold text-slate-800">
                    WorkWise Legal Safety Best Practices:
                  </h4>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-blue-500 shrink-0" />
                      <span>
                        Even for ECNR holders, WorkWise Visa strongly mandates
                        enrolling in the ₹10 Lakh PBBY insurance policy for family
                        safety.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-blue-500 shrink-0" />
                      <span>
                        Degree and diploma attestation via State HRD (Vikas Bhawan,
                        Patna), MEA New Delhi, and host country embassies.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-blue-500 shrink-0" />
                      <span>
                        Full alignment with European Type-D National Visas (Poland,
                        Romania, Croatia) which always require clean educational
                        and police clearance credentials.
                      </span>
                    </li>
                  </ul>
                </div>
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
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Target Employment Corridors
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Comprehensive Visa &amp; Work Regulations by Destination
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Detailed breakdowns of official labor laws, digital portals,
                salary protection mechanisms, and mandatory trade qualifications
                for Bhagalpur candidates across Gulf and European corridors.
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
                      Under Saudi Ministry of Human Resources rules, paper
                      contracts hold zero legal validity. Every worker receives
                      an authenticated digital contract on the{" "}
                      <a
                        href="https://qiwa.sa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 underline font-semibold"
                      >
                        Qiwa platform
                      </a>
                      . The contract specifies basic wage in Saudi Riyals (SAR),
                      standard working hours (max 8 hours + overtime per Article
                      98), paid vacation entitlements, and medical insurance
                      grade.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaAward className="text-emerald-600" />
                      Takamol Skill Verification (SVP)
                    </h4>
                    <p className="text-xs leading-relaxed">
                      For 23 technical occupations (electricians, pipe fitters,
                      SMAW/TIG welders, HVAC technicians, and automotive
                      mechanics), Takamol SVP certification is compulsory.
                      Candidates from Bhagalpur undergo a 30-minute computer
                      theory test and a 2-hour practical bench assessment before
                      the Saudi Consulate will stamp their work visa.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaMoneyBillTrendUp className="text-emerald-600" />
                      Wage Protection System (WPS)
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Upon arrival in Saudi Arabia and issuance of the resident
                      ID (Iqama), employers must provide a digital payroll card
                      (e.g., Al Rajhi, SNB, or Mada). Monthly payments are
                      tracked in real-time by the Saudi Central Bank (SAMA).
                      Firms delaying wages face immediate portal suspension and
                      labor ministry fines.
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
                      United Arab Emirates (Dubai &amp; Abu Dhabi) Employment Visa
                    </h3>
                  </div>
                  <Link
                    href="/countries/uae"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-800 hover:underline"
                  >
                    View Complete UAE Work Visa Guide <FaArrowRight />
                  </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3 text-sm text-slate-600">
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaFileContract className="text-teal-600" />
                      MoHRE Standardized Offer (MB-1)
                    </h4>
                    <p className="text-xs leading-relaxed">
                      The UAE Ministry of Human Resources and Emiratisation (MoHRE)
                      requires employers to issue a formal MB-1 job offer letter
                      in both Arabic and the employee&apos;s native language. The terms
                      cannot be changed when the final 2-year labor contract is
                      generated in the UAE.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaHospital className="text-teal-600" />
                      In-Country DHA Medical &amp; Emirates ID
                    </h4>
                    <p className="text-xs leading-relaxed">
                      After arriving on an entry permit, candidates complete their
                      in-country medical screening (DHA in Dubai or SEHA in Abu
                      Dhabi) for chest X-rays and blood tests, followed by 10-finger
                      biometrics at ICP customer happiness centers for their Smart
                      Emirates ID card.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaMoneyBillTrendUp className="text-teal-600" />
                      WPS Electronic Payroll Protection
                    </h4>
                    <p className="text-xs leading-relaxed">
                      All mainland companies must disburse salaries through the
                      UAE Central Bank Wages Protection System (WPS) directly to
                      the employee&apos;s bank card (such as Al Ansari or Lulu
                      Payroll Card) on or before the due date with zero income
                      tax deductions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Destination 3: Qatar & Kuwait */}
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-800">
                      Destination Focus #3
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      Qatar, Kuwait &amp; Oman Industrial Corridors
                    </h3>
                  </div>
                  <div className="flex gap-3 text-xs font-semibold">
                    <Link href="/countries/qatar" className="text-cyan-700 hover:underline">
                      Qatar Guide &rarr;
                    </Link>
                    <Link href="/countries/kuwait" className="text-cyan-700 hover:underline">
                      Kuwait Guide &rarr;
                    </Link>
                    <Link href="/countries/oman" className="text-cyan-700 hover:underline">
                      Oman Guide &rarr;
                    </Link>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3 text-sm text-slate-600">
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaPassport className="text-cyan-600" />
                      Qatar Ministry of Labour Approval
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Corporate employment visas for Doha and Ras Laffan industrial
                      cities require Ministry of Labour block quota approvals and
                      VFS biometrics in Kolkata or Delhi, backed by Qatar&apos;s
                      non-discriminatory statutory minimum wage laws.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaBuildingColumns className="text-cyan-600" />
                      Kuwait Shoun Work Permits
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Governed by the Public Authority for Manpower (PAM / Shoun),
                      Kuwait work visas require police clearance certificates (PCC)
                      from the Regional Passport Office, GAMCA medical clearance,
                      and embassy visa stamping in New Delhi.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaShieldHalved className="text-cyan-600" />
                      Oman Royal Oman Police (ROP) Clearances
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Employment visas for Muscat, Sohar, and Duqm industrial zones
                      are issued through the Ministry of Labour and ROP e-visa
                      systems, guaranteeing fixed housing allowances and mandatory
                      overtime compensation under Omani Labour Law.
                    </p>
                  </div>
                </div>
              </div>

              {/* Destination 4: Europe (Poland, Romania, Croatia) */}
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                      Destination Focus #4
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      European Union (Poland, Romania &amp; Croatia) Work Permits
                    </h3>
                  </div>
                  <Link
                    href="/countries/poland"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    View Poland Work Permit Guide <FaArrowRight />
                  </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3 text-sm text-slate-600">
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaAward className="text-blue-600" />
                      Provincial Government Work Authorizations
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Applicants receive official provincial labor permits (such as
                      the Polish Voivodeship Zezwolenie na Pracę or Romanian Aviz
                      de Muncă) issued directly by European immigration ministries
                      prior to consular file submission.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaGlobe className="text-blue-600" />
                      National Type-D Long Stay Visas
                    </h4>
                    <p className="text-xs leading-relaxed">
                      WorkWise Visa handles full documentation, VFS appointment
                      booking, international travel health insurance (€30,000
                      Schengen coverage), and MEA apostille certification for
                      National Type-D employment visa stamping in New Delhi.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaMoneyBillTrendUp className="text-blue-600" />
                      EU Regulated Wages &amp; Residency Path
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Wages range between €850 and €1,500/month (₹80,000 to
                      ₹1,40,000 INR) with strict 40-hour workweeks, overtime pay,
                      subsidized housing, and eligibility to apply for Temporary
                      Residence Cards (Karta Pobytu) leading to long-term EU
                      residency.
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
                Medical Compliance Standards
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                GAMCA / Wafid Medical Protocol for Bhagalpur Candidates
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Before foreign consulates approve employment visas for Saudi
                Arabia, Qatar, UAE, Kuwait, Oman, or Bahrain, candidates must be
                certified medically fit by an authorized clinic governed by the
                Gulf Health Council.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Box 1: Online Registration */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <FaSuitcaseMedical className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  1. Centralized Wafid Appointment Slip
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Medical appointment slips must be booked exclusively through{" "}
                  <a
                    href="https://wafid.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald-600 underline"
                  >
                    wafid.com
                  </a>
                  . The centralized algorithm randomly allocates the clinic.
                  Candidates cannot pick a specific clinic. The standard fee is
                  fixed at $10 USD online + approximately ₹5,500 to ₹6,500
                  payable directly at the assigned laboratory in Patna or Kolkata.
                </p>
              </div>

              {/* Box 2: Diagnostic Battery */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                  <FaHospital className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  2. Mandatory Clinical Screening Battery
                </h3>
                <div className="mt-2 space-y-2 text-xs sm:text-sm text-slate-600">
                  <p>Screenings comprise strict assessments:</p>
                  <ul className="space-y-1 text-xs list-disc list-inside">
                    <li>
                      <strong>Chest Digital X-Ray:</strong> Detects active or
                      healed pulmonary tuberculosis (TB) scars, calcifications,
                      or pleural lesions.
                    </li>
                    <li>
                      <strong>Serology Blood Panel:</strong> Tests for HIV 1/2,
                      HBsAg (Hepatitis B), Anti-HCV (Hepatitis C), and VDRL.
                    </li>
                    <li>
                      <strong>Biochemical Panels:</strong> Fasting blood sugar,
                      Serum Creatinine, Bilirubin, and SGPT/SGOT enzymes.
                    </li>
                    <li>
                      <strong>Physical &amp; Vision Exam:</strong> Blood pressure,
                      ECG for candidates over 40, and Ishihara color blindness tests.
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
                  3. Managing UNFIT Status &amp; Re-Testing
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If marked <strong>UNFIT</strong> due to active Hepatitis or
                  pulmonary tuberculosis scarring, the result is locked into the
                  GCC electronic database for 6 to 12 months across all clinics
                  in India. WorkWise Visa provides confidential pre-screening
                  guidance in Bhagalpur to verify clinical fitness before
                  generating permanent Wafid slips, shielding candidates from
                  medical travel bans.
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
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Verified Earnings &amp; Compensation
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Trade-Wise Salary Benchmarks for Bhagalpur Candidates
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Authentic salary ranges for corporate vacancies in Saudi Arabia,
                the UAE, Qatar, and Europe. All contracts include free company
                housing, site transport, and medical health insurance.
              </p>
            </div>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-800 uppercase font-semibold">
                  <tr>
                    <th className="px-4 py-3.5">Trade / Skill Category</th>
                    <th className="px-4 py-3.5">Saudi Arabia (SAR)</th>
                    <th className="px-4 py-3.5">UAE Dubai (AED)</th>
                    <th className="px-4 py-3.5">Qatar (QAR)</th>
                    <th className="px-4 py-3.5">Europe (Net EUR)</th>
                    <th className="px-4 py-3.5">Mandatory Benefits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      6G Pipe Welder (TIG &amp; ARC / ASME IX)
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      2,400 - 3,400 SAR
                    </td>
                    <td className="px-4 py-3 font-bold text-teal-600">
                      2,600 - 3,600 AED
                    </td>
                    <td className="px-4 py-3 font-bold text-slate-800">
                      2,500 - 3,500 QAR
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-700">
                      €1,100 - €1,500
                    </td>
                    <td className="px-4 py-3 text-xs">
                      Accommodation + Food Allowance + Joint Bonus
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Industrial Electrician (Takamol/ITI)
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      1,800 - 2,600 SAR
                    </td>
                    <td className="px-4 py-3 font-bold text-teal-600">
                      1,900 - 2,700 AED
                    </td>
                    <td className="px-4 py-3 font-bold text-slate-800">
                      1,800 - 2,500 QAR
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-700">
                      €850 - €1,150
                    </td>
                    <td className="px-4 py-3 text-xs">
                      Camp Housing + Medical + Transport + OT
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Heavy Trailer / Lowbed Driver (GCC License)
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      2,600 - 3,800 SAR
                    </td>
                    <td className="px-4 py-3 font-bold text-teal-600">
                      2,800 - 4,000 AED
                    </td>
                    <td className="px-4 py-3 font-bold text-slate-800">
                      2,700 - 3,700 QAR
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-700">
                      €1,200 - €1,700
                    </td>
                    <td className="px-4 py-3 text-xs">
                      Trip Allowance + Free Housing + Annual Ticket
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Staff Nurse (GNM/B.Sc - Prometric/DataFlow)
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      4,000 - 6,500 SAR
                    </td>
                    <td className="px-4 py-3 font-bold text-teal-600">
                      4,500 - 7,500 AED
                    </td>
                    <td className="px-4 py-3 font-bold text-slate-800">
                      4,200 - 6,800 QAR
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-700">
                      €1,600 - €2,200
                    </td>
                    <td className="px-4 py-3 text-xs">
                      Hospital Accommodation + Duty Transport + Health
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      HVAC Chiller &amp; Ducting Technician
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      1,900 - 2,800 SAR
                    </td>
                    <td className="px-4 py-3 font-bold text-teal-600">
                      2,000 - 3,000 AED
                    </td>
                    <td className="px-4 py-3 font-bold text-slate-800">
                      1,900 - 2,700 QAR
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-700">
                      €900 - €1,250
                    </td>
                    <td className="px-4 py-3 text-xs">
                      Company Housing + Tools + Health Card
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Structural Fitter / Fabricator
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      1,600 - 2,300 SAR
                    </td>
                    <td className="px-4 py-3 font-bold text-teal-600">
                      1,700 - 2,400 AED
                    </td>
                    <td className="px-4 py-3 font-bold text-slate-800">
                      1,600 - 2,200 QAR
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-700">
                      €850 - €1,150
                    </td>
                    <td className="px-4 py-3 text-xs">
                      Camp Stay + Mess Kitchen + Overtime
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Textile / Garment Stitching Operator
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      1,400 - 2,000 SAR
                    </td>
                    <td className="px-4 py-3 font-bold text-teal-600">
                      1,500 - 2,100 AED
                    </td>
                    <td className="px-4 py-3 font-bold text-slate-800">
                      1,400 - 1,900 QAR
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-700">
                      €800 - €1,050
                    </td>
                    <td className="px-4 py-3 text-xs">
                      Factory Housing + Production Incentive + Medical
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Shuttering Carpenter / Mason / Steel Fixer
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      1,300 - 1,700 SAR
                    </td>
                    <td className="px-4 py-3 font-bold text-teal-600">
                      1,400 - 1,800 AED
                    </td>
                    <td className="px-4 py-3 font-bold text-slate-800">
                      1,300 - 1,650 QAR
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-700">
                      €800 - €1,050
                    </td>
                    <td className="px-4 py-3 text-xs">
                      Camp + Free Mess / Food Allowance
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 7: ANTI-FRAUD EXPOSÉ & LOCAL SUB-AGENT PITFALLS             */}
        {/* ==================================================================== */}
        <section className="bg-slate-900 py-16 sm:py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Candidate Protection Advisory
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-white">
                How Unlicensed Intermediaries Trap Candidates in Bhagalpur
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300">
                Be aware of common deception methods used by unaccredited
                middlemen across East Bihar and learn how WorkWise Visa enforces
                foolproof legal security.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <FaTriangleExclamation className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  The &ldquo;Supply Visa&rdquo; Trap
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Sub-agents frequently place workers with unverified labor
                  subcontractors. Instead of working for a prime contractor,
                  workers are rented out daily with no fixed pay, unhygienic
                  camps, and frequent salary defaults. WorkWise Visa places
                  candidates strictly with direct corporate sponsors.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <FaTriangleExclamation className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Tourist Visa False Promises
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Agents send job seekers to Dubai on a 30-day tourist visa,
                  promising it will convert to an employment visa upon landing.
                  When the visa expires, workers face overstay fines and arrest.
                  WorkWise Visa candidates travel strictly on pre-issued
                  employment entry permits.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <FaTriangleExclamation className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Passport Seizure &amp; Blackmail
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Unaccredited village agents take candidates&apos; original
                  passports and demand escalating payments of ₹50,000 to
                  ₹1,50,000 before returning documents. Under Indian law,
                  passport confiscation by private agents is a punishable offense.
                  WorkWise Visa works transparently through formal accounts.
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
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Essential Worksite Arabic Lexicon for Bhagalpur Technicians
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Mastering key Arabic terms enhances on-site safety, streamlines
                trade evaluations, and empowers candidates during initial
                foreman interactions across Saudi and Gulf project sites.
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
                    <td className="px-4 py-3 text-xs">Mandatory PPE, hardhat, harness &amp; safety briefings</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-slate-900">لحام كهربائي</td>
                    <td className="px-4 py-3 font-semibold text-emerald-700">Laham Kahraba&apos;i</td>
                    <td className="px-4 py-3">Electric Arc Welding</td>
                    <td className="px-4 py-3 text-xs">Structural fabrication and pipe joint welding</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-slate-900">تمديدات كابلات</td>
                    <td className="px-4 py-3 font-semibold text-emerald-700">Tamdeedat Kablat</td>
                    <td className="px-4 py-3">Cable Pulling / Conduit Laying</td>
                    <td className="px-4 py-3 text-xs">Electrical containment, trunking and glanding</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-slate-900">مخطط هندسي</td>
                    <td className="px-4 py-3 font-semibold text-emerald-700">Mukhattat Handasi</td>
                    <td className="px-4 py-3">Engineering Blueprint / Drawing</td>
                    <td className="px-4 py-3 text-xs">Reading isometric drawings and site schematics</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-slate-900">صيانة دورية</td>
                    <td className="px-4 py-3 font-semibold text-emerald-700">Siyana Dawriyya</td>
                    <td className="px-4 py-3">Routine Maintenance / PPM</td>
                    <td className="px-4 py-3 text-xs">HVAC filters, pump lubrication and valve inspections</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-slate-900">عقد عمل موثق</td>
                    <td className="px-4 py-3 font-semibold text-emerald-700">&apos;Aqd &apos;Amal Muwaththaq</td>
                    <td className="px-4 py-3">Attested Employment Contract</td>
                    <td className="px-4 py-3 text-xs">Digital Qiwa / MoHRE verified labor contract</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 9: SAFE REMITTANCE & BANKING ARCHITECTURE                    */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Family Financial Security
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Safe Remittance &amp; Banking Architecture for Bhagalpur Families
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Protect your overseas earnings from illicit hawala networks.
                Follow verified RBI banking guidelines for safe, fast transfers
                to your family in Bhagalpur, Naugachia, and Banka.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <FaBuildingColumns className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  1. NRE / NRO Bank Account Setup
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Open an NRE (Non-Resident External) account with major bank branches in
                  Bhagalpur (SBI Main Branch Kachhari Chowk, PNB Station Road, HDFC
                  Tilkamanjhi, or Bank of Baroda). Funds in NRE accounts are completely
                  exempt from Indian income tax and can be freely repatriated.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                  <FaHandHoldingDollar className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  2. Authorized Digital Remittance Channels
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Transfer funds through authorized banking gateways like STC
                  Pay, Urpay, Enjaz, Al Ansari Exchange, Lulu Exchange, or
                  direct SWIFT wire. Transferred funds reach your family&apos;s
                  account in Bihar within minutes at official competitive
                  exchange rates.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <FaShieldHalved className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  3. Strict Ban on Illegal Hawala Transfers
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Avoid unregulated cash transfer agents operating in local
                  bazaars. Hawala transactions are illegal under India&apos;s
                  Foreign Exchange Management Act (FEMA) and leave your family
                  without proof of income or insurance protection in case of
                  confiscation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 10: TRANSIT & PROCESSING ROUTING FROM BHAGALPUR JUNCTION     */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Logistics &amp; Travel Readiness
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Transit, Medical &amp; Embassy Routing from Bhagalpur
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Clear transit connectivity from Bhagalpur Junction (BGP) to GAMCA
                clinics in Patna, VFS appointment centers, and international
                departure airports.
              </p>
            </div>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-800 uppercase font-semibold">
                  <tr>
                    <th className="px-4 py-3.5">Processing Stage</th>
                    <th className="px-4 py-3.5">Location &amp; Facility</th>
                    <th className="px-4 py-3.5">Transit Route from Bhagalpur</th>
                    <th className="px-4 py-3.5">Average Turnaround</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      GAMCA / Wafid Medical Exam
                    </td>
                    <td className="px-4 py-3">Accredited Diagnostic Labs, Patna or Kolkata</td>
                    <td className="px-4 py-3 text-xs">
                      3.5 - 4 hrs via Danapur-Bhagalpur Intercity / Vikramshila Express to Patna
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      24 - 48 Hours
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Takamol SVP Skill Test
                    </td>
                    <td className="px-4 py-3">Authorized SVP Testing Centers, Patna or New Delhi</td>
                    <td className="px-4 py-3 text-xs">
                      Direct train to Patna Junction / Direct Vikramshila Express to New Delhi
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      Same Day Result
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      POE Emigration Clearance
                    </td>
                    <td className="px-4 py-3">Protector of Emigrants Office, Patna</td>
                    <td className="px-4 py-3 text-xs">
                      Digital processing via eMigrate (No physical presence needed)
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      2 - 4 Working Days
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      VFS Biometrics (Europe / Qatar)
                    </td>
                    <td className="px-4 py-3">VFS Global Centers, Kolkata or New Delhi</td>
                    <td className="px-4 py-3 text-xs">
                      Direct Howrah trains from Bhagalpur Junction or Patna/Kolkata flights
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      Appointment Based
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 11: FULL CONSULTATION BOOKING FORM (HOMEPAGE 2-COL STYLE)   */}
        {/* ==================================================================== */}
        <section id="consultation">
          <ConsultationForm />
        </section>

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
                Everything Bhagalpur Candidates Need to Know About Overseas Work Visas
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Detailed answers to key queries on government compliance,
                salary protection, medical screening, and travel safety.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {[
                {
                  q: "How can candidates from Bhagalpur check if their Gulf visa is 100% genuine?",
                  a: "You can verify your visa directly through the destination government's official portals. For Saudi Arabia, verify on the Qiwa (qiwa.sa) or Muqeem (muqeem.sa) portals using your visa number and passport. For the UAE, verify on the MoHRE portal (mohre.gov.ae) or ICP smart services. Never trust printed photocopies from local sub-agents without verifiable electronic database records.",
                },
                {
                  q: "What is an ECR passport and does a candidate from Bhagalpur need POE clearance?",
                  a: "If your passport has an 'Emigration Check Required' (ECR) stamp (typically given to citizens who have not passed Class 10 matriculation), you must obtain official Emigration Clearance from the Protector of Emigrants (POE) before traveling for employment to 18 designated ECR nations including Saudi Arabia, UAE, Qatar, and Oman. WorkWise Visa processes full digital POE clearances.",
                },
                {
                  q: "Where is the nearest GAMCA / Wafid medical examination center for Bhagalpur residents?",
                  a: "Wafid appointment slips must be booked at wafid.com. The system randomly allocates candidates to accredited diagnostic centers located in Patna (along Kankarbagh or Exhibition Road) or Kolkata. Do not take medical tests at unaccredited private pathology labs in Bhagalpur as foreign consulates will reject them.",
                },
                {
                  q: "What is the Takamol Skill Verification Program (SVP) for Saudi Arabia?",
                  a: "Takamol SVP is a mandatory skill assessment mandated by Saudi Arabia for 23 technical occupations including Electricians, Welders, Plumbers, Mechanics, and HVAC technicians. Candidates take a computer theory test and practical trade assessment at an authorized center before the Saudi Embassy stamps their work visa.",
                },
                {
                  q: "Can nursing graduates from JLNMCH Bhagalpur apply for hospital jobs in the Gulf?",
                  a: "Yes. Nursing graduates from JLNMCH Mayaganj and recognized Bihar nursing institutes can access overseas vacancies in Saudi Arabia, the UAE, Qatar, and Oman. Candidates complete DataFlow primary-source verification and pass the Prometric / MOH licensure exam, after which they are placed directly with accredited government or private hospitals.",
                },
                {
                  q: "Are European work permits available for skilled workers from Bhagalpur?",
                  a: "Yes. WorkWise Visa provides verified legal recruitment pathways for European nations including Poland, Romania, and Croatia. Candidates receive official government work permits (such as Voivodeship permits in Poland or Aviz de Muncă in Romania), followed by National Type-D employment visa stamping in New Delhi.",
                },
                {
                  q: "What is the Pravasi Bharatiya Bima Yojana (PBBY) and how does it protect workers?",
                  a: "PBBY is a mandatory ₹10 Lakh insurance scheme instituted by the Ministry of External Affairs for overseas Indian workers. It provides ₹10 Lakh coverage for accidental death or permanent disability, ₹1 Lakh for emergency medical hospitalization abroad, and covered repatriation airfare back to India.",
                },
                {
                  q: "How does the Wage Protection System (WPS) protect workers in the UAE and Saudi Arabia?",
                  a: "WPS requires employers to transfer salaries electronically into workers' official bank accounts monitored by the central banks of Saudi Arabia and the UAE. If an employer delays payments beyond established timelines, the system automatically freezes their government operations and levies heavy penalties.",
                },
                {
                  q: "What is an 'Azad Visa' and why should Bhagalpur workers strictly avoid it?",
                  a: "'Azad Visa' (Free Visa) is an illegal term used by brokers. Under Gulf labor laws, every work visa must be tied to a registered corporate employer who provides legal sponsorship. Working on an 'Azad visa' means working illegally for unauthorized third parties, exposing workers to immediate arrest, wage theft, and deportation.",
                },
                {
                  q: "How much time does it take to process a Gulf work visa from Bhagalpur?",
                  a: "A verified GCC employment visa typically takes between 25 to 45 business days. This timeframe includes employer contract generation on Qiwa/MoHRE, GAMCA medical examination, biometric collection, Takamol trade testing, and embassy visa stamping.",
                },
                {
                  q: "How long does a European work permit take to process?",
                  a: "European National Type-D work permits for Poland, Romania, and Croatia typically take 90 to 120 days. This includes provincial labor authorization, background vetting, apostille attestation, and VFS visa appointment clearance.",
                },
                {
                  q: "What documents must a candidate from Bhagalpur prepare for an overseas work visa?",
                  a: "Candidates must prepare: 1) Original passport with at least 12 months validity, 2) 10th-grade educational certificates or technical ITI/Polytechnic diploma, 3) 12 passport-size white-background photos, 4) Police Clearance Certificate (PCC) from the Regional Passport Office, and 5) Valid GAMCA medical fitness certificate.",
                },
                {
                  q: "Does WorkWise Visa charge any upfront fees before document verification?",
                  a: "No. WorkWise Visa provides free initial profile evaluation and trade counseling. We strictly adhere to Ministry of External Affairs compliance guidelines and never charge arbitrary registration fees before verifying eligibility and employer demand validity.",
                },
                {
                  q: "Can heavy drivers from Naugachia and Bhagalpur convert their Indian driving license abroad?",
                  a: "Indian licenses cannot be converted directly into Gulf licenses. However, heavy vehicle drivers from Bhagalpur travel on driver employment visas and attend subsidized training at accredited driving schools in Saudi Arabia or UAE to obtain their official GCC commercial driving license.",
                },
                {
                  q: "How can candidates from Bhagalpur safely send money back to their families?",
                  a: "Workers should transfer funds through authorized bank channels, official exchange centers (such as STC Pay, Enjaz, Al Ansari, or Lulu Exchange), or direct SWIFT transfers into their family's NRE bank account in Bhagalpur. Avoid illegal Hawala networks entirely.",
                },
                {
                  q: "What should a worker do if their overseas employer breaches contractual promises?",
                  a: "Workers holding verified digital Qiwa or MoHRE contracts can file formal grievances directly through the host nation's labor portal or contact the Indian Embassy's MADAD helpline (madad.gov.in) for immediate consular intervention and legal representation.",
                },
                {
                  q: "Can candidates from rural blocks of Bhagalpur attend virtual interviews?",
                  a: "Yes. WorkWise Visa coordinates virtual technical interviews via video conference, allowing candidates from Kahalgaon, Sultanganj, Pirpainti, Bihpur, and Banka to interact directly with foreign corporate recruitment panels without traveling out of Bihar.",
                },
                {
                  q: "What happens if a candidate is declared UNFIT in a GAMCA medical test?",
                  a: "If declared medically unfit due to conditions like active Hepatitis or pulmonary TB scars, the result is recorded in the GCC health database. WorkWise Visa provides confidential pre-screening guidance so candidates can check their health status before generating permanent Wafid slips.",
                },
                {
                  q: "How do I reach the nearest WorkWise Visa counseling hub from Bhagalpur?",
                  a: "Candidates can visit our Patna branch office at Varma Centre, Boring Road (3.5 to 4 hours via direct train such as Intercity Express or Vikramshila), or consult our senior advisors at our Noida Corporate HQ (Urbtech Trade Centre, Sector 132). You can also submit your details online through the consultation form.",
                },
                {
                  q: "What is the first step to apply for verified overseas vacancies from Bhagalpur?",
                  a: "The first step is to submit your trade details, phone number, and passport status through our online consultation form on this page or message our authorized WhatsApp helpline. Our senior counselor will evaluate your eligibility within 2 hours.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-slate-50/60 p-6"
                >
                  <h3 className="text-base font-bold text-slate-900">
                    {idx + 1}. {faq.q}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 13: REGIONAL HUBS & STATEWIDE NETWORK CROSS-LINKS            */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 border-t border-slate-200 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Explore WorkWise Visa Regional Offices &amp; Desks in Bihar &amp; North India
              </span>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-600">
                <Link href="/locations/patna" className="hover:text-emerald-700 font-bold text-emerald-800">
                  Patna Regional Office (Varma Centre)
                </Link>
                <span>•</span>
                <Link href="/locations/noida" className="hover:text-emerald-700 font-bold text-emerald-800">
                  Noida Corporate HQ
                </Link>
                <span>•</span>
                <Link href="/locations/delhi" className="hover:text-emerald-700">
                  Delhi NCR Desk
                </Link>
                <span>•</span>
                <Link href="/locations/gaya" className="hover:text-emerald-700">
                  Gaya Desk
                </Link>
                <span>•</span>
                <Link href="/locations/darbhanga" className="hover:text-emerald-700">
                  Darbhanga Desk
                </Link>
                <span>•</span>
                <Link href="/locations/muzaffarpur" className="hover:text-emerald-700">
                  Muzaffarpur Desk
                </Link>
                <span>•</span>
                <Link href="/locations/siwan" className="hover:text-emerald-700">
                  Siwan Desk
                </Link>
                <span>•</span>
                <Link href="/locations/gopalganj" className="hover:text-emerald-700">
                  Gopalganj Desk
                </Link>
                <span>•</span>
                <Link href="/locations/chhapra" className="hover:text-emerald-700">
                  Chhapra Desk
                </Link>
                <span>•</span>
                <Link href="/locations/gorakhpur" className="hover:text-emerald-700">
                  Gorakhpur Desk
                </Link>
                <span>•</span>
                <Link href="/locations/lucknow" className="hover:text-emerald-700">
                  Lucknow Desk
                </Link>
                <span>•</span>
                <Link href="/locations" className="hover:text-emerald-700 font-bold text-emerald-700">
                  View All Locations &rarr;
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
