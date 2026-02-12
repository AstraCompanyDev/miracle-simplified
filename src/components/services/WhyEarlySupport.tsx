import { LucideIcon } from "lucide-react";

interface WhyEarlySupportProps {
  title: string;
  earlysupportFactors: {
    title: string;
    description: string;
  }[];
}

const WhyEarlySupport = ({
  title,
  earlysupportFactors,
}: WhyEarlySupportProps) => {
  return (
    <section className="py-20 bg-background-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
              {title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {earlysupportFactors.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start  text-center bg-white rounded-3xl p-6 "
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl text-left font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-left text-muted-foreground text-sm  leading-relaxed">
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

export default WhyEarlySupport;
