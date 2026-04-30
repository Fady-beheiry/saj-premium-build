import logo from "@/assets/saj-logo.png";

const Footer = () => (
  <footer className="bg-[hsl(var(--teal-deep))] text-primary-foreground/80 py-14">
    <div className="container-pro grid md:grid-cols-3 gap-10 items-start">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-sm overflow-hidden bg-primary">
          <img src={logo} alt="SAJ" className="h-full w-full object-cover" />
        </div>
        <div>
          <div className="font-display text-xl text-background">SAJ</div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-secondary/80">Construction & Finishing</div>
        </div>
      </div>
      <div className="text-sm leading-relaxed">
        Premium construction and luxury finishing.<br />
        From concept to completion — built with precision.
      </div>
      <div className="text-sm md:text-right space-y-2">
        <div><a href="tel:+201000116438" className="hover:text-secondary transition-colors">+20 10 0011 6438</a></div>
        <div>Cairo, Egypt</div>
      </div>
    </div>
    <div className="container-pro mt-12 pt-8 border-t border-background/10 text-xs flex flex-col md:flex-row justify-between gap-4 text-background/50">
      <div>© {new Date().getFullYear()} SAJ Construction & Finishing. All rights reserved.</div>
      <div>Built with precision.</div>
    </div>
  </footer>
);

export default Footer;
