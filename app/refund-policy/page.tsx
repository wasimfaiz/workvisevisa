import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  FaMoneyBillWave,
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
  FaReceipt,
  FaHandHoldingDollar,
  FaClock,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | WorkWise Visa",
  description:
    "Official Refund & Cancellation Policy of WorkWise Visa (A Unit of Europass Immigration Pvt Ltd). Transparent milestone guidelines, non-refundable statutory fees, employer demand cancellation refunds, and audit timelines.",
  alternates: {
    canonical: "https://www.workwisevisa.com/refund-policy",
  },
  openGraph: {
    title: "Refund & Cancellation Policy | WorkWise Visa",
    description:
      "Understand the transparent refund criteria, statutory embassy fee boundaries, cancellation processes, and electronic disbursement timelines at WorkWise Visa.",
    url: "https://www.workwisevisa.com/refund-policy",
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "website",
  },
};

export default function RefundPolicyPage() {
  const lastUpdated = "October 24, 2026";

  const trustHighlights = [
    {
      icon: FaFileContract,
      title: "Itemized Milestone Fees",
      desc: "Zero hidden charges. Every fee component is detailed on serialized official GST invoices prior to payment.",
    },
    {
      icon: FaBuildingColumns,
      title: "Statutory Disbursal Clarity",
      desc: "Consular visa fees, VFS charges, Apostilles, and GAMCA lab fees disbursed to third parties are non-refundable.",
    },
    {
      icon: FaShieldHalved,
      title: "Employer Default Protection",
      desc: "Full or pro-rata consultancy refund if an overseas employer cancels a verified demand or closes business.",
    },
    {
      icon: FaScaleBalanced,
      title: "Consumer Law Aligned",
      desc: "Compliant with Consumer Protection Act 2019 with a transparent 14–21 business day electronic bank audit protocol.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      <main className="pt-24 sm:pt-28 pb-20">
        {/* ── Page Header / Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-950 to-slate-900 text-white py-16 sm:py-20 border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-500/15 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300 mb-6 backdrop-blur-md">
              <FaMoneyBillWave className="w-3.5 h-3.5 text-emerald-400" />
              <span>Transparent Candidate Billing &amp; Refund Framework</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight mb-4">
              Refund &amp; Cancellation Policy
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              At WorkWise Visa, we uphold absolute financial transparency. This policy sets forth clear, statutory rules governing fee categories, refund eligibility, and claim settlement.
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
                <span>Regulatory Standard: <strong>Consumer Protection Act, 2019</strong></span>
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
                <span>Executive Summary of Refund Rules</span>
              </div>
              <p>
                WorkWise Visa (Europass Immigration Pvt. Ltd.) delivers customized professional recruitment facilitation, documentation audit, trade testing guidance, and visa dossier packaging. <strong>In case of service non-performance where an authenticated employer cancels a demand through no fault of the candidate, a fair refund of unutilized consulting fees is guaranteed. However, statutory fees already disbursed to third parties (embassies, consulates, GAMCA clinics, Apostille offices) and cases involving candidate fraud or medical disqualification are strictly non-refundable.</strong>
              </p>
            </div>

            {/* 1. Core Principles & Governance */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">01</span>
                <span>Core Principles &amp; Applicability</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>
                  This Refund &amp; Cancellation Policy governs all commercial transactions and fee remittances made to <strong>WorkWise Visa</strong>, operating under <strong>Europass Immigration Pvt. Ltd.</strong>, by prospective job seekers, overseas visa candidates, and business associates.
                </p>
                <p>
                  Our refund terms comply with the provisions of the <strong>Consumer Protection Act, 2019</strong>, the <strong>Indian Contract Act, 1872</strong>, and regulatory circulars issued by the <strong>Ministry of External Affairs (MEA), Government of India</strong>. By enrolling in any overseas recruitment program or remitting an administrative deposit, you agree to these terms.
                </p>
              </div>
            </div>

            {/* 2. Fee Classification: Statutory vs. Consulting Fees */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">02</span>
                <span>Classification of Fee Components</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>
                  To understand your refund rights, candidate payments are strictly divided into two distinct categories:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                    <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                      <FaBuildingColumns className="w-4 h-4 text-amber-700" />
                      <span>Category A: Disbursed Third-Party Fees</span>
                    </div>
                    <strong className="block text-slate-900 text-xs font-black">
                      Strictly Non-Refundable Once Disbursed
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      These are external expenses paid directly to sovereign embassies, government portals, or accredited independent testing facilities on your behalf. Examples include:
                    </p>
                    <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1">
                      <li>Consular visa application fees &amp; national stamping fees</li>
                      <li>VFS Global / BLS International biometric processing fees</li>
                      <li>GAMCA / Wafid medical diagnostic clinic examination costs</li>
                      <li>MEA Apostille, HRD attestation, and notary stamps</li>
                      <li>Government skill testing center fees (e.g., Saudi Takamol)</li>
                      <li>Certified translation charges &amp; international courier costs</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider">
                      <FaFileContract className="w-4 h-4 text-emerald-700" />
                      <span>Category B: Professional Facilitation Fees</span>
                    </div>
                    <strong className="block text-slate-900 text-xs font-black">
                      Conditionally Refundable as per Milestone Terms
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      These are retainer fees paid to WorkWise Visa for internal professional services, including:
                    </p>
                    <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1">
                      <li>Profile evaluation &amp; international employer matchmaking</li>
                      <li>Client interview coordination &amp; trade workshop scheduling</li>
                      <li>Visa dossier compilation, SOP guidance &amp; document packaging</li>
                      <li>Milestone status management on our Live Tracking Portal</li>
                      <li>Pre-departure employment briefings &amp; deployment support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Conditions Under Which Refund IS Granted */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">03</span>
                <span>Scenarios Where Refund IS Approved</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>
                  A candidate is entitled to a fair refund of Category B (professional consultancy fees) under the following validated circumstances:
                </p>
                <div className="space-y-2.5">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900 text-xs font-bold mb-1">
                      1. Overseas Employer Demand Cancellation
                    </strong>
                    <p className="text-xs text-slate-600">
                      If an overseas employer cancels an authenticated recruitment demand, withdraws its government visa quota, or shuts operations prior to work permit issuance, and WorkWise Visa is unable to provide an equivalent alternative vacancy within 60 days, the candidate receives a 100% refund of unutilized consulting fees.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900 text-xs font-bold mb-1">
                      2. Inability to Schedule Employer Interviews
                    </strong>
                    <p className="text-xs text-slate-600">
                      If WorkWise Visa fails to arrange at least two (2) verified client interviews or trade assessments within the contractually stipulated candidate engagement window (minimum 90 days from profile completion), the candidate may terminate the agreement and receive a pro-rata refund.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900 text-xs font-bold mb-1">
                      3. Duplicate or Erroneous Bank Transactions
                    </strong>
                    <p className="text-xs text-slate-600">
                      Any accidental double billing, excess bank transfer, or electronic gateway glitch is audited and refunded 100% within 5 to 7 banking days upon production of bank transaction confirmation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Conditions Under Which Refund IS STRICTLY Disallowed */}
            <div className="space-y-4 rounded-2xl bg-rose-500/10 text-slate-900 p-6 sm:p-8 border border-rose-500/30">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-700 flex items-center justify-center font-bold">
                  <FaCircleExclamation className="w-4 h-4" />
                </div>
                <h2 className="text-base sm:text-lg font-black tracking-tight text-rose-950">
                  Scenarios Where Refund IS Strictly Disallowed (Zero Refund)
                </h2>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  To protect against immigration fraud and bad-faith defaults, <strong>no refund of any fees shall be issued under the following circumstances:</strong>
                </p>
                <div className="space-y-2 pl-3 border-l-2 border-rose-600 text-xs text-slate-800 font-medium">
                  <p>
                    <strong>1. Document Forgery &amp; Credential Fabrication:</strong> If the candidate submits forged educational certificates, fake experience letters, altered passport bio-pages, or counterfeit trade test cards. The application is immediately canceled with 100% fee forfeiture and reported to law enforcement authorities.
                  </p>
                  <p>
                    <strong>2. Concealment of Criminal or Immigration History:</strong> If a visa is refused or candidate deported due to an undisclosed past criminal FIR, GCC travel ban, previous deportation, or overstay history in any foreign country.
                  </p>
                  <p>
                    <strong>3. Medical Unfitness (GAMCA / Wafid):</strong> If the candidate is declared &quot;UNFIT&quot; by an accredited medical clinic due to pulmonary tuberculosis scars, infectious hepatitis, HIV, or other statutory medical disqualifications under destination health laws.
                  </p>
                  <p>
                    <strong>4. Voluntary Candidate Withdrawal After Selection:</strong> If a candidate passes a client interview, is issued an official offer letter or entry permit, and subsequently chooses to withdraw due to personal reasons, family objection, or accepting another local offer.
                  </p>
                  <p>
                    <strong>5. Consular No-Show &amp; Non-Cooperation:</strong> If a candidate fails to appear for scheduled embassy biometrics, GAMCA medical appointments, or client interviews without validated 48-hour prior medical emergency notice.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Sovereign Visa Authority Disclaimer */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">05</span>
                <span>Sovereign Embassy Visa Decisions &amp; Consular Rejections</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>
                  In accordance with the <strong>Emigration Act, 1983</strong> and international consular law:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>No Agency Visa Guarantee:</strong> Visas are sovereign grants issued exclusively by foreign sovereign governments (e.g., UAE GDRFA, Saudi Ministry of Foreign Affairs, German Embassy, Polish Voivodeship). No private consultancy has the authority to issue visas.
                  </li>
                  <li>
                    <strong>Rejection on Sovereign Grounds:</strong> If a foreign consular officer rejects a visa application after WorkWise Visa has accurately compiled and submitted a genuine, legally compliant dossier, the professional service is considered fully performed. In such cases, candidate-borne consular processing fees cannot be refunded. However, WorkWise Visa will provide full consular refusal analysis and, if eligible, assist with re-submission or re-appeal at minimal administrative expense.
                  </li>
                </ul>
              </div>
            </div>

            {/* 6. Step-by-Step Refund Application & Audit Procedure */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">06</span>
                <span>Step-by-Step Refund Audit &amp; Claim Workflow</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>
                  To ensure accountability and prevent fraudulent chargebacks, all refund requests must follow this formal 4-step protocol:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase mb-2">Step 1</span>
                    <strong className="block text-slate-900 text-xs font-bold mb-1">Formal Written Claim</strong>
                    <p className="text-xs text-slate-600">Send an email to <a href="mailto:workwisevisa@gmail.com" className="text-emerald-700 underline font-semibold">workwisevisa@gmail.com</a> with your Candidate Application ID, Passport Copy, and serialized GST payment receipt.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase mb-2">Step 2</span>
                    <strong className="block text-slate-900 text-xs font-bold mb-1">Accounts Audit (7 Days)</strong>
                    <p className="text-xs text-slate-600">Our Legal &amp; Accounts division reviews your milestone file, verifies employer communication logs, and deducts already disbursed third-party costs.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase mb-2">Step 3</span>
                    <strong className="block text-slate-900 text-xs font-bold mb-1">Resolution Notice</strong>
                    <p className="text-xs text-slate-600">A formal Settlement Resolution Note detailing the audit calculation is issued to the candidate via registered email for sign-off.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase mb-2">Step 4</span>
                    <strong className="block text-slate-900 text-xs font-bold mb-1">Electronic Disbursement</strong>
                    <p className="text-xs text-slate-600">The approved refund amount is remitted directly to the candidate&apos;s verified bank account via NEFT / RTGS / UPI within 14 to 21 business days.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Mode of Repayment & Processing Timelines */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">07</span>
                <span>Mode of Repayment &amp; Strict Banking Channels</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-1">
                <p>
                  To comply with Reserve Bank of India (RBI) anti-money laundering regulations and Indian tax codes:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>No Cash Refunds:</strong> Under no circumstances will refunds be issued in physical cash, handed to third parties, or delivered to unregistered agents.
                  </li>
                  <li>
                    <strong>Account Holder Match:</strong> The refund must be remitted exclusively to the bank account registered in the candidate&apos;s own legal name (matching their passport bio-page) or, in the case of minors/dependents, their verified legal guardian.
                  </li>
                  <li>
                    <strong>Audit Documentation:</strong> Candidates must provide a canceled cheque or bank passbook copy displaying the Candidate Name, Account Number, and IFSC code for electronic NEFT/RTGS transfer.
                  </li>
                </ul>
              </div>
            </div>

            {/* 8. Initial Registration Cooling-Off Window */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">08</span>
                <span>48-Hour Initial Cooling-Off Window</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pt-1">
                <p>
                  If you have registered for an initial consultation package and change your mind within <strong>48 hours of payment</strong>—provided our case officers have not yet begun your profile dossier processing, translations, employer submission, or test bookings—you are entitled to cancel your registration and receive a refund of your deposit, subject only to a nominal 5% payment gateway processing charge.
                </p>
                <p>
                  Once case officer review, document attestation, or employer matching has commenced, standard milestone terms apply.
                </p>
              </div>
            </div>

            {/* 9. Official Accounts & Grievance Contact */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono">09</span>
                <span>Billing Audit &amp; Official Accounts Desk</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If you have questions regarding an invoice, require a duplicate payment receipt, or wish to submit a refund audit claim, please contact our dedicated Accounts &amp; Compliance Desk:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs uppercase tracking-wider text-emerald-800">
                    <FaBuilding className="text-emerald-600 w-3.5 h-3.5" />
                    <span>Noida HQ Accounts Desk</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    <strong>WorkWise Visa</strong> (Europass Immigration Pvt. Ltd.)<br />
                    Urbtech Trade Centre, D-701 C, Sector 132,<br />
                    Noida, Uttar Pradesh 201304, India
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs uppercase tracking-wider text-emerald-800">
                    <FaLocationDot className="text-emerald-600 w-3.5 h-3.5" />
                    <span>Patna Branch Billing Desk</span>
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
                  <span>Refund Desk: <a href="mailto:workwisevisa@gmail.com" className="font-bold text-emerald-900 underline">workwisevisa@gmail.com</a></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FaPhone className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Accounts Helpline: <a href="tel:+918130161603" className="font-bold text-emerald-900 underline">+91 81301 61603</a></span>
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
