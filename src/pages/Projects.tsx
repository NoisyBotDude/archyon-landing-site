import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { Section } from '../components/layout/Section'
import { GlowCard } from '../components/ui/GlowCard'
import { Badge } from '../components/ui/Badge'
import { RevealOnScroll } from '../components/motion/RevealOnScroll'
import { StaggerList, StaggerItem } from '../components/motion/StaggerList'

export const Projects = () => {
  return (
    <div className="min-h-screen pt-32">
      <Section>
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-space font-bold mb-4">
              Our <span className="text-cyan-300">Projects</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Showcasing our expertise across residential and commercial construction projects
            </p>
          </div>
        </RevealOnScroll>

        <StaggerList>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <GlowCard
                  glowColor={project.type === 'Residential' ? 'amber' : 'cyan'}
                  className="h-full flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant={project.type === 'Residential' ? 'amber' : 'cyan'}>
                      {project.type}
                    </Badge>
                    {project.year && (
                      <span className="text-zinc-500 text-sm">{project.year}</span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  
                  {project.description && (
                    <p className="text-zinc-400 mb-4 text-sm">{project.description}</p>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.services.map((service, idx) => (
                      <Badge key={idx} variant="default" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerList>

        <RevealOnScroll delay={0.3}>
          <div className="mt-16 text-center">
            <p className="text-zinc-400 mb-6">
              Interested in seeing more of our work or discussing your project?
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-lg hover:bg-amber-500/30 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </RevealOnScroll>
      </Section>
    </div>
  )
}

