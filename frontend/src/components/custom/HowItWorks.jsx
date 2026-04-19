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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="max-w-xl mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
            How It Works
          </h2>
          <p className="text-gray-600 mt-3 text-sm">
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
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-base font-semibold text-gray-900 mb-6">
              Talent
            </h3>

            <div className="space-y-4">
              {talentSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-xs flex items-center justify-center text-white">
                    {index + 1}
                  </div>

                  <p className="text-sm text-gray-600">{step}</p>
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
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-base font-semibold text-gray-900 mb-6">
              Hiring Teams
            </h3>

            <div className="space-y-4">
              {hiringSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">

                  <div className="w-6 h-6 rounded-full bg-blue-600 text-xs flex items-center justify-center text-white">
                    {index + 1}
                  </div>

                  <p className="text-sm text-gray-600">{step}</p>
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