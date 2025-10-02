// app/search/page.tsx (Next.js App Router)
"use client"

import { useMemo } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { portfolioData } from "@/lib/portfolio-data"

type SectionKey =
    | "featuredProjects"
    | "workExperience"
    | "technicalSkills"
    | "recentWork"
    | "education"
    | "popularNow"

type ResultItem = {
    id: string
    title: string
    subtitle?: string
    description?: string
    tags?: string[]
    imageUrl?: string
    section: SectionKey
    href?: string
}

const SECTION_LABEL: Record<SectionKey, string> = {
    featuredProjects: "Project",
    workExperience: "Experience",
    technicalSkills: "Skill",
    recentWork: "Recent Work",
    education: "Education",
    popularNow: "Other",
}

// (Optional) Map items to deep links in your site.
// Fall back to the item.href if provided; otherwise link to section pages with an id hash.
function resolveLink(item: ResultItem) {
    if (item.href && item.href !== "#") return item.href

    switch (item.section) {
        case "featuredProjects":
            return `/projects#${item.id}`
        case "workExperience":
            return `/experience#${item.id}`
        case "technicalSkills":
            return `/skills#${item.id}`
        case "recentWork":
            return `/projects#${item.id}` // or /recent#...
        case "education":
            return `/education#${item.id}`
        case "popularNow":
            return `/skills#${item.id}`
        default:
            return "/"
    }
}

function normalize(str?: string) {
    return (str || "").toLowerCase()
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

export default function SearchPage() {
    const params = useSearchParams()
    const qRaw = params.get("q") || ""
    const q = qRaw.trim().toLowerCase()

    const results = useMemo(() => {
        if (!q) return [] as ResultItem[]

        const sections: SectionKey[] = [
            "featuredProjects",
            "workExperience",
            "technicalSkills",
            "recentWork",
            "education",
            "popularNow",
        ]

        const out: ResultItem[] = []

        for (const section of sections) {
            // @ts-ignore
            const items = portfolioData[section] as any[]
            if (!Array.isArray(items)) continue

            for (const it of items) {
                if (matchesQuery(q, it)) {
                    out.push({
                        id: it.id,
                        title: it.title,
                        subtitle: it.subtitle,
                        description: it.description,
                        tags: it.tags,
                        imageUrl: it.imageUrl,
                        href: it.href,
                        section,
                    })
                }
            }
        }

        // Optional: sort projects first, then others
        const rank = (s: SectionKey) =>
            s === "featuredProjects" ? 0 :
                s === "recentWork" ? 1 :
                    s === "workExperience" ? 2 :
                        s === "technicalSkills" ? 3 :
                            s === "education" ? 4 : 5

        return out.sort((a, b) => rank(a.section) - rank(b.section))
    }, [q])

    return (
        <div className="px-4 py-8 max-w-5xl mx-auto text-white">
            <h1 className="text-2xl font-semibold mb-2">Search</h1>
            <p className="text-sm text-gray-400 mb-6">
                Results for <span className="font-medium">&ldquo;{qRaw}&rdquo;</span> ({results.length})
            </p>

            {results.length === 0 ? (
                <div className="text-gray-400">No matches found. Try a different keyword (e.g., a tech tag or title).</div>
            ) : (
                <ul className="grid gap-4 md:grid-cols-2">
                    {results.map((r) => (
                        <li key={`${r.section}-${r.id}`}>
                            <Link
                                href={resolveLink(r)}
                                className="block rounded-lg bg-[#1a2332] p-4 hover:bg-[#223049] transition-colors"
                            >
                                <div className="flex items-start justify-between">
                                    <h3 className="text-base font-semibold">{r.title}</h3>
                                    <span className="ml-2 text-xs rounded bg-gray-700 px-2 py-1">
                                        {SECTION_LABEL[r.section]}
                                    </span>
                                </div>
                                {r.subtitle && <p className="text-xs text-[#00a8e1] mt-1">{r.subtitle}</p>}
                                {r.description && <p className="text-sm text-gray-300 mt-2 line-clamp-3">{r.description}</p>}
                                {r.tags?.length ? (
                                    <div className="flex flex-wrap gap-1 mt-3">
                                        {r.tags.slice(0, 4).map((t, i) => (
                                            <span key={i} className="bg-gray-700 text-gray-300 px-2 py-0.5 rounded text-xs">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                ) : null}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
