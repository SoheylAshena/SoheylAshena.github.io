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

const App = () => {
  const [currentSection, setCurrentSection] = useState("Home");
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
        return <Main data={data} loading={false} />;
      case "Skills":
        return <Skills data={data} />;
      case "Work":
        return <Work data={data} />;
      case "Contact":
        return <Contact data={data} />;
      default:
        return <Main data={data} loading={false} />;
    }
  };

  return (
    <div>
      <Background />
      <Nav setCurrentSection={setCurrentSection} />
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
