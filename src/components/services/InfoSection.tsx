import { MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface InfoProps {
  title: string;
  paragraphs: string[];
  linkText?: string;
  linkUrl?: string;
}

const InfoSection = ({ title, paragraphs, linkText, linkUrl }: InfoProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-semibold font-serif text-foreground mb-6">
              {title}
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {paragraphs.map((para, idx) => (
                <p key={idx}>
                  {para.includes("[link]") ? (
                    <>
                      {para.split("[link]")[0]}
                      <Link
                        to={linkUrl}
                        className="underline font-bold hover:text-foreground transition"
                      >
                        {linkText}
                      </Link>
                      {para.split("[link]")[1]}
                    </>
                  ) : (
                    para
                  )}
                </p>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Button
              variant="whatsapp"
              size="lg"
              className="text-lg gap-3"
              onClick={() => window.open("https://wa.me/66817342027", "_blank")}
            >
              <MessageCircle className="h-6 w-6" />
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection