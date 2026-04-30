import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { v: "5.0★", l: "Client Satisfaction" },
  { v: "200+", l: "Spaces Delivered" },
  { v: "100%", l: "Engineer-Supervised" },
  { v: "On Time", l: "Every Project" },
];

const About = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-28 md:py-36 bg-background">
      <div className="container-pro grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="eyebrow mb-5">About ArcoNest</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] text-balance">
            A finishing studio obsessed with detail.
          </h2>
        </div>

        <div ref={ref} className="lg:col-span-7 reveal space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            ArcoNest is a premium finishing and interior solutions company based in New Cairo.
            We work with clients who want a home that feels considered — every line, every material,
            every light fixture chosen with intent.
          </p>
          <p>
            Led by experienced engineers and skilled craftsmen, we deliver full apartment finishing,
            bespoke interiors, and turnkey solutions with transparent pricing and uncompromising quality.
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
