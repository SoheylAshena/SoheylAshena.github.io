import { motion } from "framer-motion";

function Work(props) {
  const data = props.data;

  const project = data.projects.project.map((proj, index) => (
    <motion.div
      key={proj.id}
      className="group relative overflow-hidden rounded-xl border-4 border-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-border shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, ease: "easeInOut" }}
    >
      {/* Image with Overlay */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={proj.img}
          alt={proj.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute bottom-4 left-4 space-y-1 text-white">
            <h4 className="text-xl font-bold">{proj.name}</h4>
            <p className="text-sm text-gray-200">
              {proj.description || "An amazing project to explore!"}
            </p>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="flex items-center justify-between bg-white p-4 transition-colors duration-500 dark:bg-gray-900">
        <a
          href={proj.page}
          className="flex items-center space-x-2 text-sm font-medium text-blue-400 transition-transform duration-300 hover:scale-110"
        >
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            View Live
          </span>
          <motion.span
            className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ x: -5 }}
            animate={{ x: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
          >
            ↗
          </motion.span>
        </a>
        <a
          href={proj.source}
          className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-sm font-medium text-transparent transition-transform duration-300 hover:scale-110 hover:underline"
        >
          <span>Source Code</span>
        </a>
      </div>
    </motion.div>
  ));

  return (
    <div className="container px-6 py-20" id="work">
      {/* Section Header */}
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-6xl font-extrabold tracking-wide text-transparent dark:from-yellow-400 dark:to-yellow-600">
          Featured Projects
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 transition-colors duration-500 dark:text-gray-400">
          A curated list of my most remarkable works. Explore the journey and
          creativity!
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {project}
      </div>
    </div>
  );
}

export default Work;
