import { useEffect } from "react";
export default function Observer(props) {
  useEffect(() => {
    if (props.loading === false) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("scale-in")) {
            }
          }
        });
      });

      const hiddenElements = document.querySelectorAll("*");
      hiddenElements.forEach((e) => observer.observe(e));

      return () => {
        hiddenElements.forEach((e) => observer.unobserve(e));
      };
    }
  }, [props.loading]);
}
