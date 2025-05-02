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

  console.log(href)
  const navigationPage=()=>{

  }
  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-300"
      style={{
        width,
        height,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        transform: isHovered ? "scale(1.02)" : "scale(1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main image with overlay */}
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Image
          src={image || "/images/rocks.jpg"}
          alt={title}
          width={width}
          height={height}
          className="w-full h-full object-cover rounded-lg"
          style={{
            filter: isHovered ? "brightness(1)" : "brightness(0.7)",
            transition: "filter 0.3s ease-in-out",
          }}
        />

        <div className="absolute top-3 right-3 z-10">
          <button className="bg-white/90 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition-colors" onClick={navigationPage}>
            <Plus className="w-5 h-5 text-green-700" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 text-center">
          <h3 className="text-white/90 text-base font-light">{title}</h3>
        </div>
      </div>
    </div>
  );
};
