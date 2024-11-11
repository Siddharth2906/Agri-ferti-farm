import React, { useContext } from 'react'
import Nav from './Components/Nav'
import CompanyHeader from './Components/CompanyHeader'
import FarmerSignUpForm from './Components/FarmerSignUpForm'
import MyContext from './Context/MyContext'
import CompanySidebar from './Components/CompanySidebar'
// import FarmerSignUpForm from './Components/FarmerSignUpForm'

const CompanyCorner = () => {
  const {isOpen,setIsOpen,toggleSidebar} = useContext(MyContext);
  return (
   <>
   <Nav/>
   <CompanyHeader/>
   {isOpen?<CompanySidebar/>:""}
   <FarmerSignUpForm/>
   </>
  )
}

export default CompanyCorner