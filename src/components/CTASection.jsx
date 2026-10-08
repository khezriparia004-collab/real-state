import { Link } from 'react-router-dom'
import { Phone, ClipboardList } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_HREF } from '../data/site'

export default function CTASection({
  title,
  text,
  variant = 'dark',
}) {
  const isLight = variant === 'light'

  return (
    <section className={`section-pad ${isLight ? 'bg-steel-100' : 'bg-navy-500'}`}>
      <div className="container-x">
        <div className={`text-center max-w-3xl mx-auto ${isLight ? '' : ''}`}>
          <h2 className={`text-3xl md:text-4xl font-display font-bold text-balance ${isLight ? 'text-navy-500' : 'text-white'}`}>
            {title}
          </h2>
          {text && (
            <p className={`mt-4 text-lg ${isLight ? 'text-steel-500' : 'text-steel-300'}`}>
              {text}
            </p>
          )}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_HREF} className={`btn-emergency w-full sm:w-auto ${isLight ? '' : ''}`}>
              <Phone className="w-5 h-5" />
              {PHONE_DISPLAY}
            </a>
            <Link to="/contact" className={isLight ? 'btn-outline w-full sm:w-auto' : 'btn-outline-light w-full sm:w-auto'}>
              <ClipboardList className="w-5 h-5" />
              Request Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
