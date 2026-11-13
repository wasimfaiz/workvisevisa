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
// SEO METADATA — STRICT CHARACTER LIMITS & TARGETED RANCHI KEYWORDS
// ============================================================================
export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Work Visa Consultancy in Ranchi | Overseas Jobs & Recruitment",
  description:
    "Top work visa consultancy in Ranchi, Jharkhand. Verified Gulf & Europe jobs, Takamol trade testing, GAMCA medical & eMigrate POE guidance for skilled technicians.",
  keywords: [
    "work visa consultancy in ranchi",
    "visa consultancy in ranchi",
    "gulf job consultancy in ranchi jharkhand",
    "overseas placement agency ranchi",
    "saudi work visa ranchi",
    "dubai jobs ranchi",
    "europe work permit consultancy jharkhand",
    "ranchi passport office visa agent",
    "hec ranchi welder jobs abroad",
    "iti diploma overseas recruitment ranchi",
    "workwise visa ranchi",
    "poland work visa agency ranchi",
    "croatia work permit jharkhand",
  ],
  alternates: {
    canonical: "https://www.workwisevisa.com/locations/ranchi",
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
    title: "Work Visa Consultancy in Ranchi | Overseas Jobs & Recruitment",
    description:
      "Premier overseas job consultancy in Ranchi, Jharkhand. Authentic employer contracts for Saudi Arabia, UAE, Qatar & Europe with complete legal protection.",
    url: "https://www.workwisevisa.com/locations/ranchi",
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.workwisevisa.com/images/workwise_logo.png",
        width: 1200,
        height: 630,
        alt: "WorkWise Visa Consultancy for Ranchi & Jharkhand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Visa Consultancy in Ranchi | Overseas Jobs & Recruitment",
    description:
      "Verified overseas job placement and work visa services in Ranchi, Jharkhand. 100% legal eMigrate, POE clearance, and direct employer contracts.",
    images: ["https://www.workwisevisa.com/images/workwise_logo.png"],
  },
};

export default function RanchiLocationPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EmploymentAgency",
        "@id": "https://www.workwisevisa.com/locations/ranchi#agency",
        name: "WorkWise Visa - Ranchi & Jharkhand Regional Candidate Desk",
        url: "https://www.workwisevisa.com/locations/ranchi",
        logo: "https://www.workwisevisa.com/images/workwise_logo.png",
        image: "https://www.workwisevisa.com/images/workwise_logo.png",
        description:
          "Authoritative overseas employment consultancy for Ranchi and Jharkhand candidates. Specializing in verified GCC and European work visas, eMigrate POE compliance, GAMCA medical advisory, and Takamol trade testing.",
        telephone: "+918130161603",
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ranchi",
          addressRegion: "Jharkhand",
          addressCountry: "IN",
          postalCode: "834001",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 23.3441,
          longitude: 85.3096,
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Ranchi" },
          { "@type": "AdministrativeArea", name: "Ratu Road" },
          { "@type": "AdministrativeArea", name: "Doranda" },
          { "@type": "AdministrativeArea", name: "Lalpur" },
          { "@type": "AdministrativeArea", name: "Namkum" },
          { "@type": "AdministrativeArea", name: "Hatia" },
          { "@type": "AdministrativeArea", name: "Dhurwa" },
          { "@type": "AdministrativeArea", name: "Kanke" },
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
                name: "HEMM & Mining Equipment Operator Placements",
                description:
                  "High-salary recruitment for hydraulic excavator, tower crane, and heavy dumper operators in GCC infrastructure projects.",
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.workwisevisa.com/locations/ranchi#breadcrumb",
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
            name: "Ranchi",
            item: "https://www.workwisevisa.com/locations/ranchi",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.workwisevisa.com/locations/ranchi#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How can skilled workers from Ranchi apply for Gulf & Europe jobs with WorkWise Visa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Candidates from Ranchi can submit their passport, ITI/diploma, and experience certificates via WhatsApp (+91 8130161603) for an instant, free profile assessment. For trade testing and face-to-face selection, Ranchi candidates can travel to our Patna Regional Branch (Varma Centre, Boring Road) in just 5.5 hours via the Ranchi-Patna Vande Bharat Express (22350).",
            },
          },
          {
            "@type": "Question",
            name: "Where do Ranchi applicants get their GAMCA / Wafid medical tests done?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "GCC medical appointments must be generated on the official portal wafid.com. Candidates from Ranchi are typically allocated to authorized diagnostic clinics in Kolkata or Patna. Both cities are directly connected to Ranchi via superfast daily trains.",
            },
          },
          {
            "@type": "Question",
            name: "How can Ranchi candidates obtain a Police Clearance Certificate (PCC)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ranchi candidates book an online appointment at the Regional Passport Office (RPO) Ranchi, located at Galaxia Mall, Ratu Road. After local police verification, the PCC is issued and further apostilled by the Ministry of External Affairs (MEA) for overseas work visa stamping.",
            },
          },
          {
            "@type": "Question",
            name: "Are there vacancies for ITI diploma holders and welders from Ranchi in Europe?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. European manufacturing and shipyard companies in Poland, Romania, Croatia, and Malta actively recruit 6G pipe welders, CNC operators, industrial electricians, and mechanical fitters from Ranchi, offering monthly in-hand salaries ranging from ₹95,000 to ₹1,65,000 with company-provided accommodation and medical cover.",
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
              <span className="font-semibold text-emerald-400">Ranchi</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Semantic Headline & Value Proposition */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  <FaShieldHalved className="text-emerald-400" />
                  Government-Compliant Overseas Career Pathway for Ranchi &amp; Jharkhand
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                  Work Visa &amp; Overseas Employment Consultancy for{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    Ranchi
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                  As the capital and premier industrial-educational nerve center of Jharkhand, Ranchi produces a formidable workforce of heavy engineering technicians (HEC Dhurwa), ITI diploma holders, precision 6G welders, hydraulic excavator operators, electrical wiremen, and civil construction supervisors. WorkWise Visa connects Ranchi&apos;s skilled manpower with authentic, verified employment across Saudi Arabia (NEOM &amp; Aramco), the UAE, Qatar, Kuwait, Oman, and European national markets (Poland, Romania, Croatia, and Malta). Experience complete institutional transparency: verified direct employer visas, pre-negotiated salaries, Takamol trade skill testing, GAMCA medical guidance, and 100% legal eMigrate Emigration Clearance (POE).
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
                        Ranchi Overseas Career Desk
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
                        Saudi Arabia (NEOM / Red Sea), UAE (Dubai &amp; Abu Dhabi), Qatar, Kuwait, Poland, Romania &amp; Croatia.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Monthly Salary Bands:</strong>{" "}
                        ₹45,000 to ₹1,75,000/mo with free company accommodation, daily transport, and comprehensive medical cover.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Processing Turnaround:</strong>{" "}
                        25 to 45 Days for GCC employment visas; 80 to 110 Days for European Single Work Permits (Type-D).
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
                      Book Free Profile Evaluation in Ranchi
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
        {/* SECTION 2: EXECUTIVE SUMMARY & RANCHI'S MIGRATION REALITY            */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                In-Depth Regional Analysis &amp; Workforce Demographics
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Why Ranchi is Jharkhand&apos;s Fastest-Growing Talent Corridor for Overseas Careers
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 text-base leading-relaxed text-slate-600 lg:grid-cols-2">
              <div className="space-y-5">
                <p>
                  Ranchi serves as the nerve center for administrative governance, higher technical education, and heavy industrial engineering in Jharkhand. Anchored by premier institutions such as the Heavy Engineering Corporation (HEC Dhurwa), Government Polytechnic Ranchi, BIT Mesra, and numerous state industrial training institutes (ITIs), the city trains thousands of skilled craftsmen every year. Localities across Ranchi—including Ratu Road, Doranda, Lalpur, Namkum, Hatia, Dhurwa, Kanke, and Tupudana Industrial Area—house seasoned technicians who possess valuable hands-on experience in metal fabrication, machine overhaul, high-voltage electrical grids, and commercial fleet management.
                </p>
                <p>
                  Historically, job seekers from Ranchi and nearby districts (Ramgarh, Khunti, Gumla, and Lohardaga) fell prey to unlicensed local sub-agents who charged exorbitant fees for temporary visit visas or false promise letters. WorkWise Visa provides an institutional alternative: direct recruitment tied to pre-approved governmental labor quotas, transparent statutory fees, and verified employment contracts filed directly through the Ministry of External Affairs (MEA) eMigrate framework.
                </p>
              </div>

              <div className="space-y-5">
                <p>
                  With the launch of the superfast Ranchi-Patna Vande Bharat Express (22350), candidates from Ranchi can now reach WorkWise Visa&apos;s flagship Bihar &amp; Jharkhand Regional Branch at Varma Centre, Boring Road, Patna in just 5.5 hours. This rapid connectivity allows workers to attend client selection trade tests, verify corporate documents face-to-face, and return the same day with absolute peace of mind.
                </p>
                <p>
                  Whether you are an ITI-certified electrician aiming for high-salary European manufacturing plants in Poland and Romania, or a heavy equipment operator seeking tax-free GCC Dinar earnings in Kuwait or Saudi Vision 2030 megaprojects, WorkWise Visa guides you through every step: from Takamol Skill Verification (SVP) and Wafid GAMCA medicals to final consular visa stamping.
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
                Top In-Demand Overseas Trades for Ranchi Technicians in 2026
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base">
                Transparent salary benchmarks negotiated directly with verified foreign employers. All positions include free furnished accommodation, site transportation, and health insurance.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Category 1: Heavy Equipment & Mining */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <FaCarSide className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900">Heavy Equipment &amp; Mining</h3>
                    <p className="text-xs text-slate-500">Saudi NEOM, UAE, Kuwait, Oman</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Hydraulic Excavator Operator:</span>
                    <span className="font-bold text-emerald-600">₹72,000 – ₹1,10,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Heavy Trailer Driver (GCC):</span>
                    <span className="font-bold text-emerald-600">₹65,000 – ₹95,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Tower Crane Operator:</span>
                    <span className="font-bold text-emerald-600">₹75,000 – ₹1,15,000</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium text-slate-700">Bulldozer / Grader Operator:</span>
                    <span className="font-bold text-emerald-600">₹68,000 – ₹1,00,000</span>
                  </div>
                </div>
              </div>

              {/* Category 2: Mechanical & 6G Welding */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <FaBriefcase className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900">Mechanical &amp; 6G Welding</h3>
                    <p className="text-xs text-slate-500">Poland, Romania, Saudi Aramco, Kuwait</p>
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
                    <span className="font-medium text-slate-700">Industrial Millwright Fitter:</span>
                    <span className="font-bold text-emerald-600">₹62,000 – ₹92,000</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium text-slate-700">Pipe Fitter / Fabricator:</span>
                    <span className="font-bold text-emerald-600">₹55,000 – ₹82,000</span>
                  </div>
                </div>
              </div>

              {/* Category 3: MEP & European Logistics */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <FaBuildingColumns className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900">MEP &amp; European Industry</h3>
                    <p className="text-xs text-slate-500">Poland, Croatia, Germany, Dubai</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">CNC / VMC Operator:</span>
                    <span className="font-bold text-emerald-600">₹95,000 – ₹1,55,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">Industrial Electrician:</span>
                    <span className="font-bold text-emerald-600">₹58,000 – ₹90,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-700">HVAC Chiller Technician:</span>
                    <span className="font-bold text-emerald-600">₹62,000 – ₹95,000</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium text-slate-700">Warehouse Forklift Operator:</span>
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
                  How Ranchi Candidates Connect with WorkWise Visa
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  You do not need to travel to Delhi or Mumbai for genuine overseas employment opportunities. Our fully-equipped <strong>Patna Regional Branch</strong> at Varma Centre, Boring Road serves as the official recruitment hub for Jharkhand, complete with trade test evaluation facilities and biometric compliance guidance.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <FaTrainSubway className="text-emerald-600 text-lg mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Ranchi - Patna Vande Bharat Express (22350)</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Departs Ranchi Junction at 04:15 PM, arrives Patna Junction at 10:05 PM (5 Hours 50 Minutes). Also available: Jan Shatabdi Express (12366) and daily overnight Pataliputra Express (18622).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <FaRoute className="text-emerald-600 text-lg mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Direct Highway Route (NH-33 &amp; NH-20)</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Ranchi → Ramgarh → Hazaribagh → Barhi → Nawada → Bakhtiyarpur → Patna (Approximately 325 KM, 6.5 Hours via smooth 4-lane highway).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <FaWhatsapp className="text-emerald-600 text-lg mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">100% Online Document Pre-Screening</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Save travel expenses! Send your resume, trade certificates, and passport copy to our WhatsApp helpline (+91 8130161603) for initial client matching before scheduling a visit.
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
                      href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20from%20Ranchi%20and%20want%20to%20apply%20for%20overseas%20jobs."
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
                  Send passport, trade diplomas, and work history for immediate eligibility matching against live overseas corporate demands.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="inline-block rounded-md bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800 mb-2">Stage 02</span>
                <h4 className="font-bold text-slate-900 text-sm">Client Trade Interview</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Participate in live video interviews or attend practical trade skill testing evaluated directly by visiting foreign delegates.
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
                  Complete medical fitness screening at an accredited Wafid clinic and secure your Police Clearance Certificate from RPO Ranchi.
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
                Ranchi Workers Placed Legally Across the Globe
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
                    &ldquo;Ranchi me local dukaano ke agents ne mujhe do baar fake visa offer diya tha. WorkWise Visa Patna branch se connect hua. Inhone direct Saudi Qiwa contract diya aur Takamol test clear karwaya. Aaj NEOM me safely kaam kar raha hoon.&rdquo;
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h5 className="font-bold text-slate-900 text-sm">Vikram Kumar Munda</h5>
                  <p className="text-xs text-slate-500">Ratu Road, Ranchi • Heavy Excavator Operator</p>
                  <p className="text-xs font-semibold text-emerald-600 mt-0.5">NEOM, Saudi Arabia • SAR 3,800/mo (₹86,000)</p>
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
                    &ldquo;HEC Ranchi me fabrication workshop me kaam karta tha. WorkWise Visa ke zariye Poland ka Type-D work permit mila. Housing aur medical free hai, har mahine ghar ₹95,000 bhej raha hoon.&rdquo;
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h5 className="font-bold text-slate-900 text-sm">Ravi Shankar Mahto</h5>
                  <p className="text-xs text-slate-500">HEC Dhurwa, Ranchi • 6G TIG Pipe Welder</p>
                  <p className="text-xs font-semibold text-emerald-600 mt-0.5">Gdańsk Shipyard, Poland • €1,350/mo (₹1,22,000)</p>
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
                    &ldquo;Government ITI Ranchi se diploma ke baad Gulf jana chahta tha. WorkWise Visa ne online video interview organize karwaya aur direct MOHRE visa stamp karwaya bina kisi jhanjhat ke.&rdquo;
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h5 className="font-bold text-slate-900 text-sm">Amit Tirkey</h5>
                  <p className="text-xs text-slate-500">Namkum, Ranchi • Industrial Electrician</p>
                  <p className="text-xs font-semibold text-emerald-600 mt-0.5">Dubai Logistics Park, UAE • AED 3,600/mo (₹82,000)</p>
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
                Overseas Placement FAQs for Ranchi Applicants
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="font-bold text-slate-900 text-base">
                  Ranchi ke candidates WorkWise Visa service kaise avail kar sakte hain?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Ranchi ke candidate ghar baithe WhatsApp (+91 8130161603) par apne documents bhejkar 100% free eligibility audit karwa sakte hain. Final client trade test ya document submission ke liye Ranchi-Patna Vande Bharat Express se sirf 5.5 ghante me hamare Varma Centre, Boring Road Patna office visit kar sakte hain.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="font-bold text-slate-900 text-base">
                  Ranchi me Passport Seva Kendra (PSK) se PCC kaise banwayein?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Regional Passport Office (RPO) Ranchi (Galaxia Mall, Ratu Road) se Police Clearance Certificate (PCC) online passportindia.gov.in portal se book hota hai. WorkWise team appointment slot booking aur MEA Apostille attestation me poori guidance deti hai.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="font-bold text-slate-900 text-base">
                  Ranchi ke workers ke liye GAMCA / Wafid medical center kahan allot hota hai?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Wafid portal (wafid.com) par online slip generate karne par Ranchi ke candidates ko Kolkata ya Patna ke authorized GCC diagnostic centers allot hote hain. Dono shehron ke liye Ranchi se direct trains available hain.
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
                Apply for Verified Overseas Jobs from Ranchi
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base">
                Apna profile submit karein. Hamari overseas recruitment team 2 working hours ke andar aapse connect karegi.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10 shadow-lg">
              <ConsultationForm defaultCity="Ranchi" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
