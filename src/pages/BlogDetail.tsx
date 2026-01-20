import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, MessageCircle, ChevronDown } from "lucide-react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RecentPostsCarousel from "@/components/RecentPostsCarousel";
import { Button } from "@/components/ui/button";

const WP_API = "https://miracleregen.com/wp-json/wp/v2";
const FALLBACK_IMAGE = "https://via.placeholder.com/900x600?text=No+Image";

/* ---------------------------------- Types --------------------------------- */
type WPPost = {
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  uagb_featured_image_src?: string;
  additional_featured_image_url: string;
  yoast_head_json?: any;
  _embedded?: any;
};

type TocItem = {
  id: string;
  text: string;
};

/* -------------------------------- Component -------------------------------- */
const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const [post, setPost] = useState<WPPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isTocOpen, setIsTocOpen] = useState(true);

  /* ------------------------------- Fetch Post ------------------------------ */
  useEffect(() => {
    if (!slug) return;

    const controller = new AbortController();

    const fetchPost = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${WP_API}/posts?slug=${slug}&_embed`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to load post");
        }

        const data = await response.json();

        if (!data?.length) {
          throw new Error("Post not found");
        }

        setPost(data[0]);
      } catch (err) {
        if (err instanceof DOMException) return;
        setError(err instanceof Error ? err.message : "Unexpected error");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();

    return () => controller.abort();
  }, [slug]);

  /* ------------------------- Extract TOC from Content ---------------------- */
  useEffect(() => {
    if (!post?.content?.rendered) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content.rendered, "text/html");
    const h2Elements = doc.querySelectorAll("h2");

    const items: TocItem[] = [];
    h2Elements.forEach((h2, index) => {
      const text = h2.textContent?.trim() || "";
      if (text) {
        const id = `heading-${index}`;
        h2.id = id;
        items.push({ id, text });
      }
    });

    setTocItems(items);

    // Update the content with IDs
    const contentDiv = document.querySelector(".blog-content");
    if (contentDiv) {
      const contentH2s = contentDiv.querySelectorAll("h2");
      contentH2s.forEach((h2, index) => {
        h2.id = `heading-${index}`;
      });
    }
  }, [post]);

  /* ----------------------- Intersection Observer for Active TOC ------------ */
  useEffect(() => {
    if (tocItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -80% 0px",
      }
    );

    tocItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  /* ---------------------------- Derived Values ----------------------------- */
  const featuredImage = useMemo(() => {
    if (!post) return FALLBACK_IMAGE;

    return (
      post.additional_featured_image_url ||
      post.uagb_featured_image_src?.full?.[0] ||
      post.yoast_head_json?.og_image?.[0]?.url ||
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      FALLBACK_IMAGE
    );
  }, [post]);

  const categories = useMemo(() => {
    return post?._embedded?.["wp:term"]?.[0]?.map((cat: any) => cat.name) ?? [];
  }, [post]);

  /* ---------------------------- Scroll Handler ----------------------------- */
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  /* ---------------------------------- JSX ---------------------------------- */
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* ============================= LOADING ============================== */}
        {loading && (
          <div className="min-h-screen flex items-center justify-center text-xl">
            <div className="animate-spin rounded-full border-b-4 border-r-4 border-r-primary-500 h-8 w-8 mr-4" />
          </div>
        )}

        {/* ============================== ERROR =============================== */}
        {!loading && error && (
          <section className="py-24 text-center">
            <p className="text-red-500 text-lg mb-6">{error}</p>
            <Link to="/blog" className="text-primary underline">
              Back to Blog
            </Link>
          </section>
        )}

        {/* ============================= CONTENT ============================== */}
        {!loading && post && (
          <>
            {/* Hero */}
            <section className="relative h-[60vh] md:h-[70vh]">
              <img
                src={featuredImage}
                alt={post.title.rendered}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 flex items-end">
                <div className="container mx-auto px-4 pb-12">
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Articles
                  </Link>

                  <h1
                    className="text-4xl md:text-6xl font-serif font-semibold text-white max-w-4xl mb-4"
                    dangerouslySetInnerHTML={{
                      __html: post.title.rendered,
                    }}
                  />

                  <div className="flex items-center gap-6 text-white/80 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />5 min read
                    </div>
                  </div>

                  {categories.length > 0 && (
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {categories.map((cat, index) => (
                        <span
                          key={index}
                          className="bg-primary/80 text-white px-4 py-1 rounded-full text-sm"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Content with TOC */}
            <section className="py-16">
              <div className="container mx-auto px-4">
                {/* Mobile TOC - Collapsible (Above Content) */}
                {tocItems.length > 0 && (
                  <div className="lg:hidden max-w-4xl mx-auto mb-8">
                    <button
                      onClick={() => setIsTocOpen(!isTocOpen)}
                      className="w-full flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-lg px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <span className="font-semibold text-foreground">
                        Table of Contents
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          isTocOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    
                    {isTocOpen && (
                      <nav className="mt-2 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <ul className="space-y-2 border-l-2 border-gray-200 dark:border-gray-700">
                          {tocItems.map((item) => (
                            <li key={item.id}>
                              <button
                                onClick={() => {
                                  scrollToHeading(item.id);
                                }}
                                className={`block w-full text-left px-4 py-2 text-sm transition-colors hover:text-primary ${
                                  activeId === item.id
                                    ? "text-primary font-medium border-l-2 border-primary -ml-[2px]"
                                    : "text-muted-foreground"
                                }`}
                              >
                                {item.text}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    )}
                  </div>
                )}

                <div className="flex gap-12 max-w-7xl mx-auto relative">
                  {/* Desktop TOC - Sticky (Left Side) */}
                  {tocItems.length > 0 && (
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                      <div className="sticky top-24">
                        <h3 className="text-lg font-semibold mb-4 text-foreground">
                          Table of Contents
                        </h3>
                        <nav>
                          <ul className="space-y-2 border-l-2 border-gray-200">
                            {tocItems.map((item) => (
                              <li key={item.id}>
                                <button
                                  onClick={() => scrollToHeading(item.id)}
                                  className={`block w-full text-left px-4 py-2 text-sm transition-colors hover:text-primary ${
                                    activeId === item.id
                                      ? "text-primary font-medium border-l-2 border-primary -ml-[2px]"
                                      : "text-muted-foreground"
                                  }`}
                                >
                                  {item.text}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </nav>
                      </div>
                    </aside>
                  )}

                  {/* Main Content */}
                  <article className="flex-1 max-w-4xl">
                    <div
                      className="blog-content prose prose-lg prose-headings:font-serif prose-img:rounded-xl prose-img:shadow-soft prose-h2:scroll-mt-24"
                      dangerouslySetInnerHTML={{
                        __html: post.content.rendered,
                      }}
                    />
                  </article>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Connect with our team for a consultation and explore service
                options designed to support your overall wellbeing.
              </p>

              <Button
                variant="whatsapp"
                size="lg"
                className="text-lg gap-3"
                onClick={() =>
                  window.open("https://wa.me/66817342027", "_blank")
                }
              >
                <MessageCircle className="h-6 w-6" />
                Schedule a Consultation
              </Button>
            </section>

            {/* Recent Posts */}
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-8">
              Continue Reading
            </h2>
            <RecentPostsCarousel currentPostSlug={slug} />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;