import { useState } from 'react';
import DoctorImage from '@/assets/Kirachima-Nuanthong.webp'

const MeetOurDoctor = () => {
  const [showAllTraining, setShowAllTraining] = useState(false);
  const [showAllWorkshops, setShowAllWorkshops] = useState(false);

  // Training data
  const trainingData = [
    {
      title: "Gerontology and Geriatric Medicine (Short Course)",
      institution: "Faculty of Medicine, Siriraj Hospital, Mahidol University",
      period: "Aug–Oct 2023"
    },
    {
      title: "Medical Internship Training",
      institution: "Khon Kaen Hospital, Thailand",
      period: "Nov 2020 – Oct 2021"
    }
  ];

  // Workshops data
  const workshopsData = [
    {
      title: "Participation in Aesthetic Medicine Workshop (Level 1)",
      details: "Topics: Thread Lift, Botulinum Toxin, Dermal Fillers",
      organizer: "Organized by Uniwea Korea",
      period: "Mar 2022"
    },
    {
      title: "Hands-on Workshop: Mesotherapy and PRP",
      details: "Topics: Mesotherapy, Vitamin Injection, Melasma, Keloid, Acne, PRP",
      period: "Nov 2022"
    },
    {
      title: "Attendance at Scientific Meeting: Regenerative Medicine in Cosmetic Dermatology",
      organizer: "Thai Society of Cosmetic Dermatology and Surgery (THAICOSDERM)",
      period: "Feb 2023"
    },
    {
      title: "Attendance at Botulinum Toxin for Face and Neck Workshop",
      organizer: "Thai Society of Cosmetic Dermatology and Surgery (THAICOSDERM)",
      period: "Apr 2023"
    },
    {
      title: "Participation in Emergency Medicine Training Program: 'First Hour in Emergency Room 2023'",
      institution: "Faculty of Medicine, Siriraj Hospital, Mahidol University",
      period: "Aug 2023"
    }
  ];

  return (
    <section 
      className="py-12 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#f5f0e7' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Meet Our Doctor
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
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Kirachima Nuanthong, MD
              </h3>
              <p className="text-lg  mb-4">
                พญ. กิรจิมา นวลทอง - Medical License No.69306
              </p>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:w-3/5 space-y-8">
            {/* Training Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold  mb-6 pb-4 border-b border-gray-100">
                Training
              </h3>
              
              <div className="space-y-6">
                {trainingData.slice(0, showAllTraining ? trainingData.length : 1).map((item, index) => (
                  <div key={index} className="pb-4 border-b border-gray-50 last:border-b-0 last:pb-0">
                    <h4 className="font-medium text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm mb-1">{item.institution}</p>
                    <p className="text-gray-500 text-sm">{item.period}</p>
                  </div>
                ))}
                
                {trainingData.length > 1 && (
                  <button
                    onClick={() => setShowAllTraining(!showAllTraining)}
                    className="text-gray-600 hover:text-gray-900 font-medium text-sm flex items-center gap-1 mt-2"
                  >
                    {showAllTraining ? 'Show Less' : 'Read More'}
                    <svg 
                      className={`w-4 h-4 transform transition-transform ${showAllTraining ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Workshops Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold  mb-6 pb-4 border-b border-gray-100">
                Workshops
              </h3>
              
              <div className="space-y-6">
                {workshopsData.slice(0, showAllWorkshops ? workshopsData.length : 2).map((item, index) => (
                  <div key={index} className="pb-4 border-b border-gray-50 last:border-b-0 last:pb-0">
                    <h4 className="font-medium text-gray-900 mb-2">{item.title}</h4>
                    {item.details && (
                      <p className="text-gray-600 text-sm mb-1">{item.details}</p>
                    )}
                    {item.organizer && (
                      <p className="text-gray-600 text-sm mb-1">{item.organizer}</p>
                    )}
                    {item.institution && (
                      <p className="text-gray-600 text-sm mb-1">{item.institution}</p>
                    )}
                    <p className="text-gray-500 text-sm">{item.period}</p>
                  </div>
                ))}
                
                {workshopsData.length > 2 && (
                  <button
                    onClick={() => setShowAllWorkshops(!showAllWorkshops)}
                    className="text-gray-600 hover:text-gray-900 font-medium text-sm flex items-center gap-1 mt-2"
                  >
                    {showAllWorkshops ? 'Show Less' : 'Read More'}
                    <svg 
                      className={`w-4 h-4 transform transition-transform ${showAllWorkshops ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurDoctor;