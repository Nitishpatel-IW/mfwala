// DotLayer.tsx
import React, { useEffect, useRef } from "react";

type Dot = {
  size: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
};
type DotLayerProps = {
  position: "left" | "right";
  direction: "leftToRight" | "rightToLeft";
};
const DotLayer: React.FC<DotLayerProps> = ({ position, direction }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotCount = 200;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;

    const originX = canvas.width / 3;
    const originY = canvas.height; // bottom-center
    const spreadAngle = Math.PI / 6; // 45 degrees
    const speedMultiplier = 1.5;
    const dots: Dot[] = Array.from({ length: dotCount }).map(() => {
      const angle = (Math.random() +1) * spreadAngle;

      return {
        size: Math.random() * 2,
        x: originX,
        y: originY,
        dx: Math.cos(angle) * speedMultiplier,
        dy: Math.sin(angle) * speedMultiplier,
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let dot of dots) {
        if(direction === "leftToRight") {
            dot.x += dot.dx;
        }
        else{
            dot.x -= dot.dx;
        }
        dot.y += dot.dy;

        // Reset if out of bounds
        if (
          dot.x < 0 ||
          dot.x > canvas.width ||
          dot.y < 0 ||
          dot.y > canvas.height
        ) {
          dot.x = Math.random() * canvas.width;
          dot.y = Math.random() * canvas.height;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resizing
    const handleResize = () => {
      if (canvas && parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        [position]: 0,
        width: "200px",
        height: "250px",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
};

export default DotLayer;
