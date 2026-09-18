"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type LanguageCode = "en" | "hi" | "ar" | "bn" | "ne";

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeName: string;
  flag: string;
}

export const supportedLanguages: LanguageOption[] = [
  { code: "en", label: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "hi", label: "Hindi", nativeName: "हिंदी", flag: "🇮🇳" },
  { code: "ar", label: "Arabic", nativeName: "العربية", flag: "🇦🇪" },
  { code: "bn", label: "Bengali", nativeName: "বাংলা", flag: "🇧🇩" },
  { code: "ne", label: "Nepali", nativeName: "नेपाली", flag: "🇳🇵" },
];

interface LanguageContextType {
  currentLang: LanguageCode;
  changeLanguage: (lang: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLang: "en",
  changeLanguage: () => {},
});

export const setTranslateCookies = (langCode: LanguageCode) => {
  if (typeof window === "undefined") return;
  const hostname = window.location.hostname;
  const val = `/en/${langCode}`;
  
  document.cookie = `googtrans=${val}; path=/;`;
  document.cookie = `googtrans=${val}; path=/; domain=${hostname};`;
  if (hostname.includes(".")) {
    document.cookie = `googtrans=${val}; path=/; domain=.${hostname};`;
  }
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLang, setCurrentLang] = useState<LanguageCode>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("user_lang") as LanguageCode;
    if (savedLang && supportedLanguages.some((l) => l.code === savedLang)) {
      setCurrentLang(savedLang);
      setTranslateCookies(savedLang);
    }
  }, []);

  const changeLanguage = (langCode: LanguageCode) => {
    setCurrentLang(langCode);
    localStorage.setItem("user_lang", langCode);
    setTranslateCookies(langCode);

    // Trigger select element change if Google Translate widget exists
    const selectEl = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event("change"));
      selectEl.dispatchEvent(new Event("input"));
    } else {
      window.location.reload();
    }
  };

  return (
    <LanguageContext.Provider value={{ currentLang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
