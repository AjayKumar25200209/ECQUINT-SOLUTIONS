import { motion } from "framer-motion"

const ServiceHero = () => {
  return (
    <section className="pt-28 md:pt-36 pb-20 text-center relative overflow-hidden">

      {/* BACKGROUND ACCENT */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[500px] h-[500px] bg-[#e4332d]/10 blur-[120px] rounded-full absolute top-[-120px] left-[50%] -translate-x-1/2" />
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-12">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight"
        >
          Our Services
          <br />
          <span className="text-[#e4332d]">
            Built for Transformation & Growth
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-gray-600 text-lg leading-relaxed"
        >
          A comprehensive suite of digital, ERP, AI, and talent solutions designed to help organizations scale, innovate, and succeed.
        </motion.p>

      </div>
    </section>
  )
}

export default ServiceHero