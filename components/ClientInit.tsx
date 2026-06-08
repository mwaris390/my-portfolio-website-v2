"use client";

import { useEffect } from "react";

/**
 * Adds the `anim-ready` class to <html> once mounted, so the scroll-reveal
 * hidden start-state only applies when JS is running (SSR/no-JS = content
 * visible). Cheap and runs once.
 */
export default function ClientInit() {
  useEffect(() => {
    document.documentElement.classList.add("anim-ready");
  }, []);
  return null;
}
