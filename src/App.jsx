import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Scroll to top ONLY when navigating to Home ("/")
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures scrolling to top for Home only */}

      <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-between">
        <Navbar /> {/* Navbar remains fixed */}

        {/* Main Content */}
        <motion.div 
          className="flex-grow"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>

  
      </div>
    </Router>
  );
};

export default App;