import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Leaf, BadgeCheck, UserCog, ShieldCheck, TreePine, Activity, Target, AudioWaveform, Calendar, Wind, ShieldPlus, Smile } from "lucide-react";
import heroImage from "@/assets/services/lung-health.webp";
import OurProcess from "@/components/OurProcess";
import Hero from "@/components/services/Hero";
import InfoSection from "@/components/services/InfoSection";
import CommonFactors from "@/components/services/CommonFactors";
import Eligiblities from "@/components/services/Eligiblities";
import HowWeSupport from "@/components/services/HowWeSupport";
import WhyEarlySupport from "@/components/services/WhyEarlySupport";
import CallToAction from "@/components/services/CallToAction";
import WhyChoose from "@/components/services/WhyChoose";

const LungHealthService = () => {

  const paragraphs = [
    "The lungs play a vital role in oxygen delivery, energy levels, and overall physical balance. Daily lifestyle demands, environmental exposure, air quality, limited physical activity, and stress may influence lung health over time.",
    "When lung health is under strain, individuals may notice reduced stamina, breathing discomfort during daily activities, slower recovery, or general feelings of fatigue.",
    "At [link], our Lung Health Support Program is designed to support respiratory health through personalized assessment, lifestyle guidance, breathing focused strategies, and targeted supportive care all aimed at maintaining balance, comfort, and long term well-being.",
  ];

  const factors = [
    {
      icon: TreePine,
      title: "Air Exposure",
      desc: "Daily habits and exposure to air quality factors may influence breathing comfort and respiratory balance over time.",
    },
    {
      icon: Leaf,
      title: "Environmental Factors",
      desc: "Outdoor and indoor environments, including workplace conditions, may affect lung comfort when exposure is ongoing.",
    },
    {
      icon: Activity,
      title: "Physical Activity & Posture",
      desc: "Movement levels and posture can influence lung expansion and everyday breathing efficiency.",
    },
    {
      icon: Target,
      title: "Nutrition & Internal Balance",
      desc: "Nutritional balance supports overall body systems, including respiratory function.",
    },
    {
      icon: AudioWaveform,
      title: "Daily Respiratory Stress",
      desc: "Everyday physical demands and internal stress may affect breathing comfort.",
    },
    {
      icon: Calendar,
      title: "Biological & Age Factors",
      desc: "Natural age related changes and individual differences may influence lung capacity and flexibility.",
    },
  ];

  const eligibilities = [
    "Feel short of breath during daily activities",
    "Notice reduced stamina or breathing comfort",
    "Are affected by lifestyle or environmental air factors",
    "Want a gentle, supportive approach to lung health",
    "Aim to feel more comfortable staying active day to day",
  ];

  const supportingFactors = [
    {
      icon: Wind,
      title: "Improved Breathing",
      desc: "Encourage easier, more comfortable breathing during daily activities.",
    },
    {
      icon: Activity,
      title: "Daily Endurance",
      desc: "Help maintain healthy lung function and oxygen balance throughout the body.",
    },
    {
      icon: ShieldPlus,
      title: "Respiratory Balance",
      desc: "Focused on maintaining overall respiratory comfort and internal balance.",
    },
    {
      icon: Smile,
      title: "Restored Confidence",
      desc: "Feel more confident and comfortable staying active in everyday life.",
    },
  ];

  const earlySupportFactors = [
    {
      title: "Maintain Lung Health Balance",
      description:
        "Early attention to lung health helps maintain natural breathing balance and supports comfortable respiratory function over time.",
    },

    {
      title: "Support Long Term Lung Function",
      description:
        "Providing lung health support early may help the respiratory system adapt more smoothly to lifestyle, environmental, and age related changes.",
    },
    {
      title: "Promote Daily Comfort & Endurance",
      description: "Supporting lung health can assist with maintaining breathing comfort, activity tolerance, and energy levels.",
    },
    {
      title: "Reduce Ongoing Strain",
      description: "Early lung health support may help maintain long term respiratory comfort and overall system harmon",
    },
    {
      title: "Encourage Quality of Life",
      description: "Early lung health support helps individuals stay active, confident, and engaged in everyday activities.",
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
      title: "Personalized Lung Health Support",
      description: "Approaches are tailored to support lung health, respiratory balance, and overall well-being.",
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
        title="Lung Health Support Program"
        subtitle="Breathing Balance. Daily Comfort. Ongoing Support."
        description="Experience a personalized care approach designed to support lung health, maintain respiratory balance, and enhance everyday comfort and resilience."
        imageUrl={heroImage}
      />

      <InfoSection
        title="Understanding Lung Health & Respiratory balance"
        paragraphs={paragraphs}
        linkText="MRC"
        linkUrl="/"
      />

      <CommonFactors
        title="Common Factors That Affect Lung Health"
        factors={factors}
      />

      <Eligiblities
        title="Who This Program Is For"
        description="Our Lung Health Support Program is suitable for individuals who:"
        eligibilities={eligibilities}
      />

      <HowWeSupport 
        title="How We Can Support"
        description="Our comprehensive approach supports your journey toward lung health and overall well-being:"
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

export default LungHealthService;
