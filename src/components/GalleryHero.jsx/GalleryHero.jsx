import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Images, ChevronDown } from "lucide-react";

const GalleryHero = () => {
  return (
    <section className="relative flex min-h-screen items-start justify-center overflow-hidden px-6 pt-32 pb-16 lg:items-center lg:pt-24">
      {/* Luxury Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -left-32 top-16 h-[380px] w-[380px] rounded-full bg-yellow-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-white/10 blur-[140px]"
      />

      {/* Floating Particles */}

      {[...Array(12)].map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            delay: index * 0.4,
          }}
          className="absolute h-2 w-2 rounded-full bg-yellow-400/50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-white/10 px-6 py-3 backdrop-blur-xl"
        >
          <Sparkles size={18} className="text-yellow-400" />

          <span className="text-xs uppercase tracking-[0.35em] text-yellow-300">
            Premium Silver Collection
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
        >
          Discover Our
          <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            Exquisite Gallery
          </span>
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300"
        >
          Every jewellery piece at
          <span className="font-semibold text-white"> SAHA SILVER WORKS </span>
          reflects timeless artistry, exceptional craftsmanship and premium
          quality. Explore our exclusive handcrafted silver creations designed
          to celebrate elegance and tradition.
        </motion.p>

        {/* Glass Information Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 1,
          }}
          className="mx-auto mt-12 max-w-4xl rounded-[30px] border border-white/15 bg-white/10 p-8 backdrop-blur-2xl"
        >
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <Images className="mx-auto text-yellow-400" size={34} />

              <h3 className="mt-4 text-xl font-semibold text-white">
                Luxury Designs
              </h3>

              <p className="mt-2 text-gray-300">
                Beautiful handcrafted collections inspired by timeless elegance.
              </p>
            </div>

            <div>
              <Sparkles className="mx-auto text-yellow-400" size={34} />

              <h3 className="mt-4 text-xl font-semibold text-white">
                Premium Craftsmanship
              </h3>

              <p className="mt-2 text-gray-300">
                Every piece is created with precision, passion and unmatched
                quality.
              </p>
            </div>

            <div>
              <ArrowRight className="mx-auto text-yellow-400" size={34} />

              <h3 className="mt-4 text-xl font-semibold text-white">
                Exclusive Collection
              </h3>

              <p className="mt-2 text-gray-300">
                Discover jewellery designed for every memorable occasion.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Buttons */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
            duration: 1,
          }}
          className="mt-14 flex flex-wrap justify-center gap-5"
        >
          <Link
            to="/contact"
            className="group flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:shadow-[0_0_40px_rgba(250,204,21,0.45)]"
          >
            Contact Us
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <a
            href="tel:+919836463348"
            className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            Call Now
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown size={36} className="text-yellow-400" />
      </motion.div>
    </section>
  );
};

export default GalleryHero;
