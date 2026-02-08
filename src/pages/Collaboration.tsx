import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroInterior from "@/assets/hero-interior.jpg";
import PartnerGrid from "@/components/PartnerGrid";

const Collaboration = () => {

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      {/* <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroInterior})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Our Collaboration Partners
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              We collaborate with organizations and industry professionals who
              share a common approach to quality-focused, innovative, and
              patient-centered practices. These collaborations support ongoing
              development, service improvement, and professional knowledge
              exchange.
            </p>
          </div>
        </div>
      </section> */}

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0  bg-cover bg-center"
          style={{ backgroundImage: `url(${heroInterior})` }}
        >
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(45_70%_60%/0.15)_40%,hsl(14_60%_40%/0.4)_100%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in-up">
          <div className="max-w-6xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-7xl font-semibold font-serif leading-tight text-white drop-shadow-lg">
              Our Collaboration Partners
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed mx-auto drop-shadow-md">
              We collaborate with organizations and industry professionals who
              share a common approach to quality-focused, innovative, and
              patient-centered practices. These collaborations support ongoing
              development, service improvement, and professional knowledge
              exchange.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Grid */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <PartnerGrid />
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              {t("collab.ctaTitle")}
            </h2>
            <p className="text-secondary-foreground/80 mb-8 text-lg">
              {t("collab.ctaDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="default"
                className="gap-2"
                onClick={() =>
                  window.open("https://wa.me/66817342027", "_blank")
                }
              >
                <MessageCircle className="h-5 w-5" />
                {t("collab.ctaWhatsApp")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
                onClick={() =>
                  (window.location.href = "mailto:info@mrcbkk.com")
                }
              >
                {t("collab.ctaEmail")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Collaboration;
