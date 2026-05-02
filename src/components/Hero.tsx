import Link from 'next/link'

interface HeroProps {
  badge?: string
  title: string
  titleHighlight?: string
  titleHighlightColor?: 'scarlet' | 'gold'
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  backgroundImage?: string
  dark?: boolean
}

export default function Hero({
  badge,
  title,
  titleHighlight,
  titleHighlightColor = 'scarlet',
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
  dark = true,
}: HeroProps) {
  const highlightClass =
    titleHighlightColor === 'gold'
      ? 'text-gold'
      : 'text-scarlet'

  return (
    <section
      className={`relative min-h-[70vh] flex items-center overflow-hidden ${dark ? 'bg-black' : 'bg-white'}`}
    >
      {/* Background image with overlay */}
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black/65" />
        </>
      )}

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-scarlet/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {badge && (
          <div className="inline-flex items-center gap-2 bg-scarlet/20 border border-scarlet/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-sm font-medium">{badge}</span>
          </div>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
          {title}{' '}
          {titleHighlight && (
            <span className={highlightClass}>{titleHighlight}</span>
          )}
        </h1>

        <p className="text-silver text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">{subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={primaryCta.href}
            className="bg-scarlet hover:bg-scarlet/80 text-white font-bold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg text-center"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 text-center border border-silver/30"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
