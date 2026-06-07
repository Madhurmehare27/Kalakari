"use client";

import ProductList from "@/components/comman/Productlist";
export default function Gallery() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-white">
      {/* Product Section */}
      <section className="pb-10">
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