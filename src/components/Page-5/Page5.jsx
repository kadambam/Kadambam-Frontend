import React from 'react'
import HeroWithGallery from './Hero'
import Carousel from './Carousel'
import HomeInteriors from './HomeInteriors'
import HowWeWork from './HowWeWork'
import ContactUs from './Contact'
import TestimonialSection from './Testimonial'
import LatestBlog from './LatestBlogs'
import FAQSection from './Faq'
import LongImg from './LongImg'
import Footer from '../Page-1/Footer'
import Navbar from './Navbar'
import TabbedNav from './TabbedNav'
import TabbedNav1 from './TabbedNav1'
import RealEstate from './RealEstate'
import ExteriorImg from './ExteriorImg'
import LongImg1 from './LongImg1'
import WhyChooseUs from './WhyChooseUs'
import LatestVids from './LatestVids'


const Page5 = () => {
  return (
    <div>
   <Navbar/>
    <HeroWithGallery/>
    <Carousel/>
    <TabbedNav/>
    
    <TabbedNav1/>
    <RealEstate/>
    <ExteriorImg/>
    <HomeInteriors/>
    <HowWeWork/>
    <ContactUs/>
    <LongImg1/>
    <WhyChooseUs/>
    <TestimonialSection/>
    <LatestVids/>
    <LatestBlog/>
   <FAQSection/>
   <LongImg/>
   <Footer/>
    </div>
  )
}

export default Page5
