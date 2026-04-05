import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "PPMS — Petrol Pump Management System | Razex Solutions",
  description:
    "Complete SaaS platform for fuel station management — sales, inventory, accounting, payroll, and multi-station oversight. Built by Razex Solutions.",
  keywords: [
    "petrol pump management",
    "fuel station software",
    "SaaS fuel management",
    "PPMS",
    "Razex Solutions",
    "fuel station ERP",
    "pump management system",
    "پیٹرول پمپ مینجمنٹ",
  ],
  authors: [{ name: "Razex Solutions", url: "https://razexsolutions.com" }],
  openGraph: {
    title: "PPMS — Petrol Pump Management System",
    description:
      "Complete SaaS for fuel station management — sales, inventory, accounting, payroll, and multi-station oversight.",
    url: "https://ppms.razexsolutions.com",
    siteName: "PPMS by Razex Solutions",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PPMS - Petrol Pump Management System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PPMS — Petrol Pump Management System",
    description: "Complete SaaS for fuel station management by Razex Solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://ppms.razexsolutions.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Latin font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Urdu / Nastaliq font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0f1e] text-gray-100 antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
