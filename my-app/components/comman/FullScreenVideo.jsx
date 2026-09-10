"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  const images = [
    "/hairsband/IMG_2468.JPG.jpeg",
    "/Key/IMG_2471.JPG.jpeg",
    "/flowers/IMG_2472.JPG.jpeg",
    "/Boquets/IMG_2496.JPG (1).jpeg",
  ];

  const router = useRouter();

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#f5f3ed]">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="h-full w-full flex flex-col md:flex-row">

              {/* ================= IMAGE - LEFT ================= */}
             <div
  className="relative w-full md:w-1/2 h-[55%] md:h-full bg-center bg-no-repeat bg-contain"
  style={{
    backgroundImage: `url("${image}")`,
  }}
>
</div>

              {/* ================= CONTENT - RIGHT ================= */}
              <div className="w-full md:w-1/2 h-[45%] md:h-full flex items-center justify-center px-6 sm:px-10 lg:px-20">
                <div className="text-center md:text-left max-w-xl">

                  {/* Badge */}
                  <span className="inline-block px-4 py-2 rounded-full bg-[#233603]/10 text-[#233603] text-sm md:text-base mb-5">
                    🌿 Handmade Collection
                  </span>

                  {/* Heading */}
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif italic text-[#233603] tracking-wide leading-tight mb-6">
                    Handmade
                    <br />
                    With Love
                  </h1>

                  {/* Description */}
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-md">
                    Discover beautifully crafted handmade products made with
                    care, creativity, and love.
                  </p>

                  {/* Button */}
                  <button
                    onClick={() => router.push("/gallery")}
                    className="bg-[#233603] hover:bg-[#304a05] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
                  >
                    Explore Collection
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