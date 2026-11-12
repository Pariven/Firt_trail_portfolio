import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { projects } from "../data";
import { SectionHeading } from "./Reveal";

type Project = (typeof projects)[number];

/** Sticky stacking card: each card pins, then scales down as the next one slides over it. */
function Card({ p, i, total, progress }: { p: Project; i: number; total: number; progress: MotionValue<number> }) {
  const start = i / total;
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - i) * 0.04]);
  const imgRef = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div className="sticky top-20 flex items-start justify-center md:top-24" style={{ paddingTop: `${i * 18}px` }}>
      <motion.article
        style={{ scale }}
        className="glass group relative w-full origin-top overflow-hidden rounded-[2rem] bg-ink-2 p-3 sm:p-4"
      >
        <div className="grid gap-5 md:grid-cols-[1.35fr_1fr] md:gap-8">
          <a
            ref={imgRef}
            href={p.url}
            target="_blank"
            rel="noopener"
            className="relative block aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-wine"
            aria-label={`Visit ${p.title}`}
          >
            <motion.img
              style={{ y: imgY }}
              src={p.image}
              alt={`${p.title} screenshot`}
              loading="lazy"
              className="absolute inset-0 h-[116%] w-full -translate-y-[8%] object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <span className="glass absolute bottom-4 right-4 rounded-full bg-ink/40 px-4 py-2 text-sm font-medium opacity-100 transition duration-500 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
              Visit site ↗
            </span>
          </a>

          <div className="flex flex-col p-2 pb-4 sm:p-4 md:py-6 md:pr-6">
            <div className="mb-6 flex items-center justify-between font-mono text-xs text-muted">
              <span className="text-rose">0{i + 1} / 0{total}</span>
              <span>{p.date}</span>
            </div>
            <h3 className="mb-4 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">{p.title}</h3>
            <p className="mb-6 text-sm leading-relaxed text-muted sm:text-base">{p.desc}</p>
            <ul className="mt-auto flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li key={t} className="rounded-full border border-rose/30 bg-maroon/30 px-3 py-1 font-mono text-xs text-cream/90">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="work" className="relative px-4 py-28 sm:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" eyebrow="Selected work" title="Things I've" accent="shipped" />
        <div ref={ref} className="relative space-y-[8vh] pb-[10vh]">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} i={i} total={projects.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
