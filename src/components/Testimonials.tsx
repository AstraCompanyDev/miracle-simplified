import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import TestimonialCarousel from "./TestimonialCarousel";

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
    <div className=" bg-white">  
    <div className="flex flex-col gap-10 mx-auto bg-background-warm drop-shadow-md">  
    <section className="pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center animate-fade-in-up">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">
              Google Reviews
            </p>
            <h2 className="text-4xl md:text-5xl font-bold italic font-serif text-foreground mb-6">
              Hear From Our Patients
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore verified Google Reviews to learn how others felt about their visit and overall experience with our services.
            </p>
          </div>
        </div>
      </div>

    </section>
    {/* Testimonials Grid */}
          <TestimonialCarousel />
    </div>
    </div>
  );
};

export default Testimonials;
