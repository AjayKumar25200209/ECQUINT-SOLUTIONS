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
        "bg-[#0B0F19]/90 backdrop-blur border-b border-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="text-lg font-semibold tracking-tight cursor-pointer"
        >
          Ecquint<span className="text-[#2563EB]">.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-gray-400">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-white transition">
            About
          </Link>
          <Link to="/talent" className="hover:text-white transition">
            Talent
          </Link>
          <Link to="/hiring" className="hover:text-white transition">
            Hiring Teams
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 bg-[#0B0F19] border-b border-gray-800">
          <div className="flex flex-col gap-5 text-gray-300 text-sm">

            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>

            <Link to="/talent" onClick={() => setMenuOpen(false)}>
              Talent
            </Link>

            <Link to="/hiring" onClick={() => setMenuOpen(false)}>
              Hiring Teams
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar