import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
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
  title: "WorkWise Visa | Your Career. Anywhere in the World.",
  description:
    "Premium international job placement and visa consultancy. We help professionals secure overseas employment and work visas across Gulf countries, Schengen/EU, Russia, Canada, USA, and the UK. 5,000+ successful placements. 98% visa approval rate.",
  keywords: [
    "work visa consultancy",
    "international job placement",
    "overseas employment",
    "gulf jobs",
    "canada immigration",
    "uk work visa",
    "eu blue card",
    "schengen work visa",
    "visa processing",
    "job abroad",
  ],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "WorkWise Visa — Your Career. Anywhere in the World.",
    description:
      "Premium international job placement and visa consultancy. 5,000+ successful placements across 12+ countries with a 98% visa approval rate.",
    type: "website",
    siteName: "WorkWise Visa",
  },
  twitter: {
    card: "summary_large_image",
    title: "WorkWise Visa — Your Career. Anywhere in the World.",
    description:
      "Premium international job placement and visa consultancy. 5,000+ successful placements across 12+ countries.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <head>
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
        {children}
      </body>
    </html>
  );
}
