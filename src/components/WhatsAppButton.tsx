import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp business number
    const phoneNumber = "919876543210"; // Format: country code + number (no spaces or symbols)
    const message = encodeURIComponent(
      "Hi! I'm interested in learning more about MadeToLead's AI solutions."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-glow flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="group-hover:scale-110 transition-transform" size={24} />
    </button>
  );
};

export default WhatsAppButton;
