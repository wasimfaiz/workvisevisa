"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage, supportedLanguages, LanguageCode } from "@/context/LanguageContext";
import { FaGlobe, FaChevronDown, FaCheck } from "react-icons/fa6";

export default function LanguageSwitcher() {
  const { currentLang, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeLang =
    supportedLanguages.find((l) => l.code === currentLang) || supportedLanguages[0];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: LanguageCode) => {
    changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
        aria-label="Select Language"
        className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-800 shadow-xs hover:border-emerald-500 hover:bg-slate-50 transition-all cursor-pointer"
      >
        <FaGlobe className="w-3.5 h-3.5 text-emerald-600" />
        <span className="text-sm">{activeLang.flag}</span>
        <span className="font-bold text-slate-800">{activeLang.nativeName}</span>
        <FaChevronDown className={`w-2.5 h-2.5 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
            Select Language / भाषा चुनें
          </div>
          <div className="space-y-1">
            {supportedLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-bold transition-colors cursor-pointer ${
                  currentLang === lang.code
                    ? "bg-emerald-50 text-emerald-800"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-sm">{lang.flag}</span>
                  <div className="text-left">
                    <p className="font-bold leading-none">{lang.nativeName}</p>
                    <p className="text-[10px] text-slate-400 font-normal">{lang.label}</p>
                  </div>
                </div>
                {currentLang === lang.code && (
                  <FaCheck className="w-3 h-3 text-emerald-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
