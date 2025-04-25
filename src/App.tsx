import Background from "./Components/Background";
import Contact from "./Components/Contact/Contact";
import Icons from "./Components/Icons";
import Main from "./Components/Main/Main";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";
import useResize from "./Hooks/useResize";

const App = () => {
  const { width } = useResize();
  return (
    <>
      <Background />
      <Main width={width} />
      <Skills />
      <Work />
      <Contact />
      {width < 768 && <Icons />}
    </>
  );
};

export default App;
