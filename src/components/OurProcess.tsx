import { UserSearch, ClipboardList, Sparkles, HeartPulse} from "lucide-react";
import placeholderIcon from '@/assets/lifestyle-checkup.jpg';

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

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: UserSearch, 
                  image: placeholderIcon,
                  title: "Consultation", 
                  desc: "Comprehensive health review and discussion to understand your individual needs.",
                },
                { 
                  icon: ClipboardList, 
                  image: placeholderIcon,
                  title: "Custom Plan", 
                  desc: "Personalized program designed to support your daily well-being and balance.",
                },
                { 
                  icon: Sparkles,
                  image: placeholderIcon,
                  title: "Support Program", 
                  desc: "Professional care provided in a safe and comfortable environment.",
                },
                { 
                  icon: HeartPulse, 
                  image: placeholderIcon,
                  title: "Follow-up", 
                  desc: "Ongoing guidance and monitoring to support consistent daily function and overall balance.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white relative overflow-hidden rounded-t-[100px] md:rounded-t-[200px] px-6 pt-10 pb-3 text-center shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-overlay" />
                    </div>

                    <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-4 bg-black/30 rounded-full flex items-center justify-center">
                      <Icon className={`w-8 h-8 text-white`} />
                    </div>
                    <h3 className="text-xl text-white font-semibold mb-3">{item.title}</h3>
                    <p className="text-white text-sm  leading-relaxed">
                      {item.desc}
                    </p>
                    </div>
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