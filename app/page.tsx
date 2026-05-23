import { Navbar } from '@/components/navbar'
import { AnimatedBackground } from '@/components/animated-background'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { EcosystemSection } from '@/components/ecosystem-section'
import { LearningSection } from '@/components/learning-section'
import { TechStackSection } from '@/components/tech-stack-section'
import { ContentSection } from '@/components/content-section'
import { LabsSection } from '@/components/labs-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (

    <div className="min-h-screen bg-[#030914] text-white selection:bg-[#00d9ff]/30 selection:text-white">
      <AnimatedBackground />
      <Navbar />
      
      {/* Main Content Flow */}
      <main className="relative z-10 flex flex-col overflow-hidden">
        <HeroSection />
        <ProjectsSection />
        <EcosystemSection />
        <LearningSection />
        <TechStackSection />
        <ContentSection />
        <LabsSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}