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
// ============================================================================
export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Work Visa Consultancy in Bokaro | WorkWise Visa Jharkhand",
  description:
    "Premier Gulf & Europe work visa consultancy in Bokaro. SAIL steel plant fitters, certified riggers, mobile crane operators, GAMCA & eMigrate POE clearance.",
  keywords: [
    "work visa consultancy in bokaro",
    "gulf job consultancy in bokaro",
    "visa consultancy in bokaro steel city",
    "sail bokaro fitter gulf jobs",
    "mobile crane operator jobs saudi arabia bokaro",
    "certified rigger job qatar uae bokaro",
    "dubai job agency bokaro chas",
    "overseas recruitment agency bokaro",
    "takamol test guidance bokaro",
    "gamca medical bokaro jharkhand",
    "workwise visa bokaro",
    "best visa consultant bokaro",
    "ecr passport visa clearance bokaro",
    "poland work permit consultancy bokaro",
    "romania work visa agency bokaro"
],
  alternates: {
    canonical: "https://www.workwisevisa.com/locations/bokaro",
  },
  openGraph: {
    title: "Work Visa Consultancy in Bokaro | WorkWise Visa Jharkhand",
    description:
      "Premier overseas job placement & work visa assistance for candidates in Bokaro, Jharkhand. 100% verified employer contracts for Saudi Arabia, UAE, Qatar, and Europe.",
    url: "https://www.workwisevisa.com/locations/bokaro",
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/workwise_logo.png",
        width: 1200,
        height: 630,
        alt: "WorkWise Visa Overseas Career Guidance for Bokaro Candidates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Visa Consultancy in Bokaro | WorkWise Visa Jharkhand",
    description:
      "Trusted Gulf & Europe work visa consultancy in Bokaro. Verified company demands, Takamol trade tests, GAMCA medical & direct eMigrate POE clearance.",
    images: ["/images/workwise_logo.png"],
  },
};

// ============================================================================
// RICH STRUCTURED DATA (Schema.org) FOR LOCAL BUSINESS + COMPREHENSIVE FAQS
// ============================================================================
export default function BokaroLocationPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EmploymentAgency",
        "@id": "https://www.workwisevisa.com/locations/bokaro#agency",
        name: "WorkWise Visa - Bokaro Candidate Guidance Desk",
        url: "https://www.workwisevisa.com/locations/bokaro",
        logo: "https://www.workwisevisa.com/images/workwise_logo.png",
        image: "https://www.workwisevisa.com/images/workwise_logo.png",
        description:
          "Government-approved overseas recruitment consultancy for Bokaro candidates. Specializing in verified employment visas for Saudi Arabia, UAE, Qatar, Poland, Romania, and Germany with eMigrate POE clearance.",
        telephone: "+91 8130161603",
        email: "support@workwisevisa.com",
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: "City Centre Sector 4 & Chas Municipal Corridor, Bokaro Steel City, Jharkhand 827001",
          addressLocality: "Bokaro",
          addressRegion: "Jharkhand",
          postalCode: "827001",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 23.6693,
          longitude: 86.1511,
        },
        areaServed: [
          { "@type": "City", name: "Bokaro" },
          { "@type": "AdministrativeArea", name: "Jharkhand" },
          { "@type": "Country", name: "India" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Overseas Work Visa & Recruitment Services for Bokaro",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Saudi Arabia Work Visa & Takamol SVP Assistance",
                description:
                  "Comprehensive processing for Saudi Arabia corporate work visas, electronic Qiwa contracts, Wafid GAMCA medical, and Takamol trade test certification.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "UAE & Dubai Employment Visa Processing",
                description:
                  "MOHRE registered job placements, quota approvals, electronic entry permits, and Emirates ID biometric documentation for skilled professionals from Bokaro.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Qatar Industrial & Infrastructure Work Visas",
                description:
                  "Ministry of Labour approved work permit processing with biometric enrollments at Qatar Visa Centers (QVC) for oil & gas, construction, and engineering trades.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "European Work Permits (Poland, Romania, Croatia)",
                description:
                  "Government-approved European single work permits, provincial labor market clearance (Zezwolenie / Aviz de Munca), and VFS appointment booking.",
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.workwisevisa.com/locations/bokaro#breadcrumbs",
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
            name: "How can candidates from Bokaro verify if a Gulf or Europe work visa is genuine?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Candidates from Bokaro must check three official parameters: 1) Verify that the recruiting agency possesses a valid MEA license on the official eMigrate portal (emigrate.gov.in). 2) Confirm that the foreign employment visa is digitally indexed on destination government portals—such as Saudi Qiwa/Muqeem, UAE MoHRE/ICP, or Qatar MOI—using your passport number. 3) Ensure that you hold a legally stamped bilingual employment contract under Pravasi Bharatiya Bima Yojana (PBBY) insurance before paying any fees or handing over your original passport.",
            },
          },
          {
            "@type": "Question",
            name: "Where do candidates from Bokaro take the mandatory GAMCA / Wafid medical examination?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Medical slips must be generated online exclusively through wafid.com for a fee of $10 USD. The automated central GCC algorithm randomly allocates an accredited medical center in Patna, Kolkata, or New Delhi. WorkWise Visa provides confidential preliminary health assessments in Bokaro (covering chest digital X-ray scar detection and serology blood screens) prior to official Wafid booking to avoid irreversible UNFIT statuses in the GCC electronic database.",
            },
          },
          {
            "@type": "Question",
            name: "What is the Takamol Skill Verification Program (SVP) requirement for Bokaro technicians?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Under Saudi Arabia Ministry of Human Resources regulations, 23 professional trades (including electricians, welders, HVAC technicians, plumbers, and mechanics) must clear the Takamol SVP test. Candidates from Bokaro complete a 30-minute computer theoretical exam and a 2-hour practical workshop evaluation at an accredited trade test facility before visa stamping.",
            },
          },
          {
            "@type": "Question",
            name: "How does WorkWise Visa support ECR passport holders from Bokaro under the Emigration Act 1983?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If your passport is stamped \"Emigration Check Required\" (non-matriculate), Section 10 of the Indian Emigration Act 1983 mandates POE clearance for 18 notified countries. WorkWise Visa executes 100% digital eMigrate clearance through the Protector of Emigrants (POE) office, linking the foreign employer's approved demand letter, employment contract, and mandatory ₹10 Lakh PBBY insurance directly into your passport system.",
            },
          },
          {
            "@type": "Question",
            name: "What are the average overseas monthly earnings for Bokaro industrial technicians?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Certified industrial technicians, heavy machinery operators, and fabricators from Bokaro earn between ₹45,000 and ₹95,000 per month in GCC destinations (Saudi Arabia, UAE, Qatar) and between ₹1,05,000 and ₹1,85,000 per month in European nations (Poland, Romania, Germany). All contracts include employer-provided bachelor accommodation, site transport, health insurance, and paid annual leave.",
            },
          },
          {
            "@type": "Question",
            name: "How do candidates from Bokaro travel to the WorkWise Visa regional branch?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Candidates can reach our Patna regional branch via the Bokaro - Patna Jan Shatabdi Express (Train 12366) in 5 hours 50 minutes, or alternatively via Pataliputra Express and Hatia - Patna Express via Bokaro Steel City. For European VFS biometric appointments and Qatar Visa Center biometrics, Bokaro Steel City Railway Station (BKSC) has direct daily superfast services to New Delhi such as the Purushottam Express (12801) and Jharkhand Sampark Kranti Express, reaching the capital in 16 to 18 hours for European VFS biometrics and embassy interviews.",
            },
          },
          {
            "@type": "Question",
            name: "What documents are required to apply for overseas employment from Bokaro?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Candidates require: 1) Original passport with minimum 8 months validity. 2) 8 white-background passport-size photographs. 3) Technical qualification certificates (ITI, Polytechnic Diploma, or trade test card). 4) Indian or Gulf work experience certificates. 5) Police Clearance Certificate (PCC) issued by Post Office Passport Seva Kendra (POPSK) at Chas Head Post Office, and the Superintendent of Police (SP) Office Bokaro for expedited PCC processing.",
            },
          },
          {
            "@type": "Question",
            name: "Can candidates from Bokaro migrate to European countries like Poland, Romania, and Croatia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. WorkWise Visa actively recruits blast furnace and rolling mill mechanical fitting, heavy industrial rigging and scaffolding (CITB/CISRS certified), telescopic and crawler mobile crane operation (50T to 250T), structural steel fabrication for high-altitude pre-engineered buildings, and high-pressure boiler tube welding from Bokaro for factory assembly, precision CNC machining, structural welding, and warehouse logistics across Poland (Zezwolenie Typ A), Romania (Aviz de Munca), and Croatia (Dozvola za boravak i rad). Processing takes approximately 90 to 120 days under official European work permits.",
            },
          },
          {
            "@type": "Question",
            name: "How are family remittances handled safely from the Gulf to Bokaro?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Workers remit their earnings legally through authorized banking channels (such as exchange houses operating under the RBI Rupee Drawing Arrangement) directly into their Non-Resident External (NRE) or Non-Resident Ordinary (NRO) bank accounts at local branches of State Bank of India, Bank of India, Punjab National Bank, or Canara Bank across Bokaro. This avoids illicit Hawala networks and ensures 100% tax-free income repatriation under Indian tax law.",
            },
          },
          {
            "@type": "Question",
            name: "What is the fee structure and payment timeline for work visa processing through WorkWise Visa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "WorkWise Visa adheres strictly to Ministry of External Affairs recruitment guidelines. We do not demand arbitrary cash advances. Service charges are transparently scheduled across document registration, verified employer offer letter issuance, medical and trade test clearance, and final visa stamping with POE clearance.",
            },
          },
          {
            "@type": "Question",
            name: "What is the validity period of a Gulf work visa and how is the Iqama or Resident ID renewed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Standard employment visas in Saudi Arabia, UAE, and Qatar are issued for an initial duration of 2 years, renewable upon mutual consent between employee and employer. Under local labor laws, the sponsoring corporate company is legally responsible for bearing all Iqama / Emirates ID / QID residency renewal fees. Workers never have to pay out-of-pocket for residency cards.",
            },
          },
          {
            "@type": "Question",
            name: "What happens if a candidate from Bokaro fails the GAMCA medical examination?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If declared UNFIT due to temporary or treatable factors (such as mild hypertension, elevated fasting glucose, or minor ear infections), candidates can undergo clinical management and retake the test after the mandatory waiting period. However, permanent disqualifiers like active Hepatitis B/C or old tuberculosis scars trigger a GCC-wide entry ban for 6 to 12 months. This is why our confidential pre-medical screening in Bokaro is strongly advised.",
            },
          },
          {
            "@type": "Question",
            name: "Are technical trade tests conducted in Bokaro or at specialized centers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Initial profile screening, mechanical blueprint reading, and resume evaluation are performed locally or digitally. For mandatory practical skill certifications (such as Takamol SVP for Saudi Arabia or client trade test interviews for large EPC contractors), candidates attend accredited technical workshops in Patna, Jamshedpur, or New Delhi where specialized test rigs and welding booths are certified by international inspection agencies.",
            },
          },
          {
            "@type": "Question",
            name: "Can candidates apply if they have a gap in their work experience?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. As long as you possess genuine technical capabilities, can demonstrate your craft on a test bench, and provide valid educational credentials (ITI/Diploma), minor employment gaps do not disqualify you. Our placement coordinators help present your career history accurately to overseas human resources departments.",
            },
          },
          {
            "@type": "Question",
            name: "What emergency legal assistance is available for workers from Bokaro while working abroad?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Workers placed through WorkWise Visa are protected under the MEA MADAD grievances framework and Indian Embassy labor attaches in Riyadh, Dubai, Doha, and European capitals. Additionally, your mandatory Pravasi Bharatiya Bima Yojana (PBBY) policy provides up to ₹45,000 for local legal defense representation and emergency repatriation assistance in the rare event of contractual disputes.",
            },
          }
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
              <span className="font-semibold text-emerald-400">Bokaro</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Semantic Headline & Value Proposition */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  <FaShieldHalved className="text-emerald-400" />
                  Government-Compliant Overseas Career Pathway for Bokaro
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                  Work Visa &amp; Overseas Employment Consultancy for{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    Bokaro
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                  As Heavy Metallurgy & Steel Fabrication Capital, Bokaro supplies specialized industrial manpower across blast furnace and rolling mill mechanical fitting, heavy industrial rigging and scaffolding (CITB/CISRS certified), telescopic and crawler mobile crane operation (50T to 250T), structural steel fabrication for high-altitude pre-engineered buildings, and high-pressure boiler tube welding to prime engineering and infrastructure projects in Saudi Arabia, the UAE, Qatar, Oman, and European national markets. WorkWise Visa provides Bokaro&apos;s skilled technicians and engineers with complete institutional transparency: verified direct employer visas, government-attested minimum wage contracts, Takamol trade skill testing, GAMCA medical advisory, and 100% legal eMigrate Emigration Clearance (POE).
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
                        Saudi Arabia (Vision 2030 / NEOM), UAE (Dubai &amp; Abu Dhabi), Qatar, Oman, Poland, Romania &amp; Germany.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Monthly Salary Bands:</strong>{" "}
                        ₹48,000 to ₹1,85,000/mo with free company accommodation, transportation, and medical coverage.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Processing Turnaround:</strong>{" "}
                        25 to 45 Days for GCC visas; 90 to 120 Days for European Single Work Permits.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Verified POE Emigration:</strong>{" "}
                        100% digital clearance via MEA eMigrate portal under the Emigration Act 1983.
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3">
                    <a
                      href="tel:+918130161603"
                      className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/30 transition"
                    >
                      <FaPhone className="text-sm" /> Speak to Regional Branch Advisor
                    </a>
                    <a
                      href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20from%20Bokaro%20and%20need%20authentic%20work%20visa%20guidance."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 px-5 py-3 text-sm font-bold text-emerald-300 transition"
                    >
                      <FaWhatsapp className="text-base text-emerald-400" /> WhatsApp Document Evaluation
                    </a>
                  </div>

                  <div className="mt-5 border-t border-slate-700/60 pt-4 text-[11px] text-slate-400 leading-normal">
                    <strong>Physical Verification Branch:</strong> WorkWise Visa Regional Desk, Boring Road / Bailey Road Corridor, Patna (Transit from Bokaro: 5 hours 50 minutes via Bokaro - Patna Jan Shatabdi Express (Train 12366)).
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 2: EXECUTIVE SUMMARY & WORKFORCE DEMOGRAPHICS                */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                In-Depth Regional Analysis &amp; Workforce Demographics
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Why Bokaro is a Strategic Sourcing Hub for International Industry
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 text-base leading-relaxed text-slate-600 lg:grid-cols-2">
              <div className="space-y-5">
                <p>
                  Bokaro occupies an indispensable position within the industrial architecture of Eastern India. Encompassing key municipal and industrial blocks—including Bokaro Steel City Sectors 1 through 12, City Centre Sector 4, Chas Municipal Area, Balidih Industrial Area (BIADA), Marafari, Camp 2, Chandrapura, Bermo, Gomia, Phusro, Peterbar, and Jaridih—the region is anchored by world-class technical institutions such as Government Polytechnic Bokaro (Khuntri), Bokaro Institute of Technology, ITI Chas, SAIL Bokaro Training & Development Centre (HRD Centre Sector 4), and BSL Technical Apprentice Training Centers. The local educational ecosystem churns out thousands of disciplined, highly skilled diploma holders, ITI technicians, and engineering graduates each year.
                </p>
                <p>
                  Unlike purely general labor corridors, Bokaro provides specialized industrial competence: blast furnace and rolling mill mechanical fitting, heavy industrial rigging and scaffolding (CITB/CISRS certified), telescopic and crawler mobile crane operation (50T to 250T), structural steel fabrication for high-altitude pre-engineered buildings, and high-pressure boiler tube welding. Technicians trained in this rigorous operational environment readily meet the rigorous international testing benchmarks required by international mega-projects such as Saudi Aramco, NEOM, ADNOC UAE, and European manufacturing consortia.
                </p>
              </div>

              <div className="space-y-5">
                <p>
                  However, skilled professionals in Bokaro have repeatedly suffered at the hands of unlicensed middlemen operating around Chas Old Bus Stand, Checkpost, Bokaro Sector 4 Market, and Marafari Railway Crossing. These predatory middlemen peddle fraudulent &ldquo;Azad Visas&rdquo; or 30-day tourist visit visas under the false guarantee of conversion, charging extortionate fees of ₹1,20,000 to ₹1,80,000. Workers frequently find themselves stranded abroad without residency papers (Iqamas), facing wage theft and deportation.
                </p>
                <p>
                  WorkWise Visa eliminates intermediary deception. Working directly with multinational contractors across Saudi Arabia, the UAE, Qatar, Oman, and Europe (Poland, Romania, Germany), we enforce total compliance with the <strong>Emigration Act, 1983</strong>. Every candidate travels with a verifiable electronic work visa, a bilingual labor contract, mandatory ₹10 Lakh Pravasi Bharatiya Bima Yojana (PBBY) insurance, and institutional trade verification.
                </p>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4">
                  <p className="text-sm font-bold text-emerald-950">
                    Important Compliance Advisory for Bokaro Candidates:
                  </p>
                  <p className="mt-1 text-xs text-emerald-800">
                    Never deposit money or surrender your original passport to unlicensed brokers. Always verify an agency&apos;s Recruiting Agent (RA) license on the official{" "}
                    <a
                      href="https://emigrate.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline hover:text-emerald-950"
                    >
                      MEA eMigrate portal
                    </a>
                    . Real corporate employers never issue visas on WhatsApp screenshots or handwritten letterheads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 3: THE EMIGRATION ACT 1983 & ECR VS ECNR CLEARANCE           */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Statutory Compliance &amp; Legal Framework
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                ECR vs. ECNR Passport Regulations for Bokaro Migrants
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Understanding your legal status under the Ministry of External Affairs (MEA) is mandatory to guarantee safe passage through international immigration checkpoints.
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
                    If the observation page of your passport notes <strong className="text-slate-800">&ldquo;Emigration Check Required&rdquo;</strong>, Section 10 of the Emigration Act 1983 mandates that you must obtain an official Emigration Clearance (POE) digital clearance prior to boarding flights to 18 notified nations.
                  </p>
                  <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                      18 Notified ECR Nations:
                    </h4>
                    <p className="mt-1 text-xs text-slate-600">
                      Saudi Arabia, United Arab Emirates, Qatar, Oman, Kuwait, Bahrain, Malaysia, Jordan, Libya, Lebanon, Iraq, Yemen, Sudan, Afghanistan, Indonesia, Syria, Thailand, and South Sudan.
                    </p>
                  </div>
                  <h4 className="font-bold text-slate-800">
                    Mandatory POE Emigration Clearance Protocol:
                  </h4>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>The overseas employer uploads approved demand letters and attested contracts directly on the eMigrate portal.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>WorkWise Visa registers your trade credentials, valid visa ID, and verified medical fitness report.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>Automated integration of the mandatory Pravasi Bharatiya Bima Yojana (PBBY) insurance policy (₹10 Lakh coverage).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCircleCheck className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>The POE office approves and digitally stamps the electronic clearance, ensuring frictionless immigration passage at Indian airports.</span>
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
                    Passports without the ECR notation are classified as ECNR. ECNR holders are legally exempt from obtaining POE clearance before boarding flights to the Gulf, Europe, or Southeast Asia.
                  </p>
                  <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                      Qualifications for ECNR Status:
                    </h4>
                    <ul className="mt-2 space-y-1 text-xs text-slate-600 list-disc list-inside">
                      <li>All persons holding a Matriculation certificate (10th grade) or higher degrees.</li>
                      <li>Holders of 2-year or 3-year diplomas from recognized state polytechnic colleges such as Government Polytechnic Bokaro (Khuntri), Bokaro Institute of Technology, ITI Chas, SAIL Bokaro Training & Development Centre (HRD Centre Sector 4), and BSL Technical Apprentice Training Centers.</li>
                      <li>Registered nurses and technical supervisors.</li>
                      <li>Active income tax payers and individuals who have worked abroad for over 3 years.</li>
                    </ul>
                  </div>
                  <h4 className="font-bold text-slate-800">
                    WorkWise Safeguards for ECNR Candidates:
                  </h4>
                  <p className="text-xs">
                    Fraudulent agents frequently misuse ECNR status to fly candidates on 30-day visit visas, promising that employers will &ldquo;convert them upon arrival.&rdquo; WorkWise Visa ensures candidates travel exclusively on genuine, pre-approved employment entry permits with direct bank payroll (WPS) guarantees.
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
                Under MEA regulations, this compulsory insurance costs under ₹375 for 2 years or ₹525 for 3 years, offering complete financial protection for families back home in Bokaro:
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
                      <td className="px-4 py-3 font-semibold text-slate-800">Accidental Death / Permanent Disability</td>
                      <td className="px-4 py-3 font-bold text-emerald-600">₹10,00,000 (10 Lakhs)</td>
                      <td className="px-4 py-3">Disbursed directly to registered nominees in Bokaro in the event of fatal worksite accidents or permanent loss of limbs/vision.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-800">Emergency Hospitalization Abroad</td>
                      <td className="px-4 py-3 font-bold text-slate-800">Up to ₹1,00,000</td>
                      <td className="px-4 py-3">Covers emergency medical treatment, surgeries, and ICU admissions in overseas medical centers.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-800">Medical Repatriation to India</td>
                      <td className="px-4 py-3 font-bold text-slate-800">Economy Airfare + Medical Escort</td>
                      <td className="px-4 py-3">Covers air travel back to India if the worker is declared medically unfit due to work injury or serious illness.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-800">Legal Defense Reimbursement</td>
                      <td className="px-4 py-3 font-bold text-slate-800">Up to ₹45,000</td>
                      <td className="px-4 py-3">Reimburses advocate and legal consultation expenses in the destination country if the employer breaches the contract.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-800">Family Compassionate Visit</td>
                      <td className="px-4 py-3 font-bold text-slate-800">Roundtrip Flight for 1 Relative</td>
                      <td className="px-4 py-3">Funds return air travel for an immediate family member from Bokaro if the worker is hospitalized abroad for over 30 days.</td>
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
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Comprehensive Visa &amp; Work Regulations by Destination
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Detailed breakdowns of official labor laws, digital portals, salary protection mechanisms, and mandatory trade qualifications for Bokaro candidates across Gulf and European corridors.
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
                      Under Saudi Ministry of Human Resources rules, paper contracts hold zero legal validity. Every worker receives an authenticated digital contract on the{" "}
                      <a
                        href="https://qiwa.sa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 underline font-semibold"
                      >
                        Qiwa platform
                      </a>
                      . The contract specifies basic wage in Saudi Riyals (SAR), standard working hours (max 8 hours + overtime per Article 98), paid vacation entitlements, and medical insurance grade.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaAward className="text-emerald-600" />
                      Takamol Skill Verification (SVP)
                    </h4>
                    <p className="text-xs leading-relaxed">
                      For 23 technical occupations (electricians, pipe fitters, welders, HVAC technicians, and automotive mechanics), Takamol SVP certification is compulsory. Candidates from Bokaro undergo a 30-minute computer theory test and a 2-hour practical bench assessment before the Saudi Consulate stamps their work visa.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaMoneyBillTrendUp className="text-emerald-600" />
                      Wage Protection System (WPS)
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Upon arrival in Saudi Arabia and issuance of the resident ID (Iqama), employers must provide a digital payroll card (e.g., Al Rajhi, SNB, or Mada). Monthly payments are tracked in real-time by the Saudi Central Bank (SAMA). Firms delaying wages face immediate portal suspension and labor ministry fines.
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
                      Issued by the UAE Ministry of Human Resources and Emiratisation (
                      <a
                        href="https://www.mohre.gov.ae"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 underline font-semibold"
                      >
                        MoHRE
                      </a>
                      ). Before flying from India, the worker reviews and signs this exact contract, detailing basic wage, accommodation allowance, medical coverage, and end-of-service gratuity.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaPassport className="text-teal-600" />
                      Entry Permit (Pink Paper) vs. Tourist Visa
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Legal candidates travel exclusively on an electronic employment entry permit (Pink Paper) issued by the Federal Authority for Identity and Citizenship (ICP) or GDRFA Dubai. Tourist or visit visas are strictly prohibited for work, as conversions carry high penalty risks.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaIdCard className="text-teal-600" />
                      Emirates ID Biometrics &amp; Medical Fitness
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Within 30 days of arrival in the UAE, the candidate completes a local blood test and chest X-ray at a preventive medicine center, undergoes fingerprint scanning, and receives a 2-year resident Emirates ID card with full public hospital access.
                    </p>
                  </div>
                </div>
              </div>

              {/* Destination 3: State of Qatar */}
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                      Destination Focus #3
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      State of Qatar Work Residence Permits
                    </h3>
                  </div>
                  <Link
                    href="/countries/qatar"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-800 hover:underline"
                  >
                    View Qatar Work Visa Guide <FaArrowRight />
                  </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3 text-sm text-slate-600">
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaSuitcaseMedical className="text-blue-600" />
                      Qatar Visa Center (QVC) Single-Window
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Qatar has revolutionized overseas hiring through biometrics and medical examinations completed inside India before flight departure. Candidates complete fingerprinting, iris scans, and clinical testing in New Delhi or Kolkata, signing their Ministry of Labour electronic contract before boarding.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaIdCard className="text-blue-600" />
                      Electronic QID Residence &amp; Work Card
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Upon arrival at Hamad International Airport, the candidate&apos;s physical Qatar ID (QID) is delivered within 10 to 14 days. The QID authorizes domestic bank account opening, driving license conversion, and legal residency protection.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaScaleBalanced className="text-blue-600" />
                      Qatar Labour Law &amp; Worker Rights
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Qatar enforces a non-discriminatory statutory minimum wage (1,000 QAR basic + 500 QAR accommodation + 300 QAR food allowance if not provided in kind). Workers can lodge digital grievances directly via the Ministry of Administrative Development, Labour and Social Affairs (MADLSA).
                    </p>
                  </div>
                </div>
              </div>

              {/* Destination 4: European Union */}
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                      Destination Focus #4
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      European Union Industrial Work Permits (Poland, Romania, Croatia)
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link
                      href="/countries/poland"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-800 hover:underline"
                    >
                      Poland Guide <FaArrowRight />
                    </Link>
                    <span className="text-slate-300">|</span>
                    <Link
                      href="/countries/romania"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-800 hover:underline"
                    >
                      Romania Guide <FaArrowRight />
                    </Link>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3 text-sm text-slate-600">
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaGlobe className="text-amber-600" />
                      Poland Single Work Permit (Zezwolenie Typ A)
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Issued by the Provincial Governor (Voivode) following a Labour Market Test. Authorizes legal employment in automotive stamping, precision machining, and logistics. Workers receive euro salaries (€900 - €1,400 net) with full ZUS state medical coverage and pathways to a Temporary Residence Card (Karta Pobytu).
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaBuildingColumns className="text-amber-600" />
                      Romania Work Authorization (Aviz de Munca)
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Issued by the General Inspectorate for Immigration (IGI) for heavy manufacturing, shipyards, and structural steel assembly. Highly suitable for certified fitters and welders from Bokaro, offering stable compensation (€800 - €1,200 net), company accommodation, and annual contract renewal.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <FaAward className="text-amber-600" />
                      Croatia Work &amp; Stay Permit (Dozvola za boravak i rad)
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Following Croatia&apos;s full accession to Schengen, work permits are processed under the Croatian Employment Service (HZZ) labor test. Ideal for commercial drivers, heavy equipment operators, and industrial artisans seeking euro earnings and free mobility across the Schengen Zone.
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
                GAMCA / Wafid Medical Protocol for Bokaro Candidates
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Before foreign consulates approve employment visas for Saudi Arabia, Qatar, UAE, Kuwait, Oman, or Bahrain, candidates must be certified medically fit by an authorized clinic governed by the Gulf Health Council.
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
                  . The centralized algorithm randomly allocates the clinic. Candidates cannot choose a specific clinic. The standard fee is fixed at $10 USD online + approximately ₹5,500 to ₹6,500 payable directly at the assigned laboratory.
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
                      <strong>Chest Digital X-Ray:</strong> Detects active or healed pulmonary tuberculosis (TB) scars, calcifications, or pleural lesions.
                    </li>
                    <li>
                      <strong>Serology Blood Panel:</strong> Tests for HIV 1/2, HBsAg (Hepatitis B), Anti-HCV (Hepatitis C), and VDRL.
                    </li>
                    <li>
                      <strong>Biochemical Panels:</strong> Fasting blood sugar, Serum Creatinine, Bilirubin, and SGPT/SGOT liver enzymes.
                    </li>
                    <li>
                      <strong>Physical &amp; Vision Exam:</strong> Blood pressure, ECG for candidates over 40, and Ishihara color blindness tests.
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
                  If marked <strong>UNFIT</strong> due to active Hepatitis or pulmonary tuberculosis scarring, the result is locked into the GCC electronic database for 6 to 12 months across all clinics in India. WorkWise Visa provides confidential pre-screening guidance in Bokaro to verify clinical fitness before generating permanent Wafid slips, shielding candidates from medical travel bans.
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
                Trade-Wise Salary Benchmarks for Bokaro Industrial Specialists
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Authentic salary ranges for corporate vacancies in Saudi Arabia, the UAE, Qatar, and Europe. All contracts include free company housing, site transport, and medical health insurance.
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Blast Furnace & Rolling Mill Maintenance Fitter</td>
                    <td className="px-4 py-3 font-bold text-emerald-600">2,200 - 3,200 SAR</td>
                    <td className="px-4 py-3 font-bold text-teal-600">2,400 - 3,400 AED</td>
                    <td className="px-4 py-3 font-bold text-slate-800">2,300 - 3,100 QAR</td>
                    <td className="px-4 py-3 font-bold text-emerald-700">€1,050 - €1,450</td>
                    <td className="px-4 py-3 text-xs text-slate-500">Free Accommodation, Safety Gear & Insurance</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">Heavy Mobile Crane Operator (Tadano/Kato 50T-250T)</td>
                    <td className="px-4 py-3 font-bold text-emerald-600">2,800 - 4,200 SAR</td>
                    <td className="px-4 py-3 font-bold text-teal-600">3,000 - 4,500 AED</td>
                    <td className="px-4 py-3 font-bold text-slate-800">2,900 - 4,000 QAR</td>
                    <td className="px-4 py-3 font-bold text-emerald-700">€1,350 - €1,850</td>
                    <td className="px-4 py-3 text-xs text-slate-500">Free AC Cabin, Transport & Overtime</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">Certified Industrial Rigger & Scaffolder (Level 1-3)</td>
                    <td className="px-4 py-3 font-bold text-emerald-600">1,900 - 2,800 SAR</td>
                    <td className="px-4 py-3 font-bold text-teal-600">2,100 - 3,000 AED</td>
                    <td className="px-4 py-3 font-bold text-slate-800">2,000 - 2,700 QAR</td>
                    <td className="px-4 py-3 font-bold text-emerald-700">€950 - €1,300</td>
                    <td className="px-4 py-3 text-xs text-slate-500">Free Bachelor Camp, Safety PPE & Overtime</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">Structural Steel Fabricator & PEB Erector</td>
                    <td className="px-4 py-3 font-bold text-emerald-600">2,100 - 3,000 SAR</td>
                    <td className="px-4 py-3 font-bold text-teal-600">2,300 - 3,200 AED</td>
                    <td className="px-4 py-3 font-bold text-slate-800">2,200 - 2,900 QAR</td>
                    <td className="px-4 py-3 font-bold text-emerald-700">€1,000 - €1,400</td>
                    <td className="px-4 py-3 text-xs text-slate-500">Free Housing, Transport & Flight Ticket</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">High-Pressure Boiler Tube & Gas Welder</td>
                    <td className="px-4 py-3 font-bold text-emerald-600">2,400 - 3,500 SAR</td>
                    <td className="px-4 py-3 font-bold text-teal-600">2,600 - 3,800 AED</td>
                    <td className="px-4 py-3 font-bold text-slate-800">2,500 - 3,400 QAR</td>
                    <td className="px-4 py-3 font-bold text-emerald-700">€1,150 - €1,600</td>
                    <td className="px-4 py-3 text-xs text-slate-500">Free Accommodation, Health Cover & OT</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">Industrial Hydraulic & Pneumatic Mechanic</td>
                    <td className="px-4 py-3 font-bold text-emerald-600">2,300 - 3,400 SAR</td>
                    <td className="px-4 py-3 font-bold text-teal-600">2,500 - 3,600 AED</td>
                    <td className="px-4 py-3 font-bold text-slate-800">2,400 - 3,300 QAR</td>
                    <td className="px-4 py-3 font-bold text-emerald-700">€1,100 - €1,550</td>
                    <td className="px-4 py-3 text-xs text-slate-500">Free Company Camp, Transport & Insurance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500 space-y-1">
              <p><strong>Note on Overtime &amp; Allowances:</strong> Standard working hours across GCC employers are 8 hours per day, 6 days per week. Work performed beyond 8 hours is compensated at 1.5x basic hourly rates under Saudi Article 98 and UAE MoHRE Article 19.</p>
              <p><strong>Food &amp; Accommodation Provision:</strong> In trades where food is not served in kind, employers provide a statutory food allowance ranging between 300 to 400 SAR/AED/QAR per month.</p>
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
                How Unlicensed Intermediaries Trap Candidates in Bokaro
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300">
                Be aware of common deception methods used by unaccredited middlemen across Jharkhand and learn how WorkWise Visa enforces foolproof legal security.
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
                  Sub-agents frequently place workers with unverified labor subcontractors. Instead of working for a prime contractor, workers are rented out daily with no fixed pay, unhygienic camps, and frequent salary defaults. WorkWise Visa places candidates strictly with direct corporate sponsors.
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
                  Agents send job seekers to Dubai or Doha on 30-day tourist visas, promising conversion upon landing. When visas expire, workers face heavy overstay fines, police detention, and deportation. WorkWise Visa candidates travel strictly on pre-issued employment entry permits.
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
                  Unaccredited village agents confiscate original passports and demand escalating payments of ₹50,000 to ₹1,50,000 before returning documents. Under Section 24 of the Emigration Act 1983, passport confiscation by private agents is a punishable criminal offense. WorkWise Visa operates strictly through formal company agreements.
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
                Essential Worksite Arabic Lexicon for Bokaro Technicians
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Mastering key Arabic terms enhances on-site safety, streamlines trade evaluations, and empowers candidates during initial foreman interactions across Saudi and Gulf project sites.
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
                Safe Remittance &amp; Banking Architecture for Bokaro Families
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Protect your overseas earnings from illicit hawala networks. Follow verified RBI banking guidelines for safe, fast transfers to your family in Bokaro.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <FaBuildingColumns className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  NRE vs. NRO Bank Accounts
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Open a Non-Resident External (NRE) account with SBI, Bank of India, or PNB across Bokaro. Income deposited from abroad is 100% tax-free in India and freely repatriable. Keep an NRO account only for local Indian rental or dividend income.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                  <FaMoneyBillTrendUp className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  RBI Approved Remittance
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Always use exchange houses operating under the RBI Rupee Drawing Arrangement (RDA) or Money Transfer Service Scheme (MTSS). Never use unauthorized Hawala intermediaries, which can freeze family bank accounts under FEMA.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <FaScaleBalanced className="text-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Zero Income Tax on Gulf Earnings
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Under Section 6 of the Indian Income Tax Act, if you reside outside India for 182 days or more in a financial year, you qualify for Non-Resident Indian (NRI) status. Your foreign salary is 100% exempt from Indian income taxation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 10: TRANSIT & PROCESSING ROUTING                             */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Smooth Connectivity
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Transit Logistics from Bokaro to WorkWise Regional Desks
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Step-by-step connectivity from Bokaro to our regional candidate desk in Patna, and onwards to New Delhi embassies and international departure hubs.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FaTrainSubway className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      To Patna Regional Branch
                    </h3>
                    <p className="text-xs text-slate-500">
                      For physical document handover, Takamol guidance, and contract signing
                    </p>
                  </div>
                </div>
                <div className="mt-5 space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong>Direct Rail Express:</strong> The <strong>Bokaro - Patna Jan Shatabdi Express (Train 12366)</strong> provides fast transit in just <strong>5 hours 50 minutes</strong> directly to Patna Junction.
                  </p>
                  <p>
                    <strong>Alternative Express Services:</strong> Pataliputra Express and Hatia - Patna Express via Bokaro Steel City offer daily convenient connections for candidates travelling for original trade test screenings and embassy paperwork.
                  </p>
                  <p>
                    <strong>Patna Branch Location:</strong> Located strategically on the Boring Road / Bailey Road corridor, within 15 minutes of Patna Junction.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                    <FaPlaneDeparture className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      To New Delhi VFS &amp; Embassies
                    </h3>
                    <p className="text-xs text-slate-500">
                      For European VFS biometrics &amp; Qatar Visa Center (QVC) enrollments
                    </p>
                  </div>
                </div>
                <div className="mt-5 space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    Bokaro Steel City Railway Station (BKSC) has direct daily superfast services to New Delhi such as the Purushottam Express (12801) and Jharkhand Sampark Kranti Express, reaching the capital in 16 to 18 hours for European VFS biometrics and embassy interviews.
                  </p>
                  <p>
                    <strong>WorkWise Transit Escort:</strong> Our Delhi NCR liaison team coordinates VFS Shivaji Stadium and Qatar Visa Center appointments, ensuring zero paperwork delays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 11: FULL CONSULTATION BOOKING FORM (HOMEPAGE 2-COL STYLE)   */}
        {/* ==================================================================== */}
        <ConsultationForm />

        {/* ==================================================================== */}
        {/* SECTION 12: EXHAUSTIVE FAQS (DETAILED TECHNICAL QUESTIONS)          */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Frequently Asked Questions
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Everything Bokaro Candidates Need to Know About Overseas Work Visas
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Authoritative answers to common questions regarding government approvals, medical screenings, passport rules, salary protection, and avoiding fraudulent agents.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  1. How can candidates from Bokaro verify if a Gulf or Europe work visa is genuine?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Candidates from Bokaro must check three official parameters: 1) Verify that the recruiting agency possesses a valid MEA license on the official eMigrate portal (emigrate.gov.in). 2) Confirm that the foreign employment visa is digitally indexed on destination government portals—such as Saudi Qiwa/Muqeem, UAE MoHRE/ICP, or Qatar MOI—using your passport number. 3) Ensure that you hold a legally stamped bilingual employment contract under Pravasi Bharatiya Bima Yojana (PBBY) insurance before paying any fees or handing over your original passport.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  2. Where do candidates from Bokaro take the mandatory GAMCA / Wafid medical examination?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Medical slips must be generated online exclusively through wafid.com for a fee of $10 USD. The automated central GCC algorithm randomly allocates an accredited medical center in Patna, Kolkata, or New Delhi. WorkWise Visa provides confidential preliminary health assessments in Bokaro (covering chest digital X-ray scar detection and serology blood screens) prior to official Wafid booking to avoid irreversible UNFIT statuses in the GCC electronic database.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  3. What is the Takamol Skill Verification Program (SVP) requirement for Bokaro technicians?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Under Saudi Arabia Ministry of Human Resources regulations, 23 professional trades (including electricians, welders, HVAC technicians, plumbers, and mechanics) must clear the Takamol SVP test. Candidates from Bokaro complete a 30-minute computer theoretical exam and a 2-hour practical workshop evaluation at an accredited trade test facility before visa stamping.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  4. How does WorkWise Visa support ECR passport holders from Bokaro under the Emigration Act 1983?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  If your passport is stamped "Emigration Check Required" (non-matriculate), Section 10 of the Indian Emigration Act 1983 mandates POE clearance for 18 notified countries. WorkWise Visa executes 100% digital eMigrate clearance through the Protector of Emigrants (POE) office, linking the foreign employer's approved demand letter, employment contract, and mandatory ₹10 Lakh PBBY insurance directly into your passport system.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  5. What are the average overseas monthly earnings for Bokaro industrial technicians?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Certified industrial technicians, heavy machinery operators, and fabricators from Bokaro earn between ₹45,000 and ₹95,000 per month in GCC destinations (Saudi Arabia, UAE, Qatar) and between ₹1,05,000 and ₹1,85,000 per month in European nations (Poland, Romania, Germany). All contracts include employer-provided bachelor accommodation, site transport, health insurance, and paid annual leave.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  6. How do candidates from Bokaro travel to the WorkWise Visa regional branch?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Candidates can reach our Patna regional branch via the Bokaro - Patna Jan Shatabdi Express (Train 12366) in 5 hours 50 minutes, or alternatively via Pataliputra Express and Hatia - Patna Express via Bokaro Steel City. For European VFS biometric appointments and Qatar Visa Center biometrics, Bokaro Steel City Railway Station (BKSC) has direct daily superfast services to New Delhi such as the Purushottam Express (12801) and Jharkhand Sampark Kranti Express, reaching the capital in 16 to 18 hours for European VFS biometrics and embassy interviews.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  7. What documents are required to apply for overseas employment from Bokaro?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Candidates require: 1) Original passport with minimum 8 months validity. 2) 8 white-background passport-size photographs. 3) Technical qualification certificates (ITI, Polytechnic Diploma, or trade test card). 4) Indian or Gulf work experience certificates. 5) Police Clearance Certificate (PCC) issued by Post Office Passport Seva Kendra (POPSK) at Chas Head Post Office, and the Superintendent of Police (SP) Office Bokaro for expedited PCC processing.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  8. Can candidates from Bokaro migrate to European countries like Poland, Romania, and Croatia?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Yes. WorkWise Visa actively recruits blast furnace and rolling mill mechanical fitting, heavy industrial rigging and scaffolding (CITB/CISRS certified), telescopic and crawler mobile crane operation (50T to 250T), structural steel fabrication for high-altitude pre-engineered buildings, and high-pressure boiler tube welding from Bokaro for factory assembly, precision CNC machining, structural welding, and warehouse logistics across Poland (Zezwolenie Typ A), Romania (Aviz de Munca), and Croatia (Dozvola za boravak i rad). Processing takes approximately 90 to 120 days under official European work permits.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  9. How are family remittances handled safely from the Gulf to Bokaro?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Workers remit their earnings legally through authorized banking channels (such as exchange houses operating under the RBI Rupee Drawing Arrangement) directly into their Non-Resident External (NRE) or Non-Resident Ordinary (NRO) bank accounts at local branches of State Bank of India, Bank of India, Punjab National Bank, or Canara Bank across Bokaro. This avoids illicit Hawala networks and ensures 100% tax-free income repatriation under Indian tax law.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  10. What is the fee structure and payment timeline for work visa processing through WorkWise Visa?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  WorkWise Visa adheres strictly to Ministry of External Affairs recruitment guidelines. We do not demand arbitrary cash advances. Service charges are transparently scheduled across document registration, verified employer offer letter issuance, medical and trade test clearance, and final visa stamping with POE clearance.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  11. What is the validity period of a Gulf work visa and how is the Iqama or Resident ID renewed?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Standard employment visas in Saudi Arabia, UAE, and Qatar are issued for an initial duration of 2 years, renewable upon mutual consent between employee and employer. Under local labor laws, the sponsoring corporate company is legally responsible for bearing all Iqama / Emirates ID / QID residency renewal fees. Workers never have to pay out-of-pocket for residency cards.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  12. What happens if a candidate from Bokaro fails the GAMCA medical examination?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  If declared UNFIT due to temporary or treatable factors (such as mild hypertension, elevated fasting glucose, or minor ear infections), candidates can undergo clinical management and retake the test after the mandatory waiting period. However, permanent disqualifiers like active Hepatitis B/C or old tuberculosis scars trigger a GCC-wide entry ban for 6 to 12 months. This is why our confidential pre-medical screening in Bokaro is strongly advised.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  13. Are technical trade tests conducted in Bokaro or at specialized centers?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Initial profile screening, mechanical blueprint reading, and resume evaluation are performed locally or digitally. For mandatory practical skill certifications (such as Takamol SVP for Saudi Arabia or client trade test interviews for large EPC contractors), candidates attend accredited technical workshops in Patna, Jamshedpur, or New Delhi where specialized test rigs and welding booths are certified by international inspection agencies.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  14. Can candidates apply if they have a gap in their work experience?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Yes. As long as you possess genuine technical capabilities, can demonstrate your craft on a test bench, and provide valid educational credentials (ITI/Diploma), minor employment gaps do not disqualify you. Our placement coordinators help present your career history accurately to overseas human resources departments.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base font-bold text-slate-900">
                  15. What emergency legal assistance is available for workers from Bokaro while working abroad?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Workers placed through WorkWise Visa are protected under the MEA MADAD grievances framework and Indian Embassy labor attaches in Riyadh, Dubai, Doha, and European capitals. Additionally, your mandatory Pravasi Bharatiya Bima Yojana (PBBY) policy provides up to ₹45,000 for local legal defense representation and emergency repatriation assistance in the rare event of contractual disputes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 13: RELATED GUIDES & CROSS-CITY DIRECTORY NAVIGATION        */}
        {/* ==================================================================== */}
        <section className="bg-slate-100/70 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                Essential Candidate Reading
              </span>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-display font-extrabold tracking-tight text-slate-900">
                Official Compliance &amp; Verification Resources for Bokaro
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/blogs/takamol-skill-verification-program-saudi-work-visa-guide-2026"
                className="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-emerald-600">Saudi Mandate</span>
                  <h3 className="font-bold text-slate-900 text-sm mt-1 group-hover:text-emerald-700 transition-colors">
                    Takamol Skill Verification Program (SVP) Guide 2026
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    SVP trade test syllabus, theoretical computer test, and practical bench evaluation protocol.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 mt-4">
                  Read Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/blogs/gamca-wafid-medical-examination-rules-gulf-visa-fit-unfit-guide-2026"
                className="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-teal-600">Medical Protocol</span>
                  <h3 className="font-bold text-slate-900 text-sm mt-1 group-hover:text-emerald-700 transition-colors">
                    GAMCA / Wafid Medical Examination Rules &amp; Unfit Appeal
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    Chest X-ray scarring, blood panels, repeat testing bans, and confidential pre-screening guidance.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 mt-4">
                  Read Guide <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/blogs/police-clearance-certificate-pcc-gulf-european-visas-psk-apostille-guide-2026"
                className="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
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

            <Link
              href="/blogs/work-visa-check-online-by-passport-number-2026-saudi-dubai-qatar-kuwait-europe"
              className="mt-6 group rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-teal-50 p-5 sm:p-6 hover:border-emerald-500 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">2026 Fraud-Proof Official Portal Directory</span>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mt-1 group-hover:text-emerald-700 transition-colors">
                  Work Visa Check Online by Passport Number 2026: Saudi MOFA, Dubai ICP/GDRFA, Qatar MOI &amp; Europe
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Verify original vs fake work visas, MOHRE job offers, Wafid medical fitness, and India eMigrate clearance directly on official government websites.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-700 group-hover:bg-emerald-800 px-4 py-2.5 text-xs font-bold text-white shrink-0 transition">
                Verify Visa Online <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

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
                <Link href="/locations/patna" className="hover:text-emerald-700 font-semibold underline">
                  Patna Regional Branch
                </Link>
                <span>•</span>
                <Link href="/locations/ranchi" className="hover:text-emerald-700 font-semibold text-emerald-800">
                  Ranchi Industrial Desk
                </Link>
                <span>•</span>
                <Link href="/locations/dhanbad" className="hover:text-emerald-700 font-semibold text-emerald-800">
                  Dhanbad Mining Desk
                </Link>
                <span>•</span>
                <Link href="/locations/jamshedpur" className="hover:text-emerald-700 font-semibold text-emerald-800">
                  Jamshedpur Precision Desk
                </Link>
                <span>•</span>
                <Link href="/locations/bokaro" className="hover:text-emerald-700 font-semibold text-emerald-800">
                  Bokaro Metallurgy Desk
                </Link>
                <span>•</span>
                <Link href="/locations/gaya" className="hover:text-emerald-700">
                  Gaya Desk
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
                <Link href="/locations/muzaffarpur" className="hover:text-emerald-700">
                  Muzaffarpur Desk
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
