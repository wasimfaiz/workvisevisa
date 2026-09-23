/* ================================================================
   app/admin/layout.tsx
   Nested layout for all /admin/* pages.
   NOTE: Must NOT include <html>, <head>, or <body> — those are
   already provided by the root app/layout.tsx.
   ================================================================ */

export const metadata = {
  title: "Admin Panel — WorkWise Visa",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
