import { ShieldCheck, DollarSign, Clock, Handshake, Camera, HeadphonesIcon } from 'lucide-react'

const reasons = [
  {
    icon: Handshake,
    title: 'People Over Profit',
    description:
      "We don't pad our wallets at your expense. Every recommendation we make is in YOUR best interest — period.",
  },
  {
    icon: ShieldCheck,
    title: 'Insurance Experts',
    description:
      'We handle the back-and-forth with your insurance company so you do not have to. We know the process inside and out.',
  },
  {
    icon: Camera,
    title: 'Thorough Documentation',
    description:
      'Every inspection is documented with detailed photos and reports using our proprietary software — nothing gets missed.',
  },
  {
    icon: DollarSign,
    title: 'Fair & Transparent Pricing',
    description:
      "No hidden fees, no surprise charges. You'll know exactly what you're paying for before we start.",
  },
  {
    icon: Clock,
    title: 'Fast Response Times',
    description:
      'Storm damage waits for no one. We offer same-day inspections and rapid project turnaround to get your life back to normal.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Communication First',
    description:
      "You'll never wonder where your project stands. We keep you informed at every step from inspection to completion.",
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-steel-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-red-400 font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            The 614 Difference
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Why Choose <span className="text-red-500">614 Restore</span>?
          </h2>
          <p className="text-steel-400 text-lg max-w-2xl mx-auto">
            We&apos;re not just another roofing company. We&apos;re your neighbors, and we treat every home
            like it&apos;s our own.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-red-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-steel-400 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
