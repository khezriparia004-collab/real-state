import { Link } from 'react-router-dom'
import {
  Phone, ClipboardList, CheckCircle2, ArrowRight, ShieldCheck, Award,
  Users, Heart, Target, Eye, ThumbsUp, Sparkles,
} from 'lucide-react'
import CTASection from '../components/CTASection'
import { PHONE_DISPLAY, PHONE_HREF, ADDRESS } from '../data/site'

const values = [
  { icon: ShieldCheck, title: 'Reliability', desc: 'We show up when we say we will and do what we promise.' },
  { icon: Heart, title: 'Integrity', desc: 'Honest assessments, transparent pricing, and no unnecessary work.' },
  { icon: Award, title: 'Quality', desc: 'We use the best materials and techniques for lasting results.' },
  { icon: Users, title: 'Customer First', desc: 'Your satisfaction is our top priority on every job.' },
]

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '5,000+', label: 'Jobs Completed' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '24/7', label: 'Emergency Service' },
]

export default function About() {
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
            About Us
            <span className="w-8 h-px bg-current opacity-50" />
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-balance">
            Your Trusted Local Plumbing Experts
          </h1>
          <p className="mt-4 text-lg text-steel-300">
            HVP Plumbing is committed to providing reliable, professional, and high-quality plumbing services for homeowners and businesses.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card">
                <img
                  src="https://images.pexels.com/photos/8486923/pexels-photo-8486923.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="HVP Plumbing team"
                  className="w-full h-[440px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-glass hidden md:block">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-electric-600" />
                  <div>
                    <div className="font-display font-bold text-navy-500">Licensed & Insured</div>
                    <div className="text-xs text-steel-500">Fully bonded for your protection</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="eyebrow mb-3">
                <span className="w-8 h-px bg-current opacity-50" />
                Our Story
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-500 mb-5">
                Built on Trust and Quality Workmanship
              </h2>
              <div className="space-y-4 text-steel-600 leading-relaxed">
                <p>
                  HVP Plumbing was founded with a simple mission: to provide honest, reliable, and high-quality plumbing services that homeowners and businesses can count on. We saw too many customers frustrated by unreliable plumbers, hidden fees, and poor workmanship — and we set out to change that.
                </p>
                <p>
                  Today, we\'re proud to be one of Cedar City\'s most trusted plumbing companies. Our team of licensed professionals brings years of experience and the latest tools to every job. From emergency repairs to full installations, we treat every project — and every customer — with the respect they deserve.
                </p>
                <p>
                  We believe that great plumbing service is about more than just fixing pipes. It\'s about building trust, communicating honestly, and delivering peace of mind. That\'s the HVP difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-500 py-16">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center text-white">
                <div className="font-display font-bold text-4xl md:text-5xl text-electric-400">{s.value}</div>
                <div className="text-sm text-steel-300 mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-steel-100">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-8">
              <div className="w-14 h-14 rounded-2xl bg-electric-50 flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-electric-600" />
              </div>
              <h3 className="font-display font-bold text-xl text-navy-500 mb-3">Our Mission</h3>
              <p className="text-steel-600 leading-relaxed">
                To deliver exceptional plumbing services that exceed customer expectations — through honest communication, quality workmanship, and reliable solutions that stand the test of time.
              </p>
            </div>
            <div className="card p-8">
              <div className="w-14 h-14 rounded-2xl bg-electric-50 flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-electric-600" />
              </div>
              <h3 className="font-display font-bold text-xl text-navy-500 mb-3">Our Vision</h3>
              <p className="text-steel-600 leading-relaxed">
                To be the most trusted and recommended plumbing company in our community — known for integrity, quality, and a genuine commitment to every customer we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow mb-3">
              <span className="w-8 h-px bg-current opacity-50" />
              Our Values
              <span className="w-8 h-px bg-current opacity-50" />
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-500">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-electric-50 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <v.icon className="w-8 h-8 text-electric-600" />
                </div>
                <h3 className="font-display font-bold text-lg text-navy-500 mb-2">{v.title}</h3>
                <p className="text-steel-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section-pad bg-steel-100">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow mb-3">
                <span className="w-8 h-px bg-current opacity-50" />
                Trust
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-500 mb-5">
                Why Customers Trust Us
              </h2>
              <div className="space-y-4">
                {[
                  'Fully licensed, insured, and bonded plumbers',
                  'Transparent, upfront pricing — no hidden fees',
                  '24/7 emergency service when you need it most',
                  'Satisfaction guaranteed on every job',
                  'Experienced with residential and commercial plumbing',
                  'Clean, respectful, and professional on every visit',
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-electric-600 shrink-0 mt-0.5" />
                    <span className="text-steel-600">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card">
                <img
                  src="https://images.pexels.com/photos/16509869/pexels-photo-16509869.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Professional plumbing work"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience the HVP Difference"
        text="Join thousands of satisfied customers who trust HVP Plumbing for their plumbing needs."
      />
    </>
  )
}
