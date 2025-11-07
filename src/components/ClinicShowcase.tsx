import clinicImage from "@/assets/clinic-main-showcase.jpg";
import bangkokImg from "@/assets/bangkok-clinic.jpg";
import advancedImg from "@/assets/advanced-clinic.jpg";
import sereneImg from "@/assets/serene-clinic.jpg";

const ClinicShowcase = () => {
  return (
    <section className="py-20 bg-background-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Image Showcase */}
          <div className="relative rounded-3xl overflow-hidden shadow-hover animate-fade-in">
            <img 
              src={clinicImage} 
              alt="Miracle Regenerative Center Interior"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
              <h2 className="text-4xl md:text-6xl font-serif font-semibold mb-4 drop-shadow-lg">
                Your Journey to <span className="text-accent">Wellness</span> & <span className="text-accent">Longevity</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl drop-shadow-md">
                Guiding you through advanced regenerative medicine in the heart of Bangkok
              </p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-soft animate-fade-in group cursor-pointer">
              <img 
                src={bangkokImg} 
                alt="Bangkok Heart of the City"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                <div className="text-4xl font-semibold mb-2">Prime Location</div>
                <div className="text-white/90">Central Bangkok Excellence</div>
              </div>
            </div>
            
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-soft animate-fade-in group cursor-pointer" style={{ animationDelay: '0.1s' }}>
              <img 
                src={advancedImg} 
                alt="Advanced Technology & Facilities"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                <div className="text-4xl font-semibold mb-2">World-Class</div>
                <div className="text-white/90">Cutting-Edge Technology</div>
              </div>
            </div>
            
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-soft animate-fade-in group cursor-pointer" style={{ animationDelay: '0.2s' }}>
              <img 
                src={sereneImg} 
                alt="Serene Modern Environment"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                <div className="text-4xl font-semibold mb-2">Luxury Care</div>
                <div className="text-white/90">Exclusive Wellness Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicShowcase;
