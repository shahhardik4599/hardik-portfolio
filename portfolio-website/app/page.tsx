import { PrimeHeader } from "@/components/prime-header"
import { HeroBanner } from "@/components/hero-banner"
import { ContentRow } from "@/components/content-row"
import { Footer } from "@/components/footer"
import { portfolioData } from "@/lib/portfolio-data"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f171e] w-full">
      <PrimeHeader />
      <HeroBanner />

      {/* Content rows - matching Prime Video layout */}
      <div className="py-8 space-y-8 w-full">
        <ContentRow title="Featured Projects" items={portfolioData.featuredProjects} seeMoreHref="/projects" />

        <ContentRow title="Popular now" items={portfolioData.popularNow} seeMoreHref="/skills" />

        <ContentRow title="Work Experience" items={portfolioData.workExperience} seeMoreHref="/experience" />

        <ContentRow title="Technical Skills" items={portfolioData.technicalSkills} seeMoreHref="/skills" />

        <ContentRow title="Recent Work" items={portfolioData.recentWork} seeMoreHref="/projects" />

        <ContentRow title="Education" items={portfolioData.education} seeMoreHref="/education" />
      </div>

      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-8">Interested in working together? Let's discuss your next project.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="mailto:hardikshah21200@gmail.com">
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/contact">View Contact Page</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
