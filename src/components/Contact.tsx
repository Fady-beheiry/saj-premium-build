import { useState } from "react";
import { z } from "zod";
import { Phone, MessageCircle, MapPin, Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const PHONE = "+20 10 0011 6438";
const PHONE_TEL = "+201000116438";
const WHATSAPP = "https://wa.me/201000116438";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  phone: z.string().trim().min(6, "Phone is required").max(30),
  location: z.string().trim().min(2, "Location is required").max(120),
  projectType: z.string().min(1, "Select a project type"),
  message: z.string().trim().max(1000).optional(),
});

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      location: fd.get("location"),
      projectType: fd.get("projectType"),
      message: fd.get("message") || "",
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please review the form");
      return;
    }
    setSubmitting(true);
    const text = `New project inquiry%0A%0AName: ${encodeURIComponent(parsed.data.name)}%0APhone: ${encodeURIComponent(parsed.data.phone)}%0ALocation: ${encodeURIComponent(parsed.data.location)}%0AType: ${encodeURIComponent(parsed.data.projectType)}${parsed.data.message ? `%0AMessage: ${encodeURIComponent(parsed.data.message)}` : ""}`;
    window.open(`${WHATSAPP}?text=${text}`, "_blank", "noopener,noreferrer");
    toast.success("Thank you — opening WhatsApp to confirm your inquiry.");
    setSubmitting(false);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-primary text-primary-foreground">
      <div className="container-pro grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.25em] font-medium text-secondary/80 mb-5">Get in Touch</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-balance">
            Start your project today.
          </h2>
          <p className="mt-6 text-primary-foreground/75 leading-relaxed max-w-md">
            Tell us about your space. We'll respond within 24 hours with a tailored consultation plan.
          </p>

          <div className="mt-12 space-y-6">
            <a href={`tel:${PHONE_TEL}`} className="group flex items-center gap-5 border-t border-secondary/30 pt-6">
              <Phone size={20} className="text-secondary" />
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-secondary/70">Call us</div>
                <div className="font-display text-xl mt-1 group-hover:text-secondary transition-colors">{PHONE}</div>
              </div>
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 border-t border-secondary/30 pt-6">
              <MessageCircle size={20} className="text-secondary" />
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-secondary/70">WhatsApp</div>
                <div className="font-display text-xl mt-1 group-hover:text-secondary transition-colors">Chat with us</div>
              </div>
            </a>
            <div className="flex items-center gap-5 border-t border-secondary/30 pt-6">
              <MapPin size={20} className="text-secondary" />
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-secondary/70">Based in</div>
                <div className="font-display text-xl mt-1">Cairo, Egypt</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-7 bg-background text-foreground p-8 md:p-12 shadow-elegant">
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Full Name" name="name" placeholder="Your name" required />
            <Field label="Phone" name="phone" type="tel" placeholder="+20 ..." required />
            <Field label="Location" name="location" placeholder="City / area" required />
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Project Type</label>
              <select
                name="projectType"
                required
                defaultValue=""
                className="w-full bg-transparent border-0 border-b border-border py-3 text-sm focus:outline-none focus:border-primary transition-colors"
              >
                <option value="" disabled>Select a service</option>
                <option>Construction</option>
                <option>Interior Finishing</option>
                <option>Renovation</option>
                <option>Turnkey Project</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Brief (optional)</label>
            <textarea
              name="message"
              rows={4}
              maxLength={1000}
              placeholder="Tell us a little about your project..."
              className="w-full bg-transparent border-0 border-b border-border py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-10 w-full md:w-auto group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            Start Your Project Today
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  );
};

const Field = ({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) => (
  <div>
    <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{label}</label>
    <input
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      maxLength={255}
      className="w-full bg-transparent border-0 border-b border-border py-3 text-sm focus:outline-none focus:border-primary transition-colors"
    />
  </div>
);

export default Contact;
