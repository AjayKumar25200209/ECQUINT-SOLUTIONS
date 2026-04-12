import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
	const navigate = useNavigate();

	return (
		<section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
			{/* Background Glow */}
			<div className="absolute inset-0 -z-10">
				<div className="w-[500px] h-[500px] bg-[#2563EB]/20 blur-[120px] rounded-full absolute top-[-100px] left-[60%]" />
			</div>

			<div className="max-w-7xl mx-auto px-6 md:px-12">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* LEFT CONTENT */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
							AI-Powered Talent.
							<br />
							<span className="text-[#2563EB]">Human-Verified Results.</span>
						</h1>

						<p className="mt-6 text-gray-400 text-base max-w-md">
							We connect high-quality talent with forward-thinking teams using a
							hybrid AI + human evaluation model.
						</p>

						{/* CTA */}
						<div className="mt-8 flex items-center gap-5 flex-wrap">
							<Button
								onClick={() => navigate("/hiring")}
								className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-6 py-2 rounded-lg"
							>
								Hire Talent
							</Button>
							<Button
								variant="outline"
								onClick={() => navigate("/talent")}
								className="border-gray-700 bg-transparent text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-600"
							>
								Submit Profile
							</Button>
						</div>
					</motion.div>

					{/* RIGHT VISUAL */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="relative"
					>
						<div className="bg-gradient-to-br from-[#111827] to-[#0B0F19] border border-gray-800 rounded-2xl p-6 shadow-xl space-y-4">
							{/* Top lines */}
							<div className="h-3 w-24 bg-gray-700 rounded" />
							<div className="h-3 w-32 bg-gray-700 rounded" />

							{/* Content lines */}
							<div className="mt-4 space-y-3">
								<div className="h-3 bg-gray-800 rounded" />
								<div className="h-3 bg-gray-800 rounded w-5/6" />
								<div className="h-3 bg-gray-800 rounded w-4/6" />
							</div>

							{/* Buttons */}
							<div className="mt-6 flex gap-2">
								<div className="h-6 w-16 bg-[#2563EB]/30 rounded" />
								<div className="h-6 w-12 bg-gray-700 rounded" />
							</div>
						</div>

						{/* Floating glow */}
						<div className="absolute -top-6 -right-6 w-20 h-20 bg-[#2563EB]/20 blur-2xl rounded-full" />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
