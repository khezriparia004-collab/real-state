import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowRight, Phone, ClipboardList } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'
import { PHONE_HREF } from '../data/site'
import { services } from '../data/services'

const iconMap = {
  Siren: '🚨', Droplets: '💧', Search: '🔍', Flame: '🔥', Zap: '⚡',
  GitBranch: '🔧', Wrench: '🔩', Droplet: '🚿', Network: '🌐', Building2: '🏢',
}

const categories = ['All', 'Emergency', 'Residential', 'Commercial']

export default function Services() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.short.toLowerCase().includes(search.toLowerCase())
      const matchCat = category === 'All' || s.category === category
      return matchSearch && matchCat
    })
  }, [search, category])

  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-navy-500 py-16 md:py-24">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-500/10 rounded-full blur-[120px]" />
        <div className="container-x relative z-10 text-center text-white">
          <span className="eyebrow !text-electric-400 mb-3">
            <span className="w-8 h-px bg-current opacity-50" />
            Our Services
            <span className="w-8 h-px bg-current opacity-50" />
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-balance">
            Complete Plumbing Services
          </h1>
          <p className="mt-4 text-lg text-steel-300 max-w-2xl mx-auto">
            Professional plumbing solutions for every need — from emergency repairs to full installations.
          </p>
        </div>
      </section>

      {/* Search + Filter */}
      <section className="bg-white border-b border-steel-200 sticky top-16 md:top-20 z-30">
        <div className="container-x py-5">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-steel-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl2 border border-steel-200 bg-steel-50 focus:bg-white focus:border-electric-400 transition-colors text-navy-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl2 text-sm font-semibold transition-all ${
                    category === cat
                      ? 'bg-electric-500 text-white shadow-glow'
                      : 'bg-steel-100 text-steel-500 hover:bg-steel-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad bg-arctic">
        <div className="container-x">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-steel-500 text-lg">No services found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="card p-6 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl2 bg-electric-50 flex items-center justify-center group-hover:bg-electric-500 transition-colors duration-300">
                      <span className="text-2xl">{iconMap[s.icon]}</span>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-steel-400 bg-steel-100 px-3 py-1 rounded-full">
                      {s.category}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-navy-500 mb-2">{s.name}</h3>
                  <p className="text-steel-500 text-sm leading-relaxed mb-4">{s.short}</p>
                  <span className="inline-flex items-center gap-1.5 text-electric-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Need a Plumber Today?"
        text="Call us now or request service online. We're ready to help."
      />
    </>
  )
}
