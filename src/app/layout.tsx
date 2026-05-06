import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arslan Ali | Full Stack Engineer & E-com Strategist",
  description:
    "Bridging the gap between scalable code and international commerce. Full Stack MERN Developer, WordPress Expert, and E-commerce Growth Architect scaling brands across PK, UAE, and USA.",
  keywords: [
    "Arslan Ali",
    "Full Stack Developer",
    "MERN Stack",
    "E-commerce",
    "WordPress",
    "Next.js",
    "Shopify",
    "Islamabad",
    "Pakistan",
  ],
  authors: [{ name: "Arslan Ali" }],
  openGraph: {
    title: "Arslan Ali | Full Stack Engineer & E-com Strategist",
    description:
      "Architecting high-performance web apps and scaling data-driven e-commerce ecosystems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arslan Ali | Full Stack Engineer & E-com Strategist",
    description:
      "Architecting high-performance web apps and scaling data-driven e-commerce ecosystems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics /> {/* <--- Place it here, inside body */}
      </body>
    </html>
  )
}

