import React from 'react'
import HeroSection from './Hero'
import ServicesSection from './Services'
import ServicesSection1 from './Services1'
import Inspiration from './Insipiration'
import PricingPage from '../Page-2/PricingPlans'
import LatestBlog from '../Page-1/LatestBlogs'
import WhyChooseUs from '../Page-1/WhyChooseUs'

const Page3 = () => {
  return (
    <div>
      <HeroSection/>
      <ServicesSection/>
      <ServicesSection1/>
      <Inspiration/>
      <PricingPage/>
      <LatestBlog/>
      <WhyChooseUs/>
    </div>
  )
}

export default Page3
