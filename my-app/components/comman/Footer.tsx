"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F2CECE] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Brand */}
          <div>
               <Link
  href="/"
  className="inline-flex items-center transition-all duration-300 hover:scale-105"
>
  <img
    src="/logo.png"
    alt="Kalakari"
    className="h-12 sm:h-14 md:h-16 w-auto object-contain"
  />
</Link>
          
            <p className="mt-2 text-sm text-white/80 italic">
              Handmade gifts, flower crafts & personalized creations made with
              love.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:items-center gap-3">
            <Link
              href="/"
              className="hover:text-white/70 transition duration-300"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="hover:text-white/70 transition duration-300"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="hover:text-white/70 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <div className="flex md:justify-end items-center gap-2 mb-3">
              <Phone size={16} />
              <span>+91 7820941097</span>
            </div>

            <div className="flex md:justify-end items-center gap-2">
              <Mail size={16} />
              <span>hello@kalakari.in</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-8 pt-5">
          <p className="text-center text-sm text-white/70 italic">
            © 2025 Kalakari. All Rights Reserved. Made with ❤️ in India.
          </p>
        </div>
      </div>
    </footer>
  );
}