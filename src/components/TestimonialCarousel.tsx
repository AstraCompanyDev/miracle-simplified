import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/constants/testimonialsInfo";


const getInitial = (name: string) => name.charAt(0).toUpperCase();
const getAvatarColor = (name: string) => {
  const colors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-teal-500", "bg-orange-500", "bg-red-500"];
  return colors[name.charCodeAt(0) % colors.length];
};

export default function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());
  
  // Responsive cards per page
  const [cardsPerPage, setCardsPerPage] = useState(3);
  
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) { // sm breakpoint
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) { // md breakpoint
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };
    
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);
  
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);
  const maxScrollIndex = totalPages - 1;
  
  const toggleExpanded = (index: number) => {
    setExpandedIndices(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };
  
  const updatePage = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const containerWidth = scrollRef.current.offsetWidth;
      const page = Math.min(Math.round(scrollLeft / containerWidth), maxScrollIndex);
      setCurrentPage(page);
    }
  };
  
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", updatePage);
      return () => el.removeEventListener("scroll", updatePage);
    }
  }, [cardsPerPage]);
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: -containerWidth, behavior: "smooth" });
    }
  };
  
  const scrollRight = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: containerWidth, behavior: "smooth" });
    }
  };
  
  const scrollToPage = (pageIndex: number) => {
    if (scrollRef.current && pageIndex <= maxScrollIndex) {
      const containerWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({ left: pageIndex * containerWidth, behavior: "smooth" });
    }
  };

  // Calculate card width based on cardsPerPage
  const cardWidth = `${100 / cardsPerPage}%`;

  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Left Navigation Button - Hidden on mobile if needed */}
          <button
            onClick={scrollLeft}
            className="hidden sm:flex flex-shrink-0 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full items-center justify-center transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
         
          <div
            ref={scrollRef}
            className="overflow-x-hidden scroll-smooth flex-1"
          >
            <div className="flex">
              {testimonials.map((t, idx) => {
                const isExpanded = expandedIndices.has(idx);
                const showReadMore = t.hasMore;
                return (
                  <div 
                    key={idx} 
                    className="flex-shrink-0 px-2"
                    style={{ width: cardWidth }}
                  >
                    <div className="bg-[#F8F8F8] rounded-3xl shadow-sm border border-gray-200 p-4 sm:p-6 h-full hover:shadow-md transition-shadow flex flex-col min-h-[280px] sm:min-h-[320px]">
                      {/* Header */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 ${getAvatarColor(t.name)} rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm flex-shrink-0`}>
                          {getInitial(t.name)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div>
                            <div className="flex items-center gap-1">
                              <div className="font-medium text-sm text-gray-900 truncate">{t.name}</div>
                              <img 
                                src="/verify.png" 
                                alt="Verified" 
                                width={14} 
                                height={14} 
                                className="flex-shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4" 
                              />
                            </div>
                            <div className="text-xs text-gray-500">{t.time}</div>
                            <svg 
                              className="w-12 h-4 mt-0.5" 
                              viewBox="0 0 56 20" 
                              fill="none"
                              aria-label="Google Review"
                            >
                              <text x="0" y="14" fontFamily="Product Sans, Arial" fontSize="13" fontWeight="500">
                                <tspan fill="#4285F4">G</tspan>
                                <tspan fill="#EA4335">o</tspan>
                                <tspan fill="#FBBC04">o</tspan>
                                <tspan fill="#4285F4">g</tspan>
                                <tspan fill="#34A853">l</tspan>
                                <tspan fill="#EA4335">e</tspan>
                              </text>
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      {/* Stars */}
                      <div className="flex gap-0.5 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" 
                          />
                        ))}
                      </div>
                      
                      {/* Review Text */}
                      <p
                        className={`text-sm text-gray-700 leading-relaxed flex-1 ${
                          !isExpanded ? "line-clamp-4 sm:line-clamp-6" : ""
                        }`}
                      >
                        {t.text}
                      </p>
                      
                      {/* Read More / Less Button */}
                      {showReadMore && (
                        <button
                          onClick={() => toggleExpanded(idx)}
                          className="text-xs text-blue-600 hover:underline font-medium mt-2 text-left"
                        >
                          {isExpanded ? "Read less" : "Read more"}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
         
          {/* Right Navigation Button - Hidden on mobile if needed */}
          <button
            onClick={scrollRight}
            className="hidden sm:flex flex-shrink-0 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full items-center justify-center transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        
        {/* Mobile Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-4 sm:hidden">
          <button
            onClick={scrollLeft}
            className="flex-shrink-0 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={scrollRight}
            className="flex-shrink-0 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToPage(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentPage ? 'bg-gray-800 w-3 h-3' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}