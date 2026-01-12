import { Sparkles, Heart, Award } from "lucide-react";

const About = () => {
  const stats = [
    // { icon: Award, value: "14", label: "Years of Experience" },
    { icon: Heart, value: "5,800", label: "Patients Treated" },
    { icon: Sparkles, value: "124", label: "Studies Conducted" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold font-serif text-foreground mb-6">
              Personalized Health & Well-Being in Bangkok
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Located at Bangkok Mediplex, Soi Sukhumvit 42, Bangkok, where innovation meets personalized care, the clinic offers programs designed to support overall well-being.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:gap-8 gap-3">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-card rounded-2xl md:p-8 p-2 text-center shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="md:h-8 md:w-8 w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-semibold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
