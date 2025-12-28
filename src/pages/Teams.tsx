import { Link } from 'react-router-dom'
import { Section } from '../components/layout/Section'
import { RevealOnScroll } from '../components/motion/RevealOnScroll'
import { StaggerList, StaggerItem } from '../components/motion/StaggerList'
import { MemberCard } from '../components/ui/MemberCard'
import { ProjectCarousel } from '../components/ui/ProjectCarousel'
import { GlowCard } from '../components/ui/GlowCard'
import { coreTeam } from '../data/coreTeam'
import { architectureTeam } from '../data/architectureTeam'

export const Teams = () => {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <Section>
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold mb-4">
              Our <span className="text-amber-400">Team</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Meet the talented professionals driving innovation in construction and architecture
            </p>
          </div>
        </RevealOnScroll>

        {/* Core Team Section */}
        <RevealOnScroll delay={0.1}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">
                <span className="text-cyan-300">Core</span> Team
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto">
                Leadership and management driving our vision forward
              </p>
            </div>

            <StaggerList>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {coreTeam.map((member, index) => (
                  <StaggerItem key={member.id}>
                    <MemberCard
                      id={member.id}
                      name={member.name}
                      title={member.title}
                      image={member.image}
                      type="core"
                      glowColor={index % 2 === 0 ? 'amber' : 'cyan'}
                    />
                  </StaggerItem>
                ))}
              </div>
            </StaggerList>
          </div>
        </RevealOnScroll>

        {/* Architecture Team Section */}
        <RevealOnScroll delay={0.2}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">
                <span className="text-amber-400">Architecture</span> Team
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto">
                Creative minds bringing designs to life
              </p>
            </div>

            <StaggerList>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {architectureTeam.map((member, index) => (
                  <StaggerItem key={member.id}>
                    <Link to={`/teams/architecture/${member.id}`}>
                      <GlowCard
                        glowColor={index % 2 === 0 ? 'cyan' : 'amber'}
                        className="h-full flex flex-col cursor-pointer"
                      >
                      <div className="flex flex-col items-center text-center mb-4">
                        {/* Image */}
                        {member.image ? (
                          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full overflow-hidden border-2 border-cyan-400/30">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div className="w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full bg-zinc-800 border-2 border-cyan-400/30 flex items-center justify-center">
                            <span className="text-cyan-400 text-2xl font-bold">
                              {member.name.charAt(0)}
                            </span>
                          </div>
                        )}

                        {/* Name */}
                        <h3 className="text-lg md:text-xl font-semibold mb-1">{member.name}</h3>

                        {/* Title */}
                        <p className="text-cyan-300 text-sm md:text-base mb-3">{member.title}</p>

                        {/* Education and License Badges */}
                        <div className="flex flex-col gap-2 w-full mb-4">
                          <span className="text-xs text-zinc-400 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-3 py-1">
                            {member.education}
                          </span>
                          <span className="text-xs text-zinc-400 bg-zinc-800 border border-zinc-700 rounded-full px-3 py-1">
                            {member.license}
                          </span>
                        </div>
                      </div>

                      {/* Project Preview Carousel */}
                      {member.projectImages && member.projectImages.length > 0 && (
                        <div className="mt-auto">
                          <div className="mb-2">
                            <p className="text-sm text-zinc-400 mb-2">Project Preview</p>
                          </div>
                          <ProjectCarousel
                            images={member.projectImages}
                            memberId={member.id}
                            memberType="architecture"
                          />
                          <Link
                            to={`/teams/architecture/${member.id}`}
                            className="mt-4 block text-center"
                          >
                            <span className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">
                              View All Projects →
                            </span>
                          </Link>
                        </div>
                      )}
                    </GlowCard>
                    </Link>
                  </StaggerItem>
                ))}
              </div>
            </StaggerList>
          </div>
        </RevealOnScroll>
      </Section>
    </div>
  )
}

