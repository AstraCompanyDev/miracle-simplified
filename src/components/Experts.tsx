import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import teamImage from "@/assets/team-experts-updated.jpg";

const Experts = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative animate-fade-in">
              <div className="rounded-2xl overflow-hidden shadow-hover">
                <img 
                  src={teamImage} 
                  alt="Medical experts at Miracle Regenerative Center"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-hover">
                <div className="text-3xl font-semibold">93%</div>
                <div className="text-sm font-normal">Success Rate</div>
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-in-up">
              <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">
                Meet Our Experts
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold font-serif text-foreground mb-6">
                Expert and Professional in Regenerative Medicine
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our team stands at the forefront of regenerative medicine, embodying a commitment to excellence and professionalism in every aspect of our work. With a collective expertise spanning the intricacies of regenerative therapies, our professionals are dedicated to staying abreast of the latest advancements in the field.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We bring a wealth of knowledge to the table, ensuring that our patients receive the highest standard of care. Our expertise lies in delivering cutting-edge solutions that meet the highest standards of quality and safety.
              </p>
              <Button variant="default" size="lg" className="gap-2">
                Discover More
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
