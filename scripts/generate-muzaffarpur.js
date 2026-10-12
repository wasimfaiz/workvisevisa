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
  title: "Overseas Work Visa & Recruitment in Muzaffarpur | WorkWise Visa",
  description:
    "Government-regulated overseas recruitment and work visa processing for candidates in Muzaffarpur and Tirhut division. Complete guidance on ECR/ECNR emigration clearance, Saudi Qiwa contracts, Wafid GAMCA medicals, European work permits, SKMCH healthcare licensing, and anti-fraud protection.",
  keywords: [
    "work visa muzaffarpur",
    "overseas recruitment agency muzaffarpur",
    "gulf job consultancy muzaffarpur bihar",
    "saudi work visa muzaffarpur",
    "ecr emigration clearance muzaffarpur",
    "gamca medical muzaffarpur",
    "europe work permit north bihar",
    "skmch nurse gulf recruitment",
    "overseas employment agency tirhut division",
    "qatar work visa muzaffarpur",
    "uae mohre contract verification bihar",
    "poland work permit consultancy muzaffarpur",
  ],
  alternates: {
    canonical: "https://www.workwisevisa.com/locations/muzaffarpur",
  },
  openGraph: {
    title: "Overseas Work Visa & Recruitment in Muzaffarpur | WorkWise Visa",
    description:
      "Authoritative overseas employment, work visa processing, and government-regulated recruitment assistance for skilled workers, healthcare professionals, and technical trades across Muzaffarpur and North Bihar.",
    url: "https://www.workwisevisa.com/locations/muzaffarpur",
    siteName: "WorkWise Visa",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Overseas Work Visa & Recruitment in Muzaffarpur | WorkWise Visa",
    description:
      "Reliable overseas employment, ECR emigration assistance, GAMCA medical clearance, and verified work visas for candidates across Muzaffarpur, Motipur, Kanti, and Tirhut division.",
  },
};

export default function MuzaffarpurLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EmploymentAgency",
        "@id": "https://www.workwisevisa.com/locations/muzaffarpur#agency",
        name: "WorkWise Visa - Muzaffarpur & Tirhut Division Career Assistance Desk",
        url: "https://www.workwisevisa.com/locations/muzaffarpur",
        logo: "https://www.workwisevisa.com/logo.png",
        image: "https://www.workwisevisa.com/images/hero-bg.jpg",
        description:
          "Authoritative overseas employment consultancy and work visa documentation advisory serving aspiring emigrants, technical craftsmen, engineers, and healthcare staff across Muzaffarpur and Tirhut Division, Bihar.",
        telephone: "+91-98765-43210",
        email: "support@workwisevisa.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Candidate Assistance Liaison Desk, Ramdayalu Nagar Station Road",
          addressLocality: "Muzaffarpur",
          addressRegion: "Bihar",
          postalCode: "842002",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 26.1209,
          longitude: 85.3647,
        },
        areaServed: [
          { "@type": "City", name: "Muzaffarpur" },
          { "@type": "AdministrativeArea", name: "Tirhut Division" },
          { "@type": "AdministrativeArea", name: "Kanti" },
          { "@type": "AdministrativeArea", name: "Motipur" },
          { "@type": "AdministrativeArea", name: "Kurhani" },
          { "@type": "AdministrativeArea", name: "Sakra" },
          { "@type": "AdministrativeArea", name: "Saraiya" },
          { "@type": "AdministrativeArea", name: "Musahari" },
          { "@type": "AdministrativeArea", name: "Bochahan" },
          { "@type": "AdministrativeArea", name: "Gaighat" },
          { "@type": "AdministrativeArea", name: "Minapur" },
          { "@type": "AdministrativeArea", name: "Sahebganj" },
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
        "@id": "https://www.workwisevisa.com/locations/muzaffarpur#breadcrumb",
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
            name: "Muzaffarpur",
            item: "https://www.workwisevisa.com/locations/muzaffarpur",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.workwisevisa.com/locations/muzaffarpur#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can candidates holding ECR passports from Muzaffarpur travel legally to Saudi Arabia or UAE?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, candidates holding Emigration Check Required (ECR) passports from Muzaffarpur can travel legally to Saudi Arabia, UAE, Qatar, and all 18 notified ECR nations once Emigration Clearance (EC) is issued through the Ministry of External Affairs eMigrate portal. WorkWise Visa ensures that every offer letter is authenticated by the Protector of Emigrants (POE) Patna jurisdiction, accompanied by a verified digital employment contract, Pravasi Bharatiya Bima Yojana (PBBY) insurance, and authenticated employer credentials, preventing any offloading at departure airports.",
            },
          },
          {
            "@type": "Question",
            name: "Where do Muzaffarpur job seekers undergo GAMCA / Wafid medical examinations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Since there is currently no accredited Wafid (GAMCA) medical center physically located in Muzaffarpur, candidates register online through the official wafid.com portal, which systematically generates an appointment slip for an authorized diagnostic center in Patna (approximately 70 km away via NH-22 across JP Setu). Candidates must avoid unauthorized diagnostic pathology labs in Muzaffarpur claiming to issue GCC medical certificates.",
            },
          },
          {
            "@type": "Question",
            name: "How can nursing graduates from SKMCH Muzaffarpur get overseas hospital appointments in the Gulf?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Graduates of Sri Krishna Medical College and Hospital (SKMCH) and recognized nursing institutions across Muzaffarpur must undergo Primary Source Verification (PSV) via the DataFlow Group, clear relevant Prometric or Pearson VUE licensure exams (such as SCFHS Mumaris+ for Saudi Arabia, DHA for Dubai, or QCHP for Qatar), and obtain State HRD authentication at Vikas Bhawan, Patna before MEA apostille. WorkWise Visa provides complete credential verification and direct hospital placement services.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between an authentic Saudi Qiwa digital contract and an offer letter from an agent?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An authentic Saudi employment contract must be generated electronically through the Kingdom of Saudi Arabia Ministry of Human Resources and Social Development Qiwa portal (qiwa.sa). It includes an official digital contract serial number, clearly defined basic salary, food allowance, housing provisions, medical insurance category, and specific profession code. A paper offer letter printed on unauthorized agency letterhead is legally void in Saudi Arabia and cannot be used to generate an official Qiwa contract or Iqama residency permit.",
            },
          },
          {
            "@type": "Question",
            name: "Are work permits available for European countries like Poland, Romania, and Croatia for workers from Muzaffarpur?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, there is substantial overseas demand across Central and Eastern Europe for certified welders, heavy vehicle operators, construction craftsmen, logistics handlers, and factory operators from Muzaffarpur. European employment requires an official government work permit issued by provincial labor authorities (such as a Voivodeship permit in Poland or Aviz de Muncă in Romania), followed by an apostilled Police Clearance Certificate (PCC) from RPO Patna and a National Type D Employment Visa stamped at the respective embassy or VFS Center in New Delhi.",
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
                  Tirhut Division Overseas Employment Gateway
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Work Visa & Overseas Recruitment in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">
                    Muzaffarpur
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-justify">
                  Empowering technicians, healthcare professionals, engineering trades, and skilled workers across Muzaffarpur, Motipur, Kanti, Kurhani, Sakra, and North Bihar with 100% government-regulated overseas employment. Full compliance with the Emigration Act 1983, direct POE Patna eMigrate clearances, authentic Saudi Qiwa digital contracts, Wafid GAMCA medical protocols, and legal European work permits without unaccredited sub-agent exploitation.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg font-bold text-indigo-400">100%</div>
                    <div className="text-xs text-slate-400 font-medium">eMigrate & POE Patna</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg font-bold text-sky-400">Verified</div>
                    <div className="text-xs text-slate-400 font-medium">Qiwa & MoHRE</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg font-bold text-emerald-400">₹10 Lakh</div>
                    <div className="text-xs text-slate-400 font-medium">PBBY Insurance</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg font-bold text-amber-400">Zero Racket</div>
                    <div className="text-xs text-slate-400 font-medium">Anti-Fraud Security</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                  <span className="inline-flex items-center gap-1.5">
                    <FaCircleCheck className="text-emerald-400" /> MEA Registered Agency Network
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FaCircleCheck className="text-emerald-400" /> Direct Wafid Medical Coordination
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FaCircleCheck className="text-emerald-400" /> SKMCH Healthcare DataFlow
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
                    Direct liaison support for candidates across Muzaffarpur, Vaishali, Sitamarhi, and Sheohar districts.
                  </p>

                  <div className="space-y-4 text-sm text-slate-300">
                    <div className="flex items-start gap-3">
                      <FaLocationDot className="text-indigo-400 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-white block">Regional Liaison Desk:</strong>
                        <span>Station Road, Ramdayalu Nagar / Mithanpura Junction, Muzaffarpur, Bihar 842002</span>
                        <p className="text-xs text-slate-400 mt-0.5">Central Processing: Urbtech Trade Centre, Sector 132, Noida, NCR</p>
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
                        <span className="text-slate-300">muzaffarpur.desk@workwisevisa.com</span>
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
                    <span>Authentic POE Clearance</span>
                    <span className="text-emerald-400 font-semibold">100% Anti-Scam Verification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: Strategic Emigration Landscape of Muzaffarpur & Tirhut Division */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-200">
                Regional Economic Dynamics & Migration Demographics
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                The Overseas Employment Landscape of Muzaffarpur & Tirhut Division
              </h2>
              <div className="w-16 h-1 bg-indigo-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Muzaffarpur stands as the undisputed commercial, medical, and educational metropolis of North Bihar. Serving as the administrative headquarters of Tirhut Division—which encompasses Muzaffarpur, Vaishali, Sitamarhi, Sheohar, East Champaran, and West Champaran—the district has evolved into a vital talent pipeline supplying skilled technicians, certified tradesmen, industrial craftsmen, and healthcare specialists to international employment markets. Across the sprawling industrial corridors of Motipur, the thermal engineering clusters surrounding Kanti, and vibrant agricultural-commercial blocks such as Kurhani, Sakra, Saraiya, Musahari, Bochahan, Gaighat, Minapur, and Sahebganj, thousands of aspirational youth seek rewarding overseas careers in the Gulf Cooperation Council (GCC) nations and rapidly expanding manufacturing economies of Central and Eastern Europe.
              </p>

              <p>
                Historically, overseas migration from North Bihar was predominantly characterized by informal networks, where prospective emigrants relied on village-level middlemen, family contacts, and unverified brokers. While this informal mechanism allowed early waves of workers to enter Gulf construction markets during the 1980s and 1990s, the modern global employment landscape has undergone radical legal and technological transformations. Today, sovereign destination nations such as the Kingdom of Saudi Arabia, the United Arab Emirates, Qatar, Kuwait, Oman, and European Union member states have established zero-tolerance regulatory ecosystems governing migrant employment. From digital labor contract authentication on Saudi Arabia’s Qiwa platform to biometric processing through Qatar Visa Centers (QVC) and Wages Protection System (WPS) electronic payrolls in the UAE, arbitrary recruitment is no longer legally possible or safe.
              </p>

              <p>
                In Muzaffarpur, this modern migration dynamic is distinctly bifurcated across two powerhouse sectors: first, technical industrial trades comprising certified structural welders, pipe fitters, electricians, HVAC chiller mechanics, and heavy machinery operators; and second, specialized healthcare manpower emerging from premier academic and clinical institutions such as Sri Krishna Medical College and Hospital (SKMCH) and regional nursing colleges. Both segments face unique regulatory hurdles. Technical workers must navigate mandatory skill testing, GAMCA medical evaluations, and ECR emigration clearances through the Protector of Emigrants (POE) Patna jurisdiction, while nurses and lab technicians must satisfy rigorous credential primary source verification via the DataFlow Group and clear computer-based Prometric examinations.
              </p>

              <p>
                WorkWise Visa bridges this vital gap by providing candidates in Muzaffarpur with a direct, ethical, and institutionally backed channel to international careers. By dismantling deceptive local sub-agent networks operating around Ramdayalu Nagar, Mithanpura, Brahmpura, and Saraiya Ganj, our structured advisory ensures that every overseas employment contract originates from verified overseas employers, is legally sanctioned by the Ministry of External Affairs (MEA), and provides absolute statutory protection under Indian emigration jurisprudence.
              </p>
            </div>

            {/* Micro-Demographic Breakdown Table */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FaBuildingColumns className="text-indigo-600" />
                Key Trade Clusters Across Muzaffarpur District
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-700">
                  <thead className="bg-slate-100 text-slate-900 uppercase text-xs font-semibold">
                    <tr>
                      <th className="py-3 px-4 border-b border-slate-200">Block / Sub-Division</th>
                      <th className="py-3 px-4 border-b border-slate-200">Dominant Talent & Skill Cohort</th>
                      <th className="py-3 px-4 border-b border-slate-200">Primary Overseas Destinations</th>
                      <th className="py-3 px-4 border-b border-slate-200">Critical Compliance Requirements</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Kanti & Marwan</td>
                      <td className="py-3 px-4">Power plant electricians, thermal substation technicians, instrument fitters, riggers</td>
                      <td className="py-3 px-4">Saudi Arabia (Aramco / SEC projects), UAE, Qatar</td>
                      <td className="py-3 px-4">Takamol Skill Verification (SVP), ECR clearance via POE Patna</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Motipur & Sahebganj</td>
                      <td className="py-3 px-4">Heavy equipment mechanics, agro-processing technicians, commercial trailer operators</td>
                      <td className="py-3 px-4">Kuwait, Oman, Romania, Poland</td>
                      <td className="py-3 px-4">Heavy vehicle GCC license verification, Voivodeship permit clearance</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Musahari & Urban Muzaffarpur</td>
                      <td className="py-3 px-4">B.Sc Nursing, GNM, Dialysis technicians, Radiographers, Pharmacists (SKMCH alumni)</td>
                      <td className="py-3 px-4">Saudi Arabia (MOH), UAE (DHA / DOH), Qatar (Hamad Medical)</td>
                      <td className="py-3 px-4">DataFlow PSV, Prometric examination, State HRD attestation Vikas Bhawan</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Kurhani & Sakra</td>
                      <td className="py-3 px-4">HVAC technicians, plumbing/sanitary trades, civil masonry, aluminium fabricators</td>
                      <td className="py-3 px-4">UAE, Saudi Arabia, Bahrain</td>
                      <td className="py-3 px-4">Wafid medical clearance, MoHRE standard electronic offer letter</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Saraiya & Bochahan</td>
                      <td className="py-3 px-4">Structural fabricators, 6G arc/argon welders, scaffolding supervisors</td>
                      <td className="py-3 px-4">Qatar (QVC Doha), Saudi Arabia (Neom / Red Sea), Croatia</td>
                      <td className="py-3 px-4">Third-party welding certificate attestation, QVC biometric capture</td>
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
                Emigration Act 1983: ECR vs ECNR Protocol & POE Patna Jurisdiction
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Every Indian citizen departing the country for overseas employment is strictly governed by the statutory provisions of the <strong>Emigration Act, 1983</strong>, administered by the Ministry of External Affairs (MEA), Government of India. The primary objective of this legal framework is to safeguard vulnerable workers from human trafficking, fraudulent contracts, unsafe working conditions, and economic exploitation. Under Section 22 of the Act, any individual holding an <strong>Emigration Check Required (ECR)</strong> passport is legally prohibited from boarding an international flight for employment in any of the 18 designated ECR countries without obtaining formal Emigration Clearance (EC) from the designated Protector of Emigrants (POE).
              </p>

              <p>
                The 18 notified ECR countries comprise the United Arab Emirates, Kingdom of Saudi Arabia, Qatar, Sultanate of Oman, State of Kuwait, Kingdom of Bahrain, Malaysia, Libya, Jordan, Yemen, Sudan, South Sudan, Afghanistan, Indonesia, Syria, Lebanon, Thailand, and Iraq. For candidates originating from Muzaffarpur and the broader Tirhut Division, statutory administrative oversight is exercised directly by the <strong>Protector of Emigrants (POE) Patna</strong>, situated in the capital city of Bihar. Previously, obtaining emigration clearance required tedious physical interactions and vulnerability to unscrupulous touts. Today, under the modernized <strong>eMigrate 2.0 portal</strong> (accessible at <a href="https://emigrate.gov.in" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline">emigrate.gov.in</a>), the entire clearance process is digitized, transparent, and auditable.
              </p>

              <p>
                Understanding your passport category is the foundation of lawful emigration:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-indigo-400 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <FaPassport className="text-amber-500 text-2xl" />
                    <h4 className="text-lg font-bold text-slate-900">ECR Status (Emigration Check Required)</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Assigned to citizens who have not passed their Class 10 (Matriculation) board examination. Passports display an explicit stamp or notation: &quot;Emigration Check Required&quot;.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Mandatory Clearance:</strong> Must obtain online POE approval prior to overseas departure for blue-collar jobs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Pre-departure Insurance:</strong> Enrolment in Pravasi Bharatiya Bima Yojana (PBBY) is a statutory prerequisite.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Employer Scrutiny:</strong> Employer quota, salary tier, and labor accommodation must be pre-approved on eMigrate.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-emerald-400 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <FaIdCard className="text-emerald-600 text-2xl" />
                    <h4 className="text-lg font-bold text-slate-900">ECNR Status (Non-ECR Eligible)</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Assigned to individuals with educational qualifications of Matriculation (Class 10) and above, diploma holders, degree holders, income-tax payees, and professionals.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>No Airport Clearance Needed:</strong> Can travel without obtaining prior clearance certificates from POE.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>MADAD Protection:</strong> Still eligible for Indian embassy legal aid, MADAD grievances, and voluntary PBBY insurance.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Document Attestation:</strong> Requires State HRD and MEA Apostille for professional degree recognition abroad.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p>
                A cornerstone of legal protection for all overseas workers from Muzaffarpur is the mandatory <strong>Pravasi Bharatiya Bima Yojana (PBBY)</strong> policy. Under Indian law, an overseas work visa cannot receive emigration clearance unless the emigrant is insured under an approved PBBY policy offering a comprehensive capital sum insured of <strong>₹10,00,000 (Ten Lakh Indian Rupees)</strong> in the unfortunate event of accidental demise or permanent total disability occurring during the period of employment abroad.
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
                      <th className="py-3 px-4 border-b border-slate-200">Coverage Conditions & Operational Scope</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Accidental Demise / Permanent Disability</td>
                      <td className="py-3 px-4 font-bold text-emerald-600">₹10,00,000</td>
                      <td className="py-3 px-4">Payable to registered nominee upon accidental death or 100% permanent disability at worksite or residence abroad.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Mortal Remains Repatriation</td>
                      <td className="py-3 px-4 font-bold text-slate-800">Actual Cost + Airfare</td>
                      <td className="py-3 px-4">Full cost of embalming, casket, cargo transportation to Patna/Muzaffarpur plus round-trip airfare for one accompanying attendant.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Medical Inpatient Hospitalization</td>
                      <td className="py-3 px-4 font-bold text-slate-800">₹1,00,000 (Abroad) / ₹50,000 (India)</td>
                      <td className="py-3 px-4">Emergency medical treatment expense reimbursement abroad or within India if medically repatriated.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Legal Defense & Litigation Costs</td>
                      <td className="py-3 px-4 font-bold text-slate-800">₹45,000</td>
                      <td className="py-3 px-4">Reimbursement of legal consultation fees in disputes arising from unfair dismissal or wage disputes with the overseas employer.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">Maternity Benefit (Female Workers)</td>
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
                Country-Specific Work Permit Architectures: Gulf & Europe
              </h2>
              <div className="w-16 h-1 bg-sky-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Each destination jurisdiction enforces sovereign immigration and labor laws that dictate the validity of an overseas work permit. Navigating these requirements demands strict adherence to official governmental digital verification portals. Below is an exhaustive breakdown of the technical visa workflows for countries most frequently chosen by candidates from Muzaffarpur and Tirhut Division.
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
                    Qiwa & SVP Mandatory
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  Saudi Arabia has completely migrated its foreign labor ecosystem to the <strong>Qiwa Electronic Platform</strong> (<a href="https://qiwa.sa" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline">qiwa.sa</a>) under the Ministry of Human Resources and Social Development (MHRSD). Every valid employment contract is generated digitally, outlining specific salary structures, mandatory health insurance coverage, accommodation provisions, and job descriptions under Articles 50–55 of the Saudi Labor Law.
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
                  <div className="font-semibold text-slate-900">Key Pillars for Muzaffarpur Candidates:</div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Takamol Skill Verification Program (SVP):</strong> Mandatory professional practical & theory examination for 23 technical categories (electricians, welders, plumbers, HVAC mechanics) before visa stamping.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Muqeem Digital Visa Stamping:</strong> Direct electronic stamping linked to the Absher portal, eliminating paper visa fraud.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Wages Protection System (WPS / Mudad):</strong> Guarantees all salaries are disbursed through bank accounts within the Kingdom.</span>
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
                  Employment in the UAE is governed by the Ministry of Human Resources and Emiratisation (MoHRE) pursuant to Federal Decree-Law No. 33 of 2021. No foreign national can legally initiate employment on a tourist, visit, or transit visa. Recruitment begins exclusively with the generation of an official <strong>MoHRE 12-page Standardized Offer Letter</strong> carrying a unique ST/MB reference code.
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
                    <span><strong>Labor Law Redundancy Protection:</strong> Mandatory Involuntary Loss of Employment (ILOE) social security enrollment.</span>
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
                  Work visa issuance for Qatar operates through state-of-the-art <strong>Qatar Visa Centers (QVC)</strong> established across major Indian metropolitan hubs. Under the oversight of Qatar’s Ministry of Interior (MOI) and Ministry of Labour (MADLSA), candidates must undergo biometric iris scanning, fingerprinting, digital contract signing, and comprehensive medical examination inside India before visa grant.
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
                  <div className="font-semibold text-slate-900">Key Protections for Qatari Employment:</div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Digital Contract Execution:</strong> Candidate signs the contract at the QVC terminal in their own native language (Hindi/English).</span>
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
                    <span className="text-2xl">🇪🇺</span> Central & Eastern Europe (Poland, Romania, Croatia)
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                    Type D National Employment
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  Rising industrialization and demographic shifts across Central and Eastern European nations have created unprecedented legal career openings for certified Indian craftsmen from Muzaffarpur. European employment is anchored by statutory provincial labor approvals—such as the Polish <em>Zezwolenie na Pracę</em> (Voivodeship Permit), Romanian <em>Aviz de Muncă</em>, and Croatian <em>Dozvola za boravak i rad</em>.
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
                  <div className="font-semibold text-slate-900">European Work Visa Prerequisites:</div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Type D National Visa:</strong> Long-stay work visa stamped by Polish/Romanian/Croatian embassies in New Delhi.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Apostilled Police Clearance Certificate (PCC):</strong> Mandatory PCC issued by RPO Patna with MEA Patiala House apostille.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Schengen Mobility:</strong> Legal pathways toward permanent residency (TRC) and free movement within the European Union.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: GAMCA / Wafid Medical Protocol for Muzaffarpur Aspirants */}
        <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded border border-rose-200">
                Mandatory Health Screening
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                GAMCA / Wafid Medical Protocol & Testing Centers for Muzaffarpur
              </h2>
              <div className="w-16 h-1 bg-rose-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                All individuals seeking employment in the six GCC member states (Saudi Arabia, UAE, Qatar, Kuwait, Oman, and Bahrain) are legally bound to clear a stringent pre-employment medical examination regulated by the <strong>Gulf Health Council</strong> under the <strong>Wafid</strong> platform (formerly widely recognized as <strong>GAMCA</strong>). Prospective emigrants must register exclusively via the official government portal at <a href="https://wafid.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline">wafid.com</a>, generate their official appointment slip, and pay the statutory central testing fee.
              </p>

              <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-lg not-prose my-4">
                <div className="flex items-start gap-3">
                  <FaTriangleExclamation className="text-rose-600 text-lg mt-0.5 flex-shrink-0" />
                  <div className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                    <strong>Critical Advisory for Muzaffarpur Candidates:</strong> There are <em>no accredited Wafid (GAMCA) diagnostic laboratories</em> located in Muzaffarpur district. Any local diagnostic lab, private nursing home, or recruitment agent in Mithanpura, Brahmpura, or Ramdayalu Nagar claiming to conduct official GAMCA medical tests is running an unauthorized racket. The Wafid portal systematically allocates candidates in North Bihar to authorized diagnostic centers located in <strong>Patna</strong> (approx. 70 km south via NH-22 and JP Setu).
                  </div>
                </div>
              </div>

              <p>
                The medical examination is rigorous and non-negotiable. Medical failure results in a direct &quot;UNFIT&quot; declaration uploaded to the shared GCC electronic immigration database, triggering an automatic 2 to 5-year travel bar across all six Gulf nations. Understanding each diagnostic parameter is paramount to preventing career-ending medical disqualifications:
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
                  Screens for pulmonary tuberculosis (active or healed), apical pleural thickening, calcified granulomas, or diaphragmatic blunting. Candidates with past history of pulmonary infections must undergo specialized high-resolution CT imaging evaluation before booking their Wafid appointment to rule out scarring.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                  <FaSuitcaseMedical /> Serological & Blood Testing
                </div>
                <h4 className="font-bold text-slate-900 text-base">Infectious Disease Serology</h4>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  Mandatory automated screening for HIV 1 & 2 antibodies, Hepatitis B Surface Antigen (HBsAg), Hepatitis C Antibodies (Anti-HCV), and Syphilis (VDRL / TPHA). Complete blood count (CBC) must demonstrate absence of severe microcytic anemia or abnormal blood dyscrasias.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                  <FaShieldHalved /> Biochemistry & Physical
                </div>
                <h4 className="font-bold text-slate-900 text-base">Systemic Organ Evaluation</h4>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  Fasting blood glucose (screening for unmanaged Type-2 diabetes), serum creatinine, SGPT/SGOT liver enzyme profiling, resting blood pressure (must fall below 140/90 mmHg), color vision (Ishihara test for electricians and drivers), and urine screening for albumin, sugar, and substance abuse.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm text-sm text-slate-700 space-y-3">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <FaCircleCheck className="text-emerald-500" />
                Transit Logistics: Reaching Authorized GAMCA Centers in Patna from Muzaffarpur
              </h4>
              <p className="text-justify leading-relaxed">
                Candidates from Muzaffarpur should depart early morning via <strong>National Highway 22 (NH-22)</strong> across Hajipur and the <strong>JP Setu (Digha-Pahleza Bridge)</strong> to reach the medical hubs located along Boring Road, Fraser Road, and Raja Bazar in Patna within 1.5 to 2 hours. Fast intercity trains such as the <em>Muzaffarpur - Patna Memu Special</em> or regular express trains crossing Sonpur also provide rapid access. WorkWise Visa assists candidates with pre-departure medical checkups in Muzaffarpur to verify liver enzymes, blood sugar, and blood pressure prior to their binding Wafid exam.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: SKMCH Healthcare & Paramedical Emigration Pathway */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded border border-purple-200">
                Healthcare Professional Licensing
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                SKMCH Muzaffarpur Nursing & Healthcare Professional Overseas Career Track
              </h2>
              <div className="w-16 h-1 bg-purple-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Muzaffarpur is home to North Bihar’s most prestigious medical institution: the <strong>Sri Krishna Medical College and Hospital (SKMCH)</strong>, alongside numerous recognized government and private nursing colleges and paramedical institutes across Tirhut Division. Every year, hundreds of registered B.Sc Nursing graduates, General Nursing and Midwifery (GNM) certificate holders, dialysis technicians, operation theatre (OT) assistants, radiographers, and laboratory technicians seek high-paying professional positions in the Ministry of Health (MOH) hospitals across Saudi Arabia, the United Arab Emirates, Qatar, Oman, and the United Kingdom.
              </p>

              <p>
                Unlike blue-collar emigration, international recruitment for healthcare personnel is governed by stringent clinical licensing authorities. The documentation process requires precision:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 not-prose my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center mx-auto text-sm">1</div>
                  <div className="font-bold text-slate-900 text-sm">State HRD & MEA</div>
                  <div className="text-xs text-slate-600">Attestation of BNRC diploma and degree transcripts at Vikas Bhawan, Patna followed by MEA Apostille.</div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center mx-auto text-sm">2</div>
                  <div className="font-bold text-slate-900 text-sm">DataFlow PSV</div>
                  <div className="text-xs text-slate-600">Primary Source Verification (PSV) of nursing degree, BNRC registration, and SKMCH clinical experience certificate.</div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center mx-auto text-sm">3</div>
                  <div className="font-bold text-slate-900 text-sm">Licensing Exams</div>
                  <div className="text-xs text-slate-600">Clearing Prometric / Pearson VUE tests: SCFHS (Saudi Arabia), DHA (Dubai), DOH (Abu Dhabi), or OMSB (Oman).</div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center mx-auto text-sm">4</div>
                  <div className="font-bold text-slate-900 text-sm">Hospital Placement</div>
                  <div className="text-xs text-slate-600">Direct employment contract issuance with MOH, military hospital networks, or JCI-accredited tertiary care hospitals.</div>
                </div>
              </div>

              <p>
                WorkWise Visa offers comprehensive mentorship to healthcare professionals across Muzaffarpur, managing the complete DataFlow dossier preparation, BNRC verification liaison, Prometric exam scheduling at authorized centers in Patna, and formal MEA emigration clearances, guaranteeing zero compliance rejections.
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
                Overseas Wage & Benefits Benchmark for Muzaffarpur Craftsmen
              </h2>
              <div className="w-16 h-1 bg-indigo-600 mt-2 rounded"></div>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed text-justify">
              Transparency in financial remuneration protects candidates from wage theft, deceptive broker promises, and underpaid contracts. Below is an authentic benchmark of prevailing monthly basic salaries and mandatory allowances across 12 prominent industrial, healthcare, and technical trades for workers recruited from Muzaffarpur.
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
                      <td className="py-3 px-4 font-bold text-slate-900">Structural / 6G TIG-MIG Welder</td>
                      <td className="py-3 px-4">1,800 - 2,500 + Food + Acc</td>
                      <td className="py-3 px-4">2,000 - 2,800 + Acc</td>
                      <td className="py-3 px-4">1,900 - 2,600 + Food + Acc</td>
                      <td className="py-3 px-4">160 - 220 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€950 - €1,300 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Industrial Electrician / Panel Wireman</td>
                      <td className="py-3 px-4">1,600 - 2,200 + Food + Acc</td>
                      <td className="py-3 px-4">1,800 - 2,400 + Acc</td>
                      <td className="py-3 px-4">1,700 - 2,300 + Food + Acc</td>
                      <td className="py-3 px-4">140 - 190 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€900 - €1,200 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">HVAC Chiller & Duct Technician</td>
                      <td className="py-3 px-4">1,700 - 2,400 + Food + Acc</td>
                      <td className="py-3 px-4">1,900 - 2,600 + Acc</td>
                      <td className="py-3 px-4">1,800 - 2,500 + Food + Acc</td>
                      <td className="py-3 px-4">150 - 200 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€950 - €1,250 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Heavy Equipment Operator (Crane/JCB)</td>
                      <td className="py-3 px-4">2,200 - 3,200 + Food + Acc</td>
                      <td className="py-3 px-4">2,400 - 3,500 + Acc</td>
                      <td className="py-3 px-4">2,300 - 3,300 + Food + Acc</td>
                      <td className="py-3 px-4">190 - 260 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€1,100 - €1,500 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Pipe Fitter & Pipe Fabricator</td>
                      <td className="py-3 px-4">1,500 - 2,000 + Food + Acc</td>
                      <td className="py-3 px-4">1,700 - 2,200 + Acc</td>
                      <td className="py-3 px-4">1,600 - 2,100 + Food + Acc</td>
                      <td className="py-3 px-4">130 - 180 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€850 - €1,150 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Shuttering Carpenter & Mason</td>
                      <td className="py-3 px-4">1,300 - 1,700 + Food + Acc</td>
                      <td className="py-3 px-4">1,400 - 1,800 + Acc</td>
                      <td className="py-3 px-4">1,350 - 1,750 + Food + Acc</td>
                      <td className="py-3 px-4">110 - 150 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€800 - €1,050 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Registered Staff Nurse (B.Sc / GNM)</td>
                      <td className="py-3 px-4">3,500 - 5,500 + Food + Acc</td>
                      <td className="py-3 px-4">4,500 - 7,000 + Acc</td>
                      <td className="py-3 px-4">4,000 - 6,500 + Food + Acc</td>
                      <td className="py-3 px-4">350 - 500 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€1,800 - €2,600 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Light Duty Driver (Gulf License Holder)</td>
                      <td className="py-3 px-4">1,600 - 2,100 + Food + Acc</td>
                      <td className="py-3 px-4">2,000 - 2,600 + Acc</td>
                      <td className="py-3 px-4">1,800 - 2,300 + Food + Acc</td>
                      <td className="py-3 px-4">140 - 180 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€900 - €1,200 + Acc</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Heavy Trailer Driver (GCC Valid)</td>
                      <td className="py-3 px-4">2,400 - 3,200 + Trip Allow</td>
                      <td className="py-3 px-4">2,600 - 3,600 + Trip Allow</td>
                      <td className="py-3 px-4">2,500 - 3,400 + Trip Allow</td>
                      <td className="py-3 px-4">200 - 280 + Trip Allow</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€1,300 - €1,800 + Trip</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Dialysis / Lab Technician</td>
                      <td className="py-3 px-4">2,800 - 4,000 + Food + Acc</td>
                      <td className="py-3 px-4">3,500 - 5,000 + Acc</td>
                      <td className="py-3 px-4">3,200 - 4,600 + Food + Acc</td>
                      <td className="py-3 px-4">260 - 380 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€1,400 - €1,900 + Acc</td>
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
                      <td className="py-3 px-4 font-bold text-slate-900">CNC & Lathe Machine Operator</td>
                      <td className="py-3 px-4">1,700 - 2,400 + Food + Acc</td>
                      <td className="py-3 px-4">1,900 - 2,600 + Acc</td>
                      <td className="py-3 px-4">1,800 - 2,400 + Food + Acc</td>
                      <td className="py-3 px-4">150 - 210 + Food + Acc</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">€950 - €1,300 + Acc</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500">
                * Note: Standard Gulf contracts specify 8 hours/day, 6 days/week with mandatory 1.25x - 1.5x overtime calculation under local labor statutes. European packages conform to EU standard 40-hour work weeks with paid annual vacation and state health insurance coverage.
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
                Anti-Fraud Intelligence: Protecting Muzaffarpur Job Seekers from Sub-Agent Rackets
              </h2>
              <div className="w-16 h-1 bg-rose-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Every year, innocent youth from rural and peri-urban blocks of Muzaffarpur—including Sakra, Kurhani, Motipur, and Saraiya—fall prey to illicit recruiting syndicates operating out of makeshift offices around Ramdayalu Nagar Station Road, Mithanpura Chowk, Brahmpura, and Saraiya Ganj. These unlicensed middlemen exploit the aspirations of job seekers, charging exorbitant advance fees ranging from ₹80,000 to ₹1,80,000 while distributing counterfeit visas or sending workers on tourist visas that result in immediate arrest, deportation, and lifelong GCC bans.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
                <div className="bg-rose-50/60 border border-rose-200 rounded-xl p-5 space-y-3">
                  <h4 className="font-bold text-rose-950 flex items-center gap-2 text-base">
                    <FaTriangleExclamation className="text-rose-600" />
                    Major Deceptive Rackets Uncovered in Muzaffarpur
                  </h4>
                  <ul className="text-xs text-rose-900 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span><strong>The &quot;Azad Visa&quot; Myth:</strong> Sub-agents falsely claim an &quot;Azad (Free) Visa&quot; grants freedom to work for anyone in Saudi Arabia or UAE. In reality, Saudi Labor Law Article 39 and UAE Federal Law make working for non-sponsoring employers a criminal offense punishable by immediate imprisonment and blacklisting.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span><strong>Tourist / Visit Visa Deployment:</strong> Sending workers on UAE 30/60-day tourist visas or Saudi electronic tourist visas under the false assurance of &quot;conversion to employment visa&quot; upon arrival, leaving candidates stranded as illegal absconders.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span><strong>Forged Polish & Romanian Work Permits:</strong> Fabricated European Voivodeship documents with fake seals, demanding ₹3 to ₹5 Lakhs upfront, which are summarily rejected during VFS New Delhi embassy appointments.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span><strong>Original Passport Confiscation:</strong> Illegally seizing original passports from candidates to prevent them from seeking legitimate channels or reporting extortion to local police.</span>
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
                      <span><strong>Verify MEA Registration Certificate (RC):</strong> Confirm the agency holds an active, unexpired Recruiting Agent (RA) license on the official portal: <em>emigrate.gov.in &gt; Search Recruiting Agent</em>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Demand Electronic Demand Letter (EDL):</strong> Legal overseas job vacancies must carry an official EDL number generated through the Indian Embassy in the destination nation and approved by POE Patna.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Strict Bank Channel Transactions:</strong> Never hand over cash to individuals. All authorized recruitment fees must be transacted through documented banking instruments with formal GST tax invoices.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Report Extortion to POE Patna:</strong> You can directly lodge complaints against unlicensed agents with the Protector of Emigrants Patna via email (<em>poepatna@mea.gov.in</em>) or MADAD portal.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p>
                WorkWise Visa operates under strict zero-advance cash collection policies. Every stage of documentation, from skill evaluation to visa generation, is traceable directly on official government servers, giving Muzaffarpur candidates 100% legal confidence.
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
                Multilingual Technical Worksite Terminology: Arabic & European Glossary
              </h2>
              <div className="w-16 h-1 bg-amber-600 mt-2 rounded"></div>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed text-justify">
              Mastering foundational technical terminology before deployment bridges communication gaps between supervisors, engineers, and workers on multinational construction sites, power plants, and oil rigs. Below is a curated vocabulary guide tailored for tradesmen from Muzaffarpur.
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
                      <td className="py-2.5 px-4 font-bold text-slate-900">Scaffolding / Rigging</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Saqqala (سقالة)</td>
                      <td className="py-2.5 px-4">पाड़ / पाइट (ऊंचाई का ढांचा)</td>
                      <td className="py-2.5 px-4 text-xs">Rusztowanie / Schelă de lucru</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Welding Machine & Arc</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Makina Ilham (ماكينة لحام)</td>
                      <td className="py-2.5 px-4">वेल्डिंग मशीन</td>
                      <td className="py-2.5 px-4 text-xs">Spawarka / Aparat de sudură</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Circuit Breaker / Switch</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Qati' Kahraba (قاطع كهرباء)</td>
                      <td className="py-2.5 px-4">बिजली का मेन स्विच / कट-आउट</td>
                      <td className="py-2.5 px-4 text-xs">Bezpiecznik / Siguranță automată</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Electrical Wire & Cable</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Silk / Kabil (سلك / كابل)</td>
                      <td className="py-2.5 px-4">बिजली का तार / केबल</td>
                      <td className="py-2.5 px-4 text-xs">Kabel elektryczny / Cablu electric</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Pipe Fitter / Plumbing</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Sabbak / Tubaji (سباك / طوبجي)</td>
                      <td className="py-2.5 px-4">पाइप फिटर / नलकार</td>
                      <td className="py-2.5 px-4 text-xs">Hydraulik / Instalator conducte</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Excavator / Backhoe</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Haffara (حفارة)</td>
                      <td className="py-2.5 px-4">खुदाई करने वाली जेसीबी मशीन</td>
                      <td className="py-2.5 px-4 text-xs">Koparka / Excavator mecanic</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Mobile Crane & Hoist</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Winsh (ونش)</td>
                      <td className="py-2.5 px-4">क्रेन / भारी वजन उठाने वाली क्रेन</td>
                      <td className="py-2.5 px-4 text-xs">Dźwig / Macara mobilă</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Danger / Hazardous Zone</td>
                      <td className="py-2.5 px-4 font-semibold text-rose-600">Khatar (خطر)</td>
                      <td className="py-2.5 px-4">खतरा / सावधान</td>
                      <td className="py-2.5 px-4 text-xs">Niebezpieczeństwo / Pericol grav</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Site Engineer / Foreman</td>
                      <td className="py-2.5 px-4 font-semibold text-indigo-700">Muhandis / Muallim (مهندس / معلم)</td>
                      <td className="py-2.5 px-4">इंजीनियर / साइट फोरमैन</td>
                      <td className="py-2.5 px-4 text-xs">Kierownik budowy / Șef de șantier</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Wages / Salary</td>
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
                      <td className="py-2.5 px-4 font-bold text-slate-900">Work Permit / Resident Card</td>
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
                Financial Sovereignty & Wealth Security
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Safe Remittance, NRE/NRO Banking & FEMA Compliance in Muzaffarpur
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                The ultimate objective of undertaking strenuous employment overseas is the financial elevation and security of your family back home in Muzaffarpur. However, thousands of migrant households fall prey to illegal informal fund transfer channels—commonly known as <strong>Hawala or Hundi</strong>—which operate through dubious money-changers. Under the <strong>Foreign Exchange Management Act (FEMA), 1999</strong> and the <strong>Prevention of Money Laundering Act (PMLA)</strong>, receiving or routing foreign currency remittances through unauthorized parallel channels is a non-bailable financial offense punishable by severe penalties and freezing of bank accounts by the Enforcement Directorate (ED).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                    <FaBuildingColumns className="text-indigo-600" />
                    NRE Account (Non-Resident External)
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    Opened at commercial bank branches in Muzaffarpur (such as SBI Main Branch Company Bagh, Punjab National Bank Motijheel, Bank of Baroda, or Canara Bank). Maintained in Indian Rupees, completely tax-free on interest earned in India, and fully repatriable back overseas at any time.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5">
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-emerald-500" /> Deposit exclusively in foreign earnings (SAR, AED, QAR, EUR).
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-emerald-500" /> Family members can hold a mandate card to withdraw cash locally.
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                    <FaMoneyBillTrendUp className="text-emerald-600" />
                    Authorized Digital Exchange Channels
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    Remit salary electronically through regulated exchange houses (such as Al Rajhi Tahweel, UAE Exchange / LuLu Exchange, Al Ansari, Western Union, or direct bank SWIFT/NEFT wire) directly to the Indian NRE bank account in Muzaffarpur within minutes at official RBI-linked exchange rates.
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
                WorkWise Visa assists candidates before their departure from Muzaffarpur with pre-departure financial literacy workshops, guiding them through the exact documentation required by local bank branches across Muzaffarpur to open seamless NRI banking portfolios.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 10: Logistics, Transit & Embassy Connectivity from Muzaffarpur */}
        <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                Logistics & Transit Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Transit Logistics: From Muzaffarpur to Patna POE & New Delhi Embassies
              </h2>
              <div className="w-16 h-1 bg-sky-600 mt-2 rounded"></div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
              <p>
                Muzaffarpur enjoys unmatched strategic connectivity across North Bihar, serving as a primary nodal intersection of Indian Railways (East Central Railway) and major national highway arteries. Whether candidates need to visit Patna for GAMCA medicals and POE clearances or New Delhi for European embassy VFS biometric appointments, travel logistics are highly streamlined.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Route to Patna */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <FaCarSide className="text-indigo-600 text-2xl" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Road & Rail Route to Patna (70 km)</h4>
                    <span className="text-xs text-slate-500">For GAMCA Medicals, State HRD & POE Patna</span>
                  </div>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <p className="leading-relaxed">
                    <strong>By Road:</strong> Travel south via <strong>National Highway 22 (NH-22)</strong> passing through Bhagwanpur, Saraiya, Lalganj/Hajipur, and crossing the river Ganges over the <strong>JP Setu (Digha-Pahleza Bridge)</strong> directly into Patna. Travel time is approximately 1.5 to 2 hours.
                  </p>
                  <p className="leading-relaxed">
                    <strong>By Rail:</strong> Regular daily MEMU intercity trains and express services connect Muzaffarpur Junction (MFP) directly to Patna Junction (PNBE) and Patliputra Junction (PPTA) in approximately 2 hours.
                  </p>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="font-semibold text-slate-900 block">Critical Locations in Patna:</span>
                    <span>• POE Patna: Maurya Lok Complex / Boring Road</span><br />
                    <span>• State HRD Attestation: Vikas Bhawan, New Secretariat</span><br />
                    <span>• GAMCA Medical Centers: Fraser Road, Boring Road & Raja Bazar</span>
                  </div>
                </div>
              </div>

              {/* Route to New Delhi */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <FaTrainSubway className="text-sky-600 text-2xl" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Direct Rail & Air Route to New Delhi (1,050 km)</h4>
                    <span className="text-xs text-slate-500">For European Embassies, MEA Patiala House & VFS Global</span>
                  </div>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <p className="leading-relaxed">
                    <strong>Premier Direct Trains from Muzaffarpur Junction (MFP):</strong>
                  </p>
                  <ul className="space-y-1">
                    <li>• <strong>Sapt Kranti Superfast Express (12557):</strong> Departs MFP daily at 11:35 AM, arrives Anand Vihar (ANVT) Delhi next morning.</li>
                    <li>• <strong>Bihar Sampark Kranti Express (12565):</strong> High-speed superfast connection to New Delhi (NDLS).</li>
                    <li>• <strong>Vaishali Express (12553):</strong> Overnight express directly linking MFP to New Delhi.</li>
                  </ul>
                  <p className="leading-relaxed pt-1">
                    <strong>By Air:</strong> Fly directly from Jay Prakash Narayan International Airport (PAT), Patna to Indira Gandhi International Airport (DEL), New Delhi in 1 hour 45 minutes.
                  </p>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="font-semibold text-slate-900 block">Critical Locations in New Delhi:</span>
                    <span>• VFS Global European Centers: Shivaji Stadium Metro Station</span><br />
                    <span>• MEA Consular & Apostille Wing: Patiala House Court, Tilak Marg</span><br />
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
                Book Verified Overseas Work Visa Consultation in Muzaffarpur
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
                Frequently Asked Questions: Overseas Employment for Muzaffarpur Candidates
              </h2>
              <div className="w-16 h-1 bg-indigo-600 mt-2 rounded"></div>
            </div>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>1. Can candidates holding ECR passports from Muzaffarpur travel legally to Saudi Arabia or UAE?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Yes, candidates holding Emigration Check Required (ECR) passports from Muzaffarpur can travel completely legally to Saudi Arabia, UAE, Qatar, and all 18 notified ECR nations once Emigration Clearance (EC) is issued through the Ministry of External Affairs eMigrate 2.0 portal. WorkWise Visa ensures that every offer letter is authenticated by the Protector of Emigrants (POE) Patna jurisdiction, accompanied by an approved digital employment contract, Pravasi Bharatiya Bima Yojana (PBBY) insurance, and authenticated employer credentials, preventing any offloading at departure airports.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>2. Where do Muzaffarpur job seekers undergo GAMCA / Wafid medical examinations?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Since there is currently no accredited Wafid (GAMCA) medical center physically located in Muzaffarpur district, candidates must register online through the official wafid.com portal, which systematically generates an appointment slip for an authorized diagnostic center in Patna (approximately 70 km away via NH-22 across JP Setu). Candidates must avoid unauthorized diagnostic pathology labs in Muzaffarpur claiming to issue GCC medical certificates, as these are fraudulent and legally invalid.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>3. How can nursing graduates from SKMCH Muzaffarpur get overseas hospital appointments in the Gulf?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Graduates of Sri Krishna Medical College and Hospital (SKMCH) and recognized nursing institutions across Muzaffarpur must undergo Primary Source Verification (PSV) via the DataFlow Group, clear relevant Prometric or Pearson VUE licensure exams (such as SCFHS Mumaris+ for Saudi Arabia, DHA for Dubai, or QCHP for Qatar), and obtain State HRD authentication at Vikas Bhawan, Patna before MEA apostille. WorkWise Visa provides complete credential verification and direct hospital placement services.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>4. What is the difference between an authentic Saudi Qiwa digital contract and an offer letter from an agent?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  An authentic Saudi employment contract must be generated electronically through the Kingdom of Saudi Arabia Ministry of Human Resources and Social Development Qiwa portal (qiwa.sa). It includes an official digital contract serial number, clearly defined basic salary, food allowance, housing provisions, medical insurance category, and specific profession code. A paper offer letter printed on unauthorized agency letterhead is legally void in Saudi Arabia and cannot be used to generate an official Qiwa contract or Iqama residency permit.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>5. Are work permits available for European countries like Poland, Romania, and Croatia for workers from Muzaffarpur?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Yes, there is substantial overseas demand across Central and Eastern Europe for certified welders, heavy vehicle operators, construction craftsmen, logistics handlers, and factory operators from Muzaffarpur. European employment requires an official government work permit issued by provincial labor authorities (such as a Voivodeship permit in Poland or Aviz de Muncă in Romania), followed by an apostilled Police Clearance Certificate (PCC) from RPO Patna and a National Type D Employment Visa stamped at the respective embassy or VFS Center in New Delhi.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>6. What is the Takamol Skill Verification Program (SVP) required for Saudi Arabia?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  The Takamol Skill Verification Program (SVP) is a mandatory practical and computer-based theoretical examination launched by the Saudi Ministry of Human Resources to verify the professional competence of foreign craftsmen before granting an employment visa. Craftsmen such as industrial electricians, plumbers, welders, and HVAC technicians from Muzaffarpur must appear for this exam at authorized Takamol partner testing centers in Bihar/NCR. A passing certificate is electronically synchronized with the Saudi visa portal.
                </p>
              </div>

              {/* FAQ 7 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>7. How does a worker from Muzaffarpur verify if a recruitment agency is legally registered with the MEA?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  A candidate can verify an agency’s legal status by visiting the official government portal at emigrate.gov.in, navigating to &quot;Search Recruiting Agent&quot;, and entering the agency’s Registration Certificate (RC) number or name. The portal displays whether the license is currently active, valid, or suspended, along with the authorized branch locations and maximum permitted financial transactions.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>8. What happens if a candidate from Muzaffarpur travels to the UAE on a visit visa seeking employment?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Traveling to the UAE on a visit or tourist visa with the intention of working is illegal under UAE Federal Labor Law. Working without an official MoHRE electronic work permit subjects the individual to heavy fines (up to AED 50,000 for employers), immediate detention, deportation, and an irreversible lifetime entry ban. Legitimate recruitment must conclude with an official MoHRE employment entry visa issued before boarding from India.
                </p>
              </div>

              {/* FAQ 9 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>9. What is the role of the Protector of Emigrants (POE) Patna for Muzaffarpur applicants?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  The Protector of Emigrants (POE) Patna is the statutory field authority under the Ministry of External Affairs responsible for protecting emigrant workers across Bihar, including Muzaffarpur. The POE reviews employment contracts, verifies employer credentials, ensures PBBY insurance compliance, and grants official Emigration Clearance (EC) on passports before international departure.
                </p>
              </div>

              {/* FAQ 10 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>10. Can old healed tuberculosis (TB) scars cause a GAMCA / Wafid medical failure?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Yes, healed pulmonary scars, calcified lesions, or pleural thickening from past tuberculosis can be flagged on the digital chest X-ray during GAMCA screening, potentially leading to an &quot;UNFIT&quot; result. If a candidate from Muzaffarpur has a past history of respiratory infection, WorkWise Visa advises undergoing a preliminary high-resolution CT scan and chest physician evaluation in Muzaffarpur before booking the binding Wafid exam.
                </p>
              </div>

              {/* FAQ 11 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>11. How much does a legal work visa for Saudi Arabia or UAE cost under government rules?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Under Ministry of External Affairs regulations, approved Recruiting Agents can charge a statutory recruitment fee capped at ₹30,000 + GST for services rendered, or as specified under government notifications. Crucially, the overseas employer is legally obligated to pay for the candidate’s visa stamping fee, work permit authorization, and one-way departure airfare. Any sub-agent demanding ₹1 to ₹2 Lakhs in cash is operating illegally.
                </p>
              </div>

              {/* FAQ 12 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>12. How can heavy equipment operators from Motipur and Kanti convert their licenses for Gulf employment?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Candidates holding valid Indian Heavy Motor Vehicle (HMV) or commercial transport driving licenses issued by the DTO Muzaffarpur can be deployed for GCC trade tests. While initial visas are stamped as operator/driver trainees, candidates undergo a structured driving school test in the destination nation (such as Saudi Dallah or Dubai RTA) to obtain sovereign Gulf heavy driver licenses, which immediately unlocks substantial salary increments.
                </p>
              </div>

              {/* FAQ 13 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>13. What is the Qatar Visa Center (QVC) process for Muzaffarpur workers?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  For Qatar employment, after the employer issues a work visa authorization, the candidate visits a designated QVC center (in Kolkata, New Delhi, or Mumbai). There, biometric fingerprints and facial scans are recorded, the work contract is signed digitally in Hindi/English, and complete medical screening is conducted. Once QVC clearance is granted, the final residence visa is issued directly before departure, with zero medical check required in Doha.
                </p>
              </div>

              {/* FAQ 14 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>14. Where is an apostilled Police Clearance Certificate (PCC) obtained in Muzaffarpur?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  An authentic Police Clearance Certificate (PCC) for overseas employment must be applied for through the official Passport Seva portal (passportindia.gov.in) and processed via the Post Office Passport Seva Kendra (POPSK) Muzaffarpur or Regional Passport Office (RPO) Patna. Following police verification by the local Muzaffarpur police station, the PCC is issued by the RPO and subsequently apostilled by the Ministry of External Affairs in New Delhi.
                </p>
              </div>

              {/* FAQ 15 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>15. What benefits does the Pravasi Bharatiya Bima Yojana (PBBY) offer the family of a worker in Muzaffarpur?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  PBBY provides a comprehensive life insurance cover of ₹10,00,000 to the registered nominee in Muzaffarpur in the event of accidental death or permanent disability abroad. It also covers full expenses for mortal remains repatriation, ₹1,00,000 hospitalization allowance abroad, ₹45,000 legal defense cover for contractual disputes, and return airfare for family members in case of employer abandonment.
                </p>
              </div>

              {/* FAQ 16 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>16. How can an overseas worker from Muzaffarpur ensure their remittances reach home legally?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Migrant workers should open a Non-Resident External (NRE) savings bank account with a local commercial bank in Muzaffarpur (such as SBI Main Branch Company Bagh, PNB Motijheel, or Bank of Baroda). Earnings should be transferred through central bank-regulated exchange houses (like Al Ansari, Tahweel Al Rajhi, or LuLu Exchange) directly to the NRE account, which offers zero Indian income tax liability on interest and complete FEMA compliance.
                </p>
              </div>

              {/* FAQ 17 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>17. What should a worker do if their Gulf employer withholds their passport upon arrival?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Passport confiscation is explicitly illegal under Saudi Labor Law (Article 6), UAE Labor Law (Decree-Law No. 33), and Qatari law. If an employer illegally withholds an Indian passport, the worker can register an immediate complaint with the Indian Embassy/Consulate through the official MADAD portal (madad.gov.in) and file a grievance with the destination country&apos;s labor dispute department (such as MoHRE in UAE or MHRSD in Saudi Arabia).
                </p>
              </div>

              {/* FAQ 18 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>18. Are there age restrictions for obtaining overseas employment visas in the Gulf and Europe?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Yes, for general technical, construction, and hospitality trades in the GCC, candidate age must typically range between 21 and 50 years (with certain domestic worker categories requiring a minimum age of 30 for female workers under MEA guidelines). In European countries such as Poland, Romania, and Croatia, work permits are generally issued to candidates aged between 20 and 55 years, provided they pass requisite medical examinations.
                </p>
              </div>

              {/* FAQ 19 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>19. What documents are needed for educational degree HRD attestation for Muzaffarpur graduates?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  Candidates holding degrees or diplomas from universities in Bihar (such as Babasaheb Bhimrao Ambedkar Bihar University - BRABU, Muzaffarpur or SKMCH) must present original degree certificates, all marksheets, matriculation certificate (for DOB verification), and passport copy to the Department of Higher Education (State HRD) at Vikas Bhawan, New Secretariat, Patna. After state authentication, documents are apostilled by the MEA in New Delhi.
                </p>
              </div>

              {/* FAQ 20 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <FaCircleQuestion className="text-indigo-600 mt-1 flex-shrink-0" />
                  <span>20. How does WorkWise Visa support candidates from Muzaffarpur who cannot visit Delhi or Noida offices?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify pl-6">
                  WorkWise Visa provides complete end-to-end digital onboarding. Candidates from Muzaffarpur can verify job offers, submit documents for eMigrate clearance, track GAMCA medical appointments, and review electronic Qiwa or MoHRE contracts through our secure online portal and dedicated WhatsApp helpline. Physical travel is only required for binding consular/biometric appointments (such as GAMCA in Patna or VFS in New Delhi), saving candidates substantial travel expenses.
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
                WorkWise Visa Regional & International Directory
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Explore our dedicated overseas employment hubs and country-specific immigration frameworks.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
              <Link
                href="/locations/patna"
                className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all text-center block text-slate-200 hover:text-white"
              >
                <div className="font-semibold">Patna Hub</div>
                <div className="text-[11px] text-slate-400">POE & State Capital</div>
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
                className="p-3 rounded-lg bg-indigo-900/60 border border-indigo-500/40 text-center block text-indigo-200 font-semibold"
              >
                <div>Muzaffarpur Hub</div>
                <div className="text-[11px] text-indigo-300">Tirhut Division Central</div>
              </Link>

              <Link
                href="/countries/saudi-arabia"
                className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all text-center block text-slate-200 hover:text-white"
              >
                <div className="font-semibold">Saudi Arabia</div>
                <div className="text-[11px] text-slate-400">Qiwa & SVP Guide</div>
              </Link>

              <Link
                href="/countries/uae"
                className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all text-center block text-slate-200 hover:text-white"
              >
                <div className="font-semibold">United Arab Emirates</div>
                <div className="text-[11px] text-slate-400">MoHRE & WPS Laws</div>
              </Link>

              <Link
                href="/countries/qatar"
                className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all text-center block text-slate-200 hover:text-white"
              >
                <div className="font-semibold">State of Qatar</div>
                <div className="text-[11px] text-slate-400">QVC Visa Protocol</div>
              </Link>

              <Link
                href="/countries/kuwait"
                className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all text-center block text-slate-200 hover:text-white"
              >
                <div className="font-semibold">State of Kuwait</div>
                <div className="text-[11px] text-slate-400">PAM & PCC Process</div>
              </Link>

              <Link
                href="/countries/poland"
                className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all text-center block text-slate-200 hover:text-white"
              >
                <div className="font-semibold">Poland (EU)</div>
                <div className="text-[11px] text-slate-400">Type D Work Permit</div>
              </Link>

              <Link
                href="/countries/croatia"
                className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all text-center block text-slate-200 hover:text-white"
              >
                <div className="font-semibold">Croatia (Schengen)</div>
                <div className="text-[11px] text-slate-400">HZZ Labor Market Test</div>
              </Link>

              <Link
                href="/jobs"
                className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all text-center block text-slate-200 hover:text-white"
              >
                <div className="font-semibold">Verified Jobs</div>
                <div className="text-[11px] text-slate-400">Active Demand Letters</div>
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

fs.writeFileSync(path.join(process.cwd(), 'app', 'locations', 'muzaffarpur', 'page.tsx'), pageContent, 'utf8');
console.log('Successfully wrote app/locations/muzaffarpur/page.tsx');
