import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center saturate-150"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(45_70%_60%/0.15)_40%,hsl(14_60%_40%/0.4)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in-up">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase animate-fade-in">
            Bangkok's Premier Regenerative Medicine Center
          </p>
          
          <h1 className="text-5xl md:text-7xl font-semibold font-serif leading-tight text-white drop-shadow-lg">
            Your Personalized
            <br />
            <span className="text-accent">Regenerative Solution</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            With regenerative therapies, our expert team revitalizes your body for a healthier future
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              variant="whatsapp" 
              size="lg"
              className="text-lg gap-3"
              onClick={() => window.open('https://wa.me/66817342027', '_blank')}
            >
              <MessageCircle className="h-6 w-6" />
              Chat on WhatsApp
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              className="text-lg gap-3"
              onClick={() => window.open('tel:+66817342027', '_blank')}
            >
              <Phone className="h-5 w-5" />
              +66 81-734-2027
            </Button>
          </div>

          <p className="text-sm text-white/65 pt-4">
            Business Hours: 9:00 AM - 5:00 PM (Monday to Saturday)
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
