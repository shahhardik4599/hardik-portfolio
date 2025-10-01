"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a2332] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
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
            {project.subtitle && <p className="text-[#00a8e1] font-medium text-lg">{project.subtitle}</p>}

            <p className="text-gray-300 leading-relaxed">{project.description}</p>

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
