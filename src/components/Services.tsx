import { Building2, Sparkles, Hammer, KeySquare } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    icon: Building2,
    title: "Construction",
    desc: "Structural builds executed with engineering rigor — from foundation to topping out, on schedule and to spec.",
  },
  {
    icon: Sparkles,
    title: "Interior Finishing",
    desc: "Bespoke finishing in marble, wood, plaster, and metal. Surfaces that elevate every room they define.",
  },
  {
    icon: Hammer,
    title: "Renovation",
    desc: "Thoughtful renovation that respects existing architecture while introducing modern systems and materials.",
  },
  {
    icon: KeySquare,
    title: "Turnkey Projects",
    desc: "End-to-end delivery — design coordination, construction, and finishing — handed over keys-in-hand.",
  },
];

const Services = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="py-28 md:py-36 bg-muted/40">
      <div className="container-pro">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-5">What We Do</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] text-balance">
            A complete service, delivered with restraint.
          </h2>
        </div>

        <div ref={ref} className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-background p-10 transition-all duration-500 hover:bg-primary cursor-default"
            >
              <s.icon className="text-primary group-hover:text-secondary transition-colors" size={36} strokeWidth={1.2} />
              <h3 className="mt-8 font-display text-2xl text-primary group-hover:text-background transition-colors">
                {s.title}
              </h3>
              <div className="mt-3 h-px w-10 bg-secondary group-hover:bg-secondary/80" />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground group-hover:text-background/80 transition-colors">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
