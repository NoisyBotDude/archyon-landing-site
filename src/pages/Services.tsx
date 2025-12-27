import { useState } from 'react'
import { services, ServiceCategory } from '../data/services'
import { Section } from '../components/layout/Section'
import { GlowCard } from '../components/ui/GlowCard'
import { Badge } from '../components/ui/Badge'
import { RevealOnScroll } from '../components/motion/RevealOnScroll'
import { StaggerList, StaggerItem } from '../components/motion/StaggerList'
import { cn } from '../utils/cn'

export const Services = () => {
  const [activeCategory, setActiveCategory] = useState<string>(services[0].categoryId)

  const activeCategoryData = services.find((cat) => cat.categoryId === activeCategory) as ServiceCategory

  return (
    <div className="min-h-screen pt-32">
      <Section>
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-space font-bold mb-4">
              Our <span className="text-amber-400">Services</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Comprehensive construction services from architectural design to structural engineering
            </p>
          </div>
        </RevealOnScroll>

        {/* Category Tabs */}
        <RevealOnScroll delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((category) => (
              <button
                key={category.categoryId}
                onClick={() => setActiveCategory(category.categoryId)}
                className={cn(
                  'px-6 py-3 rounded-lg font-medium transition-all duration-200',
                  activeCategory === category.categoryId
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50'
                    : 'bg-zinc-800/50 text-zinc-300 border border-zinc-700 hover:border-amber-500/30 hover:text-amber-400'
                )}
              >
                {category.title}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Active Category Content */}
        <RevealOnScroll delay={0.3}>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{activeCategoryData.title}</h2>
            <p className="text-zinc-400 max-w-3xl">{activeCategoryData.subtitle}</p>
          </div>
        </RevealOnScroll>

        {/* Services Grid */}
        <StaggerList staggerDelay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeCategoryData.items.map((item) => (
              <StaggerItem key={item.id}>
                <GlowCard
                  glowColor={activeCategory === 'architectural' ? 'amber' : activeCategory === 'structural' ? 'cyan' : 'amber'}
                  className="h-full"
                >
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant={activeCategory === 'structural' ? 'cyan' : 'amber'}>
                      {activeCategoryData.title.split(' ')[0]}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  {item.shortDesc && (
                    <p className="text-sm text-zinc-400">{item.shortDesc}</p>
                  )}
                </GlowCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerList>

        {/* All Services Summary */}
        <RevealOnScroll delay={0.4}>
          <div className="mt-16 p-8 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">Complete Service Overview</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((category) => (
                <div key={category.categoryId} className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">
                    {category.items.length}
                  </div>
                  <div className="text-zinc-300 font-medium mb-1">{category.title}</div>
                  <div className="text-sm text-zinc-500">Services Available</div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </Section>
    </div>
  )
}

