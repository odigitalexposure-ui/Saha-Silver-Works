const AboutPreview = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-5 py-2 text-sm uppercase tracking-[0.25em] text-yellow-300">
            Our Heritage
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Crafting Silver with
            <span className="text-yellow-400"> Passion & Precision</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-200">
            At SAHA SILVER WORKS, every creation is inspired by timeless
            craftsmanship and refined elegance. Our passion lies in transforming
            premium silver into beautifully designed pieces that reflect
            quality, sophistication, and enduring beauty.
          </p>
        </div>

        {/* Content */}
        <div className="mt-20 grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Side */}
          <div className="rounded-[35px] border border-white/20 bg-white/10 backdrop-blur-2xl p-10 shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
            <h3 className="text-3xl font-semibold text-white">
              Excellence in Every Detail
            </h3>

            <p className="mt-6 text-gray-200 leading-8">
              Every silver piece is carefully crafted to maintain exceptional
              quality, elegant finishing, and timeless aesthetics. Our
              dedication to precision ensures that every design reflects
              sophistication and lasting value.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              <div className="rounded-2xl bg-white/10 p-6">
                <h4 className="text-4xl font-bold text-yellow-400">99.9%</h4>

                <p className="mt-2 text-gray-300">Premium Silver Purity</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6">
                <h4 className="text-4xl font-bold text-yellow-400">100%</h4>

                <p className="mt-2 text-gray-300">Quality Focused</p>
              </div>
            </div>
          </div>

          {/* Right Side */}

          <div className="grid gap-6">
            <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 transition duration-500 hover:bg-white/15">
              <h4 className="text-2xl font-semibold text-white">
                Timeless Craftsmanship
              </h4>

              <p className="mt-4 text-gray-300 leading-7">
                Every design is created with careful attention to detail,
                blending traditional craftsmanship with contemporary elegance.
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 transition duration-500 hover:bg-white/15">
              <h4 className="text-2xl font-semibold text-white">
                Elegant Designs
              </h4>

              <p className="mt-4 text-gray-300 leading-7">
                Our collections are designed to complement every occasion with
                sophistication, beauty, and timeless appeal.
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 transition duration-500 hover:bg-white/15">
              <h4 className="text-2xl font-semibold text-white">
                Trusted Quality
              </h4>

              <p className="mt-4 text-gray-300 leading-7">
                Quality, authenticity, and customer satisfaction remain at the
                heart of everything we create.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
