import { motion } from "framer-motion";

interface SkillCardInterface {
  id: string;
  imageSrc: string;
  name: string;
  index: number;
}

const SkillCard = ({ id, imageSrc, name }: SkillCardInterface) => {
  return (
    <motion.div
      key={id}
      className="group flex flex-col items-center justify-center rounded-xl border-2 border-gray-300 p-6 transition-colors duration-500 hover:border-pink-500 dark:border-white/10 dark:bg-transparent"
      initial="hidden"
      whileInView="visible"
      transition={{ ease: "easeInOut" }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {/* Skill Icon */}
      <motion.img
        src={imageSrc}
        alt={name}
        className="mb-4 h-20 w-20 object-contain transition-transform duration-500 group-hover:scale-110"
      />
      {/* Skill Name */}
      <p className="text-lg font-semibold tracking-wide text-gray-800 transition-colors duration-500 group-hover:text-pink-500 dark:text-gray-100">
        {name}
      </p>
    </motion.div>
  );
};

export default SkillCard;
