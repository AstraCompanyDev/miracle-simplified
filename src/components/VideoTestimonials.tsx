import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import { useState } from "react";
import frankieThumb from "@/assets/frankie-testimonial.jpg";
import mykaThumb from "@/assets/myka-testimonial.jpg";

const VideoTestimonials = () => {
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  const videos = [
    {
      title: "Frankie's Regenerative Medicine Journey",
      thumbnail: frankieThumb,
      embedUrl: "https://www.youtube.com/embed/qPq-Wex7FgA",
      videoId: "qPq-Wex7FgA",
      patient: "Frankie",
      treatment: "Regenerative Medicine",
    },
    {
      title: "Myka's Treatment Journey",
      thumbnail: mykaThumb,
      embedUrl: "https://www.youtube.com/embed/L7oXaqRbIWw",
      videoId: "L7oXaqRbIWw",
      patient: "Myka",
      treatment: "Regenerative Medicine",
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
            <h2 className="text-4xl md:text-5xl font-semibold font-serif text-foreground mb-6">
              Real Results, Real People
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Watch our patients share their transformative experiences with regenerative medicine
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Dialog key={index} open={openVideo === video.videoId} onOpenChange={(open) => setOpenVideo(open ? video.videoId : null)}>
                <DialogTrigger asChild>
                  <Card
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
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        - {video.patient}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0">
                  <div className="relative pt-[56.25%]">
                    <iframe
                      src={`${video.embedUrl}?autoplay=1`}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </DialogContent>
              </Dialog>
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
