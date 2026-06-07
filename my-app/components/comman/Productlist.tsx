"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    name: "Resin Name Plate",
    price: "₹799",
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?w=800&q=80",
    category: "Resin",
  },
  {
    id: 2,
    name: "Customized Photo Frame",
    price: "₹999",
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    category: "Frames",
  },
  {
    id: 3,
    name: "Handmade Gift Box",
    price: "₹599",
    tag: "Trending",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    category: "Gifts",
  },
  {
    id: 4,
    name: "Decorative Candle Set",
    price: "₹499",
    tag: "New",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80",
    category: "Candles",
  },
  {
    id: 5,
    name: "Resin Wall Clock",
    price: "₹1,499",
    tag: "Premium",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    category: "Resin",
  },
  {
    id: 6,
    name: "Personalized Keychain",
    price: "₹299",
    tag: "Hot",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
    category: "Gifts",
  },
  {
    id: 7,
    name: "Resin Serving Tray",
    price: "₹1,299",
    tag: "Premium",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80",
    category: "Resin",
  },
  {
    id: 8,
    name: "Wooden Floating Shelf",
    price: "₹849",
    tag: "Trending",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    category: "Home Decor",
  },
  {
    id: 9,
    name: "Pressed Flower Bookmark Set",
    price: "₹349",
    tag: "New",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80",
    category: "Gifts",
  },
  {
    id: 10,
    name: "Macramé Wall Hanging",
    price: "₹1,199",
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Home Decor",
  },
  {
    id: 11,
    name: "Soy Wax Jar Candle",
    price: "₹399",
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80",
    category: "Candles",
  },
  {
    id: 12,
    name: "Resin Coaster Set of 4",
    price: "₹699",
    tag: "Hot",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    category: "Resin",
  },
  {
    id: 13,
    name: "Hand-Painted Ceramic Mug",
    price: "₹549",
    tag: "Trending",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80",
    category: "Gifts",
  },
  {
    id: 14,
    name: "Personalized Wooden Box",
    price: "₹899",
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    category: "Frames",
  },
  {
    id: 15,
    name: "Dried Flower Bouquet",
    price: "₹649",
    tag: "New",
    image: "https://images.unsplash.com/photo-1487530811015-780be65569bf?w=800&q=80",
    category: "Home Decor",
  },
  {
    id: 16,
    name: "Resin Ocean Wave Lamp",
    price: "₹2,199",
    tag: "Premium",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    category: "Resin",
  },
  {
    id: 17,
    name: "Handmade Scented Wax Melts",
    price: "₹279",
    tag: "Hot",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    category: "Candles",
  },
  {
    id: 18,
    name: "Custom Couple Portrait Frame",
    price: "₹1,399",
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    category: "Frames",
  },
  {
    id: 19,
    name: "Terracotta Planter Set",
    price: "₹749",
    tag: "Trending",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
    category: "Home Decor",
  },
  {
    id: 20,
    name: "Resin Galaxy Bookends",
    price: "₹1,899",
    tag: "Premium",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    category: "Resin",
  },
];

const categories = ["All", "Resin", "Frames", "Candles", "Gifts"];

const whatsappNumber = "917820941097";

export default function ProductList() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleOrder = (productName: string) => {
    const message = encodeURIComponent(
      `Hello 👋\n\nI am interested in *${productName}*.\nCan you please share more details?`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-[#F8F6F1] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-flex items-center rounded-full bg-[#233603]/10 px-4 py-2 text-xs font-semibold text-[#233603] tracking-wide uppercase">
            ✦ Handmade Collection
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Our Best Creations
          </h2>
          <p className="mt-3 text-sm text-gray-500 max-w-sm mx-auto">
            Crafted with love, made just for you.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide justify-start md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#233603] text-white border-[#233603]"
                  : "bg-white text-[#233603] border-[#233603]/30 hover:border-[#233603]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={16}
          grabCursor={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1.3 },
            480: { slidesPerView: 2.1 },
            640: { slidesPerView: 2.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {filtered.map((product) => (
            <SwiperSlide key={product.id} className="h-auto pb-4">
              <div className="group h-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">

                {/* Image */}
                <Link href={`/products/${product.id}`} className="block">
                  <div className="relative h-56 md:h-64 overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Tag */}
                    <span className="absolute bottom-3 left-3 bg-[#233603] text-white text-[10px] font-semibold px-3 py-1 rounded-full shadow">
                      {product.tag}
                    </span>
                    {/* Wishlist */}
                    <button
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center border border-gray-100 hover:bg-white transition"
                      aria-label="Save to wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-[#233603]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
                        />
                      </svg>
                    </button>
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-snug hover:text-[#233603] transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-center justify-between mt-2 mb-4">
                    <p className="text-[#233603] font-bold text-lg">
                      {product.price}
                    </p>
                    <div className="flex items-center gap-1 text-amber-400">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.382 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.62 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
                      </svg>
                      <span className="text-[10px] text-gray-500 font-medium">4.9</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleOrder(product.name)}
                    className="mt-auto w-full bg-[#233603] hover:bg-[#304a05] active:scale-95 text-white rounded-full text-xs font-semibold py-2.5 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.554 4.094 1.523 5.815L0 24l6.335-1.499A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.507-5.197-1.395l-.371-.22-3.763.891.946-3.657-.242-.378A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    Order Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}