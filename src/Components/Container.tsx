import { useContext } from "react";
import { AppContext, AppContextType } from "../Context/Context";
import { AnimatePresence, motion } from "framer-motion";
import Main from "./Main";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import data from "../data";
import Loading from "./Loading";

const Container: React.FC = () => {
  const { section, setLoading, loading } =
    useContext<AppContextType>(AppContext);
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
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
      {loading && <Loading />}
      <motion.div
        key={section}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        onLoad={() => setLoading(false)}
        className={loading === false ? "block" : "hidden"}
      >
        {renderSection()}
      </motion.div>
    </AnimatePresence>
  );
};

export default Container;
