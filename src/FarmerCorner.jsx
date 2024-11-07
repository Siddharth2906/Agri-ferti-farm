import React from 'react'
import FarmerHeader from './Components/FarmerHeader'
import Nav from './Components/Nav'
import Content4 from './Components/Content4'
import Content3 from './Components/Content3'
import Footer from './Components/Footer'
import Content5 from './Components/Content5'

const FarmerCorner = () => {
  return (
   <>
   <Nav/>
   <FarmerHeader/>
   <Content5/>
   <Content3/>
   <Content4/>
   <Footer/>
   <Nav/>
   </>
  )
}

export default FarmerCorner