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
// Title: 53 chars (Ideal range: 50-60 chars)
// Description: 155 chars (Ideal range: 150-160 chars)
// ============================================================================
export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Work Visa Consultancy in Patna | WorkWise Visa Bihar",
  description:
    "Leading work visa consultancy in Patna, Bihar. Visit Varma Centre, Boring Road for verified Gulf & Europe jobs, POE clearance, GAMCA medical & Takamol testing.",
  keywords: [
    "work visa consultancy in patna",
    "visa consultancy in patna",
    "gulf job consultancy in patna",
    "overseas recruitment agency patna",
    "visa consultant boring road patna",
    "saudi work visa agency bihar",
    "dubai job placement in patna",
    "gamca medical test patna",
    "takamol test center patna",
    "varma centre boring road visa agency",
    "workwise visa patna",
    "poe patna emigration clearance",
    "poland work visa consultancy patna",
    "romania work permit bihar",
    "best visa consultant in patna",
    "ecr passport poe clearance patna",
    "hrd attestation vikas bhawan patna",
  ],
  alternates: {
    canonical: "https://www.workwisevisa.com/locations/patna",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Work Visa Consultancy in Patna | WorkWise Visa Bihar",
    description:
      "Premier overseas job placement & work visa consultancy in Patna. Verified employer contracts, Takamol trade testing, GAMCA medical & official POE eMigrate clearance.",
    url: "https://www.workwisevisa.com/locations/patna",
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.workwisevisa.com/images/workwise_logo.png",
        width: 1200,
        height: 630,
        alt: "WorkWise Visa Consultancy Office at Varma Centre, Boring Road, Patna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Visa Consultancy in Patna | WorkWise Visa Bihar",
    description:
      "Trusted overseas job placement & work visa consultancy in Patna. 100% verified employer contracts, Takamol tests, GAMCA medical & fast visa stamping.",
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
      "@id": "https://www.workwisevisa.com/locations/patna#localbusiness",
      name: "WorkWise Visa - Patna Regional Office (Europass Immigration Pvt Ltd)",
      legalName: "Europass Immigration Pvt Ltd",
      url: "https://www.workwisevisa.com/locations/patna",
      logo: "https://www.workwisevisa.com/images/workwise_logo.png",
      image: "https://www.workwisevisa.com/images/workwise_logo.png",
      description:
        "Premier overseas recruitment agency and work visa consultancy located at Varma Centre, Boring Road, Patna. Specializing in verified Gulf jobs (Saudi Arabia, UAE, Qatar, Oman), European employment (Poland, Romania, Croatia), POE eMigrate emigration clearance, GAMCA medical assistance, and Takamol SVP trade testing.",
      telephone: "+918130161603",
      email: "workwisevisa@gmail.com",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Varma Centre, Boring Road",
        addressLocality: "Patna",
        addressRegion: "Bihar",
        postalCode: "800001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "25.6133",
        longitude: "85.1165",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:30",
          closes: "18:30",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Patna" },
        { "@type": "City", name: "Muzaffarpur" },
        { "@type": "City", name: "Gaya" },
        { "@type": "City", name: "Darbhanga" },
        { "@type": "City", name: "Bhagalpur" },
        { "@type": "City", name: "Siwan" },
        { "@type": "City", name: "Gopalganj" },
        { "@type": "City", name: "Ara" },
        { "@type": "State", name: "Bihar" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.workwisevisa.com/locations/patna#breadcrumb",
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
          name: "Patna",
          item: "https://www.workwisevisa.com/locations/patna",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.workwisevisa.com/locations/patna#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is the WorkWise Visa office located in Patna, Bihar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WorkWise Visa operates from Varma Centre, Boring Road, Patna, Bihar 800001. We are conveniently accessible from Patna Junction (approx. 3.5 km), Patliputra Junction, and Jay Prakash Narayan Airport. Our office operates Monday through Saturday from 9:30 AM to 6:30 PM.",
          },
        },
        {
          "@type": "Question",
          name: "How does the Protector of Emigrants (POE) office in Patna handle ECR passport clearance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The POE office in Patna is the statutory authority under the Ministry of External Affairs that clears ECR passport holders traveling for employment to 18 designated countries. When a foreign employer uploads an approved job demand on eMigrate, WorkWise Visa submits the candidate contract, verified medical fitness, and PBBY insurance policy to obtain the digital POE Emigration Clearance slip.",
          },
        },
        {
          "@type": "Question",
          name: "Where can candidates take their GAMCA / Wafid medical examinations in Patna?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GAMCA (now Wafid) slips must be generated online through wafid.com, where the system algorithm randomly assigns an accredited diagnostic laboratory in Patna (concentrated around Kankarbagh, Exhibition Road, and Bailey Road). Never visit private unaccredited clinics, as GCC embassies only accept electronic certificates generated via the centralized Wafid system.",
          },
        },
        {
          "@type": "Question",
          name: "What documents are required for State HRD attestation in Patna before moving to the Gulf or Europe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For professional and technical occupations (engineers, nurses, managers, accountants), degree and diploma certificates must be authenticated by the Bihar Higher Education Department (Vikas Bhawan, Patna). Following State HRD authentication, documents are forwarded to the Ministry of External Affairs (MEA) in New Delhi for Apostille or Embassy Cultural Attestation.",
          },
        },
        {
          "@type": "Question",
          name: "How does WorkWise Visa protect candidates in Patna from fake visa scams?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WorkWise Visa operates with 100% statutory compliance under the Emigration Act 1983. We work directly with licensed principal corporate employers, verify every vacancy on Saudi Qiwa, UAE MoHRE, or European immigration portals, mandate biometric testing, ensure transparent electronic banking salary payments (WPS), and never accept cash for unverified jobs.",
          },
        },
      ],
    },
  ],
};

export default function PatnaLocationPage() {
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
              <span className="font-semibold text-emerald-400">Patna</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Semantic Headline & Value Proposition (Zero Clutter CTA buttons) */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  <FaShieldHalved className="text-emerald-400" />
                  Government-Approved Overseas Recruitment Center • Boring Road
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                  Work Visa &amp; Overseas Employment Consultancy in{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    Patna
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                  As Eastern India&apos;s administrative and overseas emigration
                  capital, Patna serves as the central hub for verified GCC
                  technical careers and European skilled migration. From our
                  office at Varma Centre, Boring Road, WorkWise Visa provides
                  end-to-end institutional support: direct corporate principal
                  hiring, Saudi Takamol skill testing, GAMCA medical clearance,
                  State HRD attestation, and seamless eMigrate POE approvals.
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
                      Hidden Charges
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
                        Patna Regional Career Desk
                      </h2>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                      <FaPassport className="text-xl" />
                    </div>
                  </div>

                  <div className="mt-5 space-y-3.5 text-sm">
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaLocationDot className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Office Address:</strong>{" "}
                        Varma Centre, Boring Road, Patna, Bihar 800001 (Mon-Sat,
                        9:30 AM - 6:30 PM).
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Destinations Handled:</strong>{" "}
                        Saudi Arabia, UAE (Dubai), Qatar, Oman, Poland, Romania,
                        and Croatia.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Monthly Salary Bands:</strong>{" "}
                        ₹45,000 to ₹1,95,000/mo with free company accommodation,
                        food allowances, and healthcare.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Statutory Safety:</strong>{" "}
                        All deployments verified under the Emigration Act 1983
                        with mandatory ₹10 Lakh PBBY insurance.
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-700 pt-5">
                    <a
                      href="#consultation"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all hover:from-emerald-500 hover:to-teal-500 hover:shadow-emerald-600/40 hover:scale-[1.01]"
                    >
                      Book Free Profile Evaluation in Patna
                      <FaArrowRight className="text-xs" />
                    </a>
                    <p className="mt-2 text-center text-xs text-slate-400">
                      Walk-ins welcome at Boring Road • Fast profile screening
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 2: EXECUTIVE OVERVIEW & PATNA AS THE EMIGRATION CAPITAL     */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Institutional Hub of Bihar
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Why Patna is the Central Nerve Center for Overseas Employment
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 text-base leading-relaxed text-slate-600 lg:grid-cols-2">
              <div className="space-y-5">
                <p>
                  Patna is not only the capital city of Bihar, but also the
                  vital gateway for the state&apos;s massive overseas workforce.
                  Every day, hundreds of candidates from northern and western
                  districts—including Siwan, Gopalganj, Saran (Chhapra),
                  Muzaffarpur, Darbhanga, Madhubani, Samastipur, and Motihari—travel
                  to Patna to complete essential administrative steps: attending
                  interviews, undertaking GAMCA/Wafid medical tests, appearing
                  for Saudi Takamol skill verifications, getting university
                  certificates attested at Vikas Bhawan, and securing clearance
                  from the Protector of Emigrants (POE).
                </p>
                <p>
                  Historically, job seekers arriving around Patna Junction,
                  Gandhi Maidan, and Bailey Road have faced predatory touts and
                  unlicensed brokers operating out of makeshift offices. These
                  intermediaries entice candidates with exaggerated salary
                  promises, charge inflated fees of ₹1,00,000 to ₹1,50,000, and
                  deliver unverified &ldquo;visit visas&rdquo; or forged company
                  demand letters that result in deportation or exploitation
                  overseas.
                </p>
              </div>

              <div className="space-y-5">
                <p>
                  WorkWise Visa established its regional operations at Varma
                  Centre, Boring Road, to provide an ethical, government-compliant
                  counterbalance. Our team operates under strict compliance with
                  the <strong>Emigration Act, 1983</strong>. We work exclusively
                  with verified principal employers across the GCC—supporting
                  Saudi Arabia&apos;s Vision 2030 developments, UAE infrastructure
                  mega-projects, Qatar energy facilities, and licensed European
                  manufacturing operations in Poland, Romania, and Croatia.
                </p>
                <p>
                  At WorkWise Visa Patna, candidates undergo professional skill
                  screening, receive bilingual contracts authenticated on
                  official ministry portals (Qiwa for Saudi Arabia, MoHRE for
                  UAE), obtain mandatory ₹10 Lakh PBBY insurance coverage, and
                  secure verified POE emigration clearance before paying any
                  service fees.
                </p>
                <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                  <p className="text-sm font-semibold text-blue-900">
                    🏛️ Official Compliance Advice:
                  </p>
                  <p className="mt-1 text-xs text-blue-800">
                    Always confirm an agency&apos;s valid Registration
                    Certificate (RC) number directly on the{" "}
                    <a
                      href="https://emigrate.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline hover:text-blue-950"
                    >
                      MEA eMigrate portal
                    </a>
                    . Under Section 16 of the Emigration Act 1983, recruiting
                    Indian citizens for overseas employment without a valid MEA
                    license is a non-bailable criminal offense.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 3: THE PROTECTOR OF EMIGRANTS (POE) PATNA STATUTORY PROCESS   */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Statutory Ministry of External Affairs Authority
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                The Protector of Emigrants (POE) Patna Clearance Guide
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                The POE Patna office oversees overseas worker protection across
                Bihar and Jharkhand. Here is how your migration file is legally
                authenticated under eMigrate 2.0 regulations.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Box 1: What POE Does */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <FaScaleBalanced className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Functions of POE Patna
                    </h3>
                    <p className="text-xs text-slate-500">
                      Established under Section 3 of the Emigration Act, 1983
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  <p>
                    The Protector of Emigrants (POE) is a statutory officer
                    appointed by the Ministry of External Affairs whose primary
                    legal mandate is to protect vulnerable Indian workers
                    migrating to designated ECR countries.
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>Minimum Referral Wages (MRW):</strong> POE
                        scrutinizes every foreign contract to ensure basic wages
                        meet or exceed the MEA floor rate set for each country
                        and trade.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>Employer Authenticity Check:</strong> Foreign
                        employers must be formally registered and approved on the{" "}
                        <a
                          href="https://emigrate.gov.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-blue-600 underline"
                        >
                          eMigrate portal
                        </a>{" "}
                        by the respective Indian Embassy.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>Insurance Policy Validation:</strong> Verification
                        of mandatory Pravasi Bharatiya Bima Yojana (PBBY)
                        coverage providing ₹10 Lakh death and disability security.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>Issue of Digital Clearance (EC):</strong> An
                        electronic clearance slip integrated with the Bureau of
                        Immigration (BOI) database at Indian international
                        airports.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Box 2: ECR vs ECNR Classification */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaPassport className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      ECR vs ECNR Classification in Bihar
                    </h3>
                    <p className="text-xs text-slate-500">
                      Determined by Passport Seva rules under MEA India
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  <p>
                    Candidates frequently ask how their passport type affects
                    their processing. Here is the legal breakdown:
                  </p>
                  <div className="space-y-3 text-xs">
                    <div className="rounded-lg bg-emerald-50 p-3 border border-emerald-200">
                      <strong className="text-emerald-900 block font-bold">
                        ECR Passports (No Matriculation Certificate):
                      </strong>
                      <span className="text-emerald-800">
                        Must obtain digital emigration clearance through a
                        registered Recruiting Agent via POE Patna before flying
                        to any of the 18 ECR nations (GCC, Malaysia, etc.).
                      </span>
                    </div>

                    <div className="rounded-lg bg-emerald-50 p-3 border border-emerald-200">
                      <strong className="text-emerald-900 block font-bold">
                        ECNR Passports (10th Pass, Degree / Diploma Holders):
                      </strong>
                      <span className="text-emerald-800">
                        Exempt from POE clearance. Can travel directly on valid
                        employment visas. However, work contracts must still be
                        authenticated on destination platforms (Qiwa/MoHRE) to
                        prevent salary exploitation.
                      </span>
                    </div>

                    <div className="rounded-lg bg-blue-50 p-3 border border-blue-200">
                      <strong className="text-blue-900 block font-bold">
                        European Work Permits (Poland, Romania, Croatia):
                      </strong>
                      <span className="text-blue-800">
                        European countries are NOT on the ECR list. Both ECR and
                        ECNR passport holders can travel to Europe once their
                        National Type-D visa is stamped by the embassy, without
                        POE exit clearance.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* In-Depth Legal Protection: PBBY Coverage Table */}
            <div className="mt-12 rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3">
                <FaShieldHalved className="text-2xl text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">
                  Pravasi Bharatiya Bima Yojana (PBBY) Benefits Schedule
                </h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                PBBY is mandatory for all ECR candidates undergoing clearance
                via POE Patna. It offers financial security for candidate
                families across Bihar:
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
                        Payable to nominated family members in case of fatal
                        worksite accident or permanent loss of limbs/sight abroad.
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
                        Covers emergency in-patient hospitalization, surgery, and
                        intensive treatment in foreign hospitals.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        Repatriation of Medically Unfit Worker
                      </td>
                      <td className="px-4 py-3 font-bold text-slate-800">
                        Actual Economy Airfare + Medical Escort
                      </td>
                      <td className="px-4 py-3">
                        Air passage back to Patna if certified medically unfit to
                        continue overseas work due to illness or injury.
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
                        Enables one immediate family member to visit if the
                        worker is hospitalized overseas for over 30 days.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        Legal Defense Assistance
                      </td>
                      <td className="px-4 py-3 font-bold text-slate-800">
                        Up to ₹45,00,0
                      </td>
                      <td className="px-4 py-3">
                        Reimbursement for legal representation fees in host nation
                        labor tribunals if employment is terminated unlawfully.
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
                for candidates in Patna across Gulf and European markets.
              </p>
            </div>

            <div className="mt-12 space-y-12">
              {/* Destination 1: Saudi Arabia */}
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                      Primary Destination
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      Kingdom of Saudi Arabia (KSA) Work Visa Process
                    </h3>
                  </div>
                                <Link
                href="/locations/muzaffarpur"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
              >
                Muzaffarpur &amp; Tirhut Division Desk
              </Link>
              <Link
                href="/locations/chhapra"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
              >
                Chhapra (Saran) Candidate Desk
              </Link>
              <Link
                href="/locations/darbhanga"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
              >
                Darbhanga Mithilanchal Desk
              </Link>
              <Link
                href="/locations/gaya"
                className="rounded-lg bg-white px-3.5 py-2 font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
              >
                Gaya Magadh Division Desk
              </Link>
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
                      certification. Candidates appearing at our Patna trade
                      testing center complete a 30-minute multiple-choice theory
                      exam and a 2-hour practical bench performance test before
                      visa stamping.
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
                      system freezes and labor court fines.
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
                      European Employment Pathway
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
        {/* SECTION 5: STATE HRD ATTESTATION & APOSTILLE PROCEDURE IN PATNA      */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Educational &amp; Legal Authentication
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                State HRD &amp; MEA Apostille Authentication in Patna
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Skilled professionals, engineers, paramedical staff, and managers
                must authenticate their degrees before foreign embassies stamp
                employment visas. WorkWise Visa guides candidates through the
                standard 3-tier attestation workflow:
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 font-bold text-lg">
                  1
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Bihar State HRD Attestation
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Conducted at the Department of Higher Education, Vikas Bhawan,
                  Patna. University degrees (from Patna University, AKU, Magadh
                  University, etc.) or State Technical Board diplomas are
                  cross-verified against university records and stamped by the
                  authorized regional signatory.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 font-bold text-lg">
                  2
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  MEA Apostille / Attestation
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Following State HRD authentication, the document is submitted
                  to the Ministry of External Affairs (CPV Division / Patiala
                  House, New Delhi). For Hague Convention nations (such as
                  Poland, Romania, and Croatia), a Hague Apostille sticker is
                  affixed. For GCC nations, standard MEA attestation is applied.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 font-bold text-lg">
                  3
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Embassy &amp; Cultural Attestation
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For Saudi Arabia, degrees must be authenticated by the Saudi
                  Cultural Attaché in New Delhi, requiring verified university
                  transcripts and an offer letter. For UAE and Qatar, the
                  respective embassy cultural division applies final seals
                  before visa approval.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 6: GAMCA / WAFID MEDICAL & TAKAMOL TESTING IN PATNA         */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Medical &amp; Technical Bench Testing
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                GAMCA Medical Centers &amp; Takamol Trade Testing in Patna
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Patna houses the authorized diagnostic laboratories for Gulf
                medical fitness and designated trade test facilities for the
                Saudi Skill Verification Program (SVP).
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* GAMCA Medical Box */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaHospital className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      GAMCA / Wafid Medical Protocol in Patna
                    </h3>
                    <p className="text-xs text-slate-500">
                      Governed by the Gulf Health Council
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  <p>
                    All candidates moving to Saudi Arabia, UAE, Qatar, Oman,
                    Kuwait, or Bahrain must register on{" "}
                    <a
                      href="https://wafid.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline font-semibold"
                    >
                      wafid.com
                    </a>
                    . The online system algorithm randomly allocates an accredited
                    diagnostic lab in Patna (located in Kankarbagh, Exhibition
                    Road, or Bailey Road).
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>Chest Digital X-Ray:</strong> Strict detection
                        of active or healed pulmonary tuberculosis (TB) scars.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>Serology Panel:</strong> Mandatory screening for
                        HIV, Hepatitis B (HBsAg), Hepatitis C (Anti-HCV), and
                        Syphilis (VDRL).
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>Biochemical &amp; Urine Tests:</strong> Fasting
                        blood sugar, liver function (SGOT/SGPT), renal panel,
                        and urine albumin.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>Pre-Medical Guidance:</strong> WorkWise Visa
                        offers pre-medical screenings to verify fitness before
                        generating official Wafid slips, preventing costly
                        multi-month GCC medical bans.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Takamol SVP Box */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaAward className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Saudi Takamol Skill Verification (SVP)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Mandated by the Saudi Ministry of Human Resources
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  <p>
                    For technical trades, Saudi embassies will not issue work
                    visas without an electronic Takamol SVP certificate. Trade
                    testing centers in Patna assess technical competence across
                    23 professional occupations:
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-600 shrink-0" />
                      <span>
                        <strong>Electrical Trades:</strong> Building
                        electricians, industrial wiring, panel board maintenance,
                        and cable termination.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-600 shrink-0" />
                      <span>
                        <strong>Mechanical &amp; Welding:</strong> 6G pipe
                        welders, TIG/ARC welders, pipe fabricators, and structural
                        riggers.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-600 shrink-0" />
                      <span>
                        <strong>HVAC &amp; Plumbing:</strong> Central chiller
                        technicians, duct fabricators, copper brazing, and
                        commercial plumbers.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-600 shrink-0" />
                      <span>
                        <strong>Dual Exam Format:</strong> A 30-minute computer
                        theory exam plus a 2-hour practical bench test. WorkWise
                        provides candidate preparatory workshops in Patna.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 7: SALARY BENCHMARKS & COMPENSATION TABLE                   */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Transparent Compensation Standards
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Overseas Salary &amp; Allowance Benchmarks for Patna Candidates
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Verified monthly salaries, company perks, and overtime
                entitlements across Gulf countries and European Union employment
                demands:
              </p>
            </div>

            <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-semibold">
                  <tr>
                    <th className="px-4 py-3.5">Job Profile / Trade</th>
                    <th className="px-4 py-3.5">Saudi Arabia (SAR)</th>
                    <th className="px-4 py-3.5">UAE (AED)</th>
                    <th className="px-4 py-3.5">Qatar (QAR)</th>
                    <th className="px-4 py-3.5">Europe (Net EUR)</th>
                    <th className="px-4 py-3.5">Benefits &amp; Allowances</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-slate-900">
                      Mechanical / Electrical Engineer
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      4,500 - 7,000 SAR
                      <span className="block text-[11px] text-slate-400">~₹1,00,000 - ₹1,55,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      5,000 - 8,000 AED
                      <span className="block text-[11px] text-slate-400">~₹1,13,000 - ₹1,81,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      4,800 - 7,500 QAR
                      <span className="block text-[11px] text-slate-400">~₹1,09,000 - ₹1,70,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €1,400 - €2,200
                      <span className="block text-[11px] text-slate-400">~₹1,27,000 - ₹2,00,000</span>
                    </td>
                    <td className="px-4 py-3.5 text-xs">
                      Furnished Accommodation + Transport + Family Visa Support
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-slate-900">
                      Staff Nurse (GNM / B.Sc)
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      3,800 - 5,500 SAR
                      <span className="block text-[11px] text-slate-400">~₹84,000 - ₹1,22,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      4,200 - 6,000 AED
                      <span className="block text-[11px] text-slate-400">~₹95,000 - ₹1,36,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      4,000 - 5,800 QAR
                      <span className="block text-[11px] text-slate-400">~₹91,000 - ₹1,31,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €1,300 - €1,900
                      <span className="block text-[11px] text-slate-400">~₹1,18,000 - ₹1,72,000</span>
                    </td>
                    <td className="px-4 py-3.5 text-xs">
                      Hospital Housing + Medical Malpractice Insurance
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-slate-900">
                      6G Pipe Welder / Fabricator
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
                      <span className="block text-[11px] text-slate-400">~₹57,000 - ₹77,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €1,100 - €1,500
                      <span className="block text-[11px] text-slate-400">~₹1,00,000 - ₹1,36,000</span>
                    </td>
                    <td className="px-4 py-3.5 text-xs">
                      Accommodation + Food Allowance + Overtime (1.5x)
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-slate-900">
                      Industrial Electrician / HVAC
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,000 - 2,800 SAR
                      <span className="block text-[11px] text-slate-400">~₹44,000 - ₹62,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,200 - 3,000 AED
                      <span className="block text-[11px] text-slate-400">~₹50,000 - ₹68,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,100 - 2,900 QAR
                      <span className="block text-[11px] text-slate-400">~₹48,000 - ₹66,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €1,000 - €1,400
                      <span className="block text-[11px] text-slate-400">~₹91,000 - ₹1,27,000</span>
                    </td>
                    <td className="px-4 py-3.5 text-xs">
                      Free Transport + Medical Insurance + Annual Leave
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-slate-900">
                      Heavy Equipment / Trailer Driver
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,600 - 3,600 SAR
                      <span className="block text-[11px] text-slate-400">~₹58,000 - ₹80,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,800 - 3,800 AED
                      <span className="block text-[11px] text-slate-400">~₹63,000 - ₹86,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,700 - 3,700 QAR
                      <span className="block text-[11px] text-slate-400">~₹61,000 - ₹84,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €1,200 - €1,800
                      <span className="block text-[11px] text-slate-400">~₹1,09,000 - ₹1,63,000</span>
                    </td>
                    <td className="px-4 py-3.5 text-xs">
                      Trip Allowance + Free Fuel + Company Accommodations
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 8: ANTI-FRAUD ADVISORY & PROTECTING CANDIDATES IN BIHAR     */}
        {/* ==================================================================== */}
        <section className="bg-slate-900 py-16 sm:py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Candidate Consumer Protection
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-white">
                How to Spot and Avoid Fake Visa Rackets in Patna
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300">
                Thousands of candidates traveling through Patna are targeted by
                unscrupulous agents. Here are the most prevalent deceptive
                schemes and how you can protect yourself legally:
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Trap 1 */}
              <div className="rounded-2xl border border-red-500/30 bg-slate-800/80 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/20 text-red-400">
                  <FaTriangleExclamation className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  The &ldquo;Direct Airport Visa&rdquo; Trap
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Fraudulent operators tell workers they do not need POE clearance
                  or embassy stamping, claiming their visa will be stamped
                  directly upon landing at the airport in Dubai or Riyadh. In
                  truth, without an authentic visa pre-verified on Indian
                  immigration databases, the candidate will be offloaded at
                  Patna or Delhi airport and face questioning by border control.
                </p>
              </div>

              {/* Trap 2 */}
              <div className="rounded-2xl border border-emerald-500/30 bg-slate-800/80 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                  <FaFileContract className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Fake Demand Letters
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Unlicensed agents print colorful offer letters on the forged
                  letterheads of well-known Gulf contractors (e.g., Saudi Aramco,
                  ADNOC, Almarai). Legitimate corporate employment offers are
                  never sent as isolated PDFs; they are generated through
                  official ministry portals (Saudi Qiwa, UAE MoHRE) and can be
                  verified with an official corporate Chamber of Commerce number.
                </p>
              </div>

              {/* Trap 3 */}
              <div className="rounded-2xl border border-blue-500/30 bg-slate-800/80 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                  <FaHandHoldingDollar className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Cash-Only Processing
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Rogue brokers insist on cash payments in tea stalls or hotel
                  lobbies near Patna Junction, refusing to issue GST invoices or
                  company receipts. WorkWise Visa executes transparent banking
                  transactions via official company accounts, issues formal GST
                  invoices, and protects your consumer rights under Indian law.
                </p>
              </div>
            </div>

            {/* Redressal Section */}
            <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-800/50 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                <FaUserShield className="text-xl" />
                Legal Grievance Redressal for Bihar Migrants
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                If you have been cheated by an unauthorized agent, file an
                immediate complaint on the{" "}
                <a
                  href="https://madad.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-300 underline"
                >
                  MADAD portal (madad.gov.in)
                </a>{" "}
                or submit a petition to the Protector of Emigrants (POE) Patna.
                WorkWise Visa provides pro-bono assistance to help affected
                candidates navigate the formal reporting process.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 9: GULF WORKSITE ARABIC TECHNICAL LEXICON                    */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Worksite Safety &amp; Language Readiness
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Gulf Worksite Technical Arabic Glossary for Patna Candidates
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Familiarity with key workplace Arabic terms enhances safety,
                accelerates on-the-job integration, and earns the respect of
                supervisors on Gulf industrial sites:
              </p>
            </div>

            <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-semibold">
                  <tr>
                    <th className="px-4 py-3">English Term</th>
                    <th className="px-4 py-3">Romanized Arabic (Spoken)</th>
                    <th className="px-4 py-3">Arabic Script</th>
                    <th className="px-4 py-3">Practical Worksite Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Site Foreman / Engineer
                    </td>
                    <td className="px-4 py-3 font-mono text-blue-600">Muallim / Muhandis</td>
                    <td className="px-4 py-3 font-arabic text-base text-slate-800">معلّم / مهندس</td>
                    <td className="px-4 py-3">
                      Addressing the technical in-charge or site supervisor.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Emergency Stop / Danger
                    </td>
                    <td className="px-4 py-3 font-mono text-red-600 font-bold">Waggif / Khatar</td>
                    <td className="px-4 py-3 font-arabic text-base text-slate-800">وقّف / خطر</td>
                    <td className="px-4 py-3">
                      Urgent safety command to stop heavy machinery or crane lifts.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Overtime Work
                    </td>
                    <td className="px-4 py-3 font-mono text-emerald-600">Idhafi</td>
                    <td className="px-4 py-3 font-arabic text-base text-slate-800">إضافي</td>
                    <td className="px-4 py-3">
                      Work hours beyond standard 8-hour shift, compensated at 1.5x basic wage.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Residency Permit / ID
                    </td>
                    <td className="px-4 py-3 font-mono text-blue-600">Iqama / Bataka</td>
                    <td className="px-4 py-3 font-arabic text-base text-slate-800">إقامة / بطاقة</td>
                    <td className="px-4 py-3">
                      Legal civil identity card issued within 90 days of arrival.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Monthly Salary / Wages
                    </td>
                    <td className="px-4 py-3 font-mono text-blue-600">Ratib / Ma&apos;ash</td>
                    <td className="px-4 py-3 font-arabic text-base text-slate-800">راتب / معاش</td>
                    <td className="px-4 py-3">
                      Fixed monthly remuneration transferred via Wage Protection System (WPS).
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Annual Leave / Vacation
                    </td>
                    <td className="px-4 py-3 font-mono text-blue-600">Ijazah Sanawiyah</td>
                    <td className="px-4 py-3 font-arabic text-base text-slate-800">إجازة سنوية</td>
                    <td className="px-4 py-3">
                      Paid annual leave with roundtrip employer-provided airfare.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 10: TRANSIT & REACHING BORING ROAD OFFICE IN PATNA           */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Transit &amp; Accessibility
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                How to Reach WorkWise Visa at Varma Centre, Boring Road
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Our office is centrally located in Patna, making it easily
                accessible by train, bus, auto-rickshaw, or flight:
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <FaTrainSubway className="text-xl" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    From Patna Junction (3.5 km)
                  </h3>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Take an e-rickshaw or auto directly toward Boring Road
                  Crossing / Varma Centre (15 to 20 minutes travel time).
                  Convenient for candidates arriving from Siwan, Gopalganj, Ara,
                  or Gaya.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaTrainSubway className="text-xl" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    From Patliputra Junction (4 km)
                  </h3>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Head through Bailey Road toward Boring Canal Road. Frequent
                  shared autos and app cabs (Ola/Uber) reach Varma Centre in
                  approximately 15 minutes.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaPlaneDeparture className="text-xl" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    From Patna Airport (5.5 km)
                  </h3>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Jay Prakash Narayan International Airport is a 20-minute drive
                  along Bailey Road and Boring Canal Road to Varma Centre.
                  Ample parking is available nearby.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 11: HEALTHCARE LICENSURE & ENGINEERING PROFESSIONAL CLEARANCE*/}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Healthcare &amp; White-Collar Credentials
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Medical, Nursing &amp; Engineering Overseas Licensure from Patna
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Graduates from institutions such as PMCH, NMCH, AIIMS Patna, and
                BIT Patna require international credential verification before
                foreign health ministries or engineering councils issue practice
                licenses:
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <FaSuitcaseMedical className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  DataFlow Primary Source Verification (PSV)
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The international standard for checking the authenticity of
                  nursing diplomas, MBBS degrees, and clinical experience letters.
                  DataFlow contacts the registrar of your college in Bihar
                  directly. A clean positive PSV report is mandatory for all
                  healthcare roles in Saudi Arabia, UAE, Qatar, and Oman.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <FaHospital className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Prometric &amp; Mumaris+ Examinations
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For Saudi Arabia (SCFHS), staff nurses must clear the Saudi
                  Licensing Examination (SLE) via computer-based Prometric centers.
                  For Dubai (DHA) and Abu Dhabi (DOH), nurses must complete the
                  UAE nursing examination. WorkWise Visa provides exam booking
                  and syllabus coaching from our Boring Road center.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  <FaBuildingColumns className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Saudi Council of Engineers (SCE) Accreditation
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  B.Tech and M.Tech graduates cannot be issued an engineering Iqama
                  in Saudi Arabia without formal SCE registration. This requires
                  original university transcripts, State HRD attestation from
                  Vikas Bhawan Patna, and Saudi Cultural Attaché authentication in
                  New Delhi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 12: SAFE REMITTANCE & NRI WEALTH PRESERVATION FOR BIHAR     */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Financial Security &amp; Asset Preservation
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Safe Remittance &amp; Banking Guide for Patna NRI Families
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Protecting your hard-earned foreign exchange begins with avoiding
                unregulated cash conduits and setting up compliant banking
                channels:
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
                  account at commercial banks in Patna (SBI Boring Road Branch,
                  PNB, or Bank of Baroda). NRE interest earnings are{" "}
                  <strong>completely tax-free in India</strong>.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <FaMoneyBillTrendUp className="text-2xl" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  Authorized Exchange Networks
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Transfer funds through licensed foreign exchange companies
                  such as Al Ansari Exchange, LuLu International, STC Pay, or
                  direct bank SWIFT transfers. Funds credit directly into your
                  family&apos;s bank account in Bihar within minutes at
                  competitive interbank exchange rates.
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
                  Sending money through unapproved cash channels violates the
                  Foreign Exchange Management Act (FEMA). Hawala transactions
                  risk police investigations, seizure of family bank accounts,
                  and heavy penalties from the Directorate of Enforcement.
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
                  Under Section 6 of the Indian Income Tax Act, 1961, residing
                  outside India for 182 days or more during a financial year
                  confers Non-Resident Indian (NRI) status, exempting your foreign
                  salary from Indian income tax assessments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 13: FULL CONSULTATION BOOKING FORM (HOMEPAGE 2-COL STYLE)   */}
        {/* ==================================================================== */}
        <ConsultationForm />

        {/* ==================================================================== */}
        {/* SECTION 14: EXHAUSTIVE FAQS (18 DETAILED TECHNICAL QUESTIONS)        */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Frequently Asked Questions
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Everything Candidates in Patna Need to Know About Work Visas
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Detailed answers to key queries on government compliance,
                medical requirements, document attestations, and overseas
                employment security:
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {/* FAQ 1 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  1. Where is the WorkWise Visa office in Patna, and what are your working hours?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Our office is located at Varma Centre, Boring Road, Patna,
                  Bihar 800001. We are open Monday through Saturday from 9:30 AM
                  to 6:30 PM. Candidates can walk in for in-person document
                  reviews or schedule an appointment online.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  2. What is the role of the Protector of Emigrants (POE) office in Patna?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  The POE Patna office is the statutory branch of the Ministry
                  of External Affairs responsible for protecting ECR passport
                  holders from Bihar and Jharkhand. POE verifies that the foreign
                  job order is authenticated, that wages comply with MEA minimum
                  rates, and that the worker is covered by mandatory ₹10 Lakh
                  Pravasi Bharatiya Bima Yojana (PBBY) insurance.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  3. How do I get an appointment for GAMCA / Wafid medical tests in Patna?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  You must book your appointment online exclusively via{" "}
                  <a
                    href="https://wafid.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 underline"
                  >
                    wafid.com
                  </a>
                  . You cannot select a specific clinic manually; the centralized
                  system randomly allocates an accredited lab in Patna. WorkWise
                  Visa assists candidates with appointment generation and provides
                  pre-check advice.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  4. What is the Saudi Takamol Skill Verification Program (SVP) test in Patna?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Takamol SVP is a mandatory skill assessment mandated by Saudi
                  Arabia for 23 technical occupations (including electricians,
                  welders, plumbers, and mechanics). Candidates complete a
                  computerized theoretical test and a practical bench test at an
                  authorized Patna assessment center before visa stamping.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  5. How do I complete State HRD attestation for my degree in Patna?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Degree and diploma certificates must be authenticated by the
                  Department of Higher Education at Vikas Bhawan, Patna. The
                  department verifies authenticity with your issuing university
                  before applying the official State HRD seal. Afterward, the
                  document is forwarded for MEA Apostille or Embassy Cultural
                  Attestation in New Delhi.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  6. What are the requirements for applying for European work permits (Poland/Romania) from Patna?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  You require: (1) An Indian passport valid for at least 2 years;
                  (2) A clean Police Clearance Certificate (PCC) issued by the
                  Regional Passport Office in Patna; (3) An official government
                  work permit issued by the destination country (e.g., Polish
                  Voivodeship permit or Romanian IGI work authorization); and
                  (4) Stamping of a National Type-D visa through VFS Global in New
                  Delhi or Kolkata. Processing takes approximately 90 to 120 days.
                </p>
              </div>

              {/* FAQ 7 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  7. How can I confirm if an overseas job offer letter is genuine?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  A genuine offer letter must carry a verified corporate
                  registration number and be registered on official ministry
                  platforms—such as Saudi Qiwa (
                  <a
                    href="https://qiwa.sa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 underline"
                  >
                    qiwa.sa
                  </a>
                  ) or UAE MoHRE (
                  <a
                    href="https://www.mohre.gov.ae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 underline"
                  >
                    mohre.gov.ae
                  </a>
                  ). Never accept informal WhatsApp printouts without verifiable
                  ministry contract numbers.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  8. What is the Wage Protection System (WPS) in the Gulf?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  WPS is an automated electronic payroll monitoring system
                  supervised by central banks and labor ministries across Saudi
                  Arabia, the UAE, and Qatar. It ensures that employers deposit
                  full contractual wages directly into workers&apos; bank
                  accounts every month without unauthorized deductions.
                </p>
              </div>

              {/* FAQ 9 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  9. Can my employer hold my passport when I reach the Gulf?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  No. Under Saudi Labor Law and UAE labor legislation, retaining
                  an employee&apos;s passport is strictly prohibited. Your
                  passport is the property of the Government of India. Once your
                  residency card (Iqama or Emirates ID) is processed, the
                  employer must return your passport immediately.
                </p>
              </div>

              {/* FAQ 10 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  10. What is the total turnaround time for a Gulf work visa through WorkWise Visa Patna?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  For GCC nations (Saudi Arabia, UAE, Qatar), complete processing
                  typically takes 25 to 45 business days. This encompasses trade
                  testing, GAMCA medical clearance, digital contract signing,
                  consulate visa stamping, and POE eMigrate clearance.
                </p>
              </div>

              {/* FAQ 11 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  11. How can candidates from Bihar apply for a Police Clearance Certificate (PCC) in Patna?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  PCC applications must be submitted via the official Passport
                  Seva portal (passportindia.gov.in) selecting the Regional
                  Passport Office (RPO) Patna or your nearest Passport Seva
                  Kendra (PSK). Following appointment biometrics and local
                  thana verification, the PCC is stamped and collected. A valid
                  PCC is essential for European work permits and Qatar visa
                  clearance.
                </p>
              </div>

              {/* FAQ 12 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  12. Who pays for the candidate&apos;s air ticket to the overseas destination?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Under the Emigration Act 1983 and GCC standard employment
                  contracts, the principal employer is legally obligated to
                  provide the initial one-way airfare from India to the host
                  country, as well as roundtrip return airfare upon completion
                  of the contractual employment term. Beware of sub-agents who
                  demand ₹30,000 to ₹50,000 extra for flight tickets.
                </p>
              </div>

              {/* FAQ 13 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  13. What should I do if my foreign employer delays my salary or reduces my pay?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Because WorkWise Visa registers your contract on the digital
                  WPS and Qiwa/MoHRE portals, you have immediate legal recourse.
                  You can lodge a digital wage claim through the destination
                  labor ministry or file a grievance via the MEA MADAD portal (
                  <a
                    href="https://madad.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 underline"
                  >
                    madad.gov.in
                  </a>
                  ). The Indian Embassy Consular Wing will intervene directly
                  with the employer.
                </p>
              </div>

              {/* FAQ 14 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  14. What are the food and accommodation standards provided on Gulf contracts?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  All employer contracts cleared by POE Patna must provide free,
                  air-conditioned bachelor accommodation with hygienic
                  utilities, clean drinking water, and either centralized mess
                  catering or a dedicated monthly food allowance (typically 300
                  to 400 SAR/AED/QAR on top of basic salary).
                </p>
              </div>

              {/* FAQ 15 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  15. Can diploma or ITI holders from Bihar polytechnics get ECNR status?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Yes. Candidates who have passed Class 10 or hold a 2-to-3 year
                  diploma from a State Council for Technical Education (SCTE&amp;VT)
                  recognized polytechnic qualify for ECNR status. When renewing
                  or applying for an Indian passport, submitting your diploma
                  certificate removes the ECR endorsement.
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
                  17. What happens if a worker suffers an injury or accident while working abroad?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  All candidates deployed through WorkWise Visa are protected
                  under mandatory health insurance provided by the employer and
                  the ₹10 Lakh Pravasi Bharatiya Bima Yojana (PBBY). Hospital
                  treatment costs up to ₹1 Lakh and accidental permanent
                  disability compensation up to ₹10 Lakh are disbursed directly
                  to the worker or designated family nominees in Bihar.
                </p>
              </div>

              {/* FAQ 18 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  18. Can candidates from other districts of Bihar visit the Boring Road office?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Yes, candidates from across Bihar—including Muzaffarpur, Gaya,
                  Darbhanga, Bhagalpur, Siwan, Gopalganj, Purnia, Begusarai, and
                  Ara—are welcome to visit our Boring Road office for direct
                  document verification, skill evaluations, and face-to-face
                  counseling sessions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 12: RELATED GUIDES & CROSS-CITY DIRECTORY NAVIGATION         */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-2 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Authoritative Knowledge Resources
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                Explore In-Depth Visa &amp; Immigration Manuals
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/blogs/complete-guide-uae-saudi-arabia-blue-collar-work-permits-2026"
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-emerald-600">Gulf Corridors</span>
                  <h3 className="font-bold text-slate-900 text-sm mt-1 group-hover:text-emerald-700 transition-colors">
                    Complete UAE &amp; Saudi Arabia Blue-Collar Work Permits 2026
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    MOHRE contracts, Qiwa portal, Takamol trade tests, and WPS wage protection.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 mt-4">
                  Read Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/blogs/europe-work-visa-for-indian-workers-poland-croatia-romania-guide-2026"
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-teal-600">European Corridors</span>
                  <h3 className="font-bold text-slate-900 text-sm mt-1 group-hover:text-emerald-700 transition-colors">
                    Europe Work Visa Guide: Poland, Croatia &amp; Romania 2026
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    Voivodeship permits, MUP single permits, VFS Delhi appointments, and Euro salaries.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 mt-4">
                  Read Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/blogs/police-clearance-certificate-pcc-gulf-european-visas-psk-apostille-guide-2026"
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-amber-600">Authentication Hub</span>
                  <h3 className="font-bold text-slate-900 text-sm mt-1 group-hover:text-emerald-700 transition-colors">
                    PCC &amp; MEA Patiala House Apostille Guide 2026
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    Passport Seva Kendra booking, police verification, and MEA Hague Apostille stamping.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 mt-4">
                  Read Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Complete Cross-City Network Links */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <span className="font-bold text-slate-700 text-xs block mb-3">WorkWise Visa Pan-India Network:</span>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <Link href="/locations/noida" className="hover:text-emerald-700 font-semibold underline">
                  Noida Corporate HQ
                </Link>
                <span>•</span>
                <Link href="/locations/delhi" className="hover:text-emerald-700 font-bold text-slate-800 underline decoration-emerald-500">
                  Delhi NCR Placement Desk
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
                <Link href="/locations/gorakhpur" className="hover:text-emerald-700">
                  Gorakhpur Desk
                </Link>
                <span>•</span>
                <Link href="/locations/lucknow" className="hover:text-emerald-700">
                  Lucknow Desk
                </Link>
                <span>•</span>
                <Link href="/locations/muzaffarpur" className="hover:text-emerald-700">
                  Muzaffarpur Desk
                </Link>
                <span>•</span>
                <Link href="/locations/chhapra" className="hover:text-emerald-700">
                  Chhapra Desk
                </Link>
                <span>•</span>
                <Link href="/locations/darbhanga" className="hover:text-emerald-700">
                  Darbhanga Desk
                </Link>
                <span>•</span>
                <Link href="/locations/gaya" className="hover:text-emerald-700">
                  Gaya Desk
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
    </div>
  );
}
