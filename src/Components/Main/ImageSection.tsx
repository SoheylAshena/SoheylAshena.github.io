import { motion } from "framer-motion";

const ImageSection = () => {
  return (
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
        src="Me.jpg"
        alt="Avatar"
        id="profile-img"
        className="absolute z-10 rounded-full shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </div>
  );
};

export default ImageSection;
