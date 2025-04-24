import { motion } from "framer-motion";
import Typing from "./Typing";

const ContentSection = () => {
  const texts = ["Hello, World!", `I am Soheyl.`];

  return (
    <div className="z-10 text-center md:text-left">
      <motion.h1
        className="mb-6 text-5xl font-extrabold text-pink-500 md:text-7xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typing data={texts} />
      </motion.h1>
      <motion.h3
        className="mb-4 text-xl font-medium text-gray-700 transition-colors duration-500 md:text-2xl dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Front-End Developer
      </motion.h3>
      <motion.p
        id="soheyl-desc"
        className="max-w-xl text-sm text-gray-600 transition-colors duration-500 md:text-lg dark:text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        I'm passionate about creating beautiful and user-friendly web
        experiences. As a front-end developer, I enjoy turning ideas into
        interactive websites and applications. My journey started with HTML,
        CSS, and JavaScript, I continue learning and improving myself everyday
        to become a professional developer.
      </motion.p>
    </div>
  );
};

export default ContentSection;
