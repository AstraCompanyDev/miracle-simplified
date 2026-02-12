import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, MessageCircle, Phone, ClipboardList, Sparkles, Activity, Target, Heart, CircleCheckBig, Shield, UserSearch } from "lucide-react";
import { Button } from "../../components/ui/button";
import RecentPostsCarousel from "../../components/RecentPostsCarousel";
import heroImage from "@/assets/services/cellular-therapy.webp";
import OurProcess from "@/components/OurProcess";
import { HeartPulse} from "lucide-react";

const CellularTherapiesService = () => {
  
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
    "Noticing signs of aging and want to slow the process",
    "Experiencing declining energy or mental clarity",
    "Seeking to optimize hormonal and metabolic balance",
    "Looking for a natural, holistic longevity approach",
    "Wanting to improve skin health and appearance.",
    "Ready to age on their own terms with confidence",
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

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-6xl font-semibold font-serif mb-6 text-foreground">
              Cellular Therapy Support
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The <b>Age</b> Gracefully. <b>Live</b> Vibrantly. <b>Feel</b> Your Best.
              <br />
              Experience a regenerative cellular therapy program designed to support vitality, help maintain cell health, and promote overall vitality.
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
                Understanding Aging & Its Impact
              </h2>
              <div className="space-y-5 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                <p>
                 Aging is natural, but how you age can be supported. When cellular function declines, you may feel tired, experience low energy, or notice changes in your appearance and vitality.
                </p>

                <p>
                  From diminished energy to skin changes, cognitive slowdowns, and metabolic shifts, aging affects every aspect of life. You deserve to feel confident, strong, and vibrant at every stage.
                </p>

                <p>
                  At{" "}
                  <Link
                    to="/"
                    className="underline font-bold hover:text-foreground transition"
                  >
                    MRC
                  </Link>
                  , our cellular therapy program supports your body’s natural processes, helping you maintain vitality, balance, and overall well-being from within.
                  .
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

      {/* Why Early Support Matters */}
      <section className="py-20 bg-background-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
                Why Early Support Matters
              </h2>
              {/* <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A personalized approach to your long-term well-being
              </p> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                {
                  icon: CircleCheckBig,
                  title: "Maintain Cellular Health",
                  desc: "Starting a cellular therapy program early helps support your cells' natural ability to function efficiently and maintain overall balance.",
                  color: "text-primary",
                },
                {
                  icon: CircleCheckBig,
                  title: "Support Healthy Function",
                  desc: "Early engagement in a cellular therapy program may help your body function smoothly as you age.",
                  color: "text-primary",
                },
                {
                  icon: CircleCheckBig,
                  title: "Promote Energy & Daily Activity",
                  desc: "Participating in a cellular therapy program can assist in maintaining everyday energy, mental alertness, and physical activity.",
                  color: "text-primary",
                },
                {
                  icon: CircleCheckBig,
                  title: "Enhance Lifestyle Support",
                  desc: "Healthy habits, nutrition, and movement guidance are often more beneficial when included early in a cellular therapy program.",
                  color: "text-primary",
                },
                {
                  icon: CircleCheckBig,
                  title: "Reduce Strain on the Body",
                  desc: "Early cellular support may help maintain balance across your body systems and support overall wellness.",
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
                    <h3 className="text-xl text-left font-semibold mb-3">{item.title}</h3>
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
      
      {/* Our Approach */}
      <section className="py-20 bg-background-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
                Our Approach to Vitality
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We combine cutting-edge health approaches with personalized vitality programs to support healthy aging and overall vitality
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {[
                {
                  icon: CircleCheckBig,
                  title: "Cellular Health Support",
                  desc: "We offer approaches that help support natural cell processes and contribute to overall well-being.",
                  color: "text-primary",
                },
                {
                  icon: CircleCheckBig,
                  title: "Personalized Aging Care",
                  desc: "Each care plan is personalized to your aging journey, health goals, and lifestyle needs.",
                  color: "text-primary",
                },
                {
                  icon: CircleCheckBig,
                  title: "Holistic well-being",
                  desc: "We consider hormones, nutrition, stress, sleep, and movement as part of a holistic approach to healthy aging.",
                  color: "text-primary",
                },
                {
                  icon: CircleCheckBig,
                  title: "Long-Term Support",
                  desc: "Our focus is on maintaining balance, cellular health, and quality of life over time.",
                  color: "text-primary",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center bg-white rounded-3xl p-6 "
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm  leading-relaxed">
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
                Our cellular therapy program is designed for individuals who are:
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
                How We Can Support
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive cellular therapy program helps support:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                {
                  icon: Activity,
                  title: "Youthful Energy",
                  desc: "Experience sustained vitality, mental clarity, and physical stamina throughout your day.",
                  color: "text-primary",
                },
                {
                  icon: Target,
                  title: "Healthy Metabolism Support",
                  desc: "Support healthy weight management, hormone balance, and metabolic function naturally.",
                  color: "text-primary",
                },
                {
                  icon: Heart,
                  title: "Radiant Skin",
                  desc: "Enhance skin health, reduce fine lines, and restore a youthful glow from within.",
                  color: "text-primary",
                },
                {
                  icon: Shield,
                  title: "Well-Being Support",
                  desc: "Promote cellular health, reduce inflammation, and support long-term vitality.",
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
                Support Options We Offer
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                {
                  icon: Activity,
                  title: "Cellular Support Approaches",
                  desc: "Support your body’s natural cell function and regenerative capacity.",
                  color: "text-primary",
                },
                {
                  icon: Target,
                  title: "Hormone Health Support",
                  desc: " Personalized hormone guidance to help support energy, metabolism, and overall well-being.",
                  color: "text-primary",
                },
                {
                  icon: Heart,
                  title: "Lifestyle & Wellness Guidance",
                  desc: " Nutrition, movement, sleep, and stress management tailored to your needs.",
                  color: "text-primary",
                },
                {
                  icon: Shield,
                  title: "Continuous Support",
                  desc: "Regular follow-ups to monitor progress and adjust your cellular therapy program as needed.",
                  color: "text-primary",
                },
                {
                  icon: Shield,
                  title: "Custom Plans",
                  desc: "Each participant receives a personalized roadmap informed by detailed assessments and individual goals.",
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
      <section className="py-20 bg-background-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
                Our Support Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                An individualized approach designed to guide your care journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: UserSearch, 
                  title: "Consultation", 
                  desc: "General discussion and review of your health background to understand your goals.",
                  color: "text-primary"
                },
                { 
                  icon: ClipboardList, 
                  title: "Custom Plan", 
                  desc: "A personalized cellular therapy program aligned with your lifestyle and objectives.",
                  color: "text-primary"
                },
                { 
                  icon: Sparkles, 
                  title: "Program", 
                  desc: "Professional, structured service provided in our facility to support your chosen plan.",
                  color: "text-primary"
                },
                { 
                  icon: HeartPulse, 
                  title: "Follow-up", 
                  desc: "Continued check-ins to help monitor your experience and adjust the program as needed.",
                  color: "text-primary"
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
                    <p className="text-left text-muted-foreground text-sm  leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
                  title: "Experienced Practitioners",
                  desc: " Our cellular therapy program is guided by skilled professionals.",
                  color: "text-primary",
                },
                {
                  icon: Target,
                  title: "Cell-Focused Support",
                  desc: " Designed to support your body’s natural cellular functions.",
                  color: "text-primary",
                },
                {
                  icon: Heart,
                  title: "Certified & Safe",
                  desc: " Protocols follow regulated standards for a safe experience.",
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

export default CellularTherapiesService;
