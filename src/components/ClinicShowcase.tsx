import clinicImage from "@/assets/clinic-interior.jpg";

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
            <div className="bg-gradient-card rounded-2xl p-8 text-center shadow-soft animate-fade-in">
              <div className="text-4xl font-semibold text-primary mb-2">Bangkok</div>
              <div className="text-muted-foreground">Heart of the City</div>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8 text-center shadow-soft animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-semibold text-primary mb-2">Advanced</div>
              <div className="text-muted-foreground">Technology & Facilities</div>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8 text-center shadow-soft animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-semibold text-primary mb-2">Serene</div>
              <div className="text-muted-foreground">Modern Environment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicShowcase;
