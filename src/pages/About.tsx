import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import Experts from "@/components/Experts";
import ClinicShowcase from "@/components/ClinicShowcase";
import { Award, Heart, Sparkles } from "lucide-react";

const About = () => {

  const stats = [
    // { icon: Award, value: "14", label: "Years of Experience" },
    { icon: Heart, value: "5,800", label: "Patients Treated" },
    { icon: Sparkles, value: "124", label: "Studies Conducted" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">
              About Us
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold font-serif mb-6 text-foreground">
              Your Regenerative Medicine Clinic
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Located at Bangkok Mediplex, Soi Sukhumvit 42, Bangkok, where innovation meets personalized care, the Miracle Regenerative clinic is equipped with the latest advancements in cellular therapy.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-card rounded-2xl p-8 text-center shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-semibold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ClinicShowcase />
      <Experts />
      
      <Footer />
    </div>
  );
};

export default About;
