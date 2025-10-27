import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import SignatureTreatments from "@/components/SignatureTreatments";
import ClinicShowcase from "@/components/ClinicShowcase";
import Experts from "@/components/Experts";
import VideoTestimonials from "@/components/VideoTestimonials";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <WhyChooseUs />
      <SignatureTreatments />
      <ClinicShowcase />
      <Experts />
      <VideoTestimonials />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
