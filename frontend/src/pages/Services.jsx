import ServiceHero from "@/components/Custom/ServiceHero"
import Navbar from "@/components/Custom/Navbar";

const services = [
  {
    title: "Digital Transformation",
    subtitle: "Modernize, Scale, and Innovate",
    desc: "Transform legacy systems into scalable, cloud-driven, future-ready ecosystems.",
    points: [
      "Cloud adoption & modernization",
      "Process automation",
      "System integration",
      "Data-driven decisions",
    ],
    image: "/images/service1.jpg",
  },
  {
    title: "Managed IT Services",
    subtitle: "Reliable, Secure, and Scalable",
    desc: "End-to-end IT management ensuring performance, security, and uptime.",
    points: [
      "24/7 monitoring",
      "Infrastructure management",
      "Cybersecurity",
      "Performance optimization",
    ],
    image: "/images/service2.jpg",
  },
  {
    title: "ERP & Integrated Solutions",
    subtitle: "Streamline Operations",
    desc: "ERP implementation tailored to your workflows and business needs.",
    points: [
      "ERP implementation",
      "Workflow automation",
      "Custom integrations",
      "Analytics & reporting",
    ],
    image: "/images/service3.jpg",
  },
  {
    title: "Talent & Advisory Services",
    subtitle: "AI-powered, Human-refined",
    desc: "AI-driven talent solutions combined with expert advisory.",
    points: [
      "Talent acquisition",
      "Workforce strategy",
      "AI hiring",
      "Leadership advisory",
    ],
    image: "/images/service4.jpg",
  },
  {
    title: "Professional Services",
    subtitle: "Execution that Delivers",
    desc: "Enterprise-grade support across implementations and operations.",
    points: [
      "Project delivery",
      "Implementation support",
      "Process optimization",
      "Operational excellence",
    ],
    image: "/images/service5.jpg",
  },
  {
    title: "Education Technology",
    subtitle: "Powering Digital Campuses",
    desc: "Integrated ERP and digital platforms for modern education.",
    points: [
      "Campus ERP",
      "Student lifecycle",
      "Learning systems",
      "Analytics",
    ],
    image: "/images/service6.jpg",
  },
]

const Services = () => {
  return (
    <div className="bg-white">
        <Navbar />
        <ServiceHero />

      {services.map((service, index) => (
        <section
          key={index}
          className="py-14 md:py-18 border-t border-gray-100"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-10">

            {/* GRID */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

              {/* IMAGE (LEFT / RIGHT SWITCH) */}
              {index % 2 === 0 && (
                <div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[260px] md:h-[320px] object-cover rounded-xl"
                  />
                </div>
              )}

              {/* TEXT */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  {service.title}
                </h2>

                <p className="mt-2 text-[#e4332d] text-sm font-medium">
                  {service.subtitle}
                </p>

                <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
                  {service.desc}
                </p>

                <ul className="mt-4 space-y-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-[#e4332d] mt-1 text-xs">●</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* IMAGE RIGHT */}
              {index % 2 !== 0 && (
                <div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[260px] md:h-[320px] object-cover rounded-xl"
                  />
                </div>
              )}

            </div>

          </div>
        </section>
      ))}
    </div>
  )
}

export default Services