import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Mail, Linkedin, Phone } from 'lucide-react'
import { Section } from '../components/layout/Section'
import { RevealOnScroll } from '../components/motion/RevealOnScroll'
import { GlowCard } from '../components/ui/GlowCard'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { StaggerList, StaggerItem } from '../components/motion/StaggerList'
import { coreTeam } from '../data/coreTeam'
import { architectureTeam } from '../data/architectureTeam'
import { CoreTeamMember } from '../data/coreTeam'
import { ArchitectureTeamMember } from '../data/architectureTeam'

export const TeamMember = () => {
  const { type, memberId } = useParams<{ type: 'core' | 'architecture'; memberId: string }>()
  const navigate = useNavigate()

  // Find the member based on type
  let member: CoreTeamMember | ArchitectureTeamMember | undefined

  if (type === 'core') {
    member = coreTeam.find((m) => m.id === memberId)
  } else if (type === 'architecture') {
    member = architectureTeam.find((m) => m.id === memberId)
  }

  if (!member) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <Section>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Member Not Found</h1>
            <p className="text-zinc-400 mb-8">The team member you're looking for doesn't exist.</p>
            <Button variant="primary" onClick={() => navigate('/teams')}>
              Back to Teams
            </Button>
          </div>
        </Section>
      </div>
    )
  }

  const isArchitecture = type === 'architecture'
  const archMember = isArchitecture ? (member as ArchitectureTeamMember) : null

  return (
    <div className="min-h-screen pt-32">
      {/* Back Button */}
      <Section>
        <RevealOnScroll>
          <button
            onClick={() => navigate('/teams')}
            className="flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Teams</span>
          </button>
        </RevealOnScroll>
      </Section>

      {/* Hero Section */}
      <Section>
        <RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-lg overflow-hidden border-2 border-amber-500/30">
                <img
                  src={member.image || '/placeholder-avatar.svg'}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/placeholder-avatar.svg'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
              </div>
            </div>

            {/* Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-space font-bold mb-4">
                {member.name}
              </h1>
              <p className="text-amber-400 text-xl md:text-2xl mb-6">{member.title}</p>
              <p className="text-amber-400 text-xl md:text-2xl mb-6">{member.subtitle}</p>

              {/* Architecture-specific info */}
              {isArchitecture && archMember && (
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="cyan">{archMember.education}</Badge>
                  <Badge variant="default">{archMember.institution}</Badge>
                  <Badge variant="amber">{archMember.license}</Badge>
                </div>
              )}

              {/* Bio */}
              {member.bio && (
                <p className="text-zinc-300 text-lg leading-relaxed mb-6">{member.bio}</p>
              )}

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-colors"
                  >
                    <Mail size={18} />
                    <span>{member.email}</span>
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover:text-cyan-300 transition-colors"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                )}
                {'phone' in member && member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-colors"
                  >
                    <Phone size={18} />
                    <span>{member.phone}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Section>

      {/* Project Gallery (Architecture Team Only) */}
      {isArchitecture && archMember && archMember.projectImages.length > 0 && (
        <Section className="bg-zinc-900/30">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">
                Project <span className="text-cyan-300">Gallery</span>
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto">
                Explore the architectural designs and projects
              </p>
            </div>
          </RevealOnScroll>

          <StaggerList>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {archMember.projectImages.map((imageUrl, index) => (
                <StaggerItem key={index}>
                  <GlowCard glowColor={index % 2 === 0 ? 'amber' : 'cyan'} className="p-0 overflow-hidden">
                    <div className="relative aspect-square group cursor-pointer">
                      <img
                        src={imageUrl}
                        alt={`Project ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          // Try fallback URL formats
                          const currentSrc = target.src
                          const fileIdMatch = currentSrc.match(/\/([a-zA-Z0-9_-]+)$/) || currentSrc.match(/id=([a-zA-Z0-9_-]+)/) || currentSrc.match(/d\/([a-zA-Z0-9_-]+)/)
                          const fileId = fileIdMatch?.[1]
                          
                          if (fileId) {
                            // Try different formats in order
                            const fallbacks = [
                              `https://drive.google.com/thumbnail?id=${fileId}&sz=w1920-h1080`,
                              `https://drive.google.com/uc?export=view&id=${fileId}`,
                              `https://drive.google.com/uc?export=download&id=${fileId}`,
                            ]
                            
                            const currentIndex = fallbacks.findIndex(url => currentSrc.includes(url.split('?')[0].split('/').pop() || ''))
                            const nextIndex = currentIndex < fallbacks.length - 1 ? currentIndex + 1 : -1
                            
                            if (nextIndex >= 0) {
                              target.src = fallbacks[nextIndex]
                            } else {
                              // If all fallbacks failed, show placeholder or hide
                              target.style.display = 'none'
                            }
                          } else {
                            target.style.display = 'none'
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-4 left-4 right-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Project {index + 1}
                      </div>
                    </div>
                  </GlowCard>
                </StaggerItem>
              ))}
            </div>
          </StaggerList>
        </Section>
      )}

      {/* CTA Section */}
      <Section>
        <RevealOnScroll>
          <GlowCard glowColor="amber" className="text-center py-12">
            <h2 className="text-2xl md:text-3xl font-space font-bold mb-4">
              Want to Work With <span className="text-cyan-300">{member.name}</span>?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Get in touch to discuss your project and see how we can bring your vision to life.
            </p>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </GlowCard>
        </RevealOnScroll>
      </Section>
    </div>
  )
}

