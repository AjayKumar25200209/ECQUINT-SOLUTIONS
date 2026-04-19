import Navbar from "@/components/custom/Navbar"
import Footer from "@/components/custom/Footer"

import AboutHero from "@/components/custom/About/AboutHero"
import AboutIntro from "@/components/custom/About/AboutIntro"
import AboutValues from "@/components/custom/about/AboutValues"
import AboutPresence from "@/components/custom/about/AboutPresence"


const About = () => {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      <AboutHero />
      <AboutIntro />
      
      <AboutValues />
      <AboutPresence />

      <Footer />
    </div>
  )
}

export default About