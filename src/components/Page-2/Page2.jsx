import React from 'react'

import ArchitectDesign from './ArchitectDesign'

import TabbedNav from './TabbedNav'
import PricingPage from './PricingPlans'
import DesignProcess from './DesignProcess'
import ExteriorDesigns from './ExteriorDesigns'
import Footer from '../Page-1/Footer'
import LongImg from '../Page-1/LongImg'
import NavbarBlack from './Navbar'
import Hexagon from './Hero'


const Page2 = () => {
  return (
    <div> 
      <NavbarBlack/>
      <ArchitectDesign/>
      <Hexagon/>
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
