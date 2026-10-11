import { MetadataRoute } from "next";

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
const BASE_URL =
  rawUrl.startsWith("http") && !rawUrl.includes("localhost")
    ? rawUrl.replace(/\/+$/, "")
    : "https://www.workwisevisa.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/favicon.ico", "/favicon-*.png", "/apple-touch-icon.png", "/icon.png"],
        disallow: [
          "/admin",
          "/admin/*",
          "/api/",
          "/api/*",
          "/invoice",
          "/invoice/*",
          "/_next/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/*",
          "/api/",
          "/api/*",
          "/invoice",
          "/invoice/*",
          "/_next/",
        ],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/*",
          "/api/",
          "/api/*",
          "/invoice",
          "/invoice/*",
          "/_next/",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
