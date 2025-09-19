import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Machine Learning Intern (Practicum)",
    company: "Applied Materials",
    location: "Santa Clara, CA, USA",
    period: "Jan 2025 – June 2025",
    description: [
      "Engineered AI/ML models on purchase-history data in Python (pandas, scikit-learn) and applied association-rule mining (FP-Growth/Apriori) to surface high-lift part pairings and prioritize bundles with up to 2x higher projected revenue.",
      "Converted mined rules into natural-language facts, embedded them in a vector database, and shipped a RAG pipeline (OpenAI API and LangChain) that enabled sales and ops to run free-form semantic queries.",
      "Built Tableau and Python dashboards to visualize associations and inventory KPIs end-to-end, reducing time-to-decision by 60% for cross-functional teams.",
    ],
    skills: ["Python", "Machine Learning", "RAG", "LangChain", "Tableau"],
  },
  {
    title: "Teaching Assistant",
    company: "Santa Clara University",
    location: "Santa Clara, CA, USA",
    period: "Sep 2024 – Mar 2025",
    description: [
      "Supported 50+ students as a Teaching Assistant by reinforcing core Java OOP concepts (classes, inheritance, interfaces, exception handling) and assisting in Applied Cloud Computing labs with hands-on AWS services (Lambda, S3, EC2, CloudWatch, EventBridge, PartyRock).",
      "Ensured clean coding practices and modern cloud workflows for students.",
    ],
    skills: ["Java", "AWS", "Teaching", "Cloud Computing"],
  },
  {
    title: "Software Engineer",
    company: "True Sparrow (Formerly PLG Works)",
    location: "Pune, India",
    period: "Jan 2022 – Nov 2023",
    description: [
      "Shipped high-performance full-stack features for maticrobots.com and truesparrow.com using React, Next.js, TanStack Query, React Suspense, Node.js, cutting page-load time by 25% and increasing release cadence by 80%.",
      "Designed REST/GraphQL services in Node.js, integrated MongoDB and SQL Server, and enforced multi-tenant data consistency for scalable backends.",
      "Built real-time audio/video and collaboration on thursday.social using AWS Chime, added modular user/meeting APIs, and refactored legacy code with unit tests, improving maintainability by 40% and boosting engagement by 25%.",
      "Implemented CI/CD with GitHub Actions to run tests and automated Docker deployments to AWS with health checks and one-click rollbacks, cutting release time 60% and reducing failed deploys 30%.",
    ],
    skills: ["React", "Next.js", "Node.js", "AWS", "Docker", "GraphQL"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">Professional Experience</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl md:text-2xl text-foreground">{exp.title}</CardTitle>
                    <p className="text-lg text-primary font-semibold mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
