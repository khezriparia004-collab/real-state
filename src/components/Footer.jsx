import { Link } from 'react-router-dom'
import { Droplets, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_HREF, ADDRESS, EMAIL, BUSINESS_HOURS } from '../data/site'
import { services } from '../data/services'

export default function Footer() {
  return (
    <footer className="bg-navy-500 text-white pt-16 pb-8">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-electric-500 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-display font-bold text-lg">HVP Plumbing</div>
                <div className="text-[10px] uppercase tracking-widest text-steel-400 font-semibold">Professional Service</div>
              </div>
            </div>
            <p className="text-steel-300 text-sm leading-relaxed mb-5">
              Professional plumbing services you can trust. Licensed, insured, and committed to quality workmanship for homes and businesses in Cedar City and surrounding communities.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-lg glass-dark flex items-center justify-center hover:bg-electric-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-lg glass-dark flex items-center justify-center hover:bg-electric-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-lg glass-dark flex items-center justify-center hover:bg-electric-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'About Us', path: '/about' },
                { label: 'Reviews', path: '/reviews' },
                { label: 'FAQ', path: '/faq' },
                { label: 'Contact', path: '/contact' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-steel-300 hover:text-electric-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-steel-300 hover:text-electric-400 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Contact</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href={PHONE_HREF} className="flex items-start gap-2.5 text-steel-300 hover:text-electric-400 transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-start gap-2.5 text-steel-300 hover:text-electric-400 transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-steel-300">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-start gap-2.5 text-steel-300">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p>Mon – Fri: 7AM – 7PM</p>
                  <p>Sat: 8AM – 5PM</p>
                  <p className="text-electric-400 font-medium">Emergency: 24/7</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-steel-400">
          <p>© {new Date().getFullYear()} HVP Plumbing. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-electric-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-electric-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
