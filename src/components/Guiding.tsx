import guideImage from "@/assets/guiding-mrc.webp";

const Guiding = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${guideImage})` }}
        >
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
  )
}

export default Guiding