import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { name: "Mr Wee", time: "4 months ago", text: "We had cell therapy for a few things and the experience was great. My friend joined me and we were both treated with so much kindness. As the week went on, it was clear how much they genuinely care about their patients.", hasMore: true },
  { name: "Natalie (Natalie)", time: "8 months ago", text: "I had a great experience at MRC. The clinic is modern, clean, and beautifully designed, it immediately made me feel relaxed and taken care of. The staff were welcoming, professional, and very attentive throughout the whole process. You can tell they really care about your well-being and comfort. Highly recommend for anyone looking for quality service in a peaceful, high-end environment. 🙏🏽☺", hasMore: true },
  { name: "Chutisa", time: "5 months ago", text: "I’ve faced many challenges due to an immune disorder, and a friend recommended MRC Clinic. The team proposed a 7-day plan tailored to my needs. I took a few weeks to decide, and I appreciated that there was no pressure at all. I’m truly grateful to the MRC team for their care and support.", hasMore: true },
  { name: "Michael Stephineon", time: "7 months ago", text: "I can't say enough good things about this clinic! The team here have been absolutely amazing—professional, compassionate and truly dedicated to helping me with my health needs. The Support Program I've received have made a real difference, I feel like a new man! I’m so grateful for their expertise and support. Highly recommend to anyone looking for top-notch care and great results!", hasMore: true },
  { name: "Chonlawit Kannares", time: "6 months ago", text: "After trying 3 clinics in Bangkok, I decided to go to MRC to treat my arthritis. Dr. May and the treatments from the lab are revolutionary. I’m super happy with the results!!", hasMore: true, isTranslated: true },
  { name: "Gerrard Fermin", time: "6 months ago", text: "Aftercare is just as important as the treatment itself, and this clinic gets that. They checked on me days later and answered all my questions. If you have any hesitations with your wellness goal just ask them to achieve your goals.", hasMore: true },
];

const getInitial = (name: string) => name.charAt(0).toUpperCase();

const getAvatarColor = (name: string) => {
  const colors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-teal-500", "bg-orange-500", "bg-red-500"];
  return colors[name.charCodeAt(0) % colors.length];
};

export default function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

  const cardsPerPage = 5;
  const maxScrollIndex = testimonials.length - cardsPerPage;

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
      const cardWidth = 192 + 16;
      const page = Math.min(Math.round(scrollLeft / cardWidth), maxScrollIndex);
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", updatePage);
      return () => el.removeEventListener("scroll", updatePage);
    }
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = 192 + 16;
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = 192 + 16;
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const scrollToPage = (pageIndex: number) => {
    if (scrollRef.current && pageIndex <= maxScrollIndex) {
      const cardWidth = 192 + 16;
      scrollRef.current.scrollTo({ left: pageIndex * cardWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <button
            onClick={scrollLeft}
            className="flex-shrink-0 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-hidden scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              width: "calc(5 * 192px + 4 * 16px)",
            }}
          >
            <div className="flex gap-4">
              {testimonials.map((t, idx) => {
                const isExpanded = expandedIndices.has(idx);
                const showReadMore = t.hasMore;

                return (
                  <div key={idx} className="flex-shrink-0 w-48">
                    <div className="bg-[#F8F8F8] rounded-3xl shadow-sm border border-gray-200 p-4 h-full hover:shadow-md transition-shadow flex flex-col">
                      {/* Header */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-10 h-10 ${getAvatarColor(t.name)} rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}>
                          {getInitial(t.name)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div>
                            <div className="flex items-center gap-1">
                              <div className="font-medium text-sm text-gray-900 truncate">{t.name}</div>
                              <img src="/verify.png" alt="Verified" width={16} height={16} className="flex-shrink-0" />
                            </div>
                            <div className="text-xs text-gray-500">{t.time}</div>
                            <svg className="w-12 h-4 mt-0.5" viewBox="0 0 56 20" fill="none">
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
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Review Text - 3 lines when collapsed */}
                      <p
                        className={`text-sm text-gray-700 leading-relaxed flex-1 ${
                          !isExpanded ? "line-clamp-6" : ""
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
          {[...Array(maxScrollIndex + 1)].map((_, i) => (
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