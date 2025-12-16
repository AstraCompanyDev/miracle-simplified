import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Shield, Users, MessageCircle } from "lucide-react";
import stemCellImg from "@/assets/stem-cell-therapy.jpg";
import ivTherapyImg from "@/assets/iv-therapy.jpg";
import immunotherapyImg from "@/assets/immunotherapy.jpg";

import JointPainImg from "@/assets/joint-pain.webp";
import CellularTherapyImg from "@/assets/cellular-therapy.webp";
import IVNutrientImg from "@/assets/IV.webp";
import { url } from "inspector";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      // icon: Sparkles,
      title: "Joint pain Support",
      description: "Approaches that help ease routine joint discomfort and support comfortable daily movement.",
      image: JointPainImg,
      url: "/services/joint-pain-support"
    },
    {
      // icon: Heart,
      title: "Cellular Therapies",
      description: "Support designed to help maintain vitality and everyday comfort as you age.",
      image: CellularTherapyImg,
      url: "/services/cellular-therapy"
    },
    {
      // icon: Shield,
      title: "IV Nutrient Support",
      description: "Hydration-focused support to help maintain daily energy.",
      image: IVNutrientImg,
      url: "/services/iv-nutrient-support"
    },
  ];

  const benefits = [
    "Personalized treatment plans tailored to your needs",
    "State-of-the-art facilities in central Bangkok",
    "Experienced medical professionals",
    "Comprehensive health assessments",
    "Ongoing support and follow-up care",
    "International quality standards",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">
              What We Offer
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold font-serif mb-6 text-foreground">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive health support programs designed to support overall well-being and daily comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link to={service.url} key={index} className="no-underline">
                <Card 
                  key={index}
                  className="h-full overflow-hidden border-0 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    {/* <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div> */}
                    <h3 className="text-2xl font-semibold font-serif mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                      
                      
                    </p>
                      <a href="#" className="text-primary underline">Read More</a>
                  </CardContent>
                </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
                Why Choose <Link to="/">MIRACLE REGENERATIVE CENTER CO., LTD.</Link>
              </h2>
              <p className="text-lg text-muted-foreground">
                We combine cutting-edge technology with personalized care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-soft animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-semibold font-serif mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book your free discovery call and learn how our services can help you
            </p>
            <Button
              variant="whatsapp"
              size="lg"
              className="gap-2"
              onClick={() => window.open('https://wa.me/66817342027', '_blank')}
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
