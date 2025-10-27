import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary fill-primary" />
            <span className="text-lg font-semibold text-white/95">Miracle Regenerative Center</span>
          </div>
          
          <p className="text-white/75 text-center text-sm max-w-md">
            Leading stem cell clinic in Bangkok offering regenerative therapies and personalized care for a healthier future.
          </p>
          
          <div className="flex gap-6 text-sm text-white/75">
            <a href="tel:+6681734202" className="hover:text-white/95 transition-colors">
              +66 81-734-2027
            </a>
            <span>•</span>
            <span>Mon - Sat: 9AM - 5PM</span>
          </div>
          
          <div className="border-t border-white/15 w-full max-w-md pt-4 text-center text-xs text-white/60">
            © {new Date().getFullYear()} Miracle Regenerative Center. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
