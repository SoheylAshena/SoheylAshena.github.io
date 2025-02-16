import { useState, useEffect } from "react";
import Typing from "./Typing";
import { motion } from "framer-motion";
import Icons from "./Icons";
import { Data } from "../data";

interface MainProps {
  data: Data;
}

const texts = ["Hello, World!", `I am Soheyl.`];

const Main: React.FC<MainProps> = ({ data }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div
      className="container flex flex-col items-center justify-between md:mt-36 md:flex-row"
      id="soheyl"
    >
      {/* Profile Section */}
      <div className="relative my-10 flex h-64 w-64 items-center justify-center md:h-80 md:w-80">
        {/* Dynamic Outer Glow Rings */}
        <motion.div
          className="absolute h-[300px] w-[300px] border-2 border-gray-300 transition-colors duration-500 dark:border-gray-800"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="border-image-conic absolute h-[400px] w-[400px] border-[2px] border-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Profile Image */}
        <motion.img
          src="pic.jpg"
          alt="Avatar"
          className="absolute z-10 rounded-full shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>

      {/* Content div */}
      <div className="flex gap-7">
        {/* icons */}
        {isDesktop && <Icons />}

        {/* Content Section */}
        <div className="text-center z-10 md:text-left">
          <motion.h1
            className="mb-6  text-5xl font-extrabold text-pink-500 md:text-7xl"
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
            {data.soheyl.description}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Main;
