import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Zap, Salad, Brain, Leaf, HeartPulse, Flame, HeartHandshake, BadgeCheck, UserCog, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/services/immune-balance.webp";
import OurProcess from "@/components/OurProcess";
import Hero from "@/components/services/Hero";
import InfoSection from "@/components/services/InfoSection";
import CommonFactors from "@/components/services/CommonFactors";
import Eligiblities from "@/components/services/Eligiblities";
import HowWeSupport from "@/components/services/HowWeSupport";
import WhyEarlySupport from "@/components/services/WhyEarlySupport";
import CallToAction from "@/components/services/CallToAction";
import WhyChoose from "@/components/services/WhyChoose";

const ImmuneBalanceService = () => {

  const paragraphs = [
    "Your immune system plays an essential role in maintaining overall health and resilience. Daily stress, lifestyle demands, limited sleep, environmental exposure, and nutritional gaps may influence immune balance over time. When the immune system is under strain or out of balance, you may notice reduced energy, frequent minor illnesses, slower recovery, or general feelings of fatigue.",
    "At [link], our Immune Balance Support Program is designed to help support immune system function through personalized assessment, nutritional guidance, lifestyle strategies, and targeted supportive care all aimed at promoting balance and long term well-being.",
  ];

  const factors = [
    {
      icon: Salad,
      title: "Lifestyle Factors",
      desc: "Diet quality, sleep habits, physical activity, smoking, and alcohol intake may influence how well the immune system maintains balance and resilience over time.",
    },
    {
      icon: Heart,
      title: "Stress and Internal Balance",
      desc: "Ongoing stress, age related changes, and body weight balance can place additional demands on immune regulation and overall well being.",
    },
    {
      icon: Brain,
      title: "Health and Biological Factors",
      desc: "Gut health, long term health challenges, and certain medications may affect how the immune system responds and maintains internal balance.",
    },
    {
      icon: Leaf,
      title: "Environmental Factors",
      desc: "Exposure to pollution, chemicals, and daily hygiene habits may influence immune stress and the body’s natural defense processes.",
    },
  ];

  const eligibilities = [
    "Feel run down, low in energy, or easily tired",
    "Experience ongoing immune concerns",
    "Have frequent inflammation discomfort or slow recovery",
    "Are looking for a supportive whole body approach to immune health",
    "Want to improve daily comfort, resilience, and well being",
    "Are interested in long term immune balance and healthy living",
  ];

  const supportingFactors = [
    {
      icon: HeartPulse,
      title: "Immune Balance Support",
      desc: "Designed to help support healthy immune system regulation and overall body balance.",
    },
    {
      icon: Zap,
      title: "Support for Inflammation Comfort",
      desc: "Focused on supporting overall comfort and promoting balanced inflammatory responses.",
    },
    {
      icon: Flame,
      title: "Energy and Vitality Support",
      desc: "Help support daily energy levels, resilience, and overall vitality.",
    },
    {
      icon: HeartHandshake,
      title: "Lifestyle and Resilience Support",
      desc: "Encourage consistent well being through personalized lifestyle guidance and supportive care.",
    },
  ];

  const earlySupportFactors = [
    {
      title: "Maintain Immune Balance",
      description:
        "Early support helps maintain the immune system’s natural balance and efficiency.",
    },

    {
      title: "Support Healthy Function Over Time",
      description:
        "Proactive immune support may help the body adapt more smoothly to lifestyle and age related changes.",
    },
    {
      title: "Promote Daily Energy & Recovery",
      description: "Supporting immune balance can assist with maintaining energy, focus, and recovery.",
    },
    {
      title: "Enhance Lifestyle Strategies",
      description: "Nutrition, stress management, and healthy habits are more effective when supported early.",
    },
    {
      title: "Reduce Ongoing Strain",
      description: "Early immune balance support may help maintain overall system harmony.",
    },
  ];

  const chooseBenefits = [
    {
      icon: BadgeCheck,
      title: "Experienced Practitioners",
      description: "Programs are guided by trained professionals to ensure a safe and supportive experience.",
    },
    {
      icon: UserCog,
      title: "Personalized Immune Support",
      description: "Approaches are tailored to support immune balance, resilience, and overall well-being.",
    },
    {
      icon: ShieldCheck,
      title: "Certified & Safe",
      description: "All protocols follow regulated standards with carefully selected, high quality components.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero
        title="Immune Balance Support Program"
        subtitle="Restore Balance. Strengthen Resilience. Support Well-Being."
        description="Experience a personalized care approach designed to support immune system balance, enhance everyday resilience, and promote overall well-being."
        imageUrl={heroImage}
      />

      <InfoSection
        title="Understanding Immune Balance & Its Benefits"
        paragraphs={paragraphs}
        linkText="MRC"
        linkUrl="/"
      />

      <CommonFactors
        title="Common Factors That Affect Immune Balance"
        factors={factors}
      />

      <Eligiblities
        title="Who This Program Is For"
        description="Our Immune Balance Support Program is designed for individuals who:"
        eligibilities={eligibilities}
      />

      <HowWeSupport 
        title="How We Can Support"
        description="Our comprehensive approach supports your journey toward immune balance and overall well being:"
        supportingFactors={supportingFactors}
      />

      <WhyEarlySupport
        title="Why Early Support Matters"
        earlysupportFactors={earlySupportFactors}
      />

      <CallToAction />
      <OurProcess />
      <WhyChoose benefits={chooseBenefits} />
      <Footer />
    </div>
  );
};

export default ImmuneBalanceService;
