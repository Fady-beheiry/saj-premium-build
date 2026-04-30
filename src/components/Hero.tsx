import hero from "@/assets/hero.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <img
        src={hero}
        alt="Luxury modern interior crafted by SAJ Construction"
        className="absolute inset-0 h-full w-full object-cover scale-105"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="absolute inset-0 bg-primary/20" />

      <div className="relative z-10 container-pro h-full flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-4 mb-6">
            <span className="hairline bg-[hsl(var(--gold))]" />
            <span className="text-[hsl(var(--gold))] text-xs uppercase tracking-[0.3em]">Finishing & Interior Solutions</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-background leading-[1.05] text-balance">
            We Turn Empty Spaces Into
            <span className="block text-[hsl(var(--gold))] italic font-normal mt-2">Luxury Living Experiences</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-background/85 max-w-xl font-light leading-relaxed">
            Premium finishing & interior solutions tailored to your style and budget.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-[hsl(var(--gold))] text-primary px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-background transition-colors"
            >
              Get a Free Consultation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-3 border border-background/60 text-background px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-background hover:text-primary transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3 text-background/70">
        <div className="text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">Scroll</div>
        <div className="w-px h-16 bg-background/40 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
