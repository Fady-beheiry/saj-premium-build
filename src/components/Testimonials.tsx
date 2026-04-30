import { Star } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const reviews = [
  {
    quote: "SAJ delivered our villa with a level of finishing we hadn't seen on previous projects. The attention to detail is rare.",
    name: "Mariam Hassan",
    role: "Private Client, New Cairo",
  },
  {
    quote: "On time, on budget, and the quality speaks for itself. Their team felt like an extension of ours throughout.",
    name: "Omar El Sayed",
    role: "Managing Director, Helio Group",
  },
  {
    quote: "From the first consultation to handover, the process was transparent and the craftsmanship exceptional.",
    name: "Layla Farouk",
    role: "Architect, Studio LF",
  },
];

const Testimonials = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-28 md:py-36 bg-background">
      <div className="container-pro">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-5">Client Voices</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] text-balance">
            Trusted by clients who notice details.
          </h2>
        </div>

        <div ref={ref} className="reveal grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure key={r.name} className="bg-muted/40 p-10 flex flex-col h-full">
              <div className="flex gap-1 text-secondary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="font-display text-lg md:text-xl text-primary leading-snug flex-1">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="font-medium text-primary">{r.name}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
