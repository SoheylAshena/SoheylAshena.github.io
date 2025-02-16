import React, { useContext } from "react";
import { AppContext, AppContextType } from "../Context/Context";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router";
import Main from "./Main";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import data from "../data";

const Container: React.FC = () => {
  const { section } = useContext<AppContextType>(AppContext);
  const location = useLocation();
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0 },
  };
  const pageTransition = { duration: 0.5 };

  const renderSection = () => {
    switch (section) {
      case "Home":
        return <Main data={data} />;
      case "Skills":
        return <Skills data={data} />;
      case "Work":
        return <Work data={data} />;
      case "Contact":
        return <Contact />;
      default:
        return <Main data={data} />;
    }
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname + section}
        initial="initial"
        whileInView="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {renderSection()}
      </motion.div>
    </AnimatePresence>
  );
};

export default Container;
