import { assets } from "../assets/assets";
import AboutPreview from "../components/About/AboutPreview";
import ContactCTA from "../components/ContactCTA/ContactCTA";
import Hero from "../components/Home/Hero";
import Testimonials from "../components/Testimonials/Testimonials ";
import WhyChoose from "../components/WhyChoose/WhyChoose";

const Home = () => {
  return (
    <main className="relative">
      {/* Fixed Background */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${assets.web_bg})`,
        }}
      />

      {/* Overlay */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-tr from-black/10 via-black/70 to-black/90" />

      {/* Scrolling Content */}
      <div className="relative z-10">
        <Hero />
        <AboutPreview />
        <WhyChoose />
        <Testimonials />
        <ContactCTA />

        {/* More sections */}
        {/* <Gallery /> */}
        {/* <Testimonials /> */}
        {/* <Contact /> */}
      </div>
    </main>
  );
};

export default Home;
