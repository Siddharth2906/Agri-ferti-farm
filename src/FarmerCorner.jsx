import React from 'react'
import FarmerHeader from './Components/FarmerHeader'
import Nav from './Components/Nav'
import Content4 from './Components/Content4'
import Content3 from './Components/Content3'
import Footer from './Components/Footer'
import Content5 from './Components/Content5'
import { useContext } from 'react'
import MyContext from './Context/MyContext'
import FarmerSidebar from './Components/FarmerSidebar'
import Rights from './Components/Rights'
import { Outlet } from 'react-router-dom'

const FarmerCorner = () => {
  const {isOpen,setIsOpen,toggleSidebar}=useContext(MyContext)
  return (
   <>
   <Nav/>
   <FarmerHeader/>
   {isOpen? <FarmerSidebar/>:""}
  <Outlet/>
   <Footer/>
  <Rights/>
   </>
  )
}

export default FarmerCorner