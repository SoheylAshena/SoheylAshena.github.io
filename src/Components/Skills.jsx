import { motion } from "framer-motion";

function Skills({ data }) {
  return (
    <div className="container px-6 py-20" id="skills">
      {/* Section Header */}
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-6xl font-bold text-transparent dark:from-yellow-400 dark:to-yellow-600">
          My Skills
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          A showcase of technologies I use to craft exceptional experiences.
        </p>
      </motion.div>

      {/* Skill Cards */}
      <motion.div
        className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, duration: 1 },
          },
        }}
      >
        {data.skills.skill.map((item, index) => (
          <motion.div
            key={item.id}
            className="group relative flex transform flex-col items-center justify-center rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:border-pink-500 dark:border-white/10 dark:bg-transparent dark:shadow-none"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
          >
            {/* Skill Icon */}
            <motion.img
              src={item.img}
              alt={item.name}
              className="mb-4 h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_5px_15px_rgba(236,72,153,0.6)]"
              whileHover={{ scale: 1.1 }}
            />
            {/* Skill Name */}
            <p className="text-lg font-semibold tracking-wide text-gray-800 transition-colors duration-300 group-hover:text-pink-500 dark:text-gray-100">
              {item.name}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Section Description */}
      <motion.p
        className="mx-auto mt-12 max-w-3xl text-center text-lg text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {data.skills.description}
      </motion.p>
    </div>
  );
}

export default Skills;
