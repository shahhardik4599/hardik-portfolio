"use client"

import { PrimeHeader } from "@/components/prime-header"
import { ContentCard } from "@/components/content-card"
import { portfolioData } from "@/lib/portfolio-data"
import { useSearchParams } from "next/navigation"
import { useMemo } from "react"
import type React from "react"

// --- Types & helpers ---
type SectionKey =
  | "featuredProjects"
  | "workExperience"
  | "technicalSkills"
  | "recentWork"
  | "education"
  | "popularNow"

const SECTION_PATH: Record<SectionKey, string> = {
  featuredProjects: "/projects",
  workExperience: "/experience",
  technicalSkills: "/skills",
  recentWork: "/projects", // change if you have a separate page
  education: "/education",
  popularNow: "/skills",
}

function normalize(s?: string) {
  return (s || "").toLowerCase()
}

function matchesQuery(q: string, item: any) {
  const haystack = [
    item.title,
    item.subtitle,
    item.description,
    Array.isArray(item.tags) ? item.tags.join(" ") : "",
  ]
    .map(normalize)
    .join(" ")
  return haystack.includes(q)
}

function resolveHref(section: SectionKey, item: any) {
  if (item.href && item.href !== "#") return item.href
  return `${SECTION_PATH[section]}#${item.id}` // fall back to anchor link
}

// -----------------------

export default function ProjectsPage() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("search") || ""

  // If there's a search query, search ACROSS ALL SECTIONS.
  // If not, show the original "featuredProjects" list.
  const results = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()

    // No search -> keep your original grid (featured projects)
    if (!q) {
      return portfolioData.featuredProjects.map((p) => ({
        ...p,
        _section: "featuredProjects" as SectionKey,
        _href: resolveHref("featuredProjects", p),
      }))
    }

    const sections: SectionKey[] = [
      "featuredProjects",
      "workExperience",
      "technicalSkills",
      "recentWork",
      "education",
      "popularNow",
    ]

    const collected: Array<any & { _section: SectionKey; _href: string }> = []

    for (const section of sections) {
      // @ts-ignore
      const items = (portfolioData[section] || []) as any[]
      for (const it of items) {
        if (matchesQuery(q, it)) {
          collected.push({
            ...it,
            _section: section,
            _href: resolveHref(section, it),
          })
        }
      }
    }

    // Optional ranking so Projects appear first
    const rank = (s: SectionKey) =>
      s === "featuredProjects" ? 0 :
        s === "recentWork" ? 1 :
          s === "workExperience" ? 2 :
            s === "technicalSkills" ? 3 :
              s === "education" ? 4 : 5

    return collected.sort((a, b) => rank(a._section) - rank(b._section))
  }, [searchQuery])

  // Show hero copy like your original page
  const isSearching = !!searchQuery.trim()

  return (
    <main className="min-h-screen bg-[#0f171e]">
      <PrimeHeader />

      <div className="relative h-[40vh] bg-gradient-to-r from-[#0f171e] via-[#1a2332] flex items-center to-transparent">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/projectsSection.png')` }}
        />
        <div className="absolute inset-0 from-black via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-[#0f171e] to-transparent" />

        <div className="relative w-full px-4 z-10">
          <div className="max-w-2xl ml-8">
            <h1 className="text-5xl font-bold text-white mb-4">
              {isSearching ? `Search Results for "${searchQuery}"` : "Featured Projects"}
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              {isSearching
                ? `Found ${results.length} project${results.length !== 1 ? "s" : ""} matching your search.`
                : "Explore my technical portfolio showcasing AI/ML solutions, full-stack applications, and distributed systems."}
            </p>
            <div className="flex items-center gap-4">
              <span className="bg-[#00a8e1] text-white px-3 py-1 rounded text-sm font-medium">Prime Developer</span>
              <span className="text-gray-300">2+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-8 py-12">
        {results.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-white mb-4">No projects found</h2>
            <p className="text-gray-400">
              Try searching with different keywords like "AI", "React", "Python", or "Machine Learning".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {results.map((item, index) => (
              <div key={`${item._section}-${item.id}-${index}`} className="group">
                <ContentCard
                  title={item.title}
                  subtitle={item.subtitle}
                  imageUrl={item.imageUrl}
                  rating={item.rating}
                  badge={item.badge}
                  year={item.year}
                  duration={item.duration}
                  href={item._href}              // <-- resolved link
                  description={item.description}
                  tags={item.tags}
                  highlights={item.highlights}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}


// "use client"

// import { PrimeHeader } from "@/components/prime-header"
// import { ContentCard } from "@/components/content-card"
// import { portfolioData } from "@/lib/portfolio-data"
// import { useSearchParams } from "next/navigation"
// import { useMemo } from "react"

// export default function ProjectsPage() {
//   const searchParams = useSearchParams()
//   const searchQuery = searchParams.get("search") || ""

//   const filteredProjects = useMemo(() => {
//     if (!searchQuery.trim()) {
//       return portfolioData.featuredProjects
//     }

//     const query = searchQuery.toLowerCase()
//     return portfolioData.featuredProjects.filter(
//       (project) =>
//         project.title.toLowerCase().includes(query) ||
//         project.description.toLowerCase().includes(query) ||
//         project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
//         project.subtitle.toLowerCase().includes(query),
//     )
//   }, [searchQuery])

//   return (
//     <main className="min-h-screen bg-[#0f171e]">
//       <PrimeHeader />

//       <div className="relative h-[60vh] bg-gradient-to-r from-[#0f171e] via-[#1a2332] flex items-center to-transparent">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url('/projectsSection.png')`,
//           }}
//         />
//         <div className="absolute inset-0 from-black via-black/50 to-transparent" />
//         <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-[#0f171e] to-transparent" />
  
//         <div className="relative w-full px-4 z-10">
//           <div className="max-w-2xl ml-8">
//             <h1 className="text-5xl font-bold text-white mb-4">
//               {searchQuery ? `Search Results for "${searchQuery}"` : "Featured Projects"}
//             </h1>
//             <p className="text-xl text-gray-300 mb-6">
//               {searchQuery
//                 ? `Found ${filteredProjects.length} project${filteredProjects.length !== 1 ? "s" : ""} matching your search.`
//                 : "Explore my technical portfolio showcasing AI/ML solutions, full-stack applications, and distributed systems."}
//             </p>
//             <div className="flex items-center gap-4">
//               <span className="bg-[#00a8e1] text-white px-3 py-1 rounded text-sm font-medium">Prime Developer</span>
//               <span className="text-gray-300">2+ Years Experience</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full px-8 py-12">
//         {filteredProjects.length === 0 ? (
//           <div className="text-center py-12">
//             <h2 className="text-2xl font-bold text-white mb-4">No projects found</h2>
//             <p className="text-gray-400">
//               Try searching with different keywords like "AI", "React", "Python", or "Machine Learning".
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
//             {filteredProjects.map((project, index) => (
//               <div key={index} className="group">
//                 <ContentCard
//                   title={project.title}
//                   subtitle={project.subtitle}
//                   imageUrl={project.imageUrl}
//                   rating={project.rating}
//                   badge={project.badge}
//                   year={project.year}
//                   duration={project.duration}
//                   href={project.href}
//                   description={project.description}
//                   tags={project.tags}
//                   highlights={project.highlights}
//                 />
//                 {/* <div className="mt-4 p-4 bg-[#1a2332] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <h3 className="text-white font-semibold mb-2">{project.title}</h3>
//                   <p className="text-white text-sm mb-3">{project.description}</p>
//                   <div className="flex flex-wrap gap-2">
//                     {project.tags.map((tech, i) => (
//                       <span key={i} className="bg-[#232f3e] text-gray-300 px-2 py-1 rounded text-xs">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div> */}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </main>
//   )
// }

