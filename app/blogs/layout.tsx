import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.workwisevisa.com";

export const metadata: Metadata = {
  applicationName: "WorkWise Visa",
  title: "Work Visa & Overseas Jobs Blog 2026 | WorkWise Visa",
  description:
    "Expert guides on Gulf work visas, GAMCA medical tests, trade certifications, salary scales & immigration rules for overseas job seekers.",
  keywords: [
    "work visa blog",
    "gulf visa guide 2026",
    "gamca medical rules",
    "overseas jobs news",
    "WorkWise Visa articles",
  ],
  alternates: {
    canonical: `${BASE_URL}/blogs`,
  },
  openGraph: {
    title: "Work Visa & Overseas Jobs Blog 2026 | WorkWise Visa",
    description:
      "Expert guides on Gulf work visas, GAMCA medical tests, trade certifications, salary scales & immigration rules for overseas job seekers.",
    url: `${BASE_URL}/blogs`,
    siteName: "WorkWise Visa",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/og-blogs.jpg`,
        width: 1200,
        height: 630,
        alt: "WorkWise Visa - Work Visa & Overseas Jobs Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Visa & Overseas Jobs Blog 2026 | WorkWise Visa",
    description:
      "Expert guides on Gulf work visas, GAMCA medical tests, trade certifications, salary scales & immigration rules for overseas job seekers.",
    images: [`${BASE_URL}/images/og-blogs.jpg`],
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
