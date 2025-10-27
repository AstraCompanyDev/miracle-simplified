import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lucy K.",
      text: "Cellular therapy really changed my life! I was struggling with joint pain, but now I feel incredible - more power, no pain, and improved mobility. Thank you, guys!",
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
    {
      name: "Shareen P.",
      text: "The Cell therapy boosted my energy, reduced inflammation, and improved my muscle and cartilage. I feel amazing!",
      rating: 5,
    },
    {
      name: "Daniel J.",
      text: "It's incredible! Immunotherapy really helped with my knee osteoarthritis and now the pain is completely gone.",
      rating: 5,
    },
    {
      name: "Anjali T.",
      text: "My diabetes was keeping me awake at night with worry. After this life-changing treatment I don't have to worry any more!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">
              Google Reviews
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold font-serif text-foreground mb-6">
              Hear From Our Patients
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Read verified Google Reviews from real patients who have experienced the transformative power of regenerative medicine.
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
                  {/* Google Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
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
                    <svg className="h-6 w-6" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
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
