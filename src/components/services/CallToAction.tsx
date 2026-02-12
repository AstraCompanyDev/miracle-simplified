import { Button } from "../ui/button"


const CallToAction = () => {
  return (
    <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-semibold font-serif text-foreground mb-6">
                Custom well-being Plans
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Each patient receives a tailored and evolving care roadmap, informed by detailed diagnostics and individual health needs.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Personalized care isn’t a trend, it's the core of what we do.
              </p>
            </div>
            <div className="text-center">
              <Button
                variant="secondary"
                size="lg"
                className="text-lg gap-3"
                onClick={() =>
                  window.open("https://wa.me/66817342027", "_blank")
                }
              >
                BOOK  AN APPOINTMENT
              </Button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CallToAction