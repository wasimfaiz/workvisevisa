"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  FaArrowRight,
  FaGlobe,
  FaUsers,
  FaCalendarDays,
  FaWandMagicSparkles,
  FaPlaneDeparture,
} from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const hiringAlerts = [
  {
    code: "ae",
    country: "Dubai, UAE",
    role: "Retail Store Manager",
    salary: "AED 8,500/mo Tax-Free",
    visa: "Employment Visa",
    urgent: true,
  },
  {
    code: "sa",
    country: "Saudi Arabia",
    role: "Heavy Trailer Driver",
    salary: "SAR 4,800/mo + Accom",
    visa: "Work Permit Direct",
    urgent: true,
  },
  {
    code: "qa",
    country: "Qatar (Doha)",
    role: "Executive Head Chef",
    salary: "QAR 9,500/mo + Food",
    visa: "Hospitality Visa",
    urgent: true,
  },
  {
    code: "de",
    country: "Germany",
    role: "Senior Accountant",
    salary: "€48K–€55K/yr",
    visa: "EU Opportunity Card",
    urgent: false,
  },
  {
    code: "ae",
    country: "Dubai, UAE",
    role: "Hypermarket Cashier",
    salary: "AED 4,500/mo + Accom",
    visa: "2-Yr Work Visa",
    urgent: true,
  },
  {
    code: "ca",
    country: "Canada (Toronto)",
    role: "Warehouse Supervisor",
    salary: "CAD $54,000/yr",
    visa: "Work Permit / PNP",
    urgent: true,
  },
  {
    code: "gb",
    country: "London, UK",
    role: "Restaurant Captain / Waiter",
    salary: "£26,000/yr + Tips",
    visa: "Skilled Worker Visa",
    urgent: false,
  },
  {
    code: "sa",
    country: "Riyadh, Saudi",
    role: "Construction Site Supervisor",
    salary: "SAR 6,200/mo + Accom",
    visa: "Fast-Track Visa",
    urgent: true,
  },
  {
    code: "ae",
    country: "Abu Dhabi, UAE",
    role: "Shopkeeper / Sales Executive",
    salary: "AED 5,200/mo",
    visa: "Employment Visa",
    urgent: false,
  },
  {
    code: "qa",
    country: "Qatar (Doha)",
    role: "Logistics Helper / Packer",
    salary: "QAR 3,200/mo + Accom",
    visa: "Immediate Visa",
    urgent: true,
  },
];

const placementMilestones = [
  {
    name: "Amit P.",
    role: "Heavy Vehicle Driver",
    dest: "Riyadh, Saudi 🇸🇦",
    time: "Visa Approved in 10 Days",
    tag: "Verified Placement",
  },
  {
    name: "Sunil K.",
    role: "Store Manager",
    dest: "Dubai, UAE 🇦🇪",
    time: "Employment Visa Stamp",
    tag: "Free Accommodation",
  },
  {
    name: "Deepak M.",
    role: "Executive Chef",
    dest: "Doha, Qatar 🇶🇦",
    time: "Work Permit Cleared",
    tag: "Flight Provided",
  },
  {
    name: "Ritu S.",
    role: "Retail Cashier",
    dest: "Abu Dhabi, UAE 🇦🇪",
    time: "Visa Issued in 7 Days",
    tag: "Joined Last Week",
  },
  {
    name: "Manish G.",
    role: "Site Supervisor",
    dest: "Toronto, Canada 🇨🇦",
    time: "Work Permit Approved",
    tag: "Relocation Package",
  },
  {
    name: "Rajesh V.",
    role: "General Accountant",
    dest: "Frankfurt, Germany 🇩🇪",
    time: "Opportunity Card Granted",
    tag: "Job Offer Direct",
  },
  {
    name: "Suresh T.",
    role: "Warehouse Helper",
    dest: "Dubai, UAE 🇦🇪",
    time: "Visa Stamped in 5 Days",
    tag: "Company Transport",
  },
  {
    name: "Vikas N.",
    role: "Hospitality Waiter",
    dest: "London, UK 🇬🇧",
    time: "Tier 2 Sponsor Approved",
    tag: "Work Visa",
  },
];

/* ── Photorealistic Satellite Motion World Map Component ─────── */
function PhotorealisticWorldMap() {
  const [mounted, setMounted] = useState(false);
  const [activePin, setActivePin] = useState<string>("UAE");

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActivePin((prev) => {
        const ids = ["UAE", "GER", "UK", "CAN", "USA", "KSA", "RUS"];
        const idx = ids.indexOf(prev);
        return ids[(idx + 1) % ids.length];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  /* Destination pin coordinates calibrated onto photorealistic map overlay */
  const destinationPins = [
    { id: "UAE", name: "Dubai, UAE", short: "Dubai", code: "ae", x: "64%", y: "42%", jobs: "1,400+ Jobs", visa: "Green / Golden Visa" },
    { id: "GER", name: "Berlin, Germany", short: "Berlin", code: "de", x: "51%", y: "30%", jobs: "980+ Jobs", visa: "EU Blue Card / Opportunity Card" },
    { id: "UK", name: "London, UK", short: "London", code: "gb", x: "46%", y: "29%", jobs: "1,150+ Jobs", visa: "Skilled Worker Visa" },
    { id: "CAN", name: "Toronto, Canada", short: "Toronto", code: "ca", x: "22%", y: "28%", jobs: "850+ Jobs", visa: "Express Entry / PNP" },
    { id: "USA", name: "New York, USA", short: "New York", code: "us", x: "18%", y: "34%", jobs: "1,200+ Jobs", visa: "H-1B / O-1 / L-1" },
    { id: "KSA", name: "Riyadh, Saudi", short: "Riyadh", code: "sa", x: "59%", y: "44%", jobs: "760+ Jobs", visa: "Work Visa" },
    { id: "RUS", name: "Moscow, Russia", short: "Moscow", code: "ru", x: "59%", y: "24%", jobs: "650+ Jobs", visa: "HQS Work Permit" },
  ];

  /* Arc paths starting from India origin (76%, 46%) */
  const flightPaths = [
    { id: "UAE", d: "M 76 46 Q 70 41, 64 42", color: "#10b981" },
    { id: "GER", d: "M 76 46 Q 63 24, 51 30", color: "#06b6d4" },
    { id: "UK", d: "M 76 46 Q 60 22, 46 29", color: "#3b82f6" },
    { id: "CAN", d: "M 76 46 Q 48 10, 22 28", color: "#10b981" },
    { id: "USA", d: "M 76 46 Q 46 16, 18 34", color: "#f59e0b" },
    { id: "KSA", d: "M 76 46 Q 67 40, 59 44", color: "#10b981" },
    { id: "RUS", d: "M 76 46 Q 67 22, 59 24", color: "#06b6d4" },
  ];

  const activePinData = destinationPins.find((p) => p.id === activePin);
  const activePathObj = flightPaths.find((fp) => fp.id === activePin);

  return (
    <div className="relative w-full max-w-[620px] h-[360px] sm:h-[480px] lg:h-[520px] flex items-center justify-center">
      {/* Ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-emerald-500/10 blur-[90px]" />
      </div>

      {/* Main Map Card Container (Light Theme Framework) */}
      <div className="relative w-full h-full rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xl flex flex-col justify-between overflow-hidden">
        {/* Header HUD Bar */}
        <div className="flex items-center justify-between px-3 py-2.5 border-b border-slate-100 z-20">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider">
              Satellite Flight Radar
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <FaPlaneDeparture className="w-3.5 h-3.5 text-emerald-600" /> Live Visa Routes
          </div>
        </div>

        {/* Photorealistic Map Graphic Canvas Container */}
        <div className="relative w-full flex-1 my-3 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950">
          {/* Photorealistic Satellite Map Background Image */}
          <Image
            src="/images/world_map_satellite.png"
            alt="Photorealistic Satellite World Map"
            fill
            sizes="(max-width: 768px) 100vw, 620px"
            className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            priority
          />

          {/* Map Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30 pointer-events-none" />

          {/* Floating Glassmorphic Active HUD Banner */}
          {activePinData && (
            <div className="absolute top-3 left-3 right-3 sm:left-4 sm:right-auto z-30 flex items-center justify-between gap-3 px-3 py-2 rounded-xl border border-white/20 bg-slate-950/80 backdrop-blur-md text-white shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-2">
                <img
                  src={`https://flagcdn.com/w80/${activePinData.code}.png`}
                  alt={activePinData.name}
                  className="w-5 h-3.5 object-cover rounded shadow-2xs shrink-0 border border-white/20"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white tracking-wide">{activePinData.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                      {activePinData.jobs}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-300 font-medium">{activePinData.visa}</p>
                </div>
              </div>
            </div>
          )}

          {/* SVG Flight Path Lines Overlay */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
          >
            {/* Latitude / Longitude Grid Lines */}
            <g stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.2" strokeDasharray="1 1">
              <line x1="0" y1="25" x2="100" y2="25" />
              <line x1="0" y1="50" x2="100" y2="50" />
              <line x1="0" y1="75" x2="100" y2="75" />
              <line x1="25" y1="0" x2="25" y2="100" />
              <line x1="50" y1="0" x2="50" y2="100" />
              <line x1="75" y1="0" x2="75" y2="100" />
            </g>

            {/* Flight Path Arc Lines */}
            {flightPaths.map((fp) => {
              const active = activePin === fp.id;
              return (
                <g key={fp.id}>
                  <path
                    d={fp.d}
                    fill="none"
                    stroke={active ? "#f59e0b" : fp.color}
                    strokeWidth={active ? "1" : "0.4"}
                    strokeDasharray={active ? "none" : "2 1"}
                    opacity={active ? "1" : "0.45"}
                  />
                </g>
              );
            })}

            {/* Active Flight Signal Pulse travelling along path */}
            {activePathObj && (
              <g>
                <circle r="1.8" fill="#f59e0b">
                  <animateMotion path={activePathObj.d} dur="2.4s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5" fill="none" stroke="#f59e0b" strokeWidth="0.4" opacity="0.6">
                  <animateMotion path={activePathObj.d} dur="2.4s" repeatCount="indefinite" />
                </circle>
              </g>
            )}

            {/* Origin Placement Hub (India: 76, 46) */}
            <circle cx="76" cy="46" r="1.5" fill="#10b981" />
            <circle cx="76" cy="46" r="3.5" fill="none" stroke="#10b981" strokeWidth="0.5" className="animate-ping" />
          </svg>

          {/* India Origin Hub Label Badge */}
          <div
            className="absolute z-20 transform -translate-x-1/2 -translate-y-full mb-1 pointer-events-none"
            style={{ left: "76%", top: "45%" }}
          >
            <div className="flex items-center gap-1.5 bg-emerald-950/90 border border-emerald-400/70 backdrop-blur-md px-2 py-0.5 rounded-md shadow-lg text-[9px] font-bold text-emerald-300">
              <img
                src="https://flagcdn.com/w80/in.png"
                alt="India"
                className="w-3.5 h-2.5 object-cover rounded shadow-2xs shrink-0"
              />
              <span>India Hub</span>
            </div>
          </div>

          {/* Destination Pins & Hotspots */}
          {mounted &&
            destinationPins.map((pin) => {
              const isSelected = activePin === pin.id;
              return (
                <div
                  key={pin.id}
                  className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ left: pin.x, top: pin.y }}
                  onClick={() => setActivePin(pin.id)}
                >
                  <div className="relative flex items-center justify-center">
                    {isSelected && (
                      <span className="absolute flex h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-amber-400/40 animate-ping pointer-events-none" />
                    )}
                    <div
                      className={`relative flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border shadow-xl transition-all duration-300 overflow-hidden ${
                        isSelected
                          ? "bg-gradient-to-br from-amber-500 to-emerald-600 border-white scale-125 z-40 shadow-amber-500/50 p-1"
                          : "bg-slate-950/80 border-white/30 backdrop-blur-md group-hover:border-emerald-400 group-hover:scale-110 p-1"
                      }`}
                    >
                      <img
                        src={`https://flagcdn.com/w80/${pin.code}.png`}
                        alt={pin.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>

                  {/* Clean Pin Label Badge (Short Name Only - No Country Code Text) */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-1.5 py-0.5 rounded-md text-[9px] font-semibold whitespace-nowrap transition-all duration-200 pointer-events-none ${
                      isSelected
                        ? "bg-amber-500 text-slate-950 font-bold shadow-md"
                        : "bg-slate-900/90 text-slate-200 border border-white/10 opacity-85 group-hover:opacity-100 group-hover:bg-slate-900"
                    }`}
                  >
                    <span>{pin.short}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

/* ── Hero Section ─────────────────────────────────────────────── */
export default function Hero() {
  const { currentLang } = useLanguage();
  const t = translations[currentLang]?.hero || translations.en.hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-slate-50"
    >
      {/* ── background layers ────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100" />
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] rounded-full bg-teal-500/4 blur-[90px]" />
        <div className="absolute inset-0 dot-grid opacity-40" />
      </div>

      {/* ── Top Ticker (Live Job Demand Drives - Clean High-Contrast Glassmorphism) ── */}
      <div className="relative z-20 w-full bg-emerald-50/90 backdrop-blur-md border-b border-emerald-200/80 shadow-xs py-2.5 pt-20 sm:pt-22 overflow-hidden">
        {/* Animated Bottom Glow Laser Line */}
        <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent pointer-events-none" />

        {/* Gradient Edge Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-r from-emerald-50 via-emerald-50/90 to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-l from-emerald-50 via-emerald-50/90 to-transparent z-30 pointer-events-none" />

        <div className="overflow-hidden flex items-center">
          <div className="marquee-track flex items-center gap-3">
            {[...hiringAlerts, ...hiringAlerts].map((alert, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 rounded-full bg-white border border-slate-200/90 px-4 py-1.5 hover:border-emerald-500 hover:shadow-md transition-all duration-200 shadow-2xs shrink-0 group cursor-pointer"
              >
                <div className="flex items-center gap-1.5">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <img
                    src={`https://flagcdn.com/w80/${alert.code}.png`}
                    alt={`${alert.country} work visa destination flag`}
                    className="w-4 h-3 object-cover rounded shadow-2xs shrink-0 border border-slate-200"
                  />
                  <span className="text-xs font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {alert.country}
                  </span>
                </div>

                <span className="h-3.5 w-[1px] bg-slate-300" />

                <span className="text-xs font-extrabold text-emerald-900 whitespace-nowrap">
                  {alert.role}
                </span>

                <span className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-300/60 whitespace-nowrap hidden sm:inline-block">
                  {alert.salary}
                </span>

                <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200 whitespace-nowrap">
                  {alert.visa}
                </span>

                {alert.urgent && (
                  <span className="text-[10px] font-black uppercase tracking-wider text-rose-700 bg-rose-100/90 px-2.5 py-0.5 rounded-full border border-rose-300 animate-pulse">
                    Urgent
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── main content ──────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-16 sm:pb-20 flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          {/* left text */}
          <div className="text-center lg:text-left">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 mb-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaWandMagicSparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm text-emerald-800 font-semibold">
                {t.badge}
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight tracking-tight text-slate-900 mb-5"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t.titleLine1}{" "}
              <span className="gradient-text">{t.titleLine2}</span>
              <br className="hidden sm:block" /> {t.titleHighlight}
            </motion.h1>

            <motion.p
              className="max-w-xl text-sm sm:text-base leading-relaxed text-slate-600 mb-8 mx-auto lg:mx-0 font-medium"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="#consultation"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                {t.ctaConsultation}
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-800 shadow-sm hover:bg-slate-100 hover:border-slate-400 transition-all duration-200"
              >
                {t.ctaExploreServices}
              </a>
            </motion.div>

            {/* stats row */}
            <motion.div
              className="flex flex-wrap gap-8 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { Icon: FaCalendarDays, val: "5+", sub: t.yearsLabel },
                { Icon: FaUsers, val: "5,000+", sub: t.placementsLabel },
                { Icon: FaGlobe, val: "98%", sub: t.approvalRateLabel },
              ].map(({ Icon, val, sub }) => (
                <div key={val} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100/80 border border-emerald-200 text-emerald-700">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900 font-display leading-tight">
                      {val}
                    </p>
                    <p className="text-xs text-slate-500 font-medium">{sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* right - Photorealistic Satellite Motion World Map Component */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <PhotorealisticWorldMap />
          </motion.div>
        </div>
      </div>

      {/* ── Bottom Ticker (Live Candidate Placements - Clean High-Contrast Light Glass) ── */}
      <div className="relative z-20 w-full bg-slate-100/90 backdrop-blur-md border-t border-slate-200/90 shadow-2xs py-2.5 overflow-hidden">
        {/* Animated Top Glow Laser Line */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent pointer-events-none" />

        {/* Gradient Edge Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-r from-slate-100 via-slate-100/90 to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-l from-slate-100 via-slate-100/90 to-transparent z-30 pointer-events-none" />

        <div className="overflow-hidden flex items-center">
          <div className="marquee-track-reverse flex items-center gap-3">
            {[...placementMilestones, ...placementMilestones].map((m, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 rounded-full bg-white border border-slate-200/90 px-4 py-1.5 hover:border-emerald-500 hover:shadow-md transition-all duration-200 shadow-2xs shrink-0 group cursor-pointer"
              >
                <span className="text-xs">🎉</span>
                <span className="text-xs font-extrabold text-slate-900 whitespace-nowrap">
                  {m.name}
                </span>
                <span className="text-xs font-medium text-slate-600 whitespace-nowrap">
                  ({m.role})
                </span>
                <span className="text-xs font-extrabold text-emerald-800 whitespace-nowrap">
                  ➔ {m.dest}
                </span>
                <span className="h-3.5 w-[1px] bg-slate-300" />
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-300/60 whitespace-nowrap">
                  {m.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
