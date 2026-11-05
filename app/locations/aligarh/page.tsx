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
// SEO METADATA — STRICT CHARACTER LIMITS & TARGETED ALIGARH KEYWORDS
// ============================================================================
export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Work Visa Consultancy in Aligarh | Overseas Jobs & Recruitment",
  description:
    "Top overseas job consultancy in Aligarh, Western UP. Verified Europe & Gulf work permits for die-casting artisans, toolmakers, CNC machinists, welders & drivers.",
  keywords: [
    "work visa consultancy in aligarh",
    "visa consultancy in aligarh",
    "overseas recruitment agency aligarh",
    "gulf job consultancy in aligarh",
    "europe work visa consultant aligarh",
    "best immigration consultant aligarh",
    "dubai work visa agent in aligarh",
    "saudi arabia visa processing aligarh",
    "tala nagri industrial area job agency abroad",
    "die casting machine operator jobs europe",
    "tool and die maker vacancy aligarh abroad",
    "cnc machinist jobs abroad aligarh",
    "yamuna expressway visa consultancy",
    "takamol trade test guidance aligarh",
    "gamca medical appointment center aligarh",
    "mea apostille attestation aligarh",
  ],
  alternates: {
    canonical: `${BASE_URL}/locations/aligarh`,
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
    title: "Work Visa Consultancy in Aligarh | Overseas Jobs & Recruitment",
    description:
      "Top overseas job consultancy in Aligarh, Western UP. Verified Europe & Gulf work permits for die-casting artisans, toolmakers, CNC machinists, welders & drivers.",
    url: `${BASE_URL}/locations/aligarh`,
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/workwise_logo.png`,
        width: 1200,
        height: 630,
        alt: "Work Visa Consultancy in Aligarh - WorkWise Visa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Visa Consultancy in Aligarh | WorkWise Visa",
    description:
      "Premier work visa consultancy & overseas recruitment agency serving Aligarh, Western UP. Verified Gulf & Europe work permits.",
    images: [`${BASE_URL}/images/workwise_logo.png`],
  },
};

// ============================================================================
// EXHAUSTIVE FAQS LIST — LOCALIZED FOR ALIGARH & WESTERN UP CANDIDATES
// ============================================================================
const aligarhFaqs = [
  {
    q: "1. How does WorkWise Visa assist lock industry artisans and industrial workers in Aligarh?",
    a: "WorkWise Visa connects skilled zinc/aluminum pressure die-casting operators, precision tool & die makers, electroplating technicians, CNC machinists, 6G pipe welders, heavy commercial drivers, and engineering diploma holders across Aligarh with authenticated employer-sponsored job quotas in Europe (Poland, Croatia, Romania, Germany) and the Gulf (Saudi Arabia, UAE, Qatar, Oman, Kuwait). We manage end-to-end recruitment: technical skill assessment, client interview delegations, Qiwa and MOHRE digital contracts, Wafid GAMCA medical appointments, Takamol SVP test scheduling, MEA Apostille at Patiala House, VFS biometrics, and flight deployment.",
  },
  {
    q: "2. Where can candidates from Aligarh visit the WorkWise Visa office in person?",
    a: "Candidates from Aligarh can visit our Corporate Regional Headquarters located at Urbtech Trade Centre, D-701 C, Sector 132, Noida. Thanks to the Yamuna Expressway via Tappal or the 4-lane GT Road (NH-34), the travel time from Aligarh directly to our Sector 132 office is only 75 to 90 minutes (approx. 115–125 km). Walk-in consultations, physical CV vetting, and trade counseling are available Monday to Saturday (9:30 AM – 6:30 PM).",
  },
  {
    q: "3. What is the fastest driving route from Aligarh (Tala Nagri / GT Road) to the Noida office?",
    a: "Take the Aligarh-Palwal / Tappal Road directly to the Yamuna Expressway (Tappal Interchange). Drive north on the 6-lane Yamuna Expressway straight into Greater Noida, merge onto the Noida-Greater Noida Expressway, and take the Sector 132 service road exit directly at Urbtech Trade Centre. Total driving time is just 75 to 90 minutes without city traffic.",
  },
  {
    q: "4. What is the public transit route to reach WorkWise Visa Noida office from Aligarh?",
    a: "Take any frequent express train (Gomti Express, Vande Bharat, or Kalka Mail) from Aligarh Junction (ALJN) to New Delhi or Ghaziabad (approx. 90 to 110 mins). From New Delhi, take the Delhi Metro Magenta Line directly to Botanical Garden / Okhla Bird Sanctuary, then a quick 10-minute auto/cab to Sector 132. Alternatively, direct UPSRTC AC buses run every 30 minutes from Aligarh Old Bus Stand / Masoodabad directly to Pari Chowk Greater Noida and Noida Expressway.",
  },
  {
    q: "5. Are there high-paying European work visa opportunities for Aligarh's die-casting and metallurgy artisans?",
    a: "Yes. Aligarh is globally renowned for lock metallurgy and precision hardware. European manufacturing conglomerates in Poland, Croatia, and Romania actively recruit high-pressure die-casting operators (hot chamber & cold chamber), mold makers, metal polishers, and electroplaters through WorkWise Visa. Monthly take-home salaries range from €950 to €1,600+ (approx. ₹90,000 to ₹1,50,000 INR) with employer-provided accommodation, health insurance, and paid overtime.",
  },
  {
    q: "6. Can tool & die makers and press tool technicians from Tala Nagri apply for toolroom jobs abroad?",
    a: "Yes. Toolmakers experienced in blanking dies, progressive stamping dies, EDM wire-cut operations, and surface grinding in Tala Nagri Phase 1 & 2 qualify for specialized toolroom positions in Poland, Czechia, and UAE industrial zones. Monthly net wages range between ₹95,000 and ₹1,65,000 INR.",
  },
  {
    q: "7. How do CNC operators and machinists from Aligarh apply for overseas automotive vacancies?",
    a: "Machinists from Tala Nagri, Industrial Estate Chharra Adda, and Pala Road with experience in CNC lathe turning, VMC 3-axis/4-axis milling, and Siemens/Fanuc G-code programming can apply directly for Tier-1 automotive quotas in Poland, Croatia, and Saudi Arabia. We evaluate your resume, verify trade credentials, and schedule you for client interview drives.",
  },
  {
    q: "8. What are the active Gulf megaproject vacancies for Aligarh tradesmen (Saudi NEOM, Dubai, Qatar)?",
    a: "We have ongoing recruitment drives for Saudi Arabia's $500B NEOM megaproject (The Line, Oxagon port, Trojena dam engineering), Dubai commercial infrastructure, and Qatar petrochemical plant shutdowns. High-demand roles include 6G TIG/SMAW pipe welders, structural steel erectors, heavy hydraulic equipment operators, industrial electricians, and MEP supervisors, with tax-free monthly packages from SAR/AED 2,800 to 7,500+ (₹65,000 to ₹1,75,000+ INR) plus free NCV village camp accommodation and meals.",
  },
  {
    q: "9. Can heavy transport vehicle (HTV) drivers from Aligarh apply for Gulf trailer driving jobs?",
    a: "Yes. Heavy commercial drivers holding a valid Indian Heavy Transport Vehicle (HTV/HMV) license with minimum 2 to 3 years verifiable driving history on container, tanker, or trailer fleets along GT Road (NH-34) qualify for 40-foot flatbed trailer, tipper, and transit-mixer driver positions in Saudi Arabia, UAE, and Oman. We assist with client driving trials and GCC driving license conversion guidance.",
  },
  {
    q: "10. Where can candidates from Aligarh take their Wafid (GAMCA) medical examination?",
    a: "Wafid pre-departure medical screening slips are generated online via wafid.com, which automatically assigns an accredited GCC diagnostic hospital in Delhi or Noida (such as Jasola, Nehru Place, Greater Kailash, or Sector 18/62 Noida), just 75 to 90 minutes from Aligarh via the Yamuna Expressway. We assist candidates in generating verified slips and advise on physical and serology fitness guidelines.",
  },
  {
    q: "11. How can candidates in Aligarh get their educational certificates and PCC apostilled by the MEA?",
    a: "For European work visas (Poland, Croatia, Romania, Germany), original educational degrees/diplomas and the Police Clearance Certificate (PCC) issued by the Passport Seva Kendra (PSK) at Aligarh or Agra must receive a Hague Apostille from the Ministry of External Affairs (MEA) CPV Division at Patiala House Courts, New Delhi. WorkWise Visa manages the complete document authentication, State HRD attestation, and Patiala House submission.",
  },
  {
    q: "12. How do Aligarh candidates verify their Saudi Arabia Qiwa contract and Takamol SVP trade test?",
    a: "Saudi employment is strictly regulated by the Ministry of Human Resources and Social Development (MHRSD). Before visa stamping, skilled technical workers must pass the Takamol Skill Verification Program (SVP) computer theory and practical bench exam at accredited test centers in Delhi NCR. Once cleared, the sponsoring EPC contractor issues an authenticated digital contract on the Qiwa platform (qiwa.sa), which the candidate approves via mobile OTP. WorkWise Visa provides complete Takamol bench coaching and Qiwa verification.",
  },
  {
    q: "13. Where is the VFS Global submission center for Aligarh candidates applying for Europe visas?",
    a: "The joint VFS Global Visa Application Centre for European National Type-D visas is located at the Mezzanine Floor, Shivaji Stadium Metro Station, Baba Kharak Singh Marg, Connaught Place, New Delhi. It is easily accessible via the Yamuna Expressway and Delhi Metro. Our operations team prepares your complete visa file and accompanies you for biometric scheduling.",
  },
  {
    q: "14. How can AMU and technical diploma graduates from Aligarh institutions apply for engineering visas?",
    a: "Graduates from Aligarh Muslim University (AMU University Polytechnic / Z.H. College of Engineering), Government ITI Aligarh, or private polytechnics in Western UP can apply for specialized Junior Engineer, QA/QC Inspector, MEP Supervisor, and CNC programmer roles in Europe and the Gulf. We assist with certificate verification, translation, and employer client matching.",
  },
  {
    q: "15. Does WorkWise Visa charge any advance registration or interview fee in Aligarh?",
    a: "No. Initial profile assessment, technical resume shortlisting, and employer vacancy matching are 100% free of charge. Transparent service charges apply only after you are officially selected by the client, receive your verifiable sovereign work permit or offer letter, and sign a milestone-based legal recruitment agreement.",
  },
  {
    q: "16. How do ECR passport holders from Aligarh obtain POE Emigration Clearance?",
    a: "Candidates with ECR (Emigration Check Required) passports deployed to 18 notified Gulf countries must obtain statutory Emigration Clearance from the Protector of Emigrants (POE) under the Ministry of External Affairs. WorkWise Visa processes online clearance via the official eMigrate portal (emigrate.gov.in) with mandatory Pravasi Bharatiya Bima Yojana (PBBY) insurance covering ₹10 Lakh in benefits.",
  },
  {
    q: "17. What accommodation and welfare facilities are guaranteed in Gulf and European employment contracts?",
    a: "Under sovereign labor laws (Saudi MHRSD, UAE MOHRE, and European Labor Codes), sponsoring employers are legally required to provide furnished bachelor accommodations with air-conditioning/heating, personal lockers, laundry facilities, high-speed Wi-Fi, clean drinking water, daily site transport, and comprehensive health insurance. In megaprojects like NEOM, workers reside in luxury Construction Villages (NCV) with catered Indian mess halls.",
  },
  {
    q: "18. Can candidates in Aligarh track their visa application status online?",
    a: "Yes. Every registered candidate receives a unique Application Tracking ID to monitor their progress 24/7 across every stage—from trade interview selection to work permit generation, medical clearance, embassy stamping, and flight dispatch—via our digital portal at workwisevisa.com/track.",
  },
  {
    q: "19. How does WorkWise Visa protect candidates from overseas job fraud in Aligarh?",
    a: "Unregulated intermediaries operating around Railway Road, Sasni Gate, and Centre Point frequently lure youth with counterfeit tourist visas or fake Canadian offer letters. WorkWise Visa operates with zero fraud tolerance: all vacancies are backed by verifiable sovereign labor approvals (Qiwa, MOHRE, Voivodeship), digital embassy tracking, and formal milestone-linked contracts.",
  },
  {
    q: "20. How do I book an appointment or visit the WorkWise Visa office from Aligarh?",
    a: "You can book an immediate appointment by calling +91 81301 61603, messaging us on WhatsApp, or submitting the consultation form on this page. Our counselors will provide exact driving directions along the Yamuna Expressway to our Sector 132 Noida office, pre-screen your CV, and schedule you for active client recruitment drives.",
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
      "@id": "https://www.workwisevisa.com/locations/aligarh#agency",
      name: "WorkWise Visa - Overseas Recruitment & Work Visa Consultancy (Aligarh Desk)",
      image: "https://www.workwisevisa.com/images/workwise_logo.png",
      url: "https://www.workwisevisa.com/locations/aligarh",
      telephone: "+918130161603",
      email: "workwisevisa@gmail.com",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Urbtech Trade Centre, D-701 C, Sector 132 (Direct 75-Min Connect via Yamuna Expressway from Aligarh)",
        addressLocality: "Aligarh Placement Desk / Noida Corporate HQ",
        addressRegion: "Uttar Pradesh / Delhi NCR",
        postalCode: "201304",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 27.8974,
        longitude: 78.088,
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
        { "@type": "City", name: "Aligarh" },
        { "@type": "AdministrativeArea", name: "Tala Nagri Industrial Area" },
        { "@type": "AdministrativeArea", name: "Chharra Adda Industrial Estate" },
        { "@type": "AdministrativeArea", name: "Pala Road" },
        { "@type": "AdministrativeArea", name: "Sasni Gate" },
        { "@type": "AdministrativeArea", name: "AMU Campus" },
        { "@type": "AdministrativeArea", name: "Hathras" },
        { "@type": "AdministrativeArea", name: "Khair" },
        { "@type": "AdministrativeArea", name: "Western Uttar Pradesh" },
        { "@type": "AdministrativeArea", name: "Delhi NCR" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.workwisevisa.com/locations/aligarh#breadcrumb",
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
          name: "Aligarh",
          item: "https://www.workwisevisa.com/locations/aligarh",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.workwisevisa.com/locations/aligarh#faq",
      mainEntity: aligarhFaqs.map((faq) => ({
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

export default function AligarhLocationPage() {
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
              <span className="font-semibold text-emerald-400">Aligarh</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Semantic Headline & Value Proposition */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  <FaShieldHalved className="text-emerald-400" />
                  Lock Capital &amp; Precision Metallurgy Hub • Dedicated Candidate Placement Desk
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                  Work Visa &amp; Overseas Employment Consultancy in{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    Aligarh
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                  WorkWise Visa connects skilled zinc/aluminum pressure die-casting operators, precision tool &amp; die makers, electroplating technicians, CNC machinists, 6G welders, and heavy commercial drivers across Aligarh and Western UP with verified employer-sponsored jobs in Europe (Poland, Croatia, Romania, Germany) and the Gulf (Saudi Arabia, UAE, Qatar, Oman, Kuwait). Backed by our Corporate Regional Headquarters in Sector 132, Noida (just 75–90 minutes away via the Yamuna Expressway), we deliver 100% legal visa processing, authentic Qiwa digital contracts, Wafid GAMCA medical clearance, and MEA Patiala House Apostille support.
                </p>

                {/* Key Legal Trust Metrics */}
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-6 sm:grid-cols-4">
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">75–90 Mins</div>
                    <div className="text-xs text-slate-400">Via Yamuna Expressway</div>
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
                        Aligarh Candidate Desk
                      </span>
                      <h2 className="text-lg font-display font-bold text-white">
                        Aligarh &amp; Western UP Placement Hub
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
                        Urbtech Trade Centre, Sector 132, Noida (75 mins via Yamuna Expressway / Tappal from Aligarh).
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
                        €950 – €1,750 (Europe) | SAR/AED 2,800 – 8,500+ (Gulf) with free bachelor accommodation &amp; medical.
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
                      Book Free Profile Evaluation in Aligarh
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
        {/* SECTION 2: EXECUTIVE OVERVIEW & ALIGARH INDUSTRIAL IDENTITY          */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Lock Capital &amp; Precision Metallurgy Heritage
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Why Aligarh is Western UP&apos;s Foremost Talent Engine for Overseas Metallurgy, Die-Casting &amp; Toolmaking
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 text-base leading-relaxed text-slate-600 lg:grid-cols-2">
              <div className="space-y-5">
                <p>
                  World-renowned as India&apos;s <strong>Tala Nagri (Lock Capital)</strong>, <strong>Aligarh</strong> is the historic nucleus of precision hardware engineering, zinc/aluminum die-casting, and surface metallurgy. Housing more than 5,000 manufacturing units across <strong>Tala Nagri Industrial Area (Phase 1 &amp; 2), Industrial Estate Chharra Adda, and Pala Road</strong>, local artisans possess rare, generations-tested expertise in high-pressure mold casting, press tool die-making, chrome-nickel electroplating, and metal polishing.
                </p>
                <p>
                  Moreover, institutions like <strong>Aligarh Muslim University (AMU)</strong> and regional polytechnics produce thousands of disciplined mechanical, electrical, and civil technicians every year. However, local workshop wages often stagnate between ₹15,000 and ₹26,000 per month. WorkWise Visa bridges this income disparity by connecting Aligarh artisans directly with European manufacturing plants in <strong>Poland, Croatia, and Romania</strong> and Tier-1 EPC contractors building <strong>Saudi Arabia&apos;s $500B NEOM megaproject</strong>, quadrupling monthly take-home income while providing legal residency.
                </p>
              </div>

              <div className="space-y-5">
                <p>
                  Aligarh&apos;s strategic location along the <strong>Yamuna Expressway corridor</strong> makes visiting our Corporate Regional Headquarters exceptionally seamless. Located approximately 115 to 125 km away at <strong>Urbtech Trade Centre, Sector 132, Noida</strong>, candidates from Tala Nagri, Sasni Gate, or Centre Point can drive via Tappal to the Yamuna Expressway in just 75 to 90 minutes. Direct express trains to New Delhi take under 90 minutes.
                </p>
                <p>
                  We vigorously protect candidates across <strong>Aligarh, Hathras, Bulandshahr, and Mathura</strong> against unregulated sub-agents operating around Railway Road or Sasni Gate who deceive youth with fake tourist visas. Every job opening managed by WorkWise Visa is backed by verified sovereign documentation—including <strong>Saudi Qiwa digital contracts</strong>, <strong>UAE MOHRE work permits</strong>, and <strong>European Voivodeship Type-A authorizations</strong>—backed by formal milestone agreements.
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
                Verified Global Corridors for Candidates in Aligarh
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
                    Statutory multi-year work authorizations for die-casting operators, tool &amp; die makers, CNC machinists, and heavy trailer drivers. Includes state health insurance, 40-hour workweeks, and Karta Pobytu residency pathways.
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
                    Direct government-authorized work quotas for structural 6G welders, mold casting operators, industrial maintenance mechanics, and electroplating technicians across Zagreb, Split, Bucharest, and Brașov.
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
                    Direct Tier-1 EPC recruitment for structural steel welders, hydraulic equipment mechanics, electrical panel wiremen, and QA/QC technicians. Authentic digital contracts issued on the sovereign Qiwa portal.
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
                    Points-based legal job-seeker visa for qualified Polytechnic diploma holders, CNC programmers, precision toolmakers, and mechanical engineers. Grants full 20-hour weekly secondary work rights during search.
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
                In-Demand Trades &amp; 2026 Overseas Salary Benchmarks for Aligarh Candidates
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Compare local Western UP factory wages with verified sovereign overseas packages across Europe and the GCC:
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
                        Zinc &amp; Aluminum Die-Casting Machine Operator
                      </td>
                      <td className="px-5 py-4 text-xs">Hot/cold chamber pressure casting, molten metal temperature, mold spray</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Poland, Romania, UAE</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹85,000 – ₹1,50,000</td>
                      <td className="px-5 py-4 text-xs">Free furnished housing, heating, 40h workweek + paid OT</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        Precision Tool &amp; Die Maker / Press Tool Fitter
                      </td>
                      <td className="px-5 py-4 text-xs">Progressive stamping dies, heat treatment, die assembly, surface grinding</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Poland, Czechia, Germany</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹95,000 – ₹1,65,000</td>
                      <td className="px-5 py-4 text-xs">Annual airfare, medical insurance, residency card</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        Electroplating &amp; Surface Finishing Technician
                      </td>
                      <td className="px-5 py-4 text-xs">Nickel, chrome, zinc electroplating baths, chemical titration, buffing</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Poland, Croatia, UAE</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹82,000 – ₹1,35,000</td>
                      <td className="px-5 py-4 text-xs">Protective gear, health coverage, free accommodation</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        CNC Milling / VMC 4-Axis Operator
                      </td>
                      <td className="px-5 py-4 text-xs">Fanuc/Siemens G-code, tooling offsets, micrometer 5-micron checks</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Poland, Germany, Romania</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹85,000 – ₹1,55,000</td>
                      <td className="px-5 py-4 text-xs">Free furnished housing, heating, paid overtime</td>
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
                        Heavy Commercial Trailer / Container Driver
                      </td>
                      <td className="px-5 py-4 text-xs">Valid Indian HTV/HMV license, 40-foot flatbed, RTA test guidance</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Dubai (UAE), Saudi Arabia, Poland</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹85,000 – ₹1,40,000</td>
                      <td className="px-5 py-4 text-xs">Trip bonuses, visa &amp; license sponsorship, AC housing</td>
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
                How Candidates from Aligarh Apply for Overseas Jobs
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
                  Submit your resume, trade certificates, and passport. Undergo practical evaluation at our recognized technical workshops or attend direct client interview drives.
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
                  Complete your GAMCA / Wafid medical examination at authorized Delhi NCR clinics. Obtain your Police Clearance Certificate (PCC) from Passport Seva Kendra with Patiala House Apostille.
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
                  Airport Departure &amp; Camp Check-in
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fly via IGI Airport Delhi. Receive company airport pickup at destination, biometric residence registration (Iqama/TRC), and check in to your furnished company quarters.
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
                Mandatory Documentation Checklist for Aligarh Applicants
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
                    <span><strong>Work Experience Letters:</strong> Verifiable service letters from Indian factories, die-casting units, or prior overseas employers.</span>
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
                    <span><strong>Wafid Medical Report:</strong> Computerized GCC FIT slip issued by an accredited diagnostic clinic in Delhi NCR.</span>
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
        {/* SECTION 7: TRANSIT & CONNECTIVITY ACROSS ALIGARH                     */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Effortless Expressway Access
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                How Candidates in Aligarh Can Reach Our Sector 132 Noida Office
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Located approximately 115 to 125 km via the Yamuna Expressway, visiting our Corporate Regional Headquarters takes only 75 to 90 minutes by car or express rail.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Route 1: Road Drive */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold mb-4">
                  <FaCarSide className="text-lg" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Via Yamuna Expressway</h3>
                <p className="mt-1 text-xs text-emerald-700 font-semibold">75 to 90 Minutes • 115–125 KM</p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  Take the Aligarh-Palwal Road to the Yamuna Expressway (Tappal Interchange). Drive north on the 6-lane expressway straight past Jewar into Greater Noida, joining the Noida-Greater Noida Expressway to Sector 132 at Urbtech Trade Centre.
                </p>
              </div>

              {/* Route 2: Express Rail */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-800 font-bold mb-4">
                  <FaTrainSubway className="text-lg" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Via Aligarh Junction Trains</h3>
                <p className="mt-1 text-xs text-teal-700 font-semibold">90 to 110 Minutes • Direct Trains</p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  Board frequent express trains (Gomti, Vande Bharat, Kalka Mail) from Aligarh Junction (ALJN) to New Delhi. Take the Delhi Metro Magenta Line to Botanical Garden, then a quick 10-minute auto or cab to Sector 132.
                </p>
              </div>

              {/* Route 3: Bus & Shared Transit */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-bold mb-4">
                  <FaRoute className="text-lg" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Direct Aligarh-Noida Buses &amp; Cabs</h3>
                <p className="mt-1 text-xs text-amber-700 font-semibold">Departures Every 30 Minutes</p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  Direct express UPSRTC AC buses operate continuously from Aligarh Old Bus Stand / Masoodabad straight to Pari Chowk and Noida Expressway, offering smooth transit without urban congestion.
                </p>
              </div>
            </div>

            {/* Office Card Callout */}
            <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-50/80 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Official Office Address:</span>
                <p className="text-sm font-semibold text-slate-900 mt-1">
                  WorkWise Visa Corporate Headquarters — Urbtech Trade Centre, D-701 C, Sector 132, Noida-Greater Noida Expressway, UP 201304.
                </p>
                <p className="text-xs text-slate-600 mt-0.5">Office Timings: Monday – Saturday (9:30 AM – 6:30 PM) • Phone: +91 81301 61603</p>
              </div>
              <a
                href="https://maps.google.com/?q=Urbtech+Trade+Centre+Sector+132+Noida"
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
        {/* SECTION 8: AUTHENTIC TESTIMONIALS FROM ALIGARH CANDIDATES            */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Verified Candidate Testimonials
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                What Candidates from Aligarh Say About WorkWise Visa
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Real feedback from die-casting operators, toolmakers, and transport fleet drivers placed in verified overseas careers:
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
                  &ldquo;Tala Nagri Industrial Area me 6 saal aluminum die-casting machine par kaam kiya lekin salary ₹21,000 par atki thi. Yamuna Expressway se WorkWise Visa ke Sector 132 office jakar Poland Type-D visa ke liye apply kiya. 3 mahine me Voivodeship permit aur visa stamp ho gaya. Aaj Poznań me auto die-casting plant me kaam kar raha hoon aur har mahine ₹1,15,000 bhej raha hoon.&rdquo;
                </p>
                <div className="border-t border-slate-200 pt-3">
                  <div className="font-bold text-slate-900 text-sm">Faheem Ahmad</div>
                  <div className="text-xs text-slate-500">Tala Nagri (Phase 1), Aligarh • Placed in Poland (€1,280/mo)</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-4 shadow-2xs">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;Chharra Adda industrial estate me press tool maker tha. Local agents Saudi ke naam par ₹1.5 lakh advance maang rahe the. WorkWise Visa se direct client interview diya, Takamol test clear kiya aur transparent Qiwa contract par flight hui. NEOM me SAR 3,600 regular salary aati hai aur camp life 5-star hai.&rdquo;
                </p>
                <div className="border-t border-slate-200 pt-3">
                  <div className="font-bold text-slate-900 text-sm">Pankaj Sharma</div>
                  <div className="text-xs text-slate-500">Sasni Gate, Aligarh • Placed at NEOM, Saudi Arabia (3,600 SAR/mo)</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-4 shadow-2xs">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;GT Road par heavy container chala raha tha. WorkWise team ne direct Dubai logistics company me trailer driver vacancy dilwayi. RTA driving school classes aur test ki guidance bhi unke counselor ne di. Aaj Dubai me 4,800 AED monthly salary regular aati hai.&rdquo;
                </p>
                <div className="border-t border-slate-200 pt-3">
                  <div className="font-bold text-slate-900 text-sm">Imran Khan</div>
                  <div className="text-xs text-slate-500">Pala Road, Aligarh • Placed in Dubai (4,800 AED/mo)</div>
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
                  Anti-Fraud Advisory for Overseas Job Seekers in Aligarh &amp; Western UP
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                Western Uttar Pradesh has witnessed an influx of unregistered intermediaries operating around Railway Road, Sasni Gate, and Centre Point who deceive candidates with forged offer letters. Protect your financial security by remembering:
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
                Everything Candidates in Aligarh Need to Know About Overseas Work Visas
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Authoritative guidance on European national work permits, GCC employment visas, MEA Apostille attestation, and embassy processing workflows:
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {aligarhFaqs.map((faq, index) => (
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
                <Link href="/locations/noida" className="hover:text-emerald-700 font-semibold underline">
                  Noida Corporate HQ
                </Link>
                <span>•</span>
                <Link href="/locations/aligarh" className="hover:text-emerald-700 font-bold text-emerald-800">
                  Aligarh Desk
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
                <Link href="/locations/meerut" className="hover:text-emerald-700 font-semibold underline">
                  Meerut Desk
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
