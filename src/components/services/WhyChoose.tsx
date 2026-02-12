import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const WhyChoose = ({ benefits }: { benefits: Benefit[] }) => {
  return (
    <section className="py-20 bg-background-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
              Why Choose
            </h2>
            <Link
              to="/"
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              MIRACLE REGENERATIVE CENTER CO., LTD.
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className=" p-6 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className={`w-8 h-8 text-primary`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className=" text-muted-foreground text-sm  leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
