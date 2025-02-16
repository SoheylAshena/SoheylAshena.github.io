import Background from "./Components/Background";
import Nav from "./Components/Nav";
import Container from "./Components/Container";

const App = () => {
  return (
    <>
      <Background />
      <div className="relative left-0 top-0 min-h-screen w-full overflow-hidden">
        <Nav />
        <Container />
      </div>
    </>
  );
};

export default App;
