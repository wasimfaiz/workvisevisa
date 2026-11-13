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
// SEO METADATA — STRICT CHARACTER LIMITS & TARGETED BOKARO KEYWORDS
// ============================================================================
export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Work Visa Consultancy in Bokaro | Overseas Jobs & Recruitment",
  description:
    "Top work visa consultancy in Bokaro Steel City, Jharkhand. Verified Europe & Gulf jobs for SAIL plant fabrication welders, riggers, electricians & drivers.",
  keywords: [
    "work visa consultancy in bokaro",
    "gulf job consultancy in bokaro",
    "visa consultancy in bokaro steel city",
    "overseas recruitment agency bokaro",
    "sail bokaro plant welders abroad",
    "chas bokaro visa consultancy",
    "sector 4 bokaro overseas jobs",
    "saudi work visa bokaro",
    "dubai work permit bokaro",
    "europe work visa bokaro jharkhand",
    "workwise visa bokaro",
    "poland work permit bokaro",
  ],
  alternates: {
    canonical: "https://www.workwisevisa.com/locations/bokaro",
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
    title: "Work Visa Consultancy in Bokaro | Overseas Jobs & Recruitment",
    description:
      "Premier overseas job consultancy in Bokaro Steel City, Jharkhand. Authentic employer contracts for Saudi Arabia, UAE, Qatar & Europe with complete legal protection.",
    url: "https://www.workwisevisa.com/locations/bokaro",
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.workwisevisa.com/images/workwise_logo.png",
        width: 1200,
        height: 630,
        alt: "WorkWise Visa Consultancy for Bokaro Steel City",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Visa Consultancy in Bokaro | Overseas Jobs & Recruitment",
    description:
      "Verified overseas job placement and work visa services in Bokaro, Jharkhand. 100% legal eMigrate, POE clearance, and direct employer contracts.",
    images: ["https://www.workwisevisa.com/images/workwise_logo.png"],
  },
};

export default function BokaroLocationPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EmploymentAgency",
        "@id": "https://www.workwisevisa.com/locations/bokaro#agency",
        name: "WorkWise Visa - Bokaro Steel City Candidate Desk",
        url: "https://www.workwisevisa.com/locations/bokaro",
        logo: "https://www.workwisevisa.com/images/workwise_logo.png",
        image: "https://www.workwisevisa.com/images/workwise_logo.png",
        description:
          "Authoritative overseas employment consultancy for Bokaro Steel City, Chas, and industrial belt candidates. Specializing in verified GCC and European work visas, heavy industrial fabrication, eMigrate POE compliance, and Takamol trade testing.",
        telephone: "+918130161603",
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bokaro Steel City",
          addressRegion: "Jharkhand",
          addressCountry: "IN",
          postalCode: "827004",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 23.6693,
          longitude: 86.1511,
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Bokaro Steel City" },
          { "@type": "AdministrativeArea", name: "Sector 4" },
          { "@type": "AdministrativeArea", name: "Chas" },
          { "@type": "AdministrativeArea", name: "City Centre" },
          { "@type": "AdministrativeArea", name: "Bermo" },
          { "@type": "AdministrativeArea", name: "Phusro" },
          { "@type": "AdministrativeArea", name: "Chandrapura" },
          { "@type": "AdministrativeArea", name: "Gumia" },
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
                name: "Heavy Industrial Fabrication & Rigging Placements",
                description:
                  "High-salary recruitment for structural steel fabricators, 6G pipe welders, and heavy mobile crane operators in GCC & European plants.",
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.workwisevisa.com/locations/bokaro#breadcrumb",
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
            name: "Bokaro",
            item: "https://www.workwisevisa.com/locations/bokaro",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.workwisevisa.com/locations/bokaro#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How can industrial technicians from Bokaro apply for overseas work visas with WorkWise Visa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Candidates from Bokaro Steel City and Chas can send their technical certificates, resume, and passport copy via WhatsApp (+91 8130161603) for an immediate free profile evaluation. For face-to-face selection and practical trade tests, candidates can take the Ranchi-Patna Jan Shatabdi Express (12366) directly from Bokaro Steel City Station, reaching our Patna Regional Branch (Varma Centre, Boring Road) in 5.5 hours.",
            },
          },
          {
            "@type": "Question",
            name: "Which countries offer the highest salaries for Bokaro's heavy fabrication welders and fitters?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Certified 6G pipe welders and structural fabricators from Bokaro earn ₹1,10,000 to ₹1,55,000 per month in Poland, Romania, and Croatia with European single work permits. In the Gulf region (Saudi Aramco, KNPC Kuwait, and QatarEnergy), salaries range from ₹75,000 to ₹1,05,000 with 100% free food, air-conditioned accommodation, and guaranteed overtime.",
            },
          },
          {
            "@type": "Question",
            name: "Where do Bokaro applicants complete their GAMCA / Wafid medical examinations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Medical appointment slips are generated online at wafid.com. Applicants from Bokaro are assigned to authorized GCC clinics in Kolkata or Patna, both accessible via daily direct trains from Bokaro Steel City or nearby Dhanbad.",
            },
          },
          {
            "@type": "Question",
            name: "How can applicants from Bokaro obtain a Police Clearance Certificate (PCC)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Applicants can book an online PCC appointment at the Post Office Passport Seva Kendra (POPSK) Bokaro, situated at the Sector 1 Head Post Office, via passportindia.gov.in. WorkWise Visa provides complete guidance on MEA Apostille attestation and consular submission.",
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
              <span className="font-semibold text-emerald-400">Bokaro</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Semantic Headline & Value Proposition */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  <FaShieldHalved className="text-emerald-400" />
                  Government-Compliant Overseas Career Pathway for Bokaro Steel City
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                  Work Visa &amp; Overseas Employment Consultancy for{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    Bokaro
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                  Eminent across India as the &ldquo;Steel City&rdquo; of Eastern Jharkhand, Bokaro boasts an industrial legacy forged by the SAIL Bokaro Steel Plant, Bokaro Thermal Power Station, and the extensive fabrication workshops of Chas and Bermo. The city trains world-class structural steel fabricators, high-pressure 6G pipe welders, blast furnace mechanical fitters, industrial riggers, mobile crane operators, and substation electricians. WorkWise Visa provides Bokaro&apos;s technical workforce with institutional overseas employment: direct recruitment on verified Saudi Qiwa, UAE MoHRE, and European Voivodeship permits with pre-negotiated salaries, free accommodation, Takamol testing, and 100% legal eMigrate Emigration Clearance (POE).
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
                        Bokaro Overseas Career Desk
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
                        Saudi Arabia (Aramco / NEOM), UAE (Dubai &amp; Abu Dhabi), Qatar, Kuwait, Poland, Romania &amp; Croatia.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Monthly Salary Bands:</strong>{" "}
                        ₹52,000 to ₹1,75,000/mo with free company accommodation, daily transit, and comprehensive health cover.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Processing Turnaround:</strong>{" "}
                        25 to 45 Days for GCC visas; 80 to 110 Days for European Single Work Permits (Type-D).
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
                      Book Free Profile Evaluation in Bokaro
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
        {/* SECTION 2: EXECUTIVE SUMMARY & BOKARO'S MIGRATION REALITY            */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                In-Depth Regional Analysis &amp; Workforce Demographics
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Why Bokaro is Jharkhand&apos;s Leading Heavy Steel &amp; Fabrication Talent Center
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 text-base leading-relaxed text-slate-600 lg:grid-cols-2">
              <div className="space-y-5">
                <p>
                  Bokaro district represents the heavy industrial backbone of central Jharkhand. Spanning the well-planned urban sectors of Bokaro Steel City (Sector 1 to Sector 12), the commercial fabrication hub of Chas, and the coal-mining belts of Bermo, Phusro, and Chandrapura, the district houses an immense pool of technical specialists. Hundreds of engineering workshops catering to SAIL Bokaro have trained two generations of artisans in heavy boiler fabrication, gas cutting, structural erection, precision millwright alignment, and hydraulic rigging.
                </p>
                <p>
                  Because these craftsmen work routinely under rigorous public sector quality and safety standards, they integrate seamlessly into multi-billion-dollar refinery turnaround (shutdown) operations across the Arabian Gulf, as well as European heavy steel and industrial infrastructure projects. However, local job seekers have frequently fallen prey to unverified agents promising high-paying jobs on tourist or visit visas.
                </p>
              </div>

              <div className="space-y-5">
                <p>
                  WorkWise Visa bridges Bokaro&apos;s talent directly to authentic global employers without middleman exploitation. Operating through pre-approved governmental labor quotas, we ensure candidates receive legally authenticated contracts, transparent government fees, and mandatory Emigration Clearance (POE).
                </p>
                <p>
                  Bokaro candidates enjoy rapid, stress-free access to our Patna Regional Branch: the <strong>Ranchi - Patna Jan Shatabdi Express (12366)</strong> stops at Bokaro Steel City Railway Station at 04:30 PM, reaching Patna Junction at 10:20 PM in just 5.5 hours. Alternatively, daily overnight options like the Palamu Express allow candidates to complete client trade interviews and file verification comfortably.
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
                Top In-Demand Overseas Trades for Bokaro Craftsmen in 2026
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base">
                Transparent salary scales negotiated directly with verified foreign employers. All contracts include free camp accommodation, site transit, and medical coverage.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Category 1: Industrial Fabrication & Welding */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <FaBriefcase className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900">Fabrication &amp; Welding</h3>
                    <p className="text-xs text-slate-500">Poland, Romania, Saudi Aramco, Kuwait</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">6G Pipe Welder (TIG/MIG):</span>
                    <span className="font-bold text-emerald-600">₹85,000 – ₹1,35,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Structural Steel Fabricator:</span>
                    <span className="font-bold text-emerald-600">₹60,000 – ₹90,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Industrial Rigger (Heavy Lift):</span>
                    <span className="font-bold text-emerald-600">₹58,000 – ₹88,000</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium text-slate-700">Gas Cutter &amp; Grinder:</span>
                    <span className="font-bold text-emerald-600">₹50,000 – ₹75,000</span>
                  </div>
                </div>
              </div>

              {/* Category 2: Heavy Machinery & Plant Maintenance */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <FaCarSide className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900">Plant Maintenance &amp; Machinery</h3>
                    <p className="text-xs text-slate-500">Saudi NEOM, UAE, Oman, Poland</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Mobile Crane Operator:</span>
                    <span className="font-bold text-emerald-600">₹75,000 – ₹1,18,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Mechanical Fitter (Rolling Mill):</span>
                    <span className="font-bold text-emerald-600">₹62,000 – ₹95,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Hydraulic System Technician:</span>
                    <span className="font-bold text-emerald-600">₹65,000 – ₹98,000</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium text-slate-700">Heavy Trailer Driver:</span>
                    <span className="font-bold text-emerald-600">₹68,000 – ₹98,000</span>
                  </div>
                </div>
              </div>

              {/* Category 3: Electrical & European Manufacturing */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <FaBuildingColumns className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900">Electrical &amp; European Industry</h3>
                    <p className="text-xs text-slate-500">Poland, Romania, Croatia, Germany</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Industrial Electrician:</span>
                    <span className="font-bold text-emerald-600">₹60,000 – ₹92,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">CNC Machine Operator:</span>
                    <span className="font-bold text-emerald-600">₹95,000 – ₹1,55,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Instrumentation Technician:</span>
                    <span className="font-bold text-emerald-600">₹68,000 – ₹1,05,000</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium text-slate-700">Warehouse Associate (Europe):</span>
                    <span className="font-bold text-emerald-600">₹90,000 – ₹1,40,000</span>
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
                  Fast Physical &amp; Digital Access
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-slate-900">
                  How Bokaro Technicians Reach WorkWise Visa
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Avoid the hassle of long metropolitan journeys. Our <strong>Patna Regional Branch</strong> at Varma Centre, Boring Road serves as the official recruitment hub for Bokaro and Jharkhand, providing full practical trade tests and biometric compliance assistance.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <FaTrainSubway className="text-emerald-600 text-lg mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Jan Shatabdi Express (12366) - Daily Superfast</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Departs Bokaro Steel City Station at 04:30 PM, reaches Patna Junction at 10:20 PM (Just 5 Hours 50 Minutes). Also available: Daily overnight Palamu Express (13347).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <FaRoute className="text-emerald-600 text-lg mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Direct Highway Route (NH-320 &amp; NH-20)</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Bokaro → Chas → Purulia road or via Ramgarh → Hazaribagh → Nawada → Patna (310 KM, 6 Hours via national highway).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <FaWhatsapp className="text-emerald-600 text-lg mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Online Document Evaluation via WhatsApp</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Send your trade certificates, toolroom/fabrication experience letters, and passport copy to (+91 8130161603) for 100% free eligibility verification before traveling.
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
                      href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20from%20Bokaro%20and%20want%20to%20apply%20for%20industrial%20welder%20overseas%20jobs."
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
                  Send trade certificates, fabrication experience records, and passport for immediate screening against verified overseas corporate demands.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="inline-block rounded-md bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800 mb-2">Stage 02</span>
                <h4 className="font-bold text-slate-900 text-sm">Client Trade Interview</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Attend practical trade tests (6G pipe welding, structural fitting, or crane operation) evaluated directly by foreign client delegates.
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
                  Complete medical fitness screening at an accredited clinic and obtain your Police Clearance Certificate from POPSK Bokaro.
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
                Bokaro Craftsmen Placed Legally Across the Globe
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
                    &ldquo;Bokaro Steel Plant ke vendor unit me 9 saal fabrication ka kaam kiya. Local broker ne UAE bolkar 6 mahine ghumaya. WorkWise Visa Patna branch gaya, inhone direct Saudi Qiwa verified visa dilwaya. Aaj wahan plant me safely kaam kar raha hoon.&rdquo;
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h5 className="font-bold text-slate-900 text-sm">Sanjay Kumar Mahto</h5>
                  <p className="text-xs text-slate-500">Sector 4, Bokaro Steel City • Structural Steel Fabricator</p>
                  <p className="text-xs font-semibold text-emerald-600 mt-0.5">Jubail Petrochemical, Saudi Arabia • SAR 3,600/mo (₹82,000)</p>
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
                    &ldquo;Chas me welding shop chalata tha. WorkWise Visa se judne ke baad mera trade test verify hua aur Poland ka Single Work Permit mila. Khana aur rehna company ka hai, har mahine ₹1 Lakh bhej raha hoon.&rdquo;
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h5 className="font-bold text-slate-900 text-sm">Pankaj Pandey</h5>
                  <p className="text-xs text-slate-500">Chas, Bokaro • 6G Pipe Welder</p>
                  <p className="text-xs font-semibold text-emerald-600 mt-0.5">Płock Petrochemical Expansion, Poland • €1,350/mo (₹1,22,000)</p>
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
                    &ldquo;Mining area me 50-tonne crane chalata tha. WorkWise team ne NEOM ke liye direct client selection karwaya. Takamol test aur GAMCA medical sab smooth raha.&rdquo;
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h5 className="font-bold text-slate-900 text-sm">Karan Singh</h5>
                  <p className="text-xs text-slate-500">Bermo / Phusro, Bokaro • Heavy Mobile Crane Operator</p>
                  <p className="text-xs font-semibold text-emerald-600 mt-0.5">NEOM Sindalah Island, Saudi Arabia • SAR 4,200/mo (₹95,000)</p>
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
                Overseas Placement FAQs for Bokaro Applicants
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="font-bold text-slate-900 text-base">
                  Bokaro ke candidates WorkWise Visa service kaise access karein?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Bokaro Steel City aur Chas ke candidate pehle WhatsApp (+91 8130161603) par resume bhejkar pre-verification karwayein. Phir Bokaro Steel City Railway Station se direct Jan Shatabdi Express (12366) lekar sirf 5.5 ghante me Patna office visit kar sakte hain.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="font-bold text-slate-900 text-base">
                  Bokaro ke heavy fabrication welders ke liye kaunse countries me best salaries hain?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Bokaro ke 6G welders aur structural fabricators ke liye Poland, Romania aur Croatia me monthly salary ₹1.10 Lakh se ₹1.50 Lakh tak hoti hai, jabki Saudi Arabia aur UAE me ₹75,000 se ₹1,05,000 tak free food aur accommodation ke sath milti hai.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="font-bold text-slate-900 text-base">
                  Bokaro me Passport aur PCC kahan se apply karein?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Post Office Passport Seva Kendra (POPSK) Bokaro (Sector 1 Head Post Office) se online booking ke zariye Police Clearance Certificate (PCC) banwaya ja sakta hai.
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
                Apply for Verified Overseas Jobs from Bokaro
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base">
                Apna profile submit karein. Hamari overseas recruitment team 2 working hours ke andar aapse connect karegi.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10 shadow-lg">
              <ConsultationForm defaultCity="Bokaro" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
