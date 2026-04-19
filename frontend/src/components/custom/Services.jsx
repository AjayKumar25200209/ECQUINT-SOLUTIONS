import { motion } from "framer-motion"

const services = [
  {
    title: "Digital Transformation",
    desc: "Modernize systems, processes, and operations with scalable, future-ready technology solutions.",
    image: "/images/service1.jpg",
  },
  {
    title: "Managed IT Services",
    desc: "End-to-end IT management to ensure reliability, security, and continuous business operations.",
    image: "/images/service2.jpg",
  },
  {
    title: "ERP & Integrated Solutions",
    desc: "Implement and optimize ERP systems with seamless integration across enterprise workflows.",
    image: "/images/service3.jpg",
  },
  {
    title: "Talent & Advisory Services",
    desc: "AI-powered talent solutions combined with expert advisory to build and scale high-performing teams.",
    image: "/images/service4.jpg",
  },
  {
    title: "Professional Services",
    desc: "Execution-driven support across implementations, operations, and enterprise initiatives.",
    image: "/images/service5.jpg",
  },
  {
    title: "Education Technology",
    desc: "Powering digital campuses with integrated platforms, ERP systems, and smart learning solutions.",
    image: "/images/service6.jpg",
  },
]

const Services = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            What We Do
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl">
            We deliver technology solutions that help organizations scale faster and operate efficiently.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-6">

          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition duration-500" />

              {/* CONTENT (HIDDEN → SHOW ON HOVER) */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">

                {/* Title always visible */}
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                {/* Hidden content */}
                <div className="mt-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {item.desc}
                  </p>

                  <span className="inline-block mt-3 text-sm font-medium text-white">
                    Learn more →
                  </span>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Services