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
// SEO METADATA — STRICT CHARACTER LIMITS & TARGETED DELHI KEYWORDS
// ============================================================================
export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Work Visa Consultancy in Delhi | Overseas Jobs & Recruitment",
  description:
    "Top work visa consultancy & overseas recruitment agency serving Delhi NCR. Verified Europe & Gulf work permits with MEA Apostille & embassy stamping support.",
  keywords: [
    "work visa consultancy in delhi",
    "visa consultancy in delhi",
    "overseas recruitment agency delhi",
    "gulf job consultancy in delhi",
    "europe work visa consultant delhi",
    "best immigration consultant delhi",
    "dubai work visa agent in delhi",
    "saudi arabia visa processing delhi",
    "manpower consultancy in delhi for gulf",
    "takamol trade test guidance delhi",
    "gamca medical appointment center delhi",
    "mea apostille attestation patiala house delhi",
    "vfs global delhi visa appointment",
    "licensed overseas manpower agency delhi",
  ],
  alternates: {
    canonical: `${BASE_URL}/locations/delhi`,
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
    title: "Work Visa Consultancy in Delhi | Overseas Jobs & Recruitment",
    description:
      "Top work visa consultancy & overseas recruitment agency serving Delhi NCR. Verified Europe & Gulf work permits with MEA Apostille & embassy stamping support.",
    url: `${BASE_URL}/locations/delhi`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/delhi_hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Work Visa Consultancy in Delhi - WorkWise Visa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Visa Consultancy in Delhi | WorkWise Visa",
    description:
      "Premier work visa consultancy & overseas recruitment agency serving Delhi NCR. Verified Gulf & Europe work permits.",
    images: [`${BASE_URL}/images/delhi_hero.jpg`],
  },
};

// ============================================================================
// EXHAUSTIVE FAQS LIST (MATCHING NOIDA & PATNA QUALITY STANDARDS)
// ============================================================================
const delhiFaqs = [
  {
    q: "1. How does WorkWise Visa assist candidates residing in Delhi?",
    a: "WorkWise Visa connects skilled trade workers, drivers, technicians, and hospitality personnel across Delhi with verified employer-backed job quotas in Europe (Poland, Croatia, Romania, Germany) and the Gulf (Saudi Arabia, UAE, Qatar, Oman, Bahrain). We assist with resume shortlisting, trade skill assessments, MEA Apostille, Wafid medicals, VFS biometrics, and flight mobilization.",
  },
  {
    q: "2. Where can candidates from Delhi visit the WorkWise Visa office in person?",
    a: "Candidates can visit our Corporate Headquarters located at Urbtech Trade Centre, Sector 132, Noida. It is located right on the Noida-Greater Noida Expressway, just 15 to 20 minutes from South Delhi (Ashram, Sarita Vihar, Okhla, Badarpur) via the DND Flyway or Kalindi Kunj Road.",
  },
  {
    q: "3. How do I get an MEA Apostille for European work visas at Patiala House, New Delhi?",
    a: "For Hague Convention countries (such as Poland, Croatia, Romania, and Germany), your educational certificates and Police Clearance Certificate (PCC) must be apostilled by the Ministry of External Affairs (MEA) CPV Division at Patiala House Courts, Tilak Marg. WorkWise Visa provides complete document courier, State HRD legalization, and Patiala House Apostille coordination.",
  },
  {
    q: "4. Where is the VFS Global Application Centre in Delhi for European work visas?",
    a: "The central VFS Global Joint Visa Application Centre for European National Type-D visas is located at Mezzanine Floor, Shivaji Stadium Metro Station, Baba Kharak Singh Marg, Connaught Place, New Delhi. WorkWise Visa schedules your biometric appointment and prepares your complete embassy file.",
  },
  {
    q: "5. Where can candidates in Delhi take their Wafid / GAMCA medical examination?",
    a: "Wafid appointment slips are generated online via wafid.com, which randomly assigns an authorized Gulf Health Council clinic across South and Central Delhi—concentrated around Nehru Place, Greater Kailash (GK-1), Jasola, Connaught Place, and Okhla. Never visit unaccredited private labs as GCC embassies only accept digital Wafid FIT reports.",
  },
  {
    q: "6. Which European countries are currently hiring Indian workers through WorkWise Visa?",
    a: "We have active, authenticated employer job quotas for Poland (Voivodeship Type A Work Permits), Croatia (MUP Work & Residence Permits), Romania (IGI Aviz de Muncă), and Germany (Opportunity Card & Skilled Trade Visas) across welding, driving, electrical, CNC machining, warehouse logistics, and food processing.",
  },
  {
    q: "7. What are the monthly net salaries for European skilled and trade jobs?",
    a: "Net monthly take-home earnings in Europe range from €850 to €1,600+ (approximately ₹78,000 to ₹1,45,000 INR) for trade technicians, and €1,100 to €1,800+ (₹1,00,000 to ₹1,65,000 INR) for heavy trailer drivers and CNC specialists, along with employer-provided accommodation, health insurance, and paid overtime.",
  },
  {
    q: "8. What is the process for Saudi Arabia Qiwa contracts and Takamol SVP in Delhi NCR?",
    a: "Saudi employment is 100% digitized. Candidates undergo skill testing under the Takamol Skill Verification Program (SVP) at accredited vocational centers across Delhi NCR. Once cleared, the sponsoring employer issues a digital labor contract on the Qiwa platform, followed by medical clearance and visa stamping via VFS Tasheel in Delhi.",
  },
  {
    q: "9. Can I convert a Schengen tourist visa to a work visa after landing in Europe?",
    a: "No. European labor laws strictly prohibit converting a 90-day Schengen tourist visa (Type-C) into an employment residence permit (Type-D) while inside the country. Legitimate employment visas must be stamped in your home country before departure. Beware of unauthorized agents promising tourist-to-work conversions.",
  },
  {
    q: "10. How do ECR passport holders from Delhi obtain POE Emigration Clearance?",
    a: "Candidates holding an ECR (Emigration Check Required) passport traveling to 18 notified Gulf countries must receive statutory emigration clearance from the Protector of Emigrants (POE) under the Ministry of External Affairs. WorkWise Visa processes this clearance via the official eMigrate portal, bundled with Pravasi Bharatiya Bima Yojana (PBBY) insurance.",
  },
  {
    q: "11. What is the processing timeline for UAE (Dubai) MOHRE employment visas?",
    a: "UAE work permit processing is exceptionally swift. Once the employer issues an electronic job offer via the MOHRE portal, an electronic entry permit is generated within 5 to 7 days. Following medical fitness and consular stamping, the complete deployment timeline takes approximately 20 to 25 days.",
  },
  {
    q: "12. What documents are mandatory for European National Type-D visa stamping?",
    a: "Mandatory documents include: (1) Original government work permit (Voivodeship, MUP, or IGI); (2) Valid passport with 18+ months validity; (3) MEA Apostilled Police Clearance Certificate (PCC); (4) Signed bilingual employment contract; (5) Schengen-compliant 1-year travel medical insurance (€30,000 coverage); and (6) Proof of accommodation.",
  },
  {
    q: "13. Is knowledge of European languages (Polish, Croatian, Romanian) mandatory for trade workers?",
    a: "No. For vocational trades, industrial manufacturing, logistics, and civil construction, proficiency in the local language is not required for visa stamping. Multinational plants operate with English/Hindi instructions and bilingual supervisors. Basic conversational English is sufficient.",
  },
  {
    q: "14. What is a Temporary Residence Card (TRC / Karta Pobytu) in Europe?",
    a: "A TRC (Karta Pobytu in Poland, Boravišna iskaznica in Croatia, Permis de Ședere in Romania) is the local resident card issued after arrival. It replaces your visa sticker, allowing you to reside, work, open bank accounts, access state healthcare, and travel visa-free across 29 Schengen nations for 1 to 3 years without re-applying for visas.",
  },
  {
    q: "15. How can candidates in Delhi reach the WorkWise Visa office via Delhi Metro?",
    a: "Take the Delhi Metro Magenta Line (from Janakpuri West, Hauz Khas, or Kalkaji Mandir) to Botanical Garden station. Interchange to the Aqua Line to Sector 137/142, or take a quick 12-minute taxi down the expressway directly to Urbtech Trade Centre in Sector 132.",
  },
  {
    q: "16. How does WorkWise Visa protect candidates from overseas job scams?",
    a: "WorkWise Visa operates strictly under statutory licensing with the Ministry of External Affairs and destination country ministries. We only recruit for pre-verified employers, execute written milestone service agreements, never accept cash for unverified jobs, and verify all contracts on official government portals (Qiwa, MOHRE, Voivodeship).",
  },
  {
    q: "17. What accommodation and living standards are provided in European and Gulf contracts?",
    a: "Under statutory labor agreements, employers provide furnished bachelor housing with heating/AC, bed, locker, hot water, high-speed Wi-Fi, shared kitchens or subsidized mess, and daily site transportation. Employers also provide statutory health insurance covering workplace medical care.",
  },
  {
    q: "18. Can candidates track their visa application milestones online?",
    a: "Yes. Every candidate registered with WorkWise Visa receives a unique application tracking ID to monitor their file progress 24/7—from trade interview selection to work permit approval, MEA Apostille, VFS submission, and flight dispatch—via our online tracking portal at workwisevisa.com/track-application.",
  },
  {
    q: "19. Does WorkWise Visa charge any fee before evaluating my resume?",
    a: "No. Initial profile screening, resume evaluation, and trade eligibility checks are 100% free of charge. Consultancy fees apply only after you are selected for an authentic corporate opening and sign a formal transparent recruitment agreement.",
  },
  {
    q: "20. Can heavy vehicle drivers in Delhi convert their Indian license to a Gulf or European commercial license?",
    a: "Yes. Candidates holding an Indian commercial Heavy Motor Vehicle (HMV) license or prior GCC driving license can undergo conversion trials in the Gulf (such as RTA in Dubai, Dallah in Saudi, or ROP in Oman) or take European driving school conversions with employer sponsorship.",
  },
];

// ============================================================================
// STRUCTURED DATA (JSON-LD SCHEMA GRAPH)
// ============================================================================
const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EmploymentAgency",
      "@id": "https://www.workwisevisa.com/locations/delhi#agency",
      name: "WorkWise Visa - Overseas Recruitment & Work Visa Consultancy (Delhi NCR)",
      image: "https://www.workwisevisa.com/logo.png",
      url: "https://www.workwisevisa.com/locations/delhi",
      telephone: "+918130161603",
      email: "workwisevisa@gmail.com",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Urbtech Trade Centre, Sector 132 (Direct Expressway Connect from South Delhi)",
        addressLocality: "Delhi NCR",
        addressRegion: "Delhi NCR",
        postalCode: "201304",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.5165,
        longitude: 77.378,
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
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "New Delhi" },
        { "@type": "AdministrativeArea", name: "South Delhi" },
        { "@type": "AdministrativeArea", name: "East Delhi" },
        { "@type": "AdministrativeArea", name: "West Delhi" },
        { "@type": "AdministrativeArea", name: "North Delhi" },
        { "@type": "AdministrativeArea", name: "Central Delhi" },
        { "@type": "State", name: "Delhi NCR" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.workwisevisa.com/locations/delhi#breadcrumb",
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
          name: "Delhi",
          item: "https://www.workwisevisa.com/locations/delhi",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.workwisevisa.com/locations/delhi#faq",
      mainEntity: delhiFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q.replace(/^\d+\.\s*/, ""),
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export default function DelhiLocationPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      <Navbar />

      <main className="w-full">
        {/* ==================================================================== */}
        {/* SECTION 1: HERO SECTION                                             */}
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
              <span className="font-semibold text-emerald-400">Delhi</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Semantic Headline & Value Proposition */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  <FaShieldHalved className="text-emerald-400" />
                  National Capital Region • Dedicated Candidate Placement Desk
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                  Work Visa &amp; Overseas Employment Consultancy in{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    Delhi
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                  WorkWise Visa connects skilled trade workers, technicians, heavy fleet drivers, and hospitality personnel across Delhi with authenticated employer-sponsored jobs in Europe (Poland, Romania, Croatia, Germany) and the Gulf Cooperation Council (Saudi Arabia, UAE, Qatar, Oman, Bahrain). With direct operational coordination across Chanakyapuri foreign embassies, VFS Global Shivaji Stadium, and the Ministry of External Affairs (MEA) at Patiala House, we guarantee 100% legal visa stamping with zero deceptive intermediaries.
                </p>

                {/* Key Legal Trust Metrics */}
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-6 sm:grid-cols-4">
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">Chanakyapuri</div>
                    <div className="text-xs text-slate-400">Direct Embassy Liaison</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-slate-400">Verified Work Permits</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">Patiala House</div>
                    <div className="text-xs text-slate-400">MEA Apostille Coordination</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">Zero</div>
                    <div className="text-xs text-slate-400">Unauthorized Middlemen</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Universal Fast-Track Career Desk Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-slate-700/80 bg-gradient-to-b from-slate-800/90 to-slate-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        Delhi Candidate Desk
                      </span>
                      <h2 className="text-lg font-display font-bold text-white">
                        Delhi NCR Overseas Placement Hub
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
                        Urbtech Trade Centre, Sector 132 (20 mins from South Delhi via DND / Kalindi Kunj Expressway).
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Active Destinations:</strong>{" "}
                        Poland, Croatia, Romania, Germany, Saudi Arabia (NEOM), UAE (Dubai), Qatar, Oman, and Bahrain.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Salary Ranges:</strong>{" "}
                        €900 – €2,200/mo (Europe) | 2,200 – 9,000 SAR/AED (Gulf) with free housing &amp; medical cover.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Turnaround SLA:</strong>{" "}
                        20 – 35 Days for GCC visas; 8 to 14 Weeks for European National Type-D permits.
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-700 pt-5">
                    <a
                      href="#consultation"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all hover:from-emerald-500 hover:to-teal-500 hover:shadow-emerald-600/40 hover:scale-[1.01]"
                    >
                      Book Free Profile Evaluation in Delhi
                      <FaArrowRight className="text-xs" />
                    </a>
                    <p className="mt-2 text-center text-xs text-slate-400">
                      Online candidate registration &amp; office consultations • Zero fee review
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 2: EXECUTIVE OVERVIEW & DELHI'S DIPLOMATIC STRATEGIC VALUE   */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Diplomatic Infrastructure &amp; Strategic Proximity
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Why Delhi is India&apos;s National Nerve Center for Overseas Work Visas
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 text-base leading-relaxed text-slate-600 lg:grid-cols-2">
              <div className="space-y-5">
                <p>
                  As the National Capital of India, Delhi houses the country&apos;s central diplomatic, consular, and credential-authentication infrastructure. Candidates applying from Delhi—from the industrial hubs of Okhla, Mayapuri, and Patparganj to residential belts across South, East, West, and Central Delhi—benefit from unparalleled logistical speed that regional applicants simply cannot match.
                </p>
                <p>
                  WorkWise Visa capitalizes on this unique geographic advantage. All major foreign diplomatic missions—such as the **Royal Embassy of Saudi Arabia**, **Embassy of the UAE**, **Embassy of Qatar**, **Embassy of the Republic of Poland**, **Embassy of Romania**, and **Embassy of Croatia**—are concentrated in Chanakyapuri and Vasant Vihar. Furthermore, the central **VFS Global Joint Visa Application Centre at Shivaji Stadium Metro Station (Connaught Place)** and the **Ministry of External Affairs (MEA) CPV Division at Patiala House** allow us to resolve biometric scheduling, consular queries, and Hague Apostille stamping with unmatched precision.
                </p>
              </div>

              <div className="space-y-5">
                <p>
                  Operating from our primary corporate headquarters at Urbtech Trade Centre, Sector 132 (directly connected to South Delhi via the DND Flyway and Kalindi Kunj Expressway in under 20 minutes), WorkWise Visa provides complete institutional transparency. We protect Delhi candidates from the rampant exploitation of unlicensed sub-agents operating around Paharganj, Laxmi Nagar, or Jamia Nagar who make fraudulent promises of &ldquo;tourist-to-work visa conversions&rdquo;.
                </p>
                <p>
                  Every overseas position managed by WorkWise Visa carries a verified employer labor authorization, legally binding digital contracts under **eMigrate** and host-nation labor ministries (such as Saudi Qiwa, UAE MOHRE, and European Voivodeship offices), and guaranteed statutory wage protections.
                </p>
              </div>
            </div>

            {/* Strategic Pillars Grid */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-2xs hover:border-emerald-300 transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 mb-4">
                  <FaBuildingColumns className="text-xl" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Chanakyapuri Embassies
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Direct physical liaison with Gulf and European consular divisions, eliminating third-party courier bottlenecks.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-2xs hover:border-emerald-300 transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-800 mb-4">
                  <FaBuildingUser className="text-xl" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Patiala House MEA Apostille
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Fast-track credential attestation and Police Clearance Certificate (PCC) apostille under the 1961 Hague Convention.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-2xs hover:border-emerald-300 transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-800 mb-4">
                  <FaPassport className="text-xl" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  VFS Shivaji Stadium Hub
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Direct appointment slotting and file submissions at the central VFS Global Application Centre in Connaught Place.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-2xs hover:border-emerald-300 transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-800 mb-4">
                  <FaHospital className="text-xl" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Wafid / GAMCA Clinics
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Immediate allocation at authorized Gulf Health Council screening centers across Nehru Place, GK-1, and Connaught Place.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 3: VERIFIED WORK VISA CORRIDORS                              */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Official Placement Corridors
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Verified Global Corridors for Candidates in Delhi
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Explore government-approved international career routes backed by direct employer quotas, statutory wage protection, and full relocation assistance:
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Corridor 1: Poland & Central Europe */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Schengen Europe 🇵🇱
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                      High Demand
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-display font-bold text-slate-900">
                    Poland Voivodeship Type A Work Permit
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Statutory multi-year work authorizations for CNC machinists, heavy trailer drivers, logistics handlers, and certified welders. Includes state health insurance, 40-hour workweeks, and Karta Pobytu residency pathways.
                  </p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700">
                    <div><strong>Net Wages:</strong> 4,000 – 7,500 PLN (₹84,000 – ₹1,55,000 INR)</div>
                    <div><strong>Processing Time:</strong> 8 – 12 Weeks</div>
                    <div><strong>Perks:</strong> Free Accommodation &amp; Overtime @ 1.5x</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/blogs/europe-work-visa-for-indian-workers-poland-croatia-romania-guide-2026"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    Read Poland Master Guide <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Corridor 2: Croatia & Romania */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                      Schengen Europe 🇭🇷 🇷🇴
                    </span>
                    <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-800">
                      Fast Track
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-display font-bold text-slate-900">
                    Croatia MUP &amp; Romania IGI Single Permits
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Ministry of Interior approved work permits across construction, hospitality, facility maintenance, and food processing. Full Schengen travel mobility across 29 member nations.
                  </p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700">
                    <div><strong>Net Wages:</strong> €800 – €1,400 (₹73,000 – ₹1,28,000 INR)</div>
                    <div><strong>Processing Time:</strong> 6 – 10 Weeks</div>
                    <div><strong>Perks:</strong> Provided Accommodation, Food &amp; TRC Card</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/blogs/europe-work-visa-for-indian-workers-poland-croatia-romania-guide-2026"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800"
                  >
                    Read Europe Master Guide <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Corridor 3: Saudi Arabia (Vision 2030 & NEOM) */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Gulf GCC 🇸🇦
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                      Bulk Demands
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-display font-bold text-slate-900">
                    Saudi Arabia Qiwa Contracts &amp; Takamol PVP
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Verified employment for NEOM, Red Sea Global, Qiddiya, and Aramco projects. Includes Takamol Skill Verification assistance, Muqeem digital Iqama, and 100% tax-free income.
                  </p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700">
                    <div><strong>Net Wages:</strong> 2,400 – 4,500 SAR (₹54,000 – ₹1,02,000 INR)</div>
                    <div><strong>Processing Time:</strong> 20 – 30 Days</div>
                    <div><strong>Perks:</strong> Free Accommodation, Food, Transport &amp; Airfare</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/countries/saudi-arabia"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    Explore Saudi Program <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Corridor 4: UAE (Dubai & Abu Dhabi) */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                      Gulf GCC 🇦🇪
                    </span>
                    <span className="rounded-full bg-cyan-50 px-2.5 py-0.5 text-xs font-semibold text-cyan-800">
                      Immediate Flight
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-display font-bold text-slate-900">
                    UAE MOHRE 2-Year Employment Visas
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Direct hiring across Dubai and Abu Dhabi for MEP technicians, heavy bus/trailer drivers, hotel hospitality staff, and facility helpers under statutory Wage Protection System (WPS).
                  </p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700">
                    <div><strong>Net Wages:</strong> 2,200 – 4,000 AED (₹50,000 – ₹92,000 INR)</div>
                    <div><strong>Processing Time:</strong> 15 – 25 Days</div>
                    <div><strong>Perks:</strong> Free Residence, Medical Cover &amp; Annual Leaves</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/countries/uae"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-800"
                  >
                    Explore UAE Program <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Corridor 5: Qatar & Kuwait */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      Gulf GCC 🇶🇦 🇰🇼
                    </span>
                    <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                      Turnaround Hiring
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-display font-bold text-slate-900">
                    Qatar QVC &amp; Kuwait Oil &amp; Gas Shutdown
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Energy infrastructure hiring for QatarEnergy, Ras Laffan, and KNPC refineries. 6G welders, riggers, safety attendants, and pipefitters with fast-track biometrics at Delhi QVC.
                  </p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700">
                    <div><strong>Net Wages:</strong> 2,000 – 3,800 QAR / 160 – 280 KWD</div>
                    <div><strong>Processing Time:</strong> 20 – 30 Days</div>
                    <div><strong>Perks:</strong> High Overtime Multipliers (1.5x) &amp; Free Mess</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/countries/qatar"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800"
                  >
                    Explore Qatar Program <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Corridor 6: Oman & Bahrain */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Gulf GCC 🇴🇲 🇧🇭
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                      High Currency Value
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-display font-bold text-slate-900">
                    Oman Duqm &amp; Bahrain Bapco Modernization
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    High-saving opportunities in OMR and BHD (1 OMR/BHD ≈ ₹220+ INR). Ministry of Labour and LMRA work permits for refinery maintenance, heavy transport, and aluminum smelters.
                  </p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700">
                    <div><strong>Net Wages:</strong> 180 – 350 OMR/BHD (₹40,000 – ₹78,000 INR)</div>
                    <div><strong>Processing Time:</strong> 20 – 30 Days</div>
                    <div><strong>Perks:</strong> 100% Tax-Free, Free Lodging &amp; Duty Mess</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/blogs/oman-bahrain-work-visa-guide-2026-mol-lmra-jobs-wafid-salaries"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    Read Oman &amp; Bahrain Guide <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 4: IN-DEMAND TRADES & 2026 SALARY BENCHMARKS                 */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Compensation &amp; Occupations
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Top In-Demand Overseas Job Roles for Delhi Candidates
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Explore real net monthly take-home salaries verified under statutory labor agreements, complete with free housing, medical insurance, and overtime benefits:
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                  <thead className="bg-slate-900 text-xs font-bold uppercase tracking-wider text-white">
                    <tr>
                      <th className="px-5 py-4">Job Role / Designation</th>
                      <th className="px-5 py-4">Required Technical Credentials</th>
                      <th className="px-5 py-4">Target Corridors</th>
                      <th className="px-5 py-4">Monthly Net Salary (INR)</th>
                      <th className="px-5 py-4">Standard Inclusions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        6G / TIG / Argon Pipe Welder
                      </td>
                      <td className="px-5 py-4 text-xs">CSWIP / AWS / Radiographic X-Ray clearance</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Poland, Saudi Arabia, UAE</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹75,000 – ₹1,35,000</td>
                      <td className="px-5 py-4 text-xs">Free housing, safety gear, overtime @ 1.5x</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        Heavy Trailer &amp; Transit Mixer Driver
                      </td>
                      <td className="px-5 py-4 text-xs">Valid GCC License or Indian Commercial HMV</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Dubai, Saudi Arabia, Poland</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹60,000 – ₹1,20,000</td>
                      <td className="px-5 py-4 text-xs">Trip allowances, company vehicle, medical</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        Industrial Electrician &amp; Wireman
                      </td>
                      <td className="px-5 py-4 text-xs">ITI Electrical / SLD schematic reading / 3-phase DB</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Croatia, UAE, Qatar, Oman</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹52,000 – ₹98,000</td>
                      <td className="px-5 py-4 text-xs">Duty site transport, tools provided, health card</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        CNC Machine Operator &amp; Programmer
                      </td>
                      <td className="px-5 py-4 text-xs">Fanuc/Siemens G-code, 3-axis milling/turning</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Poland, Germany, Romania</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹82,000 – ₹1,45,000</td>
                      <td className="px-5 py-4 text-xs">Shift bonuses, European residence permit</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        HVAC &amp; Chiller Maintenance Tech
                      </td>
                      <td className="px-5 py-4 text-xs">AHU/FCU servicing, duct fabrication, VRF systems</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Dubai, Saudi Arabia, Bahrain</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹55,000 – ₹88,000</td>
                      <td className="px-5 py-4 text-xs">Free AC accommodation, uniforms, overtime</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        Warehouse Order Picker &amp; Forklift
                      </td>
                      <td className="px-5 py-4 text-xs">High-reach reach truck license / barcode scanning</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Poland, Romania, UAE</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹65,000 – ₹1,05,000</td>
                      <td className="px-5 py-4 text-xs">Climate-controlled logistics parks, meal subsidy</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        Hotel Housekeeper, Waiter &amp; Chef
                      </td>
                      <td className="px-5 py-4 text-xs">Basic conversational English / Hotel experience</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Dubai, Qatar, Croatia</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹45,000 – ₹85,000</td>
                      <td className="px-5 py-4 text-xs">Duty meals, tips share, free lodging</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        Civil Mason, Tile Fixer &amp; Plasterer
                      </td>
                      <td className="px-5 py-4 text-xs">Laser-level floor tiling, block laying, rendering</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Saudi Arabia, UAE, Croatia</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹42,000 – ₹78,000</td>
                      <td className="px-5 py-4 text-xs">Free furnished camp, cooking gas, medical</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span>*Salaries calculated based on 2026 exchange rates (1 EUR ≈ ₹91, 1 SAR/AED ≈ ₹23, 1 OMR ≈ ₹220).</span>
              <Link href="/jobs" className="font-bold text-emerald-700 hover:underline">
                Explore All 500+ Live Vacancies &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 5: 6-STAGE DEPLOYMENT PIPELINE                               */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                End-to-End Operational Process
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                How Candidates from Delhi Apply for Overseas Jobs
              </h2>
              <p className="mt-3 text-base text-slate-600">
                A legally compliant, step-by-step roadmap from initial resume evaluation to international flight departure:
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Step 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold text-sm">
                  01
                </div>
                <h3 className="text-base font-display font-bold text-slate-900">
                  Profile Audit &amp; Technical Interview
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Submit your resume, trade certificates, and passport. Undergo practical evaluation at our recognized technical workshops across Delhi NCR or attend direct client interview drives.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold text-sm">
                  02
                </div>
                <h3 className="text-base font-display font-bold text-slate-900">
                  In-Country Labor Permit Issuance
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sponsoring employer lodges your file with national labor authorities: Polish Voivodeship, Croatian MUP, Romanian IGI, or Saudi Qiwa digital contracts with guaranteed basic wages.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold text-sm">
                  03
                </div>
                <h3 className="text-base font-display font-bold text-slate-900">
                  Wafid Medical &amp; MEA Police Clearance
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Complete your GAMCA / Wafid medical examination at authorized clinics in Delhi. Obtain your Police Clearance Certificate (PCC) from Passport Seva Kendra with Patiala House Apostille.
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold text-sm">
                  04
                </div>
                <h3 className="text-base font-display font-bold text-slate-900">
                  VFS Shivaji Stadium Biometrics &amp; Stamping
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We schedule your biometric appointment at VFS Global Shivaji Stadium, Connaught Place. Consular review is completed by the respective embassy in Chanakyapuri.
                </p>
              </div>

              {/* Step 5 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold text-sm">
                  05
                </div>
                <h3 className="text-base font-display font-bold text-slate-900">
                  eMigrate POE Approval &amp; Flight Booking
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For ECR passport holders, we secure mandatory Emigration Clearance from the Protector of Emigrants (POE) backed by Pravasi Bharatiya Bima Yojana (PBBY) insurance.
                </p>
              </div>

              {/* Step 6 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold text-sm">
                  06
                </div>
                <h3 className="text-base font-display font-bold text-slate-900">
                  Airport Departure &amp; European/Gulf Landing
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Departure from Indira Gandhi International Airport (DEL Terminal 3). Sponsoring employer provides airport reception, furnished bachelor accommodation, and local resident card issuance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 6: REQUIRED DOCUMENTS CHECKLIST                              */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Consular Compliance
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Essential Documents Required for Visa Processing
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Ensure you have the following credentials assembled before submitting your application file:
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaPassport className="text-emerald-600" />
                  <span>Valid National Passport</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Original passport valid for at least 12 to 18 months beyond intended departure date, with at least 3 blank visa pages.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaShieldHalved className="text-emerald-600" />
                  <span>Passport Seva Kendra PCC</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fresh Police Clearance Certificate issued by Regional Passport Office (RPO Delhi / Bhikaji Cama Place) with MEA Apostille.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaHospital className="text-emerald-600" />
                  <span>Wafid / Medical Fitness Slip</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  GCC Health Council approved diagnostic report (Chest X-ray for TB, Blood serology, Vital checks) with QR code validation.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaAward className="text-emerald-600" />
                  <span>Attested Trade / Academic Papers</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ITI diploma, trade test scorecards, or educational marksheets authenticated by State HRD and MEA Patiala House.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaIdCard className="text-emerald-600" />
                  <span>Commercial Driving License</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Original Indian Heavy Commercial Vehicle (HMV) license or prior GCC driving license (for trailer, bus, and truck candidates).
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FaBriefcase className="text-emerald-600" />
                  <span>Biometric Passport Photographs</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  8 recent color photographs (35mm x 45mm, white background, 80% face coverage, matte finish, neutral expression).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 7: TRANSIT & CONNECTIVITY ACROSS DELHI                      */}
        {/* ==================================================================== */}
        <section className="bg-slate-900 py-16 sm:py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Transit &amp; Accessibility
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-white">
                Transit Directions to WorkWise Visa from Across Delhi
              </h2>
              <p className="mt-3 text-base text-slate-300">
                Candidates can easily reach our corporate office in Sector 132 or attend technical trade evaluations from all parts of Delhi:
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-800/80 p-6 shadow-2xs space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <FaTrainSubway className="text-emerald-400" />
                  <span>Delhi Metro Magenta Line</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Board the Magenta Line from Janakpuri West, Hauz Khas, or Kalkaji Mandir to Botanical Garden. Interchange to the Aqua Line or take a quick 12-minute taxi down the expressway.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-800/80 p-6 shadow-2xs space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <FaRoute className="text-emerald-400" />
                  <span>DND Flyway &amp; Kalindi Kunj Expressway</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Just 15 to 20 minutes from South Delhi (Sarita Vihar, Okhla, Ashram, Lajpat Nagar) via signal-free expressway directly to Sector 132.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-800/80 p-6 shadow-2xs space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <FaPlaneDeparture className="text-emerald-400" />
                  <span>Railway &amp; Airport Hubs</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Convenient 35-minute connect from New Delhi Railway Station (NDLS), Hazrat Nizamuddin (NZM), Anand Vihar (ANVT), and IGI Airport Terminal 3.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 8: AUTHENTIC TESTIMONIALS FROM DELHI CANDIDATES             */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Verified Candidate Stories
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Real Reviews from Delhi Candidates Placed Abroad
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-4 shadow-2xs">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;Main Okhla me welder tha aur bohot saal se Gulf try kar raha tha. Delhi me bohot agents ne paise maange par visa nahi diya. WorkWise Visa se baat ki, inhone trade test karwaya aur 24 din ke andar Dubai ka MOHRE employment visa stamped passport ke sath mil gaya. Company ne free room aur mess diya hai.&rdquo;
                </p>
                <div className="border-t border-slate-200 pt-3">
                  <div className="font-bold text-slate-900 text-sm">Mohammad Irfan</div>
                  <div className="text-xs text-slate-500">Okhla, New Delhi • Placed in Dubai (3,200 AED/mo)</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-4 shadow-2xs">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;Laxmi Nagar se metro leke office gaya tha. Poland ke Voivodeship work permit ke liye apply kiya. VFS Delhi appointment aur MEA Apostille ka pura paperwork inke team ne sambhala. Aaj Warsaw ke logistics park me kaam kar raha hu aur har mahine ₹1.10 Lakh bhej raha hu. 100% genuine consultancy.&rdquo;
                </p>
                <div className="border-t border-slate-200 pt-3">
                  <div className="font-bold text-slate-900 text-sm">Rahul Verma</div>
                  <div className="text-xs text-slate-500">Laxmi Nagar, East Delhi • Placed in Poland (€1,250/mo)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 9: ANTI-FRAUD ADVISORY                                      */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-amber-200 bg-amber-50/70 p-8 sm:p-10 space-y-6">
              <div className="flex items-center gap-3">
                <FaTriangleExclamation className="text-2xl text-amber-600" />
                <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                  Anti-Fraud Advisory for Overseas Job Seekers in Delhi
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                The Delhi NCR region has seen an influx of unregistered intermediaries and fraudulent &ldquo;agents&rdquo; who deceive candidates with forged offer letters. Protect your financial security by remembering:
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <FaCheck className="text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Never Pay for Tourist Visas for Work:</strong> European and Gulf labor laws strictly forbid working on short-stay tourist visas. Legitimate employment visas must be issued before departure.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <FaCheck className="text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Verify Company Identifiers:</strong> Always insist on official registration numbers (REGON/NIP in Poland, Qiwa Contract in Saudi, MOHRE Offer in UAE, CR in Bahrain/Oman).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <FaCheck className="text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Insist on eMigrate POE Clearance:</strong> ECR passport holders must only travel with verified Emigration Clearance approved by the Ministry of External Affairs.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <FaCheck className="text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Transparent Fee Schedules:</strong> WorkWise Visa operates with milestone-based payment agreements with zero hidden administrative charges.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 10: FULL CONSULTATION BOOKING FORM (HOMEPAGE 2-COL STYLE)    */}
        {/* ==================================================================== */}
        <ConsultationForm />

        {/* ==================================================================== */}
        {/* SECTION 11: EXHAUSTIVE FAQS (20 DETAILED TECHNICAL QUESTIONS)        */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Frequently Asked Questions
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Everything Candidates in Delhi Need to Know About Overseas Work Visas
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Authoritative guidance on European national work permits, GCC employment visas, MEA Apostille attestation, and embassy processing workflows:
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {delhiFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 bg-slate-50/60 p-6 shadow-2xs hover:border-emerald-300 transition-colors"
                >
                  <h3 className="text-base font-bold text-slate-900">
                    {faq.q}
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
        {/* SECTION 12: RELATED GUIDES & NEIGHBORING HUBS                        */}
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
                <Link href="/locations/bhagalpur" className="hover:text-emerald-700 font-bold text-emerald-800">
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
