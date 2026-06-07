"use client";

import { useEffect, useState } from "react";

export default function TopBanner() {
  const messages = [
    "Handmade Creations",
    " Custom Orders Available",
    " Premium Flower Crafts",
    " Perfect Gifts for Every Occasion",
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full py-2"
      style={{ backgroundColor: "#233603" }}
    >
      <p
        className={`text-center text-white text-sm md:text-base font-medium transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {messages[index]}
      </p>
    </div>
  );
}