import { motion, useScroll, useTransform } from "motion/react";
import { marquee } from "../data";

export default function Marquee() {
  const { scrollYProgress } = useScroll();
  const skew = useTransform(scrollYProgress, [0, 1], [-2, 2]);
  const items = [...marquee, ...marquee];

  return (
    <motion.div
      style={{ rotate: skew }}
      aria-hidden
      className="relative z-20 -mx-4 overflow-hidden border-y border-white/10 bg-gradient-to-r from-maroon via-maroon-light to-maroon py-4 shadow-[0_20px_60px_-20px_rgb(168_30_53/0.6)]"
    >
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-8 text-xl font-semibold uppercase tracking-tight md:text-3xl">
            {t}
            <em className="text-cream/50">✦</em>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
