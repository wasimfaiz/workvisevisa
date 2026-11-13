import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  FaCheck,
  FaArrowRight,
  FaWhatsapp,
  FaEnvelope,
  FaShieldHalved,
  FaBuildingColumns,
  FaBriefcase,
  FaClock,
  FaCalendarDays,
  FaMoneyBillWave,
  FaHospital,
  FaPlaneArrival,
  FaScaleUnbalanced,
  FaTriangleExclamation,
  FaMagnifyingGlass,
  FaLocationDot,
  FaCertificate,
  FaArrowTrendUp,
  FaWrench,
  FaHelmetSafety,
  FaGraduationCap,
  FaPassport,
  FaIndustry,
  FaGear,
  FaCar,
  FaTruckFast,
  FaAward,
  FaFileContract,
  FaUserTie,
  FaCoins,
  FaFingerprint,
  FaStethoscope,
  FaCircleCheck,
  FaCircleQuestion,
  FaCircleExclamation,
  FaLanguage,
  FaHouseUser,
  FaBan,
  FaBuilding,
  FaSun,
  FaUtensils,
  FaSuitcaseMedical,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Kuwait Work Visa & Jobs Guide 2026 | PAM, Article 18, KWD Salaries",
  description:
    "Comprehensive 2026 authority guide to Kuwait work visas (Article 18), Public Authority for Manpower (PAM) work permits, PACI Civil ID, KWD salaries in INR, oil & gas recruitment, work culture, summer heat ban, and Indian diaspora life.",
  keywords: [
    "Kuwait work visa 2026",
    "Kuwait work permit Article 18",
    "PAM Kuwait manpower portal",
    "Kuwait salary in INR",
    "PACI Civil ID Kuwait",
    "Kuwait oil and gas shutdown jobs",
    "KNPC KOC recruitment India",
    "Kuwait work culture Indian community",
    "Wafid GAMCA medical Kuwait",
    "WorkWise Visa Kuwait recruitment",
  ],
  alternates: {
    canonical: "https://www.workwisevisa.com/countries/kuwait",
  },
  openGraph: {
    title: "Kuwait Work Visa & Skilled Employment Guide 2026 | WorkWise Visa",
    description:
      "Statutory guide to Kuwait employment: Public Authority for Manpower (PAM) approval, Article 18 work visas, PACI Civil ID, KWD vs INR salary bands, and living in Kuwait as an Indian worker.",
    url: "https://www.workwisevisa.com/countries/kuwait",
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.workwisevisa.com/images/kuwait-work-visa-guide.webp",
        width: 1200,
        height: 630,
        alt: "Kuwait Work Visa & Jobs Guide 2026 - WorkWise Visa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuwait Work Visa & Skilled Employment Guide 2026 | WorkWise Visa",
    description:
      "Complete 2026 roadmap for Kuwait work visas, PAM permits, tax-free KWD salaries, work culture, and verified placement procedures.",
    images: ["https://www.workwisevisa.com/images/kuwait-work-visa-guide.webp"],
  },
};

const kuwaitFaqs = [
  {
    q: "What is the difference between a Kuwait Article 18 Visa and a Government Project Visa?",
    a: "An Article 18 Visa is the standard private sector work permit issued by the Public Authority for Manpower (PAM) and Ministry of Interior (MOI) for commercial enterprises, contracting companies, retail, logistics, and private facilities. A Government Project Visa (Contractor / Government Project Visa) is tied directly to sovereign ministerial or state oil infrastructure contracts (such as KNPC, KOC, or Ministry of Public Works). Government project visas generally cannot be transferred to private commercial companies without special clearance, whereas commercial Article 18 permits can be transferred after completing statutory contract periods (typically 1 to 3 years) with the employer's release.",
  },
  {
    q: "How much is the minimum salary for Indian workers in Kuwait in 2026?",
    a: "Under Kuwait Labour Law No. 6 of 2010 and ministerial updates, the legal statutory basic salary floor for private sector commercial workers is between 110 KWD and 130 KWD per month (approximately ₹30,000 to ₹35,500 INR). Skilled civil trades (masons, carpenters, electricians) typically earn 160 KWD to 220 KWD (₹43,500 to ₹60,000 INR). Certified 6G pipe welders and refinery instrumentation technicians at KNPC/KOC sites earn 250 KWD to 380 KWD (₹68,000 to ₹1,03,000 INR), and heavy trailer drivers earn 240 KWD to 350 KWD (₹65,000 to ₹95,000 INR). On top of basic pay, genuine employers provide 100% free furnished accommodation, air conditioning, daily transport, and overtime.",
  },
  {
    q: "What is PAM and what role does it play in Kuwait work visa processing?",
    a: "The Public Authority for Manpower (PAM / الهيئة العامة للقوى العاملة, commonly referred to in Arabic as 'Shu'oon') is the sovereign Kuwaiti government body that regulates the private sector labor market. PAM issues the initial Work Permit (Izn Amal / إذن عمل) based on the employer's approved labor quota and commercial license. Without PAM's computerized approval and work permit certificate, the Ministry of Interior (MOI) cannot issue the official entry work visa.",
  },
  {
    q: "Is degree attestation mandatory for all Kuwait work visas?",
    a: "Degree attestation is strictly mandatory for professional, engineering, managerial, and medical categories. Engineers must have their Bachelor of Engineering (B.E. / B.Tech) attested by the State HRD, Ministry of External Affairs (MEA) in India, and the Kuwait Embassy in New Delhi or Consulate in Mumbai, followed by mandatory registration with the Kuwait Society of Engineers (KSE). For vocational trade workers (masons, welders, drivers, electricians, helpers), secondary school certificates or technical trade diplomas are submitted, but technical trade test evaluation and client trade testing take precedence over university degree attestation.",
  },
  {
    q: "What is the PACI Civil ID Card and why is it important?",
    a: "The Public Authority for Civil Information (PACI / الهيئة العامة للمعلومات المدنية) issues the official Civil ID Card (Bitaqa Madaniyah / بطاقة مدنية) to every citizen and resident in Kuwait. It is the single legal identification document in the country. Within 30 days of arriving in Kuwait on an Article 18 entry visa, your employer must complete your medical fitness test at the Ministry of Health (MOH), submit fingerprint biometrics at the Criminal Evidences Department, and register you with PACI. The digital Civil ID is also accessed on smartphones through the official 'Kuwait Mobile ID' (Hawyati) app.",
  },
  {
    q: "What is Wafid GAMCA medical and how long is it valid for Kuwait?",
    a: "Before departing India for Kuwait, all candidates must undergo a comprehensive medical examination at an authorized Wafid (formerly GAMCA) medical clinic. The examination includes chest X-rays for pulmonary tuberculosis, blood tests for HIV, Hepatitis B and C, VDRL, malaria, and physical fitness evaluations. A 'FIT' medical certificate issued by Wafid is valid for 60 to 90 days and is digitally linked with the Kuwait Ministry of Health portal to facilitate visa stamping.",
  },
  {
    q: "What is the Summer Mid-Day Work Ban in Kuwait?",
    a: "Under Kuwait Public Authority for Manpower (PAM) Administrative Decision, outdoor work under direct sunlight is strictly prohibited across all open construction, pipeline, and infrastructure sites between 11:00 AM and 4:00 PM from June 1 to August 31 every year. During these peak summer months, when temperatures exceed 48°C to 50°C, companies shift work hours to early morning shifts (5:00 AM to 10:30 AM) and evening/night shifts (4:30 PM to 10:00 PM) with floodlit operations to protect workers from heatstroke.",
  },
  {
    q: "What is the work culture and atmosphere like for Indian workers in Kuwait?",
    a: "Kuwait has a well-established, highly respected Indian expatriate community of over 1 million people. Workplace culture is built on mutual respect, formal courtesy, and punctuality. Arabic is the national language, but English and Hindi/Urdu are widely understood on all project sites, oilfields, and commercial markets. Friday is the sovereign weekly day of rest and religious prayer. Employers value loyalty and safety compliance. Traditional Kuwaiti 'Diwaniya' evening social customs reflect the welcoming, hospitable nature of local society.",
  },
  {
    q: "Are income taxes deducted from salaries in Kuwait?",
    a: "No. Kuwait levies 0% personal income tax on salaries and wages earned by expatriate workers. What you earn in your employment contract is paid in full without state tax deductions. Furthermore, there are no capital gains taxes or wealth taxes on personal earnings.",
  },
  {
    q: "Where do Indian workers live in Kuwait and are Indian groceries available?",
    a: "Major residential hubs for Indian workers include Salmiya, Abbasiya (Jleeb Al-Shuyoukh), Mirqab (Kuwait City), and Fahaheel (near the southern oil hub). These areas feature thriving Indian commercial ecosystems with branches of LuLu Hypermarket, Grand Hyper, City Centre, and hundreds of Indian supermarkets stocking fresh vegetables, basmati rice, lentils, spices, and regional food products from Kerala, Bihar, Uttar Pradesh, and Punjab. Over 300 Indian vegetarian and non-vegetarian restaurants operate across the country.",
  },
  {
    q: "How does the Wage Protection System (WPS) work in Kuwait?",
    a: "Under Kuwait Labour Law No. 6 of 2010, all private sector employers must pay salaries electronically into workers' official bank accounts (or approved payroll cards) on a monthly basis through the Wage Protection System (WPS). PAM audits corporate payroll data monthly. If a company delays salaries past the 7th of the month, PAM automatically blocks their governmental portal, stopping all visa issuances, permit renewals, and government transactions until the arrears are cleared.",
  },
  {
    q: "Can an Indian commercial driver convert an Indian driving license in Kuwait?",
    a: "No, an Indian driving license cannot be directly converted to a Kuwaiti driving license. Heavy drivers and light drivers must complete practical driving school training and pass official traffic department (Muroor) tests in Kuwait. However, having a valid Indian heavy commercial driving license (HMV) with 3 to 5 years of verified GCC or domestic experience allows you to enrol directly for Kuwait heavy driving tests without waiting through extended probationary periods.",
  },
  {
    q: "What is End-of-Service Indemnity (Mokafaa Nihayat Al-Khidma) in Kuwait?",
    a: "Under Kuwait Labour Law Article 51, every foreign worker is entitled to an End-of-Service Indemnity upon contract completion. For workers paid monthly, the indemnity equals 15 days of salary for each of the first 5 years of continuous service, and 1 full month of salary for each subsequent year, up to a legal ceiling of 1.5 years' total salary. This severance package is legally protected and must be settled before final departure or visa cancellation.",
  },
  {
    q: "How do remittances from Kuwait to India work and what are the exchange rates?",
    a: "Kuwait operates an advanced network of government-licensed exchange companies including Al Muzaini Exchange, LuLu Exchange, Joyalukkas Exchange, and Kuwait India Exchange Company. Because 1 Kuwaiti Dinar (KWD) trades at approximately ₹272 to ₹275 INR, money transferred home yields unmatched purchasing power. Online mobile apps allow workers to remit money directly to any Indian bank account (SBI, PNB, HDFC, ICICI) within seconds with nominal transfer fees.",
  },
  {
    q: "Can I bring my family to Kuwait on an Article 18 work visa?",
    a: "To sponsor a spouse and children on a Family Residence Visa (Article 22), the expatriate employee must meet the minimum monthly salary threshold set by the Ministry of Interior (currently 800 KWD per month for university degree holders in approved professions). Blue-collar workers and trade technicians generally cannot sponsor family dependents on their visa, but families can visit on short-term family visit visas when government regulations permit.",
  },
  {
    q: "How can I verify if my Kuwait work visa and offer letter are 100% genuine?",
    a: "A genuine Kuwait work visa can be verified online through the official Kuwait Ministry of Interior portal (moi.gov.kw) under the e-Services / Visa Status Inquiry tab using your Visa Number and Passport Number. Never trust laminated paper visas with unofficial stamps or offers promising 'free visas' without a valid PAM Izn Amal registration number. WorkWise Visa offers complete, free forensic verification of Kuwait job demands and visas at all physical branches.",
  },
];

export default function KuwaitCountryPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.workwisevisa.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Global Destinations",
        "item": "https://www.workwisevisa.com/countries",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Kuwait Work Visa & Skilled Jobs 2026",
        "item": "https://www.workwisevisa.com/countries/kuwait",
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kuwait Work Visa & Employment Authority Guide 2026: PAM Work Permits, Article 18, KWD Salaries & Life in Kuwait",
    description:
      "Authoritative statutory guide for Indian workers and technicians moving to Kuwait: Public Authority for Manpower (PAM) permits, PACI Civil ID, KWD vs INR wages, oil & gas megaprojects, work culture, summer heat rules, and verified deployment.",
    image: "https://www.workwisevisa.com/images/kuwait-work-visa-guide.webp",
    author: {
      "@type": "Person",
      name: "Wasim Faiz",
      jobTitle: "Senior Overseas Placement Consultant",
      url: "https://www.workwisevisa.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "WorkWise Visa",
      logo: {
        "@type": "ImageObject",
        url: "https://www.workwisevisa.com/images/workwise_logo.webp",
      },
    },
    datePublished: "2026-11-13T07:00:00+05:30",
    dateModified: "2026-11-13T07:00:00+05:30",
    mainEntityOfPage: "https://www.workwisevisa.com/countries/kuwait",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: kuwaitFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Obtain a Kuwait Article 18 Private Sector Work Visa from India",
    description:
      "A complete 5-stage legal roadmap to securing an official Kuwait Article 18 work permit, PAM Izn Amal approval, Wafid GAMCA medical fitness, and PACI Civil ID registration.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Verified Employer Demand & Client Selection Interview",
        text: "Pass the practical trade test or technical client interview organized by an MEA-registered agency for a pre-approved Kuwait corporate quota.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "PAM Work Permit (Izn Amal) Approval in Kuwait",
        text: "The sponsoring company applies to the Public Authority for Manpower (PAM) in Kuwait, securing the digital Work Permit and quota allocation.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Wafid GAMCA Medical Examination & PSK Police Clearance",
        text: "Complete the Wafid GAMCA medical screening in India and obtain an official Police Clearance Certificate (PCC) from the Passport Seva Kendra (PSK).",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Kuwait MOI Work Visa Issuance & Embassy Stamping",
        text: "The Ministry of Interior (MOI) issues the official entry visa, followed by visa stamping via authorized Kuwait visa centers in India and eMigrate clearance.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Kuwait Arrival, MOH Medical, Fingerprinting & PACI Civil ID",
        text: "Arrive at Kuwait International Airport, complete domestic medical screening, fingerprint biometrics at Criminal Evidences, and receive the PACI Civil ID card.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <Navbar />

      <main className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
        {/* ── Hero Section (Strict Emerald / Teal / Slate UI Continuity) ── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950 text-white pt-24 sm:pt-28 pb-16 md:pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb inside Hero */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 sm:mb-8">
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
              <span className="text-slate-600">/</span>
              <Link href="/countries" className="hover:text-emerald-400 transition-colors">
                Countries
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-emerald-300 font-bold">State of Kuwait (دولة الكويت - Arabian Gulf Hub)</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Headlines & Key Stats */}
              <div className="lg:col-span-7 space-y-6">
                {/* Government & Authority Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Official 2026 Kuwait PAM Work Permit &amp; Article 18 Visa Gateway
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                  Kuwait Work Visa, Jobs &amp; Skilled Relocation Guide{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                    2026
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  The definitive operational manual for Indian certified 6G pipe welders, oil &amp; gas technicians, heavy commercial drivers, civil construction trades, and mechanical engineers migrating to the Arabian Gulf&apos;s strongest currency economy. Complete facts on official{" "}
                  <strong className="font-bold text-white">PAM Work Permits (Izn Amal)</strong>, the sovereign{" "}
                  <strong className="font-bold text-emerald-300">Article 18 Private Sector Visa</strong>, 100% tax-free Kuwaiti Dinar earnings (1 KWD ≈ ₹274 INR), free company housing, and civil protections under Kuwait Labour Law No. 6 of 2010.
                </p>

                {/* Key Benefits Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaCoins className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">1 KWD ≈ ₹274 INR</div>
                      <div className="text-[10px] text-slate-400">World&apos;s Strongest Currency</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaShieldHalved className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">0% Income Tax</div>
                      <div className="text-[10px] text-slate-400">Full Monthly Pay In Hand</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaHouseUser className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">100% Free Housing</div>
                      <div className="text-[10px] text-slate-400">Furnished AC &amp; Transport</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaMoneyBillWave className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">160–380 KWD Pay</div>
                      <div className="text-[10px] text-slate-400">₹44k–₹1.04L Net Monthly</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaClock className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">3–5 Wks Processing</div>
                      <div className="text-[10px] text-slate-400">PAM Quota &amp; MOI Visa</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaIndustry className="w-4 h-4 text-blue-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">KNPC / KOC Energy</div>
                      <div className="text-[10px] text-slate-400">Oil &amp; Gas Megaprojects</div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons - Clean 2-CTA Layout */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
                  <Link
                    href="/jobs"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] active:scale-[0.98] transition-all text-center w-full sm:w-auto"
                  >
                    <FaBriefcase className="w-4 h-4 shrink-0" />
                    <span>Browse Kuwait Jobs</span>
                  </Link>

                  <a
                    href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20Kuwait%20Work%20Permit%20(Article%2018)%20and%20Jobs%20for%202026."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/50 px-6 py-3 text-sm font-bold text-white transition-all shadow-md text-center w-full sm:w-auto"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>WhatsApp Consultation</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Quick Country Snapshot Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3.5">
                      <img
                        src="https://flagcdn.com/w160/kw.png"
                        alt="Kuwait Flag"
                        className="h-10 w-14 object-cover rounded-xl shadow-md border border-white/25 shrink-0"
                      />
                      <div>
                        <h2 className="text-xl font-display font-extrabold text-white">Kuwait (دولة الكويت)</h2>
                        <p className="text-xs text-emerald-300 font-medium">Kuwait City • Ahmadi • Salmiya • Shuwaikh • Fahaheel</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-xs font-bold text-emerald-300">
                      <FaShieldHalved className="w-3 h-3 text-emerald-400" />
                      GCC Powerhouse
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Primary Work Authorization:</span>
                      <span className="font-bold text-white">PAM Work Permit (Izn Amal)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Consular Visa Category:</span>
                      <span className="font-bold text-emerald-300">Article 18 Private Sector Visa</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">In-Country Civil ID Card:</span>
                      <span className="font-bold text-white">PACI Civil ID (Bitaqa Madaniyah)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Statutory Income Tax:</span>
                      <span className="font-bold text-amber-300">0% Personal Income Tax Floor</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Average Monthly In-Hand:</span>
                      <span className="font-bold text-emerald-300">160 – 350 KWD (₹44k – ₹96k)</span>
                    </div>

                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Contract &amp; Severance:</span>
                      <span className="font-bold text-emerald-300">1–3 Yrs Renewable + Indemnity</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-950/50 border border-emerald-500/30 p-3.5 text-center text-xs text-slate-300">
                    <div className="flex items-center justify-center gap-2 text-emerald-300 font-semibold mb-0.5">
                      <FaShieldHalved className="w-3.5 h-3.5 text-emerald-400" />
                      <span>PAM &amp; Kuwait Ministry of Interior Approved</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Bilingual Contract • Free Furnished Housing • Zero Hidden Middlemen Charges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Table of Contents & Quick Navigation ────────────── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/50">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              <FaMagnifyingGlass className="w-3 h-3 text-emerald-600" />
              Kuwait Comprehensive Master Guide Directory:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#overview" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                1. Sovereign Economy &amp; 2026 Quotas
              </a>
              <a href="#job-opportunities" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                2. Job Demands &amp; Oil/Gas Sectors
              </a>
              <a href="#government-portals" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                3. Official PAM &amp; Sahel Portals
              </a>
              <a href="#visa-pathways" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                4. Article 18 Visa Pathways
              </a>
              <a href="#salary-matrix" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                5. 2026 Salary Matrix (KWD vs INR)
              </a>
              <a href="#culture-and-lifestyle" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                6. Kuwaiti Culture &amp; Daily Life
              </a>
              <a href="#deployment-pipeline" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                7. 6-Stage Recruitment Roadmap
              </a>
              <a href="#document-checklist" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                8. Mandatory Documents &amp; Attestation
              </a>
              <a href="#faqs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                9. Frequently Asked Questions (16 FAQs)
              </a>
              <a href="#consultation-form" className="rounded-lg bg-emerald-600 px-3 py-1.5 text-white hover:bg-emerald-700 transition-colors">
                Apply Now →
              </a>
            </div>
          </div>
        </section>

        {/* Content Body Container */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          {/* Section 1: Overview & 2026 Sovereign Quotas */}
          <section id="overview" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaBuildingColumns className="w-3 h-3" /> Section 1: Sovereign Framework
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Kuwait 2026 Strategic Overview: Oil &amp; Gas Infrastructure, Megaprojects &amp; Reopened Indian Hiring
            </h2>
            <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                The State of Kuwait represents one of the wealthiest, most resilient economies in the Gulf Cooperation Council (GCC). With sovereign oil reserves exceeding 100 billion barrels (holding approximately 7% of global crude reserves) and backed by the multi-billion-dollar Kuwait Investment Authority (KIA), Kuwait has embarked on its ambitious <strong>Vision 2035 (New Kuwait)</strong> national development agenda. This national transformation has generated unprecedented, urgent demand for verified international trade professionals, refinery specialists, civil engineering personnel, and heavy logistics workers.
              </p>
              <p>
                Crucially, 2026 has witnessed the complete stabilization and reopening of work visa procedures for Indian nationals. The <strong>Public Authority for Manpower (PAM / Shu&apos;oon)</strong> and the <strong>Ministry of Interior (MOI)</strong> have overhauled employment visa issuance through integrated digital platforms, introducing strict technical credential verification, mandatory biometric tracking, and stringent quota audits. Unlike smaller regional economies, Kuwait pays in the <strong>Kuwaiti Dinar (KWD / د.ك)</strong>—the world&apos;s highest-valued currency, trading firmly at approximately <strong>1 KWD ≈ ₹272.00 to ₹275.00 INR</strong>.
              </p>
              <p>
                For candidates from India&apos;s major vocational trade centers—including industrial clusters in <strong>Patna, Siwan, Gopalganj, and Gorakhpur</strong> across Bihar and Eastern Uttar Pradesh, alongside technical personnel from <strong>Delhi NCR, Noida, and Lucknow</strong>—securing a certified Kuwait employment visa translates to extraordinary wealth generation. With zero personal income tax, 100% employer-provided furnished accommodation, free utilities, and legally protected end-of-service indemnity, Kuwait placements allow diligent tradespeople to remit 3 to 5 times more net monthly savings than domestic industrial wages.
              </p>
            </div>

            {/* Sovereign Fast Facts Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs hover:border-emerald-500 transition-colors">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Currency Strength</span>
                <p className="text-xl font-display font-extrabold text-emerald-700 mt-1">1 KWD ≈ ₹274 INR</p>
                <p className="text-xs text-slate-600 mt-1">World&apos;s strongest currency; unmatched purchasing power upon remittance.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs hover:border-emerald-500 transition-colors">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Indian Diaspora</span>
                <p className="text-xl font-display font-extrabold text-slate-900 mt-1">1,000,000+ Indians</p>
                <p className="text-xs text-slate-600 mt-1">Largest expatriate community; thriving Indian commercial and cultural hubs.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs hover:border-emerald-500 transition-colors">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Taxation Policy</span>
                <p className="text-xl font-display font-extrabold text-emerald-700 mt-1">0% Income Tax</p>
                <p className="text-xs text-slate-600 mt-1">Zero tax on wages; full monthly salary deposited via electronic WPS banking.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs hover:border-emerald-500 transition-colors">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Housing &amp; Health</span>
                <p className="text-xl font-display font-extrabold text-slate-900 mt-1">100% Free Company Perks</p>
                <p className="text-xs text-slate-600 mt-1">Mandatory free AC accommodation, daily site transport, and medical card.</p>
              </div>
            </div>
          </section>

          {/* Section 2: Core Industrial & Energy Sectors */}
          <section id="job-opportunities" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaBriefcase className="w-3 h-3" /> Section 2: In-Demand Sectors
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Where the Jobs Are: Kuwait&apos;s Major Industrial, Energy &amp; Megaproject Corridors
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Kuwait&apos;s economy is driven by massive state energy corporations and multi-billion-dollar infrastructure ventures. Here are the five primary recruitment corridors where WorkWise Visa places qualified Indian workers:
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Sector 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                    <FaIndustry className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Oil &amp; Gas Refineries (KNPC &amp; KOC)</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    The backbone of Kuwait&apos;s economy. Major project centers include the <strong>Al-Zour Refinery</strong> (615,000 barrels/day capacity), <strong>Mina Al-Ahmadi</strong>, and <strong>Mina Abdullah</strong> under Kuwait National Petroleum Company (KNPC) and Kuwait Oil Company (KOC).
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-900 block mb-1">Key Occupations:</span>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                      <li>6G TIG &amp; ARC Pipe Welders</li>
                      <li>Refinery Pipefitters &amp; Fabricators</li>
                      <li>Instrumentation Technicians</li>
                      <li>Plant Maintenance Millwrights</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-xs font-bold text-emerald-700">Salary: 220–380 KWD (₹60k–₹1.03L/mo)</div>
              </div>

              {/* Sector 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                    <FaBuilding className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Civil Megaprojects &amp; Infrastructure</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Major state ventures including <strong>Kuwait International Airport Terminal 2 (T2)</strong> designed by Foster + Partners, the multi-billion-dollar <strong>Silk City (Madinat Al-Hareer)</strong>, and <strong>South Al-Mutlaa Residential City</strong> (housing 400,000 residents).
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-900 block mb-1">Key Occupations:</span>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                      <li>Heavy Equipment Operators (Excavator, Crane)</li>
                      <li>Shuttering Carpenters &amp; Steel Fixers</li>
                      <li>Block Masons &amp; Tile Installers</li>
                      <li>Site MEP Electrical Technicians</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-xs font-bold text-emerald-700">Salary: 150–260 KWD (₹41k–₹71k/mo)</div>
              </div>

              {/* Sector 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                    <FaTruckFast className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Commercial Transport &amp; Logistics</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Centered around <strong>Shuwaikh Industrial Area</strong>, Sulaibiya agricultural logistics terminal, and major international freight forwarders like Agility Logistics. Movement of goods from Shuwaikh Port and Shuaiba Port across the GCC.
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-900 block mb-1">Key Occupations:</span>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                      <li>Heavy Trailer Drivers (Kuwait Heavy License)</li>
                      <li>Diesel Mechanics &amp; Auto Electricians</li>
                      <li>Forklift &amp; Reach Truck Operators</li>
                      <li>Warehouse Inventory Handlers</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-xs font-bold text-emerald-700">Salary: 180–350 KWD (₹49k–₹95k/mo)</div>
              </div>

              {/* Sector 4 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                    <FaUtensils className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Hospitality &amp; Luxury Retail</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Anchored by <strong>The Avenues Mall</strong> (one of the largest and most prestigious shopping malls in the Middle East), 360 Mall, Al Kout Mall, and 5-star international hotel chains (Four Seasons, St. Regis, Jumeirah Messilah Beach).
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-900 block mb-1">Key Occupations:</span>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                      <li>Continental, Tandoor &amp; Indian Head Chefs</li>
                      <li>Kitchen Stewards &amp; Commis Chefs</li>
                      <li>Baristas &amp; Restaurant Waitstaff</li>
                      <li>Commercial HVAC Maintenance Staff</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-xs font-bold text-emerald-700">Salary: 140–260 KWD (₹38k–₹71k/mo)</div>
              </div>

              {/* Sector 5 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center mb-4">
                    <FaGear className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Plant Shutdown &amp; Turnaround Maintenance</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Seasonal and scheduled refinery shutdown contracts running every spring and autumn across KNPC oil installations. Fast-track deployment with high-overtime potential for urgent 3-month to 9-month maintenance rounds.
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-900 block mb-1">Key Occupations:</span>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                      <li>Hydro-Jetters &amp; Tube Bundle Pullers</li>
                      <li>Riggers &amp; Heavy Scaffolders</li>
                      <li>Safety Officers (NEBOSH IGC)</li>
                      <li>Valve &amp; Pump Overhaul Mechanics</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-xs font-bold text-emerald-700">Salary: 180–320 KWD (₹49k–₹87k/mo)</div>
              </div>

              {/* Sector 6 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-4">
                    <FaSuitcaseMedical className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Healthcare &amp; Facilities Management</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Rapid expansion of public and private healthcare facilities including the monumental <strong>Sheikh Jaber Al-Ahmad Hospital</strong> (one of the largest medical centers in the Middle East) and regional private clinic networks.
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-900 block mb-1">Key Occupations:</span>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                      <li>B.Sc Certified Nurses (MOH Licensing)</li>
                      <li>Biomedical Equipment Technicians</li>
                      <li>Central Hospital Cleaners &amp; Orderlies</li>
                      <li>Hospitality Facility Supervisors</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-xs font-bold text-emerald-700">Salary: 250–500 KWD (₹68k–₹1.36L/mo)</div>
              </div>
            </div>
          </section>

          {/* Section 3: Statutory Portals */}
          <section id="government-portals" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaShieldHalved className="w-3 h-3" /> Section 3: Statutory Portals
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Kuwait Government Portals &amp; Official Verification Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Never rely on unverified third-party documents. Kuwait operates transparent digital portals through which candidates and agencies authenticate permits, visas, and medical results:
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded">Labour Authority</span>
                <h3 className="font-bold text-slate-900 text-sm mt-2">Public Authority for Manpower (PAM)</h3>
                <p className="text-xs text-slate-600 mt-1">Issues the digital Work Permit (Izn Amal) and monitors corporate quota compliance.</p>
                <a href="https://manpower.gov.kw" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-700 hover:underline mt-3 inline-flex items-center gap-1">
                  Visit manpower.gov.kw <FaArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="text-[10px] font-bold text-teal-800 uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded">Immigration &amp; Visas</span>
                <h3 className="font-bold text-slate-900 text-sm mt-2">Ministry of Interior (MOI Kuwait)</h3>
                <p className="text-xs text-slate-600 mt-1">Authenticates Article 18 entry visas, security clearances, and residency status (Iqama).</p>
                <a href="https://moi.gov.kw" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-700 hover:underline mt-3 inline-flex items-center gap-1">
                  Visit moi.gov.kw <FaArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="text-[10px] font-bold text-cyan-800 uppercase tracking-wider bg-cyan-50 px-2 py-0.5 rounded">Civil Identification</span>
                <h3 className="font-bold text-slate-900 text-sm mt-2">Public Authority for Civil Information (PACI)</h3>
                <p className="text-xs text-slate-600 mt-1">Issues the mandatory Civil ID (Bitaqa Madaniyah) and powers the Kuwait Mobile ID (Hawyati) app.</p>
                <a href="https://paci.gov.kw" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-700 hover:underline mt-3 inline-flex items-center gap-1">
                  Visit paci.gov.kw <FaArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded">Medical Fitness</span>
                <h3 className="font-bold text-slate-900 text-sm mt-2">Wafid (GAMCA) Medical Portal</h3>
                <p className="text-xs text-slate-600 mt-1">Pre-departure screening appointments and real-time medical FIT/UNFIT status verification.</p>
                <a href="https://wafid.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-700 hover:underline mt-3 inline-flex items-center gap-1">
                  Visit wafid.com <FaArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="text-[10px] font-bold text-purple-800 uppercase tracking-wider bg-purple-50 px-2 py-0.5 rounded">Diplomatic Mission</span>
                <h3 className="font-bold text-slate-900 text-sm mt-2">Embassy of India in Kuwait</h3>
                <p className="text-xs text-slate-600 mt-1">Diplomatic oversight in Daiya, Indian Community Welfare Fund (ICWF), and labor disputes.</p>
                <a href="https://indembkwt.gov.kw" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-700 hover:underline mt-3 inline-flex items-center gap-1">
                  Visit indembkwt.gov.kw <FaArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="text-[10px] font-bold text-rose-800 uppercase tracking-wider bg-rose-50 px-2 py-0.5 rounded">Indian Emigration</span>
                <h3 className="font-bold text-slate-900 text-sm mt-2">eMigrate India (Ministry of External Affairs)</h3>
                <p className="text-xs text-slate-600 mt-1">Mandatory Emigration Clearance (EC) for ECR passport holders traveling on Kuwait work permits.</p>
                <a href="https://emigrate.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-700 hover:underline mt-3 inline-flex items-center gap-1">
                  Visit emigrate.gov.in <FaArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </section>

          {/* Section 4: Visa Pathways */}
          <section id="visa-pathways" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaPassport className="w-3 h-3" /> Section 4: Visa Pathways
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Kuwait Employment Visa Categories &amp; Statutory Permits
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-bold">
                  <tr>
                    <th className="p-3.5 sm:p-4">Visa Category</th>
                    <th className="p-3.5 sm:p-4">Statutory Authority</th>
                    <th className="p-3.5 sm:p-4">Target Professions</th>
                    <th className="p-3.5 sm:p-4">Validity &amp; Renewability</th>
                    <th className="p-3.5 sm:p-4">Transferability Rules</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                      Article 18 Private Sector Work Visa (فيزا عمل مادة 18)
                    </td>
                    <td className="p-3.5 sm:p-4">PAM + MOI</td>
                    <td className="p-3.5 sm:p-4">Welders, fitters, carpenters, masons, heavy drivers, hotel chefs, warehouse staff</td>
                    <td className="p-3.5 sm:p-4">1 to 3 Years (Renewable indefinitely by employer)</td>
                    <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">Transferable to another private employer after contract completion</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                      Government Project Visa (عقد حكومي)
                    </td>
                    <td className="p-3.5 sm:p-4">Ministry of Public Works / KOC / KNPC</td>
                    <td className="p-3.5 sm:p-4">Refinery shutdown technicians, oilfield riggers, airport T2 civil technicians</td>
                    <td className="p-3.5 sm:p-4">Co-terminus with government project contract duration</td>
                    <td className="p-3.5 sm:p-4 text-amber-700 font-semibold">Transferable only to another registered government project</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                      Article 17 Government Sector Visa (مادة 17)
                    </td>
                    <td className="p-3.5 sm:p-4">Kuwait Civil Service Commission (CSC)</td>
                    <td className="p-3.5 sm:p-4">State hospital nurses, biomedical engineers, municipal technicians</td>
                    <td className="p-3.5 sm:p-4">Annual renewable government contract</td>
                    <td className="p-3.5 sm:p-4 text-slate-600">Restricted to state ministries; non-transferable to private sector</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                      PACI Civil ID Card (بطاقة مدنية)
                    </td>
                    <td className="p-3.5 sm:p-4">Public Authority for Civil Information</td>
                    <td className="p-3.5 sm:p-4">Mandatory identification card for all foreign residents</td>
                    <td className="p-3.5 sm:p-4">Tied to Iqama validity (1–3 years)</td>
                    <td className="p-3.5 sm:p-4 text-slate-600">Updated automatically upon visa renewal via Kuwait Mobile ID</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Realistic Salary Matrix */}
          <section id="salary-matrix" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaMoneyBillWave className="w-3 h-3" /> Section 5: Compensation Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Kuwait Salary Matrix 2026: Trade Roles, Overtime &amp; Net Take-Home Savings (KWD vs INR)
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Because Kuwait levies <strong>0% personal income tax</strong> and corporate sponsors provide 100% free air-conditioned accommodation, daily transportation, and medical coverage, your monthly basic pay plus overtime represents direct savings. Benchmark exchange rate: <strong>1 KWD ≈ ₹274 INR</strong>:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-bold">
                  <tr>
                    <th className="p-3.5 sm:p-4">Trade / Profession</th>
                    <th className="p-3.5 sm:p-4">Basic Monthly Salary (KWD)</th>
                    <th className="p-3.5 sm:p-4">Basic Pay in INR (₹)</th>
                    <th className="p-3.5 sm:p-4">Typical Overtime &amp; Allowances</th>
                    <th className="p-3.5 sm:p-4">Est. Net Monthly Savings (INR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">General Construction Helper / Labour</td>
                    <td className="p-3.5 sm:p-4">110 – 130 KWD</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">₹30,140 – ₹35,620</td>
                    <td className="p-3.5 sm:p-4">20 – 35 KWD (2 hrs OT/day)</td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-emerald-700">₹32,000 – ₹40,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Mason (Tile / Block / Plasterer)</td>
                    <td className="p-3.5 sm:p-4">160 – 210 KWD</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">₹43,840 – ₹57,540</td>
                    <td className="p-3.5 sm:p-4">30 – 50 KWD</td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-emerald-700">₹48,000 – ₹65,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Shuttering Carpenter / Steel Fixer</td>
                    <td className="p-3.5 sm:p-4">150 – 200 KWD</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">₹41,100 – ₹54,800</td>
                    <td className="p-3.5 sm:p-4">30 – 45 KWD</td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-emerald-700">₹45,000 – ₹62,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Building Electrician / Plumber (MEP)</td>
                    <td className="p-3.5 sm:p-4">170 – 230 KWD</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">₹46,580 – ₹63,020</td>
                    <td className="p-3.5 sm:p-4">35 – 55 KWD</td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-emerald-700">₹52,000 – ₹72,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">6G Pipe Welder (TIG &amp; ARC / KNPC)</td>
                    <td className="p-3.5 sm:p-4">250 – 380 KWD</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">₹68,500 – ₹1,04,120</td>
                    <td className="p-3.5 sm:p-4">50 – 90 KWD</td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-emerald-700">₹78,000 – ₹1,20,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Refinery Pipefitter / Fabricator</td>
                    <td className="p-3.5 sm:p-4">200 – 280 KWD</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">₹54,800 – ₹76,720</td>
                    <td className="p-3.5 sm:p-4">40 – 70 KWD</td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-emerald-700">₹62,000 – ₹90,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Heavy Trailer Driver (Kuwait Heavy License)</td>
                    <td className="p-3.5 sm:p-4">240 – 350 KWD</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">₹65,760 – ₹95,900</td>
                    <td className="p-3.5 sm:p-4">Trip allowances (40–80 KWD)</td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-emerald-700">₹72,000 – ₹1,10,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Forklift Operator / Warehouse Picker</td>
                    <td className="p-3.5 sm:p-4">160 – 220 KWD</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">₹43,840 – ₹60,280</td>
                    <td className="p-3.5 sm:p-4">30 – 50 KWD</td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-emerald-700">₹48,000 – ₹68,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Continental / Indian Restaurant Head Chef</td>
                    <td className="p-3.5 sm:p-4">220 – 350 KWD</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">₹60,280 – ₹95,900</td>
                    <td className="p-3.5 sm:p-4">Service tips &amp; food allowance</td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-emerald-700">₹65,000 – ₹1,05,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">HVAC Central AC Maintenance Technician</td>
                    <td className="p-3.5 sm:p-4">180 – 260 KWD</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">₹49,320 – ₹71,240</td>
                    <td className="p-3.5 sm:p-4">35 – 60 KWD</td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-emerald-700">₹55,000 – ₹80,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 italic">
              *Net monthly savings calculate realistic estimates after basic personal expenses (calling cards, personal snacks, and toiletries). In 95% of verified contracts, accommodation, electricity, central air conditioning, cooking gas, and daily site transport are 100% company-covered.
            </p>
          </section>

          {/* Section 6: Work Culture, Climate & Daily Life */}
          <section id="culture-and-lifestyle" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaSun className="w-3 h-3" /> Section 6: Culture &amp; Daily Life
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Work Culture, Climate Realities &amp; The Indian Diaspora Experience in Kuwait
            </h2>
            <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Moving to Kuwait is a culturally enriching and financially rewarding experience, but understanding local social norms, workplace customs, and climate parameters is essential for seamless adaptation:
              </p>

              <div className="grid gap-6 md:grid-cols-2 pt-2">
                {/* Culture Pillar 1 */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <FaSuitcaseMedical className="text-emerald-600" />
                    Workplace Norms &amp; Respectful Etiquette
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Kuwaiti employers and project managers place immense value on personal respect, verbal courtesy, and loyalty. Greetings are warm and formal (beginning with <em>As-salamu alaykum</em>). Punctuality on construction and refinery sites is strictly monitored via biometric clocking. English is the universal operational language across engineering and technical operations, while Hindi and Urdu are widely understood by supervisors and site foremen.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Friday is the holy day of weekly rest across Kuwait. Most corporate and commercial entities operate on a 48-hour standard workweek (8 hours per day, 6 days per week). Overtime performed on Fridays or public holidays is compensated at premium rates under Kuwait Labour Law.
                  </p>
                </div>

                {/* Culture Pillar 2 */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <FaSun className="text-amber-500" />
                    Summer Climate &amp; Mandatory Mid-Day Heat Ban
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Kuwait experiences extreme desert summer temperatures between May and September, with thermometer readings routinely hitting 48°C to 52°C in open desert oilfields. However, Kuwait is recognized internationally for having the strictest worker heat protections in the GCC.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the <strong>Public Authority for Manpower (PAM) Summer Work Ban</strong>, all outdoor physical labor under direct sunlight is strictly illegal between <strong>11:00 AM and 4:00 PM from June 1 to August 31</strong>. Work hours shift to cool morning blocks (5:00 AM – 10:30 AM) and evening floodlit sessions. Violating employers face immediate fines, project shutdowns, and governmental blockades.
                  </p>
                </div>

                {/* Culture Pillar 3 */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <FaHouseUser className="text-cyan-600" />
                    Indian Community Clusters &amp; Social Life
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    With over 1 million Indian citizens residing in the country, Kuwait feels like a home away from home. Prominent residential and commercial clusters include <strong>Salmiya</strong>, <strong>Abbasiya (Jleeb Al-Shuyoukh)</strong>, <strong>Mirqab (Kuwait City)</strong>, and <strong>Fahaheel</strong>.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    These neighborhoods feature vibrant community associations representing Kerala, Bihar, Uttar Pradesh, Tamil Nadu, and Punjab. Cricket tournaments, cultural festivals, and community celebrations occur regularly. The Indian Embassy in Daiya provides robust consular assistance and emergency welfare support.
                  </p>
                </div>

                {/* Culture Pillar 4 */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <FaUtensils className="text-rose-500" />
                    Food, Groceries &amp; Domestic Living Costs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Indian food and spices are ubiquitous in Kuwait. Major retail giants like <strong>LuLu Hypermarket, Grand Hyper, City Centre, and Sultan Centre</strong> stock authentic Indian brands (Aashirvaad, Tata, Amul, MDH) alongside fresh vegetables imported directly from India several times a week.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A worker cooking independently typically spends just <strong>20 to 30 KWD per month (₹5,500 to ₹8,200 INR)</strong> on groceries. In major labor accommodations, companies provide subsidized mess canteens serving balanced South Indian and North Indian menus for 15 to 25 KWD per month.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Deployment Pipeline */}
          <section id="deployment-pipeline" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaPlaneArrival className="w-3 h-3" /> Section 7: Step-by-Step Deployment
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              End-to-End Deployment Pipeline: From Indian Selection to Kuwait Civil ID
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Client Interview &amp; Practical Trade Testing in India</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Candidates attend structured technical interviews and practical trade testing (weld testing on 6G pipes, driving simulator tests, electrical schematic wiring) conducted directly by Kuwaiti corporate delegates at WorkWise Visa testing centers in Noida, Patna, or Gorakhpur. Successful candidates receive written offer letters outlining basic pay, overtime rates, and perks.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">PAM Work Permit (Izn Amal) Approval in Kuwait</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    The Kuwait employer submits the candidate&apos;s passport copy, trade test result, and profession classification to the Public Authority for Manpower (PAM). PAM verifies the company&apos;s approved quota and issues the official computerized Work Permit (Izn Amal), which is digitally transferred to the Ministry of Interior.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Wafid GAMCA Medical &amp; PSK Police Clearance Certificate (PCC)</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    The candidate books a medical appointment slip on Wafid.com, completes biometric blood tests and chest X-rays at an authorized clinic, and receives a digital FIT certificate. Simultaneously, the candidate applies for an official Police Clearance Certificate (PCC) at their regional Passport Seva Kendra (PSK).
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">MOI Entry Visa Issuance, Embassy Stamping &amp; eMigrate</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    The Kuwait Ministry of Interior generates the official electronic Entry Work Visa. Documents are submitted to the Kuwait Embassy / Consulate in India for biometric visa endorsement. For ECR passport holders, WorkWise Visa generates the mandatory Emigration Clearance (EC) on the eMigrate portal with Pravasi Bharatiya Bima Yojana (PBBY) insurance.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Kuwait Arrival, MOH Screening, Fingerprinting &amp; PACI Civil ID</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Upon touchdown at Kuwait International Airport, company representatives receive workers and transport them to corporate accommodations. Within 30 days, workers undergo domestic Ministry of Health blood screening, complete ten-digit fingerprint biometrics at the Criminal Evidences Department, and receive their physical PACI Civil ID card and digital Hawyati app credentials.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Document Checklist */}
          <section id="document-checklist" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaFileContract className="w-3 h-3" /> Section 8: Document Checklist
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Statutory Documentation Checklist for Kuwait Work Visa Applicants
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex items-start gap-3">
                <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 text-sm block">Original Indian Passport</span>
                  <p className="text-xs text-slate-600 mt-1">Minimum 6 months validity from travel date, with at least 3 blank visa pages (ECR or ECNR).</p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex items-start gap-3">
                <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 text-sm block">PSK Police Clearance (PCC)</span>
                  <p className="text-xs text-slate-600 mt-1">Issued by Passport Seva Kendra (PSK) within the last 3 months, verifying zero criminal record.</p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex items-start gap-3">
                <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 text-sm block">Wafid (GAMCA) Fit Medical Slip</span>
                  <p className="text-xs text-slate-600 mt-1">Digital FIT certificate issued by an authorized Wafid medical clinic within 60 days of submission.</p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex items-start gap-3">
                <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 text-sm block">Trade Certificate / Indian License</span>
                  <p className="text-xs text-slate-600 mt-1">ITI diploma, 6G welder test certificate, or Indian heavy motor vehicle (HMV) driving license.</p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex items-start gap-3">
                <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 text-sm block">Degree Attestation (Engineers Only)</span>
                  <p className="text-xs text-slate-600 mt-1">State HRD, MEA New Delhi, Kuwait Embassy legalization, and Kuwait Society of Engineers (KSE) clearance.</p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex items-start gap-3">
                <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 text-sm block">White-Background Photographs</span>
                  <p className="text-xs text-slate-600 mt-1">8 recent color passport photographs (3.5 x 4.5 cm), matte finish, 80% face coverage.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: Forensic Scam Warning */}
          <section id="scam-warning" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-200 px-3.5 py-1 text-xs font-bold text-rose-800">
              <FaTriangleExclamation className="w-3 h-3" /> Section 9: Scam Prevention
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Forensic Scam Prevention: How to Detect Fake Kuwait Visas &amp; Unauthorized Sub-Agents
            </h2>
            <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-6 space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                Because Kuwaiti Dinar salaries are exceptionally high, fraudulent local recruiters frequently exploit job seekers with fake documents. Protect yourself by memorizing these five ironclad warning signs:
              </p>
              <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm text-slate-700">
                <div className="rounded-xl border border-rose-200 bg-white p-4 space-y-1.5">
                  <span className="font-bold text-rose-700 flex items-center gap-1.5">
                    <FaBan className="w-3.5 h-3.5" /> The &apos;Azad Visa&apos; (Free Visa) Myth
                  </span>
                  <p className="text-slate-600 text-xs">
                    There is NO legal visa called an &apos;Azad Visa&apos; or &apos;Free Visa&apos; under Kuwait law. Anyone selling you a visa allowing you to &apos;work for anyone in Kuwait&apos; is selling a forged or illegally sponsored permit. Working for any employer other than your official sponsor is a criminal offense punishable by deportation.
                  </p>
                </div>

                <div className="rounded-xl border border-rose-200 bg-white p-4 space-y-1.5">
                  <span className="font-bold text-rose-700 flex items-center gap-1.5">
                    <FaBan className="w-3.5 h-3.5" /> Travelling on a Commercial Visit Visa
                  </span>
                  <p className="text-slate-600 text-xs">
                    Under strict 2026 Ministry of Interior regulations, commercial visit visas or family visit visas CANNOT be converted into Article 18 work permits inside Kuwait. You must enter the country directly on an official Entry Work Visa.
                  </p>
                </div>

                <div className="rounded-xl border border-rose-200 bg-white p-4 space-y-1.5">
                  <span className="font-bold text-rose-700 flex items-center gap-1.5">
                    <FaBan className="w-3.5 h-3.5" /> Unverifiable Visa Papers Without PAM Registration
                  </span>
                  <p className="text-slate-600 text-xs">
                    Every genuine Kuwait work visa has a traceable PAM Work Permit number and MOI barcode. If an agent gives you a PDF without a searchable registration number on moi.gov.kw, it is 100% fake.
                  </p>
                </div>

                <div className="rounded-xl border border-rose-200 bg-white p-4 space-y-1.5">
                  <span className="font-bold text-rose-700 flex items-center gap-1.5">
                    <FaBan className="w-3.5 h-3.5" /> Demanding ₹2 Lakh to ₹4 Lakh Advance Cash
                  </span>
                  <p className="text-slate-600 text-xs">
                    Legitimate recruitment agencies operate on transparent, regulated service charges aligned with MEA rules. Never transfer personal cash to individual UPI handles or unauthorized village brokers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: In-Depth FAQs */}
          <section id="faqs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaCircleQuestion className="w-3 h-3" /> Section 10: Frequently Asked Questions
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About Kuwait Work Visas &amp; Life in Kuwait
            </h2>
            <div className="space-y-4">
              {kuwaitFaqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5">
                      Q{idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </h3>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 11: Cross-Linking to Other Regional Guides */}
          <section id="related-guides" className="scroll-mt-28 space-y-6 border-t border-slate-200 pt-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaArrowTrendUp className="w-3 h-3" /> Compare Global Work Destinations
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
              Explore Other High-Demand GCC &amp; European Work Destinations
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/countries/uae"
                className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-emerald-500 hover:shadow-xs transition-all"
              >
                <span className="text-xs font-bold text-emerald-700 uppercase">GCC Corridor</span>
                <h3 className="font-bold text-slate-900 text-sm mt-1 group-hover:text-emerald-700 transition-colors">
                  UAE (Dubai &amp; Abu Dhabi)
                </h3>
                <p className="text-xs text-slate-500 mt-1">MOHRE work permits, tax-free AED salaries, 2-week fast-track processing.</p>
              </Link>

              <Link
                href="/countries/saudi-arabia"
                className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-emerald-500 hover:shadow-xs transition-all"
              >
                <span className="text-xs font-bold text-emerald-700 uppercase">GCC Corridor</span>
                <h3 className="font-bold text-slate-900 text-sm mt-1 group-hover:text-emerald-700 transition-colors">
                  Saudi Arabia (NEOM)
                </h3>
                <p className="text-xs text-slate-500 mt-1">Qiwa digital contracts, Takamol SVP trade testing, Vision 2030 hiring.</p>
              </Link>

              <Link
                href="/countries/qatar"
                className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-emerald-500 hover:shadow-xs transition-all"
              >
                <span className="text-xs font-bold text-emerald-700 uppercase">GCC Corridor</span>
                <h3 className="font-bold text-slate-900 text-sm mt-1 group-hover:text-emerald-700 transition-colors">
                  Qatar (QVC Process)
                </h3>
                <p className="text-xs text-slate-500 mt-1">Qatar Visa Center biometric tests, North Field LNG expansion projects.</p>
              </Link>

              <Link
                href="/countries/malta"
                className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-emerald-500 hover:shadow-xs transition-all"
              >
                <span className="text-xs font-bold text-emerald-700 uppercase">Schengen Europe</span>
                <h3 className="font-bold text-slate-900 text-sm mt-1 group-hover:text-emerald-700 transition-colors">
                  Malta (Identità Single Permit)
                </h3>
                <p className="text-xs text-slate-500 mt-1">100% English workplace, hospitality chefs &amp; shipyard trades, Euro earnings.</p>
              </Link>
            </div>
          </section>

          {/* Section 12: Consultation & Profile Audit Form */}
          <section
            id="consultation-form"
            className="scroll-mt-28 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
              <span className="inline-block rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3.5 py-1 text-xs font-bold text-emerald-300">
                Direct Kuwait Deployment Desk
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
                Apply for Verified Kuwait Job Vacancies
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Have your passport, trade experience, and technical qualifications audited by our senior Gulf recruitment counselors. 100% verified employer demands with sovereign PAM quota approvals.
              </p>

              <div className="pt-6 flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/918130161603?text=Hello%20WorkWise%20Visa%2C%20I%20want%20to%20apply%20for%20a%20Kuwait%20Work%20Visa%20and%20Jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-emerald-500/20 hover:from-emerald-400 hover:to-teal-400 transition-all transform hover:-translate-y-0.5"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Connect with Kuwait Placement Desk</span>
                </a>
                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-800/90 border border-slate-700 px-8 py-4 text-base font-bold text-white hover:bg-slate-800 hover:border-emerald-500/50 transition-all"
                >
                  <FaBriefcase className="w-5 h-5 text-emerald-400" />
                  <span>Browse Live Kuwait Job Openings</span>
                </Link>
              </div>

              <div className="pt-6 border-t border-slate-800/80 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
                <span className="flex items-center gap-1.5">
                  <FaShieldHalved className="text-emerald-400" /> Zero Upfront Registration Fee
                </span>
                <span className="flex items-center gap-1.5">
                  <FaBuilding className="text-emerald-400" /> MEA Registered Agency
                </span>
                <span className="flex items-center gap-1.5">
                  <FaClock className="text-emerald-400" /> Fast 3–5 Week Deployment
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
