import { Shield, Zap, Target, Eye } from 'lucide-react'
import { Section } from '../components/layout/Section'
import { GlowCard } from '../components/ui/GlowCard'
import { RevealOnScroll } from '../components/motion/RevealOnScroll'
import { StaggerList, StaggerItem } from '../components/motion/StaggerList'

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Every design prioritizes structural safety and seismic resilience',
    color: 'cyan' as const,
  },
  {
    icon: Zap,
    title: 'Sustainability',
    description: 'Green building practices and energy-efficient solutions',
    color: 'amber' as const,
  },
  {
    icon: Target,
    title: 'Quality',
    description: 'Uncompromising standards in every deliverable',
    color: 'cyan' as const,
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Clear communication and honest project timelines',
    color: 'amber' as const,
  },
]

export const About = () => {
  return (
    <div className="min-h-screen pt-32">
      <Section>
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-space font-bold mb-4">
              About <span className="text-amber-400">Us</span>
            </h1>
            <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
              Building the future of construction through innovative design and engineering
            </p>
          </div>
        </RevealOnScroll>

        {/* Mission */}
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto mb-16">
            <GlowCard glowColor="amber" className="text-center py-12">
              <h2 className="text-3xl font-space font-bold mb-6">
                Our <span className="text-cyan-300">Mission</span>
              </h2>
              <p className="text-lg text-zinc-300 mb-4 leading-relaxed">
                We blend cutting-edge architectural design, rigorous structural engineering, and 
                seamless coordination to deliver buildable solutions that stand the test of time. 
                Our approach combines aesthetic vision with engineering precision, ensuring every 
                project is both beautiful and structurally sound.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                From concept to construction documentation, we provide comprehensive services 
                that bridge the gap between design intent and buildable reality.
              </p>
            </GlowCard>
          </div>
        </RevealOnScroll>

        {/* What We Do */}
        <RevealOnScroll delay={0.2}>
          <div className="mb-16">
            <h2 className="text-3xl font-space font-bold text-center mb-8">
              What We <span className="text-cyan-300">Do</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <GlowCard glowColor="amber">
                <h3 className="text-xl font-semibold mb-3">Architectural Design</h3>
                <p className="text-zinc-400">
                  Comprehensive design services from concept development to construction-ready 
                  drawings, including residential, commercial, and mixed-use projects.
                </p>
              </GlowCard>
              <GlowCard glowColor="cyan">
                <h3 className="text-xl font-semibold mb-3">Structural Engineering</h3>
                <p className="text-zinc-400">
                  Expert structural analysis, RCC and steel design, seismic engineering, and 
                  value optimization for safe, efficient structures.
                </p>
              </GlowCard>
              <GlowCard glowColor="amber">
                <h3 className="text-xl font-semibold mb-3">Coordination & Support</h3>
                <p className="text-zinc-400">
                  BIM modeling, clash detection, construction documentation, and ongoing 
                  technical support throughout the project lifecycle.
                </p>
              </GlowCard>
            </div>
          </div>
        </RevealOnScroll>

        {/* Values */}
        <RevealOnScroll delay={0.3}>
          <div>
            <h2 className="text-3xl font-space font-bold text-center mb-8">
              Our <span className="text-amber-400">Values</span>
            </h2>
            <StaggerList>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <StaggerItem key={index}>
                    <GlowCard glowColor={value.color} className="text-center h-full">
                      <value.icon className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-zinc-400 text-sm">{value.description}</p>
                    </GlowCard>
                  </StaggerItem>
                ))}
              </div>
            </StaggerList>
          </div>
        </RevealOnScroll>

        {/* Skills/Tools (Optional) */}
        <RevealOnScroll delay={0.4}>
          <div className="mt-16 max-w-3xl mx-auto">
            <GlowCard glowColor="cyan" className="text-center py-8">
              <h3 className="text-2xl font-semibold mb-4">Modern Tools & Technology</h3>
              <p className="text-zinc-400 mb-4">
                We leverage industry-standard software and BIM technologies to deliver precise, 
                coordinated designs.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {['AutoCAD', 'Revit', 'BIM', 'ETABS', 'SAP2000', 'SketchUp'].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg text-sm text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </GlowCard>
          </div>
        </RevealOnScroll>
      </Section>
    </div>
  )
}

