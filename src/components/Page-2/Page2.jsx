import React from 'react'

import ArchitectDesign from './ArchitectDesign'
import Navbar from '../Page-1/Navbar'
import TabbedNav from './TabbedNav'
import PricingPage from './PricingPlans'
import DesignProcess from './DesignProcess'
import ExteriorDesigns from './ExteriorDesigns'
import Footer from '../Page-1/Footer'
import LongImg from '../Page-1/LongImg'


const Page2 = () => {
  return (
    <div> 
      <Navbar/>
      <ArchitectDesign/>
      <TabbedNav/>
      <PricingPage/>
      <DesignProcess/>
      <ExteriorDesigns/>
      <LongImg/>
      <Footer/>
    </div>
  )
}

export default Page2
