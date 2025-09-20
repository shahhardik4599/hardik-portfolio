"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContentCard } from "./content-card"
import { useRef, useState, useEffect } from "react"

interface ContentItem {
  id: string
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

interface ContentRowProps {
  title: string
  items: ContentItem[]
  seeMoreHref?: string
}

export function ContentRow({ title, items, seeMoreHref }: ContentRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isRowHovered, setIsRowHovered] = useState(false)

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollButtons)
      return () => scrollElement.removeEventListener("scroll", checkScrollButtons)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320 // Width of card + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="mb-12">
      {/* Row header */}
      <div className="flex items-center justify-between mb-4 px-12 lg:px-16">
        <h2 className="text-white text-xl font-semibold hover:text-[#00a8e1] transition-colors cursor-pointer">
          {title}
        </h2>
        {seeMoreHref && (
          <Button variant="link" className="text-[#00a8e1] hover:text-[#0086b3] p-0 text-sm">
            See more →
          </Button>
        )}
      </div>

      {/* Scrollable content */}
      <div
        className="relative group"
        onMouseEnter={() => setIsRowHovered(true)}
        onMouseLeave={() => setIsRowHovered(false)}
      >
        {/* Left scroll button */}
        {canScrollLeft && (
          <Button
            variant="ghost"
            size="sm"
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 text-white hover:bg-black/90 transition-all duration-300 h-12 w-12 rounded-full ${
              isRowHovered ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        )}

        {/* Right scroll button */}
        {canScrollRight && (
          <Button
            variant="ghost"
            size="sm"
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 text-white hover:bg-black/90 transition-all duration-300 h-12 w-12 rounded-full ${
              isRowHovered ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        )}

        {/* Content container */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto horizontal-scroll px-12 lg:px-16 pb-4 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item) => (
            <ContentCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
