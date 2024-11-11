import React, { useContext } from 'react'
import Nav from './Components/Nav'
import MartHeader from './Components/MartHeader'
import Content2 from './Components/Content2'
import Footer from './Components/Footer'
import Rights from './Components/Rights'
import MartSidebar from './Components/MartSidebar'
import MyContext from './Context/MyContext'

const Agrimart = () => {
  const {isOpen,setIsOpen,toggleSidebar} = useContext(MyContext);
  return (
    <>
    <Nav/>
    <MartHeader/>
    {isOpen?<MartSidebar/>:""}
    <Content2/>
    <Footer/>
    <Rights/>

    </>
  )
}

export default Agrimart