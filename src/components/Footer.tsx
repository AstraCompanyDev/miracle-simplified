import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img src={logo} alt="Miracle Regenerative Clinic" className="h-16 w-auto brightness-0 invert" />
          </Link>
          
          <p className="text-white/75 text-center text-sm max-w-md">
            Leading cellular therapy clinic in Bangkok offering regenerative therapies and personalized care for a healthier future.
          </p>
          
          <div className="flex gap-4 mb-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/75 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/75 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
          </div>
          
          <div className="flex gap-6 text-sm text-white/75">
            <a href="tel:+6681734202" className="hover:text-white/95 transition-colors">
              +66 81-734-2027
            </a>
            <span>•</span>
            <span>Mon - Sat: 9AM - 5PM</span>
          </div>
          
          <div className="border-t border-white/15 w-full max-w-md pt-4 text-center text-xs text-white/60">
            © {new Date().getFullYear()} Miracle Regenerative Clinic. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
