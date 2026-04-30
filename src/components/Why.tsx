import { Target, Gem, Clock, Eye } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  { icon: Eye, title: "Transparent Pricing", desc: "Clear, itemized quotes — no surprises, no hidden costs. You see exactly where every pound goes." },
  { icon: Clock, title: "On-Time Delivery", desc: "Disciplined scheduling and proactive coordination. Your timeline is non-negotiable." },
  { icon: Gem, title: "Premium Materials", desc: "Curated materials sourced from trusted suppliers. Surfaces and finishes that age with grace." },
  { icon: Target, title: "Engineering Supervision", desc: "Every project is overseen by experienced engineers — quality assured at every stage." },
];

const Why = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-28 md:py-36 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[hsl(var(--gold))]/10 blur-3xl" />
      <div className="container-pro relative">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] font-medium text-[hsl(var(--gold))] mb-5">Why Choose SAJ</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-balance">
            Standards you can feel — long after handover.
          </h2>
        </div>

        <div ref={ref} className="reveal grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {items.map((it, i) => (
            <div key={it.title} className="border-t border-[hsl(var(--gold))]/40 pt-8">
              <div className="text-[hsl(var(--gold))]/80 text-xs tracking-[0.2em]">0{i + 1}</div>
              <it.icon className="text-[hsl(var(--gold))] mt-6" size={32} strokeWidth={1.2} />
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
