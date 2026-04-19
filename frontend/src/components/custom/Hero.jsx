import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero.jpg";

const Hero = () => {
	const navigate = useNavigate();

	return (
		<section className="relative pt-28 md:pt-36 pb-20 md:pb-24 overflow-hidden">
			{/* BACKGROUND IMAGE */}
			<div className="absolute inset-0 z-0">
				<img
					src={heroImage}
					alt="Background"
					className="w-full h-full object-cover scale-105"
				/>

				{/* Gradient overlay (KEY FIX) */}
				<div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/50 to-white" />
			</div>

			{/* CONTENT */}
			<div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
				{/* HEADING */}
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-gray-900"
				>
					Digital Transformation & IT Services
					<br />
					<span className="text-[#e4332d]">for Enterprises and Education</span>
				</motion.h1>

				{/* SUBTEXT */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
				>
					We help organizations and educational institutions modernize, scale,
					and operate efficiently through integrated technology solutions.
				</motion.p>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mt-3 text-gray-600 text-base max-w-2xl mx-auto leading-relaxed"
				>
					Combining ERP systems, AI-driven intelligence, and human expertise, we
					deliver solutions that are faster to implement, cost-efficient, and
					built for long-term impact.
				</motion.p>

				{/* CTA BUTTONS */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mt-10 flex flex-wrap justify-center gap-4"
				>
					<Button
						onClick={() => navigate("/services")}
						className="bg-[#e4332d] hover:bg-[#c62e28] text-white px-7 py-3 rounded-xl text-sm font-medium"
					>
						Explore Services
					</Button>

					<Button
						variant="outline"
						onClick={() => navigate("/contact")}
						className="border border-gray-300 text-gray-700 hover:bg-gray-100 px-7 py-3 rounded-xl text-sm font-medium"
					>
						Partner With Us
					</Button>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
