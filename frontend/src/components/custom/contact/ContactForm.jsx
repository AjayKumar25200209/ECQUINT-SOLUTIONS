import { useState } from "react"
import Notification from "@/components/common/Notification"

const API_URL = import.meta.env.VITE_API_URL

// 🔥 INPUT FIELD (FIXED LABEL + ACCESSIBLE)
const InputField = ({ label, type = "text", name, value, onChange, error }) => {
  const id = `input-${name}`

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`peer w-full border rounded-lg px-4 pt-5 pb-2 text-sm focus:outline-none transition
          ${error 
            ? "border-red-400 focus:border-red-500" 
            : "border-gray-300 focus:border-[#e4332d]"
          }`}
      />

      <label
        htmlFor={id}
        className={`absolute left-4 cursor-text text-gray-500 text-sm transition-all 
          ${value ? "top-1 text-xs text-[#e4332d]" : "top-3"} 
          peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#e4332d]`}
      >
        {label}
      </label>

      {/* ERROR */}
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  )
}

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const [notification, setNotification] = useState({
    message: "",
    type: "info",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })

    // 🔥 clear field error on typing
    setErrors({ ...errors, [e.target.name]: "" })
  }

  // 🔥 VALIDATION (FIELD LEVEL)
  const validateForm = () => {
    const newErrors = {}

    if (!form.name.trim()) newErrors.name = "Full Name is required"
    if (!form.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email format"

    if (!form.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const showNotification = (message, type = "info") => {
    setNotification({ message, type })
  }

  const handleSubmit = async () => {
    if (!validateForm()) {
      showNotification("Please fix the errors before submitting", "error")
      return
    }

    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error()

      showNotification("Request submitted successfully", "success")

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })

      setErrors({})
    } catch {
      showNotification("Something went wrong. Please try again.", "error")
    }

    setLoading(false)
  }

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

          <InputField
            name="name"
            label="Full Name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
          />

          <InputField
            name="email"
            label="Email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />

          <InputField
            name="phone"
            label="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <InputField
            name="company"
            label="Company / Organization"
            value={form.company}
            onChange={handleChange}
          />

          {/* TEXTAREA */}
          <div className="md:col-span-2">
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              aria-invalid={!!errors.message}
              className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none transition
                ${errors.message
                  ? "border-red-400 focus:border-red-500"
                  : "border-gray-300 focus:border-[#e4332d]"
                }`}
            />

            {errors.message && (
              <p className="text-xs text-red-500 mt-1">
                {errors.message}
              </p>
            )}
          </div>

        </div>

        {/* SUBMIT */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-8 bg-[#e4332d] hover:bg-[#c62e28] text-white px-8 py-3 rounded-lg text-sm font-medium transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>

      </div>

      {/* 🔥 NOTIFICATION */}
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: "", type: "info" })}
      />
    </section>
  )
}

export default ContactForm