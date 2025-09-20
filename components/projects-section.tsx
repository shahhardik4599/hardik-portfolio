import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "LegalDocParser – Intelligent Field Detection & Insertion Assistant",
    description:
      "AI-powered document ingestion pipeline to parse legal documents, identifying semantic placeholders, and reducing manual review by 80%, supporting PDF, DOCX, and TXT formats with pre-processing for OCR.",
    features: [
      "Built a chat-driven field-completion flow that auto-filled the source template and produced ready-to-download DOCX/PDF",
      "Shipped as a containerized service with automated CI for reliable releases",
    ],
    technologies: ["React.js", "LangChain", "OpenAI API", "PyMuPDF", "Docker"],
    type: "AI/ML Project",
  },
  {
    title: "Distributed Task Scheduler & Resource Manager",
    description:
      "Designed a distributed task scheduler across 10+ nodes, improving task efficiency by 25% via load balancing.",
    features: [
      "Built a scalable Hadoop + Spark pipeline for post-processing and analytics",
      "Reduced end-to-end latency 20% and boosted throughput 30%",
    ],
    technologies: ["Kubernetes", "Docker", "RabbitMQ", "Hadoop", "Apache Spark", "Python"],
    type: "Distributed Systems",
  },
  {
    title: "API Documentation Assistant (ADA) using Chatbot",
    description:
      "Engineered an API Documentation Assistant using GPT-4, Webpack, and EJS, enabling real-time, natural language processing of API queries, which improved developer productivity by 25%.",
    features: [
      "Emphasized privacy by employing locally running models like GPT-4 ALL and LlamaCpp",
      "Real-time natural language processing of API documentation",
    ],
    technologies: ["Webpack", "EJS", "GPT-4", "LlamaCpp"],
    type: "Developer Tools",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">Featured Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-3 text-xs">
                      {project.type}
                    </Badge>
                    <CardTitle className="text-lg leading-tight text-balance">{project.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                      • {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                      {tech}
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
