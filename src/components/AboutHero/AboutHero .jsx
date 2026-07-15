import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Decorative Glow */}
      <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-6 py-2 backdrop-blur-xl"
        >
          <Sparkles className="text-yellow-400" size={18} />
          <span className="tracking-[0.3em] text-xs uppercase text-yellow-300">
            About Our Legacy
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
        >
          Crafting Timeless
          <br />
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            Silver Jewellery
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 1 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300"
        >
          At <span className="font-semibold text-white">SAHA SILVER WORKS</span>
          , every creation reflects dedication, artistry, and premium
          craftsmanship. We blend traditional techniques with modern elegance to
          create handcrafted silver jewellery that celebrates every occasion.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <Link
            to="/gallery"
            className="group flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
          >
            Explore Collection
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            to="/contact"
            className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {[
            { value: "100%", label: "Authentic Silver" },
            { value: "Premium", label: "Craftsmanship" },
            { value: "Elegant", label: "Designs" },
            { value: "Trusted", label: "Quality" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-yellow-400">
                {item.value}
              </h3>

              <p className="mt-2 text-sm uppercase tracking-widest text-gray-300">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-14 w-8 justify-center rounded-full border border-white/30">
          <div className="mt-2 h-3 w-3 rounded-full bg-yellow-400"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
