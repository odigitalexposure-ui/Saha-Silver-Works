import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  }),
};

const floating = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="flex justify-center">
          {/* Left Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-3xl text-center"
          >
            {/* Premium Badge */}
            <motion.div
              variants={fadeUp}
              custom={0.2}
              className="mx-auto mb-8 mt-24 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-xl shadow-lg shadow-yellow-500/10"
            >
              <span className="h-2 w-2 rounded-full bg-yellow-400 mr-3 animate-pulse"></span>

              <span className="text-sm tracking-[0.25em] uppercase text-white/90">
                Premium Silver Craftsmanship
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={0.4}
              className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Timeless
              <br />
              <motion.span
                variants={floating}
                // animate="animate"
                className="inline-block text-yellow-400"
              >
                Silver Jewellery
              </motion.span>
              <br />
              Crafted to Perfection
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={0.6}
              className="mx-auto mt-8 max-w-3xl text-m leading-9 text-white"
            >
              At{" "}
              <span className="font-semibold text-amber-400">
                SAHA SILVER WORKS
              </span>
              , we create premium handcrafted silver jewellery that combines
              traditional craftsmanship with contemporary elegance. Every piece
              is thoughtfully designed to reflect purity, sophistication, and
              lasting beauty. Explore exclusive silver rings, chains, pendants,
              bangles, customized jewellery, and gemstone collections crafted
              with precision
            </motion.p>

            {/* <motion.p
              variants={fadeUp}
              custom={0.6}
              className="mx-auto mt-8 max-w-3xl text-m leading-9 text-white"
            >
              {" "}
              Premium handcrafted silver jewellery in Kolkata.
            </motion.p> */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="mt-10 flex flex-wrap justify-center gap-5"
            >
              {" "}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 30px rgba(250,204,21,.45)",
                }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-yellow-500 px-8 py-3 font-semibold text-black transition"
              >
                Explore Collection
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,.18)",
                }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border border-white/30 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-md"
              >
                Contact Us
              </motion.button>
            </motion.div>
            {/* <motion.div
              variants={fadeUp}
              custom={1.2}
              className="mt-16 flex flex-wrap justify-center gap-10 md:gap-16"
            >
              {" "}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.04,
                }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/10 bg-white/10 px-8 py-5 backdrop-blur-xl"
              >
                <h3 className="text-3xl font-bold text-yellow-400">10+</h3>
                <p className="mt-2 text-gray-300">Years Experience</p>
              </motion.div>
              <div>
                <h3 className="text-3xl font-bold text-yellow-400">1000+</h3>

                <p className="text-gray-300">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-yellow-400">100%</h3>

                <p className="text-gray-300">Quality Silver</p>
              </div>
            </motion.div> */}
            <motion.div
              variants={fadeUp}
              custom={1.2}
              className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-12 sm:grid-cols-3 mx-auto"
            >
              {/* Years */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-8 text-center shadow-xl shadow-black/20 hover:border-yellow-400/40 hover:shadow-yellow-500/20"
              >
                <h3 className="text-4xl font-extrabold text-yellow-400">10+</h3>

                <div className="mx-auto my-4 h-px w-12 bg-yellow-400/40"></div>

                <p className="text-gray-300 font-medium tracking-wide">
                  Years Experience
                </p>
              </motion.div>

              {/* Customers */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-8 text-center shadow-xl shadow-black/20 hover:border-yellow-400/40 hover:shadow-yellow-500/20"
              >
                <h3 className="text-4xl font-extrabold text-yellow-400">
                  1000+
                </h3>

                <div className="mx-auto my-4 h-px w-12 bg-yellow-400/40"></div>

                <p className="text-gray-300 font-medium tracking-wide">
                  Happy Customers
                </p>
              </motion.div>

              {/* Silver */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-8 text-center shadow-xl shadow-black/20 hover:border-yellow-400/40 hover:shadow-yellow-500/20"
              >
                <h3 className="text-4xl font-extrabold text-yellow-400">
                  100%
                </h3>

                <div className="mx-auto my-4 h-px w-12 bg-yellow-400/40"></div>

                <p className="text-gray-300 font-medium tracking-wide">
                  Pure Silver
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
