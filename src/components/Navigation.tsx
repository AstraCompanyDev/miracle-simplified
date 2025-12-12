import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, Instagram, Facebook, Phone } from "lucide-react";
import logo from "@/assets/MiracleLogo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Miracle Regenerative Center" className="h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium text-sm tracking-wide transition-colors ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <p className="text-transparent hover:text-transparent transition-colors">Stem Cell</p>
          </div>

          {/* Social Icons & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://instagram.com/miracleregen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/p/Miracle-Regenerative-61575804023437/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <Button
              variant="secondary"
              className="gap-2"
              onClick={() => window.open('tel:+66817342027', '_blank')}
            >
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
            <Button
              variant="whatsapp"
              className="gap-2"
              onClick={() => window.open('https://wa.me/66817342027', '_blank')}
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex gap-4 mt-4 mb-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <Button
              variant="secondary"
              className="w-full mt-4 gap-2"
              onClick={() => {
                setIsOpen(false);
                window.open('tel:+66817342027', '_blank');
              }}
            >
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
            <Button
              variant="whatsapp"
              className="w-full mt-2 gap-2"
              onClick={() => {
                setIsOpen(false);
                window.open('https://wa.me/66817342027', '_blank');
              }}
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
