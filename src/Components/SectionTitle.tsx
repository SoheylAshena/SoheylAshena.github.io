import { motion } from "framer-motion";

interface SectionTitleInterface {
  title: string;
  description: string;
}

const SectionTitle = ({ title, description }: SectionTitleInterface) => {
  return (
    <motion.div
      className="mb-16 text-center"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-6xl font-bold text-pink-500 dark:from-yellow-400 dark:to-yellow-600">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 transition-colors duration-500 dark:text-gray-400">
        {description}{" "}
      </p>
    </motion.div>
  );
};

export default SectionTitle;
