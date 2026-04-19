const ContactInfo = () => {
  return (
    <section className="py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-semibold mb-8">
          More ways to get in touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <h3 className="font-semibold text-lg">Call us</h3>
            <p className="mt-2 text-gray-600 text-sm">
              +1 (248) 905-4741
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Visit us</h3>
            <p className="mt-2 text-gray-600 text-sm">
              US, India, Singapore
            </p>
            <p className="text-gray-600 text-sm mt-2">
              219 Harvard St, Canton, MI
            </p>
            <p className="text-gray-600 text-sm">
              11874 SW 178th Dr, Beaverton, OR
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ContactInfo