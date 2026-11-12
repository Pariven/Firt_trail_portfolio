import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { skills } from "../data";
import Reveal, { SectionHeading } from "./Reveal";

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rx = useSpring(useTransform(y, [0, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 });
  const glow = useTransform([x, y], ([a, b]) => `radial-gradient(400px circle at ${(a as number) * 100}% ${(b as number) * 100}%, rgb(224 86 110 / 0.18), transparent 60%)`);

  return (
    <motion.div
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width);
        y.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        x.set(0.5);
        y.set(0.5);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={`glass relative h-full overflow-hidden rounded-3xl p-6 sm:p-8 ${className}`}
    >
      <motion.div aria-hidden style={{ background: glow }} className="pointer-events-none absolute inset-0" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-x-clip px-4 py-28 sm:px-8 md:py-36">
      <div aria-hidden className="pointer-events-none absolute right-0 top-1/3 size-[500px] rounded-full bg-maroon/20 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading index="02" eyebrow="Toolkit" title="Skills &" accent="stack" />

        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className={s.span}>
              <TiltCard>
                <div className="mb-8 flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-maroon/40 font-mono text-lg text-rose">
                    {s.icon}
                  </span>
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                </div>
                <h3 className="mb-5 text-2xl font-semibold tracking-tight">{s.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-cream/85 transition hover:border-rose/50 hover:bg-maroon/40"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}

          <Reveal delay={0.32} className="md:col-span-3">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-maroon-light via-maroon to-wine p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.2)] sm:p-10">
              <div aria-hidden className="absolute -right-16 -top-16 size-64 rounded-full border border-white/10" />
              <div aria-hidden className="absolute -right-4 -top-4 size-40 rounded-full border border-white/10" />
              <div className="relative grid gap-6 md:grid-cols-[auto_1fr] md:items-center md:gap-10">
                <span className="text-5xl">⛨</span>
                <div>
                  <h3 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                    Security <em>mindset</em>
                  </h3>
                  <p className="max-w-2xl text-cream/80">
                    Network &amp; Security background, Cisco CCNA training and digital-forensics coursework — I build with auth,
                    sessions and data safety in mind from day one.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
