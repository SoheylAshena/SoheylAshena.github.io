const but = document.querySelector(".anim-nav-but");
const nav = document.querySelector(".anim-nav");

but.addEventListener("click", () => {
  nav.classList.add("anim-nav-1");
});
nav.addEventListener("click", () => {
  nav.classList.remove("anim-nav-1");
});
