import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, MessageCircle, Phone, ClipboardList, Sparkles, Activity, Target, Heart, CircleCheckBig, Shield, UserSearch } from "lucide-react";
import { Button } from "../components/ui/button";
import RecentPostsCarousel from "../components/RecentPostsCarousel";
import heroImage from "@/assets/IV.webp";
import OurProcess from "@/components/OurProcess";
import { HeartPulse} from "lucide-react";

const IVNutrientSupportService = () => {
  
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
    "Experiencing low energy or feeling easily fatigued",
    "Looking to support hydration and nutrient balance",
    "Managing stress from work or lifestyle demands",
    "Seeking beauty and skin-supportive nutrient care",
    "Wanting immune and general well-being support",
    "Looking for a natural, non-invasive boost to daily performance",
    "Interested in maintaining long-term vitality and balance"
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
            backgroundPosition: "center 20%", // adjusts focus on faces if needed
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
              IV Nutrient Support Program
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              <b>Replenish. Restore Balance. Feel Energized.</b>
              <br />
              Experience a personalized IV nutrient approach designed to support
              hydration, boost overall well-being, and help your body function
              at its best.
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
                Understanding IV Nutrient Support & Its Benefits
              </h2>
              <div className="space-y-5 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                <p>
                  Daily lifestyle demands, stress, limited sleep, and modern
                  dietary habits can influence how your body absorbs and
                  utilizes essential nutrients. When nutrient levels are
                  imbalanced, you may notice lower energy, reduced focus, mild
                  fatigue, or slower recovery from everyday activities.
                </p>

                <p>
                  At{" "}
                  <Link
                    to="/"
                    className="underline font-bold hover:text-foreground transition"
                  >
                    MRC
                  </Link>
                  , our IV nutrient support programs are designed to help
                  replenish essential vitamins, minerals, amino acids, and
                  hydration directly into the bloodstream supporting overall
                  vitality, balance, and day-to-day well-being. .
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

      {/* Approach */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
                Our nutrient-focused approach helps support:
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 items-center gap-2">
              {/* Approach  */}
              {[
                "Energy and daily performance",
                "Hydration and electrolyte balance",
                "Skin vitality and cellular well-being",
                "Stress resilience and mental clarity",
                "Immune system function and natural defenses",
              ].map((approach, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4  p-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CircleCheckBig className="w-4 h-4 mt-1" />
                  <p className="text-foreground font-medium">{approach}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Factors */}
      <section className="py-20 bg-background-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
                Common Factors That Affect Nutrient Levels
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {[
                {
                  icon: Activity,
                  title: "Lifestyle Stress",
                  desc: "Busy schedules, irregular meals, and chronic stress may impact nutrient balance.",
                },
                {
                  icon: ClipboardList,
                  title: "Diet & Absorption",
                  desc: "Limited intake, restrictive diets, or poor digestion may reduce nutrient absorption.",
                },
                {
                  icon: HeartPulse,
                  title: "Sleep & Fatigue",
                  desc: "Low-quality sleep can affect energy production and metabolic balance.",
                },
                {
                  icon: UserSearch,
                  title: "Aging",
                  desc: "Natural changes over time can influence how your body processes and utilizes nutrients.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16  mb-4 bg-primary/10 rounded-full flex items-center justify-center">
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

      {/* Who this program is for section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
                Who This Program Is For
              </h2>
              <p className="text-lg text-muted-foreground">
                Our IV nutrient-support program is designed for individuals who are:
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
                Our comprehensive IV nutrient approach helps support your overall well-being:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                {
                  icon: Activity,
                  title: "Improved Vitality",
                  desc: "Help support daily wellness and comfort",
                  color: "text-primary",
                },
                {
                  icon: Target,
                  title: "Better Hydration",
                  desc: "Maintain fluid and electrolyte balance for overall function.",
                  color: "text-primary",
                },
                {
                  icon: Heart,
                  title: "Immune Support",
                  desc: "Helps support overall wellness",
                  color: "text-primary",
                },
                {
                  icon: Shield,
                  title: "Cellular & Skin well-being",
                  desc: "Promote nutrient delivery that supports cellular balance and skin radiance.",
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

      {/* How we can support */}
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-semibold font-serif text-foreground mb-6">
                Custom well-being Plans
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Each patient receives a tailored and evolving care roadmap,
                informed by detailed diagnostics and individual health needs.
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
                BOOK AN APPOINTMENT
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
                  color: "text-primary",
                },
                {
                  icon: ClipboardList,
                  title: "Custom Plan",
                  desc: "A personalized support plan arranged according to your preferences and overall profile.",
                  color: "text-primary",
                },
                {
                  icon: Sparkles,
                  title: "Program",
                  desc: "Professional, structured service provided in our facility to support your chosen plan.",
                  color: "text-primary",
                },
                {
                  icon: HeartPulse,
                  title: "Follow-up",
                  desc: "Continued check-ins to help monitor your experience and adjust the program as needed.",
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

      {/* Why Choose Us */}
      <section className="py-20 bg-background-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6">
                Why Choose
              </h2>
              <Link
                to="/"
                className="text-lg text-muted-foreground max-w-3xl mx-auto"
              >
                MIRACLE REGENERATIVE CENTER CO., LTD.
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Activity,
                  title: "Experienced Practitioners",
                  desc: "  IV Nutrient sessions are guided by skilled practitioners, ensuring a safe and comfortable experience.",
                  color: "text-primary",
                },
                {
                  icon: Target,
                  title: "Targeted Nutrient Support",
                  desc: "Formulations are tailored to support hydration, energy, immune balance, and overall vitality.",
                  color: "text-primary",
                },
                {
                  icon: Heart,
                  title: "Certified & Safe",
                  desc: " Protocols follow regulated standards with high-quality ingredients for individualized care.",
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

export default IVNutrientSupportService;
