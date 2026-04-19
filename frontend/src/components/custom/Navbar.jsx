import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => {
            navigate("/")
            setMenuOpen(false)
          }}
          className="text-lg font-semibold tracking-tight cursor-pointer text-gray-900"
        >
          Ecquint<span className="text-blue-600">.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-gray-600">
          <Link to="/" className="hover:text-gray-900 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-gray-900 transition">
            About
          </Link>

          <Link to="/services" className="hover:text-gray-900 transition">
            Services
          </Link>

          <Link to="/contact" className="hover:text-gray-900 transition">
            Contact
          </Link>
        </nav>

        {/* CTA Button (Important Upgrade) */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm font-medium transition"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 bg-white border-b border-gray-200">
          <div className="flex flex-col gap-5 text-gray-700 text-sm">

            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>

            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            {/* Mobile CTA */}
            <button
              onClick={() => {
                navigate("/contact")
                setMenuOpen(false)
              }}
              className="mt-4 bg-blue-600 text-white py-2 rounded-lg"
            >
              Book Consultation
            </button>

          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar