import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        {/* TOP GRID */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Ecquint<span className="text-[#e4332d]">.</span>
            </h3>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Ecquint Solutions, Inc. is a Digital Transformation & IT Services partner 
              helping enterprises and educational institutions scale through integrated 
              technology solutions powered by AI and human expertise.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              <span className="font-medium text-gray-700">Countries:</span> US, India, Singapore
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Company
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link to="/" className="hover:text-gray-900 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-900 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-900 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-900 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Services
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>IT Services</li>
              <li>Digital Transformation</li>
              <li>ERP Solutions</li>
              <li>AI-Driven Solutions</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Contact
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <span className="font-medium text-gray-700">Email:</span>{" "}
                info@ecquint.com
              </li>
              <li>
                <span className="font-medium text-gray-700">Phone:</span>{" "}
                +1 (248) 905-4741
              </li>

              <li className="pt-2">
                <span className="font-medium text-gray-700">US Office:</span>
                <p className="mt-1">
                  219 Harvard St, Canton, MI, 48188
                </p>
              </li>

              <li>
                <span className="font-medium text-gray-700">US Office:</span>
                <p className="mt-1">
                  11874 SW 178th Dr, Beaverton, OR 97006
                </p>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Ecquint Solutions, Inc. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-600">
            <span className="hover:text-gray-900 cursor-pointer">Privacy</span>
            <span className="hover:text-gray-900 cursor-pointer">Terms</span>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer