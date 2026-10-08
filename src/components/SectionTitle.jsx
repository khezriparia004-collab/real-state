export default function SectionTitle({ eyebrow, title, subtitle, center = true, light = false }) {
  return (
    <div className={`${center ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} mb-12`}>
      {eyebrow && (
        <span className={`eyebrow ${light ? '!text-electric-400' : ''} mb-3`}>
          <span className="w-8 h-px bg-current opacity-50" />
          {eyebrow}
          <span className="w-8 h-px bg-current opacity-50" />
        </span>
      )}
      <h2 className={`text-3xl md:text-h2 font-display font-bold text-balance ${light ? 'text-white' : 'text-navy-500'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${light ? 'text-steel-300' : 'text-steel-500'} text-balance`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
