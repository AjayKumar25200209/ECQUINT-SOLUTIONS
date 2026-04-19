const AboutPresence = () => {
  return (
    <section className="py-16 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-semibold">
          Global Presence
        </h2>

        <p className="mt-4 text-gray-600">
          Delivering solutions across regions with a strong global footprint.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm text-gray-700">

          <div>
            <h4 className="font-medium text-gray-900">Countries</h4>
            <p className="mt-2">US, India, Singapore</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900">Canton, MI</h4>
            <p className="mt-2">219 Harvard St</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900">Beaverton, OR</h4>
            <p className="mt-2">11874 SW 178th Dr</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutPresence