import { motion } from "framer-motion"
import { Cpu, UserCheck, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Cpu,
    title: "AI Analysis",
    desc: "Intelligent screening and matching for speed and efficiency.",
  },
  {
    icon: UserCheck,
    title: "Human Validation",
    desc: "Expert review ensures real-world accuracy and fit.",
  },
  {
    icon: CheckCircle,
    title: "Quality Outcome",
    desc: "Pre-vetted talent ready to perform from day one.",
  },
]

const Differentiator = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="max-w-xl mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
            Our Approach
          </h2>
          <p className="text-gray-600 mt-3 text-sm">
            A hybrid model combining AI precision with human expertise to deliver better hiring outcomes.
          </p>
        </div>

        {/* Flow */}
        <div className="relative">

          {/* Line */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-[1px] bg-gray-200" />

          <div className="grid md:grid-cols-3 gap-10 relative">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Circle */}
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6 relative z-10 shadow-sm">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}

export default Differentiator