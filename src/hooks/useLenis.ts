import { useEffect } from "react";
import Lenis from "lenis";

let lenis: Lenis | null = null;

/** Smooth scrolling (disabled when the user prefers reduced motion). */
export function useLenis() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4) });
    let id = 0;
    const raf = (time: number) => {
      lenis?.raf(time);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis?.destroy();
      lenis = null;
    };
  }, []);
}

export function scrollToId(id: string) {
  const el = id === "top" ? document.body : document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: id === "top" ? 0 : -80 });
  else el.scrollIntoView({ behavior: "smooth" });
}
