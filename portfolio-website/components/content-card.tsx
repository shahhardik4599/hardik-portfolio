"use client"

import { Play, Plus, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

interface ContentCardProps {
  title: string
  subtitle?: string
  description: string
  imageUrl: string
  badge?: string
  rating?: number
  year?: string
  duration?: string
  tags?: string[]
  href?: string
}

export function ContentCard({
  title,
  subtitle,
  description,
  imageUrl,
  badge,
  rating,
  year,
  duration,
  tags,
  href = "#",
}: ContentCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      className="relative min-w-[280px] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[16/9] rounded-md overflow-hidden bg-gray-800">
        {isHovered &&
        (title.includes("LegalDocParser") ||
          title.includes("Task Scheduler") ||
          title.includes("API Documentation")) ? (
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src={`/videos/${title.toLowerCase().replace(/\s+/g, "-")}-preview.mp4`} type="video/mp4" />
            {/* Fallback to image if video doesn't exist */}
            <Image
              src={imageUrl || "/placeholder.svg?height=180&width=320&query=project preview"}
              alt={title}
              fill
              className="object-cover"
            />
          </video>
        ) : (
          <Image
            src={imageUrl || "/placeholder.svg?height=180&width=320&query=project preview"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-300 ${isHovered ? "scale-105" : ""}`}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = `/placeholder.svg?height=180&width=320&query=${encodeURIComponent(title + " preview")}`
            }}
          />
        )}

        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-center justify-center ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex space-x-2">
            <Button size="sm" className="bg-white text-black hover:bg-gray-200">
              <Play className="h-4 w-4 mr-1" />
              View
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              <Plus className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              <Info className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Badge */}
        {badge && (
          <div className="absolute top-2 left-2">
            <span className="bg-[#00a8e1] text-white px-2 py-1 rounded text-xs font-semibold">{badge}</span>
          </div>
        )}

        {/* Rating */}
        {rating && (
          <div className="absolute top-2 right-2">
            <div className="bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center">
              <span className="text-[#ff9900] mr-1">★</span>
              {rating}
            </div>
          </div>
        )}
      </div>

      {/* Content info */}
      <div className="mt-3 space-y-1">
        <h3 className="text-white font-semibold text-sm line-clamp-1">{title}</h3>
        {subtitle && <p className="text-gray-400 text-xs line-clamp-1">{subtitle}</p>}
        <p className="text-gray-400 text-xs line-clamp-2">{description}</p>

        {/* Metadata */}
        <div className="flex items-center space-x-2 text-xs text-gray-500">
          {year && <span>{year}</span>}
          {duration && <span>• {duration}</span>}
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
