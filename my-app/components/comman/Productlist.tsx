"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button";

import "swiper/css";
import "swiper/css/navigation";
export default function ProductList() {
  const products = [
    {
      id: 1,
      name: "Resin Name Plate",
      price: "₹799",
      tag: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?w=800&q=80",
    },
    {
      id: 2,
      name: "Customized Photo Frame",
      price: "₹999",
      tag: "Popular",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    },
    {
      id: 3,
      name: "Handmade Gift Box",
      price: "₹599",
      tag: "Trending",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    },
    {
      id: 4,
      name: "Decorative Candle Set",
      price: "₹499",
      tag: "New",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80",
    },
    {
      id: 5,
      name: "Resin Wall Clock",
      price: "₹1499",
      tag: "Premium",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    },
    {
      id: 6,
      name: "Personalized Keychain",
      price: "₹299",
      tag: "Hot",
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
    },
  ];

  const whatsappNumber = "917820941097";

  const handleOrder = (productName: string) => {
    const message = encodeURIComponent(
      `Hello 👋

I am interested in *${productName}*.
Can you please share more details?`
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section className="py-16 md:py-24 bg-[#F8F6F1]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center rounded-full bg-[#233603]/10 px-4 py-2 text-sm font-medium text-[#233603]">
            Handmade Collection
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-gray-900">
            Our Best Creations
          </h2>

        </div>

        {/* Product Slider */}
    <Swiper
  spaceBetween={24}
  grabCursor={true}
  breakpoints={{
    320: {
      slidesPerView: 1.2,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  }}
>
  {products.map((product) => (
    <SwiperSlide key={product.id} className="h-auto">
      <Card className="group h-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        
        {/* Product Image */}
        <div className="relative h-[300px] overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <span className="absolute bottom-3 left-3 bg-[#233603] text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
            {product.tag}
          </span>
        </div>

        {/* Product Content */}
        <CardContent className="flex flex-col justify-between min-h-[180px] p-4 md:p-5">
          
          <div>
            <h3 className="text-sm md:text-lg font-medium text-gray-800 line-clamp-2 h-14">
              {product.name}
            </h3>

            <p className="mt-3 text-[#233603] font-bold text-lg md:text-2xl">
              {product.price}
            </p>
          </div>

          <Button
            onClick={() => handleOrder(product.name)}
            className="mt-4 w-full bg-[#233603] hover:bg-[#304a05] text-white rounded-full"
          >
            Order Now
          </Button>

        </CardContent>
      </Card>
    </SwiperSlide>
  ))}
</Swiper>
      </div>
    </section>
  );
}