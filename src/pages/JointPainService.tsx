import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, MessageCircle, Phone, ClipboardList, Sparkles, Activity, Target, Heart, CircleCheckBig, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import RecentPostsCarousel from "../components/RecentPostsCarousel";
import heroImage from "@/assets/joint-pain.webp";
import OurProcess from "@/components/OurProcess";
import { HeartPulse} from "lucide-react";

const JoinPainService = () => {
  
  const concerns = [
    "Osteoarthritis",
    "Sports injuries",
    "Tendon or ligament damage",
    "Chronic inflammation",
    "Post-surgery recovery",
  ];

  const benefits = [
    "Support reduced stiffness and joint discomfort",
    "Encourage natural tissue balance and well-being",
    "Improve joint mobility, flexibility, and ease of movement",
    "Support smoother recovery with minimal disruption to routine",
  ];
  const eligibilities = [
    "Experiencing joint discomfort, stiffness, or reduced mobility",
    "Struggling with knee, hip, elbow, spine or hip tension",
    "Noticing movement limitations due to daily activity or aging",
    "Wanting holistic support for arthritis-related symptoms",
    "Seeking to maintain or restore strength, stability, and balance",
    "Looking for a natural, non-invasive approach to long-term mobility",
    "Ready to move with confidence and comfort again"

  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="relative py-20 lg:py-20 flex items-center justify-center overflow-hidden">
        {/* Background Image with Light Warm Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: "center 30%", // adjusts focus on faces if needed
          }}
        >
          {/* Light warm overlay - creates soft, golden, elegant feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-50/70 via-transparent to-transparent" />

          {/* Subtle warm radial glow in center */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.12)_0%,transparent_60%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-6xl font-semibold font-serif mb-6 text-foreground">
              Joint Pain Support & Mobility Program
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              <b>Move</b> Freely. <b>Live</b> Comfortably. <b>Stay</b> Active.
              <br />
              Experience a holistic, mobility-focused approach designed to support joint comfort and everyday movement.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"> */}
            {/* <Button
                variant="whatsapp"
                size="lg"
                className="text-lg gap-3"
                onClick={() =>
                  window.open("https://wa.me/66817342027", "_blank")
                }
              >
                <MessageCircle className="h-6 w-6" />
                Chat on WhatsApp
              </Button> */}

            <Button
              variant="secondary"
              size="lg"
              className="text-lg gap-3"
              onClick={() => window.open("https://wa.me/66817342027", "_blank")}
            >
              BOOK A CONSULTANT
            </Button>
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-semibold font-serif text-foreground mb-6">
                Understanding Joint Health & Its Impact
              </h2>
              <div className="space-y-5 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                <p>
                  Joint and musculoskeletal discomfort can interfere with daily
                  routines — from morning stiffness to limited mobility, reduced
                  strength, or tension in the knees, back, shoulders, or hips.
                </p>

                <p>
                  Natural wear-and-tear, posture habits, daily activity, and
                  aging all play important roles in how your joints feel and
                  function.
                </p>

                <p>
                  At{" "}
                  <Link
                    to="/"
                    className="underline font-bold hover:text-foreground transition"
                  >
                    MRC
                  </Link>
                  , we recognize the close relationship between{" "}
                  <strong>
                    movement, independence, and personal confidence
                  </strong>
                  .
                </p>

                <p>
                  Our joint pain support approach focuses on helping you move
                  with greater ease so you can feel more in control of your
                  day-to-day life while maintaining comfort and stability.
                </p>
              </div>
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

      {/* Common Cause of Joint Pain */}
      <section className="py-20 bg-background-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
                Common Factors That Affect Joint Health
              </h2>
              {/* <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A personalized approach to your long-term well-being
              </p> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Activity,
                  title: "Arthritis",
                  desc: "OConditions like osteoarthritis or rheumatoid-related changes can affect joint comfort and mobility.",
                  color: "text-primary",
                },
                {
                  icon: Target,
                  title: "Injury & Trauma",
                  desc: "Sports activity, accidents, or repetitive movement may impact joint tissues and cause discomfort.",
                  color: "text-primary",
                },
                {
                  icon: Heart,
                  title: "Age & Natural Degeneration",
                  desc: "Joint mobility and flexibility can decline over time due to natural wear and aging.",
                  color: "text-primary",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-6 text-center shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className=" text-muted-foreground text-sm  leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
                Effective Support for Joint Discomfort
              </h2>
              <p className="text-lg text-muted-foreground">
                We combine cutting-edge technology with personalized care
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 max-w-4xl mx-auto">
              {[
                {
                  icon: Activity,
                  desc: "Knee",
                  color: "text-primary",
                },
                {
                  icon: Target,
                  desc: "Shoulder",
                  color: "text-primary",
                },
                {
                  icon: Heart,
                  desc: "Hip",
                  color: "text-primary",
                },
                {
                  icon: Heart,
                  desc: "Elbow",
                  color: "text-primary",
                },
                {
                  icon: Heart,
                  desc: "Spine",
                  color: "text-primary",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-6 mb-6 text-center transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className={`w-8 h-8 ${item.color}`} />
                    </div>

                    <p className=" text-muted-foreground text-sm  leading-relaxed font-semibold">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             
             {/* Concerns  */}
             <div>
              <h3 className="text-xl font-semibold mb-4">Common Concerns People Seek Support For</h3>
              {concerns.map((concern, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4  p-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CircleCheckBig className="w-4 h-4 mt-1" />
                  <p className="text-foreground font-medium">{concern}</p>
                </div>
              ))}
              </div>
             
             {/* Benefits */}
             <div>
              <h3 className="text-xl font-semibold mb-4">Benefits of Joint Pain Support</h3>
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4  p-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CircleCheckBig className="w-4 h-4 mt-1" />
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>
              ))}
             </div>
            
            </div>
          </div>
        </div>
      </section>

      {/* How we can support */}
      <section className="py-20 bg-background-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
                Why Early Support Matters
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                {
                  icon: CircleCheckBig,
                  title: "Maintain Healthy Movement",
                  desc: "Early support helps encourage natural movement patterns before feelings of stiffness or discomfort begin to affect daily activities such as walking, sitting, or lifting.",
                  color: "text-primary",
                },
                {
                  icon: CircleCheckBig,
                  title: "Avoid the Inactivity Cycle",
                  desc: "When joints feel uncomfortable, people move less which creates more tightness. Early support encourages gentle activity that keeps joints moving comfortably.",
                  color: "text-primary",
                },
                {
                  icon: CircleCheckBig,
                  title: "Support Independence",
                  desc: "Small limitations can grow over time. Early support helps maintain everyday functions like climbing stairs, bending, and standing.",
                  color: "text-primary",
                },
                {
                  icon: CircleCheckBig,
                  title: "Better Engagement With Supportive Care",
                  desc: "Movement and lifestyle-based strategies are usually easier and more effective when discomfort is addressed early.",
                  color: "text-primary",
                },
                {
                  icon: CircleCheckBig,
                  title: "Support Overall Body Balance",
                  desc: "When one area becomes stiff, other areas often compensate. Early support helps maintain overall body balance and reduces unnecessary stress on other joints.",
                  color: "text-primary",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-start items-start  text-center bg-white rounded-3xl p-6 "
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* <div className="w-16 h-16 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className={`w-8 h-8 ${item.color}`} />
                    </div> */}
                    <h3 className="text-xl text-left font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-left text-muted-foreground text-sm  leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Who this program is for section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
                Who This Program Is For
              </h2>
              <p className="text-lg text-muted-foreground">
                Our joint support program is designed for individuals who are:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 items-center gap-2">
             
             {/* Eligibility  */}
              {eligibilities.map((eligibility, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4  p-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CircleCheckBig className="w-4 h-4 mt-1" />
                  <p className="text-foreground font-medium">{eligibility}</p>
                </div>
              ))}
            
            </div>
          </div>
        </div>
      </section>

      {/* How we can Help */}
      <section className="py-20 bg-background-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
                How We Provide Joint Pain Support
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive mobility-support approach helps you maintain an active, comfortable lifestyle:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                {
                  icon: Activity,
                  title: "Improved Joint Comfort",
                  desc: "Support encourages ease of movement and daily comfort.",
                  color: "text-primary",
                },
                {
                  icon: Target,
                  title: "Promoted Mobility & Flexibility",
                  desc: "Encourage smoother movement, better range of motion, and improved activity levels.",
                  color: "text-primary",
                },
                {
                  icon: Heart,
                  title: "Posture & Muscular Balance Support",
                  desc: "Address posture impacts, muscle imbalances, and functional weakness contributing to joint stress.",
                  color: "text-primary",
                },
                {
                  icon: Shield,
                  title: "Stronger Long-Term Musculoskeletal Health",
                  desc: "Support joint function, reduce strain, and promote long-term movement well-being.",
                  color: "text-primary",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-start bg-white rounded-3xl p-6 text-center shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16  mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className=" text-left text-muted-foreground text-sm  leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* Treatment Options */}
      <section className="py-20 bg-background-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
                Joint Pain Support Options Available
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                {
                  icon: Activity,
                  title: "Cell & Joint Support",
                  desc: "Approaches designed to help support joint comfort and mobility, focusing on maintaining balanced cell function related to joint areas.",
                  color: "text-primary",
                },
                {
                  icon: Target,
                  title: "Comfort-Focused Care",
                  desc: "General supportive strategies that help individuals manage everyday joint discomfort that may arise from routine activities or lifestyle factors.",
                  color: "text-primary",
                },
                {
                  icon: Heart,
                  title: "Lifestyle & Movement Guidance",
                  desc: "Personalized suggestions on nutrition, gentle movement, posture, and daily habits to help maintain joint ease and support your overall physical function.",
                  color: "text-primary",
                },
                {
                  icon: Shield,
                  title: "Continuous Joint Care",
                  desc: "Regular follow-ups and observations to help track your joint condition and adjust your support plan according to your needs.",
                  color: "text-primary",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-start bg-white rounded-3xl p-6 text-center shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className=" text-muted-foreground text-sm text-left leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-semibold font-serif text-foreground mb-6">
                Custom well-being Plans
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Each patient receives a tailored and evolving care roadmap, informed by detailed diagnostics and individual health needs.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Personalized care isn’t a trend, it's the core of what we do.
              </p>
            </div>
            <div className="text-center">
              <Button
                variant="secondary"
                size="lg"
                className="text-lg gap-3"
                onClick={() =>
                  window.open("https://wa.me/66817342027", "_blank")
                }
              >
                BOOK  AN APPOINTMENT
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <OurProcess />

      {/* Common Cause of Joint Pain */}
      <section className="py-20 bg-background-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
                Why Choose
              </h2>
              <Link to="/" className="text-lg text-muted-foreground max-w-3xl mx-auto">
                MIRACLE REGENERATIVE CENTER CO., LTD.
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Activity,
                  title: "Expert Doctors",
                  desc: "Care guided by experienced doctors specializing in joint pain support and mobility-focused care.",
                  color: "text-primary",
                },
                {
                  icon: Target,
                  title: "1,000+ joint-care sessions",
                  desc: "Delivered with consistent, high-quality standards",
                  color: "text-primary",
                },
                {
                  icon: Heart,
                  title: "Certified Care",
                  desc: "Individually tailored care plans that enhance joint comfort, movement, and long-term mobility",
                  color: "text-primary",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className=" p-6 text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className=" text-muted-foreground text-sm  leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
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

export default JoinPainService;
