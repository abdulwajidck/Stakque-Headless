import type { Metadata } from "next";
// import { Inter, Manrope, JetBrains_Mono } from "next/font/google"; // Removed GFonts
import "./globals.css";

// Font configurations removed in favor of Fontshare CDN

export const metadata: Metadata = {
  title: "Stakque | The E3 Performance Marketing Agency",
  description: "Pioneering the E3 performance model. We blend technical engineering with creative strategy to drive essential growth for forward-thinking brands.",
  other: {
    "preload": "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/logo.svg" as="image" fetchPriority="high" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=satoshi@300,400,500,700,900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
