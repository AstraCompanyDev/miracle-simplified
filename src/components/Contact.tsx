import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Section Header */}
          <div className="mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-6">
              Book Your FREE Discovery Call
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Take the first step towards a healthier future. Our expert team is ready to help you with personalized regenerative solutions.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 animate-fade-in">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-white" />
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p className="text-white/80">Heart of Bangkok</p>
              <p className="text-white/80">Thailand</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Phone className="h-8 w-8 mx-auto mb-4 text-white" />
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <a href="tel:+6681734202" className="text-white/90 hover:text-white transition-colors">
                +66 81-734-2027
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Clock className="h-8 w-8 mx-auto mb-4 text-white" />
              <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
              <p className="text-white/80">Mon - Sat</p>
              <p className="text-white/80">9:00 AM - 5:00 PM</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button 
              variant="whatsapp"
              size="lg"
              className="text-lg gap-3 bg-whatsapp hover:bg-whatsapp/90"
              onClick={() => window.open('https://wa.me/6681734202', '_blank')}
            >
              <MessageCircle className="h-6 w-6" />
              Chat on WhatsApp Now
            </Button>
            
            <Button 
              variant="secondary"
              size="lg"
              className="text-lg gap-3 bg-white text-secondary hover:bg-white/90"
              onClick={() => window.open('tel:+6681734202', '_blank')}
            >
              <Phone className="h-5 w-5" />
              Call Us Today
            </Button>
          </div>

          <p className="text-sm text-white/70 mt-8">
            Free consultation • No obligation • Personalized treatment plans
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
