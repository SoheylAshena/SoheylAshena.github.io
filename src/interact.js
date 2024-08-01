const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("sslide-in")) {
        entry.target.classList.add("sslide-in-1");
      }
      if (entry.target.classList.contains("sfade-in")) {
        entry.target.classList.add("sfade-in-1");
      }
      if (entry.target.classList.contains("width-str")) {
        entry.target.classList.add("swidth-str-1");
      }
    }
  });
});

const hiddenElements = document.querySelectorAll("*");
hiddenElements.forEach((e) => observer.observe(e));
