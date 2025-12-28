import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, FileText, Shield, Boxes, Zap, TrendingUp } from 'lucide-react'
import { Section } from '../components/layout/Section'
import { Button } from '../components/ui/Button'
import { GlowCard } from '../components/ui/GlowCard'
import { RevealOnScroll } from '../components/motion/RevealOnScroll'
import { StaggerList, StaggerItem } from '../components/motion/StaggerList'
import { services } from '../data/services'

const highlights = [
  {
    icon: FileText,
    title: 'Fast Approvals-Ready Drawings',
    description: 'Comprehensive documentation for quick authority approvals',
    color: 'amber' as const,
  },
  {
    icon: Shield,
    title: 'Seismic-Ready Structural Safety',
    description: 'Earthquake-resistant designs meeting latest codes',
    color: 'cyan' as const,
  },
  {
    icon: Boxes,
    title: 'BIM Coordination',
    description: 'Seamless integration of architectural and structural models',
    color: 'amber' as const,
  },
  {
    icon: Zap,
    title: 'Modern Visualization',
    description: '3D modeling and photorealistic architectural visualizations',
    color: 'cyan' as const,
  },
  {
    icon: TrendingUp,
    title: 'Cost Optimization',
    description: 'Value engineering for efficient, buildable solutions',
    color: 'amber' as const,
  },
]

const images = [
  {
    src: '/chamber-1.jpg',
    alt: 'Image 1',
  },
  {
    src: '/chamber-2.jpg',
    alt: 'Image 2',
  },
  {
    src: '/chamber-3.jpg',
    alt: 'Image 3',
  },
  {
    src: '/chamber-4.jpg',
    alt: 'Image 4',
  },
]

const processSteps = [
  { step: '01', title: 'Discover', description: 'Understanding your vision and requirements' },
  { step: '02', title: 'Concept', description: 'Developing initial design concepts' },
  { step: '03', title: 'Design', description: 'Detailed architectural planning' },
  { step: '04', title: 'Structural', description: 'Engineering and structural analysis' },
  { step: '05', title: 'Documentation', description: 'Construction-ready drawings and docs' },
  { step: '06', title: 'Support', description: 'Ongoing technical support and coordination' },
]

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <RevealOnScroll direction="right">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-space font-bold mb-6 leading-tight"
              >
                <span className="text-amber-400">Future-Ready</span>
                <br />
                Design.
                <br />
                <span className="text-cyan-300">Buildable</span> by Nature.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl leading-relaxed"
              >
                Architectural design, structural engineering, and coordination—delivered with 
                clarity, precision, and modern visualization.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/services">
                  <Button variant="primary">Explore Services</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="secondary">Get Consultation</Button>
                </Link>
              </motion.div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="left" delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-cyan-400/20 blur-3xl rounded-full"></div>
              <div className="relative bg-zinc-900/50 border border-amber-500/30 rounded-lg p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="aspect-square bg-zinc-800/50 border border-zinc-700 rounded">
                      <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Section>

      {/* Highlights Section */}
      <Section id="highlights" className="bg-zinc-900/30">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">
              Why Choose <span className="text-amber-400">Us</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Delivering excellence through proven expertise and modern technology
            </p>
          </div>
        </RevealOnScroll>

        <StaggerList>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <StaggerItem key={index}>
                <GlowCard glowColor={item.color}>
                  <item.icon className="w-10 h-10 mb-4 text-amber-400" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.description}</p>
                </GlowCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerList>
      </Section>

      {/* Services Preview */}
      <Section>
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">
              Our <span className="text-cyan-300">Services</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Comprehensive construction services from concept to completion
            </p>
          </div>
        </RevealOnScroll>

        <StaggerList>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((category, index) => (
              <StaggerItem key={category.categoryId}>
                <Link to="/services">
                  <GlowCard glowColor={index % 2 === 0 ? 'amber' : 'cyan'} className="h-full">
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-zinc-400 text-sm mb-4">{category.subtitle}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-400 font-medium">
                        {category.items.length} Services
                      </span>
                      <CheckCircle2 className="w-5 h-5 text-cyan-300" />
                    </div>
                  </GlowCard>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </StaggerList>
      </Section>

      {/* Process Timeline */}
      <Section className="bg-zinc-900/30">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">
              Our <span className="text-amber-400">Process</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              A streamlined workflow from discovery to delivery
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {processSteps.map((step, index) => (
            <RevealOnScroll key={step.step} delay={index * 0.1}>
              <GlowCard glowColor={index % 2 === 0 ? 'amber' : 'cyan'} className="text-center">
                <div className="text-4xl font-orbitron font-bold text-amber-400 mb-2">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-400">{step.description}</p>
              </GlowCard>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <RevealOnScroll>
          <GlowCard glowColor="amber" className="text-center py-12">
            <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">
              Ready to Build Something <span className="text-cyan-300">Extraordinary</span>?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and bring your vision to life with precision engineering 
              and innovative design.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">Get Started Today</Button>
            </Link>
          </GlowCard>
        </RevealOnScroll>
      </Section>
    </div>
  )
}

