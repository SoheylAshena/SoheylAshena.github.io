import { html } from "lit-html";
function Nav() {
  return html` <div
      class="anim-nav-but relative left-5 top-5 flex h-8 w-12 flex-col items-center justify-center lg:hidden"
    >
      <div class="h-1 w-10 bg-white"></div>
      <div class="m-1 h-1 w-10 bg-white"></div>
      <div class="h-1 w-10 bg-white"></div>
    </div>
    <nav>
      <ul
        class="anim-nav fixed top-0 z-50 flex h-screen w-full scale-0 flex-col items-center bg-gradient-to-tr from-black to-blue-950 pt-9 text-3xl transition-all lg:static lg:flex lg:h-0 lg:scale-100 lg:flex-row lg:items-start lg:justify-around lg:bg-none lg:p-5 lg:text-lg lg:font-semibold"
      >
        <li class="s-nav-i">
          <a href="#soheyl">Soheyl</a>
        </li>
        <li class="s-nav-i">
          <a href="#skills">Skills</a>
        </li>
        <li class="s-nav-i">
          <a href="#other-skills">Other skills</a>
        </li>
        <li class="s-nav-i">
          <a href="#projects">Projects</a>
        </li>
        <li class="s-nav-i">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>`;
}
export default Nav;
