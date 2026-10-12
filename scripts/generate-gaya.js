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
  title: "Overseas Work Visa & Recruitment in Gaya | WorkWise Visa",
  description:
    "Government-regulated overseas recruitment and work visa processing for candidates in Gaya, Bodh Gaya, Jehanabad, and Magadh division. Complete guidance on ECR/ECNR emigration clearance, Saudi Qiwa contracts, Wafid GAMCA medicals, European work permits, heavy driver testing, and zero-fraud protection.",
  keywords: [
    "work visa gaya",
    "overseas recruitment agency gaya bihar",
    "gulf job consultancy gaya magadh",
    "saudi work visa gaya",
    "ecr emigration clearance gaya",
    "gamca medical gaya",
    "heavy driver gulf recruitment gaya",
    "europe work permit gaya",
    "overseas employment agency jehanabad nawada",
    "qatar work visa gaya",
    "uae mohre contract verification gaya",
    "poland work permit consultancy gaya",
  ],
  alternates: {
    canonical: "https://www.workwisevisa.com/locations/gaya",
  },
  openGraph: {
    title: "Overseas Work Visa & Recruitment in Gaya | WorkWise Visa",
    description:
      "Authoritative overseas employment, work visa processing, and government-regulated recruitment assistance for heavy drivers, technical craftsmen, ANMMCH nurses, and industrial workers across Gaya and Magadh Division.",
    url: "https://www.workwisevisa.com/locations/gaya",
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Overseas Work Visa & Recruitment in Gaya | WorkWise Visa",
    description:
      "Reliable overseas employment, ECR emigration assistance, GAMCA medical clearance, and verified work visas for candidates across Gaya, Bodh Gaya, Sherghati, and Magadh region.",
  },
};

export default function GayaLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EmploymentAgency",
        "@id": "https://www.workwisevisa.com/locations/gaya#agency",
        name: "WorkWise Visa - Gaya & Magadh Division Career Assistance Desk",
        url: "https://www.workwisevisa.com/locations/gaya",
        logo: "https://www.workwisevisa.com/logo.png",
        image: "https://www.workwisevisa.com/images/hero-bg.jpg",
        description:
          "Authoritative overseas employment consultancy and work visa documentation advisory serving aspiring emigrants, heavy vehicle operators, technical craftsmen, and healthcare staff across Gaya and Magadh Division, Bihar.",
        telephone: "+91-98765-43210",
        email: "support@workwisevisa.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Candidate Assistance Liaison Desk, Near Gaya Junction, Station Road",
          addressLocality: "Gaya",
          addressRegion: "Bihar",
          postalCode: "823001",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 24.7914,
          longitude: 85.0002,
        },
        areaServed: [
          { "@type": "City", name: "Gaya" },
          { "@type": "AdministrativeArea", name: "Magadh Division" },
          { "@type": "AdministrativeArea", name: "Bodh Gaya" },
          { "@type": "AdministrativeArea", name: "Sherghati" },
          { "@type": "AdministrativeArea", name: "Tekari" },
          { "@type": "AdministrativeArea", name: "Belaganj" },
          { "@type": "AdministrativeArea", name: "Manpur" },
          { "@type": "AdministrativeArea", name: "Wazirganj" },
          { "@type": "AdministrativeArea", name: "Jehanabad" },
          { "@type": "AdministrativeArea", name: "Nawada" },
          { "@type": "AdministrativeArea", name: "Aurangabad" },
          { "@type": "AdministrativeArea", name: "Arwal" },
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
        "@id": "https://www.workwisevisa.com/locations/gaya#breadcrumb",
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
            name: "Gaya",
            item: "https://www.workwisevisa.com/locations/gaya",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.workwisevisa.com/locations/gaya#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How fast can candidates from Gaya reach POE Patna for emigration clearance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Gaya is exceptionally well connected to Patna. The high-speed Vande Bharat Express reaches Patna Junction from Gaya in just 1 hour 15 minutes, while frequent daily MEMU trains take approximately 1.5 to 2 hours via Jehanabad (100 km). Candidates can easily complete POE Patna emigration verification, State HRD attestation, or GAMCA medical checkups and return to Gaya the same afternoon.",
            },
          },
          {
            "@type": "Question",
            name: "Can candidates holding ECR passports from Gaya travel legally to Saudi Arabia or UAE?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, candidates holding Emigration Check Required (ECR) passports from Gaya and Magadh division can travel completely legally once Emigration Clearance (EC) is obtained via the Ministry of External Affairs eMigrate portal under POE Patna jurisdiction. WorkWise Visa ensures verified digital contracts on Saudi Qiwa or UAE MoHRE, pre-enrolled PBBY insurance of ₹10 Lakh, and authenticated employer demand letters.",
            },
          },
          {
            "@type": "Question",
            name: "Where do Gaya candidates undergo GAMCA / Wafid medical examinations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "There are no authorized Wafid (GAMCA) medical centers physically located in Gaya, Jehanabad, or Nawada. Candidates register through the official wafid.com portal and receive an automated appointment slip for accredited diagnostic centers in Patna (along Boring Road, Fraser Road, and Raja Bazar), which is easily reached in just over an hour via the Vande Bharat or express trains.",
            },
          },
          {
            "@type": "Question",
            name: "What overseas job vacancies are available for heavy equipment operators and trailer drivers from Gaya?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "With Gaya's strategic location along the Grand Trunk Road (NH-19) logistics corridor, experienced commercial trailer drivers, shovel operators, hydraulic excavator mechanics, and crane operators are in intense demand across Saudi Arabia (Neom, Aramco, Riyadh Metro), UAE, Qatar, and European logistics sectors in Poland and Romania.",
            },
          },
          {
            "@type": "Question",
            name: "How can nursing graduates from ANMMCH Gaya secure hospital jobs in the Gulf?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Graduates of Anugrah Narayan Magadh Medical College & Hospital (ANMMCH) and regional nursing colleges must undergo Primary Source Verification (PSV) via the DataFlow Group, clear Prometric licensure exams (SCFHS for Saudi Arabia or DHA for Dubai), and obtain State HRD authentication at Vikas Bhawan, Patna before MEA apostille. WorkWise Visa provides complete credential verification and direct hospital placement services.",
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
                  Magadh Division Overseas Employment Gateway
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Work Visa &amp; Overseas Recruitment in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">
                    Gaya
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-justify">
                  Empowering heavy transport operators, technical craftsmen, ANMMCH healthcare personnel, civil artisans, and industrial workers across Gaya, Bodh Gaya, Sherghati, Jehanabad, Nawada, and Magadh Division with 100% government-regulated overseas employment. Direct POE Patna eMigrate clearances, authentic Saudi Qiwa digital contracts, Wafid GAMCA medical facilitation, and verified European work permits without unaccredited sub-agent exploitation.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg font-bold text-indigo-400">1 Hr 15m</div>
                    <div className="text-xs text-slate-400 font-medium">To POE Patna (Vande Bharat)</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg font-bold text-sky-400">100% Legal</div>
                    <div className="text-xs text-slate-400 font-medium">eMigrate &amp; Qiwa</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg font-bold text-emerald-400">₹10 Lakh</div>
                    <div className="text-xs text-slate-400 font-medium">PBBY Insurance</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg font-bold text-amber-400">Heavy Plant</div>
                    <div className="text-xs text-slate-400 font-medium">&amp; Driver Testing</div>
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
                    <FaCircleCheck className="text-emerald-400" /> ANMMCH Healthcare DataFlow
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
                    Direct liaison support for candidates across Gaya, Bodh Gaya, Jehanabad, Nawada, and Magadh region.
                  </p>

                  <div className="space-y-4 text-sm text-slate-300">
                    <div className="flex items-start gap-3">
                      <FaLocationDot className="text-indigo-400 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-white block">Regional Liaison Desk:</strong>
                        <span>Station Road, Near Gaya Junction (GAYA), Gaya, Bihar 823001</span>
                        <p className="text-xs text-slate-400 mt-0.5">Primary Processing Center: Varma Centre, Boring Road, Patna (100 km / 1 hr 15 mins)</p>
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
                        <span className="text-slate-300">gaya.desk@workwisevisa.com</span>
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

        {/* SECTION 1: Strategic Emigration Landscape of Gaya & Magadh Division */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-200">
                Regional Economic Dynamics &amp; Migration Demographics
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                The Overseas Employment Landscape of Gaya &amp; Magadh Division
              </h2>
              <div className="w-16 h-1 bg-indigo-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Gaya, the historic administrative headquarters of Magadh Division—an influential socio-economic zone encompassing Gaya, Jehanabad, Nawada, Aurangabad, and Arwal—is a premier transportation, commercial, and pilgrim hub in South Bihar. Strategically positioned along the ancient Grand Trunk Road corridor (National Highway 19) and the East Central Railway&apos;s high-speed Grand Chord trunk line, the district possesses a dynamic, multifaceted manpower profile. Across urban and rural blocks including Bodh Gaya, Sherghati, Tekari, Belaganj, Manpur, Wazirganj, Fatehpur, Mohanpur, Barachatti, Atri, Neem Chak Bathani, Khizirsarai, Gurua, Paraiya, Konch, Dobhi, Imamganj, and Dumaria, thousands of skilled and semi-skilled workers contribute significantly to international economies.
              </p>

              <p>
                The overseas talent profile of Magadh is uniquely characterized by heavy infrastructure, commercial transport, and mechanical expertise. Anchored by the extensive transit logistics of NH-19 and regional stone quarrying and mining operations, Gaya is renowned for producing exceptionally skilled <strong>heavy commercial trailer drivers, shovel operators, mobile crane drivers, and hydraulic excavator mechanics</strong>. These tradesmen are in constant demand across massive infrastructure and petroleum projects in the Kingdom of Saudi Arabia (such as the NEOM mega-city, Red Sea Global, and Aramco pipelines), the United Arab Emirates, Qatar, and Central/Eastern Europe (Poland and Romania).
              </p>

              <p>
                Additionally, Gaya houses premier medical and paramedical institutions led by the <strong>Anugrah Narayan Magadh Medical College and Hospital (ANMMCH)</strong>. Every year, graduating nurses, dialysis technicians, and laboratory technologists seek lawful overseas appointments in the Gulf Ministry of Health (MOH) and private healthcare networks, requiring Primary Source Verification (PSV) via DataFlow and Prometric licensing.
              </p>

              <p>
                Crucially, Gaya enjoys unparalleled connectivity to the state capital. Situated just 100 kilometers south of Patna, candidates can board the high-speed <strong>Vande Bharat Express</strong> from Gaya Junction (GAYA) to Patna Junction in merely <strong>1 hour and 15 minutes</strong>, or take frequent express and MEMU passenger services across Jehanabad. This ultra-fast connectivity allows candidates to complete their <strong>Protector of Emigrants (POE) Patna</strong> verifications, State HRD educational attestations at Vikas Bhawan, and GCC-authorized Wafid / GAMCA medical examinations on Boring Road within a single morning, returning to Gaya by afternoon.
              </p>

              <p>
                WorkWise Visa provides Magadh candidates with an authentic, government-monitored employment corridor, eradicating exploitative local sub-agent syndicates operating around Gaya Junction, Station Road, and Sherghati, ensuring that every contract is 100% compliant with the Emigration Act 1983.
              </p>
            </div>

            {/* Micro-Demographic Breakdown Table */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FaBuildingColumns className="text-indigo-600" />
                Key Trade Clusters Across Magadh Division
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
                      <td className="py-3 px-4 font-semibold text-slate-900">Sherghati &amp; Dobhi (GT Road Corridor)</td>
                      <td className="py-3 px-4">Heavy commercial trailer drivers, long-haul freight operators, dump truck drivers</td>
                      <td className="py-3 px-4">Saudi Arabia (Riyadh / Dammam), UAE, Qatar</td>
                      <td className="py-3 px-4">Heavy vehicle GCC license verification, ECR clearance via POE Patna</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Gaya Urban &amp; Manpur</td>
                      <td className="py-3 px-4">B.Sc Nursing, GNM, Dialysis technicians, Radiographers (ANMMCH alumni), textile operatives</td>
                      <td className="py-3 px-4">Saudi Arabia (MOH), UAE (DHA/DOH), Poland, Romania</td>
                      <td className="py-3 px-4">DataFlow PSV, Prometric examination, State HRD attestation Vikas Bhawan</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Barachatti &amp; Fatehpur</td>
                      <td className="py-3 px-4">Heavy earthmoving operators (JCB, Excavator, Shovel, Loader), hydraulic mechanics</td>
                      <td className="py-3 px-4">Kuwait, Saudi Arabia (NEOM projects), Croatia</td>
                      <td className="py-3 px-4">Takamol Skill Verification (SVP), Voivodeship work permit</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Tekari &amp; Belaganj</td>
                      <td className="py-3 px-4">Building electricians, plumbing fitters, civil masons, tile &amp; marble artisans</td>
                      <td className="py-3 px-4">Saudi Arabia, UAE, Qatar, Oman</td>
                      <td className="py-3 px-4">Wafid medical clearance, PBBY ₹10 Lakh insurance policy</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Bodh Gaya &amp; Wazirganj</td>
                      <td className="py-3 px-4">Hospitality personnel, commercial drivers, warehouse logistics associates</td>
                      <td className="py-3 px-4">UAE (Dubai RTA), Qatar, Hungary, Romania</td>
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
                Emigration for employment is strictly governed under the <strong>Emigration Act, 1983</strong>, administered by the Ministry of External Affairs (MEA), Government of India. The primary objective is to safeguard vulnerable workers from fraudulent recruiters, bogus work permits, and hazardous working conditions abroad. Under Section 22 of the Act, every citizen holding an <strong>Emigration Check Required (ECR)</strong> passport is legally barred from departing India for employment in any of the 18 notified ECR nations without formal Emigration Clearance (EC) granted by the designated Protector of Emigrants (POE).
              </p>

              <p>
                Candidates from Gaya, Jehanabad, Nawada, Aurangabad, and Arwal fall under the direct jurisdiction of the <strong>Protector of Emigrants (POE) Patna</strong>. Due to the high-speed rail connectivity linking Gaya to Patna in just 75 minutes, clearance procedures are exceptionally rapid and convenient.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-indigo-400 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <FaPassport className="text-amber-500 text-2xl" />
                    <h4 className="text-lg font-bold text-slate-900">ECR Status (Emigration Check Required)</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Assigned to citizens who have not passed their Class 10 (Matriculation) board examination. Passports bear the explicit stamp &quot;Emigration Check Required&quot;.
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
                      <td className="py-3 px-4">Payable to registered nominee in Gaya/Magadh upon accidental fatality or permanent total disability overseas.</td>
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
                Destination nations enforce sovereign immigration rules that govern foreign labor permits. WorkWise Visa ensures seamless alignment with official governmental digital verification portals for all candidates from Gaya and Magadh Division.
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
                  Employment in Saudi Arabia is governed by the <strong>Qiwa Electronic Platform</strong> (<a href="https://qiwa.sa" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline">qiwa.sa</a>). Every valid employment contract is registered electronically, detailing exact basic wages, food allowances, housing provisions, medical insurance categories, and job descriptions under Articles 50–55 of the Saudi Labor Law.
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
                  <div className="font-semibold text-slate-900">Key Pillars for Gaya Candidates:</div>
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
                  Magadh&apos;s heavy vehicle drivers, mechanics, and industrial operators are increasingly securing legal European careers anchored by official government work authorizations: Polish <em>Zezwolenie na Pracę</em> (Voivodeship Permit), Romanian <em>Aviz de Muncă</em>, and Croatian <em>HZZ</em> permits.
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

        {/* SECTION 4: GAMCA / Wafid Medical Protocol for Gaya Candidates */}
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
                    <strong>Critical Advisory for Gaya &amp; Magadh Candidates:</strong> There are <em>no accredited Wafid (GAMCA) medical centers</em> located in Gaya, Jehanabad, or Nawada. Any local pathology laboratory or middleman in Gaya claiming to issue official GAMCA medical fitness certificates is running an illegal fraud. The Wafid centralized portal automatically allocates candidates in Magadh division to authorized medical facilities in <strong>Patna</strong> (approx. 100 km away via rail or NH-22).
                  </div>
                </div>
              </div>

              <p>
                Because Gaya candidates can reach Patna in just 1 hour 15 minutes via the <strong>Vande Bharat Express</strong> or 1.5 hours via regular MEMU trains, medical clearance is exceptionally fast and cost-effective. The examination includes:
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
                  Evaluates for active or healed pulmonary tuberculosis, calcified nodules, pleural thickening, or apical scarring. Candidates with past respiratory illnesses must undergo preliminary evaluation in Gaya to rule out X-ray shadows prior to booking their binding Wafid test.
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
                  Fasting blood glucose, serum creatinine, SGPT/SGOT liver enzyme profiling, blood pressure monitoring (under 140/90 mmHg), color vision testing for electricians and heavy drivers, and comprehensive urinalysis for albumin and controlled substances.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm text-sm text-slate-700 space-y-3">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <FaCircleCheck className="text-emerald-500" />
                Transit Logistics: Rapid Patna GAMCA Center Access from Gaya
              </h4>
              <p className="text-justify leading-relaxed">
                Candidates from Gaya can board the morning <strong>Vande Bharat Express</strong> or express trains at Gaya Junction (GAYA) and arrive at Patna Junction in just 1 hour 15 minutes. From there, authorized diagnostic centers along Boring Road, Fraser Road, and Raja Bazar are reachable within 15 minutes. WorkWise Visa provides preliminary health checkups in Gaya to verify blood pressure and liver enzymes in advance, ensuring zero medical rejections.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: Heavy Driver & Heavy Equipment Operator Training Excellence */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded border border-purple-200">
                Logistics &amp; Heavy Plant Heritage
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Gaya Heavy Transport &amp; Machinery Operator Overseas Pathway
              </h2>
              <div className="w-16 h-1 bg-purple-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Gaya and the broader Magadh region represent eastern India&apos;s most formidable corridor for commercial transport drivers, heavy equipment operators, and plant mechanics. Operating along the high-traffic Grand Trunk Road (NH-19) and regional mining belts has endowed local operators with extraordinary vehicular discipline, defensive driving skills, and mechanical resilience.
              </p>

              <p>
                In Gulf and European infrastructure projects, these specialized competencies command superior basic remuneration and lucrative trip allowances:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 not-prose my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center mx-auto text-sm">1</div>
                  <div className="font-bold text-slate-900 text-sm">Trailer &amp; Tanker Drivers</div>
                  <div className="text-xs text-slate-600">Multi-axle articulated trailers, bulk cement carriers, and hazardous chemical tankers for GCC logistics networks.</div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center mx-auto text-sm">2</div>
                  <div className="font-bold text-slate-900 text-sm">Earthmoving Operators</div>
                  <div className="text-xs text-slate-600">Hydraulic excavators (CAT, Komatsu, Volvo), backhoe loaders (JCB), bulldozers, and wheel loaders.</div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center mx-auto text-sm">3</div>
                  <div className="font-bold text-slate-900 text-sm">Mobile &amp; Tower Crane Operators</div>
                  <div className="text-xs text-slate-600">50-ton to 150-ton rough-terrain mobile cranes and high-rise construction tower crane specialists.</div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center mx-auto text-sm">4</div>
                  <div className="font-bold text-slate-900 text-sm">Heavy Plant Mechanics</div>
                  <div className="text-xs text-slate-600">Diesel fuel injection calibration, pneumatic brake overhauls, and hydraulic transmission specialists.</div>
                </div>
              </div>

              <p>
                WorkWise Visa conducts rigorous trade evaluations and prepares Gaya operators for official Saudi Dallah driving conversions, Dubai RTA testing, and European Voivodeship labor clearances, securing direct company placements with guaranteed trip allowances.
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
                Overseas Wage &amp; Benefits Benchmark for Magadh Craftsmen
              </h2>
              <div className="w-16 h-1 bg-indigo-600 mt-2 rounded"></div>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed text-justify">
              Financial transparency protects candidates from wage theft and deceptive broker promises. Below is an authentic benchmark of prevailing monthly basic salaries and mandatory benefits across 12 key transport, industrial, and medical trades for workers deployed from Gaya and Magadh Division.
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
                      <td className="py-3 px-4 font-bold text-slate-900">Heavy Commercial Trailer Driver</td>
                      <td className="py-3 px-4">2,400 - 3,200 + Trip Allow</td>
                      <td className="py-3 px-4">2,600 - 3,600 + Trip Allow</td>
                      <td className="py-3 px-4">2,500 - 3,400 + Trip Allow</td>
                      <td className="py-3 px-4">200 - 280 + Trip Allow</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€1,300 - €1,800 + Trip</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Hydraulic Excavator / Shovel Operator</td>
                      <td className="py-3 px-4">2,200 - 3,200 + Food + Acc</td>
                      <td className="py-3 px-4">2,400 - 3,500 + Acc</td>
                      <td className="py-3 px-4">2,300 - 3,300 + Food + Acc</td>
                      <td className="py-3 px-4">190 - 260 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€1,100 - €1,500 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Heavy Mobile Crane Operator (50T+)</td>
                      <td className="py-3 px-4">2,500 - 3,600 + Food + Acc</td>
                      <td className="py-3 px-4">2,800 - 3,900 + Acc</td>
                      <td className="py-3 px-4">2,600 - 3,700 + Food + Acc</td>
                      <td className="py-3 px-4">220 - 300 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€1,250 - €1,700 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Registered Staff Nurse (ANMMCH alumni)</td>
                      <td className="py-3 px-4">3,500 - 5,500 + Food + Acc</td>
                      <td className="py-3 px-4">4,500 - 7,000 + Acc</td>
                      <td className="py-3 px-4">4,000 - 6,500 + Food + Acc</td>
                      <td className="py-3 px-4">350 - 500 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€1,800 - €2,600 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Heavy Diesel Equipment Mechanic</td>
                      <td className="py-3 px-4">2,200 - 3,000 + Food + Acc</td>
                      <td className="py-3 px-4">2,400 - 3,300 + Acc</td>
                      <td className="py-3 px-4">2,300 - 3,200 + Food + Acc</td>
                      <td className="py-3 px-4">180 - 250 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€1,100 - €1,450 + Acc</td>
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
                      <td className="py-3 px-4 font-bold text-slate-900">Building Electrician &amp; Wireman</td>
                      <td className="py-3 px-4">1,600 - 2,200 + Food + Acc</td>
                      <td className="py-3 px-4">1,800 - 2,400 + Acc</td>
                      <td className="py-3 px-4">1,700 - 2,300 + Food + Acc</td>
                      <td className="py-3 px-4">140 - 190 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€900 - €1,200 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">HVAC Chiller &amp; Split AC Technician</td>
                      <td className="py-3 px-4">1,700 - 2,400 + Food + Acc</td>
                      <td className="py-3 px-4">1,900 - 2,600 + Acc</td>
                      <td className="py-3 px-4">1,800 - 2,500 + Food + Acc</td>
                      <td className="py-3 px-4">150 - 200 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€950 - €1,250 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Plumbing &amp; Sanitary Technician</td>
                      <td className="py-3 px-4">1,500 - 2,000 + Food + Acc</td>
                      <td className="py-3 px-4">1,700 - 2,200 + Acc</td>
                      <td className="py-3 px-4">1,600 - 2,100 + Food + Acc</td>
                      <td className="py-3 px-4">130 - 180 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€850 - €1,150 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Tile &amp; Marble Mason</td>
                      <td className="py-3 px-4">1,400 - 1,800 + Food + Acc</td>
                      <td className="py-3 px-4">1,500 - 1,900 + Acc</td>
                      <td className="py-3 px-4">1,450 - 1,850 + Food + Acc</td>
                      <td className="py-3 px-4">120 - 160 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€850 - €1,100 + Acc</td>
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
                * Note: Standard Gulf contracts specify 8 hours/day, 6 days/week with statutory 1.25x - 1.5x overtime under host labor laws. European packages conform to EU standard 40-hour work weeks with paid annual vacation and state health insurance coverage.
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
                Anti-Fraud Intelligence: Protecting Gaya Job Seekers from Sub-Agent Rackets
              </h2>
              <div className="w-16 h-1 bg-rose-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Due to the heavy volume of heavy vehicle operators and construction workers seeking Gulf jobs from Magadh division, unauthorized middleman syndicates regularly set up temporary shops near Gaya Junction, Station Road, Tekari Road, and Sherghati. These touts exploit job seekers by demanding heavy advance cash sums of ₹1 Lakh to ₹2 Lakhs while distributing counterfeit offer letters, forged visit visas, or fictitious work permits.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
                <div className="bg-rose-50/60 border border-rose-200 rounded-xl p-5 space-y-3">
                  <h4 className="font-bold text-rose-950 flex items-center gap-2 text-base">
                    <FaTriangleExclamation className="text-rose-600" />
                    Major Deceptive Rackets Uncovered in Gaya
                  </h4>
                  <ul className="text-xs text-rose-900 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span><strong>The &quot;Azad Visa&quot; Swindle:</strong> Touts claim a &quot;Free Visa&quot; allows working for any transport contractor in Saudi Arabia. Under Saudi Labor Law Article 39, working for anyone other than your registered sponsor is a non-bailable offense leading to arrest, deportation, and blacklisting.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span><strong>Tourist / Visit Visa Deployment:</strong> Sending drivers to UAE or Saudi Arabia on tourist visas with false assurances of &quot;local conversion to heavy driver visa&quot;, stranding candidates as illegal absconders.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span><strong>Forged European Job Letters:</strong> Fabricated letters claiming to be from Poland, Romania, or Lithuania with fake embassy seals, demanding massive non-refundable cash deposits.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span><strong>Original Passport Confiscation:</strong> Illegally seizing original passports to coerce candidates into paying additional extortionate fees.</span>
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
                      <span><strong>Verify MEA Registration Certificate (RC):</strong> Confirm on <em>emigrate.gov.in &gt; Search Recruiting Agent</em> that the agency holds an active, valid MEA license.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Demand Electronic Demand Letter (EDL):</strong> Legal overseas job vacancies must carry an official EDL number generated through the Indian Embassy in the host nation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Strict Bank Channel Transactions:</strong> Never hand over cash. All authorized recruitment fees must be transacted through documented banking instruments with formal GST tax invoices.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Report Extortion to POE Patna:</strong> You can directly lodge complaints against unlicensed agents with the Protector of Emigrants Patna via email (<em>poepatna@mea.gov.in</em>) or MADAD portal.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p>
                WorkWise Visa operates under strict zero-advance cash collection policies. Every stage of recruitment is auditable on official government portals, giving Magadh candidates total legal peace of mind.
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
              Mastering foundational technical vocabulary before departure prepares drivers and operators from Gaya to communicate effectively on international transport corridors, oil rigs, and construction projects.
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
                      <td className="py-2.5 px-4 font-bold text-slate-900">Heavy Commercial Trailer</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Trelah / Muqtoorah (تريلا / مقطورة)</td>
                      <td className="py-2.5 px-4">बड़ा ट्रेलर / मालवाहक ट्रक</td>
                      <td className="py-2.5 px-4 text-xs">Ciągnik siodłowy / Tir marfă</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Hydraulic Excavator</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Haffara (حفارة)</td>
                      <td className="py-2.5 px-4">खुदाई करने वाली जेसीबी मशीन</td>
                      <td className="py-2.5 px-4 text-xs">Koparka / Excavator mecanic</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Mobile Crane &amp; Winch</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Winsh / Karana (ونش / كرين)</td>
                      <td className="py-2.5 px-4">क्रेन / भारी वजन उठाने वाली मशीन</td>
                      <td className="py-2.5 px-4 text-xs">Dźwig mobilny / Macara mobilă</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Diesel Fuel &amp; Tank</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Dizel / Tanqi (ديزل / تانكي)</td>
                      <td className="py-2.5 px-4">डीजल तेल एवं टंकी</td>
                      <td className="py-2.5 px-4 text-xs">Olej napędowy / Motorină</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Pneumatic Air Brake</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Faramil Hawa (فرامل هواء)</td>
                      <td className="py-2.5 px-4">एयर ब्रेक / प्रेशर ब्रेक</td>
                      <td className="py-2.5 px-4 text-xs">Hamulce pneumatyczne / Frână cu aer</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Danger / Hazardous Road</td>
                      <td className="py-2.5 px-4 font-semibold text-rose-600">Khatar (خطر)</td>
                      <td className="py-2.5 px-4">खतरा / सावधान</td>
                      <td className="py-2.5 px-4 text-xs">Niebezpieczeństwo / Pericol grav</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Transport Fleet Supervisor</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Mushrif / Muallim (مشرف / معلم)</td>
                      <td className="py-2.5 px-4">फ्लीट सुपरवाइजर / फोरमैन</td>
                      <td className="py-2.5 px-4 text-xs">Kierownik floty / Șef de parc auto</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Monthly Salary</td>
                      <td className="py-2.5 px-4 font-semibold text-emerald-700">Rātib / Ma'āsh (راتب / معاش)</td>
                      <td className="py-2.5 px-4">महीने की तनख्वाह / पगार</td>
                      <td className="py-2.5 px-4 text-xs">Wynagrodzenie / Salariu lunar</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Trip Allowance / Overtime</td>
                      <td className="py-2.5 px-4 font-semibold text-emerald-700">Badal Rihla / Idafi (بدل رحلة)</td>
                      <td className="py-2.5 px-4">ट्रिप भत्ता / अतिरिक्त कमाई</td>
                      <td className="py-2.5 px-4 text-xs">Dieta / Diurnă de transport</td>
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
                Safe Remittance, NRE/NRO Banking &amp; FEMA Compliance in Gaya
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                The primary purpose of working overseas is the financial upliftment and security of your family in Gaya. However, many migrant families inadvertently channel funds through illegal informal networks—commonly known as <strong>Hawala or Hundi</strong>. Under the <strong>Foreign Exchange Management Act (FEMA), 1999</strong> and the <strong>Prevention of Money Laundering Act (PMLA)</strong>, routing remittances through unapproved channels is a serious financial crime.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                    <FaBuildingColumns className="text-indigo-600" />
                    NRE Account (Non-Resident External)
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    Opened at local commercial bank branches in Gaya (such as SBI Main Branch Court Road, Punjab National Bank GB Road, or Bank of Baroda Station Road). Maintained in Indian Rupees, completely tax-free on interest earned in India, and fully repatriable abroad at any time.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5">
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-emerald-500" /> Deposit exclusively in foreign earnings (SAR, AED, QAR, EUR).
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-emerald-500" /> Family members can hold a mandate debit card to withdraw cash locally.
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                    <FaMoneyBillTrendUp className="text-emerald-600" />
                    Authorized Digital Exchange Channels
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    Remit salary electronically through regulated exchange houses (such as Al Rajhi Tahweel, UAE Exchange / LuLu Exchange, Al Ansari, Western Union, or direct SWIFT/NEFT wire) directly to the Indian NRE bank account in Gaya within minutes at live RBI-linked exchange rates.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5">
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-emerald-500" /> Complete electronic paper trail with official FIRC certificate.
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-emerald-500" /> Absolute safety: money is 100% insured against broker disappearance.
                    </li>
                  </ul>
                </div>
              </div>

              <p>
                WorkWise Visa conducts pre-departure financial literacy workshops, guiding workers on opening NRI bank accounts across Gaya before their flight.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 10: Logistics, Transit & Embassy Connectivity from Gaya */}
        <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                Logistics &amp; Transit Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Transit Logistics: From Gaya to Patna POE &amp; New Delhi Embassies
              </h2>
              <div className="w-16 h-1 bg-sky-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Gaya enjoys superior high-speed railway connectivity to Patna and New Delhi, anchored by Gaya Junction (GAYA) on the Grand Chord trunk line and Gaya International Airport (GAY).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Route to Patna */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <FaTrainSubway className="text-indigo-600 text-2xl" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">High-Speed Rail &amp; Highway to Patna (100 km)</h4>
                    <span className="text-xs text-slate-500">For GAMCA Medicals, State HRD &amp; POE Patna</span>
                  </div>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <p className="leading-relaxed">
                    <strong>By High-Speed Train:</strong> The <strong>Vande Bharat Express</strong> links Gaya Junction (GAYA) directly to Patna Junction (PNBE) in only <strong>1 hour 15 minutes</strong>. Frequent MEMU passenger services run every hour via Jehanabad (approx. 1.5 to 2 hours).
                  </p>
                  <p className="leading-relaxed">
                    <strong>By Road:</strong> Travel north via <strong>National Highway 22 (NH-22)</strong> passing through Makhdumpur, Jehanabad, and Masaurhi directly into Patna (approx. 2 to 2.5 hours).
                  </p>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="font-semibold text-slate-900 block">Critical Locations in Patna:</span>
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
                    <h4 className="font-bold text-slate-900 text-base">Direct Grand Chord Trains to New Delhi (990 km)</h4>
                    <span className="text-xs text-slate-500">For European Embassies, MEA Patiala House &amp; VFS Global</span>
                  </div>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <p className="leading-relaxed">
                    <strong>Premier Express Trains from Gaya Junction (GAYA):</strong>
                  </p>
                  <ul className="space-y-1">
                    <li>• <strong>Mahabodhi Superfast Express (12397):</strong> Daily premier superfast linking Gaya directly to New Delhi (NDLS).</li>
                    <li>• <strong>Purushottam Express (12801):</strong> High-speed overnight service to New Delhi.</li>
                    <li>• <strong>Kalka Mail / Netaji Express (12311):</strong> Reliable daily trunk connection.</li>
                    <li>• <strong>Gaya International Airport (GAY):</strong> Seasonal international and domestic connections.</li>
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
                Book Verified Overseas Work Visa Consultation in Gaya
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
                Frequently Asked Questions: Overseas Employment for Gaya Candidates
              </h2>
              <div className="w-16 h-1 bg-indigo-600 mt-2 rounded"></div>
            </div>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>1. How fast can candidates from Gaya reach POE Patna for emigration clearance?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Gaya is exceptionally well connected to Patna. The high-speed Vande Bharat Express reaches Patna Junction from Gaya in just 1 hour 15 minutes, while frequent daily MEMU trains take approximately 1.5 to 2 hours via Jehanabad (100 km). Candidates can easily complete POE Patna emigration verification, State HRD attestation, or GAMCA medical checkups and return to Gaya the same afternoon.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>2. Can candidates holding ECR passports from Gaya travel legally to Saudi Arabia or UAE?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Yes, candidates holding Emigration Check Required (ECR) passports from Gaya and Magadh division can travel completely legally once Emigration Clearance (EC) is obtained via the Ministry of External Affairs eMigrate 2.0 portal under POE Patna jurisdiction. WorkWise Visa ensures verified digital contracts on Saudi Qiwa or UAE MoHRE, pre-enrolled PBBY insurance of ₹10 Lakh, and authenticated employer demand letters.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>3. Where do Gaya candidates undergo GAMCA / Wafid medical examinations?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  There are no authorized Wafid (GAMCA) medical centers physically located in Gaya, Jehanabad, or Nawada. Candidates register through the official wafid.com portal and receive an automated appointment slip for accredited diagnostic centers in Patna (along Boring Road, Fraser Road, and Raja Bazar), which is easily reached in just over an hour via the Vande Bharat or express trains.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>4. What overseas job vacancies are available for heavy equipment operators and trailer drivers from Gaya?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  With Gaya&apos;s strategic location along the Grand Trunk Road (NH-19) logistics corridor, experienced commercial trailer drivers, shovel operators, hydraulic excavator mechanics, and crane operators are in intense demand across Saudi Arabia (Neom, Aramco, Riyadh Metro), UAE, Qatar, and European logistics sectors in Poland and Romania.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>5. How can nursing graduates from ANMMCH Gaya secure hospital jobs in the Gulf?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Graduates of Anugrah Narayan Magadh Medical College &amp; Hospital (ANMMCH) and regional nursing colleges must undergo Primary Source Verification (PSV) via the DataFlow Group, clear Prometric licensure exams (SCFHS for Saudi Arabia or DHA for Dubai), and obtain State HRD authentication at Vikas Bhawan, Patna before MEA apostille. WorkWise Visa provides complete credential verification and direct hospital placement services.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>6. What is the difference between an authentic Saudi Qiwa digital contract and an agent paper offer?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  An authentic Saudi employment contract must be generated electronically on the Ministry of Human Resources Qiwa portal (qiwa.sa). It includes an official digital serial number, basic salary, food allowance, medical insurance category, and specific profession code. A paper offer letter printed on agency letterhead is legally void in Saudi Arabia and cannot generate an Iqama residency permit.
                </p>
              </div>

              {/* FAQ 7 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>7. How can candidates from Gaya verify if a recruitment agency is government-approved?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Candidates can verify an agency&apos;s registration by visiting the official government portal at emigrate.gov.in and searching for the agency&apos;s Registration Certificate (RC) number. WorkWise Visa operates in full compliance with MEA standards and enforces a strict zero-advance cash policy.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>8. Are work permits available for European countries like Poland, Romania, and Croatia from Gaya?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Yes, skilled trailer drivers, heavy machinery operators, welders, and warehouse workers from Gaya are eligible for European employment. Processing requires an official government work permit (Voivodeship permit in Poland or Aviz de Muncă in Romania), an apostilled PCC from RPO Patna, and a National Type D Employment Visa stamped in New Delhi.
                </p>
              </div>

              {/* FAQ 9 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>9. What is the Takamol Skill Verification Program (SVP) required for Saudi Arabia?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  The Takamol SVP is a mandatory practical and computer-based theoretical examination launched by the Saudi Ministry of Human Resources to verify the professional competence of foreign craftsmen before granting an employment visa. Craftsmen such as electricians, welders, plumbers, and mechanics must appear for this exam at authorized Takamol testing centers.
                </p>
              </div>

              {/* FAQ 10 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>10. Can commercial trailer drivers convert their Indian licenses in the Gulf?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Candidates holding valid Indian Heavy Transport Vehicle licenses issued by DTO Gaya can be deployed on driver trainee visas. Upon arrival, they attend sovereign driving academies (such as Saudi Dallah or Dubai RTA) to obtain local heavy vehicle driving licenses, unlocking substantial salary increments and trip allowances.
                </p>
              </div>

              {/* FAQ 11 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>11. Can old healed pulmonary scars cause a GAMCA / Wafid medical failure?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Yes, healed pulmonary scars, calcified lesions, or pleural thickening from past tuberculosis can be flagged on digital chest X-rays during GAMCA screening, potentially resulting in an &quot;UNFIT&quot; declaration. WorkWise Visa advises candidates with a past history of respiratory infections to undergo a preliminary high-resolution CT scan before booking the binding Wafid test.
                </p>
              </div>

              {/* FAQ 12 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>12. How much does a legal work visa for Saudi Arabia or UAE cost under MEA rules?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Under Ministry of External Affairs regulations, approved Recruiting Agents can charge a statutory recruitment fee capped at ₹30,000 + GST for services rendered. The foreign employer is legally obligated to provide the work visa, labor permit authorization, and one-way international airfare.
                </p>
              </div>

              {/* FAQ 13 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>13. What is the Qatar Visa Center (QVC) process for Gaya workers?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  For Qatar employment, after the employer issues work visa authorization, the candidate visits a designated QVC facility (in Kolkata or New Delhi). Biometrics and iris scans are taken, the contract is signed digitally in Hindi, and comprehensive medical tests are performed, with all costs covered by the Qatari company.
                </p>
              </div>

              {/* FAQ 14 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>14. Where is an apostilled Police Clearance Certificate (PCC) obtained in Gaya?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  An authentic Police Clearance Certificate (PCC) must be applied for through the Passport Seva portal (passportindia.gov.in) and processed via the Post Office Passport Seva Kendra (POPSK) Gaya or Regional Passport Office (RPO) Patna. Following local police verification, the PCC is issued by RPO Patna and subsequently apostilled by the MEA in New Delhi.
                </p>
              </div>

              {/* FAQ 15 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>15. What benefits does the Pravasi Bharatiya Bima Yojana (PBBY) offer the family of a worker in Gaya?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  PBBY provides life insurance cover of ₹10,00,000 to the registered nominee in Gaya in the event of accidental death or permanent disability abroad. It also covers full expenses for mortal remains repatriation, ₹1,00,000 hospitalization allowance abroad, and ₹45,000 legal defense cover for contractual disputes.
                </p>
              </div>

              {/* FAQ 16 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>16. How can an overseas worker from Gaya ensure their remittances reach home legally?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Migrant workers should open a Non-Resident External (NRE) savings bank account with a local commercial bank in Gaya (such as SBI Main Branch Court Road, PNB GB Road, or Bank of Baroda). Earnings should be transferred through central bank-regulated exchange houses directly to the NRE account, which offers zero Indian income tax liability on interest and full FEMA compliance.
                </p>
              </div>

              {/* FAQ 17 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>17. Can candidates from Jehanabad and Nawada use the Gaya Candidate Desk?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Yes, candidates across all neighboring districts of Magadh division—including Jehanabad, Nawada, Aurangabad, and Arwal—can submit their profiles, verify contracts, and receive heavy driver counseling through our Gaya liaison desk and online WhatsApp helpline.
                </p>
              </div>

              {/* FAQ 18 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>18. What documents are needed for educational degree HRD attestation for Magadh graduates?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Candidates holding degrees or diplomas from Magadh University, Bodh Gaya or ANMMCH must present original degree certificates, all marksheets, matriculation certificate (for DOB verification), and passport copy to the Department of Higher Education (State HRD) at Vikas Bhawan, New Secretariat, Patna before MEA apostille.
                </p>
              </div>

              {/* FAQ 19 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>19. How does WorkWise Visa support candidates from Gaya who cannot visit Delhi or Noida offices?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  WorkWise Visa provides complete end-to-end digital onboarding. Candidates from Gaya can verify job offers, submit documents for eMigrate clearance, track GAMCA medical appointments, and review electronic Qiwa or MoHRE contracts through our secure online portal and dedicated WhatsApp helpline. Physical travel is only required for binding consular/biometric appointments.
                </p>
              </div>

              {/* FAQ 20 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>20. How do candidates from Gaya track their application status online?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Every candidate registered with WorkWise Visa receives a unique application tracking identifier. You can track your file status in real time—from trade testing to medical report upload, embassy visa stamping, and POE clearance dispatch—via our online application tracking portal at workwisevisa.com/track.
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
                className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all text-center block text-slate-200 hover:text-white"
              >
                <div className="font-semibold">Chhapra Hub</div>
                <div className="text-[11px] text-slate-400">Saran Division Desk</div>
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
                className="p-3 rounded-lg bg-indigo-900/60 border border-indigo-500/40 text-center block text-indigo-200 font-semibold"
              >
                <div>Gaya Hub</div>
                <div className="text-[11px] text-indigo-300">Magadh Division Gateway</div>
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

if (!fs.existsSync('app/locations/gaya')) {
  fs.mkdirSync('app/locations/gaya', { recursive: true });
}
fs.writeFileSync(path.join(process.cwd(), 'app', 'locations', 'gaya', 'page.tsx'), pageContent, 'utf8');
console.log('Successfully created app/locations/gaya/page.tsx');
