import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, MessageCircle, Mail } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Bangkok Mediplex", "Soi Sukhumvit 42, Bangkok"],
      link: "https://maps.app.goo.gl/oVUtGM6BpNrzVTBSA",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+66 81-734-2027"],
      link: "tel:+66817342027",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday", "9:00 AM - 5:00 PM"],
    },
  ];

  return (
    <section className="pt-20 pb-8 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12 animate-fade-in-up max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6 text-foreground">
              Book Your FREE Discovery Call
            </h2>
            <p className="text-xl text-muted-foreground">
              Take the first step towards a healthier future. Our expert team is
              ready to help you with personalized regenerative solutions.
            </p>
          </div>

          {/* Contact Info Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 hover:bg-accent/50 transition-all duration-300 animate-fade-in shadow-soft">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Location</h3>
              <p className="text-muted-foreground">Bangkok Mediplex</p>
              <p className="text-muted-foreground">Soi Sukhumvit 42, Bangkok</p>
            </div>

            <div className="bg-white rounded-2xl p-6 hover:bg-accent/50 transition-all duration-300 animate-fade-in shadow-soft" style={{ animationDelay: '0.1s' }}>
              <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Phone</h3>
              <a href="tel:+66817342027" className="text-muted-foreground hover:text-primary transition-colors">
                +66 81-734-2027
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 hover:bg-accent/50 transition-all duration-300 animate-fade-in shadow-soft" style={{ animationDelay: '0.2s' }}>
              <Clock className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Business Hours</h3>
              <p className="text-muted-foreground">Mon - Sat</p>
              <p className="text-muted-foreground">9:00 AM - 5:00 PM</p>
            </div>
          </div> */}

          <section className="bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="border-0 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => {
                        if (info.link) {
                            window.location.href = info.link;
                        }
                      }}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                          <info.icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg mb-3">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <Link
                            to={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.details.map((detail, idx) => (
                              <p key={idx}>{detail}</p>
                            ))}
                          </Link>
                        ) : (
                          info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button
              variant="whatsapp"
              size="lg"
              className="text-lg gap-3"
              onClick={() => window.open("https://wa.me/66817342027", "_blank")}
            >
              <MessageCircle className="h-6 w-6" />
              Chat on WhatsApp Now
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="text-lg gap-3"
              onClick={() => window.open("tel:+66817342027", "_blank")}
            >
              <Phone className="h-5 w-5" />
              Call Us Today
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Free consultation • No obligation • Personalized treatment plans
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
