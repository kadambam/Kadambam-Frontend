import React from 'react'
import Navbar from './Navbar'
import HeroSection from './Hero'
import OnlineShop from './OnlineShop'
import OurServices from './Services'
import Projects from './Projects'
import WhyChooseUs from './WhyChooseUs'
import LatestVids from './LatestVids'
import LatestBlog from './LatestBlogs'

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
    </div>
  )
}

export default Page1
