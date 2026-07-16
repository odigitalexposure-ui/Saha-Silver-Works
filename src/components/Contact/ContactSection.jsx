import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { assets } from "../../assets/assets";

const ContactSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Visit Our
            <span className="text-yellow-400"> Showroom</span>
          </h2>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto leading-8">
            Experience handcrafted silver jewellery personally. Visit our
            showroom and discover premium collections, timeless craftsmanship
            and elegant custom designs.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* ================= LEFT ================= */}

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative flex items-center justify-center overflow-hidden rounded-[35px] border border-white/20 bg-white/10 p-6 backdrop-blur-2xl shadow-[0_15px_50px_rgba(0,0,0,0.35)]"
          >
            {/* Gold Glow */}
            <div className="absolute -left-24 -top-24 h-60 w-60 rounded-full bg-yellow-500/10 blur-[120px]" />

            <div className="absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-white/10 blur-[120px]" />

            {/* Card Container */}
            <div className="relative flex w-full items-center justify-center rounded-3xl bg-white/5 p-4 backdrop-blur-md">
              <img
                src={assets.visiting_card_img}
                alt="SAHA SILVER WORKS Visiting Card"
                className="
        w-full
        max-w-[560px]

        rounded-2xl

        object-contain

        transition-all
        duration-700

        group-hover:scale-105
        group-hover:rotate-[0.5deg]

        drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]
      "
              />
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[35px] border border-white/20 bg-white/10 backdrop-blur-2xl p-6 shadow-2xl"
          >
            {/* Map */}

            <div className="overflow-hidden rounded-3xl border border-white/10">
              {/* Replace the iframe below with your own Google Map iframe */}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4089617234185!2d88.4317045!3d22.6011986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02757851c9bc15%3A0xf13f0c44576e7473!2sSaha%20Jewellers%20-%20Gold%20%26%20Silver%20%26%20Gems%20Jewellery%20Shop%20in%20Kestopur%2C%20Rajarhat%2C%20Lake%20Town%2C%20Salt%20Lake!5e0!3m2!1sen!2sin!4v1784195733639!5m2!1sen!2sin"
                className="h-[300px] w-full rounded-2xl border-0 md:h-[380px]"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* Address */}

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-yellow-400" size={24} />

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    SAHA SILVER WORKS
                  </h3>

                  <p className="mt-4 leading-8 text-gray-300">
                    3 Smriti Bhusan Lane
                    <br />
                    Garanhata
                    <br />
                    Kolkata
                    <br />
                    Landmark : Jora Mandir
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}

            <a
              href="https://maps.google.com/?q=3+Smriti+Bhusan+Lane+Garanhata+Kolkata"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex items-center justify-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
            >
              <Navigation size={20} />
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
