import { motion } from "framer-motion";
import {
  PencilRuler,
  Gem,
  Hammer,
  Sparkles,
  ShieldCheck,
  Gift,
} from "lucide-react";

const process = [
  {
    icon: PencilRuler,
    title: "Concept & Design",
    desc: "Every jewellery piece begins with thoughtful sketches inspired by elegance, tradition and modern craftsmanship.",
  },
  {
    icon: Gem,
    title: "Premium Silver Selection",
    desc: "Only carefully selected high-quality silver is used to ensure brilliance, durability and authenticity.",
  },
  {
    icon: Hammer,
    title: "Handcrafted by Experts",
    desc: "Our skilled artisans shape every design with precision, experience and attention to the smallest details.",
  },
  {
    icon: Sparkles,
    title: "Finishing & Polishing",
    desc: "Each creation receives a flawless mirror finish that enhances its luxurious appearance.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspection",
    desc: "Every piece undergoes careful inspection to meet our premium standards before reaching our customers.",
  },
  {
    icon: Gift,
    title: "Ready to Wear",
    desc: "Elegantly prepared and beautifully presented, ready to become part of your special moments.",
  },
];

const CraftProcess = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Decorative Glow */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl"></div>

      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-yellow-400 text-sm">
            Craftsmanship
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            From Vision to
            <span className="block text-yellow-400">Timeless Jewellery</span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-gray-300 leading-8 text-lg">
            Every masterpiece at
            <span className="text-yellow-400 font-semibold">
              {" "}
              SAHA SILVER WORKS{" "}
            </span>
            is carefully handcrafted through a refined process where creativity,
            precision and craftsmanship come together to create jewellery that
            lasts for generations.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">
          {/* Vertical Line */}

          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-yellow-500/0 via-yellow-400 to-yellow-500/0 lg:block"></div>

          <div className="space-y-16">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -80 : 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Card */}

                  <div className="w-full lg:w-5/12">
                    <div
                      className="
                      rounded-3xl
                      border
                      border-white/20
                      bg-white/10
                      backdrop-blur-2xl
                      p-8
                      transition-all
                      duration-500
                      hover:border-yellow-400/50
                      hover:bg-white/15
                      hover:-translate-y-2
                      hover:shadow-[0_20px_50px_rgba(234,179,8,0.15)]
                    "
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-black">
                        <Icon size={30} />
                      </div>

                      <h3 className="mt-6 text-2xl font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-4 leading-8 text-gray-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Circle */}

                  <div className="relative z-10 my-8 flex h-16 w-16 items-center justify-center rounded-full border-4 border-yellow-400 bg-black lg:my-0">
                    <span className="text-yellow-400 font-bold">
                      {index + 1}
                    </span>
                  </div>

                  <div className="hidden lg:block lg:w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftProcess;
