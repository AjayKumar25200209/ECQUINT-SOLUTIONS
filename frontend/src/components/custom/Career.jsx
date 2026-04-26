import { useState } from "react"
import Notification from "@/components/common/Notification"

const API_URL = import.meta.env.VITE_API_URL

const InputField = ({ label, type = "text", name, value, onChange }) => {
    const id = `input-${name}`

    return (
        <div className="relative">
            <input
                id={id}
                name={name}
                type={type}
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

const Career = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        role: "",
        experience: "",
        message: "",
        resume: null,
        skills: [],
    })

    const [skillInput, setSkillInput] = useState("")
    const [loading, setLoading] = useState(false)

    const [notification, setNotification] = useState({
        message: "",
        type: "info",
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleFileChange = (e) => {
        setForm({ ...form, resume: e.target.files[0] })
    }

    const addSkill = () => {
        if (skillInput.trim() && !form.skills.includes(skillInput)) {
            setForm({ ...form, skills: [...form.skills, skillInput] })
            setSkillInput("")
        }
    }

    const removeSkill = (skill) => {
        setForm({
            ...form,
            skills: form.skills.filter((s) => s !== skill),
        })
    }

    const showNotification = (message, type = "info") => {
        setNotification({ message, type })
    }

    // 🔥 VALIDATION
    const validateForm = () => {
        if (!form.name.trim()) return "Full Name is required"
        if (!form.email.trim()) return "Email is required"
        if (!/\S+@\S+\.\S+/.test(form.email)) return "Invalid email"
        if (!form.resume) return "Resume is required"
        return null
    }

    // 🔥 API CALL
    const handleSubmit = async (e) => {
        e.preventDefault()

        const error = validateForm()
        if (error) {
            showNotification(error, "error")
            return
        }

        setLoading(true)

        try {
            const formData = new FormData()

            formData.append("name", form.name)
            formData.append("email", form.email)
            formData.append("phone", form.phone)
            formData.append("role", form.role)
            formData.append("experience", form.experience)
            formData.append("message", form.message)

            // IMPORTANT
            formData.append("skills", form.skills.join(", "))

            // FILE
            formData.append("resume", form.resume)

            const res = await fetch(`${API_URL}/career`, {
                method: "POST",
                body: formData,
            })

            if (!res.ok) throw new Error()

            showNotification("Application submitted successfully", "success")

            setForm({
                name: "",
                email: "",
                phone: "",
                role: "",
                experience: "",
                message: "",
                resume: null,
                skills: [],
            })

        } catch (err) {
            showNotification("Something went wrong. Try again.", "error")
        }

        setLoading(false)
    }

    return (
        <section className="py-20 border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-6">

                <h2 className="text-2xl md:text-3xl font-semibold">
                    Explore Opportunities
                </h2>

                <p className="mt-2 text-gray-600 text-sm">
                    Join our network of professionals working on impactful projects.
                </p>

                <form onSubmit={handleSubmit} className="mt-10 grid md:grid-cols-2 gap-5">

                    <InputField name="name" label="Full Name" value={form.name} onChange={handleChange} />
                    <InputField name="email" label="Email" type="email" value={form.email} onChange={handleChange} />
                    <InputField name="phone" label="Phone Number" value={form.phone} onChange={handleChange} />
                    <InputField name="role" label="Role Interested In" value={form.role} onChange={handleChange} />

                    {/* EXPERIENCE */}
                    <div className="relative">
                        <select
                            name="experience"
                            value={form.experience}
                            onChange={handleChange}
                            className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-sm focus:outline-none focus:border-[#e4332d]"
                        >
                            <option value=""></option>
                            <option value="0-1">0–1 years</option>
                            <option value="1-3">1–3 years</option>
                            <option value="3-5">3–5 years</option>
                            <option value="5+">5+ years</option>
                        </select>
                    </div>

                    {/* FILE */}
                    <div className="flex flex-col justify-center">
                        <label className="text-sm text-gray-600 mb-1">Upload Resume</label>
                        <input type="file" onChange={handleFileChange} />
                    </div>

                    {/* SKILLS */}
                    <div className="md:col-span-2">
                        <div className="flex gap-2 mt-2">
                            <input
                                value={skillInput}
                                onChange={(e) => setSkillInput(e.target.value)}
                                className="flex-1 border rounded-lg px-4 py-2 text-sm"
                                placeholder="Add a skill"
                            />
                            <button type="button" onClick={addSkill} className="px-4 py-2 bg-[#e4332d] text-white rounded-lg">
                                Add
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-3">
                            {form.skills.map((skill, i) => (
                                <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* MESSAGE */}
                    <div className="md:col-span-2">
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Tell us about your experience"
                            className="w-full border rounded-lg px-4 py-3 text-sm"
                        />
                    </div>

                    {/* SUBMIT */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-[#e4332d] text-white px-8 py-3 rounded-lg"
                        >
                            {loading ? "Submitting..." : "Submit Application"}
                        </button>
                    </div>

                </form>
            </div>

            {/* NOTIFICATION */}
            <Notification
                message={notification.message}
                type={notification.type}
                onClose={() => setNotification({ message: "", type: "info" })}
            />
        </section>
    )
}

export default Career