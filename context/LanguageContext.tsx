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
  const parts = hostname.split(".");
  const domains = ["", hostname, `.${hostname}`];

  // Include parent domains for hosting subdomains (e.g. www.workwisevisa.com -> workwisevisa.com)
  for (let i = 0; i < parts.length - 1; i++) {
    const parentDomain = parts.slice(i).join(".");
    domains.push(parentDomain, `.${parentDomain}`);
  }

  const paths = ["/", "", "/en", "/ar", "/hi"];
  const cookieNames = ["googtrans", "googtrans_ext", "googtrans_default"];

  cookieNames.forEach((name) => {
    domains.forEach((domain) => {
      paths.forEach((path) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path};${
          domain ? ` domain=${domain};` : ""
        }`;
      });
    });
  });
};

export const applyTranslateCookie = (langCode: LanguageCode) => {
  if (typeof window === "undefined") return;
  purgeAllTranslateCookies();

  if (langCode === "hi" || langCode === "ar") {
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
      applyTranslateCookie(savedLang);
    } else {
      localStorage.setItem("user_lang", "en");
      setCurrentLang("en");
      purgeAllTranslateCookies();
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
