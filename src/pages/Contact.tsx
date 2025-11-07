import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactMap from "@/components/ContactMap";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Heart of Bangkok", "Thailand"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+66 81-734-2027"],
      link: "tel:+66817342027",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@miracleregen.com"],
      link: "mailto:info@miracleregen.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday", "9:00 AM - 5:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">
              Get In Touch
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold font-serif mb-6 text-foreground">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get in touch with our team to start your journey to better health
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                      <info.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.details.map((detail, idx) => (
                          <p key={idx}>{detail}</p>
                        ))}
                      </a>
                    ) : (
                      info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">{detail}</p>
                      ))
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <h2 className="text-3xl font-semibold font-serif mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+66 81-234-5678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us about your health goals..."
                    />
                  </div>

                  <Button variant="default" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Quick Contact */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-3xl font-semibold font-serif mb-6">
                  Prefer to Chat Directly?
                </h2>
                
                <div className="bg-gradient-card rounded-2xl p-8 shadow-soft mb-6">
                  <h3 className="text-xl font-semibold mb-4">Book Your FREE Discovery Call</h3>
                  <p className="text-muted-foreground mb-6">
                    Connect with our expert team on WhatsApp for immediate assistance and personalized consultation.
                  </p>
                  <Button
                    variant="whatsapp"
                    size="lg"
                    className="w-full gap-2"
                    onClick={() => window.open('https://wa.me/66817342027', '_blank')}
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                </div>

                <div className="bg-gradient-card rounded-2xl p-8 shadow-soft">
                  <h3 className="text-xl font-semibold mb-4">Call Us Directly</h3>
                  <p className="text-muted-foreground mb-6">
                    Speak with our team during business hours for immediate support.
                  </p>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full gap-2"
                    onClick={() => window.open('tel:+66817342027', '_blank')}
                  >
                    <Phone className="h-5 w-5" />
                    +66 81-734-2027
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold font-serif text-center mb-8">
              Visit Our Clinic
            </h2>
            <ContactMap />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
