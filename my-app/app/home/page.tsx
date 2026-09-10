"use client";

import Link from "next/link";
import FullScreenVideo from "@/components/comman/FullScreenVideo";
import ProductList from "@/components/comman/Productlist";
import CraftFlow from "@/components/comman/CraftFlow";

export default function HeroSection() {
  // Circular navigation categories
  const navCategories = [
    {
      name: "Bouquet",
      link: "/gallery",
      image:
        "/Boquets/IMG_2461.JPG.jpeg",
    },
    {
      name: "Hair Clips",
      link: "/gallery",
      image:
        "/hairsband/IMG_2442.JPG.jpeg",
    },
    {
      name: "Flowers",
      link: "/gallery",
      image:
        "/flowers/IMG_2472.JPG.jpeg",
    },
    {
      name: "Keychains",
      link: "/gallery",
      image:
        "/Key/IMG_2471.JPG.jpeg",
    },
    {
      name: "Hair Bands",
      link: "/gallery",
      image:
        "/hairsband/IMG_2468.JPG.jpeg",
    },
    {
      name: "Aasan",
      link: "gallery",
      image:
        "/Aasan/IMG_2441.JPG.jpeg",
    },
  ];

  // Main category cards
  // const categories = [
  //   {
  //     name: "Flower Crafts",
  //     slug: "flower-crafts",
  //     image:
  //       "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
  //   },
  //   {
  //     name: "Resin Art",
  //     slug: "resin-art",
  //     image:
  //       "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
  //   },
  //   {
  //     name: "Gift Boxes",
  //     slug: "gift-boxes",
  //     image:
  //       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
  //   },
  //   {
  //     name: "Home Decor",
  //     slug: "home-decor",
  //     image:
  //       "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80",
  //   },
  // ];

  return (
    <section className="bg-[#F8F6F1]">

      {/* ============================= */}
      {/* Circular Category Navigation */}
      {/* ============================= */}

     <div className="py-6">
  <h1 className="text-center text-2xl md:text-3xl font-bold text-[#233603] mb-6">
    Shop by Collection ----- !
  </h1>
<div className="flex justify-start md:justify-center gap-6 md:gap-10 overflow-x-auto px-4 py-2 scrollbar-hide">
  {navCategories.map((category) => (
    <a
      key={category.name}
      href={category.link}
      className="flex-shrink-0 flex flex-col items-center w-[100px] group transition-all duration-300 ease-out hover:-translate-y-2"
    >
      {/* Circle */}
      <div
        className="
          w-24 h-24
          rounded-full
          p-1
          bg-gradient-to-br from-red-500 to-orange-400
          shadow-md
          transition-all duration-300 ease-out
          group-hover:shadow-xl
          group-hover:shadow-orange-200/60
          group-hover:scale-110
          group-hover:from-orange-400
          group-hover:to-red-500
        "
      >
        {/* Inner white border */}
        <div
          className="
            w-full h-full
            rounded-full
            bg-white
            p-[3px]
            transition-all duration-300
            group-hover:p-[4px]
          "
        >
          {/* Image */}
          <img
            src={category.image}
            alt={category.name}
            className="
              w-full h-full
              rounded-full
              object-cover
              transition-all duration-500 ease-out
              group-hover:scale-105
            "
          />
        </div>
      </div>

      {/* Category Name */}
      <span
        className="
          mt-3
          text-sm
          font-medium
          text-black
          whitespace-nowrap
          transition-all duration-300
          group-hover:text-[#233603]
          group-hover:font-semibold
        "
      >
        {category.name}
      </span>
    </a>
  ))}
</div>
</div>
      {/* ============================= */}
      {/* Hero Video */}
      {/* ============================= */}

      <FullScreenVideo />

      {/* ============================= */}
      {/* Products */}
      {/* ============================= */}

      <section id="products">
        <ProductList />
      </section>

      {/* ============================= */}
      {/* Journey */}
      {/* ============================= */}

      <section id="journey">
        <CraftFlow />
      </section>

      {/* ============================= */}
      {/* Categories */}
      {/* ============================= */}

      {/* <section id="categories"> */}

       

      </section>

    // </section>
  );
}