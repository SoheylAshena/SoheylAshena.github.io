import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router";
import Background from "./Components/Background";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import data from "./data";
import Loading from "./Components/Loading";

const App = () => {
  const [currentSection, setCurrentSection] = useState("Home");
  const [load, setLoad] = useState(true);
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

  const handleSectionChange = (section: string) => {
    if (currentSection === section) {
      return;
    }
    setCurrentSection(section);
    if (section !== "Contact") {
      setLoad(true);
    }
  };

  return (
    <div>
      <Background></Background>
      <div className="relative left-0 top-0 min-h-screen w-full overflow-hidden">
        <Nav setCurrentSection={handleSectionChange} />
        <AnimatePresence mode="wait">
          {load === true && <Loading />}
          <motion.div
            key={location.pathname + currentSection}
            initial="initial"
            whileInView="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            onLoad={() => setLoad(false)}
            className={load === false ? "block" : "hidden"}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
