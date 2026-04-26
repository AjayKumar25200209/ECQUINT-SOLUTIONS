import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ESC to close mobile menu
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white border-b border-gray-200 shadow-sm"
          : "bg-white"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        {/* LOGO (FIXED) */}
        <button
          onClick={() => {
            navigate("/");
            setMenuOpen(false);
          }}
          className="text-lg font-semibold tracking-tight text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#e4332d] rounded"
        >
          Ecquint<span className="text-blue-600">.</span>
        </button>

        {/* DESKTOP NAV */}
        <nav
          className="hidden md:flex items-center gap-10 text-sm text-gray-600"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              aria-current={location.pathname === link.path ? "page" : undefined}
              className={`transition focus:outline-none focus:ring-2 focus:ring-[#e4332d] rounded px-1 ${location.pathname === link.path
                  ? "text-[#e4332d] font-medium"
                  : "hover:text-gray-900"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#e4332d] hover:bg-[#c62e28] text-white px-5 py-2 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e4332d]"
          >
            Book Consultation
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#e4332d] rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="menu"
          className="md:hidden px-6 pb-6 pt-2 bg-white border-b border-gray-200"
        >
          <div className="flex flex-col gap-5 text-gray-700 text-sm">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                role="menuitem"
                onClick={() => setMenuOpen(false)}
                className={`focus:outline-none focus:ring-2 focus:ring-[#e4332d] rounded ${location.pathname === link.path
                    ? "text-[#e4332d] font-medium"
                    : ""
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* MOBILE CTA */}
            <button
              onClick={() => {
                navigate("/contact");
                setMenuOpen(false);
              }}
              className="mt-4 bg-[#e4332d] text-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e4332d]"
            >
              Book Consultation
            </button>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;