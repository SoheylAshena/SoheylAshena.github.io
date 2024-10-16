function Work(props) {
  const data = props.data;

  const project = data.projects.project.map((proj) => {
    return (
      <div key={proj.id}>
        <h4>{proj.name}</h4>
        <div>
          <img src={proj.img} alt="" />
        </div>
        <ul>
          <li>
            <a href={proj.page}>Page</a>
          </li>
          <li>
            <a href={proj.source}>Source</a>
          </li>
        </ul>
      </div>
    );
  });

  return (
    <div className="container" id="work">
      <div className="work-container md:work-container-md">{project}</div>
    </div>
  );
}
export default Work;
