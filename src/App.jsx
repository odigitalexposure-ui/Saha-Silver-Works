import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Home/Hero";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
