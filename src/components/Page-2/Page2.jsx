import React from 'react'

import ArchitectDesign from './ArchitectDesign'
import Navbar from '../Page-1/Navbar'
import TabbedNav from './TabbedNav'
import PricingPage from './pricingPlans'


const Page2 = () => {
  return (
    <div> 
      <Navbar/>
      <ArchitectDesign/>
      <TabbedNav/>
      <PricingPage/>
    </div>
  )
}

export default Page2
