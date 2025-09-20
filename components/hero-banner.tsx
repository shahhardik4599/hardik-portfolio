"use client"

import { Play, Plus, Info, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroBanner() {
  const handleViewResume = () => {
    // Open resume in new tab - you can replace this URL with your actual resume
    window.open("/resume.pdf", "_blank")
  }

  const handleMoreInfo = () => {
    // Scroll to contact section or navigate to about page
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else {
      // If no contact section, navigate to contact page
      window.location.href = "/contact"
    }
  }

  const handleAddToList = () => {
    // Could open a modal or navigate to contact
    window.location.href = "/contact"
  }

  return (
    <div className="relative h-[70vh] bg-gradient-to-r from-black/80 to-transparent w-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/professional-software-engineer-coding-workspace-wi.jpg')`,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-12 lg:px-16">
          <div className="max-w-2xl">
            <div className="mb-4">
              <span className="bg-[#00a8e1] text-white px-3 py-1 rounded text-sm font-semibold">
                FEATURED DEVELOPER
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">HARDIK PRAKASHBHAI SHAH</h1>

            <p className="text-lg text-gray-300 mb-2">Machine Learning Engineer & Full-Stack Developer</p>

            <p className="text-base text-gray-400 mb-6 leading-relaxed">
              Applied Materials ML Intern | Santa Clara University MS Student | Expert in AI/ML, React, Next.js, and
              Cloud Computing. Building intelligent solutions with 3+ years of experience.
            </p>

            <div className="flex items-center space-x-4">
              <Button
                className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold"
                onClick={handleViewResume}
              >
                <Play className="h-5 w-5 mr-2" />
                View Resume
              </Button>

              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
                onClick={handleMoreInfo}
              >
                <Info className="h-5 w-5 mr-2" />
                More Info
              </Button>

              <Button variant="ghost" className="text-white hover:bg-white/20 p-3" onClick={handleAddToList}>
                <Plus className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" asChild>
                <a
                  href="https://github.com/shahhardik4599"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" asChild>
                <a
                  href="https://linkedin.com/in/hardikpshah21"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" asChild>
                <a href="mailto:hardikshah21200@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Rating and details */}
            <div className="flex items-center space-x-6 mt-6 text-sm text-gray-300">
              <div className="flex items-center space-x-1">
                <span className="text-[#ff9900]">★★★★★</span>
                <span>5.0</span>
              </div>
              <span>2024</span>
              <span className="border border-gray-500 px-2 py-1 text-xs">HD</span>
              <span>Available in: React, Python, Java, TypeScript</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f171e] to-transparent" />
    </div>
  )
}
