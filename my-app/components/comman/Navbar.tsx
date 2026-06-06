"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", tooltip: "Go to Home" },
  { label: "About", href: "/about", tooltip: "About Kalakari" },
  { label: "Contact", href: "/contact", tooltip: "Contact Us" },
];

const shopCategories = [
  { label: "Paintings", href: "/shop/paintings", icon: "🎨" },
  { label: "Handicrafts", href: "/shop/handicrafts", icon: "🏺" },
  { label: "Pottery", href: "/shop/pottery", icon: "🫙" },
  { label: "Wall Art", href: "/shop/wall-art", icon: "🖼️" },
  { label: "Home Decor", href: "/shop/home-decor", icon: "🏠" },
  { label: "Jewellery", href: "/shop/jewellery", icon: "💎" },
  { label: "Gifts", href: "/shop/gifts", icon: "🎁" },
  { label: "Custom Artwork", href: "/shop/custom-artwork", icon: "✨" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gradient-to-b from-white/90 via-pink-50/80 to-white/70 backdrop-blur-md border-b border-pink-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-extrabold text-pink-600 hover:text-pink-700 transition-all duration-300 hover:scale-105"
          >
            Kalakari
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="text-gray-700 font-medium hover:text-pink-600 transition-all duration-300"
                >
                  {link.label}
                </Link>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-600 transition-all duration-300 group-hover:w-full" />
                <span className="absolute left-1/2 -translate-x-1/2 top-8 opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none transition-all duration-300 z-50">
                  {link.tooltip}
                </span>
              </div>
            ))}

            {/* ── SHOP MEGA MENU — fixed ─────────────────── */}
            {/* Key fix: added `invisible` as default + `group-hover:visible`
                Also added `translate-y-2` default + `group-hover:translate-y-0`
                for a smooth drop-down feel instead of just fading in */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-pink-600 transition-all duration-300">
                Shop
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-600 transition-all duration-300 group-hover:w-full" />

              {/* Mega menu panel */}
              <div
                className="
                  absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2
                  w-[520px]
                  bg-white rounded-2xl
                  shadow-2xl border border-pink-100
                  p-5
                  grid grid-cols-2 gap-2
                  z-50

                  opacity-0 invisible translate-y-2
                  transition-all duration-200 ease-out
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                "
              >
                {/* Little arrow pointer */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-pink-100 rotate-45" />

                {shopCategories.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-pink-50 hover:text-pink-600 transition-all duration-200 text-gray-700 group/item"
                  >
                    <span className="text-xl w-8 h-8 flex items-center justify-center bg-pink-50 rounded-lg group-hover/item:bg-pink-100 transition-colors duration-200 shrink-0">
                      {category.icon}
                    </span>
                    <span className="text-sm font-medium">{category.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block transition-transform duration-300 hover:scale-105">
              <Button
                bgColor="#ec4899"
                textColor="#ffffff"
                width="140px"
                height="44px"
                borderRadius="999px"
                onClick={() => alert("Order Now")}
              >
                Order Now
              </Button>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-all duration-200"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── OVERLAY ──────────────────────────────────── */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── SLIDE-IN DRAWER ──────────────────────────── */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] sm:w-[320px] bg-white z-[60] flex flex-col lg:hidden shadow-2xl transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-pink-100 shrink-0">
          <span className="text-2xl font-extrabold text-pink-600">Kalakari</span>
          <button
            className="p-2 rounded-lg text-gray-400 hover:text-pink-600 hover:bg-pink-50 transition-all duration-200"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between px-4 py-3.5 rounded-xl text-gray-700 font-medium hover:bg-pink-50 hover:text-pink-600 transition-all duration-200 text-sm"
            >
              {link.label}
              <ChevronDown size={14} className="-rotate-90 text-gray-300" />
            </Link>
          ))}

          <div className="h-px bg-pink-50 my-2 mx-4" />

          {/* Shop Accordion */}
          <div>
            <button
              onClick={() => setMobileShopOpen(!mobileShopOpen)}
              className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-gray-700 font-medium hover:bg-pink-50 hover:text-pink-600 transition-all duration-200 text-sm"
            >
              <span>Shop</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  mobileShopOpen ? "rotate-180 text-pink-500" : "text-gray-300"
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                mobileShopOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mx-3 mb-2 bg-pink-50/60 rounded-xl p-2 grid grid-cols-2 gap-1">
                {shopCategories.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-gray-600 text-sm hover:bg-white hover:text-pink-600 transition-all duration-200"
                  >
                    <span className="text-base">{category.icon}</span>
                    <span className="font-medium truncate">{category.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Drawer Footer CTA */}
        <div className="shrink-0 px-5 py-4 border-t border-pink-100">
          <Button
            bgColor="#ec4899"
            textColor="#ffffff"
            width="100%"
            height="48px"
            borderRadius="999px"
            onClick={() => { alert("Order Now"); setMobileOpen(false); }}
          >
            Order Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;