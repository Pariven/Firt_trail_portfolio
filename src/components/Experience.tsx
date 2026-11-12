import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { experience } from "../data";
import Reveal, { SectionHeading } from "./Reveal";

export default function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.6"] });

  return (
    <section id="experience" className="relative overflow-x-clip px-4 py-28 sm:px-8 md:py-36">
      <div aria-hidden className="pointer-events-none absolute left-0 top-1/4 size-[480px] rounded-full bg-maroon/20 blur-[120px]" />
      <div className="relative mx-auto max-w-5xl">
        <SectionHeading index="04" eyebrow="Experience" title="Where I've" accent="worked" />

        <ol ref={ref} className="relative space-y-10 pl-8 md:pl-0">
          {/* track + scroll-drawn line */}
          <div aria-hidden className="absolute bottom-0 left-[7px] top-2 w-px bg-white/10 md:left-[calc(30%+7px)]" />
          <motion.div
            aria-hidden
            style={{ scaleY: scrollYProgress }}
            className="absolute bottom-0 left-[7px] top-2 w-px origin-top bg-gradient-to-b from-rose to-maroon md:left-[calc(30%+7px)]"
          />

          {experience.map((e, i) => (
            <li key={e.role} className="relative md:grid md:grid-cols-[30%_1fr] md:gap-10">
              <span className="absolute -left-8 top-2 grid size-[15px] place-items-center rounded-full border border-rose/60 bg-ink md:left-[calc(30%)] md:-translate-x-0">
                <span className="size-[7px] rounded-full bg-rose shadow-[0_0_12px_rgb(224_86_110)]" />
              </span>
              <Reveal delay={0.05} className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted md:mb-0 md:pr-10 md:pt-1.5 md:text-right">
                {e.date}
              </Reveal>
              <Reveal delay={0.1 + i * 0.02} className="md:pl-10">
                <div className="glass rounded-3xl p-6 transition-colors hover:bg-white/[0.06] sm:p-8">
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{e.role}</h3>
                  <p className="mb-4 mt-1 font-serif text-lg italic text-rose">{e.org}</p>
                  <ul className="space-y-2.5 text-sm leading-relaxed text-muted sm:text-base">
                    {e.points.map((pt) => (
                      <li key={pt} className="relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-px before:w-2.5 before:bg-rose/70">
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
