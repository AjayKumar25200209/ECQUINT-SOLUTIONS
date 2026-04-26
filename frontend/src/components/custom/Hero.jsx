import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero.jpg";
import { useAccessibilityStore } from "@/store/accessibilityStore";

const Hero = () => {
  const navigate = useNavigate();
  const { reduceMotion } = useAccessibilityStore();

  return (
    <section
      role="banner"
      className="relative pt-28 md:pt-36 pb-20 md:pb-24 overflow-hidden hero"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">

        {/* HEADING */}
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-gray-900"
        >
          Digital Transformation & IT Services
          <br />
          <span className="text-[#e4332d]">
            for Enterprises and Education
          </span>
        </motion.h1>

        {/* SUBTEXT (FIXED — removed text-lg/text-base) */}
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-gray-700 max-w-2xl mx-auto leading-relaxed"
        >
          We help organizations and educational institutions modernize, scale,
          and operate efficiently through integrated technology solutions.
        </motion.p>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Combining ERP systems, AI-driven intelligence, and human expertise,
          we deliver solutions that are faster to implement, cost-efficient,
          and built for long-term impact.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button
            onClick={() => navigate("/services")}
            className="bg-[#e4332d] hover:bg-[#c62e28] text-white px-7 py-3 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e4332d]"
          >
            Explore Services
          </Button>

          <Button
            variant="outline"
            onClick={() => navigate("/contact")}
            className="border border-gray-300 text-gray-800 hover:bg-gray-100 px-7 py-3 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e4332d]"
          >
            Partner With Us
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;