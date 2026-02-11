import { UserSearch, ClipboardList, Sparkles, HeartPulse, Icon} from "lucide-react";
import ConsultationIcon from '@/assets/lifestyle-checkup.jpg';
import CustomPlan from '@/assets/custom-plan.webp';
import SupportProgram from '@/assets/support-program.webp';
import FollowUp from '@/assets/follow-up.webp';

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
                image: ConsultationIcon,
                title: "Consultation",
                desc: "Comprehensive health review and discussion to understand your individual needs.",
              },
              {
                icon: ClipboardList,
                image: CustomPlan,
                title: "Custom Plan",
                desc: "Personalized program designed to support your daily well-being and balance.",
              },
              {
                icon: Sparkles,
                image: SupportProgram,
                title: "Support Program",
                desc: "Professional care provided in a safe and comfortable environment.",
              },
              {
                icon: HeartPulse,
                image: FollowUp,
                title: "Follow-up",
                desc: "Ongoing guidance and monitoring to support consistent daily function and overall balance.",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-t-[200px] min-h-[300px] shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0">
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-secondary/80" />
                </div>

                <div className="relative h-full flex flex-col  items-center text-center p-6 text-white">
                  <div
                    className="p-3 sm:p-3.5 md:p-4 mx-auto mb-4 bg-black/30 rounded-full inline-flex items-center justify-center">
                    <process.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {index + 1}. {process.title}
                  </h3>
                  <p className="text-md opacity-90">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;