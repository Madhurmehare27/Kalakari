import Image from "next/image";
import React from "react";

interface MissionCardProps {
  title: string;
  image: string;
  description?: string;
  buttonText?: string;
  height?: string;
  overlayOpacity?: string;
  className?: string;
  children?: React.ReactNode;
  onButtonClick?: () => void;
}

export default function MissionCard({
  title,
  image,
  description,
  buttonText,
  height = "h-[400px]",
  overlayOpacity = "bg-black/20",
  className = "",
  children,
  onButtonClick,
}: MissionCardProps) {
  return (
    <div
      className={`
        relative
        ${height}
        ${className}
        rounded-[30px]
        overflow-hidden
        group
        shadow-xl
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all
        duration-500
      `}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
        "
      />

      {/* Overlay */}
      <div
        className={`
          absolute inset-0
          ${overlayOpacity}
          group-hover:bg-black/40
          transition-all duration-500
        `}
      />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-6">
        {title && (
          <h2
            className="
              text-white
              text-3xl
              md:text-5xl
              font-light
              mb-4
            "
          >
            {title}
          </h2>
        )}

        {description && (
          <p
            className="
              text-white/90
              max-w-md
              text-sm
              md:text-base
              mb-6
            "
          >
            {description}
          </p>
        )}

        {buttonText && (
          <button
            onClick={onButtonClick}
            className="
              px-6 py-3
              rounded-full
              bg-pink-500
              hover:bg-pink-600
              text-white
              font-medium
              transition-all
            "
          >
            {buttonText}
          </button>
        )}

        {children}
      </div>
    </div>
  );
}