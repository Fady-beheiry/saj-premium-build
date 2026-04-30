import { Home, Palette, Lightbulb, ChefHat, Wrench, Hammer } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    icon: Home,
    title: "Full Apartment Finishing",
    desc: "End-to-end finishing — from raw shell to move-in ready, executed by engineers and master craftsmen.",
  },
  {
    icon: Palette,
    title: "Interior Design",
    desc: "Tailored design that reflects your taste and lifestyle — refined, modern, and uniquely yours.",
  },
  {
    icon: Lightbulb,
    title: "Lighting & Electrical",
    desc: "Architectural lighting and electrical systems engineered for ambience, safety, and longevity.",
  },
  {
    icon: ChefHat,
    title: "Kitchens & Bathrooms",
    desc: "Premium kitchens and spa-grade bathrooms — bespoke joinery, marble, and precision plumbing.",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    desc: "Built-in furniture, smart home, and one-off requests — engineered to your exact specification.",
  },
  {
    icon: Hammer,
    title: "Construction & Renovation",
    desc: "Structural construction and full renovations — managed end-to-end with engineering precision.",
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
            Premium services, delivered with restraint.
          </h2>
        </div>

        <div ref={ref} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-background p-10 transition-all duration-500 hover:bg-primary cursor-default"
            >
              <s.icon className="text-primary group-hover:text-[hsl(var(--gold))] transition-colors" size={36} strokeWidth={1.2} />
              <h3 className="mt-8 font-display text-2xl text-primary group-hover:text-background transition-colors">
                {s.title}
              </h3>
              <div className="mt-3 h-px w-10 bg-[hsl(var(--gold))]" />
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
