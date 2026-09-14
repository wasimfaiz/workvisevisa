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

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLang, setCurrentLang] = useState<LanguageCode>("en");

  useEffect(() => {
    // Check saved language preference or googtrans cookie
    const savedLang = localStorage.getItem("user_lang") as LanguageCode;
    if (savedLang && supportedLanguages.some((l) => l.code === savedLang)) {
      setCurrentLang(savedLang);
    }
  }, []);

  const changeLanguage = (langCode: LanguageCode) => {
    setCurrentLang(langCode);
    localStorage.setItem("user_lang", langCode);

    // Set Google Translate cookie
    const cookieDomain = window.location.hostname;
    if (langCode === "en") {
      document.cookie = `googtrans=/en/en; path=/; domain=${cookieDomain}`;
      document.cookie = `googtrans=/en/en; path=/;`;
    } else {
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${cookieDomain}`;
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
    }

    // Trigger select element change if Google Translate widget exists
    const selectEl = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event("change"));
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
