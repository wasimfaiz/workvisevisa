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
  title: "Overseas Work Visa & Recruitment in Darbhanga | WorkWise Visa",
  description:
    "Government-regulated overseas recruitment and work visa processing for candidates in Darbhanga, Madhubani, and Mithilanchal. Complete guidance on ECR/ECNR emigration clearance, Saudi Qiwa contracts, Wafid GAMCA medicals, European work permits, DMCH healthcare licensing, and zero-fraud protection.",
  keywords: [
    "work visa darbhanga",
    "overseas recruitment agency darbhanga bihar",
    "gulf job consultancy darbhanga mithilanchal",
    "saudi work visa darbhanga",
    "ecr emigration clearance darbhanga",
    "gamca medical darbhanga",
    "dmch nurse gulf recruitment",
    "europe work permit darbhanga",
    "overseas employment agency madhubani samastipur",
    "qatar work visa darbhanga",
    "uae mohre contract verification darbhanga",
    "poland work permit consultancy darbhanga",
  ],
  alternates: {
    canonical: "https://www.workwisevisa.com/locations/darbhanga",
  },
  openGraph: {
    title: "Overseas Work Visa & Recruitment in Darbhanga | WorkWise Visa",
    description:
      "Authoritative overseas employment, work visa processing, and government-regulated recruitment assistance for skilled workers, healthcare professionals, and technical craftsmen across Darbhanga and Mithilanchal.",
    url: "https://www.workwisevisa.com/locations/darbhanga",
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Overseas Work Visa & Recruitment in Darbhanga | WorkWise Visa",
    description:
      "Reliable overseas employment, ECR emigration assistance, GAMCA medical clearance, and verified work visas for candidates across Darbhanga, Benipur, Madhubani, and Samastipur.",
  },
};

export default function DarbhangaLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EmploymentAgency",
        "@id": "https://www.workwisevisa.com/locations/darbhanga#agency",
        name: "WorkWise Visa - Darbhanga & Mithilanchal Career Assistance Desk",
        url: "https://www.workwisevisa.com/locations/darbhanga",
        logo: "https://www.workwisevisa.com/logo.png",
        image: "https://www.workwisevisa.com/images/hero-bg.jpg",
        description:
          "Authoritative overseas employment consultancy and work visa documentation advisory serving aspiring emigrants, healthcare staff, technical craftsmen, and civil artisans across Darbhanga and Mithilanchal, Bihar.",
        telephone: "+91-98765-43210",
        email: "support@workwisevisa.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Candidate Assistance Liaison Desk, Laheriasarai Station Road",
          addressLocality: "Darbhanga",
          addressRegion: "Bihar",
          postalCode: "846001",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 26.1542,
          longitude: 85.8918,
        },
        areaServed: [
          { "@type": "City", name: "Darbhanga" },
          { "@type": "AdministrativeArea", name: "Mithilanchal" },
          { "@type": "AdministrativeArea", name: "Madhubani" },
          { "@type": "AdministrativeArea", name: "Samastipur" },
          { "@type": "AdministrativeArea", name: "Benipur" },
          { "@type": "AdministrativeArea", name: "Biraul" },
          { "@type": "AdministrativeArea", name: "Baheri" },
          { "@type": "AdministrativeArea", name: "Hayaghat" },
          { "@type": "AdministrativeArea", name: "Keoti" },
          { "@type": "AdministrativeArea", name: "Singhwara" },
          { "@type": "AdministrativeArea", name: "Jale" },
          { "@type": "AdministrativeArea", name: "Manigachhi" },
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
        "@id": "https://www.workwisevisa.com/locations/darbhanga#breadcrumb",
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
            name: "Darbhanga",
            item: "https://www.workwisevisa.com/locations/darbhanga",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.workwisevisa.com/locations/darbhanga#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How can candidates from Darbhanga travel legally to Saudi Arabia or UAE on ECR passports?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Candidates from Darbhanga and Mithilanchal holding Emigration Check Required (ECR) passports can travel completely legally once Emigration Clearance (EC) is obtained via the Ministry of External Affairs eMigrate portal under POE Patna jurisdiction. WorkWise Visa ensures verified digital contracts on Saudi Qiwa or UAE MoHRE, pre-enrolled PBBY insurance of ₹10 Lakh, and authenticated employer demand letters, preventing any airport offloading.",
            },
          },
          {
            "@type": "Question",
            name: "Where do Darbhanga and Madhubani candidates undergo GAMCA / Wafid medical tests?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "There are no authorized Wafid (GAMCA) medical centers located in Darbhanga, Madhubani, or Samastipur. Candidates register online through wafid.com, which systematically allocates them to authorized diagnostic centers in Patna (approx. 135 km away via NH-27 / NH-22). Candidates must avoid unaccredited local diagnostic pathology clinics in Darbhanga claiming to issue GCC medical certificates.",
            },
          },
          {
            "@type": "Question",
            name: "How do DMCH Darbhanga nursing graduates secure overseas hospital jobs in the Gulf?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Graduates of Darbhanga Medical College and Hospital (DMCH) and regional nursing colleges must complete Primary Source Verification (PSV) via the DataFlow Group, clear Prometric or Pearson VUE licensure exams (such as SCFHS Mumaris+ for Saudi Arabia or DHA for Dubai), and obtain State HRD authentication at Vikas Bhawan, Patna before MEA apostille. WorkWise Visa provides complete credential verification and direct hospital placement services.",
            },
          },
          {
            "@type": "Question",
            name: "What European work permit opportunities are available for craftsmen from Mithilanchal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Skilled craftsmen from Darbhanga—including 6G welders, industrial electricians, building tradesmen, and warehouse packaging operatives—can secure legal European work permits for Poland, Romania, Croatia, and Hungary. Processing involves official provincial labor permits (such as Voivodeship permits in Poland), an apostilled PCC from RPO Patna, and a National Type D Employment Visa stamped in New Delhi.",
            },
          },
          {
            "@type": "Question",
            name: "How can candidates from Darbhanga verify if a recruitment agency is government-approved?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Candidates can verify an agency's registration by visiting the official government portal at emigrate.gov.in and searching for the agency's Registration Certificate (RC) number. WorkWise Visa operates in full compliance with MEA standards and enforces a strict zero-advance cash policy.",
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
                  Mithilanchal Overseas Employment Gateway
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Work Visa &amp; Overseas Recruitment in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">
                    Darbhanga
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-justify">
                  Empowering technical craftsmen, DMCH healthcare professionals, construction artisans, and skilled workers across Darbhanga, Benipur, Madhubani, Samastipur, and Mithilanchal with 100% government-regulated international employment. Full compliance with the Emigration Act 1983, direct POE Patna eMigrate clearances, authentic Saudi Qiwa digital contracts, Wafid GAMCA medical protocols, and verified European work permits without unaccredited sub-agent exploitation.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg font-bold text-indigo-400">100%</div>
                    <div className="text-xs text-slate-400 font-medium">eMigrate &amp; POE Patna</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg font-bold text-sky-400">Verified</div>
                    <div className="text-xs text-slate-400 font-medium">Qiwa &amp; MoHRE</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg font-bold text-emerald-400">₹10 Lakh</div>
                    <div className="text-xs text-slate-400 font-medium">PBBY Insurance</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg font-bold text-amber-400">DMCH Desk</div>
                    <div className="text-xs text-slate-400 font-medium">Healthcare DataFlow</div>
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
                    <FaCircleCheck className="text-emerald-400" /> Mithilanchal Candidate Desk
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
                    Direct liaison support for candidates across Darbhanga, Madhubani, Samastipur, and Mithilanchal.
                  </p>

                  <div className="space-y-4 text-sm text-slate-300">
                    <div className="flex items-start gap-3">
                      <FaLocationDot className="text-indigo-400 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-white block">Regional Liaison Desk:</strong>
                        <span>Laheriasarai Station Road / VIP Road, Darbhanga, Bihar 846001</span>
                        <p className="text-xs text-slate-400 mt-0.5">Primary Processing Center: Varma Centre, Boring Road, Patna (135 km via NH-27)</p>
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
                        <span className="text-slate-300">darbhanga.desk@workwisevisa.com</span>
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
                    <span>Direct POE Patna Coordination</span>
                    <span className="text-emerald-400 font-semibold">100% Anti-Scam Verification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: Strategic Emigration Landscape of Darbhanga & Mithilanchal */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-200">
                Regional Economic Dynamics &amp; Migration Demographics
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                The Overseas Employment Landscape of Darbhanga &amp; Mithilanchal
              </h2>
              <div className="w-16 h-1 bg-indigo-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Darbhanga stands as the historic cultural, academic, and medical heartland of the broader Mithilanchal territory—an influential socio-economic sphere encompassing Darbhanga, Madhubani, and Samastipur districts. Renowned for its rich scholarly traditions and artisan heritage, the region has transformed over the past two decades into a vital talent reservoir fueling overseas construction, maintenance, logistics, and healthcare sectors across the Middle East and Europe. Spanning prominent urban, semi-urban, and rural blocks including Benipur, Biraul, Baheri, Hayaghat, Keoti, Singhwara, Jale, Manigachhi, Kusheshwar Asthan, Alinagar, Bahadurpur, Tardih, Kiratpur, and Hanuman Nagar, thousands of determined youths seek lawful, high-paying international employment opportunities each year.
              </p>

              <p>
                The migration demographic of Mithilanchal is characterized by two distinct high-value talent clusters: first, skilled building and technical artisans specializing in civil masonry, plumbing, electrical installations, HVAC systems, and decorative craftsmanship; and second, specialized medical and paramedical talent graduating from premier clinical institutions such as <strong>Darbhanga Medical College and Hospital (DMCH)</strong>, government nursing colleges, and authorized paramedical institutes across Mithilanchal. Both cohorts require specialized international legal compliance: technical workers must navigate mandatory skill testing, GAMCA medical clearances, and POE Patna emigration approvals, while nursing and paramedical staff require Primary Source Verification (PSV) via DataFlow and computer-based Prometric licensure certifications.
              </p>

              <p>
                Moreover, Darbhanga has emerged as a premier transportation hub in North Bihar following the operationalization of <strong>Darbhanga Airport (DBR)</strong>, which provides daily direct air links to New Delhi, Mumbai, and Bengaluru. For international consular processing, Darbhanga is connected to Patna (135 km away) via the four-lane <strong>National Highway 27 (NH-27)</strong> passing through Muzaffarpur and NH-22 into Patna, enabling candidates to access the <strong>Protector of Emigrants (POE) Patna</strong>, the State HRD department at Vikas Bhawan, and GCC-authorized Wafid medical centers in approximately 3 to 3.5 hours.
              </p>

              <p>
                WorkWise Visa eliminates the exploitative middlemen and unlicensed visa dealers operating across Darbhanga, Tower Chowk, Laheriasarai, and Sakri. We provide a transparent, legally protected pathway to overseas employment backed by authentic MEA eMigrate demand letters, verified Saudi Qiwa digital contracts, and direct European provincial work permits.
              </p>
            </div>

            {/* Micro-Demographic Breakdown Table */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FaBuildingColumns className="text-indigo-600" />
                Key Trade Clusters Across Darbhanga &amp; Mithilanchal
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
                      <td className="py-3 px-4 font-semibold text-slate-900">Darbhanga Urban &amp; Laheriasarai</td>
                      <td className="py-3 px-4">B.Sc Nursing, GNM, Dialysis technicians, OT assistants, Pharmacists (DMCH alumni)</td>
                      <td className="py-3 px-4">Saudi Arabia (MOH), UAE (DHA/DOH), Qatar (Hamad Medical)</td>
                      <td className="py-3 px-4">DataFlow PSV, Prometric examination, State HRD attestation Vikas Bhawan</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Benipur &amp; Biraul</td>
                      <td className="py-3 px-4">Building electricians, plumbing &amp; sanitary fitters, false ceiling &amp; gypsum artisans</td>
                      <td className="py-3 px-4">Saudi Arabia (Aramco / Riyadh), UAE, Qatar</td>
                      <td className="py-3 px-4">Takamol Skill Verification (SVP), ECR clearance via POE Patna</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Keoti &amp; Singhwara</td>
                      <td className="py-3 px-4">Structural welders (6G TIG-MIG), aluminium fabricators, HVAC duct installers</td>
                      <td className="py-3 px-4">Qatar (QVC Doha), Saudi Arabia, Croatia</td>
                      <td className="py-3 px-4">QVC biometrics, Wafid medical clearance</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Jale &amp; Manigachhi</td>
                      <td className="py-3 px-4">Heavy equipment mechanics, trailer operators, warehouse packaging associates</td>
                      <td className="py-3 px-4">Kuwait, Oman, Poland, Romania</td>
                      <td className="py-3 px-4">Voivodeship work permit, GCC heavy driver verification</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Baheri &amp; Hayaghat</td>
                      <td className="py-3 px-4">Shuttering carpenters, steel fixers, civil masons, tile &amp; marble layers</td>
                      <td className="py-3 px-4">Saudi Arabia, UAE, Bahrain, Oman</td>
                      <td className="py-3 px-4">PBBY ₹10 Lakh insurance, POE Patna emigration exit pass</td>
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
                Emigration Act 1983: ECR vs ECNR Protocol &amp; POE Patna Jurisdiction
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Every Indian citizen departing the country for overseas employment is strictly governed by the statutory provisions of the <strong>Emigration Act, 1983</strong>, administered by the Ministry of External Affairs (MEA), Government of India. The primary objective of this legal framework is to safeguard workers from fraudulent recruitment, unverified employment contracts, human trafficking, and dangerous working conditions. Under Section 22 of the Act, any individual holding an <strong>Emigration Check Required (ECR)</strong> passport is legally prohibited from boarding an international flight for employment in any of the 18 designated ECR countries without obtaining formal Emigration Clearance (EC) from the designated Protector of Emigrants (POE).
              </p>

              <p>
                For candidates from Darbhanga, Madhubani, and Samastipur, statutory administrative oversight is exercised directly by the <strong>Protector of Emigrants (POE) Patna</strong>. Under the centralized <strong>eMigrate 2.0 portal</strong> (<a href="https://emigrate.gov.in" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline">emigrate.gov.in</a>), the entire clearance procedure is digitized, transparent, and auditable.
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
                      <span><strong>Mandatory POE Clearance:</strong> Must obtain online POE approval via eMigrate before international departure for employment.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>PBBY Enrolment:</strong> Enrolment in Pravasi Bharatiya Bima Yojana (₹10 Lakh cover) is legally compulsory.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Employer Quota Check:</strong> Foreign company quota, salary tier, and housing must be pre-approved on government servers.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-emerald-400 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <FaIdCard className="text-emerald-600 text-2xl" />
                    <h4 className="text-lg font-bold text-slate-900">ECNR Status (Non-ECR Eligible)</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Assigned to individuals holding educational qualifications of Matriculation (Class 10) and above, diploma holders, degree holders, income-tax payees, and professionals.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Direct Airport Clearance:</strong> Can travel without prior POE exit clearances at international airport immigration desks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Consular Protection:</strong> Full access to Indian Embassy support and MADAD grievance redressal overseas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Degree HRD Attestation:</strong> Requires State HRD at Vikas Bhawan, Patna followed by MEA Apostille for professional recognition.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p>
                A core pillar of statutory protection for all overseas workers from Mithilanchal is the mandatory <strong>Pravasi Bharatiya Bima Yojana (PBBY)</strong> insurance policy, offering an assured capital sum of <strong>₹10,00,000 (Ten Lakh Indian Rupees)</strong> in case of accidental death or permanent total disability:
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
                      <td className="py-3 px-4">Payable to registered nominee upon accidental fatality or permanent total disability at worksite or residence abroad.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Mortal Remains Repatriation</td>
                      <td className="py-3 px-4 font-bold text-slate-800">Actual Cost + Airfare</td>
                      <td className="py-3 px-4">Full cost of embalming, casket, air cargo to Patna/Darbhanga plus return airfare for one accompanying attendant.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Medical Inpatient Hospitalization</td>
                      <td className="py-3 px-4 font-bold text-slate-800">₹1,00,000 (Abroad) / ₹50,000 (India)</td>
                      <td className="py-3 px-4">Emergency treatment expenditure reimbursement abroad or within India if medically repatriated.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Legal Defense &amp; Litigation Assistance</td>
                      <td className="py-3 px-4 font-bold text-slate-800">₹45,000</td>
                      <td className="py-3 px-4">Reimbursement of legal representation expenses in disputes involving contract violation or unpaid wages abroad.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Maternity Benefit (Female Migrant Workers)</td>
                      <td className="py-3 px-4 font-bold text-slate-800">₹50,000</td>
                      <td className="py-3 px-4">Medical expenditure for childbirth abroad or upon return for registered female emigrant workers.</td>
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
                Navigating foreign employment mandates requires strict adherence to destination immigration laws. Below is an exhaustive breakdown of the technical visa workflows for destinations most frequently chosen by candidates from Darbhanga and Mithilanchal.
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
                  Saudi Arabia requires all employment contracts to be authenticated electronically via the <strong>Qiwa Electronic Platform</strong> (<a href="https://qiwa.sa" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline">qiwa.sa</a>). Every valid contract outlines exact basic wages, food allowances, housing provisions, medical insurance categories, and job descriptions under Articles 50–55 of the Saudi Labor Law.
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
                  <div className="font-semibold text-slate-900">Key Pillars for Darbhanga Candidates:</div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Takamol Skill Verification Program (SVP):</strong> Mandatory practical &amp; theoretical exam for 23 technical categories (electricians, welders, plumbers) before visa stamping.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Muqeem Digital Visa Stamping:</strong> Fully synchronized electronic visa stamping linked to Absher, eliminating paper visa fraud.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Mudad Wages Protection System (WPS):</strong> Ensures all salaries are disbursed through bank accounts within the Kingdom.</span>
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
                  Governed by Federal Decree-Law No. 33 of 2021, all foreign recruitment begins with an official <strong>MoHRE 12-page Standardized Offer Letter</strong> carrying a unique ST/MB reference code. Working on visit or tourist visas is strictly illegal and subject to heavy fines and deportation.
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
                  <div className="font-semibold text-slate-900">Crucial UAE Compliance Safeguards:</div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Electronic Work Permit (E-Visa):</strong> Issued by GDRFA (Dubai) or ICP (Abu Dhabi/Northern Emirates) prior to departure.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Wages Protection System (WPS):</strong> Strict surveillance of salary deposits via Central Bank-regulated exchange or payroll card.</span>
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
                  Work visa issuance for Qatar operates through <strong>Qatar Visa Centers (QVC)</strong> in Indian metros. Under Qatar&apos;s Ministry of Interior (MOI) and Ministry of Labour (MADLSA), candidates complete biometrics, digital contract signing in Hindi, and medical exams inside India before departure.
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
                  <div className="font-semibold text-slate-900">Key Protections for Qatari Employment:</div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Digital Contract Execution:</strong> Candidate signs the contract at the QVC terminal in their own native language.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Statutory Minimum Wage:</strong> Absolute minimum monthly wage of QAR 1,000 basic plus QAR 500 housing and QAR 300 food allowance.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Zero Fee to Candidate:</strong> All QVC processing charges are legally borne by the hiring Qatari enterprise.</span>
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
                  Mithilanchal&apos;s industrial welders, electricians, and factory packaging operators are securing legal European careers backed by official provincial labor permits: Polish <em>Zezwolenie na Pracę</em> (Voivodeship Permit), Romanian <em>Aviz de Muncă</em>, and Croatian <em>HZZ</em> permits.
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
                  <div className="font-semibold text-slate-900">European Work Visa Prerequisites:</div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>National Type D Visa:</strong> Long-stay work visa stamped by embassies or VFS Centers in New Delhi.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Apostilled Police Clearance Certificate (PCC):</strong> Issued by RPO Patna and apostilled by MEA Patiala House.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Path to Permanent Residency:</strong> Eligibility for Temporary Residence Cards (TRC) and Schengen zone mobility.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: GAMCA / Wafid Medical Protocol for Darbhanga Candidates */}
        <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded border border-rose-200">
                Mandatory Health Screening
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                GAMCA / Wafid Medical Protocol &amp; Transit to Patna Centers
              </h2>
              <div className="w-16 h-1 bg-rose-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                All individuals seeking employment in the six GCC member states (Saudi Arabia, UAE, Qatar, Kuwait, Oman, and Bahrain) are legally bound to clear a stringent pre-employment medical examination regulated by the <strong>Gulf Health Council</strong> under the <strong>Wafid</strong> platform (formerly widely known as <strong>GAMCA</strong>). Prospective emigrants must register exclusively via the official government portal at <a href="https://wafid.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline">wafid.com</a>, generate their official appointment slip, and pay the central fee.
              </p>

              <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-lg not-prose my-4">
                <div className="flex items-start gap-3">
                  <FaTriangleExclamation className="text-rose-600 text-lg mt-0.5 flex-shrink-0" />
                  <div className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                    <strong>Critical Advisory for Darbhanga &amp; Mithilanchal Candidates:</strong> There are <em>no accredited Wafid (GAMCA) medical laboratories</em> in Darbhanga, Madhubani, or Samastipur. Any local pathology lab or broker in Tower Chowk, Laheriasarai, or Benta claiming to provide valid GAMCA certificates is committing fraud. The Wafid portal systematically allocates candidates to authorized diagnostic centers located in <strong>Patna</strong> (approx. 135 km away via NH-27 / NH-22).
                  </div>
                </div>
              </div>

              <p>
                Medical failure results in a direct &quot;UNFIT&quot; declaration uploaded to the shared GCC electronic immigration database, triggering an automatic 2 to 5-year travel bar across all six Gulf nations. Understanding each diagnostic parameter is critical:
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
                  Evaluates for active or healed pulmonary tuberculosis, apical pleural thickening, calcified nodules, or diaphragmatic scarring. Candidates with past respiratory illnesses must undergo preliminary evaluation in Darbhanga before booking their binding Wafid test.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                  <FaSuitcaseMedical /> Serological Screening
                </div>
                <h4 className="font-bold text-slate-900 text-base">Infectious Disease Serology</h4>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  Mandatory automated screening for HIV 1 &amp; 2 antibodies, Hepatitis B Surface Antigen (HBsAg), Hepatitis C Antibodies (Anti-HCV), and Syphilis (VDRL / TPHA). Complete blood counts must be free of major blood dyscrasias.
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
                Transit Logistics: Reaching Patna GAMCA Centers from Darbhanga
              </h4>
              <p className="text-justify leading-relaxed">
                Candidates from Darbhanga should depart early morning via <strong>National Highway 27 (NH-27)</strong> through Muzaffarpur, connecting to <strong>NH-22</strong> across Hajipur and the <strong>JP Setu (Digha-Pahleza Bridge)</strong> directly into Patna (135 km, 3 to 3.5 hours). Fast intercity trains such as the <em>Darbhanga - Patna Intercity Express</em> also provide direct rail access. WorkWise Visa provides preliminary health checkups in Darbhanga to ensure blood pressure, sugar, and liver enzymes are optimal before your official test.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: DMCH Healthcare & Paramedical Emigration Pathway */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded border border-purple-200">
                Healthcare Professional Licensing
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                DMCH Darbhanga Nursing &amp; Healthcare Professional Career Track
              </h2>
              <div className="w-16 h-1 bg-purple-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Darbhanga is home to one of eastern India&apos;s most historic clinical institutions: the <strong>Darbhanga Medical College and Hospital (DMCH)</strong>, alongside recognized nursing colleges and paramedical training schools across Mithilanchal. Each year, qualified B.Sc Nursing graduates, General Nursing and Midwifery (GNM) certificate holders, dialysis technicians, operation theatre (OT) assistants, radiographers, and laboratory technicians pursue international careers in government and private tertiary hospitals across Saudi Arabia, UAE, Qatar, Oman, and the United Kingdom.
              </p>

              <p>
                Unlike blue-collar emigration, international recruitment for healthcare professionals requires rigorous verification across multiple regulatory layers:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 not-prose my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center mx-auto text-sm">1</div>
                  <div className="font-bold text-slate-900 text-sm">State HRD &amp; MEA</div>
                  <div className="text-xs text-slate-600">Attestation of BNRC diploma and degree transcripts at Vikas Bhawan, Patna followed by MEA Apostille.</div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center mx-auto text-sm">2</div>
                  <div className="font-bold text-slate-900 text-sm">DataFlow PSV</div>
                  <div className="text-xs text-slate-600">Primary Source Verification (PSV) of nursing credentials, council registration, and clinical experience certificates.</div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center mx-auto text-sm">3</div>
                  <div className="font-bold text-slate-900 text-sm">Licensing Exams</div>
                  <div className="text-xs text-slate-600">Clearing Prometric / Pearson VUE tests: SCFHS (Saudi Arabia), DHA (Dubai), DOH (Abu Dhabi), or QCHP (Qatar).</div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center mx-auto text-sm">4</div>
                  <div className="font-bold text-slate-900 text-sm">Hospital Placement</div>
                  <div className="text-xs text-slate-600">Direct employment contract issuance with MOH, military hospital networks, or JCI-accredited tertiary care centers.</div>
                </div>
              </div>

              <p>
                WorkWise Visa provides complete end-to-end guidance for healthcare personnel from Darbhanga, managing DataFlow dossier preparation, BNRC verification liaison, Prometric exam scheduling, and official POE emigration clearances.
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
                Overseas Wage &amp; Benefits Benchmark for Mithilanchal Workers
              </h2>
              <div className="w-16 h-1 bg-indigo-600 mt-2 rounded"></div>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed text-justify">
              Transparency in financial remuneration protects candidates from wage theft and deceptive broker promises. Below is an authentic benchmark of prevailing monthly basic salaries and mandatory benefits across 12 prominent industrial, healthcare, and technical trades for workers recruited from Darbhanga and Mithilanchal.
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
                      <td className="py-3 px-4 font-bold text-slate-900">Registered Staff Nurse (B.Sc / GNM)</td>
                      <td className="py-3 px-4">3,500 - 5,500 + Food + Acc</td>
                      <td className="py-3 px-4">4,500 - 7,000 + Acc</td>
                      <td className="py-3 px-4">4,000 - 6,500 + Food + Acc</td>
                      <td className="py-3 px-4">350 - 500 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€1,800 - €2,600 + Acc</td>
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
                      <td className="py-3 px-4 font-bold text-slate-900">Plumbing &amp; Sanitary Technician</td>
                      <td className="py-3 px-4">1,500 - 2,000 + Food + Acc</td>
                      <td className="py-3 px-4">1,700 - 2,200 + Acc</td>
                      <td className="py-3 px-4">1,600 - 2,100 + Food + Acc</td>
                      <td className="py-3 px-4">130 - 180 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€850 - €1,150 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">HVAC Chiller &amp; Split AC Mechanic</td>
                      <td className="py-3 px-4">1,700 - 2,400 + Food + Acc</td>
                      <td className="py-3 px-4">1,900 - 2,600 + Acc</td>
                      <td className="py-3 px-4">1,800 - 2,500 + Food + Acc</td>
                      <td className="py-3 px-4">150 - 200 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€950 - €1,250 + Acc</td>
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
                      <td className="py-3 px-4 font-bold text-slate-900">False Ceiling &amp; Gypsum Artisan</td>
                      <td className="py-3 px-4">1,400 - 1,900 + Food + Acc</td>
                      <td className="py-3 px-4">1,600 - 2,100 + Acc</td>
                      <td className="py-3 px-4">1,500 - 2,000 + Food + Acc</td>
                      <td className="py-3 px-4">120 - 160 + Food + Acc</td>
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
                      <td className="py-3 px-4 font-bold text-slate-900">Dialysis &amp; Lab Technician</td>
                      <td className="py-3 px-4">2,800 - 4,000 + Food + Acc</td>
                      <td className="py-3 px-4">3,500 - 5,000 + Acc</td>
                      <td className="py-3 px-4">3,200 - 4,600 + Food + Acc</td>
                      <td className="py-3 px-4">260 - 380 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€1,400 - €1,900 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Heavy Equipment Operator (JCB/Crane)</td>
                      <td className="py-3 px-4">2,200 - 3,200 + Food + Acc</td>
                      <td className="py-3 px-4">2,400 - 3,500 + Acc</td>
                      <td className="py-3 px-4">2,300 - 3,300 + Food + Acc</td>
                      <td className="py-3 px-4">190 - 260 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€1,100 - €1,500 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Commercial Trailer Driver</td>
                      <td className="py-3 px-4">2,400 - 3,200 + Trip Allow</td>
                      <td className="py-3 px-4">2,600 - 3,600 + Trip Allow</td>
                      <td className="py-3 px-4">2,500 - 3,400 + Trip Allow</td>
                      <td className="py-3 px-4">200 - 280 + Trip Allow</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€1,300 - €1,800 + Trip</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">MEP Supervisor / Site Foreman</td>
                      <td className="py-3 px-4">3,200 - 4,800 + Food + Acc</td>
                      <td className="py-3 px-4">3,800 - 5,500 + Acc</td>
                      <td className="py-3 px-4">3,500 - 5,200 + Food + Acc</td>
                      <td className="py-3 px-4">280 - 420 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€1,500 - €2,200 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Warehouse &amp; Food Factory Operative</td>
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
                Anti-Fraud Intelligence: Protecting Darbhanga Job Seekers from Sub-Agent Rackets
              </h2>
              <div className="w-16 h-1 bg-rose-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Every year, innocent youth from rural and semi-urban blocks of Darbhanga, Madhubani, and Samastipur fall victim to deceptive recruitment rings operating around Tower Chowk, Laheriasarai Station Road, Benta Chowk, and Sakri. These unlicensed middlemen charge exorbitant advance fees ranging from ₹80,000 to ₹2,00,000 while distributing counterfeit visas or sending workers on tourist visas that result in immediate arrest, deportation, and lifelong GCC bans.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
                <div className="bg-rose-50/60 border border-rose-200 rounded-xl p-5 space-y-3">
                  <h4 className="font-bold text-rose-950 flex items-center gap-2 text-base">
                    <FaTriangleExclamation className="text-rose-600" />
                    Major Deceptive Rackets Uncovered in Darbhanga
                  </h4>
                  <ul className="text-xs text-rose-900 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span><strong>The &quot;Azad Visa&quot; Myth:</strong> Touts claim an &quot;Azad Visa&quot; grants freedom to work anywhere in Saudi Arabia or UAE. In truth, working for anyone other than your direct Iqama sponsor is a criminal offense under Saudi Labor Law Article 39 leading to immediate imprisonment and deportation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span><strong>Tourist / Visit Visa Deployment:</strong> Sending workers to UAE or Saudi Arabia on tourist visas with false assurances of &quot;local conversion to employment visa&quot;, leaving workers stranded without legal status.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span><strong>Bogus European Permits:</strong> Fabricated letters alleging to be from Poland, Romania, or Lithuania with fake government seals, demanding heavy advance cash sums.</span>
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
                WorkWise Visa operates under strict zero-advance cash collection policies. Every stage of recruitment is auditable on official government portals, giving Mithilanchal candidates total legal peace of mind.
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
              Mastering foundational technical vocabulary before departure prepares candidates from Darbhanga to communicate effectively on international construction sites, healthcare facilities, and manufacturing plants.
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
                      <td className="py-2.5 px-4 font-bold text-slate-900">Safety Shoes / Boots</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Jazma Salamah (جزمة سلامة)</td>
                      <td className="py-2.5 px-4">सुरक्षा जूते (स्टील टो)</td>
                      <td className="py-2.5 px-4 text-xs">Buty robocze / Bocanci de protecție</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Electrical Cable &amp; Wire</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Silk / Kabil (سلك / كابل)</td>
                      <td className="py-2.5 px-4">बिजली का तार / केबल</td>
                      <td className="py-2.5 px-4 text-xs">Kabel elektryczny / Cablu electric</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Plumbing &amp; Water Pipe</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Masoura Mayya (ماسورة مية)</td>
                      <td className="py-2.5 px-4">पानी का पाइप एवं फिटिंग</td>
                      <td className="py-2.5 px-4 text-xs">Rura wodna / Țeavă de apă</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Gypsum Board &amp; Ceiling</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Jibs Bord (جبس بورد)</td>
                      <td className="py-2.5 px-4">जिप्सम बोर्ड / फॉल्स सीलिंग</td>
                      <td className="py-2.5 px-4 text-xs">Płyta gipsowa / Placă gips-carton</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Welding Machine &amp; Arc</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Makina Ilham (ماكينة لحام)</td>
                      <td className="py-2.5 px-4">वेल्डिंग मशीन</td>
                      <td className="py-2.5 px-4 text-xs">Spawarka / Aparat de sudură</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Tiles &amp; Marble Flooring</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Balat / Rukham (بلاط / رخام)</td>
                      <td className="py-2.5 px-4">टाइल्स एवं संगमरमर का फर्श</td>
                      <td className="py-2.5 px-4 text-xs">Płytki ceramiczne / Gresie și faianță</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Air Conditioner &amp; Chiller</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Mukayyif (مكيف)</td>
                      <td className="py-2.5 px-4">एयर कंडीशनर / एसी चिल्लर</td>
                      <td className="py-2.5 px-4 text-xs">Klimatyzator / Instalație de climatizare</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Danger / Hazardous Area</td>
                      <td className="py-2.5 px-4 font-semibold text-rose-600">Khatar (خطر)</td>
                      <td className="py-2.5 px-4">खतरा / सावधान</td>
                      <td className="py-2.5 px-4 text-xs">Niebezpieczeństwo / Pericol grav</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Site Supervisor / Foreman</td>
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
                      <td className="py-2.5 px-4 font-bold text-slate-900">Residence Card / Iqama</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Iqama / Tasreeh (إقامة / تصريح)</td>
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
                Safe Remittance, NRE/NRO Banking &amp; FEMA Compliance in Darbhanga
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                The fundamental goal of working hard abroad is the economic prosperity and security of your family back home in Mithilanchal. However, many families fall into the trap of informal fund transfer networks—commonly referred to as <strong>Hawala or Hundi</strong>. Under the <strong>Foreign Exchange Management Act (FEMA), 1999</strong> and the <strong>Prevention of Money Laundering Act (PMLA)</strong>, routing remittances through unapproved channels is a punishable financial crime.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                    <FaBuildingColumns className="text-indigo-600" />
                    NRE Account (Non-Resident External)
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    Opened at commercial bank branches in Darbhanga (such as SBI Main Branch Tower Chowk, Punjab National Bank Laheriasarai, or Bank of Baroda). Maintained in Indian Rupees, completely tax-free on interest earned in India, and fully repatriable abroad at any time.
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
                    Remit salary electronically through regulated exchange houses (such as Al Rajhi Tahweel, UAE Exchange / LuLu Exchange, Al Ansari, Western Union, or direct SWIFT/NEFT wire) directly to the Indian NRE bank account in Darbhanga within minutes at live RBI-linked exchange rates.
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
                WorkWise Visa assists candidates before their flight with pre-departure financial literacy sessions, helping them set up clean NRI banking portfolios across Darbhanga.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 10: Logistics, Transit & Embassy Connectivity from Darbhanga */}
        <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                Logistics &amp; Transit Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Transit Logistics: From Darbhanga to Patna POE &amp; New Delhi Embassies
              </h2>
              <div className="w-16 h-1 bg-sky-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Darbhanga features unmatched connectivity across North Bihar, anchored by Darbhanga Airport (DBR), Darbhanga Junction (DBG), and the four-lane East-West Corridor (NH-27).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Route to Patna */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <FaCarSide className="text-indigo-600 text-2xl" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Highway &amp; Rail Route to Patna (135 km)</h4>
                    <span className="text-xs text-slate-500">For GAMCA Medicals, State HRD &amp; POE Patna</span>
                  </div>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <p className="leading-relaxed">
                    <strong>By Road:</strong> Travel west via the four-lane <strong>National Highway 27 (NH-27)</strong> to Muzaffarpur, then take <strong>NH-22</strong> south through Hajipur and cross the <strong>JP Setu (Digha-Pahleza Bridge)</strong> into Patna. Travel time is approximately 3 to 3.5 hours.
                  </p>
                  <p className="leading-relaxed">
                    <strong>By Rail:</strong> The <em>Darbhanga - Patna Intercity Express</em> and regular MEMU services connect Darbhanga Junction (DBG) to Patna Junction (PNBE) and Patliputra (PPTA) in 3.5 to 4 hours.
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
                  <FaPlaneDeparture className="text-sky-600 text-2xl" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Air &amp; Superfast Rail to New Delhi (1,150 km)</h4>
                    <span className="text-xs text-slate-500">For European Embassies, MEA Patiala House &amp; VFS Global</span>
                  </div>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <p className="leading-relaxed">
                    <strong>Direct Flights from Darbhanga Airport (DBR):</strong> Daily non-stop flights link DBR directly to Indira Gandhi International Airport (DEL), New Delhi in just 1 hour 45 minutes.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Premier Express Trains from Darbhanga Junction (DBG):</strong>
                  </p>
                  <ul className="space-y-1">
                    <li>• <strong>Bihar Sampark Kranti Express (12565):</strong> Fast superfast connection to New Delhi (NDLS).</li>
                    <li>• <strong>Swatantrata Senani Superfast Express (12561):</strong> Direct overnight service to New Delhi.</li>
                    <li>• <strong>Darbhanga - New Delhi Clone Special (02569):</strong> High-speed priority express.</li>
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
                Book Verified Overseas Work Visa Consultation in Darbhanga
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
                Frequently Asked Questions: Overseas Employment for Darbhanga Candidates
              </h2>
              <div className="w-16 h-1 bg-indigo-600 mt-2 rounded"></div>
            </div>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>1. How can candidates from Darbhanga travel legally to Saudi Arabia or UAE on ECR passports?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Candidates from Darbhanga and Mithilanchal holding Emigration Check Required (ECR) passports can travel completely legally once Emigration Clearance (EC) is obtained via the Ministry of External Affairs eMigrate 2.0 portal under POE Patna jurisdiction. WorkWise Visa ensures verified digital contracts on Saudi Qiwa or UAE MoHRE, pre-enrolled PBBY insurance of ₹10 Lakh, and authenticated employer demand letters, preventing any airport offloading.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>2. Where do Darbhanga and Madhubani candidates undergo GAMCA / Wafid medical tests?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  There are no authorized Wafid (GAMCA) medical centers located in Darbhanga, Madhubani, or Samastipur. Candidates register online through wafid.com, which systematically allocates them to authorized diagnostic centers in Patna (approx. 135 km away via NH-27 / NH-22). Candidates must avoid unaccredited local diagnostic pathology clinics in Darbhanga claiming to issue GCC medical certificates.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>3. How do DMCH Darbhanga nursing graduates secure overseas hospital jobs in the Gulf?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Graduates of Darbhanga Medical College and Hospital (DMCH) and regional nursing colleges must complete Primary Source Verification (PSV) via the DataFlow Group, clear Prometric or Pearson VUE licensure exams (such as SCFHS Mumaris+ for Saudi Arabia or DHA for Dubai), and obtain State HRD authentication at Vikas Bhawan, Patna before MEA apostille. WorkWise Visa provides complete credential verification and direct hospital placement services.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>4. What European work permit opportunities are available for craftsmen from Mithilanchal?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Skilled craftsmen from Darbhanga—including 6G welders, industrial electricians, building tradesmen, and warehouse packaging operatives—can secure legal European work permits for Poland, Romania, Croatia, and Hungary. Processing involves official provincial labor permits (such as Voivodeship permits in Poland), an apostilled PCC from RPO Patna, and a National Type D Employment Visa stamped in New Delhi.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>5. What is the Takamol Skill Verification Program (SVP) required for Saudi Arabia?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  The Takamol Skill Verification Program (SVP) is a mandatory practical and computer-based theoretical examination launched by the Saudi Ministry of Human Resources to verify the professional competence of foreign craftsmen before granting an employment visa. Building electricians, plumbers, welders, and HVAC technicians from Darbhanga must appear for this exam at authorized Takamol testing centers.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>6. How can candidates from Darbhanga verify if a recruitment agency is government-approved?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Candidates can verify an agency&apos;s registration by visiting the official government portal at emigrate.gov.in and searching for the agency&apos;s Registration Certificate (RC) number. WorkWise Visa operates in full compliance with MEA standards and enforces a strict zero-advance cash policy.
                </p>
              </div>

              {/* FAQ 7 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>7. What happens if a worker travels to the UAE on a visit visa seeking employment?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Traveling to the UAE on a visit visa to work is illegal under UAE Federal Labor Law. Working without an official MoHRE electronic work permit subjects the individual to heavy fines (up to AED 50,000 for employers), detention, deportation, and an irreversible lifetime entry ban. Legitimate recruitment must conclude with an official MoHRE employment entry visa issued prior to departure.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>8. What is the role of the Protector of Emigrants (POE) Patna for Darbhanga applicants?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  The Protector of Emigrants (POE) Patna is the statutory field authority under the Ministry of External Affairs responsible for protecting emigrant workers across Bihar, including Darbhanga. The POE reviews employment contracts, verifies employer credentials, ensures PBBY insurance compliance, and grants official Emigration Clearance (EC) on passports before international departure.
                </p>
              </div>

              {/* FAQ 9 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>9. Can old healed pulmonary scars cause a GAMCA / Wafid medical failure?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Yes, healed pulmonary scars, calcified lesions, or pleural thickening from past tuberculosis can be flagged on digital chest X-rays during GAMCA screening, potentially resulting in an &quot;UNFIT&quot; result. WorkWise Visa advises candidates with a past history of respiratory infection to undergo a preliminary high-resolution CT scan before booking the binding Wafid exam.
                </p>
              </div>

              {/* FAQ 10 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>10. How much does a legal work visa for Saudi Arabia or UAE cost under government rules?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Under Ministry of External Affairs regulations, approved Recruiting Agents can charge a statutory recruitment fee capped at ₹30,000 + GST for services rendered. The foreign employer is legally obligated to provide the work visa, labor permit authorization, and one-way international airfare.
                </p>
              </div>

              {/* FAQ 11 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>11. What is the Qatar Visa Center (QVC) process for Darbhanga workers?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  For Qatar employment, after the employer issues a work visa authorization, the candidate visits a designated QVC center (in Kolkata or New Delhi). Biometrics and iris scans are taken, the contract is signed digitally in Hindi, and comprehensive medical tests are performed, with all costs covered by the Qatari company.
                </p>
              </div>

              {/* FAQ 12 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>12. Where is an apostilled Police Clearance Certificate (PCC) obtained in Darbhanga?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  An authentic Police Clearance Certificate (PCC) must be applied for through the official Passport Seva portal (passportindia.gov.in) and processed via the Post Office Passport Seva Kendra (POPSK) Darbhanga or Regional Passport Office (RPO) Patna. Following local police verification, the PCC is issued by RPO Patna and subsequently apostilled by the MEA in New Delhi.
                </p>
              </div>

              {/* FAQ 13 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>13. What benefits does the Pravasi Bharatiya Bima Yojana (PBBY) offer the family of a worker in Darbhanga?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  PBBY provides life insurance cover of ₹10,00,000 to the registered nominee in Darbhanga in the event of accidental death or permanent disability abroad. It also covers full expenses for mortal remains repatriation, ₹1,00,000 hospitalization allowance abroad, and ₹45,000 legal defense cover for contractual disputes.
                </p>
              </div>

              {/* FAQ 14 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>14. How can an overseas worker from Darbhanga ensure their remittances reach home legally?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Migrant workers should open a Non-Resident External (NRE) savings bank account with a local commercial bank in Darbhanga (such as SBI Main Branch Tower Chowk, PNB Laheriasarai, or Bank of Baroda). Earnings should be transferred through central bank-regulated exchange houses directly to the NRE account, which offers zero Indian income tax liability on interest and full FEMA compliance.
                </p>
              </div>

              {/* FAQ 15 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>15. What should a worker do if their Gulf employer withholds their passport upon arrival?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Passport confiscation is explicitly illegal under Saudi Labor Law (Article 6), UAE Labor Law (Decree-Law No. 33), and Qatari law. If an employer illegally withholds an Indian passport, the worker can register an immediate complaint with the Indian Embassy via the MADAD portal (madad.gov.in) and file a grievance with the host country&apos;s labor dispute department.
                </p>
              </div>

              {/* FAQ 16 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>16. Can candidates from Madhubani and Samastipur use the Darbhanga Candidate Desk?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Yes, candidates across all neighboring districts of Mithilanchal—including Madhubani, Samastipur, and Sitamarhi—can submit their profiles, verify contracts, and receive trade test counseling through our Darbhanga liaison desk and online WhatsApp helpline.
                </p>
              </div>

              {/* FAQ 17 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>17. Are there age restrictions for obtaining overseas employment visas in the Gulf and Europe?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  For general technical, construction, and hospitality trades in the GCC, candidate age must typically range between 21 and 50 years. In European countries such as Poland, Romania, and Croatia, work permits are generally issued to candidates aged between 20 and 55 years, provided they pass requisite medical examinations.
                </p>
              </div>

              {/* FAQ 18 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>18. What documents are needed for educational degree HRD attestation for Mithilanchal graduates?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Candidates holding degrees or diplomas from Lalit Narayan Mithila University (LNMU), Darbhanga or DMCH must present original degree certificates, all marksheets, matriculation certificate (for DOB verification), and passport copy to the Department of Higher Education (State HRD) at Vikas Bhawan, New Secretariat, Patna before MEA apostille.
                </p>
              </div>

              {/* FAQ 19 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>19. How does WorkWise Visa support candidates from Darbhanga who cannot visit Delhi or Noida offices?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  WorkWise Visa provides complete end-to-end digital onboarding. Candidates from Darbhanga can verify job offers, submit documents for eMigrate clearance, track GAMCA medical appointments, and review electronic Qiwa or MoHRE contracts through our secure online portal and dedicated WhatsApp helpline. Physical travel is only required for binding consular/biometric appointments.
                </p>
              </div>

              {/* FAQ 20 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>20. How do candidates from Darbhanga track their visa application status?</span>
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
                className="p-3 rounded-lg bg-indigo-900/60 border border-indigo-500/40 text-center block text-indigo-200 font-semibold"
              >
                <div>Darbhanga Hub</div>
                <div className="text-[11px] text-indigo-300">Mithilanchal Gateway</div>
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

if (!fs.existsSync('app/locations/darbhanga')) {
  fs.mkdirSync('app/locations/darbhanga', { recursive: true });
}
fs.writeFileSync(path.join(process.cwd(), 'app', 'locations', 'darbhanga', 'page.tsx'), pageContent, 'utf8');
console.log('Successfully created app/locations/darbhanga/page.tsx');
