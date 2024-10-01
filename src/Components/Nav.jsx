import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Nav = ({ setCurrentSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (section) => {
    setCurrentSection(section);
    setActiveSection(section);
    toggleMobileMenu();
  };

  return (
    <header className="bg-transparent text-white">
      <div className="mx-auto flex items-center justify-between p-5 md:p-8">
        <div
          className={`relative z-20 text-4xl font-bold ${isMobileMenuOpen ? "" : "text-yellow-400"}`}
        >
          Soheyl
        </div>

        {/* Desktop Menu */}
        <nav className="hidden space-x-20 text-3xl font-bold md:flex">
          {["Home", "Skills", "Work", "Contact"].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              onClick={() => handleLinkClick(section)}
              className={`nav-item ${activeSection === section ? "scale-125 text-yellow-400 transition-all" : ""}`}
            >
              {section}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="relative z-20 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 z-10 h-screen w-full bg-gray-700/50 p-4 backdrop-blur-lg md:hidden">
          <nav className="mt-32 flex flex-col items-center space-y-4 text-2xl font-bold">
            {["Home", "Skills", "Work", "Contact"].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                onClick={() => handleLinkClick(section)}
                className={`block ${activeSection === section ? "scale-125 text-yellow-400 transition-all" : ""}`}
              >
                {section}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
