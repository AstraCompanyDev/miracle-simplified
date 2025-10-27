import { Sparkles, Heart, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, value: "2+", label: "Years of Experience" },
    { icon: Heart, value: "1,021+", label: "Patients Treated" },
    { icon: Sparkles, value: "21", label: "Studies Conducted" },
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
            <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-foreground mb-6">
              Leading Stem Cell Clinic in the Heart of Bangkok
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Located in the heart of Bangkok, where innovation meets personalized care, the Miracle Regenerative clinic is equipped with the latest advancements in stem cell technology.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-card rounded-2xl p-8 text-center shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="bg-gradient-card rounded-2xl p-10 md:p-12 shadow-soft">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our team of experienced professionals is dedicated to building your healthier future. Situated in the dynamic hub of Bangkok, the clinic offers a serene and modern environment, reflecting our commitment to promoting well-being.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Quality and safety are at the forefront of everything we do, dedicated to providing services that not only meet but exceed industry standards. Our expertise lies in delivering cutting-edge solutions that harness the regenerative capabilities of Stem Cell Science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
