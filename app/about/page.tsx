"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { processSteps, stats, whyUsPoints } from "@/lib/data";
import {
  FaGlobe,
  FaUsers,
  FaCalendarDays,
  FaChartLine,
  FaShield,
  FaAward,
  FaHandshake,
  FaLocationDot,
  FaCheck,
  FaWhatsapp,
  FaEnvelope,
  FaUserCheck,
  FaBriefcase,
  FaCompass,
  FaBuildingColumns,
  FaFileContract,
  FaPlaneArrival,
  FaHospitalUser,
  FaArrowRight,
} from "react-icons/fa6";

const companyValues = [
  {
    title: "100% Ethical Recruitment",
    description: "Zero hidden charges or false job promises. We partner exclusively with pre-vetted international employers offering legally binding contracts.",
    icon: FaHandshake,
  },
  {
    title: "98% Visa Success Rate",
    description: "Every file undergoes a rigorous multi-tier audit before submission to eliminate embassy rejection risks.",
    icon: FaShield,
  },
  {
    title: "Complete Landing Support",
    description: "Our support doesn't end at visa stamping. We assist with airport reception, temporary lodging, and local SIM/bank registration.",
    icon: FaPlaneArrival,
  },
  {
    title: "Free Housing & Allowances",
    description: "We prioritize trade contracts that provide free employer accommodation, medical insurance, and transportation.",
    icon: FaFileContract,
  },
];

const officeLocations = [
  {
    city: "Noida, India (HQ)",
    address: "Urbtech Trade Centre, D-701 C, Sector 132, Noida, Uttar Pradesh 201304",
    phone: "+91 81301 61603",
    tag: "Head Office & Candidate Center",
  },
  {
    city: "Patna, Bihar",
    address: "6th floor office no 606, Varma Centre, Boring Rd, crossing, Sri Krishna Puri, Patna, Bihar 800001",
    phone: "+91 81301 61603",
    tag: "Regional Branch Office",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 bg-slate-50 min-h-screen">
        {/* Page Hero Header */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-emerald-50/80 via-white to-slate-50 text-slate-900 border-b border-slate-200/80 shadow-xs overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-5 shadow-xs">
              <FaBuildingColumns className="w-3.5 h-3.5 text-emerald-600" />
              About WorkWise Visa
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight">
              Empowering Skilled Talent to Build Global Careers
            </h1>
            
            <p className="mt-4 mx-auto max-w-3xl text-slate-600 text-base sm:text-xl font-medium leading-relaxed">
              Operating as a specialized brand entity of <strong>Europass Immigration Pvt. Ltd.</strong>, WorkWise Visa connects skilled trade workers, drivers, technicians, and caregivers with verified employers across 12+ nations.
            </p>

            {/* Impact Stats Grid */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { val: "5+", label: "Years Excellence", icon: FaCalendarDays },
                { val: "5,000+", label: "Successful Placements", icon: FaUsers },
                { val: "98%", label: "Visa Approval Rate", icon: FaChartLine },
                { val: "12+", label: "Partner Nations", icon: FaGlobe },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-slate-200/90 bg-white/90 backdrop-blur-md p-5 text-center shadow-md shadow-slate-200/40 hover:border-emerald-300 transition-all"
                  >
                    <Icon className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
                    <p className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
                      {s.val}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                      {s.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Story & Mission Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-4">
                <FaCompass className="w-3.5 h-3.5 text-emerald-600" />
                Our Story & Mission
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 leading-tight">
                Built to Protect Overseas Candidates & Ensure Genuine Job Placement
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-base">
                WorkWise Visa was founded with a clear mission: to eliminate unethical recruitment practices, fake job offers, and exorbitant agent fees that plague overseas job seekers.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed text-base">
                We specialize in trade workers, heavy trailer drivers, CNC machine operators, industrial welders, caregivers, and hospital aides — managing every critical step from GAMCA medical clearance and trade center tests to embassy visa stamping and housing verification.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "100% Verified International Employers (Gulf, Schengen, UK, Canada, Russia)",
                  "Transparent Contract Review with Guaranteed Salaries & Housing Allowances",
                  "Fast-Track Embassy Documentation & Attestation Support",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                      <FaCheck className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Feature Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-10 text-white shadow-2xl overflow-hidden border border-slate-700">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
              
              <h3 className="text-2xl font-display font-extrabold text-white mb-6">
                Why Overseas Candidates Trust WorkWise Visa
              </h3>

              <div className="space-y-6">
                {companyValues.map((v) => {
                  const Icon = v.icon;
                  return (
                    <div key={v.title} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base leading-tight">
                          {v.title}
                        </h4>
                        <p className="text-xs text-slate-300 font-normal leading-relaxed mt-1">
                          {v.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Global Office Locations */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">
              <FaLocationDot className="w-3.5 h-3.5 text-emerald-600" />
              Global Presence
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900">
              Our International Offices & Candidate Desks
            </h2>
            <p className="mt-3 text-slate-600 text-base max-w-2xl mx-auto">
              Visit our head office in India or connect with our international coordination hubs in Dubai and London.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {officeLocations.map((office) => (
              <div
                key={office.city}
                className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm hover:border-emerald-500/50 hover:shadow-xl transition-all"
              >
                <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-bold text-emerald-800 mb-4">
                  {office.tag}
                </span>
                <h3 className="font-display font-extrabold text-slate-900 text-xl mb-2 flex items-center gap-2">
                  <FaLocationDot className="w-4 h-4 text-emerald-600" />
                  {office.city}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                  {office.address}
                </p>
                <p className="text-xs font-bold text-slate-800">
                  Phone: <span className="text-emerald-700">{office.phone}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6-Step Recruitment Roadmap */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24">
          <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">
                <FaCompass className="w-3.5 h-3.5 text-emerald-600" />
                Proven 6-Step Roadmap
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900">
                How We Manage Your Overseas Placement
              </h2>
              <p className="mt-3 text-slate-600 text-base">
                From initial profile evaluation to flight departure and hotel/company check-in.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="relative rounded-2xl bg-slate-50 border border-slate-200 p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white font-extrabold font-display text-sm">
                        {step.step}
                      </span>
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {step.duration}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-slate-900 text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Consultation Banner */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
          <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Start Your International Career With WorkWise Visa
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                Connect directly with our visa specialists to evaluate your trade skills, schedule GAMCA medicals, or drop your CV for open vacancies.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20want%20to%20know%20more%20about%20your%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Talk with Expert on WhatsApp</span>
                </a>
                <a
                  href="mailto:workwisevisa@gmail.com?subject=Job%20Application%20Resume%20Submission"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-800 border border-slate-700 px-6 py-3 text-sm font-bold text-slate-200 hover:bg-slate-700 hover:text-white transition-all"
                >
                  <FaEnvelope className="w-4 h-4" />
                  <span>Drop Your CV via Email</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
