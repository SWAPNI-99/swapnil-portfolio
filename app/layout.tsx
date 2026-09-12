import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: "#08090d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  metadataBase: new URL("https://swapnil-portfolio.vercel.app"),
  title: "Swapnil Nitin Joshirao | Computer Science Student & AI Builder",
  description:
    "Personal portfolio of Swapnil Nitin Joshirao — Computer Science student at MNIT Jaipur, builder of Jarvis Agentic AI Assistant, and founder of Equity Minds. Focused on software engineering, applied AI, automation, and financial systems.",
  keywords: [
    "Swapnil Nitin Joshirao",
    "Swapnil Joshirao",
    "MNIT Jaipur",
    "Computer Science Student",
    "AI Builder",
    "Software Developer",
    "Jarvis AI",
    "Agentic AI",
    "Equity Minds",
    "Full Stack Developer",
    "FinTech",
    "Automation"
  ],
  authors: [{ name: "Swapnil Nitin Joshirao", url: "https://github.com/SWAPNI-99" }],
  creator: "Swapnil Nitin Joshirao",
  openGraph: {
    title: "Swapnil Nitin Joshirao | Computer Science Student & AI Builder",
    description:
      "Building software, experimenting with AI systems, and exploring how technology can solve real-world problems. Computer Science at MNIT Jaipur.",
    url: "https://swapnil-portfolio.vercel.app",
    siteName: "Swapnil Nitin Joshirao Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Swapnil Nitin Joshirao | Computer Science Student & AI Builder",
    description:
      "Computer Science Student at MNIT Jaipur • Building Jarvis Agentic AI • Founder, Equity Minds"
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://swapnil-portfolio.vercel.app"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground antialiased selection:bg-accent/25 selection:text-white min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}