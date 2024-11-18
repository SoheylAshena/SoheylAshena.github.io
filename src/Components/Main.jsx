import Typing from "./Typing";
import { motion } from "framer-motion";

function Main({ data }) {
  const texts = [
    "Hello, World!",
    `I am <span style="color: #facc15;">Soheyl Ashena.</span>`,
  ];

  return (
    <div
      className="container mt-10 flex flex-col items-center md:mt-36 md:flex-row md:justify-around"
      id="soheyl"
    >
      {/* Profile Section */}
      <div className="relative order-1 mb-10 flex items-center justify-center md:order-2">
        {/* Dynamic Outer Glow Rings */}
        <motion.div
          className="absolute h-[400px] w-[400px] animate-pulse rounded-full"
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
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute h-[300px] w-[300px] rounded-full border-2 border-gray-700/50"
          style={{
            borderImage: "conic-gradient(from 0deg, #ffffff10 50%, #ffffff05)",
            borderImageSlice: 1,
          }}
          animate={{ rotate: -360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Profile Image */}
        <motion.img
          src="pic.jpg"
          alt="Avatar"
          className="relative z-10 h-80 w-80 rounded-full shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>

      {/* Content Section */}
      <div className="z-10 order-2 text-center md:order-1 md:text-left">
        <motion.h1
          className="mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typing data={texts} />
        </motion.h1>
        <motion.h3
          className="mb-4 text-xl font-medium text-gray-300 sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Front-End Developer
        </motion.h3>
        <motion.p
          id="soheyl-desc"
          className="mx-auto max-w-xl px-4 text-sm text-gray-400 sm:text-lg"
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
