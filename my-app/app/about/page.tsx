"use client";

import React from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Sub-component for the Cards
const Card = ({ 
  title, 
  description, 
  icon, 
  className, 
  customContent,
  imageUrl
}: { 
  title?: string, 
  description?: string, 
  icon?: React.ReactNode, 
  className?: string, 
  customContent?: React.ReactNode,
  imageUrl?: string
}) => {
  const hasTextContent = Boolean(title || description || icon || customContent);

  return (
    <div
      className={`
        group
        border border-pink-100/50
        rounded-3xl 
        ${(!hasTextContent && imageUrl) ? 'p-0' : 'p-8'} 
        shadow-sm 
        hover:shadow-xl 
        hover:border-pink-200/60
        transition-all 
        duration-500 
        hover:-translate-y-1
        relative
        overflow-hidden
        flex flex-col h-full
        ${className || "bg-white/80 backdrop-blur-md"}
      `}
    >
      {/* Background Image Layer */}
      {imageUrl && (
        <>
          <img 
            src={imageUrl} 
            alt={title || "Card background"} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" 
          />
          {/* Subtle overlay for text readability */}
          {hasTextContent && (
            <div className="absolute inset-0 bg-black/40 z-0 transition-opacity duration-500 group-hover:bg-black/60" />
          )}
        </>
      )}

      {/* Content Layer */}
      {hasTextContent && (
        <div className={`relative z-10 flex flex-col h-full ${imageUrl && !customContent ? 'justify-center items-center text-center' : ''}`}>
          {!imageUrl && (
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          )}

          {icon}
          {title && (
            <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${imageUrl ? 'text-white drop-shadow-md' : 'text-gray-800 group-hover:text-pink-600'}`}>
              {title}
            </h3>
          )}
          {description && (
            <p className={`font-medium leading-relaxed flex-1 ${imageUrl ? 'text-gray-100 drop-shadow-sm' : 'text-gray-800/80'}`}>
              {description}
            </p>
          )}
          {customContent}
        </div>
      )}
    </div>
  );
};

type CardDataType = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  customContent?: React.ReactNode;
  imageUrl?: string;
};

const BentoGridSection = () => {
  const cardsData: CardDataType[] = [
    {
      title: "Our Mission",
      description: "To empower local artisans by providing a global platform for their handmade masterpieces, ensuring their art and heritage thrive.",
      imageUrl: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=800&auto=format&fit=crop", // Artisan/crafts image
      className: "md:col-span-1 md:row-span-1 border-none",
    },
    {
      // Removed the title so this card remains purely an image without text overlay
      imageUrl: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop",
      className: "md:col-span-1 md:row-span-2",
    },
    {
      title: "",
      customContent: (
        <div className="flex flex-col h-full">
          <div className="bg-[#e8e4db] self-start px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-gray-600 uppercase mb-8">
            Our Approach
          </div>
          <ul className="space-y-4 text-gray-500 font-medium text-[15px] flex-1">
            <li className="border-b border-gray-200 pb-4">Handmade with precision</li>
            <li className="border-b border-gray-200 pb-4">Tailored for each customer</li>
            <li className="border-b border-gray-200 pb-4">Eco-friendly choices</li>
            <li className="border-b border-gray-200 pb-4 border-transparent">Prompt, secure shipping</li>
          </ul>
        </div>
      ),
      className: "md:col-span-1 md:row-span-2 bg-[#fdfbf6]",
    },
    {
      title: "",
      customContent: (
        <div className="flex items-center justify-between h-full w-full group cursor-pointer">
          <h3 className="text-xl font-bold text-gray-800">View steps</h3>
          <div className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-sm flex items-center justify-center group-hover:bg-pink-50 transition-colors border border-white/40">
            <ArrowRight className="w-5 h-5 text-gray-700 group-hover:text-pink-600 transition-colors" />
          </div>
        </div>
      ),
      className: "md:col-span-1 md:row-span-1 bg-gradient-to-r from-[#d5cfce] to-[#c7c1c0] justify-center",
    },
    // ---- NEW CARDS ADDED BELOW ----
    {
      title: "",
      imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      customContent: (
        <div className="flex flex-col justify-between h-full w-full">
          <div className="self-end flex gap-2">
             <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-white/40 transition-colors"><ChevronLeft size={16} /></div>
             <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-white/40 transition-colors"><ChevronRight size={16} /></div>
          </div>
          <div className="mt-auto">
             <span className="text-xs font-bold tracking-widest text-white/70 uppercase mb-2 block">Guiding Principles</span>
             <h3 className="text-3xl font-extrabold text-white mb-3">Purposeful creativity</h3>
             <p className="text-white/80 font-medium leading-relaxed mb-6">We design thoughtful, premium gifts for every occasion, blending artistry and care.</p>
             <span className="font-bold flex items-center gap-2 text-white cursor-pointer hover:text-pink-300 transition-colors">Discover <ArrowRight size={16} /></span>
          </div>
        </div>
      ),
      className: "md:col-span-1 md:row-span-2 border-none",
    },
    {
      title: "",
      customContent: (
        <div className="flex flex-col items-center justify-center h-full text-white text-center">
           <span className="text-xs font-bold tracking-widest text-white/60 uppercase mb-4 block">Core Values</span>
           <h3 className="text-3xl font-extrabold mb-4">Quality above all</h3>
           <p className="text-white/80 font-medium max-w-sm mx-auto">Every piece is made with ethical materials, attention to detail, and lasting craftsmanship.</p>
        </div>
      ),
      className: "md:col-span-2 md:row-span-1 bg-[#a39a9c] border-none",
    },
    {
      title: "",
      customContent: (
        <div className="flex flex-col h-full justify-between">
           <div className="grid grid-cols-4 gap-4 mb-6 flex-1">
              {[
                {img: "https://images.unsplash.com/photo-1612927601601-6638404737ce?q=80&w=400&auto=format&fit=crop", title: "Handcrafts frames"},
                {img: "https://images.unsplash.com/photo-1584285421528-7956a1b8d2eb?q=80&w=400&auto=format&fit=crop", title: "Jordan designs resin"},
                {img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400&auto=format&fit=crop", title: "Morgan curates hampers"},
                {img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop", title: "Alex oversees quality"}
              ].map((item, i) => (
                 <div key={i} className="flex flex-col gap-3 group/item cursor-pointer">
                    <img src={item.img} className="w-full h-32 object-cover rounded-2xl transition-transform duration-300 group-hover/item:scale-105" alt={item.title} />
                    <span className="text-[13px] font-medium text-gray-600 leading-tight">{item.title}</span>
                 </div>
              ))}
           </div>
           <div className="flex justify-center mt-auto">
              <button className="px-6 py-2 rounded-full border border-gray-300 text-sm font-bold text-gray-700 hover:bg-white hover:border-gray-400 transition-colors">Our team</button>
           </div>
        </div>
      ),
      className: "md:col-span-2 md:row-span-1 bg-[#fcf9f2]",
    },
  ];

  return (
    <div>
      {/* Heading and Subheading */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300">Kalakari</span>
        </h2>
        <p className="text-sm font-mono text-pink-200 uppercase tracking-[0.2em] font-medium">
          Where traditional art meets modern elegance
        </p>
      </div>

      {/* Other sub-components which are Cards */}
      {/* Using auto-rows to force symmetric bento box height blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
        {cardsData.map((card, index) => (
          <Card 
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            className={card.className}
            customContent={card.customContent}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

const GalleryGridSection = () => {
  const galleryCards: CardDataType[] = [
    {
      imageUrl: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop",
      className: "md:col-span-2 md:row-span-2 border-none", // Tall image on the left (50% width)
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
      className: "md:col-span-1 md:row-span-1 border-none", // 2x2 grid top-left
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1603726574971-d603a1d95015?q=80&w=800&auto=format&fit=crop",
      className: "md:col-span-1 md:row-span-1 border-none", // 2x2 grid top-right
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=800&auto=format&fit=crop",
      className: "md:col-span-1 md:row-span-1 border-none", // 2x2 grid bottom-left
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
      className: "md:col-span-1 md:row-span-1 border-none", // 2x2 grid bottom-right
    },
  ];

  return (
    <div>
      {/* Heading and Subheading */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300">Exhibition</span>
        </h2>
        <p className="text-sm font-mono text-pink-200 uppercase tracking-[0.2em] font-medium">
          A glimpse into our crafted masterpieces
        </p>
      </div>

      {/* Grid of Image Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
        {galleryCards.map((card, index) => (
          <Card 
            key={index}
            imageUrl={card.imageUrl}
            className={card.className}
          />
        ))}
      </div>
    </div>
  );
};

export default function About() {
  // Change the background color of the main component easily here by replacing the hashcode:
  const mainBgColor = "#2c332f";

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
      {/* The SINGLE Main Component Container wrapping everything */}
      <div 
        className="py-16 px-6 sm:px-12 rounded-[2.5rem] shadow-2xl border border-[#3e4741] flex flex-col gap-24"
        style={{ backgroundColor: mainBgColor }}
      >
        {/* Top Section */}
        <BentoGridSection />

        {/* Subtle separator line between the two sections */}
        <div className="w-full h-px bg-white/10" />

        {/* Bottom Section */}
        <GalleryGridSection />
      </div>
    </div>
  );
}