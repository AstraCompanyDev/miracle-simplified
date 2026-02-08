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
import Guiding from "@/components/Guiding";
import Partners from "@/components/Partners";
import MeetOurDoctor from "@/components/MeetOurDoctor";

import ImageCarousel, { Slide } from "@/components/ui/ImageCarousel";

// Importing images for the carousel
import img1 from "@/assets/mrc/mrc(1).jpeg";
import img2 from "@/assets/mrc/mrc(2).jpeg";
import img3 from "@/assets/mrc/mrc(3).jpeg";
import img4 from "@/assets/mrc/mrc(4).jpeg";
import img5 from "@/assets/mrc/mrc(5).jpeg";
import img6 from "@/assets/mrc/mrc(6).jpeg";



const Index = () => {
  const slides: Slide[] = [
  {
    image: img1,
    alt: 'Medical Facility',
    // title: 'State-of-the-Art Facility',
    // description: 'Our modern clinic with advanced equipment'
  },
  {
    image: img2,
    alt: 'Medical Facility',
    // title: 'State-of-the-Art Facility',
    // description: 'Our modern clinic with advanced equipment'
  },
  {
    image: img3,
    alt: 'Doctor Consultation',
    // title: 'Expert Consultation',
    // description: 'Personalized care from experienced specialists'
  },
  {
    image: img4,
    alt: 'Treatment Room',
    // title: 'Comfortable Environment',
    // description: 'Relaxing atmosphere for optimal healing'
  },
  {
    image: img5,
    alt: 'Treatment Room',
    // title: 'Comfortable Environment',
    // description: 'Relaxing atmosphere for optimal healing'
  },
  {
    image: img6,
    alt: 'Treatment Room',
    // title: 'Comfortable Environment',
    // description: 'Relaxing atmosphere for optimal healing'
  },
];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <OurServices />
      <MeetOurDoctor />

      {/* Guiding Section */}
      {/* <Guiding /> */}
      <OurProcess />
      <Partners />
      <Testimonials />
      <div className="bg-white">
        <div className="flex flex-col max-w-6xl mx-auto bg-transparent  py-20">
          <h2 className="text-4xl text-center md:text-5xl font-semibold font-serif">
            Our Articles
          </h2>
          <RecentPostsCarousel currentPostSlug="" />
        </div>
      </div>
      <Contact />
      
      <ImageCarousel slides={slides} visibleSlides={3} />
      
      <Footer />
    </div>
  );
};

export default Index;
