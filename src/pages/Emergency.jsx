import { Link } from 'react-router-dom'
import {
  Phone, Siren, Clock, Zap, ShieldCheck, CheckCircle2, AlertTriangle,
  Droplets, Flame, Wrench, ArrowRight,
} from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import FAQAccordion from '../components/FAQAccordion'
import { PHONE_DISPLAY, PHONE_HREF, ADDRESS } from '../data/site'

const emergencies = [
  { icon: Droplets, title: 'Burst Pipes', desc: 'A burst pipe can flood your home in minutes. Shut off your water and call us immediately.' },
  { icon: AlertTriangle, title: 'Severe Leaks', desc: 'Active leaks behind walls or underground can cause structural damage and mold growth.' },
  { icon: Flame, title: 'No Hot Water', desc: 'Water heater failures leave you without hot water — we repair and replace all systems.' },
  { icon: Wrench, title: 'Sewer Backups', desc: 'Sewage backing up into your home is a health hazard that needs immediate attention.' },
]

const emergencyFAQ = [
  {
    q: 'What counts as a plumbing emergency?',
    a: 'Any situation that risks water damage to your property, creates a health hazard, or completely disrupts your water supply qualifies as an emergency. This includes burst pipes, major leaks, sewer backups, and complete loss of hot water.',
  },
  {
    q: 'How fast can you get here?',
    a: 'For emergency calls, we prioritize rapid response and typically arrive within 1–2 hours depending on your location and current call volume. We\'ll give you an accurate ETA when you call.',
  },
  {
    q: 'Do you charge extra for emergency service?',
    a: 'Emergency service may have a different rate than scheduled service. We\'ll discuss pricing with you upfront before any work begins — no surprises.',
  },
  {
    q: 'What should I do while waiting for the plumber?',
    a: 'Shut off your main water supply to prevent further damage. If there\'s any risk of electrical contact with water, turn off electricity to the affected area. Move valuables away from the water if safe to do so.',
  },
  {
    q: 'Are you really available 24/7?',
    a: 'Yes. Our emergency plumbing service operates 24 hours a day, 7 days a week, including weekends and holidays. Call us anytime at ' + PHONE_DISPLAY + '.',
  },
]

export default function Emergency() {
  return (
    <>
      {/* Hero — Full bleed emergency */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-500 to-navy-400 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-signal-500/10 rounded-full blur-[140px]" />

        <div className="container-x relative z-10 py-16 md:py-24 text-center text-white">
          <div className="inline-flex items-center gap-2 glass-dark rounded-full px-5 py-2.5 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-signal-500 animate-pulse" />
            <span className="text-sm font-semibold text-steel-200 uppercase tracking-wider">24/7 Emergency Service</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold text-balance">
            Need Emergency Plumbing Help?
          </h1>
          <p className="mt-5 text-lg md:text-xl text-steel-300 max-w-2xl mx-auto">
            Plumbing emergencies can't wait. Our team is standing by to help you right now.
          </p>

          {/* Massive call button */}
          <div className="mt-10">
            <a
              href={PHONE_HREF}
              className="inline-flex flex-col items-center gap-2 group"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-signal-500 flex items-center justify-center animate-pulse-slow group-hover:scale-105 transition-transform">
                <Phone className="w-12 h-12 md:w-16 md:h-16 text-white" />
              </div>
              <span className="mt-4 font-display font-bold text-2xl md:text-4xl text-white tracking-wide">
                {PHONE_DISPLAY}
              </span>
              <span className="text-electric-400 font-semibold text-sm uppercase tracking-wider">Tap to Call Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <SectionTitle
            eyebrow="Emergency Services"
            title="Common Plumbing Emergencies"
            subtitle="If you're experiencing any of these, don't wait — call us now."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {emergencies.map((e) => (
              <div key={e.title} className="card p-6 flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl2 bg-signal-500/10 flex items-center justify-center shrink-0">
                  <e.icon className="w-7 h-7 text-signal-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-navy-500 mb-1">{e.title}</h3>
                  <p className="text-steel-500 text-sm leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fast Response Banner */}
      <section className="bg-navy-500 py-16">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <Clock className="w-10 h-10 text-electric-400 mx-auto mb-3" />
              <h3 className="font-display font-bold text-2xl mb-1">24/7 Availability</h3>
              <p className="text-steel-300 text-sm">Day or night, weekend or holiday — we\'re here.</p>
            </div>
            <div>
              <Zap className="w-10 h-10 text-electric-400 mx-auto mb-3" />
              <h3 className="font-display font-bold text-2xl mb-1">Fast Response</h3>
              <p className="text-steel-300 text-sm">We arrive within 1–2 hours for most emergency calls.</p>
            </div>
            <div>
              <ShieldCheck className="w-10 h-10 text-electric-400 mx-auto mb-3" />
              <h3 className="font-display font-bold text-2xl mb-1">Licensed & Insured</h3>
              <p className="text-steel-300 text-sm">Professional service you can trust in any situation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad bg-steel-100">
        <div className="container-x">
          <SectionTitle
            eyebrow="Why Choose Us"
            title="Why Choose HVP for Emergencies?"
            subtitle="When it's an emergency, you need a team you can count on."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              'Rapid response — we prioritize emergency calls',
              'Fully stocked service vehicles for on-the-spot repairs',
              'Licensed, insured, and experienced professionals',
              'Clear communication and upfront emergency pricing',
              'We stop the damage fast and prevent further issues',
              'Follow-up repairs and permanent solutions available',
            ].map((t) => (
              <div key={t} className="card p-5 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-electric-600 shrink-0" />
                <span className="text-steel-600">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <SectionTitle
            eyebrow="FAQ"
            title="Emergency Plumbing FAQ"
            subtitle="Quick answers when you need them most."
          />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={emergencyFAQ} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-signal-500 to-signal-600 py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
        <div className="container-x relative z-10 text-center text-white max-w-2xl mx-auto">
          <Siren className="w-12 h-12 mx-auto mb-4 text-white/80" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-balance">
            Don't Wait — Call HVP Plumbing Now
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Every minute counts in a plumbing emergency. Our team is ready to help right now.
          </p>
          <a href={PHONE_HREF} className="btn bg-white text-signal-500 hover:bg-steel-100 text-xl mt-8 animate-pulse-slow">
            <Phone className="w-6 h-6" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  )
}
