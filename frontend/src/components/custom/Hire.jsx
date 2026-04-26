import { useState } from "react"
import Notification from "@/components/common/Notification"

const API_URL = import.meta.env.VITE_API_URL

const InputField = ({ label, type = "text", name, value, onChange }) => {
  const id = `input-${name}`

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-sm focus:outline-none focus:border-[#e4332d]"
      />

      <label
        htmlFor={id}
        className={`absolute left-4 cursor-text text-gray-500 text-sm transition-all 
        ${value ? "top-1 text-xs text-[#e4332d]" : "top-3"} 
        peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#e4332d]`}
      >
        {label}
      </label>
    </div>
  )
}

const Hire = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    role: "",
    teamSize: "",
    timeline: "",
    budget: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const [notification, setNotification] = useState({
    message: "",
    type: "info",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // 🔥 BASIC VALIDATION
  const validateForm = () => {
    if (!form.name.trim()) return "Full Name is required"
    if (!form.email.trim()) return "Email is required"
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Invalid email"
    if (!form.role.trim()) return "Role is required"
    return null
  }

  const showNotification = (message, type = "info") => {
    setNotification({ message, type })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const error = validateForm()
    if (error) {
      showNotification(error, "error")
      return
    }

    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/hire`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error()

      showNotification("Requirement submitted successfully", "success")

      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        role: "",
        teamSize: "",
        timeline: "",
        budget: "",
        message: "",
      })
    } catch {
      showNotification("Something went wrong. Try again.", "error")
    }

    setLoading(false)
  }

  return (
    <section className="py-20 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-2xl md:text-3xl font-semibold">
          Hire Talent
        </h2>

        <p className="mt-2 text-gray-600 text-sm">
          Tell us your requirements and we’ll connect you with the right talent.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 grid md:grid-cols-2 gap-5">

          <InputField name="name" label="Full Name" value={form.name} onChange={handleChange} />
          <InputField name="email" label="Email" type="email" value={form.email} onChange={handleChange} />
          <InputField name="company" label="Company / Organization" value={form.company} onChange={handleChange} />
          <InputField name="phone" label="Phone Number" value={form.phone} onChange={handleChange} />
          <InputField name="role" label="Role / Skill Required" value={form.role} onChange={handleChange} />

          {/* TEAM SIZE */}
          <div className="relative">
            <select
              id="teamSize"
              name="teamSize"
              value={form.teamSize}
              onChange={handleChange}
              className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-sm focus:outline-none focus:border-[#e4332d]"
            >
              <option value=""></option>
              <option value="1">1 person</option>
              <option value="2-5">2–5 people</option>
              <option value="5-10">5–10 people</option>
              <option value="10+">10+ people</option>
            </select>

            <label htmlFor="teamSize" className={`absolute left-4 cursor-text text-gray-500 text-sm transition-all 
              ${form.teamSize ? "top-1 text-xs text-[#e4332d]" : "top-3"} 
              peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#e4332d]`}>
              Team Size Needed
            </label>
          </div>

          {/* TIMELINE */}
          <div className="relative">
            <select
              id="timeline"
              name="timeline"
              value={form.timeline}
              onChange={handleChange}
              className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-sm focus:outline-none focus:border-[#e4332d]"
            >
              <option value=""></option>
              <option value="immediate">Immediate</option>
              <option value="1-month">Within 1 month</option>
              <option value="3-months">1–3 months</option>
              <option value="flexible">Flexible</option>
            </select>

            <label htmlFor="timeline" className={`absolute left-4 cursor-text text-gray-500 text-sm transition-all 
              ${form.timeline ? "top-1 text-xs text-[#e4332d]" : "top-3"} 
              peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#e4332d]`}>
              Hiring Timeline
            </label>
          </div>

          {/* BUDGET */}
          <div className="relative">
            <select
              id="budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-sm focus:outline-none focus:border-[#e4332d]"
            >
              <option value=""></option>
              <option value="low">Budget-friendly</option>
              <option value="mid">Mid-range</option>
              <option value="high">Premium</option>
            </select>

            <label htmlFor="budget" className={`absolute left-4 cursor-text text-gray-500 text-sm transition-all 
              ${form.budget ? "top-1 text-xs text-[#e4332d]" : "top-3"} 
              peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#e4332d]`}>
              Budget Range
            </label>
          </div>

          {/* MESSAGE */}
          <div className="md:col-span-2">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Describe your requirement"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e4332d]"
            />
          </div>

          {/* SUBMIT */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-[#e4332d] hover:bg-[#c62e28] text-white px-8 py-3 rounded-lg text-sm font-medium transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Requirement"}
            </button>
          </div>

        </form>
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

export default Hire