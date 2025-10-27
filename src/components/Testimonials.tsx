import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lucy K.",
      text: "Cellular therapy really changed my life! I was struggling with joint pain, but now I feel incredible - more power, no pain, and improved mobility. Thank you, guys!",
    },
    {
      name: "Mark T.",
      text: "I can only say Immunotherapy made me forget about my hip issues. No more pain! Thanks to Miracle Regen, I can enjoy life again!",
    },
    {
      name: "Kevin D.",
      text: "Amazing treatment, I wish I would have known before! The performance issues I had are gone. Highly recommend their ED program!",
    },
    {
      name: "Shareen P.",
      text: "The Cell therapy boosted my energy, reduced inflammation, and improved my muscle and cartilage. I feel amazing!",
    },
    {
      name: "Daniel J.",
      text: "It's incredible! Immunotherapy really helped with my knee osteoarthritis and now the pain is completely gone.",
    },
    {
      name: "Anjali T.",
      text: "My diabetes was keeping me awake at night with worry. After this life-changing treatment I don't have to worry any more!",
    },
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-foreground mb-6">
              Hear From Our Patients
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real stories from real people who have experienced the transformative power of regenerative medicine.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-0 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
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
                      <p className="text-sm text-muted-foreground">Verified Patient</p>
                    </div>
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

export default Testimonials;
