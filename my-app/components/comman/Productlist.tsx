"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Resin Name Plate",
    price: "₹799",
    tag: "Best Seller",
    image: "key/IMG_2471.JPG.jpeg",
    category: "Keychains",
  },
  {
    id: 2,
    name: "Customized Photo Frame",
    price: "₹999",
    tag: "Popular",
    image: "flowers/IMG_2472.JPG.jpeg",
    category: "Flowers",
  },
  {
    id: 3,
    name: "Handmade Gift Box",
    price: "₹599",
    tag: "Trending",
    image: "hairsband/IMG_2468.JPG.jpeg",
    category: "Hair Bands",
  },
  {
    id: 4,
    name: "Decorative Candle Set",
    price: "₹499",
    tag: "New",
    image: "hairsband/IMG_2468.JPG.jpeg",
    category: "Hair Bands",
  },
  {
    id: 5,
    name: "Resin Wall Clock",
    price: "₹1,499",
    tag: "Premium",
    image: "Boquets/IMG_2461.JPG.jpeg",
    category: "bouquet",
  },
  {
    id: 6,
    name: "Personalized Keychain",
    price: "₹299",
    tag: "Hot",
    image: "key/IMG_2473.JPG.jpeg",
    category: "Keychains",
  },
  {
    id: 7,
    name: "Resin Serving Tray",
    price: "₹1,299",
    tag: "Premium",
    image: "Boquets/IMG_2484.JPG.jpeg",
    category: "bouquet",
  },
  {
    id: 8,
    name: "Wooden Floating Shelf",
    price: "₹849",
    tag: "Trending",
    image: "Bouquets/IMG_2496.JPG.jpeg",
    category: "bouquet",
  },
  {
    id: 9,
    name: "Pressed Flower Bookmark Set",
    price: "₹349",
    tag: "New",
    image: "flowers/IMG_2472.JPG.jpeg",
    category: "Flowers",
  },
  {
    id: 10,
    name: "Macramé Wall Hanging",
    price: "₹1,199",
    tag: "Popular",
    image: "hairsband/IMG_2442.JPG.jpeg",
    category: "Hair Bands",
  },
  {
    id: 11,
    name: "Soy Wax Jar Candle",
    price: "₹399",
    tag: "Best Seller",
    image: "flowers/IMG_2472.JPG.jpeg",
    category: "Flowers",
  },
  {
    id: 12,
    name: "Resin Coaster Set of 4",
    price: "₹699",
    tag: "Hot",
    image: "key/IMG_2488.JPG.jpeg",
    category: "Keychains",
  },
  // --- Everything below still uses Unsplash placeholder images,
  // not your real product photos. No "Aasan" or "Hair Clips" folder
  // was in the data you sent, so these two tabs still have nothing
  // real behind them. Replace image + category once you have actual
  // photos for those two categories.
  
];
const categories = ["All", "Aasan", "Flowers", "Hair Bands", "bouquet", "Hair Clips", "Keychains"];

const whatsappNumber = "917820941097";
const BATCH_SIZE = 9; // 3x3 grid per load

export default function ProductList() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  // Reset pagination whenever the category changes
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [activeCategory]);

  // Build the visible list, looping back through `filtered` once exhausted
  // (true infinite scroll needs a growing dataset; here we cycle the same
  // filtered items with unique render keys so it never dead-ends).
  const visibleItems =
    filtered.length === 0
      ? []
      : Array.from({ length: visibleCount }, (_, i) => filtered[i % filtered.length]);

  const loadMore = useCallback(() => {
    if (filtered.length === 0) return;
    setVisibleCount((prev) => prev + BATCH_SIZE);
  }, [filtered.length]);

  useEffect(() => {
    const node = loaderRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "400px" } // start loading before the user hits the exact bottom
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [loadMore]);

  const handleOrder = (productName: string) => {
    const message = encodeURIComponent(
      `Hello 👋\n\nI am interested in *${productName}*.\nCan you please share more details?`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 md:py-24  min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="relative  text-center md:mb-14">

  {/* Soft background glow */}
  {/* <div className="absolute left-1/2 top-1/2 -z-10-translate-x-1/2 -translate-y-1/2 " />

  {/* Heading */}
  <h2
    className="
      
      text-4xl
      leading-tight
      text-[#233603]
      md:text-6xl
      font-normal
    "
    style={{ fontFamily: "'DM Serif Display', serif" }}
  >
    Our Best{" "}
    <span className="relative inline-block">
      Creations

      {/* Orange underline */}
      <span className="absolute -bottom-1 left-1/2 h-[3px] w-14 -translate-x-1/2 rounded-full bg-[#F4A261] md:w-20" />
    </span>
  </h2>

  {/* Description */}
 

</div> 

        {/* Category Filter */}
       <div className="mb-10 flex justify-start gap-3 overflow-x-auto px-1 pb-3 scrollbar-hide md:justify-center">
  {categories.map((cat) => {
    const isActive = activeCategory === cat;

    return (
      <button
        key={cat}
        onClick={() => setActiveCategory(cat)}
        className={`
          group
          relative
          flex-shrink-0
          rounded-full
          px-5
          py-2.5
          text-sm
          font-medium
          whitespace-nowrap
          transition-all
          duration-300
          ease-out

          ${
            isActive
              ? `
                bg-[#233603]
                text-white
                shadow-lg
                shadow-[#233603]/20
                ring-2
                ring-[#233603]/10
              `
              : `
                bg-white
                text-[#233603]
                border
                border-[#233603]/15
                shadow-sm
                hover:-translate-y-1
                hover:border-[#233603]/40
                hover:bg-[#233603]/5
                hover:shadow-md
              `
          }
        `}
      >
        {/* Small active indicator */}
        {isActive && (
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#F4A261] align-middle" />
        )}

        {cat}
      </button>
    );
  })}
</div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-sm text-gray-400 py-16">
            No products in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
  {visibleItems.map((product, index) => (
    <div
      key={`${product.id}-${index}`}
      className="bg-white  overflow-hidden border border-gray-100"
    >
      {/* Image */}
      <Link href={`/products/${product.id}`}>
  <div className="bg-gray-100 overflow-hidden">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-70 object-cover"
    />
  </div>
</Link>

      {/* Content */}
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-base font-medium text-gray-900 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 text-lg font-semibold text-[#233603]">
          {product.price}
        </p>

        <button
          onClick={() => handleOrder(product.name)}
          className="mt-4 w-full  bg-[#233603] py-2.5 text-sm font-medium text-white hover:bg-[#304a05] transition"
        >
          Order Now
        </button>
      </div>
    </div>
  ))}
</div>
        )}

        {/* Infinite scroll sentinel */}
        {filtered.length > 0 && (
          <div ref={loaderRef} className="h-10 w-full" />
        )}
      </div>
    </section>
  );
}