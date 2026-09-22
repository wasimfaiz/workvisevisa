"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaStar,
  FaAward,
} from "react-icons/fa6";
import { testimonials } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Testimonials() {
  const { currentLang } = useLanguage();
  const tNav = translations[currentLang]?.testimonials || translations.en.testimonials;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    timerRef.current = setInterval(next, 6000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 6000);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 150 : -150, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -150 : 150, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 overflow-hidden bg-slate-50"
    >
      <div className="absolute inset-0 section-alt pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-4 shadow-sm">
            <FaAward className="w-3.5 h-3.5" /> {tNav.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            {tNav.title}
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-slate-600 text-sm sm:text-base font-medium">
            {tNav.subtitle}
          </p>
        </motion.div>

        {/* Carousel stage */}
        <div className="relative mx-auto max-w-4xl">
          {/* Floating avatar badges around carousel */}
          <div className="hidden md:block">
            {testimonials.map((item, idx) => {
              const active = idx === current;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > current ? 1 : -1);
                    setCurrent(idx);
                    resetTimer();
                  }}
                  className={`absolute z-20 flex items-center gap-2 rounded-full p-1.5 pr-3 border transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-emerald-600 border-emerald-600 text-white scale-105 shadow-md"
                      : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-sm"
                  }`}
                  style={{
                    top: `${15 + (idx % 3) * 35}%`,
                    left: idx < 3 ? `${-4 + idx * 2}%` : "auto",
                    right: idx >= 3 ? `${-4 + (idx - 3) * 2}%` : "auto",
                  }}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">
                    {item.flag}
                  </div>
                  <span className="text-xs font-bold truncate max-w-[90px]">
                    {item.name.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="min-h-[340px] sm:min-h-[300px] flex items-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 text-center shadow-xl overflow-hidden">
                  <FaQuoteLeft className="mx-auto mb-6 w-10 h-10 text-emerald-500/30" />

                  {/* 5-star rating */}
                  <div className="flex justify-center gap-1.5 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className="w-4 h-4 text-emerald-500"
                      />
                    ))}
                  </div>

                  <p className="text-base sm:text-xl text-slate-700 leading-relaxed italic mb-8 max-w-2xl mx-auto font-normal">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="flex items-center justify-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 text-lg font-bold text-white shadow-md">
                      {t.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <p className="text-base font-bold text-slate-900 font-display">
                        {t.name}
                      </p>
                      <p className="text-xs text-emerald-700 font-bold">
                        {t.role} · <span className="text-slate-600 font-medium">{t.company}</span>{" "}
                        <span className="ml-1 text-sm">{t.flag}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={() => { prev(); resetTimer(); }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700 transition-all cursor-pointer shadow-sm"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                    resetTimer();
                  }}
                  className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                    i === current
                      ? "w-8 bg-gradient-to-r from-emerald-600 to-teal-600"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => { next(); resetTimer(); }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700 transition-all cursor-pointer shadow-sm"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
