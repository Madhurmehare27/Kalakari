"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  const router = useRouter();

  const categories = [
    {
      name: "Hair Bands",
      image: "/hairsband/IMG_2468.JPG.jpeg",
      subtitle: "Beautifully handmade",
      description:
        "Delicate handmade hair bands created with love, color, and creativity.",
    },
    {
      name: "Keychains",
      image: "/Key/IMG_2471.JPG.jpeg",
      subtitle: "Made just for you",
      description:
        "Unique handmade keychains that add a personal touch to your everyday life.",
    },
    {
      name: "Flowers",
      image: "/flowers/IMG_2472.JPG.jpeg",
      subtitle: "Petals with a story",
      description:
        "Handcrafted floral creations inspired by nature and made with love.",
    },
    {
      name: "Bouquets",
      image: "/Boquets/IMG_2496.JPG (1).jpeg",
      subtitle: "Made with love",
      description:
        "Thoughtfully handcrafted bouquets that make every special moment memorable.",
    },
  ];

  return (
    <section
      className="
        relative
        w-full
        bg-[#F8F6F1]
        overflow-hidden
        h-auto
        md:h-screen
      "
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-full h-auto md:h-full"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={category.name} className="!h-auto md:!h-full">
            <div
              className="
                relative
                w-full
                bg-[#F8F6F1]
                flex
                flex-col
                md:flex-row
                min-h-0
                md:h-full
              "
            >
              {/* =================================================
                  IMAGE SECTION
              ================================================= */}
{/* =================================================
    IMAGE SECTION
================================================= */}

<div
  className="
    relative
    w-full
    md:w-1/2
    h-[48vh]
    sm:h-[52vh]
    md:h-full
    min-h-[320px]
    flex
    items-center
    justify-center
    overflow-hidden
    bg-[#F8F6F1]
    shrink-0
  "
>
  {/* Main Circle Background */}
  <div
    className="
      absolute
      w-[70%]
      max-w-[500px]
      aspect-square
      rounded-full
      bg-white
      shadow-sm
    "
  />

  {/* Gold Circle Border */}
  <div
    className="
      absolute
      w-[73%]
      max-w-[530px]
      aspect-square
      rounded-full
      border-2
      border-[#D9A441]/40
    "
  />

  {/* PRODUCT IMAGE */}
  <div
    className="
      relative
      z-10
      w-[66%]
      max-w-[470px]
      aspect-square
      rounded-full
      overflow-hidden
      flex
      items-center
      justify-center
    "
  >
    <img
      src={category.image}
      alt={category.name}
      className="
        w-full
        h-full
        object-contain
        transition-transform
        duration-700
        hover:scale-105
      "
    />
  </div>

  {/* Number */}
  <div
    className="
      absolute
      z-20
      bottom-5
      left-5
      md:bottom-10
      md:left-10
      w-9
      h-9
      rounded-full
      bg-[#233603]
      text-white
      flex
      items-center
      justify-center
      text-xs
      font-semibold
    "
  >
    0{index + 1}
  </div>
</div>

              {/* =================================================
                  CONTENT SECTION
              ================================================= */}

              <div
                className="
                  relative
                  w-full
                  md:w-1/2
                  min-h-[420px]
                  md:min-h-0
                  md:h-full
                  flex
                  items-center
                  justify-center
                  px-6
                  py-12
                  sm:px-10
                  sm:py-14
                  md:px-10
                  md:py-10
                  lg:px-16
                  xl:px-24
                "
              >
                <div className="w-full max-w-xl text-center md:text-left">

                  {/* =================================================
                      LOGO
                  ================================================= */}

                  <div className="flex justify-center md:justify-start mb-5">
                    <img
                      src="/banner.png"
                      alt="Kalakari"
                      className="
                        w-[150px]
                        sm:w-[180px]
                        md:w-[210px]
                        lg:w-[240px]
                        h-auto
                        object-contain
                      "
                    />
                  </div>

                  {/* =================================================
                      SMALL TITLE
                  ================================================= */}

                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    <span className="w-8 sm:w-10 h-[1px] bg-[#D9A441]" />

                    <span
                      className="
                        text-[10px]
                        sm:text-xs
                        md:text-sm
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#233603]
                      "
                    >
                      {category.subtitle}
                    </span>
                  </div>

                  {/* =================================================
                      CATEGORY
                  ================================================= */}

                  <h1
                    className="
                      text-4xl
                      sm:text-5xl
                      md:text-5xl
                      lg:text-6xl
                      xl:text-7xl
                      font-serif
                      font-medium
                      text-[#233603]
                      leading-tight
                      tracking-tight
                      mb-4
                    "
                  >
                    {category.name}
                  </h1>

                  {/* =================================================
                      DECORATIVE LINE
                  ================================================= */}

                  <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#D9A441]" />

                    <span className="w-12 h-[1px] bg-[#D9A441]/60" />

                    <span className="text-[#D9A441] text-sm">
                      ✦
                    </span>
                  </div>

                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}

                  <p
                    className="
                      text-gray-600
                      text-sm
                      sm:text-base
                      md:text-lg
                      leading-relaxed
                      max-w-md
                      mx-auto
                      md:mx-0
                      mb-7
                    "
                  >
                    {category.description}
                  </p>

                  {/* =================================================
                      BUTTON
                  ================================================= */}

                  <div className="flex justify-center md:justify-start">
                    <button
                      onClick={() =>
                        router.push(
                          `/gallery?category=${encodeURIComponent(
                            category.name
                          )}`
                        )
                      }
                      className="
                        group
                        inline-flex
                        items-center
                        gap-3
                        bg-[#233603]
                        hover:bg-[#304a05]
                        text-white
                        px-7
                        sm:px-8
                        py-3.5
                        sm:py-4
                        rounded-full
                        text-sm
                        sm:text-base
                        font-medium
                        shadow-lg
                        shadow-[#233603]/10
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        active:scale-95
                      "
                    >
                      Explore Collection

                      <span
                        className="
                          flex
                          items-center
                          justify-center
                          w-7
                          h-7
                          rounded-full
                          bg-white/15
                          group-hover:translate-x-1
                          transition-transform
                        "
                      >
                        →
                      </span>
                    </button>
                  </div>

                  {/* =================================================
                      BOTTOM DETAILS
                  ================================================= */}

                  <div
                    className="
                      mt-7
                      flex
                      flex-wrap
                      justify-center
                      md:justify-start
                      items-center
                      gap-x-4
                      gap-y-2
                      text-[10px]
                      sm:text-xs
                      text-gray-400
                    "
                  >
                    <span>Handcrafted</span>

                    <span className="w-1 h-1 rounded-full bg-[#D9A441]" />

                    <span>Made with love</span>

                    <span className="w-1 h-1 rounded-full bg-[#D9A441]" />

                    <span>Unique pieces</span>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}