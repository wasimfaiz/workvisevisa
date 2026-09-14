/* ================================================================
   WorkWise Visa — i18n Translation Dictionary
   Instant native React translations for English & Hindi UI.
   ================================================================ */

export interface Translations {
  nav: {
    countries: string;
    services: string;
    industries: string;
    whyUs: string;
    process: string;
    blogs: string;
    bookConsultation: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    titleHighlight: string;
    description: string;
    ctaConsultation: string;
    ctaExploreServices: string;
    yearsLabel: string;
    placementsLabel: string;
    approvalRateLabel: string;
  };
  consultation: {
    title: string;
    subtitle: string;
    nameLabel: string;
    phoneLabel: string;
    destinationLabel: string;
    submitBtn: string;
  };
}

export const translations: Record<string, Translations> = {
  en: {
    nav: {
      countries: "Countries",
      services: "Services",
      industries: "Industries",
      whyUs: "Why Us",
      process: "Process",
      blogs: "Blogs",
      bookConsultation: "Book Consultation",
    },
    hero: {
      badge: "Trusted by 5,000+ Professionals Worldwide",
      titleLine1: "Your Career.",
      titleLine2: "Anywhere in the",
      titleHighlight: "World.",
      description:
        "We connect skilled trade workers, heavy drivers, factory technicians, and operational crews with verified employers in 12+ countries — handling every step from job matching to visa approval to landing support.",
      ctaConsultation: "Book Free Consultation",
      ctaExploreServices: "Explore Services",
      yearsLabel: "Years Excellence",
      placementsLabel: "Placements",
      approvalRateLabel: "Visa Approval Rate",
    },
    consultation: {
      title: "Book Your Free 1-on-1 Visa Consultation",
      subtitle: "Speak with our international visa specialists today.",
      nameLabel: "Your Full Name",
      phoneLabel: "WhatsApp Phone Number",
      destinationLabel: "Target Country",
      submitBtn: "Claim Your Free Consultation",
    },
  },
  hi: {
    nav: {
      countries: "देश",
      services: "सेवाएं",
      industries: "उद्योग",
      whyUs: "हम क्यों",
      process: "प्रक्रिया",
      blogs: "ब्लॉग",
      bookConsultation: "परामर्श बुक करें",
    },
    hero: {
      badge: "दुनिया भर में 5,000+ से अधिक पेशेवरों का भरोसा",
      titleLine1: "आपका करियर।",
      titleLine2: "दुनिया में",
      titleHighlight: "कहीं भी।",
      description:
        "हम 12 से अधिक देशों में कुशल श्रमिकों, भारी वाहन चालकों, फ़ैक्टरी तकनीशियनों और कार्यबल को सत्यापित नियोक्ताओं से जोड़ते हैं — नौकरी मिलान से लेकर वीज़ा स्वीकृति और आगमन सहायता तक हर कदम संभालते हैं।",
      ctaConsultation: "निःशुल्क परामर्श बुक करें",
      ctaExploreServices: "सेवाओं का अन्वेषण करें",
      yearsLabel: "वर्षों का अनुभव",
      placementsLabel: "सफल प्लेसमेंट",
      approvalRateLabel: "वीज़ा स्वीकृति दर",
    },
    consultation: {
      title: "अपना मुफ़्त 1-ऑन-1 वीज़ा परामर्श बुक करें",
      subtitle: "आज ही हमारे अंतर्राष्ट्रीय वीज़ा विशेषज्ञों से बात करें।",
      nameLabel: "आपका पूरा नाम",
      phoneLabel: "व्हाट्सएप फोन नंबर",
      destinationLabel: "लक्ष्य देश",
      submitBtn: "निःशुल्क परामर्श प्राप्त करें",
    },
  },
};
