import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.workwisevisa.com";

export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Track Visa Application Status Live | WorkWise Visa",
  description:
    "Track your live work visa processing, biometric appointments, medical status & flight departure in real-time with WorkWise Visa portal.",
  keywords: [
    "track visa status",
    "work visa application tracker",
    "visa status check online",
    "WorkWise Visa tracking",
  ],
  alternates: {
    canonical: `${BASE_URL}/track`,
  },
  openGraph: {
    title: "Track Visa Application Status Live | WorkWise Visa",
    description:
      "Track your live work visa processing, biometric appointments, medical status & flight departure in real-time with WorkWise Visa portal.",
    url: `${BASE_URL}/track`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/og-track.jpg`,
        width: 1200,
        height: 630,
        alt: "WorkWise Visa Application Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Track Visa Application Status Live | WorkWise Visa",
    description:
      "Track your live work visa processing, biometric appointments, medical status & flight departure in real-time with WorkWise Visa portal.",
    images: [`${BASE_URL}/images/og-track.jpg`],
  },
};

export default function TrackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
