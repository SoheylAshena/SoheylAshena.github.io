import React, { useEffect, useRef } from "react";

const Firework = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let t = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = () => {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "hsla(0,0%,0%,.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const foo = Math.sin(t) * 2 * Math.PI;

      for (let i = 0; i < 400; ++i) {
        const r = 400 * Math.sin(i * foo);
        ctx.globalCompositeOperation = "";
        ctx.fillStyle = `hsla(${i + 12},100%,60%,1)`;
        ctx.beginPath();
        ctx.arc(
          Math.sin(i) * r + canvas.width / 2,
          Math.cos(i) * r + canvas.height / 2,
          1.5,
          0,
          Math.PI * 2,
        );
        ctx.fill();
      }
      t += 0.000005;
      t %= 2 * Math.PI;
    };

    const run = () => {
      animationFrameId = window.requestAnimationFrame(run);
      draw();
    };

    run();

    // Cleanup function to stop animations and event listeners
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default Firework;
