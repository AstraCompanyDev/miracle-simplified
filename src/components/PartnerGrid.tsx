// Import partner logos
/* Logos */
import AcquestLab from '@/assets/collaborators/Acquest Lab.png';
import BiolitecLogo from '@/assets/collaborators/Biolitec logo.png';
import ISSCALogo from '@/assets/collaborators/ISSCA logo.webp';
import IstanbulUniversityLogo from '@/assets/collaborators/Istanbul University Logo.jpg';
import LogoEn from '@/assets/collaborators/logo_en.png';
import MahidolUniversityLogo from '@/assets/collaborators/Mahidol University Logo.png';
import MGRCLogo from '@/assets/collaborators/MGRC logo.png';
import MOHLogo from '@/assets/collaborators/MOH logo.png';
import NADLogo from '@/assets/collaborators/NAD+ logo.png';
import PregeneLogo from '@/assets/collaborators/Pregene logo.png';
import RejuStemCellLogo from '@/assets/collaborators/Reju StemCell clinic logo.webp';
import SwiftLogo from '@/assets/collaborators/Swift logo.webp';
import SwissLaboratories from '@/assets/collaborators/Swiss laboratories.webp';
import TithonBiotechLogo from '@/assets/collaborators/Tithon Biotech Logo.png';
import TrustemLogo from '@/assets/collaborators/Trustem logo.jpeg';


const partners = [
  {
    name: "Istanbul University", 
    logo: IstanbulUniversityLogo,
    description: "Istanbul University is a prominent public research university located in Istanbul, Turkey. At present, there are 66,487 undergraduate, graduate, and doctoral students studying in 33 academic units, including faculties, institutes, colleges, and vocational schools at 10 campuses."
  },
  { 
    name: "Mahidol University", 
    logo: MahidolUniversityLogo,
    description: "Thailand's premier medical university, partnering on regenerative medicine research and academic training programs.",
    scale: "scale-150"
  },
  { 
    name: "Pregene", 
    logo: PregeneLogo,
    description: "Shenzhen Pregene Biopharma and CellPoint have signed an exclusive licence agreement to develop and commercialise the former's cell therapy, PRG-1801, to treat haematological indications in the US and Europe.",
    scale: "scale-[1.3]"
  },
  { 
    name: "St. Catherine Specialty Hospital", 
    logo: RejuStemCellLogo,
    description: "St. Catherine Specialty Hospital, founded in 2011, is the largest private hospital in Croatia, a European Center of Excellence, which by using a multidisciplinary approach and the latest equipment provides patients with a variety of treatments."
  },
  { 
    name: "Tithon Biotech", 
    logo: TithonBiotechLogo,
    description: "Tithon Biotech is a commercially driven biotechnology company engaged in the development of biomedical solutions addressing various degenerative medical conditions affecting both humans and animals."
  },
  { 
    name: "Acquest Lab", 
    logo: AcquestLab,
    description: "Acquest utilizes research and development to deliver stem cell therapies in a complete solution package to client hospitals across the world for the direct scientific and medical benefit of the patient.",
    scale: "scale-[1.3]"
  },
  { 
    name: "Swiss Laboratories", 
    logo: SwissLaboratories,
    description: "A Swiss precision laboratory specializing in advanced cell processing and quality control for therapeutic applications."
  },
  { 
    name: "Biolitec", 
    logo: BiolitecLogo,
    description: "Biolitec is a global medical technology company pioneering minimally invasive laser and photodynamic therapies, developing advanced laser systems and fiber technologies to support innovative treatments across multiple medical specialties.",
    scale: "scale-[1.2]"
  },
  { 
    name: "ISSCA", 
    logo: ISSCALogo,
    description: "ISSCA (International Society for Stem Cell Application) is a multidisciplinary organization dedicated to advancing regenerative medicine through global education, certification, research, and collaboration among clinicians and scientists.",
    scale: "scale-[1.3]"
  },
  { 
    name: "Malaysian Genomics Resource Centre", 
    logo: MGRCLogo,
    description: "MGRC is a leading genomics and biopharmaceutical company in Southeast Asia, specializing in genome sequencing, bioinformatics analysis, genetic screening, and advanced cancer immunotherapies, with strong expertise in translational and clinical medicine.",
    scale: "scale-[1.3]"
  },
  { 
    name: "Ministry of Health Cambodia", 
    logo: MOHLogo,
    description: "The Ministry of Health Cambodia is the government agency responsible for overseeing national healthcare policy, public health programs, and the regulation of medical professionals, hospitals, and clinics across Cambodia."
  },
  { 
    name: "NADclinic", 
    logo: NADLogo,
    description: "NAD+ is a wellness and cellular health platform focused on nicotinamide adenine dinucleotide (NAD+) infusion therapies designed to support energy production, cellular repair, and holistic well-being through advanced IV treatment protocols.",
    scale: "scale-[1.2]"
  },
  { 
    name: "Reju Stem Cell Clinic", 
    logo: RejuStemCellLogo,
    description: "Reju StemCell Clinic is a regenerative wellness center offering stem cell-based therapies and rejuvenation treatments aimed at enhancing cellular health, vitality, and overall skin quality."
  },
  { 
    name: "Trustem", 
    logo: TrustemLogo,
    description: "Trustem is a healthcare and biotechnology organization specializing in regenerative solutions and advanced therapeutic services designed to support wellness and medical innovation.",
    scale: "scale-[1.3]"
  },
  { 
    name: "Miracle Regenerative Clinic", 
    logo: LogoEn,
    description: "Miracle Regenerative Clinic is a regenerative and anti-aging medical facility providing stem cell therapy, exosome infusions, and personalized longevity programs delivered by a clinical team in a modern healthcare setting."
  },
  { 
    name: "Swift Day Surgery", 
    logo: SwiftLogo,
    description: "Swift Day Surgery is a medical surgical facility in Bangkok offering efficient outpatient procedures and supportive care, designed to deliver high-quality surgical services with streamlined patient experience.",
    scale: "scale-[1.3]"
  },
];

const PartnerGrid = () => {
  // Helper function to make scale responsive (only apply on lg screens)
  const getResponsiveScale = (scale?: string) => {
    if (!scale) return "";
    // Convert scale-150 to lg:scale-150, scale-[1.3] to lg:scale-[1.3], etc.
    return `lg:${scale}`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
      {partners.map((partner, index) => (
        <div 
          key={index}
          className="group relative aspect-[4/3] bg-white rounded-xl flex items-center justify-center p-6 md:p-8 transition-all duration-300 overflow-hidden"
        >
          {/* Logo - visible by default */}
          <img
            src={partner.logo}
            alt={partner.name}
            className={`max-h-full max-w-full object-contain transition-opacity duration-300 group-hover:opacity-0 ${
              getResponsiveScale(partner.scale)
            }`}
          />
          
          {/* Hover overlay with text */}
          <div className="absolute inset-0 bg-white rounded-xl p-4 sm:p-4 md:p-5 lg:p-4 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
            <h3 className="font-serif text-lg sm:text-lg md:text-xl lg:text-base text-foreground font-semibold mb-2 md:mb-2">
              {partner.name}
            </h3>
            <p className="text-foreground/80 text-sm sm:text-sm md:text-sm lg:text-[11px] leading-relaxed font-medium">
              {partner.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnerGrid;
