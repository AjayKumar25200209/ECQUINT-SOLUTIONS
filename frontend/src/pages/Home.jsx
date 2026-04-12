import Navbar from "@/components/custom/Navbar"
import Hero from "@/components/custom/Hero"
import TrustStrip from "@/components/custom/TrustStrip"
import Services from "@/components/custom/Services"
import Differentiator from "@/components/custom/Differentiator"
import HowItWorks from "@/components/custom/HowItWorks"
// import CTA from "@/components/custom/CTA"
// import Footer from "@/components/custom/Footer"

const Home = () => {
  return (
    <div className="bg-[#0B0F19] text-white">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <Differentiator />
      <HowItWorks />
      {/* <CTA /> */}
      {/* <Footer /> */}




        

    </div>
  )
}

export default Home