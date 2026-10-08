import { Link } from 'react-router-dom'
import {
  Phone, ArrowRight, ArrowUpRight, Clock, BadgeCheck, Zap, Award,
  Star, ShieldCheck, MapPin, CalendarCheck,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import { PHONE_DISPLAY, PHONE_HREF, ADDRESS } from '../data/site'
import { services, getService } from '../data/services'
import { reviews } from '../data/reviews'

const HOME_SERVICE_SLUGS = [
  'emergency-plumbing',
  'drain-cleaning',
  'leak-detection-repair',
  'water-heater-repair',
  'pipe-repair',
  'commercial-plumbing',
]

const NAME_OVERRIDES = {
  'leak-detection-repair': 'Leak Repair',
  'water-heater-repair': 'Water Heater',
}

const homeServices = HOME_SERVICE_SLUGS.map(getService)

const whyItems = [
  { icon: Clock, title: '24/7 Emergency Service', desc: 'Day, night, weekends and holidays — we answer the phone.' },
  { icon: BadgeCheck, title: 'Experienced Professionals', desc: 'Licensed plumbers who get it right the first time.' },
  { icon: Zap, title: 'Fast Response', desc: 'We show up quickly and stop the problem fast.' },
  { icon: Award, title: 'Quality Work', desc: 'Quality materials, careful craft, clean results.' },
]

const HERO_IMG = 'https://images.pexels.com/photos/8486978/pexels-photo-8486978.jpeg?auto=compress&cs=tinysrgb&w=1000'
const EDITORIAL_IMG = 'https://images.pexels.com/photos/16509869/pexels-photo-16509869.jpeg?auto=compress&cs=tinysrgb&w=1000'
const ABOUT_IMG = 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1000'
const CTA_BG_IMG = 'https://images.pexels.com/photos/35290675/pexels-photo-35290675.jpeg?auto=compress&cs=tinysrgb&w=1600'

function LivePulse() {
  return (
    <span className="relative flex w-2 h-2 shrink-0">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-500 opacity-60" />
      <span className="relative inline-flex rounded-full w-2 h-2 bg-signal-500" />
    </span>
  )
}

function ServiceCard({ service, name, featured }) {
  if (featured) {
    return (
      <Link
        to={`/services/${service.slug}`}
        className="group block relative overflow-hidden rounded-[2rem] h-full min-h-[340px]"
      >
        <img
          src={service.image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-500/95 via-navy-500/35 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
          <h3 className="font-display font-bold text-3xl md:text-4xl text-white">{name}</h3>
          <p className="mt-2 text-steel-300 text-sm md:text-base max-w-sm">{service.short}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-electric-400 font-semibold group-hover:gap-3.5 transition-all">
            Explore Service <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    )
  }
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group block bg-white rounded-[2rem] overflow-hidden h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(10,25,47,0.12)]"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={service.image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-500/40 to-transparent opacity-60" />
      </div>
      <div className="p-6">
        <h3 className="font-display font-bold text-xl text-navy-500">{name}</h3>
        <p className="mt-2 text-steel-500 text-sm leading-relaxed">{service.short}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-electric-600 font-semibold text-sm group-hover:gap-3.5 transition-all">
          Learn More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-arctic">
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-electric-500/10 blur-[110px]" />
        <div className="absolute bottom-0 -left-40 w-[440px] h-[440px] rounded-full bg-navy-500/[0.07] blur-[100px]" />

        <div className="container-x relative z-10 pt-8 pb-20 md:pt-12 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
            {/* Left: copy */}
            <Reveal>
              <div className="inline-flex items-center gap-2.5 glass rounded-full pl-3 pr-4 py-2 shadow-glass">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-electric-500 text-electric-500" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-navy-500">Trusted Local Plumber</span>
              </div>

              <h1 className="mt-6 font-display font-bold text-navy-500 tracking-tight leading-[1.02] text-[2.6rem] sm:text-5xl lg:text-[4.2rem]">
                24/7 Emergency Plumbing You Can{' '}
                <span className="relative inline-block text-electric-500">
                  Trust
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 120 10" fill="none" preserveAspectRatio="none">
                    <path d="M2 8C30 2 90 2 118 7" stroke="#007BFF" strokeWidth="4" strokeLinecap="round" opacity="0.35" />
                  </svg>
                </span>
              </h1>

              <p className="mt-6 text-lg text-steel-500 max-w-lg leading-relaxed">
                Burst pipes, stubborn clogs, water heater failures — licensed Cedar City plumbers who answer the phone and show up fast.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <a href={PHONE_HREF} className="btn-emergency text-base">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <Link to="/contact" className="btn-navy text-base">
                  <CalendarCheck className="w-5 h-5" />
                  Schedule Service
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-3 text-steel-500">
                <span className="w-10 h-px bg-steel-300 shrink-0" />
                <span className="text-sm font-medium">
                  Or call directly:{' '}
                  <a href={PHONE_HREF} className="font-display font-bold text-navy-500 hover:text-electric-600 transition-colors">
                    {PHONE_DISPLAY}
                  </a>
                </span>
              </div>
            </Reveal>

            {/* Right: organic image composition */}
            <Reveal delay={120} className="relative mt-4 lg:mt-0">
              <div className="absolute -top-8 -right-4 w-48 h-48 md:w-64 md:h-64 bg-electric-500/15 blob-2" />
              <div className="absolute -bottom-10 -left-6 w-40 h-40 md:w-56 md:h-56 bg-navy-500 blob-1 opacity-[0.08]" />
              <div className="relative blob-1 overflow-hidden shadow-[0_32px_80px_rgba(10,25,47,0.25)]">
                <img
                  src={HERO_IMG}
                  alt="Professional HVP plumber at work"
                  className="w-full h-[400px] sm:h-[480px] lg:h-[560px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-500/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 left-4 sm:left-10 glass rounded-2xl p-4 shadow-glass flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-navy-500 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-electric-400" />
                </div>
                <div>
                  <div className="font-display font-bold text-navy-500 text-sm">Licensed & Insured</div>
                  <div className="text-xs text-steel-500 font-medium">Serving Cedar City, UT</div>
                </div>
              </div>
              <div className="absolute -top-3 right-6 sm:right-10 glass-dark rounded-full px-4 py-2 flex items-center gap-2 shadow-glass">
                <LivePulse />
                <span className="text-xs font-semibold text-white whitespace-nowrap">24/7 Emergency Line Open</span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Curved bottom edge */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10 md:h-16 bg-white"
          style={{ borderRadius: '100% 100% 0 0 / 100% 100% 0 0' }}
        />
      </section>

      {/* ===== EDITORIAL SPLIT ===== */}
      <section className="relative bg-white overflow-hidden">
        <div className="container-x py-20 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <Reveal className="lg:col-span-5 relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-electric-500 blob-1 opacity-90 hidden md:block" />
              <div className="relative blob-2 overflow-hidden shadow-[0_28px_64px_rgba(10,25,47,0.18)]">
                <img
                  src={EDITORIAL_IMG}
                  alt="HVP plumber repairing pipes"
                  className="w-full h-[380px] md:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 right-6 glass rounded-2xl px-5 py-4 shadow-glass hidden sm:flex items-center gap-3">
                <Clock className="w-5 h-5 text-electric-600 shrink-0" />
                <div>
                  <div className="font-display font-bold text-navy-500 text-sm">Fast Response</div>
                  <div className="text-xs text-steel-500 font-medium">Same-day appointments</div>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <span className="eyebrow">
                  <span className="w-8 h-px bg-current opacity-50" />
                  Plumbing, Handled
                </span>
                <h2 className="mt-5 font-display font-bold text-navy-500 tracking-tight leading-[1.05] text-4xl md:text-6xl">
                  Never let a plumbing problem hold you <span className="text-electric-500">back</span>.
                </h2>
                <p className="mt-6 text-steel-500 max-w-xl text-lg leading-relaxed">
                  One call and it's handled — easy scheduling, upfront pricing, and work done right the first time.
                </p>
                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn-navy text-base">
                    <CalendarCheck className="w-5 h-5" />
                    Schedule Visit
                  </Link>
                  <a href={PHONE_HREF} className="btn-outline text-base">
                    <Phone className="w-5 h-5" />
                    Speak With Us
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-arctic">
        <div className="container-x py-20 md:py-28">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
            <div>
              <span className="eyebrow">
                <span className="w-8 h-px bg-current opacity-50" />
                Services
              </span>
              <h2 className="mt-3 font-display font-bold text-navy-500 tracking-tight text-4xl md:text-6xl">
                What We <span className="text-electric-500">Do</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2.5 font-display font-bold text-navy-500 hover:text-electric-600 transition-colors group"
            >
              All Services
              <span className="w-9 h-9 rounded-full bg-white border border-steel-200 flex items-center justify-center group-hover:bg-electric-500 group-hover:border-electric-500 group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {homeServices.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={i * 70}
                className={i === 0 ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''}
              >
                <ServiceCard service={s} name={NAME_OVERRIDES[s.slug] || s.name} featured={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY HVP ===== */}
      <section className="px-3 sm:px-5 md:px-8 py-2">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-500 max-w-[1400px] mx-auto">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric-500/15 rounded-full blur-[120px]" />
          <div className="absolute -bottom-24 -left-24 w-[300px] h-[300px] bg-electric-500/10 rounded-full blur-[100px]" />
          <div className="relative z-10 py-16 md:py-24 px-5 sm:px-8">
            <Reveal className="text-center max-w-2xl mx-auto">
              <h2 className="font-display font-bold tracking-tight text-white text-4xl md:text-6xl">
                Why <span className="text-electric-400">HVP</span> Plumbing?
              </h2>
              <p className="mt-4 text-steel-300 text-lg">
                Four reasons homeowners call us first — and keep our number saved.
              </p>
            </Reveal>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {whyItems.map((w, i) => (
                <Reveal key={w.title} delay={i * 80}>
                  <div className="glass-dark rounded-3xl p-6 h-full transition-transform duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-2xl bg-electric-500/15 border border-electric-400/20 flex items-center justify-center mb-5">
                      <w.icon className="w-6 h-6 text-electric-400" />
                    </div>
                    <h3 className="font-display font-bold text-white">{w.title}</h3>
                    <p className="mt-2 text-steel-300 text-sm leading-relaxed">{w.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="bg-white overflow-hidden">
        <div className="container-x py-20 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <span className="eyebrow">
                  <span className="w-8 h-px bg-current opacity-50" />
                  About HVP
                </span>
                <h2 className="mt-5 font-display font-bold text-navy-500 tracking-tight leading-[1.05] text-4xl md:text-6xl">
                  Built on <span className="text-electric-500">Trust</span>.
                  <br />
                  Focused on Quality.
                </h2>
                <p className="mt-6 text-steel-500 text-lg max-w-xl leading-relaxed">
                  HVP Plumbing is a local Cedar City team of licensed plumbers who treat every home like their own — honest advice, careful work, and no surprises on the bill.
                </p>
                <Link
                  to="/about"
                  className="mt-9 inline-flex items-center gap-3 font-display font-bold text-lg text-navy-500 hover:text-electric-600 transition-colors group"
                >
                  About HVP Plumbing
                  <span className="w-11 h-11 rounded-full bg-navy-500 text-white flex items-center justify-center group-hover:bg-electric-500 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
              </Reveal>
            </div>
            <Reveal delay={100} className="lg:col-span-6 relative">
              <div className="absolute -bottom-8 -right-6 w-40 h-40 bg-electric-500/15 blob-2" />
              <div className="relative blob-1 overflow-hidden shadow-[0_28px_64px_rgba(10,25,47,0.18)]">
                <img
                  src={ABOUT_IMG}
                  alt="HVP Plumbing team member at work"
                  className="w-full h-[380px] md:h-[500px] object-cover"
                />
              </div>
              <div className="absolute top-6 -left-4 sm:-left-8 glass rounded-2xl px-5 py-4 shadow-glass">
                <div className="font-display font-bold text-3xl text-electric-600">15+</div>
                <div className="text-xs text-steel-500 font-semibold">Years of Experience</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="bg-arctic">
        <div className="container-x py-20 md:py-28">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">
              <span className="w-8 h-px bg-current opacity-50" />
              Reviews
              <span className="w-8 h-px bg-current opacity-50" />
            </span>
            <h2 className="mt-3 font-display font-bold text-navy-500 tracking-tight text-4xl md:text-6xl">
              Trusted by <span className="text-electric-500">Homeowners</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.slice(0, 3).map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <div className="bg-white rounded-[2rem] p-7 h-full shadow-[0_4px_24px_rgba(10,25,47,0.06)] transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-electric-500 text-electric-500" />
                    ))}
                  </div>
                  <p className="text-steel-600 leading-relaxed">"{r.text}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-navy-500 flex items-center justify-center font-display font-bold text-electric-400 shrink-0">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-display font-semibold text-navy-500 text-sm">{r.name}</div>
                      <div className="text-xs text-steel-400">{r.location}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREA ===== */}
      <section className="bg-white">
        <div className="container-x py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow">
                  <span className="w-8 h-px bg-current opacity-50" />
                  Service Area
                </span>
                <h2 className="mt-3 font-display font-bold text-navy-500 tracking-tight text-4xl md:text-5xl">
                  Proudly Serving <span className="text-electric-500">Cedar City</span>
                </h2>
                <div className="mt-6 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-electric-600 shrink-0 mt-1" />
                  <p className="text-steel-500 leading-relaxed max-w-sm">{ADDRESS}</p>
                </div>
                <p className="mt-4 text-steel-500 max-w-sm">
                  Locally owned and based right here in Cedar City — we're never far away.
                </p>
              </Reveal>
            </div>
            <Reveal delay={100} className="lg:col-span-7">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_28px_64px_rgba(10,25,47,0.14)]">
                <iframe
                  title="HVP Plumbing service area — Cedar City, UT"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-113.1300%2C37.5950%2C-113.0300%2C37.6650&layer=mapnik&marker=37.6279%2C-113.0796"
                  className="w-full h-[380px] md:h-[460px]"
                  style={{ border: 0, filter: 'grayscale(0.85) contrast(1.05)' }}
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 glass rounded-full px-4 py-2 flex items-center gap-2 shadow-glass">
                  <MapPin className="w-4 h-4 text-signal-500" />
                  <span className="text-sm font-semibold text-navy-500">HVP Plumbing</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden">
        <img src={CTA_BG_IMG} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-500 via-navy-500/90 to-navy-500/55" />
        <div className="container-x relative z-10 py-24 md:py-36">
          <Reveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 glass-dark rounded-full px-4 py-2 mb-6">
              <LivePulse />
              <span className="text-xs font-semibold text-white">24/7 Emergency Service</span>
            </div>
            <h2 className="font-display font-bold text-white tracking-tight leading-[1.05] text-4xl md:text-6xl">
              Plumbing Problem?
              <br />
              We've Got You <span className="text-electric-400">Covered</span>.
            </h2>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a href={PHONE_HREF} className="btn-emergency text-base">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <Link to="/contact" className="btn-outline-light text-base">
                <CalendarCheck className="w-5 h-5" />
                Schedule Service
              </Link>
            </div>
            <div className="mt-8 text-steel-300">
              <span className="text-sm">24/7 Emergency Line</span>
              <a
                href={PHONE_HREF}
                className="block font-display font-bold text-2xl md:text-3xl text-white hover:text-electric-400 transition-colors"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
