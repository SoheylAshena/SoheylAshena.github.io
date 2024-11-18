import { motion } from "framer-motion";
function BackGround() {
  return (
    <div className="fixed -z-50 h-screen w-full">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(255,20,147,0.1),_rgba(30,30,30,1))]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.div
        className="absolute -left-16 -top-16 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-pink-500 to-purple-700 opacity-30 blur-3xl"
        animate={{ x: [0, 50, -50], y: [0, -50, 50] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <motion.div
        className="absolute -bottom-16 -right-16 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 opacity-20 blur-3xl"
        animate={{ x: [0, -50, 50], y: [0, 50, -50] }}
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
