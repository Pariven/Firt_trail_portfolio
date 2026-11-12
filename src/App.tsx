import { motion, useScroll, useSpring } from "motion/react";
import { useLenis } from "./hooks/useLenis";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useLenis();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <div className="grain">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-maroon via-rose to-cream"
      />
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
