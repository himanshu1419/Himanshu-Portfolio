import Hero from "../components/Hero";
import { motion } from "framer-motion";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
  <div>
    <Hero />

    {/* About Section */}
    <section id="about" className="py-16 px-6 bg-gray-800">
        <About />
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16 px-6 bg-gray-800">
        <Resume />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gray-800">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-800">
        <Contact />
      </section>
    </div>
  )
  
};

export default Home;