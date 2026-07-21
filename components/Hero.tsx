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

const flags = [
  { emoji: "🇦🇪", name: "UAE" },
  { emoji: "🇸🇦", name: "Saudi Arabia" },
  { emoji: "🇶🇦", name: "Qatar" },
  { emoji: "🇩🇪", name: "Germany" },
  { emoji: "🇫🇷", name: "France" },
  { emoji: "🇨🇦", name: "Canada" },
  { emoji: "🇺🇸", name: "United States" },
  { emoji: "🇬🇧", name: "United Kingdom" },
  { emoji: "🇷🇺", name: "Russia" },
];

/* ── Photorealistic Satellite Motion World Map Component ─────── */
function PhotorealisticWorldMap() {
  const [mounted, setMounted] = useState(false);
  const [activePin, setActivePin] = useState<string>("UAE");

  useEffect(() => {
    setMounted(true);
  }, []);

  /* Destination pin coordinates calibrated onto photorealistic map overlay */
  const destinationPins = [
    { id: "UAE", name: "Dubai, UAE", flag: "🇦🇪", x: "65%", y: "48%", jobs: "1,400+ Jobs", visa: "Green / Golden Visa" },
    { id: "GER", name: "Berlin, Germany", flag: "🇩🇪", x: "51%", y: "32%", jobs: "980+ Jobs", visa: "EU Blue Card / Opportunity Card" },
    { id: "UK", name: "London, UK", flag: "🇬🇧", x: "47%", y: "30%", jobs: "1,150+ Jobs", visa: "Skilled Worker Visa" },
    { id: "CAN", name: "Toronto, Canada", flag: "🇨🇦", x: "27%", y: "31%", jobs: "850+ Jobs", visa: "Express Entry / PNP" },
    { id: "USA", name: "New York, USA", flag: "🇺🇸", x: "28%", y: "38%", jobs: "1,200+ Jobs", visa: "H-1B / O-1 / L-1" },
    { id: "KSA", name: "Riyadh, Saudi", flag: "🇸🇦", x: "62%", y: "51%", jobs: "760+ Jobs", visa: "Work Visa" },
    { id: "RUS", name: "Moscow, Russia", flag: "🇷🇺", x: "56%", y: "24%", jobs: "650+ Jobs", visa: "HQS Work Permit" },
  ];

  /* Arc paths starting from India origin (71%, 48%) */
  const flightPaths = [
    { id: "UAE", d: "M 71 48 Q 68 45, 65 48", color: "#10b981" },
    { id: "GER", d: "M 71 48 Q 62 25, 51 32", color: "#06b6d4" },
    { id: "UK", d: "M 71 48 Q 58 20, 47 30", color: "#3b82f6" },
    { id: "CAN", d: "M 71 48 Q 48 10, 27 31", color: "#10b981" },
    { id: "USA", d: "M 71 48 Q 49 18, 28 38", color: "#f59e0b" },
    { id: "KSA", d: "M 71 48 Q 66 47, 62 51", color: "#10b981" },
    { id: "RUS", d: "M 71 48 Q 63 20, 56 24", color: "#06b6d4" },
  ];

  return (
    <div className="relative w-full max-w-[620px] h-[500px] sm:h-[540px] lg:h-[560px] flex items-center justify-center">
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

          {/* SVG Flight Path Lines Overlay */}
          <svg
            viewBox="0 0 100 60"
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
          >
            {/* Latitude / Longitude Grid Lines */}
            <g stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.15" strokeDasharray="1 1">
              <line x1="0" y1="15" x2="100" y2="15" />
              <line x1="0" y1="30" x2="100" y2="30" />
              <line x1="0" y1="45" x2="100" y2="45" />
              <line x1="25" y1="0" x2="25" y2="60" />
              <line x1="50" y1="0" x2="50" y2="60" />
              <line x1="75" y1="0" x2="75" y2="60" />
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
                    strokeWidth={active ? "0.9" : "0.5"}
                    strokeDasharray={active ? "none" : "2 1"}
                    opacity={active ? "1" : "0.75"}
                  />
                </g>
              );
            })}

            {/* Origin Placement Hub (India: 71, 48) */}
            <circle cx="71" cy="48" r="1.4" fill="#10b981" />
            <circle cx="71" cy="48" r="3" fill="none" stroke="#10b981" strokeWidth="0.4" className="animate-ping" />
          </svg>

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
                    <span className="absolute flex h-7 w-7 rounded-full bg-emerald-400/50 animate-ping" />
                    <div
                      className={`relative flex h-8 w-8 items-center justify-center rounded-full border shadow-xl transition-all duration-200 ${
                        isSelected
                          ? "bg-gradient-to-br from-amber-500 to-amber-600 border-white text-white scale-125 z-40 shadow-amber-500/60"
                          : "bg-slate-900/90 border-emerald-400 text-white group-hover:scale-110"
                      }`}
                    >
                      <span className="text-xs">{pin.flag}</span>
                    </div>
                  </div>

                  {/* Active Tooltip Info Card */}
                  <div
                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 rounded-xl border border-white/20 bg-slate-900/95 p-2.5 text-center shadow-2xl transition-all duration-200 pointer-events-none ${
                      isSelected
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-90 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0"
                    }`}
                  >
                    <p className="text-xs font-bold text-white flex items-center justify-center gap-1">
                      <span>{pin.flag}</span> {pin.name}
                    </p>
                    <p className="text-[11px] font-bold text-emerald-400 mt-0.5">
                      {pin.jobs}
                    </p>
                    <p className="text-[10px] text-slate-300">
                      {pin.visa}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Map Footer Route Selector */}
        <div className="flex items-center justify-between px-3 pt-2.5 border-t border-slate-100 z-20">
          <span className="text-xs font-semibold text-slate-600">
            Select route destination:
          </span>
          <div className="flex gap-1.5 flex-wrap">
            {destinationPins.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePin(p.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activePin === p.id
                    ? "bg-amber-500 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {p.flag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Hero Section ─────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-50"
    >
      {/* ── background layers ────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100" />
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] rounded-full bg-teal-500/4 blur-[90px]" />
        <div className="absolute inset-0 dot-grid opacity-40" />
      </div>

      {/* ── content ──────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-32 pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* left text */}
          <div className="text-center lg:text-left">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 mb-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaWandMagicSparkles className="w-4 h-4 text-amber-600" />
              <span className="text-sm text-emerald-800 font-semibold">
                Trusted by 5,000+ professionals worldwide
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-display font-extrabold leading-[1.07] tracking-tight text-slate-900 mb-6"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Your Career.{" "}
              <span className="gradient-text">Anywhere</span>
              <br className="hidden sm:block" /> in the&nbsp;World.
            </motion.h1>

            <motion.p
              className="max-w-xl text-lg sm:text-xl leading-relaxed text-slate-600 mb-10 mx-auto lg:mx-0 font-medium"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We connect skilled professionals with verified employers in{" "}
              <span className="text-slate-900 font-bold">12+ countries</span> —
              handling every step from job matching to visa approval to landing
              support.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="#consultation"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Book Free Consultation
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-800 shadow-sm hover:bg-slate-100 hover:border-slate-400 transition-all duration-200"
              >
                Explore Services
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
                { Icon: FaCalendarDays, val: "15+", sub: "Years" },
                { Icon: FaUsers, val: "5,000+", sub: "Placements" },
                { Icon: FaGlobe, val: "98%", sub: "Visa Rate" },
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

      {/* ── country marquee ──────────────────────────────── */}
      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="overflow-hidden py-3.5">
          <div className="marquee-track">
            {[...flags, ...flags].map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-6 text-slate-700 shrink-0"
              >
                <span className="text-2xl">{f.emoji}</span>
                <span className="text-sm font-semibold whitespace-nowrap">
                  {f.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
