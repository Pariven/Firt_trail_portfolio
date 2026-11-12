import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { nav } from "../data";
import { scrollToId } from "../hooks/useLenis";

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const navRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Hide on scroll down, reveal on scroll up
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 400 && !open);
    setScrolled(y > 40);
  });

  // Active-section tracking
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Liquid sheen follows the pointer
  const onMove = (e: React.PointerEvent) => {
    const el = navRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-5"
      >
        <motion.nav
          ref={navRef}
          onPointerMove={onMove}
          initial={{ opacity: 0, y: -30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Primary"
          className={`glass group relative flex w-full max-w-5xl items-center justify-between gap-2 overflow-hidden rounded-full py-2 pl-2.5 pr-2 transition-[background-color] duration-500 ${scrolled ? "bg-ink/55" : "bg-ink/10"}`}
        >
          {/* pointer-follow liquid highlight */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: "radial-gradient(180px circle at var(--mx) var(--my), rgb(224 86 110 / 0.22), transparent 70%)" }}
          />
          <a href="#top" onClick={go("top")} className="relative flex items-center gap-2.5" aria-label="Home">
            <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-maroon-light to-maroon font-serif text-xl italic shadow-[inset_0_1px_0_rgb(255_255_255/0.3)]">
              P
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">
              Pariven<em className="text-rose">.dev</em>
            </span>
          </a>

          <ul className="relative hidden items-center gap-1 md:flex">
            {nav.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={go(id)}
                  className={`relative block rounded-full px-4 py-2 text-sm transition-colors ${active === id ? "text-cream" : "text-muted hover:text-cream"}`}
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/10 shadow-[inset_0_1px_0_rgb(255_255_255/0.15)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="relative flex items-center gap-2">
            <a
              href="#contact"
              onClick={go("contact")}
              className="rounded-full bg-cream px-4 py-2 text-sm font-medium text-ink transition hover:bg-rose hover:text-cream sm:px-5"
            >
              Let&apos;s talk <span aria-hidden>↗</span>
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 md:hidden"
            >
              <span className="relative block h-3 w-5">
                <span className={`absolute left-0 h-px w-5 bg-cream transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 h-px w-5 bg-cream transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="glass fixed inset-x-3 top-20 z-40 rounded-3xl bg-ink/75 p-3 md:hidden"
          >
            {nav.map(({ id, label }, i) => (
              <motion.a
                key={id}
                href={`#${id}`}
                onClick={go(id)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                className="flex items-center justify-between rounded-2xl px-4 py-4 text-2xl font-medium tracking-tight hover:bg-white/5"
              >
                {label}
                <span className="font-mono text-xs text-muted">0{i + 1}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
