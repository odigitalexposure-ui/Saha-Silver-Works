import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../../assets/assets";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative pt-24 pb-8 overflow-hidden italic ">
      {/* Background Glow */}
      <div className="absolute -top-20 left-10 h-72 w-72 rounded-full border border-amber-300/50 bg-black-700/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="rounded-[35px]  border border-amber-300/50 bg-black-700/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] overflow-hidden">
          <div className="grid gap-12 lg:grid-cols-4 p-10 lg:p-14">
            {/* ================= Brand ================= */}

            <div>
              {/* <h2 className="text-3xl font-bold text-white">
                SAHA
                <span className="text-yellow-400"> SILVER WORKS</span>
              </h2> */}

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
       "h-14 w-14 lg:h-16 lg:w-16 ml-10"}
    `}
                />
              </Link>

              <p className="mt-2 text-yellow-300 font-medium">
                Proprietor: Sukanta Saha
              </p>

              <p className="mt-6 leading-8 text-gray-300">
                Crafting elegant handcrafted silver jewellery with timeless
                artistry, premium quality and unmatched craftsmanship for every
                special occasion.
              </p>

              {/* Social Icons */}

              <div className="flex gap-4 mt-8">
                <a
                  href="#"
                  className="h-11 w-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl flex items-center justify-center text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:scale-110"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="h-11 w-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl flex items-center justify-center text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:scale-110"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://wa.me/919836463348"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl flex items-center justify-center text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:scale-110"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* ================= Navigation ================= */}

            <div>
              <h3 className="text-xl font-semibold text-white">Quick Links</h3>

              <div className="mt-6 flex flex-col gap-4">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    className={({ isActive }) =>
                      `relative w-fit transition-all duration-300 ${
                        isActive
                          ? "text-yellow-400"
                          : "text-gray-300 hover:text-yellow-400"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* <div>
              <h3 className="text-xl font-semibold text-white">Quick Links</h3>

              <div className="mt-6 flex flex-col gap-4">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `transition duration-300 ${
                        isActive
                          ? "text-yellow-400"
                          : "text-gray-300 hover:text-yellow-400"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div> */}

            {/* ================= Collections ================= */}

            <div>
              <h3 className="text-xl font-semibold text-white">
                Our Collections
              </h3>

              <div className="mt-6 flex flex-col gap-4 text-gray-300">
                <span>Silver Rings</span>
                <span>Necklaces</span>
                <span>Bracelets</span>
                <span>Earrings</span>
                <span>Anklets</span>
                <span>Custom Jewellery</span>
              </div>
            </div>

            {/* ================= Contact ================= */}

            <div>
              <h3 className="text-xl font-semibold text-white">Contact Us</h3>

              <div className="mt-6 flex flex-col gap-6">
                <a
                  href="https://maps.google.com/?q=3 Smriti Bhusan Lane Garanhata Kolkata 700006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 text-gray-300 transition hover:text-yellow-400"
                >
                  <FaMapMarkerAlt className="mt-1 text-yellow-400" />

                  <span>
                    3 Smriti Bhusan Lane
                    <br />
                    Garanhata (Near Jora Mandir)
                    <br />
                    Kolkata - 700006
                  </span>
                </a>

                <a
                  href="tel:+919836463348"
                  className="flex gap-3 text-gray-300 transition hover:text-yellow-400"
                >
                  <FaPhoneAlt className="mt-1 text-yellow-400" />

                  <span>+91 9836463348</span>
                </a>

                <a
                  href="mailto:sukantasaha81186@gmail.com"
                  className="flex gap-3 text-gray-300 transition hover:text-yellow-400"
                >
                  <FaEnvelope className="mt-1 text-yellow-400" />

                  <span>sukantasaha81186@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}

          <div className="border-t border-white/10 px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} SAHA SILVER WORKS. All Rights
              Reserved.{" "}
              <a
                href="https://www.teamdeoskolkata.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-yellow-400  transition-colors duration-300 ml-1"
              >
                Digital Exposure Online Service
              </a>
              .
            </p>

            <p className="text-sm text-yellow-400 text-center">
              Crafted with Passion • Designed for Elegance
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
