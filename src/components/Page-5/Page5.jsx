import React from 'react'
import HeroSection from './hero'
import Carousel from './Carousel'
import HomeInteriors from './HomeInteriors'
import HowWeWork from './HowWeWork'
import ContactUs from './Contact'
import TestimonialSection from './Testimonial'
import LatestBlog from './LatestBlogs'
import FAQ from './Faq'
import FAQSection from './Faq'
import LongImg from './LongImg'
import Footer from '../Page-1/Footer'
import NavbarBlack from '../Page-2/Navbar'

const Page5 = () => {
  return (
    <div>
      <NavbarBlack/>
    <HeroSection/>
    <Carousel/>
    <HomeInteriors/>
    <HowWeWork/>
    <ContactUs/>
    <TestimonialSection/>
    <LatestBlog/>
   <FAQSection/>
   <LongImg/>
   <Footer/>
    </div>
  )
}

export default Page5
