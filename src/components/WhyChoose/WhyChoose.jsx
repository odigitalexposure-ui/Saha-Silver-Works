import { Gem, ShieldCheck, Sparkles, Award } from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: Gem,
    title: "Premium Silver",
    desc: "Crafted using premium quality silver that reflects brilliance and elegance.",
  },

  {
    icon: Award,
    title: "Master Craftsmanship",
    desc: "Every jewellery piece is handcrafted with precision and artistic excellence.",
  },

  {
    icon: Sparkles,
    title: "Luxury Designs",
    desc: "Timeless collections inspired by tradition and modern sophistication.",
  },

  {
    icon: ShieldCheck,
    title: "Trusted Quality",
    desc: "Committed to authenticity, durability and customer satisfaction.",
  },
];

const WhyChoose = () => {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center italic"
        >
          <span className="text-yellow-400 text-lg uppercase tracking-[0.4em]">
            Excellence
          </span>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Why Choose
            <span className="text-amber-400/90"> SAHA SILVER WORKS</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-100 leading-6 text-lg">
            Every creation embodies elegance, craftsmanship, and a commitment to
            timeless luxury.
          </p>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-8 italic">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,

                  duration: 0.8,
                }}
                whileHover={{
                  y: -15,

                  scale: 1.03,
                }}
                className="rounded-[35px]
                border border-amber-300/50 bg-black-700/10
                backdrop-blur-2xl
                p-10
                shadow-2xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center">
                  <Icon className="text-amber-400/90" size={32} />
                </div>

                <h3 className="mt-8 text-2xl text-amber-400/90 font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-100 leading-7">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
