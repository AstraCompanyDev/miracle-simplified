import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import OurProcess from "@/components/OurProcess";
import OurServices from "@/components/OurServices";
import RecentPostsCarousel from "@/components/RecentPostsCarousel";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Testimonials />
      <OurServices />
      <OurProcess />
      <div className="bg-white">
      <div className="flex flex-col max-w-6xl mx-auto bg-transparent  py-20">
      <h2 className="text-4xl text-center md:text-5xl font-semibold font-serif">
        Our Articles
      </h2>
      <RecentPostsCarousel currentPostSlug="" />
      </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
