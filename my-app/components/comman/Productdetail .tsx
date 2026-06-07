"use client";

import { useState } from "react";
import Link from "next/link";

// In a real app, fetch this by ID from your data source / API
const product = {
  id: 1,
  name: "Resin Name Plate",
  price: 799,
  tag: "Best Seller",
  rating: 4.9,
  reviews: 128,
  delivery: "3–5 days",
  customizable: "Any color",
  description:
    "A beautifully handcrafted resin name plate made entirely to order. Choose your name, preferred color palette, and size. Perfect for home décor, office desks, and gifting.",
  sizes: ["Small", "Medium", "Large"],
  image:
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?w=800&q=80",
  category: "Resin",
};

const whatsappNumber = "917820941097";

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState("Small");
  const [wishlisted, setWishlisted] = useState(false);

  const handleOrder = () => {
    const message = encodeURIComponent(
      `Hello 👋\n\nI am interested in *${product.name}* (Size: ${selectedSize}).\nCan you please share more details?`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ── Hero Image ── */}
      <div className="relative w-full h-72 md:h-96 bg-[#F0EDE5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* Back button */}
        <Link
          href="/"
          className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center border border-gray-100 shadow-sm hover:bg-white transition"
          aria-label="Go back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#233603]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>

        {/* Wishlist button */}
        <button
          onClick={() => setWishlisted((v) => !v)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center border border-gray-100 shadow-sm hover:bg-white transition"
          aria-label="Toggle wishlist"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 transition-colors ${
              wishlisted ? "text-rose-500 fill-rose-500" : "text-[#233603]"
            }`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill={wishlisted ? "currentColor" : "none"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
            />
          </svg>
        </button>

        {/* Tag badge */}
        <span className="absolute bottom-4 left-4 bg-[#233603] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow">
          {product.tag}
        </span>
      </div>

      {/* ── Content ── */}
      <div className="flex-1 px-5 pt-5 pb-28 max-w-2xl mx-auto w-full">

        {/* Title & Rating */}
        <div className="flex items-start justify-between gap-4 mb-1">
          <h1
            className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            {product.name}
          </h1>
          <div className="flex items-center gap-1 flex-shrink-0 mt-1">
            <svg className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.382 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.62 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
            </svg>
            <span className="text-sm font-semibold text-gray-800">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviews})</span>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-4">Handcrafted with premium resin</p>

        {/* Price */}
        <p className="text-2xl font-bold text-[#233603] mb-5">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        {/* Info Pills */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            {
              icon: (
                <svg className="w-5 h-5 text-[#233603]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              ),
              label: "Delivery",
              value: product.delivery,
            },
            {
              icon: (
                <svg className="w-5 h-5 text-[#233603]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              ),
              label: "Custom",
              value: product.customizable,
            },
            {
              icon: (
                <svg className="w-5 h-5 text-[#233603]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              ),
              label: "Handmade",
              value: "100%",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-1.5 bg-[#F8F6F1] rounded-2xl p-3 text-center"
            >
              {item.icon}
              <span className="text-[10px] text-gray-400">{item.label}</span>
              <span className="text-xs font-semibold text-gray-800">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
            About
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
        </div>

        {/* Size Selector */}
        <div className="mb-6">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Choose Size
          </h2>
          <div className="flex gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-5 py-2 rounded-xl text-sm font-medium border transition-all duration-200 ${
                  selectedSize === size
                    ? "bg-[#233603] text-white border-[#233603]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#233603]/40"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Sticky Bottom CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4 flex gap-3 items-center max-w-2xl mx-auto w-full">

        {/* WhatsApp icon button */}
        <button
          onClick={handleOrder}
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 flex-shrink-0 rounded-2xl bg-[#F8F6F1] flex items-center justify-center border border-[#233603]/15 hover:bg-[#233603]/5 active:scale-95 transition-all"
        >
          {/* WhatsApp SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="#25D366"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.554 4.094 1.523 5.815L0 24l6.335-1.499A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.507-5.197-1.395l-.371-.22-3.763.891.946-3.657-.242-.378A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
        </button>

        {/* Main CTA */}
        <button
          onClick={handleOrder}
          className="flex-1 bg-[#233603] hover:bg-[#304a05] active:scale-95 text-white font-semibold text-sm rounded-2xl h-12 flex items-center justify-center gap-2 transition-all duration-200 shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.554 4.094 1.523 5.815L0 24l6.335-1.499A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.507-5.197-1.395l-.371-.22-3.763.891.946-3.657-.242-.378A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
          Order on WhatsApp
        </button>
      </div>
    </div>
  );
}