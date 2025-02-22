import React from 'react'
import Navbar from './Navbar'
import HeroSection from './Hero'
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
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <OnlineShop/>
      <OurServices/>
      <Projects/>
      <WhyChooseUs/>
      <LatestVids/>
      <LatestBlog/>
      <TestimonialSection/>
      <LongImg/>
      <Footer/>
    </div>
  )
}

export default Page1
