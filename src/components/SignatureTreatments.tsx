import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import stemCellImg from "@/assets/stem-cell-therapy.jpg";
import ivTherapyImg from "@/assets/iv-therapy.jpg";
import immunotherapyImg from "@/assets/immunotherapy.jpg";
import jointTherapyImg from "@/assets/joint-therapy.jpg";
import antiAgingImg from "@/assets/anti-aging.jpg";
import performanceImg from "@/assets/performance-therapy.jpg";

const SignatureTreatments = () => {
  const treatments = [
    {
      title: "Stem Cell Therapy",
      description: "Cutting-edge regenerative medicine for cellular renewal and tissue repair",
      image: stemCellImg,
    },
    {
      title: "IV Therapy",
      description: "Hydration and nutrient support for energy, recovery and immunity",
      image: ivTherapyImg,
    },
    {
      title: "Immunotherapy",
      description: "Advanced immune system enhancement for optimal health and vitality",
      image: immunotherapyImg,
    },
    {
      title: "Joint & Cartilage Treatment",
      description: "Regenerative solutions for joint pain, osteoarthritis, and mobility",
      image: jointTherapyImg,
    },
    {
      title: "Anti-Aging Therapy",
      description: "Cellular rejuvenation for youthful vitality and longevity",
      image: antiAgingImg,
    },
    {
      title: "Performance Enhancement",
      description: "Specialized treatments for optimal physical and metabolic health",
      image: performanceImg,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-foreground mb-6">
              Explore Our Signature Therapies
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Targeted solutions designed to rejuvenate, restore, and optimize your health with cutting-edge regenerative medicine.
            </p>
          </div>

          {/* Treatments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-0 shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 bg-gradient-card animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={treatment.image} 
                    alt={treatment.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 font-['Playfair_Display'] group-hover:text-primary transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {treatment.description}
                  </p>
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureTreatments;
