"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Scroll-reveal wrapper. Renders visible by default, then fades/slides in once
 * it enters the viewport. Respects prefers-reduced-motion and never hides
 * content for no-JS / SSR (the `.in` state only matters under `.anim-ready`).
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay,
  className = "",
  ...rest
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: 1 | 2 | 3;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = [
    "reveal",
    delay ? `reveal-d${delay}` : "",
    shown ? "in" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  );
}
