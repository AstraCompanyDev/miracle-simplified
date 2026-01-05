import clinicImage from "@/assets//mrc/office.jpeg";
// import bangkokImg from "@/assets/bangkok-clinic.jpg";
import bangkokImg from "@/assets/mrc/mrc(1).jpeg";
// import advancedImg from "@/assets/advanced-clinic.jpg";
import advancedImg from "@/assets/mrc/mrc(3).jpeg";
// import sereneImg from "@/assets/serene-clinic.jpg";
import sereneImg from "@/assets/mrc/mrc(6).jpeg";

const ClinicShowcase = () => {
  const infoGridImages = [
      {
        src: bangkokImg,
        alt: "Bangkok Heart of the City",
        title: "Prime Location",
        description: "Centrally Located in Bangkok",
      },
      {
        src: advancedImg,
        alt: "Advanced Technology & Facilities",
        title: "Quality Care",
        description: "Modern Medical Technology",
      },
      {
        src: sereneImg,
        alt: "Serene Modern Environment",
        title: "Premium Care",
        description: "Personalized Service Experience",
      }
    ];

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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(45_70%_60%/0.15)_40%,hsl(14_60%_40%/0.4)_100%)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
              <h2 className="text-4xl md:text-6xl font-serif font-semibold mb-4 drop-shadow-lg">
                Your Journey to <span className="text-accent">Wellness</span> and <span className="text-accent">Care</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl drop-shadow-md">
                Guiding you through medical approaches and comprehensive health support.
              </p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            
        {infoGridImages.map((img, index) => (
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-soft animate-fade-in group cursor-pointer">
          <img 
            src={img?.src} 
            alt={img?.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
            <div className="text-4xl font-serif font-semibold mb-2">{img?.title}</div>
            <div className="text-white/90 text-md">{img?.description}</div>
          </div>
        </div>
        ))}
      
            {/* <div className="relative h-64 rounded-2xl overflow-hidden shadow-soft animate-fade-in group cursor-pointer">
              <img 
                src={bangkokImg} 
                alt="Bangkok Heart of the City"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                <div className="text-4xl font-serif font-semibold mb-2">Prime Location</div>
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
                <div className="text-4xl font-serif font-semibold mb-2">World-Class</div>
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
                <div className="text-4xl font-serif font-semibold mb-2">Luxury Care</div>
                <div className="text-white/90">Exclusive Wellness Experience</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicShowcase;
