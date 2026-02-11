import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import teamImage from "@/assets/meet-doctor-expert.webp";
import { Link } from "react-router-dom";

const Experts = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in-up">
              <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">
                Meet Our Experts
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold font-serif text-foreground mb-6">
                Experienced and Professional Team in Regenerative Medicine Based
                Care
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our team is committed to professionalism and quality in
                regenerative medicine based care. With collective experience
                across various regenerative medicine concepts and approaches,
                our professionals continuously develop their knowledge and
                skills to remain informed of ongoing developments in the field.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We bring a strong foundation of knowledge and experience to
                support individualized care, with a focus on quality, safety,
                and appropriate standards of practice.
              </p>
              <Link to={"/contact"}>
                <Button variant="default" size="lg" className="gap-2">
                  Discover More
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            {/* Image */}
            <div className="relative animate-fade-in">
              <div className="rounded-2xl overflow-hidden shadow-hover">
                <img
                  src={teamImage}
                  alt="Medical experts at Miracle Regenerative Center"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
              {/* <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-hover">
                <div className="text-3xl font-semibold">93%</div>
                <div className="text-sm font-normal">Success Rate</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
