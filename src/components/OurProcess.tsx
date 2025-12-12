import { UserSearch, ClipboardList, Sparkles, HeartPulse} from "lucide-react";

const OurProcess = () => {
  return (
      <section className="py-20 bg-background-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
                Our Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A personalized approach to your long-term well-being
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: UserSearch, 
                  title: "Consultation", 
                  desc: "Comprehensive health review and discussion to understand your individual needs.",
                  color: "text-primary"
                },
                { 
                  icon: ClipboardList, 
                  title: "Custom Plan", 
                  desc: "Personalized program designed to support your daily well-being and balance.",
                  color: "text-primary"
                },
                { 
                  icon: Sparkles, 
                  title: "Support Program", 
                  desc: "Professional care provided in a safe and comfortable environment.",
                  color: "text-primary"
                },
                { 
                  icon: HeartPulse, 
                  title: "Follow-up", 
                  desc: "Ongoing guidance and monitoring to support consistent daily function and overall balance.",
                  color: "text-primary"
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-3xl p-6 text-center shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-left text-muted-foreground text-sm  leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
  );
};

export default OurProcess;