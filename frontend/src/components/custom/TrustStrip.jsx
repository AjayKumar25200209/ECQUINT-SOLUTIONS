import { motion } from "framer-motion"
import { Zap, ShieldCheck, Users } from "lucide-react"

const items = [
  {
    icon: Zap,
    title: "Faster Hiring Cycles",
    desc: "AI-powered matching accelerates talent delivery",
  },
  {
    icon: ShieldCheck,
    title: "Pre-Vetted Talent",
    desc: "Two-stage evaluation ensures quality & reliability",
  },
  {
    icon: Users,
    title: "Human + AI Model",
    desc: "Balanced intelligence for accurate hiring decisions",
  },
]

const TrustStrip = () => {
  return (
    <section className="py-16 md:py-20  border-t border-gray-800 bg-[#0B0F19]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-5"
              >
                {/* Icon */}
                <div className="p-3 rounded-xl bg-[#111827] border border-gray-800">
                  <Icon className="w-6 h-6 text-[#2563EB]" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default TrustStrip