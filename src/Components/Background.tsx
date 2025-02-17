import { motion } from "framer-motion";
const BackGround = () => {
  return (
    <div className="fixed top-0 left-0 -z-50 h-screen w-full overflow-hidden bg-white transition-colors duration-500 dark:bg-gray-900">
      <motion.div
        className="absolute -top-16 -left-16 hidden h-[50%] w-[50%] rounded-full bg-gradient-to-br from-pink-500 to-purple-700 opacity-40 blur-[250px] lg:block"
        animate={{ x: [0, -50, 0], y: [0, -100, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <motion.div
        className="absolute -right-16 -bottom-16 hidden h-[50%] w-[50%] rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 opacity-30 blur-[250px] lg:block"
        animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    </div>
  );
};
export default BackGround;
