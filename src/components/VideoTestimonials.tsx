import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoTestimonials = () => {
  const videos = [
    {
      title: "Lucy's Journey with Cellular Therapy",
      thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      patient: "Lucy K.",
      treatment: "Cellular Therapy",
    },
    {
      title: "Mark's Hip Recovery Story",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      patient: "Mark T.",
      treatment: "Immunotherapy",
    },
    {
      title: "Anjali's Diabetes Treatment",
      thumbnail: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      patient: "Anjali T.",
      treatment: "Regenerative Medicine",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">
              Patient Stories
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-foreground mb-6">
              Real Results, Real People
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Watch our patients share their transformative experiences with regenerative medicine
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  {/* Video Thumbnail */}
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-hover">
                      <Play className="h-8 w-8 text-white fill-white ml-1" />
                    </div>
                  </div>

                  {/* Treatment Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {video.treatment}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    - {video.patient}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Note about video embedding */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Click on any video to watch the full testimonial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
