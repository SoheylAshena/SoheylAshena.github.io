import { render } from "lit-html";
import BackGround from "./templates/BackGround";
import Nav from "./templates/Nav";
import Soheyl from "./templates/Soheyl";
import Skills from "./templates/Skills";
import Other from "./templates/Other";
import Projects from "./templates/Projects";
function returner() {
  return [BackGround(), Nav(), Soheyl(), Skills(), Other(), Projects()];
}

render(returner(), app);
