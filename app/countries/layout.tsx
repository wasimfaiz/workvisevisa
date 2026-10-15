import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.workwisevisa.com";

export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Work Visa Programs by Country 2026 | WorkWise Visa",
  description:
    "Explore international work visa programs across 12+ destinations. Compare processing times, tax-free salaries & verified trade vacancies with WorkWise Visa.",
  keywords: [
    "Gulf work visa 2026",
    "UAE work permit",
    "Saudi Arabia employment visa",
    "Qatar work visa",
    "Oman work permit",
    "Bahrain LMRA visa",
    "overseas trade jobs",
    "blue collar jobs abroad",
    "WorkWise Visa countries",
  ],
  alternates: {
    canonical: `${BASE_URL}/countries`,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Work Visa Programs by Country 2026 | WorkWise Visa",
    description:
      "Explore international work visa programs across 12+ destinations. Compare processing times, tax-free salaries & verified trade vacancies with WorkWise Visa.",
    url: `${BASE_URL}/countries`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Work Visa Programs by Country - WorkWise Visa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Visa Programs by Country 2026 | WorkWise Visa",
    description:
      "Explore international work visa programs across 12+ destinations. Compare processing times, tax-free salaries & verified trade vacancies with WorkWise Visa.",
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function CountriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
