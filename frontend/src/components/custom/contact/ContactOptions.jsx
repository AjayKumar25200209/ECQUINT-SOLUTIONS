import { Users, Briefcase, Handshake, LifeBuoy } from "lucide-react"

const items = [
  {
    title: "Clients",
    desc: "Explore business opportunities and digital transformation solutions.",
    icon: Users,
  },
  {
    title: "Talent",
    desc: "Join our network or build high-performing teams.",
    icon: Briefcase,
  },
  {
    title: "Partners",
    desc: "Collaborate and grow with our ecosystem.",
    icon: Handshake,
  },
  {
    title: "Support",
    desc: "Get help with services, systems, and solutions.",
    icon: LifeBuoy,
  },
]

const ContactOptions = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon

            return (
              <div
                key={i}
                className="group relative p-6 rounded-2xl border border-gray-200 bg-white 
                hover:border-[#e4332d]/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >

                {/* ICON */}
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 
                group-hover:bg-[#e4332d]/10 transition">
                  <Icon className="w-5 h-5 text-gray-700 group-hover:text-[#e4332d] transition" />
                </div>

                {/* TITLE */}
                <h3 className="mt-4 font-semibold text-lg text-gray-900 group-hover:text-[#e4332d] transition">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* CTA */}
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#e4332d] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Learn more
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-[#e4332d]/5 to-transparent" />

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default ContactOptions