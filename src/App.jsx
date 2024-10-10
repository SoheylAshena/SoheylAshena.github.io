import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Background from "./Components/Background";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import data from "./data";
import { h1 } from "framer-motion/client";

const App = () => {
  const [currentSection, setCurrentSection] = useState("Home");
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0 },
  };

  const pageTransition = { duration: 0.5 };

  const renderSection = () => {
    switch (currentSection) {
      case "Home":
        return (
          <Main
            data={data}
            onLoad={() => setLoading(false)}
            loading={loading}
          />
        );
      case "Skills":
        return (
          <Skills
            data={data}
            onLoad={() => setLoading(false)}
            loading={loading}
          />
        );
      case "Work":
        return (
          <Work
            data={data}
            onLoad={() => setLoading(false)}
            loading={loading}
          />
        );
      case "Contact":
        return (
          <Contact
            data={data}
            onLoad={() => setLoading(false)}
            loading={loading}
          />
        );
      default:
        return (
          <Main
            data={data}
            onLoad={() => setLoading(false)}
            loading={loading}
          />
        );
    }
  };

  const handleSectionChange = (section) => {
    if (currentSection == section) {
      return;
    }
    setLoading(true);
    setCurrentSection(section);
  };

  return (
    <div>
      <Background />
      <Nav setCurrentSection={handleSectionChange} />
      {loading && <div className="fixed">Loading...</div>}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname + currentSection}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
