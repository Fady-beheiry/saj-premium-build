import { useEffect, useState } from "react";
import logo from "@/assets/saj-logo.png";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container-pro flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-sm overflow-hidden bg-primary flex items-center justify-center">
            <img src={logo} alt="SAJ Construction & Finishing logo" className="h-full w-full object-cover" />
          </div>
          <div className="leading-tight">
            <div className={`font-display text-lg tracking-wide ${scrolled ? "text-primary" : "text-background"}`}>SAJ</div>
            <div className={`text-[10px] uppercase tracking-[0.25em] ${scrolled ? "text-muted-foreground" : "text-background/80"}`}>Construction & Finishing</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-[hsl(var(--gold))] ${
                  scrolled ? "text-foreground" : "text-background"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`hidden lg:inline-flex items-center px-6 py-3 text-sm font-medium tracking-wide transition-all border ${
            scrolled
              ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
              : "bg-transparent text-background border-background/60 hover:bg-background hover:text-primary"
          }`}
        >
          Free Consultation
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-background"}`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <ul className="container-pro py-6 space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block py-2 text-foreground font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                onClick={() => setOpen(false)}
                href="#contact"
                className="block w-full text-center bg-primary text-primary-foreground py-3 font-medium"
              >
                Free Consultation
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
