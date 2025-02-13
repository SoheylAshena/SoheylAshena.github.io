import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Typing = ({ data }: { data: string[] }) => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: data,
      startDelay: 100,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1000,
      loop: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el}></span>;
};

export default Typing;
