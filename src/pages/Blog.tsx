import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import stemCellImg from "@/assets/stem-cell-therapy.jpg";
import antiAgingImg from "@/assets/anti-aging.jpg";
import ivTherapyImg from "@/assets/iv-therapy.jpg";
import jointTherapyImg from "@/assets/joint-therapy.jpg";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Regenerative Medicine",
      excerpt: "Discover how stem cell therapy is revolutionizing healthcare and offering new hope for chronic conditions.",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: stemCellImg,
      category: "Stem Cell Therapy",
    },
    {
      title: "Anti-Aging: Beyond Skin Deep",
      excerpt: "Explore cellular rejuvenation techniques that address aging at its source for lasting vitality and health.",
      date: "March 10, 2024",
      readTime: "7 min read",
      image: antiAgingImg,
      category: "Anti-Aging",
    },
    {
      title: "IV Therapy: Benefits and Applications",
      excerpt: "Learn about the immediate benefits of IV nutrient therapy for energy, immunity, and overall wellness.",
      date: "March 5, 2024",
      readTime: "4 min read",
      image: ivTherapyImg,
      category: "IV Therapy",
    },
    {
      title: "Managing Joint Pain with Regenerative Medicine",
      excerpt: "How regenerative treatments are providing lasting relief for osteoarthritis and joint conditions.",
      date: "February 28, 2024",
      readTime: "6 min read",
      image: jointTherapyImg,
      category: "Joint Health",
    },
  ];

  const categories = [
    "All Posts",
    "Stem Cell Therapy",
    "Anti-Aging",
    "IV Therapy",
    "Joint Health",
    "Wellness",
  ];

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
            <h1 className="text-5xl md:text-6xl font-semibold font-serif mb-6 text-foreground">
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Latest insights on regenerative medicine, wellness, and healthy living
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    index === 0
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

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-semibold font-serif mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-semibold font-serif mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest insights on regenerative medicine
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
