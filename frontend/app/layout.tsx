import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
  preload: false, // Less critical, can load later
});

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" href="/logo.svg" as="image" fetchPriority="high" />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
