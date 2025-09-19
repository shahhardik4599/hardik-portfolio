import { PrimeHeader } from "@/components/prime-header"
import { CheckCircle, Package, Truck, MapPin, GraduationCap } from "lucide-react"

export default function EducationPage() {
  const educationJourney = [
    {
      degree: "Master of Science in Information Systems",
      school: "Santa Clara University",
      period: "Jan 2024 – Dec 2025",
      location: "Santa Clara, CA, USA",
      gpa: "3.857/4.0",
      status: "out-for-delivery",
      coursework: [
        "Object-Oriented Programming",
        "Applied Cloud Computing",
        "Data Analytics",
        "Database Management Systems",
        "Deep Learning",
        "Natural Language Processing",
      ],
      milestones: [
        "Completed core programming foundations",
        "Mastered cloud computing with AWS",
        "Advanced AI/ML specialization in progress",
      ],
    },
    {
      degree: "Bachelor of Engineering, Computer Science",
      school: "Gujarat Technological University",
      period: "May 2018 – June 2022",
      location: "Ahmedabad, India",
      gpa: "3.97/4.0",
      status: "delivered",
      coursework: [
        "Data Structures and Algorithms",
        "Software Engineering",
        "Web Programming",
        "Design and Analysis of Algorithms",
        "Machine Learning",
        "Computer Networks",
      ],
      milestones: [
        "Graduated with highest honors",
        "Strong foundation in CS fundamentals",
        "Specialized in software engineering",
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
        return "Degree Delivered"
      case "out-for-delivery":
        return "Currently Pursuing"
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
            <h1 className="text-5xl font-bold text-white mb-4">Academic Delivery Tracking</h1>
            <p className="text-xl text-gray-300 mb-6">
              Follow my educational journey from Computer Science foundations to advanced Information Systems.
            </p>
            <div className="flex items-center gap-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium">
                ✓ 1 Degree Delivered
              </span>
              <span className="bg-[#00a8e1] text-white px-3 py-1 rounded text-sm font-medium">
                → 1 Currently Pursuing
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {educationJourney.map((edu, index) => (
            <div key={index} className="bg-[#1a2332] rounded-lg p-6 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  {getStatusIcon(edu.status)}
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-[#00a8e1] font-medium">{edu.school}</p>
                    <p className="text-green-400 text-sm font-medium">GPA: {edu.gpa}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-[#232f3e] text-white px-3 py-1 rounded text-sm font-medium mb-2">
                    {getStatusText(edu.status)}
                  </div>
                  <p className="text-gray-400 text-sm">{edu.period}</p>
                  <p className="text-gray-400 text-sm">{edu.location}</p>
                </div>
              </div>

              <div className="border-l-2 border-gray-600 pl-6 ml-3 space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-3">Academic Milestones:</h4>
                  <ul className="space-y-2">
                    {edu.milestones.map((milestone, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-2">
                        <span className="text-[#00a8e1] mt-1">•</span>
                        {milestone}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <span key={i} className="bg-[#232f3e] text-gray-300 px-3 py-1 rounded text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {edu.status === "delivered" && (
                <div className="mt-4 p-3 bg-green-900/20 border border-green-700 rounded">
                  <p className="text-green-400 text-sm flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Degree successfully completed with excellent academic performance
                  </p>
                </div>
              )}

              {edu.status === "out-for-delivery" && (
                <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700 rounded">
                  <p className="text-blue-400 text-sm flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    Currently pursuing advanced studies with strong academic standing
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#1a2332] rounded-lg p-6 border border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-[#00a8e1]" />
            <h3 className="text-xl font-bold text-white">Academic Excellence Summary</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">3.9+</div>
              <div className="text-gray-300 text-sm">Average GPA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#00a8e1]">12+</div>
              <div className="text-gray-300 text-sm">Core CS Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">2</div>
              <div className="text-gray-300 text-sm">Degrees Pursued</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
