import Background from "./Components/Background";
import Contact from "./Components/Contact/Contact";
import Main from "./Components/Main/Main";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";
import data from "./data";

const App = () => {
  return (
    <>
      <Background />
      <Main data={data} />
      <Skills data={data} />
      <Work data={data} />
      <Contact />
    </>
  );
};

export default App;
