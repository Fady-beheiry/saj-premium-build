import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { v: "15+", l: "Years of Excellence" },
  { v: "200+", l: "Projects Delivered" },
  { v: "98%", l: "Client Satisfaction" },
  { v: "100%", l: "On-Time Completion" },
];

const About = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-28 md:py-36 bg-background">
      <div className="container-pro grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="eyebrow mb-5">About SAJ</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] text-balance">
            Crafted with intention. Built to endure.
          </h2>
        </div>

        <div ref={ref} className="lg:col-span-7 reveal space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            SAJ Construction & Finishing is a premium build studio dedicated to clients who refuse compromise.
            We unite engineering precision with refined finishing to deliver spaces that read as inevitable —
            quietly luxurious, structurally sound, and detailed to the millimeter.
          </p>
          <p>
            From private residences to commercial landmarks, our team manages every phase in-house — bringing
            architectural intent, material selection, and skilled craftsmanship under a single, accountable roof.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 mt-6 border-t border-border">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-4xl text-primary">{s.v}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
