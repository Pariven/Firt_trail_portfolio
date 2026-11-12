import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { scrollToId } from "../hooks/useLenis";

const ease = [0.22, 1, 0.36, 1] as const;

function Letters({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-flex overflow-hidden pb-[0.04em]" aria-hidden>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1, delay: delay + i * 0.045, ease }}
          className="inline-block"
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

function useKLClock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const fmt = () =>
      setT(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kuala_Lumpur" }).format(new Date()));
    fmt();
    const id = setInterval(fmt, 30_000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const time = useKLClock();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const line1X = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const line2X = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden px-4 pb-14 pt-24 md:pb-20 sm:px-8 md:pt-28">
      {/* backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[42%] size-[min(120vw,950px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(168_30_53/0.55),rgb(122_20_36/0.18)_45%,transparent_70%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.035)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      {/* meta row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted sm:text-xs"
      >
        <span className="flex items-center gap-2">
          <span className="size-2 animate-pulse-dot rounded-full bg-green-400" />
          Open to work · {time} KL
        </span>
        <span className="hidden sm:block">Malaysia · Remote</span>
      </motion.div>

      {/* big name */}
      <h1 className="relative z-0 mt-8 select-none text-center font-semibold leading-[0.85] tracking-[-0.045em]" aria-label="Pariventheswaran">
        <motion.span style={{ x: line1X }} className="block text-[clamp(3.6rem,17vw,15rem)]">
          <Letters text="PARIVEN" delay={0.2} />
        </motion.span>
        <motion.span style={{ x: line2X }} className="text-outline block text-[clamp(2.3rem,11.4vw,10.2rem)]">
          <Letters text="THESWARAN" delay={0.45} />
        </motion.span>
      </h1>

      {/* portrait */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 w-[min(95vw,600px)] -translate-x-1/2 md:w-[min(46vw,640px)]">
        <motion.figure
          style={{ y: imgY, scale: imgScale }}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease }}
          className="relative"
        >
          <div aria-hidden className="absolute inset-x-[10%] bottom-[10%] top-[12%] animate-spin-slow rounded-full border border-dashed border-rose/25" />
          <img
            src="/assets/portrait.webp"
            alt="Portrait of Pariventheswaran"
            width={1280}
            height={1229}
            fetchPriority="high"
            className="relative w-full [mask-image:linear-gradient(to_bottom,black_65%,transparent_98%)] drop-shadow-[0_30px_60px_rgb(122_20_36/0.45)]"
          />
        </motion.figure>
      </div>

      {/* bottom row */}
      <motion.div style={{ opacity: fade }} className="relative z-20 mt-auto flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.9, ease }}
          className="glass hidden max-w-xs rounded-2xl sm:block bg-ink/40 p-4 text-sm leading-relaxed text-cream/85"
        >
          <em className="text-lg text-rose">Full-Stack Developer</em> shipping production websites &amp; web apps with Next.js, React,
          TypeScript and Node.js.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45, duration: 0.9, ease }}
          className="flex flex-wrap justify-center gap-3 sm:justify-start"
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("work");
            }}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-maroon-light to-maroon px-6 py-3.5 text-sm font-medium shadow-[0_10px_40px_-10px_rgb(168_30_53/0.8),inset_0_1px_0_rgb(255_255_255/0.25)] transition hover:brightness-125"
          >
            View my work <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("contact");
            }}
            className="glass inline-flex items-center rounded-full bg-ink/40 px-6 py-3.5 text-sm font-medium transition hover:bg-white/10"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
