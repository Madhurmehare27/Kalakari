"use client";

import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Button from "@/components/comman/Button";
import HomeCard from "@/components/comman/Card";
import { Video } from "lucide-react";

const users = [
  {
    id: 1,
    badge: "Badge 1",
    msg: "This is the first card.",
    name: "John Doe",
    src: "https://github.com/radix-ui.png",
    alt: "John Doe",
  },
  {
    id: 2,
    badge: "Badge 2",
    msg: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Jane Smith",
    src: "https://github.com/radix-ui.png",
    alt: "Jane Smith",
  },
   {
    id: 3,
    badge: "Badge 2",
    msg: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Jane Smith",
    src: "https://github.com/radix-ui.png",
    alt: "Jane Smith",
  }, {
    id: 4,
    badge: "Badge 2",
    msg: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Jane Smith",
    src: "https://github.com/radix-ui.png",
    alt: "Jane Smith",
  },
];

export default function HomePage() {


 

  return (
  <>
<div className="relative h-screen w-full overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  >
    <source
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      type="video/mp4"
    />
  </video>

  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 flex h-full items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-5xl font-bold ">Kalakari</h1>
      <p className="mt-4 text-xl font-medium italic text-pink-300">
  Handmade Crafts • Art • Creativity
</p>
    </div>
  </div>
</div>
</>
  );
}