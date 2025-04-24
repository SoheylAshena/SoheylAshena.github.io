import { DataInterface } from "../../data";
import ProjectCard from "./ProjectCard";
import SectionTitle from "../SectionTitle";

interface PropsInterface {
  data: DataInterface;
}

const Work = ({ data }: PropsInterface) => {
  return (
    <div className="container px-6 py-20" id="work">
      {/* Section Header */}
      <SectionTitle
        title="Featured Projects"
        description="A curated list of my most remarkable works. Explore the journey and
          creativity!"
      />

      {/* Project Grid */}
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {data.projects.map((item, index) => (
          <ProjectCard
            id={item.id}
            imageSrc={item.img}
            index={index}
            name={item.name}
            page={item.page}
            source={item.source}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
