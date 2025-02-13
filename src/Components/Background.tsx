import { motion } from "framer-motion";
function BackGround() {
  return (
    <div className="fixed left-0 top-0 -z-50 h-screen w-full overflow-hidden bg-white transition-colors duration-500 dark:bg-gray-950">
      <motion.div
        className="absolute -left-16 -top-16 h-[50%] w-[50%] rounded-full bg-gradient-to-br from-pink-500 to-purple-700 opacity-40 blur-[250px]"
        animate={{ x: [0, -50, 0], y: [0, -100, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <motion.div
        className="absolute -bottom-16 -right-16 h-[50%] w-[50%] rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 opacity-30 blur-[250px]"
        animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    </div>
  );
}
export default BackGround;
