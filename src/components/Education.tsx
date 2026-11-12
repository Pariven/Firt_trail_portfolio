import { certs, education } from "../data";
import Reveal, { SectionHeading } from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="relative px-4 py-28 sm:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="05" eyebrow="Education" title="Learning &" accent="credentials" />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-4">
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08} whileHover={{ x: 6 }} className="glass rounded-3xl p-6 sm:p-7">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-rose">{e.date}</span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{e.title}</h3>
                <p className="mt-1 text-muted">{e.org}</p>
              </Reveal>
            ))}
          </div>

          <div>
            <Reveal>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted">Certifications</h3>
            </Reveal>
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {certs.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.06}>
                  <li className="group flex flex-col gap-1 py-6 transition-colors sm:flex-row sm:items-baseline sm:gap-6">
                    <span className="w-24 shrink-0 font-mono text-xs text-muted">{c.date}</span>
                    <div>
                      <strong className="block text-lg font-medium transition-colors group-hover:text-rose">{c.title}</strong>
                      <em className="text-muted">{c.org}</em>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
