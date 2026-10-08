import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            className={`card overflow-hidden ${isOpen ? 'ring-1 ring-electric-200' : ''}`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display font-semibold text-navy-500 text-base md:text-lg">
                {item.q}
              </span>
              <span
                className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isOpen ? 'bg-electric-500 text-white rotate-180' : 'bg-steel-100 text-steel-500'
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-steel-600 leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
