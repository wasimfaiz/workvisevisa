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
// SEO METADATA — STRICT CHARACTER LIMITS & TARGETED JAMSHEDPUR KEYWORDS
// ============================================================================
export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Work Visa Consultancy in Jamshedpur | Overseas Jobs & Recruitment",
  description:
    "Leading overseas job consultancy in Jamshedpur (Tatanagar). Verified Europe & Gulf work permits for CNC machinists, Tata vendor welders, toolmakers & fitters.",
  keywords: [
    "work visa consultancy in jamshedpur",
    "gulf job consultancy in jamshedpur",
    "visa consultancy tatanagar",
    "overseas recruitment agency jamshedpur",
    "adityapur industrial area jobs europe",
    "tata steel welder jobs abroad",
    "cnc machinist jobs poland romania jamshedpur",
    "bistupur visa agency",
    "sakchi overseas consultancy",
    "saudi work visa jamshedpur",
    "workwise visa jamshedpur",
    "croatia work permit jamshedpur",
  ],
  alternates: {
    canonical: "https://www.workwisevisa.com/locations/jamshedpur",
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
    title: "Work Visa Consultancy in Jamshedpur | Overseas Jobs & Recruitment",
    description:
      "Premier overseas job consultancy in Jamshedpur (Tatanagar). Authentic employer contracts for Poland, Romania, Croatia, Saudi Arabia & UAE with full legal safety.",
    url: "https://www.workwisevisa.com/locations/jamshedpur",
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.workwisevisa.com/images/workwise_logo.png",
        width: 1200,
        height: 630,
        alt: "WorkWise Visa Consultancy for Jamshedpur & Adityapur Cluster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Visa Consultancy in Jamshedpur | Overseas Jobs & Recruitment",
    description:
      "Verified overseas job placement and work visa services in Jamshedpur (Tatanagar). 100% legal eMigrate, POE clearance, and direct employer contracts.",
    images: ["https://www.workwisevisa.com/images/workwise_logo.png"],
  },
};

export default function JamshedpurLocationPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EmploymentAgency",
        "@id": "https://www.workwisevisa.com/locations/jamshedpur#agency",
        name: "WorkWise Visa - Jamshedpur & Adityapur Industrial Candidate Desk",
        url: "https://www.workwisevisa.com/locations/jamshedpur",
        logo: "https://www.workwisevisa.com/images/workwise_logo.png",
        image: "https://www.workwisevisa.com/images/workwise_logo.png",
        description:
          "Authoritative overseas employment consultancy for Jamshedpur, Tatanagar, and Adityapur Industrial Area candidates. Specializing in verified European single work permits, precision CNC/toolroom placement, GCC energy contracts, and eMigrate POE compliance.",
        telephone: "+918130161603",
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jamshedpur",
          addressRegion: "Jharkhand",
          addressCountry: "IN",
          postalCode: "831001",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 22.8046,
          longitude: 86.2029,
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Jamshedpur" },
          { "@type": "AdministrativeArea", name: "Tatanagar" },
          { "@type": "AdministrativeArea", name: "Adityapur" },
          { "@type": "AdministrativeArea", name: "Bistupur" },
          { "@type": "AdministrativeArea", name: "Sakchi" },
          { "@type": "AdministrativeArea", name: "Mango" },
          { "@type": "AdministrativeArea", name: "Kadma" },
          { "@type": "AdministrativeArea", name: "Telco" },
          { "@type": "AdministrativeArea", name: "Jharkhand" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Overseas Work Visa & Career Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "European National Type-D Single Work Permits",
                description:
                  "Government work authorizations for Poland, Romania, Croatia, and Germany for precision CNC machinists, toolmakers, and 6G welders.",
              },
            },
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
                name: "Kuwait & Qatar Petrochemical Refinery Placements",
                description:
                  "Direct trade vacancies for KNPC/KOC Kuwait and QatarEnergy shutdown welders and instrumentation technicians.",
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.workwisevisa.com/locations/jamshedpur#breadcrumb",
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
            name: "Jamshedpur",
            item: "https://www.workwisevisa.com/locations/jamshedpur",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.workwisevisa.com/locations/jamshedpur#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How can precision machinists and welders from Jamshedpur connect with WorkWise Visa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Candidates from Jamshedpur and Adityapur can submit their technical trade certificates, experience letters, and passport copies via WhatsApp (+91 8130161603) for an instant eligibility review. For face-to-face selection and practical evaluation, candidates can take the superfast Tatanagar-Patna Vande Bharat Express (20893) directly to Patna Junction in just 5.5 hours.",
            },
          },
          {
            "@type": "Question",
            name: "Are there European work permit opportunities specifically suited for Jamshedpur artisans?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Jamshedpur's Adityapur cluster is renowned for precision auto-components, tool & die design, and heavy fabrication. European industrial employers in Poland, Romania, Croatia, and Germany actively recruit CNC lathe/milling operators, VMC programmers, toolmakers, and certified 6G welders with monthly net wages between ₹95,000 and ₹1,75,000.",
            },
          },
          {
            "@type": "Question",
            name: "Where do Jamshedpur applicants complete GAMCA / Wafid medical tests?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Approved GCC medical examination appointments are booked online via wafid.com. Jamshedpur candidates are typically assigned to accredited clinics in Kolkata or Patna, both accessible with seamless daily rail connections from Tatanagar.",
            },
          },
          {
            "@type": "Question",
            name: "How can applicants from Jamshedpur obtain a Police Clearance Certificate (PCC)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Applicants can book their PCC appointment at the Post Office Passport Seva Kendra (POPSK) Jamshedpur, situated within the Bistupur Head Post Office premises. WorkWise Visa provides step-by-step guidance on document apostille and embassy verification.",
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
        {/* SECTION 1: HERO                                                      */}
        {/* ==================================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 pt-24 sm:pt-28 pb-16 sm:pb-24 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400"
            >
              <Link href="/" className="transition-colors hover:text-emerald-400">
                Home
              </Link>
              <span>/</span>
              <Link href="/locations" className="transition-colors hover:text-emerald-400">
                Locations
              </Link>
              <span>/</span>
              <span className="font-semibold text-emerald-400">Jamshedpur</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Semantic Headline & Value Proposition */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  <FaShieldHalved className="text-emerald-400" />
                  Government-Compliant Overseas Career Pathway for Jamshedpur &amp; Adityapur
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                  Work Visa &amp; Overseas Employment Consultancy for{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    Jamshedpur
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                  Celebrated globally as the &ldquo;Steel City of India&rdquo; and industrial pioneer of Jharkhand, Jamshedpur is world-famous for its manufacturing excellence. Powered by Tata Steel, Tata Motors, and the vast Adityapur Industrial Area—one of Asia&apos;s largest precision auto-component SME clusters—the region trains elite precision CNC machinists, VMC programmers, tool &amp; die makers, 6G pipe welders (TIG/MIG/SMAW), and hydraulic automotive mechanics. WorkWise Visa provides Jamshedpur&apos;s craftsmen with direct, institutional overseas recruitment: verified European Single Work Permits (Poland, Romania, Croatia, Malta) and GCC petrochemical visas (Saudi Aramco, KNPC Kuwait, UAE) with pre-negotiated salaries, free accommodation, Takamol testing, and 100% legal eMigrate Emigration Clearance (POE).
                </p>

                {/* Key Legal Trust Metrics */}
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-6 sm:grid-cols-4">
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">100%</div>
                    <div className="text-xs text-slate-400">eMigrate POE Compliant</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">₹10 Lakh</div>
                    <div className="text-xs text-slate-400">Mandatory PBBY Insurance</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">Direct</div>
                    <div className="text-xs text-slate-400">Qiwa &amp; European Permits</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">Zero</div>
                    <div className="text-xs text-slate-400">Sub-Agent Exploitation</div>
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
                        Jamshedpur Overseas Career Desk
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
                        Poland, Romania, Croatia, Malta, Germany, Saudi Arabia &amp; UAE.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Monthly Salary Bands:</strong>{" "}
                        ₹55,000 to ₹1,85,000/mo with free company accommodation, daily transport, and health cover.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Processing Turnaround:</strong>{" "}
                        25 to 45 Days for Gulf visas; 80 to 110 Days for European Single Work Permits (Type-D).
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Worker Protection:</strong>{" "}
                        Authenticated digital contracts registered on foreign labor portals with direct Wage Protection System (WPS) bank accounts.
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-700 pt-5">
                    <a
                      href="#consultation"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all hover:from-emerald-500 hover:to-teal-500 hover:shadow-emerald-600/40 hover:scale-[1.01]"
                    >
                      Book Free Profile Evaluation in Jamshedpur
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
        {/* SECTION 2: EXECUTIVE SUMMARY & JAMSHEDPUR'S MIGRATION REALITY        */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                In-Depth Regional Analysis &amp; Workforce Demographics
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Why Jamshedpur is Eastern India&apos;s Foremost Precision Engineering Talent Pipeline
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 text-base leading-relaxed text-slate-600 lg:grid-cols-2">
              <div className="space-y-5">
                <p>
                  Jamshedpur stands as a monument to Indian heavy engineering and industrial craftsmanship. For over a century, Tata Steel and Tata Motors have anchored an unmatched ecosystem of technical talent across Bistupur, Sakchi, Kadma, Sonari, Telco, Mango, Gamharia, and the massive Adityapur Industrial Area—hosting over 1,200 micro, small, and medium manufacturing units specializing in automotive gears, chassis fabrication, precision die casting, and hydraulic systems.
                </p>
                <p>
                  Craftsmen trained in Jamshedpur possess world-class technical discipline: understanding engineering blueprints, geometric dimensioning &amp; tolerancing (GD&amp;T), and international safety codes. These exact qualifications are desperately sought by European manufacturing plants in Poland, Romania, Croatia, and Germany, as well as high-wage petrochemical and energy conglomerates across the Arabian Gulf.
                </p>
              </div>

              <div className="space-y-5">
                <p>
                  In the past, skilled artisans from Jamshedpur were frequently misled by dubious middlemen who promised &ldquo;direct European visas&rdquo; on visit permits. WorkWise Visa provides an institutional antidote: authenticated employer demands tied to government-issued single work permits (Directive 2011/98/EU), legally binding bilingual contracts, and eMigrate Emigration Clearance (POE).
                </p>
                <p>
                  Connecting with WorkWise Visa has never been easier for Tatanagar candidates. The <strong>Tatanagar - Patna Vande Bharat Express (20893)</strong> departs Tatanagar Junction at 05:30 AM and reaches Patna Junction in just 5.5 hours at 11:00 AM. Candidates can comfortably visit our Varma Centre, Boring Road branch, complete trade document verification, and return the same evening.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 3: IN-DEMAND TRADES & SALARY BENCHMARKS                     */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Verified Global Compensation
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Top In-Demand Overseas Trades for Jamshedpur Artisans in 2026
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base">
                Transparent salary scales negotiated directly with verified foreign employers. All contracts include free company accommodation, daily transit, and medical insurance.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Category 1: Precision Machining & Toolroom */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <FaBuildingColumns className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900">Precision Machining &amp; Toolroom</h3>
                    <p className="text-xs text-slate-500">Poland, Germany, Czechia, Romania</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">CNC Milling / Lathe Operator:</span>
                    <span className="font-bold text-emerald-600">₹95,000 – ₹1,55,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">VMC Programmer / Setter:</span>
                    <span className="font-bold text-emerald-600">₹1,15,000 – ₹1,75,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Tool &amp; Die Maker:</span>
                    <span className="font-bold text-emerald-600">₹1,10,000 – ₹1,65,000</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium text-slate-700">Precision Surface Grinder:</span>
                    <span className="font-bold text-emerald-600">₹90,000 – ₹1,40,000</span>
                  </div>
                </div>
              </div>

              {/* Category 2: 6G Welding & Pipe Fabrication */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <FaBriefcase className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900">6G Welding &amp; Fabrication</h3>
                    <p className="text-xs text-slate-500">Poland Shipyards, Romania, Kuwait, Aramco</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">6G Pipe Welder (TIG/MIG):</span>
                    <span className="font-bold text-emerald-600">₹85,000 – ₹1,40,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Structural Steel Fabricator:</span>
                    <span className="font-bold text-emerald-600">₹60,000 – ₹90,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Boiler Welder (High Pressure):</span>
                    <span className="font-bold text-emerald-600">₹90,000 – ₹1,45,000</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium text-slate-700">Pipe Fitter / Fabricator:</span>
                    <span className="font-bold text-emerald-600">₹58,000 – ₹85,000</span>
                  </div>
                </div>
              </div>

              {/* Category 3: Automotive Maintenance & Transport */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <FaCarSide className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900">Automotive &amp; Transport</h3>
                    <p className="text-xs text-slate-500">UAE, Saudi Arabia, Kuwait, Qatar</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Automobile Mechanic (Diesel/Petrol):</span>
                    <span className="font-bold text-emerald-600">₹65,000 – ₹98,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Hydraulic System Mechanic:</span>
                    <span className="font-bold text-emerald-600">₹62,000 – ₹95,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Heavy Trailer Driver (GCC):</span>
                    <span className="font-bold text-emerald-600">₹68,000 – ₹1,00,000</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium text-slate-700">Maintenance Electrician:</span>
                    <span className="font-bold text-emerald-600">₹58,000 – ₹92,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 4: TRAVEL CONNECTIVITY TO PATNA REGIONAL BRANCH              */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  Same-Day Fast Access
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-slate-900">
                  How Jamshedpur Artisans Reach WorkWise Visa
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  No need to spend days traveling to Delhi or Mumbai. Our <strong>Patna Regional Branch</strong> at Varma Centre, Boring Road is directly accessible from Tatanagar with premier superfast train connectivity, providing complete technical trade testing, visa file audits, and biometric guidance.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <FaTrainSubway className="text-emerald-600 text-lg mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Tatanagar - Patna Vande Bharat Express (20893)</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Departs Tatanagar Junction at 05:30 AM, reaches Patna Junction at 11:00 AM (Just 5 Hours 30 Minutes). Attend selection interviews and return the same evening. Also available: South Bihar Express (13287).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <FaRoute className="text-emerald-600 text-lg mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Direct Highway Route (NH-33 &amp; NH-20)</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Jamshedpur → Chandil → Bundu → Ranchi Ring Road → Ramgarh → Hazaribagh → Patna (420 KM via 4-lane expressway).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <FaWhatsapp className="text-emerald-600 text-lg mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">WhatsApp Technical Resume Screening</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Send your trade certificates, toolroom experience letters, and passport copy to (+91 8130161603) for 100% free eligibility matching before scheduling travel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-slate-50 p-6 sm:p-8 shadow-sm">
                  <h3 className="font-display font-bold text-slate-900 text-lg flex items-center gap-2">
                    <FaLocationDot className="text-emerald-600" />
                    Patna Regional Facilitation Center (Bihar &amp; Jharkhand)
                  </h3>
                  <div className="mt-4 space-y-3 text-sm text-slate-700">
                    <p>
                      <strong>Office Address:</strong> 6th Floor, Office No. 606, Varma Centre, Boring Road Crossing, Sri Krishna Puri, Patna, Bihar 800001
                    </p>
                    <p>
                      <strong>Office Timings:</strong> Monday to Saturday: 09:30 AM – 06:30 PM (Sunday Closed)
                    </p>
                    <p>
                      <strong>Helpline &amp; Appointments:</strong> +91 8130161603 / workwisevisa@gmail.com
                    </p>
                    <p>
                      <strong>From Patna Junction:</strong> Direct shared auto/cab via Dak Bungalow to Boring Road Crossing (15 Mins).
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-emerald-200/60 flex flex-wrap gap-3">
                    <a
                      href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20from%20Jamshedpur%20and%20want%20to%20apply%20for%20CNC%20welder%20overseas%20jobs."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-500 transition-colors"
                    >
                      <FaWhatsapp className="text-sm" />
                      Chat on WhatsApp Now
                    </a>
                    <Link
                      href="/locations/patna"
                      className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      View Patna Branch Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 5: 6-STAGE COMPLIANT ROADMAP                                */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Transparent Execution
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                The 6-Stage Government-Protected Recruitment Pipeline
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="inline-block rounded-md bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800 mb-2">Stage 01</span>
                <h4 className="font-bold text-slate-900 text-sm">Free Profile Evaluation</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Send technical certifications, machine operating experience, and passport for immediate screening against active European &amp; GCC vacancies.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="inline-block rounded-md bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800 mb-2">Stage 02</span>
                <h4 className="font-bold text-slate-900 text-sm">Client Trade Interview</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Attend technical interviews or practical bench tests (CNC programming, 6G welding, or tool fitting) evaluated by foreign client delegates.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="inline-block rounded-md bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800 mb-2">Stage 03</span>
                <h4 className="font-bold text-slate-900 text-sm">Digital Labor Approval</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  The host company secures your government work permit through official portals (Poland Voivodeship Typ A, Romania IGI, Saudi Qiwa).
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="inline-block rounded-md bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800 mb-2">Stage 04</span>
                <h4 className="font-bold text-slate-900 text-sm">Wafid GAMCA Medical &amp; PCC</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Complete medical fitness screening at an accredited clinic and obtain your Police Clearance Certificate from POPSK Jamshedpur.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="inline-block rounded-md bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800 mb-2">Stage 05</span>
                <h4 className="font-bold text-slate-900 text-sm">Consular Stamping &amp; POE</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Visa stamping through VFS Global / Embassy channels and mandatory Emigration Clearance (POE) on the Indian MEA eMigrate portal.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="inline-block rounded-md bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800 mb-2">Stage 06</span>
                <h4 className="font-bold text-slate-900 text-sm">Flight Departure &amp; Camp Arrival</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Pre-departure briefing, direct flight booking, company airport pickup, and onboarding with zero hidden charges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 6: CANDIDATE TESTIMONIALS                                   */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Verified Candidate Success
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Jamshedpur Craftsmen Placed Legally Across the Globe
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-xs" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    &ldquo;Adityapur me 8 saal auto-component workshop me kaam kiya par European visa ka koi authentic rasta nahi milta tha. WorkWise Visa ne direct Polish Voivodeship permit arrange kiya. Vande Bharat se Patna jakar trade verify karwaya. Aaj Poland me MNC me kaam kar raha hoon.&rdquo;
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h5 className="font-bold text-slate-900 text-sm">Gurpreet Singh</h5>
                  <p className="text-xs text-slate-500">Bistupur / Sakchi, Jamshedpur • CNC VMC Milling Operator</p>
                  <p className="text-xs font-semibold text-emerald-600 mt-0.5">Wrocław Automotive Cluster, Poland • €1,400/mo (₹1,27,000)</p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-xs" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    &ldquo;Tata vendor unit me boiler welding ka experience tha. WorkWise Visa ke zariye Kuwait ka Article 18 direct permit mila. Accommodation, transport aur overtime sab free hai. Bahut honest consultancy hai.&rdquo;
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h5 className="font-bold text-slate-900 text-sm">Manoj Kumar Sharma</h5>
                  <p className="text-xs text-slate-500">Mango, Jamshedpur • 6G TIG/MIG Pipe Welder</p>
                  <p className="text-xs font-semibold text-emerald-600 mt-0.5">KNPC Modernization, Kuwait • KWD 280/mo (₹76,500)</p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-xs" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    &ldquo;Jamshedpur se heavy trailer chalate chalate thak gaya tha. WorkWise ne Dubai me logistics company me direct driver vacancy dilwayi. RTA test first attempt me pass karwaya.&rdquo;
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h5 className="font-bold text-slate-900 text-sm">Deepak Hansda</h5>
                  <p className="text-xs text-slate-500">Telco Colony, Jamshedpur • Heavy Commercial Truck Driver</p>
                  <p className="text-xs font-semibold text-emerald-600 mt-0.5">Dubai Logistics Park, UAE • AED 4,000/mo (₹90,000)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 7: FAQS                                                      */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Frequently Asked Questions
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Overseas Placement FAQs for Jamshedpur Applicants
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="font-bold text-slate-900 text-base">
                  Jamshedpur ke technical workers WorkWise Visa Patna office kaise pahuchein?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Tatanagar Junction se rozana subah 05:30 baje chalne wali Tatanagar - Patna Vande Bharat Express (20893) sirf 5.5 ghante me subah 11:00 baje Patna Junction pahuncha deti hai. Aap same day interview dekar shaam ko wapas laut sakte hain.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="font-bold text-slate-900 text-base">
                  Kya Adityapur industrial area ke welders aur machinists ke liye Europe me vacancies hain?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Haan! Poland, Romania, Croatia, Germany aur Malta ke manufacturing aur automotive plants me Jamshedpur ke certified CNC machinists, toolmakers, aur 6G welders ki bhari demand hai jahan monthly package ₹1.10 Lakh se ₹1.80 Lakh tak hota hai.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="font-bold text-slate-900 text-base">
                  Jamshedpur me Passport Seva Kendra kahan sthit hai?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Post Office Passport Seva Kendra (POPSK) Jamshedpur (Bistupur Head Post Office premises) me sthit hai jahan se PCC aur passport verification easily ho jata hai.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="font-bold text-slate-900 text-base">
                  Kya initial profile assessment ke liye koi charge lagta hai?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Bilkul nahi. WorkWise Visa par initial resume evaluation aur trade eligibility review 100% free of charge hai. Hamari policy me koi hidden charges ya registration fees nahi hoti hain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 8: APPLICATION CONSULTATION FORM                            */}
        {/* ==================================================================== */}
        <section id="consultation" className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Official Application Desk
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Apply for Verified Overseas Jobs from Jamshedpur
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base">
                Apna profile submit karein. Hamari overseas recruitment team 2 working hours ke andar aapse connect karegi.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10 shadow-lg">
              <ConsultationForm defaultCity="Jamshedpur" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
