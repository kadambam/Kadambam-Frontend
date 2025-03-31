import React from 'react'


import OnlineShopping from './Hero'
import HowWeWork from './HowWeWork'
import FloorPlanSection from './FloorPlan'
import FloorPlan2D from './FloorPlan2d'
import ExteriorDesigns from './ExteriorDesigns'
import ExteriorImg from './ExteriorImg'
import InteriorDesigns from './InteriorDesign'
import InteriorImg from './InterirorImg'
import InteriorCategories from './InteriorCategories'
import BenefitsSection from './BenefitsSection'
import ContactUs from './Contact'
import LatestBlog from './Blogs'
import FAQSection from './FaqSection'
import Footer from '../Page-1/Footer'
import NavbarBlack from '../Page-2/NavbarBlack'
// import NavbarBlack from '../Page-2/Navbar'



const Page4 = () => {
  return (
    <div> 
      <NavbarBlack/>
      <OnlineShopping/>
      <HowWeWork/>
      <FloorPlanSection/>
      <FloorPlan2D/>
      <ExteriorDesigns/>
      <ExteriorImg/>
      <InteriorDesigns/>
      <InteriorImg/>
      <InteriorCategories/>
      <BenefitsSection/>
      <ContactUs/>
      <LatestBlog/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default Page4