"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
const images = [
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1600&q=80", // Flowers
  "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=1600&q=80", // Flower bouquet
  "https://images.unsplash.com/photo-1526045478516-99145907023c?w=1600&q=80", // Floral arrangement
  "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=1600&q=80", // Craft flowers
];

  return (
    <section className="relative h-screen w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen w-full">
              {/* Background Image */}
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="text-center text-white px-6">
                  <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm md:text-base mb-6">
                    🌿 Handmade Collection
                  </span>

                  <h1 className="text-4xl md:text-7xl font-italic tracking-wide mb-6">
  Handmade With Love
</h1>

                  <button
                    onClick={() =>
                      window.open(
                        "https://wa.me/917820941097",
                        "_blank"
                      )
                    }
                    className="bg-[#233603] hover:bg-[#304a05] text-white px-8 py-4 rounded-full font-medium transition-all duration-300"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}