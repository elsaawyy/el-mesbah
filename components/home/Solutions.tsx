"use client";

import { solutions } from "@/lib/content/solutions";
import { useReveal } from "@/hooks/useReveal";

export function Solutions() {
  return (
    <section className="solutions light wrap" id="solutions">
      <h2>Built around real problems.</h2>
      <div>
        {solutions.map((s, i) => (
          <SolutionRow
            key={s.problem}
            problem={s.problem}
            solution={s.solution}
            delay={i * 0.08}
          />
        ))}
      </div>
    </section>
  );
}

function SolutionRow({
  problem,
  solution,
  delay,
}: {
  problem: string;
  solution: string;
  delay: number;
}) {
  const { ref, inView } = useReveal<HTMLDivElement>({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`row ${inView ? "in" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="a">{problem}</div>
      <div className="ln" />
      <div className="b">{solution}</div>
    </div>
  );
}