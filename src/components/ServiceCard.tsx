import Link from 'next/link'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  badge?: string | null
  accentColor?: 'scarlet' | 'gold'
  href?: string
}

export default function ServiceCard({
  icon,
  title,
  description,
  badge,
  accentColor = 'scarlet',
  href,
}: ServiceCardProps) {
  const borderClass =
    accentColor === 'gold'
      ? 'border-gold/30 hover:border-gold/60'
      : 'border-scarlet/30 hover:border-scarlet/60'

  const badgeClass =
    accentColor === 'gold'
      ? 'bg-gold text-black'
      : 'bg-scarlet text-white'

  const content = (
    <div
      className={`relative bg-[#111827] rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 shadow hover:shadow-xl ${borderClass}`}
    >
      {badge && (
        <span className={`absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full ${badgeClass}`}>
          {badge}
        </span>
      )}
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
      <p className="text-silver text-sm leading-relaxed">{description}</p>
      {href && (
        <span
          className={`mt-4 inline-block text-sm font-medium ${
            accentColor === 'gold' ? 'text-gold' : 'text-scarlet'
          }`}
        >
          Learn more →
        </span>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    )
  }

  return content
}
