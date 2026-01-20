import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WP_API = "https://miracleregen.com/wp-json/wp/v2";

interface RecentPostsCarouselProps {
  currentPostSlug: string;
}

const RecentPostsCarousel = ({ currentPostSlug,  }: RecentPostsCarouselProps) => {
  const [recentPosts, setRecentPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const loadRecentPosts = async () => {
      try {
        const res = await fetch(`${WP_API}/posts?_embed&per_page=10`);
        const data = await res.json();
        const filtered = data.filter((p: any) => p.slug !== currentPostSlug);
        setRecentPosts(filtered);
      } catch (error) {
        console.error("Error loading recent posts:", error);
      } finally {
        setLoading(false);
      }
    };
    loadRecentPosts();
  }, [currentPostSlug]);

  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const tolerance = 10;
    setCanScrollLeft(scrollLeft > tolerance);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - tolerance);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || recentPosts.length === 0) return;

    // Initial check
    const check = () => {
      updateScrollButtons();
    };
    check();

    const handleScroll = () => updateScrollButtons();
    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", check);

    // Re-check after images load (prevents wrong initial state)
    const timer = setTimeout(check, 300);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", check);
      clearTimeout(timer);
    };
  }, [recentPosts]);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -380, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 380, behavior: "smooth" });
  };

  if (loading || !recentPosts.length) return null;

  return (
    <section className="py-8 ">
      <div className="container mx-auto px-4">
        {/* Main carousel container with hover group */}
        <div className="relative group/carousel">
          {/* Left Arrow - Only show when canScrollLeft is true */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/95 backdrop-blur-sm border border-gray-100 shadow-xl hover:shadow-2xl rounded-full p-4 transition-all duration-300 flex items-center justify-center
                opacity-100 translate-x-0
                md:opacity-0 md:group-hover/carousel:opacity-100 
                md:-translate-x-12 md:group-hover/carousel:translate-x-0
              "
              aria-label="Previous articles"
              onMouseEnter={(e) => e.stopPropagation()}
            >
              <ChevronLeft className="w-7 h-7 text-gray-800" />
            </button>
          )}

          {/* Right Arrow - Only show when canScrollRight is true */}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/95 backdrop-blur-sm border border-gray-100 shadow-xl hover:shadow-2xl rounded-full p-4 transition-all duration-300 flex items-center justify-center
                opacity-100 translate-x-0
                md:opacity-0 md:group-hover/carousel:opacity-100 
                md:translate-x-12 md:group-hover/carousel:translate-x-0
              "
              aria-label="Next articles"
              onMouseEnter={(e) => e.stopPropagation()}
            >
              <ChevronRight className="w-7 h-7 text-gray-800" />
            </button>
          )}

          {/* Scrollable Content */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-6 py-4 px-2 min-w-max">
              {recentPosts.map((post: any) => {
                const featuredImage =
                  post.uagb_featured_image_src?.full?.[0] ||
                  post.yoast_head_json?.og_image?.[0]?.url ||
                  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "https://placehold.co/600x400?text=No+Image";

                const category =
                  post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";

                return (
                  <Link
                    to={`/blog/${post.slug}`}
                    key={post.id}
                    className="flex-shrink-0 w-[320px] md:w-[360px] snap-start relative z-10"
                  >
                    <div className="group shadow-soft hover:shadow-hover rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 bg-white h-full border border-gray-100">
                      <div className="relative aspect-[45/28] overflow-hidden bg-gray-100">
                        <img
                          src={featuredImage}
                          alt={post.title.rendered}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                          loading="lazy"
                        />
                        <span className="absolute top-3 left-3 bg-primary text-white px-3 py-1.5 text-xs font-semibold rounded-full shadow-md">
                          {category}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3
                          className="text-xl font-serif font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300"
                          dangerouslySetInnerHTML={{ __html: post?.additional_title_value || post.title.rendered }}
                        />
                        <p
                          className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4"
                          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                        />
                        <div className="text-primary font-medium text-sm flex items-center gap-1.5 group-hover:gap-2 transition-all">
                          Read Article <span className="text-lg">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPostsCarousel;