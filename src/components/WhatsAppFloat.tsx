import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/201000116438"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-40 group"
  >
    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    <span className="relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform">
      <MessageCircle size={24} fill="white" strokeWidth={0} />
    </span>
  </a>
);

export default WhatsAppFloat;
