import { Link } from 'react-router-dom'
import {
  Phone, ClipboardList, ShieldCheck, Clock, Award, ThumbsUp, ArrowRight,
  Siren, Droplets, Search, Flame, Zap, GitBranch, Wrench, Droplet, Network, Building2,
  Star, MapPin, CheckCircle2, Users, BadgeCheck, DollarSign, Sparkles,
  ArrowDown,
} from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import FAQAccordion from '../components/FAQAccordion'
import CTASection from '../components/CTASection'
import { PHONE_DISPLAY, PHONE_HREF, ADDRESS, TRUST_INDICATORS, TRUST_BAR } from '../data/site'
import { services, featuredServices } from '../data/services'
import { reviews } from '../data/reviews'
import { homeFAQ } from '../data/faq'

const iconMap = {
  Siren, Droplets, Search, Flame, Zap, GitBranch, Wrench, Droplet, Network, Building2,
}

const trustBarIcons = [ShieldCheck, Clock, BadgeCheck, Award]

const whyChoose = [
  { icon: Users, title: 'Experienced Professionals', desc: 'Our licensed plumbers bring years of hands-on experience to every job, big or small.' },
  { icon: Clock, title: 'Fast & Reliable Service', desc: 'We respect your time. On-time arrivals, clear communication, and efficient work — every visit.' },
  { icon: DollarSign, title: 'Transparent Pricing', desc: 'No hidden fees, no surprises. You get clear, upfront pricing before any work begins.' },
  { icon: Award, title: 'Quality Workmanship', desc: 'We stand behind our work with a satisfaction guarantee and use only quality materials and parts.' },
]

const howItWorks = [
  { num: '01', title: 'Contact Us', desc: 'Call us or request a service online. We\'ll schedule a time that works for you.' },
  { num: '02', title: 'We Diagnose the Problem', desc: 'Our technician inspects the issue, explains what\'s wrong, and recommends the best solution.' },
  { num: '03', title: 'We Get the Job Done', desc: 'Professional service with quality workmanship — done right the first time.' },
]

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-navy-500 min-h-[calc(100vh-5rem)] flex items-center">
        {/* Background gradient + conduit lines */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-navy-400 to-navy-600" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-electric-500/5 rounded-full blur-[100px]" />

        <div className="container-x relative z-10 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-signal-500 animate-pulse" />
                <span className="text-sm font-medium text-steel-200">Available for Emergency Plumbing</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] text-balance">
                Professional Plumbing Services You Can{' '}
                <span className="text-electric-400">Trust</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-steel-300 max-w-xl leading-relaxed">
                Reliable plumbing solutions for your home or business, delivered by experienced professionals.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href={PHONE_HREF} className="btn-emergency text-lg">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <Link to="/contact" className="btn-outline-light text-lg">
                  <ClipboardList className="w-5 h-5" />
                  Request Service
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 grid grid-cols-2 gap-4 max-w-lg">
                {TRUST_INDICATORS.map((t) => (
                  <div key={t} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-electric-400 shrink-0" />
                    <span className="text-sm text-steel-200 font-medium">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-16219054190826-1b8d30f5b8a0?w=800&q=80"
                  alt="Professional plumber in HVP uniform"
                  className="w-full h-[560px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-500/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-glass max-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-electric-500 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-navy-500 text-sm">Licensed & Insured</div>
                    <div className="text-xs text-steel-500">Your peace of mind</div>
                  </div>
                </div>
              </div>
              {/* Floating phone card */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-glass">
                <a href={PHONE_HREF} className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-signal-500 flex items-center justify-center animate-pulse-slow">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-steel-500 font-semibold">24/7 Emergency</div>
                    <div className="font-display font-bold text-navy-500 text-sm">{PHONE_DISPLAY}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="hidden md:flex justify-center mt-16">
            <ArrowDown className="w-6 h-6 text-steel-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="bg-white border-b border-steel-200">
        <div className="container-x py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRUST_BAR.map((t, i) => (
              <div key={t} className={`flex items-center gap-3 ${i < 3 ? 'md:border-r md:border-steel-200' : ''} ${i < 2 ? 'border-r border-steel-200' : ''} md:pr-4`}>
                <div className="w-10 h-10 rounded-lg bg-electric-50 flex items-center justify-center shrink-0">
                  {(() => { const Icon = trustBarIcons[i]; return <Icon className="w-5 h-5 text-electric-600" /> })()}
                </div>
                <span className="font-display font-semibold text-sm md:text-base text-navy-500">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section-pad bg-arctic">
        <div className="container-x">
          <SectionTitle
            eyebrow="Our Services"
            title="Our Plumbing Services"
            subtitle="Professional plumbing solutions for your home and business."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
              const Icon = iconMap[s.icon] || Droplets
              return (
                <Link key={s.slug} to={`/services/${s.slug}`} className="card p-6 group">
                  <div className="w-14 h-14 rounded-xl2 bg-electric-50 flex items-center justify-center mb-5 group-hover:bg-electric-500 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-electric-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-navy-500 mb-2">{s.name}</h3>
                  <p className="text-steel-500 text-sm leading-relaxed mb-4">{s.short}</p>
                  <span className="inline-flex items-center gap-1.5 text-electric-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== EMERGENCY SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-500 to-navy-400 py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-signal-500/10 rounded-full blur-[120px]" />

        <div className="container-x relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 mb-6">
              <Siren className="w-4 h-4 text-signal-500" />
              <span className="text-sm font-medium text-steel-200">24/7 Emergency Service</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-balance">
              Need a Plumber Right Now?
            </h2>
            <p className="mt-4 text-lg text-steel-300">
              Plumbing problems can't always wait. Our team is ready to help with urgent plumbing issues.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={PHONE_HREF} className="btn-emergency text-lg animate-pulse-slow">
                <Phone className="w-5 h-5" />
                Call Now — {PHONE_DISPLAY}
              </a>
              <Link to="/emergency" className="btn-outline-light text-lg">
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-steel-300">
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-electric-400" /> 24/7 Availability</div>
              <div className="flex items-center gap-2"><Zap className="w-5 h-5 text-electric-400" /> Fast Response</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-electric-400" /> Licensed & Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE ===== */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <SectionTitle
            eyebrow="Why Choose Us"
            title="Why Choose HVP Plumbing?"
            subtitle="We deliver more than just plumbing repairs — we deliver peace of mind."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((w) => (
              <div key={w.title} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-electric-50 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <w.icon className="w-8 h-8 text-electric-600" />
                </div>
                <h3 className="font-display font-bold text-lg text-navy-500 mb-2">{w.title}</h3>
                <p className="text-steel-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="section-pad bg-steel-100">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1607472586893-edb57e08a723?w=800&q=80"
                  alt="HVP Plumbing professional at work"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-glass hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="font-display font-bold text-3xl text-electric-600">15+</div>
                    <div className="text-xs text-steel-500 font-medium">Years Experience</div>
                  </div>
                  <div className="w-px h-12 bg-steel-200" />
                  <div className="text-center">
                    <div className="font-display font-bold text-3xl text-electric-600">5K+</div>
                    <div className="text-xs text-steel-500 font-medium">Jobs Done</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="eyebrow mb-3">
                <span className="w-8 h-px bg-current opacity-50" />
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-500 text-balance">
                Your Trusted Local Plumbing Experts
              </h2>
              <p className="mt-5 text-steel-600 leading-relaxed">
                HVP Plumbing is committed to providing reliable, professional and high-quality plumbing services for homeowners and businesses. We take pride in every job — from the smallest repair to the largest installation — and treat your property with the respect it deserves.
              </p>
              <p className="mt-3 text-steel-600 leading-relaxed">
                Our team of licensed, insured plumbers brings years of experience and the latest tools to every project. We believe in honest communication, transparent pricing, and doing the job right the first time.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {['Licensed & Insured', 'Upfront Pricing', 'Satisfaction Guaranteed', '24/7 Emergency Service'].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-electric-600 shrink-0" />
                    <span className="text-sm font-medium text-navy-500">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary mt-8">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED SERVICES ===== */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <SectionTitle
            eyebrow="Popular Services"
            title="Our Most Requested Services"
            subtitle="The plumbing services our customers call for most often."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredServices.map((s) => {
              const Icon = iconMap[s.icon] || Droplets
              return (
                <Link key={s.slug} to={`/services/${s.slug}`} className="card overflow-hidden group">
                  <div className="relative h-52 overflow-hidden">
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-500/80 via-navy-500/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-electric-500 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-white">{s.name}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-steel-500 text-sm leading-relaxed mb-4">{s.short}</p>
                    <span className="inline-flex items-center gap-1.5 text-electric-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section-pad bg-steel-100">
        <div className="container-x">
          <SectionTitle
            eyebrow="Simple Process"
            title="How It Works"
            subtitle="Getting your plumbing problem solved is easier than you think."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-electric-200 via-electric-300 to-electric-200" />
            {howItWorks.map((step) => (
              <div key={step.num} className="text-center relative">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-electric-200 flex items-center justify-center mx-auto mb-5 relative z-10 shadow-card">
                  <span className="font-display font-bold text-3xl text-electric-600">{step.num}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-navy-500 mb-2">{step.title}</h3>
                <p className="text-steel-500 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <SectionTitle
            eyebrow="Testimonials"
            title="What Our Customers Say"
            subtitle="Real reviews from real customers we've helped."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.slice(0, 6).map((r) => (
              <div key={r.name} className="card p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-electric-500 text-electric-500" />
                  ))}
                </div>
                <p className="text-steel-600 leading-relaxed text-sm mb-5">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-steel-200">
                  <div className="w-11 h-11 rounded-full bg-electric-100 flex items-center justify-center font-display font-bold text-electric-600">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-navy-500 text-sm">{r.name}</div>
                    <div className="text-xs text-steel-400">{r.location} · {r.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-electric-500 text-electric-500" />
                ))}
              </div>
              <span className="font-display font-semibold text-navy-500">5-Star Customer Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREA ===== */}
      <section className="section-pad bg-navy-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
        <div className="container-x relative z-10">
          <div className="text-center text-white max-w-2xl mx-auto">
            <span className="eyebrow !text-electric-400 mb-3">
              <span className="w-8 h-px bg-current opacity-50" />
              Service Area
              <span className="w-8 h-px bg-current opacity-50" />
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-balance">
              Proudly Serving Our Local Community
            </h2>
            <p className="mt-4 text-lg text-steel-300">
              Based in Cedar City, Utah, we proudly serve our local community and surrounding areas with professional plumbing services.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 glass-dark rounded-xl px-6 py-4">
              <MapPin className="w-6 h-6 text-electric-400" />
              <div className="text-left">
                <div className="font-display font-semibold text-white">Cedar City, UT</div>
                <div className="text-sm text-steel-400">{ADDRESS}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <CTASection
        title="Plumbing Problems? We're Here to Help."
        text="Get reliable plumbing service from a professional team you can count on."
      />

      {/* ===== FAQ ===== */}
      <section className="section-pad bg-steel-100">
        <div className="container-x">
          <SectionTitle
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about our plumbing services."
          />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={homeFAQ} />
          </div>
          <div className="text-center mt-8">
            <Link to="/faq" className="btn-outline">
              View All FAQs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-electric-600 via-electric-500 to-electric-700 py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px]" />
        <div className="container-x relative z-10 text-center text-white max-w-3xl mx-auto">
          <Sparkles className="w-10 h-10 mx-auto mb-4 text-white/80" />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-balance">
            Ready to Fix Your Plumbing Problem?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Contact HVP Plumbing today and let our professionals take care of it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_HREF} className="btn bg-white text-electric-600 hover:bg-steel-100 text-lg">
              <Phone className="w-5 h-5" />
              Call HVP Plumbing
            </a>
            <Link to="/contact" className="btn-outline-light text-lg">
              <ClipboardList className="w-5 h-5" />
              Request Service
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
