"use client";

import ProductList from "@/components/comman/Productlist";
import AdvertisingBanner from "@/components/comman/AdvertisingBanner"
export default function Gallery() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-white">
      {/* Hero Section */}
      <AdvertisingBanner/>
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-pink-700 bg-pink-100 rounded-full">
            ✨ Handmade Collection
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Our Gallery
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            Explore our handcrafted creations made with creativity,
            passion, and attention to detail. Every product is uniquely
            designed to bring joy and elegance to your special moments.
          </p>
        </div>
      </section>

      {/* Product Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <ProductList />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pink-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Looking for a Custom Design?
          </h2>

          <p className="mt-4 text-pink-100 text-lg">
            We create personalized handmade gifts and custom craft
            products tailored to your requirements.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://chat.whatsapp.com/HbT9krCD5qgFcbiDM6iP5W",
                "_blank"
              )
            }
            className="mt-8 bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Order on WhatsApp
          </button>
        </div>
      </section>
    </main>
  );
}