import React from "react";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "918377951951";
    const message = "I'm interested in PURVANCHAL SUNBLISS!!!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        style={{
          animation: 'bounce 2s infinite'
        }}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </button>
    </div>
  );
};