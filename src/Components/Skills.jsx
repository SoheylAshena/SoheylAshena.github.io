function Skills(props) {
  const data = props.data;

  const skill = data.skills.skill.map((item) => {
    return (
      <div key={item.id} className="software">
        <img src={item.img} alt={item.name} />
        <p>{item.name}</p>
      </div>
    );
  });

  return (
    <div
      id="skills"
      className={`container ${props.loading ? "opacity-0" : ""}`}
      onLoad={props.onLoad}
    >
      <div id="skill" className="skill-container">
        {skill}
      </div>
      <p className="description" id="skills-desc">
        {data.skills.description}
      </p>
    </div>
  );
}
export default Skills;
