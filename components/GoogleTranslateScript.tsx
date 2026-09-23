"use client";

import { useEffect } from "react";

import { purgeAllTranslateCookies } from "@/context/LanguageContext";

export default function GoogleTranslateScript() {
  useEffect(() => {
    // Keep body top 0px and hide top banner bar
    const suppressTranslateBanner = () => {
      if (document.body) {
        if (document.body.style.top !== "0px" && document.body.style.top !== "") {
          document.body.style.setProperty("top", "0px", "important");
        }
        if (document.body.style.marginTop !== "0px" && document.body.style.marginTop !== "") {
          document.body.style.setProperty("margin-top", "0px", "important");
        }
      }

      const bannerEls = document.querySelectorAll(
        ".goog-te-banner-frame, iframe.goog-te-banner-frame, body > .skiptranslate, iframe[id*=':1.container'], iframe[id*=':2.container'], .VIpgJd-Z44pHd-OJuFvd, #goog-gt-tt, .goog-te-spinner-pos"
      );
      bannerEls.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.setProperty("display", "none", "important");
        htmlEl.style.setProperty("visibility", "hidden", "important");
        htmlEl.style.setProperty("opacity", "0", "important");
        htmlEl.style.setProperty("height", "0px", "important");
        htmlEl.style.setProperty("width", "0px", "important");
        htmlEl.style.setProperty("position", "absolute", "important");
        htmlEl.style.setProperty("top", "-9999px", "important");
      });
    };

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

    const intervalId = setInterval(suppressTranslateBanner, 150);
    return () => clearInterval(intervalId);
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
