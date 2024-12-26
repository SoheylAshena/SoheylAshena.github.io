import Typing from "./Typing";
// import Firework from "./Firework";
import { motion } from "framer-motion";

function Main({ data }) {
  const texts = [
    "Hello, World!",
    `I am <span class="dark:bg-gradient-to-r dark:from-pink-500 dark:to-purple-600 dark:bg-clip-text dark:text-transparent ">Soheyl.</span>`,
  ];

  return (
    <div
      className="container flex flex-col items-center justify-between md:mt-36 md:flex-row"
      id="soheyl"
    >
      {/* Profile Section */}
      <div className="relative order-1 my-10 flex h-64 w-64 items-center justify-center md:order-2 md:h-80 md:w-80">
        {/* Dynamic Outer Glow Rings */}
        <motion.div
          className="absolute h-[300px] w-[300px] border-2 border-gray-300 transition-colors duration-500 dark:border-gray-800"
          animate={{ rotate: -360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute h-[400px] w-[400px]"
          style={{
            border: "2px solid transparent",
            borderImage:
              "conic-gradient(from 0deg, #ff0099 25%, #00d4ff 75%, #ff0099)",
            borderImageSlice: 1,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
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
        {/* <div className="opacity-50 md:hidden">
          <Firework />
        </div> */}
      </div>

      {/* Content Section */}
      <div className="order-2 text-center md:order-1 md:text-left">
        <motion.h1
          className="mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent dark:from-yellow-400 dark:to-yellow-600"
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
  );
}

export default Main;
