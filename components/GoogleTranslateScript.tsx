"use client";

import { useEffect } from "react";

import { purgeAllTranslateCookies } from "@/context/LanguageContext";

export default function GoogleTranslateScript() {
  useEffect(() => {
    // Load Google Translate script ONLY when user_lang is explicitly "hi" or "ar"
    const userLang = typeof window !== "undefined" ? localStorage.getItem("user_lang") : null;

    if (userLang === "hi" || userLang === "ar") {
      if (!document.getElementById("google-translate-script")) {
        window.googleTranslateElementInit = () => {
          if (window.google?.translate?.TranslateElement) {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: "en",
                includedLanguages: "en,hi,ar",
                autoDisplay: false,
              },
              "google_translate_element"
            );
          }
        };

        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    } else {
      // Strictly default to English: Purge any leftover google translation cookies
      purgeAllTranslateCookies();
    }
  }, []);

  const userLang = typeof window !== "undefined" ? localStorage.getItem("user_lang") : null;

  if (userLang !== "hi" && userLang !== "ar") {
    return null;
  }

  return (
    <div
      id="google_translate_element"
      style={{
        position: "fixed",
        left: "-9999px",
        top: "-9999px",
        width: "1px",
        height: "1px",
        opacity: 0.001,
        pointerEvents: "none",
        zIndex: -9999,
      }}
    />
  );
}

// Global declaration
declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement: new (options: Record<string, unknown>, elementId: string) => void;
      };
    };
  }
}
