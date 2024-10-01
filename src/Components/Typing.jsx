import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Typing = (props) => {
  const el = useRef();

  useEffect(() => {
    if (props.loading === false) {
      const typed = new Typed(el.current, {
        strings: props.data,
        startDelay: 100,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: false,
      });

      return () => {
        typed.destroy();
      };
    }
  }, [props.loading]);

  return (
    <div>
      <span ref={el}></span>
    </div>
  );
};

export default Typing;
