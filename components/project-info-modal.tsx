"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect } from "react"

interface ProjectInfoModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
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
    highlights?: string[]
  }
}

export function ProjectInfoModal({ isOpen, onClose, project }: ProjectInfoModalProps) {
  if (!isOpen) return null

  const handleViewProject = () => {
    if (project.href && project.href !== "#") {
      window.open(project.href, "_blank")
    }
    onClose()
  }

  // useEffect(() => {
  //   document.body.style.overflow = isOpen ? "hidden" : ""
  // }, [isOpen])

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="relative bg-[#1a2332] rounded-lg max-w-lg w-full overflow-visible">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
        </div>

        <button aria-label="Close" onClick={onClose} className="absolute top-0 right-0 z-[1] translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white text-black
        shadow-lg ring-1 ring-black/10 flex items-center justify-center hover:scale-105 hover:ring-black/20 focus:outline-none focus:ring-2 focus:ring-black
        transition">
          <X className="h-5 w-5" strokeWidth={2.5} />
        </button>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {/* Image */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-6">
            <Image
              src={project.imageUrl || "/placeholder.svg?height=300&width=500&query=project preview"}
              alt={project.title}
              fill
              className="object-cover"
            />
            {project.badge && (
              <div className="absolute top-4 left-4">
                <span className="bg-[#00a8e1] text-white px-3 py-1 rounded text-sm font-semibold">{project.badge}</span>
              </div>
            )}
            {project.rating && (
              <div className="absolute top-4 right-4">
                <div className="bg-black/70 text-white px-3 py-1 rounded text-sm flex items-center">
                  <span className="text-[#ff9900] mr-1">★</span>
                  {project.rating}
                </div>
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            {project.subtitle && <p className="text-[#00a8e1] font-bold text-lg">{project.subtitle}</p>}

            <p className="text-white leading-relaxed">{project.description}</p>

            {project.highlights?.length ? (
              <>
                <h4 className="text-white font-medium">Highlights</h4>
                <ul className="mt-2 list-disc pl-5 space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-white text-sm">
                      {h}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {/* Metadata */}
            {/* <div className="flex items-center space-x-4 text-sm text-gray-400">
              {project.year && <span>Year: {project.year}</span>}
              {project.duration && <span>Duration: {project.duration}</span>}
            </div> */}

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div>
                <h4 className="text-white font-medium mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                onClick={handleViewProject}
                className="bg-[#00a8e1] hover:bg-[#0086b3] text-white"
                disabled={!project.href || project.href === "#"}
              >
                View Project
              </Button>
              <Button
                variant="outline"
                onClick={onClose}
                className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
