import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "@/context/LanguageContext";
import GoogleTranslateScript from "@/components/GoogleTranslateScript";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.workwisevisa.com"),
  title: "WorkWise Visa | Licensed Overseas Job Placement & Work Visa Consultancy",
  description:
    "Trusted international work visa consultancy and overseas recruitment agency. Secure verified jobs abroad for trade workers, drivers, CNC operators, welders & caregivers across Gulf, Schengen Europe, UK, Russia & Canada. 5,000+ successful placements.",
  keywords: [
    "work visa consultancy",
    "overseas job placement agency",
    "licensed recruitment agency india",
    "gulf work visa consultant",
    "gulf job agency noida patna",
    "schengen work permit consultant",
    "croatia poland work visa",
    "russia welder driver jobs",
    "heavy driver jobs abroad",
    "cnc operator jobs europe gulf",
    "gamca medical visa process",
    "embassy visa attestation support",
    "blue collar overseas jobs",
    "workwise visa europass immigration",
  ],
  alternates: {
    canonical: "https://www.workwisevisa.com",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "WorkWise Visa — Licensed Overseas Job Placement & Work Visa Agency",
    description:
      "Premium international recruitment and work visa consultancy. Connecting skilled trade candidates with 100% verified overseas employers with guaranteed visa sponsorship.",
    url: "https://www.workwisevisa.com",
    siteName: "WorkWise Visa",
    images: [
      {
        url: "/images/workwise_logo.png",
        width: 1200,
        height: 630,
        alt: "WorkWise Visa - Licensed Overseas Placement Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WorkWise Visa — Licensed Overseas Job Placement & Work Visa Agency",
    description:
      "Trusted international work visa consultancy. 5,000+ placements in Gulf, Europe, Russia & Canada with a 98% visa approval rate.",
    images: ["/images/workwise_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "name": "WorkWise Visa",
  "legalName": "Europass Immigration Pvt Ltd",
  "url": "https://www.workwisevisa.com",
  "logo": "https://www.workwisevisa.com/images/workwise_logo.png",
  "image": "https://www.workwisevisa.com/images/workwise_logo.png",
  "description":
    "Licensed international work visa consultancy and overseas job placement agency connecting skilled trade workers, drivers, technicians, and caregivers with verified employers in Gulf, Schengen Europe, UK, Russia, and Canada.",
  "telephone": "+918130161603",
  "email": "workwisevisa@gmail.com",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Urbtech Trade Centre, D-701 C, Sector 132",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201304",
      "addressCountry": "IN",
    },
    {
      "@type": "PostalAddress",
      "streetAddress":
        "6th floor office no 606, Varma Centre, Boring Rd Crossing, Sri Krishna Puri",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "postalCode": "800001",
      "addressCountry": "IN",
    },
  ],
  "sameAs": [
    "https://www.instagram.com/workwisevisa/",
    "https://www.facebook.com/workwisevisa/",
    "https://www.linkedin.com/company/workwisevisa/",
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "5000",
  },
  "areaServed": [
    "Gulf Countries",
    "UAE",
    "Saudi Arabia",
    "Qatar",
    "Kuwait",
    "Oman",
    "Bahrain",
    "Schengen Area",
    "Croatia",
    "Poland",
    "Romania",
    "Russia",
    "United Kingdom",
    "Canada",
  ],
  "priceRange": "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      translate="no"
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <head>
        <meta name="google" content="notranslate" />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1401418235281432');
            fbq('track', 'PageView');
          `}
        </Script>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-screen">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1401418235281432&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <LanguageProvider>
          <GoogleTranslateScript />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
