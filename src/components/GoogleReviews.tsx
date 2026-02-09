import React, { useState, useEffect, useRef } from 'react';
import BackgroundImage from '@/assets/clinic-window.webp';

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  initial?: string;
}

const ANIMATION_DURATION = 500;
const AUTO_SLIDE_DELAY = 5000;

const GoogleReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      name: "Lucy K.",
      text: "Cellular therapy really changed my life! I was struggling with joint pain, but now I feel incredible - more power, no pain, and improved mobility. Thank you, guys!",
      rating: 5,
      initial: "L",
    },
    {
      name: "Mark T.",
      text: "I can only say Immunotherapy made me forget about my hip issues. No more pain! Thanks to Miracle Regen, I can enjoy life again!",
      rating: 5,
      initial: "M",
    },
    {
      name: "Kevin D.",
      text: "Amazing treatment, I wish I would have known before! The performance issues I had are gone. Highly recommend their ED program!",
      rating: 5,
      initial: "K",
    },
    {
      name: "Shareen P.",
      text: "The Cell therapy boosted my energy, reduced inflammation, and improved my muscle and cartilage. I feel amazing!",
      rating: 5,
      initial: "S",
    },
    {
      name: "Daniel J.",
      text: "It's incredible! Immunotherapy really helped with my knee osteoarthritis and now the pain is completely gone.",
      rating: 5,
      initial: "D",
    },
    {
      name: "Anjali T.",
      text: "My diabetes was keeping me awake at night with worry. After this life-changing treatment I don't have to worry any more!",
      rating: 5,
      initial: "A",
    },
  ];

  const animateToIndex = (nextIndex: number) => {
    if (isAnimating || nextIndex === currentIndex) return;

    setDirection(nextIndex > currentIndex ? 'right' : 'left');
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsAnimating(false);
    }, ANIMATION_DURATION);
  };

  const goToNextSlide = () => {
    animateToIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  const startAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);

    autoSlideRef.current = setInterval(goToNextSlide, AUTO_SLIDE_DELAY);
  };

  const stopAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [currentIndex]);

  const slideOut =
    direction === 'right'
      ? 'opacity-0 translate-x-16'
      : 'opacity-0 -translate-x-16';

  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary/70" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center animate-fade-in-up mb-6">
            <p className="text-white/90 text-sm font-semibold tracking-wider uppercase mb-3">
              Google Reviews
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-bold font-serif mb-6">
              Hear From Our Patients
            </h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Explore verified Google Reviews to learn how others felt about their visit and overall experience with our services.
            </p>
          </div>

        {/* Card */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          {/* Quote */}
          <div
            className={`absolute left-8 top-8 transform-gpu transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
              ${isAnimating ? slideOut : ' translate-x-0'}`}
          >
            <img src="/quote.png" className="w-20 h-20" alt="" />
          </div>

          {/* Avatar */}
          <div className="flex justify-center -mb-14">
            <div
              className={`w-32 h-32 rounded-full bg-[#5DB5BA] flex items-center justify-center border-4 border-secondary shadow-xl
                transform-gpu transition-all duration-500 ease-out
                ${isAnimating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
            >
              <span className="text-white text-6xl font-semibold">
                {testimonials[currentIndex].initial}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl shadow-2xl pt-20 pb-10 px-8 md:px-16">
            <div
              className={`transform-gpu will-change-transform transition-all duration-500 delay-75 ease-[cubic-bezier(.22,1,.36,1)]
                ${isAnimating ? slideOut : 'opacity-100 translate-x-0'}`}
            >
              <h3 className="text-center text-2xl font-semibold mb-4">
                {testimonials[currentIndex].name}
              </h3>

              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6" viewBox="0 0 24 24" fill="#FFA500">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
                “{testimonials[currentIndex].text}”
              </p>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => animateToIndex(i)}
                  disabled={isAnimating}
                  className={`w-2.5 h-2.5 rounded-full transition-all
                    ${i === currentIndex ? 'bg-gray-900' : 'bg-gray-300 hover:bg-gray-400'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;
