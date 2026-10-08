import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, ADDRESS, BUSINESS_HOURS } from '../data/site'
import { services as allServices } from '../data/services'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-500 py-16 md:py-24">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-500/10 rounded-full blur-[120px]" />
        <div className="container-x relative z-10 text-center text-white max-w-3xl mx-auto">
          <span className="eyebrow !text-electric-400 mb-3">
            <span className="w-8 h-px bg-current opacity-50" />
            Contact
            <span className="w-8 h-px bg-current opacity-50" />
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-balance">
            Contact Us or Request Service
          </h1>
          <p className="mt-4 text-lg text-steel-300">
            Call us now or fill out the form below — we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white border-b border-steel-200 py-10">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <a href={PHONE_HREF} className="card p-5 flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-electric-50 flex items-center justify-center shrink-0 group-hover:bg-electric-500 transition-colors">
                <Phone className="w-6 h-6 text-electric-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-steel-400 mb-1">Phone</div>
                <div className="font-display font-semibold text-navy-500 text-sm">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a href={`mailto:${EMAIL}`} className="card p-5 flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-electric-50 flex items-center justify-center shrink-0 group-hover:bg-electric-500 transition-colors">
                <Mail className="w-6 h-6 text-electric-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-steel-400 mb-1">Email</div>
                <div className="font-display font-semibold text-navy-500 text-sm">{EMAIL}</div>
              </div>
            </a>
            <div className="card p-5 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-electric-50 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-electric-600" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-steel-400 mb-1">Address</div>
                <div className="font-display font-semibold text-navy-500 text-sm leading-tight">{ADDRESS}</div>
              </div>
            </div>
            <div className="card p-5 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-electric-50 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-electric-600" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-steel-400 mb-1">Hours</div>
                <div className="font-display font-semibold text-navy-500 text-sm">Mon–Fri: 7AM–7PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-pad bg-arctic">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-500 mb-2">
                Request Service
              </h2>
              <p className="text-steel-500 mb-6">
                Fill out the form and we'll contact you to schedule your service.
              </p>

              {submitted ? (
                <div className="card p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-electric-50 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-electric-600" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-navy-500 mb-2">Request Received!</h3>
                  <p className="text-steel-500 mb-6">
                    Thank you for reaching out. We'll contact you shortly to confirm your appointment.
                  </p>
                  <p className="text-sm text-steel-400 mb-4">
                    Need immediate help? Call us directly:
                  </p>
                  <a href={PHONE_HREF} className="btn-primary">
                    <Phone className="w-4 h-4" />
                    {PHONE_DISPLAY}
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy-500 mb-1.5">Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl2 border border-steel-200 bg-steel-50 focus:bg-white focus:border-electric-400 transition-colors text-navy-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-navy-500 mb-1.5">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl2 border border-steel-200 bg-steel-50 focus:bg-white focus:border-electric-400 transition-colors text-navy-500"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-500 mb-1.5">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl2 border border-steel-200 bg-steel-50 focus:bg-white focus:border-electric-400 transition-colors text-navy-500"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-500 mb-1.5">Service Needed *</label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl2 border border-steel-200 bg-steel-50 focus:bg-white focus:border-electric-400 transition-colors text-navy-500"
                    >
                      <option value="">Select a service</option>
                      {allServices.map((s) => (
                        <option key={s.slug} value={s.name}>{s.name}</option>
                      ))}
                      <option value="Other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-500 mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl2 border border-steel-200 bg-steel-50 focus:bg-white focus:border-electric-400 transition-colors text-navy-500 resize-none"
                      placeholder="Describe your plumbing issue..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-lg">
                    <Send className="w-5 h-5" />
                    Request Service
                  </button>
                </form>
              )}
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="font-display font-bold text-lg text-navy-500 mb-4">Business Hours</h3>
                <ul className="space-y-3">
                  {BUSINESS_HOURS.map((h) => (
                    <li key={h.day} className="flex items-center justify-between text-sm">
                      <span className="text-steel-500 font-medium">{h.day}</span>
                      <span className={`font-semibold ${h.hours.includes('24/7') ? 'text-electric-600' : 'text-navy-500'}`}>
                        {h.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="font-display font-bold text-lg text-navy-500 mb-4">Service Area</h3>
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-electric-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-navy-500 text-sm">Cedar City, UT</div>
                    <div className="text-sm text-steel-500">{ADDRESS}</div>
                  </div>
                </div>
                <p className="text-sm text-steel-500 leading-relaxed">
                  We proudly serve Cedar City and surrounding communities. Contact us to confirm we service your area.
                </p>
              </div>

              <div className="card p-6 bg-navy-500 border-navy-500">
                <h3 className="font-display font-bold text-lg text-white mb-2">Emergency?</h3>
                <p className="text-steel-300 text-sm mb-4">
                  Don't fill out a form — call us directly for fastest response.
                </p>
                <a href={PHONE_HREF} className="btn-emergency w-full">
                  <Phone className="w-5 h-5" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
