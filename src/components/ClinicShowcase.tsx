import clinicImage from "@/assets/clinic-interior-new.jpg";
import chairsImg from "@/assets/clinic-chairs.jpg";
import corridorImg from "@/assets/clinic-corridor.jpg";
import windowImg from "@/assets/clinic-window.jpg";

const ClinicShowcase = () => {
  return (
    <section className="py-20 bg-background-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Image Showcase */}
          <div className="rounded-3xl overflow-hidden shadow-hover animate-fade-in">
            <img 
              src={clinicImage} 
              alt="Miracle Regenerative Center Interior"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-soft animate-fade-in group cursor-pointer">
              <img 
                src={chairsImg} 
                alt="Bangkok Heart of the City"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                <div className="text-4xl font-semibold mb-2">Bangkok</div>
                <div className="text-white/90">Heart of the City</div>
              </div>
            </div>
            
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-soft animate-fade-in group cursor-pointer" style={{ animationDelay: '0.1s' }}>
              <img 
                src={corridorImg} 
                alt="Advanced Technology & Facilities"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                <div className="text-4xl font-semibold mb-2">Advanced</div>
                <div className="text-white/90">Technology & Facilities</div>
              </div>
            </div>
            
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-soft animate-fade-in group cursor-pointer" style={{ animationDelay: '0.2s' }}>
              <img 
                src={windowImg} 
                alt="Serene Modern Environment"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                <div className="text-4xl font-semibold mb-2">Serene</div>
                <div className="text-white/90">Modern Environment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicShowcase;
