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
// Description: 156 chars (Ideal range: 150-160 chars)
// ============================================================================
export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Work Visa Consultancy in Noida | WorkWise Visa Sector 132",
  description:
    "Top overseas recruitment agency & work visa consultancy in Urbtech Trade Centre, Sector 132 Noida. Verified Europe & Gulf work permits with embassy support.",
  keywords: [
    "work visa consultancy in noida",
    "visa consultancy in noida",
    "overseas recruitment agency noida",
    "gulf job consultancy noida sector 132",
    "europe work visa consultant delhi ncr",
    "best immigration consultant noida",
    "workwise visa noida head office",
    "poland work visa agency noida",
    "saudi work visa delhi ncr",
    "romania work permit noida",
    "croatia work visa consultancy delhi ncr",
    "mea apostille patiala house noida",
    "vfs global delhi appointment assistance",
    "workwise visa noida",
    "best overseas job consultancy in noida",
  ],
  alternates: {
    canonical: "https://www.workwisevisa.com/locations/noida",
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
    title: "Work Visa Consultancy in Noida | WorkWise Visa Sector 132",
    description:
      "Premier overseas recruitment agency & corporate headquarters at Urbtech Trade Centre, Sector 132, Noida. Verified job placements for Europe and Gulf with direct embassy support.",
    url: "https://www.workwisevisa.com/locations/noida",
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.workwisevisa.com/images/workwise_logo.png",
        width: 1200,
        height: 630,
        alt: "WorkWise Visa Corporate Office Urbtech Trade Centre Sector 132 Noida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Visa Consultancy in Noida | WorkWise Visa Sector 132",
    description:
      "Trusted overseas job placement & work visa consultancy in Noida. 100% verified employer contracts for Europe & GCC with direct embassy processing in Delhi NCR.",
    images: ["https://www.workwisevisa.com/images/workwise_logo.png"],
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
      "@id": "https://www.workwisevisa.com/locations/noida#localbusiness",
      name: "WorkWise Visa - Corporate Headquarters (Europass Immigration Pvt Ltd)",
      legalName: "Europass Immigration Pvt Ltd",
      url: "https://www.workwisevisa.com/locations/noida",
      logo: "https://www.workwisevisa.com/images/workwise_logo.png",
      image: "https://www.workwisevisa.com/images/workwise_logo.png",
      description:
        "Corporate headquarters and premier overseas employment consultancy located at Urbtech Trade Centre, Sector 132, Noida. Specializing in European skilled immigration (Poland, Romania, Croatia, Germany), GCC executive & technical job demands, MEA Apostille authentication, and direct diplomatic liaison with New Delhi embassies and VFS Global centers.",
      telephone: "+918130161603",
      email: "workwisevisa@gmail.com",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Urbtech Trade Centre, D-701 C, Sector 132",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201304",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "28.5036",
        longitude: "77.3828",
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
        { "@type": "City", name: "Noida" },
        { "@type": "City", name: "Greater Noida" },
        { "@type": "City", name: "Ghaziabad" },
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "Gurugram" },
        { "@type": "City", name: "Faridabad" },
        { "@type": "State", name: "Uttar Pradesh" },
        { "@type": "State", name: "Delhi NCR" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.workwisevisa.com/locations/noida#breadcrumb",
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
          name: "Noida",
          item: "https://www.workwisevisa.com/locations/noida",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.workwisevisa.com/locations/noida#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is the WorkWise Visa office located in Noida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WorkWise Visa is located at Urbtech Trade Centre, D-701 C, Sector 132, Noida, Uttar Pradesh 201304. Our corporate office is situated right on the Noida-Greater Noida Expressway, conveniently accessible via the Aqua Line Metro (Sector 83 / Sector 137) or Botanical Garden interchange.",
          },
        },
        {
          "@type": "Question",
          name: "How does WorkWise Visa Noida assist with European National Type-D work visas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "From our Noida headquarters, we manage complete European work permit applications for Poland (Voivodeship Work Permit Typ A), Romania (IGI Aviz de Muncă), and Croatia (MUP Work and Residence Permit). We handle employer petition approvals, MEA Apostille at Patiala House, VFS Delhi biometric appointment booking, and visa interview preparation.",
          },
        },
        {
          "@type": "Question",
          name: "What is the process for MEA Apostille and Embassy attestation in Delhi NCR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For Hague Apostille Convention countries (such as Poland, Romania, Croatia, and Germany), educational and commercial certificates must be authenticated by the State HRD department, followed by the Ministry of External Affairs (CPV Division / Patiala House, New Delhi). For non-Hague GCC nations, embassy cultural attestation is completed through the respective embassies in Chanakyapuri, New Delhi.",
          },
        },
        {
          "@type": "Question",
          name: "What salary ranges and protections apply to overseas jobs processed from Noida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Monthly net salaries range from ₹65,000 to ₹1,85,000 for skilled technicians and artisans, and from ₹1,40,000 to ₹3,50,000+ for engineers and corporate managers. All contracts comply with statutory Wage Protection Systems (WPS) in the Gulf and national minimum wage legislation in the European Union.",
          },
        },
        {
          "@type": "Question",
          name: "How do I book a consultation at the Urbtech Trade Centre office in Sector 132?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Candidates can walk in during office hours (Monday to Saturday, 9:30 AM to 6:30 PM) or schedule an advance appointment via our website consultation form or official WhatsApp support line at +91 8130161603.",
          },
        },
      ],
    },
  ],
};

export default function NoidaLocationPage() {
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
              <span className="font-semibold text-emerald-400">Noida</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Semantic Headline & Value Proposition (Zero Clutter CTA buttons) */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  <FaShieldHalved className="text-emerald-400" />
                  Corporate Headquarters • Urbtech Trade Centre, Sector 132
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                  Work Visa &amp; Overseas Employment Consultancy in{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    Noida
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                  Headquartered at Urbtech Trade Centre, Sector 132, Noida,
                  WorkWise Visa bridges Delhi NCR&apos;s skilled professionals,
                  engineers, and technical workforce with verified corporate
                  careers across Europe (Poland, Romania, Croatia, Germany) and the
                  GCC (Saudi Arabia, UAE, Qatar). With direct diplomatic proximity
                  to Chanakyapuri embassies, VFS Global Delhi, and the MEA
                  Apostille Division, we ensure swift, transparent, and 100% legal
                  visa stamping.
                </p>

                {/* Key Legal Trust Metrics */}
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-6 sm:grid-cols-4">
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">
                      Direct
                    </div>
                    <div className="text-xs text-slate-400">
                      Embassy Diplomatic Liaison
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">
                      100%
                    </div>
                    <div className="text-xs text-slate-400">
                      Legal Employer Visas
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">
                      Apostille
                    </div>
                    <div className="text-xs text-slate-400">
                      Patiala House Certified
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">Zero</div>
                    <div className="text-xs text-slate-400">
                      Deceptive Intermediaries
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
                        WorkWise Corporate HQ
                      </span>
                      <h2 className="text-lg font-display font-bold text-white">
                        Noida Expressway Career Desk
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
                        <strong className="text-white">Corporate Address:</strong>{" "}
                        Urbtech Trade Centre, D-701 C, Sector 132, Noida, UP
                        201304 (Mon-Sat, 9:30 AM - 6:30 PM).
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Active Corridors:</strong>{" "}
                        Poland, Romania, Croatia, Germany, Saudi Arabia (Vision
                        2030), and UAE.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Salary Ranges:</strong>{" "}
                        €900 to €2,500/mo (Europe) | 2,500 to 12,000 SAR/AED
                        (GCC) with full benefits.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Turnaround SLA:</strong>{" "}
                        30 to 45 Days for GCC visas; 90 to 120 Days for European
                        National Type-D permits.
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-700 pt-5">
                    <a
                      href="#consultation"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all hover:from-emerald-500 hover:to-teal-500 hover:shadow-emerald-600/40 hover:scale-[1.01]"
                    >
                      Book Free Profile Evaluation in Noida
                      <FaArrowRight className="text-xs" />
                    </a>
                    <p className="mt-2 text-center text-xs text-slate-400">
                      Direct walk-ins welcome at Sector 132 • Free profile review
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 2: EXECUTIVE OVERVIEW & NOIDA'S DIPLOMATIC STRATEGIC VALUE   */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Strategic NCR Advantage &amp; Global Mobility
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Why Noida is India&apos;s Premier Gateway for Overseas Employment
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 text-base leading-relaxed text-slate-600 lg:grid-cols-2">
              <div className="space-y-5">
                <p>
                  Noida, located immediately adjacent to the national capital of
                  New Delhi, occupies a unique position in India&apos;s global
                  mobility ecosystem. As a thriving industrial, engineering, and
                  technology hub, Noida attracts thousands of skilled
                  professionals—from mechanical engineers and IT consultants to
                  certified welders, heavy fleet operators, and logistics
                  specialists—aiming to elevate their careers internationally.
                </p>
                <p>
                  Critically, Noida&apos;s geographic proximity to New Delhi
                  provides unmatched operational efficiency. All major foreign
                  diplomatic missions—including the Embassy of the Republic of
                  Poland, Embassy of Romania, Embassy of the Republic of Croatia,
                  Royal Embassy of Saudi Arabia, and UAE Embassy—are located just
                  30 to 45 minutes away in Chanakyapuri and Vasant Vihar. The
                  central VFS Global Joint Visa Application Centre at Shivaji
                  Stadium and the Ministry of External Affairs (MEA) CPV
                  Division at Patiala House allow WorkWise Visa to expedite
                  biometric slots, Apostille certifications, and physical passport
                  stamping without procedural delays.
                </p>
              </div>

              <div className="space-y-5">
                <p>
                  Operating from our corporate office at Urbtech Trade Centre,
                  Sector 132, WorkWise Visa upholds institutional integrity in an
                  industry often marred by deceptive practices. The Delhi NCR
                  region has unfortunately witnessed an influx of unauthorized
                  &ldquo;study and work&rdquo; brokers who charge exorbitant sums
                  of ₹3 to ₹6 Lakhs for bogus LMIA approvals, fabricated European
                  visas, or unauthorized tourist entries.
                </p>
                <p>
                  WorkWise Visa works exclusively with verified corporate principal
                  employers. Every European job vacancy is supported by a
                  statutory government work permit (such as Poland&apos;s{" "}
                  <em>Zezwolenie na pracę Typ A</em> or Romania&apos;s{" "}
                  <em>Aviz de Muncă</em>), while every Gulf demand is backed by an
                  authenticated digital tripartite contract on Saudi Qiwa or UAE
                  MoHRE. Our candidates enjoy transparent pricing, legal
                  agreements, and comprehensive pre-departure briefings.
                </p>
                <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                  <p className="text-sm font-bold text-blue-900">
                    Corporate Compliance Standards:
                  </p>
                  <p className="mt-1 text-xs text-blue-800">
                    WorkWise Visa complies strictly with the Emigration Act 1983
                    and international labor standards. All financial transactions
                    are processed through verified corporate bank accounts with
                    formal GST invoicing, ensuring full consumer protection under
                    Indian law.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 3: EUROPEAN NATIONAL TYPE-D WORK PERMITS MASTERCLASS        */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Schengen &amp; European Skilled Migration
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                European National Type-D Work Permits Process from Noida
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                A transparent, step-by-step breakdown of how Indian citizens
                secure long-stay national employment visas for Poland, Romania,
                and Croatia through our Sector 132 corporate office.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Poland */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <FaPassport className="text-2xl" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  Poland Voivodeship Work Permit
                </h3>
                <p className="mt-1 text-xs font-semibold text-red-600">
                  Zezwolenie na pracę Typ A
                </p>

                <div className="mt-5 space-y-3 text-xs sm:text-sm text-slate-600">
                  <p>
                    Issued directly by the provincial government (Urząd
                    Wojewódzki) where the employer is registered. Valid for 1 to
                    3 years and renewable in Poland.
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>Labour Market Test Exemption:</strong> Certified
                        shortage trades (welders, CNC operators, heavy truck
                        drivers) are exempt from local labor searches.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>National Health Fund (NFZ):</strong> Full public
                        healthcare access and social security contributions
                        (ZUS) paid by the employer.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>Schengen Mobility:</strong> Allows up to 90 days
                        of visa-free travel within any 180-day period across all
                        29 Schengen member states.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Romania */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <FaBuildingColumns className="text-2xl" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  Romania IGI Work Authorization
                </h3>
                <p className="mt-1 text-xs font-semibold text-blue-600">
                  Aviz de Muncă (Inspectoratul General pentru Imigrări)
                </p>

                <div className="mt-5 space-y-3 text-xs sm:text-sm text-slate-600">
                  <p>
                    Approved by the General Inspectorate for Immigration (IGI)
                    under Romania Government Ordinance No. 25/2014. Forms the
                    basis for the long-stay Type-D/AM employment visa.
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>Annual Quota Allocation:</strong> Romania
                        allocates 100,000 work permits annually for non-EU
                        nationals, providing robust job openings.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>Employer Provisions:</strong> Contracts
                        stipulate free furnished company accommodation, utility
                        subsidies, and roundtrip flight assistance.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>TRC Card Issuance:</strong> Upon arrival in
                        Bucharest, workers receive their Temporary Residence
                        Card (Permis de Ședere) valid for 1 year.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Croatia */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <FaGlobe className="text-2xl" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  Croatia MUP Stay &amp; Work Permit
                </h3>
                <p className="mt-1 text-xs font-semibold text-emerald-600">
                  Dozvola za boravak i rad (Ministry of Interior)
                </p>

                <div className="mt-5 space-y-3 text-xs sm:text-sm text-slate-600">
                  <p>
                    Issued under Croatia&apos;s Foreigners Act following a
                    positive Labour Market Test (<em>Test tržišta rada</em>)
                    cleared through the Croatian Employment Service (HZZ).
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>Full Schengen Integration:</strong> Croatia is a
                        full member of the Schengen and Eurozone, ensuring Euro
                        earnings and seamless intra-European travel.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>High-Demand Sectors:</strong> Tourism, civil
                        construction, metal fabrication, food packaging, and
                        commercial logistics.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>Permanent Residency Path:</strong> Five years of
                        unbroken legal employment establishes eligibility for
                        long-term EU permanent residency.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 4: MEA APOSTILLE & EMBASSY DIPLOMATIC ATTESTATION IN NCR     */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Diplomatic &amp; Consular Verification
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                MEA Apostille &amp; Embassy Attestation Protocol in New Delhi
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                WorkWise Visa leverages its proximity to central Delhi diplomatic
                agencies to fast-track educational, commercial, and personal
                document authentications:
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 font-bold text-lg">
                  1
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  State HRD / GAD Attestation
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Degree certificates, diplomas, and nursing credentials must
                  first be authenticated by the issuing state&apos;s Higher
                  Education Department (e.g., Lucknow for UP, Vikas Bhawan for
                  Bihar, or Delhi Secretariat for Delhi institutions).
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 font-bold text-lg">
                  2
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  MEA Apostille (Patiala House)
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Submitted to the Ministry of External Affairs CPV Division at
                  Patiala House, New Delhi. For countries party to the Hague
                  Apostille Convention (Poland, Romania, Croatia, Germany), an
                  official square Apostille sticker is affixed, eliminating the
                  need for further embassy legalization.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 font-bold text-lg">
                  3
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Chanakyapuri Embassy Stamping
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For GCC non-Hague nations (Saudi Arabia, UAE, Qatar, Oman),
                  documents proceed to the consular wing of the respective
                  embassy in Chanakyapuri or the Saudi Cultural Attaché for final
                  legalization and verification stamps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 5: SALARY & COMPENSATION BENCHMARKING (EUROPE VS GCC)       */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Comparative Compensation Intelligence
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Global Salary &amp; Benefits Benchmarking from Noida
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Transparent remuneration comparisons across European Union
                demands and Gulf mega-project contracts processed through our
                Sector 132 headquarters:
              </p>
            </div>

            <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-semibold">
                  <tr>
                    <th className="px-4 py-3.5">Professional Role / Trade</th>
                    <th className="px-4 py-3.5">Poland (Net PLN / EUR)</th>
                    <th className="px-4 py-3.5">Romania / Croatia (EUR)</th>
                    <th className="px-4 py-3.5">Saudi Arabia (SAR)</th>
                    <th className="px-4 py-3.5">UAE / Dubai (AED)</th>
                    <th className="px-4 py-3.5">Contract Perks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-slate-900">
                      Project Engineer / Site Manager
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €1,600 - €2,400
                      <span className="block text-[11px] text-slate-400">~₹1,45,000 - ₹2,18,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €1,400 - €2,200
                      <span className="block text-[11px] text-slate-400">~₹1,27,000 - ₹2,00,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      6,000 - 10,000 SAR
                      <span className="block text-[11px] text-slate-400">~₹1,33,000 - ₹2,22,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      7,000 - 12,000 AED
                      <span className="block text-[11px] text-slate-400">~₹1,58,000 - ₹2,71,000</span>
                    </td>
                    <td className="px-4 py-3.5 text-xs">
                      Furnished Housing + Car Allowance + Health Insurance
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-slate-900">
                      Software / Cloud Engineer
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €2,000 - €3,200
                      <span className="block text-[11px] text-slate-400">~₹1,82,000 - ₹2,90,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €1,800 - €2,800
                      <span className="block text-[11px] text-slate-400">~₹1,63,000 - ₹2,54,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      8,000 - 14,000 SAR
                      <span className="block text-[11px] text-slate-400">~₹1,77,000 - ₹3,10,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      9,000 - 16,000 AED
                      <span className="block text-[11px] text-slate-400">~₹2,03,000 - ₹3,61,000</span>
                    </td>
                    <td className="px-4 py-3.5 text-xs">
                      Relocation Flight + Visa Sponsorship + Bonus
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-slate-900">
                      6G TIG &amp; MIG Welder
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €1,100 - €1,500
                      <span className="block text-[11px] text-slate-400">~₹1,00,000 - ₹1,36,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €1,000 - €1,400
                      <span className="block text-[11px] text-slate-400">~₹91,000 - ₹1,27,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,600 - 3,500 SAR
                      <span className="block text-[11px] text-slate-400">~₹58,000 - ₹78,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,800 - 3,600 AED
                      <span className="block text-[11px] text-slate-400">~₹63,000 - ₹81,000</span>
                    </td>
                    <td className="px-4 py-3.5 text-xs">
                      Free Housing + Overtime (1.5x) + Safety Gear
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-slate-900">
                      CNC Machine Operator
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €1,000 - €1,400
                      <span className="block text-[11px] text-slate-400">~₹91,000 - ₹1,27,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €900 - €1,250
                      <span className="block text-[11px] text-slate-400">~₹82,000 - ₹1,13,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,400 - 3,200 SAR
                      <span className="block text-[11px] text-slate-400">~₹53,000 - ₹71,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,600 - 3,400 AED
                      <span className="block text-[11px] text-slate-400">~₹59,000 - ₹77,000</span>
                    </td>
                    <td className="px-4 py-3.5 text-xs">
                      Factory Accommodation + Shift Allowance
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-slate-900">
                      Heavy Trailer / Truck Driver
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €1,300 - €1,900
                      <span className="block text-[11px] text-slate-400">~₹1,18,000 - ₹1,72,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-blue-600">
                      €1,200 - €1,750
                      <span className="block text-[11px] text-slate-400">~₹1,09,000 - ₹1,58,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      2,800 - 3,800 SAR
                      <span className="block text-[11px] text-slate-400">~₹62,000 - ₹84,000</span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-emerald-600">
                      3,000 - 4,200 AED
                      <span className="block text-[11px] text-slate-400">~₹68,000 - ₹95,000</span>
                    </td>
                    <td className="px-4 py-3.5 text-xs">
                      Toll &amp; Fuel Allowance + Per Diem Meals
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 6: PROTECTOR OF EMIGRANTS (POE) DELHI & PBBY STATUTORY COVER */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Statutory Ministry of External Affairs Oversight
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                The Protector of Emigrants (POE) Delhi &amp; PBBY Framework
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Situated at Jaisalmer House, Mansingh Road, New Delhi, the POE
                Delhi office exercises statutory jurisdiction over overseas
                recruitment across Delhi NCR, Western Uttar Pradesh, and
                Haryana under the Emigration Act 1983.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <FaScaleBalanced className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Functions of POE Delhi
                    </h3>
                    <p className="text-xs text-slate-500">
                      Ministry of External Affairs, Government of India
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-3 text-xs sm:text-sm text-slate-600">
                  <p>
                    For candidates holding ECR passports being deployed to the
                    18 notified countries, POE Delhi enforces essential legal
                    safeguards before emigration clearance is granted:
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>Minimum Referral Wages (MRW) Enforcement:</strong> Foreign
                        employers must guarantee base compensation meeting or
                        exceeding official MEA wage floors.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>Digital eMigrate Verification:</strong> Every
                        individual contract is authenticated electronically via
                        the Indian Embassy in Riyadh, Abu Dhabi, or Doha before
                        clearance issuance.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>Recruiting Agency Compliance:</strong> Clear
                        auditing of license validity, bank guarantee deposits,
                        and service fee limits prescribed under MEA regulations.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaPassport className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      ECR vs. ECNR Guidelines for NCR
                    </h3>
                    <p className="text-xs text-slate-500">
                      Passport Seva Rules under Emigration Act 1983
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-3 text-xs sm:text-sm text-slate-600">
                  <p>
                    Understanding your passport status avoids unexpected
                    immigration detention at Delhi Indira Gandhi International
                    Airport (DEL):
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="rounded-lg bg-emerald-50 p-2.5 border border-emerald-200 text-emerald-900">
                      <strong>ECR Passports:</strong> Candidates without a 10th
                      matriculation pass require mandatory electronic POE
                      clearance through an authorized MEA agency for GCC
                      deployments.
                    </div>
                    <div className="rounded-lg bg-emerald-50 p-2.5 border border-emerald-200 text-emerald-900">
                      <strong>ECNR Passports:</strong> Matriculates, diploma
                      holders, graduates, and income-tax payers travel without
                      POE exit clearances.
                    </div>
                    <div className="rounded-lg bg-blue-50 p-2.5 border border-blue-200 text-blue-900">
                      <strong>European Visas:</strong> European nations are
                      wholly exempt from ECR restrictions. Both ECR and ECNR
                      holders travel directly once their National Type-D visa is
                      stamped.
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
                  Pravasi Bharatiya Bima Yojana (PBBY) Benefits Matrix
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
                        Payable to nominated beneficiaries in case of fatal
                        industrial accidents or total loss of sight/limbs abroad.
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
                        Covers emergency surgical procedures, ICU care, and
                        in-patient medical care in overseas clinics.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        Repatriation of Medically Unfit Worker
                      </td>
                      <td className="px-4 py-3 font-bold text-slate-800">
                        Economy Airfare + Medical Escort
                      </td>
                      <td className="px-4 py-3">
                        Air transportation back to New Delhi if declared unfit to
                        work due to serious illness or injury.
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
                        worker is hospitalized abroad for over 30 days.
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
                        Covers court and advocate costs if the employer
                        unlawfully terminates the employment contract.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 7: NRI WEALTH PRESERVATION & BANKING GUIDE IN SECTOR 132     */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Financial Security &amp; Compliance
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Safe Remittance &amp; Wealth Architecture for Noida NRI Families
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Proper financial structuring ensures full compliance with the
                Foreign Exchange Management Act (FEMA) and maximizes tax
                benefits under Indian income tax statutes:
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <FaBuildingColumns className="text-2xl" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  NRE / NRO Bank Accounts
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Open a Non-Resident External (NRE) account with premier bank
                  branches in Noida Sector 132 or Sector 18 (HDFC, ICICI, SBI).
                  Interest earned on NRE fixed deposits is{" "}
                  <strong>completely tax-free in India</strong>.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <FaMoneyBillTrendUp className="text-2xl" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  Regulated SWIFT &amp; Exchanges
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Always remit earnings via licensed exchange houses or direct
                  banking SWIFT wire transfers. Transfers credit directly to your
                  account in Delhi NCR within hours at interbank wholesale foreign
                  exchange rates.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <FaTriangleExclamation className="text-2xl" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  FEMA Compliance Advisory
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Avoid unregulated cash transfers (Hawala). Operating through
                  informal conduits violates RBI and FEMA regulations, exposing
                  families to account freezes and severe financial penalties
                  from enforcement agencies.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  <FaHandHoldingDollar className="text-2xl" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  Section 6 NRI Tax Exemption
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  If you reside outside India for 182 days or more in a
                  financial year, you attain NRI status under Section 6 of the
                  Income Tax Act. Your foreign employment income is 100% exempt
                  from Indian taxation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 8: ANTI-FRAUD INTELLIGENCE & CONSUMER PROTECTION IN NCR     */}
        {/* ==================================================================== */}
        <section className="bg-slate-900 py-16 sm:py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Consumer Safety Advisory
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-white">
                Exposing Deceptive Visa Schemes in Noida
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300">
                Delhi NCR is heavily targeted by unlicensed consultants operating
                out of high-rent commercial complexes in Sector 18, Nehru Place,
                and Connaught Place. Here is how fraudulent schemes function and
                how to safeguard your career:
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Trap 1 */}
              <div className="rounded-2xl border border-red-500/30 bg-slate-800/80 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/20 text-red-400">
                  <FaTriangleExclamation className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  The &ldquo;Guaranteed LMIA / Schengen Job&rdquo; Scam
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Brokers claim they have thousands of pre-approved work permits
                  for Canada or Germany with no trade assessment or language
                  criteria, demanding upfront deposits of ₹2 to ₹4 Lakhs. In
                  truth, genuine European work permits are employer-specific and
                  require individual ministry authorizations that cannot be
                  guaranteed in bulk by third-party agents.
                </p>
              </div>

              {/* Trap 2 */}
              <div className="rounded-2xl border border-emerald-500/30 bg-slate-800/80 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                  <FaFileContract className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Tourist-to-Work Conversion Rackets
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Candidates are advised to take a tourist visa to Europe or the
                  UAE with promises that &ldquo;our partner in Warsaw or Dubai
                  will convert it to a residence card on arrival.&rdquo; In most
                  European jurisdictions, in-country status adjustments from a
                  Schengen C tourist visa to a National D employment visa are
                  strictly prohibited by immigration law, leading to immediate
                  deportation.
                </p>
              </div>

              {/* Trap 3 */}
              <div className="rounded-2xl border border-blue-500/30 bg-slate-800/80 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                  <FaHandHoldingDollar className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Unregistered Cash Transactions
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Fraudulent agencies operate without valid Registration
                  Certificates (RC) issued by the Ministry of External Affairs.
                  They demand cash payments without GST receipts, leaving victims
                  without evidentiary recourse. WorkWise Visa executes formal
                  service agreements and transparent corporate bank invoices for
                  all client engagements.
                </p>
              </div>
            </div>

            {/* Redressal Section */}
            <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-800/50 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                <FaUserShield className="text-xl" />
                Statutory Verification on eMigrate
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Before engaging any recruitment consultant in Delhi NCR, verify
                their official status on the{" "}
                <a
                  href="https://emigrate.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-300 underline"
                >
                  Ministry of External Affairs eMigrate portal (emigrate.gov.in)
                </a>
                . WorkWise Visa operates under complete statutory compliance,
                ensuring your files are handled ethically and professionally.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 7: GERMAN SKILLED IMMIGRATION ACT & OPPORTUNITY CARD (CHANCENKARTE) */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Advanced European Migration
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Germany Skilled Immigration &amp; Opportunity Card (Chancenkarte)
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Operating from Noida, WorkWise Visa guides engineering and IT
                professionals from Delhi NCR through Germany&apos;s landmark
                Skilled Immigration Act (<em>Fachkräfteeinwanderungsgesetz</em>)
                and the points-based Opportunity Card:
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <FaAward className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Points-Based Opportunity Card
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Allows skilled Indian degree and vocational diploma holders to
                  travel to Germany for up to 1 year to seek qualified employment.
                  Requires accumulating a minimum of 6 points based on academic
                  credentials, language proficiency (German A1/B1 or English C1),
                  age (under 35 gets maximum points), and professional experience.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <FaBuildingColumns className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Anabin &amp; ZAB Degree Equivalence
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Before lodging a visa application at the German Embassy in New
                  Delhi, foreign qualifications must be authenticated against the
                  official Anabin database or evaluated via the Central Office
                  for Foreign Education (ZAB) in Bonn. WorkWise Visa executes
                  complete document verification and translation assistance.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  <FaPassport className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  EU Blue Card Transition
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Once a candidate secures a permanent employment offer in Germany
                  meeting the reduced salary threshold (€41,041 for bottleneck
                  STEM professions such as IT and engineering), they transition
                  directly into an EU Blue Card, opening an accelerated 21-month
                  pathway to German Permanent Residency (<em>Niederlassungserlaubnis</em>).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 8: GCC EXECUTIVE & ENGINEERING MOBILITY FROM NOIDA           */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                High-Value Infrastructure &amp; Tech Careers
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                GCC Executive &amp; Engineering Mobility from Noida
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Delhi NCR is the corporate talent capital for multi-billion
                dollar giga-projects across the Middle East. WorkWise Visa places
                senior architects, project engineers, and corporate specialists
                into leadership roles in Saudi Arabia, UAE, and Qatar:
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaBuildingUser className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Saudi Vision 2030 Megaprojects
                    </h3>
                    <p className="text-xs text-slate-500">NEOM, Red Sea Global, Qiddiya, Diriyah</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3 text-xs sm:text-sm text-slate-600">
                  <p>
                    Engineering leaders from Noida are in high demand across
                    Saudi Arabia&apos;s master developments. WorkWise Visa
                    manages:
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>Saudi Council of Engineers (SCE):</strong> Mandatory
                        professional accreditation required for engineering Iqama
                        stamping.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>Tax-Free Executive Packages:</strong> Monthly
                        salaries ranging from 12,000 to 28,000 SAR (~₹2,65,000 to
                        ₹6,20,000/mo) with executive family housing and private
                        health cover.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>
                        <strong>Qiwa Tripartite Contracts:</strong> Direct digital
                        execution ensuring full salary transparency under the
                        Saudi Wage Protection System.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <FaBriefcase className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      UAE Corporate &amp; Tech Corridors
                    </h3>
                    <p className="text-xs text-slate-500">Dubai Internet City, DIFC, Abu Dhabi Energy</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3 text-xs sm:text-sm text-slate-600">
                  <p>
                    For IT directors, finance managers, and supply chain
                    directors relocating to Dubai and Abu Dhabi:
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-blue-500 shrink-0" />
                      <span>
                        <strong>MoHRE Executive Contracts:</strong> Formal
                        bilingual offers under Federal Decree-Law No. 33 of 2021
                        with statutory end-of-service gratuities.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-blue-500 shrink-0" />
                      <span>
                        <strong>UAE Green &amp; Golden Visa Pathways:</strong> High-earning
                        professionals (salaries exceeding 30,000 AED/mo) receive
                        support to transition into 5-to-10 year self-sponsored
                        Golden Visas.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-blue-500 shrink-0" />
                      <span>
                        <strong>Family Sponsorship Clearance:</strong> Assistance
                        with document attestations to sponsor spouse and children
                        within 30 days of arrival.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 9: MULTILINGUAL WORKSITE VOCABULARY GUIDE                    */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Workplace Integration &amp; Safety
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Multilingual Technical Worksite Glossary for Global Deployments
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Essential operational terms in Polish, Romanian, German, and
                Arabic to accelerate worksite safety and technical communication:
              </p>
            </div>

            <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-semibold">
                  <tr>
                    <th className="px-4 py-3">English Concept</th>
                    <th className="px-4 py-3">Polish (Polska)</th>
                    <th className="px-4 py-3">Romanian (Română)</th>
                    <th className="px-4 py-3">German (Deutsch)</th>
                    <th className="px-4 py-3">Arabic (العربية)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-slate-900">
                      Work Contract
                    </td>
                    <td className="px-4 py-3 font-mono text-blue-600">Umowa o pracę</td>
                    <td className="px-4 py-3 font-mono text-blue-600">Contract de muncă</td>
                    <td className="px-4 py-3 font-mono text-blue-600">Arbeitsvertrag</td>
                    <td className="px-4 py-3 font-mono text-blue-600">Aqd Amal (عقد عمل)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-slate-900">
                      Safety Helmet / PPE
                    </td>
                    <td className="px-4 py-3 font-mono text-blue-600">Kask ochronny / BHP</td>
                    <td className="px-4 py-3 font-mono text-blue-600">Cască de protecție</td>
                    <td className="px-4 py-3 font-mono text-blue-600">Schutzhelm / PSA</td>
                    <td className="px-4 py-3 font-mono text-blue-600">Khoutha (خوذة)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-slate-900">
                      Danger / Stop Work
                    </td>
                    <td className="px-4 py-3 font-mono text-red-600 font-bold">Niebezpieczeństwo / Stój</td>
                    <td className="px-4 py-3 font-mono text-red-600 font-bold">Pericol / Oprește</td>
                    <td className="px-4 py-3 font-mono text-red-600 font-bold">Gefahr / Stopp</td>
                    <td className="px-4 py-3 font-mono text-red-600 font-bold">Khatar / Waggif (خطر)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-slate-900">
                      Residence Permit
                    </td>
                    <td className="px-4 py-3 font-mono text-emerald-600">Karta pobytu</td>
                    <td className="px-4 py-3 font-mono text-emerald-600">Permis de ședere</td>
                    <td className="px-4 py-3 font-mono text-emerald-600">Aufenthaltstitel</td>
                    <td className="px-4 py-3 font-mono text-emerald-600">Iqama (إقامة)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-slate-900">
                      Overtime Work
                    </td>
                    <td className="px-4 py-3 font-mono text-blue-600">Nadgodziny</td>
                    <td className="px-4 py-3 font-mono text-blue-600">Ore suplimentare</td>
                    <td className="px-4 py-3 font-mono text-blue-600">Überstunden</td>
                    <td className="px-4 py-3 font-mono text-blue-600">Idhafi (إضافي)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-slate-900">
                      Monthly Salary
                    </td>
                    <td className="px-4 py-3 font-mono text-blue-600">Wynagrodzenie</td>
                    <td className="px-4 py-3 font-mono text-blue-600">Salariu lunar</td>
                    <td className="px-4 py-3 font-mono text-blue-600">Monatsgehalt</td>
                    <td className="px-4 py-3 font-mono text-blue-600">Ratib (راتب)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 10: TRANSIT & REACHING URBTECH TRADE CENTRE, SECTOR 132      */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Transit &amp; Accessibility
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                How to Reach WorkWise Visa at Urbtech Trade Centre, Sector 132
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Our corporate headquarters is conveniently located along the
                Noida-Greater Noida Expressway, offering straightforward
                connectivity from all parts of Delhi NCR:
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <FaTrainSubway className="text-xl" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Via Metro Rail Network
                  </h3>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Take the Aqua Line Metro to Sector 83 or Sector 137 station (5
                  to 7 minutes by auto to Urbtech Trade Centre). From Delhi,
                  take the Blue Line to Botanical Garden, then switch to an
                  expressway bus or direct cab to Sector 132.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaCarSide className="text-xl" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Via Expressway &amp; DND Flyway
                  </h3>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Located directly on the service road of the Noida-Greater Noida
                  Expressway at Sector 132. Direct 25-minute drive from South
                  Delhi / DND Flyway, and 20 minutes from Pari Chowk, Greater
                  Noida. Dedicated underground visitor parking available.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaPlaneDeparture className="text-xl" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    From IGI Airport (DEL)
                  </h3>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Indira Gandhi International Airport (Terminal 3) is reachable
                  in 45 to 55 minutes via the Magenta Line / Airport Express or
                  directly via the Delhi-Noida Direct (DND) flyway and Outer Ring
                  Road.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 11: FULL CONSULTATION BOOKING FORM (HOMEPAGE 2-COL STYLE)    */}
        {/* ==================================================================== */}
        <ConsultationForm />

        {/* ==================================================================== */}
        {/* SECTION 12: EXHAUSTIVE FAQS (22 DETAILED TECHNICAL QUESTIONS)        */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Frequently Asked Questions
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Everything Candidates in Noida Need to Know
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Authoritative guidance on European national work permits, GCC
                employment visas, MEA Apostille attestation, and embassy
                processing workflows:
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {/* FAQ 1 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  1. Where is the WorkWise Visa corporate office in Noida located?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Our corporate headquarters is located at Urbtech Trade Centre,
                  D-701 C, Sector 132, Noida, Uttar Pradesh 201304. We are
                  situated directly along the Noida-Greater Noida Expressway,
                  open Monday through Saturday from 9:30 AM to 6:30 PM.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  2. What European work permits do you process from the Noida office?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  We specialize in National Type-D long-stay employment permits
                  for Poland (<em>Zezwolenie na pracę Typ A</em>), Romania (
                  <em>Aviz de Muncă</em>), and Croatia (<em>Dozvola za boravak i rad</em>).
                  We also advise on skilled German migration under the
                  Opportunity Card (Chancenkarte) and Skilled Immigration Act.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  3. How does WorkWise Visa coordinate with New Delhi embassies?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Because our office is located just 35 minutes from the
                  diplomatic hub of Chanakyapuri and the VFS Global Joint Visa
                  Application Centre at Shivaji Stadium Metro Station, our
                  liaison team manages physical document submissions, consular
                  fee payments, and biometric slot scheduling efficiently.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  4. What is a Hague Apostille, and where is it completed in Delhi?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  A Hague Apostille is an official certification under the 1961
                  Hague Convention that legalizes public documents (such as
                  degrees, birth certificates, and police clearances) for use in
                  over 120 member states (including Poland, Romania, and
                  Croatia). It is issued by the Ministry of External Affairs
                  (MEA) CPV Division at Patiala House, New Delhi.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  5. What is the total processing time for a Poland work permit?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  The complete process typically takes 90 to 120 days. This
                  encompasses: (1) Provincial governor work permit approval in
                  Poland (6 to 8 weeks); (2) Police Clearance Certificate (PCC)
                  and MEA Apostille in Delhi (2 to 3 weeks); and (3) VFS Global
                  biometric appointment and National Type-D visa stamping (3 to
                  4 weeks).
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  6. Can I convert a Schengen tourist visa to a work visa once I arrive in Europe?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  No. In almost all European countries, converting a Schengen
                  tourist visa (Type-C) to an employment residence permit (Type-D)
                  is unlawful. Work permits must be applied for while you are
                  legally residing in your country of origin (India). Never trust
                  agents who promise in-country tourist visa conversions.
                </p>
              </div>

              {/* FAQ 7 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  7. What are the language requirements for European skilled employment?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  For technical, industrial, and construction trades (welders,
                  electricians, CNC machinists, heavy truck drivers), formal
                  foreign language proficiency (such as Polish or Romanian) is
                  not required; basic conversational English is sufficient. For
                  corporate engineering or IT roles, professional working
                  proficiency in English is standard.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  8. What is the Temporary Residence Card (TRC) in Poland and Romania?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  A TRC (<em>Karta Pobytu</em> in Poland, <em>Permis de Ședere</em> in
                  Romania) is the local identity card issued to foreign workers
                  after arriving on an employment visa. It allows you to reside,
                  work, open bank accounts, access healthcare, and travel freely
                  within the Schengen zone for 1 to 3 years without re-applying for
                  entry visas.
                </p>
              </div>

              {/* FAQ 9 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  9. Can I bring my family on a European National Type-D work permit?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Yes. Under European family reunification laws, after completing
                  your initial probation period (typically 6 to 12 months) and
                  securing a renewable residence card (TRC) with adequate housing
                  and income, you can sponsor your spouse and dependent children
                  for dependent residence permits.
                </p>
              </div>

              {/* FAQ 10 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  10. How does WorkWise Visa guarantee fair treatment and authentic employment?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  WorkWise Visa operates strictly under the Emigration Act 1983.
                  We perform rigorous due diligence on foreign principals,
                  execute written service agreements, provide transparent GST
                  invoicing, and verify contracts on official destination
                  platforms before candidate deployment.
                </p>
              </div>

              {/* FAQ 11 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  11. What is the process for Saudi Arabia executive and engineering visas from Noida?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Engineers and corporate managers require: (1) Saudi Council of
                  Engineers (SCE) provisional registration; (2) State HRD and
                  Saudi Cultural Attaché attestation in New Delhi; (3) Digital
                  employment contract acceptance on the Saudi Qiwa platform; and
                  (4) VFS Tasheel biometric stamping in Delhi NCR. Total
                  turnaround is 25 to 35 days.
                </p>
              </div>

              {/* FAQ 12 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  12. Are European earnings subject to Indian income tax?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Under Section 6 of the Indian Income Tax Act and bilateral
                  Double Taxation Avoidance Agreements (DTAA) signed between India
                  and European nations (including Poland and Romania), individuals
                  residing abroad for 182 days or more acquire Non-Resident
                  Indian (NRI) tax status, rendering foreign employment earnings
                  fully tax-free in India.
                </p>
              </div>

              {/* FAQ 13 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  13. What healthcare coverage is provided for workers in Europe?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  All legal employment contracts in Poland, Romania, and Croatia
                  mandate employer contributions to national public health funds
                  (e.g., NFZ in Poland, CNAS in Romania, HZZO in Croatia). Workers
                  receive state health cards providing comprehensive medical,
                  emergency, and specialist care at zero personal cost.
                </p>
              </div>

              {/* FAQ 14 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  14. How do I get a Police Clearance Certificate (PCC) in Noida?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Apply online through the Passport Seva portal
                  (passportindia.gov.in) selecting the Regional Passport Office
                  Ghaziabad / PSK Sahibabad (for Gautam Buddha Nagar residents).
                  Following biometric verification and local police inquiry, the
                  PCC is issued within 7 to 14 days.
                </p>
              </div>

              {/* FAQ 15 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  15. What are the typical accommodation arrangements in European work contracts?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  European contracts processed through WorkWise Visa guarantee
                  free, employer-managed accommodations meeting municipal housing
                  codes (maximum 2 to 3 persons per room, high-speed Wi-Fi, heating,
                  and fully equipped kitchen and laundry facilities).
                </p>
              </div>

              {/* FAQ 16 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  16. Can candidates from Ghaziabad, Delhi, or Greater Noida walk in?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Yes, our corporate office at Urbtech Trade Centre, Sector 132,
                  welcomes candidates from across Delhi NCR. You can walk in
                  during working hours with your resume and passport copy for an
                  immediate profile assessment.
                </p>
              </div>

              {/* FAQ 17 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  17. What happens if a European work permit application is delayed?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Our corporate operations team maintains direct contact with the
                  legal counsel of our overseas employers. In case of provincial
                  workload backlogs, our team monitors the administrative docket
                  weekly and provides real-time status updates through our
                  digital tracking portal.
                </p>
              </div>

              {/* FAQ 18 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  18. How can I verify that my European work permit is authentic?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Legitimate European work permits carry an official provincial
                  registration number, government seal, and official QR code or
                  watermark that can be cross-verified directly with the issuing
                  immigration department (e.g., Urząd Wojewódzki in Poland or
                  IGI in Romania). WorkWise Visa provides complete document
                  verification before submission to VFS Global.
                </p>
              </div>

              {/* FAQ 19 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  19. How does VFS Global biometric appointment booking work in New Delhi?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Biometrics and passport submissions for European National
                  Type-D visas take place at the VFS Global Joint Visa Application
                  Centre, located at Mezzanine Floor, Shivaji Stadium Metro
                  Station, Baba Kharak Singh Marg, Connaught Place, New Delhi.
                  WorkWise Visa monitors appointment slots and schedules your
                  submission date once your original work permit arrives from
                  Europe.
                </p>
              </div>

              {/* FAQ 20 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  20. What is the minimum educational qualification required for European technical jobs?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  For skilled trades such as welding, electrical installation,
                  pipe fabrication, and CNC machining, an ITI certificate or
                  polytechnic diploma combined with 2 to 3 years of verifiable
                  industrial experience is required. For manufacturing and food
                  packaging operatives, 10th or 12th pass certificates are
                  sufficient.
                </p>
              </div>

              {/* FAQ 21 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  21. Does WorkWise Visa charge any registration fee before evaluating my resume?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  No. Initial profile screening, resume reviews, and career
                  counseling at our Urbtech Trade Centre office in Sector 132 are
                  completely free of charge. Service charges apply only after
                  you are shortlisted for an authenticated corporate demand and
                  sign a formal agreement.
                </p>
              </div>

              {/* FAQ 22 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  22. Can candidates track their visa processing milestones online?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Yes. Every candidate registered with WorkWise Visa receives a
                  unique application tracking identifier. You can track your
                  file status in real time—from work permit petition approval to
                  Apostille attestation, VFS biometric appointment, and final
                  visa dispatch—via our online application tracking portal at
                  workwisevisa.com/track.
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
                <Link href="/locations/delhi" className="hover:text-emerald-700 font-bold text-slate-800 underline decoration-emerald-500">
                  Delhi NCR Placement Desk
                </Link>
                <span>•</span>
                <Link href="/locations/patna" className="hover:text-emerald-700 font-semibold underline">
                  Patna Regional Branch
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
