import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WP_API = "https://miracleregen.com/wp-json/wp/v2";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [posts, setPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>(["All Posts"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch WordPress Posts
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const res = await fetch(`${WP_API}/posts?_embed&per_page=100`);
        if (!res.ok) throw new Error("Failed to load posts");
        const data = await res.json();

        // Extract dynamic categories
        const allCats = Array.from(
          new Set(
            data
              .flatMap((p: any) =>
                p._embedded?.["wp:term"]?.[0]?.map((c: any) => c.name)
              )
              .filter(Boolean)
          )
        );

        setCategories(["All Posts", ...allCats]);
        setPosts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const filteredPosts =
    selectedCategory === "All Posts"
      ? posts
      : posts.filter((post) => {
          const postCats =
            post._embedded?.["wp:term"]?.[0]?.map((c: any) => c.name) || [];
          return postCats.includes(selectedCategory);
        });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        <div className="animate-spin rounded-full border-b-4 border-r-4 border-r-primary-500 h-8 w-8 mr-4" />
        
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">
              Health & Wellness Insights
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold font-serif mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Latest insights on regenerative medicine, wellness, and healthy
              living
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-white shadow-soft"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => {
                // ✅ FIX: Get image from multiple sources
                const featuredImage = 
                  post.uagb_featured_image_src?.full?.[0] || 
                  post.yoast_head_json?.og_image?.[0]?.url ||
                  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "https://placehold.co/800x600?text=Place+Holder"; // fallback

                const category =
                  post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";

                return (
                  <Link to={`/blog/${post.slug}`} key={post.id}>
                    <Card
                      key={post.id}
                      className="group h-full flex flex-col overflow-hidden border-0 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative aspect-[560/288] overflow-hidden">
                        <img
                          src={featuredImage}
                          alt={post.title.rendered}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://placehold.co/600x400?text=Placeholder";
                          }}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                            {category}
                          </span>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />5 min read
                          </div>
                        </div>

                        <h3
                          className="text-2xl font-semibold font-serif mb-3 group-hover:text-primary transition-colors"
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                          }}
                        />

                        <p
                          className="text-muted-foreground mb-4 leading-relaxed"
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered,
                          }}
                        />

                        <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                          Read Article
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;