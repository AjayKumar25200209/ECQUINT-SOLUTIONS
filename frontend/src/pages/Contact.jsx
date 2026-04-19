import Navbar from "@/components/custom/Navbar"
import Footer from "@/components/custom/Footer"

import ContactHero from "@/components/custom/contact/ContactHero"
import ContactOptions from "@/components/custom/contact/ContactOptions"
import ContactForm from "@/components/custom/contact/ContactForm"
import ContactInfo from "@/components/custom/contact/ContactInfo"

const Contact = () => {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      <ContactHero />
      <ContactOptions />
      <ContactForm />
      <ContactInfo />

      <Footer />
    </div>
  )
}

export default Contact