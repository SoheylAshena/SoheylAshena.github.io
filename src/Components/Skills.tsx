import { motion } from "framer-motion";

import { Data } from "../data";

interface MainProps {
  data: Data;
}

const Skills: React.FC<MainProps> = ({ data }) => {
  return (
    <div className="container px-6 py-20" id="skills">
      {/* Section Header */}
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-bold text-pink-500 dark:from-yellow-400 dark:to-yellow-600">
          My Skills
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 transition-colors duration-500 dark:text-gray-400">
          A showcase of technologies I use to craft exceptional experiences.
        </p>
      </motion.div>

      {/* Skill Cards */}
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
        {data.skills.skill.map((item, index) => (
          <motion.div
            key={item.id}
            className="group flex flex-col items-center justify-center rounded-xl border-2 border-gray-300 p-6 transition-colors duration-500 hover:border-pink-500 dark:border-white/10 dark:bg-transparent"
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2, ease: "easeInOut" }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* Skill Icon */}
            <motion.img
              src={item.img}
              alt={item.name}
              className="mb-4 h-20 w-20 object-contain transition-transform duration-500 group-hover:scale-110"
            />
            {/* Skill Name */}
            <p className="text-lg font-semibold tracking-wide text-gray-800 transition-colors duration-500 group-hover:text-pink-500 dark:text-gray-100">
              {item.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
