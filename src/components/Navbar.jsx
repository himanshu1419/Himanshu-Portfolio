import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top when clicking "Home"
  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      navigate("/"); // Navigate to Home first
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 300);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu
  };

  // Scroll to specific section inside Home
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo - Clicking navigates to Home and scrolls to top */}
        <h1
          className="text-2xl font-bold cursor-pointer text-amber-400 w-auto"
          onClick={handleHomeClick}
        >
          Himanshu Negi
        </h1>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        <ul
          className={`absolute md:static bg-gray-800 md:bg-transparent top-16 left-0 w-full md:flex md:justify-center md:space-x-10 p-5 md:p-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {/* Home Button */}
          <li className="hover:text-blue-400 text-center md:text-left p-2">
            <button onClick={handleHomeClick} className="focus:outline-none">
              Home
            </button>
          </li>

          {/* Section Buttons (About, Resume, Projects, Contact) */}
          {["about", "resume", "projects", "contact"].map((item) => (
            <li
              key={item}
              className="hover:text-blue-400 text-center md:text-left p-2"
            >
              <button
                onClick={() => scrollToSection(item)}
                className="focus:outline-none"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
