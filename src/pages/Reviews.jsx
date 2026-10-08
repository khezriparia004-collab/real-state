import { Link } from 'react-router-dom'
import { Star, ClipboardList, Quote, ArrowRight, Award } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'
import { reviews } from '../data/reviews'

export default function Reviews() {
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
            Reviews
            <span className="w-8 h-px bg-current opacity-50" />
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-balance">
            What Our Customers Say
          </h1>
          <p className="mt-4 text-lg text-steel-300">
            Real reviews from real customers we've helped in Cedar City and surrounding areas.
          </p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white border-b border-steel-200 py-10">
        <div className="container-x">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="flex gap-1 justify-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-7 h-7 fill-electric-500 text-electric-500" />
                ))}
              </div>
              <div className="font-display font-bold text-2xl text-navy-500">4.9 / 5.0</div>
              <div className="text-sm text-steel-500">Average Rating</div>
            </div>
            <div className="hidden md:block w-px h-20 bg-steel-200" />
            <div className="text-center">
              <div className="font-display font-bold text-2xl text-navy-500">500+ Reviews</div>
              <div className="text-sm text-steel-500">From Happy Customers</div>
            </div>
            <div className="hidden md:block w-px h-20 bg-steel-200" />
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center">
                <Award className="w-7 h-7 text-electric-600" />
                <div className="font-display font-bold text-2xl text-navy-500">5-Star Service</div>
              </div>
              <div className="text-sm text-steel-500">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-pad bg-arctic">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="card p-6 flex flex-col">
                <Quote className="w-8 h-8 text-electric-200 mb-3" />
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-electric-500 text-electric-500" />
                  ))}
                </div>
                <p className="text-steel-600 leading-relaxed text-sm flex-1 mb-5">"{r.text}"</p>
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
            <Link to="/contact" className="btn-primary">
              <ClipboardList className="w-5 h-5" />
              Request Service
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Satisfied Customers"
        text="Experience the same 5-star service that our customers rave about."
      />
    </>
  )
}
