import { useState } from 'react'
import { Phone, Search } from 'lucide-react'
import FAQAccordion from '../components/FAQAccordion'
import CTASection from '../components/CTASection'
import { faqCategories } from '../data/faq'
import { PHONE_DISPLAY, PHONE_HREF } from '../data/site'

export default function FAQ() {
  const [search, setSearch] = useState('')

  const filtered = faqCategories
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.q.toLowerCase().includes(search.toLowerCase()) ||
          item.a.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0)

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
            FAQ
            <span className="w-8 h-px bg-current opacity-50" />
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-balance">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-steel-300">
            Find answers to common questions about our plumbing services.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="bg-white border-b border-steel-200 py-6">
        <div className="container-x max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-steel-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl2 border border-steel-200 bg-steel-50 focus:bg-white focus:border-electric-400 transition-colors text-navy-500"
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-pad bg-arctic">
        <div className="container-x max-w-3xl">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-steel-500 text-lg">No questions found matching your search.</p>
            </div>
          ) : (
            <div className="space-y-10">
              {filtered.map((cat) => (
                <div key={cat.category}>
                  <h2 className="font-display font-bold text-xl text-navy-500 mb-4 flex items-center gap-3">
                    <span className="w-1 h-6 bg-electric-500 rounded-full" />
                    {cat.category}
                  </h2>
                  <FAQAccordion items={cat.items} />
                </div>
              ))}
            </div>
          )}

          {/* Still have questions */}
          <div className="mt-12 card p-8 text-center bg-navy-500 border-navy-500">
            <h3 className="font-display font-bold text-xl text-white mb-2">Still Have Questions?</h3>
            <p className="text-steel-300 mb-5">We're here to help. Call us directly and we'll answer any questions you have.</p>
            <a href={PHONE_HREF} className="btn-primary">
              <Phone className="w-5 h-5" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        text="Contact HVP Plumbing today for professional, reliable plumbing service."
      />
    </>
  )
}
