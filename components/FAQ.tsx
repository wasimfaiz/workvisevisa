"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaPlus, FaMinus, FaCircleQuestion, FaGlobe } from "react-icons/fa6";
import { faqs } from "@/lib/data";

/* ── Orbital Globe (Adjusted for Light Theme) ───────────────── */
function OrbitalGlobe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const rings = [
    { size: 280, dots: 8, dur: 35, dotSz: 5, op: 0.4 },
    { size: 200, dots: 6, dur: 25, dotSz: 4, op: 0.3 },
    { size: 130, dots: 4, dur: 18, dotSz: 3.5, op: 0.25 },
  ];

  const floatingFlags = [
    { f: "🇦🇪", x: -35, y: -80, d: 0 },
    { f: "🇩🇪", x: 100, y: -40, d: 0.8 },
    { f: "🇨🇦", x: 110, y: 70, d: 1.6 },
    { f: "🇬🇧", x: -60, y: 90, d: 0.4 },
    { f: "🇺🇸", x: -110, y: 10, d: 1.2 },
  ];

  return (
    <div className="relative w-full max-w-[360px] h-[360px] mx-auto mt-6 flex items-center justify-center">
      {/* ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-48 h-48 rounded-full bg-emerald-500/10 blur-[50px]" />
      </div>

      {/* center orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-16 h-16 rounded-full border border-emerald-300 bg-gradient-to-br from-emerald-100 to-teal-50 flex items-center justify-center shadow-md"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaGlobe className="w-7 h-7 text-emerald-700" />
        </motion.div>
      </div>

      {/* orbital rings with dots */}
      {rings.map((r, ri) => (
        <motion.div
          key={ri}
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{
            duration: r.dur,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="absolute rounded-full border border-emerald-300/60"
            style={{ width: `${r.size}px`, height: `${r.size}px` }}
          />
          {Array.from({ length: r.dots }).map((_, di) => {
            const rad = ((di / r.dots) * 360 * Math.PI) / 180;
            const x = Math.round(Math.cos(rad) * (r.size / 2) * 100) / 100;
            const y = Math.round(Math.sin(rad) * (r.size / 2) * 100) / 100;
            return (
              <motion.div
                key={di}
                className="absolute rounded-full bg-emerald-600"
                style={{
                  width: `${r.dotSz}px`,
                  height: `${r.dotSz}px`,
                  left: `calc(50% + ${x}px - ${r.dotSz / 2}px)`,
                  top: `calc(50% + ${y}px - ${r.dotSz / 2}px)`,
                }}
                animate={{
                  opacity: [r.op, r.op * 2, r.op],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 2.5 + di * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                suppressHydrationWarning
              />
            );
          })}
        </motion.div>
      ))}

      {/* floating flag bubbles */}
      {mounted &&
        floatingFlags.map(({ f, x, y, d }, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{ x: x - 16, y: y - 16 }}
            animate={{ y: [y - 16, y - 26, y - 16] }}
            transition={{
              duration: 3.5 + d,
              repeat: Infinity,
              ease: "easeInOut",
              delay: d,
            }}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-slate-200 shadow-md text-base">
              {f}
            </div>
          </motion.div>
        ))}
    </div>
  );
}

/* ── FAQ Section ─────────────────────────────────────────────── */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 overflow-hidden bg-slate-50"
    >
      <div className="absolute inset-0 section-alt pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Subheading & Orbital Globe Visual */}
          <motion.div
            className="lg:col-span-5 lg:sticky lg:top-28 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-4 shadow-sm">
              <FaCircleQuestion className="w-3.5 h-3.5" /> Clear Answers
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
              Got questions about visa processing, costs, and timeline guarantees? We have straightforward answers.
            </p>

            {/* Orbital Globe Motion Graphic on Left Bottom */}
            <div className="hidden lg:block">
              <OrbitalGlobe />
            </div>
          </motion.div>

          {/* Right Column: Accordion Questions */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  className={`relative rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-emerald-500/50 bg-white shadow-md"
                      : "border-slate-200/90 bg-white/80 hover:border-slate-300 shadow-sm"
                  }`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                >
                  {isOpen && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-500 to-teal-600" />
                  )}

                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 px-6 sm:px-7 py-5.5 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-emerald-100 border border-emerald-200 text-xs font-bold text-emerald-800 font-display">
                        0{i + 1}
                      </span>
                      <span className="text-base font-bold font-display text-slate-900">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isOpen
                          ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                          : "border-slate-200 bg-slate-100 text-slate-500"
                      }`}
                    >
                      {isOpen ? (
                        <FaMinus className="w-3.5 h-3.5" />
                      ) : (
                        <FaPlus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-7 pb-6 pl-16 sm:pl-17 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
