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

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.workwisevisa.com";

// ============================================================================
// SEO METADATA — STRICT CHARACTER LIMITS & TARGETED GHAZIABAD KEYWORDS
// ============================================================================
export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Work Visa Consultancy in Ghaziabad | Overseas Jobs & Recruitment",
  description:
    "Top overseas job consultancy in Ghaziabad, NCR. Verified Europe & Gulf work permits for Sahibabad & Kavi Nagar machinists, 6G welders, heavy drivers & electricians.",
  keywords: [
    "work visa consultancy in ghaziabad",
    "visa consultancy in ghaziabad",
    "overseas recruitment agency ghaziabad",
    "gulf job consultancy in ghaziabad",
    "europe work visa consultant ghaziabad",
    "best immigration consultant ghaziabad",
    "dubai work visa agent in ghaziabad",
    "saudi arabia visa processing ghaziabad",
    "sahibabad industrial area job abroad",
    "kavi nagar industrial area visa agency",
    "bulandshahr road industrial area recruitment",
    "6g welder vacancy europe ghaziabad",
    "cnc lathe operator jobs abroad ghaziabad",
    "heavy commercial driver gulf job ghaziabad",
    "delhi meerut expressway visa consultant",
    "takamol trade test guidance ghaziabad",
    "gamca medical appointment center ghaziabad",
    "mea apostille attestation ghaziabad",
  ],
  alternates: {
    canonical: `${BASE_URL}/locations/ghaziabad`,
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
    title: "Work Visa Consultancy in Ghaziabad | Overseas Jobs & Recruitment",
    description:
      "Top overseas job consultancy in Ghaziabad, NCR. Verified Europe & Gulf work permits for Sahibabad & Kavi Nagar machinists, 6G welders, heavy drivers & electricians.",
    url: `${BASE_URL}/locations/ghaziabad`,
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/workwise_logo.png`,
        width: 1200,
        height: 630,
        alt: "Work Visa Consultancy in Ghaziabad - WorkWise Visa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Visa Consultancy in Ghaziabad | Overseas Jobs & Recruitment",
    description:
      "Top overseas job consultancy in Ghaziabad, NCR. Verified Europe & Gulf work permits for Sahibabad & Kavi Nagar machinists, 6G welders, heavy drivers & electricians.",
    images: [`${BASE_URL}/images/workwise_logo.png`],
  },
};

// ============================================================================
// COMPREHENSIVE 20 LOCALIZED FAQS FOR GHAZIABAD CANDIDATES
// ============================================================================
const ghaziabadFaqs = [
  {
    q: "How can candidates from Ghaziabad reach the WorkWise Visa office in Sector 132, Noida?",
    a: "Our Corporate Regional Headquarters is located at Urbtech Trade Centre, Sector 132, Noida Expressway—just 18 to 28 kilometers from Ghaziabad. From Mohan Nagar, Sahibabad, or Raj Nagar Extension, you can drive via the Hindon Elevated Road and Delhi-Meerut Expressway (NE-3) past Indirapuram onto the Noida Expressway in just 20 to 35 minutes. Alternatively, take the Delhi Metro Blue Line to Botanical Garden or Aqua Line, or board direct express buses from Anand Vihar ISBT / Kaushambi to Sector 132.",
  },
  {
    q: "Which industrial trades in Ghaziabad have the highest overseas demand in Europe and the Gulf?",
    a: "Ghaziabad's dense manufacturing clusters produce high-caliber technical talent. The most sought-after trades include: (1) Precision CNC Lathe & VMC Machinists, (2) Structural 6G TIG/MIG Pipe Welders, (3) HT/LT Panel Wiremen & Transformer Winders, (4) Heavy Commercial Trailer & Container Drivers, (5) Hydraulic Press & Mechanical Maintenance Fitters, and (6) Food Processing & Packaging Machine Technicians.",
  },
  {
    q: "Are jobs available in Europe for Sahibabad and Kavi Nagar factory workers?",
    a: "Yes. Leading manufacturing corporations in Poland, Romania, Germany, Croatia, and Czechia continuously recruit Ghaziabad industrial artisans for steel fabrication, automotive component tooling, precision machining, and logistics warehouses. These positions offer legal European national work permits (Type-D Single Permits) with monthly net earnings between ₹85,000 and ₹1,65,000 INR along with company-sponsored accommodation.",
  },
  {
    q: "Does WorkWise Visa charge advance fees before candidate selection?",
    a: "No. WorkWise Visa operates strictly under Ministry of External Affairs (MEA) compliant guidelines. Initial profile evaluation, trade resume assessment, and interview registration are 100% free of charge. Service charges are milestone-based, clearly itemized in writing, and payable only after authentic employer selection and verified visa issuance.",
  },
  {
    q: "How does WorkWise Visa protect Ghaziabad workers from fraudulent local agents?",
    a: "Many unregulated sub-agents in Western UP charge exorbitant fees for tourist or visit visas, promising local conversion abroad—which is strictly illegal under UAE, Saudi, and European laws. WorkWise Visa executes 100% direct recruitment with sovereign documentation: verified Saudi Qiwa digital contracts, UAE MOHRE electronic work permits, and European Voivodeship/IGI approvals, backed by formal service agreements and zero middlemen.",
  },
  {
    q: "What is the Takamol Skill Verification Program (SVP) test, and where do Ghaziabad candidates take it?",
    a: "The Takamol SVP test is mandatory for skilled trade visas to Saudi Arabia. It verifies hands-on trade competency (welding, electrical, plumbing, HVAC, carpentry). Ghaziabad candidates complete their pre-test orientation at our partner workshops, with official testing conducted at government-accredited Takamol centers in New Delhi (just 35 minutes from Ghaziabad).",
  },
  {
    q: "Where do Ghaziabad candidates undergo the mandatory Wafid (GAMCA) medical examination?",
    a: "Pre-departure medical screening for Gulf countries (Saudi Arabia, UAE, Qatar, Kuwait, Oman, Bahrain) must be completed at an authorized Wafid (formerly GAMCA) medical center. Authorized diagnostic clinics are conveniently located across Central and East Delhi (Patparganj, Laxmi Nagar, Daryaganj, Connaught Place), just 20 to 35 minutes from Ghaziabad.",
  },
  {
    q: "How are Police Clearance Certificates (PCC) and MEA Apostille handled for Ghaziabad applicants?",
    a: "European work visas (Poland, Croatia, Romania, Czechia) require a Passport Seva Kendra (PSK) PCC and MEA Apostille attestation. Ghaziabad applicants can book their PCC appointment at PSK Sahibabad (Pacific Mall / Kaushambi) or Regional Passport Office Ghaziabad. Our documentation team then handles the official Hague Apostille stamping through the Ministry of External Affairs at Patiala House, New Delhi.",
  },
  {
    q: "Can heavy commercial truck and trailer drivers from Ghaziabad get Gulf driving jobs?",
    a: "Yes. Heavy commercial trailer, tipper, and tanker drivers with valid Indian Heavy Commercial Vehicle (HGV/Trans) licenses are in massive demand across Dubai Logistics Hub, Abu Dhabi KEZAD, and Saudi Arabia (NEOM megaproject, Riyadh Metro expansion). We conduct preliminary driving evaluations and guide candidates through the RTA Dubai or Saudi Dallah driving school licensing tests upon arrival.",
  },
  {
    q: "What monthly savings can a 6G pipe welder or CNC operator expect in Europe compared to Sahibabad?",
    a: "In Sahibabad or Kavi Nagar workshops, experienced 6G welders and CNC machinists typically earn ₹22,000 to ₹35,000 per month. In Poland or Germany, the same certified artisans earn between €1,200 and €1,750 per month (approx. ₹1,10,000 to ₹1,60,000 INR) plus overtime, with free furnished lodging, allowing them to send home over ₹90,000 to ₹1,30,000 INR every single month.",
  },
  {
    q: "What is the typical timeline from interview selection to flight departure?",
    a: "For Gulf countries (Saudi Arabia, UAE, Qatar), visa processing typically takes 25 to 45 days, covering trade tests, GAMCA medical, visa stamping, and eMigrate clearance. For European work permits (Poland, Romania, Croatia), the complete process takes 60 to 90 days, including sovereign work authorization approval from the labor ministry, embassy VFS biometrics, and flight mobilization.",
  },
  {
    q: "Can candidates holding an ECR (10th fail) passport apply for overseas positions?",
    a: "Yes. Skilled and semi-skilled trade positions—including welders, fitters, scaffolders, drivers, and warehouse workers—are fully open to ECR passport holders. WorkWise Visa manages the complete eMigrate POE (Protector of Emigrants) clearance through the Indian Ministry of External Affairs, complete with ₹10 Lakh Pravasi Bharatiya Bima Yojana (PBBY) insurance protection.",
  },
  {
    q: "How does WorkWise Visa support candidates during client interview drives?",
    a: "We conduct structured client interview orientation at our Noida Corporate Headquarters. Candidates receive practical trade mock trials, CV standardization according to international Europass formats, guidance on technical Q&A, and bilingual Arabic/English contract briefing.",
  },
  {
    q: "Are food, accommodation, and transport provided by the overseas employer?",
    a: "In over 90% of our verified Gulf and European employer contracts, furnished air-conditioned accommodation, company transport between living quarters and worksites, and comprehensive annual medical insurance are provided 100% free of charge by the employer. In Gulf construction and industrial projects, subsidized or free mess food is also provided.",
  },
  {
    q: "What happens if a candidate's visa is delayed or rejected due to employer quota issues?",
    a: "WorkWise Visa guarantees complete transparency. In the rare event of an administrative quota freeze by an overseas sponsor, candidates are immediately reassigned to alternate active client vacancies without losing their registration or payment credentials, or are provided a transparent settlement according to our formal service agreement.",
  },
  {
    q: "Do electrical panel wiremen and transformer technicians from Mohan Nagar qualify for Gulf jobs?",
    a: "Yes. Mohan Nagar and Sahibabad host prominent transformer and electrical switchgear manufacturers. GCC utilities contractors and EPC consortiums in Saudi Arabia and the UAE actively hire Indian HT/LT wiremen, transformer repair fitters, and motor rewinders, offering tax-free salaries from SAR 3,200 to SAR 5,000 (₹72,000 to ₹1,12,000 INR) plus overtime.",
  },
  {
    q: "Can Ghaziabad candidates verify their job offer online before paying any fees?",
    a: "Absolutely. For Saudi Arabia, contracts are verified digitally on the official Qiwa portal (qiwa.sa). For the UAE, offer letters are verified directly on the Ministry of Human Resources and Emiratisation (MOHRE) portal (mohre.gov.ae). For Europe, the sovereign work permit displays an official voivodeship or labor ministry application reference that can be validated directly.",
  },
  {
    q: "What documents must a Ghaziabad candidate bring for an in-person consultation at Sector 132 Noida?",
    a: "Candidates should bring: (1) Original Passport with at least 18 months validity, (2) 8 passport-size white background photos, (3) Educational & ITI/Diploma certificates, (4) Indian or Gulf work experience letters, (5) Indian driving license (for drivers), and (6) Any prior trade test certificates or welding test cards.",
  },
  {
    q: "Are European work permits renewable, and can workers apply for permanent residency (PR)?",
    a: "Yes. European single work permits (such as Poland Type-D or Romania Single Permit) are initially issued for 1 to 3 years and are renewable upon mutual employer agreement. After completing continuous legal employment (typically 5 years in Poland/Romania/Germany), workers become eligible to apply for long-term EU resident status.",
  },
  {
    q: "How can I book an immediate free counseling session at WorkWise Visa?",
    a: "You can book directly by filling out the online consultation form on this page, calling our Corporate Regional Headquarters at +91 81301 61603, or messaging our official WhatsApp desk. Our senior placement advisors will review your qualifications and arrange an immediate in-person appointment at Sector 132, Noida.",
  },
];

export default function GhaziabadLocationPage() {
  // ============================================================================
  // JSON-LD STRUCTURED DATA SCHEMAS (ORGANIZATION, LOCAL BUSINESS & FAQS)
  // ============================================================================
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EmploymentAgency",
        "@id": `${BASE_URL}/locations/ghaziabad#agency`,
        name: "WorkWise Visa Consultancy - Ghaziabad Placement Desk",
        url: `${BASE_URL}/locations/ghaziabad`,
        logo: `${BASE_URL}/images/workwise_logo.png`,
        image: `${BASE_URL}/images/workwise_logo.png`,
        description:
          "Top-rated overseas work visa consultancy serving Ghaziabad, Sahibabad, Kavi Nagar, and Western UP. Verified Europe and Gulf work permits, GAMCA medicals, Takamol skill verification, and MEA Apostille.",
        telephone: "+91-8130161603",
        email: "support@workwisevisa.com",
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Urbtech Trade Centre, D-701 C, Sector 132, Noida-Greater Noida Expressway",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201304",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.5029,
          longitude: 77.3789,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:30",
            closes: "18:30",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Ghaziabad" },
          { "@type": "AdministrativeArea", name: "Sahibabad" },
          { "@type": "AdministrativeArea", name: "Kavi Nagar" },
          { "@type": "AdministrativeArea", name: "Mohan Nagar" },
          { "@type": "AdministrativeArea", name: "Bulandshahr Road" },
          { "@type": "AdministrativeArea", name: "Loni" },
          { "@type": "AdministrativeArea", name: "Dasna" },
          { "@type": "AdministrativeArea", name: "Indirapuram" },
          { "@type": "AdministrativeArea", name: "Vaishali" },
          { "@type": "AdministrativeArea", name: "Raj Nagar Extension" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/locations/ghaziabad#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Locations",
            item: `${BASE_URL}/locations`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Ghaziabad",
            item: `${BASE_URL}/locations/ghaziabad`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/locations/ghaziabad#faq`,
        mainEntity: ghaziabadFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
      <Navbar />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* ==================================================================== */}
        {/* SECTION 1: HERO SECTION                                             */}
        {/* ==================================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 pt-24 sm:pt-28 pb-16 sm:pb-24 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium"
            >
              <Link href="/" className="transition-colors hover:text-emerald-400">
                Home
              </Link>
              <span>/</span>
              <Link href="/locations" className="transition-colors hover:text-emerald-400">
                Locations
              </Link>
              <span>/</span>
              <span className="font-semibold text-emerald-400">Ghaziabad</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Semantic Headline & Value Proposition */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  <FaShieldHalved className="text-emerald-400" />
                  Western UP&apos;s Industrial Heavyweight • Dedicated Candidate Placement Desk
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                  Work Visa &amp; Overseas Employment Consultancy in{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    Ghaziabad
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                  Connecting skilled trade technicians, CNC lathe machinists, structural 6G welders, heavy commercial drivers, and electromechanical artisans across <strong>Sahibabad (Site 4), Kavi Nagar, Bulandshahr Road, Mohan Nagar, and Loni</strong> directly with verified employer work permits across Europe (Poland, Germany, Romania, Croatia) and the Gulf (Saudi Arabia, UAE, Qatar). Located just <strong>20 to 35 minutes via Hindon Elevated Road &amp; DME</strong> from our Corporate Regional Headquarters in Sector 132, Noida.
                </p>

                {/* Key Legal Trust Metrics */}
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-6 sm:grid-cols-4">
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">20–35 Mins</div>
                    <div className="text-xs text-slate-400">To Noida Corporate HQ</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-slate-400">Verified Work Permits</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">Takamol &amp; Wafid</div>
                    <div className="text-xs text-slate-400">Direct Test Center Booking</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">Zero</div>
                    <div className="text-xs text-slate-400">Sub-Agent Exploitation</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Fast-Track Candidate Career Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-slate-700/80 bg-gradient-to-b from-slate-800/90 to-slate-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        Ghaziabad Candidate Desk
                      </span>
                      <h2 className="text-lg font-display font-bold text-white">
                        Western UP Placement Hub
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
                        <strong className="text-white">Corporate Access:</strong>{" "}
                        Urbtech Trade Centre, Sector 132, Noida (20–35 mins via Hindon Elevated Road &amp; DME from Ghaziabad).
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Active Destinations:</strong>{" "}
                        Poland, Croatia, Romania, Germany, Saudi Arabia (NEOM), UAE (Dubai), Qatar, and Kuwait.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Monthly Packages:</strong>{" "}
                        €950 – €1,800 (Europe) | SAR/AED 2,800 – 6,500+ (Gulf) with free bachelor accommodation &amp; medical.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Deployment Timelines:</strong>{" "}
                        25 – 45 Days for GCC visas; 60 to 90 Days for European Type-D single permits.
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-700 pt-5">
                    <a
                      href="#consultation"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all hover:from-emerald-500 hover:to-teal-500 hover:shadow-emerald-600/40 hover:scale-[1.01]"
                    >
                      Book Free Profile Evaluation in Ghaziabad
                      <FaArrowRight className="text-xs" />
                    </a>
                    <p className="mt-2 text-center text-xs text-slate-400">
                      Online candidate registration &amp; office consultations • 100% free resume review
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 2: DISTRICT OVERVIEW & INDUSTRIAL LINEAGE                     */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                  Industrial Heritage &amp; Workforce Demographics
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900 leading-tight">
                  Ghaziabad: Western UP&apos;s Engineering Gateway to High-Paying Overseas Careers
                </h2>
                <div className="mt-5 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  <p>
                    Historically hailed as the <strong>Gateway of Uttar Pradesh</strong> and the metallurgical powerhouse of the National Capital Region, Ghaziabad hosts over 25,000 operational industrial units spanning <strong>Sahibabad Industrial Area (Site 4, Site 1/2), Kavi Nagar, Bulandshahr Road, Mohan Nagar, Meerut Road, Loni, and Dasna</strong>. Technicians here possess world-class hands-on experience in heavy engineering, precision steel rolling, transformer assembly, CNC milling, press tool maintenance, structural 6G pipe welding, and heavy logistics transport.
                  </p>
                  <p>
                    However, despite operating complex industrial machinery, local factory compensation in Western UP often plateaus between <strong>₹18,000 and ₹32,000 per month</strong>. WorkWise Visa bridges this income disparity by connecting Ghaziabad artisans directly with multinational European corporations in <strong>Poland, Germany, Romania, and Croatia</strong>, alongside Tier-1 EPC conglomerates building <strong>Saudi Arabia&apos;s $500B NEOM megaproject</strong> and <strong>Dubai&apos;s logistics corridors</strong>, yielding monthly earnings between <strong>₹85,000 and ₹1,65,000 INR</strong>.
                  </p>
                  <p>
                    Located merely <strong>18 to 28 kilometers</strong> from our Corporate Regional Headquarters in <strong>Urbtech Trade Centre, Sector 132, Noida</strong>, Ghaziabad candidates enjoy unparalleled physical accessibility. A brief 20-to-35-minute drive via the Hindon Elevated Road or Delhi-Meerut Expressway allows candidates to complete physical document verification, trade skill benchmarking, and embassy orientation in person.
                  </p>
                </div>
              </div>

              {/* Highlights Card */}
              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-emerald-50/40 p-8 shadow-xs">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FaBuildingColumns className="text-emerald-600" />
                  <span>Key Ghaziabad Industrial Clusters Served</span>
                </h3>
                <div className="mt-6 space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3 rounded-2xl bg-white p-4 border border-slate-200/80 shadow-2xs">
                    <FaCircleCheck className="text-emerald-600 w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Sahibabad Industrial Area (Site 4 &amp; 1):</span>
                      Precision CNC lathe programmers, VMC operators, automotive press toolmakers, and metal finishing artisans.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl bg-white p-4 border border-slate-200/80 shadow-2xs">
                    <FaCircleCheck className="text-emerald-600 w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Kavi Nagar &amp; Bulandshahr Road:</span>
                      Heavy structural steel fabricators, 6G TIG/MIG pipe welders, boiler mechanics, and industrial hydraulic fitters.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl bg-white p-4 border border-slate-200/80 shadow-2xs">
                    <FaCircleCheck className="text-emerald-600 w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Mohan Nagar &amp; Meerut Road:</span>
                      HT/LT electrical panel wiremen, transformer winders, motor rewinders, and instrumentation maintenance technicians.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl bg-white p-4 border border-slate-200/80 shadow-2xs">
                    <FaCircleCheck className="text-emerald-600 w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Loni, Dasna &amp; DME Logistics Belt:</span>
                      Heavy container trailer drivers, 40-foot articulated truck operators, and modern warehouse forklift material handlers.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 3: IN-DEMAND TRADES, ROLES & SALARY MATRIX                   */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Verified Global Openings
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                High-Demand Trades &amp; International Salary Matrix for Ghaziabad Talent
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                We represent verified, government-sanctioned vacancies across Europe and the Arabian Gulf. Compare realistic monthly compensation against local Ghaziabad wages:
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-5 py-4 font-bold">Trade Category</th>
                      <th className="px-5 py-4 font-bold">Primary Job Roles</th>
                      <th className="px-5 py-4 font-bold">Destination Countries</th>
                      <th className="px-5 py-4 font-bold">Monthly Take-Home Salary</th>
                      <th className="px-5 py-4 font-bold">Key Allowances</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        CNC Machining &amp; Tooling
                      </td>
                      <td className="px-5 py-4">
                        CNC Lathe Operator, 4-Axis VMC Programmer, Press Toolmaker, Surface Grinder
                      </td>
                      <td className="px-5 py-4 font-medium text-emerald-700">
                        Poland, Germany, Romania, Czechia
                      </td>
                      <td className="px-5 py-4 font-bold text-slate-900">
                        ₹85,000 – ₹1,65,000 <span className="text-xs font-normal text-slate-500">(€950–€1,800)</span>
                      </td>
                      <td className="px-5 py-4 text-xs text-slate-500">
                        Free accommodation + 2-3 hrs daily paid OT
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        Welding &amp; Pipe Fabrication
                      </td>
                      <td className="px-5 py-4">
                        6G TIG/MIG Pipe Welder, Structural Steel Fabricator, Boiler Maker, Pipe Fitter
                      </td>
                      <td className="px-5 py-4 font-medium text-emerald-700">
                        Saudi Arabia (NEOM), UAE, Qatar, Poland
                      </td>
                      <td className="px-5 py-4 font-bold text-slate-900">
                        ₹75,000 – ₹1,55,000 <span className="text-xs font-normal text-slate-500">(SAR 3,800–6,500)</span>
                      </td>
                      <td className="px-5 py-4 text-xs text-slate-500">
                        1.5x statutory OT + food &amp; camp provided
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        Electro-Mechanical &amp; HT/LT
                      </td>
                      <td className="px-5 py-4">
                        HT/LT Panel Wireman, Transformer Winder, Industrial Maintenance Electrician
                      </td>
                      <td className="px-5 py-4 font-medium text-emerald-700">
                        Saudi Arabia, UAE, Kuwait, Oman
                      </td>
                      <td className="px-5 py-4 font-bold text-slate-900">
                        ₹72,000 – ₹1,40,000 <span className="text-xs font-normal text-slate-500">(AED 3,200–5,800)</span>
                      </td>
                      <td className="px-5 py-4 text-xs text-slate-500">
                        Free AC transport + health insurance
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        Heavy Logistics &amp; Transport
                      </td>
                      <td className="px-5 py-4">
                        Heavy Commercial Trailer Driver, Tipper Driver, Forklift / Reach Truck Operator
                      </td>
                      <td className="px-5 py-4 font-medium text-emerald-700">
                        UAE (Dubai), Saudi Arabia, Poland, Croatia
                      </td>
                      <td className="px-5 py-4 font-bold text-slate-900">
                        ₹70,000 – ₹1,45,000 <span className="text-xs font-normal text-slate-500">(AED 3,500–5,500)</span>
                      </td>
                      <td className="px-5 py-4 text-xs text-slate-500">
                        Trip allowances + performance bonuses
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 4: PHYSICAL PROXIMITY & TRANSIT ROUTES TO NOIDA HQ           */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-slate-900 py-16 sm:py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Effortless 20–35 Minute Connectivity
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-white">
                How Ghaziabad Candidates Reach Our Noida Regional Headquarters
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300">
                Located just 18 to 28 kilometers away, Ghaziabad candidates have direct, signal-free access to our Corporate Headquarters in Sector 132, Noida:
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-800/80 p-6 shadow-2xs space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <FaRoute className="text-emerald-400" />
                  <span>Hindon Elevated Road &amp; DME</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  From Raj Nagar Extension, Kavi Nagar, or Mohan Nagar, take the Hindon Elevated Road directly to NH-9 / Delhi-Meerut Expressway. Exit past Indirapuram onto the Noida Link Road and follow the expressway straight to Sector 132 in just 20 to 35 minutes.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-800/80 p-6 shadow-2xs space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <FaTrainSubway className="text-emerald-400" />
                  <span>Delhi Metro Blue Line / Red Line</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Board the Blue Line from Vaishali or Kaushambi directly to Botanical Garden (15 mins), then take a quick 12-minute taxi down the expressway. From Shaheed Sthal (Red Line), interchange at Kashmere Gate to Yellow/Magenta Line.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-800/80 p-6 shadow-2xs space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <FaPlaneDeparture className="text-emerald-400" />
                  <span>Rail &amp; Airport Connectivity</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Convenient 20-minute connect from Ghaziabad Railway Junction (GZB) and Anand Vihar Terminal (ANVT), and 40 minutes from New Delhi Railway Station (NDLS) and IGI Airport Terminal 3 for final flight departures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 5: WHY GHAZIABAD CANDIDATES CHOOSE WORKWISE VISA            */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Ethical &amp; Transparent Recruitment
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Why Thousands of Western UP Technicians Trust WorkWise Visa
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3 shadow-2xs">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <FaAward className="text-xl" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Zero Middlemen (Direct Employer Visas)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We eliminate local sub-agents. Every job demand is authenticated directly with Tier-1 overseas EPC contractors, logistics conglomerates, and European factories.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3 shadow-2xs">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                  <FaFileCircleCheck className="text-xl" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Sovereign Digital Verification</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Candidates verify their authentic electronic offers directly on the Saudi Qiwa platform, UAE MOHRE portal, or official European Voivodeship registries before departure.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3 shadow-2xs">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <FaUserShield className="text-xl" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Full MEA &amp; eMigrate Compliance</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  End-to-end management of Takamol SVP trade testing, Wafid GAMCA medical appointments, MEA Hague Apostille at Patiala House, and eMigrate POE clearance with ₹10 Lakh PBBY insurance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 6: COMPREHENSIVE RECRUITMENT ROADMAP                         */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Step-by-Step Pathway
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                From Ghaziabad Workshop to Overseas Employment
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-3">
                <div className="text-2xl font-black text-emerald-600">01</div>
                <h3 className="text-sm font-bold text-slate-900">Profile Vetting &amp; Trade Evaluation</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Submit your passport, ITI/Diploma, and experience certificates online or visit Sector 132 Noida for instant free eligibility matching.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-3">
                <div className="text-2xl font-black text-emerald-600">02</div>
                <h3 className="text-sm font-bold text-slate-900">Client Trade Tests &amp; Interviews</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Attend hands-on trade trials (welding 6G, VMC programming, electrical wiring) at partner workshops during scheduled client delegations.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-3">
                <div className="text-2xl font-black text-emerald-600">03</div>
                <h3 className="text-sm font-bold text-slate-900">Sovereign Work Permit &amp; Medical</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Complete Wafid GAMCA medical in Delhi, PSK Sahibabad PCC, MEA Patiala House Apostille, and sovereign visa stamping.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-3">
                <div className="text-2xl font-black text-emerald-600">04</div>
                <h3 className="text-sm font-bold text-slate-900">POE Clearance &amp; Flight Mobilization</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We process eMigrate POE clearance with ₹10 Lakh PBBY insurance, conduct pre-departure orientation, and fly you from IGI Airport.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 7: ANTI-FRAUD ADVISORY (PROTECTING GHAZIABAD CANDIDATES)     */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-amber-200 bg-amber-50/60 p-8 sm:p-10 space-y-4">
              <div className="flex items-center gap-3 text-amber-800 font-bold text-lg">
                <FaTriangleExclamation className="text-2xl text-amber-600 shrink-0" />
                <span>Anti-Scam Advisory: Beware of Fake Visa Agents in Western UP</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Local sub-agents across Ghaziabad and NCR frequently trap workers by offering tourist visas with false assurances of converting them into employment visas upon landing. Under revised UAE and Saudi labor laws, <strong>working on a visit or tourist visa is strictly illegal</strong>, carrying severe criminal penalties, deportation, and permanent entry bans. Always demand an authenticated Ministry Work Permit (MOHRE in UAE, Qiwa in Saudi, Voivodeship in Poland) before boarding your flight.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 8: VERIFIED REVIEWS FROM GHAZIABAD CANDIDATES                */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Verified Success Stories
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Real Experiences from Ghaziabad Technicians Placed Abroad
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-2xs">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-3.5 h-3.5" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  &ldquo;Sahibabad Site 4 me 6 saal VMC machine par kaam kiya par salary ₹24,000 par atki thi. Sahibabad se sirf 25 minute me WorkWise Visa Noida office gaya. Inhone direct European single work permit dilwaya. Aaj Poland me monthly ₹1.22 Lakh kamata hoon.&rdquo;
                </p>
                <div className="border-t border-slate-100 pt-3">
                  <div className="font-bold text-slate-900 text-xs">Sumit Rawat</div>
                  <div className="text-[11px] text-slate-500">Sahibabad Site 4 • CNC Operator in Poland (€1,350/mo)</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-2xs">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-3.5 h-3.5" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  &ldquo;Kavi Nagar me fabrication workshop me kaam karta tha. Local agents ne do baar tourist visa bolkar fraud kiya. WorkWise Visa se direct Qiwa verified contract mila. Takamol trade test bhi Delhi center me clear karwaya.&rdquo;
                </p>
                <div className="border-t border-slate-100 pt-3">
                  <div className="font-bold text-slate-900 text-xs">Anas Qureshi</div>
                  <div className="text-[11px] text-slate-500">Kavi Nagar • 6G Pipe Welder in Saudi Arabia (SAR 4,600/mo)</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-2xs">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-3.5 h-3.5" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  &ldquo;DME aur Eastern Peripheral Expressway par 8 saal trailer chalaya. WorkWise team ne Dubai me MNC transport firm me placement dilwayi. RTA license test aur MOHRE visa poori imaandari se hua.&rdquo;
                </p>
                <div className="border-t border-slate-100 pt-3">
                  <div className="font-bold text-slate-900 text-xs">Devendra Yadav</div>
                  <div className="text-[11px] text-slate-500">Bulandshahr Road / Dasna • Trailer Driver in Dubai (AED 4,700/mo)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 9: DIRECT CONSULTATION BOOKING FORM (NO EXTRA WRAPPER)       */}
        {/* ==================================================================== */}
        <ConsultationForm />

        {/* ==================================================================== */}
        {/* SECTION 10: 20 LOCALIZED EXHAUSTIVE FAQS                              */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Frequently Asked Questions
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Everything Candidates in Ghaziabad Need to Know About Overseas Work Visas
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Authoritative guidance on European national work permits, GCC employment visas, MEA Apostille attestation, and embassy processing workflows:
              </p>
            </div>

            <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
              {ghaziabadFaqs.map((faq, index) => (
                <div key={index} className="py-6">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-start gap-3">
                    <FaCircleQuestion className="text-emerald-600 shrink-0 mt-1 w-4 h-4" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 11: AUTHORITATIVE RESOURCES & PAN-INDIA NETWORK LINKS        */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Sovereign Portals &amp; Knowledge Base
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-slate-900">
                Verified Verification Links for Overseas Job Applicants
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="https://www.emigrate.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-emerald-500 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-emerald-700">Government of India</span>
                  <h3 className="font-bold text-slate-900 text-sm mt-1">MEA eMigrate Portal</h3>
                  <p className="text-xs text-slate-500 mt-1">Verify licensed recruitment agencies and POE clearances.</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 mt-4">
                  Visit emigrate.gov.in &rarr;
                </span>
              </a>

              <a
                href="https://qiwa.sa"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-emerald-500 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-teal-700">Kingdom of Saudi Arabia</span>
                  <h3 className="font-bold text-slate-900 text-sm mt-1">Qiwa Labor Portal</h3>
                  <p className="text-xs text-slate-500 mt-1">Authenticate electronic employment contracts directly.</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 mt-4">
                  Visit qiwa.sa &rarr;
                </span>
              </a>

              <a
                href="https://www.mohre.gov.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-emerald-500 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-cyan-700">United Arab Emirates</span>
                  <h3 className="font-bold text-slate-900 text-sm mt-1">MOHRE UAE Portal</h3>
                  <p className="text-xs text-slate-500 mt-1">Verify electronic work permits and job offer approvals.</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-700 mt-4">
                  Visit mohre.gov.ae &rarr;
                </span>
              </a>

              <a
                href="https://wafid.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-emerald-500 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-amber-700">GCC Health Council</span>
                  <h3 className="font-bold text-slate-900 text-sm mt-1">Wafid (GAMCA) Medical</h3>
                  <p className="text-xs text-slate-500 mt-1">Book medical screening at accredited centers in New Delhi.</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 mt-4">
                  Visit wafid.com &rarr;
                </span>
              </a>
            </div>

            {/* Complete Cross-City Network Links */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <span className="font-bold text-slate-700 text-xs block mb-3">WorkWise Visa Pan-India Network:</span>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <Link href="/locations/noida" className="hover:text-emerald-700 font-semibold underline">
                  Noida Corporate HQ
                </Link>
                <span>•</span>
                <Link href="/locations/delhi" className="hover:text-emerald-700 font-semibold underline">
                  Delhi Placement Desk
                </Link>
                <span>•</span>
                <Link href="/locations/faridabad" className="hover:text-emerald-700 font-semibold underline">
                  Faridabad Desk
                </Link>
                <span>•</span>
                <Link href="/locations/ghaziabad" className="hover:text-emerald-700 font-bold text-emerald-800">
                  Ghaziabad Desk
                </Link>
                <span>•</span>
                <Link href="/locations/meerut" className="hover:text-emerald-700 font-semibold underline">
                  Meerut Desk
                </Link>
                <span>•</span>
                <Link href="/locations/aligarh" className="hover:text-emerald-700 font-semibold underline">
                  Aligarh Desk
                </Link>
                <span>•</span>
                <Link href="/locations/patna" className="hover:text-emerald-700 font-semibold underline">
                  Patna Regional Branch
                </Link>
                <span>•</span>
                <Link href="/locations/varanasi" className="hover:text-emerald-700 font-semibold underline">
                  Varanasi Desk
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
                <Link href="/locations/bhagalpur" className="hover:text-emerald-700">
                  Bhagalpur Desk
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

