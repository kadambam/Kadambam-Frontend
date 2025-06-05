import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import HeroSection from './Hero'
import HeroMobile from './HeroMobile'
import OnlineShop from './OnlineShop'
import OurServices from './Services'
import Projects from './Projects'
import WhyChooseUs from './WhyChooseUs'
import LatestVids from './LatestVids'
import LatestBlog from './LatestBlogs'
import TestimonialSection from './Testimonial'
import LongImg from './LongImg'
import Footer from './Footer'

const Page1 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile); // Resize event
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div>
      <Navbar />
      {!isMobile && <HeroSection />}
      {isMobile && <HeroMobile />}
      <OnlineShop />
      <OurServices />
      <Projects />
      <WhyChooseUs />
      <LatestVids />
      <LatestBlog />
      <TestimonialSection />
      <LongImg />
      <Footer />
    </div>
  );
};

export default Page1;
