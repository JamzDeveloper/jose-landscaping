"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

interface QuoteButtonProps {
  text?: string
  onClick?: () => void
  className?: string
}

export function CustomButton({ text = "Quote here", onClick, className = "" }: QuoteButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        bg-[#3e6b4d] 
        text-white 
        font-medium 
        py-4 
        px-8 
        rounded-xl
        shadow-[0_4px_8px_rgba(0,0,0,0.2)] 
        hover:shadow-[0_6px_12px_rgba(0,0,0,0.25)] 
        transition-all 
        duration-300
        flex
        items-center
        gap-2
        ${className}
      `}
    >
      <span>{text}</span>
      <span
        className={`
          transform transition-all duration-300
          ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
        `}
      >
        <ArrowRight size={18} />
      </span>
    </button>
  )
}
