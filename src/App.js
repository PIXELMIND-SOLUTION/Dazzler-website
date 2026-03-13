import { useState, useEffect, useRef } from "react";
import TravelingCar from "./components/TravelingCar";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import StatsBand from "./components/StatsBand";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { SERVICES, PKG } from "./data/constants";
import "./styles/global.css";

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [docHeight, setDocHeight] = useState(6000);
  const [selPkg, setSelPkg] = useState(1);
  const rootRef = useRef();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const measure = () => setDocHeight(document.documentElement.scrollHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    setTimeout(measure, 400);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const scrollPct = Math.min(
    scrollY / Math.max(docHeight - window.innerHeight, 1),
    0
  );

  return (
    <div
      ref={rootRef}
      className="dS"
      style={{
        background: "#06060e",
        color: "#f0ead0",
        overflowX: "hidden",
      }}
    >
      <TravelingCar scrollY={scrollY} docHeight={docHeight} />

      {/* PROGRESS BAR */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 2,
          zIndex: 1001,
          width: `${scrollPct * 100}%`,
          background: "linear-gradient(90deg,#e8b840,#fff8b0,#e8b840)",
          boxShadow: "0 0 10px rgba(232,184,64,.7)",
          transition: "width .08s linear",
        }}
      />

      <Navbar />
      <Hero />
      <Services />
      <StatsBand />
      <Process />
      <Pricing selPkg={selPkg} setSelPkg={setSelPkg} />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}