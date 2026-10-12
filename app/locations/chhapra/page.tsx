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
  title: "Work Visa Consultancy in Chhapra | WorkWise Visa",
  description:
    "Leading work visa consultancy in Chhapra, Bihar. Verified Gulf & Europe employment, eMigrate POE clearance, GAMCA medical, Takamol & nurse licensing.",
  keywords: [
    "work visa consultancy in chhapra",
    "visa consultancy in chhapra",
    "gulf job consultancy in chhapra",
    "overseas recruitment agency chhapra",
    "saudi work visa chhapra",
    "dubai work permit bihar",
    "europe work visa consultancy chhapra",
    "gamca medical test chhapra",
    "takamol skill verification bihar",
    "nursing jobs abroad chhapra",
    "workwise visa chhapra",
  ],
  alternates: {
    canonical: "https://www.workwisevisa.com/locations/chhapra",
  },
  openGraph: {
    title: "Work Visa Consultancy in Chhapra | WorkWise Visa",
    description:
      "Premier overseas job consultancy in Chhapra, Bihar. Authentic employer contracts for Saudi Arabia, UAE, Qatar & Europe with complete legal protection.",
    url: "https://www.workwisevisa.com/locations/chhapra",
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.workwisevisa.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WorkWise Visa Consultancy for Chhapra & Saran Division",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Visa Consultancy in Chhapra | WorkWise Visa",
    description:
      "Verified overseas job placement and work visa services in Chhapra, Bihar. 100% legal eMigrate, POE Patna clearance, and direct employer contracts.",
    images: ["https://www.workwisevisa.com/og-image.jpg"],
  },
};

export default function ChhapraLocationPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EmploymentAgency",
        "@id": "https://www.workwisevisa.com/locations/chhapra#agency",
        name: "WorkWise Visa - Chhapra & Saran Regional Desk",
        url: "https://www.workwisevisa.com/locations/chhapra",
        logo: "https://www.workwisevisa.com/logo.png",
        image: "https://www.workwisevisa.com/og-image.jpg",
        description:
          "Authoritative overseas employment consultancy for Chhapra and Saran Division candidates. Specializing in verified GCC and European work visas, eMigrate POE compliance, GAMCA medical advisory, and Takamol trade testing.",
        telephone: "+91-98765-43210",
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chhapra",
          addressRegion: "Bihar",
          addressCountry: "IN",
          postalCode: "841301",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.7796, longitude: 84.7499,
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Chhapra" },
          { "@type": "AdministrativeArea", name: "Motipur" },
          { "@type": "AdministrativeArea", name: "Kanti" },
          { "@type": "AdministrativeArea", name: "Kurhani" },
          { "@type": "AdministrativeArea", name: "Sakra" },
          { "@type": "AdministrativeArea", name: "Mushahari" },
          { "@type": "AdministrativeArea", name: "Bochahan" },
          { "@type": "AdministrativeArea", name: "Aurai" },
          { "@type": "AdministrativeArea", name: "Saran Division" },
          { "@type": "AdministrativeArea", name: "North Bihar" },
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
                  "DataFlow verification and Prometric exam alignment for Chhapra Sadar & Saran Polytechnic and Bihar nursing graduates seeking hospital roles abroad.",
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.workwisevisa.com/locations/chhapra#breadcrumb",
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
            name: "Chhapra",
            item: "https://www.workwisevisa.com/locations/chhapra",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.workwisevisa.com/locations/chhapra#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How can skilled workers from Chhapra verify if a Gulf job offer is genuine?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Job seekers from Chhapra should check three vital government points: 1) Verify that the recruitment agency is registered with the Ministry of External Affairs (MEA) on the eMigrate portal. 2) Ensure the employment visa is issued directly by a registered corporate sponsor on foreign portals like Saudi Qiwa or UAE MoHRE. 3) Demand a formal bilingual employment contract with pre-stamped salary terms and an insurance policy under Pravasi Bharatiya Bima Yojana (PBBY) before handing over documents or payments.",
            },
          },
          {
            "@type": "Question",
            name: "Where do Chhapra candidates undergo GAMCA / Wafid medical tests?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Candidates must register online at the official portal wafid.com to generate a medical examination slip. Because clinics are allocated randomly, candidates from Chhapra are typically assigned to authorized GCC diagnostic centers located in Patna (such as Kankarbagh or Exhibition Road) or New Delhi. Medical exams include chest X-rays, serology testing for Hepatitis and HIV, and general health screenings.",
            },
          },
          {
            "@type": "Question",
            name: "What is the procedure for Takamol Skill Verification (SVP) for technicians from Chhapra?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Saudi Ministry of Human Resources mandates Takamol SVP certification for 23 technical occupations including electricians, welders, plumbers, HVAC technicians, and automotive mechanics. Candidates from Chhapra take a 30-minute computer-based theoretical test and a 2-hour practical bench evaluation at an accredited trade test center before the Saudi Embassy issues their work visa.",
            },
          },
          {
            "@type": "Question",
            name: "Can nursing and paramedical graduates from Chhapra get jobs in Gulf hospitals?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Graduates from Chhapra Sadar & Saran Polytechnic Chhapra and recognized Bihar nursing colleges can access overseas healthcare vacancies in Saudi Arabia, the UAE, Qatar, and Oman. This requires primary source credential verification through DataFlow, registration with the host nation's health authority (such as SCFHS in Saudi Arabia or DOH/DHA in the UAE), and passing the Prometric licensure examination.",
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
              <span className="font-semibold text-emerald-400">Chhapra, Bihar</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Semantic Headline & Value Proposition (Zero Clutter CTA buttons) */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  <FaShieldHalved className="text-emerald-400" />
                  Government-Compliant Overseas Career Pathway for Chhapra
                </div>

                <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
                  Work Visa &amp; Overseas Employment Consultancy for{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    Chhapra, Bihar
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                  As the commercial, medical, and education capital of North
                  Bihar&apos;s Saran Division, Chhapra supplies critical
                  talent spanning industrial electrical engineering, precision
                  welding, mechanical operations, hospital nursing, and heavy
                  transport to Saudi Arabia, the UAE, Qatar, Oman, and European
                  national markets. WorkWise Visa provides Chhapra&apos;s
                  workforce with institutional transparency: verified direct
                  employer visas, pre-negotiated salaries, Takamol trade skill
                  testing, GAMCA medical advisory, and 100% legal eMigrate
                  Emigration Clearance (POE).
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
                        Chhapra Overseas Career Desk
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
                      Book Free Profile Evaluation in Chhapra
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
        {/* SECTION 2: EXECUTIVE SUMMARY & MUZAFFARPUR'S MIGRATION REALITY       */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                In-Depth Regional Analysis &amp; Workforce Demographics
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Why Chhapra is the Nerve Center of North Bihar&apos;s
                Global Workforce
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 text-base leading-relaxed text-slate-600 lg:grid-cols-2">
              <div className="space-y-5">
                <p>
                  Chhapra district serves as the strategic economic and
                  transport hub for the entire Saran Division, commanding a
                  sphere of influence that extends across Vaishali, Sitamarhi,
                  Sheohar, and East Champaran. Historically celebrated for its
                  commercial trade and agricultural prominence, modern
                  Chhapra has emerged as a premier incubator of technical
                  trades. Across key blocks—including Motipur, Kanti, Kurhani,
                  Sakra, Mushahari, Bochahan, Aurai, and Gaighat—thousands of
                  ambitious professionals seek legal career migration to the
                  Gulf Cooperation Council (GCC) and European industrial zones.
                </p>
                <p>
                  Unlike purely artisan corridors, Chhapra possesses a
                  uniquely diversified workforce: certified industrial
                  electricians from polytechnic institutions, structural
                  welders, pipe fitters, precision CNC operators, and an
                  extensive community of nursing and healthcare graduates
                  trained around Sri Krishna Medical College and Hospital
                  (Chhapra Sadar & Saran Polytechnic). In addition, commercial heavy drivers and logistics
                  specialists operating along the Saran Emigration Belt along NH-19 & NH-31
                  possess exceptional qualifications for heavy transport roles
                  in the UAE, Saudi Arabia, and Europe.
                </p>
              </div>

              <div className="space-y-5">
                <p>
                  However, Chhapra&apos;s job seekers have frequently faced
                  exploitation by unauthorized local sub-agents operating around
                  Chhapra Junction, Hathua Market, and Municipal Chowk. These unregulated
                  middlemen charge illicit fees of ₹1,20,000 to ₹1,75,000 for
                  unregistered visit visas or spurious &ldquo;supply company&rdquo;
                  offers that lack Protector of Emigrants (POE) approval,
                  placing workers at risk of wage withholding, delayed resident
                  IDs (Iqamas), and sudden deportation.
                </p>
                <p>
                  WorkWise Visa eliminates these predatory broker networks. By
                  partnering directly with tier-1 engineering, infrastructure,
                  and healthcare conglomerates operating across Saudi Arabia,
                  the UAE, Qatar, Oman, and European nations (Poland, Romania,
                  Croatia), we ensure complete adherence to the{" "}
                  <strong>Emigration Act, 1983</strong>. Every candidate travels
                  with a genuine electronic work visa, a bilingual verified
                  contract, mandatory ₹10 Lakh PBBY insurance coverage, and
                  institutional skill verification.
                </p>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4">
                  <p className="text-sm font-semibold text-emerald-950">
                    💡 Authoritative Advisory for Chhapra Aspirants:
                  </p>
                  <p className="mt-1 text-xs text-emerald-800">
                    Never surrender your original passport or make cash deposits
                    to local intermediaries without confirming their Recruiting
                    Agent (RA) status on the{" "}
                    <a
                      href="https://emigrate.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline hover:text-emerald-950"
                    >
                      MEA eMigrate portal
                    </a>
                    . Real corporate employers never issue visas via handwritten
                    slips or informal WhatsApp photos.
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
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Statutory Compliance &amp; Legal Framework
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                ECR vs. ECNR Passport Regulations for Chhapra Migrants
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Understanding your legal status under the Ministry of External
                Affairs is the foundation of secure overseas employment and
                prevents detention at Indian international airports.
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
              <div className="rounded-2xl border border-teal-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                    <FaFileContract className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      ECNR (Emigration Check Not Required)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Matriculation pass, diploma holders, graduates, nurses &amp; IT taxpayers
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  <p>
                    Passports without the ECR notation are classified as ECNR.
                    ECNR holders are legally exempt from obtaining POE clearance
                    before boarding flights to the Gulf, Europe, or Southeast
                    Asia.
                  </p>
                  <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                      Qualifications for ECNR Status:
                    </h4>
                    <ul className="mt-2 space-y-1 text-xs text-slate-600 list-disc list-inside">
                      <li>
                        All persons holding a Matriculation certificate (10th
                        grade) or higher degrees.
                      </li>
                      <li>
                        Holders of 2-year or 3-year diplomas from recognized
                        state polytechnic colleges.
                      </li>
                      <li>
                        Registered nurses with GNM/B.Sc Nursing degrees.
                      </li>
                      <li>
                        Active income tax payers and candidates who have lived
                        abroad for over three consecutive years.
                      </li>
                    </ul>
                  </div>
                  <h4 className="font-bold text-slate-800">
                    WorkWise Safeguards for ECNR Candidates:
                  </h4>
                  <p className="text-xs">
                    Fraudulent agents frequently misuse ECNR status to fly
                    candidates to Dubai or Doha on 30-day visit visas, promising
                    that employers will &ldquo;convert them upon arrival.&rdquo;
                    WorkWise Visa ensures candidates travel exclusively on
                    genuine, pre-approved employment entry permits with direct
                    bank payroll (WPS) guarantees.
                  </p>
                </div>
              </div>
            </div>

            {/* In-Depth Legal Protection: PBBY Coverage Table */}
            <div className="mt-12 rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3">
                <FaScaleBalanced className="text-2xl text-emerald-600" />
                <h3 className="text-xl font-bold text-slate-900">
                  Pravasi Bharatiya Bima Yojana (PBBY) Benefits Matrix
                </h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Under MEA regulations, this compulsory insurance costs under ₹375
                for 2 years or ₹525 for 3 years, offering complete financial
                protection for families back home in Chhapra:
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
                        Disbursed directly to registered nominees in Chhapra
                        in the event of fatal worksite accidents or permanent loss
                        of limbs/vision.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        Emergency Hospitalization Abroad
                      </td>
                      <td className="px-4 py-3 font-bold text-slate-800">
                        Up to ₹1,00,000
                      </td>
                      <td className="px-4 py-3">
                        Covers emergency medical treatment, surgeries, and ICU
                        admissions in overseas medical centers.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        Medical Repatriation to India
                      </td>
                      <td className="px-4 py-3 font-bold text-slate-800">
                        Economy Airfare + Medical Escort
                      </td>
                      <td className="px-4 py-3">
                        Covers air travel back to India if the worker is declared
                        medically unfit due to work injury or serious illness.
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
                        Reimburses advocate and legal consultation expenses in
                        the destination country if the employer breaches the
                        contract.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        Family Compassionate Visit
                      </td>
                      <td className="px-4 py-3 font-bold text-slate-800">
                        Roundtrip Flight for 1 Relative
                      </td>
                      <td className="px-4 py-3">
                        Funds return air travel for an immediate family member
                        from Chhapra if the worker is hospitalized abroad
                        for over 30 days.
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
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Target Employment Corridors
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Comprehensive Visa &amp; Work Regulations by Destination
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Detailed breakdowns of official labor laws, digital portals,
                salary protection mechanisms, and mandatory trade qualifications
                for Chhapra candidates across Gulf and European corridors.
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
                      Candidates from Chhapra undergo a 30-minute computer
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
                      Issued by the UAE Ministry of Human Resources and
                      Emiratisation (
                      <a
                        href="https://www.mohre.gov.ae"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 underline font-semibold"
                      >
                        MoHRE
                      </a>
                      ). Before flying from India, the worker reviews and signs
                      this exact contract at VFS or registered centers, detailing
                      basic wage, accommodation allowance, medical coverage, and
                      end-of-service gratuity.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaIdCard className="text-emerald-600" />
                      Entry Permit vs. Residence Visa
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Workers travel on a valid 60-day pink Employment Entry
                      Permit. Within this window, the sponsoring employer completes
                      UAE internal medical fitness exams (blood test and chest
                      X-ray), captures biometrics for the Emirates ID, and stamps
                      the 2-year renewable Residence Visa inside the passport.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaShieldHalved className="text-emerald-600" />
                      Labor Ban Protections
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Under revised UAE labor statutes, workers are shielded
                      against arbitrary permanent labor bans. Following standard
                      notice periods and contractual obligations, employees
                      possess full legal rights to switch sponsors or return to
                      India with complete financial settlement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Destination 3: European National Type-D Work Permits (Poland, Romania, Croatia) */}
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-800">
                      High-Growth European Corridor
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      Schengen &amp; Eastern European Skilled Migration
                    </h3>
                  </div>
                  <Link
                    href="/jobs"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-800 hover:underline"
                  >
                    Explore European Job Demands <FaArrowRight />
                  </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3 text-sm text-slate-600">
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaPassport className="text-cyan-600" />
                      Poland Voivodeship Work Permit
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Known as <em>Zezwolenie na pracę Typ A</em>, issued directly
                      by the provincial governor (Urząd Wojewódzki). Authorizes
                      Indian workers to take up long-term industrial roles in food
                      processing, manufacturing, metal welding, and logistics.
                      Enables visa-free transit across Schengen nations and
                      public healthcare coverage under NFZ.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaBuildingColumns className="text-teal-600" />
                      Romania IGI Work Authorization
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Approved by the General Inspectorate for Immigration (
                      <a
                        href="https://igi.mai.gov.ro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 underline font-semibold"
                      >
                        IGI Romania
                      </a>
                      ). Known as <em>Aviz de Muncă</em>, this permit forms the
                      basis for applying for a long-stay Type-D employment visa
                      at the Romanian Embassy in New Delhi, providing net monthly
                      earnings from €700 to €1,200 with company-provided housing.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaGlobe className="text-emerald-600" />
                      Croatia MUP Stay &amp; Work Permit
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Following Croatia&apos;s full entry into Schengen, stay and
                      work permits (<em>Dozvola za boravak i rad</em>) are issued
                      upon clearing the official Labour Market Test through HZZ.
                      Highly advantageous for construction artisans, heavy truck
                      drivers, and hospital attendants seeking euro wages.
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
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                GAMCA / Wafid Medical Protocol for Chhapra Candidates
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
                  payable directly at the assigned laboratory.
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
                  guidance in Chhapra to verify clinical fitness before
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
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Trade-Wise Salary Benchmarks for Chhapra Candidates
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
                      Free Room + Medical + Overtime
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Pipe Fabricator &amp; 6G TIG Welder
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      2,200 - 3,200 SAR
                    </td>
                    <td className="px-4 py-3 font-bold text-teal-600">
                      2,400 - 3,400 AED
                    </td>
                    <td className="px-4 py-3 font-bold text-slate-800">
                      2,300 - 3,200 QAR
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-700">
                      €1,000 - €1,400
                    </td>
                    <td className="px-4 py-3 text-xs">
                      Accommodation + Safety Kit + Overtime
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Heavy Trailer / Equipment Operator
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      2,000 - 3,000 SAR
                    </td>
                    <td className="px-4 py-3 font-bold text-teal-600">
                      2,200 - 3,200 AED
                    </td>
                    <td className="px-4 py-3 font-bold text-slate-800">
                      2,100 - 2,900 QAR
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-700">
                      €950 - €1,300
                    </td>
                    <td className="px-4 py-3 text-xs">
                      Furnished Camp + Trip Allowances
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Staff Nurse (GNM / B.Sc + DataFlow)
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      3,800 - 5,500 SAR
                    </td>
                    <td className="px-4 py-3 font-bold text-teal-600">
                      4,500 - 6,500 AED
                    </td>
                    <td className="px-4 py-3 font-bold text-slate-800">
                      4,000 - 5,800 QAR
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-700">
                      €1,400 - €2,000
                    </td>
                    <td className="px-4 py-3 text-xs">
                      Hospital Housing + Annual Flight + CME
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      HVAC &amp; Central Chiller Technician
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      1,900 - 2,700 SAR
                    </td>
                    <td className="px-4 py-3 font-bold text-teal-600">
                      2,000 - 2,800 AED
                    </td>
                    <td className="px-4 py-3 font-bold text-slate-800">
                      1,900 - 2,600 QAR
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-700">
                      €900 - €1,200
                    </td>
                    <td className="px-4 py-3 text-xs">
                      Housing + Transport + Tool Allowance
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Plumbing &amp; Firefighting Installer
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      1,600 - 2,200 SAR
                    </td>
                    <td className="px-4 py-3 font-bold text-teal-600">
                      1,700 - 2,300 AED
                    </td>
                    <td className="px-4 py-3 font-bold text-slate-800">
                      1,600 - 2,200 QAR
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
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                How Unlicensed Intermediaries Trap Candidates in Chhapra
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300">
                Be aware of common deception methods used by unaccredited
                middlemen across North Bihar and learn how WorkWise Visa enforces
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
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Essential Worksite Arabic Lexicon for Chhapra Technicians
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
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Safe Remittance &amp; Banking Architecture for Chhapra Families
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Protect your overseas earnings from illicit hawala networks.
                Follow verified RBI banking guidelines for safe, fast transfers
                to your family in Chhapra.
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
                  Open an NRE (Non-Resident External) account with major banks in
                  Chhapra (SBI Main Branch, HDFC Dahiyawan, ICICI Station Road,
                  or Bank of Baroda). Funds in NRE accounts are completely
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
        {/* SECTION 10: TRANSIT & PROCESSING ROUTING FROM MUZAFFARPUR JUNCTION   */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Logistics &amp; Travel Readiness
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Transit, Medical &amp; Embassy Routing from Chhapra
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Clear transit connectivity from Chhapra Junction to GAMCA
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
                    <th className="px-4 py-3.5">Transit Route from Chhapra</th>
                    <th className="px-4 py-3.5">Average Turnaround</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      GAMCA / Wafid Medical Exam
                    </td>
                    <td className="px-4 py-3">Accredited Diagnostic Labs, Patna</td>
                    <td className="px-4 py-3 text-xs">
                      1.5 hrs via Vande Bharat / Intercity Express or NH-22 road cab
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      24 - 48 Hours
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Takamol SVP Skill Test
                    </td>
                    <td className="px-4 py-3">Authorized SVP Testing Centers, Patna/Delhi</td>
                    <td className="px-4 py-3 text-xs">
                      Direct train to Patna Junction / Overnight train to New Delhi
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
                    <td className="px-4 py-3">VFS Global Centers, Kolkata / New Delhi</td>
                    <td className="px-4 py-3 text-xs">
                      Direct flight from Darbhanga / Patna Airport or Rajdhani Express
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      Appointment Based
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      International Departure
                    </td>
                    <td className="px-4 py-3">IGI Airport New Delhi / Netaji Subhash Kolkata</td>
                    <td className="px-4 py-3 text-xs">
                      Direct connection via Patna/Darbhanga flights or premium trains
                    </td>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      Flight Schedule
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
                Book Your In-Person or Online Profile Assessment in Chhapra
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300">
                Submit your profile online or consult our emigration advisors.
                Our licensed career counselors will assess your trade
                experience, review your passport eligibility, and align you with
                authentic government-approved job demands.
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
                Everything Chhapra Candidates Need to Know About Overseas Work Visas
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Detailed answers to key queries on government compliance,
                salary protection, medical screening, and travel safety.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {[
                {
                  q: "How can candidates from Chhapra check if their Gulf visa is 100% genuine?",
                  a: "You can verify your visa directly through the destination government's official portals. For Saudi Arabia, verify on the Qiwa (qiwa.sa) or Muqeem (muqeem.sa) portals using your visa number and passport. For the UAE, verify on the MoHRE portal (mohre.gov.ae) or ICP smart services. Never trust printed photocopies from local sub-agents without verifiable electronic database records.",
                },
                {
                  q: "What is an ECR passport and does a candidate from Chhapra need POE clearance?",
                  a: "If your passport has an 'Emigration Check Required' (ECR) stamp (typically given to citizens who have not passed Class 10 matriculation), you must obtain official Emigration Clearance from the Protector of Emigrants (POE) before traveling for employment to 18 designated ECR nations including Saudi Arabia, UAE, Qatar, and Oman. WorkWise Visa processes full digital POE clearances.",
                },
                {
                  q: "Where is the nearest GAMCA / Wafid medical examination center for Chhapra residents?",
                  a: "Wafid appointment slips must be booked at wafid.com. The system randomly allocates candidates to accredited diagnostic centers located in Patna (along Kankarbagh or Exhibition Road). Do not take medical tests at unaccredited private pathology labs in Chhapra as foreign consulates will reject them.",
                },
                {
                  q: "What is the Takamol Skill Verification Program (SVP) for Saudi Arabia?",
                  a: "Takamol SVP is a mandatory skill assessment mandated by Saudi Arabia for 23 technical occupations including Electricians, Welders, Plumbers, Mechanics, and HVAC technicians. Candidates take a computer theory test and practical trade assessment at an authorized center before the Saudi Embassy stamps their work visa.",
                },
                {
                  q: "Can nursing graduates from Chhapra Sadar & Saran Polytechnic Chhapra apply for hospital jobs in the Gulf?",
                  a: "Yes. Nursing graduates from Chhapra Sadar & Saran Polytechnic and recognized Bihar nursing institutes can access overseas vacancies in Saudi Arabia, the UAE, Qatar, and Oman. Candidates complete DataFlow primary-source verification and pass the Prometric / MOH licensure exam, after which they are placed directly with accredited government or private hospitals.",
                },
                {
                  q: "Are European work permits available for skilled workers from Chhapra?",
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
                  q: "What is an 'Azad Visa' and why should Chhapra workers strictly avoid it?",
                  a: "'Azad Visa' (Free Visa) is an illegal term used by brokers. Under Gulf labor laws, every work visa must be tied to a registered corporate employer who provides legal sponsorship. Working on an 'Azad visa' means working illegally for unauthorized third parties, exposing workers to immediate arrest, wage theft, and deportation.",
                },
                {
                  q: "How much time does it take to process a Gulf work visa from Chhapra?",
                  a: "A verified GCC employment visa typically takes between 25 to 45 business days. This timeframe includes employer contract generation on Qiwa/MoHRE, GAMCA medical examination, biometric collection, Takamol trade testing, and embassy visa stamping.",
                },
                {
                  q: "How long does a European work permit take to process?",
                  a: "European National Type-D work permits for Poland, Romania, and Croatia typically take 90 to 120 days. This includes provincial labor authorization, background vetting, apostille attestation, and VFS visa appointment clearance.",
                },
                {
                  q: "What documents must a candidate from Chhapra prepare for an overseas work visa?",
                  a: "Candidates must prepare: 1) Original passport with at least 12 months validity, 2) 10th-grade educational certificates or technical ITI/Polytechnic diploma, 3) 12 passport-size white-background photos, 4) Police Clearance Certificate (PCC) from the Regional Passport Office, and 5) Valid GAMCA medical fitness certificate.",
                },
                {
                  q: "Does WorkWise Visa charge any upfront fees before document verification?",
                  a: "No. WorkWise Visa provides free initial profile evaluation and trade counseling. We strictly adhere to Ministry of External Affairs compliance guidelines and never charge arbitrary registration fees before verifying eligibility and employer demand validity.",
                },
                {
                  q: "Can heavy drivers from Chhapra convert their Indian driving license abroad?",
                  a: "Indian licenses cannot be converted directly into Gulf licenses. However, heavy vehicle drivers from Chhapra travel on driver employment visas and attend subsidized training at accredited driving schools in Saudi Arabia or UAE to obtain their official GCC commercial driving license.",
                },
                {
                  q: "How can candidates from Chhapra safely send money back to their families?",
                  a: "Workers should transfer funds through authorized bank channels, official exchange centers (such as STC Pay, Enjaz, Al Ansari, or Lulu Exchange), or direct SWIFT transfers into their family's NRE bank account in Chhapra. Avoid illegal Hawala networks entirely.",
                },
                {
                  q: "What should a worker do if their overseas employer breaches contractual promises?",
                  a: "Workers holding verified digital Qiwa or MoHRE contracts can file formal grievances directly through the host nation's labor portal or contact the Indian Embassy's MADAD helpline (madad.gov.in) for immediate consular intervention and legal representation.",
                },
                {
                  q: "Can candidates from rural blocks of Chhapra attend virtual interviews?",
                  a: "Yes. WorkWise Visa coordinates virtual technical interviews via video conference, allowing candidates from Marhaura, Sonepur, Ekma, and Revelganj to interact directly with foreign corporate recruitment panels without traveling out of Bihar.",
                },
                {
                  q: "What happens if a candidate is declared UNFIT in a GAMCA medical test?",
                  a: "If declared medically unfit due to conditions like active Hepatitis or pulmonary TB scars, the result is recorded in the GCC health database. WorkWise Visa provides confidential pre-screening guidance so candidates can check their health status before generating permanent Wafid slips.",
                },
                {
                  q: "How do I reach the nearest WorkWise Visa counseling hub from Chhapra?",
                  a: "Candidates can visit our Patna branch office at Varma Centre, Boring Road (1.5 hours via train or road), or consult our senior advisors at our Noida Corporate HQ (Urbtech Trade Centre, Sector 132). You can also submit your details online through the consultation form.",
                },
                {
                  q: "What is the first step to apply for verified overseas vacancies from Chhapra?",
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
                Bihar &amp; NCR Overseas Network
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Explore WorkWise Visa Across Strategic Regional Desks
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Access authorized recruitment, POE emigration processing, and
                trade counseling across our key hubs.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
              >
                Gorakhpur &amp; Purvanchal Desk
              </Link>
              <Link
                href="/locations/lucknow"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
              >
                Lucknow State Capital &amp; POE Desk
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
                href="/locations/chhapra"
                className="rounded-xl border border-emerald-500 bg-emerald-50/50 p-4 text-center shadow-sm"
              >
                <div className="font-bold text-emerald-800">
                  Chhapra Hub
                </div>
                <div className="text-xs text-emerald-600 mt-1">
                  Saran Division Central
                </div>
              </Link>

              <Link
                href="/locations/chhapra"
                className="rounded-xl border border-emerald-500 bg-emerald-50/50 p-4 text-center shadow-sm"
              >
                <div className="font-bold text-emerald-800">
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
