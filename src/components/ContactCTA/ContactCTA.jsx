import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px]
          border border-amber-300/50 bg-black-700/10
          backdrop-blur-2xl
          shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
        >
          {/* Decorative Glow */}
          <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-yellow-500/20 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative z-10 px-8 py-16 md:px-16 lg:px-20 text-center italic">
            <span className="uppercase tracking-[0.35em] text-amber-400/90 font-medium">
              Let's Create Something Beautiful
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Discover the Beauty of
              <span className="text-amber-400/90">
                {" "}
                Premium Silver Craftsmanship
              </span>
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-gray-100 text-lg leading-8">
              Whether you're looking for elegant silver jewellery, custom
              creations, or timeless designs, our team is ready to help you find
              the perfect piece.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="group flex items-center gap-3 rounded-full
                bg-amber-400/90 px-8 py-4 font-semibold text-black
                transition-all duration-300 hover:scale-105 hover:bg-amber-400"
              >
                Contact Us
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="tel:+9836463348"
                className="flex items-center gap-3 rounded-full
                border border-white/20
                bg-white/10
                px-8 py-4
                text-white
                backdrop-blur-xl
                transition-all duration-300
                hover:bg-white/20"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href="mailto:sukantasaha81186@gmail.com"
                className="flex items-center gap-3 rounded-full
  border border-white/20
  bg-white/10
  px-8 py-4
  text-white
  backdrop-blur-xl
  transition-all duration-300
  hover:bg-white/20 hover:scale-105"
              >
                <Mail size={20} />
                Email Us
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-10 text-gray-300">
              {/* <a
                href="tel:+919836463348"
                className="flex items-center gap-3 transition hover:text-yellow-400"
              >
                <Phone className="text-yellow-400" size={20} />
                <span>+91 9836463348</span>
              </a> */}

              <a
                href="mailto:sukantasaha81186@gmail.com"
                className="flex items-center gap-3 transition hover:text-yellow-400"
              >
                <Mail className="text-yellow-400" size={20} />
                <span>sukantasaha81186@gmail.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
