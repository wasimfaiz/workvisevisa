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
// SEO METADATA — STRICT CHARACTER LIMITS & TARGETED DHANBAD KEYWORDS
// ============================================================================
export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Work Visa Consultancy in Dhanbad | Overseas Jobs & Recruitment",
  description:
    "Top work visa consultancy in Dhanbad, Jharkhand. Verified Gulf & Europe jobs for heavy excavator operators, mining fitters, welders & commercial drivers.",
  keywords: [
    "work visa consultancy in dhanbad",
    "gulf job consultancy in dhanbad",
    "visa consultancy in dhanbad jharkhand",
    "overseas placement agency dhanbad",
    "excavator operator jobs abroad dhanbad",
    "bccl mining technicians gulf jobs",
    "saudi work visa dhanbad",
    "dubai work permit koyla nagri",
    "bank more visa consultancy",
    "europe work visa dhanbad",
    "workwise visa dhanbad",
    "heavy machinery driver jobs abroad",
  ],
  alternates: {
    canonical: "https://www.workwisevisa.com/locations/dhanbad",
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
    title: "Work Visa Consultancy in Dhanbad | Overseas Jobs & Recruitment",
    description:
      "Premier overseas job consultancy in Dhanbad, Jharkhand. Authentic employer contracts for Saudi Arabia, UAE, Qatar & Europe with complete legal protection.",
    url: "https://www.workwisevisa.com/locations/dhanbad",
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.workwisevisa.com/images/workwise_logo.png",
        width: 1200,
        height: 630,
        alt: "WorkWise Visa Consultancy for Dhanbad & Coal Belt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Visa Consultancy in Dhanbad | Overseas Jobs & Recruitment",
    description:
      "Verified overseas job placement and work visa services in Dhanbad, Jharkhand. 100% legal eMigrate, POE clearance, and direct employer contracts.",
    images: ["https://www.workwisevisa.com/images/workwise_logo.png"],
  },
};

export default function DhanbadLocationPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EmploymentAgency",
        "@id": "https://www.workwisevisa.com/locations/dhanbad#agency",
        name: "WorkWise Visa - Dhanbad & Coal Belt Regional Candidate Desk",
        url: "https://www.workwisevisa.com/locations/dhanbad",
        logo: "https://www.workwisevisa.com/images/workwise_logo.png",
        image: "https://www.workwisevisa.com/images/workwise_logo.png",
        description:
          "Authoritative overseas employment consultancy for Dhanbad and Koyla Nagri candidates. Specializing in verified GCC and European work visas, HEMM heavy equipment operator recruitment, eMigrate POE compliance, and Takamol trade testing.",
        telephone: "+918130161603",
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhanbad",
          addressRegion: "Jharkhand",
          addressCountry: "IN",
          postalCode: "826001",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 23.7957,
          longitude: 86.4304,
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Dhanbad" },
          { "@type": "AdministrativeArea", name: "Bank More" },
          { "@type": "AdministrativeArea", name: "Hirapur" },
          { "@type": "AdministrativeArea", name: "Saraidhela" },
          { "@type": "AdministrativeArea", name: "Jharia" },
          { "@type": "AdministrativeArea", name: "Katras" },
          { "@type": "AdministrativeArea", name: "Govindpur" },
          { "@type": "AdministrativeArea", name: "Nirsa" },
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
                  "Government work authorizations for Poland, Romania, Croatia, and Malta with long-stay Schengen legal entry.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "HEMM & Heavy Mining Equipment Placements",
                description:
                  "High-salary recruitment for hydraulic excavator, wheel loader, bulldozer, and heavy dumper operators in GCC infrastructure projects.",
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.workwisevisa.com/locations/dhanbad#breadcrumb",
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
            name: "Dhanbad",
            item: "https://www.workwisevisa.com/locations/dhanbad",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.workwisevisa.com/locations/dhanbad#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How can heavy equipment operators from Dhanbad apply for Gulf & Europe jobs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Candidates from Dhanbad can submit their heavy driving license, ITI/technical certificates, and passport via WhatsApp (+91 8130161603) for an instant eligibility review. For face-to-face interviews and trade testing, candidates can take the overnight Ganga Damodar Express (13329) directly to Patna Junction, reaching our Varma Centre, Boring Road branch in just 5.5 hours.",
            },
          },
          {
            "@type": "Question",
            name: "Are there specific overseas vacancies for BCCL and coal belt technicians from Dhanbad?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Major infrastructure projects across Saudi Arabia (such as NEOM, Red Sea Global, and Aramco oilfields), the UAE, and Kuwait regularly hire 20T-50T hydraulic excavator operators, dump truck drivers, mining mechanical fitters, hydraulic technicians, and certified 6G welders with monthly packages ranging from ₹70,000 to ₹1,15,000.",
            },
          },
          {
            "@type": "Question",
            name: "Where do Dhanbad candidates undergo GAMCA / Wafid medical tests?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Candidates book medical slips on the official portal wafid.com and are assigned to authorized GCC medical clinics located in Kolkata or Patna. Both cities are conveniently connected to Dhanbad via multiple daily express trains.",
            },
          },
          {
            "@type": "Question",
            name: "How can applicants from Dhanbad obtain a Police Clearance Certificate (PCC)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Applicants can schedule their PCC appointment at the Post Office Passport Seva Kendra (POPSK) Dhanbad, located near the Head Post Office, through passportindia.gov.in. WorkWise Visa provides complete assistance with document checklists and MEA Apostille attestation.",
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
              <span className="font-semibold text-emerald-400">Dhanbad</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Semantic Headline & Value Proposition */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  <FaShieldHalved className="text-emerald-400" />
                  Government-Compliant Overseas Career Pathway for Dhanbad &amp; Coal Belt
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                  Work Visa &amp; Overseas Employment Consultancy for{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    Dhanbad
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                  Known globally as the &ldquo;Coal Capital of India&rdquo; (Koyla Nagri), Dhanbad is home to one of Asia&apos;s most skilled heavy machinery and mining workforces. Powered by decades of mining operations (BCCL), heavy equipment maintenance workshops, and premier institutions like IIT-ISM Dhanbad, the region trains elite hydraulic excavator operators, heavy dumper drivers, mining mechanical fitters, hydraulic technicians, and certified 6G welders. WorkWise Visa provides Dhanbad&apos;s technical workforce with institutional security: direct recruitment on verified Saudi Qiwa, UAE MoHRE, and European Voivodeship permits with pre-negotiated salaries, free accommodation, Takamol testing, and 100% legal eMigrate Emigration Clearance (POE).
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
                    <div className="text-xs text-slate-400">Qiwa &amp; MoHRE Contracts</div>
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
                        Dhanbad Overseas Career Desk
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
                        Saudi Arabia (Aramco / NEOM), UAE (Dubai &amp; Abu Dhabi), Qatar, Kuwait, Oman, Poland &amp; Romania.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Monthly Salary Bands:</strong>{" "}
                        ₹50,000 to ₹1,80,000/mo with free company housing, site food/allowances, and medical insurance.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Processing Turnaround:</strong>{" "}
                        25 to 45 Days for Gulf Visas; 80 to 110 Days for European Single Work Permits (Type-D).
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
                      Book Free Profile Evaluation in Dhanbad
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
        {/* SECTION 2: EXECUTIVE SUMMARY & DHANBAD'S MIGRATION REALITY           */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                In-Depth Regional Analysis &amp; Workforce Demographics
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Why Dhanbad is India&apos;s Foremost Heavy Machinery &amp; Mining Talent Hub
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 text-base leading-relaxed text-slate-600 lg:grid-cols-2">
              <div className="space-y-5">
                <p>
                  Dhanbad is the industrial engine of Eastern India, commanding a vast cluster of opencast and underground coal mines operated by Bharat Coking Coal Limited (BCCL), Eastern Coalfields Limited (ECL), and private heavy industries. Localities spanning Bank More, Hirapur, Saraidhela, Jharia, Katras, Govindpur, Nirsa, Sindri, and Barwadda form a massive ecosystem of heavy earthmoving machinery (HEMM) operators, hydraulic mechanics, diesel engine specialists, and industrial welders.
                </p>
                <p>
                  The hands-on technical competence developed in Dhanbad&apos;s demanding open-pit mines makes local operators the #1 preferred choice for mega earthmoving and infrastructure projects across the Gulf region—including Saudi Arabia&apos;s NEOM The Line, Red Sea Global, Qiddiya, and UAE port expansions. However, local job seekers have historically suffered from deceitful local sub-agents who provide fake work visas or deduct huge unverified commissions.
                </p>
              </div>

              <div className="space-y-5">
                <p>
                  WorkWise Visa provides Dhanbad candidates with an authentic, institutional overseas recruitment bridge. Operating with direct foreign employer demands, our recruitment model eliminates all middleman markups. Dhanbad candidates enjoy seamless connectivity to our Patna Regional Branch: the overnight <strong>Ganga Damodar Express (13329)</strong> departs Dhanbad at 11:20 PM and arrives at Patna Junction at 05:15 AM, allowing workers to attend client selection and return home on the same day.
                </p>
                <p>
                  In addition to Gulf mining and civil infrastructure, European industrial markets—including Poland, Romania, Croatia, and Germany—actively recruit Dhanbad&apos;s certified 6G welders and CNC machinists for container port maintenance, structural steel factories, and heavy automotive assembly lines, offering legal Schengen single work permits with earnings up to ₹1,60,000 per month.
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
                Top In-Demand Overseas Trades for Dhanbad Craftsmen in 2026
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base">
                Transparent salary scales negotiated directly with verified foreign employers. All contracts guarantee free camp accommodation, transportation, and medical coverage.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Category 1: HEMM & Heavy Machinery */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <FaCarSide className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900">HEMM &amp; Earthmoving</h3>
                    <p className="text-xs text-slate-500">Saudi NEOM, UAE, Kuwait, Oman</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Hydraulic Excavator (20T-50T):</span>
                    <span className="font-bold text-emerald-600">₹75,000 – ₹1,15,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Heavy Dumper / Tipper Driver:</span>
                    <span className="font-bold text-emerald-600">₹65,000 – ₹95,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Wheel Loader Operator:</span>
                    <span className="font-bold text-emerald-600">₹70,000 – ₹1,05,000</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium text-slate-700">Bulldozer / Grader Operator:</span>
                    <span className="font-bold text-emerald-600">₹72,000 – ₹1,08,000</span>
                  </div>
                </div>
              </div>

              {/* Category 2: Mechanical & Mining Trades */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <FaBriefcase className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900">Mechanical &amp; Mining</h3>
                    <p className="text-xs text-slate-500">Saudi Arabia, Qatar, UAE, Poland</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Mining Mechanical Fitter:</span>
                    <span className="font-bold text-emerald-600">₹58,000 – ₹88,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Hydraulic System Technician:</span>
                    <span className="font-bold text-emerald-600">₹65,000 – ₹98,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Heavy Diesel Mechanic:</span>
                    <span className="font-bold text-emerald-600">₹62,000 – ₹95,000</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium text-slate-700">Heavy Crane Operator:</span>
                    <span className="font-bold text-emerald-600">₹78,000 – ₹1,20,000</span>
                  </div>
                </div>
              </div>

              {/* Category 3: Welding & European Logistics */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <FaBuildingColumns className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900">Welding &amp; European Industry</h3>
                    <p className="text-xs text-slate-500">Poland, Romania, Croatia, Germany</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">6G Pipe Welder (TIG/MIG):</span>
                    <span className="font-bold text-emerald-600">₹85,000 – ₹1,35,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Structural Fabricator:</span>
                    <span className="font-bold text-emerald-600">₹58,000 – ₹88,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Forklift Operator (Europe):</span>
                    <span className="font-bold text-emerald-600">₹95,000 – ₹1,45,000</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium text-slate-700">Industrial Electrician:</span>
                    <span className="font-bold text-emerald-600">₹58,000 – ₹90,000</span>
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
                  Convenient Rail &amp; Road Access
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-slate-900">
                  How Dhanbad Technicians Reach WorkWise Visa
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Avoid costly trips to metropolitan centers. Our <strong>Patna Regional Branch</strong> at Varma Centre, Boring Road is easily accessible from Dhanbad with convenient overnight rail options, providing full trade test evaluations and biometric compliance support.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <FaTrainSubway className="text-emerald-600 text-lg mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Ganga Damodar Express (13329) - Direct Overnight</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Departs Dhanbad Junction at 11:20 PM, reaches Patna Junction at 05:15 AM (5 Hours 55 Minutes). Board comfortably at night, complete your verification in the morning, and return.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <FaRoute className="text-emerald-600 text-lg mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Direct Highway Route (GT Road NH-19 &amp; NH-22)</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Dhanbad → Topchanchi → Bagodar → Barhi → Dobhi → Gaya → Jehanabad → Patna (Approximately 290 KM, 6 Hours via NH-19 and NH-22).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <FaWhatsapp className="text-emerald-600 text-lg mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Online Document Evaluation via WhatsApp</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Send your heavy equipment operator license, ITI trade certificate, and passport to (+91 8130161603) for instant client pre-screening before traveling.
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
                      href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20from%20Dhanbad%20and%20want%20to%20apply%20for%20heavy%20machinery%20overseas%20jobs."
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
                  Submit heavy license, ITI trade diploma, and passport for immediate screening against verified overseas corporate demands.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="inline-block rounded-md bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800 mb-2">Stage 02</span>
                <h4 className="font-bold text-slate-900 text-sm">Client Trade Interview</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Attend practical trade tests (HEMM operations, 6G welding, or electrical circuits) evaluated directly by foreign client delegates.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="inline-block rounded-md bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800 mb-2">Stage 03</span>
                <h4 className="font-bold text-slate-900 text-sm">Digital Labor Approval</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  The host company secures your government work permit through official portals (Saudi Qiwa, UAE MoHRE, Poland Voivodeship).
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="inline-block rounded-md bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800 mb-2">Stage 04</span>
                <h4 className="font-bold text-slate-900 text-sm">Wafid GAMCA Medical &amp; PCC</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Complete medical fitness screening at an accredited Wafid clinic and secure your Police Clearance Certificate from POPSK Dhanbad.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="inline-block rounded-md bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800 mb-2">Stage 05</span>
                <h4 className="font-bold text-slate-900 text-sm">Consular Stamping &amp; POE</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Visa stamping through official embassy channels and mandatory Emigration Clearance (POE) on the Indian MEA eMigrate portal.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="inline-block rounded-md bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800 mb-2">Stage 06</span>
                <h4 className="font-bold text-slate-900 text-sm">Flight Departure &amp; Camp Arrival</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Pre-departure briefing, direct flight booking, company airport pickup, and camp onboarding with zero hidden charges.
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
                Dhanbad Technicians Placed Legally Across the Globe
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
                    &ldquo;BCCL mining area me 7 saal JCB aur excavator chalaya tha. Local agents ne Qatar bolkar dhokha diya tha. WorkWise Visa se judkar Ganga Damodar se Patna gaya. 45 din me Saudi Qiwa ka verified visa mila. Aaj wahan AC cabin excavator chala raha hoon.&rdquo;
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h5 className="font-bold text-slate-900 text-sm">Mohammad Shamim Ansari</h5>
                  <p className="text-xs text-slate-500">Bank More, Dhanbad • Hydraulic Excavator Operator</p>
                  <p className="text-xs font-semibold text-emerald-600 mt-0.5">Al-Ahsa Oilfield, Saudi Arabia • SAR 3,700/mo (₹84,000)</p>
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
                    &ldquo;Govindpur ke welding garage se European visa milna sapna lagta tha. WorkWise Visa ne mere trade test documents verify kiye aur Romania ka Type-D work permit dilwaya. Salary har mahine account me aati hai.&rdquo;
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h5 className="font-bold text-slate-900 text-sm">Rajesh Kumar Mahato</h5>
                  <p className="text-xs text-slate-500">Govindpur, Dhanbad • 6G Pipe Welder</p>
                  <p className="text-xs font-semibold text-emerald-600 mt-0.5">Constanța Port Zone, Romania • €1,200/mo (₹1,09,000)</p>
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
                    &ldquo;Indian heavy commercial license tha. WorkWise team ne direct UAE corporate placement dilwaya aur Abu Dhabi me RTA testing me guidance di. Ab wahan company flat aur medical sab free hai.&rdquo;
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h5 className="font-bold text-slate-900 text-sm">Sunil Soren</h5>
                  <p className="text-xs text-slate-500">Katras, Dhanbad • Heavy Trailer Driver</p>
                  <p className="text-xs font-semibold text-emerald-600 mt-0.5">Abu Dhabi Logistics Park, UAE • AED 4,200/mo (₹95,000)</p>
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
                Overseas Placement FAQs for Dhanbad Applicants
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="font-bold text-slate-900 text-base">
                  Dhanbad ke candidates WorkWise Visa office kaise pahunch sakte hain?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Dhanbad Junction se rozana raat 11:20 baje chalne wali Ganga Damodar Express (13329) subah 5:15 baje Patna Junction pahunchati hai. Wahan se Boring Road Crossing par Varma Centre hamara office sirf 15 minute ki doori par hai.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="font-bold text-slate-900 text-base">
                  Kya Dhanbad ke heavy equipment operators ke liye GCC me special vacancy aati hai?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Haan, Saudi Arabia ke NEOM, Red Sea, aur Aramco refinery projects me 20T-50T hydraulic excavator, wheel loader, grader, aur heavy dumper operators ki continuous demand rehti hai jahan monthly package ₹70,000 se ₹1,15,000+ tak hota hai.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="font-bold text-slate-900 text-base">
                  Dhanbad me Passport Office se PCC nikalwane ka kya tarika hai?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Post Office Passport Seva Kendra (POPSK) Dhanbad (near Head Post Office) se online appointment lekar Police Clearance Certificate generate hota hai. WorkWise team documents upload aur verification me poora support karti hai.
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
                Apply for Verified Overseas Jobs from Dhanbad
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base">
                Apna profile submit karein. Hamari overseas recruitment team 2 working hours ke andar aapse connect karegi.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10 shadow-lg">
              <ConsultationForm defaultCity="Dhanbad" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
