import logo from "@/assets/arconest-logo.png";

const Footer = () => (
  <footer className="bg-[hsl(var(--burgundy-deep))] text-primary-foreground/80 py-14">
    <div className="container-pro grid md:grid-cols-3 gap-10 items-start">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-sm overflow-hidden bg-primary">
          <img src={logo} alt="ArcoNest" className="h-full w-full object-cover" />
        </div>
        <div>
          <div className="font-display text-xl text-background">ArcoNest</div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-[hsl(var(--gold))]">Finishing & Interior Solutions</div>
        </div>
      </div>
      <div className="text-sm leading-relaxed">
        Premium finishing and interior solutions.<br />
        We turn empty spaces into luxury living experiences.
      </div>
      <div className="text-sm md:text-right space-y-2">
        <div><a href="tel:+201113735377" className="hover:text-[hsl(var(--gold))] transition-colors">+20 111 373 5377</a></div>
        <div>New Cairo, Egypt</div>
      </div>
    </div>
    <div className="container-pro mt-12 pt-8 border-t border-background/10 text-xs flex flex-col md:flex-row justify-between gap-4 text-background/50">
      <div>© {new Date().getFullYear()} ArcoNest. All rights reserved.</div>
      <div>Crafted with precision.</div>
    </div>
  </footer>
);

export default Footer;
