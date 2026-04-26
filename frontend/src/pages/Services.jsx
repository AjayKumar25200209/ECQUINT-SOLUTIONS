import ServiceHero from "@/components/custom/ServiceHero"
import Navbar from "@/components/custom/Navbar";
import { useAccessibilityStore } from "@/store/accessibilityStore";
import Footer from "@/components/custom/Footer";

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
];

const Services = () => {
  const { reduceMotion } = useAccessibilityStore();

  return (
    <div className="bg-white">
      <Navbar />
      <ServiceHero />

      <main>
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const sectionId = `service-${index}`;

          return (
            <section
              key={index}
              aria-labelledby={sectionId}
              className="py-12 md:py-16 border-t border-gray-100"
            >
              <div className="max-w-6xl mx-auto px-5 md:px-10">

                <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">

                  {/* IMAGE LEFT */}
                  {isEven && (
                    <div className="order-1 md:order-none">
                      <img
                        src={service.image}
                        alt=""
                        role="presentation"
                        className="w-full h-[220px] sm:h-[260px] md:h-[320px] object-cover rounded-xl"
                      />
                    </div>
                  )}

                  {/* TEXT */}
                  <div className="order-2 md:order-none">
                    <h2
                      id={sectionId}
                      className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900"
                    >
                      {service.title}
                    </h2>

                    <p className="mt-1 text-[#e4332d] text-xs sm:text-sm font-medium tracking-wide">
                      {service.subtitle}
                    </p>

                    <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                      {service.desc}
                    </p>

                    <ul
                      className="mt-4 space-y-2"
                      aria-label={`${service.title} key features`}
                    >
                      {service.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-700 text-sm sm:text-base"
                        >
                          <span
                            aria-hidden="true"
                            className="text-[#e4332d] mt-1 text-xs"
                          >
                            ●
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* 🔥 BUTTONS ONLY FOR TALENT SECTION */}
                    {service.title === "Talent & Advisory Services" && (
                      <div className="mt-6 flex flex-col sm:flex-row gap-3">

                        <a
                          href="/careers"
                          className="inline-flex justify-center items-center px-5 py-2.5 rounded-lg bg-[#e4332d] text-white text-sm font-medium
                          hover:bg-[#c92e28] focus:outline-none focus:ring-2 focus:ring-[#e4332d]/40 transition"
                        >
                          Explore Opportunities
                        </a>

                        <a
                          href="/hire"
                          className="inline-flex justify-center items-center px-5 py-2.5 rounded-lg border border-gray-300 text-gray-800 text-sm font-medium
                          hover:border-[#e4332d] hover:text-[#e4332d] focus:outline-none focus:ring-2 focus:ring-[#e4332d]/30 transition"
                        >
                          Hire Talent
                        </a>

                      </div>
                    )}

                  </div>

                  {/* IMAGE RIGHT */}
                  {!isEven && (
                    <div className="order-1 md:order-none">
                      <img
                        src={service.image}
                        alt=""
                        role="presentation"
                        className="w-full h-[220px] sm:h-[260px] md:h-[320px] object-cover rounded-xl"
                      />
                    </div>
                  )}

                </div>
              </div>
            </section>
          );
        })}
      </main>

      <Footer />
    </div>
  );
};

export default Services;