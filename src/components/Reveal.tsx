import { motion, type HTMLMotionProps } from "motion/react";

type Props = HTMLMotionProps<"div"> & { delay?: number; y?: number };

/** Fades + lifts + un-blurs its children when scrolled into view. */
export default function Reveal({ delay = 0, y = 40, children, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ index, eyebrow, title, accent }: { index: string; eyebrow: string; title: string; accent: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal>
        <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-rose">
          <span className="h-px w-8 bg-rose/60" />
          {index} — {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[0.95] tracking-tight">
          {title} <em className="text-gradient pr-2">{accent}</em>
        </h2>
      </Reveal>
    </div>
  );
}
