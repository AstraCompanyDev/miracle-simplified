import guideImage from "@/assets/hero-interior.jpg";
import bangkokImg from "@/assets/mrc/mrc(1).jpeg";
import advancedImg from "@/assets/mrc/mrc(3).jpeg";
import sereneImg from "@/assets/mrc/mrc(6).jpeg";


const Guiding = () => {
  const infoGridImages = [
    {
      src: bangkokImg,
      alt: "Bangkok Heart of the City",
    },
    {
      src: advancedImg,
      alt: "Advanced Technology & Facilities",
    },
    {
      src: sereneImg,
      alt: "Serene Modern Environment",
    }
  ];
  return (
    <>
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0  bg-cover bg-center"
          style={{ backgroundImage: `url(${guideImage})` }}
        >
          <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(45_70%_60%/0.15)_40%,hsl(14_60%_40%/0.4)_100%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in-up">
          <div className="max-w-6xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-7xl font-semibold font-serif leading-tight text-white drop-shadow-lg">
              Your Journey to Wellness and Care
            </h1>

            <p className="text-xl md:text-4xl text-white/90 mx-auto drop-shadow-md">
              Guiding you through regenerative medicine–based approaches and comprehensive health support.
            </p>
          </div>
        </div>
      </section>
       {/* Info Grid */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
        {infoGridImages.map((img, index) => (
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-soft animate-fade-in group cursor-pointer">
          <img 
            src={img?.src} 
            alt={img?.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
            <div className="text-4xl font-serif font-semibold mb-2">Prime Location</div>
            <div className="text-white/90">Central Bangkok Excellence</div>
          </div> */}
        </div>
        ))}
      </div>
          

      </>
  )
}

export default Guiding