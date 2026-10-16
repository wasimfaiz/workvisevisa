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
  FaTruckFast,
  FaAward,
  FaFileContract,
  FaEarthAmericas,
  FaUserTie,
  FaCoins,
  FaFingerprint,
  FaStethoscope,
  FaCircleCheck,
  FaCircleExclamation,
  FaLanguage,
  FaHouseUser,
  FaBan,
  FaBuilding,
  FaUtensils,
  FaPlaneDeparture,
} from "react-icons/fa6";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.workwisevisa.com";

export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "France Work Visa & Jobs Guide 2026: Passeport Talent, VLS-TS Salarié, SMIC Wages & DREETS Work Permit | WorkWise Visa",
  description:
    "Definitive 2026 statutory master guide to France work visas for Indian skilled workers, technicians, hospitality professionals, IT specialists & engineers. Learn Passeport Talent, VLS-TS Salarié permits, DREETS labor clearance, SMIC wage rules (€1,766+ gross), OFII post-arrival integration, and VFS India consular processing.",
  keywords: [
    "France work visa 2026",
    "France work visa for Indian citizens",
    "France work permit process in India",
    "Passeport Talent France eligibility salary 2026",
    "VLS-TS Salarie France work visa",
    "France Metiers en tension shortage list 2026",
    "SMIC minimum wage France 2026 gross net INR",
    "DREETS work permit authorization France",
    "OFII validation process VLS TS France",
    "VFS France visa appointment India New Delhi Mumbai",
    "France jobs for Indian chefs welders IT nurses",
    "Cost of living France Paris vs Lyon Toulouse",
    "CAF APL housing subsidy France for foreign workers",
    "France work visa processing time and fees 2026",
    "WorkWise Visa France recruitment placement",
    "How to get job in France with visa sponsorship from India",
    "France permanent residency Carte de resident 10 ans",
  ],
  alternates: {
    canonical: `${BASE_URL}/countries/france`,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "France Work Visa & Jobs Guide 2026: Passeport Talent, VLS-TS Salarié, SMIC Wages & DREETS Work Permit | WorkWise Visa",
    description:
      "Comprehensive statutory manual for Indian professionals, skilled tradespeople, culinary experts, software engineers, and industrial technicians migrating to the French Republic under the Code du Travail and Code de l'Entrée et du Séjour des Étrangers.",
    url: `${BASE_URL}/countries/france`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "France Work Visa 2026 - Paris Skyline and Professional Employment Pathways",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "France Work Visa & Employment Manual 2026 | WorkWise Visa",
    description:
      "Statutory step-by-step guidance on French DREETS work authorization, Passeport Talent, VLS-TS Salarié visas, SMIC salary scale, OFII integration, and Indian recruitment deployments.",
    images: ["https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function FranceCountryPage() {
  const publishedDate = "2026-03-30T09:00:00.000Z";
  const modifiedDate = "2026-10-16T15:30:00.000Z";

  // Structured Data Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BASE_URL}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Countries",
        item: `${BASE_URL}/countries`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "France",
        item: `${BASE_URL}/countries/france`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "France Work Visa & Employment Manual 2026: Passeport Talent, VLS-TS Salarié, SMIC Pay & DREETS Labor Authorization",
    description:
      "The definitive statutory manual explaining how Indian skilled workers, IT specialists, hospitality trades, welders, and engineers secure legal French employment authorizations, VFS Type-D stamping, OFII CIR contracts, and residence cards.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    author: {
      "@type": "Organization",
      name: "WorkWise Visa Global Immigration & Trade Mobility Bureau",
      url: `${BASE_URL}`,
    },
    publisher: {
      "@type": "Organization",
      name: "WorkWise Visa",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/workwise_logo.png`,
      },
    },
    datePublished: publishedDate,
    dateModified: modifiedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/countries/france`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between a French Passeport Talent and a standard VLS-TS Salarié visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Passeport Talent (now Talent - Salarié qualifié / projet innovant) is a premium 4-year multi-entry residence permit designed for highly skilled workers earning at least 1.5 to 2 times the French minimum wage (SMIC), or holding a recognized master's degree. It completely exempts the employer from the French labor market test (opposabilité de la situation de l'emploi) and gives the spouse full, unrestricted rights to live and work in France immediately. In contrast, the standard VLS-TS Salarié is a 1-year renewable visa tied to an employment contract (CDI or CDD > 12 months) that requires the employer to advertise the job on France Travail for 3 weeks and obtain formal DREETS labor market authorization unless the role is on the official Métiers en Tension (shortage occupations) list.",
        },
      },
      {
        "@type": "Question",
        name: "What is the current SMIC minimum wage in France, and can an Indian worker be paid less?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As of 2026, the statutory national gross minimum wage (SMIC - Salaire Minimum Interprofessionnel de Croissance) in France is approximately €1,766.92 per month based on the legal 35-hour work week (~€11.65 per hour), which yields a net take-home pay of around €1,398.69 per month (~₹1.26 Lakhs INR). Under the French Labor Code (Code du Travail), it is strictly illegal for any employer to pay a foreign national less than the legal SMIC or less than the minimum set by the applicable sector collective bargaining agreement (Convention Collective). Skilled trade professionals, engineers, and chefs are typically contracted between €2,200 and €4,500 gross per month.",
        },
      },
      {
        "@type": "Question",
        name: "Do Indian candidates need to speak French before applying for a France work visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For the initial VLS-TS Salarié or Passeport Talent visa issuance at VFS Global in India, passing a formal French language examination (such as DELF/DALF) is generally not legally mandatory unless the specific profession is regulated (such as doctors, registered nurses, or certified lawyers). English is widely accepted in multinational tech firms, aerospace hubs (Toulouse), global finance, and specialized engineering roles. However, basic conversational French (A2 level) significantly boosts employability in hospitality, construction trades, and regional logistics. Furthermore, after arrival, under the mandatory Contrat d'Intégration Républicaine (CIR) signed with OFII, workers who do not have A1 French proficiency receive up to 600 hours of state-funded, free French language tuition.",
        },
      },
      {
        "@type": "Question",
        name: "What is the DREETS work authorization (Autorisation de Travail) and who applies for it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Autorisation de Travail is the mandatory pre-requisite labor clearance granted by DREETS (Directions régionales de l'économie, de l'emploi, du travail et des solidarités) under the French Ministry of the Interior. The sponsoring French employer must apply for this permit online via the digital ANEF platform (administration-etrangers-en-france.interieur.gouv.fr). Once approved, a digital work permit confirmation certificate with a unique QR code and reference number is issued. The Indian applicant must present this official certificate at VFS Global in India to receive their VLS-TS Type-D work visa.",
        },
      },
      {
        "@type": "Question",
        name: "What is the OFII validation procedure upon arriving in France?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Holders of a Long-Stay Visa equivalent to a Residence Permit (VLS-TS) must validate their visa online via the ANEF/OFII platform within 3 months of entering French territory. The process involves entering personal visa details, paying the residence permit tax (taxe de séjour / timbre fiscal, usually €200 to €225), providing a French residential address, and scheduling the mandatory OFII appointment for the medical examination (visite médicale) and signing the Contrat d'Intégration Républicaine (CIR).",
        },
      },
      {
        "@type": "Question",
        name: "Can my spouse work in France if I hold a French work visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you hold a Passeport Talent, your spouse is granted a 'Passeport Talent (Famille)' visa simultaneously, which confers full, unrestricted rights to engage in any salaried employment or self-employed business in France without requiring a separate work permit. If you hold a standard VLS-TS Salarié visa, your family must join via the Regroupement Familial (family reunification) protocol after you have completed 18 months of continuous legal residence in France with stable and sufficient income.",
        },
      },
      {
        "@type": "Question",
        name: "What is the 35-hour work week and RTT in France?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "By law under the French Code du Travail, standard working hours in France are capped at 35 hours per week. Any hours worked beyond 35 hours must either be compensated with overtime pay premiums (typically +25% for the first 8 extra hours and +50% thereafter) or compensated with additional paid rest days known as RTT (Réduction du Temps de Travail), often giving workers an extra 10 to 15 paid days off annually in addition to their statutory 5 weeks (25 days) of paid annual leave.",
        },
      },
      {
        "@type": "Question",
        name: "Can Indian workers receive French government housing subsidies (CAF APL)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Any foreign worker holding a valid legal residence permit or validated VLS-TS in France is fully eligible to apply for personal housing assistance (APL - Aide Personnalisée au Logement) through CAF (Caisse d'Allocations Familiales). Depending on your monthly income, rent amount, and family composition, CAF can directly pay €150 to €350 per month towards your rent, substantially lowering living costs.",
        },
      },
      {
        "@type": "Question",
        name: "What are the rules for obtaining permanent residency (Carte de résident 10 ans) and French citizenship?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Foreign workers who have resided in France continuously for 5 years on legal residence permits (such as VLS-TS Salarié or Passeport Talent), paid French income taxes, demonstrate stable financial resources, and achieve at least B1 level French language proficiency can apply for a 10-year renewable EU Long-Term Resident Card (Carte de résident de longue durée-UE). After 5 continuous years (or 2 years if holding a master's degree from a recognized French higher educational institution), workers can also apply for naturalization as a French citizen, gaining an EU passport and full freedom of movement across all 29 Schengen states.",
        },
      },
      {
        "@type": "Question",
        name: "How does the French healthcare system (Protection Universelle Maladie - PUMA) work for Indian workers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every legally employed foreign worker in France is registered with the national health insurance system (Sécurité Sociale / l'Assurance Maladie) through their employer's initial declaration (DPAE). The worker receives a social security number (Numéro de Sécurité Sociale) and a green electronic healthcare card called Carte Vitale. The state covers roughly 70% of doctor visits, prescription medications, and hospital costs, while the remaining 30% is covered by the employer's mandatory complementary health insurance (Mutuelle d'entreprise), of which the employer is legally obligated to pay at least 50% of monthly premiums.",
        },
      },
      {
        "@type": "Question",
        name: "How long does the entire France work visa process take from India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The complete timeline spans approximately 8 to 14 weeks from contract signing to landing in France. Stage 1: DREETS online work permit authorization takes 3 to 6 weeks. Stage 2: Visa file preparation, certified sworn translations, and VFS India appointment booking take 1 to 2 weeks. Stage 3: Consular review and visa stamping by the French Consulates in New Delhi, Mumbai, Kolkata, Bengaluru, or Puducherry take approximately 15 to 25 working days. Stage 4: Relocation, flight deployment, and OFII online registration take 1 to 2 weeks upon arrival.",
        },
      },
      {
        "@type": "Question",
        name: "How do I verify if a French job offer or visa is authentic and avoid scams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Legitimate French employers will never ask candidates to pay for their work permit or visa authorization fees. Genuine work authorizations are issued via the official French government portal (interieur.gouv.fr) with a verifiable digital barcode/QR code and official DREETS registration numbers. Tourist visas cannot be legally converted into work permits inside France. Always ensure your contract specifies the applicable Convention Collective, SIRET company registration number, exact gross monthly salary above the statutory SMIC, and duty hours under the 35-hour legal week.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Apply for a France Work Visa (VLS-TS Salarié & Passeport Talent) from India in 2026",
    description:
      "A complete 6-stage statutory operational roadmap for Indian professionals, tradespeople, technicians, chefs, and engineers to migrate legally to France under the French Code du Travail.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Secure a Compliant French Employment Contract (CDI or CDD)",
        text: "Obtain a signed employment contract from a registered French company (with verified SIRET/SIREN registration) offering wages at or above the national SMIC (€1,766.92/mo) or relevant Convention Collective, adhering to the 35-hour work week.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Employer Obtains DREETS Work Authorization (Autorisation de Travail)",
        text: "The French employer advertises the role on France Travail for 3 weeks (unless on the Métiers en Tension shortage list or applying under Passeport Talent) and submits the digital work permit application on the official Ministry of the Interior ANEF portal.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Prepare France-Visas Application & Certified Translations",
        text: "Complete the official online application on the France-Visas portal, generate the registration receipt, and arrange certified French translations (Traducteur Assermenté) for educational degrees, police clearance certificates (PCC), and birth certificates.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Attend VFS Global India Appointment & Biometrics Submission",
        text: "Submit the physical visa dossier, original passport, certified DREETS work authorization certificate, and undergo biometric enrollment at VFS Global centers in New Delhi, Mumbai, Bengaluru, Kolkata, Chennai, or regional branches.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Receive VLS-TS Type-D Visa & Travel to France",
        text: "Collect your stamped passport featuring the Long-Stay Visa equivalent to a Residence Permit (VLS-TS) and travel to France. The employer submits the Déclaration Préalable à l'Embauche (DPAE) before your first day of work.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Validate VLS-TS on ANEF Portal & Attend OFII Integration",
        text: "Within 3 months of arrival, validate the visa online, pay the residence tax (timbre fiscal), undergo the mandatory occupational medical check, and sign the Contrat d'Intégration Républicaine (CIR) with OFII.",
      },
    ],
  };

  return (
    <>
      {/* Schema.org Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <Navbar />

      <main className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
        
        {/* ── Hero Section (Strict Emerald/Teal/Slate UI Continuity) ── */}
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
              <span className="text-emerald-300 font-bold">France (French Republic)</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                {/* Government & Authority Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Official 2026 French Code du Travail &amp; DREETS Immigration Gateway
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                  France Work Visa &amp; Jobs Guide{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                    2026
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  The definitive, legally verified roadmap for Indian professionals, skilled tradespeople, culinary experts, software engineers, and industrial technicians migrating to the French Republic. Explore the <strong className="font-bold text-white">Passeport Talent (4-Year Residency)</strong>, <strong className="font-bold text-emerald-300">VLS-TS Salarié permits</strong>, <strong className="font-bold text-white">Métiers en Tension shortage exemptions</strong>, statutory SMIC wages (€1,766+ gross), and mandatory OFII Integration Contracts (CIR).
                </p>

                {/* Key Benefits Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaMoneyBillWave className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">€1,766.92/mo</div>
                      <div className="text-[10px] text-slate-400">Statutory SMIC Floor</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaAward className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Passeport Talent</div>
                      <div className="text-[10px] text-slate-400">4-Year Open Stay</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaWrench className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Métiers en Tension</div>
                      <div className="text-[10px] text-slate-400">Zero Labor Test</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaHospital className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">PUMA Healthcare</div>
                      <div className="text-[10px] text-slate-400">Carte Vitale + Mutuelle</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaClock className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">35-Hour Week</div>
                      <div className="text-[10px] text-slate-400">5 Wks Paid Vacation</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaHouseUser className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">CAF APL Subsidy</div>
                      <div className="text-[10px] text-slate-400">€150–€350 Rent Aid</div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href="/jobs?country=France"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <FaBriefcase className="w-4 h-4" />
                    Browse Active France Vacancies
                  </Link>

                  <a
                    href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20applying%20for%20a%20France%20work%20visa%20and%20job%20sponsorship!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/50 px-6 py-3.5 text-sm font-bold text-white transition-all shadow-md"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-300" />
                    WhatsApp France Desk
                  </a>

                  <Link
                    href="/track-application"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white underline underline-offset-4"
                  >
                    Track Existing France File <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Quick Country Snapshot Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3.5">
                      <img
                        src="https://flagcdn.com/w160/fr.png"
                        alt="France Flag"
                        className="h-10 w-14 object-cover rounded-xl shadow-md border border-white/25 shrink-0"
                      />
                      <div>
                        <h2 className="text-xl font-display font-extrabold text-white">French Republic (France)</h2>
                        <p className="text-xs text-emerald-300 font-medium">Paris • Lyon • Toulouse • Marseille • Lille</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-xs font-bold text-emerald-300">
                      <FaShieldHalved className="w-3 h-3 text-emerald-400" />
                      Schengen Core
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Primary Work Visas:</span>
                      <span className="font-bold text-white">VLS-TS Salarié &amp; Passeport Talent</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Labor Market Authority:</span>
                      <span className="font-bold text-emerald-300">DREETS (Online ANEF Platform)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Consular Processing Time:</span>
                      <span className="font-bold text-white">8–12 Weeks Total (India to France)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Statutory Minimum Wage:</span>
                      <span className="font-bold text-amber-300">€1,766.92/mo (SMIC 35h week)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Average Monthly Trade Pay:</span>
                      <span className="font-bold text-emerald-300">€2,200 – €3,800 (₹1.98L – ₹3.42L INR)</span>
                    </div>

                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Permanent Residency (PR):</span>
                      <span className="font-bold text-emerald-300">5 Years (10-Yr Card) / 2 Yrs (Masters)</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-900/40 border border-emerald-500/30 p-4 text-center">
                    <p className="text-xs font-medium text-emerald-200 mb-2">
                      Ready to start your French career in construction, culinary, hospitality, or engineering?
                    </p>
                    <a
                      href="mailto:workwisevisa@gmail.com?subject=France%20Job%20Application&body=Hello%20WorkWise%20Visa%20Team,%0A%0AI%20am%20applying%20for%20France%20Work%20Visa%20(VLS-TS%20Salarié%20/%20Passeport%20Talent).%0A%0AFull%20Name:%0APhone%20Number:%0ATrade/Designation:%0APassport%20Number:%0AFrench%20Language%20Level%20(None/A1/A2/B1/B2):%0AExperience%20(Years):"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-900 hover:bg-slate-100 transition-colors shadow-sm"
                    >
                      <FaEnvelope className="w-3.5 h-3.5 text-emerald-600" />
                      Submit Profile for France Evaluation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Table of Contents & Quick Navigation (Consistent Floating Card) ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/50">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              <FaMagnifyingGlass className="w-3 h-3 text-emerald-600" />
              France Comprehensive Guide Directory:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#overview" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                1. 2026 Labor Landscape &amp; Code du Travail
              </a>
              <a href="#visa-types" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                2. Visa Pathways: Passeport Talent &amp; VLS-TS
              </a>
              <a href="#shortage-occupations" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                3. Métiers en Tension Shortage Occupations
              </a>
              <a href="#salary-matrix" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                4. SMIC Wage Math &amp; Salary Matrix
              </a>
              <a href="#step-by-step" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                5. 6-Stage DREETS &amp; VFS Pipeline
              </a>
              <a href="#documents" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                6. VFS India Checklist &amp; Sworn Translations
              </a>
              <a href="#ofii-integration" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                7. OFII Validation &amp; CIR Integration
              </a>
              <a href="#health-insurance" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                8. PUMA Healthcare &amp; Employer Mutuelle
              </a>
              <a href="#living-costs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                9. Cost of Living &amp; CAF APL Subsidies
              </a>
              <a href="#settlement" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                10. 10-Year PR Card &amp; French Citizenship
              </a>
              <a href="#fraud-prevention" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                11. Anti-Fraud &amp; Scam Advisory
              </a>
              <a href="#faqs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                12. Exhaustive Search FAQs (12+)
              </a>
            </div>
          </div>
        </section>

        {/* ── Main Content Container ─────────────────────────── */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">

          {/* ── Section 1: Overview & 2026 Regulatory Landscape ── */}
          <section id="overview" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaIndustry className="w-3.5 h-3.5 text-emerald-600" />
              Section 1: Country Overview &amp; The Code du Travail Framework
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The French Employment Landscape in 2026: Code du Travail &amp; Foreign Recruitment
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                France stands as the European Union&apos;s second-largest economy, driven by world-class aerospace (Airbus), advanced civil infrastructure (Grand Paris Express), luxury hospitality, nuclear energy, cutting-edge software development, and precision manufacturing. However, like much of Western Europe, France faces acute demographic contractions and systemic labor shortages across both high-tech disciplines and critical blue-collar manual trades.
              </p>
              <p>
                Under the French Labor Code (<strong>Code du Travail</strong>) and the immigration code (<strong>CESEDA — Code de l&apos;Entrée et du Séjour des Étrangers et du Droit d&apos;Asile</strong>), foreign workers enjoy equal statutory protections alongside French citizens. This guarantees strict compliance with maximum working hours, statutory overtime compensation, mandatory employer-funded health insurance top-ups (<em>Mutuelle</em>), paid annual vacations (5 weeks minimum), and non-negotiable minimum wage floors (<strong>SMIC</strong>).
              </p>
              <p>
                For Indian citizens, securing employment in France requires understanding the distinct legal channels administered by the <strong>Ministry of the Interior (Ministère de l&apos;Intérieur)</strong>, the regional employment directors at <strong>DREETS (Directions régionales de l&apos;économie, de l&apos;emploi, du travail et des solidarités)</strong>, and the consular network executed via <strong>VFS Global centers across India</strong>. Unlike informal overseas recruitment corridors, the French process is strictly formalized, digitized through the <strong>ANEF platform</strong>, and backed by legally binding employment agreements (CDI or CDD).
              </p>
            </div>

            {/* Core Statutory Pillars Box */}
            <div className="rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-6 space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FaShieldHalved className="w-4 h-4 text-emerald-700" />
                Core Statutory Pillars of French Employment
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <FaCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>The 35-Hour Work Week:</strong> Statutory baseline. Any excess hours yield 25%–50% overtime pay or RTT rest days.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>5 Weeks Paid Vacation:</strong> Every salaried employee earns 2.5 working days of paid leave per month of service.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Employer Mutuelle:</strong> Employers must pay a minimum of 50% of the employee&apos;s private health insurance premiums.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Commuting Transport Subsidy:</strong> Employers are legally required to reimburse 50% of public transit passes (e.g. Navigo).</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 2: Visa Pathways Comparison ── */}
          <section id="visa-types" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaPassport className="w-3.5 h-3.5 text-emerald-600" />
              Section 2: Legal Permit Frameworks
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              France Work Visa Categories: Selecting Your Exact Immigration Route
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              France does not offer an open or unsponsored &quot;job seeker visa&quot; for third-country nationals residing outside Europe (except under bilateral Young Professional programs). Every work visa begins with a bona fide employment contract with a French entity. Here is how the primary visa categories compare:
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Card 1: Passeport Talent */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                      Fast-Track Highly Skilled Tier
                    </span>
                    <FaAward className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Passeport Talent (Talent — Salarié Qualifié)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Designed for highly qualified professionals, tech specialists, executives, and researchers. Crucially, the sponsoring employer is <strong>exempted from the French labor market test</strong> (no 3-week France Travail publication required), and the employee&apos;s spouse automatically receives an unrestricted work permit upon landing.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Salary Floor:</span>
                    <strong className="text-slate-900">€3,533.84/mo (~2x SMIC)</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Permit Validity:</span>
                    <strong className="text-emerald-700">Up to 4 Years Multi-Entry</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Spouse Rights:</span>
                    <strong className="text-emerald-700">Immediate unrestricted work</strong>
                  </div>
                </div>
              </div>

              {/* Card 2: VLS-TS Salarié */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                      Core Blue-Collar &amp; Trade Pathway
                    </span>
                    <FaFileContract className="w-4 h-4 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">VLS-TS Salarié (Long-Stay Employee Visa)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    The universal work permit for permanent contracts (<strong>CDI — Contrat à Durée Indéterminée</strong>) or long fixed-term contracts (<strong>CDD &ge; 12 months</strong>). Sponsoring employers must apply for an <em>Autorisation de Travail</em> through DREETS. If the role is listed on the national <em>Métiers en Tension</em> shortage list, the labor market test is waived.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Salary Floor:</span>
                    <strong className="text-slate-900">1x SMIC (€1,766.92 gross/mo)</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Permit Validity:</span>
                    <strong className="text-slate-900">1-Year Renewable Permit</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Labor Market Test:</span>
                    <strong className="text-emerald-700">Waived if on Shortage List</strong>
                  </div>
                </div>
              </div>

              {/* Card 3: Seasonal & Short-Term */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                      Hospitality &amp; Agri-Logistics
                    </span>
                    <FaUtensils className="w-4 h-4 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Travailleur Saisonnier (Seasonal Worker Visa)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Geared toward the massive seasonal demand across French ski resorts (Alps/Pyrenees) during winter and Mediterranean/Atlantic coastal hotels, restaurants, vineyards, and agricultural packaging facilities during summer. Employers frequently offer full board and lodging as part of the package.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Contract Type:</span>
                    <strong className="text-slate-900">Seasonal CDD (3 to 6 months)</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Max Duration:</span>
                    <strong className="text-slate-900">6 Mo in 12 Consecutive Mo</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Accommodation:</span>
                    <strong className="text-emerald-700">Often employer-subsidized</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 3: Shortage Occupations (Métiers en Tension) ── */}
          <section id="shortage-occupations" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaWrench className="w-3.5 h-3.5 text-emerald-600" />
              Section 3: Urgent Shortage Occupations
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              France Shortage Occupations (Métiers en Tension): Zero Labor-Market Opposition
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Under French immigration regulations, occupations designated as <em>Métiers en Tension</em> are exempt from the standard requirement where employers must prove that no qualified French or EU citizen was available. When hiring for these designated titles, <strong>DREETS work authorizations are fast-tracked</strong> with high approval rates.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Category 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <FaHelmetSafety className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Construction &amp; Heavy Civil (BTP)</h3>
                    <span className="text-xs text-emerald-700 font-semibold">Grand Paris Express &amp; Infrastructure</span>
                  </div>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Structural Welders (6G TIG/MIG):</strong> High demand across naval shipyards and pipeline construction.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Tower Crane Operators (Grutiers):</strong> Metro tunneling and commercial tower construction.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Industrial Electricians &amp; Plumbers:</strong> Commercial infrastructure and electrical substations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Site Foremen &amp; BIM Modellers:</strong> Engineering compliance and project supervision.</span>
                  </li>
                </ul>
              </div>

              {/* Category 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700">
                    <FaUtensils className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Hospitality &amp; Culinary Trades</h3>
                    <span className="text-xs text-teal-700 font-semibold">Parisian Restaurants, Resorts &amp; Hotels</span>
                  </div>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Chefs de Partie &amp; Speciality Cooks:</strong> Indian culinary specialists and French brasserie kitchens.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Pastry Chefs &amp; Bakers (Boulangers):</strong> Industrial bakeries and luxury catering.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Hotel Housekeeping Supervisors:</strong> 4-star and 5-star hospitality properties.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Kitchen Stewards &amp; Commis Chefs:</strong> Resort seasonal and annual hotel contracts.</span>
                  </li>
                </ul>
              </div>

              {/* Category 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <FaGear className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Technology &amp; Aerospace Engineering</h3>
                    <span className="text-xs text-emerald-700 font-semibold">Paris, Sophia Antipolis &amp; Toulouse Hubs</span>
                  </div>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>DevOps &amp; Cloud Architects:</strong> AWS, Azure, GCP infrastructure in Paris/Lyon.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Full-Stack Developers (React/Node/Java):</strong> FinTech and enterprise software teams.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Aerospace Systems Engineers:</strong> Toulouse aviation corridor and Airbus supplier network.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Cybersecurity Analysts:</strong> Defense infrastructure and data protection compliance.</span>
                  </li>
                </ul>
              </div>

              {/* Category 4 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700">
                    <FaTruckFast className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Logistics &amp; Precision Manufacturing</h3>
                    <span className="text-xs text-teal-700 font-semibold">Automated Warehouses &amp; CNC Facilities</span>
                  </div>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Warehouse Forklift Operators (CACES):</strong> Amazon, Carrefour logistics fulfillment centers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>CNC Machine Technicians:</strong> High-precision milling and lathe production tooling.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Heavy Fleet Maintenance Mechanics:</strong> Transport depots and municipal fleet service.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Cold Storage &amp; Food Technicians:</strong> Agro-alimentaire processing plants.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── Section 4: SMIC Wages & Salary Scale ── */}
          <section id="salary-matrix" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaMoneyBillWave className="w-3.5 h-3.5 text-emerald-600" />
              Section 4: Wages &amp; Compensation
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              France Salary Scale 2026: SMIC Standards, Overtime Math &amp; Role-Wise Earnings
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              In France, wages are legally governed by the <strong>SMIC</strong> (index-linked statutory national wage) and sectoral collective bargaining agreements known as <strong>Conventions Collectives</strong>. Employers cannot lawfully contract below these thresholds.
            </p>

            {/* SMIC Math Breakdown Box */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <FaScaleUnbalanced className="w-4 h-4 text-emerald-600" />
                Statutory SMIC Numbers (35-Hour Work Week)
              </h3>
              <div className="grid gap-3 sm:grid-cols-3 text-center">
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                  <div className="text-xs text-slate-500 font-medium">Gross Hourly Rate</div>
                  <div className="text-xl font-black text-slate-900 mt-1">€11.65 / hr</div>
                  <div className="text-xs text-slate-400 mt-0.5">~₹1,050 INR</div>
                </div>
                <div className="rounded-xl bg-emerald-50 p-4 border border-emerald-200">
                  <div className="text-xs text-emerald-800 font-medium">Gross Monthly Wage</div>
                  <div className="text-xl font-black text-emerald-950 mt-1">€1,766.92 / mo</div>
                  <div className="text-xs text-emerald-700 mt-0.5">~₹1.60 Lakh INR</div>
                </div>
                <div className="rounded-xl bg-teal-50 p-4 border border-teal-200">
                  <div className="text-xs text-teal-800 font-medium">Estimated Net Take-Home</div>
                  <div className="text-xl font-black text-teal-950 mt-1">~€1,398.69 / mo</div>
                  <div className="text-xs text-teal-700 mt-0.5">~₹1.26 Lakh INR</div>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                *Net take-home reflects standard employee social contributions (~21% to 23%) covering pension, unemployment, and universal healthcare. Conversion pegged at indicative ~₹90 INR per €1 EUR.
              </p>
            </div>

            {/* Complete Salary Matrix Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-display text-[11px] sm:text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4">Profession / Trade Role</th>
                    <th className="py-3.5 px-3">Visa Route</th>
                    <th className="py-3.5 px-3">Gross Monthly (€)</th>
                    <th className="py-3.5 px-3">Monthly INR Equiv.</th>
                    <th className="py-3.5 px-3">Standard Perks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Structural 6G Welder (TIG/MIG)</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">VLS-TS Salarié</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">€2,400 – €3,200</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹2.16L – ₹2.88L</td>
                    <td className="py-3 px-3 text-slate-500">Overtime + RTT + PPE allowance</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Tower Crane Operator (Grutier)</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">VLS-TS Salarié</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">€2,600 – €3,500</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹2.34L – ₹3.15L</td>
                    <td className="py-3 px-3 text-slate-500">Hazard bonus + site food vouchers</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Chef de Partie / Speciality Cook</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">VLS-TS Salarié</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">€2,200 – €3,000</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹1.98L – ₹2.70L</td>
                    <td className="py-3 px-3 text-slate-500">Free duty meals + tips sharing</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Industrial Maintenance Electrician</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">VLS-TS Salarié</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">€2,300 – €3,100</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹2.07L – ₹2.79L</td>
                    <td className="py-3 px-3 text-slate-500">Tool allowance + shift premiums</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">DevOps &amp; Cloud Engineer</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-teal-50 text-teal-800 font-bold text-[10px]">Passeport Talent</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">€4,200 – €6,500</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹3.78L – ₹5.85L</td>
                    <td className="py-3 px-3 text-slate-500">Hybrid work + 4-Year residence permit</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Full-Stack Software Developer</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-teal-50 text-teal-800 font-bold text-[10px]">Passeport Talent</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">€3,800 – €5,800</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹3.42L – ₹5.22L</td>
                    <td className="py-3 px-3 text-slate-500">Spouse work permit + meal vouchers</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">CNC Lathe &amp; Milling Machinist</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">VLS-TS Salarié</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">€2,100 – €2,800</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹1.89L – ₹2.52L</td>
                    <td className="py-3 px-3 text-slate-500">Production incentive + RTT days</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Warehouse Forklift Operator (CACES)</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">VLS-TS Salarié</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">€1,850 – €2,300</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹1.66L – ₹2.07L</td>
                    <td className="py-3 px-3 text-slate-500">Night shift bonus + transport subsidy</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Hotel Housekeeping Supervisor</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">VLS-TS Salarié</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">€1,950 – €2,500</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹1.75L – ₹2.25L</td>
                    <td className="py-3 px-3 text-slate-500">Hotel chain discount + uniform cleaned</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Registered Nurse / Care Specialist</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">VLS-TS Salarié</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">€2,500 – €3,400</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹2.25L – ₹3.06L</td>
                    <td className="py-3 px-3 text-slate-500">Healthcare pension + 13th month bonus</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Seasonal Vineyard / Agri-Packer</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-bold text-[10px]">Saisonnier</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">€1,767 – €2,100</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹1.59L – ₹1.89L</td>
                    <td className="py-3 px-3 text-slate-500">On-site shared housing + harvest meals</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Aerospace Structural Engineer</td>
                    <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-teal-50 text-teal-800 font-bold text-[10px]">Passeport Talent</span></td>
                    <td className="py-3 px-3 font-semibold text-slate-900">€4,500 – €7,000</td>
                    <td className="py-3 px-3 font-semibold text-emerald-700">₹4.05L – ₹6.30L</td>
                    <td className="py-3 px-3 text-slate-500">Airbus supplier ecosystem + relocation grant</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 5: The 6-Stage End-to-End Pipeline ── */}
          <section id="step-by-step" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaFileContract className="w-3.5 h-3.5 text-emerald-600" />
              Section 5: Operational Deployment Pipeline
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The Complete 6-Stage France Work Visa Pipeline (India to Landing)
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every legal employment placement in France follows a strict, sequential legal protocol. Here is the exact roadmap managed by WorkWise Visa in collaboration with certified French employers:
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Step 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    01
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Offer &amp; Contract
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Employer Contracting (CDI/CDD)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Execute a legally binding French employment contract citing the company&apos;s SIRET identifier, Convention Collective category, minimum 35 weekly hours, and wages meeting or surpassing the legal SMIC.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    02
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    DREETS Clearance
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">ANEF Work Permit Filing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The French employer applies for the <em>Autorisation de Travail</em> directly through the digital ANEF platform. If the trade is on the <em>Métiers en Tension</em> list, the 3-week local job advertisement is fully waived.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    03
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    MEA Apostille
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Sworn French Translations</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Indian civil documents—including MEA Apostilled Police Clearance (PCC), educational degrees, and birth certificates—are translated into French by a certified sworn translator (<em>Traducteur Assermenté</em>).
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    04
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    VFS Biometrics
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">France-Visas &amp; Consular Stamping</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Register on France-Visas, pay the €99 long-stay fee, and submit physical biometrics at VFS Global (New Delhi, Mumbai, Bengaluru, Kolkata, Chennai, etc.). Consular passport stamping takes 15 to 25 working days.
                </p>
              </div>

              {/* Step 5 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    05
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Deployment
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Flight &amp; DPAE Registration</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fly to France. Before your first day on site, your employer submits the <strong>DPAE</strong> with URSSAF, initiating your official French state social security, accident coverage, and payroll enrollment.
                </p>
              </div>

              {/* Step 6 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold font-display text-sm shadow-md shadow-emerald-600/30">
                    06
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Post-Arrival
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">OFII Validation &amp; Signing CIR</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Validate the VLS-TS online within 90 days, pay the residence tax (€200–€225), complete the OFII medical check, and sign the Contrat d&apos;Intégration Républicaine (CIR) for free civic training and French language lessons.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 6: VFS India Document Checklist ── */}
          <section id="documents" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaBuilding className="w-3.5 h-3.5 text-emerald-600" />
              Section 6: VFS India Deployment Guide
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              VFS Global France Centers in India: Documentation Checklist &amp; Biometrics
            </h2>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-900 text-sm">
                Mandatory Dossier Checklist for VFS France (VLS-TS Salarié &amp; Passeport Talent):
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Valid Original Passport:</strong> Minimum 15 months validity with at least 3 blank pages.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>DREETS Autorisation de Travail:</strong> Verified digital certificate with barcode.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Signed Employment Contract (CDI/CDD):</strong> Showing salary, job title, and 35-hour week.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>France-Visas Form &amp; Receipt:</strong> Duly completed, signed, and dated.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>MEA Apostilled Police Clearance (PCC):</strong> Issued by Regional Passport Office within 3 months.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Sworn French Translations:</strong> Degrees, diplomas, and experience letters translated into French.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Proof of Temporary Accommodation:</strong> Hotel booking, lease, or employer attestation d&apos;hébergement.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Passport Photos (ICAO Standard):</strong> 35mm x 45mm, white background, neutral expression.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-600">
                <span className="text-slate-400">Authorized VFS France Centers in India:</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">New Delhi</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">Mumbai</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">Bengaluru</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">Kolkata</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">Chennai</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">Hyderabad</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">Ahmedabad</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">Pune</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">Kochi</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">Jalandhar</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">Chandigarh</span>
              </div>
            </div>
          </section>

          {/* ── Section 7: OFII & CIR Integration Protocol ── */}
          <section id="ofii-integration" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaCertificate className="w-3.5 h-3.5 text-emerald-600" />
              Section 7: Post-Arrival Legalization
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The OFII Validation &amp; Contrat d&apos;Intégration Républicaine (CIR) Playbook
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Arriving in France with a <strong>VLS-TS sticker</strong> in your passport does not complete your legal regularization. Under Article L421-1 of the CESEDA, your visa is only legally finalized once validated online with <strong>OFII (Office Français de l&apos;Immigration et de l&apos;Intégration)</strong> within 90 calendar days of crossing the French border.
              </p>
              <p>
                Failure to validate within 3 months renders your legal presence invalid, suspends your right to travel across the Schengen Area, and bars your employer from maintaining your payroll. The procedure is executed entirely online via the ANEF/OFII portal.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs">
                <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <FaMoneyBillWave className="w-4 h-4 text-emerald-600" />
                  1. Taxe de Séjour &amp; Fiscal Stamp
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  You must purchase an electronic fiscal stamp (<em>timbre fiscal électronique</em>) on <code>timbres.impots.gouv.fr</code>. For a standard VLS-TS Salarié, the fee is approximately <strong>€200 to €225</strong>. Once entered, the portal generates an official PDF confirmation document (<em>Attestation de validation du VLS-TS</em>).
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs">
                <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <FaStethoscope className="w-4 h-4 text-emerald-600" />
                  2. Mandatory Medical Check (Visite Médicale)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  OFII summons you to their departmental office for a mandatory physical check, chest X-ray screening (tuberculosis detection), and vaccination status verification. Upon clearance, you receive an official medical clearance certificate (<em>Certificat médical de l&apos;OFII</em>).
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs">
                <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <FaLanguage className="w-4 h-4 text-emerald-600" />
                  3. Signing the CIR (Republican Contract)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  You sign the <strong>Contrat d&apos;Intégration Républicaine</strong>. If your French language proficiency is below CEFR level A1, OFII assigns you up to <strong>600 hours of free, state-funded French language classes</strong>, ensuring your integration into the community.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs">
                <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <FaBuildingColumns className="w-4 h-4 text-emerald-600" />
                  4. Four Civic Training Days (Formation Civique)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Attendance at 4 full-day workshops covering French history, secularism (<em>laïcité</em>), French constitutional values, and day-to-day administrative life is compulsory. Completing all 4 days is required to renew your residency permit.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 8: Healthcare & Mandatory Mutuelle ── */}
          <section id="health-insurance" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaHospital className="w-3.5 h-3.5 text-emerald-600" />
              Section 8: Universal Healthcare Protection
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The French Healthcare System: PUMA, Carte Vitale &amp; Employer Mutuelle
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                France possesses one of the world&apos;s most comprehensive universal healthcare architectures, recognized by the World Health Organization (WHO). Through <strong>PUMA (Protection Universelle Maladie)</strong>, every person working legally in France is entitled to medical coverage regardless of nationality.
              </p>
              <p>
                Healthcare operates through a highly effective two-tier reimbursement structure:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong>Tier 1 — Sécurité Sociale (l&apos;Assurance Maladie):</strong> Covers approximately <strong>70% of standard doctor consultations</strong>, 80% to 100% of major surgical hospitalizations, and 15% to 100% of prescription medications listed in the national pharmacopoeia. You access this via your green <em>Carte Vitale</em> chip card.
                </li>
                <li>
                  <strong>Tier 2 — Mutuelle d&apos;Entreprise (Complementary Health Insurance):</strong> By law (the ANI law), every private sector employer in France must provide collective private top-up health insurance and <strong>must fund at least 50% of the monthly premium</strong> on behalf of the employee. This covers the remaining 30% co-pay, dental care, eyeglasses, and private hospital rooms.
                </li>
              </ul>
            </div>
          </section>

          {/* ── Section 9: Housing & Cost of Living ── */}
          <section id="living-costs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaHouseUser className="w-3.5 h-3.5 text-emerald-600" />
              Section 9: Living Costs &amp; Housing Subsidies
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Cost of Living in France: Paris vs Regional Cities &amp; CAF Housing Subsidies
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Living costs in France vary substantially depending on whether you are stationed in the Paris metropolitan region (Île-de-France) or in dynamic regional hubs such as Lyon, Toulouse, Marseille, Lille, or Nantes. Indian candidates often achieve far higher monthly savings in regional industrial zones where rents are 50% lower.
            </p>

            {/* Comparative Table: Paris vs Regional Hub */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-display text-[11px] sm:text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Expense Category</th>
                    <th className="py-3 px-3">Paris / Île-de-France</th>
                    <th className="py-3 px-3">Lyon / Toulouse / Lille</th>
                    <th className="py-3 px-3">Statutory Subsidies / Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">Studio / 1-BHK Apartment Rent</td>
                    <td className="py-3 px-3 text-amber-700 font-semibold">€850 – €1,300/mo</td>
                    <td className="py-3 px-3 text-emerald-700 font-semibold">€500 – €750/mo</td>
                    <td className="py-3 px-3 text-slate-500">Eligible for CAF APL subsidy (~€150–€300/mo)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">Monthly Public Transit Pass</td>
                    <td className="py-3 px-3 font-semibold">€86.40/mo (Navigo)</td>
                    <td className="py-3 px-3 font-semibold">€55 – €68/mo</td>
                    <td className="py-3 px-3 text-emerald-700 font-semibold">50% reimbursed by employer by law</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">Groceries &amp; Food (Monthly)</td>
                    <td className="py-3 px-3 font-semibold">€250 – €350/mo</td>
                    <td className="py-3 px-3 font-semibold">€200 – €280/mo</td>
                    <td className="py-3 px-3 text-slate-500">Lidl, Carrefour, Leclerc, Indian grocers</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">Utilities (Electricity, Gas, Water)</td>
                    <td className="py-3 px-3 font-semibold">€90 – €140/mo</td>
                    <td className="py-3 px-3 font-semibold">€75 – €120/mo</td>
                    <td className="py-3 px-3 text-slate-500">Shared in flatshares (Colocation)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">Mobile + High-Speed Fiber Internet</td>
                    <td className="py-3 px-3 font-semibold">€35 – €50/mo</td>
                    <td className="py-3 px-3 font-semibold">€35 – €50/mo</td>
                    <td className="py-3 px-3 text-slate-500">Free, Orange, SFR, Bouygues Telecom</td>
                  </tr>
                  <tr className="bg-emerald-50/60 font-bold">
                    <td className="py-3 px-4 text-emerald-950">Estimated Monthly Savings Potential</td>
                    <td className="py-3 px-3 text-emerald-800">€700 – €1,500/mo (₹63k–₹1.35L)</td>
                    <td className="py-3 px-3 text-emerald-800">€900 – €2,000/mo (₹81k–₹1.80L)</td>
                    <td className="py-3 px-3 text-emerald-800">Higher savings in regional trades</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CAF APL Housing Grant Box */}
            <div className="rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-6 space-y-2 text-xs sm:text-sm text-slate-700">
              <h3 className="font-bold text-emerald-950 flex items-center gap-2">
                <FaCircleCheck className="w-4 h-4 text-emerald-600" />
                CAF Housing Assistance (APL - Aide Personnalisée au Logement)
              </h3>
              <p>
                All foreign employees holding a validated VLS-TS or Carte de Séjour are legally entitled to apply for monthly rent subsidies from the French state through <strong>CAF (Caisse d&apos;Allocations Familiales)</strong>. Depending on your base SMIC income, lease costs, and city location, CAF can reimburse <strong>€150 to €350 directly to your bank account or landlord every month</strong>, substantially lowering your out-of-pocket living expenses.
              </p>
            </div>
          </section>

          {/* ── Section 10: Permanent Residency & Citizenship ── */}
          <section id="settlement" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaGraduationCap className="w-3.5 h-3.5 text-emerald-600" />
              Section 10: Settlement &amp; Citizenship Pathways
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Permanent Residency (Carte de Résident 10 Ans) &amp; French Citizenship
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                One of the greatest strategic advantages of migrating to France through legal employment is the straightforward statutory pathway to long-term settlement and European Union citizenship:
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  At Year 5 of Legal Residence
                </span>
                <h3 className="font-bold text-slate-900 text-lg mt-3 mb-2">
                  Carte de Résident de Longue Durée-UE (10 Years)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  After 5 continuous years on renewable residence permits (such as VLS-TS Salarié or Passeport Talent), workers who demonstrate stable and regular financial resources (at least equivalent to the SMIC), clear tax compliance records, and CEFR A2/B1 French language proficiency are entitled to the <strong>10-Year Renewable EU Long-Term Resident Card</strong>.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                  At Year 5 (or Year 2 for Master&apos;s Grads)
                </span>
                <h3 className="font-bold text-slate-900 text-lg mt-3 mb-2">
                  Naturalization as a French Citizen (EU Passport)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Under the French Civil Code, foreign workers who have completed 5 years of legal residence (reduced to just <strong>2 years</strong> for graduates holding a master&apos;s degree from a recognized French university or Grande École) may apply for French naturalization. Prerequisites include passing the B1/B2 French exam, a clean police record, and passing the civic assimilation interview.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 11: Anti-Fraud Advisory ── */}
          <section id="fraud-prevention" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-800">
              <FaBan className="w-3.5 h-3.5 text-red-600" />
              Section 11: Fraud Prevention &amp; Scam Advisory
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              France Work Visa Scam Warnings: Recognizing Fraudulent Job Offers
            </h2>

            <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <FaTriangleExclamation className="w-6 h-6 text-red-600 shrink-0" />
                <h3 className="font-bold text-red-950 text-base sm:text-lg">
                  Critical Red Flags Warned by the French Embassy in New Delhi:
                </h3>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-600 font-bold">✕</span>
                  <span>
                    <strong>Tourist Visa to Work Permit Scams:</strong> Unscrupulous agents claim they can send you on a Schengen tourist visa and &quot;convert&quot; it into a work visa inside France. <em>This is strictly illegal under French law.</em> Work visas must be stamped in your home country at VFS Global prior to travel.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-600 font-bold">✕</span>
                  <span>
                    <strong>Fake DREETS Work Authorizations:</strong> Genuine work authorizations are generated on the official Ministry portal (<code>interieur.gouv.fr</code>) and contain a verifiable digital barcode. Never pay for unauthorized &quot;offer letters&quot; typed on forged letterheads.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-600 font-bold">✕</span>
                  <span>
                    <strong>Employer Visa Charges:</strong> Under French labor regulations, employers are strictly prohibited from demanding that the employee reimburse the employer&apos;s administrative hiring taxes.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-600 font-bold">✕</span>
                  <span>
                    <strong>Unregulated Third-Party Agents:</strong> WorkWise Visa only partners with verified French corporate entities holding active SIRET business registration records.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* ── Section 12: Exhaustive FAQs Accordion ── */}
          <section id="faqs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaBriefcase className="w-3.5 h-3.5 text-emerald-600" />
              Section 12: Comprehensive Frequently Asked Questions (FAQs)
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Answering Every Critical Search Intent Query for Indian Job Seekers
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Direct, authoritative answers addressing the most frequently searched queries by Indian candidates regarding French employment:
            </p>

            <div className="grid gap-4">
              {faqSchema.mainEntity.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400/80 transition-all space-y-2"
                >
                  <h3 className="font-display font-bold text-slate-900 text-base flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                      {index + 1}
                    </span>
                    <span>{faq.name}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-9">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 13: Bottom Strategic CTA Banner ── */}
          <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white p-8 sm:p-12 shadow-xl border border-emerald-900/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300">
                <FaAward className="w-3.5 h-3.5 text-emerald-400" />
                WorkWise Visa Global Deployment Desk
              </span>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white leading-tight">
                Ready to Migrate to France with Verified DREETS Work Authorization?
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Speak directly with our senior European immigration advisors. We evaluate your resume, match you with verified French employers under the <em>Métiers en Tension</em> list or <em>Passeport Talent</em>, manage your sworn translations, and guide you through VFS India submission with zero scam risk.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20want%20to%20apply%20for%20a%20France%20work%20permit%20and%20job%20placement!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 transition-all cursor-pointer"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 81301 61603)</span>
                </a>

                <a
                  href="mailto:workwisevisa@gmail.com?subject=France%20Work%20Visa%20Application%20Inquiry"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all backdrop-blur-md"
                >
                  <FaEnvelope className="w-4 h-4 text-emerald-300" />
                  <span>Email Resume for France Review</span>
                </a>
              </div>
            </div>
          </section>

        </div>

        <FloatingWhatsApp />
      </main>

      <Footer />
    </>
  );
}
