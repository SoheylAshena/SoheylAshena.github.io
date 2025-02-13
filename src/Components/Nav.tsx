import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

import Icons from "./Icons";

interface NavProps {
  setCurrentSection: (section: string) => void;
}

const Nav: React.FC<NavProps> = ({ setCurrentSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("Home");
  const [isDark, setIsDark] = useState<boolean>(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      localStorage.getItem("theme") === null
    );
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleDark = () => {
    setIsDark((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (section: string) => {
    setCurrentSection(section);
    setActiveSection(section);
    if (window.innerWidth < 768) {
      toggleMobileMenu();
    }
  };

  return (
    <header className="relative top-0 z-30 text-gray-800 dark:bg-transparent dark:text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        {/* Logo */}
        <div
          onClick={toggleDark}
          className="relative z-20 flex font-Imperial text-5xl tracking-wider transition-colors duration-500 hover:text-pink-500 md:text-6xl dark:hover:text-yellow-400"
        >
          <a href="#home">
            Soheyl
            <span className="text-pink-500 dark:text-yellow-400">.</span>
          </a>
          <div className="self-center text-3xl">
            {isDark ? <FaSun /> : <FaMoon />}
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden space-x-12 text-2xl font-extrabold md:flex">
          {["Home", "Skills", "Work", "Contact"].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              onClick={() => handleLinkClick(section)}
              className={`group relative transition-all duration-500 ${
                activeSection === section
                  ? "scale-110 text-pink-500 dark:text-yellow-400"
                  : "hover:text-gray-500 dark:hover:text-gray-300"
              }`}
            >
              {section}
              <span
                className={`absolute left-0 top-full h-[3px] w-full origin-center scale-x-0 bg-pink-500 transition-transform duration-300 group-hover:scale-x-100 dark:bg-yellow-400 ${
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
            <RxCross1 className="h-8 w-8 text-gray-800 dark:text-white" />
          ) : (
            <CiMenuBurger className="h-8 w-8 text-gray-800 dark:text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ translateX: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-10 flex h-screen w-full flex-col items-center justify-center gap-10 bg-white/80 text-center backdrop-blur-md transition-colors duration-500 dark:bg-gray-950/80"
          >
            <nav className="flex flex-col items-center space-y-12">
              {["Home", "Skills", "Work", "Contact"].map((section, index) => (
                <motion.a
                  key={section}
                  initial={{ opacity: 0, translateY: 20 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  href={`#${section.toLowerCase()}`}
                  onClick={() => handleLinkClick(section)}
                  className={`text-4xl font-extrabold text-gray-800 dark:text-white ${
                    activeSection === section
                      ? "scale-110 text-pink-500 dark:text-yellow-400"
                      : "hover:scale-105"
                  }`}
                >
                  {section}
                </motion.a>
              ))}
            </nav>
            <Icons />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
