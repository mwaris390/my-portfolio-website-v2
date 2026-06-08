"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight canvas starfield used on the hero card and contact band.
 * Animates with requestAnimationFrame, pauses for prefers-reduced-motion
 * (renders a single static frame), and resizes with its container.
 */
export default function Starfield({
  dense = false,
  className = "",
}: {
  dense?: boolean;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const colors = ["rgba(120,150,255,", "rgba(255,255,255,", "rgba(203,240,106,"];
    const baseCount = dense ? 130 : 60;

    let dots: {
      x: number; y: number; r: number; vx: number; vy: number; a: number; c: string; tw: number;
    }[] = [];
    let W = 0, H = 0, raf = 0;

    function build() {
      const rect = canvas!.getBoundingClientRect();
      W = rect.width; H = rect.height;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(baseCount * Math.min(1, (W * H) / (900 * 600)));
      dots = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        a: Math.random() * 0.5 + 0.2,
        c: colors[(Math.random() * colors.length) | 0],
        tw: Math.random() * Math.PI * 2,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      for (const d of dots) {
        d.x += d.vx; d.y += d.vy; d.tw += 0.02;
        if (d.x < 0) d.x = W; if (d.x > W) d.x = 0;
        if (d.y < 0) d.y = H; if (d.y > H) d.y = 0;
        const alpha = d.a * (0.6 + 0.4 * Math.sin(d.tw));
        ctx!.beginPath();
        ctx!.fillStyle = d.c + alpha + ")";
        ctx!.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx!.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    function start() {
      build();
      if (reduce) {
        ctx!.clearRect(0, 0, W, H);
        for (const d of dots) {
          ctx!.beginPath();
          ctx!.fillStyle = d.c + d.a + ")";
          ctx!.arc(d.x, d.y, d.r, 0, Math.PI * 2);
          ctx!.fill();
        }
        return;
      }
      cancelAnimationFrame(raf);
      draw();
    }

    let t: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(t);
      t = setTimeout(start, 200);
    };
    start();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, [dense]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
