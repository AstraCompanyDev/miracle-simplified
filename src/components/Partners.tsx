import { useState, useEffect, useRef, useMemo } from 'react';

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

const SCROLL_SPEED = 0.25;

const PARTNERS = [
  { id: 1, name: 'Acquest Lab', logo: AcquestLab },
  { id: 2, name: 'Biolitec', logo: BiolitecLogo },
  { id: 3, name: 'ISSCA', logo: ISSCALogo },
  { id: 4, name: 'Istanbul University', logo: IstanbulUniversityLogo },
  { id: 5, name: 'Logo EN', logo: LogoEn },
  { id: 6, name: 'Mahidol University', logo: MahidolUniversityLogo },
  { id: 7, name: 'MGRC', logo: MGRCLogo },
  { id: 8, name: 'MOH', logo: MOHLogo },
  { id: 9, name: 'NAD+', logo: NADLogo },
  { id: 10, name: 'Pregene', logo: PregeneLogo },
  { id: 11, name: 'Reju StemCell Clinic', logo: RejuStemCellLogo },
  { id: 12, name: 'Swift', logo: SwiftLogo },
  { id: 13, name: 'Swiss Laboratories', logo: SwissLaboratories },
  { id: 14, name: 'Tithon Biotech', logo: TithonBiotechLogo },
  { id: 15, name: 'Trustem', logo: TrustemLogo },
];

const Partners = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const rafRef = useRef<number>();
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedPartners = useMemo(() => {
    const multiplier =
      typeof window !== 'undefined' && window.innerWidth < 768 ? 3 : 4;

    return Array.from({ length: multiplier }, () => PARTNERS).flat();
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const singleLoopWidth = slider.scrollWidth / (duplicatedPartners.length / PARTNERS.length);

    const animate = () => {
      if (!isPaused) {
        positionRef.current -= SCROLL_SPEED;

        if (Math.abs(positionRef.current) >= singleLoopWidth) {
          positionRef.current = 0;
        }

        slider.style.transform = `translateX(${positionRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPaused, duplicatedPartners.length]);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-4">
            Our Partners
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborations supporting quality healthcare
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div
            ref={sliderRef}
            className="flex items-center gap-2 md:gap-2 lg:gap-4 "
            style={{ willChange: 'transform' }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="flex-shrink-0">
                <div className="group relative w-40 h-24 lg:w-44 lg:h-28 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="border p-2 border-neutral-200 rounded-md max-w-full max-h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;