import { motion } from "framer-motion"
import { Briefcase, Cpu, Layers } from "lucide-react"

const services = [
  {
    icon: Briefcase,
    title: "IT Staffing",
    desc: "Pre-vetted talent aligned to your project and business needs.",
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    desc: "Modernize systems with scalable, AI-driven technology solutions.",
  },
  {
    icon: Layers,
    title: "ERP & AI Solutions",
    desc: "Integrated platforms to streamline operations and decision-making.",
  },
]

const Services = () => {
  return (
    <section className="pt-16 pb-15">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="max-w-xl mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            What We Do
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            We deliver talent and technology solutions that help organizations scale faster and operate efficiently.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#111827] border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition"
              >
                {/* Icon */}
                <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg bg-[#0B0F19] border border-gray-800">
                  <Icon className="w-5 h-5 text-[#2563EB]" />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Services