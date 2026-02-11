import { useState } from 'react';
import DoctorImage from '@/assets/Kirachima-Nuanthong.webp'
import { ChevronsRight } from 'lucide-react';
import { sub } from 'date-fns';

const MeetOurDoctor = () => {
  const [showAllTraining, setShowAllTraining] = useState(false);
  const [showAllWorkshops, setShowAllWorkshops] = useState(false);

  // Training data
  const trainingData = [
    {
      title: "Medical Internship Training",
      institution: "Khon Kaen Hospital, Thailand",
      period: "(Nov 2020 – Oct 2021)"
    },
    {
      title: "Gerontology and Geriatric Medicine (Short Course)",
      institution: "Faculty of Medicine, Siriraj Hospital, Mahidol University",
      period: "(Aug–Oct 2023)"
    },
    {
      title: "Emergency Medicine Training Program",
      subtitle: "\"First Hour in Emergency Room 2023\"",
      institution: "Faculty of Medicine, Siriraj Hospital, Mahidol University",
      period: "(Aug 2023)"
    },
    {
      title: "Scientific Meeting Attendance: Regenerative Medicine in Cosmetic Dermatology",
      institution: "Thai Society of Cosmetic Dermatology and Surgery (THAICOSDERM)",
      period: "(Feb 2023)"
    },
  ];

  // Workshops data
  const workshopsData = [
    {
      title: "Hands-on Workshop: Mesotherapy and Platelet-Rich Plasma (PRP)",
      details: "Topics: Mesotherapy, Vitamin Injection, Melasma, Keloid, Acne, PRP",
      period: "(Nov 2022)"
    },
    {
      title: "Participation in Aesthetic Medicine Workshop (Level 1)",
      details: "Topics: Thread Lift, Botulinum Toxin, Dermal Fillers",
      organizer: "Organized by Uniwea Korea",
      period: "(Mar 2022)"
    },
    {
      title: "Attendance at Botulinum Toxin for Face and Neck Workshop",
      organizer: "Thai Society of Cosmetic Dermatology and Surgery (THAICOSDERM)",
      period: "(Apr 2023)"
    },
    // {
    //   title: "Participation in Emergency Medicine Training Program: 'First Hour in Emergency Room 2023'",
    //   institution: "Faculty of Medicine, Siriraj Hospital, Mahidol University",
    //   period: "(Aug 2023)"
    // },
    // {
    //   title: "Attendance at Scientific Meeting: Regenerative Medicine in Cosmetic Dermatology",
    //   organizer: "Thai Society of Cosmetic Dermatology and Surgery (THAICOSDERM)",
    //   period: "(Feb 2023)"
    // },
  ];

  return (
    <section 
      className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background-soft"
      // style={{ backgroundColor: '#f5f0e7' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Our Doctor
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Doctor Info */}
          <div className="lg:w-2/5">
            <div className="sticky top-8">
              <img 
                src={DoctorImage} 
                alt="Dr. Kirachima Nuanthong" 
                className="w-full rounded-2xl shadow-lg mb-6"
              />
              <div className="absolute bottom-0 w-full p-4 bg-secondary/50 rounded-b-2xl text-white"> 
              <h3 className="text-2xl md:text-2xl font-bold">
                Kirachima Nuanthong, MD
              </h3>
              <p className="text-md">
                พญ. กิรจิมา นวลทอง - Medical License No.69306
              </p>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:w-3/5 space-y-2">
            {/* Training Section */}
            <div className="rounded-xl px-6 py-4">
              <h3 className="text-2xl font-bold font-serif text-black ml-0 pb-4">
                Training
              </h3>
              
              <ul className="space-y-2">
                {trainingData.slice(0, showAllTraining ? trainingData.length : 2).map((item, index) => (
                  <li key={index} className="pb-4 last:pb-0 list-disc">
                    <h4 className="font-bold text-secondary mb-2">{item.title}</h4>
                    {item.subtitle && <p className="text-black mb-1">{item.subtitle}</p>}
                    <p className="text-black mb-1">{item.institution}</p>
                    <p className="text-black">{item.period}</p>
                  </li>
                ))}
                
                {trainingData.length > 1 && (
                  <button
                    onClick={() => setShowAllTraining(!showAllTraining)}
                    className="text-secondary hover:text-secondary/80 font-bold text-sm flex items-center gap-1 mt-2"
                  >
                    {showAllTraining ? 'Show Less' : 'Read More'}
                    <ChevronsRight className='w-4 h-4' />
                  </button>
                )}
              </ul>
            </div>

            {/* Workshops Section */}
            <div className="rounded-xl px-6 py-4">
              <h3 className="text-2xl text-black font-serif font-bold pb-4">
                Workshops
              </h3>
              
              <ul className="space-y-2">
                {workshopsData.slice(0, showAllWorkshops ? workshopsData.length : 2).map((item, index) => (
                  <li key={index} className="pb-4 last:pb-0 list-disc">
                    <h4 className="font-bold text-secondary mb-2">{item.title}</h4>
                    {item.details && (
                      <p className="text-black  mb-1">{item.details}</p>
                    )}
                    {item.organizer && (
                      <p className="text-black  mb-1">{item.organizer}</p>
                    )}
                    <p className="text-black ">{item.period}</p>
                  </li>
                ))}
                
                {workshopsData.length > 2 && (
                  <button
                    onClick={() => setShowAllWorkshops(!showAllWorkshops)}
                    className="text-secondary hover:text-secondary/80 font-bold text-sm flex items-center gap-1 mt-2"
                  >
                    {showAllWorkshops ? 'Show Less' : 'Read More'}
                    <ChevronsRight className='w-4 h-4' />
                  </button>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurDoctor;