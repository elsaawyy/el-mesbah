import { principles } from "@/lib/content/principles";

export function Why() {
  return (
    <section className="why light wrap">
      <h2>Simple technology. Real impact.</h2>
      <div className="pr" style={{ color: "var(--ink)" }}>
        {principles.map((p) => (
          <div key={p.title}>
            <h3 style={{ color: "inherit" }}>{p.title}</h3>
            <p style={{ color: "var(--g2)" }}>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}