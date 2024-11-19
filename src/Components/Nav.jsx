import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

const Nav = ({ setCurrentSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (section) => {
    setCurrentSection(section);
    setActiveSection(section);
    if (window.innerWidth < 768) {
      toggleMobileMenu();
    }
  };

  return (
    <header className="relative top-0 z-30 bg-transparent text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        {/* Logo */}
        <div
          className={`relative z-20 font-Imperial text-5xl tracking-wider transition-all duration-300 hover:text-yellow-400 md:text-6xl`}
        >
          <a href="#home" onClick={() => handleLinkClick("Home")}>
            Soheyl<span className="text-yellow-400">.</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden space-x-12 text-2xl font-extrabold md:flex">
          {["Home", "Skills", "Work", "Contact"].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              onClick={() => handleLinkClick(section)}
              className={`group relative transition-all duration-300 ${
                activeSection === section
                  ? "scale-110 text-yellow-400"
                  : "hover:text-gray-300"
              }`}
            >
              {section}
              <span
                className={`absolute left-0 top-full h-[3px] w-full origin-center scale-x-0 bg-yellow-400 transition-transform duration-300 group-hover:scale-x-100 ${
                  activeSection === section ? "scale-x-100" : ""
                }`}
              ></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="relative z-20 focus:outline-none md:hidden"
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? (
            <XIcon className="h-8 w-8 text-white" />
          ) : (
            <MenuIcon className="h-8 w-8 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-10 flex h-screen w-full flex-col items-center justify-center bg-black/50 text-center backdrop-blur-xl">
          <nav className="flex flex-col items-center space-y-12">
            {["Home", "Skills", "Work", "Contact"].map((section, index) => (
              <motion.a
                key={section}
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                href={`#${section.toLowerCase()}`}
                onClick={() => handleLinkClick(section)}
                className={`text-4xl font-extrabold text-white ease-in-out ${
                  activeSection === section
                    ? "scale-110 text-yellow-400"
                    : "h hover:scale-105"
                }`}
              >
                {section}
              </motion.a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
