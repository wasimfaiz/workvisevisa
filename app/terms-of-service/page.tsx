import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  FaScaleBalanced,
  FaShieldHalved,
  FaBuildingColumns,
  FaFileContract,
  FaCircleCheck,
  FaTriangleExclamation,
  FaCircleExclamation,
  FaBuilding,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaArrowsRotate,
  FaHandshake,
  FaPassport,
  FaPlaneDeparture,
  FaUsers,
  FaMoneyBillWave,
  FaArrowRight,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Terms of Service & Candidate Agreement | WorkWise Visa",
  description:
    "Official Terms of Service of WorkWise Visa. Compliant with Indian Emigration Act 1983, MEA regulations, GCC labour rules & ethical recruitment standards.",
  alternates: {
    canonical: "https://www.workwisevisa.com/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | WorkWise Visa",
    description:
      "Understand the legal terms, candidate obligations, statutory compliance, and refund guidelines governing overseas recruitment and visa consultancy services at WorkWise Visa.",
    url: "https://www.workwisevisa.com/terms-of-service",
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "website",
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = "October 24, 2026";

  const trustHighlights = [
    {
      icon: FaScaleBalanced,
      title: "Emigration Act & MEA Aligned",
      desc: "Structured in strict accordance with the Indian Emigration Act, 1983 and Ministry of External Affairs recruitment mandates.",
    },
    {
      icon: FaBuildingColumns,
      title: "Sovereign Embassy Clarity",
      desc: "Ethical documentation advisory; zero false visa guarantees. Ultimate grant authority rests solely with foreign sovereign missions.",
    },
    {
      icon: FaShieldHalved,
      title: "Zero-Extortion & Anti-Fraud",
      desc: "Zero tolerance for counterfeit trade certificates or forged credentials. Transparent, lawful recruitment processes.",
    },
    {
      icon: FaFileContract,
      title: "Fair Invoicing & Refund Norms",
      desc: "Compliant with Consumer Protection Act 2019 with itemized milestone fees and fair cancellation policies.",
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
              <FaScaleBalanced className="w-3.5 h-3.5 text-emerald-400" />
              <span>Statutory Compliance &amp; Candidate Service Agreement</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight mb-4">
              Terms of Service
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              These legal terms govern your access to WorkWise Visa services, candidate registration, employer interview coordination, document attestation, and work visa facilitation.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <FaFileContract className="w-3.5 h-3.5 text-emerald-400" />
                <span>Operating Entity: <strong>Europass Immigration Pvt. Ltd.</strong></span>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <FaArrowsRotate className="w-3.5 h-3.5 text-emerald-400" />
                <span>Last Updated: <strong>{lastUpdated}</strong></span>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <FaBuildingColumns className="w-3.5 h-3.5 text-emerald-400" />
                <span>Jurisdiction: <strong>Noida (UP) &amp; Patna (Bihar), India</strong></span>
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
                <span>Important Candidate Notice &amp; Regulatory Declaration</span>
              </div>
              <p>
                WorkWise Visa provides professional overseas employment matchmaking, skill assessment guidance, employer interview coordination, document translation, and consular visa dossier facilitation. <strong>Under statutory directives of the Ministry of External Affairs (India) and international labour conventions, foreign embassies and national immigration ministries retain 100% sovereign discretionary authority over visa decisions. No private recruitment agency or consultancy can lawfully guarantee a visa outcome.</strong> By registering with us or utilizing our services, you confirm acceptance of these terms.
              </p>
            </div>

            {/* 1. Legal Entity & Acceptance */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">01</span>
                <span>Entity Identification &amp; Acceptance of Terms</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>
                  This Service Agreement (&quot;Terms of Service&quot;, &quot;Terms&quot;, or &quot;Agreement&quot;) is entered into between <strong>WorkWise Visa</strong>, operating as a specialized international recruitment and visa facilitation unit of <strong>Europass Immigration Pvt. Ltd.</strong> (CIN registered company under the Companies Act, India, hereinafter referred to as &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), and the applicant, candidate, partner, or website visitor (referred to as &quot;Client&quot;, &quot;Candidate&quot;, &quot;User&quot;, or &quot;You&quot;).
                </p>
                <p>
                  By accessing our website (<a href="https://www.workwisevisa.com" className="text-emerald-700 font-semibold underline">www.workwisevisa.com</a>), submitting an application form, engaging with our counselors in person or via digital channels (including WhatsApp, Meta lead ads, or phone consultations), or paying an administrative service retainer, you unconditionally agree to be bound by these Terms and our companion <Link href="/privacy-policy" className="text-emerald-700 font-semibold underline">Privacy Policy</Link>. If you do not agree with any part of these Terms, you must immediately refrain from utilizing our services.
                </p>
              </div>
            </div>

            {/* 2. Scope of Services */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">02</span>
                <span>Scope of Professional Services</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>WorkWise Visa delivers specialized overseas migration and recruitment facilitation services including, but not limited to:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900 text-xs uppercase tracking-wide mb-1">
                      1. International Employer Demand Matching
                    </strong>
                    <span className="text-xs text-slate-600">
                      Evaluating candidate profiles against verified, authenticated manpower demands issued by licensed employers in the GCC (UAE, Saudi Arabia, Qatar, Oman, Bahrain, Kuwait), Europe (Germany, Poland, Romania, Croatia, France), the UK, and Russia.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900 text-xs uppercase tracking-wide mb-1">
                      2. Trade Assessment &amp; Skill Verification Coordination
                    </strong>
                    <span className="text-xs text-slate-600">
                      Arranging practical trade tests at authorized partner testing workshops for technical roles (e.g. 6G welders, heavy equipment operators, pipe fitters, electricians, masons, and HVAC technicians) and facilitating Takamol Skill Verification for Saudi-bound professionals.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900 text-xs uppercase tracking-wide mb-1">
                      3. Documentation, Apostille &amp; Embassy Attestation
                    </strong>
                    <span className="text-xs text-slate-600">
                      Advising candidates on Police Clearance Certificates (PCC), MEA (Ministry of External Affairs) Apostille, HRD attestation, sworn certified translations, and consular document packaging required by destination missions.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900 text-xs uppercase tracking-wide mb-1">
                      4. Medical &amp; Appointment Scheduling
                    </strong>
                    <span className="text-xs text-slate-600">
                      Assisting candidates with GAMCA / Wafid pre-departure medical screening appointments, biometrics booking at authorized visa centers (VFS Global, BLS International), and pre-departure flight deployment briefings.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Sovereign Embassy Authority & No Guarantee Disclaimer */}
            <div className="space-y-4 rounded-2xl bg-amber-500/10 text-slate-900 p-6 sm:p-8 border border-amber-500/30">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-700 flex items-center justify-center font-bold">
                  <FaTriangleExclamation className="w-4 h-4" />
                </div>
                <h2 className="text-base sm:text-lg font-black tracking-tight text-amber-950">
                  Sovereign Visa Authority &amp; Strict &quot;No Guarantee&quot; Disclaimer
                </h2>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  <strong>WorkWise Visa is an independent overseas recruitment and immigration facilitation enterprise. We are neither an embassy, a high commission, a consulate, nor a government agency of India or any foreign state.</strong>
                </p>
                <div className="space-y-2 pl-3 border-l-2 border-amber-600 text-xs text-slate-800 font-medium">
                  <p>
                    <strong>1. Consular Discretion:</strong> The issuance, delay, refusal, or stamping of any visa, entry permit, or work pass is solely and exclusively within the sovereign constitutional discretion of the foreign country&apos;s immigration authority and diplomatic mission.
                  </p>
                  <p>
                    <strong>2. Zero Guarantee Policy:</strong> No staff member, consultant, or channel associate of WorkWise Visa has the authority to promise or guarantee a 100% visa issuance outcome. Any verbal or informal claim guaranteeing a visa outcome is unauthorized, null, and void.
                  </p>
                  <p>
                    <strong>3. Processing Timelines:</strong> Published timelines (e.g., 2–4 weeks for GCC work permits or 6–12 weeks for European national D-visas) represent standard administrative estimates based on historical averages. We hold no liability for consular backlog, security vetting delays, strikes, or political suspensions.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Emigration Act 1983 & Government Compliance */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">04</span>
                <span>Indian Emigration Act, 1983 &amp; MEA Regulatory Compliance</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>
                  We operate in strict conformity with the <strong>Emigration Act, 1983</strong>, rules formulated by the <strong>Protector General of Emigrants (PGE)</strong>, and circulars issued by the <strong>Ministry of External Affairs (MEA), Government of India</strong>:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>ECR Passport Clearance:</strong> For Emigration Check Required (ECR) passport holders travelling to the 18 designated ECR countries (including Saudi Arabia, UAE, Qatar, Kuwait, Oman, Bahrain, and Malaysia), recruitment is strictly facilitated through authenticated eMigrate registered demand letters with verified employer quotas.
                  </li>
                  <li>
                    <strong>Statutory Service Fee Caps:</strong> Where candidate-paid counseling or documentation packaging services apply, fees are strictly structured within lawful frameworks and transparently invoiced. We strictly condemn and prohibit extortionate unauthorized charges.
                  </li>
                  <li>
                    <strong>No Unlawful Sub-Agent Dealing:</strong> Candidates are strictly registered directly with our corporate branches in Noida and Patna or through verified KYC-compliant B2B associates. We advise candidates to never hand cash to unregistered village middlemen.
                  </li>
                </ul>
              </div>
            </div>

            {/* 5. GCC Employer-Borne Recruitment Costs Policy */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">05</span>
                <span>GCC Employer-Borne Costs &amp; International Labour Standards</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>
                  WorkWise Visa strictly enforces the international <em>&quot;Employer Pays Principle&quot;</em> across our Gulf recruitment operations in compliance with host-nation statutes:
                </p>
                <div className="space-y-2.5 pt-1">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900 text-xs font-bold mb-1">
                      United Arab Emirates (UAE Federal Decree-Law No. 33 of 2021, Article 6)
                    </strong>
                    <p className="text-xs text-slate-600">
                      The sponsoring employer is legally obligated to bear all recruitment costs, government agency fees, quota application charges, work permit issuance fees, entry permits, and in-country medical screening costs. It is unlawful for employers or agencies to deduct visa costs from candidate salaries.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900 text-xs font-bold mb-1">
                      Kingdom of Saudi Arabia (Labour Law Royal Decree M/51 &amp; Qiwa Mandates)
                    </strong>
                    <p className="text-xs text-slate-600">
                      All government visa authorization fees, Iqama residency card issuance, and pre-departure contract attestation must be funded directly by the Saudi sponsor through official ministry digital portals.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900 text-xs font-bold mb-1">
                      State of Qatar (Labour Law No. 14 of 2004 &amp; MADLSA Regulations)
                    </strong>
                    <p className="text-xs text-slate-600">
                      Recruitment fees or commissions are legally prohibited from being levied against prospective migrant employees. Sponsoring establishments cover government work permit processing and return travel allowances.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Candidate Obligations & Anti-Fraud Policy */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">06</span>
                <span>Candidate Obligations &amp; Document Veracity Mandate</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>
                  Every candidate registering with WorkWise Visa provides a binding warranty of document integrity and factual honesty:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Authenticity of Credentials:</strong> You warrant that all passports, educational certificates, experience letters, trade test slips, driving licenses, and criminal background disclosures submitted are 100% genuine, unaltered, and legally issued by official institutions.
                  </li>
                  <li>
                    <strong>Consequences of Document Forgery:</strong> Submitting fake experience certificates, altered passport bio-pages, or counterfeit medical clearance is a severe criminal offense under Indian Law (including provisions of the Bharatiya Nyaya Sanhita, 2023) and destination immigration codes. <strong>In the event of detected forgery, WorkWise Visa will immediately cancel the application, forfeit any administrative deposits, blacklist the candidate, and report the matter to law enforcement and diplomatic missions.</strong>
                  </li>
                  <li>
                    <strong>Disclosure of Past Immigration History:</strong> Candidates must truthfully disclose any previous visa rejections, deportations, GCC travel bans, or pending criminal FIRs. Concealing such history absolves WorkWise Visa of any responsibility for subsequent visa denial or airport interception.
                  </li>
                  <li>
                    <strong>Cooperation &amp; Timely Response:</strong> Candidates must attend scheduled client interviews, biometrics appointments, and medical checks on the appointed dates. Willful failure to appear without 48-hour prior notice constitutes candidate default.
                  </li>
                </ul>
              </div>
            </div>

            {/* 7. Medical Clearance & GAMCA/Wafid Mandates */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">07</span>
                <span>Medical Fitness, GAMCA / Wafid &amp; Pre-Departure Screening</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>
                  International employment visas mandate rigorous statutory medical clearance governed by foreign health ministries:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>GCC Countries (GAMCA / Wafid):</strong> Pre-departure medical examinations must be conducted exclusively through medical centers authorized by the Gulf Health Council (GHC) via the Wafid platform (<a href="https://wafid.com" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">wafid.com</a>).
                  </li>
                  <li>
                    <strong>Fit-to-Work Requirement:</strong> If a candidate is declared &quot;UNFIT&quot; by an authorized medical center due to infectious conditions (such as pulmonary tuberculosis scars, hepatitis B/C, HIV, or untreated chronic ailments), the visa stamping cannot proceed under host-country law.
                  </li>
                  <li>
                    <strong>No Agency Medical Liability:</strong> WorkWise Visa exercises zero influence over medical diagnostic test results conducted by independent accredited laboratories and holds no financial liability if a candidate is certified medically unfit.
                  </li>
                </ul>
              </div>
            </div>

            {/* 8. Fee Schedules, Invoicing & Fair Refund Policy */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">08</span>
                <span>Invoicing, Milestone Payments &amp; Fair Refund Policy</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>
                  In compliance with the <strong>Consumer Protection Act, 2019</strong>, all financial dealings between the Client and WorkWise Visa are governed by transparency:
                </p>
                <div className="space-y-2.5 pt-1">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900 text-xs font-bold mb-1">
                      Official Receipts &amp; GST Invoicing
                    </strong>
                    <p className="text-xs text-slate-600">
                      All consulting retainers or document packaging fees must be remitted exclusively to the official corporate bank account of <em>Europass Immigration Pvt. Ltd.</em> or through authorized electronic gateways. Every transaction is backed by an official serialized receipt. Never remit funds to personal accounts of individual staff members.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900 text-xs font-bold mb-1">
                      Disbursed Third-Party Fees (Strictly Non-Refundable)
                    </strong>
                    <p className="text-xs text-slate-600">
                      Third-party government statutory fees—including consular visa application charges, VFS/BLS service fees, MEA Apostille stamps, translation notarizations, and GAMCA lab fees—are non-refundable once disbursed to the respective government agencies or service centers.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900 text-xs font-bold mb-1">
                      Refund Eligibility for Service Non-Performance
                    </strong>
                    <p className="text-xs text-slate-600">
                      If an overseas employer cancels an authenticated demand letter, fails to issue a promised work contract due to company closure, or if WorkWise Visa is unable to schedule interview matching within the contractually agreed engagement period, the candidate is entitled to a fair, pro-rata refund of unutilized consulting fees within 21 to 30 business days upon written audit.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900 text-xs font-bold mb-1">
                      Forfeiture Upon Candidate Default
                    </strong>
                    <p className="text-xs text-slate-600">
                      No refund is payable if the visa application is rejected or delayed due to candidate fraudulent document submission, medical unfitness, criminal background concealment, failure to attend consular interview, or voluntary unilateral withdrawal after an employment offer or visa has been formally secured.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 9. B2B Channel Partners & Associate Governance */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">09</span>
                <span>B2B Associate Consultants &amp; Channel Governance</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>
                  Independent regional partners, travel agencies, and sub-agents participating in our B2B Partner Program are bound by rigorous ethical guidelines:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Mandatory KYC &amp; MoU Execution:</strong> All B2B partners must complete Know-Your-Customer (KYC) business verification and execute our standard Associate MoU before submitting candidate rosters.
                  </li>
                  <li>
                    <strong>Prohibition of Extortionate Overcharging:</strong> B2B partners are strictly prohibited from charging candidates excessive or hidden fees beyond the agreed transparent service scope. Any partner found extorting candidates will face immediate contract termination, forfeiture of commissions, and legal de-registration.
                  </li>
                  <li>
                    <strong>Candidate Transparency:</strong> Partners must accurately explain job roles, salary terms, working hours, and accommodation arrangements to candidates without making exaggerated promises.
                  </li>
                </ul>
              </div>
            </div>

            {/* 10. Limitation of Liability & Force Majeure */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">10</span>
                <span>Limitation of Liability &amp; Force Majeure</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>
                  To the maximum extent permitted by applicable Indian law:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Cap on Liability:</strong> The aggregate cumulative liability of WorkWise Visa and Europass Immigration Pvt. Ltd. for any claim arising out of our services, whether in contract, tort, or warranty, shall not exceed the actual consulting fee amount received from the candidate for the specific service in dispute.
                  </li>
                  <li>
                    <strong>Consequential Damages:</strong> In no event shall the Company be liable for indirect, incidental, punitive, or consequential losses, including lost wages, flight ticket cancellations, loss of prospective employment, or psychological distress resulting from sovereign visa rejections.
                  </li>
                  <li>
                    <strong>Force Majeure Events:</strong> We shall not be deemed in breach of our obligations due to events beyond our reasonable control, including armed conflict, civil unrest, natural disasters, epidemics/pandemics, sudden geopolitical policy amendments, unilateral bilateral treaty suspensions, or diplomatic visa bans.
                  </li>
                </ul>
              </div>
            </div>

            {/* 11. Intellectual Property & Portal Usage */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">11</span>
                <span>Intellectual Property &amp; Live Tracking Portal Usage</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pt-1">
                <p>
                  All digital assets, website design, brand marks (&quot;WorkWise Visa&quot;), logos, proprietary milestone tracking architectures, and published knowledge guides are the exclusive intellectual property of Europass Immigration Pvt. Ltd.
                </p>
                <p>
                  Access to our Live Application Status Tracker at <Link href="/track" className="text-emerald-700 font-bold underline">/track</Link> is granted exclusively to registered candidates for non-commercial, personal use. Scraping, unauthorized API crawling, credential sharing, or attempting to compromise tracker infrastructure is strictly prohibited.
                </p>
              </div>
            </div>

            {/* 12. Governing Law & Dispute Resolution */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">12</span>
                <span>Governing Law, Jurisdiction &amp; Official Grievance Desk</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
                <p>
                  These Terms of Service and any contractual dispute arising from them shall be governed, interpreted, and enforced in accordance with the <strong>laws of the Republic of India</strong>.
                </p>
                <p>
                  Any dispute, controversy, or claim that cannot be amicably resolved through mutual good-faith negotiation within thirty (30) days shall be subject to the exclusive legal jurisdiction of the competent civil courts situated at <strong>Gautam Buddha Nagar (Noida, Uttar Pradesh)</strong> or <strong>Patna (Bihar)</strong>.
                </p>
              </div>

              {/* Official Grievance Officer Box */}
              <div className="mt-4 rounded-2xl bg-slate-50 border border-slate-200 p-6 space-y-4">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <FaBuilding className="text-emerald-600 w-4 h-4" />
                  <span>Official Legal &amp; Grievance Redressal Desk</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For formal legal notices, grievance petitions, billing audits, or compliance inquiries, please direct your communication to our designated Grievance &amp; Compliance Officer:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 text-xs sm:text-sm">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs uppercase tracking-wider text-emerald-800">
                      <FaBuilding className="text-emerald-600 w-3.5 h-3.5" />
                      <span>Corporate Headquarters (Noida)</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      <strong>WorkWise Visa</strong> (Europass Immigration Pvt. Ltd.)<br />
                      Urbtech Trade Centre, D-701 C, Sector 132,<br />
                      Noida, Gautam Buddha Nagar, Uttar Pradesh 201304, India
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 text-xs sm:text-sm">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs uppercase tracking-wider text-emerald-800">
                      <FaLocationDot className="text-emerald-600 w-3.5 h-3.5" />
                      <span>Regional Branch Office (Patna)</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      6th floor office no 606, Varma Centre,<br />
                      Boring Rd Crossing, Sri Krishna Puri,<br />
                      Patna, Bihar 800001, India
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-emerald-950 font-medium">
                  <div className="flex items-center gap-2.5">
                    <FaEnvelope className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Email: <a href="mailto:workwisevisa@gmail.com" className="font-bold text-emerald-900 underline">workwisevisa@gmail.com</a></span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <FaPhone className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Compliance Helpline: <a href="tel:+918130161603" className="font-bold text-emerald-900 underline">+91 81301 61603</a></span>
                  </div>
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
