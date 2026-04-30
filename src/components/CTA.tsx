import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";

const CTA = () => (
  <section className="relative py-28 md:py-36 overflow-hidden">
    <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" aria-hidden />
    <div className="absolute inset-0 bg-[hsl(var(--burgundy-deep))]/85" />
    <div className="relative container-pro text-center max-w-3xl mx-auto">
      <div className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--gold))] mb-6">Limited Slots This Month</div>
      <h2 className="font-display text-4xl md:text-6xl text-background leading-[1.1] text-balance">
        Your dream home is one
        <span className="block italic text-[hsl(var(--gold))]">decision away.</span>
      </h2>
      <p className="mt-6 text-background/80 max-w-xl mx-auto leading-relaxed">
        Speak to our team today and reserve one of our limited consultation slots for this month.
      </p>
      <a
        href="#contact"
        className="mt-10 group inline-flex items-center gap-3 bg-[hsl(var(--gold))] text-primary px-10 py-4 text-sm font-semibold tracking-[0.2em] uppercase hover:bg-background transition-colors"
      >
        Book Your Consultation Now
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  </section>
);

export default CTA;
