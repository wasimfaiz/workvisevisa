const fs = require('fs');
const path = require('path');

const pageContent = `import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Overseas Work Visa & Recruitment in Chhapra (Saran) | WorkWise Visa",
  description:
    "Government-regulated overseas recruitment and work visa processing for candidates in Chhapra, Marhaura, and Saran district. Complete guidance on ECR/ECNR emigration clearance, Saudi Qiwa contracts, Wafid GAMCA medicals, European work permits, and zero-fraud protection.",
  keywords: [
    "work visa chhapra",
    "overseas recruitment agency chhapra saran",
    "gulf job consultancy chhapra bihar",
    "saudi work visa chhapra",
    "ecr emigration clearance saran",
    "gamca medical chhapra",
    "marhaura technician gulf recruitment",
    "europe work permit chhapra",
    "overseas employment agency saran division",
    "qatar work visa chhapra",
    "uae mohre contract verification saran",
    "poland work permit consultancy chhapra",
  ],
  alternates: {
    canonical: "https://www.workwisevisa.com/locations/chhapra",
  },
  openGraph: {
    title: "Overseas Work Visa & Recruitment in Chhapra (Saran) | WorkWise Visa",
    description:
      "Authoritative overseas employment, work visa processing, and government-regulated recruitment assistance for skilled workers, locomotive technicians, and industrial craftsmen across Chhapra and Saran Division.",
    url: "https://www.workwisevisa.com/locations/chhapra",
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Overseas Work Visa & Recruitment in Chhapra (Saran) | WorkWise Visa",
    description:
      "Reliable overseas employment, ECR emigration assistance, GAMCA medical clearance, and verified work visas for candidates across Chhapra, Marhaura, Revelganj, and Saran district.",
  },
};

export default function ChhapraLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EmploymentAgency",
        "@id": "https://www.workwisevisa.com/locations/chhapra#agency",
        name: "WorkWise Visa - Chhapra & Saran Division Career Assistance Desk",
        url: "https://www.workwisevisa.com/locations/chhapra",
        logo: "https://www.workwisevisa.com/logo.png",
        image: "https://www.workwisevisa.com/images/hero-bg.jpg",
        description:
          "Authoritative overseas employment consultancy and work visa documentation advisory serving aspiring emigrants, technical craftsmen, mechanical fitters, and industrial trades across Chhapra and Saran Division, Bihar.",
        telephone: "+91-98765-43210",
        email: "support@workwisevisa.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Candidate Assistance Liaison Desk, Near Chhapra Junction, Station Road",
          addressLocality: "Chhapra",
          addressRegion: "Bihar",
          postalCode: "841301",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.7811,
          longitude: 84.7543,
        },
        areaServed: [
          { "@type": "City", name: "Chhapra" },
          { "@type": "AdministrativeArea", name: "Saran District" },
          { "@type": "AdministrativeArea", name: "Marhaura" },
          { "@type": "AdministrativeArea", name: "Revelganj" },
          { "@type": "AdministrativeArea", name: "Garkha" },
          { "@type": "AdministrativeArea", name: "Dighwara" },
          { "@type": "AdministrativeArea", name: "Sonepur" },
          { "@type": "AdministrativeArea", name: "Parsa" },
          { "@type": "AdministrativeArea", name: "Baniapur" },
          { "@type": "AdministrativeArea", name: "Jalalpur" },
          { "@type": "AdministrativeArea", name: "Ekma" },
          { "@type": "AdministrativeArea", name: "Manjhi" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:30",
            closes: "18:30",
          },
        ],
        priceRange: "₹₹",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.workwisevisa.com/locations/chhapra#breadcrumb",
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
            name: "Chhapra",
            item: "https://www.workwisevisa.com/locations/chhapra",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.workwisevisa.com/locations/chhapra#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How fast can candidates from Chhapra reach POE Patna for emigration clearance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Chhapra is situated barely 45 to 50 km from Patna. Candidates can travel directly via the JP Setu (Digha-Pahleza Bridge) / NH-31 or board frequent MEMU trains from Chhapra Junction (CPR) to Patliputra Junction (PPTA) in approximately 1 hour to 1 hour 15 minutes, allowing candidates to complete POE Patna emigration procedures and return home the same day.",
            },
          },
          {
            "@type": "Question",
            name: "Can candidates holding ECR passports from Chhapra travel legally to Saudi Arabia or UAE?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, candidates holding Emigration Check Required (ECR) passports from Chhapra can travel completely legally once Emigration Clearance (EC) is obtained via the eMigrate 2.0 portal through POE Patna. WorkWise Visa ensures verified digital contracts on Saudi Qiwa or UAE MoHRE, pre-enrolled PBBY insurance of ₹10 Lakh, and authenticated employer demand letters.",
            },
          },
          {
            "@type": "Question",
            name: "Where do Chhapra candidates undergo GAMCA / Wafid medical examinations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "There are no authorized Wafid (GAMCA) medical centers in Chhapra or Saran district. Candidates register through wafid.com and receive an automated appointment slip for accredited diagnostic centers in Patna (Boring Road, Fraser Road, and Raja Bazar), which is easily accessible via road or train in just over an hour.",
            },
          },
          {
            "@type": "Question",
            name: "What overseas technical job opportunities are available for Marhaura industrial craftsmen?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "With Marhaura's established diesel locomotive engineering and mechanical industrial heritage, certified technicians such as CNC machine operators, heavy equipment fitters, 6G arc/argon welders, and industrial electricians are in high demand across Saudi Arabia (Neom, Aramco), UAE, Qatar, and European manufacturing centers in Poland and Romania.",
            },
          },
          {
            "@type": "Question",
            name: "How can candidates from Chhapra protect themselves from local unaccredited visa brokers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Candidates must verify that their recruitment agency holds an active Registration Certificate (RC) issued by the Ministry of External Affairs (MEA) on emigrate.gov.in. Never pay advance cash for 'free visas' (Azad Visa) or accept tourist/visit visas for foreign employment.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="min-h-screen bg-slate-50 text-slate-800">
        {/* HERO SECTION - Zero White Gap, Zero Left CTAs */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column - High-Authority Narrative (Zero Left CTAs) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-semibold tracking-wide uppercase">
                  <FaShieldHalved className="text-indigo-400" />
                  Saran Division Overseas Employment Gateway
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Work Visa & Overseas Recruitment in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">
                    Chhapra (Saran)
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-justify">
                  Empowering technical craftsmen, industrial mechanics, locomotive fitters, civil artisans, and heavy vehicle operators across Chhapra, Marhaura, Revelganj, Garkha, Sonepur, and Saran district with 100% government-regulated international employment. Direct POE Patna eMigrate clearances, Saudi Qiwa electronic contracts, Wafid GAMCA medical facilitation, and verified European work permits without illegal middleman exploitation.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg font-bold text-indigo-400">45 Mins</div>
                    <div className="text-xs text-slate-400 font-medium">To POE Patna</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg font-bold text-sky-400">100% Legal</div>
                    <div className="text-xs text-slate-400 font-medium">eMigrate & Qiwa</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg font-bold text-emerald-400">₹10 Lakh</div>
                    <div className="text-xs text-slate-400 font-medium">PBBY Cover</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg font-bold text-amber-400">Direct Gulf</div>
                    <div className="text-xs text-slate-400 font-medium">&amp; Europe Jobs</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                  <span className="inline-flex items-center gap-1.5">
                    <FaCircleCheck className="text-emerald-400" /> MEA Registered Agency Network
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FaCircleCheck className="text-emerald-400" /> Wafid Patna Clinic Coordination
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FaCircleCheck className="text-emerald-400" /> Marhaura Industrial Trade Testing
                  </span>
                </div>
              </div>

              {/* Right Column - Universal Candidate Career Desk Card */}
              <div className="lg:col-span-5">
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative">
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Active Liaison Desk
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    Candidate Career Assistance Desk
                  </h3>
                  <p className="text-xs text-slate-400 mb-6">
                    Direct liaison support for candidates across Chhapra, Marhaura, Sonepur, and Saran district.
                  </p>

                  <div className="space-y-4 text-sm text-slate-300">
                    <div className="flex items-start gap-3">
                      <FaLocationDot className="text-indigo-400 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-white block">Regional Liaison Desk:</strong>
                        <span>Station Road, Near Chhapra Junction (CPR), Chhapra, Bihar 841301</span>
                        <p className="text-xs text-slate-400 mt-0.5">Primary Processing Center: Varma Centre, Boring Road, Patna (45 km away)</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaWhatsapp className="text-emerald-400 flex-shrink-0 text-base" />
                      <div>
                        <strong className="text-white block">WhatsApp Helpline:</strong>
                        <a href="https://wa.me/919876543210" className="text-slate-300 hover:text-emerald-400 transition-colors">
                          +91 98765 43210 (Direct Verification)
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaPhone className="text-sky-400 flex-shrink-0 text-base" />
                      <div>
                        <strong className="text-white block">Toll-Free Counseling:</strong>
                        <a href="tel:18001234567" className="text-slate-300 hover:text-sky-400 transition-colors">
                          1800-123-4567 (Mon-Sat, 9:30 AM - 6:30 PM)
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-indigo-400 flex-shrink-0 text-base" />
                      <div>
                        <strong className="text-white block">Verification Desk:</strong>
                        <span className="text-slate-300">chhapra.desk@workwisevisa.com</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaClock className="text-amber-400 flex-shrink-0 text-base" />
                      <div>
                        <strong className="text-white block">Operating Schedule:</strong>
                        <span className="text-slate-300">Mon to Sat: 9:30 AM - 6:30 PM (Sunday Closed)</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>Direct POE Patna Fast-Track</span>
                    <span className="text-emerald-400 font-semibold">100% Anti-Scam Verification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: Strategic Emigration Landscape of Chhapra & Saran Division */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-200">
                Regional Economic Dynamics & Migration Demographics
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                The Overseas Employment Landscape of Chhapra & Saran District
              </h2>
              <div className="w-16 h-1 bg-indigo-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Chhapra, the venerable administrative capital of Saran Division (which encompasses the renowned migration triad of Saran, Siwan, and Gopalganj), occupies a legendary position in India&apos;s overseas employment history. Situated strategically along the northern banks of the sacred Ghaghara and Ganga confluence, Saran district has for generations dispatched resilient, skilled, and dedicated workers to international employment destinations across the Middle East, Southeast Asia, and more recently, Central and Eastern Europe. Spanning across dynamic industrial, commercial, and peri-urban blocks including Marhaura, Revelganj, Garkha, Dighwara, Sonepur, Parsa, Baniapur, Jalalpur, Ekma, Manjhi, Taraiya, Ishuapur, Panapur, Maker, and Amnour, the district is a powerhouse of technical and mechanical manpower.
              </p>

              <p>
                Unlike traditional non-industrial agricultural districts, Saran boasts a unique technical foundation anchored by major engineering milestones, notably the <strong>Marhaura Diesel Locomotive Factory</strong> (established in partnership with GE / Wabtec) and the historic railway engineering heritage centered around Sonepur. As a result, thousands of local youths possess advanced technical competencies in diesel mechanics, heavy machinery operation, CNC tooling, precision lathe turning, 6G structural welding, pipe fitting, and industrial electrical instrumentation. These specific qualifications are prized by premier engineering conglomerates across the Kingdom of Saudi Arabia, the United Arab Emirates, Qatar, Kuwait, Oman, and European nations like Poland and Romania.
              </p>

              <p>
                Furthermore, Chhapra holds a monumental logistical advantage over all other North Bihar districts: its extraordinary proximity to Patna. Connected directly across the river Ganges via the state-of-the-art <strong>JP Setu (Digha-Pahleza Bridge)</strong> on NH-31, Chhapra is situated barely 45 to 50 kilometers from Patna. This allows local job seekers to access the <strong>Protector of Emigrants (POE) Patna</strong>, the Department of Higher Education (State HRD) at Vikas Bhawan, and GCC-authorized GAMCA / Wafid diagnostic clinics in Boring Road and Fraser Road within 45 to 60 minutes of travel, eliminating the burdensome overnight lodging expenses endured by candidates from more distant regions.
              </p>

              <p>
                WorkWise Visa leverages this geographic and demographic synergy to establish a zero-exploitation recruitment corridor for Saran candidates. By providing transparent contract verification, direct client interview schedules, and end-to-end eMigrate documentation, we empower the craftsmen of Chhapra to transition safely into high-paying, legally protected overseas careers.
              </p>
            </div>

            {/* Micro-Demographic Breakdown Table */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FaBuildingColumns className="text-indigo-600" />
                Key Trade Clusters Across Saran District
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-700">
                  <thead className="bg-slate-100 text-slate-900 uppercase text-xs font-semibold">
                    <tr>
                      <th className="py-3 px-4 border-b border-slate-200">Block / Sub-Division</th>
                      <th className="py-3 px-4 border-b border-slate-200">Dominant Talent &amp; Skill Cohort</th>
                      <th className="py-3 px-4 border-b border-slate-200">Primary Overseas Destinations</th>
                      <th className="py-3 px-4 border-b border-slate-200">Critical Compliance Requirements</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Marhaura &amp; Amnour</td>
                      <td className="py-3 px-4">Diesel engine mechanics, locomotive fitters, CNC machinists, tool &amp; die makers</td>
                      <td className="py-3 px-4">Saudi Arabia (Aramco / NEOM), Poland, Romania</td>
                      <td className="py-3 px-4">Takamol Skill Verification (SVP), Voivodeship work permit</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Chhapra Urban &amp; Revelganj</td>
                      <td className="py-3 px-4">Commercial drivers (GCC license holders), warehouse operators, retail executives</td>
                      <td className="py-3 px-4">UAE (Dubai RTA), Qatar, Kuwait</td>
                      <td className="py-3 px-4">WPS payroll verification, GCC license conversion testing</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Garkha &amp; Dighwara</td>
                      <td className="py-3 px-4">Structural fabricators, 6G TIG-MIG welders, pipe fitters, rigging artisans</td>
                      <td className="py-3 px-4">Qatar (QVC Doha), Saudi Arabia, Croatia</td>
                      <td className="py-3 px-4">QVC biometrics, POE Patna ECR clearance</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Sonepur &amp; Parsa</td>
                      <td className="py-3 px-4">Civil construction craftsmen, shuttering carpenters, industrial electricians, tile fixers</td>
                      <td className="py-3 px-4">Saudi Arabia, UAE, Bahrain, Oman</td>
                      <td className="py-3 px-4">Wafid GAMCA medical clearance, PBBY ₹10 Lakh insurance</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Baniapur, Ekma &amp; Manjhi</td>
                      <td className="py-3 px-4">Heavy equipment operators (Excavator, Crane, Shovel), trailer drivers, agricultural operatives</td>
                      <td className="py-3 px-4">Kuwait, Saudi Arabia, Hungary, Romania</td>
                      <td className="py-3 px-4">RPO Patna apostilled PCC, Type D national visa</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Indian Legal Emigration Architecture: ECR vs ECNR & POE Patna */}
        <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Statutory Regulatory Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Emigration Act 1983: Fast-Track Clearance via POE Patna
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Emigration for employment is strictly regulated under the <strong>Emigration Act, 1983</strong>, administered by the Ministry of External Affairs (MEA), Government of India. The primary purpose of this statutory framework is to insulate Indian citizens from contractual deceit, illegal exploitation, and unsafe overseas conditions. Under Section 22 of the Act, every citizen holding an <strong>Emigration Check Required (ECR)</strong> passport is legally barred from departing India for overseas work in any of the 18 notified ECR nations without formal Emigration Clearance (EC) granted by the designated Protector of Emigrants (POE).
              </p>

              <p>
                Because Saran district falls under the direct jurisdiction of the <strong>Protector of Emigrants (POE) Patna</strong>, located in the state capital, candidates from Chhapra enjoy unprecedented convenience. With the modernization of the <strong>eMigrate 2.0 portal</strong> (<a href="https://emigrate.gov.in" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline">emigrate.gov.in</a>), physical visits are rarely required for standard processing; however, should an interview or document clarification be requested by the POE, Chhapra applicants can reach the POE office in Maurya Lok Complex / Boring Road in under an hour.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-indigo-400 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <FaPassport className="text-amber-500 text-2xl" />
                    <h4 className="text-lg font-bold text-slate-900">ECR Status (Emigration Check Required)</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Assigned to citizens who have not cleared the Class 10 (Matriculation) board examination. Passports bear the explicit stamp &quot;Emigration Check Required&quot;.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Mandatory eMigrate Clearance:</strong> Online verification of foreign employer quota and employment contract through POE Patna.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Statutory PBBY Insurance:</strong> Mandatory enrollment in Pravasi Bharatiya Bima Yojana offering ₹10 Lakh sum insured.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Airport Offloading Prevention:</strong> Prevents immigration detention and flight offloading at Patna, Kolkata, or Delhi airports.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-emerald-400 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <FaIdCard className="text-emerald-600 text-2xl" />
                    <h4 className="text-lg font-bold text-slate-900">ECNR Status (Non-ECR Eligible)</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Assigned to individuals holding educational qualifications of Class 10 (Matriculation) and above, polytechnic diploma holders, taxpayers, and professionals.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Direct Airport Clearance:</strong> No requirement for prior POE exit permits at immigration departure counters.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Consular Protection:</strong> Full access to Indian Embassy support via the MADAD grievance redressal system abroad.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Degree HRD Attestation:</strong> Fast attestation at Vikas Bhawan, Patna followed by MEA Apostille for professional jobs.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p>
                Every emigrant worker processed via WorkWise Visa receives an authenticated policy under the <strong>Pravasi Bharatiya Bima Yojana (PBBY)</strong>, guaranteeing comprehensive life, disability, and repatriation coverage backed by statutory Indian law:
              </p>
            </div>

            {/* PBBY Schedule of Benefits Table */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FaShieldHalved className="text-emerald-600" />
                Pravasi Bharatiya Bima Yojana (PBBY) Mandatory Benefits Schedule
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-700">
                  <thead className="bg-slate-100 text-slate-900 uppercase text-xs font-semibold">
                    <tr>
                      <th className="py-3 px-4 border-b border-slate-200">Coverage Head</th>
                      <th className="py-3 px-4 border-b border-slate-200">Statutory Sum Insured</th>
                      <th className="py-3 px-4 border-b border-slate-200">Coverage Conditions &amp; Operational Scope</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Accidental Demise / Permanent Disability</td>
                      <td className="py-3 px-4 font-bold text-emerald-600">₹10,00,000</td>
                      <td className="py-3 px-4">Payable to registered nominee in Chhapra/Saran upon accidental fatality or permanent total disability overseas.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Mortal Remains Repatriation</td>
                      <td className="py-3 px-4 font-bold text-slate-800">Actual Cost + Airfare</td>
                      <td className="py-3 px-4">Full coverage for embalming, coffin, air cargo to Patna plus return airfare for one accompanying attendant.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Medical Inpatient Hospitalization</td>
                      <td className="py-3 px-4 font-bold text-slate-800">₹1,00,000 (Abroad) / ₹50,000 (India)</td>
                      <td className="py-3 px-4">Emergency treatment expenditure abroad or within India upon medically certified repatriation.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Legal Defense &amp; Litigation Assistance</td>
                      <td className="py-3 px-4 font-bold text-slate-800">₹45,000</td>
                      <td className="py-3 px-4">Reimbursement of legal representation expenses in disputes involving contract violation or unpaid wages abroad.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Repatriation on Employer Ineligibility</td>
                      <td className="py-3 px-4 font-bold text-slate-800">One-way Economy Airfare</td>
                      <td className="py-3 px-4">Guaranteed return flight to India if the overseas employer fails to provide agreed work or violates contract terms.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Country-Specific Work Visa Protocols & Compliance Architecture */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                International Compliance Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Country-Specific Work Permit Architectures: Gulf &amp; Europe
              </h2>
              <div className="w-16 h-1 bg-sky-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Foreign employment requires strict alignment with the sovereign immigration frameworks of host nations. Whether deploying to industrial mega-projects in Saudi Arabia, transport authorities in Dubai, or manufacturing complexes in Central Europe, WorkWise Visa ensures compliance at every stage.
              </p>
            </div>

            {/* Country Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Saudi Arabia */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-2xl">🇸🇦</span> Kingdom of Saudi Arabia (KSA)
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                    Qiwa &amp; SVP Mandatory
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  Employment in Saudi Arabia is governed by the <strong>Qiwa Electronic Platform</strong> (<a href="https://qiwa.sa" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline">qiwa.sa</a>) under the Ministry of Human Resources and Social Development (MHRSD). Every valid employment contract is registered electronically, detailing wage breakdowns, accommodation terms, medical insurance classes, and job categories under Articles 50–55 of the Saudi Labor Law.
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
                  <div className="font-semibold text-slate-900">Key Pillars for Chhapra Candidates:</div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Takamol Skill Verification Program (SVP):</strong> Mandatory professional theory and practical examination for technical crafts (electricians, welders, mechanics) before visa stamping.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Muqeem Digital Visa Stamping:</strong> Fully automated electronic visa synchronization with the Absher system.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Wages Protection System (WPS / Mudad):</strong> Direct bank account salary disbursement within Saudi Arabia.</span>
                  </div>
                </div>
              </div>

              {/* United Arab Emirates */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-2xl">🇦🇪</span> United Arab Emirates (UAE)
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-1 bg-sky-100 text-sky-800 rounded-full">
                    MoHRE Standardized Offer
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  Governed by Federal Decree-Law No. 33 of 2021, all UAE recruitment must commence with an official <strong>MoHRE 12-page Standardized Offer Letter</strong> bearing a unique barcode and ST reference number. Working on tourist or visit visas is strictly illegal and subject to severe penalties and lifetime blacklisting.
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
                  <div className="font-semibold text-slate-900">Crucial UAE Compliance Safeguards:</div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Electronic Work Permit (E-Visa):</strong> Issued by GDRFA (Dubai) or ICP (Abu Dhabi) prior to boarding from India.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Wages Protection System (WPS):</strong> Central Bank-monitored electronic payroll cards guaranteeing timely salaries.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Mandatory ILOE Insurance:</strong> State unemployment protection scheme ensuring income security.</span>
                  </div>
                </div>
              </div>

              {/* State of Qatar */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-2xl">🇶🇦</span> State of Qatar
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-1 bg-purple-100 text-purple-800 rounded-full">
                    QVC Biometric Processing
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  Qatari work visa issuance operates through designated <strong>Qatar Visa Centers (QVC)</strong> in Indian metros. Under the oversight of Qatar&apos;s Ministry of Interior (MOI) and Ministry of Labour (MADLSA), candidates complete iris biometric capture, electronic contract execution, and medical tests prior to international departure.
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
                  <div className="font-semibold text-slate-900">Key Protections for Qatari Employment:</div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Digital Hindi Contract:</strong> Candidate reviews and electronically signs the contract in Hindi/English at the QVC terminal.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Statutory Minimum Wage:</strong> Non-negotiable base of QAR 1,000 + QAR 500 housing + QAR 300 food allowance.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Zero Candidate Fees:</strong> All QVC operational charges are paid directly by the Qatari hiring enterprise.</span>
                  </div>
                </div>
              </div>

              {/* Central & Eastern Europe */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-2xl">🇪🇺</span> Central &amp; Eastern Europe (Poland, Romania, Croatia)
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                    Type D National Employment
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  Saran&apos;s industrial mechanics, welders, and logistics operators are increasingly securing legal European careers anchored by official government work authorizations: Polish <em>Zezwolenie na Pracę</em> (Voivodeship Permit), Romanian <em>Aviz de Muncă</em>, and Croatian <em>HZZ</em> permits.
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
                  <div className="font-semibold text-slate-900">European Work Visa Prerequisites:</div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>National Type D Visa:</strong> Stamped by embassy consular sections or VFS Centers in New Delhi.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Apostilled Police Clearance (PCC):</strong> Issued by RPO Patna and apostilled by MEA Patiala House.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Path to Permanent Residency:</strong> Eligibility for Temporary Residence Cards (TRC) and European health coverage.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: GAMCA / Wafid Medical Protocol for Chhapra Candidates */}
        <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded border border-rose-200">
                Mandatory Health Screening
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                GAMCA / Wafid Medical Protocol &amp; Direct Patna Center Access
              </h2>
              <div className="w-16 h-1 bg-rose-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Candidates seeking employment in the six GCC member nations (Saudi Arabia, UAE, Qatar, Kuwait, Oman, and Bahrain) are legally required to undergo pre-employment medical screening regulated by the <strong>Gulf Health Council</strong> under the <strong>Wafid</strong> platform (formerly widely known as <strong>GAMCA</strong>). Prospective emigrants must register exclusively via the official government portal at <a href="https://wafid.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline">wafid.com</a>, generate their official appointment slip, and pay the central registration fee.
              </p>

              <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-lg not-prose my-4">
                <div className="flex items-start gap-3">
                  <FaTriangleExclamation className="text-rose-600 text-lg mt-0.5 flex-shrink-0" />
                  <div className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                    <strong>Critical Advisory for Saran Candidates:</strong> There are <em>no accredited Wafid (GAMCA) medical centers</em> located in Chhapra or Saran district. Any local pathology laboratory or middleman in Chhapra claiming to issue official GAMCA medical fitness certificates is running an illegal fraud. The Wafid centralized portal automatically allocates candidates in Saran district to authorized medical facilities in <strong>Patna</strong> (approx. 45 to 50 km away via JP Setu across the Ganges).
                  </div>
                </div>
              </div>

              <p>
                Because Chhapra candidates can reach Patna in under an hour via road (JP Setu) or rail (frequent MEMU trains across the Digha bridge), medical clearance is exceptionally fast and cost-effective. The examination includes:
              </p>
            </div>

            {/* Diagnostic Parameters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
                  <FaHospital /> Radiographic Screening
                </div>
                <h4 className="font-bold text-slate-900 text-base">Digital Chest X-Ray (PA View)</h4>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  Evaluates for active or healed pulmonary tuberculosis, calcified nodules, pleural thickening, or apical scarring. Candidates with past respiratory illnesses must undergo preliminary evaluation in Chhapra to rule out X-ray shadows prior to booking their binding Wafid test.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                  <FaSuitcaseMedical /> Serological Screening
                </div>
                <h4 className="font-bold text-slate-900 text-base">Infectious Disease Serology</h4>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  Mandatory automated testing for HIV 1 &amp; 2 antibodies, Hepatitis B Surface Antigen (HBsAg), Hepatitis C Antibodies (Anti-HCV), and Syphilis (VDRL / TPHA). Complete blood counts must be free of major hematological disorders.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                  <FaShieldHalved /> Biochemistry &amp; Physical
                </div>
                <h4 className="font-bold text-slate-900 text-base">Systemic Organ Evaluation</h4>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  Fasting blood glucose, serum creatinine, SGPT/SGOT liver enzyme profiling, blood pressure monitoring (under 140/90 mmHg), color vision testing for electricians and drivers, and comprehensive urinalysis for albumin and controlled substances.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm text-sm text-slate-700 space-y-3">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <FaCircleCheck className="text-emerald-500" />
                Transit Logistics: Seamless Patna GAMCA Center Access from Chhapra
              </h4>
              <p className="text-justify leading-relaxed">
                Candidates from Chhapra can depart via <strong>National Highway 31 / JP Setu</strong> in the morning and reach authorized diagnostic centers along Boring Road, Fraser Road, and Raja Bazar in Patna in just 45 to 60 minutes. Fast MEMU trains from Chhapra Junction (CPR) to Patliputra Junction (PPTA) take only 50 minutes. WorkWise Visa offers preliminary checkups to verify blood pressure and liver enzymes in advance, guaranteeing zero medical surprises.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: Marhaura Engineering & Industrial Trade Excellence */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded border border-purple-200">
                Industrial Engineering Heritage
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Marhaura Locomotive &amp; Saran Technical Craftsmen Overseas Deployment
              </h2>
              <div className="w-16 h-1 bg-purple-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Saran district possesses an unmatched industrial engineering pedigree. The establishment of the <strong>Marhaura Diesel Locomotive Factory</strong> and surrounding ancillary engineering units has fostered a generation of high-caliber mechanical technicians. Unlike general laborers, craftsmen from Marhaura, Garkha, and Chhapra possess practical experience working with heavy diesel engines, hydraulic circuits, high-voltage traction systems, precision CNC machine tools, and complex piping systems.
              </p>

              <p>
                In the modern international market, these competencies translate into high-demand, premium-salary overseas employment opportunities:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 not-prose my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center mx-auto text-sm">1</div>
                  <div className="font-bold text-slate-900 text-sm">Mechanical Fitters</div>
                  <div className="text-xs text-slate-600">Heavy diesel engine overhauling, hydraulic pump alignment, and industrial gearbox assembly.</div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center mx-auto text-sm">2</div>
                  <div className="font-bold text-slate-900 text-sm">6G Welders &amp; Fabricators</div>
                  <div className="text-xs text-slate-600">TIG, MIG, and Submerged Arc Welding (SAW) for oil pipelines, refinery pressure vessels, and steel bridges.</div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center mx-auto text-sm">3</div>
                  <div className="font-bold text-slate-900 text-sm">CNC &amp; Lathe Operators</div>
                  <div className="text-xs text-slate-600">Precision component machining, milling, and computer numerical control operations in EU manufacturing plants.</div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center mx-auto text-sm">4</div>
                  <div className="font-bold text-slate-900 text-sm">Heavy Plant Operators</div>
                  <div className="text-xs text-slate-600">Crawler crane, 100-ton hydraulic mobile crane, and multi-axle trailer operators for Gulf infrastructure.</div>
                </div>
              </div>

              <p>
                WorkWise Visa conducts rigorous trade evaluations and prepares Marhaura technicians for official Takamol SVP certifications and European employer trade tests, ensuring candidates secure maximum basic wages and direct supervisory roles.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: Comparative Salary & Allowance Benchmark Table */}
        <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-200">
                Transparent Compensation Benchmarks
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Overseas Wage &amp; Benefits Benchmark for Saran Craftsmen
              </h2>
              <div className="w-16 h-1 bg-indigo-600 mt-2 rounded"></div>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed text-justify">
              Financial transparency protects candidates from wage theft and deceptive broker promises. Below is an authentic benchmark of prevailing monthly basic salaries and mandatory benefits across 12 key industrial, technical, and transport trades for workers deployed from Chhapra and Saran district.
            </p>

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                  <thead className="bg-slate-900 text-white uppercase text-xs">
                    <tr>
                      <th className="py-3.5 px-4">Trade / Professional Specialization</th>
                      <th className="py-3.5 px-4">Saudi Arabia (SAR)</th>
                      <th className="py-3.5 px-4">UAE (AED)</th>
                      <th className="py-3.5 px-4">Qatar (QAR)</th>
                      <th className="py-3.5 px-4">Kuwait (KWD)</th>
                      <th className="py-3.5 px-4">Europe (EUR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Locomotive / Diesel Engine Mechanic</td>
                      <td className="py-3 px-4">2,200 - 3,200 + Food + Acc</td>
                      <td className="py-3 px-4">2,500 - 3,500 + Acc</td>
                      <td className="py-3 px-4">2,400 - 3,300 + Food + Acc</td>
                      <td className="py-3 px-4">190 - 260 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€1,100 - €1,500 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Structural / 6G TIG-MIG Welder</td>
                      <td className="py-3 px-4">1,800 - 2,500 + Food + Acc</td>
                      <td className="py-3 px-4">2,000 - 2,800 + Acc</td>
                      <td className="py-3 px-4">1,900 - 2,600 + Food + Acc</td>
                      <td className="py-3 px-4">160 - 220 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€950 - €1,300 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">CNC &amp; Precision Lathe Machinist</td>
                      <td className="py-3 px-4">1,800 - 2,600 + Food + Acc</td>
                      <td className="py-3 px-4">2,100 - 2,800 + Acc</td>
                      <td className="py-3 px-4">2,000 - 2,700 + Food + Acc</td>
                      <td className="py-3 px-4">170 - 230 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€1,000 - €1,400 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Industrial Electrician &amp; Wireman</td>
                      <td className="py-3 px-4">1,600 - 2,200 + Food + Acc</td>
                      <td className="py-3 px-4">1,800 - 2,400 + Acc</td>
                      <td className="py-3 px-4">1,700 - 2,300 + Food + Acc</td>
                      <td className="py-3 px-4">140 - 190 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€900 - €1,200 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Heavy Mobile Crane Operator</td>
                      <td className="py-3 px-4">2,400 - 3,500 + Food + Acc</td>
                      <td className="py-3 px-4">2,600 - 3,800 + Acc</td>
                      <td className="py-3 px-4">2,500 - 3,600 + Food + Acc</td>
                      <td className="py-3 px-4">210 - 290 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€1,200 - €1,600 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Heavy Commercial Trailer Driver</td>
                      <td className="py-3 px-4">2,400 - 3,200 + Trip Allow</td>
                      <td className="py-3 px-4">2,600 - 3,600 + Trip Allow</td>
                      <td className="py-3 px-4">2,500 - 3,400 + Trip Allow</td>
                      <td className="py-3 px-4">200 - 280 + Trip Allow</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€1,300 - €1,800 + Trip</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Pipe Fitter &amp; Spool Fabricator</td>
                      <td className="py-3 px-4">1,500 - 2,000 + Food + Acc</td>
                      <td className="py-3 px-4">1,700 - 2,200 + Acc</td>
                      <td className="py-3 px-4">1,600 - 2,100 + Food + Acc</td>
                      <td className="py-3 px-4">130 - 180 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€850 - €1,150 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">HVAC Chiller &amp; Duct Technician</td>
                      <td className="py-3 px-4">1,700 - 2,400 + Food + Acc</td>
                      <td className="py-3 px-4">1,900 - 2,600 + Acc</td>
                      <td className="py-3 px-4">1,800 - 2,500 + Food + Acc</td>
                      <td className="py-3 px-4">150 - 200 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€950 - €1,250 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Shuttering Carpenter &amp; Steel Fixer</td>
                      <td className="py-3 px-4">1,300 - 1,700 + Food + Acc</td>
                      <td className="py-3 px-4">1,400 - 1,800 + Acc</td>
                      <td className="py-3 px-4">1,350 - 1,750 + Food + Acc</td>
                      <td className="py-3 px-4">110 - 150 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€800 - €1,050 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Light Commercial Driver (GCC Valid)</td>
                      <td className="py-3 px-4">1,600 - 2,100 + Food + Acc</td>
                      <td className="py-3 px-4">2,000 - 2,600 + Acc</td>
                      <td className="py-3 px-4">1,800 - 2,300 + Food + Acc</td>
                      <td className="py-3 px-4">140 - 180 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€900 - €1,200 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Mechanical Maintenance Foreman</td>
                      <td className="py-3 px-4">3,200 - 4,800 + Food + Acc</td>
                      <td className="py-3 px-4">3,800 - 5,500 + Acc</td>
                      <td className="py-3 px-4">3,500 - 5,200 + Food + Acc</td>
                      <td className="py-3 px-4">280 - 420 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€1,500 - €2,200 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Warehouse &amp; Logistics Operative</td>
                      <td className="py-3 px-4">1,300 - 1,800 + Food + Acc</td>
                      <td className="py-3 px-4">1,500 - 2,000 + Acc</td>
                      <td className="py-3 px-4">1,400 - 1,900 + Food + Acc</td>
                      <td className="py-3 px-4">120 - 160 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€850 - €1,150 + Acc</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500">
                * Note: Gulf employment packages include standard 8 hours/day, 6 days/week with statutory 1.25x - 1.5x overtime under host labor laws. European positions feature EU 40-hour work weeks, 20-25 days paid annual leave, and state social healthcare coverage.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Anti-Fraud Intelligence & Exposing Local Unlicensed Agents */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded border border-rose-200">
                Public Interest Protection Advisory
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Anti-Fraud Intelligence: Protecting Chhapra Workers from Unlicensed Touts
              </h2>
              <div className="w-16 h-1 bg-rose-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Due to the immense migration volume from Saran Division, illegal sub-agent syndicates routinely operate temporary liaison shops around Chhapra Junction (CPR), Brahampur, Municipal Chowk, and along the Garkha-Marhaura road. These unlicensed touts deceive naive workers by promising lucrative overseas jobs, demanding advance cash payments of ₹1 Lakh to ₹2.5 Lakhs, and issuing forged tourist visas or bogus paper work permits.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
                <div className="bg-rose-50/60 border border-rose-200 rounded-xl p-5 space-y-3">
                  <h4 className="font-bold text-rose-950 flex items-center gap-2 text-base">
                    <FaTriangleExclamation className="text-rose-600" />
                    Major Deceptive Rackets Uncovered in Chhapra
                  </h4>
                  <ul className="text-xs text-rose-900 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span><strong>The &quot;Azad Visa&quot; Swindle:</strong> Brokers charge exorbitant sums for a so-called &quot;Free Visa&quot; that allows working anywhere. Under Saudi Labor Law Article 39 and UAE Federal Law, working for anyone other than your direct Iqama sponsor is a criminal offense leading to immediate arrest and deportation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span><strong>Tourist Visa Traps:</strong> Sending job seekers to Dubai or Riyadh on short-term visit visas, promising local employment conversion. Victims are stranded without labor rights, medical insurance, or legal recourse.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span><strong>Forged European Job Offers:</strong> Fabricated letters purporting to be from Polish, Czech, or Romanian construction firms with fake embassy seals, demanding massive non-refundable cash deposits.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span><strong>Passport Seizure &amp; Extortion:</strong> Withholding original passports to prevent candidates from verifying offers or seeking legitimate employment through registered channels.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-5 space-y-3">
                  <h4 className="font-bold text-emerald-950 flex items-center gap-2 text-base">
                    <FaShieldHalved className="text-emerald-600" />
                    Statutory Verification Checklist Before Paying Any Money
                  </h4>
                  <ul className="text-xs text-emerald-900 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Verify MEA Registration Certificate (RC):</strong> Confirm on <em>emigrate.gov.in &gt; Search Recruiting Agent</em> that the recruiting agency possesses an active, valid MEA license.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Check Electronic Demand Letter (EDL):</strong> Legal overseas job opportunities carry a verified EDL registered through the Indian Embassy in the host country and cleared by POE Patna.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Only Banking Channel Transactions:</strong> Never pay cash. Approved service charges must be transacted through documented bank transfers with statutory GST invoices.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Direct Grievance with POE Patna:</strong> You can report fraudulent agents directly to POE Patna via email at <em>poepatna@mea.gov.in</em> or through the MADAD portal.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p>
                WorkWise Visa adheres to a strict zero-advance cash policy. Every stage of your recruitment—from trade testing to visa generation—is verifiable directly on official government databases.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: Technical Multilingual Worksite Terminology Glossary */}
        <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                Worksite Communication Readiness
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Multilingual Technical Worksite Terminology: Arabic &amp; European Glossary
              </h2>
              <div className="w-16 h-1 bg-amber-600 mt-2 rounded"></div>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed text-justify">
              Mastering foundational technical vocabulary before departure empowers tradesmen from Chhapra to communicate effectively with multinational supervisors, pass safety drills, and earn early promotions on foreign worksites.
            </p>

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                  <thead className="bg-slate-900 text-white uppercase text-xs">
                    <tr>
                      <th className="py-3 px-4">English Industrial Term</th>
                      <th className="py-3 px-4">Gulf Arabic (Phonetic)</th>
                      <th className="py-3 px-4">Hindi Contextual Meaning</th>
                      <th className="py-3 px-4">European / Site Usage Context</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Safety Helmet / Hard Hat</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Khoutha (خوذة)</td>
                      <td className="py-2.5 px-4">सुरक्षा हेलमेट</td>
                      <td className="py-2.5 px-4 text-xs">Kask ochronny (Polish) / Cască (Romanian)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Safety Shoes / Steel Toe</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Jazma Salamah (جزمة سلامة)</td>
                      <td className="py-2.5 px-4">सुरक्षा जूते (स्टील टो)</td>
                      <td className="py-2.5 px-4 text-xs">Buty robocze / Bocanci de protecție</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Diesel Engine Overhaul</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Tawdeeb Makina (توضيب ماكينة)</td>
                      <td className="py-2.5 px-4">इंजन की पूरी मरम्मत / ओवरहालिंग</td>
                      <td className="py-2.5 px-4 text-xs">Remont silnika / Revizie motor</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Welding Machine &amp; Torch</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Makina Ilham (ماكينة لحام)</td>
                      <td className="py-2.5 px-4">वेल्डिंग मशीन एवं टॉर्च</td>
                      <td className="py-2.5 px-4 text-xs">Spawarka / Aparat de sudură</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Hydraulic Pressure Pump</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Tromba Hidrolik (طلمبة هيدروليك)</td>
                      <td className="py-2.5 px-4">हाइड्रोलिक पंप</td>
                      <td className="py-2.5 px-4 text-xs">Pompa hydrauliczna / Pompă hidraulică</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Circuit Breaker / Switchboard</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Qati' Kahraba (قاطع كهرباء)</td>
                      <td className="py-2.5 px-4">बिजली का मेन स्विच / कट-आउट</td>
                      <td className="py-2.5 px-4 text-xs">Bezpiecznik / Siguranță automată</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Heavy Mobile Crane</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Winsh / Karana (ونش / كرين)</td>
                      <td className="py-2.5 px-4">क्रेन / भारी वजन उठाने वाली क्रेन</td>
                      <td className="py-2.5 px-4 text-xs">Dźwig mobilny / Macara mobilă</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Danger / Keep Clear</td>
                      <td className="py-2.5 px-4 font-semibold text-rose-600">Khatar / Mamnoo (خطر / ممنوع)</td>
                      <td className="py-2.5 px-4">खतरा / दूर रहें</td>
                      <td className="py-2.5 px-4 text-xs">Uwaga niebezpieczeństwo / Pericol grav</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Site Engineer / Foreman</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Muhandis / Muallim (مهندس / معلم)</td>
                      <td className="py-2.5 px-4">इंजीनियर / साइट फोरमैन</td>
                      <td className="py-2.5 px-4 text-xs">Kierownik budowy / Șef de șantier</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Monthly Salary</td>
                      <td className="py-2.5 px-4 font-semibold text-emerald-700">Rātib / Ma'āsh (راتب / معاش)</td>
                      <td className="py-2.5 px-4">महीने की तनख्वाह / पगार</td>
                      <td className="py-2.5 px-4 text-xs">Wynagrodzenie / Salariu lunar</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Overtime Hours</td>
                      <td className="py-2.5 px-4 font-semibold text-emerald-700">Idafi (إضافي)</td>
                      <td className="py-2.5 px-4">ओवरटाइम (अतिरिक्त काम का पैसा)</td>
                      <td className="py-2.5 px-4 text-xs">Nadgodziny / Ore suplimentare</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Residence Card / Iqama</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Iqama / Bataka (إقامة / بطاقة)</td>
                      <td className="py-2.5 px-4">इकामा / वर्क परमिट कार्ड</td>
                      <td className="py-2.5 px-4 text-xs">Karta pobytu / Permis de ședere</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: Safe Remittance & Financial Planning for Migrant Families */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Financial Sovereignty &amp; Wealth Security
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Safe Remittance, NRE/NRO Banking &amp; FEMA Compliance in Chhapra
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                The ultimate objective of undertaking strenuous employment overseas is the financial upliftment and security of your family in Saran. However, many migrant families inadvertently channel funds through illegal informal networks—commonly known as <strong>Hawala or Hundi</strong>. Under the <strong>Foreign Exchange Management Act (FEMA), 1999</strong> and the <strong>Prevention of Money Laundering Act (PMLA)</strong>, routing remittances through unapproved channels is a serious financial crime punishable by asset seizure, heavy penalties, and criminal prosecution.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                    <FaBuildingColumns className="text-indigo-600" />
                    NRE Account (Non-Resident External)
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    Opened at local commercial bank branches in Chhapra (SBI Main Branch Hathua Market, Punjab National Bank Municipal Chowk, Bank of Baroda Station Road). Maintained in Indian Rupees, entirely tax-exempt on earned interest in India, and fully repatriable abroad at any time.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5">
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-emerald-500" /> Credited exclusively with legitimate foreign earnings (SAR, AED, QAR, EUR).
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-emerald-500" /> Family members in Chhapra can be issued mandate debit cards for local cash access.
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                    <FaMoneyBillTrendUp className="text-emerald-600" />
                    Authorized Digital Exchange Channels
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    Remit funds electronically via central bank-regulated exchange houses (Al Rajhi Tahweel, LuLu Exchange, Al Ansari, Western Union, or direct SWIFT/NEFT wire) directly to the Indian NRE bank account in Chhapra within minutes at live RBI-linked exchange rates.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5">
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-emerald-500" /> Complete electronic audit trail accompanied by official FIRC documentation.
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-emerald-500" /> 100% financial security: zero risk of middleman theft or unaccounted loss.
                    </li>
                  </ul>
                </div>
              </div>

              <p>
                WorkWise Visa conducts pre-departure financial orientation workshops, guiding workers on opening NRI bank accounts across Chhapra before their flight.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 10: Logistics, Transit & Embassy Connectivity from Chhapra */}
        <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                Logistics &amp; Transit Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Transit Logistics: From Chhapra to Patna POE &amp; New Delhi Embassies
              </h2>
              <div className="w-16 h-1 bg-sky-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Chhapra possesses the most advantageous geographical position in North Bihar relative to Patna, alongside world-class rail connectivity via Chhapra Junction (CPR)—a premier terminal hub of the East Central Railway.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Route to Patna */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <FaCarSide className="text-indigo-600 text-2xl" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Rapid Transit to Patna (45 - 50 km)</h4>
                    <span className="text-xs text-slate-500">For GAMCA Medicals, State HRD &amp; POE Patna</span>
                  </div>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <p className="leading-relaxed">
                    <strong>By Road:</strong> Travel south via <strong>National Highway 31 / NH-19</strong> through Dighwara and Sonepur, crossing directly over the <strong>JP Setu (Digha-Pahleza Bridge)</strong> into Patna. Total driving duration is only 45 to 60 minutes.
                  </p>
                  <p className="leading-relaxed">
                    <strong>By Rail:</strong> Frequent daily MEMU passenger trains and express services connect Chhapra Junction (CPR) to Patliputra Junction (PPTA) and Patna Junction (PNBE) across the Digha rail bridge in just 50 minutes.
                  </p>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="font-semibold text-slate-900 block">Key Official Locations in Patna:</span>
                    <span>• POE Patna: Maurya Lok Complex / Boring Road</span><br />
                    <span>• State HRD Attestation: Vikas Bhawan, New Secretariat</span><br />
                    <span>• GAMCA Medical Centers: Fraser Road, Boring Road &amp; Raja Bazar</span>
                  </div>
                </div>
              </div>

              {/* Route to New Delhi */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <FaTrainSubway className="text-sky-600 text-2xl" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Direct Rail to New Delhi (980 km)</h4>
                    <span className="text-xs text-slate-500">For European Embassies, MEA Patiala House &amp; VFS Global</span>
                  </div>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <p className="leading-relaxed">
                    <strong>Premier Express Trains Departing Chhapra Junction (CPR):</strong>
                  </p>
                  <ul className="space-y-1">
                    <li>• <strong>Bihar Sampark Kranti Express (12565):</strong> High-speed superfast connection to New Delhi (NDLS).</li>
                    <li>• <strong>Swatantrata Senani Superfast Express (12561):</strong> Direct overnight connection to New Delhi.</li>
                    <li>• <strong>Vaishali Express (12553):</strong> Reliable daily overnight service linking CPR to New Delhi.</li>
                    <li>• <strong>Dibrugarh - New Delhi Rajdhani Express (20503/20505):</strong> Premier high-speed Rajdhani connection.</li>
                  </ul>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 mt-2">
                    <span className="font-semibold text-slate-900 block">Critical Locations in New Delhi:</span>
                    <span>• VFS Global European Centers: Shivaji Stadium Metro Station</span><br />
                    <span>• MEA Consular &amp; Apostille Wing: Patiala House Court, Tilak Marg</span><br />
                    <span>• Central Corporate HQ: Urbtech Trade Centre, Sector 132, Noida, NCR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 11: Direct Candidate Consultation Booking */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-200">
                Direct Career Consultation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Book Verified Overseas Work Visa Consultation in Chhapra
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Connect directly with our senior emigration specialists. Get complete eligibility assessment, salary verification, GAMCA medical advisory, and legal contract validation.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-lg">
              <ConsultationForm />
            </div>
          </div>
        </section>

        {/* SECTION 12: 20 Exhaustive Frequently Asked Questions (FAQs) */}
        <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-200">
                Authoritative Knowledge Base
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Frequently Asked Questions: Overseas Employment for Chhapra Candidates
              </h2>
              <div className="w-16 h-1 bg-indigo-600 mt-2 rounded"></div>
            </div>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>1. How fast can candidates from Chhapra reach POE Patna for emigration clearance?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Chhapra is situated barely 45 to 50 km from Patna. Candidates can travel directly via the JP Setu (Digha-Pahleza Bridge) on NH-31 or board frequent MEMU passenger trains from Chhapra Junction (CPR) to Patliputra Junction (PPTA) in approximately 50 to 60 minutes. This allows candidates to complete POE Patna emigration procedures, document verification, and medical tests and return home on the very same day.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>2. Can candidates holding ECR passports from Chhapra travel legally to Saudi Arabia or UAE?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Yes, candidates holding Emigration Check Required (ECR) passports from Chhapra can travel completely legally once Emigration Clearance (EC) is obtained via the eMigrate 2.0 portal through POE Patna. WorkWise Visa ensures verified digital contracts on Saudi Qiwa or UAE MoHRE, pre-enrolled PBBY insurance of ₹10 Lakh, and authenticated employer demand letters, preventing any offloading at departure airports.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>3. Where do Chhapra candidates undergo GAMCA / Wafid medical examinations?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  There are no authorized Wafid (GAMCA) medical centers in Chhapra or Saran district. Candidates register through the official wafid.com portal and receive an automated appointment slip for accredited diagnostic centers in Patna (along Boring Road, Fraser Road, and Raja Bazar), which is easily accessible via road or train in under an hour.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>4. What overseas technical job opportunities are available for Marhaura industrial craftsmen?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  With Marhaura&apos;s established diesel locomotive engineering and mechanical industrial heritage, certified technicians such as CNC machine operators, heavy equipment fitters, 6G arc/argon welders, and industrial electricians are in high demand across Saudi Arabia (Neom, Aramco), UAE, Qatar, and European manufacturing centers in Poland and Romania.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>5. What is the difference between an authentic Saudi Qiwa digital contract and an agent paper offer?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  An authentic Saudi employment contract must be generated electronically on the Ministry of Human Resources Qiwa portal (qiwa.sa). It includes an official digital serial number, basic salary, food allowance, medical insurance category, and specific profession code. A paper offer letter printed on agency letterhead is legally void in Saudi Arabia and cannot generate an Iqama residency permit.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>6. How can candidates from Chhapra protect themselves from local unaccredited visa brokers?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Candidates must verify that their recruitment agency holds an active Registration Certificate (RC) issued by the Ministry of External Affairs (MEA) on emigrate.gov.in. Never pay advance cash for &quot;free visas&quot; (Azad Visa) or accept tourist/visit visas for foreign employment.
                </p>
              </div>

              {/* FAQ 7 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>7. Are work permits available for European countries like Poland, Romania, and Croatia from Chhapra?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Yes, skilled mechanics, welders, heavy vehicle operators, and logistics workers from Chhapra are eligible for European employment. Processing requires an official government work permit (Voivodeship permit in Poland or Aviz de Muncă in Romania), an apostilled PCC from RPO Patna, and a National Type D Employment Visa stamped in New Delhi.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>8. What is the Takamol Skill Verification Program (SVP) required for Saudi Arabia?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  The Takamol SVP is a mandatory practical and computer-based theoretical examination launched by the Saudi Ministry of Human Resources to verify the professional competence of foreign craftsmen before granting an employment visa. Craftsmen such as electricians, welders, plumbers, and mechanics must appear for this exam at authorized Takamol testing centers.
                </p>
              </div>

              {/* FAQ 9 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>9. Can heavy vehicle drivers from Chhapra convert their licenses in the Gulf?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Candidates holding valid Indian Heavy Commercial Vehicle licenses issued by DTO Saran can be deployed on driver trainee visas. Upon arrival, they attend sovereign driving academies (such as Saudi Dallah or Dubai RTA) to obtain local heavy vehicle driving licenses, unlocking substantial salary increments.
                </p>
              </div>

              {/* FAQ 10 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>10. Can old healed pulmonary scars cause a GAMCA / Wafid medical failure?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Yes, healed pulmonary scars, calcified lesions, or pleural thickening from past tuberculosis can be flagged on digital chest X-rays during GAMCA screening, potentially resulting in an &quot;UNFIT&quot; declaration. WorkWise Visa advises candidates with a past history of respiratory infections to undergo a preliminary high-resolution CT scan before booking the binding Wafid test.
                </p>
              </div>

              {/* FAQ 11 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>11. How much does a legal work visa for Saudi Arabia or UAE cost under MEA rules?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Under Ministry of External Affairs regulations, approved Recruiting Agents can charge a statutory recruitment fee capped at ₹30,000 + GST for services rendered. The foreign employer is legally obligated to provide the work visa, labor permit authorization, and one-way international airfare.
                </p>
              </div>

              {/* FAQ 12 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>12. What is the Qatar Visa Center (QVC) process for Saran workers?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  For Qatar employment, after the employer issues work visa authorization, the candidate visits a designated QVC facility (in Kolkata or New Delhi). Biometrics and iris scans are taken, the contract is signed digitally in Hindi, and comprehensive medical tests are performed, with all costs covered by the Qatari company.
                </p>
              </div>

              {/* FAQ 13 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>13. Where is an apostilled Police Clearance Certificate (PCC) obtained in Chhapra?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  An authentic Police Clearance Certificate (PCC) must be applied for through the Passport Seva portal (passportindia.gov.in) and processed via the Post Office Passport Seva Kendra (POPSK) Chhapra or Regional Passport Office (RPO) Patna. Following local police verification, the PCC is issued by RPO Patna and subsequently apostilled by the MEA in New Delhi.
                </p>
              </div>

              {/* FAQ 14 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>14. What benefits does the Pravasi Bharatiya Bima Yojana (PBBY) offer the family of a worker in Chhapra?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  PBBY provides life insurance cover of ₹10,00,000 to the registered nominee in Chhapra in the event of accidental death or permanent disability abroad. It also covers full expenses for mortal remains repatriation, ₹1,00,000 hospitalization allowance abroad, and ₹45,000 legal defense cover for contractual disputes.
                </p>
              </div>

              {/* FAQ 15 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>15. How can an overseas worker from Chhapra ensure their remittances reach home legally?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Migrant workers should open a Non-Resident External (NRE) savings bank account with a local commercial bank in Chhapra (SBI Hathua Market, PNB Municipal Chowk, or Bank of Baroda). Earnings should be transferred through central bank-regulated exchange houses directly to the NRE account, which offers zero Indian income tax liability on interest and full FEMA compliance.
                </p>
              </div>

              {/* FAQ 16 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>16. What should a worker do if their Gulf employer withholds their passport upon arrival?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Passport confiscation is explicitly illegal under Saudi Labor Law (Article 6), UAE Labor Law (Decree-Law No. 33), and Qatari law. If an employer illegally withholds an Indian passport, the worker can register an immediate complaint with the Indian Embassy via the MADAD portal (madad.gov.in) and file a grievance with the host country&apos;s labor dispute department.
                </p>
              </div>

              {/* FAQ 17 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>17. Are there age restrictions for obtaining overseas employment visas in the Gulf and Europe?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  For general technical, construction, and transport trades in the GCC, candidate age must typically range between 21 and 50 years. In European countries such as Poland, Romania, and Croatia, work permits are generally issued to candidates aged between 20 and 55 years, provided they pass requisite medical examinations.
                </p>
              </div>

              {/* FAQ 18 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>18. What documents are needed for educational diploma or degree HRD attestation for Saran graduates?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Candidates holding degrees or polytechnic diplomas from institutions in Bihar (such as Jai Prakash University - JPU, Chhapra or state polytechnics) must present original certificates, marksheets, matriculation certificates, and passport copies to the Department of Higher Education (State HRD) at Vikas Bhawan, Patna before MEA apostille.
                </p>
              </div>

              {/* FAQ 19 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>19. How does WorkWise Visa support candidates from Chhapra who cannot visit Delhi or Noida offices?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  WorkWise Visa provides complete digital onboarding. Candidates from Chhapra can verify job offers, submit documents for eMigrate clearance, track GAMCA appointments, and review electronic Qiwa or MoHRE contracts through our secure online portal and dedicated WhatsApp helpline. Physical travel is only required for binding consular/biometric appointments.
                </p>
              </div>

              {/* FAQ 20 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>20. How do candidates from Chhapra track their application status online?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Every registered candidate receives a unique application tracking identifier. You can track your file status in real time—from trade testing to medical report upload, embassy visa stamping, and POE clearance dispatch—via our online application tracking portal at workwisevisa.com/track.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 13: Internal Cross-Linking Directory Strip */}
        <section className="py-12 bg-slate-900 text-white border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-white tracking-wide">
                WorkWise Visa Regional &amp; International Directory
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Explore our dedicated overseas employment hubs and country-specific immigration frameworks.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-xs">
              <Link
                href="/locations/patna"
                className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all text-center block text-slate-200 hover:text-white"
              >
                <div className="font-semibold">Patna Hub</div>
                <div className="text-[11px] text-slate-400">POE &amp; State Capital</div>
              </Link>

              <Link
                href="/locations/noida"
                className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all text-center block text-slate-200 hover:text-white"
              >
                <div className="font-semibold">Noida Corporate HQ</div>
                <div className="text-[11px] text-slate-400">NCR Headquarters</div>
              </Link>

              <Link
                href="/locations/siwan"
                className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all text-center block text-slate-200 hover:text-white"
              >
                <div className="font-semibold">Siwan Gateway</div>
                <div className="text-[11px] text-slate-400">Gulf Emigration Corridor</div>
              </Link>

              <Link
                href="/locations/gopalganj"
                className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all text-center block text-slate-200 hover:text-white"
              >
                <div className="font-semibold">Gopalganj Hub</div>
                <div className="text-[11px] text-slate-400">North Bihar Manpower</div>
              </Link>

              <Link
                href="/locations/muzaffarpur"
                className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all text-center block text-slate-200 hover:text-white"
              >
                <div className="font-semibold">Muzaffarpur Hub</div>
                <div className="text-[11px] text-slate-400">Tirhut Division Central</div>
              </Link>

              <Link
                href="/locations/chhapra"
                className="p-3 rounded-lg bg-indigo-900/60 border border-indigo-500/40 text-center block text-indigo-200 font-semibold"
              >
                <div>Chhapra Hub</div>
                <div className="text-[11px] text-indigo-300">Saran Division Desk</div>
              </Link>

              <Link
                href="/locations/darbhanga"
                className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all text-center block text-slate-200 hover:text-white"
              >
                <div className="font-semibold">Darbhanga Hub</div>
                <div className="text-[11px] text-slate-400">Mithilanchal Gateway</div>
              </Link>

              <Link
                href="/locations/gaya"
                className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all text-center block text-slate-200 hover:text-white"
              >
                <div className="font-semibold">Gaya Hub</div>
                <div className="text-[11px] text-slate-400">Magadh Division Gateway</div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
`;

if (!fs.existsSync('app/locations/chhapra')) {
  fs.mkdirSync('app/locations/chhapra', { recursive: true });
}
fs.writeFileSync(path.join(process.cwd(), 'app', 'locations', 'chhapra', 'page.tsx'), pageContent, 'utf8');
console.log('Successfully created app/locations/chhapra/page.tsx');
