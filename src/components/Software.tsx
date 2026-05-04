import { ArrowRight, Sparkles, Camera } from 'lucide-react'
import Link from 'next/link'

const tools = [
  {
    name: 'QuoteMGR',
    logo: '/images/quotemgr-logo.png',
    tagline: 'Quote & Estimate Builder',
    description:
      'A powerful quote and estimate building platform that streamlines the proposal process. Create professional, accurate estimates in minutes — not hours.',
    status: 'Live',
    statusColor: 'bg-green-500',
    features: ['Professional estimates', 'Fast turnaround', 'Accurate pricing'],
    link: '/software#quotemgr',
  },
  {
    name: 'TrussCTR',
    logo: '/images/trussctr-logo.png',
    tagline: 'Full-Featured CRM',
    description:
      'A comprehensive CRM built specifically for contractors. Manage leads, jobs, and customer relationships all in one place. Currently used in-house — coming to the public soon.',
    status: 'Coming Soon',
    statusColor: 'bg-amber-500',
    features: ['Lead management', 'Job tracking', 'Customer insights'],
    link: '/software#trussctr',
  },
  {
    name: 'ScopeMGR',
    logo: null,
    tagline: 'Photo Documentation & Canvassing',
    description:
      'The ultimate tool for documenting inspections, managing contingencies, and getting paperwork signed. Every detail captured, organized, and accessible.',
    status: 'In Development',
    statusColor: 'bg-blue-500',
    features: ['Photo documentation', 'Digital signatures', 'Canvassing tools'],
    link: '/software#scopemgr',
  },
]

export default function Software() {
  return (
    <section id="software" className="py-24 bg-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            <Sparkles className="w-4 h-4" />
            Innovation
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-steel-900 mb-4">
            Built by a Contractor, <span className="text-red-600">for Contractors</span>
          </h2>
          <p className="text-steel-500 text-lg max-w-3xl mx-auto">
            After using dozens of tools that always seemed to miss the mark, Jeff decided to
            build his own. These tools make us more efficient — which means more time focused on
            what actually matters: <strong>taking care of you.</strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Link
              key={index}
              href={tool.link}
              className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-steel-100 hover:border-red-200 block"
            >
              <div className="flex items-center justify-between mb-6">
                {tool.logo ? (
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    className="h-14 w-auto object-contain"
                  />
                ) : (
                  <div className="w-14 h-14 bg-steel-900 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                    <Camera className="w-7 h-7 text-white" />
                  </div>
                )}
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-steel-500">
                  <span className={`w-2 h-2 rounded-full ${tool.statusColor}`} />
                  {tool.status}
                </span>
              </div>

              <h3 className="text-2xl font-heading font-bold text-steel-900 mb-1 group-hover:text-red-600 transition-colors">
                {tool.name}
              </h3>
              <p className="text-red-600 font-medium text-sm mb-4">{tool.tagline}</p>
              <p className="text-steel-500 leading-relaxed text-sm mb-6">
                {tool.description}
              </p>

              <ul className="space-y-2">
                {tool.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-steel-600 text-sm">
                    <ArrowRight className="w-3 h-3 text-red-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <span className="inline-flex items-center gap-1 text-red-600 text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                Learn more →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-steel-200 rounded-full px-6 py-3 shadow-sm">
            <Sparkles className="w-5 h-5 text-red-500" />
            <p className="text-steel-600 text-sm">
              The more efficient we are, the more time we can spend doing what actually matters —
              <span className="font-semibold text-steel-800"> and that helps everyone.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}