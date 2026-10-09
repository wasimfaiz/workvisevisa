import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.workwisevisa.com";

export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "About Us & Licensed Recruitment | WorkWise Visa",
  description:
    "Discover WorkWise Visa — government-licensed overseas recruitment agency helping skilled trade workers secure genuine jobs in Gulf & Europe.",
  keywords: [
    "about WorkWise Visa",
    "licensed recruitment agency",
    "overseas job consultancy",
    "gulf recruitment partner",
  ],
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About Us & Licensed Recruitment | WorkWise Visa",
    description:
      "Discover WorkWise Visa — government-licensed overseas recruitment agency helping skilled trade workers secure genuine jobs in Gulf & Europe.",
    url: `${BASE_URL}/about`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/og-about.jpg`,
        width: 1200,
        height: 630,
        alt: "About WorkWise Visa - Licensed Recruitment Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us & Licensed Recruitment | WorkWise Visa",
    description:
      "Discover WorkWise Visa — government-licensed overseas recruitment agency helping skilled trade workers secure genuine jobs in Gulf & Europe.",
    images: [`${BASE_URL}/images/og-about.jpg`],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
