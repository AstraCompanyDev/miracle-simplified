import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "66817342027";
  const whatsappMessage = "Hi! I'd like to learn more about your regenerative medicine services.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-hover border border-border z-50 animate-scale-in">
          <div className="bg-whatsapp text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Chat with us</h3>
                <p className="text-xs text-white/90">We typically reply instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/90 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-6">
            <p className="text-sm text-muted-foreground mb-4">
              Hi there! 👋 Have questions about our regenerative medicine services? We're here to help!
            </p>
            
            <Button
              variant="whatsapp"
              className="w-full gap-2"
              onClick={openWhatsApp}
            >
              <MessageCircle className="h-4 w-4" />
              Start Chat on WhatsApp
            </Button>
            
            <p className="text-xs text-muted-foreground text-center mt-3">
              Available Mon-Sat, 9AM-5PM
            </p>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-whatsapp text-white rounded-full shadow-hover hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 animate-fade-in"
        aria-label="Open live chat"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
        
        {/* Online indicator dot */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse" />
        )}
      </button>
    </>
  );
};

export default LiveChat;
