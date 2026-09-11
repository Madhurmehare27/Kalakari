import type { Metadata } from "next";
import {
  Geist_Mono,
  DM_Sans,
  DM_Serif_Display,
} from "next/font/google";

import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import Navbar from "@/components/comman/Navbar";
import Footer from "@/components/comman/Footer";
import TopBanner from "@/components/comman/TopBanner";
import { metric } from '@vercel/functions';

metric('query.duration_ms', 100, { plan: 'pro' });

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kalakari",
  description: "Handmade Art & Crafts Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-gray-50">
        <TopBanner />

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

         <Analytics />
      </body>
    </html>
  );
}