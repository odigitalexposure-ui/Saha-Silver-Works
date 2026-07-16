import { motion } from "framer-motion";
import { Sparkles, Phone, Mail, MapPin, Send } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      {/* Gold Glow */}
      <div className="absolute -top-40 left-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ================= TOP CONTENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}

          <div className="inline-flex items-center gap-3 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-6 py-3 backdrop-blur-xl">
            <Sparkles className="text-yellow-400" size={18} />

            <span className="text-xs uppercase tracking-[0.35em] text-yellow-300">
              Contact SAHA SILVER WORKS
            </span>
          </div>

          {/* Heading */}

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Let's Create Something
            <br />
            <span className="text-yellow-400">Beautiful Together</span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
            Whether you're looking for handcrafted silver jewellery, custom
            designs, or have an enquiry about our collections, our team is
            always ready to help you.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href="tel:+919836463348"
              className="flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-yellow-400"
            >
              <Phone size={20} />
              Call Now
            </a>

            <a
              href="mailto:sukantasaha81186@gmail.com"
              className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white/20 hover:scale-105"
            >
              <Mail size={20} />
              Email Us
            </a>
          </div>
        </motion.div>

        {/* ================= CONTACT SECTION ================= */}

        <div className="mt-24 grid gap-10 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[35px] border border-white/20 bg-white/10 p-8 backdrop-blur-2xl shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-white">Send Your Enquiry</h2>

            <p className="mt-3 text-gray-300">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <form className="mt-10 space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder-gray-400 outline-none backdrop-blur-xl focus:border-yellow-400"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder-gray-400 outline-none backdrop-blur-xl focus:border-yellow-400"
              />

              <input
                type="email"
                placeholder="Email Address (Optional)"
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder-gray-400 outline-none backdrop-blur-xl focus:border-yellow-400"
              />

              <textarea
                rows="6"
                placeholder="Write your enquiry..."
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder-gray-400 outline-none backdrop-blur-xl focus:border-yellow-400"
              ></textarea>

              <a
                href="https://wa.me/919836463348"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-green-500 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:bg-green-600"
              >
                <Send size={20} />
                Send on WhatsApp
              </a>
            </form>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[35px] border border-white/20 bg-white/10 p-8 backdrop-blur-2xl shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-white">Visit Our Store</h2>

            <p className="mt-4 text-gray-300">
              We welcome you to visit our workshop and explore our handcrafted
              silver jewellery collection.
            </p>

            <div className="mt-10 space-y-8">
              <a
                href="https://maps.google.com/?q=3+Smriti+Bhusan+Lane+Garanhata+Kolkata+700006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-yellow-400"
              >
                <MapPin className="text-yellow-400" />

                <div>
                  <h3 className="text-lg font-semibold text-white">Address</h3>

                  <p className="mt-2 text-gray-300 leading-7">
                    3 Smriti Bhusan Lane
                    <br />
                    Garanhata (Near Jora Mandir)
                    <br />
                    Kolkata - 700006
                  </p>
                </div>
              </a>

              <a
                href="tel:+919836463348"
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-yellow-400"
              >
                <Phone className="text-yellow-400" />

                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>

                  <p className="mt-2 text-gray-300">+91 9836463348</p>
                </div>
              </a>

              <a
                href="mailto:sukantasaha81186@gmail.com"
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-yellow-400"
              >
                <Mail className="text-yellow-400" />

                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>

                  <p className="mt-2 text-gray-300 break-all">
                    sukantasaha81186@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
