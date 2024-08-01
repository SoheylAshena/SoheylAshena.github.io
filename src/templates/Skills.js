import { html } from "lit-html";
function Skills() {
  return html` <div
    id="skills"
    class="whitespace-pre-line bg-white p-5 text-blue-950 lg:h-screen"
  >
    <div class="lg:mx-auto lg:max-w-7xl">
      <h3 class="h3m lg:my-12 lg:text-left lg:text-6xl">Skills</h3>
      <div id="skill" class="flex justify-around text-center lg:flex-wrap">
        <div class="transition-all hover:-translate-y-1">
          <img class="h-16 lg:h-52" src="images/html.webp" alt="html" />
          <p class="font-bold lg:text-2xl">HTML</p>
        </div>
        <div class="transition-all hover:-translate-y-1">
          <img class="h-16 lg:h-52" src="images/css.png" alt="css" />
          <p class="font-bold lg:text-2xl">CSS</p>
        </div>
        <div class="transition-all hover:-translate-y-1">
          <img class="h-16 lg:h-52" src="images/js.png" alt="javasctipt" />
          <p class="font-bold lg:text-2xl">JavaScript</p>
        </div>
        <div class="transition-all hover:-translate-y-1">
          <img class="h-16 lg:h-52" src="images/ts.png" alt="typeSctipt" />
          <p class="font-bold lg:text-2xl">TypeScript</p>
        </div>
      </div>
      <p
        class="text-center font-semibold transition-all hover:-translate-y-1 lg:my-12 lg:text-xl"
        id="skills-desc"
      ></p>
    </div>
    <div></div>
  </div>`;
}
export default Skills;
