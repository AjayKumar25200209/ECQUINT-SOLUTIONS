import { motion } from "framer-motion"

const talentSteps = [
  "Create your profile",
  "Get matched with opportunities",
  "Connect with hiring teams",
]

const hiringSteps = [
  "Submit your requirements",
  "Get pre-vetted candidates",
  "Hire with confidence",
]

const HowItWorks = () => {
  return (
    <section className="py-15 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="max-w-xl mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            How It Works
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            A simple and efficient process for both talent and hiring teams.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Talent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#111827] border border-gray-800 rounded-2xl p-6"
          >
            <h3 className="text-base font-semibold text-white mb-6">
              Talent
            </h3>

            <div className="space-y-4">
              {talentSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#2563EB] text-xs flex items-center justify-center text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hiring Teams */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#111827] border border-gray-800 rounded-2xl p-6"
          >
            <h3 className="text-base font-semibold text-white mb-6">
              Hiring Teams
            </h3>

            <div className="space-y-4">
              {hiringSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#2563EB] text-xs flex items-center justify-center text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default HowItWorks