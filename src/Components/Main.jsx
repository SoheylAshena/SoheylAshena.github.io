import Typing from "./Typing";
import { motion } from "framer-motion";

function Main(props) {
  const data = props.data;
  const texts = [
    "Hello, World!",
    `I am <span class="text-yellow-400">Soheyl Ashena.</span>`,
  ];

  return (
    <div className="main-container container" id="soheyl">
      <div className="text-container">
        <h1 className="main-title">
          <Typing data={texts}></Typing>
        </h1>
        <h3 className="main-job">Front-End Developer</h3>
        <p id="soheyl-desc" className="main-desc">
          {data.soheyl.description}
        </p>
      </div>
      <img className="profile-img" src="pic.jpg" alt="Avatar" />
    </div>
  );
}

export default Main;
