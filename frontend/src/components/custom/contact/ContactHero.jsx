const ContactHero = () => {
  return (
    <section className="pt-28 pb-14 text-center relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="w-[500px] h-[500px] bg-[#e4332d]/10 blur-[120px] rounded-full absolute top-[-120px] left-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Let’s Build Something
          <br />
          <span className="text-[#e4332d]">
            That Actually Scales
          </span>
        </h1>

        <p className="mt-4 text-gray-600">
          Talk to our experts in digital transformation, ERP, AI, and talent solutions.
        </p>

      </div>

    </section>
  )
}

export default ContactHero