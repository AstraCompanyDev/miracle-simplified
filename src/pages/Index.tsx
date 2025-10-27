import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import SignatureTreatments from "@/components/SignatureTreatments";
import ClinicShowcase from "@/components/ClinicShowcase";
import Experts from "@/components/Experts";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <WhyChooseUs />
      <SignatureTreatments />
      <ClinicShowcase />
      <Experts />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
