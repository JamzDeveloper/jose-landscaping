"use client"

import Image from "next/image"
import { useState } from "react"

interface PortfolioCardProps {
  src: string
  alt: string
  title: string
  description: string
  width?: number
  height?: number
  className?: string
}

export default function PortfolioCard({
  src,
  alt,
  title,
  description,
  width = 180,
  height = 150,
  className = "rounded-lg object-cover w-full",
}: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative group cursor-pointer "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden ">
        <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className={className} />

        {/* Capa oscura por defecto */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          } rounded-md`}
        />

        {/* Texto que aparece en hover */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
          <p className="text-white/90 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
