"use client";
import Link from "next/link";
import Button from "./comman/Button";
import { ChevronDown } from "lucide-react";



const navLinks = [
  { label: "Home", href: "/", tooltip: "Go to Home" },
  { label: "About", href: "/about", tooltip: "About Kalakari" },
  { label: "Contact", href: "/contact", tooltip: "Contact Us" },
  
];

const shopCategories = [
  {
    label: "Paintings",
    href: "/shop/paintings",
    icon: "🎨",
  },
  {
    label: "Handicrafts",
    href: "/shop/handicrafts",
    icon: "🏺",
  },
  {
    label: "Pottery",
    href: "/shop/pottery",
    icon: "🫙",
  },
  {
    label: "Wall Art",
    href: "/shop/wall-art",
    icon: "🖼️",
  },
  {
    label: "Home Decor",
    href: "/shop/home-decor",
    icon: "🏠",
  },
  {
    label: "Jewellery",
    href: "/shop/jewellery",
    icon: "💎",
  },
  {
    label: "Gifts",
    href: "/shop/gifts",
    icon: "🎁",
  },
  {
    label: "Custom Artwork",
    href: "/shop/custom-artwork",
    icon: "✨",
  },
];

const Navbar = () => {
  return (



<nav className="sticky top-0 z-50 bg-gradient-to-b from-white via-pink-100 to-pink-300 shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="
            text-3xl font-extrabold text-pink-600
            transition-all duration-300
            hover:scale-105 hover:text-pink-700
          "
        >
          Kalakari
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">

          {/* Normal Links */}
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative group"
            >
              <Link
                href={link.href}
                className="
                  text-gray-700 font-medium
                  hover:text-pink-600
                  transition-all duration-300
                "
              >
                {link.label}
              </Link>

              {/* Underline */}
              <span
                className="
                  absolute left-0 -bottom-1
                  h-[2px] w-0
                  bg-pink-600
                  transition-all duration-300
                  group-hover:w-full
                "
              />

              {/* Tooltip */}
              <span
                className="
                  absolute left-1/2 -translate-x-1/2
                  top-8 opacity-0
                  group-hover:opacity-100
                  transition-all duration-300
                  bg-black text-white text-xs
                  px-2 py-1 rounded
                  whitespace-nowrap
                  pointer-events-none
                "
              >
                {link.tooltip}
              </span>
            </div>
          ))}

          {/* Shop Mega Menu */}
          <div className="relative group">
            
            <button
              className="
                text-gray-700 font-medium
                hover:text-pink-600
                transition-all duration-300
              "
            >
              Shop
              <ChevronDown
    size={16}
    className="
      transition-transform duration-300
      group-hover:rotate-180
    "
  />
            </button>
  
   
            <span
              className="
                absolute left-0 -bottom-1
                h-[2px] w-0
                bg-pink-600
                transition-all duration-300
                group-hover:w-full
              "
            />
     
   

            <div
              className="
                absolute top-10 left-1/2 -translate-x-1/2
                w-[1000px]
                bg-white
                rounded-2xl
                shadow-4xl
                border
                p-6
                opacity-0 invisible
                group-hover:opacity-100
                group-hover:visible
                transition-all duration-300
                grid grid-cols-3 gap-2
                z-50
              "
            >
              {shopCategories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="
                    flex items-center gap-3
                    p-3 rounded-lg
                    hover:bg-pink-50
                    hover:text-pink-600
                    transition-all duration-200
                  "
                >
                  <span>{category.icon}</span>
                  <span>{category.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        


        {/* CTA Button */}
        <div className="transition-transform duration-300 hover:scale-105">
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
      </div>
    </nav>
  );
};

export default Navbar;