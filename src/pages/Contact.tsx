import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { Section } from '../components/layout/Section'
import { Button } from '../components/ui/Button'
import { GlowCard } from '../components/ui/GlowCard'
import { RevealOnScroll } from '../components/motion/RevealOnScroll'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
    color: 'amber' as const,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@archyon.com',
    link: 'mailto:info@archyon.com',
    color: 'cyan' as const,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: '123 Construction Ave, Building City',
    link: '#',
    color: 'amber' as const,
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon-Fri: 9AM-6PM',
    link: '#',
    color: 'cyan' as const,
  },
]

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For static site, show a toast/alert or use mailto
    alert('Thank you for your message! We will get back to you soon.')
    // In production, integrate with Netlify Forms, Formspree, or similar
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen pt-32">
      <Section>
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-space font-bold mb-4">
              Get in <span className="text-amber-400">Touch</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Ready to start your project? Let's discuss how we can help bring your vision to life.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <RevealOnScroll direction="right">
            <GlowCard glowColor="amber">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-zinc-100 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-zinc-100 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-zinc-100 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-zinc-300 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-zinc-100 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="mixed-use">Mixed-Use</option>
                    <option value="renovation">Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-zinc-100 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  <Send className="w-4 h-4 inline mr-2" />
                  Send Message
                </Button>
              </form>
            </GlowCard>
          </RevealOnScroll>

          {/* Contact Information */}
          <RevealOnScroll direction="left" delay={0.2}>
            <div className="space-y-6">
              <GlowCard glowColor="cyan">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <p className="text-zinc-400 mb-6">
                  Reach out to us through any of these channels. We're here to help with your 
                  construction and design needs.
                </p>
              </GlowCard>

              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <RevealOnScroll key={index} delay={0.1 * (index + 1)}>
                    <a
                      href={info.link}
                      className="block"
                    >
                      <GlowCard glowColor={info.color} hoverable>
                        <div className="flex items-start gap-4">
                          <info.icon className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                          <div>
                            <div className="text-sm text-zinc-500 mb-1">{info.label}</div>
                            <div className="text-zinc-200 font-medium">{info.value}</div>
                          </div>
                        </div>
                      </GlowCard>
                    </a>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Section>
    </div>
  )
}

