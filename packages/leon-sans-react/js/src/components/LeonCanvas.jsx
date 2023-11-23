import { TweenMax, Power3 } from "greensock";
import { useCallback, useEffect, useRef } from "react";
import LeonSans from "leon-sans";

export default function LeonCanvas({ sw = 800, sh = 600 }) {
  const canvasRef = useRef(null);
  const leonRef = useRef(null);
  const ctxRef = useRef(null);

  const draw = useCallback(() => {
    if (!leonRef.current || !canvasRef.current || !ctxRef.current) return;

    const leon = leonRef.current;

    let i,
      total = leon.drawing.length;

    for (i = 0; i < total; i++) {
      TweenMax.killTweensOf(leon.drawing[i]);
      TweenMax.fromTo(
        leon.drawing[i],
        2,
        {
          value: 0,
        },
        {
          value: 0.5,
          ease: Power3.easeOut,
        },
      );
    }
  }, []);

  const animate = useCallback(() => {
    if (!canvasRef.current || !ctxRef.current || !leonRef.current) return;
    const ctx = ctxRef.current;
    const leon = leonRef.current;

    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, sw, sh);
    const x = (sw - leon.rect.w) / 2;
    const y = (sh - leon.rect.h) / 2;
    leon.position(x, y);
    leon.draw(ctx);
  }, [sw, sh, ctxRef, leonRef]);

  useEffect(() => {
    if (canvasRef.current) {
      const pixelRatio = 2;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      ctxRef.current = canvas.width = sw * pixelRatio;
      canvas.height = sh * pixelRatio;
      canvas.style.width = sw + "px";
      canvas.style.height = sh + "px";
      ctx.scale(pixelRatio, pixelRatio);

      const leon = new LeonSans({
        text: "Leon i",
        color: ["#000000"],
        size: 80,
        weight: 200,
        isPath: true,
      });

      ctxRef.current = ctx;
      leonRef.current = leon;

      requestAnimationFrame(animate);
    }
  }, [canvasRef, animate, sw, sh]);

  return (
    <>
      <canvas ref={canvasRef} />
      <button onClick={() => draw()}>그리기</button>
    </>
  );
}
