import Hero from "@/components/Hero";
import About from "@/components/About";
import SignatureTreatments from "@/components/SignatureTreatments";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <SignatureTreatments />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
