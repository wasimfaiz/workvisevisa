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
// SEO METADATA — STRICT CHARACTER LIMITS & TARGETED FARIDABAD KEYWORDS
// ============================================================================
export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Work Visa Consultancy in Faridabad | Overseas Jobs & Recruitment",
  description:
    "Top work visa consultancy & overseas recruitment agency serving Faridabad, Haryana. Verified Europe & Gulf work permits with MEA Apostille & embassy stamping support.",
  keywords: [
    "work visa consultancy in faridabad",
    "visa consultancy in faridabad",
    "overseas recruitment agency faridabad",
    "gulf job consultancy in faridabad",
    "europe work visa consultant faridabad",
    "best immigration consultant faridabad",
    "dubai work visa agent in faridabad",
    "saudi arabia visa processing faridabad",
    "manpower consultancy in faridabad for gulf",
    "takamol trade test guidance faridabad",
    "gamca medical appointment center faridabad",
    "mea apostille attestation faridabad",
    "nit faridabad job consultancy abroad",
    "ballabhgarh work visa agency",
    "licensed overseas manpower agency faridabad",
    "cnc machinist jobs abroad faridabad",
    "6g welder gulf vacancy faridabad",
  ],
  alternates: {
    canonical: `${BASE_URL}/locations/faridabad`,
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
    title: "Work Visa Consultancy in Faridabad | Overseas Jobs & Recruitment",
    description:
      "Top work visa consultancy & overseas recruitment agency serving Faridabad, Haryana. Verified Europe & Gulf work permits with MEA Apostille & embassy stamping support.",
    url: `${BASE_URL}/locations/faridabad`,
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/workwise_logo.png`,
        width: 1200,
        height: 630,
        alt: "Work Visa Consultancy in Faridabad - WorkWise Visa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Visa Consultancy in Faridabad | WorkWise Visa",
    description:
      "Premier work visa consultancy & overseas recruitment agency serving Faridabad, Haryana. Verified Gulf & Europe work permits.",
    images: [`${BASE_URL}/images/workwise_logo.png`],
  },
};

// ============================================================================
// EXHAUSTIVE FAQS LIST — LOCALIZED FOR FARIDABAD & HARYANA CANDIDATES
// ============================================================================
const faridabadFaqs = [
  {
    q: "1. How does WorkWise Visa assist job seekers and technical trade workers in Faridabad?",
    a: "WorkWise Visa connects skilled industrial machinists, CNC operators, 6G welders, electromechanical technicians, heavy commercial drivers, and engineering graduates across Faridabad with authenticated employer-sponsored job quotas in Europe (Poland, Croatia, Romania, Germany) and the Gulf (Saudi Arabia, UAE, Qatar, Oman, Kuwait). We manage end-to-end recruitment: technical skill assessment, client interview delegations, Qiwa/MoHRE digital contract verification, Wafid GAMCA medical appointments, Takamol SVP test scheduling, MEA Apostille at Patiala House, VFS biometrics, and flight deployment.",
  },
  {
    q: "2. Where can candidates from Faridabad visit the WorkWise Visa office in person?",
    a: "Candidates from Faridabad can visit our Corporate Regional Headquarters located at Urbtech Trade Centre, D-701 C, Sector 132, Noida. It is conveniently situated on the Noida-Greater Noida Expressway, just 25 to 35 minutes from Faridabad (via Kalindi Kunj / Faridabad-Noida Road or Mathura Road NH-44). Walk-in consultations, physical document vetting, and trade counseling are available Monday to Saturday (9:30 AM – 6:30 PM).",
  },
  {
    q: "3. What is the fastest route to reach WorkWise Visa Noida office from Faridabad by Delhi Metro?",
    a: "Take the Delhi Metro Violet Line from any Faridabad station (Raja Nahar Singh, Ballabhgarh, Bata Chowk, Neelam Chowk Ajronda, Old Faridabad, NHPC Chowk, or Sector 28) to Kalkaji Mandir station. Interchange directly to the Magenta Line towards Botanical Garden (just 5 stations). From Botanical Garden, take a quick 10-minute auto/cab down the expressway directly to Urbtech Trade Centre in Sector 132.",
  },
  {
    q: "4. What is the driving route from Faridabad (NIT / Mathura Road) to the Noida office?",
    a: "Drive north along Mathura Road (NH-44) through Badarpur, take the right exit towards Kalindi Kunj Bridge onto the Noida-Greater Noida Expressway, and take the Sector 132 service road exit directly to Urbtech Trade Centre. The total driving distance is approximately 22 to 26 km, taking about 25 to 35 minutes depending on traffic.",
  },
  {
    q: "5. Are there high-paying European work visa opportunities for industrial and CNC trade workers from Faridabad?",
    a: "Yes. Faridabad is internationally recognized for precision tooling and automotive manufacturing. European manufacturing plants in Poland, Croatia, and Romania actively recruit CNC milling/turning operators, lathe machinists, tool & die makers, and industrial maintenance fitters through WorkWise Visa. Monthly take-home salaries range from €950 to €1,650+ (approx. ₹90,000 to ₹1,55,000 INR) with employer-provided accommodation, health insurance, and 2 to 3 hours of paid daily overtime.",
  },
  {
    q: "6. How do candidates in Faridabad verify their Saudi Arabia Qiwa contract and Takamol SVP test?",
    a: "Saudi employment is strictly regulated by the Ministry of Human Resources and Social Development (MHRSD). Before visa stamping, skilled technical workers must pass the Takamol Skill Verification Program (SVP) computer theory and practical bench exam at accredited test centers in Delhi NCR. Once cleared, the sponsoring EPC contractor issues an authenticated digital contract on the Qiwa platform (qiwa.sa), which the candidate approves via mobile OTP. WorkWise Visa provides complete Takamol bench coaching and Qiwa verification.",
  },
  {
    q: "7. Where can candidates from Faridabad take their Wafid (GAMCA) medical examination?",
    a: "Wafid pre-departure medical screening slips are generated online via wafid.com, which automatically assigns an accredited GCC diagnostic hospital in South Delhi (such as Jasola, Nehru Place, Greater Kailash, or Okhla), just 15 to 25 minutes from Faridabad via Mathura Road. We assist candidates in generating verified slips and advise on physical and serology fitness guidelines.",
  },
  {
    q: "8. How can Faridabad candidates get their educational certificates and PCC apostilled by the MEA?",
    a: "For European work visas (Poland, Croatia, Romania, Germany), original educational degrees/diplomas and the Police Clearance Certificate (PCC) issued by the Passport Seva Kendra (PSK) must receive a Hague Apostille from the Ministry of External Affairs (MEA) CPV Division at Patiala House Courts, New Delhi. WorkWise Visa manages the complete document authentication, State HRD attestation, and Patiala House submission.",
  },
  {
    q: "9. Where is the VFS Global submission center for Faridabad candidates applying for Europe visas?",
    a: "The joint VFS Global Visa Application Centre for European National Type-D visas is located at the Mezzanine Floor, Shivaji Stadium Metro Station, Baba Kharak Singh Marg, Connaught Place, New Delhi. It is directly accessible via the Violet Line (to Central Secretariat, then Yellow Line to Rajiv Chowk). Our operations team prepares your complete visa file and accompanies you for biometric scheduling.",
  },
  {
    q: "10. What are the active Gulf megaproject vacancies for Faridabad tradesmen (NEOM, Dubai, Qatar)?",
    a: "We have ongoing recruitment drives for Saudi Arabia's $500B NEOM megaproject (The Line, Oxagon port, Trojena dam engineering), Dubai commercial infrastructure, and Qatar petrochemical plant shutdowns. High-demand roles include 6G TIG/SMAW pipe welders, cryogenic piping fabricators, heavy hydraulic excavator operators, industrial electricians, and HSE safety officers, with tax-free monthly packages ranging from SAR/AED 2,800 to 7,500+ (₹65,000 to ₹1,75,000+ INR) plus free NCV village camp accommodation and meals.",
  },
  {
    q: "11. Can heavy transport vehicle (HTV) drivers in Faridabad apply for Gulf trailer driving jobs?",
    a: "Yes. Drivers holding a valid Indian Heavy Transport Vehicle (HTV/HMV) license with a minimum of 2 to 3 years verifiable driving experience (such as container transport along Mathura Road / GT Road corridors) are eligible for trailer, tanker, and transit-mixer driver positions in Saudi Arabia, UAE, and Oman. We assist with client driving trials and GCC driving license conversion guidance upon deployment.",
  },
  {
    q: "12. What documents are required for initial candidate registration at WorkWise Visa?",
    a: "To register, candidates need: (1) Original passport with minimum 18 months validity; (2) Updated resume detailing trade experience; (3) Academic & technical certificates (10th/12th, ITI, Polytechnic Diploma, or B.Tech); (4) Previous employer experience letters; (5) Passport-size white background photographs; and (6) Driving license (for driving positions) or trade test certifications.",
  },
  {
    q: "13. Does WorkWise Visa charge any advance registration or interview fee?",
    a: "No. Initial profile assessment, technical resume shortlisting, and employer vacancy matching are 100% free of charge. Transparent service charges apply only after you are officially selected by the client, receive your verifiable sovereign work permit or offer letter, and sign a milestone-based legal recruitment agreement.",
  },
  {
    q: "14. How do ECR passport holders from Haryana obtain POE Emigration Clearance?",
    a: "Candidates with ECR (Emigration Check Required) passports deployed to 18 notified Gulf countries must obtain statutory Emigration Clearance from the Protector of Emigrants (POE) under the Ministry of External Affairs. WorkWise Visa processes online clearance via the official eMigrate portal (emigrate.gov.in) with mandatory Pravasi Bharatiya Bima Yojana (PBBY) insurance covering ₹10 Lakh in benefits.",
  },
  {
    q: "15. What accommodation and welfare facilities are guaranteed in Gulf and European employment contracts?",
    a: "Under sovereign labor laws (Saudi MHRSD, UAE MOHRE, and European Labor Codes), sponsoring employers are legally required to provide furnished bachelor accommodations with air-conditioning/heating, personal lockers, laundry facilities, high-speed Wi-Fi, clean drinking water, daily site transport, and comprehensive health insurance. In megaprojects like NEOM, workers reside in luxury Construction Villages (NCV) with catered Indian mess halls.",
  },
  {
    q: "16. Can candidates in Faridabad track their visa application status online?",
    a: "Yes. Every registered candidate receives a unique Application Tracking ID to monitor their progress 24/7 across every stage—from trade interview selection to work permit generation, medical clearance, embassy stamping, and flight dispatch—via our digital portal at workwisevisa.com/track.",
  },
  {
    q: "17. What is a Temporary Residence Card (TRC / Karta Pobytu) for workers deployed to Europe?",
    a: "A TRC (such as Karta Pobytu in Poland, Boravišna iskaznica in Croatia, or Permis de Ședere in Romania) is the legal resident card issued by provincial authorities after you land in Europe on a Type-D work visa. It grants 1 to 3 years of legal residency, unrestricted work rights with your employer, access to national healthcare, and visa-free travel across all 29 Schengen member states.",
  },
  {
    q: "18. How can ITI and Polytechnic diploma holders from Faridabad institutions apply for skilled technical visas?",
    a: "Graduates from ITI Faridabad (NH-4, NIT), Government Polytechnic Mandkola, or private engineering colleges in Haryana can apply for specialized Junior Engineer, QA/QC Inspector, MEP Supervisor, and CNC programmer roles in Europe and the Gulf. We assist with certificate verification, translation, and employer client matching.",
  },
  {
    q: "19. How does WorkWise Visa protect candidates from overseas job fraud and fake offer letters?",
    a: "We operate with zero tolerance for recruitment fraud. Every opening is tied to authenticated employer quotas registered on destination sovereign platforms (Qiwa, MOHRE, Voivodeship). We advise candidates never to pay money into personal bank accounts for 'direct embassy appointments' or 'security clearance', and always insist on digital portal verification before passport handover.",
  },
  {
    q: "20. How do I book an appointment or visit the WorkWise Visa office from Faridabad?",
    a: "You can book an immediate appointment by calling +91 81301 61603, messaging us on WhatsApp, or submitting the consultation form on this page. Our counselors will provide exact driving directions or metro routes to our Sector 132 Noida office, pre-screen your CV, and schedule you for active client recruitment drives.",
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
      "@id": "https://www.workwisevisa.com/locations/faridabad#agency",
      name: "WorkWise Visa - Overseas Recruitment & Work Visa Consultancy (Faridabad Desk)",
      image: "https://www.workwisevisa.com/images/workwise_logo.png",
      url: "https://www.workwisevisa.com/locations/faridabad",
      telephone: "+918130161603",
      email: "workwisevisa@gmail.com",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Urbtech Trade Centre, D-701 C, Sector 132 (Direct Expressway Connect via Kalindi Kunj from Faridabad)",
        addressLocality: "Faridabad Service Area / Noida HQ",
        addressRegion: "Haryana / Delhi NCR",
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
        { "@type": "City", name: "Faridabad" },
        { "@type": "AdministrativeArea", name: "NIT Faridabad" },
        { "@type": "AdministrativeArea", name: "Old Faridabad" },
        { "@type": "AdministrativeArea", name: "Ballabhgarh" },
        { "@type": "AdministrativeArea", name: "Greater Faridabad (Neharpar)" },
        { "@type": "AdministrativeArea", name: "Sector 15 Faridabad" },
        { "@type": "AdministrativeArea", name: "Sector 16 Faridabad" },
        { "@type": "AdministrativeArea", name: "Sector 21 Faridabad" },
        { "@type": "AdministrativeArea", name: "Sector 28 Faridabad" },
        { "@type": "State", name: "Haryana" },
        { "@type": "AdministrativeArea", name: "Delhi NCR" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.workwisevisa.com/locations/faridabad#breadcrumb",
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
          name: "Faridabad",
          item: "https://www.workwisevisa.com/locations/faridabad",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.workwisevisa.com/locations/faridabad#faq",
      mainEntity: faridabadFaqs.map((faq) => ({
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

export default function FaridabadLocationPage() {
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
              <span className="font-semibold text-emerald-400">Faridabad</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Semantic Headline & Value Proposition */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  <FaShieldHalved className="text-emerald-400" />
                  Industrial &amp; Automotive Hub • Dedicated Candidate Placement Desk
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                  Work Visa &amp; Overseas Employment Consultancy in{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    Faridabad
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                  WorkWise Visa connects skilled industrial machinists, CNC programmers, 6G pipe welders, electromechanical fitters, and commercial drivers across Faridabad with verified employer-sponsored jobs in Europe (Poland, Croatia, Romania, Germany) and the Gulf (Saudi Arabia, UAE, Qatar, Oman, Kuwait). Backed by our Corporate Regional Headquarters in Sector 132, Noida (just 25–35 minutes away via Kalindi Kunj or Delhi Metro Violet Line), we deliver 100% scam-free processing, authentic Qiwa digital contracts, Wafid GAMCA medical clearance, and MEA Patiala House Apostille support.
                </p>

                {/* Key Legal Trust Metrics */}
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-6 sm:grid-cols-4">
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">25–35 Mins</div>
                    <div className="text-xs text-slate-400">From Faridabad to Noida HQ</div>
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
                        Faridabad Candidate Desk
                      </span>
                      <h2 className="text-lg font-display font-bold text-white">
                        Faridabad &amp; Haryana Placement Hub
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
                        Urbtech Trade Centre, Sector 132, Noida (25 mins via Kalindi Kunj from Faridabad).
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
                      Book Free Profile Evaluation in Faridabad
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
        {/* SECTION 2: EXECUTIVE OVERVIEW & FARIDABAD INDUSTRIAL IDENTITY       */}
        {/* ==================================================================== */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Industrial Powerhouse &amp; Technical Talent
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                Why Faridabad is India&apos;s Foremost Talent Corridor for Overseas Manufacturing &amp; Engineering
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 text-base leading-relaxed text-slate-600 lg:grid-cols-2">
              <div className="space-y-5">
                <p>
                  Historically known as the industrial engine of Haryana, <strong>Faridabad</strong> boasts thousands of manufacturing units, automotive component foundries, tooling factories, and electrical equipment plants spanning <strong>NIT Faridabad, Sector 24/25, Ballabhgarh, and Sikri</strong>. Trade workers and technicians in Faridabad possess rigorous hands-on experience in precision CNC lathe operations, VMC programming, press tool maintenance, structural 6G pipe welding, and industrial plant assembly.
                </p>
                <p>
                  However, despite mastering demanding technical skills, local factory compensation often plateaus between ₹18,000 and ₹30,000 per month. WorkWise Visa bridges this income disparity by connecting Faridabad artisans directly with multinational European corporations in <strong>Poland, Croatia, and Romania</strong> and Tier-1 EPC conglomerates building <strong>Saudi Arabia&apos;s $500B NEOM megaproject</strong>, offering take-home salaries three to five times higher along with free furnished accommodation, overtime pay, and international career credentials.
                </p>
              </div>

              <div className="space-y-5">
                <p>
                  Located just 22 to 26 kilometers from our Corporate Regional Headquarters at <strong>Urbtech Trade Centre, Sector 132, Noida</strong>, Faridabad candidates enjoy unmatched accessibility. A short 25-minute drive via the Kalindi Kunj Expressway or a smooth transit on the Delhi Metro Violet and Magenta Lines brings candidates directly to our recruitment center for physical CV verification, client interview orientation, and trade benchmarking.
                </p>
                <p>
                  We vigorously protect candidates across <strong>Old Faridabad, Greater Faridabad (Neharpar), Ballabhgarh, and Sector 15/16/21</strong> against local unregulated sub-agents. Every job opening we represent is backed by verified sovereign documentation—including <strong>Saudi Qiwa digital contracts</strong>, <strong>UAE MOHRE work permits</strong>, and <strong>European Voivodeship Type-A authorizations</strong>—backed by formal milestone service agreements.
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
                Verified Global Corridors for Candidates in Faridabad
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
                      Schengen Europe • Croatia &amp; Romania
                    </span>
                    <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-800">
                      Fast Track
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-display font-bold text-slate-900">
                    Croatia MUP &amp; Romania IGI Single Permits
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Ministry of Interior approved work permits across manufacturing, construction, facility maintenance, and metal fabrication. Full Schengen travel mobility across 29 member nations.
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
                    Read European Single Permit Guide <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Corridor 3: Saudi Arabia & NEOM */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      GCC Megaprojects • Saudi Arabia
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                      High Volume
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-display font-bold text-slate-900">
                    Saudi Qiwa Contracts &amp; NEOM Megaproject
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Direct Tier-1 EPC recruitment for The Line, Oxagon port, and Trojena dam sites. Electronic Qiwa contracts, Takamol skill verification, and luxury NCV camp housing with free hot Indian mess.
                  </p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700">
                    <div><strong>Net Wages:</strong> 2,800 – 7,500+ SAR (₹64,000 – ₹1,72,000 INR)</div>
                    <div><strong>Processing Time:</strong> 20 – 35 Days</div>
                    <div><strong>Perks:</strong> 100% Free Food, Room, Overtime &amp; Medical</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/blogs/neom-project-latest-updates-mega-recruitment-2026-jobs-salary-qiwa-epc"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    Read NEOM Master Guide 2026 <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Corridor 4: UAE (Dubai) */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      GCC Hub • Dubai &amp; Abu Dhabi
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                      Immediate Flight
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-display font-bold text-slate-900">
                    UAE MOHRE 2-Year Employment Visas
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Fast-track placement in Dubai MEP contracting, warehousing, heavy transport, and hotel hospitality. Direct electronic work permit issued by MOHRE with guaranteed WPS bank payroll.
                  </p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700">
                    <div><strong>Net Wages:</strong> 2,400 – 6,000 AED (₹55,000 – ₹1,38,000 INR)</div>
                    <div><strong>Processing Time:</strong> 15 – 25 Days</div>
                    <div><strong>Perks:</strong> Free Accommodation, Medical Card &amp; Air Ticket</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/blogs/complete-guide-uae-saudi-arabia-blue-collar-work-permits-2026"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    Read UAE Work Permit Manual <FaArrowRight className="w-3 h-3" />
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
                    Points-based legal job-seeker visa for qualified Polytechnic diploma holders, CNC programmers, automotive technicians, and engineers. Grants full 20-hour weekly secondary work rights during search.
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
                    High-paying short-term and multi-year maintenance contracts in Ras Laffan, Mesaieed, and Mina Al-Ahmadi refineries for riggers, pipe fabricators, instrument technicians, and millwrights.
                  </p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700">
                    <div><strong>Net Wages:</strong> 3,000 – 6,500 QAR/KWD (₹70,000 – ₹1,75,000 INR)</div>
                    <div><strong>Processing Time:</strong> 25 – 40 Days</div>
                    <div><strong>Perks:</strong> QVC Stamping, Free Food, High Daily OT</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/blogs/qatar-kuwait-oil-gas-shutdown-plant-maintenance-work-visa-2026"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    Read Oil &amp; Gas Shutdown Manual <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 4: IN-DEMAND TRADES & 2026 SALARY BENCHMARKS                 */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Transparent Compensation Schedules
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                In-Demand Technical Occupations &amp; Salary Matrix (2026/2027)
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Verified basic monthly wages, mandatory qualifications, and active international deployment corridors for candidates in Faridabad:
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm text-slate-700">
                  <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                    <tr>
                      <th className="px-5 py-4 font-bold">Trade Designation</th>
                      <th className="px-5 py-4 font-bold">Key Qualification / Experience</th>
                      <th className="px-5 py-4 font-bold">Primary Corridors</th>
                      <th className="px-5 py-4 font-bold text-emerald-400">Monthly Net In-Hand</th>
                      <th className="px-5 py-4 font-bold">Contractual Benefits</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        CNC &amp; VMC Machinist / Programmer
                      </td>
                      <td className="px-5 py-4 text-xs">Fanuc/Siemens G-code, 3/4-axis milling, turning</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Poland, Germany, Croatia</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹85,000 – ₹1,55,000</td>
                      <td className="px-5 py-4 text-xs">Shift bonuses, European residence permit</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        6G TIG &amp; SMAW Pipe Welder
                      </td>
                      <td className="px-5 py-4 text-xs">CS/SS pipe coupons, radiographic X-ray clearance</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Saudi Arabia (NEOM), Qatar, Poland</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹72,000 – ₹1,25,000</td>
                      <td className="px-5 py-4 text-xs">Free food mess, furnished room, 1.5x OT</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        Heavy Trailer / Container Fleet Driver
                      </td>
                      <td className="px-5 py-4 text-xs">Valid Indian HTV or GCC driving license (3+ yrs)</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">UAE (Dubai), Saudi Arabia, Poland</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹78,000 – ₹1,40,000</td>
                      <td className="px-5 py-4 text-xs">Trip allowances, company vehicle, medical</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        Industrial Electrician &amp; Wireman
                      </td>
                      <td className="px-5 py-4 text-xs">ITI Electrical / SLD schematic reading / 3-phase DB</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Croatia, UAE, Qatar, Oman</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹55,000 – ₹98,000</td>
                      <td className="px-5 py-4 text-xs">Site transport, tools provided, health card</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        Tool &amp; Die Maker / Press Maintenance
                      </td>
                      <td className="px-5 py-4 text-xs">Stamping dies, precision molds, EDM machining</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Poland, Germany, Romania</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹90,000 – ₹1,65,000</td>
                      <td className="px-5 py-4 text-xs">Furnished accommodation, health insurance</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        HVAC &amp; Chiller Maintenance Tech
                      </td>
                      <td className="px-5 py-4 text-xs">AHU/FCU servicing, duct fabrication, VRF systems</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Dubai, Saudi Arabia, Bahrain</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹60,000 – ₹95,000</td>
                      <td className="px-5 py-4 text-xs">Free AC accommodation, uniforms, overtime</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900">
                        Warehouse Order Picker &amp; Forklift
                      </td>
                      <td className="px-5 py-4 text-xs">Reach truck license / barcode scanning systems</td>
                      <td className="px-5 py-4 text-xs font-semibold text-emerald-700">Poland, Romania, UAE</td>
                      <td className="px-5 py-4 font-bold text-slate-950">₹65,000 – ₹1,10,000</td>
                      <td className="px-5 py-4 text-xs">Climate-controlled logistics parks, meal subsidy</td>
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
                How Candidates from Faridabad Apply for Overseas Jobs
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
                  Submit your resume, trade certificates, and passport. Undergo practical evaluation at our recognized technical workshops across NCR or attend direct client interview drives.
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
                  Complete your GAMCA / Wafid medical examination at authorized South Delhi clinics. Obtain your Police Clearance Certificate (PCC) from Passport Seva Kendra with Patiala House Apostille.
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
                Mandatory Documentation Checklist for Faridabad Applicants
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
                    <span><strong>Work Experience Letters:</strong> Verifiable service letters from Indian factories or prior overseas employers.</span>
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
                    <span><strong>Wafid Medical Report:</strong> Computerized GCC FIT slip issued by an accredited diagnostic clinic in South Delhi.</span>
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
        {/* SECTION 7: TRANSIT & CONNECTIVITY ACROSS FARIDABAD                   */}
        {/* ==================================================================== */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Effortless NCR Access
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                How Candidates in Faridabad Can Reach Our Sector 132 Noida Office
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Located just 22 to 26 km across the Yamuna corridor, visiting our Corporate Regional Headquarters takes less than 35 minutes by car or Delhi Metro.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Route 1: Road Drive */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold mb-4">
                  <FaCarSide className="text-lg" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Via Kalindi Kunj Expressway</h3>
                <p className="mt-1 text-xs text-emerald-700 font-semibold">25 to 35 Minutes • 22–26 KM</p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  Take Mathura Road (NH-44) north through Badarpur, take the right exit towards Kalindi Kunj Bridge onto the Noida-Greater Noida Expressway, and take the Sector 132 exit directly at Urbtech Trade Centre.
                </p>
              </div>

              {/* Route 2: Metro Transit */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-800 font-bold mb-4">
                  <FaTrainSubway className="text-lg" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Via Delhi Metro Violet &amp; Magenta Lines</h3>
                <p className="mt-1 text-xs text-teal-700 font-semibold">35 to 45 Minutes • Smooth Transit</p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  Board the Violet Line from any Faridabad station (Raja Nahar Singh, Bata Chowk, Old Faridabad, NHPC Chowk) to Kalkaji Mandir. Interchange to the Magenta Line to Botanical Garden (5 stations). Take a 10-minute cab or auto down the expressway to Sector 132.
                </p>
              </div>

              {/* Route 3: Bus & Shared Transit */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-bold mb-4">
                  <FaRoute className="text-lg" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Direct Faridabad-Noida Cabs</h3>
                <p className="mt-1 text-xs text-amber-700 font-semibold">Frequent Daily Connections</p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  Direct app-based cabs (Uber, Ola, Rapido) or carpools run round-the-clock from NIT Faridabad, Ballabhgarh, and Neharpar straight to Urbtech Trade Centre, Sector 132, offering comfortable door-to-door access without city congestion.
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
        {/* SECTION 8: AUTHENTIC TESTIMONIALS FROM FARIDABAD CANDIDATES         */}
        {/* ==================================================================== */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Verified Candidate Testimonials
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900">
                What Candidates from Faridabad Say About WorkWise Visa
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Real feedback from industrial machinists, pipe welders, and transport fleet drivers placed in verified overseas careers:
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
                  &ldquo;Faridabad Sector 24 industrial area me 8 saal CNC operator ke roop me kaam karne ke baad bhi meri salary ₹24,000 thi. WorkWise Visa ke Noida office jakar Poland Type-D visa ke liye apply kiya. 3 mahine ke andar Voivodeship permit aur visa stamp ho gaya. Aaj Poznań me kaam kar raha hoon aur har mahine ₹1,12,000 clean bachat kar raha hoon.&rdquo;
                </p>
                <div className="border-t border-slate-200 pt-3">
                  <div className="font-bold text-slate-900 text-sm">Gurpreet Singh</div>
                  <div className="text-xs text-slate-500">NIT Faridabad (Sector 1) • Placed in Poland (€1,250/mo)</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-4 shadow-2xs">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;Local agents NEOM ke naam par Ballabhgarh me ₹1.5 lakh advance maang rahe the. WorkWise Visa ke Sector 132 office gaya. Direct client interview hua, Takamol SVP test clear kiya aur transparent Qiwa contract par flight hui. NEOM Construction Village me 5-star jaisi facilities hain aur SAR 3,600 monthly salary regular aati hai.&rdquo;
                </p>
                <div className="border-t border-slate-200 pt-3">
                  <div className="font-bold text-slate-900 text-sm">Amit Sharma</div>
                  <div className="text-xs text-slate-500">Ballabhgarh, Faridabad • Placed at NEOM, Saudi Arabia (3,600 SAR/mo)</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-4 shadow-2xs">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;Mathura Road container depot par heavy truck chala raha tha. WorkWise Visa ke through Dubai logistics company me direct heavy trailer driver vacancy mili. Kalindi Kunj se unke office sirf 20 minute me pahunch gaya tha. Poori process legal aur transparent thi, zero fraud.&rdquo;
                </p>
                <div className="border-t border-slate-200 pt-3">
                  <div className="font-bold text-slate-900 text-sm">Rahul Verma</div>
                  <div className="text-xs text-slate-500">Old Faridabad (Sector 19) • Placed in Dubai (4,800 AED/mo)</div>
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
                  Anti-Fraud Advisory for Overseas Job Seekers in Faridabad
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
                Everything Candidates in Faridabad Need to Know About Overseas Work Visas
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Authoritative guidance on European national work permits, GCC employment visas, MEA Apostille attestation, and embassy processing workflows:
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {faridabadFaqs.map((faq, index) => (
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
                <Link href="/locations/delhi" className="hover:text-emerald-700 font-semibold underline">
                  Delhi Desk
                </Link>
                <span>•</span>
                <Link href="/locations/faridabad" className="hover:text-emerald-700 font-bold text-emerald-800">
                  Faridabad Desk
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
