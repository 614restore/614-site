import { Phone, Search, ClipboardList, Hammer, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    step: '01',
    title: 'Give Us a Call',
    description: "Reach out at (614) 808-8899 or fill out our contact form. We'll schedule a time that works for you.",
  },
  {
    icon: Search,
    step: '02',
    title: 'Free Inspection',
    description: 'We thoroughly inspect your roof, siding, and gutters — documenting everything with photos and detailed notes.',
  },
  {
    icon: ClipboardList,
    step: '03',
    title: 'Transparent Estimate',
    description: "You'll receive a clear, detailed estimate. If insurance is involved, we handle the claim process for you.",
  },
  {
    icon: Hammer,
    step: '04',
    title: 'Expert Installation',
    description: "Our skilled crew gets to work using premium materials. We keep you updated every step of the way.",
  },
  {
    icon: CheckCircle2,
    step: '05',
    title: 'Final Walkthrough',
    description: "We walk the project together, ensure you're 100% satisfied, and leave your property clean.",
  },
]

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-steel-900 mb-4">
            Our Simple <span className="text-red-600">Process</span>
          </h2>
          <p className="text-steel-500 text-lg max-w-2xl mx-auto">
            From first call to final walkthrough, we make the entire experience smooth and stress-free.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-red-200 via-red-400 to-red-200" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((s, index) => {
              const Icon = s.icon
              return (
                <div key={index} className="relative text-center group">
                  <div className="relative mx-auto w-32 h-32 mb-6">
                    <div className="absolute inset-0 bg-red-100 rounded-full group-hover:bg-red-200 transition-colors duration-300" />
                    <div className="absolute inset-3 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <Icon className="w-10 h-10 text-red-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm font-heading">{s.step}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-steel-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-steel-500 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
