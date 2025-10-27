import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in-up">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase animate-fade-in">
            Bangkok's Premier Regenerative Medicine Center
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight text-white/95">
            Your Personalized
            <br />
            <span className="text-primary">Regenerative Solution</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/85 max-w-2xl mx-auto">
            With regenerative therapies, our expert team revitalizes your body for a healthier future
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              variant="whatsapp" 
              size="lg"
              className="text-lg gap-3"
              onClick={() => window.open('https://wa.me/6681734202', '_blank')}
            >
              <MessageCircle className="h-6 w-6" />
              Chat on WhatsApp
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              className="text-lg gap-3"
              onClick={() => window.open('tel:+6681734202', '_blank')}
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
