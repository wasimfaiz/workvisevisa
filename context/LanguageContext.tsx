"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type LanguageCode = "en" | "hi" | "ar";

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
];

interface LanguageContextType {
  currentLang: LanguageCode;
  changeLanguage: (lang: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLang: "en",
  changeLanguage: () => {},
});

export const purgeAllTranslateCookies = () => {
  if (typeof window === "undefined") return;
  const hostname = window.location.hostname;
  const paths = ["/", ""];
  const domains = ["", hostname, `.${hostname}`];

  domains.forEach((domain) => {
    paths.forEach((path) => {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path};${
        domain ? ` domain=${domain};` : ""
      }`;
    });
  });
};

export const applyTranslateCookie = (langCode: LanguageCode) => {
  if (typeof window === "undefined") return;
  purgeAllTranslateCookies();

  if (langCode !== "en") {
    const hostname = window.location.hostname;
    const val = `/en/${langCode}`;
    document.cookie = `googtrans=${val}; path=/;`;
    document.cookie = `googtrans=${val}; path=/; domain=${hostname};`;
    if (hostname.includes(".")) {
      document.cookie = `googtrans=${val}; path=/; domain=.${hostname};`;
    }
  }
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLang, setCurrentLang] = useState<LanguageCode>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("user_lang") as LanguageCode;
    if (savedLang === "hi" || savedLang === "ar") {
      setCurrentLang(savedLang);
    } else {
      setCurrentLang("en");
      purgeAllTranslateCookies();
      localStorage.setItem("user_lang", "en");
    }
  }, []);

  const changeLanguage = (langCode: LanguageCode) => {
    if (langCode === currentLang) return;

    if (langCode === "hi" || langCode === "ar") {
      localStorage.setItem("user_lang", langCode);
      applyTranslateCookie(langCode);
      setCurrentLang(langCode);
      window.location.reload();
    } else {
      localStorage.setItem("user_lang", "en");
      purgeAllTranslateCookies();
      setCurrentLang("en");
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
