import Typing from "./Typing";
import { motion } from "framer-motion";

const styleVariant = {
  content: "",
  background: "repeating-conic-gradient(from 0deg, #ffffff00 80%, #fff )",
  position: "absolute",
  borderRadius: "50%",
  top: "50%",
  left: "50%",
  translate: "-50% -50%",
  zIndex: -1,
};

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
      <div className="profile-img">
        <img src="pic.jpg" alt="Avatar" />
        <motion.div
          className="momo"
          style={styleVariant}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        ></motion.div>
        <motion.div
          style={styleVariant}
          className="momo"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </div>
    </div>
  );
}

export default Main;
