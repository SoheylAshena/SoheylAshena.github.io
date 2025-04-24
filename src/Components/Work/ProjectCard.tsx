import { motion } from "framer-motion";

interface ProjectCardInterface {
  name: string;
  id: string;
  page: string;
  source: string;
  imageSrc: string;
  index: number;
}

const ProjectCard = ({
  name,
  id,
  page,
  source,
  imageSrc,
}: ProjectCardInterface) => {
  return (
    <motion.div
      key={id}
      className="group relative overflow-hidden rounded-xl border-4 border-pink-500 shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut" }}
    >
      {/* Image with Overlay */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500"
        />
        <a href={page}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:bg-gradient-to-b dark:from-transparent dark:to-gray-900">
            <div className="absolute bottom-4 left-4 space-y-1 text-gray-900 dark:text-white">
              <h4 className="text-xl font-bold">{name}</h4>
              <p className="text-sm">An amazing project to explore!</p>
            </div>
          </div>
        </a>
      </div>

      {/* Links Section */}
      <div className="flex items-center justify-between bg-white p-4 transition-colors duration-500 dark:bg-gray-900">
        <a
          href={page}
          className="flex items-center space-x-2 text-sm font-medium text-blue-400 transition-transform duration-300 hover:scale-110"
        >
          <span className="text-pink-500">View Live</span>
          <motion.span
            className="text-pink-500"
            initial={{ x: -5 }}
            animate={{ x: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
          >
            ↗
          </motion.span>
        </a>
        <a
          href={source}
          className="flex items-center space-x-2 text-sm font-medium text-pink-500 transition-transform duration-300 hover:scale-110 hover:underline"
        >
          <span>Source Code</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
