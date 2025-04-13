import React from 'react'
import HeroSection from './Hero'
import ServicesSection from './Services'
import ServicesSection1 from './Services1'
import Inspiration from './Insipiration'
import PricingPage from '../Page-2/PricingPlans'
import LatestVids from './LatestVids'
import HowWeWork from './HowWeWork'
import WhyChooseUs from './WhyChooseUs'
import LatestBlog from './LatestBlog'
import FAQSection from './FaqSection'
import LongImg from './LongImg'
import Footer from '../Page-1/Footer'
import Navbar from './Navbar'
import InteriorImg from './InterirorImg'
import TabbedNav from './TabbedNav'



// import NavbarBlack from '../Page-2/Navbar'




const Page3 = () => {
  return (
    <div>
      
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
  <TabbedNav/>
      <ServicesSection1/>
      <Inspiration/>
      <InteriorImg/>
      <PricingPage/>
      <LatestVids/>
      {/* <HowWeWork/> */}
{/* <WhyChooseUs/> */}
<LatestBlog/>
<FAQSection/>
<LongImg/>
<Footer/>
    </div>
  )
}

export default Page3
