import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "./testimonialData";

const Testimonials = () => {
  return (
    <section className="relative py-28 overflow-hidden italic">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="uppercase tracking-[0.35em] text-yellow-400 font-medium text-lg">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Trusted By
            <span className="text-amber-400/90"> Our Customers</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-100 leading-8">
            Every creation at SAHA SILVER WORKS is crafted with dedication,
            precision and elegance. Here's what our valued customers say.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.25,
                duration: 0.8,
              }}
              whileHover={{
                y: -15,
                scale: 1.03,
              }}
              className="relative overflow-hidden rounded-[35px]
              border border-amber-300/50 bg-black-700/10
              backdrop-blur-2xl
              p-8
              shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
            >
              {/* Quote Icon */}

              <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center">
                <Quote size={28} className="text-yellow-400" />
              </div>

              {/* Review */}

              <p className="mt-8 text-gray-200 leading-8 italic">
                "{item.review}"
              </p>

              {/* Rating */}

              <div className="mt-8 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#FACC15"
                    className="text-yellow-400"
                  />
                ))}
              </div>

              {/* Customer */}

              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="text-xl font-semibold text-white">
                  {item.name}
                </h3>

                <p className="text-amber-400/90">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
