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
            className="max-w-5xl mx-auto text-center"
          >
            {/* Premium Badge */}
            <motion.div
              variants={fadeUp}
              custom={0.2}
              className="mx-auto mb-8 mt-24 inline-flex items-center rounded-full border border-white/20 bg-amber-700/10 px-5 py-2 backdrop-blur-xl shadow-lg shadow-yellow-500/10"
            >
              <span className="h-2 w-2 rounded-full bg-yellow-400 mr-3 animate-pulse"></span>

              <span className="text-sm tracking-[0.25em] uppercase text-white/90 italic">
                Premium Silver Craftsmanship
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.35}
              whileHover={{ y: -5 }}
              className="
                    group
                    relative
                    mt-8
                    overflow-hidden

                    rounded-[35px]

                    border border-white/15

                    bg-gradient-to-br
                    from-white/10
                    via-black/[0.05]
                    to-slate-300/[0.03]

                    backdrop-blur-2xl

                    p-8
                    md:p-14

                    shadow-[0_25px_70px_rgba(0,0,0,.35)]

                    transition-all
                    duration-700

                    hover:border-yellow-400/40
                    hover:shadow-[0_0_45px_rgba(255,193,7,.18)]
                    italic
                  "
            >
              <div
                className="
                    absolute

                    top-0
                    -left-32

                    h-full
                    w-24

                    rotate-12

                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent

                    transition-all
                    duration-[1800ms]

                    group-hover:translate-x-[850px]
                    "
              />
              <motion.h1
                variants={fadeUp}
                custom={0.4}
                className="
                      font-heading

                      text-4xl
                      md:text-4xl
                      lg:text-5xl

                      leading-none

                      text-white

                      tracking-wide
                      "
              >
                <span className="block">Timeless</span>

                <motion.span
                  variants={floating}
                  animate="animate"
                  className="
                block

                mt-3

                bg-gradient-to-r
                from-yellow-200
                via-yellow-400
                to-yellow-200

                bg-clip-text
                text-transparent

                drop-shadow-[0_0_20px_rgba(255,193,7,.4)]
                "
                >
                  Silver Jewellery
                </motion.span>

                <span className="block mt-3">Crafted for Generations</span>
              </motion.h1>
              {/* Decorativee Divider */}
              <motion.div
                variants={fadeUp}
                custom={0.5}
                className="
                    mx-auto

                    mt-8

                    h-[2px]

                    w-32

                    rounded-full

                    bg-gradient-to-r
                    from-transparent
                    via-yellow-400
                    to-transparent
                    "
              />

              <motion.p
                variants={fadeUp}
                custom={0.6}
                className="
                  mx-auto

                  mt-8

                  max-w-2xl

                  leading-9

                  text-lg

                  text-gray-200

                  font-body
                  "
              >
                Every masterpiece at
                <span className="font-semibold text-yellow-400">
                  {" "}
                  SAHA SILVER WORKS{" "}
                </span>
                is handcrafted by skilled artisans using traditional techniques
                and refined craftsmanship. Every design celebrates purity,
                elegance, and timeless beauty, creating jewellery that can be
                cherished for generations.
              </motion.p>
              <motion.div
                variants={fadeUp}
                custom={0.8}
                className="
                text-amber-50
mt-10

flex

flex-wrap

justify-center

gap-4
"
              >
                <div className="glass-chip">✓ 925 Sterling Silver</div>

                <div className="glass-chip">✓ Handmade Craftsmanship</div>

                <div className="glass-chip">✓ Custom Jewellery</div>
              </motion.div>
            </motion.div>

            {/* <motion.h1
              variants={fadeUp}
              custom={0.4}
              className="text-4xl font-semibold leading-[1.05] tracking-tight text-white/90 sm:text-5xl lg:text-5xl italic"
            >
              Timeless
              <br />
              <motion.span
                variants={floating}
                // animate="animate"
                className="inline-block text-amber-400/90"
              >
                Silver Jewellery
              </motion.span>
              <br />
              Crafted to Perfection
            </motion.h1> */}

            {/* <motion.p
              variants={fadeUp}
              custom={0.6}
              className="mx-auto mt-8 max-w-3xl text-m leading-6 text-gray-100 text-lg italic"
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
            </motion.p> */}

            {/* <motion.p
              variants={fadeUp}
              custom={0.6}
              className="mx-auto mt-8 max-w-3xl text-m leading-9 text-white"
            >
              {" "}
              Premium handcrafted silver jewellery in Kolkata.
            </motion.p> */}
            {/* <motion.div
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
                className="rounded-full bg-amber-400/90 px-8 py-3 font-semibold text-black transition italic"
              >
                Explore Collection
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,.18)",
                }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border border-white/30 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-md italic"
              >
                Contact Us
              </motion.button>
            </motion.div> */}
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
              custom={1}
              className="
mt-12

flex

justify-center

gap-6

flex-wrap
"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(255,193,7,.5)",
                }}
                className="
rounded-full

bg-gradient-to-r
from-yellow-300
via-yellow-400
to-yellow-500

px-8
py-4

font-semibold

text-black
"
              >
                Explore Collection
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                className="
rounded-full

border border-white/20

bg-white/10

backdrop-blur-xl

px-8
py-4

text-white

hover:border-yellow-400

hover:text-yellow-300
"
              >
                Book Consultation
              </motion.button>
            </motion.div>
            <motion.div
              variants={fadeUp}
              custom={1.2}
              className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-12 sm:grid-cols-3 mx-auto italic"
            >
              {/* Years */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-white/15 bg-black-700/10 backdrop-blur-xl p-8 text-center shadow-xl shadow-black/20 hover:border-yellow-400/40 shadow-yellow-500/20"
              >
                <h3 className="text-4xl font-extrabold text-yellow-400 ">
                  10+
                </h3>

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
                className="rounded-3xl border border-white/15 bg-black-700/10 backdrop-blur-xl p-8 text-center shadow-xl shadow-black/20 hover:border-yellow-400/40 shadow-yellow-500/20"
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
                className="rounded-3xl border border-white/15 bg-black-700/10 backdrop-blur-xl p-8 text-center shadow-xl shadow-black/20 hover:border-yellow-400/40 shadow-yellow-500/20"
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
