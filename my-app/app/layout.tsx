import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/comman/Navbar";
import Footer from "@/components/comman/Footer";
import TopBanner from "@/components/comman/TopBanner";
import AdvertisingBanner from "@/components/comman/AdvertisingBanner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-gray-50">
        <TopBanner/>
        <Navbar />
{/* <AdvertisingBanner/> */}
        <main className="flex-1">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}