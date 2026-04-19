import { Sparkles, Target, Users } from "lucide-react"

const values = [
  {
    title: "Innovation",
    desc: "Driving transformation through AI and modern technology.",
    icon: Sparkles,
  },
  {
    title: "Execution",
    desc: "Delivering solutions with precision and reliability.",
    icon: Target,
  },
  {
    title: "Human Expertise",
    desc: "Combining technology with real-world experience.",
    icon: Users,
  },
]

const AboutValues = () => {
  return (
    <section className="py-20 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 space-y-14">

        {values.map((item, i) => {
          const Icon = item.icon

          return (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-start gap-6 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* ICON */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#e4332d]/10">
                <Icon className="w-6 h-6 text-[#e4332d]" />
              </div>

              {/* CONTENT */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600 max-w-md">
                  {item.desc}
                </p>
              </div>

            </div>
          )
        })}

      </div>
    </section>
  )
}

export default AboutValues