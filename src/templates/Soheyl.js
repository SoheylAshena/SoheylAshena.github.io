import { html } from "lit-html";
function Soheyl() {
  return html`<div
    class="mx-auto max-w-7xl whitespace-pre-line p-5 lg:flex lg:h-screen lg:items-center lg:justify-around"
    id="soheyl"
  >
    <img
      class="sslide-in sfade-in mx-auto w-72 rounded-full transition-all hover:scale-105 lg:mx-2 lg:w-96 lg:items-center"
      src="images/pic.jpg"
      alt="Avatar"
    />
    <div>
      <h1
        class="text-3xl font-bold transition-all hover:-translate-y-1 lg:text-6xl"
      >
        Soheyl Ashena
      </h1>
      <h3
        class="text-2xl font-thin transition-all hover:-translate-y-1 lg:text-4xl"
      >
        Front-End Developer
      </h3>
      <p
        id="soheyl-desc"
        class="transition-all hover:-translate-y-1 lg:max-w-2xl lg:text-xl"
      ></p>
    </div>

    <div></div>
  </div> `;
}
export default Soheyl;
