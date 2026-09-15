"use client";

import { useEffect } from "react";

export default function GoogleTranslateScript() {
  useEffect(() => {
    // Inject global CSS rule to hide Google Translate top banner without destroying its DOM elements
    const styleId = "google-translate-custom-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        /* Hide top Google Translate banner frame */
        .goog-te-banner-frame,
        iframe.goog-te-banner-frame,
        .VIpgJd-Z44pHd-OJuFvd,
        #goog-gt-tt,
        .goog-te-balloon-frame {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          height: 0 !important;
          width: 0 !important;
          pointer-events: none !important;
          position: absolute !important;
          top: -9999px !important;
          left: -9999px !important;
        }

        /* Prevent Google Translate from shifting document body top */
        body {
          top: 0px !important;
          margin-top: 0px !important;
          position: static !important;
        }

        /* Hide Google Translate highlights and tooltips */
        .goog-tooltip, .goog-tooltip:hover {
          display: none !important;
        }
        .goog-text-highlight {
          background-color: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }
      `;
      document.head.appendChild(style);
    }

    // Function to enforce 0px body top
    const fixBodyTop = () => {
      if (document.body) {
        if (document.body.style.top !== "0px" && document.body.style.top !== "") {
          document.body.style.setProperty("top", "0px", "important");
        }
        if (document.body.style.marginTop !== "0px" && document.body.style.marginTop !== "") {
          document.body.style.setProperty("margin-top", "0px", "important");
        }
      }
    };

    // Add Google Translate Script dynamically if not already added
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
        }
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    const intervalId = setInterval(fixBodyTop, 150);

    return () => {
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
