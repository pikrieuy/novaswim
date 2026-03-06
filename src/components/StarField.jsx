// ─────────────────────────────────────────
//  src/components/StarField.jsx
//  Canvas animasi bintang di background
// ─────────────────────────────────────────

import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    let stars    = [];
    let animId;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = Array.from({ length: 180 }, () => ({
        x:     Math.random() * canvas.width,
        y:     Math.random() * canvas.height,
        size:  Math.random() < 0.2 ? 3 : Math.random() < 0.4 ? 2 : 1,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.005,
        color: Math.random() > 0.85
          ? Math.random() > 0.5 ? "#ff2d78" : "#00f5ff"
          : "#fff",
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.phase += s.speed;
        ctx.fillStyle   = s.color;
        ctx.globalAlpha = (Math.sin(s.phase) * 0.4 + 0.6) * 0.8;
        ctx.fillRect(Math.floor(s.x), Math.floor(s.y), s.size, s.size);
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      id="stars"
      ref={canvasRef}
      style={{
        position: "fixed", top: 0, left: 0,
        width: "100%", height: "100%",
        zIndex: 0, pointerEvents: "none",
      }}
    />
  );
}
