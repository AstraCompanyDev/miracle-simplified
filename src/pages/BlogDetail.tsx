import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";

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
  uagb_featured_image_src?: any;
  yoast_head_json?: any;
  _embedded?: any;
};

/* -------------------------------- Component -------------------------------- */
const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const [post, setPost] = useState<WPPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        if (err instanceof DOMException) return; // request aborted
        setError(err instanceof Error ? err.message : "Unexpected error");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();

    return () => controller.abort();
  }, [slug]);

  /* ---------------------------- Derived Values ----------------------------- */
  const featuredImage = useMemo(() => {
    if (!post) return FALLBACK_IMAGE;

    return (
      post.uagb_featured_image_src?.full?.[0] ||
      post.yoast_head_json?.og_image?.[0]?.url ||
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      FALLBACK_IMAGE
    );
  }, [post]);

  const categories = useMemo(() => {
    return post?._embedded?.["wp:term"]?.[0]?.map((cat: any) => cat.name) ?? [];
  }, [post]);

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

            {/* Content */}
            <section className="py-16">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-serif prose-img:rounded-xl prose-img:shadow-soft">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.content.rendered,
                    }}
                  />
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
