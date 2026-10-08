import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X, Droplets } from 'lucide-react'
import { NAV_LINKS, PHONE_DISPLAY, PHONE_HREF } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 pt-3">
      <nav
        className={`container-x flex items-center justify-between h-16 md:h-[4.25rem] rounded-2xl transition-all duration-300 px-3 ${
          scrolled ? 'glass shadow-glass' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-electric-500 flex items-center justify-center shadow-glow">
            <Droplets className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-lg text-navy-500">HVP Plumbing</span>
            <span className="text-[10px] uppercase tracking-widest text-steel-500 font-semibold">Professional Service</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-lg text-[15px] font-medium transition-colors ${
                  active ? 'text-electric-600 bg-electric-50' : 'text-navy-500 hover:text-electric-600 hover:bg-navy-500/5'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href={PHONE_HREF} className="flex items-center gap-2 text-navy-500 font-semibold hover:text-electric-600 transition-colors">
            <Phone className="w-4 h-4" />
            <span className="text-[15px]">{PHONE_DISPLAY}</span>
          </a>
          <a href={PHONE_HREF} className="btn-primary text-[15px]">
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <a href={PHONE_HREF} className="btn-primary !min-h-[44px] !px-4 text-sm">
            <Phone className="w-4 h-4" />
            Call
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="w-11 h-11 rounded-lg flex items-center justify-center text-navy-500 hover:bg-navy-500/5 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden glass border border-white/50 shadow-glass rounded-2xl mt-2 animate-fade-in">
          <div className="py-4 px-2 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    active ? 'text-electric-600 bg-electric-50' : 'text-navy-500 hover:bg-navy-500/5'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <a href={PHONE_HREF} className="mt-2 flex items-center justify-center gap-2 btn-primary w-full">
              <Phone className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
