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

      <div className="motion-container">
        <motion.div
          style={{
            backgroundImage:
              "conic-gradient(from 0deg, #ffffff,#ffffff00, #ffffff,#ffffff00, #ffffff,#ffffff00,#ffffff,#ffffff00,#ffffff,#ffffff00,#ffffff,#ffffff00,#ffffff)",
          }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        ></motion.div>
        <img src="pic.jpg" alt="Avatar" />
      </div>
    </div>
  );
}

export default Main;
