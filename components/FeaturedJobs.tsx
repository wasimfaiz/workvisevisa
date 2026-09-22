"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaBriefcase,
  FaLocationDot,
  FaMoneyBillWave,
  FaPassport,
  FaArrowRight,
  FaBolt,
  FaCircleCheck,
  FaBuilding,
  FaFire,
} from "react-icons/fa6";

interface JobOpening {
  id: string;
  title: string;
  category: string;
  company: string;
  location: string;
  countryCode: string;
  flag: string;
  salary: string;
  visaType: string;
  openings: number;
  urgent: boolean;
  perks: string[];
}

const categories = [
  "All",
  "Technology & IT",
  "Healthcare & Medical",
  "Engineering & Energy",
  "Finance & Management",
];

const jobOpenings: JobOpening[] = [
  {
    id: "job-1",
    title: "Senior Full-Stack Software Engineer",
    category: "Technology & IT",
    company: "Emirates Digital Systems",
    location: "Dubai, UAE",
    countryCode: "AE",
    flag: "🇦🇪",
    salary: "AED 22,000 – 32,000 / mo",
    visaType: "Green / Golden Visa Sponsored",
    openings: 5,
    urgent: true,
    perks: ["100% Tax-Free Salary", "Full Family Health Cover", "Annual Flight Stipend"],
  },
  {
    id: "job-2",
    title: "ICU & Specialist Registered Nurse",
    category: "Healthcare & Medical",
    company: "Helios Medical Network",
    location: "Munich, Germany",
    countryCode: "DE",
    flag: "🇩🇪",
    salary: "€3,800 – €5,400 / mo",
    visaType: "EU Blue Card / Fast-Track Visa",
    openings: 8,
    urgent: true,
    perks: ["German B2 Training Included", "Permanent Contract", "PR Pathway in 21 Months"],
  },
  {
    id: "job-3",
    title: "Civil & Infrastructure Project Manager",
    category: "Engineering & Energy",
    company: "Red Sea Giga-Projects",
    location: "Riyadh, Saudi Arabia",
    countryCode: "SA",
    flag: "🇸🇦",
    salary: "SAR 25,000 – 38,000 / mo",
    visaType: "Work Permit & Iqama Provided",
    openings: 4,
    urgent: true,
    perks: ["Tax-Free Salary Package", "Free Executive Accommodation", "End of Service Bonus"],
  },
  {
    id: "job-4",
    title: "Cloud DevOps & Infrastructure Lead",
    category: "Technology & IT",
    company: "NorthStar Cloud Canada",
    location: "Toronto, Canada",
    countryCode: "CA",
    flag: "🇨🇦",
    salary: "CAD $7,500 – $10,500 / mo",
    visaType: "Global Talent Stream / GTS Visa",
    openings: 3,
    urgent: false,
    perks: ["Fast 2-Week Processing", "Spouse Open Work Permit", "Direct PR Path"],
  },
  {
    id: "job-5",
    title: "Senior Financial Risk Analyst",
    category: "Finance & Management",
    company: "Global Banking Corp",
    location: "London, United Kingdom",
    countryCode: "GB",
    flag: "🇬🇧",
    salary: "£4,500 – £6,800 / mo",
    visaType: "Skilled Worker Visa (Tier 2)",
    openings: 2,
    urgent: false,
    perks: ["NHS Free Healthcare", "5-Year ILR Settlement Path", "Performance Bonus"],
  },
  {
    id: "job-6",
    title: "Mining & Heavy Equipment Mechanical Engineer",
    category: "Engineering & Energy",
    company: "Euro-Asia Resources",
    location: "Moscow, Russia",
    countryCode: "RU",
    flag: "🇷🇺",
    salary: "₽320,000 – ₽450,000 / mo",
    visaType: "Highly Qualified Specialist (HQS)",
    openings: 6,
    urgent: true,
    perks: ["Reduced 13% Flat Tax Rate", "Company Vehicle & Housing", "3-Year Multi-Entry Visa"],
  },
];

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function FeaturedJobs() {
  const { currentLang } = useLanguage();
  const t = translations[currentLang]?.featuredJobs || translations.en.featuredJobs;
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredJobs =
    activeCategory === "All"
      ? jobOpenings
      : jobOpenings.filter((j) => j.category === activeCategory);

  const scrollToConsultation = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="jobs" className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 section-alt pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-4 shadow-sm">
            <FaFire className="w-3.5 h-3.5 text-emerald-600 animate-pulse" /> {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-slate-600 text-lg font-medium">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2.5 mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/20"
                  : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Job Cards Grid (3x2) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job, idx) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="group relative rounded-2xl border border-slate-200/90 bg-white p-6 transition-all duration-200 hover:border-emerald-500/50 hover:shadow-xl shadow-sm flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Top Bar: Location Badge & Urgent Hiring Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200/90 px-3 py-1 text-xs font-bold text-slate-800">
                      <img
                        src={`https://flagcdn.com/w40/${job.countryCode.toLowerCase()}.png`}
                        alt={job.location}
                        className="h-3.5 w-5 object-cover rounded shadow-xs"
                      />
                      <span>{job.location}</span>
                    </div>

                    {job.urgent ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
                        <FaBolt className="w-3 h-3 text-emerald-600" />
                        Urgent · {job.openings} Openings
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
                        {job.openings} Openings
                      </span>
                    )}
                  </div>

                  {/* Job Title & Company */}
                  <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1.5 leading-snug">
                    {job.title}
                  </h3>
                  <p className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-4">
                    <FaBuilding className="w-3.5 h-3.5 text-slate-400" />
                    {job.company}
                  </p>

                  {/* Salary & Visa Sponsorship Pill Box */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-3 mb-5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                      <FaMoneyBillWave className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                      <FaPassport className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>{job.visaType}</span>
                    </div>
                  </div>

                  {/* Included Perks List */}
                  <ul className="space-y-2 mb-6">
                    {job.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply Button */}
                <a
                  href="#consultation"
                  onClick={scrollToConsultation}
                  className="group/btn flex items-center justify-center gap-2 w-full rounded-xl bg-slate-900 py-3 text-xs font-bold text-white shadow-sm hover:bg-emerald-600 transition-all duration-200 cursor-pointer"
                >
                  Apply & Claim Visa Sponsor
                  <FaArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
