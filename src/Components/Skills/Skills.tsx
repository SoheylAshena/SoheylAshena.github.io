import { DataInterface } from "../../data";
import SectionTitle from "../SectionTitle";
import SkillCard from "./SkillCard";

interface PropsInterface {
  data: DataInterface;
}

const Skills = ({ data }: PropsInterface) => {
  return (
    <div className="container" id="skills">
      <SectionTitle
        title="My Skills"
        description="A showcase of technologies I use to craft exceptional experiences"
      />

      {/* Skill Cards */}
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
        {data.skills.map((item, index) => (
          <SkillCard
            id={item.id}
            imageSrc={item.img}
            name={item.name}
            key={index}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
