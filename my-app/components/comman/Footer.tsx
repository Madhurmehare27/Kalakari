// components/Footer.tsx
"use client";
import Link from "next/link";
import {  X, ShieldCheck, Truck, RefreshCw, Mail, Phone, MapPin, Award, Lock, Star, Shield, ShieldAlert } from "lucide-react";


const shopLinks = [
  { label: "Paintings", href: "/shop/paintings" },
  { label: "Handicrafts", href: "/shop/handicrafts" },
  { label: "Pottery", href: "/shop/pottery" },
  { label: "Wall Art", href: "/shop/wall-art" },
  { label: "Home Decor", href: "/shop/home-decor" },
  { label: "Jewellery", href: "/shop/jewellery" },
  { label: "Gifts", href: "/shop/gifts" },
  { label: "Custom Artwork", href: "/shop/custom-artwork" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Artisans", href: "/artisans" },
  { label: "Blog", href: "/blog" },
  { label: "Press", href: "/press" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
  { label: "Wholesale", href: "/wholesale" },
];

const supportLinks = [
  { label: "Track Order", href: "/track" },
  { label: "Shipping Policy", href: "/shipping" },
  { label: "Returns & Refunds", href: "/returns" },
  { label: "Size Guide", href: "/size-guide" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const socialLinks = [
  { icon: Shield, href: "https://instagram.com", label: "Instagram" },
  { icon: Shield, href: "https://facebook.com", label: "Facebook" },
  // Pinterest not in lucide, use a custom SVG or swap with another
  { icon: Shield, href: "https://youtube.com", label: "YouTube" },
  { icon: ShieldAlert, href: "https://twitter.com", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="bg-[#1a0a0f] font-sans text-[#c9a98a]">

      {/* ── NEWSLETTER STRIP ─────────────────────────── */}
      <div className="bg-[#1f0d13] border-b border-[#2e1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-base">Get 10% off your first order</p>
            <p className="text-[#7a5060] text-sm mt-0.5">Subscribe for artisan stories, new arrivals &amp; exclusive offers</p>
          </div>
          <form
            className="flex gap-2 w-full sm:w-auto"
            onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="
                flex-1 sm:w-56
                bg-[#2e1520] border border-[#3d1f2a]
                rounded-full px-5 py-2.5
                text-sm text-[#e8c5d0] placeholder-[#7a5060]
                outline-none focus:border-pink-500
                transition-colors duration-200
              "
            />
            <button
              type="submit"
              className="
                px-5 py-2.5
                bg-pink-500 hover:bg-pink-600
                text-white text-sm font-semibold
                rounded-full shrink-0
                transition-all duration-200 active:scale-95
              "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-pink-500 rounded-[7px] flex items-center justify-center shrink-0">
                <span className="font-serif text-white font-bold text-base leading-none">K</span>
              </div>
              <span className="font-serif text-white font-bold text-xl">Kalakari</span>
            </Link>

            <p className="text-[#7a5060] text-sm leading-relaxed mb-5 max-w-[240px]">
              Bridging India's rich artisan heritage with modern homes. Every piece is handcrafted with love, tradition, and generations of skill.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2 mb-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    w-9 h-9 rounded-[8px]
                    border border-[#2e1520]
                    flex items-center justify-center
                    text-[#7a5060] hover:text-pink-400
                    hover:border-pink-500 hover:bg-[#2e1520]
                    transition-all duration-200
                  "
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col gap-2.5">
              {[
                { icon: ShieldCheck, text: "100% authentic handcrafted" },
                { icon: Truck, text: "Free shipping above ₹999" },
                { icon: RefreshCw, text: "Easy 7-day returns" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[#7a5060] text-xs">
                  <Icon size={14} className="text-pink-500 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[.14em] uppercase text-pink-500 mb-4">Shop</h4>
            <ul className="space-y-0.5">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-sm text-[#7a5060] hover:text-pink-300 hover:translate-x-1 transition-all duration-200 py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[.14em] uppercase text-pink-500 mb-4">Company</h4>
            <ul className="space-y-0.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-sm text-[#7a5060] hover:text-pink-300 hover:translate-x-1 transition-all duration-200 py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support + Contact Column */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[.14em] uppercase text-pink-500 mb-4">Support</h4>
            <ul className="space-y-0.5 mb-6">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-sm text-[#7a5060] hover:text-pink-300 hover:translate-x-1 transition-all duration-200 py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-[10px] font-semibold tracking-[.14em] uppercase text-pink-500 mb-3">Contact</h4>
            <div className="flex flex-col gap-2">
              {[
                { icon: Mail, text: "hello@kalakari.in", href: "mailto:hello@kalakari.in" },
                { icon: Phone, text: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: MapPin, text: "Mumbai, India", href: "#" },
              ].map(({ icon: Icon, text, href }) => (
                <a  
                  key={text}
                  href={href}
                  className="flex items-center gap-2 text-sm text-[#7a5060] hover:text-pink-300 transition-colors duration-200"
                >
                  <Icon size={13} className="text-pink-500 shrink-0" />
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ───────────────────────────────── */}
      <div className="border-t border-[#2e1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

          <div>
            <p className="text-[#4a2a35] text-xs">
              © 2025 <span className="text-pink-500">Kalakari</span>. All rights reserved. Made with{" "}
              <span className="text-pink-500">♥</span> in India.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                { icon: Lock, text: "SSL Secured" },
                { icon: Award, text: "MSME Certified" },
                { icon: Star, text: "4.9 · 12k+ Reviews" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="inline-flex items-center gap-1.5 bg-[#2e1520] border border-[#3d1f2a] rounded-md px-2.5 py-1 text-[11px] text-[#7a5060]"
                >
                  <Icon size={11} className="text-pink-500" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="text-right">
            <p className="text-[#4a2a35] text-[11px] mb-1.5">Secure payments</p>
            <div className="flex flex-wrap gap-1.5">
              {["UPI", "Visa", "Mastercard", "RuPay", "Net Banking", "EMI"].map((method) => (
                <span
                  key={method}
                  className="bg-[#2e1520] border border-[#3d1f2a] rounded-[4px] px-2 py-1 text-[10px] font-semibold text-[#7a5060] tracking-wide"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;