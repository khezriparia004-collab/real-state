import { useParams, Link } from 'react-router-dom'
import {
  Phone, ClipboardList, CheckCircle2, ArrowRight, ArrowLeft, Star,
  Siren, Droplets, Search, Flame, Zap, GitBranch, Wrench, Droplet, Network, Building2,
} from 'lucide-react'
import CTASection from '../components/CTASection'
import FAQAccordion from '../components/FAQAccordion'
import { PHONE_DISPLAY, PHONE_HREF } from '../data/site'
import { services, getService } from '../data/services'
import { reviews } from '../data/reviews'

const iconMap = {
  Siren, Droplets, Search, Flame, Zap, GitBranch, Wrench, Droplet, Network, Building2,
}

const serviceFAQs = [
  {
    q: 'How quickly can you respond to this service?',
    a: 'For emergency services, we typically arrive within 1–2 hours. For scheduled services, we can often accommodate same-day or next-day appointments depending on availability.',
  },
  {
    q: 'Do you offer a warranty on this work?',
    a: 'Yes, we stand behind our workmanship. We offer a satisfaction guarantee and use quality parts that come with manufacturer warranties. We\'ll discuss specific warranty details for your project.',
  },
  {
    q: 'Will I get an upfront price estimate?',
    a: 'Absolutely. We provide clear, upfront pricing before any work begins. You\'ll know exactly what the job costs — no hidden fees or surprise charges.',
  },
  {
    q: 'Are your technicians licensed and insured?',
    a: 'Yes. All of our plumbers are fully licensed, insured, and bonded. We maintain strict professional standards and ongoing training.',
  },
]

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)

  if (!service) {
    return (
      <div className="container-x py-32 text-center">
        <h1 className="text-3xl font-display font-bold text-navy-500 mb-4">Service Not Found</h1>
        <Link to="/services" className="btn-primary">Back to Services</Link>
      </div>
    )
  }

  const Icon = iconMap[service.icon] || Droplets
  const related = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-500 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-navy-400 to-navy-600" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
        <div className="container-x relative z-10">
          <div className="flex items-center gap-2 text-steel-400 text-sm mb-6">
            <Link to="/" className="hover:text-electric-400 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-electric-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-steel-200">{service.name}</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <div className="w-16 h-16 rounded-2xl bg-electric-500 flex items-center justify-center mb-5">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-balance">{service.name}</h1>
              <p className="mt-4 text-lg text-steel-300 max-w-xl">{service.short}</p>
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
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={service.image} alt={service.name} className="w-full h-[360px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description + Benefits */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <span className="eyebrow mb-3">
                <span className="w-8 h-px bg-current opacity-50" />
                Overview
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-500 mb-5">
                About {service.name}
              </h2>
              <p className="text-steel-600 leading-relaxed text-lg">{service.description}</p>

              <h3 className="text-xl font-display font-bold text-navy-500 mt-10 mb-4">Benefits</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-electric-600 shrink-0 mt-0.5" />
                    <span className="text-steel-600">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar: What We Do */}
            <div>
              <div className="card p-6 sticky top-24">
                <h3 className="font-display font-bold text-lg text-navy-500 mb-4">What We Do</h3>
                <ul className="space-y-3">
                  {service.whatWeDo.map((w) => (
                    <li key={w} className="flex items-start gap-2.5 text-sm text-steel-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric-500 mt-2 shrink-0" />
                      {w}
                    </li>
                  ))}
                </ul>
                <a href={PHONE_HREF} className="btn-primary w-full mt-6">
                  <Phone className="w-4 h-4" />
                  Call {PHONE_DISPLAY}
                </a>
                <Link to="/contact" className="btn-outline w-full mt-3">
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-pad bg-steel-100">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow mb-3">
              <span className="w-8 h-px bg-current opacity-50" />
              Why HVP
              <span className="w-8 h-px bg-current opacity-50" />
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-500">
              Why Choose HVP Plumbing for {service.name}?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '⭐', title: 'Experienced Team', desc: 'Licensed plumbers with years of specialized experience.' },
              { icon: '⚡', title: 'Fast Response', desc: 'We prioritize your call and arrive quickly.' },
              { icon: '💰', title: 'Fair Pricing', desc: 'Transparent, upfront pricing with no surprises.' },
              { icon: '🛡️', title: 'Quality Guaranteed', desc: 'We stand behind every job we complete.' },
              { icon: '📞', title: '24/7 Availability', desc: 'Emergency service whenever you need it.' },
              { icon: '✅', title: 'Licensed & Insured', desc: 'Fully licensed, insured, and bonded.' },
            ].map((f) => (
              <div key={f.title} className="card p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric-50 flex items-center justify-center text-2xl shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-navy-500 mb-1">{f.title}</h3>
                  <p className="text-steel-500 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow mb-3">
              <span className="w-8 h-px bg-current opacity-50" />
              FAQ
              <span className="w-8 h-px bg-current opacity-50" />
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-500">
              Common Questions About {service.name}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={serviceFAQs} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-pad bg-steel-100">
        <div className="container-x">
          <h2 className="text-2xl font-display font-bold text-navy-500 mb-8 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((s) => {
              const RIcon = iconMap[s.icon] || Droplets
              return (
                <Link key={s.slug} to={`/services/${s.slug}`} className="card p-5 group">
                  <div className="w-12 h-12 rounded-xl bg-electric-50 flex items-center justify-center mb-4 group-hover:bg-electric-500 transition-colors">
                    <RIcon className="w-6 h-6 text-electric-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-navy-500 mb-1">{s.name}</h3>
                  <p className="text-steel-500 text-sm mb-3">{s.short}</p>
                  <span className="inline-flex items-center gap-1.5 text-electric-600 font-semibold text-sm">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready for Professional ${service.name}?`}
        text="Contact HVP Plumbing today and let our experts handle it."
      />
    </>
  )
}
