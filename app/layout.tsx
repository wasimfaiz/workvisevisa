import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
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
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
