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
  FaUserNurse,
  FaIndustry,
  FaGear,
  FaCar,
  FaTruckFast,
  FaAward,
} from "react-icons/fa6";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.workwisevisa.com";

export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Germany Work Visa & Jobs Guide 2026: Opportunity Card & EU Blue Card | WorkWise Visa",
  description:
    "Complete 2026 Germany work visa guide for Indian workers. Explore Opportunity Card (Chancenkarte), EU Blue Card, Skilled Immigration Act (FEG), Euro salary scales, and VFS visa stamping.",
  keywords: [
    "Germany work visa 2026",
    "Opportunity Card Germany Chancenkarte",
    "EU Blue Card Germany salary threshold 2026",
    "Germany skilled worker visa for Indian",
    "Germany vocational jobs CNC welder mechanic",
    "Germany nurse recruitment Pflegefachkraft",
    "ZAB statement of comparability India",
    "Anerkennung in Deutschland trade recognition",
    "Germany minimum wage Mindestlohn 2026",
    "VFS Germany visa appointment India",
    "Germany blocked account Sperrkonto 2026",
    "German citizenship 5 year rule PR",
    "WorkWise Visa Germany jobs",
    "Make it in Germany official portal",
    "Ausbildung vocational training Germany Indian candidates",
  ],
  alternates: {
    canonical: `${BASE_URL}/countries/germany`,
  },
  openGraph: {
    title: "Germany Work Visa & Jobs Guide 2026: Opportunity Card & EU Blue Card | WorkWise Visa",
    description:
      "Complete 2026 Germany work visa guide for Indian skilled technicians, welders, nurses & engineers. Learn Chancenkarte points, EU Blue Card salaries, ZAB recognition, and legal deployment.",
    url: `${BASE_URL}/countries/germany`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Germany Work Visa & Employment Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Germany Work Visa & Jobs Guide 2026: Opportunity Card & EU Blue Card | WorkWise Visa",
    description:
      "Complete 2026 Germany work visa guide. Explore Opportunity Card (Chancenkarte), EU Blue Card, Skilled Immigration Act (FEG), Euro salary scales, and VFS visa stamping.",
    images: ["https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function GermanyCountryPage() {
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
        name: "Germany",
        item: `${BASE_URL}/countries/germany`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Germany Work Visa & Skilled Employment Guide 2026: Opportunity Card, EU Blue Card, Salaries & VFS Filing",
    description:
      "Comprehensive statutory manual for Indian professionals, nurses, and certified vocational technicians seeking employment in Germany under the updated Skilled Immigration Act (Fachkräfteeinwanderungsgesetz).",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
    author: {
      "@type": "Organization",
      name: "WorkWise European Placement & Legal Consular Desk",
      url: `${BASE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "WorkWise Visa",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/workwise_logo.png`,
      },
    },
    datePublished: "2026-01-15T09:00:00+01:00",
    dateModified: "2026-10-14T00:00:00+01:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/countries/germany`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Germany Opportunity Card (Chancenkarte) and how do Indians qualify in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Opportunity Card (Chancenkarte) is a points-based job seeker residence permit under § 20a of the German Residence Act. Candidates need at least 6 points based on criteria like partial degree recognition (4 points), qualified trade/work experience (2 to 3 points), language skills (German A1–B2 or English B2, 1 to 3 points), age under 35 (2 points), and previous lawful stays in Germany. It grants 1 year of lawful stay with permission to work up to 20 hours per week in trial employment.",
        },
      },
      {
        "@type": "Question",
        name: "What is the 2026 EU Blue Card salary threshold for Germany?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the reformed Skilled Immigration Act, the EU Blue Card minimum gross annual salary threshold is approximately €41,041 for bottleneck shortage occupations (STEM fields, mathematics, civil/mechanical engineering, IT software, and healthcare). For standard professions, the threshold is approximately €45,300 per year. Blue Card holders can obtain German permanent residency (Niederlassungserlaubnis) after just 21 months with B1 German, or 27 months with basic A1 German.",
        },
      },
      {
        "@type": "Question",
        name: "Do blue-collar trade workers (welders, CNC machinists, electricians) need German language certificates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While multinational factories and industrial clusters in Baden-Württemberg and North Rhine-Westphalia operate with English or bilingual shopfloor supervisors, obtaining at least basic German (Goethe or telc A2/B1 level) is strongly recommended and often required for trade license recognition (Anerkennung) and smooth consular visa approval at VFS Global.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a Germany National Type-D Employment Visa take to process in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard processing through VFS Global and the German Missions in New Delhi, Mumbai, Bengaluru, Chennai, and Kolkata takes 6 to 10 weeks. However, if the German employer secures a fast-track pre-approval (Vorabzustimmung nach § 81a AufenthG) through the local Central Foreigners Authority (ZAB/Ausländerbehörde), visa processing can be expedited to 2 to 4 weeks.",
        },
      },
      {
        "@type": "Question",
        name: "What is ZAB Statement of Comparability and why is it mandatory?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Statement of Comparability (Zeugnisbewertung) is an official comparative evaluation issued by the Central Office for Foreign Education (ZAB) in Bonn. It verifies whether an Indian university degree (B.Tech, B.Sc, BCA, etc.) is comparable to a German higher education qualification on the Anabin database, which is mandatory for EU Blue Card and academic skilled worker visas.",
        },
      },
      {
        "@type": "Question",
        name: "What are the working hours and overtime laws in Germany?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the German Working Hours Act (Arbeitszeitgesetz - ArbZG), the standard working week is 35 to 40 hours (typically 8 hours per day). Overtime is strictly regulated, must be compensated with paid time off in lieu or overtime wage multipliers (typically 25% to 50% extra), and employees are entitled to a mandatory minimum of 24 to 30 paid annual leave days per year.",
        },
      },
      {
        "@type": "Question",
        name: "Can I bring my spouse and children to Germany on a work visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Spouses and minor children can accompany skilled workers under Family Reunion (Familienzusammenführung). For EU Blue Card holders and skilled specialists, spouses receive unrestricted, immediate work rights in Germany without requiring prior German language certificates before arrival.",
        },
      },
      {
        "@type": "Question",
        name: "How much can an Indian worker save in Germany after taxes and living expenses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skilled trade technicians earning €2,800 to €3,800 gross per month receive approximately €1,900 to €2,500 net (in hand). After standard living costs (shared room/apartment €500–€800, food €250, Deutschlandticket transit €49), candidates typically save €1,000 to €1,600 monthly (approx. ₹90,000 to ₹1,45,000 INR), while enjoying 100% free comprehensive public healthcare and child benefits (Kindergeld).",
        },
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

      <Navbar />

      <main className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
        {/* ── Hero Section ───────────────────────────────────── */}
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
              <span className="text-emerald-300 font-bold">Germany (Federal Republic of Germany)</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                {/* Government & Authority Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Official 2026 German Skilled Immigration Act (FEG) Gateway
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                  Germany Work Visa &amp; Jobs Guide{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                    2026
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  The definitive, legally verified roadmap for Indian professionals, nurses, CNC operators, welders, and technicians migrating to Germany. Explore the reformed{" "}
                  <strong className="font-bold text-white">Opportunity Card (Chancenkarte)</strong>,{" "}
                  <strong className="font-bold text-emerald-300">EU Blue Card salary thresholds</strong>,{" "}
                  <strong className="font-bold text-white">ZAB &amp; IHK FOSA qualification recognition</strong>, and guaranteed German statutory employment rights.
                </p>

                {/* Key Benefits Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaMoneyBillWave className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">€2,800–€4,500+</div>
                      <div className="text-[10px] text-slate-400">Monthly Trade Salary</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaCertificate className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Chancenkarte</div>
                      <div className="text-[10px] text-slate-400">Points-Based Entry</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaAward className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">EU Blue Card</div>
                      <div className="text-[10px] text-slate-400">Fast-Track 21-Mo PR</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaHospital className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Public Health Cover</div>
                      <div className="text-[10px] text-slate-400">TK / AOK Insurance</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaClock className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">35–40 Hr Workweek</div>
                      <div className="text-[10px] text-slate-400">30 Paid Vacation Days</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
                    <FaPlaneArrival className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">29 Schengen States</div>
                      <div className="text-[10px] text-slate-400">Visa-Free Travel</div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href="/jobs?country=Germany"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <FaBriefcase className="w-4 h-4" />
                    Browse Active Germany Vacancies
                  </Link>

                  <a
                    href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20am%20interested%20in%20Germany%20Opportunity%20Card%20and%20Skilled%20Work%20Visas!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/50 px-6 py-3.5 text-sm font-bold text-white transition-all shadow-md"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-300" />
                    WhatsApp Germany Desk
                  </a>

                  <Link
                    href="/track-application"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white underline underline-offset-4"
                  >
                    Track Existing Germany File <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Quick Country Snapshot Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3.5">
                      <img
                        src="https://flagcdn.com/w160/de.png"
                        alt="Germany Flag"
                        className="h-10 w-14 object-cover rounded-xl shadow-md border border-white/25 shrink-0"
                      />
                      <div>
                        <h2 className="text-xl font-display font-extrabold text-white">Federal Republic of Germany</h2>
                        <p className="text-xs text-emerald-300 font-medium">Berlin • Munich • Frankfurt • Stuttgart</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-xs font-black text-emerald-300">
                      EU LEADER
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs text-slate-200">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Immigration Authority:</span>
                      <span className="font-bold text-white">BAMF &amp; Auswärtiges Amt (German Missions)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Core Pathways:</span>
                      <span className="font-bold text-emerald-300">Opportunity Card / Blue Card / FEG § 18a/b</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Degree Recognition:</span>
                      <span className="font-bold text-white">ZAB Statement &amp; Anerkennung Portal</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Statutory Minimum Wage:</span>
                      <span className="font-bold text-amber-300">€12.82 – €13.50/hr (Mindestlohn)</span>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Average Monthly Trade Pay:</span>
                      <span className="font-bold text-emerald-300">€2,800 – €4,200 (₹2.5L – ₹3.8L INR)</span>
                    </div>

                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400 font-medium">Permanent Residency (PR):</span>
                      <span className="font-bold text-emerald-300">21 Months (Blue Card) / 3 Yrs (FEG)</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-900/40 border border-emerald-500/30 p-4 text-center">
                    <p className="text-xs font-medium text-emerald-200 mb-2">
                      Ready to start your German career as a welder, machinist, nurse, or engineer?
                    </p>
                    <a
                      href="mailto:workwisevisa@gmail.com?subject=Germany%20Job%20Application&body=Hello%20WorkWise%20Visa%20Team,%0A%0AI%20am%20applying%20for%20Germany%20Work%20Visa%20/%20Opportunity%20Card.%0A%0AFull%20Name:%0APhone%20Number:%0ATrade/Designation:%0APassport%20Number:%0AGerman%20Language%20Level%20(None/A1/A2/B1/B2):%0AExperience%20(Years):"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-900 hover:bg-slate-100 transition-colors shadow-sm"
                    >
                      <FaEnvelope className="w-3.5 h-3.5 text-emerald-600" />
                      Submit Profile for Germany Evaluation
                    </a>
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
              Germany Comprehensive Guide Directory:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#overview" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                1. 2026 Labor Deficit &amp; FEG
              </a>
              <a href="#visa-types" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                2. Visa Types: Chancenkarte &amp; Blue Card
              </a>
              <a href="#step-by-step" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                3. 6-Stage Deployment Pipeline
              </a>
              <a href="#salary-matrix" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                4. 2026 Euro Salary Matrix
              </a>
              <a href="#trade-careers" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                5. Key Industrial Trade Sectors
              </a>
              <a href="#documents" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                6. ZAB &amp; Consular Checklist
              </a>
              <a href="#labour-law" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                7. German Worker Rights &amp; Social Security
              </a>
              <a href="#living-costs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                8. Cost of Living &amp; Net INR Savings
              </a>
              <a href="#faqs" className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                9. Detailed FAQs (8+)
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
              Section 1: Country Overview &amp; The 400,000+ Annual Labor Deficit
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              The German Labor Market in 2026: Why Europe’s Industrial Engine Needs Indian Workers
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                As Europe’s largest industrial powerhouse, the <strong>Federal Republic of Germany</strong> faces a profound demographic transition. With over 400,000 skilled workers retiring annually without domestic replacements, the German Federal Government enacted the landmark{" "}
                <a
                  href="https://www.make-it-in-germany.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Skilled Immigration Act (Fachkräfteeinwanderungsgesetz - FEG)
                </a>
                , fundamentally dismantling historical immigration barriers for qualified international workers outside the European Union.
              </p>
              <p>
                From advanced automotive plants in Bavaria and Baden-Württemberg (BMW, Mercedes-Benz, Porsche) to heavy engineering hubs in North Rhine-Westphalia and semiconductor manufacturing corridors in Saxony, demand has expanded far beyond traditional university graduates. Certified CNC machinists, TIG/MIG industrial welders, mechatronics technicians, automotive mechanics, commercial drivers, registered nurses, and caregivers are urgently recruited under fast-tracked government quotas.
              </p>
              <p>
                Unlike informal foreign placement arrangements, German employment is strictly regulated by the{" "}
                <a
                  href="https://www.arbeitsagentur.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Federal Employment Agency (Bundesagentur für Arbeit - BA)
                </a>{" "}
                and the{" "}
                <a
                  href="https://www.bamf.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Federal Office for Migration and Refugees (BAMF)
                </a>
                . Every candidate receives a binding, legally enforceable German contract, mandatory statutory health insurance coverage, standard 35 to 40-hour workweeks, and a direct statutory pathway to permanent European settlement (<em>Niederlassungserlaubnis</em>).
              </p>
            </div>

            {/* Statutory Pillars Grid */}
            <div className="grid md:grid-cols-3 gap-6 pt-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <FaScaleUnbalanced className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">Skilled Immigration Act (FEG)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Removes labor market priority testing (Vorrangprüfung) in shortage trades. Allows candidates with recognized vocational degrees or 2+ years of verified industry experience to obtain direct work permits.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                  <FaAward className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">Lowered EU Blue Card Bars</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Salary thresholds slashed to approx. €41,041/year for bottleneck trades and IT specialists. Permanent residency achievable in just 21 months with B1 German or 27 months with basic A1.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                  <FaBuildingColumns className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">Reformed Citizenship (StAG)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Under the updated German Nationality Act, legal residents can apply for German naturalization after just 5 years of lawful stay (reduced from 8 years), with dual citizenship fully permitted.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 2: German Visa Categories ──────────────── */}
          <section id="visa-types" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaPassport className="w-3.5 h-3.5 text-emerald-600" />
              Section 2: Primary German Work Visa Categories &amp; Pathways
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Which German Work Permit Pathway Fits Your Profile?
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed">
              Depending on your educational background, practical trade experience, and language skills, WorkWise Visa guides candidates through 4 established statutory entry routes:
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              {/* Pathway 1: Opportunity Card */}
              <div className="rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-white via-emerald-50/20 to-white p-6 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 px-3 py-1 text-xs font-bold">
                    § 20a AufenthG
                  </span>
                  <span className="text-xs font-bold text-slate-500">Points-Based Job Seeker</span>
                </div>

                <h3 className="font-display font-extrabold text-slate-900 text-xl">
                  Opportunity Card (Chancenkarte)
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Allows qualified foreign professionals to enter Germany for up to <strong>1 year</strong> to seek skilled employment. You must achieve at least <strong>6 points</strong> in the statutory points grid:
                </p>

                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Partial Equivalence (4 Points):</strong> Recognition of foreign diploma by IHK FOSA or ZAB.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Work Experience (2–3 Points):</strong> 2 to 5 years verified experience in your field within last 7 years.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Language Skills (1–3 Points):</strong> German A2/B1/B2 or English C1 verified by accredited certificates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Age Benchmark (1–2 Points):</strong> Under 35 years (2 points) or between 35–40 years (1 point).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Trial Work Permission:</strong> Work up to 20 hours/week in part-time jobs or 2-week trial employment.</span>
                  </li>
                </ul>
              </div>

              {/* Pathway 2: EU Blue Card */}
              <div className="rounded-3xl border border-teal-200/80 bg-gradient-to-br from-white via-teal-50/20 to-white p-6 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-teal-100 text-teal-800 border border-teal-300 px-3 py-1 text-xs font-bold">
                    § 18g AufenthG
                  </span>
                  <span className="text-xs font-bold text-slate-500">Accelerated European PR</span>
                </div>

                <h3 className="font-display font-extrabold text-slate-900 text-xl">
                  EU Blue Card (Blaue Karte EU)
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The gold standard for graduates, engineers, IT professionals, and healthcare specialists with a binding employment contract:
                </p>

                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Shortage Occupations Salary:</strong> €41,041 gross/year for IT specialists, STEM engineers, mathematics, and doctors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Standard Occupations Salary:</strong> Approximately €45,300 gross/year across all commercial sectors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Fastest PR in Europe:</strong> Permanent residency (Niederlassungserlaubnis) in just 21 months with B1 German or 27 months with A1.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Immediate Spousal Work Rights:</strong> Spouses can work in Germany immediately without prior German language exam.</span>
                  </li>
                </ul>
              </div>

              {/* Pathway 3: Skilled Worker with Vocational Training */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-slate-100 text-slate-800 border border-slate-300 px-3 py-1 text-xs font-bold">
                    § 18a / § 18b AufenthG
                  </span>
                  <span className="text-xs font-bold text-slate-500">Certified Trade Technicians</span>
                </div>

                <h3 className="font-display font-extrabold text-slate-900 text-xl">
                  Skilled Vocational Worker Visa (Fachkraft)
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tailored for certified trade technicians (welders, CNC machinists, heavy mechanics, electricians) holding recognized vocational diplomas:
                </p>

                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Recognition Partnership (Anerkennungspartnerschaft):</strong> Enter Germany while your foreign trade diploma recognition is finalized on-site.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Binding Employer Contract:</strong> Contract matching German statutory minimum wage and regional trade wage standards (Tariflohn).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Fast-Track Procedure (§ 81a):</strong> Employers can file for expedited consular processing in 2 to 4 weeks.</span>
                  </li>
                </ul>
              </div>

              {/* Pathway 4: Healthcare & Nursing Specialists */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-amber-100 text-amber-800 border border-amber-300 px-3 py-1 text-xs font-bold">
                    § 16d / § 18a AufenthG
                  </span>
                  <span className="text-xs font-bold text-slate-500">Nurses &amp; Caregivers</span>
                </div>

                <h3 className="font-display font-extrabold text-slate-900 text-xl">
                  Nursing &amp; Healthcare Fast-Track (Pflegefachkraft)
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Designed for Indian GNM &amp; B.Sc Nursing graduates entering German hospitals, clinics, and eldercare facilities:
                </p>

                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Hospital Sponsorship:</strong> German hospitals sponsor language classes, flight tickets, and adaptation coursework.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Language Milestone:</strong> B1 German for visa entry, progressing to B2 Medical German during paid adaptation (Anpassungslehrgang).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Registered Nurse Pay:</strong> Starting from €3,200 to €4,400+ gross/month upon full licensing (Approbation/Urkunde).</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── Section 3: 6-Stage Deployment Pipeline ─────────── */}
          <section id="step-by-step" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaGear className="w-3.5 h-3.5 text-emerald-600" />
              Section 3: The 6-Stage Legal German Deployment Pipeline
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              From Profile Assessment in India to Landing in Germany
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed">
              Every candidate deployed through WorkWise Visa follows a strict, legally audited sequential pipeline adhering to the German Residence Act and consular regulations:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden">
                <span className="text-4xl font-display font-black text-slate-100 absolute top-4 right-4 select-none">
                  01
                </span>
                <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
                  1
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Credential Audit &amp; ZAB Recognition
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We audit your trade diploma, ITI certificate, or university degree through the <strong>Anabin Database</strong> and submit for official <strong>ZAB Statement of Comparability</strong> or <strong>IHK FOSA Defizitbescheid</strong>.
                </p>
                <div className="text-[11px] font-semibold text-emerald-700">Timeline: 2–4 Weeks</div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden">
                <span className="text-4xl font-display font-black text-slate-100 absolute top-4 right-4 select-none">
                  02
                </span>
                <div className="h-10 w-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 font-bold">
                  2
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  German Language Training &amp; Testing
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Structured coaching for <strong>Goethe-Zertifikat</strong> or <strong>telc Deutsch</strong> (A1, A2, or B1). We coordinate official testing slots to ensure verified consular language certificates.
                </p>
                <div className="text-[11px] font-semibold text-teal-700">Timeline: 4–10 Weeks</div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden">
                <span className="text-4xl font-display font-black text-slate-100 absolute top-4 right-4 select-none">
                  03
                </span>
                <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
                  3
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Employer Match &amp; BA Approval
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Technical interview with verified German corporate employers. Upon selection, the enterprise secures <strong>Federal Employment Agency (BA) Vorabzustimmung</strong> pre-approval.
                </p>
                <div className="text-[11px] font-semibold text-emerald-700">Timeline: 3–6 Weeks</div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden">
                <span className="text-4xl font-display font-black text-slate-100 absolute top-4 right-4 select-none">
                  04
                </span>
                <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 font-bold">
                  4
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Dossier Compilation &amp; MEA Apostille
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Assembly of the consular filing dossier: Hague Apostilled Indian PCC, signed <em>Erklärung zum Beschäftigungsverhältnis</em>, incoming health insurance, and blocked account (if applicable).
                </p>
                <div className="text-[11px] font-semibold text-amber-700">Timeline: 1–2 Weeks</div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden">
                <span className="text-4xl font-display font-black text-slate-100 absolute top-4 right-4 select-none">
                  05
                </span>
                <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
                  5
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  VFS Global Biometrics &amp; Type-D Visa
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Submission at VFS German Visa Application Centers (Delhi, Mumbai, Bengaluru, Chennai, Kolkata). Biometric fingerprinting, consular review, and <strong>National Type-D Visa</strong> sticker affixation.
                </p>
                <div className="text-[11px] font-semibold text-emerald-700">Timeline: 2–6 Weeks</div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden">
                <span className="text-4xl font-display font-black text-slate-100 absolute top-4 right-4 select-none">
                  06
                </span>
                <div className="h-10 w-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 font-bold">
                  6
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  German Landing, Anmeldung &amp; PR Track
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Airport reception, city registration (<em>Anmeldung</em> at Bürgeramt), German Tax ID generation, statutory TK/AOK health card issuance, and in-country residence permit card (<em>Aufenthaltstitel</em>).
                </p>
                <div className="text-[11px] font-semibold text-teal-700">Timeline: 1–2 Weeks post-landing</div>
              </div>
            </div>
          </section>

          {/* ── Section 4: 2026 Euro Salary Matrix ─────────────── */}
          <section id="salary-matrix" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaMoneyBillWave className="w-3.5 h-3.5 text-emerald-600" />
              Section 4: 2026 German Trade &amp; Professional Salary Benchmark Table
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              German Wages in Euros &amp; Indian Rupee Equivalents (2026 Baseline)
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed">
              All legal employment contracts in Germany must strictly comply with the national statutory minimum wage (<em>Mindestlohn</em>) and regional collective bargaining agreements (<em>Tarifverträge</em>). Below are authentic gross and net salary benchmarks:
            </p>

            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider font-display">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Vocational / Professional Trade</th>
                    <th className="py-4 px-4 sm:px-6">Gross Monthly (EUR)</th>
                    <th className="py-4 px-4 sm:px-6">Approx. INR Equivalent*</th>
                    <th className="py-4 px-4 sm:px-6">Min. Language &amp; Credential</th>
                    <th className="py-4 px-4 sm:px-6">Standard Contract Inclusions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-emerald-50/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      CNC Machine Operator / Milling Machinist
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-700">
                      €2,800 – €3,800
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      ₹2,55,000 – ₹3,45,000
                    </td>
                    <td className="py-3.5 px-4 sm:px-6">
                      ITI / Diploma + German A2/B1
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">
                      Shift allowance, 30 vacation days, public health insurance
                    </td>
                  </tr>

                  <tr className="hover:bg-emerald-50/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      6G TIG / MIG Industrial Welder (Piping &amp; Pressure)
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-700">
                      €2,700 – €3,700
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      ₹2,45,000 – ₹3,35,000
                    </td>
                    <td className="py-3.5 px-4 sm:px-6">
                      EN ISO 9606 Certificate + German A1/A2
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">
                      PPE gear provided, overtime 1.25x, pension contributions
                    </td>
                  </tr>

                  <tr className="hover:bg-emerald-50/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Automotive Mechanic &amp; Mechatronics Technician
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-700">
                      €3,000 – €4,200
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      ₹2,72,000 – ₹3,80,000
                    </td>
                    <td className="py-3.5 px-4 sm:px-6">
                      Diploma Mech / Auto + German B1
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">
                      Tool allowance, corporate training, 37.5-hr week
                    </td>
                  </tr>

                  <tr className="hover:bg-emerald-50/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Industrial Building Electrician / Automation Tech
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-700">
                      €2,900 – €4,000
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      ₹2,63,000 – ₹3,63,000
                    </td>
                    <td className="py-3.5 px-4 sm:px-6">
                      ITI / Polytechnic + German A2/B1
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">
                      Site transit allowance, safety bonuses, sick pay
                    </td>
                  </tr>

                  <tr className="hover:bg-emerald-50/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Registered Nurse (Pflegefachkraft) - Hospital / Clinic
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-700">
                      €3,200 – €4,400+
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      ₹2,90,000 – ₹4,00,000+
                    </td>
                    <td className="py-3.5 px-4 sm:px-6">
                      B.Sc / GNM Nursing + German B1/B2
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">
                      Night shift bonuses (+25%), accommodation support, flight
                    </td>
                  </tr>

                  <tr className="hover:bg-emerald-50/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Heavy Commercial Trailer Driver (CE License / EU Code 95)
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-700">
                      €2,600 – €3,600
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      ₹2,36,000 – ₹3,27,000
                    </td>
                    <td className="py-3.5 px-4 sm:px-6">
                      Indian Heavy License + German Conversion + A1
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">
                      Tachograph driver card, per-diem allowance (Spesen)
                    </td>
                  </tr>

                  <tr className="hover:bg-emerald-50/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Warehouse Logistics Operator &amp; Forklift Specialist
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-700">
                      €2,300 – €3,100
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      ₹2,09,000 – ₹2,82,000
                    </td>
                    <td className="py-3.5 px-4 sm:px-6">
                      10th/12th + Forklift License + German A1
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">
                      Climate-controlled logistics centers, meal vouchers
                    </td>
                  </tr>

                  <tr className="hover:bg-emerald-50/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      Specialty Chef / Asian &amp; Continental Cook
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-700">
                      €2,400 – €3,400
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      ₹2,18,000 – ₹3,09,000
                    </td>
                    <td className="py-3.5 px-4 sm:px-6">
                      Culinary Certification + German A1
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[11px] text-slate-500">
                      Duty meals, kitchen uniform laundry, tip sharing
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-slate-500 italic">
              * Reference Conversion Rate: 1 Euro (€) ≈ ₹91.00 INR (2026 indicative forex baseline). Net pay after German statutory deductions (Lohnsteuer + Social Security ~32% to 38%) typically ranges between €1,750 to €2,750 net/month for trade professionals.
            </p>
          </section>

          {/* ── Section 5: Master Consular Checklist ───────────── */}
          <section id="documents" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaGraduationCap className="w-3.5 h-3.5 text-emerald-600" />
              Section 5: Master Consular Document Checklist (ZAB &amp; VFS Ready)
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Essential Documents Required for Germany Work Visa Stamping
            </h2>

            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                  <FaCheck className="w-4 h-4 shrink-0" />
                  1. Valid Indian Passport (Original)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  Minimum 18 months validity remaining beyond planned travel date, with at least 3 completely blank visa stamping pages.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                  <FaCheck className="w-4 h-4 shrink-0" />
                  2. ZAB / IHK FOSA Qualification Recognition
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  Official <em>Zeugnisbewertung</em> or <em>Anerkennungsbescheid</em> confirming partial or full equivalence with German vocational standards.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                  <FaCheck className="w-4 h-4 shrink-0" />
                  3. Binding German Employment Contract
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  Signed contract and official Federal Employment Agency form: <em>Erklärung zum Beschäftigungsverhältnis</em> (Declaration of Employment).
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                  <FaCheck className="w-4 h-4 shrink-0" />
                  4. Certified German Language Certificate
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  Official certificates from accredited testing bodies: <strong>Goethe-Institut, telc, ÖSD, or TestDaF</strong> (levels A1 to B2 depending on trade).
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                  <FaCheck className="w-4 h-4 shrink-0" />
                  5. MEA Hague Apostille Police Clearance (PCC)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  Issued by the Regional Passport Office (RPO) within the last 90 days, bearing the official square Hague Apostille sticker from MEA India.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                  <FaCheck className="w-4 h-4 shrink-0" />
                  6. Incoming Travel Health Insurance
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  Coverage of minimum €30,000 for emergency hospitalization covering the travel and initial employment period until statutory TK/AOK activation.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                  <FaCheck className="w-4 h-4 shrink-0" />
                  7. Proof of Accommodation in Germany
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  Formal employer housing allocation letter, temporary apartment rental confirmation, or hotel reservation covering initial arrival.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                  <FaCheck className="w-4 h-4 shrink-0" />
                  8. Biometric Photographs (German Standard)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  3 recent biometric photographs (35mm x 45mm, white background, neutral facial expression, 80% face coverage conforming to ICAO guidelines).
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 6: German Labour Law & Worker Rights ──── */}
          <section id="labour-law" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaShieldHalved className="w-3.5 h-3.5 text-emerald-600" />
              Section 6: German Labor Protections, Social Security &amp; Settlement Rights
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              World-Class Statutory Protections Guaranteed by German Law
            </h2>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-3">
                <h3 className="font-display font-bold text-slate-900 text-lg flex items-center gap-2">
                  <FaHospital className="w-5 h-5 text-emerald-600" />
                  Universal Public Health Insurance (GKV)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every worker is enrolled in statutory public healthcare (e.g., <strong>Techniker Krankenkasse - TK</strong>, <strong>AOK</strong>, or <strong>Barmer</strong>). Premium costs (approx. 14.6%) are split 50:50 between the employer and employee, giving Indian workers 100% free doctor visits, specialist care, surgeries, and emergency ambulance cover.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-3">
                <h3 className="font-display font-bold text-slate-900 text-lg flex items-center gap-2">
                  <FaClock className="w-5 h-5 text-teal-600" />
                  Strict Working Hours Act (Arbeitszeitgesetz)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  German law limits standard working hours to 8 hours per day (max 48 hours per week). Mandatory rest periods of at least 11 uninterrupted hours between shifts are legally enforced. Overtime is strictly compensated with paid time off or wage supplements.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-3">
                <h3 className="font-display font-bold text-slate-900 text-lg flex items-center gap-2">
                  <FaMoneyBillWave className="w-5 h-5 text-emerald-600" />
                  Paid Sick Leave &amp; 30 Annual Leave Days
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Under the <em>Entgeltfortzahlungsgesetz</em>, if you fall sick, your employer continues paying <strong>100% of your regular salary for up to 6 weeks</strong>. Additionally, full-time workers receive between <strong>24 to 30 paid vacation days</strong> per calendar year.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-3">
                <h3 className="font-display font-bold text-slate-900 text-lg flex items-center gap-2">
                  <FaBuildingColumns className="w-5 h-5 text-amber-600" />
                  Fast-Track Permanent Residence (PR) &amp; Citizenship
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Blue Card holders obtain permanent residency in <strong>21 months</strong> (with B1 German) or 27 months (with A1). Skilled vocational workers qualify for permanent settlement in <strong>3 years</strong>. Under the 2024 citizenship reforms, full German citizenship is achievable in just <strong>5 years</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 7: Cost of Living & Net Remittance ─────── */}
          <section id="living-costs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaArrowTrendUp className="w-3.5 h-3.5 text-emerald-600" />
              Section 7: Cost of Living &amp; Real Net Savings in INR
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Understanding Taxes, Living Costs &amp; Remittance Potential
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed">
              While Germany imposes statutory taxes and social security contributions, workers receive extensive state benefits (free schools, subsidized university, public transit, child benefit <em>Kindergeld</em> of €250/month per child). Below is a realistic monthly budget:
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Estimated Monthly Rent</div>
                <div className="text-2xl font-display font-black text-slate-900">€450 – €750</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Shared apartment (WG) or studio apartment in industrial regions (Ruhrgebiet, Saxony, Baden-Württemberg). Includes heating &amp; WiFi (Warmmiete).
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Food &amp; Groceries</div>
                <div className="text-2xl font-display font-black text-slate-900">€200 – €300</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Budgeting for local supermarkets (Lidl, Aldi, Rewe) and Indian grocery stores. Affordable, high-quality dairy, grains, and produce.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Public Transit (Nationwide)</div>
                <div className="text-2xl font-display font-black text-emerald-700">€49 / Month</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The official <strong>Deutschlandticket</strong> provides unlimited monthly travel across all regional trains, subways (U-Bahn), trams, and buses throughout Germany.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/50 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">Net Remittance Benchmark</div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                  Monthly Savings Sent to India: <span className="text-emerald-700">₹90,000 to ₹1,60,000+ INR</span>
                </h3>
                <p className="text-xs text-slate-600 max-w-2xl">
                  Trade professionals in welding, CNC, mechatronics, and healthcare consistently save €1,000 to €1,800 monthly while building long-term European pension and residence credits.
                </p>
              </div>
              <Link
                href="/jobs?country=Germany"
                className="shrink-0 rounded-full bg-emerald-600 px-6 py-3 text-xs font-bold text-white shadow-sm hover:bg-emerald-500 transition-colors"
              >
                View Germany Vacancies
              </Link>
            </div>
          </section>

          {/* ── Section 8: Technical FAQs ──────────────────────── */}
          <section id="faqs" className="scroll-mt-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <FaGraduationCap className="w-3.5 h-3.5 text-emerald-600" />
              Section 8: Frequently Asked Questions (German Consular &amp; Legal FAQs)
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Common Questions About Migrating to Germany in 2026
            </h2>

            <div className="space-y-4 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Q1: Do I need to show a blocked account (Sperrkonto) if I have a job offer in Germany?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>No.</strong> If you apply with a signed German employment contract that meets the statutory minimum wage, your employer's salary fulfills the livelihood requirement. A blocked account (currently approx. €11,904/year or €992/month) is only required for the <strong>Opportunity Card (Chancenkarte)</strong> job seeker visa or vocational training applicants without an employer stipend.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Q2: Can I apply for German trade jobs if I hold an ECR passport?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>Yes.</strong> Holding an ECR (Emigration Check Required) passport does not restrict you from working in Germany. Because European countries are not among the 18 notified ECR clearance nations (which are primarily Gulf countries), standard European National Type-D visas do not require Protector of Emigrants (POE) clearance before flight departure.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Q3: Can IT professionals get an EU Blue Card in Germany without a university degree?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>Yes!</strong> Under the updated Skilled Immigration Act, IT specialists who have at least <strong>3 years of professional IT work experience</strong> within the last 7 years and a job offer meeting the shortage threshold (€41,041/yr) can obtain an EU Blue Card even without a formal university degree.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Q4: How does WorkWise Visa assist Indian nurses migrating to Germany?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We manage the entire institutional process for GNM and B.Sc nurses: document translation, state licensing board submission (<em>Defizitbescheid</em>), German language training up to B1/B2, direct interviews with accredited German healthcare trusts, adaptation coursework coordination, and subsidized housing in Germany.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Q5: Where in India are German visa applications submitted?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Biometrics and dossiers are submitted through authorized <strong>VFS Global Germany Centers</strong> across New Delhi, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad, Jalandhar, and Chandigarh. The file is adjudicated by the German Embassy in New Delhi or the Consulates General in Mumbai, Chennai, Bengaluru, or Kolkata based on your geographic jurisdiction.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Q6: How can I verify that a German job offer is genuine and not fraudulent?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Legitimate German employment documents must include the employer's official German Commercial Register number (<em>Handelsregisternummer - HRB</em>), VAT identification (<em>USt-IdNr.</em>), and an official Federal Employment Agency form. Visit our physical branch offices in <Link href="/locations/patna" className="text-emerald-700 font-bold underline">Patna</Link> or <Link href="/locations/noida" className="text-emerald-700 font-bold underline">Noida</Link> for an authentic consular document verification audit.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 9: CTA & Office Directory ─────────────── */}
          <section className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400">
                Start Your European Career in 2026
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight">
                Ready to Apply for High-Paying Jobs in Germany?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect directly with WorkWise Visa’s specialized European consular directors. From ZAB qualification equivalency to Goethe-Institut language classes, employer interviews, and VFS visa stamping — we manage your entire deployment with 100% legal compliance.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20want%20to%20evaluate%20my%20profile%20for%20Germany%20Opportunity%20Card%20and%20Skilled%20Work%20Visas!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition-all"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  Chat with Germany Placement Desk
                </a>

                <Link
                  href="/locations"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all"
                >
                  <FaLocationDot className="w-4 h-4 text-emerald-400" />
                  Visit Branches in Patna &amp; Noida
                </Link>
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
