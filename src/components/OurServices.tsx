// import { UserSearch, ClipboardList, Sparkles, HeartPulse} from "lucide-react";
import TharapyIcon from '@/assets/cell-tharapy.png';
import IVNutrientIcon from '@/assets/IV-Nutrient-support.png';
import WellBeingIcon from '@/assets/well-being.png';
import PainManagementIcon from '@/assets/pain-management.png';

const OurServices = () => {
  return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We provide a variety of health-focused services, guided by appropriate medical information to support our clients’ well-being in a safe and responsible manner.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  iconPath: TharapyIcon,
                  title: "Cell Therapies", 
                  desc: "Comprehensive health assessment and medical history review",
                  color: "text-primary"
                },
                { 
                  iconPath: IVNutrientIcon, 
                  title: "IV Nutrient Support", 
                  desc: "Personalized treatment protocol designed for your unique needs",
                  color: "text-primary"
                },
                { 
                  iconPath: WellBeingIcon, 
                  title: "Well-Being", 
                  desc: "Professional care delivery in our state-of-the-art facility",
                  color: "text-primary"
                },
                { 
                  iconPath: PainManagementIcon, 
                  title: "Pain Management", 
                  desc: "Ongoing support, monitoring and progress optimization",
                  color: "text-primary"
                },
              ].map((item, index) => {
                return (
                  <div 
                    key={index}
                    className="bg-[#EEEEEE] rounded-3xl p-6 text-center shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mx-auto w-32 h-32 mb-4 flex items-center justify-center">
                      <img src={item.iconPath} alt={item.title} className={`w-full`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-8">{item.title}</h3>
                    {/* <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
  );
};

export default OurServices;