import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { UserSearch, ClipboardList, Sparkles, HeartPulse } from "lucide-react";
import stemCellImg from "@/assets/stem-cell-therapy.jpg";
import ivTherapyImg from "@/assets/lifestyle-iv.jpg";
import immunotherapyImg from "@/assets/immunotherapy.jpg";
import jointTherapyImg from "@/assets/joint-therapy.jpg";
import antiAgingImg from "@/assets/anti-aging.jpg";
import performanceImg from "@/assets/performance-therapy.jpg";

const Treatments = () => {
  const treatments = [
    {
      title: "Stem Cell Therapy",
      description: "Cutting-edge regenerative medicine for cellular renewal and tissue repair",
      benefits: ["Tissue regeneration", "Anti-aging effects", "Enhanced healing", "Pain reduction"],
      image: stemCellImg,
    },
    {
      title: "IV Therapy",
      description: "Hydration and nutrient support for energy, recovery and immunity",
      benefits: ["Instant hydration", "Energy boost", "Immune support", "Quick recovery"],
      image: ivTherapyImg,
    },
    {
      title: "Immunotherapy",
      description: "Advanced immune system enhancement for optimal health and vitality",
      benefits: ["Stronger immunity", "Disease prevention", "Better health", "Vitality boost"],
      image: immunotherapyImg,
    },
    {
      title: "Joint & Cartilage Treatment",
      description: "Regenerative solutions for joint pain, osteoarthritis, and mobility",
      benefits: ["Pain relief", "Improved mobility", "Cartilage repair", "Reduced inflammation"],
      image: jointTherapyImg,
    },
    {
      title: "Anti-Aging Therapy",
      description: "Cellular rejuvenation for youthful vitality and longevity",
      benefits: ["Skin rejuvenation", "Energy increase", "Cognitive boost", "Hormone balance"],
      image: antiAgingImg,
    },
    {
      title: "Performance Enhancement",
      description: "Specialized treatments for optimal physical and metabolic health",
      benefits: ["Enhanced performance", "Better recovery", "Increased stamina", "Metabolic optimization"],
      image: performanceImg,
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
              Advanced Therapies
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold font-serif mb-6 text-foreground">
              Our Treatments
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our comprehensive range of regenerative therapies designed to restore, rejuvenate, and optimize your health
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatments.map((treatment, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={treatment.image} 
                      alt={treatment.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold font-serif mb-3">
                      {treatment.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {treatment.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {treatment.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
                Our Treatment Process
              </h2>
              <p className="text-lg text-muted-foreground">
                A personalized approach to your regenerative journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: UserSearch, 
                  title: "Consultation", 
                  desc: "Comprehensive health assessment and medical history review",
                  color: "text-primary"
                },
                { 
                  icon: ClipboardList, 
                  title: "Custom Plan", 
                  desc: "Personalized treatment protocol designed for your unique needs",
                  color: "text-primary"
                },
                { 
                  icon: Sparkles, 
                  title: "Treatment", 
                  desc: "Professional care delivery in our state-of-the-art facility",
                  color: "text-primary"
                },
                { 
                  icon: HeartPulse, 
                  title: "Follow-up", 
                  desc: "Ongoing support, monitoring and progress optimization",
                  color: "text-primary"
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 text-center shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Treatments;
