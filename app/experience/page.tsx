import { PrimeHeader } from "@/components/prime-header"
import { CheckCircle, Package, Truck, MapPin } from "lucide-react"

export default function ExperiencePage() {
  const experiences = [
    {
      company: "Applied Materials, Santa Clara, CA, USA",
      role: "Machine Learning Intern",
      period: "Jan 2025 – June 2025",
      location: "Santa Clara, CA",
      status: "delivered",
      achievements: [
        "Engineered AI/ML models on purchase-history data with 2x higher projected revenue",
        "Built RAG pipeline with OpenAI API and LangChain for semantic queries",
        "Created Tableau dashboards reducing time-to-decision by 60%",
      ],
    },
    {
      company: "Santa Clara University, Santa Clara, CA, USA",
      role: "Teaching Assistant",
      period: "Sep 2024 – Mar 2025",
      location: "Santa Clara, CA",
      status: "delivered",
      achievements: [
        "Supported 50+ students in Java OOP and Cloud Computing",
        "Hands-on AWS services training (Lambda, S3, EC2, CloudWatch)",
        "Ensured clean coding practices and modern cloud workflows",
      ],
    },
    {
      company: "True Sparrow, Pune, India",
      role: "Software Engineer",
      period: "Jan 2022 – Nov 2023",
      location: "Pune, India",
      status: "delivered",
      achievements: [
        "Shipped full-stack features cutting page-load time by 25%",
        "Built real-time collaboration features boosting engagement by 25%",
        "Implemented CI/CD reducing release time by 60%",
      ],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="w-6 h-6 text-green-500" />
      case "out-for-delivery":
        return <Truck className="w-6 h-6 text-[#00a8e1]" />
      case "in-transit":
        return <Package className="w-6 h-6 text-yellow-500" />
      default:
        return <MapPin className="w-6 h-6 text-gray-500" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "delivered":
        return "Experience Delivered"
      case "out-for-delivery":
        return "Currently Active"
      case "in-transit":
        return "In Progress"
      default:
        return "Scheduled"
    }
  }

  return (
    <main className="min-h-screen bg-[#0f171e]">
      <PrimeHeader />

      <div className="relative h-[50vh] bg-gradient-to-r from-[#0f171e] via-[#1a2332] to-[#0f171e] flex items-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4">Career Delivery Tracking</h1>
            <p className="text-xl text-gray-300 mb-6">
              Track my professional journey from software engineering to AI/ML expertise.
            </p>
            <div className="flex items-center gap-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium">
                ✓ 3 Experiences Delivered
              </span>
              {/* <span className="bg-[#00a8e1] text-white px-3 py-1 rounded text-sm font-medium">
                → 1 Currently Active
              </span> */}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#1a2332] rounded-lg p-6 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  {getStatusIcon(exp.status)}
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-[#00a8e1] font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-[#232f3e] text-white px-3 py-1 rounded text-sm font-medium mb-2">
                    {getStatusText(exp.status)}
                  </div>
                  <p className="text-gray-400 text-sm">{exp.period}</p>
                  {/* <p className="text-gray-400 text-sm">{exp.location}</p> */}
                </div>
              </div>

              <div className="border-l-2 border-gray-600 pl-6 ml-3">
                <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-[#00a8e1] mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {exp.status === "delivered" && (
                <div className="mt-4 p-3 bg-green-900/20 border border-green-700 rounded">
                  <p className="text-green-400 text-sm flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Experience successfully delivered and impact achieved
                  </p>
                </div>
              )}

              {exp.status === "out-for-delivery" && (
                <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700 rounded">
                  <p className="text-blue-400 text-sm flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    Currently delivering value and gaining experience
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
