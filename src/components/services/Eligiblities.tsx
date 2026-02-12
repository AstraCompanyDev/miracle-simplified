import { CircleCheckBig } from "lucide-react";

interface EligibilitiesProps {
  title: string;
  description: string;
  eligibilities: string[];
}

const Eligiblities = ({title, description, eligibilities}: EligibilitiesProps) => {
  return (
    <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
                {title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 items-center gap-2">
             
             {/* Eligibility  */}
              {eligibilities.map((eligibility, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4  p-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CircleCheckBig className="w-4 h-4 mt-1" />
                  <p className="text-foreground font-medium">{eligibility}</p>
                </div>
              ))}
            
            </div>
          </div>
        </div>
      </section>
  )
}

export default Eligiblities