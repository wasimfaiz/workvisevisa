"use client";

import { useEffect } from "react";

export default function GoogleTranslateScript() {
  useEffect(() => {
    // Function to enforce 0px body top & purge translate banners
    const purgeTranslateBanner = () => {
      if (document.body) {
        if (document.body.style.top !== "0px" && document.body.style.top !== "") {
          document.body.style.setProperty("top", "0px", "important");
        }
        if (document.body.style.marginTop !== "0px" && document.body.style.marginTop !== "") {
          document.body.style.setProperty("margin-top", "0px", "important");
        }
      }

      // Query any injected translate banners or iframes
      const selector = [
        ".goog-te-banner-frame",
        "iframe.goog-te-banner-frame",
        "iframe.skiptranslate",
        ".VIpgJd-Z44pHd-OJuFvd",
        "iframe[id*=':1.container']",
        "iframe[id*=':2.container']",
        "iframe[src*='translate.google']",
        "iframe[src*='translate.googleapis']",
        "body > .skiptranslate",
      ].join(", ");

      const bannerEls = document.querySelectorAll(selector);
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
        // Remove from DOM if possible
        if (htmlEl.parentNode) {
          try {
            htmlEl.parentNode.removeChild(htmlEl);
          } catch {
            // ignore if already detached
          }
        }
      });
    };

    // Add Google Translate Script dynamically if not already added
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

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
        }
      };
    }

    // MutationObserver to catch any dynamic insertions or style shifts
    const observer = new MutationObserver(() => {
      purgeTranslateBanner();
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    // Backup interval enforcer
    const intervalId = setInterval(purgeTranslateBanner, 80);

    return () => {
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div id="google_translate_element" className="hidden notranslate" translate="no" aria-hidden="true" />
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
