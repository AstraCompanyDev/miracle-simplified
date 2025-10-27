import { Button } from "@/components/ui/button";
import ivTherapyImg from "@/assets/lifestyle-iv.jpg";
import stemCellImg from "@/assets/stem-cell-therapy.jpg";
import skinImg from "@/assets/lifestyle-facial.jpg";
import checkupImg from "@/assets/lifestyle-checkup.jpg";

const SignatureTreatments = () => {
  const treatments = [
    {
      title: "IV Therapy",
      description: "Hydration and nutrient support for energy, recovery and immunity",
      image: ivTherapyImg,
      cta: "VIEW ALL IV DRIP",
    },
    {
      title: "Stem Cell Therapy",
      description: "Cutting-edge regenerative medicine for skin, joints, and energy optimization",
      image: stemCellImg,
      cta: "VIEW CELL THERAPIES",
    },
    {
      title: "Skin Rejuvenation",
      description: "Modern aesthetics using Botox, Pico Laser, and anti-aging facials",
      image: skinImg,
      cta: "VIEW SKIN TREATMENTS",
    },
    {
      title: "Health Check-Up",
      description: "Routine Medical Screening & Prevention",
      image: checkupImg,
      cta: "VIEW HEALTH CHECK-UP",
    },
  ];

  return (
    <section className="py-20 bg-background-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold font-serif text-foreground mb-6">
              Explore Our Signature Therapies
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Targeted solutions designed to rejuvenate, restore, and optimize your health with cutting-edge regenerative medicine.
            </p>
          </div>

          {/* Treatments Grid - Arched Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-t-[200px] h-[450px] shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={treatment.image} 
                    alt={treatment.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay" />
                </div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 text-white">
                  <div className="flex-1 flex flex-col justify-center items-center text-center">
                    <p className="text-sm mb-4 opacity-90 leading-relaxed">
                      {treatment.description}
                    </p>
                    <h3 className="text-3xl font-semibold font-serif mb-6">
                      {treatment.title}
                    </h3>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button 
                      variant="secondary"
                      className="bg-white text-foreground hover:bg-white/90 font-semibold px-8 rounded-full"
                    >
                      {treatment.cta}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureTreatments;
