import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import Icons from "./Icons";
import { AppContext, AppContextType } from "../Context/Context";
import { Link } from "react-router";

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { section, setSection, setLoading } =
    useContext<AppContextType>(AppContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (newSection: string) => {
    setSection(newSection);
    if (section !== newSection && newSection !== "Contact") {
      setLoading(true);
    }
    if (window.innerWidth < 768) {
      toggleMobileMenu();
    }
  };

  return (
    <header className="relative top-0 z-30 text-gray-800 dark:bg-transparent dark:text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        {/* Logo */}
        <div className="font-Imperial relative z-20 flex text-5xl tracking-wider transition-colors duration-500 hover:text-pink-500 md:text-6xl dark:hover:text-yellow-400">
          <h1
            onClick={() => {
              if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark");
                return;
              }
              document.documentElement.classList.add("dark");
            }}
          >
            Soheyl
            <span className="text-pink-500 dark:text-yellow-400">.</span>
          </h1>
          <div className="self-center text-3xl"></div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden space-x-12 text-2xl font-extrabold md:flex">
          {["Home", "Skills", "Work", "Contact"].map((navSection) => (
            <Link
              key={navSection}
              to={`#${navSection.toLowerCase()}`}
              onClick={() => handleLinkClick(navSection)}
              className={`group relative transition-all duration-500 ${
                section === navSection
                  ? "scale-110 text-pink-500 dark:text-yellow-400"
                  : "hover:text-gray-500 dark:hover:text-gray-300"
              }`}
            >
              {navSection}
              <span
                className={`absolute top-full left-0 h-[3px] w-full origin-center scale-x-0 bg-pink-500 transition-transform duration-300 group-hover:scale-x-100 dark:bg-yellow-400 ${
                  section === navSection ? "scale-x-100" : ""
                }`}
              ></span>
            </Link>
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
              {["Home", "Skills", "Work", "Contact"].map(
                (navSection, index) => (
                  <motion.a
                    key={navSection}
                    initial={{ opacity: 0, translateY: 20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    href={`#${navSection.toLowerCase()}`}
                    onClick={() => handleLinkClick(navSection)}
                    className={`text-4xl font-extrabold text-gray-800 dark:text-white ${
                      section === navSection
                        ? "scale-110 text-pink-500 dark:text-yellow-400"
                        : "hover:scale-105"
                    }`}
                  >
                    {navSection}
                  </motion.a>
                ),
              )}
            </nav>
            <Icons />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
