import { html } from "lit-html";
function Other() {
  return html`<div
    class="whitespace-pre-line p-5 lg:mx-auto lg:h-screen lg:max-w-7xl"
    id="other-skills"
  >
    <h3 class="h3m lg:my-12 lg:text-left lg:text-6xl">Other skills</h3>
    <div class="flex justify-around text-center">
      <div class="transition-all hover:-translate-y-1">
        <img class="h-16 lg:h-52" src="images/tailwind.png" alt="tailwind" />
        <p class="font-bold lg:text-2xl">Tailwind</p>
      </div>
      <div class="transition-all hover:-translate-y-1">
        <img class="h-16 lg:h-52" src="images/git.png" alt="git" />
        <p class="font-bold lg:text-2xl">Git</p>
      </div>
    </div>
    <p
      class="text-center font-semibold transition-all hover:-translate-y-1 lg:my-12 lg:text-xl"
      id="other-skills-desc"
    ></p>
    <div></div>
  </div>`;
}

export default Other;
