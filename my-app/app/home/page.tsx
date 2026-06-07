"use client";
import FullScreenVideo from "@/components/comman/FullScreenVideo"
import  FeaturedCategories from "@/components/HomePage/FeaturedCategories"
import BestSeller from "@/components/HomePage/BestSellers"
import  Testimonial from "@/components/HomePage/Testimonials"
export default function HeroSection() {
  const whatsappGroup =
    "https://chat.whatsapp.com/HbT9krCD5qgFcbiDM6iP5W";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12  lg:py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium mb-6">
              ✨ Handmade with Love
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Unique
              <span className="text-pink-600"> kalakari </span>
              For Every Occasion
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Discover beautiful handcrafted gifts, personalized décor,
              resin art, festive collections, and custom creations made
              especially for you.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => window.open(whatsappGroup, "_blank")}
                className="px-8 py-4 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition"
              >
                Order on WhatsApp
              </button>

              <button
                className="px-8 py-4 border-2 border-pink-600 text-pink-600 rounded-full font-semibold hover:bg-pink-50 transition"
              >
                Explore Collection
              </button>
            </div>

            <div className="flex gap-8 mt-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                <p className="text-gray-500">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">100%</h3>
                <p className="text-gray-500">Handcrafted</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">50+</h3>
                <p className="text-gray-500">Custom Designs</p>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea"
                alt="Craft"
                className="rounded-3xl h-72 w-full object-cover shadow-xl"
              />

              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15"
                alt="Handmade"
                className="rounded-3xl h-56 w-full object-cover shadow-xl"
              />
            </div>

            <div className="pt-12 space-y-4">
              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
                alt="Gift"
                className="rounded-3xl h-56 w-full object-cover shadow-xl"
              />

              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
                alt="Decor"
                className="rounded-3xl h-72 w-full object-cover shadow-xl"
              />
            </div>
          </div>

        </div>
  
      </div>

      
          <div className="mt-3"> 
          <FullScreenVideo/>
          </div>
           
            
          
    </section>
    
  );
}