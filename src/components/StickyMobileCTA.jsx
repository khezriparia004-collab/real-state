import { Phone, ClipboardList } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PHONE_HREF } from '../data/site'

export default function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-steel-200 px-4 py-3 flex gap-3">
      <a href={PHONE_HREF} className="btn-emergency flex-1 !min-h-[56px] text-base">
        <Phone className="w-5 h-5" />
        Call Now
      </a>
      <Link to="/contact" className="btn-primary flex-1 !min-h-[56px] text-base">
        <ClipboardList className="w-5 h-5" />
        Schedule Service
      </Link>
    </div>
  )
}
