import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Achievements from "../components/Achievements";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import MatrixRain from "../components/MatrixRain";

const HomePage = () => {
  return (
    <div className="bg-black min-h-screen text-green-400 relative overflow-x-hidden">
      <MatrixRain />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Achievements />
        <Projects />
        <Blog />
        <Contact />

        {/* Footer */}
        <footer className="py-8 border-t border-green-500/30 text-center">
          <p className="text-green-500/60 font-mono text-sm">
            {"</"} Designed & Built by{" "}
            <span className="text-cyan-400">Redwan Ahmed</span> {"/>"}
          </p>
          <p className="text-green-500/40 font-mono text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved. | Stay Curious,
            Stay Secure.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
