"use client"

import type React from "react"

import { Search, ShoppingCart, Menu, X, FileText, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function PrimeHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/projects?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const handleReturnsOrders = () => {
    router.push("/projects")
  }

  const handleCart = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      // Fallback: navigate to home page with hash
      if (window.location.pathname !== "/") {
        router.push("/#contact")
      } else {
        // If already on home page, try again after a short delay
        setTimeout(() => {
          const retryElement = document.getElementById("contact")
          if (retryElement) {
            retryElement.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 100)
      }
    }
  }

  const handleProfile = () => {
    // Open resume or navigate to about section
    window.open("https://drive.google.com/file/d/1ayXpXWdH_SlZ5f3kBwaKXyjromBmGEIk/view?usp=sharing", "_blank")
  }

  return (
    <header className="bg-[#232f3e] text-white">
      {/* Top Amazon bar */}
      <div className="bg-[#232f3e] px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-white font-bold text-xl">
              hardik<span className="text-[#ff9900]">prime</span>
            </Link>
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <span>Deliver to</span>
              <div className="flex items-center">
                <span className="font-bold">Fremont, CA 94538</span>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <form onSubmit={handleSearch} className="flex">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, skills, experience..."
                className="rounded-l-md rounded-r-none border-0 bg-white text-black"
              />
              <Button
                type="submit"
                className="rounded-l-none rounded-r-md bg-[#ff9900] hover:bg-[#e88b00] text-black px-4"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <div className="hidden md:block">
              <div className="text-xs">Hello, Recruiter</div>
              <div className="font-bold">Account & Lists</div>
            </div>
            <button
              onClick={handleReturnsOrders}
              className="hidden md:block hover:outline hover:outline-1 hover:outline-white p-1 rounded"
            >
              <div className="text-xs">Projects</div>
              <div className="font-bold flex items-center">
                <Briefcase className="h-4 w-4 mr-1" />
                Portfolio
              </div>
            </button>
            <button
              onClick={handleCart}
              className="flex items-center hover:outline hover:outline-1 hover:outline-white p-1 rounded"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="ml-1 font-bold hidden sm:inline">Hire Me</span>
            </button>
          </div>
        </div>
      </div>

      {/* Prime Video navigation */}
      <div className="bg-[#1a242f] px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-[#00a8e1] font-bold text-lg">prime video</div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-6 text-sm">
              <Link href="/" className="hover:text-[#00a8e1] transition-colors">
                Home
              </Link>
              <Link href="/projects" className="hover:text-[#00a8e1] transition-colors">
                Projects
              </Link>
              <Link href="/experience" className="hover:text-[#00a8e1] transition-colors">
                Experience
              </Link>
              <Link href="/skills" className="hover:text-[#00a8e1] transition-colors">
                Skills
              </Link>
              <Link href="/education" className="hover:text-[#00a8e1] transition-colors">
                Education
              </Link>
              <Link href="/contact" className="hover:text-[#00a8e1] transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-[#00a8e1] hidden md:flex"
              onClick={handleProfile}
            >
              <FileText className="h-4 w-4 mr-2" />
              Resume
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-[#00a8e1] lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-600">
            <nav className="flex flex-col space-y-3 mt-4">
              <Link
                href="/"
                className="hover:text-[#00a8e1] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="hover:text-[#00a8e1] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/experience"
                className="hover:text-[#00a8e1] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experience
              </Link>
              <Link
                href="/skills"
                className="hover:text-[#00a8e1] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="/education"
                className="hover:text-[#00a8e1] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Education
              </Link>
              <Link
                href="/contact"
                className="hover:text-[#00a8e1] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 border-t border-gray-600 mt-4">
                <form onSubmit={handleSearch} className="flex">
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="rounded-l-md rounded-r-none border-0 bg-white text-black text-sm"
                  />
                  <Button
                    type="submit"
                    className="rounded-l-none rounded-r-md bg-[#ff9900] hover:bg-[#e88b00] text-black px-3"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-[#00a8e1] justify-start p-0 py-2 md:hidden"
                onClick={handleProfile}
              >
                <FileText className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
