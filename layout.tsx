import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://swapnil-portfolio.vercel.app"),
  title: "Swapnil Nitin Joshirao | Computer Science Student & AI Builder",
  description:
    "Portfolio of Swapnil Nitin Joshirao — Computer Science student at MNIT Jaipur building software, experimenting with agentic AI systems, and exploring finance through Equity Minds.",
  keywords: [
    "Swapnil Nitin Joshirao",
    "MNIT Jaipur",
    "Computer Science Student",
    "AI Developer",
    "Full Stack Developer",
    "Jarvis AI Assistant",
    "Equity Minds"
  ],
  authors: [{ name: "Swapnil Nitin Joshirao" }],
  openGraph: {
    title: "Swapnil Nitin Joshirao | Computer Science Student & AI Builder",
    description:
      "Building software, experimenting with AI systems, and exploring how technology can solve real-world problems.",
    url: "https://swapnil-portfolio.vercel.app",
    siteName: "Swapnil Nitin Joshirao",
    locale: "en_US",
    type: "website"
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}