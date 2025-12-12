import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import RecentPostsCarousel from "../components/RecentPostsCarousel";

const WP_API = "https://miracleregen.com/wp-json/wp/v2";

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`${WP_API}/posts?slug=${slug}&_embed`);
        if (!res.ok) throw new Error("Failed to load post");

        const data = await res.json();
        if (!data.length) throw new Error("Post not found");

        setPost(data[0]);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        <div className="animate-spin rounded-full border-b-4 border-r-4 border-r-primary-500 h-8 w-8 mr-4" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-xl text-red-500">
        {error || "Post not found"}
        <Link to="/blog" className="mt-4 text-primary underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  // Featured Image with fallbacks
  const featuredImage =
    post.uagb_featured_image_src?.full?.[0] ||
    post.yoast_head_json?.og_image?.[0]?.url ||
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://via.placeholder.com/900x600?text=No+Image";

  const categories =
    post._embedded?.["wp:term"]?.[0]?.map((c: any) => c.name) || [];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero / Banner */}
      <section className="relative h-[60vh] md:h-[70vh] ">
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
              <ArrowLeft className="w-5 h-5" /> Back to Articles
            </Link>

            <h1
              className="text-4xl md:text-6xl font-serif font-semibold text-white max-w-4xl mb-4"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
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
              <div className="flex gap-2 mt-4">
                {categories.map((cat: string, i: number) => (
                  <span
                    key={i}
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
          <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-3xl prose-img:rounded-xl prose-img:shadow-soft">
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-semibold font-serif text-foreground mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Connect with our team for a consultation and explore service
                options designed to support your overall wellbeing.
              </p>
            </div>
            <div className="text-center">
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
            </div>
          </div>
        </div>
      </section>
      {/* Recent Posts Carousel */}
      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center">
        Continue Reading
      </h2>
      <RecentPostsCarousel currentPostSlug={slug} />

      <Footer />
    </div>
  );
};

export default BlogDetail;