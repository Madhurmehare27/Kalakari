
"use client";
import { useState } from "react";
import Link from "next/link";
import Button from "./comman/Button";
import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  {
    label: "Home",
    href: "/",
    tooltip: "Go to Home",
  },
  {
    label: "About",
    href: "/about",
    tooltip: "About Kalakari",
  },
  {
    label: "Contact",
    href: "/contact",
    tooltip: "Contact Us",
  },
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
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [mobileShopOpen, setMobileShopOpen] =
    useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-white/90 via-pink-50/80 to-white/70 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="
            text-2xl sm:text-3xl
            font-extrabold
            text-pink-600
            hover:text-pink-700
            transition-all duration-300
            hover:scale-105
          "
        >
          Kalakari
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative group"
            >
              <Link
                href={link.href}
                className="
                  text-gray-700
                  font-medium
                  hover:text-pink-600
                  transition-all duration-300
                "
              >
                {link.label}
              </Link>

              <span
                className="
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  w-0
                  bg-pink-600
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />

              <span
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  top-8
                  opacity-0
                  group-hover:opacity-100
                  bg-black
                  text-white
                  text-xs
                  px-2
                  py-1
                  rounded
                  whitespace-nowrap
                  pointer-events-none
                  transition-all
                  duration-300
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
                flex items-center
                gap-1
                text-gray-700
                font-medium
                hover:text-pink-600
                transition-all duration-300
              "
            >
              Shop

              <ChevronDown
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-180
                "
              />
            </button>

            <span
              className="
                absolute
                left-0
                -bottom-1
                h-[2px]
                w-0
                bg-pink-600
                transition-all
                duration-300
                group-hover:w-full
              "
            />

            <div
              className="
                absolute
                top-10
                left-1/2
                -translate-x-1/2
                w-[90vw]
                max-w-5xl
                bg-white
                rounded-2xl
                shadow-2xl
                border
                border-pink-100
                p-6
                opacity-0
                invisible
                group-hover:opacity-100
                group-hover:visible
                transition-all
                duration-300
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-3
                z-50
              "
            >
              {shopCategories.map(
                (category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    className="
                      flex
                      items-center
                      gap-3
                      p-3
                      rounded-xl
                      hover:bg-pink-50
                      hover:text-pink-600
                      transition-all
                      duration-200
                    "
                  >
                    <span className="text-xl">
                      {category.icon}
                    </span>

                    <span>
                      {category.label}
                    </span>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            bgColor="#ec4899"
            textColor="#ffffff"
            width="140px"
            height="44px"
            borderRadius="999px"
            onClick={() =>
              alert("Order Now")
            }
          >
            Order Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() =>
            setMobileMenuOpen(
              !mobileMenuOpen
            )
          }
        >
          {mobileMenuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="
            lg:hidden
            bg-white
            border-t
            border-pink-100
            shadow-lg
          "
        >
          <div className="px-4 py-4 space-y-4">
            
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  block
                  text-gray-700
                  font-medium
                  hover:text-pink-600
                "
                onClick={() =>
                  setMobileMenuOpen(
                    false
                  )
                }
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Shop */}
            <div>
              <button
                className="
                  flex
                  items-center
                  justify-between
                  w-full
                  font-medium
                  text-gray-700
                "
                onClick={() =>
                  setMobileShopOpen(
                    !mobileShopOpen
                  )
                }
              >
                Shop

                <ChevronDown
                  className={`transition-transform ${
                    mobileShopOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {mobileShopOpen && (
                <div
                  className="
                    mt-3
                    grid
                    grid-cols-2
                    gap-2
                  "
                >
                  {shopCategories.map(
                    (category) => (
                      <Link
                        key={
                          category.href
                        }
                        href={
                          category.href
                        }
                        className="
                          flex
                          items-center
                          gap-2
                          p-2
                          rounded-lg
                          hover:bg-pink-50
                        "
                        onClick={() =>
                          setMobileMenuOpen(
                            false
                          )
                        }
                      >
                        <span>
                          {
                            category.icon
                          }
                        </span>

                        <span className="text-sm">
                          {
                            category.label
                          }
                        </span>
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>

            <Button
              bgColor="#ec4899"
              textColor="#ffffff"
              width="100%"
              height="44px"
              borderRadius="999px"
              onClick={() =>
                alert("Order Now")
              }
            >
              Order Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
