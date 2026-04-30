import { useReveal } from "@/hooks/use-reveal";

const steps = [
  { n: "01", t: "Consultation", d: "We listen first — understanding your vision, constraints, and ambitions before a single line is drawn." },
  { n: "02", t: "Planning & Design", d: "Detailed planning, material specification, and transparent budgeting before mobilization." },
  { n: "03", t: "Execution", d: "Disciplined site management with weekly progress reviews and rigorous quality control." },
  { n: "04", t: "Delivery", d: "Snag-free handover, full documentation, and aftercare. We stay accountable beyond the keys." },
];

const Process = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="process" className="py-28 md:py-36 bg-muted/40">
      <div className="container-pro">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-5">How We Work</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] text-balance">
            A process built around clarity.
          </h2>
        </div>

        <div ref={ref} className="reveal relative grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-10">
              <div className="font-display text-5xl text-secondary">{s.n}</div>
              <h3 className="font-display text-2xl text-primary mt-6">{s.t}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
