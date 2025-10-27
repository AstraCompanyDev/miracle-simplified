import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { UserSearch, ClipboardList, Sparkles, HeartPulse, Microscope, Dna, Droplets, Syringe } from "lucide-react";
import stemCellImg from "@/assets/stem-cell-therapy.jpg";
import ivTherapyImg from "@/assets/lifestyle-iv.jpg";
import immunotherapyImg from "@/assets/immunotherapy.jpg";
import jointTherapyImg from "@/assets/joint-therapy.jpg";

const Treatments = () => {
  const primaryTreatments = [
    {
      title: "MSCs (Mesenchymal Stem Cells)",
      description: "Advanced regenerative medicine utilizing mesenchymal stem cells for cellular renewal and tissue repair",
      icon: Microscope,
      details: "MSCs are multipotent stromal cells that can differentiate into a variety of cell types. They offer powerful regenerative capabilities for tissue repair, immune modulation, and anti-aging benefits.",
      image: stemCellImg,
    },
    {
      title: "Exosomes",
      description: "Next-generation cellular communication therapy for enhanced healing and regeneration",
      icon: Dna,
      details: "Exosomes are nano-sized vesicles that facilitate cell-to-cell communication and tissue regeneration. They deliver powerful growth factors and genetic material to promote healing.",
      image: immunotherapyImg,
    },
    {
      title: "Growth Factor Therapy",
      description: "Concentrated growth factors to stimulate natural healing and tissue regeneration",
      icon: Sparkles,
      details: "Growth factor therapy harnesses your body's natural healing proteins to accelerate tissue repair, reduce inflammation, and promote cellular regeneration.",
      image: jointTherapyImg,
    },
    {
      title: "PRP (Platelet-Rich Plasma)",
      description: "Autologous platelet-rich plasma therapy for enhanced healing and rejuvenation",
      icon: Droplets,
      details: "PRP therapy uses concentrated platelets from your own blood to promote healing, reduce inflammation, and stimulate collagen production.",
      image: ivTherapyImg,
    },
  ];

  const advancedTreatments = [
    {
      title: "NK & NKT Therapy",
      description: "Natural Killer cell therapy for enhanced immune function and disease prevention",
      details: "NK and NKT cells are powerful immune cells that help identify and eliminate abnormal cells, providing advanced immune support.",
    },
    {
      title: "CAR-T Therapy",
      description: "Chimeric Antigen Receptor T-cell therapy for targeted immune response",
      details: "CAR-T therapy is a cutting-edge immunotherapy that genetically modifies T-cells to target specific cells for enhanced treatment outcomes.",
    },
    {
      title: "Ozone Therapy",
      description: "Medical-grade ozone therapy to elevate oxygen levels and boost immunity",
      details: "Ozone therapy enhances oxygen delivery to cells, activates the immune system, improves circulation, and reduces oxidative stress for comprehensive wellness.",
    },
    {
      title: "Chelation Therapy",
      description: "Advanced detoxification to remove heavy metals and toxins from the body",
      details: "Chelation therapy uses specialized agents to bind and eliminate heavy metals, supporting cardiovascular health, neurological function, and overall detoxification.",
    },
    {
      title: "Plasmapheresis",
      description: "Therapeutic plasma exchange for immune system optimization",
      details: "Plasmapheresis separates and purifies blood plasma to remove harmful substances, toxins, and antibodies, enhancing immune function and overall health.",
    },
  ];

  const supplementalTherapies = [
    {
      title: "NAD+ Infusion",
      description: "Essential coenzyme therapy for energy, longevity, and cellular repair",
      details: "NAD+ is vital for cellular energy production, DNA repair, and anti-aging. Infusion therapy restores declining NAD+ levels to enhance metabolism, cognitive function, and overall vitality.",
    },
    {
      title: "Vitamin IVs",
      description: "Direct nutrient delivery for optimal absorption and rapid results",
      details: "IV vitamin therapy includes Vitamin C, B Complex, Glutathione, Magnesium, and Meyers Cocktail for immune support, energy enhancement, and cellular health.",
    },
    {
      title: "Colon Hydrotherapy",
      description: "Gentle colon cleansing for improved digestive health and detoxification",
      details: "Colon hydrotherapy supports digestive wellness by removing accumulated waste, promoting nutrient absorption, and enhancing overall vitality.",
    },
    {
      title: "Curcumin Therapy",
      description: "Powerful anti-inflammatory and antioxidant therapy from turmeric",
      details: "Curcumin offers potent anti-inflammatory and antioxidant benefits for chronic pain relief, immune support, and overall wellness.",
    },
    {
      title: "ALA (Alpha-Lipoic Acid)",
      description: "Powerful antioxidant for metabolic health and nerve function",
      details: "ALA supports blood sugar regulation, nerve health, weight management, and provides powerful antioxidant protection for overall wellness.",
    },
    {
      title: "EGCG",
      description: "Green tea extract for antioxidant support and metabolic enhancement",
      details: "EGCG offers powerful antioxidant benefits, supports weight management, heart health, and cognitive function.",
    },
    {
      title: "Resveratrol",
      description: "Natural polyphenol for longevity and cardiovascular health",
      details: "Resveratrol provides antioxidant protection, supports heart health, cognitive function, and promotes healthy aging.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background-warm to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">
              Advanced Regenerative Medicine
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold font-serif mb-6 text-foreground">
              Explore Our Treatments
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our comprehensive range of cutting-edge therapies designed to restore, rejuvenate, and optimize your health at the cellular level
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Tabs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="primary" className="w-full">
              <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-12">
                <TabsTrigger value="primary" className="text-sm md:text-base">
                  Primary Therapies
                </TabsTrigger>
                <TabsTrigger value="advanced" className="text-sm md:text-base">
                  Advanced Therapies
                </TabsTrigger>
                <TabsTrigger value="supplemental" className="text-sm md:text-base">
                  Supplemental
                </TabsTrigger>
              </TabsList>

              {/* Primary Therapies */}
              <TabsContent value="primary" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {primaryTreatments.map((treatment, index) => {
                    const Icon = treatment.icon;
                    return (
                      <div
                        key={index}
                        className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 group"
                      >
                        <div className="relative h-64 overflow-hidden">
                          <img 
                            src={treatment.image} 
                            alt={treatment.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-6 right-6">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <h3 className="text-2xl font-semibold font-serif text-white">
                                {treatment.title}
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-muted-foreground mb-4">
                            {treatment.description}
                          </p>
                          <p className="text-sm text-foreground/80 leading-relaxed">
                            {treatment.details}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>

              {/* Advanced Therapies */}
              <TabsContent value="advanced" className="animate-fade-in">
                <div className="bg-card rounded-2xl shadow-soft p-8">
                  <Accordion type="single" collapsible className="w-full">
                    {advancedTreatments.map((treatment, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left hover:no-underline">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <Syringe className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold font-serif text-foreground">
                                {treatment.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                {treatment.description}
                              </p>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pt-4 pl-13 pr-4">
                            <p className="text-foreground/80 leading-relaxed">
                              {treatment.details}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>

              {/* Supplemental Therapies */}
              <TabsContent value="supplemental" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {supplementalTherapies.map((treatment, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <HeartPulse className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold font-serif mb-3 text-foreground">
                        {treatment.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {treatment.description}
                      </p>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {treatment.details}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background-warm">
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
