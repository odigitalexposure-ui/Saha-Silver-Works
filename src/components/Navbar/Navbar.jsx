import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-transparent backdrop-blur-xl shadow-xl py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Premium Logo */}

            <Link
              to="/"
              className="group flex items-center gap-3 transition-all duration-500"
            >
              {/* Logo */}

              <img
                src={assets.web_logo}
                alt="SAHA SILVER WORKS"
                className={`
      object-contain
      transition-all
      duration-500
      drop-shadow-[0_0_15px_rgba(255,255,255,.18)]
      group-hover:scale-110
      ${scrolled ? "h-10 w-10 lg:h-12 lg:w-12" : "h-14 w-14 lg:h-16 lg:w-16 ml-10"}
    `}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative font-medium transition-all duration-300 ${
                      isActive
                        ? "text-yellow-500"
                        : scrolled
                          ? "text-white hover:text-yellow-500"
                          : "text-white hover:text-yellow-400"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <Link
                to="/contact"
                className="rounded-full bg-yellow-500 px-6 py-2 font-semibold text-black transition-all duration-300 hover:bg-yellow-400 hover:scale-105 hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden rounded-lg p-2 transition ${
                scrolled
                  ? "bg-white/80 text-black shadow-md"
                  : "bg-white/10 backdrop-blur-md text-white"
              }`}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-4 right-4 z-50 transition-all duration-500 lg:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/95 backdrop-blur-xl shadow-2xl">
          <div className="py-3">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `mx-3 my-1 block rounded-xl px-5 py-4 font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-yellow-500 text-black"
                      : "text-gray-700 hover:bg-yellow-50 hover:translate-x-2"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="border-t p-5">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block rounded-full bg-yellow-500 py-4 text-center font-semibold text-black transition hover:bg-yellow-400 hover:scale-[1.02]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
