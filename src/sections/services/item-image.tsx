"use client";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type imageProperty = {
  image: string;
  height: number;
  width: number;
  href: string;
  title: string;
};

export const ContainerImage = ({
  image,
  title,
  height,
  width,
  href,
}: imageProperty) => {
  const [isHovered, setIsHovered] = useState(false);

  const aspectRatio = width / height;
  const paddingBottom = (1 / aspectRatio) * 100;

  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        transform: isHovered ? "scale(1.02)" : "scale(1)",
      }}
    >
      {/* Main image with aspect ratio */}
      <div className="relative w-full" style={{ paddingBottom: `${paddingBottom}%` }}>
        <Image
          src={image || "/images/rocks.jpg"}
          alt={title}
          fill
          className={`object-cover rounded-lg transition-all duration-300 ${
            isHovered ? "brightness-100" : "brightness-75"
          }`}
        />
      </div>

      {/* Overlay */}
      <div className="absolute top-3 right-3 z-10">
        <button
          className="bg-white/90 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          onClick={() => console.log("Navigate to:", href)}
        >
          <Plus className="w-5 h-5 text-green-700" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-center">
        <h3 className="text-white/90 text-base font-light">{title}</h3>
      </div>
    </div>
  );
};
