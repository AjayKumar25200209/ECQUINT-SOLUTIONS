import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        {/* TOP GRID */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <h2 className="font-semibold text-gray-900">
              Ecquint<span className="text-[#e4332d]">.</span>
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Ecquint Solutions, Inc. is a Digital Transformation & IT Services partner 
              helping enterprises and educational institutions scale through integrated 
              technology solutions powered by AI and human expertise.
            </p>

            <p className="mt-4 text-gray-600">
              <span className="font-medium text-gray-800">Countries:</span> US, India, Singapore
            </p>
          </div>

          {/* COMPANY */}
          <nav>
            <h3 className="font-semibold text-gray-900 mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li><Link to="/" className="hover:text-black">Home</Link></li>
              <li><Link to="/about" className="hover:text-black">About</Link></li>
              <li><Link to="/services" className="hover:text-black">Services</Link></li>
              <li><Link to="/contact" className="hover:text-black">Contact</Link></li>
            </ul>
          </nav>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Services
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>IT Services</li>
              <li>Digital Transformation</li>
              <li>ERP Solutions</li>
              <li>AI-Driven Solutions</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-700">

              <li>
                <span className="font-medium text-gray-800">Email:</span>{" "}
                <a href="mailto:info@ecquint.com">info@ecquint.com</a>
              </li>

              <li>
                <span className="font-medium text-gray-800">Phone:</span>{" "}
                <a href="tel:+12489054741">+1 (248) 905-4741</a>
              </li>

              <li className="pt-2">
                <span className="font-medium text-gray-800">US Office:</span>
                <p className="mt-1">219 Harvard St, Canton, MI, 48188</p>
              </li>

              <li>
                <span className="font-medium text-gray-800">US Office:</span>
                <p className="mt-1">11874 SW 178th Dr, Beaverton, OR 97006</p>
              </li>

            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Ecquint Solutions, Inc. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-600">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;