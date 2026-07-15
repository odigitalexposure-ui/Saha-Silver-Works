const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Premium Badge */}
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2 mb-8">
              <span className="h-2 w-2 rounded-full bg-yellow-400 mr-3 animate-pulse"></span>

              <span className="text-sm tracking-[0.25em] uppercase text-white/90">
                Premium Silver Craftsmanship
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">
              SAHA
              <br />
              <span className="text-yellow-400">SILVER</span>
              <br />
              WORKS
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-200">
              Timeless silver creations designed with precision, tradition, and
              exceptional craftsmanship. Every piece reflects elegance, purity,
              and the artistry that defines SAHA SILVER WORKS.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-yellow-400 hover:scale-105">
                Explore Collection
              </button>

              <button className="rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 font-semibold text-white transition hover:bg-white/20">
                Contact Us
              </button>
            </div>

            <div className="mt-14 flex flex-wrap gap-12">
              <div>
                <h3 className="text-3xl font-bold text-yellow-400">10+</h3>

                <p className="text-gray-300">Years Experience</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">1000+</h3>

                <p className="text-gray-300">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">100%</h3>

                <p className="text-gray-300">Quality Silver</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
