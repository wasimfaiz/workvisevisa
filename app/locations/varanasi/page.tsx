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
// SEO METADATA — STRICT CHARACTER LIMITS & TARGETED VARANASI KEYWORDS
// ============================================================================
export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Work Visa Consultancy in Varanasi | Overseas Jobs & Recruitment",
  description:
    "Top overseas job consultancy in Varanasi, Purvanchal. Verified Europe & Gulf work permits for locomotive machinists, 6G welders, heavy drivers, MEP & trade artisans.",
  keywords: [
    "work visa consultancy in varanasi",
    "visa consultancy in varanasi",
    "overseas recruitment agency varanasi",
    "gulf job consultancy in varanasi",
    "europe work visa consultant varanasi",
    "best immigration consultant varanasi",
    "dubai work visa agent in varanasi",
    "saudi arabia visa processing varanasi",
    "ramnagar industrial area job agency abroad",
    "dlw blw varanasi machinist jobs europe",
    "6g welder gulf vacancy varanasi",
    "heavy trailer driver jobs abroad varanasi",
    "purvanchal overseas placement agency",
    "takamol trade test center varanasi",
    "wafid gamca medical center varanasi",
    "mea apostille attestation varanasi",
  ],
  alternates: {
    canonical: `${BASE_URL}/locations/varanasi`,
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
    title: "Work Visa Consultancy in Varanasi | Overseas Jobs & Recruitment",
    description:
      "Top overseas job consultancy in Varanasi, Purvanchal. Verified Europe & Gulf work permits for locomotive machinists, 6G welders, heavy drivers, MEP & trade artisans.",
    url: `${BASE_URL}/locations/varanasi`,
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/workwise_logo.png`,
        width: 1200,
        height: 630,
        alt: "Work Visa Consultancy in Varanasi - WorkWise Visa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Visa Consultancy in Varanasi | WorkWise Visa",
    description:
      "Premier work visa consultancy & overseas recruitment agency serving Varanasi and Purvanchal. Verified Gulf & Europe work permits.",
    images: [`${BASE_URL}/images/workwise_logo.png`],
  },
};

// ============================================================================
// EXHAUSTIVE FAQS LIST — LOCALIZED FOR VARANASI & PURVANCHAL CANDIDATES
// ============================================================================
const varanasiFaqs = [
  {
    q: "1. How does WorkWise Visa assist job seekers and technical trade workers in Varanasi?",
    a: "WorkWise Visa connects skilled railway locomotive technicians, heavy mechanical fitters, CNC machinists, 6G pipe welders, commercial trailer drivers, and construction artisans across Varanasi and Purvanchal with authenticated employer-sponsored job quotas in Europe (Poland, Croatia, Romania, Germany) and the Gulf (Saudi Arabia, UAE, Qatar, Oman, Kuwait). We manage end-to-end recruitment: technical skill assessment, client interview delegations, Qiwa/MOHRE digital contracts, Wafid GAMCA medical appointments, Takamol SVP test scheduling, MEA Apostille at Patiala House, VFS biometrics, and flight deployment.",
  },
  {
    q: "2. Where can candidates from Varanasi visit the WorkWise Visa branch office in person?",
    a: "Candidates from Varanasi have convenient access to our physical Regional Branch Office located at Varma Centre, Boring Road Crossing, Patna (just 2.5 to 3 hours via the Patna-Varanasi Vande Bharat Express or NH-19). Additionally, candidates can visit our Corporate Regional Headquarters at Urbtech Trade Centre, Sector 132, Noida for central consular processing, embassy stamping, and trade benchmarking.",
  },
  {
    q: "3. What is the fastest rail and road connectivity from Varanasi to the WorkWise Visa branches?",
    a: "To visit our Patna Regional Branch, board the direct Vande Bharat Express, Jan Shatabdi, or Buxar-Patna intercity trains from Varanasi Junction (BSB) or Pt. Deen Dayal Upadhyaya Junction (DDU), reaching Patna Junction in under 3 hours. By road, NH-19 provides a smooth 4-lane highway connect via Mohania and Arrah. To visit our Noida HQ, direct express trains (Shiv Ganga, Vande Bharat) take 8 hours to New Delhi, followed by a quick 25-minute metro transit.",
  },
  {
    q: "4. Are there specialized European work visa opportunities for mechanical and locomotive fitters from Varanasi?",
    a: "Yes. Varanasi's renowned Banaras Locomotive Works (BLW / DLW) and Ramnagar Industrial Area have fostered a massive talent pool of diesel engine mechanics, wheel lathe operators, heavy transmission assemblers, and precision fitters. European industrial machinery manufacturers in Poland, Croatia, and Romania recruit these artisans with monthly take-home salaries from €950 to €1,600+ (approx. ₹90,000 to ₹1,50,000 INR) with free employer-provided accommodation and medical cover.",
  },
  {
    q: "5. Can heavy commercial vehicle (HTV) drivers from the Mughal Sarai / DDU transport hub apply for Gulf trailer driving jobs?",
    a: "Yes. Located adjacent to Asia's largest railway marshalling yard and the NH-19 freight corridor, Varanasi has thousands of seasoned Heavy Transport Vehicle (HTV/HMV) drivers with extensive experience handling multi-axle trailers, cement tankers, and container fleets. WorkWise Visa places verified drivers in Dubai, Saudi Arabia, and Qatar logistics companies with tax-free monthly packages ranging from 3,500 to 5,200 SAR/AED (₹80,000 to ₹1,18,000 INR).",
  },
  {
    q: "6. What are the active Saudi Arabia NEOM and Vision 2030 megaproject vacancies for Purvanchal tradesmen?",
    a: "We have ongoing client recruitment drives for Saudi Arabia's $500B NEOM megaproject (The Line, Oxagon port, Trojena winter resort), Riyadh Metro extensions, and Jubail petrochemical shutdowns. High-demand roles include 6G TIG/SMAW pipe welders, structural steel erectors, heavy excavator operators, industrial electricians, and HSE safety officers, with salaries from SAR 3,000 to 7,500+ (₹68,000 to ₹1,70,000+ INR) plus free NCV village camp accommodation and meals.",
  },
  {
    q: "7. How do candidates in Varanasi verify their Saudi Arabia Qiwa contract and Takamol SVP test?",
    a: "Saudi employment is strictly regulated by the Ministry of Human Resources and Social Development (MHRSD). Before visa stamping, skilled technical workers must pass the Takamol Skill Verification Program (SVP) computer theory and practical bench exam at accredited test centers in Patna or Delhi NCR. Once cleared, the sponsoring EPC contractor issues an authenticated digital contract on the Qiwa platform (qiwa.sa), which the candidate approves via mobile OTP. WorkWise Visa provides complete Takamol bench coaching and Qiwa verification.",
  },
  {
    q: "8. Where can candidates from Varanasi take their Wafid (GAMCA) medical examination?",
    a: "Wafid pre-departure medical screening slips are generated online via wafid.com, which automatically assigns an accredited GCC diagnostic hospital in Varanasi (such as authorized diagnostic centers in Sigra or Maldahiya) or nearby Patna / Lucknow. We assist candidates in generating verified slips and advise on physical and serology fitness guidelines.",
  },
  {
    q: "9. How can Varanasi candidates get their educational certificates and PCC apostilled by the MEA?",
    a: "For European work visas (Poland, Croatia, Romania, Germany), original educational degrees/diplomas and the Police Clearance Certificate (PCC) issued by the Passport Seva Kendra (PSK) at Varanasi or Gorakhpur must receive a Hague Apostille from the Ministry of External Affairs (MEA) CPV Division at Patiala House Courts, New Delhi. WorkWise Visa manages the complete document authentication, State HRD attestation, and Patiala House submission.",
  },
  {
    q: "10. Where is the VFS Global submission center for Varanasi candidates applying for Europe visas?",
    a: "Candidates applying for European National Type-D visas can attend biometrics at the joint VFS Global Visa Application Centre in Lucknow or the central VFS Global Hub at Shivaji Stadium Metro Station, Connaught Place, New Delhi. Our operations team prepares your complete visa file and accompanies you for biometric scheduling.",
  },
  {
    q: "11. Are there overseas job opportunities for textile, weaving, and garment artisans from Varanasi?",
    a: "Yes. Varanasi's world-famous weaving traditions have produced master weavers, jacquard loom operators, and fabric tailors. Textile and apparel manufacturing plants in Poland, Romania, and Portugal actively recruit industrial sewing machine operators, garment stitchers, and fabric quality controllers with monthly wages between €800 and €1,200 with free hostel accommodation.",
  },
  {
    q: "12. What documents are required for initial candidate registration at WorkWise Visa?",
    a: "To register, candidates need: (1) Original passport with minimum 18 months validity; (2) Updated resume detailing trade experience; (3) Academic & technical certificates (10th/12th, ITI, Polytechnic Diploma, or B.Tech); (4) Previous employer experience letters; (5) Passport-size white background photographs; and (6) Driving license (for driving positions) or trade test certifications.",
  },
  {
    q: "13. Does WorkWise Visa charge any advance registration or interview fee in Varanasi?",
    a: "No. Initial profile assessment, technical resume shortlisting, and employer vacancy matching are 100% free of charge. Transparent service charges apply only after you are officially selected by the client, receive your verifiable sovereign work permit or offer letter, and sign a milestone-based legal recruitment agreement.",
  },
  {
    q: "14. How do ECR passport holders from Purvanchal obtain POE Emigration Clearance?",
    a: "Candidates with ECR (Emigration Check Required) passports deployed to 18 notified Gulf countries must obtain statutory Emigration Clearance from the Protector of Emigrants (POE) under the Ministry of External Affairs. WorkWise Visa processes online clearance via the official eMigrate portal (emigrate.gov.in) with mandatory Pravasi Bharatiya Bima Yojana (PBBY) insurance covering ₹10 Lakh in benefits.",
  },
  {
    q: "15. What accommodation and welfare facilities are guaranteed in Gulf and European employment contracts?",
    a: "Under sovereign labor laws (Saudi MHRSD, UAE MOHRE, and European Labor Codes), sponsoring employers are legally required to provide furnished bachelor accommodations with air-conditioning/heating, personal lockers, laundry facilities, high-speed Wi-Fi, clean drinking water, daily site transport, and comprehensive health insurance. In megaprojects like NEOM, workers reside in luxury Construction Villages (NCV) with catered Indian mess halls.",
  },
  {
    q: "16. Can candidates in Varanasi track their visa application status online?",
    a: "Yes. Every registered candidate receives a unique Application Tracking ID to monitor their progress 24/7 across every stage—from trade interview selection to work permit generation, medical clearance, embassy stamping, and flight dispatch—via our digital portal at workwisevisa.com/track.",
  },
  {
    q: "17. What is a Temporary Residence Card (TRC / Karta Pobytu) for workers deployed to Europe?",
    a: "A TRC (such as Karta Pobytu in Poland, Boravišna iskaznica in Croatia, or Permis de Ședere in Romania) is the legal resident card issued by provincial authorities after you land in Europe on a Type-D work visa. It grants 1 to 3 years of legal residency, unrestricted work rights with your employer, access to national healthcare, and visa-free travel across all 29 Schengen member states.",
  },
  {
    q: "18. How can ITI and Polytechnic diploma holders from Varanasi institutions apply for skilled technical visas?",
    a: "Graduates from Government ITI Karaundi (Varanasi), Government Polytechnic Chandauli, or engineering colleges in Purvanchal can apply for specialized Junior Engineer, QA/QC Inspector, MEP Supervisor, and CNC programmer roles in Europe and the Gulf. We assist with certificate verification, translation, and employer client matching.",
  },
  {
    q: "19. How does WorkWise Visa protect candidates from overseas job fraud in Varanasi and adjoining districts?",
    a: "Purvanchal districts like Jaunpur, Azamgarh, Ghazipur, and Chandauli have suffered rampant exploitation by unregistered local agents operating near Cantt railway station or bus stands. WorkWise Visa operates with zero fraud tolerance: all vacancies are backed by verifiable sovereign labor approvals (Qiwa, MOHRE, Voivodeship), digital embassy tracking, and formal milestone-linked contracts.",
  },
  {
    q: "20. How do I book an appointment or visit the WorkWise Visa office from Varanasi?",
    a: "You can book an immediate appointment by calling +91 81301 61603, messaging us on WhatsApp, or submitting the consultation form on this page. Our counselors will provide exact travel options to our Patna Regional Branch or Sector 132 Noida HQ, pre-screen your CV, and schedule you for active client recruitment drives.",
  },
];

// ============================================================================
// STRUCTURED DATA (JSON-LD SCHEMA GRAPH) — RICH LOCAL BUSINESS & FAQ SCHEMAS
// ============================================================================
const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EmploymentAgency",
      "@id": "https://www.workwisevisa.com/locations/varanasi#agency",
      name: "WorkWise Visa - Overseas Recruitment & Work Visa Consultancy (Varanasi Desk)",
      image: "https://www.workwisevisa.com/images/workwise_logo.png",
      url: "https://www.workwisevisa.com/locations/varanasi",
      telephone: "+918130161603",
      email: "workwisevisa@gmail.com",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Regional Facilitation Desk serving Varanasi & Purvanchal (Connected to Patna Branch & Noida HQ)",
        addressLocality: "Varanasi Placement Desk",
        addressRegion: "Uttar Pradesh",
        postalCode: "221002",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.3176,
        longitude: 82.9739,
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
        { "@type": "City", name: "Varanasi" },
        { "@type": "AdministrativeArea", name: "Ramnagar Industrial Area" },
        { "@type": "AdministrativeArea", name: "Karkhiyaon Industrial Area" },
        { "@type": "AdministrativeArea", name: "DLW BLW Locomotive Belt" },
        { "@type": "AdministrativeArea", name: "Mughal Sarai DDU" },
        { "@type": "AdministrativeArea", name: "Chandauli" },
        { "@type": "AdministrativeArea", name: "Jaunpur" },
        { "@type": "AdministrativeArea", name: "Ghazipur" },
        { "@type": "AdministrativeArea", name: "Mirzapur" },
        { "@type": "AdministrativeArea", name: "Purvanchal" },
        { "@type": "State", name: "Uttar Pradesh" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.workwisevisa.com/locations/varanasi#breadcrumb",
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
          name: "Varanasi",
          item: "https://www.workwisevisa.com/locations/varanasi",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.workwisevisa.com/locations/varanasi#faq",
      mainEntity: varanasiFaqs.map((faq) => ({
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

export default function VaranasiLocationPage() {
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
              <span className="font-semibold text-emerald-400">Varanasi</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Semantic Headline & Value Proposition */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  <FaShieldHalved className="text-emerald-400" />
                  Purvanchal Industrial &amp; Trade Hub • Dedicated Candidate Placement Desk
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                  Work Visa &amp; Overseas Employment Consultancy in{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    Varanasi
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                  WorkWise Visa connects skilled locomotive machinists, heavy mechanical fitters, 6G pipe welders, commercial trailer drivers, and technical artisans across Varanasi and Purvanchal with verified employer-sponsored jobs in Europe (Poland, Croatia, Romania, Germany) and the Gulf (Saudi Arabia, UAE, Qatar, Oman, Kuwait). Backed by our Regional Branch in Patna and Corporate Headquarters in Noida, we deliver 100% scam-free processing, authentic Qiwa digital contracts, Wafid GAMCA medical clearance, and MEA Patiala House Apostille support.
                </p>

                {/* Key Legal Trust Metrics */}
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-6 sm:grid-cols-4">
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">Purvanchal Hub</div>
                    <div className="text-xs text-slate-400">Connected to Patna &amp; Noida</div>
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
                        Varanasi Candidate Desk
                      </span>
                      <h2 className="text-lg font-display font-bold text-white">
                        Varanasi &amp; Purvanchal Placement Hub
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
                        <strong className="text-white">Regional Facilitation:</strong>{" "}
                        Fast 2.5-hour rail transit to Patna Branch Office &amp; direct central consular connect to Noida HQ.
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
                        €900 – €1,750 (Europe) | SAR/AED 2,800 – 8,500+ (Gulf) with free bachelor accommodation &amp; medical.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-slate-300">
                      <FaCircleCheck className="mt-0.5 text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white">Deployment Timelines:</strong>{" "}
                        20 – 35 Days for GCC visas; 8 to 14 Weeks for European Type-D single permits.
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-700 pt-5">
                    <a
                      href="#consultation"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all hover:from-emerald-500 hover:to-teal-500 hover:shadow-emerald-600/40 hover:scale-[1.01]"
                    >
                      Book Free Profile Evaluation in Varanasi
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
        {/* SECTION 2: EXECUTIVE OVERVIEW & VARANASI INDUSTRIAL IDENTITY         */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Purvanchal Industrial Backbone &amp; Technical Talent
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Why Varanasi is Eastern UP&apos;s Foremost Talent Corridor for Overseas Heavy Engineering &amp; Logistics
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 text-base leading-relaxed text-slate-600 lg:grid-cols-2">
              <div className="space-y-5">
                <p>
                  As the cultural and commercial capital of Purvanchal, <strong>Varanasi</strong> possesses an exceptional legacy of precision manufacturing, railway mechanical engineering, and industrial craftsmanship. Home to the legendary <strong>Banaras Locomotive Works (BLW / DLW)</strong>, the city has nurtured tens of thousands of master diesel engine mechanics, wheel lathe operators, heavy transmission assemblers, and precision fitters capable of working to exacting micron tolerances.
                </p>
                <p>
                  Across the bustling industrial clusters of <strong>Ramnagar Industrial Area, Karkhiyaon Agro-Industrial Hub, and Shivpur</strong>, local artisans command expertise in high-pressure 6G pipe welding, structural steel fabrication, electrical transformer winding, and commercial transport. However, local industrial compensation often plateaus between ₹15,000 and ₹26,000 per month. WorkWise Visa bridges this earning gap by connecting Varanasi artisans directly with European manufacturing plants in <strong>Poland, Croatia, and Romania</strong> and Tier-1 EPC contractors building <strong>Saudi Arabia&apos;s $500B NEOM megaproject</strong>, offering take-home salaries three to five times higher along with legal residency and family security.
                </p>
              </div>

              <div className="space-y-5">
                <p>
                  Varanasi candidates benefit from strategic two-way institutional support. For local documentation vetting and in-person interviews, our <strong>Patna Regional Branch (Varma Centre, Boring Road)</strong> is just 2.5 to 3 hours away via the Vande Bharat Express or NH-19. Meanwhile, our <strong>Corporate Regional Headquarters in Sector 132, Noida</strong> manages direct coordination with foreign embassies in Chanakyapuri, VFS Global biometrics at Shivaji Stadium, and MEA Apostille attestation at Patiala House.
                </p>
                <p>
                  We vigorously protect candidates across <strong>Varanasi, Chandauli, Jaunpur, Ghazipur, and Mirzapur</strong> against local unregulated sub-agents operating around Cantt railway station or DLW who deceive youth with fake tourist visas. Every job opening managed by WorkWise Visa is backed by verified sovereign documentation—including <strong>Saudi Qiwa digital contracts</strong>, <strong>UAE MOHRE work permits</strong>, and <strong>European Voivodeship Type-A authorizations</strong>—backed by formal milestone agreements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 3: VERIFIED WORK VISA CORRIDORS                              */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Official Placement Corridors
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Verified Global Corridors for Candidates in Varanasi
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
                      Schengen Europe • Poland
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                      High Demand
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-display font-bold text-slate-900">
                    Poland Voivodeship Type A Work Permit
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Statutory multi-year work authorizations for CNC machinists, heavy diesel fitters, structural steel fabricators, and commercial trailer drivers. Includes state health insurance, 40-hour workweeks, and Karta Pobytu residency pathways.
                  </p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700">
                    <div><strong>Net Wages:</strong> 4,000 – 7,500 PLN (₹84,000 – ₹1,55,000 INR)</div>
                    <div><strong>Processing Time:</strong> 10 – 14 Weeks</div>
                    <div><strong>Perks:</strong> Free Accommodation, Overtime &amp; Schengen Mobility</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/blogs/europe-work-visa-for-indian-workers-poland-croatia-romania-guide-2026"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    Read Poland &amp; Europe Guide <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Corridor 2: Croatia & Romania */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                      European Union • Balkans
                    </span>
                    <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-800">
                      Fast Track
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-display font-bold text-slate-900">
                    Croatia MUP &amp; Romania IGI Single Permits
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Direct government-authorized work quotas for 6G pipe welders, industrial maintenance mechanics, automotive assembly technicians, and warehouse logistics handlers across Zagreb, Split, Bucharest, and Timișoara.
                  </p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700">
                    <div><strong>Net Wages:</strong> €850 – €1,450 (₹80,000 – ₹1,35,000 INR)</div>
                    <div><strong>Processing Time:</strong> 8 – 12 Weeks</div>
                    <div><strong>Perks:</strong> Subsidized Meals, Flight Ticket &amp; Medical Cover</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/blogs/europe-work-visa-for-indian-workers-poland-croatia-romania-guide-2026"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800"
                  >
                    Explore Croatia &amp; Romania <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Corridor 3: Saudi Arabia & NEOM */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      Gulf GCC • Saudi Arabia
                    </span>
                    <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                      Megaprojects
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-display font-bold text-slate-900">
                    Saudi NEOM, The Line &amp; Vision 2030
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Direct Tier-1 EPC recruitment for heavy hydraulic equipment operators, pipe fabricators, electrical panel wiremen, and QA/QC technicians. Authentic digital contracts issued on the sovereign Qiwa portal.
                  </p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700">
                    <div><strong>Tax-Free Wages:</strong> 3,200 – 7,500 SAR (₹72,000 – ₹1,70,000 INR)</div>
                    <div><strong>Processing Time:</strong> 20 – 35 Days</div>
                    <div><strong>Perks:</strong> Free NCV Camp Housing, 3 Meals &amp; Annual Flights</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/blogs/neom-project-latest-updates-mega-recruitment-2026-jobs-salary-qiwa-epc"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800"
                  >
                    Explore NEOM Program <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Corridor 4: UAE (Dubai & Abu Dhabi) */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Gulf GCC • UAE
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                      Rapid Deployment
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-display font-bold text-slate-900">
                    Dubai MOHRE 2-Year Employment Visas
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Direct hiring across Dubai, Sharjah, and Abu Dhabi for heavy trailer/container drivers, motorcycle delivery couriers, HVAC technicians, and automotive mechanics under statutory Wage Protection System (WPS).
                  </p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700">
                    <div><strong>Net Wages:</strong> 2,400 – 4,800 AED (₹55,000 – ₹1,10,000 INR)</div>
                    <div><strong>Processing Time:</strong> 15 – 25 Days</div>
                    <div><strong>Perks:</strong> Free Accommodation, Medical Card &amp; Air Ticket</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/blogs/gulf-bike-delivery-rider-jobs-2026-dubai-saudi-visa-license-salary-guide"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    Read Gulf Driver &amp; Rider Guide <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Corridor 5: Germany */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                      Western Europe • Germany
                    </span>
                    <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-800">
                      Chancenkarte
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-display font-bold text-slate-900">
                    Germany Opportunity Card &amp; Skilled Trades
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Points-based legal job-seeker visa for qualified Polytechnic diploma holders, CNC programmers, heavy diesel mechanics, and mechanical engineers. Grants full 20-hour weekly secondary work rights during search.
                  </p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700">
                    <div><strong>Salary Potential:</strong> €2,400 – €4,200/mo upon placement</div>
                    <div><strong>Processing Time:</strong> 8 – 14 Weeks</div>
                    <div><strong>Perks:</strong> EU Blue Card &amp; Permanent Settlement</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/blogs/germany-opportunity-card-chancenkarte-eu-blue-card-complete-guide-2026"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800"
                  >
                    Read Germany Chancenkarte Guide <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Corridor 6: Qatar & Kuwait */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      GCC Industrial • Qatar &amp; Kuwait
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                      Turnaround
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-display font-bold text-slate-900">
                    Oil &amp; Gas Shutdowns &amp; Industrial Plant Maintenance
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Short-term turnaround and long-term maintenance contracts for certified 6G pipe welders, heavy riggers, instrument technicians, and millwright fitters at Ras Laffan, Mina Al Ahmadi, and Shuaiba refineries.
                  </p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700">
                    <div><strong>Monthly Earnings:</strong> 2,800 – 6,000 QAR/KWD (₹65,000 – ₹1,65,000 INR)</div>
                    <div><strong>Processing Time:</strong> 25 – 35 Days</div>
                    <div><strong>Perks:</strong> Free Flights, Comprehensive Insurance &amp; Overtime</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/blogs/qatar-kuwait-oil-gas-shutdown-plant-maintenance-work-visa-2026"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    Explore Shutdown Vacancies <FaArrowRight className="w-3 h-3" />
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
                Skills in High Demand
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                In-Demand Trades &amp; 2026 Overseas Salary Benchmarks for Varanasi Candidates
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Compare local Purvanchal workshop wages with verified sovereign overseas packages across Europe and the GCC:
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                  <thead className="bg-slate-900 text-xs uppercase tracking-wider text-white">
                    <tr>
                      <th className="px-5 py-4">Trade / Occupational Role</th>
                      <th className="px-5 py-4">Key Technical Competencies</th>
                      <th className="px-5 py-4">Target Corridors</th>
                      <th className="px-5 py-4">Monthly Net Salary (INR Equiv.)</th>
                      <th className="px-5 py-4">Standard Employer Perks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        Railway Locomotive / Heavy Engine Fitter
                      </td>
                      <td className="px-5 py-4 text-xs">Diesel engine overhaul, hydraulic transmission, valve clearance</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Poland, Germany, Romania</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹90,000 – ₹1,55,000</td>
                      <td className="px-5 py-4 text-xs">Free furnished housing, heating, 40h workweek + paid OT</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        6G TIG &amp; SMAW Pipe Welder
                      </td>
                      <td className="px-5 py-4 text-xs">SS/CS high-pressure pipes, 100% radiographic X-ray clearance</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Saudi NEOM, Qatar, Croatia</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹92,000 – ₹1,65,000</td>
                      <td className="px-5 py-4 text-xs">Free food &amp; AC camp, protective gear, Takamol coaching</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        CNC Wheel Lathe / VMC Operator
                      </td>
                      <td className="px-5 py-4 text-xs">Fanuc/Siemens G-code, tooling offsets, micrometer 5-micron checks</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Poland, Romania, UAE</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹85,000 – ₹1,45,000</td>
                      <td className="px-5 py-4 text-xs">Annual airfare, medical insurance, residency card</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        Heavy Multi-Axle Trailer / Tanker Driver
                      </td>
                      <td className="px-5 py-4 text-xs">Valid Indian HTV/HMV license, 40-foot flatbed, RTA test guidance</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Dubai (UAE), Saudi Arabia, Poland</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹85,000 – ₹1,40,000</td>
                      <td className="px-5 py-4 text-xs">Trip bonuses, visa &amp; license sponsorship, AC housing</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        Substation &amp; Industrial Electrician
                      </td>
                      <td className="px-5 py-4 text-xs">ITI Electrical, circuit schematics, motor rewinding, switchgear</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Saudi Arabia, UAE, Qatar</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹72,000 – ₹1,25,000</td>
                      <td className="px-5 py-4 text-xs">Site transport, subsidized mess, medical cover</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        Jacquard Powerloom / Textile Stitcher
                      </td>
                      <td className="px-5 py-4 text-xs">Industrial sewing machines, fabric inspection, garment assembly</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Poland, Romania, Portugal</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹75,000 – ₹1,15,000</td>
                      <td className="px-5 py-4 text-xs">Clean factory conditions, free hostel, medical cover</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        Mechanical Diploma Site Engineer / QA/QC
                      </td>
                      <td className="px-5 py-4 text-xs">Polytechnic / B.Tech Mechanical, AutoCAD, NDT Level II</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Saudi Arabia (NEOM), Dubai, Germany</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹1,35,000 – ₹2,45,000</td>
                      <td className="px-5 py-4 text-xs">Annual airfare, family status, bonus incentives</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span>*Salaries calculated based on 2026 exchange rates (1 EUR ≈ ₹91, 1 SAR/AED ≈ ₹23, 1 QAR ≈ ₹23).</span>
              <Link href="/jobs" className="font-bold text-emerald-700 hover:underline">
                Explore All 500+ Live Vacancies &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 5: 6-STAGE DEPLOYMENT PIPELINE                               */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                End-to-End Operational Process
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                How Candidates from Varanasi Apply for Overseas Jobs
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
                  Submit your resume, trade certificates, and passport. Undergo practical evaluation at our technical workshops or attend direct client interview drives at our Patna Branch or Noida HQ.
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
                  Complete your GAMCA / Wafid medical examination at authorized clinics in Varanasi or Patna. Obtain your Police Clearance Certificate (PCC) from Passport Seva Kendra with Patiala House Apostille.
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold text-sm">
                  04
                </div>
                <h3 className="text-base font-display font-bold text-slate-900">
                  VFS Biometrics &amp; Consular Stamping
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We schedule your biometric appointment at VFS Global Lucknow or VFS Global Shivaji Stadium, Connaught Place, New Delhi. Consular review is completed by the respective embassy.
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
                  Airport Departure &amp; Camp Check-in
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fly via Varanasi Airport (VNS) or IGI Airport Delhi. Receive company airport pickup at destination, biometric residence registration (Iqama/TRC), and check in to your furnished quarters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 6: REQUIRED DOCUMENTS CHECKLIST                              */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Documentation Readiness
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Mandatory Documentation Checklist for Varanasi Applicants
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Ensure your documents are verified before attending client trade interviews or biometric appointments:
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-4">
                <div className="flex items-center gap-3 text-slate-900 font-bold">
                  <FaPassport className="text-emerald-600 text-xl" />
                  <span>Personal Identity &amp; Trade Dossier</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Original Passport:</strong> Minimum 18 months validity with at least 4 blank visa pages.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Photographs:</strong> 12 passport-size white background matte photos (35mm x 45mm, 80% face).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Educational Certificates:</strong> 10th/12th marksheets, ITI certificates, or Polytechnic Diplomas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Work Experience Letters:</strong> Verifiable service letters from Indian factories, BLW, or prior overseas employers.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-4">
                <div className="flex items-center gap-3 text-slate-900 font-bold">
                  <FaFileCircleCheck className="text-emerald-600 text-xl" />
                  <span>Legal &amp; Medical Clearances</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Police Clearance Certificate (PCC):</strong> Issued by Regional Passport Office (PSK) with MEA Apostille.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Wafid Medical Report:</strong> Computerized GCC FIT slip issued by an accredited diagnostic clinic in Varanasi or Patna.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Takamol SVP Certificate:</strong> Mandatory for skilled trade visa stamping for Saudi Arabia (welder, electrician, etc.).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Indian Driving License (HTV/HMV):</strong> Minimum 3 years commercial driving validity for driver positions.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 7: TRANSIT & CONNECTIVITY ACROSS VARANASI                    */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Effortless Branch Access
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                How Candidates in Varanasi Can Connect with WorkWise Visa
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Varanasi candidates enjoy seamless high-speed rail access to our Patna Regional Branch and direct express connectivity to our Corporate Headquarters in Sector 132, Noida:
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Route 1: Patna Vande Bharat */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold mb-4">
                  <FaTrainSubway className="text-lg" />
                </div>
                <h3 className="text-base font-bold text-slate-900">To Patna Regional Branch</h3>
                <p className="mt-1 text-xs text-emerald-700 font-semibold">2.5 to 3 Hours • Vande Bharat Express</p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  Board the Patna-Varanasi Vande Bharat or Jan Shatabdi from Varanasi Jn (BSB) / DDU directly to Patna Junction. Our branch at Varma Centre, Boring Road is a quick 10-minute auto ride from the station.
                </p>
              </div>

              {/* Route 2: Noida Corporate HQ */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-800 font-bold mb-4">
                  <FaCarSide className="text-lg" />
                </div>
                <h3 className="text-base font-bold text-slate-900">To Noida Corporate HQ</h3>
                <p className="mt-1 text-xs text-teal-700 font-semibold">Express Rail &amp; Highway Corridor</p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  Take overnight express trains (Shiv Ganga, Vande Bharat) to New Delhi, then take the Delhi Metro Magenta Line or taxi directly down the expressway to Urbtech Trade Centre at Sector 132, Noida.
                </p>
              </div>

              {/* Route 3: Highway Road Route */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-bold mb-4">
                  <FaRoute className="text-lg" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Purvanchal Highway Access</h3>
                <p className="mt-1 text-xs text-amber-700 font-semibold">NH-19 &amp; Purvanchal Expressway</p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  Direct AC buses and private cabs run round-the-clock connecting Varanasi to Patna, Lucknow, Gorakhpur, and Delhi NCR, offering convenient access for physical trade testing and interview sessions.
                </p>
              </div>
            </div>

            {/* Office Card Callout */}
            <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-50/80 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Branch Office Access for Varanasi:</span>
                <p className="text-sm font-semibold text-slate-900 mt-1">
                  WorkWise Visa Regional Branch — 3rd Floor, Varma Centre, Boring Road Crossing, Patna, Bihar 800001 (Mon–Sat, 9:30 AM – 6:30 PM).
                </p>
                <p className="text-xs text-slate-600 mt-0.5">Corporate HQ: Urbtech Trade Centre, Sector 132, Noida • Phone: +91 81301 61603</p>
              </div>
              <a
                href="https://maps.google.com/?q=Varma+Centre+Boring+Road+Patna"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 transition-colors shadow-sm"
              >
                <FaLocationDot className="text-xs" /> Open in Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 8: AUTHENTIC TESTIMONIALS FROM VARANASI CANDIDATES           */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Verified Candidate Testimonials
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                What Candidates from Varanasi Say About WorkWise Visa
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Real feedback from locomotive fitters, 6G pipe welders, and transport fleet drivers placed in verified overseas careers:
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-4 shadow-2xs">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;BLW workshop ke paas diesel engine overhaul me 8 saal ka experience tha lekin salary ₹23,000 se upar nahi ja rahi thi. Vande Bharat train se Patna branch jakar Poland Type-D visa ke liye apply kiya. 3 mahine me Voivodeship permit aur visa stamp ho gaya. Aaj Katowice me engine plant me kaam kar raha hoon aur har mahine ₹1,20,000 bhej raha hoon.&rdquo;
                </p>
                <div className="border-t border-slate-200 pt-3">
                  <div className="font-bold text-slate-900 text-sm">Sunil Kumar Yadav</div>
                  <div className="text-xs text-slate-500">DLW / BLW Area, Varanasi • Placed in Poland (€1,350/mo)</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-4 shadow-2xs">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;Ramnagar Industrial Area me 6G TIG welder tha. Cantt par local agents Saudi ke naam par ₹2 lakh mangte the. WorkWise Visa ke through direct client interview diya, Takamol test clear kiya aur transparent Qiwa contract par flight hui. NEOM Construction Village me 5-star jaisi facilities hain aur SAR 3,800 salary time par aati hai.&rdquo;
                </p>
                <div className="border-t border-slate-200 pt-3">
                  <div className="font-bold text-slate-900 text-sm">Dharmendra Bind</div>
                  <div className="text-xs text-slate-500">Ramnagar, Varanasi • Placed at NEOM, Saudi Arabia (3,800 SAR/mo)</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-4 shadow-2xs">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;Mughal Sarai transport nagar me heavy trailer chala raha tha. WorkWise team ne Dubai logistics company me direct heavy driver vacancy dilwayi. RTA driving license test ki puri guidance unke Noida office se mili. Aaj Dubai me 4,800 AED monthly salary regular aati hai.&rdquo;
                </p>
                <div className="border-t border-slate-200 pt-3">
                  <div className="font-bold text-slate-900 text-sm">Anand Tripathi</div>
                  <div className="text-xs text-slate-500">DDU / Mughal Sarai, Varanasi • Placed in Dubai (4,800 AED/mo)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 9: ANTI-FRAUD ADVISORY                                      */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-amber-200 bg-amber-50/70 p-8 sm:p-10 space-y-6">
              <div className="flex items-center gap-3">
                <FaTriangleExclamation className="text-2xl text-amber-600" />
                <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                  Anti-Fraud Advisory for Overseas Job Seekers in Varanasi &amp; Purvanchal
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                Purvanchal districts have seen an influx of unregistered intermediaries operating around Varanasi Cantt, Shivpur, and Jaunpur Road who deceive candidates with forged offer letters. Protect your financial security by remembering:
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
                Everything Candidates in Varanasi Need to Know About Overseas Work Visas
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Authoritative guidance on European national work permits, GCC employment visas, MEA Apostille attestation, and embassy processing workflows:
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {varanasiFaqs.map((faq, index) => (
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
                href="/blogs/neom-project-latest-updates-mega-recruitment-2026-jobs-salary-qiwa-epc"
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-emerald-600">NEOM &amp; Vision 2030</span>
                  <h3 className="font-bold text-slate-900 text-sm mt-1 group-hover:text-emerald-700 transition-colors">
                    NEOM Project Latest Updates &amp; Mega Recruitment Guide 2026/2027
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    The Line, Oxagon port, and Trojena dam jobs, SAR 3,000–8,500+ wages, and Qiwa contracts.
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
                    Voivodeship permits, MUP single permits, VFS appointment scheduling, and Euro salaries.
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
                <Link href="/locations/patna" className="hover:text-emerald-700 font-semibold underline">
                  Patna Regional Branch
                </Link>
                <span>•</span>
                <Link href="/locations/varanasi" className="hover:text-emerald-700 font-bold text-emerald-800">
                  Varanasi Desk
                </Link>
                <span>•</span>
                <Link href="/locations/noida" className="hover:text-emerald-700 font-semibold underline">
                  Noida Corporate HQ
                </Link>
                <span>•</span>
                <Link href="/locations/delhi" className="hover:text-emerald-700 font-semibold underline">
                  Delhi Desk
                </Link>
                <span>•</span>
                <Link href="/locations/faridabad" className="hover:text-emerald-700 font-semibold underline">
                  Faridabad Desk
                </Link>
                <span>•</span>
                <Link href="/locations/ghaziabad" className="hover:text-emerald-700 font-semibold underline">
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
