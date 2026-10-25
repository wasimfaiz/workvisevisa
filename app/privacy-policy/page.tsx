import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  FaShieldHalved,
  FaLock,
  FaFileContract,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaBuilding,
  FaBullhorn,
  FaArrowsRotate,
  FaCircleCheck,
  FaScaleBalanced,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Privacy Policy | WorkWise Visa — Overseas Job Placement & Visa Consultancy",
  description:
    "Official Privacy Policy of WorkWise Visa. Learn how we safeguard candidate documents, passport details, and CV data under strict global privacy laws.",
  alternates: {
    canonical: "https://www.workwisevisa.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | WorkWise Visa",
    description:
      "Understand how WorkWise Visa collects, protects, and handles your candidate information, CV submissions, and visa processing details.",
    url: "https://www.workwisevisa.com/privacy-policy",
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 22, 2026";

  const trustHighlights = [
    {
      icon: FaLock,
      title: "Bank-Grade Encryption",
      desc: "All candidate passport files, contact numbers, and CVs are transmitted over 256-bit SSL encryption.",
    },
    {
      icon: FaShieldHalved,
      title: "Zero Data Selling Guarantee",
      desc: "We strictly never sell, rent, or trade your personal data to third-party telemarketers or data brokers.",
    },
    {
      icon: FaBullhorn,
      title: "Meta Ads Transparency",
      desc: "Compliant with Meta Advertising Standards for Facebook & Instagram lead forms, pixel tracking, and consent.",
    },
    {
      icon: FaScaleBalanced,
      title: "DPDP & GDPR Principled",
      desc: "Aligned with Indian Digital Personal Data Protection Act 2023 and European data minimization standards.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      <main className="pb-20">
        {/* ── Page Header / Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-950 to-slate-900 text-white pt-24 sm:pt-28 pb-16 sm:pb-20 border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-500/15 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300 mb-6 backdrop-blur-md">
              <FaShieldHalved className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official Privacy &amp; Data Protection Statement</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight mb-4">
              Privacy Policy
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              WorkWise Visa is committed to protecting your privacy and ensuring transparency in how your personal details, candidate CVs, and visa applications are processed.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <FaFileContract className="w-3.5 h-3.5 text-emerald-400" />
                <span>Legal Entity: <strong>Europass Immigration Pvt. Ltd.</strong></span>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <FaArrowsRotate className="w-3.5 h-3.5 text-emerald-400" />
                <span>Last Updated: <strong>{lastUpdated}</strong></span>
              </span>
            </div>
          </div>
        </section>

        {/* ── 4 Key Trust Highlights ── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {trustHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-lg shadow-slate-200/50 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h2 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h2>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Main Policy Content ── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-sm space-y-10 sm:space-y-12">
            
            {/* Quick Summary Notice */}
            <div className="rounded-2xl bg-emerald-50/80 border border-emerald-200/80 p-5 sm:p-6 text-xs sm:text-sm text-emerald-950 leading-relaxed space-y-2">
              <div className="flex items-center gap-2 font-black text-emerald-900 uppercase tracking-wider text-xs">
                <FaCircleCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Summary for Candidates &amp; Website Visitors</span>
              </div>
              <p>
                When you browse our website, submit a consultation request, contact us via WhatsApp, or fill out a Meta (Facebook or Instagram) lead ad for overseas jobs, we collect only the necessary information to evaluate your eligibility, match you with verified international employers, and manage your visa processing. <strong>We will never sell or rent your personal information to third parties.</strong>
              </p>
            </div>

            {/* 1. Who We Are */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">01</span>
                <span>Who We Are &amp; Scope of this Policy</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>
                  This Privacy Policy applies to <strong>WorkWise Visa</strong>, an overseas recruitment and immigration consultancy operating as a specialized operational unit of <strong>Europass Immigration Pvt. Ltd.</strong> (referred to as &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
                </p>
                <p>
                  Our corporate headquarters is located at <strong>Urbtech Trade Centre, D-701 C, Sector 132, Noida, Uttar Pradesh 201304</strong>, and our regional branch is situated at <strong>6th floor office no 606, Varma Centre, Boring Rd Crossing, Sri Krishna Puri, Patna, Bihar 800001</strong>.
                </p>
                <p>
                  This policy outlines our practices concerning data collection, processing, storage, and transfer when you interact with our website (<a href="https://www.workwisevisa.com" className="text-emerald-700 font-semibold underline">www.workwisevisa.com</a>), our Meta (Facebook and Instagram) advertisements and lead forms, our WhatsApp communication channels, and our in-office consultation desks.
                </p>
              </div>
            </div>

            {/* 2. Information We Collect */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">02</span>
                <span>Information We Collect</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>We collect information directly from you when you voluntarily provide it through various touchpoints:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Personal Contact Details:</strong> Full name, telephone / WhatsApp number, email address, current city, state, and residential address.
                  </li>
                  <li>
                    <strong>Professional &amp; Employment Data:</strong> Current occupation, specific trade skill (e.g., Heavy Driver, Welder, Electrician, Hospitality Staff, Nurse, Warehouse Worker), total years of domestic/overseas experience, educational qualifications, resume / CV attachments, and trade certification cards.
                  </li>
                  <li>
                    <strong>Immigration &amp; Passport Information:</strong> Passport number, passport validity, nationality, date of birth, police clearance certificate (PCC) status, medical fitness status (GCC GAMCA / European health check), and target destination country (e.g., UAE, Saudi Arabia, Qatar, Poland, Romania, Croatia, Germany).
                  </li>
                  <li>
                    <strong>Meta Ad Interactions:</strong> Responses voluntarily submitted through Facebook Lead Ads or Instagram Instant Forms (including full name, phone number, and trade interest).
                  </li>
                  <li>
                    <strong>Technical &amp; Usage Information:</strong> Internet Protocol (IP) address, browser type, operating system, pages visited, time spent on pages, and referral sources collected via cookies and tracking pixels.
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. How We Use Your Information */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">03</span>
                <span>How We Use Your Information</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>We process your data strictly for legitimate business and recruitment purposes, including:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900 text-xs uppercase tracking-wide mb-1">
                      1. Candidate Profile Assessment
                    </strong>
                    <span className="text-xs text-slate-600">
                      Evaluating your work experience, trade suitability, and country eligibility against overseas employer job demands.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900 text-xs uppercase tracking-wide mb-1">
                      2. Communication &amp; Interview Coordination
                    </strong>
                    <span className="text-xs text-slate-600">
                      Contacting you via WhatsApp, phone call, or email regarding interview schedules, trade test dates, and visa document requirements.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900 text-xs uppercase tracking-wide mb-1">
                      3. Application Milestone Tracking
                    </strong>
                    <span className="text-xs text-slate-600">
                      Enabling you to track your 7-stage work visa milestone progress through our live tracker at <Link href="/track" className="text-emerald-700 font-bold underline">/track</Link>.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900 text-xs uppercase tracking-wide mb-1">
                      4. Legal &amp; Regulatory Compliance
                    </strong>
                    <span className="text-xs text-slate-600">
                      Complying with Indian immigration regulations, foreign ministry work permit requirements, and preventing fraudulent applications.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Meta Advertising, Pixel & Cookie Disclosures (CRITICAL FOR META ADS) */}
            <div className="space-y-4 rounded-2xl bg-slate-950 text-white p-6 sm:p-8 border border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <FaBullhorn className="w-4 h-4" />
                </div>
                <h2 className="text-base sm:text-lg font-black tracking-tight text-white">
                  Meta (Facebook &amp; Instagram) Advertising &amp; Pixel Disclosure
                </h2>
              </div>

              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3">
                <p>
                  WorkWise Visa runs advertising campaigns across Meta technologies (including Facebook, Instagram, Messenger, and Meta Audience Network) to connect candidates with overseas job opportunities and work visa guidance.
                </p>
                <div className="space-y-2 pl-3 border-l-2 border-emerald-500 text-xs text-slate-300">
                  <p>
                    <strong>1. Meta Pixel &amp; Event Tracking:</strong> Our website utilizes the Meta Pixel (<code className="bg-slate-800 px-1.5 py-0.5 rounded text-emerald-400 font-mono">1401418235281432</code>). This code snippet collects anonymized data regarding user actions (e.g., page views, consultation form submissions) to help us measure campaign effectiveness, optimize ads, and show relevant job openings to people who have expressed interest.
                  </p>
                  <p>
                    <strong>2. Meta Lead Ads:</strong> When you fill out an Instant Form on a Facebook or Instagram ad published by WorkWise Visa, your submitted details (name, contact number, occupation) are transmitted securely to our certified database. We only use these details to contact you regarding the specific job drive or country program you inquired about.
                  </p>
                  <p>
                    <strong>3. Your Opt-Out Choices:</strong> You can manage or disable interest-based ads on Meta platforms at any time by visiting your{" "}
                    <a
                      href="https://www.facebook.com/adpreferences/ad_settings"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 font-bold underline"
                    >
                      Facebook Ad Preferences
                    </a>{" "}
                    or configuring your device privacy settings.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Data Sharing & Third-Party Disclosure */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">05</span>
                <span>Data Sharing &amp; International Transfers</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>
                  <strong>We do not sell, rent, lease, or monetize your personal data under any circumstances.</strong>
                </p>
                <p>
                  Your information is shared strictly on a need-to-know basis with the following entities solely for processing your employment and visa:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Verified Overseas Employers:</strong> Sponsoring companies in the Gulf, Europe, UK, Russia, or Canada to review candidate resumes, schedule interviews, and issue formal employment contracts.
                  </li>
                  <li>
                    <strong>Foreign Labor &amp; Immigration Ministries:</strong> Government portals (such as MOHRE in the UAE, Qiwa / Muqeem in Saudi Arabia, Voivodeship Offices in Poland, Ministry of Labor in Romania) for work permit approval.
                  </li>
                  <li>
                    <strong>Embassies &amp; Visa Application Centers:</strong> Consular divisions and authorized submission centers (e.g., VFS Global, BLS International) for visa appointment booking and stamping.
                  </li>
                  <li>
                    <strong>Lawful Authorities:</strong> When required by court order, law enforcement, or statutory government mandates to prevent immigration fraud.
                  </li>
                </ul>
              </div>
            </div>

            {/* 6. Data Security & Storage */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">06</span>
                <span>Data Security &amp; Storage</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>
                  We implement robust technical and administrative safeguards to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Data is hosted on secure cloud infrastructure with TLS 1.3 encryption in transit and AES encryption at rest.</li>
                  <li>Access to passport files and identity documents is strictly restricted to certified visa counselors and case officers via Role-Based Access Control (RBAC).</li>
                  <li>We retain candidate records for as long as necessary to complete your visa processing, fulfill our warranty/placement support commitments, and adhere to applicable statutory tax and recruitment laws.</li>
                </ul>
              </div>
            </div>

            {/* 7. Your Legal Rights & Choices */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">07</span>
                <span>Your Rights &amp; Choices</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Right to Access &amp; Correction:</strong> You may request a copy of the personal details we hold about you or request corrections to inaccurate information.
                  </li>
                  <li>
                    <strong>Right to Erasure (Data Deletion):</strong> You may request that we delete your candidate profile and documents, subject to any ongoing legal, contractual, or embassy processing requirements.
                  </li>
                  <li>
                    <strong>Right to Opt-Out of Marketing:</strong> You can opt out of promotional WhatsApp updates or marketing emails at any time by replying &quot;STOP&quot; on WhatsApp or emailing us at <a href="mailto:workwisevisa@gmail.com" className="text-emerald-700 font-bold underline">workwisevisa@gmail.com</a>.
                  </li>
                </ul>
              </div>
            </div>

            {/* 8. Cookies & Analytics */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">08</span>
                <span>Cookies &amp; Tracking Technologies</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pt-1">
                <p>
                  Our website uses cookies (small text files placed on your device) to facilitate site navigation, remember language preferences, and gather aggregate usage statistics via Google Analytics.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, disabling cookies may impact your experience with interactive tools such as our Salary Calculator or Live Status Tracker.
                </p>
              </div>
            </div>

            {/* 9. Grievance Officer & Contact Details */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">09</span>
                <span>Grievance Officer &amp; Official Contact</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If you have questions, concerns, or requests regarding this Privacy Policy, your personal data, or our Meta Advertising practices, please contact our designated Grievance Officer:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
                    <FaBuilding className="text-emerald-600 w-4 h-4" />
                    <span>Corporate Headquarters (Noida)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    <strong>WorkWise Visa</strong> (A Unit of Europass Immigration Pvt. Ltd.)<br />
                    Urbtech Trade Centre, D-701 C, Sector 132,<br />
                    Noida, Uttar Pradesh 201304, India
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
                    <FaLocationDot className="text-emerald-600 w-4 h-4" />
                    <span>Regional Branch Office (Patna)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    6th floor office no 606, Varma Centre,<br />
                    Boring Rd Crossing, Sri Krishna Puri,<br />
                    Patna, Bihar 800001, India
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-emerald-950 font-medium">
                <div className="flex items-center gap-2.5">
                  <FaEnvelope className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Email: <a href="mailto:workwisevisa@gmail.com" className="font-bold text-emerald-900 underline">workwisevisa@gmail.com</a></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FaPhone className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Phone / WhatsApp: <a href="tel:+918130161603" className="font-bold text-emerald-900 underline">+91 81301 61603</a></span>
                </div>
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
