"use client";

import Link from "next/link";
import FullScreenVideo from "@/components/comman/FullScreenVideo";
import ProductList from "@/components/comman/Productlist";
import CraftFlow from "@/components/comman/CraftFlow";

export default function HeroSection() {
  const categories = [
    {
      name: "Flower Crafts",
      slug: "flower-crafts",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
    },
    {
      name: "Resin Art",
      slug: "resin-art",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    },
    {
      name: "Gift Boxes",
      slug: "gift-boxes",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    },
    {
      name: "Home Decor",
      slug: "home-decor",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80",
    },
  ];

  return (
    <section className="bg-[#F8F6F1]">
      <div className=" py-4">
        <div>
          <div className="">
            <a
              href="#products"
              className="px-5 py-2 rounded-full text-sm font-medium text-[#233603] hover:bg-[#233603] hover:text-white transition"
            >
              Products
            </a>

            <a
              href="#journey"
              className="px-5 py-2 rounded-full text-sm font-medium text-[#233603] hover:bg-[#233603] hover:text-white transition"
            >
              Journey
            </a>

            <a
              href="#categories"
              className="px-5 py-2 rounded-full text-sm font-medium text-[#233603] hover:bg-[#233603] hover:text-white transition"
            >
              Categories
            </a>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <FullScreenVideo />

      {/* Floating Navigation */}

      {/* Products */}
      <section id="products">
        <ProductList />
      </section>

      {/* Journey */}
      <section id="journey">
        <CraftFlow />
      </section>
      <section id="categories">
        {/* Categories */}
        <div className="grid grid-cols-2 gap-2 md:gap-2 py-4">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className={`block ${
                index % 2 === 0 ? "space-y-4" : "pt-12 space-y-4"
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl group cursor-pointer">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-60 md:h-80 w-full object-cover shadow-xl transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 z-10" />

                {/* Text */}
                <div className="absolute bottom-5 left-5 z-20">
                  <h3 className="text-white text-lg md:text-2xl font-bold">
                    {category.name}
                  </h3>

                  <h1 className="text-white/90 text-sm mt-1">
                    View Collection →
                  </h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
