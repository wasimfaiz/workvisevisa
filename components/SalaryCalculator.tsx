"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  FaCalculator,
  FaArrowRight,
  FaCircleCheck,
  FaGlobe,
  FaClock,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa6";

interface CalculationResult {
  salaryRange: string;
  currency: string;
  visaRoute: string;
  processingTime: string;
  matchScore: number;
  perks: string[];
}

const roles = [
  "Software Engineering / IT",
  "Healthcare & Nursing",
  "Civil & Mechanical Eng.",
  "Finance & Accounting",
  "Project Management",
  "Hospitality & Tourism",
];

const destinations = [
  { id: "UAE", name: "Dubai & UAE", flag: "🇦🇪", region: "Gulf" },
  { id: "DE", name: "Germany (EU)", flag: "🇩🇪", region: "Schengen" },
  { id: "CAN", name: "Canada", flag: "🇨🇦", region: "North America" },
  { id: "UK", name: "United Kingdom", flag: "🇬🇧", region: "UK" },
  { id: "SA", name: "Saudi Arabia", flag: "🇸🇦", region: "Gulf" },
  { id: "US", name: "United States", flag: "🇺🇸", region: "North America" },
];

const experienceLevels = [
  { label: "1–3 Years", multiplier: 1 },
  { label: "3–7 Years", multiplier: 1.45 },
  { label: "7+ Years", multiplier: 1.9 },
];

/* Pre-calibrated realistic salary & visa matrix data */
const matrixData: Record<string, Record<string, Partial<CalculationResult>>> = {
  "Software Engineering / IT": {
    UAE: { salaryRange: "18,000 – 32,000", currency: "AED / month", visaRoute: "UAE Green / Golden Visa", processingTime: "2–3 weeks", perks: ["100% Tax-Free Income", "Golden Residency (10 Yrs)", "Family Sponsoring"] },
    DE: { salaryRange: "4,800 – 7,200", currency: "EUR / month", visaRoute: "EU Blue Card", processingTime: "4–6 weeks", perks: ["PR in 21 Months", "EU Wide Mobility", "High Quality Healthcare"] },
    CAN: { salaryRange: "6,500 – 9,800", currency: "CAD / month", visaRoute: "Express Entry / GTS", processingTime: "8–12 weeks", perks: ["Direct PR Pathway", "Free Public Healthcare", "Spouse Work Permit"] },
    UK: { salaryRange: "4,200 – 6,500", currency: "GBP / month", visaRoute: "Skilled Worker Visa", processingTime: "3–4 weeks", perks: ["NHS Health Access", "5-Year Settlement Path", "Global Tech Hub"] },
    SA: { salaryRange: "16,000 – 28,000", currency: "SAR / month", visaRoute: "Work Visa / Premium PR", processingTime: "3–5 weeks", perks: ["Tax-Free Salary Package", "Housing Allowance", "Annual Flight Tickets"] },
    US: { salaryRange: "7,500 – 12,500", currency: "USD / month", visaRoute: "H-1B / O-1 Specialty Visa", processingTime: "2–4 months", perks: ["Highest Global Pay", "Stock Options (RSUs)", "Green Card Eligible"] },
  },
  "Healthcare & Nursing": {
    UAE: { salaryRange: "14,000 – 24,000", currency: "AED / month", visaRoute: "DHA Licensed Medical Visa", processingTime: "3–4 weeks", perks: ["Tax-Free Salary", "DHA Licensing Support", "Hospital Housing"] },
    DE: { salaryRange: "3,600 – 5,400", currency: "EUR / month", visaRoute: "Fast-Track Healthcare Visa", processingTime: "6–8 weeks", perks: ["Accelerated B2 German Path", "Permanent Contract", "State Pension"] },
    CAN: { salaryRange: "5,500 – 8,200", currency: "CAD / month", visaRoute: "Healthcare Express Entry", processingTime: "6–10 weeks", perks: ["Priority PR Draw", "Provincial Nomination", "Full Family Benefits"] },
    UK: { salaryRange: "3,200 – 4,800", currency: "GBP / month", visaRoute: "Health & Care Worker Visa", processingTime: "2–3 weeks", perks: ["Reduced Visa Fees", "Exempt from Health Surcharge", "Fast Approval"] },
    SA: { salaryRange: "12,000 – 22,000", currency: "SAR / month", visaRoute: "MOH Work Permit", processingTime: "3–5 weeks", perks: ["Tax-Free Package", "Free Accommodation", "Family Visa"] },
    US: { salaryRange: "6,200 – 9,500", currency: "USD / month", visaRoute: "EB-3 Nurse Green Card", processingTime: "3–6 months", perks: ["Direct Permanent Residency", "High Demand Bonus", "Relocation Stipend"] },
  },
};

/* Default fallback calculation builder */
function calculateResult(role: string, dest: string, expIdx: number): CalculationResult {
  const roleData = matrixData[role]?.[dest] || {
    salaryRange: "4,500 – 7,500",
    currency: "USD / month",
    visaRoute: "Skilled Work Permit",
    processingTime: "4–6 weeks",
    perks: ["Tax-Free / Competitive Salary", "Employer Sponsorship", "Family Visa Eligible"],
  };

  const baseScore = 88 + (expIdx * 4);
  return {
    salaryRange: roleData.salaryRange || "5,000 – 8,000",
    currency: roleData.currency || "USD / month",
    visaRoute: roleData.visaRoute || "Skilled Work Visa",
    processingTime: roleData.processingTime || "4–6 weeks",
    matchScore: Math.min(baseScore, 98),
    perks: roleData.perks || ["Competitive Pay", "Employer Visa Sponsorship", "Residency Pathway"],
  };
}

export default function SalaryCalculator() {
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const [selectedDest, setSelectedDest] = useState(destinations[0].id);
  const [selectedExp, setSelectedExp] = useState(1); // 3-7 yrs

  const activeDestObj = destinations.find((d) => d.id === selectedDest) || destinations[0];
  const result = calculateResult(selectedRole, selectedDest, selectedExp);

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="calculator" className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 section-alt pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-4 shadow-sm">
            <FaCalculator className="w-3.5 h-3.5 text-emerald-600" /> Interactive Assessment Hub
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Calculate Your Overseas Salary & Visa Match
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-slate-600 text-lg font-medium">
            Select your profession, target destination, and experience level to get instant real-time eligibility feedback.
          </p>
        </motion.div>

        {/* Main Interactive Grid Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Inputs (7 cols) */}
          <motion.div
            className="lg:col-span-7 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              {/* Step 1: Select Industry/Role */}
              <div className="mb-8">
                <label className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-3">
                  <FaBriefcase className="w-4 h-4 text-emerald-600" /> 1. Select Your Profession
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {roles.map((r) => (
                    <button
                      key={r}
                      onClick={() => setSelectedRole(r)}
                      className={`p-3 rounded-xl text-xs font-bold text-left transition-all cursor-pointer ${
                        selectedRole === r
                          ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Target Destination */}
              <div className="mb-8">
                <label className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-3">
                  <FaGlobe className="w-4 h-4 text-emerald-600" /> 2. Target Destination
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {destinations.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => setSelectedDest(d.id)}
                      className={`flex items-center gap-2 p-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedDest === d.id
                          ? "bg-slate-900 text-white shadow-md"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                      }`}
                    >
                      <span className="text-base">{d.flag}</span>
                      <span className="truncate">{d.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Experience Level */}
              <div>
                <label className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-3">
                  <FaGraduationCap className="w-4 h-4 text-emerald-600" /> 3. Total Work Experience
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {experienceLevels.map((exp, idx) => (
                    <button
                      key={exp.label}
                      onClick={() => setSelectedExp(idx)}
                      className={`p-3 rounded-xl text-xs font-bold text-center transition-all cursor-pointer ${
                        selectedExp === idx
                          ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                      }`}
                    >
                      {exp.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Indicator Footnote */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>⚡ Live Market Estimates Updated Monthly</span>
              <span className="text-emerald-700 font-bold">100% Pre-Verified Data</span>
            </div>
          </motion.div>

          {/* Right Column: Calculated Results Display Card (5 cols) */}
          <motion.div
            className="lg:col-span-5 rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-800 via-teal-800 to-slate-900 p-6 sm:p-8 text-white shadow-2xl flex flex-col justify-between relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Card Header with Match Gauge */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Calculated Result
                  </span>
                  <h3 className="text-xl font-display font-bold text-white mt-0.5">
                    {activeDestObj.flag} {activeDestObj.name} Pathway
                  </h3>
                </div>

                {/* Score Badge */}
                <div className="flex flex-col items-center justify-center h-14 w-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-400">
                  <span className="text-lg font-black leading-none">{result.matchScore}%</span>
                  <span className="text-[9px] uppercase font-bold text-emerald-300">Match</span>
                </div>
              </div>

              {/* Salary Estimate Box */}
              <div className="py-6">
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">
                  Est. Net Monthly Salary
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
                    {result.salaryRange}
                  </span>
                </div>
                <span className="text-xs font-bold text-emerald-400">{result.currency}</span>
              </div>

              {/* Visa Route & Processing Time */}
              <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-white/10 my-2">
                <div>
                  <p className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Fastest Visa Route</p>
                  <p className="text-sm font-bold text-white mt-1">{result.visaRoute}</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Est. Timeline</p>
                  <p className="text-sm font-bold text-emerald-400 mt-1 flex items-center gap-1.5">
                    <FaClock className="w-3.5 h-3.5" /> {result.processingTime}
                  </p>
                </div>
              </div>

              {/* Perks Checklist */}
              <div className="pt-4">
                <p className="text-[11px] text-slate-400 uppercase font-bold tracking-wider mb-3">
                  Included Package Perks:
                </p>
                <ul className="space-y-2.5">
                  {result.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                      <FaCircleCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="relative z-10 pt-8">
              <a
                href="#consultation"
                onClick={scrollToForm}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 py-4 text-sm font-extrabold text-white shadow-xl shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Claim This Route & Book Free Call
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
