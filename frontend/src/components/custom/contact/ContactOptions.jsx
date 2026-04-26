import { Users, Briefcase, Handshake, LifeBuoy } from "lucide-react"

const items = [
  {
    title: "Clients",
    desc: "Discover how we help organizations modernize operations, implement scalable systems, and accelerate digital transformation with measurable business outcomes.",
    icon: Users,
    href: "#clients",
  },
  {
    title: "Talent",
    desc: "Explore opportunities to work on impactful projects or build high-performing teams through our AI-powered, human-refined talent network.",
    icon: Briefcase,
    href: "#talent",
  },
  {
    title: "Partners",
    desc: "Collaborate with us to deliver integrated solutions, expand capabilities, and grow within a strong technology and services ecosystem.",
    icon: Handshake,
    href: "#partners",
  },
  {
    title: "Support",
    desc: "Get reliable assistance for your systems, services, and ongoing operations with responsive support and long-term technology guidance.",
    icon: LifeBuoy,
    href: "#support",
  },
]

const ContactOptions = () => {
  return (
    <section className="py-14 md:py-18 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {items.map((item, i) => {
            const Icon = item.icon

            return (
              <a
                key={i}
                href={item.href}
                aria-label={`Explore ${item.title}`}
                className="group relative block p-5 md:p-6 rounded-2xl border border-gray-200 bg-white 
                hover:border-[#e4332d]/40 hover:shadow-lg 
                focus:outline-none focus:ring-2 focus:ring-[#e4332d]/40
                transition-all duration-300"
              >

                {/* ICON */}
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 
                group-hover:bg-[#e4332d]/10 transition">
                  <Icon
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-700 group-hover:text-[#e4332d] transition"
                  />
                </div>

                {/* TITLE */}
                <h3 className="mt-4 font-semibold text-base md:text-lg text-gray-900 group-hover:text-[#e4332d] transition">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-2 text-sm md:text-[15px] text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* CTA */}
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#e4332d]">
                  Learn more
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-[#e4332d]/5 to-transparent" />

              </a>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default ContactOptions