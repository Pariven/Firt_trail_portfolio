import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { profile } from "../data";
import Reveal from "./Reveal";

function Magnetic({ children, className = "", href }: { children: React.ReactNode; className?: string; href: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14 });
  const sy = useSpring(y, { stiffness: 180, damping: 14 });
  return (
    <motion.a
      href={href}
      style={{ x: sx, y: sy }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.25);
        y.set((e.clientY - r.top - r.height / 2) * 0.35);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1.1]);

  const links = [
    { label: "GitHub", href: profile.github },
    { label: "WhatsApp", href: profile.whatsapp },
    { label: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}` },
  ];

  return (
    <section ref={ref} id="contact" className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-8 md:pb-32 md:pt-44">
      <motion.div
        aria-hidden
        style={{ scale }}
        className="pointer-events-none absolute bottom-[-30%] left-1/2 size-[min(140vw,1100px)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(168_30_53/0.6),rgb(122_20_36/0.2)_45%,transparent_70%)] blur-2xl"
      />
      <div className="relative mx-auto max-w-6xl text-center">
        <Reveal>
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-rose">06 — Contact</p>
        </Reveal>
        <h2 className="text-[clamp(3rem,11vw,9.5rem)] font-semibold leading-[0.9] tracking-[-0.04em]">
          <Reveal>Have a project?</Reveal>
          <Reveal delay={0.1}>
            <em className="text-gradient pr-3">Let&apos;s build it.</em>
          </Reveal>
        </h2>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <Magnetic
            href={`mailto:${profile.email}`}
            className="glass inline-flex items-center gap-3 rounded-full bg-ink/30 px-6 py-4 text-base font-medium transition-colors hover:bg-maroon/50 sm:px-9 sm:py-5 sm:text-xl"
          >
            {profile.email} <span aria-hidden className="text-rose">↗</span>
          </Magnetic>
        </Reveal>

        <Reveal delay={0.3} className="mt-6 flex flex-wrap justify-center gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-cream/85 backdrop-blur transition hover:border-rose/50 hover:text-cream"
            >
              {l.label}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
