import { useState, useEffect, useRef } from 'react';

export interface Slide {
  id?: string | number;
  image: string;
  alt: string;
  title?: string;
  description?: string;
}

export interface MultiImageCarouselProps {
  slides: Slide[];
  visibleSlides?: number | { mobile?: number; tablet?: number; desktop?: number };
  autoSlide?: boolean;
  slideInterval?: number;
  pauseOnHover?: boolean;
  slideDirection?: 'horizontal' | 'vertical';
  gap?: number;
  height?: string;
  width?: string;
  className?: string;
  onSlideChange?: (index: number) => void;
  showNavigation?: boolean;
  showDots?: boolean;
  infinite?: boolean;
}

const ImageCarousel = ({
  slides,
  visibleSlides = { mobile: 1, tablet: 2, desktop: 3 },
  autoSlide = true,
  slideInterval = 3000,
  pauseOnHover = false,
  slideDirection = 'horizontal',
  gap = 16,
  height = 'h-64 md:h-80',
  width = 'w-full',
  className = 'max-w-7xl mx-auto mb-4',
  onSlideChange,
  showNavigation = false,
  showDots = false,
  infinite = true,
}: MultiImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentVisibleSlides, setCurrentVisibleSlides] = useState(
    typeof visibleSlides === 'number' ? visibleSlides : visibleSlides.desktop || 3
  );
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = slides.length;

  // Handle responsive visible slides
  useEffect(() => {
    if (typeof visibleSlides === 'number') {
      setCurrentVisibleSlides(visibleSlides);
      return;
    }

    const updateVisibleSlides = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCurrentVisibleSlides(visibleSlides.mobile || 1);
      } else if (width < 1024) {
        setCurrentVisibleSlides(visibleSlides.tablet || 2);
      } else {
        setCurrentVisibleSlides(visibleSlides.desktop || 3);
      }
    };

    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, [visibleSlides]);

  // Empty state check
  if (!slides || slides.length === 0) {
    return (
      <div
        className={`flex items-center justify-center ${height} ${width} bg-gray-100 rounded-lg ${className}`}
      >
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  // Use static carousel if infinite is disabled or not enough slides
  if (!infinite || totalSlides <= currentVisibleSlides) {
    return (
      <StaticCarousel
        slides={slides}
        visibleSlides={currentVisibleSlides}
        gap={gap}
        height={height}
        width={width}
        className={className}
        showNavigation={showNavigation}
        showDots={showDots}
      />
    );
  }

  // Create extended slides for infinite loop
  const extendedSlides = [...slides, ...slides, ...slides];

  /* ---------------- Auto Slide ---------------- */
  useEffect(() => {
    if (!autoSlide || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, isPaused, slideInterval]);

  /* ------------ Infinite Loop Reset ------------ */
  useEffect(() => {
    if (currentIndex === 0 || currentIndex < totalSlides + 1) return;

    // When we reach the end of the second set, reset to the start of the second set
    if (currentIndex >= totalSlides * 2) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalSlides);
      }, 700); // Match transition duration
      return () => clearTimeout(timer);
    }
  }, [currentIndex, totalSlides]);

  /* ------------ Slide Change Callback ---------- */
  useEffect(() => {
    const actualIndex = currentIndex % totalSlides;
    onSlideChange?.(actualIndex);
  }, [currentIndex, onSlideChange, totalSlides]);

  /* ---------------- Hover Pause ---------------- */
  const handleMouseEnter = () => pauseOnHover && setIsPaused(true);
  const handleMouseLeave = () => pauseOnHover && setIsPaused(false);

  /* ---------------- Navigation ---------------- */
  const goToNext = () => {
    if (!isTransitioning) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goToPrev = () => {
    if (!isTransitioning) {
      setCurrentIndex((prev) => {
        if (prev <= totalSlides) {
          // Jump to end of second set without animation
          setIsTransitioning(true);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 0);
          return totalSlides * 2 - 1;
        }
        return prev - 1;
      });
    }
  };

  /* ============== Horizontal Carousel ============== */
  if (slideDirection === 'horizontal') {
    const getSlideWidth = () => {
      if (!containerRef.current) return 0;
      const containerWidth = containerRef.current.offsetWidth;
      return (containerWidth + gap) / currentVisibleSlides;
    };

    return (
      <div
        ref={containerRef}
        className={`relative overflow-hidden px-4 sm:px-6 lg:px-8 ${width} ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={trackRef}
          className={`flex ${isTransitioning ? '' : 'transition-transform duration-700 ease-in-out'}`}
          style={{
            transform: `translateX(-${currentIndex * getSlideWidth()}px)`,
            gap: `${gap}px`,
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={`${slide.id || slide.alt}-${index}`}
              className={`flex-shrink-0 ${height}`}
              style={{ 
                width: `calc((100% - ${gap * (currentVisibleSlides - 1)}px) / ${currentVisibleSlides})`,
              }}
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  draggable={false}
                />

                {(slide.title || slide.description) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {slide.title && (
                      <h3 className="text-white font-bold text-sm md:text-lg mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {slide.title}
                      </h3>
                    )}
                    {slide.description && (
                      <p className="text-white/90 text-xs md:text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {slide.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showNavigation && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Pause Indicator */}
        {isPaused && autoSlide && pauseOnHover && (
          <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
            <span className="text-white text-xs font-medium">Paused</span>
          </div>
        )}

        {/* Slide Indicators */}
        {showDots && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(totalSlides + index)}
                className={`transition-all duration-300 rounded-full ${
                  (currentIndex % totalSlides) === index
                    ? 'w-8 h-2 bg-white'
                    : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  /* ============== Vertical Carousel ============== */
  const getSlideHeight = () => {
    if (!containerRef.current) return 0;
    const containerHeight = containerRef.current.offsetHeight;
    return (containerHeight + gap) / currentVisibleSlides;
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${height} ${width} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={trackRef}
        className={`flex flex-col ${isTransitioning ? '' : 'transition-transform duration-700 ease-in-out'}`}
        style={{
          transform: `translateY(-${currentIndex * getSlideHeight()}px)`,
          gap: `${gap}px`,
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div
            key={`${slide.id || slide.alt}-${index}`}
            className="flex-shrink-0"
            style={{ 
              height: `calc((100% - ${gap * (currentVisibleSlides - 1)}px) / ${currentVisibleSlides})`,
            }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg group">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                draggable={false}
              />

              {(slide.title || slide.description) && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {slide.title && (
                    <h3 className="text-white font-bold text-sm md:text-lg mb-1">
                      {slide.title}
                    </h3>
                  )}
                  {slide.description && (
                    <p className="text-white/90 text-xs md:text-sm">
                      {slide.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showNavigation && (
        <>
          <button
            onClick={goToPrev}
            className="absolute top-2 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </>
      )}

      {/* Pause Indicator */}
      {isPaused && autoSlide && pauseOnHover && (
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
          <span className="text-white text-xs font-medium">Paused</span>
        </div>
      )}
    </div>
  );
};

/* ============== Static Carousel (No Looping) ============== */
const StaticCarousel = ({
  slides,
  visibleSlides,
  gap,
  height,
  width,
  className,
  showNavigation,
  showDots,
}: {
  slides: Slide[];
  visibleSlides: number;
  gap: number;
  height: string;
  width: string;
  className: string;
  showNavigation: boolean;
  showDots: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;
  const maxIndex = Math.max(0, totalSlides - visibleSlides);

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <div className={`relative overflow-hidden ${width} ${className}`}>
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ 
          gap: `${gap}px`,
          transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={`${slide.id || slide.alt}-${index}`}
            className={`flex-shrink-0 ${height}`}
            style={{ 
              width: `calc((100% - ${gap * (visibleSlides - 1)}px) / ${visibleSlides})`,
            }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg group">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                draggable={false}
              />

              {(slide.title || slide.description) && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {slide.title && (
                    <h3 className="text-white font-bold text-sm md:text-lg mb-1">
                      {slide.title}
                    </h3>
                  )}
                  {slide.description && (
                    <p className="text-white/90 text-xs md:text-sm">
                      {slide.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showNavigation && maxIndex > 0 && (
        <>
          <button
            onClick={goToPrev}
            disabled={currentIndex === 0}
            className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10 ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex === maxIndex}
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10 ${
              currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {showDots && maxIndex > 0 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'w-8 h-2 bg-white'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;

