"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function GoogleTranslateScript() {
  const { currentLang } = useLanguage();

  useEffect(() => {
    // 1. Function to enforce 0px body top & hide banner frames
    const hideTranslateBanner = () => {
      if (document.body) {
        if (document.body.style.top !== "0px") {
          document.body.style.setProperty("top", "0px", "important");
        }
        if (document.body.style.marginTop !== "0px") {
          document.body.style.setProperty("margin-top", "0px", "important");
        }
      }

      // Hide top banner frames & skiptranslate header wrapper
      const bannerEls = document.querySelectorAll(
        ".goog-te-banner-frame, iframe.goog-te-banner-frame, body > .skiptranslate, iframe[id*=':1.container'], iframe[id*=':2.container'], .VIpgJd-Z44pHd-OJuFvd, #goog-gt-tt, .goog-te-spinner-pos"
      );
      bannerEls.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.setProperty("display", "none", "important");
        htmlEl.style.setProperty("visibility", "hidden", "important");
        htmlEl.style.setProperty("height", "0px", "important");
        htmlEl.style.setProperty("width", "0px", "important");
        htmlEl.style.setProperty("opacity", "0", "important");
        htmlEl.style.setProperty("pointer-events", "none", "important");
        htmlEl.style.setProperty("position", "absolute", "important");
        htmlEl.style.setProperty("top", "-9999px", "important");
      });
    };

    // 2. Function to apply language selection to Google Translate combo element
    const applyLanguage = (lang: string) => {
      const selectEl = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (selectEl && selectEl.value !== lang) {
        selectEl.value = lang;
        selectEl.dispatchEvent(new Event("change"));
        selectEl.dispatchEvent(new Event("input"));
      }
    };

    // 3. Inject Google Translate script if not present
    if (!document.getElementById("google-translate-script")) {
      window.googleTranslateElementInit = () => {
        if (window.google?.translate?.TranslateElement) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,hi,ar,bn,ne",
              autoDisplay: false,
            },
            "google_translate_element"
          );

          // Retry applying current language after widget initializes
          let attempts = 0;
          const checkInterval = setInterval(() => {
            attempts++;
            const selectEl = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
            if (selectEl) {
              const savedLang = localStorage.getItem("user_lang") || "en";
              applyLanguage(savedLang);
              clearInterval(checkInterval);
            }
            if (attempts > 30) clearInterval(checkInterval);
          }, 150);
        }
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      applyLanguage(currentLang);
    }

    const intervalId = setInterval(hideTranslateBanner, 200);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentLang]);

  useEffect(() => {
    const applyLang = () => {
      const selectEl = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (selectEl && selectEl.value !== currentLang) {
        selectEl.value = currentLang;
        selectEl.dispatchEvent(new Event("change"));
        selectEl.dispatchEvent(new Event("input"));
      }
    };

    applyLang();
    const timer = setTimeout(applyLang, 300);
    return () => clearTimeout(timer);
  }, [currentLang]);

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

// Global declaration for googleTranslateElementInit
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
