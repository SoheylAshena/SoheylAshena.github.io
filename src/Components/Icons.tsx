import { motion } from "framer-motion";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Icons = () => {
  return (
    <motion.div
      className="flex justify-center gap-5 md:flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.1 }}
    >
      <a href="https://Github.com/SoheylAshena">
        <FaGithub className="text-7xl text-pink-500 transition-all hover:scale-105 hover:text-cyan-500" />
      </a>

      <a href="https://linkedin.com/in/soheyl-ashena-27777a285">
        <IoLogoLinkedin className="text-7xl text-pink-500 transition-all hover:scale-105 hover:text-cyan-500" />
      </a>
      <a href="https://t.me/ColdDiver">
        <FaTelegram className="text-7xl text-pink-500 transition-all hover:scale-105 hover:text-cyan-500" />
      </a>
    </motion.div>
  );
};
export default Icons;
