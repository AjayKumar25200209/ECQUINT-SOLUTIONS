const AboutHero = () => {
  return (
    <section className="pt-28 pb-16 text-center relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="w-[500px] h-[500px] bg-[#e4332d]/10 blur-[120px] rounded-full absolute top-[-120px] left-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Transforming Businesses
          <br />
          <span className="text-[#e4332d]">
            Through Technology & Talent
          </span>
        </h1>

        <p className="mt-5 text-gray-600">
          Ecquint Solutions is a global digital transformation and IT services partner helping enterprises and educational institutions scale with AI, ERP, and human expertise.
        </p>

      </div>

    </section>
  )
}

export default AboutHero