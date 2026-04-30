import { useState } from "react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import { useReveal } from "@/hooks/use-reveal";

type Cat = "All" | "Residential" | "Commercial" | "Finishing";

const projects = [
  { src: p1, title: "Hillside Villa", cat: "Residential", location: "New Cairo" },
  { src: p2, title: "Atelier Kitchen", cat: "Finishing", location: "Sheikh Zayed" },
  { src: p3, title: "Corporate Lobby", cat: "Commercial", location: "Downtown" },
  { src: p4, title: "Marble Bath Suite", cat: "Finishing", location: "Maadi" },
  { src: p5, title: "Tower Build", cat: "Commercial", location: "5th Settlement" },
  { src: p6, title: "Penthouse Bedroom", cat: "Residential", location: "Zamalek" },
] as const;

const cats: Cat[] = ["All", "Residential", "Commercial", "Finishing"];

const Projects = () => {
  const [active, setActive] = useState<Cat>("All");
  const ref = useReveal<HTMLDivElement>();
  const filtered = projects.filter((p) => active === "All" || p.cat === active);

  return (
    <section id="projects" className="py-28 md:py-36 bg-background">
      <div className="container-pro">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <div className="eyebrow mb-5">Selected Projects</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] text-balance">
              Spaces that speak for themselves.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium border transition-all ${
                  active === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-primary border-border hover:border-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div ref={ref} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden bg-muted aspect-[4/5] cursor-pointer"
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-secondary text-[10px] uppercase tracking-[0.3em] mb-2">{p.cat}</div>
                <h3 className="font-display text-2xl text-background">{p.title}</h3>
                <div className="text-background/70 text-sm mt-1">{p.location}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
