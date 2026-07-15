import { assets } from "../assets/assets";
import AboutHero from "../components/AboutHero/AboutHero ";
import ContactCTA from "../components/ContactCTA/ContactCTA";
import CraftProcess from "../components/CraftProcess/CraftProcess";

const About = () => {
  return (
    <main className="relative">
      {/* Fixed Background */}

      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${assets.home_bg})`,
        }}
      />

      {/* Overlay */}

      <div className="fixed inset-0 -z-10 bg-linear-to-br from-black/70 via-black/40 to-black/70" />

      {/* Page Content */}

      <div className="relative z-10">
        <AboutHero />
        <CraftProcess />
        <ContactCTA />
      </div>
    </main>
  );
};

export default About;
