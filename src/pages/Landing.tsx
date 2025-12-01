import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle, Star } from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import heroImage from "@/assets/hero-interior.jpg";
import ivTherapyImg from "@/assets/lifestyle-iv.jpg";
import stemCellImg from "@/assets/stem-cell-therapy.jpg";
import skinImg from "@/assets/lifestyle-facial.jpg";
import checkupImg from "@/assets/lifestyle-checkup.jpg";
import clinicShowcase from "@/assets/clinic-main-showcase.jpg";

const Landing = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const treatments = [
    {
      title: "IV Therapy",
      description: "Hydration and nutrient support for energy, recovery and immunity",
      image: ivTherapyImg,
    },
    {
      title: "Stem Cell Therapy",
      description: "Cutting-edge regenerative medicine for skin, joints, and energy optimization",
      image: stemCellImg,
    },
    {
      title: "Skin Rejuvenation",
      description: "Modern aesthetics using Botox, Pico Laser, and anti-aging facials",
      image: skinImg,
    },
    {
      title: "Health Check-Up",
      description: "Routine Medical Screening & Prevention",
      image: checkupImg,
    },
  ];

  const testimonials = [
    {
      name: "Lucy K.",
      text: "Cellular therapy really changed my life! I was struggling with joint pain, but now I feel incredible - more power, no pain, and improved mobility.",
      rating: 5,
    },
    {
      name: "Mark T.",
      text: "I can only say Immunotherapy made me forget about my hip issues. No more pain! Thanks to Miracle Regen, I can enjoy life again!",
      rating: 5,
    },
    {
      name: "Kevin D.",
      text: "Amazing treatment, I wish I would have known before! The performance issues I had are gone. Highly recommend their ED program!",
      rating: 5,
    },
  ];

  const benefits = [
    "World-class regenerative medicine specialists",
    "Cutting-edge stem cell and cellular therapies",
    "Personalized treatment plans for your unique needs",
    "State-of-the-art facility in the heart of Bangkok",
    "Proven results with hundreds of successful treatments",
    "Free initial consultation with no obligation"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center saturate-150"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(45_70%_60%/0.15)_40%,hsl(14_60%_40%/0.4)_100%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in-up">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase">
              Bangkok's Premier Regenerative Medicine Center
            </p>
            
            <h1 className="text-5xl md:text-7xl font-semibold font-serif leading-tight text-white drop-shadow-lg">
              Transform Your Health with
              <br />
              <span className="text-accent">Regenerative Medicine</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
              Book your FREE consultation today and discover how our expert team can revitalize your body for a healthier future
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg"
                className="text-lg gap-3 px-8 py-6 text-xl bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
                onClick={() => setDialogOpen(true)}
              >
                <MessageCircle className="h-7 w-7" />
                Book FREE Consultation
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg"
                className="text-lg gap-3 px-8 py-6"
                onClick={() => window.open('tel:+66817342027', '_blank')}
              >
                <Phone className="h-5 w-5" />
                +66 81-734-2027
              </Button>
            </div>

            <p className="text-sm text-white/70 pt-4">
              ✓ No obligation • ✓ Personalized assessment • ✓ Expert guidance
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif text-foreground mb-6">
                Why Choose Miracle Regenerative Center?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience the highest standard of regenerative medicine in Southeast Asia
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-soft h-[400px]">
                <img 
                  src={clinicShowcase} 
                  alt="Clinic Interior" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(45_70%_60%/0.15)_40%,hsl(14_60%_40%/0.4)_100%)]" />
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="text-lg gap-3 px-8 py-6 bg-primary hover:bg-primary/90"
                onClick={() => setDialogOpen(true)}
              >
                Start Your Journey Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 bg-background-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif text-foreground mb-6">
                Our Signature Therapies
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Targeted solutions designed to rejuvenate, restore, and optimize your health
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {treatments.map((treatment, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-t-[200px] h-[400px] shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0">
                    <img 
                      src={treatment.image} 
                      alt={treatment.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay" />
                  </div>
                  
                  <div className="relative h-full flex flex-col justify-center items-center text-center p-6 text-white">
                    <h3 className="text-2xl font-semibold font-serif mb-3">
                      {treatment.title}
                    </h3>
                    <p className="text-sm opacity-90">
                      {treatment.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="text-lg gap-3 px-8 py-6 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
                onClick={() => setDialogOpen(true)}
              >
                <MessageCircle className="h-6 w-6" />
                Discuss Your Treatment Options
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">
                Google Reviews
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold font-serif text-foreground mb-6">
                Real Results from Real Patients
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Join hundreds of satisfied patients who have transformed their lives with regenerative medicine
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-gradient-card border-0 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in rounded-2xl p-6"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Google Review</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="text-lg gap-3 px-8 py-6 bg-primary hover:bg-primary/90"
                onClick={() => setDialogOpen(true)}
              >
                Get Your Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-semibold font-serif">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-white/90">
              Book your FREE consultation today and take the first step towards a healthier, more vibrant you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                size="lg"
                className="text-lg gap-3 px-8 py-6 text-xl bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
                onClick={() => setDialogOpen(true)}
              >
                <MessageCircle className="h-7 w-7" />
                Book FREE Consultation
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg"
                className="text-lg gap-3 px-8 py-6"
                onClick={() => window.open('tel:+66817342027', '_blank')}
              >
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
            <p className="text-sm text-white/70 pt-4">
              Mon - Sat: 9:00 AM - 5:00 PM | Heart of Bangkok, Thailand
            </p>
          </div>
        </div>
      </section>

      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default Landing;
