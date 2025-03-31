import React from 'react'

import ArchitectDesign from './ArchitectDesign'

import TabbedNav from './TabbedNav'
import PricingPage from './PricingPlans'

import ExteriorDesigns from './ExteriorDesigns'
import Footer from '../Page-1/Footer'
import LongImg from '../Page-1/LongImg'
import NavbarBlack from './NavbarBlack'

import InteriorDesigns from './InteriorDesigns'

import ImageGrid from './Hero'
import InfogramProcess from './Infogramprocess'


const Page2 = () => {
  return (
    <div> 
      <NavbarBlack/>
      <ArchitectDesign/>
      <ImageGrid/>
      <TabbedNav/>
      <PricingPage/>
      <InfogramProcess/>
      <ExteriorDesigns/>
      <InteriorDesigns/>
      <LongImg/>
      <Footer/>
    </div>
  )
}

export default Page2
