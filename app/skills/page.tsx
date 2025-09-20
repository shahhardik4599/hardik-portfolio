import { PrimeHeader } from "@/components/prime-header"
import { Star, Play, Clock, Award } from "lucide-react"

export default function SkillsPage() {
  const skillCategories = [
    {
      category: "Programming Languages",
      type: "Prime Originals",
      skills: [
        { name: "Python", level: 95, rating: 4.9, episodes: "3+ years" },
        { name: "JavaScript/TypeScript", level: 92, rating: 4.8, episodes: "3+ years" },
        { name: "Java", level: 88, rating: 4.7, episodes: "2+ years" },
        { name: "C/C++", level: 85, rating: 4.6, episodes: "2+ years" },
      ],
    },
    {
      category: "Web Technologies",
      type: "Popular Series",
      skills: [
        { name: "React/Next.js", level: 94, rating: 4.9, episodes: "3+ years" },
        { name: "Node.js/Express", level: 90, rating: 4.8, episodes: "3+ years" },
        { name: "HTML/CSS/Tailwind", level: 92, rating: 4.8, episodes: "3+ years" },
        { name: "GraphQL/REST APIs", level: 87, rating: 4.7, episodes: "2+ years" },
      ],
    },
    {
      category: "AI/ML & Data",
      type: "Trending Now",
      skills: [
        { name: "LLMs (OpenAI, LangChain)", level: 90, rating: 4.8, episodes: "1+ years" },
        { name: "Machine Learning", level: 85, rating: 4.6, episodes: "2+ years" },
        { name: "pandas/scikit-learn", level: 88, rating: 4.7, episodes: "2+ years" },
        { name: "Vector Databases", level: 82, rating: 4.5, episodes: "1+ years" },
      ],
    },
    {
      category: "Cloud & Infrastructure",
      type: "Award Winners",
      skills: [
        { name: "AWS (Lambda, S3, EC2)", level: 89, rating: 4.7, episodes: "2+ years" },
        { name: "Docker/Kubernetes", level: 86, rating: 4.6, episodes: "2+ years" },
        { name: "GCP", level: 83, rating: 4.5, episodes: "1+ years" },
        { name: "CI/CD (GitHub Actions)", level: 87, rating: 4.6, episodes: "2+ years" },
      ],
    },
    {
      category: "Databases",
      type: "Classic Collection",
      skills: [
        { name: "MongoDB", level: 88, rating: 4.7, episodes: "3+ years" },
        { name: "PostgreSQL/MySQL", level: 85, rating: 4.6, episodes: "2+ years" },
        { name: "SQL Server", level: 82, rating: 4.5, episodes: "2+ years" },
      ],
    },
  ]

  const getSkillBadge = (level: number) => {
    if (level >= 90) return { text: "Expert", color: "bg-green-600" }
    if (level >= 80) return { text: "Advanced", color: "bg-[#00a8e1]" }
    if (level >= 70) return { text: "Intermediate", color: "bg-yellow-600" }
    return { text: "Beginner", color: "bg-gray-600" }
  }

  return (
    <main className="min-h-screen bg-[#0f171e]">
      <PrimeHeader />

      <div className="relative h-[50vh] bg-gradient-to-r from-[#0f171e] via-[#1a2332] to-[#0f171e] flex items-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4">Technical Skills Library</h1>
            <p className="text-xl text-gray-300 mb-6">
              Explore my comprehensive collection of programming languages, frameworks, and technologies.
            </p>
            <div className="flex items-center gap-4">
              <span className="bg-[#00a8e1] text-white px-3 py-1 rounded text-sm font-medium">Prime Developer</span>
              <span className="text-gray-300 flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400" />
                4.8 Average Rating
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">{category.category}</h2>
                <p className="text-gray-400">{category.type}</p>
              </div>
              <button className="text-[#00a8e1] hover:text-white transition-colors">View All</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="bg-[#1a2332] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-[#232f3e] to-[#1a2332] flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">{skill.level}%</div>
                      <div className="text-sm text-gray-300">Proficiency</div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Play className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute top-2 left-2">
                      <span
                        className={`${getSkillBadge(skill.level).color} text-white px-2 py-1 rounded text-xs font-medium`}
                      >
                        {getSkillBadge(skill.level).text}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-2">{skill.name}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {skill.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {skill.episodes}
                      </div>
                    </div>

                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-[#00a8e1] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 bg-[#1a2332] rounded-lg p-8 border border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-[#00a8e1]" />
            <h3 className="text-2xl font-bold text-white">Skills Achievement Summary</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">15+</div>
              <div className="text-gray-300">Expert Level Skills</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00a8e1]">25+</div>
              <div className="text-gray-300">Technologies Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">4.7</div>
              <div className="text-gray-300">Average Skill Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">3+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
