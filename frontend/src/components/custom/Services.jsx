import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAccessibilityStore } from "@/store/accessibilityStore";

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
];

const CARD_WIDTH = 280;
const GAP = 24; // gap-6 = 24px
const SCROLL_AMOUNT = CARD_WIDTH + GAP;

const Services = () => {
  const scrollRef = useRef(null);
  const { reduceMotion } = useAccessibilityStore();

  const scroll = (dir) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section className="overflow-hidden py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-gray-900">
              What We Do
            </h2>
            <p className="mt-2 text-gray-600 max-w-xl">
              We deliver technology solutions that help organizations scale faster and operate efficiently.
            </p>
          </div>

          {/* ARROWS */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-2 border rounded-full hover:bg-gray-100"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="p-2 border rounded-full hover:bg-gray-100"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={reduceMotion ? false : { opacity: 0, y: 40 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex-shrink-0 w-[280px] relative rounded-2xl overflow-hidden group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover"
                />

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition duration-300" />

                <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                  <h3 className="font-semibold">{item.title}</h3>

                  <div className="mt-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                    <p className="text-gray-200 leading-relaxed">
                      {item.desc}
                    </p>

                    <span className="inline-block mt-3 font-medium">
                      Learn more →
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;