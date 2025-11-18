import { Sparkles, Shield, Users, Award } from "lucide-react";
import activeImage from "@/assets/team-experts-new.jpg";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Cutting-Edge Technology",
      description: "Latest advancements in cellular therapy and regenerative medicine",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Industry-leading quality and safety standards",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals dedicated to your care",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "93% success rate with over 5,800 patients treated",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1 animate-fade-in-up">
              <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">
                What We Do
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold font-serif text-foreground mb-6">
                Empower Your Tomorrow: Lifelong Vitality with Cellular Therapy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our expertise lies in delivering cutting-edge solutions that meet the highest standards of quality and safety. Embrace the future of longevity by harnessing the regenerative capabilities of Cellular Therapy.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 animate-fade-in">
              <div className="rounded-2xl overflow-hidden shadow-hover">
                <img 
                  src={activeImage} 
                  alt="Active lifestyle with regenerative medicine"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
