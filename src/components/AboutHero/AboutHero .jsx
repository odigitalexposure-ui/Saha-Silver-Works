import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative flex min-h-screen items-start justify-center overflow-hidden px-6 pt-32 pb-12 sm:pt-36 md:pt-32 lg:items-center lg:pt-24">
      {/* Decorative Glow */}
      <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto w-full max-w-6xl text-center italic">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
                      group
                      mb-8
                      inline-flex
                      items-center
                      gap-3

                      rounded-full

                      border border-white/15

                      bg-gradient-to-br
                      from-white/10
                      via-white/[0.05]
                      to-slate-300/[0.03]

                      px-6
                      py-3

                      backdrop-blur-2xl

                      shadow-[0_10px_30px_rgba(0,0,0,.25)]

                      transition-all
                      duration-500

                      hover:border-yellow-400/40
                      hover:shadow-[0_0_25px_rgba(255,193,7,.2)]
                      "
        >
          <Sparkles className="text-yellow-400" size={18} />
          <span className="tracking-[0.3em] text-xs uppercase text-yellow-300">
            About Our Legacy
          </span>
        </motion.div>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          whileHover={{ y: -5 }}
          className="
group
relative

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
"
        >
          {/* Premium shine */}
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

group-hover:translate-x-[900px]
"
          />

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="
font-heading

text-3xl
md:text-4xl
lg:text-5xl

leading-none

tracking-wide

text-white
"
          >
            <span className="block">Our Legacy of</span>

            <span
              className="
block
mt-3

bg-gradient-to-r

from-yellow-200
via-yellow-400
to-yellow-200

bg-clip-text

text-transparent

drop-shadow-[0_0_18px_rgba(255,193,7,.35)]
"
            >
              Silver Excellence
            </span>

            <span className="block mt-3">Crafted Since Tradition</span>
          </motion.h1>

          {/* Decorative Divider */}
          <div
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="
mx-auto

mt-8

max-w-3xl

text-lg

leading-9

text-gray-200
"
          >
            For years,
            <span className="font-semibold text-yellow-400">
              SAHA SILVER WORKS
            </span>
            has preserved the timeless art of handcrafted silver jewellery.
            Every creation combines traditional craftsmanship, premium
            materials, and contemporary elegance to produce jewellery that
            reflects heritage, purity, and lasting beauty.
          </motion.p>

          {/* Feature Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="
mt-10

flex

flex-wrap

justify-center

gap-4

text-amber-50
"
          >
            <div className="glass-chip">✓ Traditional Craftsmanship</div>

            <div className="glass-chip">✓ 925 Sterling Silver</div>

            <div className="glass-chip">✓ Custom Jewellery</div>

            <div className="glass-chip">✓ Premium Finish</div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 1 }}
            className="mt-12 flex flex-wrap justify-center gap-5"
          >
            <Link
              to="/gallery"
              className="
group

flex

items-center

gap-3

rounded-full

bg-gradient-to-r

from-yellow-300
via-yellow-400
to-yellow-500

px-8
py-4

font-semibold

text-black

transition-all

duration-500

hover:scale-105

hover:shadow-[0_0_30px_rgba(255,193,7,.5)]
"
            >
              Explore Collection
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="
rounded-full

border border-white/15

bg-white/10

backdrop-blur-xl

px-8
py-4

text-white

transition-all

duration-500

hover:border-yellow-400

hover:text-yellow-300

hover:bg-yellow-500/5
"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4"
        >
          {[
            { value: "100%", label: "Authentic Silver" },
            { value: "Premium", label: "Craftsmanship" },
            { value: "Elegant", label: "Designs" },
            { value: "Trusted", label: "Quality" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-gradient-to-brfrom-white/10 via-white/[0.05]
              to-slate-300/[0.03] p-6 backdrop-blur-xl"
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
        animate={{ y: [5, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-14 w-8 justify-center rounded-full border border-white/30">
          <div className="mt-2 h-3 w-3 rounded-full bg-yellow-400"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
