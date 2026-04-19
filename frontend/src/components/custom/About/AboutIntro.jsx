const AboutIntro = () => {
  return (
    <section className="py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <h2 className="text-3xl md:text-4xl font-semibold">
          Who We Are
        </h2>

        {/* RIGHT */}
        <p className="text-gray-600 leading-relaxed">
          We are a digital transformation and IT services partner combining ERP systems,
          AI-driven intelligence, and human expertise to deliver solutions that are faster
          to implement, cost-efficient, and built for long-term impact.
        </p>

      </div>
    </section>
  )
}

export default AboutIntro;