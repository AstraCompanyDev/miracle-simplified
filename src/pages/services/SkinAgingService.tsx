import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Activity, Target, Heart, Shield, Sun, ActivityIcon, Feather, Zap, CheckCircle, Settings, Users } from "lucide-react";
import heroImage from "@/assets/services/skin-aging.webp";
import OurProcess from "@/components/OurProcess";
import Hero from "@/components/services/Hero";
import InfoSection from "@/components/services/InfoSection";
import CommonFactors from "@/components/services/CommonFactors";
import Eligiblities from "@/components/services/Eligiblities";
import HowWeSupport from "@/components/services/HowWeSupport";
import WhyEarlySupport from "@/components/services/WhyEarlySupport";
import CallToAction from "@/components/services/CallToAction";
import WhyChoose from "@/components/services/WhyChoose";

const SkinAgingService = () => {

  const paragraphs = [
    "The skin is an important protective barrier that helps maintain hydration and overall appearance. As part of the natural aging process, skin structure and function gradually change over time. Environmental exposure, lifestyle habits, and internal stress may also influence skin balance.",
    "These changes may appear as dryness, reduced firmness, fine lines, uneven tone, or decreased elasticity.",
    "At [link], our Skin Aging Support Program focuses on supporting healthy skin function through personalized assessment, lifestyle guidance, and targeted supportive care with the goal of maintaining skin balance and overall skin health.",
  ];

  const factors = [
    {
      icon: Sun,
      title: "Environmental Exposure",
      desc: "Sun exposure, pollution, and daily environmental stressors may influence skin texture and appearance over time.",
    },
    {
      icon: Heart,
      title: "Lifestyle & Daily Habits",
      desc: "Sleep patterns, hydration, nutrition, and stress levels can affect skin balance and resilience.",
    },
    {
      icon: ActivityIcon,
      title: "Internal Biological Changes",
      desc: "Natural age related changes may influence collagen structure, elasticity, and moisture retention.",
    },
    {
      icon: Feather,
      title: "Skin Care Practices",
      desc: "Inconsistent or unsuitable skin care routines may impact overall skin comfort and stability.",
    },
    {
      icon: Zap,
      title: "Oxidative Stress",
      desc: "Daily exposure to internal and external stress factors may contribute to visible skin changes.",
    },
  ];

  const eligibilities = [
    "Notice fine lines or reduced skin firmness",
    "Experience dryness or uneven skin tone",
    "Feel their skin has become less resilient over time",
    "Want a supportive, balanced approach to skin health",
    "Aim to maintain healthy looking skin long term"
  ];

  const supportingFactors = [
    {
      icon: Activity,
      title: "Youthful Energy",
      desc: "Maintain steady daily energy, mental clarity, and physical stamina.",
    },
    {
      icon: Zap,
      title: "Balanced Metabolism",
      desc: "Support stable metabolic function and overall body balance.",
    },
    {
      icon: Heart,
      title: "Radiant Skin Appearance",
      desc: "Help maintain smooth looking skin and natural glow.",
    },
    {
      icon: Shield,
      title: "Aging Support",
      desc: "Encourage overall cellular balance and long term vitality.",
    },
  ];

  const earlySupportFactors = [
    {
      title: "Maintain Skin Quality Early",
      description:
        "It is easier to maintain balanced skin condition than to correct advanced visible changes later.",
    },

    {
      title: "Support Collagen Structure",
      description:
        "Natural collagen levels gradually decline with age. Early support helps maintain skin firmness and structure over time.",
    },
    {
      title: "Reduce the Need for Intensive Procedures",
      description: "Consistent care from an early stage may help minimize the need for more complex aesthetic procedures in the future.",
    },
    {
      title: "Protect Skin Barrier Function",
      description: "Ongoing care helps maintain skin barrier stability, reducing dryness, sensitivity, and environmental stress effects.",
    },
    {
      title: "Encourage Natural Appearance",
      description: "Early supportive approaches help maintain a natural, refreshed look without dramatic correction.",
    },
    {
      title: "Promote Long Term Skin Balance",
      description: "Proactive care supports consistent skin texture and tone, helping reduce early dullness and uneven appearance.",
    },
  ];

  const chooseBenefits = [
    {
      icon: Users,
      title: "Experienced Practitioners",
      description: "Programs are guided by trained professionals to ensure a safe and supportive experience.",
    },
    {
      icon: Settings,
      title: "Personalized Skin Aging Support",
      description: "Approaches are tailored to support skin balance, structure, and overall health.",
    },
    {
      icon: CheckCircle,
      title: "Certified & Safe",
      description: "All protocols follow regulated standards with carefully selected, high quality components.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero
        title="Skin Aging Regenerative Support Program"
        subtitle="Skin Integrity. Balanced Aging. Visible Vitality."
        description="Experience a personalized care approach designed to support skin health, maintain natural balance, and promote long term skin comfort and vitality."
        imageUrl={heroImage}
      />

      <InfoSection
        title="Understanding Skin Aging & Skin Balance"
        paragraphs={paragraphs}
        linkText="MRC"
        linkUrl="/"
      />

      <CommonFactors
        title="Common Factors That Affect Skin Health"
        factors={factors}
      />

      <Eligiblities
        title="Who This Program Is For"
        description="Our Skin Aging Support Program is suitable for individuals who:"
        eligibilities={eligibilities}
      />

      <HowWeSupport 
        title="How We Can Support"
        description="Our comprehensive approach supports your journey toward balanced and healthy skin:"
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

export default SkinAgingService;
