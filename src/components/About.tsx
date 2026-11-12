import { useEffect, useRef } from "react";
import { animate, motion, useInView, useScroll, useTransform, type MotionValue } from "motion/react";
import { stats } from "../data";
import Reveal from "./Reveal";

const statement =
  "I build fast, responsive and secure web experiences — from the first wireframe to the final production deploy.";
const accentWords = new Set(["secure", "production"]);

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const clean = word.replace(/[^a-z]/gi, "").toLowerCase();
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {accentWords.has(clean) ? <em className="text-rose">{word}</em> : word}
    </motion.span>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const c = animate(0, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => (node.textContent = Math.round(v) + suffix) });
    return () => c.stop();
  }, [inView, value, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export default function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.4"] });
  const words = statement.split(" ");

  return (
    <section id="about" className="relative px-4 py-28 sm:px-8 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-rose">
            <span className="h-px w-8 bg-rose/60" />
            01 — About
          </p>
        </Reveal>

        <p ref={ref} className="text-[clamp(1.9rem,4.6vw,4rem)] font-medium leading-[1.08] tracking-tight">
          {words.map((w, i) => (
            <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
          ))}
        </p>

        <div className="mt-20 grid gap-10 md:grid-cols-[1fr_1.15fr] md:gap-16">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
            <p>
              I&apos;m a final-year Computer Science (Network &amp; Security) student at{" "}
              <strong className="font-medium text-cream">INTI International University</strong>, freelancing as a web developer since
              October 2025.
            </p>
            <p>
              I ship real products for real clients — training and certification platforms, consulting sites and custom tools —
              handling authentication, Stripe checkout, SEO and Vercel deployments along the way.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.08}
                whileHover={{ y: -6 }}
                className="glass group relative overflow-hidden rounded-3xl p-5 sm:p-7"
              >
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-maroon/30 blur-2xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0" />
                <div className="relative text-[clamp(2.4rem,5vw,3.75rem)] font-semibold leading-none tracking-tight">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="relative mt-3 text-sm text-muted">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
