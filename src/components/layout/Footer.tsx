import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-zinc-900/50 border-t border-zinc-800">
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-orbitron font-bold text-amber-400 mb-4">ARCHYON</h3>
            <p className="text-zinc-400 mb-4 max-w-md">
              Future-ready design and buildable engineering. Delivering architectural design, 
              structural engineering, and coordination with clarity and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-zinc-200 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-zinc-200 font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-amber-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-amber-400" />
                <span>info@archyon.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-amber-400 mt-1" />
                <span>123 Construction Ave, Building City</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-amber-400" />
                <span>Mon-Fri: 9AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Archyon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

