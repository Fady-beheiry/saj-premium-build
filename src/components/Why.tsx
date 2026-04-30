import { Target, Gem, Clock, Eye } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  { icon: Target, title: "Precision Execution", desc: "Tolerances measured in millimeters, not inches. Every joint, every line, intentional." },
  { icon: Gem, title: "High-End Finishing", desc: "Curated materials and master craftsmen for surfaces that age with grace." },
  { icon: Clock, title: "On-Time Delivery", desc: "Disciplined scheduling and proactive coordination. Your timeline is non-negotiable." },
  { icon: Eye, title: "Transparent Process", desc: "Clear pricing, weekly reporting, and open access — at every stage of the build." },
];

const Why = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-28 md:py-36 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="container-pro relative">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] font-medium text-secondary/80 mb-5">Why Choose SAJ</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-balance">
            Standards you can feel — long after handover.
          </h2>
        </div>

        <div ref={ref} className="reveal grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {items.map((it, i) => (
            <div key={it.title} className="border-t border-secondary/30 pt-8">
              <div className="text-secondary/70 text-xs tracking-[0.2em]">0{i + 1}</div>
              <it.icon className="text-secondary mt-6" size={32} strokeWidth={1.2} />
              <h3 className="font-display text-2xl mt-6">{it.title}</h3>
              <p className="mt-3 text-sm text-primary-foreground/75 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
