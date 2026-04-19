import { useState } from "react"

const InputField = ({ label, type = "text" }) => {
  const [value, setValue] = useState("")

  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-sm focus:outline-none focus:border-[#e4332d]"
      />
      <label
        className={`absolute left-4 text-gray-500 text-sm transition-all 
        ${value ? "top-1 text-xs text-[#e4332d]" : "top-3"} 
        peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#e4332d]`}
      >
        {label}
      </label>
    </div>
  )
}

const ContactForm = () => {
  return (
    <section className="py-20 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-2xl md:text-3xl font-semibold">
          Tell us about your requirement
        </h2>

        <p className="mt-2 text-gray-600 text-sm">
          Our team will get back to you within 24 hours.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-5">

          <InputField label="Full Name" />
          <InputField label="Email" type="email" />
          <InputField label="Phone Number" />
          <InputField label="Company / Organization" />

          <div className="md:col-span-2">
            <textarea
              rows={4}
              placeholder="How can we help you?"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e4332d]"
            />
          </div>

        </div>

        <button className="mt-8 bg-[#e4332d] hover:bg-[#c62e28] text-white px-8 py-3 rounded-lg text-sm font-medium transition">
          Submit Request
        </button>

      </div>
    </section>
  )
}

export default ContactForm