import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.workwisevisa.com";

export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Overseas Jobs & Gulf Vacancies 2026 | WorkWise Visa",
  description:
    "Search verified overseas job vacancies across Gulf & Europe. Direct recruitment for drivers, welders, electricians, technicians & trades.",
  keywords: [
    "overseas jobs 2026",
    "gulf job vacancies",
    "dubai driver jobs",
    "saudi welder jobs",
    "WorkWise Visa jobs",
  ],
  alternates: {
    canonical: `${BASE_URL}/jobs`,
  },
  openGraph: {
    title: "Overseas Jobs & Gulf Vacancies 2026 | WorkWise Visa",
    description:
      "Search verified overseas job vacancies across Gulf & Europe. Direct recruitment for drivers, welders, electricians, technicians & trades.",
    url: `${BASE_URL}/jobs`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/og-jobs.jpg`,
        width: 1200,
        height: 630,
        alt: "WorkWise Visa - Overseas Jobs & Gulf Vacancies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Overseas Jobs & Gulf Vacancies 2026 | WorkWise Visa",
    description:
      "Search verified overseas job vacancies across Gulf & Europe. Direct recruitment for drivers, welders, electricians, technicians & trades.",
    images: [`${BASE_URL}/images/og-jobs.jpg`],
  },
};

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
