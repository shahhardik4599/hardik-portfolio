import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Cloud, Database, Brain, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C/C++", "Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Technologies",
    icon: Code,
    skills: [
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "Angular",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "Tailwind",
      "Bootstrap",
      "GraphQL",
      "REST",
      "WebSockets",
    ],
  },
  {
    title: "AI/ML & Data",
    icon: Brain,
    skills: [
      "LLMs (OpenAI GPT/3.5, LlamaCpp)",
      "LangChain",
      "RAG",
      "Vector Databases",
      "Prompt Engineering",
      "scikit-learn",
      "pandas",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: ["GCP", "AWS (Lambda, S3, CloudWatch, EventBridge, API Gateway)", "Docker", "Kubernetes", "Terraform"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL Server", "MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Practices",
    icon: Wrench,
    skills: ["Agile", "Scrum", "Git", "GitHub", "Linux", "Jira", "Slack", "Postman", "Unit Testing", "Design Patterns"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-muted text-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
